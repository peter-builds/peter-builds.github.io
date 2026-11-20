/* Peter Builds / The Build Manual
   Numbers notebook entries as build steps per project (oldest = 01),
   builds the notebook's step index, keyboard step-through (J / K),
   and fills the home page's "latest step" panel from notebook.html.
   New entries need no extra work: paste a new <article class="notebook-entry">
   at the top of the list and everything renumbers itself. */
(function () {
    'use strict';

    var pad = function (n) { return (n < 10 ? '0' : '') + n; };
    var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
    var slug = function (s) { return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); };

    function projectOf(article) {
        var meta = article.querySelector('.entry-meta');
        if (!meta) return { name: 'Notebook', detail: '' };
        var detail = meta.querySelector('span');
        var name = '';
        meta.childNodes.forEach(function (node) {
            if (node.nodeType === 3) name += node.textContent;
        });
        return { name: name.trim() || 'Notebook', detail: detail ? detail.textContent.trim() : '' };
    }

    /* Returns entries in page order with project, step number and id. */
    function numberSteps(root) {
        var articles = Array.prototype.slice.call(root.querySelectorAll('.notebook-entry'));
        var counts = {};
        var info = articles.map(function (a) { return { el: a, project: projectOf(a) }; });
        for (var i = info.length - 1; i >= 0; i--) {
            var key = info[i].project.name;
            counts[key] = (counts[key] || 0) + 1;
            info[i].step = counts[key];
            info[i].label = pad(counts[key]);
            info[i].id = 'step-' + slug(key) + '-' + info[i].label;
        }
        return info;
    }

    function textOf(el) { return el ? el.textContent.replace(/\s+/g, ' ').trim() : ''; }

    function takeawayOf(article) {
        var boxes = article.querySelectorAll('.entry-notes > div');
        var last = boxes[boxes.length - 1];
        return last ? textOf(last.querySelector('p')) : '';
    }

    /* ---------- Notebook page ---------- */
    function initNotebook() {
        var list = document.querySelector('.notebook-list');
        if (!list) return;
        var steps = numberSteps(list);
        if (!steps.length) return;

        steps.forEach(function (s, idx) {
            var a = s.el;
            a.id = s.id;
            a.setAttribute('data-step', s.label);
            var meta = a.querySelector('.entry-meta');
            if (meta) meta.setAttribute('data-step-label', s.label);
            if (idx === 0) a.classList.add('is-latest');
            a.querySelectorAll('.entry-gallery figure').forEach(function (fig, f) {
                fig.setAttribute('data-edge', 'S' + s.label + ' / F' + pad(f + 1));
            });
            a.querySelectorAll('.entry-notes p').forEach(function (p) {
                if (textOf(p).toUpperCase() === 'PENDING') {
                    p.innerHTML = '<span class="pending">PENDING</span>';
                }
            });
        });

        var index = document.querySelector('.step-index');
        if (index) {
            var groups = [];
            var byName = {};
            steps.forEach(function (s) {
                if (!byName[s.project.name]) {
                    byName[s.project.name] = [];
                    groups.push(s.project.name);
                }
                byName[s.project.name].push(s);
            });
            index.innerHTML = groups.map(function (name) {
                var items = byName[name].slice().reverse();
                return '<section><h2><b>' + esc(name) + '</b> / ' + items.length + ' steps</h2><ol>' +
                    items.map(function (s) {
                        return '<li><a href="#' + s.id + '"' + (s.el.classList.contains('is-latest') ? ' class="is-latest"' : '') +
                            ' aria-label="' + esc(name + ' step ' + s.label + ': ' + textOf(s.el.querySelector('h2'))) + '">' + s.label + '</a></li>';
                    }).join('') + '</ol></section>';
            }).join('');
            index.classList.add('is-ready');
            var hint = document.querySelector('.key-hint');
            if (hint) hint.hidden = false;
        }

        document.addEventListener('keydown', function (e) {
            if (e.metaKey || e.ctrlKey || e.altKey) return;
            var tag = (e.target.tagName || '').toLowerCase();
            if (tag === 'input' || tag === 'textarea' || tag === 'select' || e.target.isContentEditable) return;
            var k = e.key.toLowerCase();
            if (k !== 'j' && k !== 'k') return;
            var y = window.scrollY + 40;
            var current = 0;
            steps.forEach(function (s, i) { if (s.el.offsetTop <= y) current = i; });
            var next = k === 'j' ? Math.min(current + 1, steps.length - 1) : Math.max(current - 1, 0);
            if (k === 'j' && steps[0].el.offsetTop > y) next = 0;
            var target = steps[next];
            history.replaceState(null, '', '#' + target.id);
            target.el.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
            target.el.querySelector('h2') && target.el.setAttribute('tabindex', '-1');
            target.el.focus({ preventScroll: true });
        });
    }

    /* ---------- Home: latest step panel ---------- */
    function initHome() {
        var panel = document.querySelector('[data-latest-step]');
        if (!panel || !window.fetch || !window.DOMParser) return;
        fetch('notebook.html', { cache: 'no-cache' })
            .then(function (r) { if (!r.ok) throw new Error(r.status); return r.text(); })
            .then(function (html) {
                var doc = new DOMParser().parseFromString(html, 'text/html');
                var steps = numberSteps(doc);
                if (!steps.length) return;
                var latest = steps[0];
                var a = latest.el;

                set('[data-field="project"]', latest.project.name);
                set('[data-field="detail"]', latest.project.detail);
                set('[data-field="step"]', latest.label);
                set('[data-field="title"]', textOf(a.querySelector('h2')));

                var take = takeawayOf(a);
                var takeEl = panel.querySelector('[data-field="takeaway"]');
                if (takeEl) {
                    if (!take || take.toUpperCase() === 'PENDING') takeEl.innerHTML = '<span class="pending">PENDING</span>';
                    else takeEl.textContent = take;
                }

                var parts = a.querySelectorAll('.entry-parts li');
                var partsBox = panel.querySelector('[data-field="parts"]');
                if (partsBox) {
                    if (parts.length) {
                        partsBox.innerHTML = Array.prototype.map.call(parts, function (li) {
                            return '<li>' + esc(textOf(li)) + '</li>';
                        }).join('');
                        partsBox.closest('.box').hidden = false;
                    } else {
                        partsBox.closest('.box').hidden = true;
                    }
                }

                var link = panel.querySelector('[data-field="link"]');
                if (link) link.setAttribute('href', 'notebook.html#' + latest.id);

                /* Photo: this step's lead figure, else the newest earlier step in the same project that has one. */
                var source = null;
                var sourceStep = null;
                for (var i = 0; i < steps.length && !source; i++) {
                    if (steps[i].project.name !== latest.project.name) continue;
                    var fig = steps[i].el.querySelector('.entry-gallery figure[data-lead]');
                    if (fig && fig.querySelector('img')) { source = fig; sourceStep = steps[i]; }
                }
                var frame = panel.querySelector('.frame');
                if (source && frame) {
                    var img = source.querySelector('img');
                    var target = frame.querySelector('img');
                    var src = img.getAttribute('src');
                    if (target.getAttribute('src') !== src) {
                        target.setAttribute('src', src);
                        target.setAttribute('alt', img.getAttribute('alt') || '');
                    }
                    var callouts = source.querySelector('.callouts');
                    var mine = frame.querySelector('.callouts');
                    if (callouts && mine) mine.innerHTML = callouts.innerHTML;
                    var cap = frame.querySelector('[data-field="caption"]');
                    if (cap) cap.textContent = textOf(source.querySelector('figcaption'));
                    var from = frame.querySelector('[data-field="photo-step"]');
                    if (from) from.textContent = sourceStep === latest ? 'Step ' + latest.label : 'Photo from step ' + sourceStep.label;
                }
            })
            .catch(function () { /* static fallback stays in place */ });

        function set(sel, value) {
            var el = panel.querySelector(sel);
            if (el && value) el.textContent = value;
        }
    }

    initNotebook();
    initHome();
})();

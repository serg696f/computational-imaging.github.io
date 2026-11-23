/* CISym diagram viewer: adds an "Open full screen" button with zoom and pan to every .cisym-diagram box. */
(function () {
  var css = [
    '.cisym-diagram{background:#FAFAF8;border:1px solid #DDD6C8;border-radius:6px;padding:8px;position:relative}',
    '.cisym-diagram div.highlighter-rouge,.cisym-diagram div.highlight,.cisym-diagram pre,.cisym-diagram .mermaid,.cisym-diagram code{background:#FAFAF8 !important;box-shadow:none !important;border:0 !important}',
    '.cisym-diagram,.cisym-diagram *,.cisym-overlay,.cisym-overlay *{font-family:Arial,Helvetica,sans-serif !important}',
    '.cisym-diagram svg{max-width:100% !important;height:auto !important}',
    '.cisym-open{display:block;margin:0 0 8px 0;padding:8px 14px;background:#C96A00;color:#fff;border:0;border-radius:4px;font-size:15px;cursor:pointer}',
    '.cisym-open:hover{background:#a85800}',
    '.cisym-overlay{position:fixed;left:0;top:0;right:0;bottom:0;z-index:99999;background:#FAFAF8;display:flex;flex-direction:column}',
    '.cisym-bar{display:flex;gap:8px;align-items:center;padding:8px 12px;background:#1B3A6B;color:#fff;flex:0 0 auto}',
    '.cisym-bar button{padding:6px 14px;font-size:16px;border:0;border-radius:4px;background:#EBF0F8;color:#1B3A6B;cursor:pointer}',
    '.cisym-bar span{margin-left:auto;font-size:14px}',
    '.cisym-stage{flex:1 1 auto;overflow:hidden;position:relative;cursor:grab;touch-action:none}',
    '.cisym-stage.drag{cursor:grabbing}',
    '.cisym-layer{position:absolute;left:0;top:0;transform-origin:0 0}'
  ].join('\n');
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  function natural(svg) {
    var vb = svg.viewBox && svg.viewBox.baseVal;
    if (vb && vb.width) return { w: vb.width, h: vb.height };
    var b = svg.getBoundingClientRect();
    return { w: b.width, h: b.height };
  }

  function openViewer(svg) {
    var n = natural(svg);
    var ov = document.createElement('div'); ov.className = 'cisym-overlay';
    ov.innerHTML = '<div class="cisym-bar"><button data-a="in">+</button><button data-a="out">&minus;</button>' +
      '<button data-a="fit">Fit width</button><button data-a="close">Close (Esc)</button>' +
      '<span>Scroll or pinch to zoom. Drag to move.</span></div><div class="cisym-stage"><div class="cisym-layer"></div></div>';
    var stage = ov.querySelector('.cisym-stage'), layer = ov.querySelector('.cisym-layer');
    var c = svg.cloneNode(true);
    c.removeAttribute('style'); c.setAttribute('width', n.w); c.setAttribute('height', n.h);
    c.style.maxWidth = 'none'; c.style.height = n.h + 'px'; c.style.width = n.w + 'px';
    layer.appendChild(c);
    document.body.appendChild(ov);
    var prevOverflow = document.body.style.overflow; document.body.style.overflow = 'hidden';
    var k = 1, x = 0, y = 0;
    function apply() { layer.style.transform = 'translate(' + x + 'px,' + y + 'px) scale(' + k + ')'; }
    function fit() { var W = stage.clientWidth; k = Math.min(W / n.w * 0.98, 3); x = (W - n.w * k) / 2; y = 10; apply(); }
    function zoomAt(f, cx, cy) {
      var nk = Math.max(0.1, Math.min(8, k * f)); f = nk / k;
      x = cx - (cx - x) * f; y = cy - (cy - y) * f; k = nk; apply();
    }
    function close() { document.removeEventListener('keydown', key); document.body.style.overflow = prevOverflow; ov.remove(); }
    function key(e) {
      if (e.key === 'Escape') close();
      else if (e.key === '+' || e.key === '=') zoomAt(1.25, stage.clientWidth / 2, stage.clientHeight / 2);
      else if (e.key === '-') zoomAt(0.8, stage.clientWidth / 2, stage.clientHeight / 2);
    }
    document.addEventListener('keydown', key);
    ov.querySelector('.cisym-bar').addEventListener('click', function (e) {
      var a = e.target.getAttribute && e.target.getAttribute('data-a');
      if (a === 'close') close(); else if (a === 'fit') fit();
      else if (a === 'in') zoomAt(1.25, stage.clientWidth / 2, stage.clientHeight / 2);
      else if (a === 'out') zoomAt(0.8, stage.clientWidth / 2, stage.clientHeight / 2);
    });
    stage.addEventListener('wheel', function (e) {
      e.preventDefault();
      var r = stage.getBoundingClientRect();
      zoomAt(e.deltaY < 0 ? 1.15 : 1 / 1.15, e.clientX - r.left, e.clientY - r.top);
    }, { passive: false });
    var pts = {}, lastDist = 0;
    stage.addEventListener('pointerdown', function (e) { stage.setPointerCapture(e.pointerId); pts[e.pointerId] = { x: e.clientX, y: e.clientY }; stage.classList.add('drag'); lastDist = 0; });
    stage.addEventListener('pointermove', function (e) {
      var p = pts[e.pointerId]; if (!p) return;
      var ids = Object.keys(pts);
      if (ids.length === 1) { x += e.clientX - p.x; y += e.clientY - p.y; apply(); }
      pts[e.pointerId] = { x: e.clientX, y: e.clientY };
      if (ids.length === 2) {
        var a = pts[ids[0]], b = pts[ids[1]], d = Math.hypot(a.x - b.x, a.y - b.y);
        if (lastDist) { var r = stage.getBoundingClientRect(); zoomAt(d / lastDist, (a.x + b.x) / 2 - r.left, (a.y + b.y) / 2 - r.top); }
        lastDist = d;
      }
    });
    function up(e) { delete pts[e.pointerId]; lastDist = 0; if (!Object.keys(pts).length) stage.classList.remove('drag'); }
    stage.addEventListener('pointerup', up); stage.addEventListener('pointercancel', up);
    fit();
  }

  function setup(box) {
    var svg = box.querySelector('svg');
    if (!svg || box.getAttribute('data-ready')) return;
    box.setAttribute('data-ready', '1');
    var btn = document.createElement('button');
    btn.type = 'button'; btn.className = 'cisym-open';
    btn.textContent = 'Open full screen (zoom and pan)';
    box.insertBefore(btn, box.firstChild);
    btn.addEventListener('click', function () { openViewer(box.querySelector('svg')); });
    svg.style.cursor = 'zoom-in';
    svg.addEventListener('click', function () { openViewer(svg); });
  }
  function scan() { var b = document.querySelectorAll('.cisym-diagram'); for (var i = 0; i < b.length; i++) setup(b[i]); }
  new MutationObserver(scan).observe(document.documentElement, { childList: true, subtree: true });
  document.addEventListener('DOMContentLoaded', scan);
  scan();
})();

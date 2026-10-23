// Nordaurai home: wave wipe (mobile menu, section jumps), program tabs, mobile bottom bar. No libraries.
document.documentElement.classList.add('js');

// Wave wipe: mobile menu overlay and in-page section jumps happen under an indigo curtain
(function () {
  var wipe = document.querySelector('.wipe');
  var button = document.querySelector('.menu-toggle');
  var panel = document.getElementById('menu-panel');
  var close = panel && panel.querySelector('.menu-close');
  if (!wipe || !button || !panel || !close) return;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  var busy = false;

  // Move the curtain to a state and call done when the transform ends.
  function slide(state, done) {
    var finished = false;
    var timer;
    function end(e) {
      if (finished || (e && (e.target !== wipe || e.propertyName !== 'transform'))) return;
      finished = true;
      wipe.removeEventListener('transitionend', end);
      clearTimeout(timer);
      done();
    }
    wipe.addEventListener('transitionend', end);
    timer = setTimeout(end, 700); // transitionend may never fire (background tab, interrupted transition)
    wipe.setAttribute('data-state', state);
  }

  // Run change() while the screen is covered, then let the curtain leave to the left.
  // instant: the menu overlay is already indigo, so the curtain can jump to cover.
  function wipeThrough(instant, change) {
    if (busy) return;
    if (reduce.matches) return change();
    busy = true;
    function covered() {
      change();
      setTimeout(function () {
        slide('leave', function () {
          wipe.removeAttribute('data-state');
          busy = false;
        });
      }, 100);
    }
    if (instant) {
      wipe.setAttribute('data-state', 'hold');
      covered();
    } else {
      slide('cover', covered);
    }
  }

  function setMenu(open) {
    button.setAttribute('aria-expanded', String(open));
    panel.hidden = !open;
    // Lock page scroll behind the open menu
    document.documentElement.style.overflow = open ? 'hidden' : '';
    Array.prototype.forEach.call(document.body.children, function (el) {
      if (el !== panel && el !== wipe) el.inert = open;
    });
  }

  function closeMenu() {
    wipeThrough(true, function () {
      setMenu(false);
      button.focus();
    });
  }

  button.addEventListener('click', function () {
    if (busy) return;
    function open() {
      setMenu(true);
      close.focus();
    }
    if (reduce.matches) return open();
    busy = true;
    slide('cover', function () {
      open();
      wipe.removeAttribute('data-state');
      busy = false;
    });
  });
  close.addEventListener('click', closeMenu);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !panel.hidden) closeMenu();
  });

  function onAnchor(e) {
    var link = e.target.closest('a[href^="#"]');
    if (!link || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var target = document.getElementById(link.getAttribute('href').slice(1));
    if (!target) return;
    e.preventDefault();
    var fromMenu = !panel.hidden;
    wipeThrough(fromMenu, function () {
      if (fromMenu) setMenu(false);
      target.scrollIntoView();
      history.pushState(null, '', '#' + target.id);
      target.tabIndex = -1;
      target.focus({ preventScroll: true });
    });
  }
  panel.addEventListener('click', onAnchor);
  var nav = document.querySelector('.header-nav');
  if (nav) nav.addEventListener('click', onAnchor);
})();

// Program tabs (ARIA tabs pattern, automatic activation, roving tabindex)
(function () {
  var tablist = document.querySelector('[role="tablist"]');
  if (!tablist) return;
  var tabs = Array.prototype.slice.call(tablist.querySelectorAll('[role="tab"]'));
  if (!tabs.length) return;

  function select(tab) {
    tabs.forEach(function (t) {
      var selected = t === tab;
      t.setAttribute('aria-selected', String(selected));
      t.tabIndex = selected ? 0 : -1;
      var panel = document.getElementById(t.getAttribute('aria-controls'));
      if (panel) panel.hidden = !selected;
    });
  }

  tabs.forEach(function (tab, i) {
    tab.addEventListener('click', function () { select(tab); });
    tab.addEventListener('keydown', function (e) {
      var next = null;
      if (e.key === 'ArrowRight') next = tabs[(i + 1) % tabs.length];
      else if (e.key === 'ArrowLeft') next = tabs[(i - 1 + tabs.length) % tabs.length];
      else if (e.key === 'Home') next = tabs[0];
      else if (e.key === 'End') next = tabs[tabs.length - 1];
      if (!next) return;
      e.preventDefault();
      select(next);
      next.focus();
    });
  });

  select(tabs.filter(function (t) { return t.getAttribute('aria-selected') === 'true'; })[0] || tabs[0]);
})();

// Mobile bottom bar: visible once the hero has left the viewport
(function () {
  var bar = document.querySelector('.bottom-bar');
  var hero = document.querySelector('.hero');
  if (!bar || !hero) return;
  if (!('IntersectionObserver' in window)) {
    bar.classList.add('is-visible');
    return;
  }
  new IntersectionObserver(function (entries) {
    bar.classList.toggle('is-visible', !entries[0].isIntersecting);
  }).observe(hero);
})();

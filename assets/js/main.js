/* Astroindo — landing page interactions */
(function () {
  "use strict";

  /* ---- Current year ---- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- Scroll reveal ---- */
  var reveal = document.querySelectorAll(".fade-in-up");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveal.forEach(function (el) { io.observe(el); });
  } else {
    reveal.forEach(function (el) { el.classList.add("visible"); });
  }

  /* ---- Scroll progress bar ---- */
  var bar = document.getElementById("scrollProgress");
  function onScroll() {
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    var pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
    if (bar) bar.style.width = pct + "%";
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Mobile menu ---- */
  var menuBtn = document.getElementById("menuBtn");
  var menu = document.getElementById("mobileMenu");
  var menuIcon = document.getElementById("menuIcon");
  if (menuBtn && menu) {
    menuBtn.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(open));
      if (menuIcon) menuIcon.textContent = open ? "close" : "menu";
    });
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        menu.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
        if (menuIcon) menuIcon.textContent = "menu";
      });
    });
  }

  /* ---- Starfield (subtle, astro theme) ---- */
  var stars = document.getElementById("stars");
  if (stars && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var COUNT = 16;
    var frag = document.createDocumentFragment();
    for (var i = 0; i < COUNT; i++) {
      var s = document.createElement("span");
      s.className = "star" + (i % 3 === 0 ? " gray" : "");
      s.style.left = Math.random() * 100 + "%";
      s.style.top = Math.random() * 88 + "%";
      var size = (Math.random() * 2 + 1.5).toFixed(1);
      s.style.width = size + "px";
      s.style.height = size + "px";
      s.style.animationDelay = (Math.random() * 4).toFixed(2) + "s";
      s.style.animationDuration = (Math.random() * 3 + 3).toFixed(2) + "s";
      frag.appendChild(s);
    }
    stars.appendChild(frag);
  }
})();

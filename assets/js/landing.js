/*
 * Landing page interactions:
 *  - Typing headline that cycles through roles.
 *  - Scroll-reveal via IntersectionObserver.
 * Respects prefers-reduced-motion.
 */
(function () {
  "use strict";

  var reduceMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------------------------------------------------- Typing effect */
  function initTyping() {
    var el = document.querySelector("[data-typed]");
    if (!el) return;

    var roles;
    try {
      roles = JSON.parse(el.getAttribute("data-typed"));
    } catch (e) {
      roles = ["Software Engineer"];
    }
    if (!roles.length) return;

    if (reduceMotion) {
      el.textContent = roles[0];
      return;
    }

    var roleIndex = 0;
    var charIndex = 0;
    var deleting = false;

    function tick() {
      var current = roles[roleIndex];
      if (!deleting) {
        charIndex++;
        el.textContent = current.slice(0, charIndex);
        if (charIndex === current.length) {
          deleting = true;
          return setTimeout(tick, 1400);
        }
        return setTimeout(tick, 90);
      } else {
        charIndex--;
        el.textContent = current.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          return setTimeout(tick, 350);
        }
        return setTimeout(tick, 45);
      }
    }
    tick();
  }

  /* --------------------------------------------------------- Scroll reveal */
  function initReveal() {
    var items = document.querySelectorAll(".lp-reveal");
    if (!items.length) return;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      items.forEach(function (el) {
        el.classList.add("lp-visible");
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("lp-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    items.forEach(function (el) {
      observer.observe(el);
    });
  }

  function init() {
    initTyping();
    initReveal();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

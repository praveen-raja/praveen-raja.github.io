/*
 * Light/Dark theme toggle for the Minimal Mistakes "dark" skin.
 *
 * - Default theme is "dark" (matches minimal_mistakes_skin: dark).
 * - The chosen theme is stored in localStorage and applied via the
 *   data-theme attribute on <html>. Light-mode overrides live in
 *   assets/css/theme-toggle.css under [data-theme="light"].
 * - A floating button is injected on every page so the control is always
 *   available regardless of screen size.
 */
(function () {
  "use strict";

  var STORAGE_KEY = "theme";
  var DARK = "dark";
  var LIGHT = "light";

  function getStoredTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY) || DARK;
    } catch (e) {
      return DARK;
    }
  }

  function storeTheme(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {
      /* ignore storage errors (e.g. private mode) */
    }
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    updateButton(theme);
  }

  var button;

  function updateButton(theme) {
    if (!button) return;
    var isDark = theme === DARK;
    // Show the icon for the mode you will switch TO.
    button.innerHTML = isDark ? "\u2600\uFE0F" : "\uD83C\uDF19"; // sun : moon
    var label = isDark ? "Switch to light mode" : "Switch to dark mode";
    button.setAttribute("aria-label", label);
    button.setAttribute("title", label);
    button.setAttribute("aria-pressed", isDark ? "false" : "true");
  }

  function toggleTheme() {
    var current = document.documentElement.getAttribute("data-theme") || DARK;
    var next = current === DARK ? LIGHT : DARK;
    applyTheme(next);
    storeTheme(next);
  }

  function createButton() {
    button = document.createElement("button");
    button.id = "theme-toggle";
    button.type = "button";
    button.className = "theme-toggle";
    button.addEventListener("click", toggleTheme);
    document.body.appendChild(button);
    updateButton(getStoredTheme());
  }

  function init() {
    // The early inline script in head/custom.html already set the attribute;
    // ensure it is consistent, then build the control.
    applyTheme(getStoredTheme());
    createButton();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

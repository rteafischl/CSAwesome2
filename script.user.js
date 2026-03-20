// ==UserScript==
// @name        Auto scroll to relevant output section
// @namespace   https://github.com/fischlrock/CSAwesome2
// @match       https://runestone.academy/ns/books/published/*
// @icon        https://runestone.academy/runestone/static/favicon.ico
// @grant       none
// @version     1.0
// @author      -
// @description -
// @updateURL   https://github.com/fischlrock/CSAwesome2/raw/refs/heads/main/script.user.js
// @downloadURL https://github.com/fischlrock/CSAwesome2/raw/refs/heads/main/script.user.js
// @supportURL  https://github.com/fischlrock/CSAwesome2/issues
// ==/UserScript==

let debounce = false;

window.addEventListener("keydown", (event) => {
  if (!debounce && event.ctrlKey && event.key === "Enter") {
    let activity = $(".CodeMirror-focused").parent().parent().parent();
    let wrapper = $(".CodeMirror-focused").parent().parent();
    let actions = wrapper.find(".ac_actions");
    let runBtn = actions.find(".run-button");
    let output = wrapper.find(".ac_output");
    let scrollPos = output.offset().top - $(window).height() / 2 + output.outerHeight() / 2;

    runBtn.click();
    $("html, body").animate(
      {
        scrollTop: scrollPos
      },
      300
    );
    debounce = true;
  }
});

window.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    debounce = false;
  }
});

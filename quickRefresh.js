// ==UserScript==
// @name         为TypingClub重新开始打字添加快捷键
// @namespace    https://github.com/Crazyokd/quickRefresh
// @version      1.0
// @description  按Ctrl+I重新开始打字
// @author       Rekord
// @match        *://*.edclub.com/sportal/*
// @match        *://*.typingclub.com/sportal/*
// @icon         https://static.typingclub.com/m/favicon.png
// @updateURL    https://github.com/Crazyokd/quickRefresh/raw/main/quickRefresh.js
// @downloadURL  https://github.com/Crazyokd/quickRefresh/raw/main/quickRefresh.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const setShortCut = ()=>{
        // console.log('add shortcut');
        document.addEventListener('keydown', function(event) {
            if (event.ctrlKey && event.key === "i") {
                // console.log('press ctrl+i');
                event.preventDefault();

                let refresh = document.querySelector('span.edicon-refresh');
                if (refresh) refresh.click();
                let retry = document.querySelector('.btn.navbar-goback');
                if (retry) retry.click();
            }
        });
    };
    window.onload = function() {
        // try to set shortcut
        setShortCut();
    }
})();

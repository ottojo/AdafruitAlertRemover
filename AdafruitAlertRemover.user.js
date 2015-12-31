// ==UserScript==
// @name         Adafruit Alert Remover
// @version      1.0
// @author       Jonas Otto
// @match        https://*.adafruit.com/*
// @match        http://*.adafruit.com/*
//@grant none
// ==/UserScript==

document.getElementById("messaging-alert").style.display = 'none';

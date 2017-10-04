// ==UserScript==
// @name         Adafruit Alert Remover
// @version      1.1
// @author       Jonas Otto
// @match        https://*.adafruit.com/*
// @match        http://*.adafruit.com/*
//@grant none
// ==/UserScript==

document.getElementsByClassName("messaging-alert").item(0).style.display = 'none';

// ==UserScript==
// @name        Auto-click Continue on Github SSO prompt
// @namespace   Violentmonkey Scripts
// @match       https://github.com/*
// @grant       none
// @version     1.0
// @author      flowsINtomAyHeM
// @description Clicks on the button, so you don't have to.
// ==/UserScript==


document.querySelector('body.session-authentication main > .org-sso button[type=submit]')?.click();
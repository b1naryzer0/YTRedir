// ==UserScript==
// @name         YTRedir
// @namespace    https://github.com/b1naryzer0/YTRedir/raw/main/ytredir.user.js
// @version      0.21
// @description  redirects any youtube link to invidious
// @author       b1naryzer0
// @match        *://*.youtube.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

var newDomain="invidious.namazso.eu"; // change this to your preferred invidious instance
var newURL=location.protocol + "//"
+ newDomain //-- location.host
+ location.pathname
+ location.search
+ location.hash
;
/*-- replace() puts the good page in the history instead of the
    bad page.
*/
location.replace (newURL);
})();



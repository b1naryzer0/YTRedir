// ==UserScript==
// @name        YTRedir
// @namespace    https://github.com/b1naryzer0/YTRedir
// @version      0.1
// @description  redirects from youtube.com to yewtu.be
// @author       b1naryzer0
// @match        *://*.youtube.com/*
// @run-at      document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

var newDomain="yewtu.be";
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



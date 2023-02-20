// ==UserScript==
// @name         YouTubeRedirector
// @namespace    https://github.com/b1naryzer0/YTRedir/edit/main/ytredir.user.js
// @version      0.22
// @description  redirects from YouTube to Invidious
// @author       b1naryzer0
// @match        *://*.youtube.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

// these are invidious instances you could use
// just pick one and exchange the value of newDomain in
// var newDomain="invidious.namazso.eu";
// with the invidious instance domain of your choice

/*
var newDomain="
ytprivate.com
invidious.snopyta.org
invidious.tube
tube.connect.cafe
yewtu.be
invidious.zapashcanon.fr
vid.puffyan.us
invidious.himiko.cloud
invidious.ethibox.fr
invidious.xyz
invidiou.site
invidious.kavin.rocks
inv.skyn3t.in
invidious.fdn.fr
invidious.namazso.eu
invidious.site
invidious.048596.xyz
vid.mint.lgbt
invidious.zee.li
";
*/

var newDomain="invidious.fdn.fr";
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



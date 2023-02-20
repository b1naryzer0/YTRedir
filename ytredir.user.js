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

/* these are invidious instances you could use
just pick one and exchange the value of newDomain in
var newDomain="invidious.namazso.eu";
with the invidious instance domain of your choice
ytprivate.com
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
invidious.site
invidious.048596.xyz
vid.mint.lgbt
invidious.zee.li

******* do not use these ********
invidious.snopyta.org => has problems
invidious.namazso.eu => has problems
*/

// ***************************************************************************
// METHOD 1
// ***************************************************************************
var newDomain="invidious.fdn.fr";
var newURL=location.protocol + "//"
+ newDomain //-- location.host
+ location.pathname
+ location.search
+ location.hash
;

location.replace (newURL);


// ***************************************************************************
// METHOD 2
// ***************************************************************************
/*
var url = window.location.toString();
if (url.indexOf("www.youtube.com") !== - 1) {
  window.location = url.replace("www.youtube.com", newDomain);
} else if (url.indexOf('www.youtu.be') !== - 1) {
    window.location = url.replace("www.youtu.be", newDomain);
}
*/

// ***************************************************************************
// END OF SCRIPT
// ***************************************************************************
})();



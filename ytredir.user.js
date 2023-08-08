// ==UserScript==
// @name         YouTubeRedirector
// @namespace    https://github.com/b1naryzer0/YTRedir/edit/main/ytredir.user.js
// @version      0.31
// @description  redirects from YouTube to Invidious
// @author       b1naryzer0
// @match        *://*.youtube.com/*
// @exclude       *://*.reddit.com/*
// @exclude       https://www.reddit.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

/* these are some invidious instances you could use
// put the one of your choice in the var newDomain
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
yt.artemislena.eu
yt.oelrichsgarcia.de
invidious.lunar.icu
iv.melmac.space
******* do not use these ********
invidious.snopyta.org => has problems
invidious.namazso.eu => has problems
watch.thekitty.zone => has problems
*/

/* also works with PIPED instances
piped.video
piped.kavin.rock
*/

var newDomain="iv.melmac.space";

// ***************************************************************************
// METHOD 1
// ***************************************************************************
// see https://docs.invidious.io/url-parameters/ for more

var newURL=location.protocol + "//"
+ newDomain //-- location.host
+ location.pathname
+ location.search
+ location.hash
+ "&listen=false"
+ "&autoplay=0"
// + "&quality=hd720"
+ "&quality=dash"
+ "&local=1"
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

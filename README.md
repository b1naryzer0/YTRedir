# YTRedir
A userscript to redirect every youtube query to the invidious instance of your choice.
This works for browser bar queries, google queries, direct youtube links itself ofc and inline videos on any website.
Use this with Tampermonkey or Greasemonkey in your browser.

YTRedir is a so called userscript which dynamically redirects YouTube videos in web pages to their Invidious pendants simply by replacing the domain string. If you aren't familiar with the concept of userscripts, I suggest that you 1st read about it here: https://en.wikipedia.org/wiki/Userscript

Invidious is an open source alternative front-end to YouTube - more information about it is available at https://invidious.io/

One can choose between different Invidious instances which fit one's needs. Choose an instance which reacts fast (best would be to choose one near your location / in your home country). If you like, you can even set up your own instance (which but would require a domain name and is completely out of the scope of this readme file). Write down it's domain name, for example 'y.com.sb'.

You'll also need a userscript manager for your browser to be able to use this script. Depending on your browser and likings you can choose between several of them. The most popular userscript managers there are today are 
https://github.com/Tampermonkey/tampermonkey
https://github.com/greasemonkey/greasemonkey

Install either Tamper- or Greasemonkey, create a new script and copy the content of ytredir.user.js into it. 

Now check the following line in the script:
var newDomain="invidious.namazso.eu"; 
Change this line according to your preferred invidious instance. For example, if this is 'y.com.sb', then change the line to:
var newDomain="y.com.sb";

Now save it in the userscript manager and check if it's working - navigate to some web pages with embedded YouTube links in it, click them and check if they are being redirected properly to your chosen invidious instance.

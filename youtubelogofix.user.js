// ==UserScript==
// @name     No Logo Link
// @version  1
// @grant    none
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @match https://www.youtube.com/*
// ==/UserScript==


function removeattributionlink() {
$("area").attr("href", "https://www.youtube.com/")
}

removeattributionlink();

setInterval(removeattributionlink, 2);

var logo = document.getElementById("lga");

var styles = logo.getElementsByTagName("style");

styles[0].innerHTML = "#hplogo{background:url(http://www.underconsideration.com/brandnew/archives/yahoo_logo_detail.png) no-repeat}@media (-webkit-max-device-pixel-ratio:1),(max-resolution:96dpi){#hplogo{background:url(/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png) no-repeat}}"

var buttonClass = document.getElementsByClassName('jsb');

var inputs = buttonClass[0].getElementsByTagName('input');

inputs[0].value = "Yahoo";

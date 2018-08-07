/* 
   Snoot Flowers Form Validation
   Author: Fernando Sarmiento
   Date: 08.06.18

   Filename: snoot.js
*/

"use strict";

//function to turn off select list defaults
function removeSelectDefaults() {
    var emptyBoxes = document.getElementsByTagName("select");
    alert("Select lists: " + emptyBoxes.length);
}

//enable load event handlers
if (window.addEventListener) {
    window.addEventListener("load", removeSelectDefaults, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", removeSelectDefaults);
}

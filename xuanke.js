// ==UserScript==
// @name         Xuanke
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://61.130.6.250:6379/gmlz/xsxk.aspx?xh=<studentID>&lb=A
// @grant        none
// @run-at document-start
// ==/UserScript==

(
    function xuanke() {
        'use strict';
        window.confirm = window.alert = function() {return ;}

        try{
            document.getElementById("/*courseID*/").checked = true;
            //document.getElementById("btnXK").click();
            __doPostBack('btnXK','');
        }
        catch(err){
            location.reload();
        }
        var i = self.setInterval("xuanke()", 200)
        // Your code here...
    }

)();

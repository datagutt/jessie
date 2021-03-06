/*global isHostMethod,global */

/*
Description:
Uses one of Internet Explorer's ActiveXObjects and gives support for IE5-IE6
*/

/*
Degrades:
IE4, NN4, Chrome, FF, Safari, Opera
*/

var createXhrFunctions = [
		function() {
          return new global.ActiveXObject("Microsoft.XMLHTTP");
        },
        // for fully patched Win2k SP4 and up
        function() {
          return new global.ActiveXObject("Msxml2.XMLHTTP.3.0");
        },
        // IE 6 users that have updated their msxml dll files.
        function() {
          return new global.ActiveXObject("Msxml2.XMLHTTP.6.0");
        }
	],
	createXhr,
	i;

for (i=createXhrFunctions.length; i--; ) {
	try {
		if (createXhrFunctions[i]()) {
			createXhr = createXhrFunctions[i];
		}
	}
	catch (e) {}
}
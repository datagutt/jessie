/*global html,isHostMethod */

/*
Description:
Relies on W3C `e.relatedTarget`
*/

/*
Degrades:
IE8, Opera 7.6
*/

var getEventTargetRelated;

if(html && isHostMethod(html, 'addEventListener')) {
	getEventTargetRelated = function(e) {
		var target = e.relatedTarget;
		// Check if not an element (e.g. a text node)
		if (1 != target.nodeType) {
			// Set reference to parent node (which must be an element)
			target = target.parentNode;
		}
		return target;
	};
}
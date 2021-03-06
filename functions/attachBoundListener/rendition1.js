/*global bind,attachListener */

/*
Description:
Relies on `jessie.bind` and `jessie.attachListener`
*/
var attachBoundListener;

if(bind && attachListener) {
	attachBoundListener = function(el, eventType, fn, thisObject) {
		var listener = bind(fn, thisObject);
		// TODO(shewitt): why is this here? Is there some kind of memory leak?
		thisObject = null;
		return attachListener(el, eventType, listener);
	};
}
/*global isInQuery:true,query */

if(query) {
	isInQuery = function(el, selector) {
		var isInQuery = false,
			queryElements = query(selector),
			i;

		for(i = 0; i < queryElements.length; i++) {
			if(queryElements[i] === el) {
				isInQuery = true;
				break;
			}
		}

		return isInQuery;
	};
}
define(['knockout', '/js/lp/lib/utils.js'], function (ko, lpUtils) {
	ko.bindingHandlers.appendClone = {
		init: function(element, valueAccessor) {
			jQuery(element).append(lpUtils.xmlStringifier(jQuery(ko.utils.unwrapObservable(valueAccessor)()).get(0)));
		},
		update: function(element, valueAccessor, allBindingsAccessor) { }
	};
});
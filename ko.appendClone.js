define(['knockout', '/js/lp/lib/utils.js'], function (ko, lpUtils) {
	ko.bindingHandlers.appendClone = {
		init: function(element, valueAccessor) {
			jQuery(element).append(jQuery(ko.utils.unwrapObservable(valueAccessor())).clone());
		},
		update: function(element, valueAccessor, allBindingsAccessor) { }
	};
});
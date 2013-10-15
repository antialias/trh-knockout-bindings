define(['knockout'], function (ko) {
	ko.bindingHandlers.append = {
		init: function(element, valueAccessor) {
			jQuery(element).append(ko.utils.unwrapObservable(valueAccessor));
		},
		update: function(element, valueAccessor, allBindingsAccessor) { }
	};
});
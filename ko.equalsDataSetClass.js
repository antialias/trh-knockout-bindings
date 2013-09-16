// for example:
// equalsDataSetClass: {active: {data:'category-type', equals: categoryTypeFilter}}
define(['knockout'], function (ko) {
	ko.bindingHandlers.equalsDataSetClass = {
		init: function(element, valueAccessor) {
		},
		update: function(element, valueAccessor, allBindingsAccessor) {
			var bindings = allBindingsAccessor();
			$.each(bindings.equalsDataSetClass, function(k, v) {
				var className = k;
				var data = $(element).data(v.data);
				var toCheckForEquality = ko.utils.unwrapObservable(v.equals);
				if (data == toCheckForEquality) {
					$(element).addClass(className);
				} else {
					$(element).removeClass(className);
				}
			});
		}
	};
});
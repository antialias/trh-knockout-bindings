define(['knockout', '/js/lp/lib/utils.js'], function (ko, lpUtils) {
	ko.bindingHandlers.lpcharcount = {
	    init: function(element, valueAccessor) {
			$charcount = $("<div>").addClass('charcount');
			$(element).after($charcount);
			$(element).data('$charcount', $charcount);
	    },
	    update: function(element, valueAccessor, allBindingsAccessor) {
			var numChars;
			if (allBindingsAccessor().value) {
				numChars = allBindingsAccessor().value().length;
			} else if (allBindingsAccessor().text) {
				numChars = allBindingsAccessor().text().length;
			} else if (allBindingsAccessor().html) {
				numChars = allBindingsAccessor().html().length;
			} else {
				numChars = $(element).text();
			}
			var maxFormatted = lpUtils.commaFormat(valueAccessor().max); // TODO: cache this somehow
			$(element).data('$charcount').text("" + lpUtils.commaFormat(numChars) + " / " + maxFormatted + " " + (numChars === 1 ? "char" : "chars"));
			if (numChars > valueAccessor().max) {
				$(element).addClass(valueAccessor().overLimitClass);
			} else {
				$(element).removeClass(valueAccessor().overLimitClass);
			}
	    }
	};
});
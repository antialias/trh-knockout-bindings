define([
	'knockout',
	'/js/lp/lib/utils.js'
], function (ko, lpUtils) {
	ko.bindingHandlers.validation = {
	    init: function(element, valueAccessor) {
			$.each(lpUtils.asArray(valueAccessor()), function (i, properties) {
				var $tooltipError = $("<div>").addClass('tooltip-error');
				$(element).data("$tooltip-error-" + properties.key, $tooltipError);
				$tooltipError.append($("<span>").html(properties.message));
				$tooltipError.append("<div>")
				$(element).after($tooltipError);
				if ("static" === $(element).parent().css('position')) {
					$(element).parent().css('position', 'relative'); // TRH: we are playing with fire here...
				}
			});
	    },
	    update: function(element, valueAccessor, allBindingsAccessor) {
			$.each(lpUtils.asArray(valueAccessor()), function (i, properties) {
				properties.errors.subscribe(function (newErrorsList) {
					if (-1 !== $.inArray(properties.key, newErrorsList)) {
						$(element).data("$tooltip-error-" + properties.key).show()
					} else {
						$(element).data("$tooltip-error-" + properties.key).hide()
					}
				});
			});
	    }
	};
});
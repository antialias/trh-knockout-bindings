define(['knockout'], function (ko) {
	ko.bindingHandlers.validation = {
	    init: function(element, valueAccessor) {
			var $tooltipError = $("<div>").addClass('tooltip-error');
			$(element).data("$tooltip-error", $tooltipError);
			$tooltipError.append($("<span>").html(valueAccessor().message));
			$tooltipError.append("<div>")
			$(element).after($tooltipError);
			if ("static" === $(element).parent().css('position')) {
				$(element).parent().css('position', 'relative'); // TRH: we are playing with fire here...
			}
	    },
	    update: function(element, valueAccessor, allBindingsAccessor) {
			valueAccessor().errors.subscribe(function (newErrorsList) {
				if (-1 !== $.inArray(valueAccessor().key, newErrorsList)) {
					$(element).data("$tooltip-error").show()
				} else {
					$(element).data("$tooltip-error").hide()
				}
			})
	    }
	};
});
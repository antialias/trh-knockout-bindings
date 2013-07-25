define(['knockout'], function (ko) {
	var windowURL = window.URL || window.webkitURL;
	ko.bindingHandlers.file = {
	    init: function(element, valueAccessor) {
	        if (window.FormData === undefined) {
	            $(element).change(function() {
	        		console.error("ko.file.js requires browser support for the file API");
	        	});
	        	return;
	        }
	        $(element).change(function() {
	            var file = this.files[0];
	            if (ko.isObservable(valueAccessor())) {
	                valueAccessor()(file);
	            }
	        });
	    },
	    update: function(element, valueAccessor, allBindingsAccessor) {
	        if (window.FormData === undefined) {
	        	return;
	        }
	        var file = ko.utils.unwrapObservable(valueAccessor());
	        var bindings = allBindingsAccessor();

			var ignoreFile = typeof file == "object" && file.ignore;
			if (!file) {
				return;
			}
	        if (!ignoreFile && bindings.fileObjectURL && ko.isObservable(bindings.fileObjectURL)) {
	            var oldUrl = bindings.fileObjectURL();
	            if (oldUrl) {
	                windowURL.revokeObjectURL(oldUrl);
	            }
	            bindings.fileObjectURL(file && windowURL.createObjectURL(file));
	        }

	        if (bindings.fileBinaryData && ko.isObservable(bindings.fileBinaryData)) {
	            if (!file) {
	                bindings.fileBinaryData(null);
	            } else {
	                var reader = new FileReader();
	                reader.onload = function(e) {
	                    bindings.fileBinaryData(e.target.result);
	                };
	                reader.readAsArrayBuffer(file);
	            }
	        }
	    }
	};
});
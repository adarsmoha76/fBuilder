var fBuilder = (function (element) {
	window._fBuilder_view_mode = false; // begins with with the edit mode;

	var fBuilderLoader = (function (element) {
		$(element).append(fBuilderGenerator.parseMainContainer);
		/* lets activate some elements */
		$('#fBuilder-container').css({ 'max-height': ((window.innerHeight - 50) < 450 ? 450 : (window.innerHeight - 50)) + 'px' });
		$('.fBuilder-page-switcher-container').addClass('active');

		/* lets attach some basic events */

		$(document)
			// page events
			.on('click', '#fBuilder-add-new-page-btn', function (e) { fBuilderGenerator.addNewPage(); })
			.on('click', 'label[for="fBuilder-toggle-view"]', function(e) { $('#fBuilder-toggle-view').trigger('clck'); })
			.on('change', '#fBuilder-toggle-view', fBuilderBasicEvents.toggleReadWrite)
			// page mini events
			.on('click', '.fBuilder-page-short-details', fBuilderBasicEvents.switchPage)
			.on('click', '.fBuilder-page-short-name-editor-remove-btn', fBuilderBasicEvents.closePage)
			// element events
			.on('click', '.fBuilder-remove-element-btn', fBuilderBasicEvents.removeElement)
			.on('click', '.fBuilder-move-up-btn', fBuilderBasicEvents.moveElementUp)
			.on('click', '.fBuilder-move-down-btn', fBuilderBasicEvents.moveElementDown)
			// element controls events
			.on('keyup keydown keypress', '.fBuilder-controlled-text-labels', function (evnt) {
				evnt.stopImmediatePropagation();
				evnt.stopPropagation();
				var me = $(this);
				$(me.attr('data-target')).html(me.val().trim() != '' ? me.val() : me.attr('placeholder'));
				delete me;
			});
	})(element);
	return {};
});


fBuilderBasicEvents = (function ($) {
	var _closePage = function (evnt) {
		var me = $(this);
		var parent = me.closest('.fBuilder-page-switcher-container');
		if (parent.siblings('.fBuilder-page-switcher-container').length <= 0) {
			return alert('A form must contain atleast one page');
		}
		if (parent.hasClass('active')) {
			var next_item = parent.prev('.fBuilder-page-switcher-container');
			if (next_item.length <= 0) {
				next_item = parent.next('.fBuilder-page-switcher-container');
			}
			if (next_item.length > 0) {
				next_item.addClass('active');
				$(next_item.attr('data-target')).addClass('fBuilder-active-page');
			}
			delete next_item;
		}
		parent.remove();
		$(parent.attr('data-target')).remove();
		delete me;
		delete parent;
	};
	var _switchPage = function (evnt) {
		var me = $(this);
		var parent = me.closest('.fBuilder-page-switcher-container');
		if (parent.hasClass('active')) { return true; }
		parent.siblings('.active').removeClass('active');
		$('.fBuilder-active-page').removeClass('fBuilder-active-page');
		parent.addClass('active');
		$(parent.attr('data-target')).addClass('fBuilder-active-page');
		delete me;
		delete parent;
	};
	var _toggleReadWrite = function (evnt) {
		var me = $(this);
		console.log();
		if (me.prop('checked')) {
			window._fBuilder_view_mode = true;
			$('.fBuilder-form-element-container > .fBuilder-view-container').removeClass('hidden');
			$('.fBuilder-form-element-container > .fBuilder-editor-container').addClass('hidden');
			me.next('label[for="'+this.id+'"]').find('span').removeClass('glyphicon-eye-close').addClass('glyphicon-eye-open');
		}
		else {
			window._fBuilder_view_mode = false;
			$('.fBuilder-form-element-container > .fBuilder-view-container').addClass('hidden');
			$('.fBuilder-form-element-container > .fBuilder-editor-container').removeClass('hidden');
			me.next('label[for="'+this.id+'"]').find('span').addClass('glyphicon-eye-close').removeClass('glyphicon-eye-open');
		}
	};
	/* element events */
	var _removeElement = function (evnt) {
		var me = $(this);
		var parent = me.closest('.fBuilder-form-element-container');
		parent.fadeOut('fast', function() {
			$(this).remove();
		});
		delete me;
		delete parent;
	};
	var _moveElemntUp = function (evnt) {
		var me = $(this);
		var parent = me.closest('.fBuilder-form-element-container');
		$('.fBuilder-form-element-container').removeClass('flicker');
		if (parent.prev('.fBuilder-form-element-container').length <= 0) return;
		var prev = parent.prev('.fBuilder-form-element-container');
		$(parent.detach()).insertBefore(prev);
		parent.addClass('flicker');
		delete me;
		delete parent;
		delete prev;
	}
	var _moveElemntDown = function (evnt) {
		var me = $(this);
		var parent = me.closest('.fBuilder-form-element-container');
		$('.fBuilder-form-element-container').removeClass('flicker');
		if (parent.next('.fBuilder-form-element-container').length <= 0) return;
		var next = parent.next('.fBuilder-form-element-container');
		$(parent.detach()).insertAfter(next);
		parent.addClass('flicker');
		delete me;
		delete parent;
		delete next;
	}
	return {
		closePage: _closePage,
		switchPage: _switchPage,
		removeElement: _removeElement,
		moveElementUp: _moveElemntUp,
		moveElementDown: _moveElemntDown,
		toggleReadWrite: _toggleReadWrite
	};
})($);
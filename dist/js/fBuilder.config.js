var fBuilderConfig = (function () {
	var _elements = {
		radio: {
			name: 'Multiple Choice',
			title: 'Multiple Choice',
			id: 'fBuilder-radio',
			key: 'radio',
			func: 'addRadio'
		},
		checkbox: {
			name: 'Checkbox',
			title: 'Checkbox',
			id: 'fBuilder-checkbox',
			key: 'checkbox',
			func: 'addCheckbox'
		},
		dropdown: {
			name: 'Drop Down',
			title: 'Drop Down',
			id: 'fBuilder-dropdown',
			key: 'dropdown',
			func: 'addDropdown'
		},
		notice: {
			name: 'Notice',
			title: 'Notice',
			id: 'fBuilder-notice',
			key: 'notice',
			func: 'addNotice'
		},
		button: {
			name: 'Button',
			title: 'Button',
			id: 'fBuilder-button',
			key: 'button',
			func: 'addButton'
		},
		text: {
			name: 'Text',
			title: 'Text',
			id: 'fBuilder-text',
			key: 'text',
			func: 'addText'
		},
		textarea: {
			name: 'Textarea',
			title: 'Textarea',
			id: 'fBuilder-textarea',
			key: 'textarea',
			func: 'addTextarea'
		},
		ntoes: {
			name: 'Notes',
			title: 'Notes',
			id: 'notes',
			key: 'fBuilder-notes',
			func: 'addNotes'
		},
		email: {
			name: 'Email',
			title: 'Email',
			id: 'email',
			key: 'fBuilder-email',
			func: 'addEmail'
		},
		cellphone: {
			name: 'Cell Phone',
			title: 'Cell Phone',
			id: 'cellphone',
			key: 'fBuilder-cellphone',
			func: 'addCellphone'
		},
		homephone: {
			name: 'Home Phone',
			title: 'Home Phone',
			id: 'homephone',
			key: 'fBuilder-homephone',
			func: 'addHomephone'
		},
		video: {
			name: 'Video',
			title: 'Video',
			id: 'video',
			key: 'fBuilder-video',
			func: 'addVideo'
		}
	};
	var _controls = {
		new_form: {
			name: 'New Form',
			title: 'New Form',
			id: 'fBuilder-new-form',
			key: 'new-form'
		},
		save_form: {
			name: 'Save Form',
			title: 'Save Form',
			id: 'fBuilder-save-form',
			key: 'save-form'
		}
	};
	var _getElements = function () { return _elements; };
	var _getControls = function () { return _controls; };
	return {
		getElements: _getElements,
		getControls: _getControls
	};
});
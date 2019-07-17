const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve('index.html'), 'utf8');

var simulateClick = function (elem) {
	// Create our event (with options)
	var evt = new MouseEvent('click', {
		bubbles: true,
		cancelable: true,
		view: window
	});
	// If cancelled, don't dispatch our event
	var canceled = !elem.dispatchEvent(evt);
};

jest
    .dontMock('fs');


describe('button', function () {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    });

    afterEach(() => {
        // restore the original func after test
        jest.resetModules();
    });

    it('task list exists', function () {
        expect(document.getElementById('task-list')).toBeTruthy();
    });

    it('checkbox exists', function () {
        expect(document.getElementById('task-list')).toBeTruthy();
    });

    it('delete button exists', function () {
        expect(document.getElementsByClassName("delete")).toBeTruthy();
    });
    
});

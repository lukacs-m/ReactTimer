var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var Controls = require('Controls');

describe('Controls', ()=> {
    it('should exist', () => {
        expect(Controls).toExist();
    });

    describe('render', () => {
       it('should render pause when started', () => {
          var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>);
           var $el = $(ReactDOM.findDOMNode(controls));
           var $pauseButton = $el.find('button:contains(Pause)');

           expect($pauseButton.length).toBe(1);
       });

        it('should render start when paused', () => {
            var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused"/>);
            var $el = $(ReactDOM.findDOMNode(controls));
            var $pauseButton = $el.find('button:contains(Start)');

            expect($pauseButton.length).toBe(1);
        });
    });

    // it('should call onSetCountdown if valid seconds entered', () => {
    //     var spy = expect.createSpy();
    //     var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    //     var $el = $(ReactDOM.findDOMNode(countdownForm));
    //
    //     countdownForm.refs.seconds.value = "109";
    //     TestUtils.Simulate.submit($el.find('form')[0]);
    //
    //     expect(spy).toHaveBeenCalledWith(109);
    // });
    //
    // it('should not call onSetCountdown if invalid seconds entered', () => {
    //     var spy = expect.createSpy();
    //     var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    //     var $el = $(ReactDOM.findDOMNode(countdownForm));
    //
    //     countdownForm.refs.seconds.value = "asdf";
    //     TestUtils.Simulate.submit($el.find('form')[0]);
    //
    //     expect(spy).toNotHaveBeenCalled();
    // });
});
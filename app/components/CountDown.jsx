var React = require('react');
var Clock = require('Clock');

var CountDown = React.createClass({
  render : function() {
    return (
      <div >
        <Clock totaSeconds={129}/>
      </div>
    );
  }
});

module.exports = CountDown;

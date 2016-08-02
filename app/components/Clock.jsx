var React = require('react');

var Clock = React.createClass({
  getDefaultProps: function() {
    totaSeconds: 0
  },
  propTypes: {
    totaSeconds: React.PropTypes.number
  },
  formatSeconds: function(totaSeconds) {
    var seconds = totaSeconds % 60;
    var minutes = Math.floor(totaSeconds / 60);

    if (seconds < 10) {
      seconds = '0' + seconds;
    }

    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    return minutes + ':'+ seconds;
  },
  render: function() {
var {totaSeconds} = this.props;

    return (
      <div className="clock">
        <span className='clock-text'>
          {this.formatSeconds(totaSeconds)}
        </span>
      </div>
    ) ;
  }
});

module.exports = Clock;

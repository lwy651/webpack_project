import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Hello extends React.Component {
  render() {
    return <div className='module-topbar'>Hello {this.props.name}</div>
  }
}
ReactDOM.render(<Hello name='651'/>,document.getElementById('example'));
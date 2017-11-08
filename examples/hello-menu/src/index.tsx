import React from 'react';
import ReactDOM from 'react-dom';
import DOMListener from 'dom-listener';
import Menu from './component/menu';

class WrapperMenu extends React.Component {
  _m: Menu;

  render() {
    const events = ['click'];
    //listen multiple events
    //const events = ['click', 'mouseOver', 'touchEnd'];

    return (
      <DOMListener events={events} handleEvent={this._handleEvent}>
        <Menu ref={m => (this._m = m)} />
      </DOMListener>
    );
  }

  _handleEvent = (e: any) => {
    const isChildren = ReactDOM.findDOMNode(this._m).contains(e.target);
    //如果不是子元素 直接close掉
    if (!isChildren) {
      this._m.close();
    }
  };
}

ReactDOM.render(<WrapperMenu />, document.getElementById('app'));

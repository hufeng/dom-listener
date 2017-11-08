import * as React from 'react';

export interface IProps {
  events?: Array<string>;
  handleEvent?: (e: Event) => void;
}

export default class DOMListener extends React.Component<IProps, any> {
  static defaultProps = {
    events: [],
    handleEvent: () => {}
  };

  componentDidMount() {
    for (let e of this.props.events) {
      if (window.addEventListener) {
        window.addEventListener(
          e.toLocaleLowerCase(),
          this._handleEvent,
          false
        );
      } else {
        //IE
        (window as any).attachEvent(`on${e.toLowerCase()}`, this._handleEvent);
      }
    }
  }

  componentWillUnmount() {
    for (let e of this.props.events) {
      if (window.removeEventListener) {
        window.removeEventListener(e.toLowerCase(), this._handleEvent, false);
      } else {
        //IE
        (window as any).detachEvent(e.toLowerCase(), this._handleEvent);
      }
    }
  }

  render() {
    return React.Children.only(this.props.children);
  }

  private _handleEvent = e => {
    this.props.handleEvent(e);
  };
}

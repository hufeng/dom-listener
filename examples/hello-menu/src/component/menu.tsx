import React from 'react';
import Wrapper from './wrapper';
import Outter from './outter';

export default class Menu extends React.Component {
  state: {
    isShowMenu: boolean;
  };

  constructor(props) {
    super(props);
    this.state = {
      isShowMenu: false
    };
  }

  render() {
    const { isShowMenu } = this.state;

    return (
      <Wrapper>
        <Outter>
          <div>The current menu is open {isShowMenu ? 'yes' : 'no'}</div>
          <a href={'javascript:void(0);'} onClick={this._handleClick}>
            show menu
          </a>
        </Outter>
      </Wrapper>
    );
  }

  private _handleClick = () => {
    const { isShowMenu } = this.state;
    this.setState({
      isShowMenu: !isShowMenu
    });
  };

  public close() {
    this.setState({
      isShowMenu: false
    });
  }
}

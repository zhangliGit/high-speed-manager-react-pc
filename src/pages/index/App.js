import React from 'react';
import baseUrl from '../../assets/js/config-env';

export default class App extends React.Component {
  goLogin() {
    window.location.href = "./login.html"
  }
  render() {
    return (
      <div>
        <div onClick = { this.goLogin }>首页 { baseUrl } </div>
      </div>
    )
  }
}
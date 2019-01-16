import React, { Component, Fragment } from "react";
import GlobalStyle from "./styles/global";
import "font-awesome/css/font-awesome.css";

import Main from "./pages/main";

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Main />
      </Fragment>
    );
  }
}

export default App;

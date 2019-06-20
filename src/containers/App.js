import React from 'react';
import GlobalStyle from '../layout/Base/GlobalStyle';
import Main from '../components/Main';

class App extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Main />
      </>
    );
  }
}

export default App;

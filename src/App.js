import React from 'react';
// import './App.css';

  class App extends React.Component {
    render() {
      return (
        <React.Fragment>
          <Header />
          <Content />
        </React.Fragment>
      );
    }
  }

  const Header = () => {
    return (
      <header>
        <h1>Counter - React!</h1>
      </header>
    );
  };

  class Content extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        count: 0,
      };
    }
  
    // handleNum = e => {
    //   let count = parseInt(e.target.value);
    //   this.setState({ count });
    //   console.log(this.state.count);
    // };
  
    handleClickPlus = e => {
      e.preventDefault();
      let count = this.state.count + 1;
      this.setState({ count });
    };
  
    handleClickMinus = e => {
      e.preventDefault();
      let count = this.state.count - 1;
      this.setState({ count });
    };

    render() {
      return (
        <div>
          <p>{this.state.count}</p>
          {/* <input onChange={this.handleNum} /> */}
          <button onClick={this.handleClickPlus}> + </button>
          <button onClick={this.handleClickMinus}> - </button>
        </div>
      );
    }
  }

export default App;

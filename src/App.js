import React, { Component } from 'react';
import './App.less';
import  {Button} from 'antd';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <Button>App.js</Button> and save to reload.
          </p>
        </header>
        <Button type='primary' shape='circle' icon='search'></Button>
        <Button type='primary' icon='search'>Search</Button>
      </div>
    );
  }
}
export default App

import React, { Component } from 'react';
import './App.less';
import  {Button} from 'antd';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <Button>src/App.js</Button> and save to reload.
          </p>
        </header>
        <hr/>
        <Button type='primary' shape='circle' icon='search'></Button>
        <hr/>
        <Button type='primary' icon='search'>Search</Button>
      </div>
    );
  }
}
export default App
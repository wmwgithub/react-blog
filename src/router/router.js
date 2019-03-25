import React from 'react'
import {HashRouter,Route,Switch} from 'react-router-dom'
import App from '../App'
import Write from '../pages/write'
import NoMatch from '../pages/no-match'
class BasicRoute extends  React.Component{
  render(){
    return(
      <HashRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/write" component={Write}/>
            <Route component={NoMatch}/>
        </Switch>
      </HashRouter>
    )
  }
}

export default BasicRoute
import React from 'react'
import {HashRouter,Route,Switch} from 'react-router-dom'
import App from '../App'
import Write from '../pages/write'
import NoMatch from '../pages/no-match'
import ManageActicle from '../pages/manage/acticle'
class BasicRoute extends  React.Component{
  render(){
    return(
      <HashRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/write" component={Write}/>
            <Route exact path="/manage/acticle" component={ManageActicle}/>            
            <Route component={NoMatch}/>
        </Switch>
      </HashRouter>
    )
  }
}

export default BasicRoute

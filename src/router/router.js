import React from 'react'
import {HashRouter,Route,Switch} from 'react-router-dom'
import App from '../App'
import Write from '../pages/write'
import NoMatch from '../pages/no-match'
import ManageActicle from '../pages/manage/manage'
import {ActicleInfo} from '../components'
import {Login} from '../pages'

class BasicRoute extends  React.Component{
  render(){
    return(
      document.cookie?
      <HashRouter>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/main/:type" component={App}/>
            <Route exact path="/main" component={App}/>
            <Route exact path="/write" component={Write}/>
            <Route exact path="/manage/acticle" component={ManageActicle}/>         
            <Route exact path="/acticle/" component={ActicleInfo} />   
            <Route component={NoMatch}/>
        </Switch>
      </HashRouter>
      :
      <HashRouter>
      <Switch>
          <Route exact path="/login" component={Login}/>
          <Route component={Login}/>
      </Switch>
    </HashRouter>
    )
  }
}

export default BasicRoute

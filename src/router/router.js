import React from 'react'
import {HashRouter,Route,Switch} from 'react-router-dom'
import App from '../App'
import Write from '../pages/write'
import NoMatch from '../pages/no-match'
import ManageActicle from '../pages/manage/acticle'
import ActicleInfo from '../components/article/article-info'
import {Login} from '../pages'
// import Preview from '../pages/write/preview'
class BasicRoute extends  React.Component{
  render(){
    return(
      <HashRouter>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/main" component={App}/>
            <Route exact path="/write" component={Write}/>
            {/* <Route exact path='/write/preview/:title/:text' component={Preview} /> */}
            <Route exact path="/manage/acticle" component={ManageActicle}/>         
            <Route exact path="/acticle/" component={ActicleInfo} />   
            <Route component={NoMatch}/>
        </Switch>
      </HashRouter>
    )
  }
}

export default BasicRoute

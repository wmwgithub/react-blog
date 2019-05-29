import React from 'react'
import {HashRouter,Route,Switch} from 'react-router-dom'
import App from '../App'
import {Write,NoMatch,Manage,Article,Login, SearchPage} from '../pages'
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
            <Route exact path="/write/:articleId" component={Write}/>
            <Route exact path="/manage/acticle" component={Manage}/>         
            <Route exact path="/article/:id" component={Article} />   
            <Route exact path= "/search/:keywords" component={SearchPage}/>
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

import React, {Component} from 'react';
import { Router, Route, browserHistory, Link, IndexRoute,IndexLink  } from 'react-router'

class App extends Component {
  render(){
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><IndexLink to="/">About</IndexLink></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>
         {this.props.children} 
      </div>
    )
  }
}

class Dashboard extends Component {
  render() {
    return(
      <h1>这是dashboard页面-默认页面</h1>
    )
  }
}

class About extends Component {
  render() {
    return (
      <h3>这是about页面</h3>
    )
  }
}

class Inbox extends Component {
  render() {
    return(
      <div>
        <h2>Inbox</h2>
        {this.props.children || "Welcome to your Inbox"}
      </div>
    )
  }
}

class Message extends Component {
  render() {

    return (
      <h3>this is message {this.props.params.id}</h3>
    )
  }
}

const MyRouter = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard}></IndexRoute>
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox}>
        <Route path="/messages/:id" component={Message} />
      </Route>
    </Route>
  </Router>
)

export default MyRouter;

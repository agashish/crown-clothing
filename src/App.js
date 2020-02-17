import React from 'react';
import HomePage from './pages/homepage.component';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';

const HatsPage = props => {
  return (
    <h1>Hats Page - {props.match.params.menuItem}</h1>
  )
}
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/:menuItem" component={HatsPage} />  
      </Switch>      

      {/* <Route exact path="/" component={Home} />
      <Route exact path="/samuel/blob/topics" component={Topics} />
      <Route exact path="/samuel/blob/topics/:topicId" component={TopicsDetail} /> */}

    </div>
  );
}

export default App;

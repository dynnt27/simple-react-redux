import React from 'react';
import { connect } from 'react-redux'
import HomePage from "./HomePage.js"

class App extends React.Component {
  render() {
    return <div>
    		<HomePage />
    	</div>;
  }
}


export default App;
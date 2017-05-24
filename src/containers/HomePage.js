import React, { Component } from 'react';

import Dropdown from '../components/Dropdown.js'
import Button from '../components/Button.js'
import Animal from '../components/Animal.js'
import Label from '../components/Label.js'
import FeedHistory from '../components/FeedHistory.js'

class HomePage extends React.Component {
	
  render() {
    return <div>

          <Dropdown selectId="feedSelection" />
          <Button buttonId="submitFeed" 
                  buttonName="Feed Now"/>
          
          <div>
          	<Animal />
            <Label />
            <FeedHistory />
          </div>

        </div>;
  }
}

export default HomePage;
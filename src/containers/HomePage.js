import React, { Component } from 'react';

import Dropdown from '../components/Dropdown.js'
import Button from '../components/Button.js'
import Animal from '../components/Animal.js'
import Label from '../components/Label.js'
import FeedHistory from '../components/FeedHistory.js'

import styles from './homePage.scss'

class HomePage extends React.Component {
	
  render() {
      return <div className={styles.green}>

              <Dropdown selectId="feedSelection" />
              <Button buttonId="submitFeed" 
                      buttonName="Feed Now"/>
              
              <div>
                <h2>Animal Details</h2>
              	<Animal /> 
                <Label />
                <FeedHistory />
              </div>

            </div>;
  }
}

export default HomePage;
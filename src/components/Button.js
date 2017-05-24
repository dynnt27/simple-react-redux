import React from 'react';
import { connect } from 'react-redux'
import { feedAnimal } from '../actions/index.js'

class Button extends React.PureComponent {
  render() {
    // only updates props and state have not changed.
    // uses a shallow compare.
    const { buttonId, buttonName, onFeedAnimal } = this.props;

    return <div>
    		<button id={buttonId} 
    				onClick={onFeedAnimal} > 
    			{ buttonName } 
    		</button>
    	</div>;
  }
}

function mapStateToProps(state) {
    return {
        selectedAnimal: state.selectedAnimal
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onFeedAnimal: () => dispatch(feedAnimal())
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Button);
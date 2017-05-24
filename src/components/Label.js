import React from 'react';
import { connect } from 'react-redux'

class Label extends React.PureComponent {
  render() {
    // only updates props and state have not changed.
    // uses a shallow compare.
    const { isFull, selectedAnimal } = this.props;

    return 	<div> 
				<p>{`Animal full? ${ isFull }`} </p>
        <p>{`Selected food: ${ selectedAnimal }`} </p>
			</div>
  }
}


function mapStateToProps(state) {
    return {
    	isFull: state.isFull,
      	selectedAnimal: state.selectedAnimal
    }
}

export default connect(mapStateToProps)(Label)
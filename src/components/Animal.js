import React from 'react';

class Animal extends React.PureComponent {
  render() {
    // only updates props and state have not changed.
    // uses a shallow compare.

    return <div>
    		Animal img here
    	</div>;
  }
}

export default Animal;
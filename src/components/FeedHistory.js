import React from 'react'
import { connect } from 'react-redux'

class FeedHistory extends React.PureComponent {
  render() {

    const { feedHistory } = this.props;
    return <div>
    		{ 
                feedHistory.length > 1 &&

        			feedHistory.map((item, index) => {
        				return <p key={index}>
        					{`You have fed him ${ item } +1`}
        				</p>
        			})
                
    		}
    	</div>;
  }
}

function mapStateToProps(state) {
    return {
        feedHistory: state.feedHistory
    }
}


export default connect(mapStateToProps)(FeedHistory);
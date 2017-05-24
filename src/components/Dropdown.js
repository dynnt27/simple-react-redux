import React from 'react'
import { selectFeedAnimalStart } from '../actions/index.js'
import { connect } from 'react-redux'

const animalFood = ['Chicken', 'Beef', 'Squid', 'Fish', 'Lamb']

class Dropdown extends React.PureComponent {

  constructor(props) {
    super(props)

    // this.onAnimalSelectChange = this.onAnimalSelectChange.bind(this)
  }

  onSelectAnimal(event) {
    let targetAnimal = event.target.value

    console.log(targetAnimal)

    this.props.onAnimalSelectChange(targetAnimal)
  }

  render() {
  	const { selectId } = this.props
    return <div>
    		<select id={selectId} onChange={this.onSelectAnimal.bind(this)}>
    			{
            animalFood.map((item, index) => {
              return <option key={index} value={item}>
                  { item }
                </option>
            })
    			}
    		</select>
    	</div>
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAnimalSelectChange: (targetAnimal) => dispatch(selectFeedAnimalStart(targetAnimal))
  }
}

export default connect(null, mapDispatchToProps)(Dropdown)
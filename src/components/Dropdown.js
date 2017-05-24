import React from 'react';
import { selectFeedAnimalStart } from '../actions/index.js'

const animalFood = ['chicken', 'beef', 'php', 'laravel', 'apacheStruts']

class Dropdown extends React.PureComponent {

  constructor(props) {
    super(props)

    this.onAnimalSelectChange = this.onAnimalSelectChange.bind(this)
  }

  onSelectAnimal(event) {
    let targetAnimal = event.target.value()

    this.props.onAnimalSelectChange(targetAnimal)
  }

  render() {
  	const { selectId } = this.props;
    return <div>
    		<select id={selectId}>
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

mapDispatchToProps(dispatch) {
  return {
    onAnimalSelectChange: () => dispatch(selectFeedAnimalStart())
  }
}

export default connect(null, mapDispatchToProps)(Dropdown)
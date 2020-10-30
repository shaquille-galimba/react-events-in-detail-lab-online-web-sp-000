// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component {

	handleClick = (event) => {
		event.persist()
		setTimeout(() => this.props.onDelayedClick(event), this.props.delay)
		// console.log(this.props.onDelayedClick(clickEvent))
	}

	render() {
		return(
			<button onClick={this.handleClick}>

			</button>
		)
	}
}

export default DelayedButton

import Inferno from 'inferno';
import Component from 'inferno-component';

export default class Index extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			stylesheet: 'index',
		};
	}
	
	render() {
		return (
			<div id='inferno-root'>
				<link rel="stylesheet" type="text/css" href={"css/" + this.state.stylesheet + ".css"} />
			</div>
		);
	}
}

Inferno.render(
	<Index />,
	document.getElementById('root')
);

import {render, Component} from 'inferno';
import {HashRouter, Route, Switch} from 'inferno-router';
import NavbarTop from './components/NavbarTop';
import Team from './components/Team';
import Juanito from './components/Juanito';

export default class Index extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			stylesheet: 'index'
		};
		
		this.update = this.update.bind(this);
	}
	
	update() {
		let me = this;
		setTimeout(function() {
			me.forceUpdate();
		}, 50);
	}
	
	render() {
		return (
			<HashRouter>
				<div id='inferno-root'>
					
					<Switch>
						<Route exact path="/" component={Juanito}/>
						<Route path="/about-us" component={Team}/>
					</Switch>
					<NavbarTop update={this.update} />
				</div>
			</HashRouter>
		);
	}
}

render(
	<Index />,
	document.getElementById('root')
);

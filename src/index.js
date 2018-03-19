import {render, Component} from 'inferno';
import {HashRouter, Route, Switch} from 'inferno-router';
import NavbarTop from './components/NavbarTop';
import Home from './components/Home';
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
					<link rel="stylesheet" type="text/css" href={"css/" + this.state.stylesheet + ".css"} />
					<Switch>
						<Route exact path="/" component={Home}/>
						<Route path="/juanito-el-nahualito" component={Juanito}/>
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

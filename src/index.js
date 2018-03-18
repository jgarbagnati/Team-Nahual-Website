import {render, Component} from 'inferno';
import {HashRouter, Route, NavLink} from 'inferno-router';
import NavbarTop from './components/NavbarTop';
import Home from './components/Home';
import Juanito from './components/Juanito';

export default class Index extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			stylesheet: 'index',
		};
	}
	
	render() {
		return (
			<HashRouter>
				<div id='inferno-root'>
					<link rel="stylesheet" type="text/css" href={"css/" + this.state.stylesheet + ".css"} />
					<Route exact path="/" component={Home}/>
					<Route path="/juanito" component={Juanito}/>
					<div className='navbar-top'>
				<div className='left'>
					<NavLink to="/" exact activeClassName="active">
						<div className='team-nahual option'>Team Nahual</div>
					</NavLink>
				</div>
				<div className='right'>
					<NavLink to="/juanito" activeClassName="active">
						<div className='option'>Juanito el Nahualito</div>
					</NavLink>
					<div className='option'>
						Development Blog
					</div>
				</div>
			</div>
				</div>
			</HashRouter>
		);
	}
}

render(
	<Index />,
	document.getElementById('root')
);

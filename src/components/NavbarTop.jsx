import {Component} from 'inferno';
import {NavLink} from 'inferno-router';

export default class NavbarTop extends Component {
	
	render() {
		return (
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
		);
	}
}
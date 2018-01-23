import Inferno from 'inferno';
import Component from 'inferno-component';

export default class NavbarTop extends Component {
	
	render() {
		return (
			<div className='navbar-top'>
				<div className='left'>
					<div className='team-nahual option' />
				</div>
				<div className='right'>
					<div className='option active'>
						Juanito el Nahualito
					</div>
					<div className='option'>
						Development Blog
					</div>
				</div>
			</div>
		);
	}
}
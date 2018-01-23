import Inferno from 'inferno';
import Component from 'inferno-component';

export default class MainContents extends Component {
	
	render() {
		return (
			<div className='main-cntr'>
				<div className='juanito-logo' />
				<div className='logo-subtext'>
					An adventure puzzle game by Team Nahual
				</div>
				
				<div className='divider-bar' />
				
				<div className='text'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</div>
				
				<div className='divider-bar' />
				
				<div className='social-media-cntr'>
					<div className='media-text'> Follow development at: </div>
					<div className='twitter' />
					<div className='facebook' />
					<div className='youtube' />
				</div>
			</div>
		);
	}
}
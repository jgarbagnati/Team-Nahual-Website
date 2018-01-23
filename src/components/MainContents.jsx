import Inferno from 'inferno';
import Component from 'inferno-component';

export default class MainContents extends Component {
	
	render() {
		return (
			<div className='main-cntr'>
				<div className='juanito-logo' />
				<div className='logo-subtext'>
					An adventure puzzle game by Team Nahual.
				</div>
				<div className='divider-bar' />
				
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
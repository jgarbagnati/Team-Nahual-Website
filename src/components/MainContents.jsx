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
				
				<div className='description text'>
					Juanito el Nahualito is a beautiful mesoamerican adventure about a teenager who is in search of grandfather and learns about his culture. You play as Juanito, a Nahual capable of having a close connection with nature. Juanito discovers his powers as he remembers his grandfather stories about his Mesoamerican culture.
				</div>
				
				<div className='divider-bar' />
				
				<div className='social-media-cntr'>
					<div className='media-text'> Follow development at: </div>
					<div className='media-ico twitter' />
					<div className='media-ico facebook' />
					<div className='media-ico youtube' />
				</div>
			</div>
		);
	}
}
import Inferno from 'inferno';
import Component from 'inferno-component';

export default class Parallax extends Component {
	
	render() {
		return (
			<div className='parallax-cntr'>
				<div className='image' />
				<div className='vignette' />
				<div className='fade-in-gradient' />
			</div>
		);
	}
}
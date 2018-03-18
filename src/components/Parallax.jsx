import {Component} from 'inferno';

export default class Parallax extends Component {
	
	render() {
		return (
			<div className='parallax-cntr'>
				<div className='image' />
				<div className='fade-in-gradient' />
			</div>
		);
	}
}
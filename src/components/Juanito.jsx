import {Component} from 'inferno';
import Parallax from './Parallax';

const optionTitle = ['Story', 'Explore', 'Nahual'];
const optionText = ["Juanito el Nahualito is a story that takes places in current time. A story about a teenager named Juanito. Juanito lives with his grandfather who migrated to the city from his village to take care of his grandson. Juanito Was given to his grandfather to take care of him as his Mother tries to provide from another city. Juanito grows up with his grandfather who used to tell stories to Juanito about his heritage and roots. As Juanito grows up to be a teen, he stops believing his grandfather about those stories. At the age of 16, Juanito has an internal conflict of who he is. Juan (the grandfather) falls ill and asks Juanito to help him. As Juanito tries to help his grandfather, his grandfather leaves mysteriously. Juanito then decides to follow him and loses him in the forest. Juanito falls and faints in the forest; this is where he discovers a power that his grandfather once told him as story/fable.", "The look and feel of the Juanito el Nahualito is a reference to wood carving that tells a story and Mesoamerican oral tradition of storytelling. Magical Realism is applied to tell a coming-of-age story.", "In Mesoamerican cultures like Aztecs, Mayans, Zapotecs, and Mixtecs, the shaman or priest was known as the nahual. According to tradition, the nahuales could transform into animals and penetrate with their soul the body of an animal or natural phenomena. By adopting these appearances, these nahuales performed their prodigious actions. The nahual is the animal that gives us its characteristics soon after our birth. It is told that we all are born with a nahual, which is the animal that is born at the same time as we are."];

export default class Juanito extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			opt: 0
		};
		
		this.explore = this.explore.bind(this);
		this.nahual = this.nahual.bind(this);
		this.story = this.story.bind(this);
	}
	
	renderTitles() {
		let fun = [this.story, this.explore, this.nahual];
		let opts = [];
		for (let i = 0; i < optionTitle.length; ++i) {
			let className = (i == this.state.opt)? "selected": "";
			opts.push(
				<div onClick={fun[i]}
					className={className}>
					{optionTitle[i]}
				</div>
			);
		}
		
		return opts;
	}
	
	renderText() {
		return optionText[this.state.opt];
	}
	
	selectOption(opt) {
		this.setState({opt: opt});
	}
	
	story() {this.selectOption(0);}
	explore() {this.selectOption(1);}
	nahual() {this.selectOption(2);}
	
	render() {
		return (
			<div className='main-contents'>
				<Parallax />
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
					
					<div className='text'>
						<div className='options'>
							{this.renderTitles()}
						</div>
						{this.renderText()}
					</div>
					
					<div className='divider-bar' />
					
					<div className='platforms'>
						<span>Will be available to play on: </span> Windows • Mac • Linux
					</div>
					
					<div className='social-media-cntr'>
						<div className='media-text'> Follow development at: </div>
						<div className='media-ico twitter' />
						<div className='media-ico facebook' />
						<div className='media-ico youtube' />
					</div>
				</div>
			</div>
		);
	}
}
import {Component} from 'inferno';

export default class Parallax extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			scrollTop: 0
		};
		
		this.handleScroll = this.handleScroll.bind(this);
	}
	
	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}
	
	handleScroll(event) {
		this.setState({
			scrollTop: event.srcElement.body.scrollTop
		});
	}
	
	render() {
		let height = 800 - this.state.scrollTop / 2;
		let style = {
			height: height
		};
		let vignetteStyle = {
			height: height,
			marginTop: -height
		};
		let gradientStyle = {
			height: height / 2,
			marginTop: -height / 2
		};
		return (
			<div className='parallax-cntr' style={style}>
				<div className='image' style={style} />
				<div className='vignette'
					style={vignetteStyle} />
				<div className='fade-in-gradient' 
					style={gradientStyle}/>
			</div>
		);
	}
}
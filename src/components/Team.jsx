import {Component} from 'inferno';

const members = [{
		name: "Hesi Mendez",
		role: "Lead Game Designer"
	},{
		name: "Jacob Weidner",
		role: "Producer"
	}
];

export default class Team extends Component {
	constructor(props) {
		super(props);
	}
	
	displayMembers() {
		let team = [];
		for (let i = 0; i < members.length; ++i) {
			let member = members[i];
			let img = (member.img != null)? member.img: "placeholder"
			let style = {
				backgroundImage: "url('./res/team/photo/" + img + ".png')"
			}
			team.push(
				<div className="member">
					<div style={style} className="avatar" />
					<h3>{member.name}</h3>
					<h4>{member.role}</h4>
				</div>
			);
		}
		
		return team;
	}
	
	render() {
		return (
			<div className='team-page'>
				<h1>Team Nahual</h1>
				<h2>A small group of passionate game developers based out of Santa Cruz, California.</h2>
				
				<div className="members-cntr">
					{this.displayMembers()}
				</div>
			</div>
		);
	}
}

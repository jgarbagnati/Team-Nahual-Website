import {Component} from 'inferno';

const members = [{
		name: "Hesi Mendez",
		role: "Lead Game Designer"
	},{
		name: "Jacob Weidner",
		role: "Producer"
	},{
		name: "Ozvaldo Membrila",
		role: "Narrative, Level Design"
	},{
		name: "Chris Huynh",
		role: "Engineering CoLead"
	},{
		name: "James Garbagnati",
		role: "Engineering CoLead"
	},{
		name: "Jude Loren",
		role: "Lead Tech Artist"
	},{
		name: "Jonathan Morales",
		role: "Lead Sound Designer, Tech Artist"
	},{
		name: "Alexandra Winters",
		role: "3D Art Lead, Character Design"
	},{
		name: "Juan Castillo Meija",
		role: "3D Art Lead, Environment Artist"
	},{
		name: "Alejandro Morales Maldonado",
		role: "Environment Artist"
	},{
		name: "Reshma Zachariah",
		role: "Lead 2D Artist"
	},{
		name: "Andrea Guyette",
		role: "2D and 3D Artist"
	},{
		name: "Collette Quach",
		role: "Writing"
	},{
		name: "Gian Paredes",
		role: "Artist"
	},{
		name: "Herman Wu",
		role: "Artist"
	},{
		name: "Nagie Khant",
		role: "Artist"
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

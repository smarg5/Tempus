import Link from 'next/link';
import Navbar from '../components/Navbar';
import Card from '../components/dropdown';
import Head from 'next/head'
import React, { Component, useState } from 'react';
import Dropdown from '../components/dropdown';
import moodStyles from '../styles/moodtracker.module.scss'
import axios from 'axios';
import useSWR from 'swr';
import cookie from 'js-cookie';
import {PieChart, Pie, Tooltip, BarChart, XAxis, YAxis, Legend, Bar} from 'recharts';
import { stringify } from 'uuid';
import FlipMove from "react-flip-move"
import { duration } from 'moment';
const moment = require('moment');

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }

// // Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       }
//     }
//   }
// }

function StackedBarChart(props) {
	return (
		<BarChart width={500} height={300} data={props.data} margin={{top: 20, right: 30, left: 0, bottom: 5}}>
			{/* <CartesianGrid strokeDasharray="3 3"/> */}
			<XAxis dataKey="name"/>
			<YAxis/>
			<Tooltip/>
			<Legend />
			{props.options.map((option, index) => <Bar dataKey={option} stackId="a" fill={props.colors[index]} />)}
			{/* <Bar dataKey="pv" stackId="a" fill="#8884d8" />
			<Bar dataKey="uv" stackId="a" fill="#82ca9d" /> */}

		</BarChart>
	)
}

function Day(props) {
	let day = props.day
	var dat = moment(day.date)

	return (
		<div className={moodStyles.card}>
			<h3>{dat.format('MMMM D, YYYY, h:mm a')}</h3>
			<div className={moodStyles.flexRow} >
				{day.activities.map((activity) => <div className={moodStyles.tag}>{activity}</div>)}
			</div>
			<div className={moodStyles.flexRow} >
				{day.mood.map((mood) => <div className={moodStyles.tag}>{mood}</div>)}
			</div>
			{/* {day.activities.map((mood) => <p>{mood}</p>)} */}

			<p>{day.content}</p>
		</div>
	)
}

function ToggleButton(props) {
	const [active, setActive]= useState(false);

	return (
		<div>
			<button className = {moodStyles.toggleBtn, active ? moodStyles.activeBtn : moodStyles.inactiveBtn} onClick={() => {
				setActive(!active)
				props.change(props.label, !active)
			}} >
				{props.label}
			</button>
		</div>
	)
}

function DataPieChart(props) {
  	return (
    	<PieChart width={400} height={330}>
        <Pie startAngle={360} percent={true} endAngle={0} data={props.data} cx={200} cy={150} outerRadius={100} innerRadius={70} fill="#8884d8" label/>
		<Tooltip />
       </PieChart>
    );
}

class MoodTracker extends Component {
	constructor(props) {
		super(props);

		this.selectState = this.selectState.bind(this);
		this.handleTextChange = this.handleTextChange.bind(this);
		this.save = this.save.bind(this);
		this.validateLogin = this.validateLogin.bind(this);
		this.getDays = this.getDays.bind(this);
		this.analyzeMoods = this.analyzeMoods.bind(this);
		this.changeMood = this.changeMood.bind(this);
		this.changeNewTag = this.changeNewTag.bind(this);
		this.addActivity = this.addActivity.bind(this);
		this.changeActivity = this.changeActivity.bind(this);

		this.state = {
			selectedActivities: [],
			selectedMoods: [],
			options: ["😀 Happy", "☹️ Sad", "😟 Worried", "😰 Anxious", "😯 Excited", "🥺 Hopeful", "😫 Stressed"],
			activities: ["Excercise", "Spend time with Friends", "Watch Movies", "Work", "Shop", "Sports", "Travel", "Video Games"],
			currentDayText: null,
			textanalaysis: 0,
			loggedIn: null,
			user: null,
			history: [],
			displayHistory: false,
			happyThing: "",
			colors: ["#6EEB83", "#DDFCAD", "#C1666B", "#A9E4EF", "#02A9EA", "#EDC9FF", "#E83151", "#E83151"]

		}
	}

	selectState(x) {
		this.setState({
			selectedActivity: x["option"],
		})
	}

	handleTextChange(event) {
		this.setState({
			currentDayText: event.target.value
		})
	}

	
	async validateLogin() {
		// var data
		// var revalidate
		var data = useSWR('/api/me', async function(args) {
			const res = await fetch(args);
			return res.json();
		});
	}

	async getDays() {
		var body = {
			test: "this does not matter"
		}
		const attempt = await axios.post('http://localhost:3000/api/moodtracker/gethistory', body, {
			content: this.state.currentDayText,
			mood: this.state.selectedMoods
		});

		var week = [{name: 'Sun'}, {name: 'Mon'}, {name: 'Tue'}, {name: 'Wed'}, {name: 'Thurs'}, {name: 'Fri'}, {name: 'Sat'}]
		for (var i = 0 ; i < this.state.options.length; i++) {
			for (var j = 0; j < week.length; j++) {
				week[j][this.state.options[i]] = 0
			}
		}

		let days = attempt.data.days

		let lastWeek = new Date()
		lastWeek.setDate(lastWeek.getDate() - 7)
		let lastMonth = new Date()
		lastMonth.setDate(lastMonth.getDate() - 30)
		let day = new Date(days[0].date)

		let lastWeekHistory = []
		let lastMonthHistory = []
		var allMoods = []
		var allMoodsWeek = []
		var allMoodsMonth = []
		for (var i = 0; i < days.length; i++) {
			allMoods = allMoods.concat(days[i].mood)
			let date = new Date(days[i].date)
			if (date >= lastWeek) {
				lastWeekHistory.push(day)
				lastMonthHistory.push(day)
				allMoodsWeek = allMoodsWeek.concat(days[i].mood)
				allMoodsMonth = allMoodsMonth.concat(days[i].mood)

				for (var k = 0; k < days[i].mood.length; k++) {
					week[date.getDay()][days[i].mood[k]]++;
				}
			} else if (date >= lastMonth) {
				lastMonthHistory.push(day)
				allMoodsMonth = allMoodsMonth.concat(days[i].mood)
				for (var k = 0; k < days[i].mood.length; k++) {
					week[date.getDay()][days[i].mood[k]]++;
				}
			}
		}
		allMoods.sort()
		var prev = null
		let a = 0;
		var moodCount = []
		for (var i = 0; i < allMoods.length; i++) {
			if (allMoods[i] !== prev) {
				if (prev !== null) {
					moodCount.push({name: prev, value: a})
				}
				prev = allMoods[i]
				a = 1
			} else {
				a++
			}
			prev = allMoods[i]
		}


		allMoodsWeek.sort()
		var prev = null
		var moodCountWeek = []
		for (var i = 0; i < allMoodsWeek.length; i++) {
			if (allMoodsWeek[i] !== prev) {
				if (prev !== null) {
					moodCountWeek.push({name: prev, value: a})
				}
				prev = allMoodsWeek[i]
				a = 1
			} else {
				a++
			}
			prev = allMoodsWeek[i]
		}

		allMoodsMonth.sort()

		var prev = null
		var moodCountMonth = []

		for (var i = 0; i < allMoodsMonth.length; i++) {
			if (allMoodsMonth[i] !== prev) {
				if (prev !== null) {
					moodCountMonth.push({name: prev, value: a})
				}
				prev = allMoodsMonth[i]
				a = 1
			} else {
				a++
			}
			prev = allMoodsMonth[i]
		}

		this.setState({
			history: attempt.data.days.reverse(),
			historyWeek: lastWeekHistory.reverse(),
			historyMonth: lastMonthHistory.reverse(),
			moodCount: moodCount,
			moodCountWeek: moodCountWeek,
			moodCountMonth: moodCountMonth,
			week: week
		})

		this.analyzeMoods()
	}

	async changeNewTag(event) {
		this.setState({
			newActivity: event.target.value
		})
	}

	async addActivity(e) {
		e.preventDefault()
		this.setState({
			activities: this.state.activities.concat([this.state.newActivity.charAt(0).toUpperCase() + this.state.newActivity.slice(1)]),
			newActivity: null,
		})
	}

	async save() {
		var body = {
			content: this.state.currentDayText,
			moods: this.state.selectedMoods,
			activities: this.state.selectedActivities
		}
		const attempt = await axios.post('http://localhost:3000/api/moodtracker/sentiment', body, {
			content: this.state.currentDayText,
			mood: this.state.selectedMoods
		});
		const attempttwo = await axios.post('http://localhost:3000/api/moodtracker/saveday', body, {
			content: this.state.currentDayText,
			mood: this.state.selectedMoods
		});
		this.getDays()
		this.setState()
		// 	loggedIn = true;
		// }

		// this.setState({
		// 	loggedIn: loggedIn
		// })

	}

	async componentDidMount() {
		this.getDays();
		// this.validateLogin()
	}

	async changeMood(mood, active) {
		if (active) {
			this.setState({
				selectedMoods: this.state.selectedMoods.concat([mood])
			})
		} else {
			var temp = this.state.selectedMoods.slice()
			const ind = temp.indexOf(mood)
			if (ind > -1) {
				temp.splice(ind, 1)
			}
			this.setState({
				selectedMoods: temp
			})
		}
	}

	async changeActivity(activity, active) {
		if (active) {
			this.setState({
				selectedActivities: this.state.selectedActivities.concat([activity])
			})
		} else {
			var temp = this.state.selectedActivities.slice()
			const ind = temp.indexOf(activity)
			if (ind > -1) {
				temp.splice(ind, 1)
			}
			this.setState({
				selectedActivities: temp
			})
		}
	}

	analyzeMoods() {
		let happyThings = []
		for (var i = 0; i < this.state.history.length; i++) {
			if (this.state.history[i].mood.indexOf(this.state.options[0]) >= 0) {
				happyThings = happyThings.concat(this.state.history[i].activities)
			}
		}
		var happyThing = happyThings[Math.floor(Math.random() * happyThings.length)];
		this.setState({
			happyThing: (happyThing ? happyThing.toLowerCase() : "")
		})
	}


    render() {

		var history = null
		if (this.state.displayHistory) {
			history = this.state.history.map((day) => <li><Day day={day} /></li>)
		}
		return (
			<>
				<Head>
				  <title>Mood Tracker</title>
				</Head>
				<Navbar />

				<section className="hero">
					{/* <div> */}
				  <div className="container flex-col">
					<div className={moodStyles.splitScreen}>
					<div className="dayswrapper w-full">
					  <h1 className="title">Mood Tracker</h1>
					  <p>If you need something to do, try {this.state.happyThing}!</p>
					  <p className="description">
						Hi! How was your day?
					  </p>
					  <p>Were you</p>
					  {/* <Dropdown options={this.state.activities} title={this.state.selectedActivity} select={this.selectState}/> */}
					  <h3>Activities:</h3>
					  <div className={moodStyles.flexRow}>
						{this.state.activities.map((option) => <ToggleButton label={option} change={this.changeActivity} /> )}
						<form onSubmit={(event) => this.addActivity(event)}>
							<input placeholder="➕ Add an activity" className={moodStyles.addTag} onChange={this.changeNewTag}></input>
						</form>
					  </div>
					  <h3>Moods:</h3>
					  <div className={moodStyles.flexRow}>
						{this.state.options.map((option) => <ToggleButton label={option} change={this.changeMood} /> )}
					  </div>
					  <div>
						  <form className="flex-col width-500">
							  <textarea className={moodStyles.dayBox} placeholder="What did you do today?" onChange={this.handleTextChange}></textarea>
						  </form>
					  </div>
					  <div>
						<button className="saveBtn" onClick={this.save}>Save</button>
					  </div>
					  <div className={moodStyles.history}>
						<button className={moodStyles.dropdown} onClick = {() => this.setState({displayHistory: !this.state.displayHistory})}>{this.state.displayHistory ? "▼ " : "▶ " }View History</button>
						<FlipMove duration={250} easing="ease">
							{history}
						</FlipMove>
					  </div>
				  </div>
				  <div className={moodStyles.charts}>
					<h2>Your mood:</h2>
					<h3>This Week</h3>
					{this.state.moodCountWeek && this.state.moodCountWeek.length ? 
						<DataPieChart data={this.state.moodCountWeek} />
						: <p>There is nothing here!</p>
					}
					<h3>This Month</h3>
					{this.state.moodCountMonth && this.state.moodCountMonth.length ? 
						<DataPieChart data={this.state.moodCountMonth} />
						: <p>There is nothing here!</p>
					}
					<h3>How your mood changes over the week</h3>
					{this.state.week && this.state.week.length ? 
						<StackedBarChart data={this.state.week} colors={this.state.colors} options={this.state.options} />
						: <p>There is nothing here!</p>
					}
					{/* <h3>This Month</h3>
					{this.state.moodCount && this.state.moodCount.length ? 
						<DataPieChart data={this.state.moodCount} />
						: <p>There is nothing here!</p>
					} */}
				  </div>
				  </div>


				{/* <StraightAnglePieChart /> */}

			  </div>
				</section>
			</>
		);
	}
	
}

export default MoodTracker;

import Link from 'next/link';
import Navbar from '../components/Navbar';
import Card from '../components/dropdown';
import Head from 'next/head'
import React, { Component } from 'react';
import Dropdown from '../components/dropdown';
import axios from 'axios';

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
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }

class MoodTracker extends Component {
	constructor(props) {
		super(props);

		this.selectState = this.selectState.bind(this);
		this.handleTextChange = this.handleTextChange.bind(this);
		this.save = this.save.bind(this);

		this.state = {
			selectedMood: "Mood",
			options: ["Happy", "Sad", "Worried", "Anxious", "Excited", "Hopeful", "Stressed"],
			currentDayText: null,
			textanalaysis: 0,
		}
	}

	selectState(x) {
		this.setState({
			selectedMood: x["option"],
		})
	}

	handleTextChange(event) {
		this.setState({
			currentDayText: event.target.value
		})
	}

	async save() {
		var body = {
			body: "thsaklfjas lkdfj aslkdfj asldkf",
			text: this.state.currentDayText
		}
		const attempt = await axios.post('http://localhost:4001/sentiment', body, {
			body: "this is a test"
		});
		// console.log(attempt.data.score);
		this.setState({
			textanalaysis: attempt.data.score,
		})
	}

    render() {

		return (
			<>
				<Head>
				  <title>Mood Tracker</title>
				</Head>
				<Navbar />

				<section className="hero">
				  <div className="container">
					<div className="text-wrapper w-full">
					  <h1 className="title">Mood Tracker</h1>
					  <p className="description">
						Hi! How was your day?
					  </p>
					  <p>Were you</p>
					  <Dropdown options={this.state.options} title={this.state.selectedMood} select={this.selectState}/>
					  <div>
						  <form className="flex-col width-500">
							  <textarea placeholder="What did you do today?" onChange={this.handleTextChange}>
							  </textarea>
							  <textarea placeholder="What made you happy?" onChange={this.handleTextChange}>
							  </textarea>
							  <textarea placeholder="What made you sad?" onChange={this.handleTextChange}>
							  </textarea>
						  </form>
					  </div>
					  <div>
						<button className="saveBtn" onClick={this.save}>Save</button>
					  </div>
					  <div>This text is: {this.state.textanalaysis}</div>
				  </div>
			  </div>
				</section>
			</>
		);
	}
	
}

export default MoodTracker;

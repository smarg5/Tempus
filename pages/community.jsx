import Link from 'next/link';
import FlipMove from "react-flip-move"
import Navbar from './components/Navbar';
import Head from 'next/head'
import communityStyles from '../styles/community.module.scss'
import therapistStyles from '../styles/therapists.module.scss'
import { Component, useState } from 'react';
import axios from 'axios';
import moodStyles from '../styles/moodtracker.module.scss'
import MdRefresh from 'react-ionicons/lib/MdRefresh'
const moment = require('moment');

function choose(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function Post(props) {
	var dat = moment(props.time)
  return (
    <div style={{background: props.color}} className={communityStyles.post}>
      <h4>{dat.format('MMMM D, YYYY, h:mm a')}</h4>
      {props.content}
    </div>
  )
}

class Community extends Component {

  constructor(props) {
    super(props);
    this.getPosts = this.getPosts.bind(this);
    this.setContent = this.setContent.bind(this);
    this.submitPost = this.submitPost.bind(this);

    this.state = {
      posts: null,
      colors: ["#7D82B8", "#EF798A", "#F9CB40", "#80CFA9", "#5995ED"]
    }
  }

  setContent(content) {
    this.setState({
      content: content,
    })
  }

  async getPosts() {
    var body = {}
    const attempt = await axios.post('http://tempusio.netlify.app/api/community/getposts', body, {
    });
    this.setState({
      posts: attempt.data.posts.slice(0, 3),
    })
  }

 async submitPost() {
    var body = {
      content: this.state.content,
    }
    await axios.post('http://tempusio.netlify.app/api/community/submitpost', body, {
  });
  }

  componentDidMount() {
      this.getPosts();
  }

  render() {
    return (
      <>
        <Head>
          <title>Community</title>
        </Head>

        <Navbar />
        <div className="container">
          <div className="text-wrapper">
            <div className={moodStyles.splitScreen}>
            <div className="dayswrapper w-full">
            <h1 className="title">Community</h1>
            <h2>Tell us, what's on your mind?</h2>
            <p>Don't worry, you don't have to log in to post, let it out.</p>
            <p>Please be respectful though! We are all here trying to help :)</p>

            <form onSubmit={(ev) => {
              ev.preventDefault();
              this.submitPost();
              this.getPosts();
            }}>
              <div class="form-control">
                <div class="row">
                  <p>Post:</p>
                  <textarea value={this.state.content} onChange={(e) => this.setContent(e.target.value)} className={communityStyles.textArea} placeholder="Enter your post" required id="initial_status" rows="3"></textarea>
                </div>
              </div>

      
              <button type="submit" class="btn" style={{width: "100px", fontSize: "14px", border: "none", backgroundColor: "black", borderRadius: "5px", marginTop: "50px", padding: "10px", color: "white"}}>Post</button>
            </form>
            </div>
					<div className={communityStyles.posts}>
            <div className={moodStyles.flexRow}>
              <h2>Recent Posts</h2>
              <button className = {`${therapistStyles.btn} ${communityStyles.btn}`} 
                onClick={(ev) => {
                  ev.preventDefault();
                  this.getPosts();
                }}>
              <MdRefresh 
                className={communityStyles.icon}
                color="#7f7f7f"
              />
              </button>
            </div>
						<FlipMove duration={250} easing="ease">
              {this.state.posts ? this.state.posts.map((post, index) => <li><Post color={this.state.colors[index]} time={post.date} content={post.content} /></li>) : <></>}
            </FlipMove>
            </div>
          </div>
        </div>

            </div>
      </>
    );
  }
}

export default Community;
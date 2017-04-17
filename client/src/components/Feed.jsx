import React from 'react';
import TweetList from './TweetList'

var sampleData = [
{id: 1, username: 'ActionDanKG91', realname: 'Daniel McDonald', text: 'Salad Is Super Tasty' },
{id: 2, username: 'CrustyCorneilius', realname: 'Corneilius Crust', text: 'That Donald Trump Is Some Character'},
{id:3, username: 'CodeToad', realname: 'Duragon C Mikado', text: 'I dont agree with all that global warming stuff'}
];

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: sampleData
    };
  }
  render () {
    return (
      <div>
      <h1> Tweets</h1>
      <TweetList tweets ={this.state.data}/>
      </div>);
  }
}
export default Feed;
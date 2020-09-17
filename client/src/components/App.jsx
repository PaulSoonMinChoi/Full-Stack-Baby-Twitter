import React, {Component} from 'react';
import NavBar from './NavBar.jsx';
import Content from './Content.jsx';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tweetsData: [],
      page: "page1"
    }
    this.getTweetsData = this.getTweetsData.bind(this);
    this.postSignUp = this.postSignUp.bind(this);
  }

  componentDidMount() {
    this.getTweetsData();
  }

  getTweetsData() {
    axios.get('/get')
      .then(results => {
        console.log(results.data)
        this.setState({
          tweetsData: results.data
        })
      })
      .catch(err => {
        console.error(err);
      })
  }

  postSignUp(username, password) {
    axios.post('/post', {username: username, password: password})
      .then(() => {
        // console.log('hi from postSignUp')
        //after someone signs up i want the user are to get filled up with the signed up user

      })
      .catch(err => {
        console.error(err)
      })
  }




  render() {
    return (
      <div>
        <NavBar postSignUp={this.postSignUp} />
        <Content />
      </div>
    )
  }
}

export default App;
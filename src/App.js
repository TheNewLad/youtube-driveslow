import React, { Component } from 'react';
import 'bulma/css/bulma.min.css';
import './App.css';
import Header from './Header/Header';
import Videos from './Videos/Videos'

class App extends Component {
  constructor() {
    super();
    this.state = {
      url: '',
      author: '',
      videos: [],
    }
  }


  componentDidMount() {
    fetch('https://immense-mountain-34189.herokuapp.com/')
      .then(results => {
        return results.json();
      })
      .then(data => {
        console.log(data.items);
        this.setState({
          url: data.home_page_url,
          videos: data.items.slice(0, 3),
          author: data.author.name
        })
      })
  }

  render() {
    return (
      <div>
        <Header author={this.state.author} />
        <Videos videos={this.state.videos} />
        <footer className="footer">
          <div className="container">
            <div className="content has-text-centered">
              <p>Made with <span className="icon"><i class="fas fa-heart" /></span> by DevSlow.Tech</p>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default App;

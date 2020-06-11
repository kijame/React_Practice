import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message }));
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>ERROR: {this.state.errorMessage}</div>
    }
    else if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    }
    else {
      return <Spinner message="please respond to text"/>
    }
  }

  // React says we have to define render!!
  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));

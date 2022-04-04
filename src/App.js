import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  state = { advice: "" };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { advice } = this.state;
    return (
      <div>
        <blockquote>{advice}</blockquote>
        <div onClick={this.fetchAdvice} className="another">
          <cite>Give Me Another Advice</cite>
        </div>
      </div>
    );
  }
}

export default App;

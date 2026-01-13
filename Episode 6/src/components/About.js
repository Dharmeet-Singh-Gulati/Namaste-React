import React from "react";
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 89,
      count2: 90,
    };
  }
  render() {
    return (
      <div className="main-container">
        <h1>About</h1>
        <h2>Learning about React</h2>
        <div className="user-card">
          <h2>Count is: {this.state.count}</h2>
          <h2>Count2 is: {this.state.count2}</h2>
          <button
            onClick={() => {
              this.setState({
                count: ++this.state.count,
                count2: ++this.state.count,
              });
            }}
          >
            Count ++
          </button>
          <h3>Name is: {this.props.name}</h3>
          <h3>Location is: {this.props.location}</h3>
        </div>
      </div>
    );
  }
}

export default About;

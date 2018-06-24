import React from "react";
import { connect } from "react-redux";

class About extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      data: {
        color_1: (this.props.dataState.color_1) ? this.props.dataState.color_1 : "#659999",
        color_2: (this.props.dataState.color_2) ? this.props.dataState.color_2 : "#f4791f",
        message: (this.props.dataState.message) ? this.props.dataState.message : "You're Great!"
      }
    };

    //Incase user lands on about page first
    document.documentElement.style.setProperty("--color_1", this.state.data.color_1);
    document.documentElement.style.setProperty("--color_2", this.state.data.color_2);
  }

  render() {
    return (
      <div className="main-about">
        <div className="about-section">
          <h1>About MessageYou</h1>
          <p>MessageYou is a personalised message platform developed by <a href="https://github.com/anthonyDrury">Anthony Drury.</a> Developed using react to showcase Frontend Devlopment skils.</p>
          <p>If you have any questions or comments please contact me at: <a _ngcontent-c4="" href="mailto:anthony.drury1@gmail.com">anthony.drury1@gmail.com</a></p>
        </div >
      </div >
    );
  }
}

function mapStateToProps(state) {
  return {
    dataState: state.data
  };
}

export default connect(mapStateToProps)(About);

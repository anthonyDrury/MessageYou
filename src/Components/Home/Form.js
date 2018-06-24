import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as courseActions from "../../actions/messageActions";

class Form extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      data: {
        color_1: (this.props.dataState.color_1) ? this.props.dataState.color_1 : "#659999",
        color_2: (this.props.dataState.color_2) ? this.props.dataState.color_2 : "#f4791f",
        message: (this.props.dataState.message) ? this.props.dataState.message : "You're Great!"
      }
    };

    this.onColor_1Change = this.onColor_1Change.bind(this);
    this.onColor_2Change = this.onColor_2Change.bind(this);
    this.onMessageChange = this.onMessageChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onColor_1Change(event) {
    const data = this.state.data;
    data.color_1 = event.target.value;
    document.documentElement.style.setProperty("--color_1", event.target.value);
    this.setState({ data: data });
  }

  onColor_2Change(event) {
    const data = this.state.data;
    data.color_2 = event.target.value;
    document.documentElement.style.setProperty("--color_2", event.target.value);
    this.setState({ data: data });
  }

  onMessageChange(event) {
    const data = this.state.data;
    data.message = event.target.value;
    this.setState({ data: data });
  }

  onClickSave(event) {
    event.preventDefault();
    this.props.createData(this.state.data);
    this.props.router.push("/message?a=" +  this.state.data.color_1 + "&b=" + this.state.data.color_2 + "&c=" + this.state.data.message);
  }

  render() {
    return (
      <div className="main">
        <form onSubmit={this.handleSubmit} className="main__form">
          <label htmlFor="color_1">First Color:</label>
          <input
            id="color_1"
            type="color"
            value={this.state.data.color_1}
            onChange={this.onColor_1Change}
            required
          />
          <div className="radioGroup">
            <label>
              <input
                type="radio"
                name="message"
                id="great"
                value="You're Great!"
                onChange={this.onMessageChange}
                defaultChecked
              />
              <img
                src={window.location.origin + '/img/thumb.png'}
                alt=""
              />
            </label>
            <label>
              <input
                type="radio"
                name="message"
                id="awesome"
                value="I Love You!"
                onChange={this.onMessageChange}
              />
              <img
                src={window.location.origin + '/img/heart.png'}
                alt=""
              />
            </label>
            <label>
              <input
                type="radio"
                name="message"
                id="good"
                value="Great Job!"
                onChange={this.onMessageChange}
              />
              <img
                src={window.location.origin + '/img/clap.png'}
                alt=""
              />
            </label>
          </div>
          <label>Message: {this.state.data.message}</label>
          <label htmlFor="color_2">Second Color:</label>
          <input
            id="color_2"
            type="color"
            value={this.state.data.color_2}
            onChange={this.onColor_2Change}
            required
          />
          {
            // to do: Make Button a link to route
          }
          <input type="submit" className="submitBtn" onClick={this.onClickSave} value="Save" />
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  createData: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    //TODO THIS NEEDS TO BE USED
    dataState: state.data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createData: data => dispatch(courseActions.createData(data))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);

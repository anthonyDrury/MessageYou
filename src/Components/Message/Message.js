import React from "react";
import { connect } from "react-redux";

class Message extends React.Component {
  constructor(props, context) {
    super(props, context);

    function parse_query_string(query) {
      var vars = query.split("&");
      var query_string = {};
      for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        var key = decodeURIComponent(pair[0]);
        var value = decodeURIComponent(pair[1]);
        // If first entry with this name
        if (typeof query_string[key] === "undefined") {
          query_string[key] = decodeURIComponent(value);
          // If second entry with this name
        } else if (typeof query_string[key] === "string") {
          var arr = [query_string[key], decodeURIComponent(value)];
          query_string[key] = arr;
          // If third or later entry with this name
        } else {
          query_string[key].push(decodeURIComponent(value));
        }
      }
      return query_string;
    }

    var query_string = window.location.href.split('?')[1];
    var parsed_qs = parse_query_string(query_string);
    let imgRef = "";
    console.log(parsed_qs.c);
    if (parsed_qs.c === "You're Great!" || this.props.dataState.message === "You're Great!") {
      imgRef = window.location.origin + '/img/thumb.png';
      console.log(imgRef);
    } else if (parsed_qs.c === "I Love You!" || this.props.dataState.message === "I Love You!") {
      imgRef = window.location.origin + '/img/heart.png';
    } else if (parsed_qs.c === "Great Job!" || this.props.dataState.message === "Great Job!") {
      imgRef = window.location.origin + '/img/clap.png';
    }

    this.state = {
      data: {
        color_1: (this.props.dataState.color_1) ? this.props.dataState.color_1 : parsed_qs.a,
        color_2: (this.props.dataState.color_2) ? this.props.dataState.color_2 : parsed_qs.b,
        message: (this.props.dataState.message) ? this.props.dataState.message : parsed_qs.c
      },
      local: {
        href: imgRef
      }
    };

    document.documentElement.style.setProperty("--color_1", this.state.data.color_1);
    document.documentElement.style.setProperty("--color_2", this.state.data.color_2);

  }

  render() {
    return (
      <div className="main-message">
        <div className="message-container">
          <h1>{this.state.data.message}</h1>
          <img className="message_img"
            src={this.state.local.href}
            alt="" />
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

export default connect(mapStateToProps)(Message);

import React, { Component } from "react";
import "style/Gallery.css";

let num = 0;

class GalleryTable extends Component {
  render() {
    return (
      <div className={"Item " + this.props.className}>
        <a href={this.props.address}>
          <img src={this.props.address} alt=""></img>
          <br></br>
          {this.props.title}
        </a>
      </div>
    );
  }
}

export default GalleryTable;

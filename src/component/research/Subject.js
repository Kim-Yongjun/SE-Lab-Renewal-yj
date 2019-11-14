import React, { Component } from 'react';

import 'style/subject.css';

class Research extends Component {
  render() {
    
    return (
      <div className='Subject'>
        <h3>{this.props.title}</h3>
        <div className="container">
          <img src={this.props.image.src} width={this.props.image.width} alt={this.props.image.alt}></img>
        </div>
        <ul>
          {this.props.info.map(info => (<li>{info}</li>))}
        </ul>
        <br></br>
      </div>
    );
  }
}

export default Research;
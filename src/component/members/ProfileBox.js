import React, { Component } from 'react';

import ProfileContents from 'component/members/ProfileContents.js';

class ProfileBox extends Component {
    render() {
        return(
            <div class="position">
                <h2>{this.props.title}</h2>
                
                {this.props.profiles.map((profile) => {
                    return(<ProfileContents {...profile}></ProfileContents>);
                })}
            </div> 
        );
    }
}

export default ProfileBox;
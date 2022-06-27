import React, { Component } from 'react';
import banner from './DSC04342.jpg'


class Blog extends Component {
    state = { 
        count: 1
     } 
    render() { 
        return (
            <div>
                <span>{this.state.count}</span>
                <button>Create Post</button>             
                 </div>
        );
    }
    
}
 
export default Blog;
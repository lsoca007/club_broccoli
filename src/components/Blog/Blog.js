import React from "react";
import './blog.css';
import Preview from "./Entry";
import preview_content from './preview_content';


function createPreview (list) {
    return (
        <Preview
            key = {list.id}
            avatar = {list.avatar}
            name = {list.name}
            description = {list.description} 
        />
    );
}



function Blog () {

    return(
        <div>
            <h1>
            <span>BLOG</span>
            </h1>
            <dl className="Blog_list">
                {preview_content.map(createPreview)}

            </dl>

        </div>
    )
}

export default Blog;
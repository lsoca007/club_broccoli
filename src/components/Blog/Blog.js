import React from "react";
import './blog.css';
import Preview from "./Entry";
import preview_content from './preview_content';

/*
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
*/


function Blog () {

    return(
        <div className="Blog_page">
            <h1>
            <span>BLOGS</span>
            </h1>
            <dl className="Blog_list">
                {preview_content.map(list => (
                    <Preview
                        key = {list.id}
                        avatar = {list.avatar}
                        name = {list.name}
                        description = {list.description} 
                    />
                ))}

            </dl>

        </div>
    )
}

export default Blog;
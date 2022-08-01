import React from "react";
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ModeCommentIcon from '@mui/icons-material/ModeComment';



function Post(props) {

    return (
        <div className="post">
            <h1>{props.title}</h1>
            <p> {props.content}</p>
            <button><FavoriteBorderIcon/></button>
            <button><FavoriteIcon/></button>
            <button><ModeCommentIcon/></button>
            <button><DeleteIcon/></button>
        </div>
    )
}

export default Post;
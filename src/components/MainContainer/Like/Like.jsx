import './Like.css';
import { useState } from 'react';

function Like(props) {

const { like } = props;

const [likeButton,setLikeButton] = useState(like);

const handleClick = () => {
  setLikeButton(!likeButton);
  }

  return (
    <>
      <i 
        className = { likeButton ? "fa fa-heart likeButton likeButton--full" : "fa fa-heart likeButton" }
        onClick = { handleClick }
      ></i>
    </>
  );
}

export default Like;

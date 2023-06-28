import './Like.css';
import { useState } from 'react';

function Like(props) {

const [likeButton,setLikeButton] = useState(false);

const handleClick = () => {
  setLikeButton(!likeButton);
  }

const { like } = props;

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
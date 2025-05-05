import "./App.css";
import { useState } from "react";

export function LikeButton() {
    const [count, setCount] = useState(999);
    const handleClick = () => {
      setCount(count + 1);
    };
    return (
      <span className="likeButton" onClick={handleClick}>
        ♥ {count}
      </span>
    );
  }
   
export function DisLikeButton() {
    const [count, setCount] = useState(1);
    const handleClick = () => {
      setCount(count + 1);
    };
    return (
      <span className="DislikeButton" onClick={handleClick}>
        😒 {count}
      </span>
    );
  }

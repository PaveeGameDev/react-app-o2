import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/Ai";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive(!active);
    onClick();
  };

  if (active) return <AiFillHeart onClick={toggle} color="pink" size={20} />;

  return <AiOutlineHeart onClick={toggle} size={20} />;
};

export default Like;

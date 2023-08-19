import { ReactNode } from "react";
import { useState } from "react";

interface Props {
  children: string;
  length?: number;
}

const ExpandableText = ({ children, length = 100 }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const toggleSum = () => {
    setExpanded(!expanded);
  };
  if (children.length <= length) return <p>{children}</p>;
  const text = expanded ? children : children.substring(0, length);

  return (
    <p>
      {text}...
      <button onClick={toggleSum}>{expanded ? "less" : "more"}</button>
    </p>
  );
};

export default ExpandableText;

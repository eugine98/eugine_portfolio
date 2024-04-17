import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";

interface Props {
  children: string;
  maxChars?: number;
}

const Expandable = ({ children, maxChars = 200 }: Props) => {
  const [isExpanded, setExpanded] = useState(false);

  if (children.length <= maxChars) return <p>{children}</p>;

  const text = isExpanded ? children : children.substring(0, maxChars);

  return (
    <p>
      {text}...
      <Tooltip title={isExpanded ? "See Less" : "See More"} arrow>
        <button
          onClick={() => setExpanded(!isExpanded)}
          className="border border-gray-900 pl-2 pr-2 rounded-sm font-normal bg-slate-900 text-white"
        >
          {isExpanded ? "Less" : "More"}
        </button>
      </Tooltip>
    </p>
  );
};

export default Expandable;

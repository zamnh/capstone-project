import React from "react";

export default function HobbyList({ hobbies }) {
  if (!Array.isArray(hobbies) || hobbies.length === 0) {
    return <span>Empty Hobbies</span>;
  }

  return (
    <ul>
      {hobbies.map((hobby, index) => {
        return <li key={`hobby-${index}`}>{hobby}</li>;
      })}
    </ul>
  );
}

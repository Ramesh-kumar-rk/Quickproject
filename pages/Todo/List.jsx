import React from "react";
import "./list.css";
import FlipMove from "react-flip-move";
import { MdDelete } from "react-icons/md";
export default function List(p) {
  const date = new Date();
  const listItems = p.arr.map((item, i) => (
    <div key={i} className="list">
      <input value={item} onChange={(e) => p.edit(e.target.value, i)} />
      <span>{`${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`}</span>{" "}
      {/* <i className="fa-solid fa-trash" ></i> */}
      <span onClick={() => p.del(i)}>
        <MdDelete className="Mddelete" />
      </span>
    </div>
  ));
  return (
    <FlipMove duration={400} easing="ease-in-out">
      {listItems}
    </FlipMove>
  );
}

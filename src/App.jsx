// here we are showing the functional
import React from "react";

export function Item({ name, isPacked }) {
  // all the props are provided in {}
  return (
    <div>
      {name} {isPacked && "✔️"}
    </div>
  ); // all the rendering happens inside this , all the jsx elements
}

export default function Gallery() {
  return (
    <div>
      <h1>Shopping List</h1>
      <Item name="Apples" isPacked={true} />
      <Item name="Pomogrante" isPacked={false} />
      <Item name="Orange" isPacked={false} />
    </div>
  );
}

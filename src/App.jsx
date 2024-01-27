// // // here we are showing the functional
// // import React from "react";

// // export function Item({ name, isPacked }) {
// //   // all the props are provided in {}
// //   return (
// //     <div>
// //       {name} {isPacked && "✔️"}
// //     </div>
// //   ); // all the rendering happens inside this , all the jsx elements
// // }

// // export default function Gallery() {
// //   return (
// //     <div>
// //       <h1>Shopping List</h1>
// //       <Item name="Apples" isPacked={true} />
// //       <Item name="Pomogrante" isPacked={false} />
// //       <Item name="Orange" isPacked={false} />
// //     </div>
// //   );
// // }

// ///making the pure functinos #####

// // what is not the pure funciton ##

// export function Guest({ number }) {
//   return <div>Guest number is {number}</div>;
// }

// export default function GuestGallery() {
//   return (
//     <div>
//       <h1>Guest List</h1>
//       <Guest number={1} />
//       <Guest number={2} />
//       <Guest number={3} />
//     </div>
//   );
// }


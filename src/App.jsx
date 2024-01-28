// // // // here we are showing the functional
// // // import React from "react";

// // // export function Item({ name, isPacked }) {
// // //   // all the props are provided in {}
// // //   return (
// // //     <div>
// // //       {name} {isPacked && "✔️"}
// // //     </div>
// // //   ); // all the rendering happens inside this , all the jsx elements
// // // }

// // // export default function Gallery() {
// // //   return (
// // //     <div>
// // //       <h1>Shopping List</h1>
// // //       <Item name="Apples" isPacked={true} />
// // //       <Item name="Pomogrante" isPacked={false} />
// // //       <Item name="Orange" isPacked={false} />
// // //     </div>
// // //   );
// // // }

// // ///making the pure functinos #####

// // // what is not the pure funciton ##

// // export function Guest({ number }) {
// //   return <div>Guest number is {number}</div>;
// // }

// // export default function GuestGallery() {
// //   return (
// //     <div>
// //       <h1>Guest List</h1>
// //       <Guest number={1} />
// //       <Guest number={2} />
// //       <Guest number={3} />
// //     </div>
// //   );
// // }

// // making the button which will be used in the toolbar

// export function Button({ children, onClick }) {
//   return (
//     <div>
//       <button onClick={onClick}> {children}</button>
//     </div>
//   );
// }

// // making the tool bar which will have two buttoons

// export function Toolbar({ uploadImage, notUploadmage }) {
//   return (
//     <div>
//       <Button onClick={uploadImage}>click alert</Button>
//       <Button onClick={notUploadmage}>not click alert</Button>
//     </div>
//   );
// }

// // making the componeet which will use the toolbar as a child
// export default function ToolBarGalley() {
//   return (
//     <div>
//       <Toolbar
//         notUploadmage={() => {
//           alert("this was not passed");
//         }}
//         uploadImage={() => {
//           alert("this was pressed");
//         }}
//       />
//     </div>
//   );
// }

////Responding to the events page
// making the button which component without any props
// import React from "react";
// export function Button() {
//   return (
//     <div>
//       <button>click</button>
//     </div>
//   );
// }

/// making a button with an handle
// export default function Button() {
//   function handleClick() {
//     alert("clicked");
//   }
//   return (
//     <div>
//       <button onClick={handleClick}>the alert button </button>
//     </div>
//   );
// }

/// using the handle function inline , not outside of the jsx

// export default function Button() {
//   return (
//     <div>
//       <button
//         onClick={function () {
//           alert("helllo");
//         }}
//       >
//         click me to get a heelo{" "}
//       </button>
//     </div>
//   );
// }

// using the handle inline but with an arrow function

// export default function Button() {
//   return <div onClick={() => alert("hello")}> what </div>;
// }

/// making a specific alert button and then using that in other toolbars for different messeges

export function AlertButton({ message, children }) {
  return (
    <div>
      <button onClick={() => alert(message)}>{children}</button>
    </div>
  );
}

export default function ToolBar({ message, children }) {
  return (
    <div>
      <AlertButton message="what are you saying" children="say" />
      <AlertButton message="what are you not saing " children=" dont say" />
    </div>
  );
}

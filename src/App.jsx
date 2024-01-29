//

/// how will i make this onw
/// what do you have to amek it
// i have to make an app
// in app i will have the toolbar components which wil be passed by the app component all the props it needs
// the toolbar will use the Button componets which will accept the props by the toolbart
// the button element will use the deatult buttons , but it will pass the handlerevent porps to onclick

// lets make the simplest of all the elemtns , the button one
// export function Button({onClick ,childern}){
//   return (
//     <div>
//       <button onClick = {onClick}>
//         {childern}
//       </button>
//     </div>
//   )
// }

// // now lets make the function which will use this button function
// export function Toolbar({onPlayMovieButton , onUploadMoveiButton}){
//   return (
//     <div>
//       <Button onCLick = {onPlayMovieButton}>PlayMovie</Button>
//       <Button onCLick = {onUploadMoveiButton}>UploadMovie</Button>
//     </div>
//   )
// }

// // now lets make the app element which uses the tool bar and passes it the props as inline functinos
// export default function App (){
//   return(
//     <Toolbar onPlayMovieButton={()=>alert('you are playing a move , beware of fakhry bhai')}  onUploadMoveiButton={()=> alert('you are uploading the movei ,beware of it office ')}/>
//   )
// }

// lets learn how to propogate the elements till the parents
// but how will we do that
// we will do that by making an element , which uses the button in enclosed div , but that div too will have some onlclick hadler attached to it

// now lets get back to the work

// export default function HussainToolbar(){
//   return(
//     <div onClick={()=>{alert('this is an parent alert to make you laugh ')}}>
//      <button onCLick={()=>alert('you aret playing hte child componeet')}>playing</button>
//      <button onClick = {()=>alert('you are playing the child componeet 2')}>stopping</button>
//     </div>
//   )
// }import React from 'react';

// export function Button({ onClick, children }) {
//   // The button is accepting the handle function as the props
//   function handleClick(e) {
//     e.stopPropagation();
//     onClick();
//   }
//   return (
//     <div>
//       <button onClick={handleClick}>{children}</button>
//     </div>
//   );
// }

// // Now we will use this smart button in the HussainToolbar

// export default function HussainToolbar() {
//   return (
//     <div>
//       <Button onClick={() => alert("you are playing the child component")}>
//         the first button
//       </Button>
//       <Button onClick={() => alert("you are playing the child component")}>
//         the second button
//       </Button>
//     </div>
//   );
// }


/// alhamdulliah , shall now we advance towards the state management 

// now we will make an musem gallery , which feteches the data from the data file , and then shows the data as heading , the index of the picture and the image and some of the description about the picture 
// what are you saing how ,will we do that 
// its so easy get the data , we have go the data , now what to do , 
// 
import {sculptureList} from './data.js'
import React from 'react'
const data = sculptureList
export default function Museaum(){
// shall we first write the jsx or the java script , i think js will be writd 
// no first the masooss then the maqool thats why the jsx firs 
// now lets write the js which is not react perferct 

//but what to write 
// first make a variabel to store the index which we will increae with the handler funciton 
var index = 1
function IndexHandler(){
  index = index +1+1
}
return(
  <div>

    <h1>Museaum Arts </h1>
    <button onClick= {Inde}>Next</button>
    <button onClick= {IndexHandler}> Next</button>
    <h3>{data.index} out of {data.length}</h3>
    <h2>the painting name {data.name}</h2>
    <img scr = {data.url} alt = {data.url}>
    <p>data.description</p>    
    
    
  </div>
)
}
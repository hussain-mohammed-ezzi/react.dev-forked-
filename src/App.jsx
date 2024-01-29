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

export default function HussainToolbar(){
  return(
    <div onClick={()=>{alert('this is an parent alert to make you laugh ')}}>
     <button onCLick={()=>alert('you aret playing hte child componeet')}>playing</button>
     <button onClick = {()=>alert('you are playing the child componeet 2')}>stopping</button>
    </div>
  )
}


// now lets try to stop this propagation using e.stopPropgation
// how will we do that , 
// we will first make the button element which stops the propgations and then repeatedly used thatn 
export function Button ({onClick}){ // hte button is accepting the handlefunction as the props 
  function handleClick(e){
    e.stopPropogation()
    onClick()
  }
  return(
    <div>
    <button oncClick= { handleClick}></button>
    </div>
  )
}

// this button element can also be written as 
export function Button ({onClick}){ // hte button is accepting the handlefunction as the props 
  
  return(
    <div>
    <button oncClick= { handlk}></button>
    </div>
  )


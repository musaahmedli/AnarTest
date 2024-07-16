import { useState } from "react";
import { Todos } from "./Todos";
import InputForm from "./InputForm";
// import User from "./User";
// import { withTheme } from "./withData";
// import { ErrorBoundry } from "./ErrorBoundry";
import { ITodoItem } from "./model";

// function App({theme}) {
function App() {
  const [list, setList] = useState<ITodoItem[]>([]);

  const submitHandler = (inputVal:string) => {
    // console.log("destract",[...list]);
    // console.log("list",list);

    setList([
      ...list,
      { id: list.length + 1, completed: false, text: inputVal },
    ]);
  };

  const deleteTodoItemHandler = (id:number) => {
    const filteredList = list.filter((item) => item.id !== id);
    setList(filteredList);
  };

  const editTodoItemHandler = (item:ITodoItem) => {
    const transformedList = list.map((li) => {
      if (li.id === item.id) {
        return item;
      }
      return li;
    });
    setList(transformedList);
  };

  return (
    <div>
      {/* {theme} */}
     {/* <ErrorBoundry> */}
     {/* <User anotherProps={"anotherProps"}/> */}
     {/* </ErrorBoundry> */}
      <InputForm submitHandler={submitHandler} />
      <Todos
        editTodoItemHandler={editTodoItemHandler}
        deleteTodoItemHandler={deleteTodoItemHandler}
        list={list}
      />
    </div>
  );
}
export default App;





// export default withTheme(App);

// import React, { useState } from "react";
// export function App() {

//   const [inputVal, setInputVal] = useState("");
//   const [list,setList]=useState([])

//   const InputChangeHandler = (value) => {
//     setInputVal(value);
//   }
//   //debugger;
//   // console.log('inputVal',inputVal)
//   const deleteTodoItemHandler=(id)=>{
//     const filterList = list.filter((item)=>item.id!==id);

//     setList(filterList)
//   }

//   const submitHandler=(e)=>{
//     e.preventDefault();
//     setList([...list,{id:list.length+1, completed:false, text:inputVal}])
//    setInputVal("")
//   }

// //   // console.log(list);

//   return (
//     <div>
//       <form onSubmit={(e)=>submitHandler(e)}>
//         <input
//           value={inputVal}
//           type="text"
//           onChange={(e) => { InputChangeHandler(e.target.value)}}

//         />
//         <input type="submit" />
//       </form>
//       <Todos deleteTodoItemHandler={deleteTodoItemHandler} list={list}/>
//       <Lololo  isLoading/>
//     </div>
//   )
// }

// const Todos = ({list,deleteTodoItemHandler})=>{
//   return(
//     <ul>
//       {list.map((item)=><TodoItem deleteTodoItemHandler={deleteTodoItemHandler} key ={item.id}{...item}/>)}
//     </ul>
//   )
// }
// const TodoItem=({id,text,completed,deleteTodoItemHandler})=>{
// return(
//   <li>
//     {text}
//     <button onClick={()=>deleteTodoItemHandler(id) }>Delete</button>
//   </li>
// )
// }

// const Lololo=({isLoading})=>{

//  return(
// <>
// {isLoading && <h1>Loading.......</h1>}
// {!isLoading &&<h1>Lololo</h1>}
// </>
//   )

// }

//                                            STATE
// export function App(){
// const [state,setState]=useState({name:"Anar"});

// const clickHandler =()=>{
//   setState({name:"Ruslan"})
// }
// console.log(state);
// return(
//   <div>
//     <form>
//       <input type="text"/>
//       <input type="submit"/>
//    <h1 onClick={clickHandler}>{state.name}</h1>
//     </form>
//   </div>
// )
// }
// class Test extends React.Component{
//   state={
//   name :"Anar"
//   }
//   clickHandler=()=>{
//     this.setState({name:"Musa"})
//   }
//   render(){
//     return <h1 onClick={this.clickHandler}>{this.state.name}</h1>
//   }
// }

//                                           Uncontrolled Compopnent
// import React from "react";

// export function App() {
//   const handlerFormSubmit = (e) => {
//     e.preventDefault();
//     const form = new FormData(e.target);
//     form.forEach((value, key) => { console.log(value, key) })
//   }
//   return (
//     <form onSubmit={handlerFormSubmit}>
//       <h1>Login Form</h1>
//       <InputField label="Email" type="email" id="email" />
//       <InputField label="Password" type="password" id="password" />
//       <input type="submit" value="Login" />
//       <ConditionalComp  />

//     </form>
//   )
// }

// function InputField({ label, id, type, value }) {
//   return (
//     <div>
//       <label htmlFor="id">{label}</label>
//       <input id={id} type={type} value={value} />
//     </div>
//   )
// }
// function ConditionalComp({ isLoading }) {
//   return <>
//     {isLoading && <h1>Loading</h1>}
//     {!isLoading && <Employees />}</>
// }
// function Employees() {
//   const employees = ["Ali", "Alakbar", "Rufat"]
//   return (
//     <ul>
//       {employees.map((name,i) => <Item key={i} name={name} />)}
//     </ul>
//   )
// }
// const Item = ({ name }) => {
//   return(
//   <li>
//     {name}
//   </li>)
// }

//                                       Introduction
// export function App() {
//   const sayHello = (event) => {
//     console.log(event);
//   }
//   return (
//     <div className="App">
//       Hello
//       <Test clickHandler={sayHello} name="Arif" >
//       Arifd
//       </Test>
//     </div>
//   );
// }

// export function Test({ children, name = "Anar" ,clickHandler}) {
//   console.log(children)
//   return (
//     <span onClick={clickHandler} style={{ paddingLeft: "12px" }}>
//       {children}
//       </span>
//   )
// }

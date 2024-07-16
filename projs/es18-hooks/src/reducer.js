import { useReducer, useState } from "react";
// kompanentin colunde yaradiriq ki komponent her defe re render olunanda
//  fnctin tezden icra olsunmasin
//action={payload,type}
const reducer = (state, action) => {
  if (action.type === "increment") {
    return { count: state.count + 1 };
  } else if (action.type === "decrement") {
    return { count: state.count - 1 };
  }
   else if (action.type === "10decrement") {
    return { count: state.count +10 };
  }
   else if (action.type === "x") {
    return { count: state.count + action.payload};
  }
  return state;
};
export function Reducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  //   useReducer e 3 sey otururuk qebul edir yeni 1 reducer 2 initial value
  return (
    <>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "10decrement" })}>10+</button>
      <button onClick={() => dispatch({ type: "x",  payload:20})}>20+</button>
      <span>{state.count}</span>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </>
  );
}

// 18 VERSIYADAN EVVEL problem var idi bir nece dene usestate var idise
//  eyni anda bag seklinde arxa terefde state i set elemirdi arxa terefde
//yeni bag seklinde biryerde etmirdi
// yeni tutaq ki 2dene setstate eyni anda cagiririq 
//  const [count,setCount] = useState(0)
//  const [count1,setCount1] = useState(0)
// setCount(1)
// setCount(1)
// useEffectle baxsaq 
//  react.useEffect(()=>{
    // console.log("updated")
// })
//  burda goreceyiy ki minusa plusa basanda 1 defe render olunur
// 18 v den sonra bag seklinde olur 2 dene setstate gedir ama react arxa terefde 2sin 1 yerde edir 
// componentimiz 1 defe render olunur
// bir nece dene yerde eyni vaxtda setstate elemey mecburiyyetinde oluruq
// o vaxti reducerin komeyi var idi bir yerden handle edirdik multpleupdate qabagin alirdiq
// 18den sonra uje bag update geldi deyene react arxa terefde setstate deyismesini bag seklinde eliyir deyene boyuy bir ferq qalmadi
// logici kenara cixaririrq sanki 
// basqa action da ola biler  action vere bilerik vesair
//  else if (action.type === "10decrement") {
//     return { count: state.count +10 };
//   }



//  reducerle bagli esas bilmeli oldugumuz sey 
// state goturur action qebu edir action olur action  type i mutleq olur payload 
// optionaldir ola da biler olmuya da biler
// payload ise biz burda da bir data gondere bilerik ki 
//       <button onClick={() => dispatch({ type: "x",  payload:20})}>20+</button>

// else if (action.type === "x") {
    // return { count: state.count + action.payload};
//   }
// yeni bir bir yazmiriq 10 ustegel falan action payloada veririk sert de action.payload yaziriq ozu tutur















// import { useState } from "react"

// export function Reducer(){
//     const [count,setCount] = useState(0)
//     return(
//         <>
//         <button onClick={()=>setCount((prevState)=>prevState+1)}>+</button>
//         <span>{count}</span>
//         <button onClick={()=>setCount((prevState)=>prevState-1)}>-</button>
//         </>
//     )
// }

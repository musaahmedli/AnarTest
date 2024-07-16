// import { useEffect, useState } from "react";

// export function withData(Component) {
//   return (props) => {
//     const [data, setData] = useState();
//     const [isLoading, setLoading] = useState(true);

//     useEffect(() => {
//       new Promise((res, rej) => {
//         setTimeout(() => {
//           res({
//             name: "Anar",
//             surname: "Soltan",
//           });
//         }, 3000);
//       }).then((val) => {
//         console.log("----theVal----", val);
//         setLoading(false);
//         setData(val);
//       });
//     }, []);
//     return isLoading ? <p>Loading...</p> : <Component data={data} {...props} />;
//   };
// }


// export function withTheme(Component){
//     return()=>{
// const theme = localStorage.getItem("theme-mode") || "dark" 
//         return <Component theme={theme} /> 
//     }
// }
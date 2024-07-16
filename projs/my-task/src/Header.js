// import { Box, Input } from "@chakra-ui/react";
// import { useEffect, useState } from "react";
// export function Header() {
//   const [search, setSearch] = useState("");
//   const [users, setUser] = useState([]);


//   // const handleOnchangeSearch = (e) => {
//   //   setSearch(e.target.value);
//   // };

//   // const fetchData = async () => {
//   //   const res = await fetch("http://localhost:4001/");
//   //   const data = await res.json();
//   //   console.log("+++++++++++++++++++++", data);
//   //   setUser(data);
//   //   return data;
//   // };
//   // const fetchData = as(val) => {
//   //   fetch("http://localhost:4001/")
//   //   .then((res)=>res.json())
//   //   .then((data)=>{console.log("===========",setUser(data))})
//   // };

//   const handleChange = (val) => {
//     setSearch(val);
//     fetchData(val);
//   };
//   return (
//     <div>
//       <Box bg="white" w="100%" p={3} color="black">
//         Food Recipe
//         <Input
//           htmlSize={4}
//           width="auto"
//           placeContent="Enter Items"
//           onChange={(e)=>{handleChange(e.target.value)}}
//         />
//       </Box>
//     </div>
//   );
// }

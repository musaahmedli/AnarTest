// import { Navlink } from "../navlinks";
import "../navbar/index.css";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";

import { Search2Icon } from "@chakra-ui/icons";
import { useState } from "react";

export default function Navbar() {
  const [searchParam, setSearchParams] = useSearchParams();

  // const[filter,setFilter] = useState("")
  // const [users, setUser] = useState([]);

  // const handleOnchangeSearch = (e) => {
  //   setSearch(e.target.value);
  // };

  // const fetchData = async () => {
  //   const res = await fetch("http://localhost:4001/");
  //   const data = await res.json();
  //   console.log("+++++++++++++++++++++", data);
  //   setUser(data);
  //   return data;
  // };
  // const fetchData = (val) => {
  //   fetch("http://localhost:4001/")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const results = data.filter((user) => {
  //         return (
  //           user && user.content && user.content.toLowerCase().includes(val)
  //         );
  //       });
  //       console.log(results);
  //     });
  // };

  // const handleChange = (val) => {
  //   setSearch(val);
  //   fetchData(val);
  // };

  return (
    <div className="navbar">
      <nav>
        <h2>Food Recipe</h2>
      </nav>
      <form>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Search2Icon color="gray.300" />
          </InputLeftElement>
          <Input
            type="search"
            name="search"
            placeholder="Enter Item"
            className="nav-input"
            onChange={(e) => {
              setSearchParams({ search: e.target.value });
              // handleChange(e.target.value);
            }}
          />
        </InputGroup>
      </form>
    </div>
  );
}

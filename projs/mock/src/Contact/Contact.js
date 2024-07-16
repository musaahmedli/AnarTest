import { DetailsSection } from "../DetailsSection/detailsSection";
import { PersonalInfoSection } from "../PersonalInfoSection/PersonalInfoSection";
import "../Contact/Contact.css";
import { FormProvider, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import React from "react";
import { API_URL } from "../const";
// import React, { useState } from "react";

export function Contact() {
  //   const [data, setData] = useState();
  //   const [loading, setLoading] = useState(false);

  const fetchinitialData = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    // console.log("datam");
    return data;
  };
    // console.log(data);
    // setLoading(false);

  //   React.useEffect(async () => {
  //     const data = await fetchinitialData();       // WARNING VERIR KI USEEFFECT SINXRONDUR ASYNC YAZMISAN
  //     console.log(data);
  //   }, []);
  //

  // React.useEffect(() => {
  //   // setLoading(true);
  //   //   setData(data);
  //   async function fetchData() {
  //     const data = await fetchinitialData();

  //     console.log("---useeffect-data---", data);
  //   }
  //   fetchData();
  // }, []);

  const methods = useForm({
    mode: "all",
    defaultValues: async () => {
      console.log("DEFAULTvALUES");
      return await  fetchinitialData();
    },
    // values: data,
    // defaultValues: {
    //   fullname: {
    //     name: "",
    //     surname: "",
    //   },
    //   phone: "",
    //   gender: "",
    //   texts: [""],
    // },
  });
  const handleSubmit = methods.handleSubmit(async (value) => {
    try {
      const res = await fetch(API_URL, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(value),
      });
      // console.log(res);
    } catch (error) {
      console.log("------ERROR-----", error);
    }
    // try {
    //   const res = await fetch(API_URL, {
    //     headers: {
    //         "Content-Type": "application/json",
    //       },
    //     method: "POST",
    //     body: JSON.stringify(value),
    //   });
    // } catch (error) {
    //   console.log("------", error);
    // }
  });

  //   if (loading) return "loading....";
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit}>
        <h1>Contact</h1>
        <PersonalInfoSection />
        <DetailsSection />
        <input type="submit" value="submit" />
      </form>
      <DevTool control={methods.control} />
    </FormProvider>
  );
}

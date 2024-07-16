// type TPerson = {
//   fullname: {
//     name: string;
//     surname: string;
//   };
//   age?: number;
// };

// let person: TPerson = {
//   fullname: {
//     name: "Anar",
//     surname: "Soltan",
//   },
//   age: 23,
// };

// type TEmployee = {
//   name: "string";
//   surname: "string";
//   possition: "junior" | "middle" | "senior";
// };
// let Employee = {
//   name: "Anar",
//   surname: "Soltan",
//   possition: "junior",
// };
//                                      TRIBE INTERSECTION
// type TPerson = {
//   name: string;
//   surname: string;
//   age: number;
// };

// type TEmploye = {
//   possition: "junior" | "middle" | "senior";
// } & TPerson;

// let person: TEmploye = {
//   name: "Anar",
//   surname: "Soltan",
//   age: 23,
//   possition: "junior",
// };
//                            UNKNOWN VƏ ANY FƏRQİ
// let myName: unknown = "Anar";
// let change: string = test as string;

// let changes = function calc(x: unknown, y: unknown): number | void {
//   if (typeof x === "number" && typeof y === "number") {
//     x + y;
//   }
// };
//                                     EXTEND INTERFACE
// interface IPerson extends IPerson3 {
//   name: string;
//   surname: string;
//   age: number;
// }

// interface IPerson3 {
//   phone: string;
// }

// let person: IPerson = {
//   name: "Anar",
//   surname: "Soltan",
//   age: 23,
//   phone: "+994709952969",
// };

//                             CLASS INTERFACE

// interface IPerson4 {
//   name: string;
//   surname: string;
// }
// interface IPerson4 {
//   age: number;
// }

// interface IEmploye extends IPerson4 {
//   position: "junior" | "middle" | "senior";
// }

// class Test implements IEmploye {
//   name = "Anar";
//   surname: "Soltan";
//   age: 23;
//   position: "junior"
// }
//                             readonly
// interface IItems {
//    readonly position: "junior" | "middle" | "senior";
// }

// const itemTest: IItems = {
//   position : "junior"
// };
//  itemTest.position = "senior"
// bunu deyismemek ucun  qabagina readonly atiriq

//                               FUNCTION TYPE

//    ya interface ile ya da typela ede bilerik
// interface ISumFn {
//   sum :(x: number, y: number)=> number;
//   onClick: (x: number, y: number) => void;
// }
// deyisene tanitdiq deye ozu obyekt kimi basa dusur,
//  esasen bu yoldan istifade olunur birbasa type sey kimi elemirik
// cun ki argument kimi gelir meselen btn onclicikn yaziriq o da parentddan gelir
// type TSumFn = (x: number, y: number) => number;
// const sum: TSumFn = (x, y) => x + y;

//                                 type a value assign etmek TYPEOF

// as const kimi verdiyde cpnst person2 de name nedise o olmalidi yeni name anar surname soltan olmalidir
//
// const person ={
//   name:"Anar",
//   surname:"Soltan"
// }as const

// type TPerson = typeof person

// const person2 :TPerson = {
// name:"Anar",
// surname:"Soltan"
// }
//                                               KEYOF - Index Operator
// 
// const person = {
//   name: "anar",
//   surname: "soltan",
// }

// type Tpost = keyof typeof person

// interface IPerson {
//   name: string;
//   surname: string;
// }

// type Tperson = keyof  IPerson

// const data:IPerson = {
// name:"sada",
// surname:"as",
// }



//                                           interface indexle gotrumek
//                               
//                                         Indexed access operator

// interface IPerson {
//   age:23,
//   fullname : {
//     name:string,
//     surname: string
//   }
// }

// type TFullname = IPerson["fullname"]                 // index alma -Indexed access operator

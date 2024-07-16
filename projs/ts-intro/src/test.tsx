// export default function APP() {
//   return (
//  <>
//  <h1>dsad</h1>
//  <Button onClick={()=>{console.log("Hello TS")}} variant="gost"/>
//  </>
//   );
// }
//                                       GENERIC TYPE

// class Box<T > {
//   values: T;

//   constructor(values: T) {
//     this.values = values;
//   }
// }
// const numbers = new Box<number[]>([1, 2, 3, 4]);
// const names = new Box<string[]>(["Anar", "Musa", "Ruslan"]);

// genecric type string tipli array qebul ede biler yazmaq ucun generic tipe extend edirik

// class Box<T extends string[]> {
//   values: T;
//   constructor(values: T) {
//     this.values = values;
//   }
// }

// const names = new Box <string[]>(["Anar","Anar2"])

// generic type-a default value da vere bilerik <T="HELLO>"

// class Box <T ="hello">{
//     values:T;
//     constructor(values:T){
//         this.values = values
//     }
// }
// const box  = new Box("hello")

//                                               Index Signatures
// interface IPerson {
//   name: string;
//   [key: string]: string | number | ;
// }
// let person = {
//   name: "Anar",
//   age: 23,
//   surname: "Soltan",
// };

//                                              Conditinal Type

//

// interface IPerson {
//   name: string;
//   surname: string;
// }

// interface IAnimal {
//   cins: string;
// }

// type TCreator = IPerson extends {name:string} ? IPerson : IAnimal ;

//                                  Conditional type dinamik olarak GENERIC type yaratmaq

// interface IPerson {
//   name: string;
//   type: "human";
// }

// interface IAnimal {
//   name: string;
//   type: "animal";
// }

// interface IItem {
//   notAlive: boolean;
// }

// type TCreator<T> = T extends { name: string } ? T : never;
// // never yaziriqc= k iname string olanda t di eks halda bele bise yyoxdu yeni bele bisey bas vermemelidir
// //
// const creat: TCreator<IAnimal> = {
// };

//                                  MAPPED TYPE

//             Generic olmadan

// interface IPerson {
//   name: string;
//   surname: string;
//   age: number;
// }

// type TKeys = keyof IPerson

// type TOptionalIPerson ={
//    [ K  in  TKeys] ?: IPerson[K]
// }
//  const test :TOptionalIPerson={

//  }
//                                   Generic mapped type

// interface IPerson {
//   name: string;
//   surname: string;
//   age: number;
// }

// type TKeys<K> = keyof K

// type TOptional<T> = {
//   [K in TKeys<T>]?: T[K];
// };

// const test: TOptional<IPerson> = {};

//                                 Mapped Readonly type

//  yeni bir type yaradaq map edib readonly edek

// interface IPerson {
//     name: string;
//     surname: string;
//     age: number;
//   }

//   type TKeys<K> = keyof K

//   type TReadOnly<T> = {
//      readonly [K in TKeys<T>]?: T[K];     // -readonly yazdiqda readnly deyil deyirik. Default +readonly gelir
//   };
//   const test : TReadOnly<IPerson> = {
//      name: "sadasd"
//   }
//   test.name = "Anar"

//                                Mapped type readonly

// interface IPerson {
//   name: string;
//   surname: string;
//   agee: number;
// }

// type TKeys <K> = keyof K

// type TReadOnly<T>={
//      -readonly[K in TKeys<T>] ?: T[K]
// }

// const test: TReadOnly<IPerson> = {
//  name :" anar"
// }

// test.name = "asda"

interface IPerson {
  name: string;
  surname: string;
  age: number;
}

type TKey<K> = keyof K;

type TRequired<T> = {
  [L in TKey<T>]: T[L];
};
const test: TRequired<IPerson> = {
  surname: "Soltan",
  age: 23
};

test.name = "sanar"

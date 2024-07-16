//                                                             CALLBACK
// function test (callback){
//     const name = "Anar";
//     callback(name);
// }
// const sayHello = function(name){
//     console.log(`Hello ${name}`);
// }
// test(sayHello)
//                                                             CLOSURE
// function outer (){
//     let num = 5;
//     function inner(){
//        return num+5;
//     }
// return inner;
// }
// let showFuntion = outer();
// console.dir(showFuntion );

// let a=10
// function test (){
//     console.log(a);
//     if(a>5){
//         console.log("inside" +a);
//     }
//   var a=6;
//   console.log("outsida"+ a);
// }
// test()

//                                                      ARRAYS

// const ages = [
//   { id: 1, name: "Abul" },
//   { id: 2, name: "Zaur" },
//   { id: 3, name: "Fidan" },
//   { id: 4, name: "Anar" },
//   { id: 5, name: "Abul" },
// // ];
// ages.filter((x) => {
//   if (x.name === "Fidan") {
//     x.name = "Leman";
//   }
//   return ages;
// });
// console.log(ages);
// ages.find((x) => {
//   if (x.name === "Abul") {
//     x.name = "Anar";
//   }
//   return ages;
// });
// console.log(ages);

// ages.map((x) => {
//     if (x.name === "Abul") {
//         x.name = "Zakir"
//     }
//     return ages;
// })
// console.log(ages);
//
// const names =['zakir','Eldar','Anar','Sabir','Xeyal','babil'];

// console.log(names.sort((a,b) => a.localeCompare(b)));

//
//                                               Object/ CLAS

//
// class Person {
//     construtor(name, age) {
//                this.name = name;
//                this.age=age;
//     }
// }
// let anar = new Person("Anar",23);
// console.log(anar);

// class Animal {
//   constructor(typeOfAnimal, colorOfAnimal) {
//     this.tpye = typeOfAnimal;
//     this.color = colorOfAnimal;
//   }
//   getColor() {
//     console.log(this.color);
//   }

//   eat() {
//     if (this.tpye === "domestic") {
//       console.log("The animal eat grass");
//     } else {
//       console.log("The animal eat meat");
//     }
//   }
// }
// class Wolf extends Animal{
//     constructor(){
//         super("wild","black");

//     }

//     makeSoun(){
//         console.log("This animal howls");
//     }
// }
// class Hen extends Animal{
//     constructor(){
//         super("domestic","grey")
//     }
//     makeSoun(){
//         console.log("This animal qaks");
//     }
// }
// const animal = new Animal("wild","black");
// const wolf = new Wolf();
// const hen = new Hen();
// console.log(hen);
// animal.getColor();

// console.log(wolf)
// wolf.eat();
// wolf.makeSoun()

//                                                   Palindrome
//
//
// let arr = ["salam", 'anar', 'madam', 'level', 'sagol', 'river', 'ata', 'oppo'];

// for (let values of arr) {

//     let reverseArr= values.split("").reverse().join("");
//     if(values===reverseArr){

//     console.log(`it is a palindrome ${values}=${reverseArr}`);
//     count++
//    }
//    else{
//     console.log( `${values} != ${reverseArr}`);
//    }

// }
// console.log('polindrome count = '+count)

// let count = 0;
// let arr = ["salam", 'anar', 'madam', 'level', 'sagol', 'river', 'ata', 'oppo'];
// for (let i of arr) {
//     let polin = true
//     for (let j = 0; j < i.length / 2; j++) {
//         if (i[j] !== i[i.length - 1 - j]) {
//             polin = false
//             break
//         }
//     }
//     if (polin) {
//         arrSize.push(i)
//         count++
//     }
// }
// console.log(count)

// for (let word of arr) {
//     // console.log(Math.floor(word.length/2-1));
//     for (let j = 0; j < word.length / 2; j++) {
//         if (word[j] !== word[word.length - j - 1]) {
//              break;
//         }
//         else{
//             count++;
//         }
//     }

// }
// console.log(count);

// const test =arr.reduce((ac,crr)=>{
//     let polindrome = true
//     for(let i=0;i<=crr.length/2;i++){
//         if(crr[i] !== crr[crr.length-1-i]){
//             polindrome=false
//             break
//         }
//     }
//     if(polindrome){
//         ac.push(crr)
//     }
//     return ac
// },[])
// console.log(test.length,test)

//                                           TASK
//   const calPoints = function (operations) {
//       let arr = [];
//       for (let i = 0; i < operations.length; i++) {
//           if (operations[i] === "C") {
//               arr.pop()
//           } else if (operations[i] === "D") {
//               arr.push(arr[arr.length - 1] * 2)
//           } else if (operations[i] === "+") {
//               arr.push(arr[arr.length - 1] + arr[arr.length - 2])
//           } else {
//               arr.push(Number(operations[i]))
//           }
//       }
//       return arr.reduce((acc,curr) =>acc+curr,0)
//   }
//   calPoints(["5","-2","4","C","D","9","+","+"])

//                                     REST/ SPRED
// var arr = [1,{
//     name:"anar",
//     father:{
//         name:"metleb"
//     }
// }]  ;
// var arr2 = ['asda','asda',...arr];
// arr2[arr2.length-1].name="AAAAAAAAAA";
// console.log(arr2);

// var arr = [1, {
//     name: "anar",
//     father: {
//         name: "metleb"
//     }
// }]
// var arr2 = ['asda', 'asda', ...structuredClone(arr)];
// arr2[arr2.length-1].name="veli";
// console.log(arr2);
// console.log(arr);

//                                                   SET / MAP
// const obj = new Map([["name","anar"],["surname","metleb"]]);

// obj.set("name","veli")
// const obj2 = {age:30}
// obj.set(obj2,"salam")
// for(const [key,value] of obj){
//     console.log(key,value)

// }

// const arr = new Set();
// arr.add(1);
// arr.add(2);
// arr.add(3);
// arr.add(4);
// arr.add(5);
// arr.add(6);
// console.log([arr])

// const s = new Set();
// var a={name:"Anar"};
// var b = {surname:"Soltan"};
// s.add(a).add(b);
// var keys = [...s.keys()];
// var values = [...s.values()];
// console.log(values[0]);

//    const arr = [1,2,3,3,4,5,6,6,7,8,9,9]
//  const myArr = new Set([...arr]);
//  console.log([...myArr]);

//                                                 uniquel
//ELEMENTIN ARRAYIN NECE ELIYEY KI YENI BIR ARRAY YARATMADAN UZERINDE DEYISIKLIK EDEK? 2 FORLA ETMEDEN
// const arr = [1, 1, 2, 3, 3, 4, 5];
// function getUniqueArr(array) {
//   const mapper = {};
//   for (let index = 0; index < array.length; index++) {
//     if (mapper[array[index]]) {
//       mapper[array[index]] += 1;
//       continue;
//     } else {
//     mapper[array[index]] =1
//     }
//     console.log(mapper);
//   }
// }
// getUniqueArr(arr)

// const test = [1, 2, 2, 3, 4, 4, 5, 6, 7, 7];
// const arr = test.reduce((acc, curr) => {
//     if (!acc.includes(curr)) {
//         return [...acc,curr];
//     }
//     return acc;
// },[])

// acc = [1, 2, 3, ]
// console.log(arr);
// const arrBase = [1, 2, 3, 3, 4, 5, 5, 6, 7, 7, 7];
// const arr= arrBase.reduce((acc,curr)=>{
// if(!acc.includes(curr)){
//     return[...acc,curr];
// }
// return acc;
//     },[]);

// console.log(arr);

// const newArr = arrBase.filter((acc, curr, a) => {

// }, [])
// console.log();

// const newArr = arrBase.filter((x,index,arr)=>{
// return index ===arr.indexOf(x)
// })
// console.log(newArr);

// const newArr = arrBase.filter((x, index, arr) => {
//     if (x !== arr[index + 1]) {
//         return x;
//     }
// });
// console.log(newArr);

//                                               CALL / APLY / BIND
// Bind yeni function qaytarir

//                                                     APLY-BIR NECE KONTEKS
//  function sayHello (greeting,namee){
//     console.log(`${greeting} ${namee} ${this.surname}`);
//     };
//     const obj = {
//         surname:"Soltan",
//     };
//     sayHello.apply(obj,["Hello","Anar"])

// function sayHello (greeting){
// console.log(`${greeting} ${this.surname}`);
// }
// const obj = {
//     surname:"Soltan",
// };
// sayHello.apply(obj,["Hello"])
//                                                     Bind

// function sayHello(greeting, namee) {
//     console.log(`${greeting} ${namee} ${this.surname}`);
// };
// const obj = {
//     surname: "Soltan",
// };
// const test = sayHello.bind(obj, "Hello", "Anar")
// test()

//                                                      STATIC METOD
// class Main {
//     constructor(){

//     }
//     static {
//         console.log("salam");
//     }
//     static sayHello(){
//         console.log("Salam Anar");
//     }
//     static test = "Sagol"
// }
// console.log(Main.test);
// Main.sayHello()
//                                  Optional chaining
// const test = {
//     name:"Anar"
// }
// const fatherName = test.fatherName? test.father.name:"Yoxdur";
// console.log(test.father?.name);
//                                        NULLISH COALISING
// const test = {
//     name:"Anar"
// }
// const fathername = test.father?.name ?? "Salam";
// console.log(fathername);
// const fathername = 3 ?? "Salam";
// console.log(fathername);

//                                         DOM

// const body = document.querySelector("body");
// const img = document.querySelector("img")
// const firstList = document.querySelector(".list1")
// const ul = document.querySelector("#list");
// const newList = document.createElement("li");

// newList.innerHTML="<em>List 6</em>";

// img.classList.remove("active");                          // class silir
// img.classList.add("active") ;                        // class add edir
// console.log(img.classList.contains("active"));          // clasin olub olmamagin yoxlayir
// ul.replaceChild(newList,firstList);                // elemnt evezetme 1ci yeni 2ci evezedlen
// console.log(img );
// console.log(img.getAttribute("src"));
// img.setAttribute("alt","cat image")           //varsa yenileyir yoxdursa yaradir
// img.removeAttribute("style");                // atribut silir

// img.src="./63331.jpg"                         // src deyisir

// ul.append(newList);

// const input = document.querySelector("input");
// const addBtn = document.querySelector("button");
// const ul = document.querySelector("ul");
// function toDoItem() {
//     if (!input.value.trim()) {

//         return;
//     }
//     const li = document.createElement("li");
//     li.innerText = input.value;
//     ul.append(li);
//     input.value = "";
//     const dltBtn = document.createElement("button");
//     dltBtn.innerText = "Delete";
//     dltBtn.style.color = "red";
//     li.append(dltBtn);
//     dltBtn.addEventListener("click", () => {
//         li.remove()
//     });
//     li.addEventListener("click",()=>{
//         li.classList.toggle("dltBtn")
//     })
// }
// input.addEventListener("keyup",(e)=>{
//     if(e.key === "Enter"){
// toDoItem()
//     }
// })
// addBtn.addEventListener("click", toDoItem)

//                                            ASINXRON
//  function countDown (num){
//     const elem = document.querySelector(".boom");
//     if(num === -1){
//         elem.innerText = "BooM!!!"
//     }
//     else{
//         setTimeout(() => {
//             elem.innerText = num;
//             countDown(num-1)
//         },1000);
//     }
//  }
//  countDown(5);
// const test = new Promise((resolve,reject)=>{
// resolve(5)
// }).then((value)=>{
//      console.log(value);
// })
// .catch((err)=>{
//     console.log(err);

// })
// function testFnc(){

// }

// function sum(x, y) {
//     console.log(x, y)
//     return x + y;
// }

// const test = (x) => {
//     console.log('salam' + x)
// }

// function addTen(num, callback) {
//     return callback(num, num);
// }
// console.log(addTen(15, sum));
// function test(x, y) {
//     return x + y;
// }
// function ad10Fnc(num, ad2) {
//     return ad2(15, num)
// }
//  function doubleResult2 (num,sumCallback){
//     return 2*ad10Fnc(num,sumCallback)
//  }
// function doubleResult(num,ad1) {
//     return new Promise((resolve, reject) => {
//         if (typeof num !== "number") {
//             reject("Not a Number")
//         } else {
//             resolve(ad1(num, test));
//         }
//     })
// }
// doubleResult(12,doubleResult2).then((val)=>{
// console.log(val);
// }).catch((er)=>{
// console.log(er);
// }).finally(()=>{
//     console.log("Finally");
// })
// function test(num1, num2) {
//     return new Promise((resolve, reject) => {
//         if (typeof num1 !== "number" || typeof num2 !== "number") {
//             reject("Not a number")
//         } else {
//             resolve (num1+num2);
//         }
//     }).then((value) => {
//         return 10 + value;
//     }).then((val) => {
//         return 2 * val;
//     })
// }
// test(2,2).then((val)=>{
//     console.log(val);
// }).catch((err)=>{
// console.log(err);
// }).finally(()=>{
//     console.log("Finally");
// })

// function ayncTest() {
//     const promise = new Promise((resolve, reject) => {
//         console.log("Promise inside");
//         resolve("Promise Reselvo")
//     }).then((val) => {
//         console.log("Then Inside");
//         console.log(val);
//     });
//     console.log("Start")
// }
// ayncTest()

// function test(number) {
//     const elemH1 = document.querySelector(".h1");
//     if (number === -1) {
//         elemH1.innerText = "BooM"
//     }
//     else {
//         setTimeout(() => {
//             elemH1.innerText = number;
//             test(number - 1);
//         }, 1000);
//     }
// }
// test(3)
// const p1 = new Promise((resolve)=>{
//    setTimeout(() => {
//     resolve("Promise resolve P1")
//    }, 2000);
// });
// const p2 = new Promise((resolve)=>{
//     setTimeout(() => {
//      resolve("Promise resolve P2")
//     }, 3000);
//  })
// const handle = () => {
//     console.log("Handle");
//     p2.then((val2)=>{
// console.log("Vall", val2)
//     })
//     p1.then((val1)=>{
//             console.log("val1", val1);
//     });
// }
// handle()
//                                                           PROMISE METHODS
// function promise1() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Promise1")
//         }, 1000);
//     })
// }
// function promise2() {
//     return new Promise((resolve) => {
//         resolve("Promise2")
//     })
// }
// function promise3() {
//     return new Promise((_,reject) => {
//         reject ("Promise3")
//     })
// }
// Promise.all([promise1(), promise2(), promise3()]).then((val) => {
//     console.log(val);
// }).catch((err)=>{
// console.log(err)
// })

//                                                        THEN in icinde ERROR tutmaq
// function sendMsg() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Error")
//         }, 1000);
//     })
// }
// function alertMsg() {
//     alert("Pls sign in or sign up")
// }

// sendMsg().then((val) => {
//     if (val === "User not...") {
//         alertMsg();
//     }
//     if (val === "Error") {
//         throw new Error("Error happened")
//     }
// }).then((vall) => {
//     console.log(vall);
// }).catch((err) => {
//     console.log(err.message);
// })
// const arr = [1,2,3,4,5];

// console.log(
//     arr.reduce((acc,curr)=>{
//      acc.push({id:curr});
//      return acc;
//     },[]));
// function getStudens(url) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         // debugger;
//         try {
//             xhr.addEventListener("readystatechange", () => {
//                 if (xhr.readyState===4 && xhr.status===200) {
//                     resolve(JSON.parse(xhr.responseText));
//                 }
//             })
//         } catch (error) {
//             reject(error)
//         }
//         xhr.open("GET", url);
//         xhr.send();
//     })
// }
//      getStudens("students.json")
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//      console.log(err);
//  })

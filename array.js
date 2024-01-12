// const num = [1, 2, 3, 4];
const myArray = ["shaktiman", "karan"]

const myArray1 = new Array(1, 2, 3, 4)
// console.log(num[1]);

// Array method

// num.push(6)        //push ka kaam hai kisi bhi dataType me value ko add karna
// console.log(num); 
// num.pop()           // .pop ka kaam sirf last end se kisi bhi dataType ke value ko remove kar deta hai.

// myArray.unshift("Sonpari");  //unshift kaa kaam hota hai kisi bhi dataType me index[0] pe value ko add karna.
// console.log(myArray);
// myArray.shift();            // shift ka kaam hota hai value ko remove karna last se 
// console.log(myArray);

// console.log(myArray1.includes(4)); // includes() method se kisi bhi dataType me valuse exist karta hai ya nahi agar hai bollen me answer aayega true, false. 
// console.log(myArray1);
// console.log(myArray.indexOf("karan"));  // indexOf ka kaam hai pata karna ki index value exist karta hai ya nahi agar index value match karega toa boa index ke kon se position hai ye batayega.
//  console.log(myArray);

// const num = [1, 2, 3, 4];
// const newArr =num.join() // .join array ko waind kar deta hai or dataType string me change kar deta hai.
//  console.log(newArr);
//  console.log(num)
//  console.log(typeof(newArr));

//slice, splice

const nums = [0,1,2,3,4,5,6,7,8,9]
console.log('a', nums);

const mySlice = nums.slice(1,3) // .slice me hmare variable ke last index joa select hote hai ushse ek range kam leta hai.
console.log(mySlice);           // or .slice duplicate value get karta hai mtlb orignal value ko menupulet nahi karta.
console.log('b', nums);

const mySplice = nums.splice(1,3);      // .splice orignal array ko hi menupulet karta hai.
console.log(mySplice);          
console.log('c', nums);

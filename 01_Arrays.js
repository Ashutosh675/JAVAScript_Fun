// array- it a collection of multiples datatypes in on variable...
// const arr1=[1,2,3,'Ashu',true]
// console.log(typeof arr1);
//console.log(arr1);

//Arrays Methods

// push,pop

// arr1.push('king')// push the new value directly...
//[ 1, 2, 3, 'Ashu', true, 'king' ] 
//but the orignal value length doesn't change.
//console.log(arr1);
//console.log(arr1.length);

// ...>>>>arr1.pop() // delete the last value of index....>> not passed in any parameter..

// console.log(arr1);

// shift, unshift

 // arr1.unshift(28)// add array in first position....

// arr1.shift()// delete the array in first position...

 // console.log(arr1);


//console.log(arr1.includes(93)); // Ager value exist kerti hai arr1 me then its returns true or not the false..
//console.log(arr1.indexOf(89)); 
// the index 89 is value exist in arr1 then its return the value or not then its return -1..

//copying the Array ...in another datatypes.

//const arr2=arr1.join()
 // console.log(arr2); // 1,2,3,Ashu,true,king converted in string 
 // copy the value but in other datatypes

// console.log(typeof arr2);

 //  splice- it is Affect the original Array 

 const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(0, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]

// Slice- It doesnot effect the original Array..


//slice()
//slice(start)
// slice(start, end)
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]








  







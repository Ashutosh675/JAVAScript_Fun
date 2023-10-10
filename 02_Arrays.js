// const marvel_heros=["thor","Ironman","CaptainAmerica"]
// const dc_heros=["superman","flash","batman"]

// // marvel_heros.push(dc_heros)// mearge the all values
// // console.log(marvel_heros);

// // marvel_heros.concat(dc_heros) // same merge the value. 

// // Spread (...) its behave like add in one array.>> mutiple value in one array
// //...>>[ 'thor', 'Ironman', 'CaptainAmerica', 'superman', 'flash', 'batman' ]




// const newarr= [...marvel_heros, ...dc_heros]
// console.log(typeof newarr);
// console.log(newarr);

// flat()-The maximum recursion depth


//Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth

// const AArray=[1,2,3,[34,4],[34],7,[90,8],8,6]
// const finalArray=Array.flat(Infinity)
// console.log(typeof finalArray);

// convert into Array



console.log(Array.from("Ashutosh"));

// coverting the single variable defines into Arrays
  let a=23
  let b=34
  let c=34
  console.log(Array.of(a,b,c));// [ 23, 34, 34 ]
  





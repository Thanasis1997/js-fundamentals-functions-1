// 1. Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below
function increment(num) {
  return num + 1
}

// 2. Define a function that capitalises any string

// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello

// TODO: write code below

function capitalises(word) {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

// 3. Define a function that takes any person's name and returns it with a smiley :)!
// Remember to make the name capitalized!
//
// Example Input and Output:
//
// Input  | Output
// edward | Hi, Edward :)
// Aiyana | Hi, Aiyana :)
//
// TODO: write code below
function smileyFace(name) {
  return `Hi, ${name.charAt(0).toUpperCase() + name.slice(1)} :)`
}

// 4. Define a function that takes an array of data and returns how many strings are in the array.
//
// Example Input and Output:
//
// Input                | Output
// ['edward']           | 1
// ['edward', 'aiyana'] | 2
// [1]                  | 0
// [1, 'edward']        | 1
//
// TODO: write code below

function calculateString(arr) {
  let counter = 0
  for (let i = 0; i <= arr.length - 1; i++) {
    if (typeof arr[i] === 'string') {
      counter++
    }
  }
  return counter
}
// console.log(calculateString(['test', 1, 'test']))
// 5. Define a function that takes an object and adds a property 'edward' to the object if it doesn't yet exist with a default value of 'amazing'
//
// Example Input and Output:
//
// Input                    | Output
// {}                       | { edward: 'amazing' }
// { aiyana: 'fantastic' }  | { aiyana: 'fantastic', edward: 'amazing' }
// { edward: 'fabulous'}    | { edward: 'fabulous'}
//
// TODO: write code below
function objProperty(obj) {
  const keys = Object.keys(obj)
  if (keys.length === 0) {
    obj.edward = 'amazing'
  }
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] === 'edward') {
      break
    } else {
      obj.edward = 'amazing'
    }
  }
  return obj
}

// TODO: change each undefined below to be the name of the functions you defined
module.exports = {
  a: increment, // 1. change undefined to be the name of the function you defined for the first TODO
  b: capitalises, // 2. change undefined to be the name of the function you defined for the second TODO)
  c: smileyFace, // etc
  d: calculateString,
  e: objProperty
}

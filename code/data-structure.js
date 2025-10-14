// --- Array --- //

const arrayString = ['Apple', 'Banana', 'Orange']
const arrayNumber = [1, 2, 3, 4, 5]
const arrayBoolean = [true, false, true]
const arrayMixed = ['Apple', 1, true, { name: 'Andres' }, [1, 2, 3]]

const accessArray = {
  start: arrayString[0],
  end: arrayString.at(-1),
}

// --- Keyed Collections --- //

// Map
const map = new Map()
map.set('key', 'value') // Define the Key and its Value

const methodsMapOrSet = {
  checkIfAElementExistsMap: map.has('key'),
  size: map.size,
  delete: map.delete('key'),
  clear: map.clear(),
}

let getOfValueMap = map.get('key')

// weakMap
const weakMap = new WeakMap()
let object = { name: 'Bryan' } // Define the Value and the key has to be an object
weakMap.set(object, '...')

// Set
const set = new Set()
const arr = [1, 2, 3]

set.add(2)
set.add(2) // Does not support repeated values
set.add(arr)

const weakSet = new WeakSet() // weakSet
const obj_1 = { name: 'obj 1' }
const obj_2 = { name: 'obj 2' }

weakSet.add(obj_1)
weakSet.add(obj_1)
weakSet.add(obj_2)

// --- JSON --- //

const student = {
  name: 'Bryan',
  age: 21,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  something: undefined,
}

// JSON.stringify(value, replacer, space)
let json = JSON.stringify(student, null, 2)
console.log(json)

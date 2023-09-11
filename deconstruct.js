Destructuring Exercise




/* Object Destructuring 1 */

let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1864


/* Object Destructuring 2 */

{yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

/* Object Destructuring 3 */
  
  'Your name is undefined and you like green'
  /* Array Destructuring 1 */

 Maya
 Marisa
 Chi
 undefined

/* Array Destructuring 2 */

'Bright copper kettles', 'warm woolen mittens', 'Brown paper packages tied up with strings'

/* Array Destructuring 3 */

[10, 30, 20]

/*ES5 Assigning Variables to Object Properties*/
undefined


/* ES2015 Object Destructuring */
const obj = {
  numbers: {
    a:1,
    b:2
  
  }
};
const {a,b} = obj.numbers

/*ES5 Array Swap*/

1

/*ES2015 One-Line Array Swap with Destructuring*/
[arr[0], arr[1]] = [arr[1], arr[0]]



/*raceResults()*/

raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])

const raceResults = ([first, second, third,...rest]) => ({first, second, third, rest})
console.log('đông');

// If Statement Syntax
if (true) {
    console.log('This is true');
  }
  
  if (false) {
    console.log('This is NOT true');
  }
  
  // Evaluation expressions
  const x = 10;
  const y = 5;
  
  if (x >= y) {
    console.log(`${x} is greater than or equal to ${y}`);
  }
  
  if (x === y) {
    console.log(`${x} is equal to ${y}`);
  } else {
    console.log(`${x} is NOT equal to ${y}`);
  }
  
  // Block scope
  if (x !== y) {
    const z = 20;
    console.log(`${z} is 20`);
  }
  
 // Throw error
  
  // Shorthand If/Else
  if (x >= y)
    console.log(`${x} is greater than or equal to ${y}`),
      console.log('This is true');
  else console.log('This is false');

  // phần này tôi chỉ đi chi tiết vè phần true và falsethy cho nắm chắc hơn 
  // Falsy Values:
// - false
// - 0
// - "" or '' (Empty string)
// - null
// - undefined
// - NaN

// Truthy Values:
// - Everything else that is not falsy
// - true
// - '0' (0 in a string)
// - ' ' (space in a string)
// - 'false' (false in a string)
// - [] (empty array)
// - {} (empty object)
// - function () {} (empty function)

// nên nhớ nhé 

// sử dùng các toàn tử như là 

// || , && , 


// ||= assigns the right side value only if the left is a falsy value.

let a = null;

// if (!a) {
//   a = 10;
// }

// a = a || 10;

a ||= 10;

console.log(a);

// &&= assigns the right side value only if the left is a truthy value.

let b = 10;

if (b) {
  b = 20;
}

b = b && 20;

b &&= 20;

console.log(b);

// ??= assigns the right side value only if the left is null or undefined.

let c = null;

if (c === null || c === undefined) {
  c = 20;
}

c = c ?? 20;

c ??= 20;

console.log(c);
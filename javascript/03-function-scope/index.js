//define function 
function log() {
    console.log('xin chào ')
};

// gọi thực thi 1 hàm 
log()

// định nghĩa function bằng tham số 
function sum(a,b) {
    return a+b;
}
console.log(sum(1,2));

// rest param 
function sum1(...number) {
    let total = 0;
    for (const index of number) {
        total += index
    }
    return total
}
console.log(sum1(1,2,3,4,5,5));

// tương tự ta có thể truyền object và param và tham số như bình thường
// Global scope variable
const x = 100;

console.log(x, 'in global');

function run() {
  // Access global vars in functions
  console.log(window.innerHeight);
  console.log(x, 'in function');
}

run();

// Access global vars in blocks
if (true) {
  console.log(x, 'in block');
}

function add() {
  // Overwriting global x (variable shadowing)
  const x = 1;
  const y = 50;
  console.log(x + y);
}

// Can not access a function scoped variable in global scope

add();


// decoration function : 

function decorationFuntion() {
    console.log('đây là decoration function');
}

// expresstion fucntion 

const expresstionFunction = function() {
    console.log('đây là expresstion funciton ');
}

// arrow funciton (anonymous)

const arrawFunction = () => {
    console.log('đây là hàm mũi tên ');
}

// phạm vì thì sẽ có phạm vi đó là block-scope, fucntion-scpoe

//IIfe đơn giản là 1 cách để diễn tả là hạm tự gọi chính mình
// cách viết 

(
    () => {
        console.log('đây là 1 iife');
    }
)()
// nó dùng được cho tất cả nhé 
// đơn giản thì được hiểu là bạn không cần phải dùng nó như các hàm bình thường 

// thử thách 
// viết 1 hàm tìm số lớn nhất và số nhỏ nhất 
const minAndMax = (...number) => {
    const min = Math.min(...number);
    const max = Math.max(...number);

    return {
        min,
        max
    }
}

console.log(minAndMax(1,2,3,4,5,6,8,9,9,9));

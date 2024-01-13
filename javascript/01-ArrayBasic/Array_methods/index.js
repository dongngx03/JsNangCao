// Đây là các method dùng trong array của javascript

let x;

const arr = [28, 38, 44, 29, 109]

// 1. Push - Đẩy giá trị vào cuối mảng 
arr.push(99);

// 2. Pop - Bỏ đi giá trị cuối cùng 
arr.pop();

// 3. Unshift - Thêm giá trị mới vào dầu mảng (trái ngược với push)
arr.unshift(88);

// 4. Shift - Xóa giá trị đầu tiên 
arr.shift();

// 5. Reverse - Đảo ngược các phần tử của mảng
arr.reverse();

// 6. Includes - Kiểm tra xem có gì trong mảng không 
x = arr.includes(109);

// 7. IndexOf - Trả về chỉ mục của 1 phần tử ( nếu như không có phần tử đó trong mảng thì sẽ trả về -1)
x = arr.indexOf();

// 8. toString and join - Trả về mảng dưới dạng chuỗi 
x = arr.toString();
x = arr.join(); // tách các mảng thành chuỗi theo điều kiện 
// nếu như mà điều khiện là "" thành chuoix không có những dấu phẩy 

// 9. Slice - lấy từ phần tử index thứ (tham số thứ nhất ) 
// đến phần tử index  (tham số thứ 2 -1 ), lưu ý: nó tạo ra một mảng mới chứ không thao tác gì trên mảng cũ 
x = arr.slice(1, 4);

// 10. splice - lấy từ phần tử index thứ (tham số thứ nhất )
// đến phần tử index (tham số thứ hai) rồi tạo thành mảng mới chứa các tham số đó
// còn mảng cũ bị thao tác sẽ bị lấy mất những tham số đó
x = arr.splice(1, 3)

// 11. Concat - Nối 2 mảng lại với nhau 
const arr1 = [1, 2, 3, 5];
const arr2 = [[1, [9, 8, 5, 4], 5, 6], 6, 7, 8, 9]

x = arr1.concat(arr2);

// 12. Flat - làm phẳng 1 mảng 
y = x.flat();

// 13. isArray - check xem có phải là array hay không (true - flase)
x = Array.isArray(y);

// 14. from - tạo 1 mảng mới ý như là giá trị nhập vào 
x = Array.from('123456') // -> ['1', '2', '3', '4', '5', '6']

// 15. of - tạo 1 mảng mới chứa các giá trị mình gán vào làm tham số
const a = 1;
const b = 2;
const c = 3;
x = Array.of(a, b, c); // ->  [1, 2, 3]

// 16. every - Method này sẽ có tham số là 1 hàm (ta tạm gọi là testMethod). hàm testMethod sẽ có cấu trúc như sau function(el, index, arr) và luôn trả về giá trị true/false. 
// mục đích là tất cả các phần tử trong mảng phải đúng với điều kiện callback tạo ra 
// đúng thì trả vể true/ dai thì false
const everyArr = [9, 6, 8, 2, 3, 5, 7, 2];
x = everyArr.every(every => every % 2 == 0) // => false

// 17. some - Tương tự, method này cũng nhận vào một tham số là testMethod. Method này sẽ trả về true nếu như có ít nhất 1 phần tử trong mảng thỏa mãn testMethod, nếu không sẽ trả về false.
// y hệt như every  nhưng chỉ cần ít nhất 1 phần tử thỏa mãn thì sẽ trả về true, còn không phần tử nào thỏa mãn thì trả về false
const someArr = [9, 6, 8, 2, 3, 5, 7, 2];
x = someArr.some(some => some % 2 == 0) // => true

// 18. find - Method này cũng nhận vào tham số là 1 testMethod và trả về phần tử đầu tiên thỏa mãn testMethod, nếu không có phần tử nào thì sẽ trả về undefined
// lưu ý : chỉ trả về giá trị đầu tiên thỏa mãn điều kiện là dừng luôn không quan tâm mấy giá trị sau 
const findArr = [9, 6, 8, 2, 3, 5, 7, 2];
x = findArr.find(e => e % 2 == 0)  // => 6

// 19. map - Method này sẽ nhận vào tham số là 1 testMethod, tuy nhiên testMethod này không nhất thiết phải trả về giá trị true/false. Method này sẽ trả về một mảng mới, với giá trị được trả về từ testMethod của từng phần tử.
// nó trả về 1 mảng mới phù hợp với điểu kiện trong callback
const mapArr = [9, 6, 8, 2, 3, 5, 7, 2];
x = mapArr.map(m => m + 1) // =>  [10, 7, 9, 3, 4, 6, 8, 3]
x = mapArr.map(m => m % 2 == 0) // =>  [false, true, true, true, false, false, false, true]

// 20. filter - Method này nhận vào tham số là một testMethod và sẽ trả về mảng chứa các giá trị thỏa mãn testMethod.
// nó lọc bỏ những giá trị + index  của phần tử không thỏa mãn điểu kiện trong callback
const filterArr = [9, 6, 8, 2, 3, 5, 7, 2];
x = filterArr.filter(e => e % 2 == 0) // => [6, 8, 2, 2]

const h = 5;

function max() {
    let max = -Infinity;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i]
        }
    }

    return max;
}

function sort() {

    for (let i = 0; i < arguments.length; i++) {
        for (let j = 0; j < arguments.length; j++) {
            if (arguments[i] > arguments[j]) {
                let tamp = arguments[i];
                arguments[i] = arguments[j];
                arguments[j] = tamp;
            }

        }

    }

    return arguments;
}

const arrrr = sort(1, 2, 3, 6, 8, 9)

const news = []
for (let i = 0; i < arrrr.length; i++) {
    news.push(arrrr[i])
}

console.log(news);
console.log(typeof news);
console.log(news.reduce((acc, rel) => acc + rel, 0));

console.log(arrrr);
console.log(typeof arrrr)


// leetcode bài 2
const addTwoNumbers = function (l1, l2) {
    let newl1 = parseInt(l1.join(''));
    let newl2 = parseInt(l2.join(''));


    let arr3 = `${newl1 + newl2}`;

    const final = Array.from(arr3, Number)

    return final

};

console.log(addTwoNumbers([1, 2, 3, 9], [1, 2, 3]));

console.log([9, 6, 5, 9, 8, 3].splice(4, 1));

// bổ sung thêm phần varible còn thiếu trong phần 2 

// var , let, const 
// Tổng thể: được khai báo lại , được gán lại giá trị , global-scope, block-scope, function-scope, hỗ trợ hosting
// var:           v             ,        v             ,      v      ,     v      ,      v        ,        v
// let:           x             ,        v             ,      x       ,     v      ,     v        ,        x
// const:         x             ,        x             ,      x       ,     v      ,     v        ,        x



// Object 

const person = {
    name: 'John Doe',
    age: 30,
    isAdmin: true,
    address: {
        street: '123 Main st',
        city: 'Boston',
        state: 'MA',
    },
    hobbies: ['music', 'sports'],
};

const newPerson = {
    address: {
        coords: {
            lat: 42.9384,
            lng: -71.3232,
        },
    },
};

x = person.name

x = person.address.street

x = person.hobbies[0]

person.test = function () {
    console.log(`he hello ${this.name}`);
    console.log(this);
}

// khi mà sử dụng arraw funtion làm tham chiếu cho 1 object 
// thì nó nếu như sử dụng từ khóa this thì nó sẽ không trỏ đến parent
// mà nó trỏ đến global là window và ngược lại nếu dùng funtion(){}
// thì sẽ trỏ đến được đối tượng cha 


// sử dụng toán tử spread để nối object 

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// Spread operator
const obj3 = { ...obj1, ...obj2 };
// tương tự như trên 
const obj4 = Object.assign({}, obj1, obj2);

const todos = [
    { id: 1, name: 'Buy Milk' },
    { id: 2, name: 'Pickup kids from school' },
    { id: 3, name: 'Take out trash' },
];

// lấy key object rồi ném chúng vào 1 mảng 

x = Object.keys(todos[0]) // ['id', 'name']

// lấy values object rồi ném nó vào 1 mảng 

x = Object.values(todos[0]) // [1, 'Buy Milk']

// áp dùng để lấy tất cả các key + phần tử  của tưng phần tử trong mảng todos
x = todos.map(e => Object.entries(e))

// check xem đối tượng chó thuộc tính này hay không 
x = todos[0].hasOwnProperty('id') // => true / false


// DESTRUCTURING 

// mục đích của việc này chính là lấy ra một thuộc tính của object mà khong 
// cần gọi đến cha của nó 

const dong = {
    name: "dong",
    age: 20,
}

// thông thường muốn sử dụng ta lmaf như này 
const name1 = dong.name;
const age1 = dong.age;

// giờ đây ta có thể sử dụng cách khác nhanh hơn như thế này 

const { name, age } = dong

// tương tự với mảng 
const numbers = [23, 67, 33, 49, 52];

const [first, second, ...rest] = numbers;

console.log(first, second, rest);

console.log(name);
console.log(age);

console.log(x);


const fc1 = function() {
    console.log(this);
}

const fc2 = () => {
    console.log(this);
}
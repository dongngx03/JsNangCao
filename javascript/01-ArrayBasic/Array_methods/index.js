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
x = arr.join();

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

let i = 0;

while (i <= 5) {
    console.log("ok");

    i++;
}



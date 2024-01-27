// for 
// duyệt mảng 
const arr = [1,2,3,4,45,5];
let sum = 0;
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    sum += arr[i];
}
console.log(sum);

// break và continue

for (let i = 0; i < arr.length; i++) {
    if(i == 2) {
        continue
    }
    console.log(arr[i]);
}
// nếu như trong trường hợp này mà dùng continue thì 
// code sẽ chạy đến khi mà nó gặp index == 2 thì bỏ qua và chạy tiếp 
// tương tự breack nếu như điều kiện mà đúng thì nó sẽ dừng luôn chứ không 
// chạy tiếp giống như là continue 

// while thì đơn giản cũng dùng như for thôi nhưng nó sẽ chạy có điều kiện 
console.log('hihih');

let i = 0;

while (i <= 20) {
  console.log('Number ' + i);
  i++;
}
// thằng này thì lặp. lưu ý nếu như khong có biểu thức 
// tăng hay giảm điều kienj vid dụ như bài trên là i 
// thì sẽ trở thành vòng lặp vô hạn và sập cmn máy luôn đấy 


// tương tự do while thì nó lặp cho bao giwof thấy điều kiện thì nó dừng 


// for of -- thường dùng để duyệt array hoặc stringh nhé bạn 

for (const item of arr) {
    console.log(item);
}

const string1 = 'ahihihihihidongoc';
for (const item of string1) {
    console.log(item);
}

// for in dùng để lặp qua 1 object nhé bạn 

const user = {
    name: "đông",
    age: 19
}

for (const key in user) {
   console.log(key + ":" +  user[key]);
}

/// foreach 
// nó yus hệt như là thằng map nhưng mà không tạo ra mảng mới 
// và cũng chẳng làm thay đổi mảng gốc 
// nên cứ tuy cơ ứng bên dùng map hay là dùng foreach nhé 

arr.forEach(e => console.log(e+1));



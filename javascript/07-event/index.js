// có những event lắng nghe là : 

const abc = document.getElementById('abc');
// 1: click
abc.addEventListener('click', () => {
    // dùng để lấy hành động khie người dùng click vào element này 
})

// 2: keydown
abc.addEventListener('keydown', () => {
    // Được sử dụng để bắt các sự kiện liên quan đến bàn phím, như khi một phím được nhấn xuống, giữ, hoặc buông ra.
})

// 3: submit
abc.addEventListener('submit', () => {
    // dùng cho elent là thẻ form khi nó đước submit
})

// 4: change
abc.addEventListener('change', () => {
    // Được sử dụng để bắt sự kiện khi giá trị của một phần tử (thường là input) thay đổi.
})

// 5: mousover/ mouseout
abc.addEventListener('mouseover', () => {
    // dùng để lấy hành động khi người dùng đi vào hay ra 1 phần tuwrt 
})

// tương tự còn nhiều cái khác nữa như là : 

// onblur, oninput, onchecked, onFocus, 




/**
 * cho phép bạn lưu trữ giá trị của một hoặc một số kiểu trong một biến.
 * union type có thể khai báo rằng một kiểu có thể là một trong nhiều kiểu.
 */

let kq: number | string;
kq = 10;
kq = 'Hi';

type windowStates = 'open' | 'closed' | 'minimized';

// cung cấp 1 cách để xử lý các loại khác nhau:
function getLength(obj : string | string[]) {
    return obj.length;
}
/**
 * 1 Tuple hoạt động giống như một array với một số cân nhắc bổ sung:
 *  - Số phần tử trong bộ được cố định
 *  - Các loại phần tử đã biết và không cần phải giống nhau.
 */

// Bạn có thể sử dụng một bộ giá trị để biểu diễn một giá trị dưới dạng một cặp chuỗi và một số:
let skill : [string, number] = ['Programming',5];

// Optional Typle Elements
// Kể từ TypeScript 3.0, 1 typle có thể có các phần tử tùy chọn được chỉ định bằng cách sử dụng hậu tố dấu hỏi(?).
let bgColor, headerColor : [number, number, number, number?];
bgColor = [0,255,255,0.5];
headerColor = [0, 255, 255];
// => Typle là một mảng có số phần tử cố định và có kiểu đã biết.
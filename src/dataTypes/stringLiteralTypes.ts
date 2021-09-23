/**
 * String Literal Types xác định một kiểu chấp nhận một ký tự chuỗi được chỉ định.
 * String lLiteral types cho phép bạn xác định một kiểu chỉ chấp nhận một ký tự chuỗi được chỉ định.
 * Use the string literal types with union types and type aliases to define types that accept a finite set of string literals
 */
let click: 'click'; // định nghĩa một kiểu ký tự chuỗi chấp nhận một chuỗi ký tự là 'click';
click = 'click';
// nếu gán một ký tự khác thì trình biên dịch sẽ bị lỗi.
// ký tự chuỗi rất hữu ích để giới hạn một giá trị chuỗi có thể có trong một biến.
//Các kiểu chuỗi ký tự có thể kết hợp độc đáo với các kiểu liên hợp để xác định một tập hợp hữu hạn các giá trị chuỗi ký tự cho một biến:
let mouseEvent1: 'click' | 'dblclick' | 'mouseup' | 'mousedown';
mouseEvent1 = 'click'; // valid
mouseEvent1= 'dblclick'; // valid
mouseEvent1 = 'mouseup'; // valid
mouseEvent1 = 'mousedown'; // valid
// mouseEvent = 'mouseover'; // compiler error

//Nếu bạn sử dụng các kiểu ký tự chuỗi ở nhiều nơi, chúng sẽ rất dài dòng.
// để tránh điều này, bạn sử dụng aliases type.
// type MouseEvent: 'click' | 'dblclick' | 'mouseup' | 'mousedown';
// let mouseEvent: MouseEvent;
// mouseEvent = 'click'; // valid
// mouseEvent = 'dblclick'; // valid
// mouseEvent = 'mouseup'; // valid
// mouseEvent = 'mousedown'; // valid
// mouseEvent = 'mouseover'; // compiler error

// let anotherEvent: MouseEvent;
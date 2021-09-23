/**
 * 1. Function TypeScript là các khối xây dựng của mã có thể đọc được, có thể bảo trì và có thể tái sử dụng.
 * sử dụng từ khóa 'function':
 * sytax:
 *      function name(parameter: type, parameter: type, ...) : returnType {
 *          // do something
 *      }
 *  TypeScript cho phép bạn sử dụng Type Annotations trong các tham số và giá trị   trả về của một hàm.
 */

// vd
function them(c: number, d: number) : number {
    return c + d;
}
// : number sau dấu ngoặc đơn cho biết kiểu trả về. 

// Nếu một hàm k trả về giá trị, bạn có thể sử dụng kiểu void làm kiểu trả về. 
// Từ khóa void cho biết rằng hàm không trả về bất kỳ giá trị nào.
function demo(message: string) : void {
    console.log(message.toUpperCase());
}

// Khi bạn không chú thích kiểu trả về, TypeScript sẽ cố gắng suy ra một kiểu thích hợp.
function add(a: number, b: number) {
    return a+b;
};
// Tuy nhiên nếu một hàm có cách nhánh khác nhau, TypeScript compiler có thể suy ra union type hoặc any type.
// => do đó, điều quan trọng là phải thêm type annotations vào 1 hàm càng nhiều càng tốt.

// 2. Optional Parameter:
// sử dụng parameter?: type để tạo 1 tham số tùy chọn
// sử dụng biểu thức typeof(parameter) !== 'undefined' để kiểm tra xem tham số đã được khởi tạo hay chưa.

//3.  Default Parameter:
// sytax:  function(parameter = defaultValue1,...){
    // do something
// }
// trong cú pháp này, nếu bạn không truyền đối số hoặc truyền không xác định vào hàm khi gọi hàm đó, hàm sẽ nhận các giá trị khởi tạo mặc định cho các tham số bị bỏ qua.
//vd:
function applyDiscount(price: number, discount: number =0.05) : number{
    return price * (1-discount);
}

//  Optional parameters phải đứng sau required parameters (tham số bắt buộc). Tuy nhiên Default parameters không cần xuất hiện sau các required parameters.
// khi một default parameter xuất hiện trước một required parameter, bạn cần phải chuyển undefined một cách rõ ràng để nhận giá trị khởi tạo mặc định.

/**
 * 4. Rest parameters.
 *  - Rest parameters trong TypeScript cho phép bạn biểu diễn một số lượng vô hạn đối số dưới dạng một array.
 *  - Tuân thủ các quy tắc sau:
 *      +> 1 function chỉ có 1 rest parameter.
 *      +> Rest parameter xuất hiện cuối cùng trong danh sách parameter.
 *      +> Kiểu của rest parameter là một array type.
 * - Để khai báo một tham số còn lại, bắt buộc tên tham số bằng dấu 3 chấm và sử dụng array type làm type annotation:
 * - Sytax:
 *          function fc(...rest: type[]) {
 *              ...
 *          }
 * vd:
 */ 
function getTotal(...numbers: number[]) : number {
    let total = 0;
    numbers.forEach((num) => total += num);
    return total;
}
console.log(getTotal());// 0
console.log(getTotal(10,20)); 30

/**
 * 5. Function overloadings (nạp chồng hàm)
 *  - Trong TypeScript, function overloading cho phép thiết lập mối quan hệ giữa các kiểu tham số và kiểu kết quả của một hàm.
 * 
 * vd:
 */
function addNumber(a: number, b: number): number;
function addNumber(a: string, b: string): string;
function addNumber(a: any, b: any): any {
    return a+b;
}
console.log(addNumber(10,40));

/**
 * 5.1 Function overloading with optional parameters.
 *  - Khi bạn overload một function, số lượng  required parameters phải giống nhau. 
 *  - Nếu overload có nhiều tham số hơn tham số khác, phải đặt các tham số bổ sung là optional parameters.
 *  vd:
 */
function sum(a: number, b: number) : number;
function sum(a: number, b: number, c: number) : number;
function sum(a: number, b: number, c?: number) : number {
    if (c) return a+b+c;
    return a+b;
}

/**
 * 5.2 Parameter Destructuring
 * type annotation cho đối tượng đi sau cú pháp hủy cấu trúc
 */
function cong({ a, b, c} : { a: number; b: number; c: number }){
    console.log(a+b+c)
}
// ==
type ABC = { a: number; b: number; c: number};
function addABC({ a, b, c}: ABC) {
    console.log(a+b+c);
}
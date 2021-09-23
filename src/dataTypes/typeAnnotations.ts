/**
 * Types in TypeScript
 *  - TypeScript kế thừa các kiểu dựng sẵn từ JavaScript:
 *  - Các loại TypeScript được phân loại thành:
 *      + Primitive types (string, number, boolean, null, undefined, symbol).
 *      + Object types (function, arrays, classes, etc).
 */

/**
 * Type Annotations in TypeScript:
 *  - Type sử dụng các type annotations (kiểu chú thích) để chỉ định rõ ràng các kiểu cho các định danh như biến, hàm, đối tượng, ...
 *  - sytax: 
 *           let variableName : type; // khai báo biến
 *           let variablename : type = value; // khai báo biến có giá trị
 *           const constantName : type = value; // khai báo hằng số.
 * 
 *           let arrayName: type[]; // arrays
 * 
 *           
 * ví dụ: let counter: Number;
 *        let counter: Number = 1;
 *        const name: string = 'xuan';
 * 
 *        let names : string[] = ['Xuan', 'Ha', 'Van'];
 * 
 *         let person: {
 *              name: string,
 *              age: number,
 *         }
 *         let person: {name: 'Xuan', age: 20};
 * 
 *  - Function arguments & return types:
 *      vd: let greeting: (name: string) => string;
 *              greeting = function (name = string){
 *                      return `Hi ${name}`;
 *                  }
 * 
 * => sử dụng type annotations với cú pháp : [type] để chỉ định rõ rãng kiểu cho một biến, hàm, giá trị trả về của hàm đó,...
 */
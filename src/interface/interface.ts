/**
 * TyperScript interfaces xác định các hợp đồng trong mã của bạn
 *  - Họ cũng cung cấp tên rõ ràng để kiểm tra loại.
 *  - khai báo interface là 1 cách khác để đặt tên cho kiểu object.
 */

interface Person {
    firstName: string;
    lastName: string
}
// sau khi xác định interface Person, bạn có thể sử dụng nó như một kiểu.

/**
 * 1. Optional properties
 *  - Một giao diện có thể có Optional properties.
 *  - Để khai báo một Optional Properties, sử dụng dấu chấm hỏi(?) ở cuối tên thuộc tính trong khai báo.
 * 
 */
interface Demo {
    firstName: string;
    middleName?: string;
    lastName: string;
}

/**
 * 2. Readonly properties
 *  
 */

 interface Person {
    readonly ssn: string;
    firstName: string;
    lastName: string;    
}
 /**
  * 3. Function Types
  *     - Để mô tả 1 function type, bạn gán giao diện cho hàm chứa danh sách tham số với các kiểu và kiểu trả về.
  */
 interface StringFormat {
    (s1: string, isUpper: boolean) : string;
 }
 let format : StringFormat = function (s1: string, isUpper: boolean) {
        return isUpper ? s1.toLocaleUpperCase() : s1.toLocaleLowerCase();
    }
console.log(format('hi',true)); // HI
 // lưu ý: Tên tham số không cần phải khớp với chữ ký hàm.
 let stringFormat: StringFormat;
 stringFormat = function (src: string, upper: boolean) {
    return upper ? src.toLocaleUpperCase() : src.toLocaleLowerCase();
};

console.log(stringFormat('hi', true));
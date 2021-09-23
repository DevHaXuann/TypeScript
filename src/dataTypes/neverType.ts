/**
 * never type là loại không chứa giá trị. Không thể gán bất kỳ giá trị nào cho 1 biến có kiểu: never type.
 * Thông thường, sử dụng never type để ném ra một ngoại lệ hoặc chấm dứt việc thực thị chương trình.
 */
 function raiseError(message: string) : never {
     throw new Error(message);
 }
 // kiểu trả về của hàm sau được suy ra là never type
 function reject() {
     return raiseError('Rejected');
 }

 // Nếu bạn có 1 biểu thức hàm chứa một vòng lặp không xác định thì kiểu trả về của nó cũng là type never
 // https://www.typescripttutorial.net/typescript-tutorial/typescript-default-parameters/
 let loop = function forever() {
     while(true){
         console.log("Hi");
     }
 }
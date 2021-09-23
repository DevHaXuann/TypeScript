/**
 * Why use TypeScript:
 *  - có 2 lý do chính để sử dụng TypeScript:
 *    +> TypeScript thêm hệ thống kiểu để giúp bạn tránh nhiều vấn đề với kiểu động
 *        trong JavaScript.
 *    +> TypeScript hỗ trợ các tính năng sắp tới được lên kế hoạch trong ES Next    cho cách công cụ JavaScript hiện tại. Điều đó có nghĩa là bạn có thể sử dụng các tính năng JavaScript mới trước khi trình duyệt web(hoặc các môi trường khác) hỗ trợ đầy đủ chúng.
 */

/**
 *  Khai báo một đối tượng sử dụng interface
 */
 
interface Product{
  id: number,
  name: string,
  price: number



/**
 * TypeScript có một cú pháp đặt biệt để xóa null và undefined khỏi một kiểu mà không cần thực hiện bất kỳ kiểm tra rõ ràng nào.
 * Viết ! sau bất kỳ biểu thức nào thực sự là 1 loại xác nhận rằng giá trị không phải là null hoặc undefined.
 * 
 */

function sum(a?: number, b: number) {
  console.log(a!.toFixed());
}


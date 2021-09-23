/**
 * Đôi khi, bạn có thể cần lưu trữ một giá trị trong một biến. Nhưng bạn không biết loại của của nó tại thời điểm viết chương trình. Và giá trị không xác định có thể đến từ API của bên thứ 3 hoặc đầu vào của người dùng.
 * - Kiểu any cho phép bạn gián giá trị thuộc bất kỳ nào cho 1 biến.
 * Nếu khai báo một biến mà không chỉ định kiểu, TypeScript sẽ giả định rằng bạn sử dụng any type.
 */
let result : any;
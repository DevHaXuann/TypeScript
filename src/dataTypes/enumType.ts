/**
 * 1 enum cho phép mô tả 1 giá trị có thể là một trong 1 tập hợp các hằng số được đặt tên.
 * Enum là viết tắt của kiểu liệt kê (enumerated).
 * Để xác định 1 enum, bạn phải làm theo các bước sau:
 *  - Đầu tiên, sử dụng từ khóa "enum" theo sau là tên của enum.
 *  - sau đó, xác định các giá trị không đổi cho enum.
 * https://www.typescriptlang.org/docs/handbook/enums.html
 * 
 * sytax: enum name {constant1, constant2, ...};
 * constant1 // được gọi là các thành phần của enum
 * 
 * Khi nào nên sử dụng enum:
 * 1. có một tập hợp nhỏ các giá trị cố định có liên quan chặt chẽ với nhau.
 * 2. Những giá trị này được biết tại thời điểm biên dịch.
 */

//vd:
enum Month {
    Jan, 
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec
};

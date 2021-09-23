/**
 * Tất cả các số trong TypeScript đều có giá trị dấu phẩy động hoặc số nguyên lớn.  
 *  - các số dấu phẩy động có kiểu: type number
 *  - các số nguyên lớn có kiểu: type bigint
 * Như trong JavaScript, TypeScript hỗ trợ các ký tự số cho các ký tự thập phân (decimal), thập lục phân(hexadecimal), nhị phận(binary) và bát phân(octal).
 */

// The number type
// Decimal numbers
let counter: number = 0;
let x:number = 100,
    y: number = 200;

// Binary numbers
// số nhị phân sử dụng số 0 đứng đầu theo sau là ký tự viết thường hoặc hoa 'b':
// * Lưu ý: chữ số sau 0b hoặc 0B phải là 0 hoặc 1.
let bin = 0b100;
let anotherBin: number = 0B010;

// octal numbers
// Một số bát phân sử dụng số 0 đứng đầu theo sau là chữ số o (kể từ ES2015) 0o. Các chữ số sau 0o là các số trong phậm vị từ 0 -7.
let octal : number = 0o10;

//hexadecimal numbers
// các số thập lục phân sử dụng số 0 đứng đầu, theo sau là chữ X viết thường hoặc hoa. (0x hoặc 0X).
// các chữ số sau số 0x phải nằm trong khoảng (0123456789ABCDEF)
let hexadecimal:number = 0XA;


// Big Integers:
// các số nguyên lớn đại diện cho toàn bộ các số lớn hơn 2^53 -1
// Một chữ sô nguyên lớn có có ký tự n ở cuối một chữ số nguyen.
let big: bigint = 60000344n;
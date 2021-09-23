/**
 *  tạo 1 intersection type bằng cách kết hợp 2 hoặc nhiều loại để tạo ra một loại mới có tất cả các thuộc tính của các loại hiện có.
 * sytax:
 *          type typeAB = typeA & typeB;
 * 
 */

interface Business {
    name: string;
    credit: number;
}
interface Identity {
    id: number;
    name: string;
}
interface Contact {
    email: string;
    password: string;
}
// tạo các loại giao hợp(intersection type):
type Employee = Identity & Contact;
type Customer = Business & Contact;
let e: Employee = {
    id: 100,
    name: 'hà xuan',
    email: 'xuanha@gmail.com',
    password: '123456'
}

/**
 * khi giao nhau giữa các loại, thứ tự không quan trọng.
 * typeAB = typeA & typeB;
 * typeBA = typeB & typeA;
 */
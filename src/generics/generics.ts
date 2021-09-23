/**
 * Generics cung cấp các biến cho các loại. vd phổ biển là một mảng.
 * Một mảng không có generics có thể chứa bất kỳ thứ gì.
 * Còn một mảng với generics có thể khai báo các giá trị mà mảng đó chứa.
 * 
 * Sử dụng Generics của TypeScript để phát triển các hàm, inteface và class có thể tái sử dụng, tổng quát và an toàn cho kiểu.
 */

type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>

// có thể khai báo các loại của riêng mình sử dụng generic.
interface Backpack<Type> {
    add: (obj : Type) => void;
    get: () => Type;
}
declare const backpack : Backpack<string>;
const obj = backpack.get();
backpack.add('Xuan');

/**
 * 2.1 Generic function with multiple types
 */
function merge<U,V> (obj1: U, obj2: V) {
    return {
        ...obj1,
        ...obj2
    }
}
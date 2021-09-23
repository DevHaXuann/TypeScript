/**
 * Aliases type cho phép bạn tạo tên mới cho một kiểu hiện có.
 * sytax:
 *      type  alias = existingType;
 */

//vd:
type char = string;
let message : char;
// sẽ rất hữu ích khi tạo bí danh cho các union type.
type alphanumberic = string | number;
let input : alphanumberic;
input = 100;
input = 'Hi';

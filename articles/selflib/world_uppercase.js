const name = "aaa bbb ccc";
// \s 空白符 \b单词的开头
// \w a-zA-Z0-9
const str2 = name.replace(/\b\w+\b/g, function(word) {
    // console.log(word);
    return word.substring(0,1).toUpperCase() + word.substring(1);
});
console.log(str2);
// 将此字符串里的每个单词首字母变大写
// Aaa Bbb Ccc
// 分成数组 split
// Song.trim(str,2)
// map toUppsercase().join('');
// console.log(name.replace(/^\w/,'A'));
// console.log(name.replace(/\w$/,'C'));
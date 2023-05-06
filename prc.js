//js는 C언어처럼

//객체를 문자열로   stringify 문자스럽게!
var json = {"test" : "value"}
var incodingData = JSON.stringify(json);
console.log(incodingData);

//문자열을 객체로   parse 객체스럽게!
var str = '{"test : "value"}';
var parsingData = JSON.parse(str);

console.log(parsingData);
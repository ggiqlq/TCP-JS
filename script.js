var x = 10;
var result = x + 3;


var javascript = 10; // 변수 javascript와 JavaScript는 서로 다른 두 개의 변수로 인식됨.
var JavaScript = 20;
var Script = 30; // 변수의 선언은 var 키워드로만 할 수 있으면 Var는 동작하지 않음.


12 // 숫자 리터럴
"javascript" // 문자열 리터럴
"안녕하세요" //문자열 리터럴
true // 불리언 리터럴

var firstVar = 10; //camel case 방식
function my_first_func() {  //Underscore case  방식
    var firstLocalvar = 20; //camel case 방식
}


var firstVar = 10; // var는 변수의 정의를 위해 예약된 키워드입니다.
function myFirstFunc() { //function은 함수의 정의를 위해 예약된 키워드입니다.
    var secondVar = 20; //var는 변수의 정의를 위해 예약된 키워드입니다.
}


var x = 10;
// var y = 20; 한 줄의 주석문 : 이 부분은 실행되지 않을 것입니다.
/*
x = x + y;
여러 줄의 주석문 :
이 부분 또한 실행 되지 않을 것입니다.
*/

/* 여러 줄 
    // 이렇게 두 줄 주석 안에 또 다른 한 줄 주석을 삽입할 수 있습니다.
주석입니다. */

/* 여러 줄 
 /* 또 다른 여러 줄 주석입니다. */
// 주석입니다.


var cat = "나비"; // 일반적인 변수의 선언
//객체도 많은 값을 가지는 변수의 하나임.
var kitty = { name: "나비", family: "코리안 숏 헤어", age: 1, weight: 0.1 };
cat // 나비
kitty.name // 나비



function alertDialogBox() {
    alert("확인을 누를 떄까지 다른 작업을 할 수 없어요!");
}

// alt + shift + f


var str = document.getElementById("text");
str.innerHTML = "이 문장으로 바뀌었습니다!";

document.write(4 * 5);

console.log(4 * 5);

document.getElementById("text").innerHTML = "여러분 환영합니다!";

function printDate() {
    document.getElementById("data").innerHtml = Data();
}

function printDate() {
    document.getElementById("data").innerHTMl = Data();
}

function printDate() {
    document.getElementById("data").innerHTML = Data();
}

/examples/media / example.js

var num = 10; //숫자
var myname = "홍길동" // 문자열
var str; //undifined

var firstNum = 10; //소수점을 사용하지 않은 표현
var secondNum = 10.00; //소수점을 사용한 표현
var thirdNum = 10e6; //10000000
var fourthNum = 10e-6 //0.00001

var firstStr = "이것도 문자열입니다." //큰 따옴표를 사용한 문자열
var scondStr = '이것도 문자열입니다.' //작은 따옴표를 사용한 문자열
var thirdStr = "나의 이름은 '홍길동'이야." // 작은 따옴표는 큰 따옴표로 둘러싸인 
//문자열에만 포함될 수 있음.

var num = 10;
var str = "JavaScript";
document.getElementById("result").innerHTML = (num + str); //10javescript

var firstNum = 10;
var secondNum = 11;
document.getElementById("result").innerHTMl = (firstNum == secondNum); // false

var sym = Symbol("javascript"); //symbol 타입
var symObj = Object(sym); //object 타입

typeof 10; //number 타입
typeof "문자열" //string 타입
typeof true; //불리언 타입
typeof undefined // undifined 타입
typeof null // object 타입

var num; //초기화하지 않았으므로 undefined 값을 반환함.
var str = null; //object 타입의 null 값
typeof secondNum; //정의되지 않은 변수에 접근하면 undefined 값을 반환함.

null == undefined //true
null === undefined //false

var dog = { name: "해피", age: 3 }; //객체의 생성
//객체의 프로퍼티 참조
document.getElementById("result").innerHTML = "강아지의 이름은 " + dog.name + "이고, 나이는" + dog.age + "살 입니다";

var num = 20; //number 타입의 20
num = "이십"; //string 타입의 "이십"
var num; //한 변수에 여러 번 대입할 수는 있지만, 변수의 재선언은 할 수 없습니다.
//재선언문은 무시됩니다.

10 + "문자열" // 문자열 연결을 위해 숫자 10이 문자열로 변환됨.
"3" * "5" // 곱셈 연산을 위해 두 문자열이 모두 숫자로 변환됨.
1 - "문자열"; //NaN

Number("10"); //숫자 10
String(true); //문자열 "true"
Boolean(0); //불리언 false
Object(3); // new Number(3)와 동일한 결과로 숫자 3

String(true); //문자열 "true"
false.toString(); //문자열 "false"

String(Date());        // Mon May 16 2016 19:35:25 GMT+0900
Date().toString();     // Mon May 16 2016 19:35:25 GMT+0900
var date = new Date(); // Date 객체 생성
date.getFullYear();    // 2016
date.getTime();        // 1463394925632 -> 1970년 1월 1일부터 현재까지의 시간을 밀리초 단위의 숫자로 반환함.

Number(true); //숫자 1
Number(false);  //숫자 0

var month; //month라는 이름의 변수 선언
date = 25; // date라는 이름의 변수를 묵시적으로 선언

var month; //변수의 선언
var date = 25;  //변수의 선언과 동시에 초기화
month = 12; //변수의 초기화

var month,date; //여러 변수를 한 번에 선언
var hours = 7, minutes = 15; //여러 변수를 선언과 동시에 초기화
month = 10, date = 5 // 여러 변수를 한 번에 초기회

var num = 10; //변수의 선언과 함께 초기화
num = {10,20,30}; //배열 대입
var num; //이 재선언문은 무시됨

var num; // undefined
num = 10; //10
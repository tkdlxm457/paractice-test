
{
// var a = [
//     { name: "김대현1", age: 251 },
//     { name: "김대현2", age: 252 },
//     { name: "김대현1", age: 251 },
//     { name: "김대현2", age: 252 },
//     { name: "김성현", age: 100 },
//     { name: "김대현2", age: 252 },
//     { name: "김대현1", age: 251 },
//     { name: "김성현", age: 252 },
//     { name: "김대현1", age: 251 },
//     { name: "김대현2", age: 252 },
//     { name: "김대현1", age: 100 },
//     { name: "김성현", age: 252 },
//     { name: "김대현1", age: 251 },
//     { name: "김대현2", age: 252 },
//     { name: "김대현1", age: 251 },
//     { name: "김대현2", age: 252 },
//     { name: "김대현1", age: 251 },
//     { name: "김대현2", age: 252 },
//     { name: "김대현1", age: 251 },
//     { name: "김대현2", age: 100 },
//     { name: "김대현1", age: 251 },
//     { name: "김성현", age: 252 },
//     { name: "김대현1", age: 251 },
//     { name: "김성현", age: 100 },
//     { name: "김대현1", age: 251 },
//     { name: "김대현2", age: 252 },
//     { name: "김대현3", age: 253 }
// ];

// let x = [];
// // x.push(a[0], a[2]);
// // console.log(x);

// // x.filter

// // a.forEach(function(curr, idx){
// //     if(idx !== 1){
// //         x.push(curr);
// //     }
// // })

// x = a.filter((curr, idx) => curr.age == 100 && curr.name == "김성현")


// switch (['a', 'b', 'c'].entries) {

// }

// let c = ['a', 'b', 'c'].entries;

// while(c.next().done) {

// }

// // ['a', 'b', 'c']
// [[0, "a"], [1, "b"], [2, "c"]]

// console.log("aaaaa", x);

// a.xxx((el) => {

//     return 
// })

// console.log(x);
// x[0] = a[0];
// x[1] = a[2];

// a.push("fdsa", "fdsafd", 4321, {name: "aaaaa"}, ["fdsa", 12]);

// console.log(a);

// x = a.map(function(curr, idx, val){
//     return val[0];
// // });

// console.log(x);
}

// "my-short-string"같이 여러 단어를 대시(-)로 구분한 문자열을 카멜 표기법을 사용한 문자열 "myShortString"로 변경해주는 함수를 작성해보세요.
{
// "my-short-string"같이 여러 단어를 대시(-)로 구분한 문자열을 카멜 표기법을 사용한 문자열 "myShortString"로 변경해주는 함수를 작성해보세요.
// 대시는 모두 지우고 각 단어의 첫 번째 글자는 대문자로 써주면 됩니다.
// 예시)
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

/**
 * 1.대시(-) 지우고 
 * 2.대시 index + 1 문자 대문자로 변경
 * myShortString
//  */
// let kim = "my-short-string";
// let newLim = kim.replacea;



// let camelize2 = (str) => {
//     return str.split("-").map((s, idx) => {
//         return idx == 0 ? s : s[0].toUpperCase() + s.slice(1);
//     }).join("");
// };

// let camelize2 = (str) => str.split("-").map((s, idx) =>  idx == 0 ? s : s[0].toUpperCase() + s.slice(1)).join("");

// let camel = (str) => {
//     let newStr = ""
//     for(var i = 0; i < kim.length; i++){
//         if(kim[i] !== '-'){
//             newStr += kim[i]; 
//         } else{
//             newStr += kim[i + 1].toUpperCase();
//             i++;
//         }
//     }
//     return newStr;
// }


// console.log(`
// INPUT::: ${kim}
// OUTPUT:::::${camel(kim)} 
// 최종결과:::::${camel(kim) === "myShortString"}
//     `);
}


// 배열 arr의 요소 중 a이상 b 이하 범위에 속하는 요소만 골라 새로운 배열에 집어넣고, 
// 해당 요소를 출력해주는 함수 filterRange(arr, a, b)를 작성해봅시다.
// 새로 작성하는 함수는 기존 배열 arr을 변경하면 안 되고, 반환되는 함수는 새로운 배열이어야 합니다
{
/**
 * 배열 arr의 요소 중 a이상 b 이하 범위에 속하는 요소만 골라 새로운 배열에 집어넣고, 
 * 해당 요소를 출력해주는 함수 filterRange(arr, a, b)를 작성해봅시다.
 * 새로 작성하는 함수는 기존 배열 arr을 변경하면 안 되고, 반환되는 함수는 새로운 배열이어야 합니다
let arr = [5, 3, 8, 1]; 
let filtered = filterRange(arr, 1, 4); 
alert( filtered ); // 3,1 (조건에 맞는 요소) 
alert( arr ); // 5,3,8,1 (기존 배열은 변경되지 않았습니다.)

1. filter 함수로 a이상 b이하 조건을 만든다.
2. filter 함수를 filterRange에 넣는다.
3. 새로운 변수에 filterRange 리턴값을 넣는다.

// // */
// let arr = [5, 3, 8, 1]; 

// let filtered = filterRange(arr, 1, 4);

// function filterRange(arr, a, b){
//     return arr.filter(function(curr){
//         return curr >= a && curr <= b   ;
//     });
// }



// console.log("aaaaaaaa", filtered);

// alert( filtered ); // 3,1 (조건에 맞는 요소) 
// alert( arr ); // 5,3,8,1 (기존 배열은 변경되지 않았습니다.)
}


// 배열 arr의 요소 중 a와 b 사이에 속하지 않는 요소는 삭제해주는 함수 filterRangeInPlace(arr, a, b)를 작성해보세요. 
// 배열의 모든 요소(i)는 다음 조건을 만족해야 합니다. a ≤ arr[i] ≤ b

// 작성한 함수는 기존 배열을 변경하기만 하고 아무것도 반환하지 않아야 합니다.
{
// 1.
// 배열 arr의 요소 중 a와 b 사이에 속하지 않는 요소는 삭제해주는 함수 filterRangeInPlace(arr, a, b)를 작성해보세요. 
// 배열의 모든 요소(i)는 다음 조건을 만족해야 합니다. a ≤ arr[i] ≤ b

// 작성한 함수는 기존 배열을 변경하기만 하고 아무것도 반환하지 않아야 합니다.


// 예시)
/**
 * for문으로 돌리면서 1이상이거나 4이하이면 배열에 넣기
 */



// let arr = [5, 3, 8, 1];
// let newArr = [];
// for (var i = 0; i <= arr.length; i++) {
//     if (arr[i] >= 1 && arr[i] <= 4) {
//         newArr[numArr.length] = arr[i];
//     }
// }

// // alert(newArr);

// console.log(newArr + 3);

// -----------------------------------------------
}


// data type
{
// "" + 1 + 0           => "1"   >> '10'
// "" - 1 + 0           =>  "-1" >> -1
// true + false         =>  1    
// 6 / "3"              =>  2
// "2" * "3"            =>  6
// 4 + 5 + "px"         =>  "9px"
// "$" + 4 + 5          =>  "$9" >> '$45'
// "4" - 2              =>  2
// "4px" - 2            =>  "4px-2"  >> NaN
// 7 / 0                =>  0 >>Infinity
// "  -9  " + 5         =>  "4" >> '  -9  5'
// "  -9  " - 5         =>  "-14" >> -14
// null + 1             =>  1
// undefined + 1        =>  1 >> NaN
// " \t \n" - 2         =>  "\t \n-2" >> -2
// [] + 1               => 1 >> '1'
}


// // 요소를 내림차순으로 정렬해주는 코드를 여기에 작성해보세요.
{
// 2. 
// let arr = [5, 2, 1, -10, 8];

// // 요소를 내림차순으로 정렬해주는 코드를 여기에 작성해보세요.

// alert( arr ); // 8, 5, 2, 1, -10

// -------------------------------------------------4

// let arr2 = [5, 2, 1, -10, 8];

// arr2.sort(function(a, b){
//     return b - a;
// })

// alert( arr2 ); // 8, 5, 2, 1, -10
}


// 문자열이 담긴 배열 arr을 복사한 다음 해당 배열을 정렬해봅시다. 단 이때 arr은 변경되면 안 됩니다.

// 함수 copySorted(arr)는 복사 후 정렬된 배열을 반환해야 합니다.
{
// 3. 

// 문자열이 담긴 배열 arr을 복사한 다음 해당 배열을 정렬해봅시다. 단 이때 arr은 변경되면 안 됩니다.

// 함수 copySorted(arr)는 복사 후 정렬된 배열을 반환해야 합니다.

// 예시)
// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (no changes)

/**
 * slice함수로 배열복사
 * 복사된 배열로
 */

// let arr3 = ["HTML", "JavaScript", "CSS"];
// let sorted = arr3.slice();

// sorted.sort();

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr3 ); // HTML, JavaScript, CSS (no changes)
}




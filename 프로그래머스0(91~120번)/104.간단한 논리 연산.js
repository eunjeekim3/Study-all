// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181917

/*
boolean 변수 x1, x2, x3, x4가 매개변수로 주어질 때, 
다음의 식의 true/false를 return 하는 solution 함수를 작성해 주세요.
*/

function solution(x1, x2, x3, x4) {
    var answer = true;
    let a = false;
    let b = false;
    if(x1||x2){
        a = true
    }
    if(x3||x4){
        b = true
    }
    if(a&&b){
        console.log([a,b])
        return true;
    }

    console.log([a,b])

    return false;
}


/*
다른 풀이
function solution(x1, x2, x3, x4) {
  return (x1 || x2) && (x3 || x4);
}
*/
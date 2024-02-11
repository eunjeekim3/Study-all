// 레벨 2
// https://school.programmers.co.kr/learn/courses/30/lessons/43165?language=javascript

/*
사용할 수 있는 숫자가 담긴 배열 numbers, 타겟 넘버 target이 매개변수로 주어질 때 
숫자를 적절히 더하고 빼서 타겟 넘버를 만드는 방법의 수를 return 하도록 solution 함수를 작성해주세요
*/

function solution(numbers, target) {
    let answer = 0;
    const length = numbers.length;

    // dfs내부함수. 재귀호출, sum과 count 추적
    function dfs(count, sum) { 
    if (count === length) { // 모든 숫자를 처리했다면
        if (target === sum) { // sum과 target이 같은지 확인
            answer++; // 같다면 증가
        }
       return;
    }

    dfs(count + 1, sum + numbers[count]);
    dfs(count + 1, sum - numbers[count]);
    }

    dfs(0, 0); // dfs재시작

    return answer;
}

/*
다른 풀이
function solution(numbers, target) {
    let answer = 0;
    getAnswer(0,0);
    function getAnswer(x,value) {
        if(x<numbers.length){
            getAnswer(x+1,value + numbers[x]);
            getAnswer(x+1,value - numbers[x]);
        } else{
            if(value === target){
                answer++
            }
        }
    }
    return answer;
}
*/
// 레벨 2
// https://school.programmers.co.kr/learn/courses/30/lessons/42895?language=javascript

/*
N과 사칙연산만 사용해서 표현 할 수 있는 방법 중 
N 사용횟수의 최솟값을 return 하도록 solution 함수를 작성하세요.*/

// 풀이
function solution(N, number) {
    var answer = 0;
    var use = Array.from(new Array(9), () => new Set());

    if(N==number) return 1; // N과 number가 같다면 1 반환
    else {
        // use 배열을 초기화하고, N을 사용하여 만들 수 있는 수를 저장
        use.forEach((element, index) => {
            if (index !== 0) element.add(Number(String(N).repeat(index)));
        });

        // 숫자 N을 사용하여 number를 만들기 위해 사칙연산
        for(var i=1 ; i<=8 ; ++i) {
            for(var j=1 ; j<i ; ++j) {
                for(var first of use[j]) {
                    for(var second of use[i-j]) {
                        use[i].add(first+second); // 덧셈
                        use[i].add(first-second); // 뺄셈
                        use[i].add(first*second); // 곱셈
                        use[i].add(first/second); // 나눗셈
                    }
                } 
            }

            // use[i]에 number가 포함되어 있는지
            if(use[i].has(number)) return i;
        }

        // number를 만들 수 없는 경우 -1
        return -1;
    }
    return answer;
}
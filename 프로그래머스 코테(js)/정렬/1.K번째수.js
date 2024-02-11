// 레벨 1
// https://school.programmers.co.kr/learn/courses/30/lessons/42748?language=javascript

/*
배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, 
k번째에 있는 수를 구하려 합니다.
입출력 예시
[1, 5, 2, 6, 3, 7, 4]	[[2, 5, 3], [4, 4, 1], [1, 7, 3]]	[5, 6, 3]
*/

function solution(array, commands) {
    var answer = [];
        
    for (let i=0; i<commands.length; i++) {
        let list = array.slice(commands[i][0]-1, commands[i][1]).sort((a,b)=>{return a-b});
        // slice로 array배열의 commands[i][0]-1부터 commands[i][1]까지의 부분 배열을 추출.
        // 이후에 sort를 통해 오름차순으로 정렬. a-b면 오름차순, b-a면 내림차순
        
        answer.push(list[commands[i][2]-1]);
        // 인덱스가 0부터 시작하기때문에 -1
    }
    
    return answer;
}
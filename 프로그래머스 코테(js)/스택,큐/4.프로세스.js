// 레벨 2
// https://school.programmers.co.kr/learn/courses/30/lessons/42587?language=javascript

/*
현재 실행 대기 큐(Queue)에 있는 프로세스의 중요도가 순서대로 담긴 배열 priorities와, 
몇 번째로 실행되는지 알고싶은 프로세스의 위치를 알려주는 location이 매개변수로 주어질 때, 
해당 프로세스가 몇 번째로 실행되는지 return 하도록 solution 함수를 작성해주세요.
*/

function solution(priorities, location) {
    let answer = 0;
    let arr = []
    let max_value = Math.max(...priorities);

    //위치 배열 만들기
    for(let i = 0; i < priorities.length; i++){
        arr.push(i);
    }

   //priorities 배열이 비어있을 때까지 반복
    while(priorities.length != 0){
         max_value = Math.max(...priorities);
        
        if(priorities[0] < max_value){
            priorities.push(priorities.shift());
            arr.push(arr.shift());
        }else {
            answer+=1;
            priorities.shift();
            if(arr.shift() == location)
                return answer;
        }
    }
}

/*
shift()
JavaScript 배열 객체의 내장 함수
 배열에서 첫 번째 요소를 제거하고 그 값을 반환

스택
push: 스택의 상단에 데이터를 삽입합니다.
pop: 스택의 상단에서 데이터를 삭제합니다.
top: 스택의 상단에 위치한 데이터를 반환합니다.

큐
enqueue: 큐의 뒤(rear)에 데이터를 삽입합니다.
dequeue: 큐의 앞(front)에서 데이터를 삭제합니다.
front: 큐의 앞(front)에 위치한 데이터를 반환합니다.
*/
// 레벨 1
// https://school.programmers.co.kr/learn/courses/30/lessons/86491?language=javascript

/*
명함 지갑을 만드는 회사에서 지갑의 크기를 정하려고 합니다.
모든 명함을 수납할 수 있는 가장 작은 지갑을 만들 때, 
지갑의 크기를 return 하도록 solution 함수를 완성해주세요.
*/

function solution(sizes) {
    let long = [];
    let short = [];
    
    for (let i=0; i<sizes.length; i++) {
        if (sizes[i][0] > sizes[i][1]) {
            long.push(sizes[i][0]);
            short.push(sizes[i][1]);
        } else {
            long.push(sizes[i][1]);
            short.push(sizes[i][0]);
        }
    }
    
    let bigger = Math.max(...long); // long배열 중 가장 큰 값을 찾아 반환
    let smaller = Math.max(...short); // short배열 중 가장 큰 값을 찾아 반환
    
    return bigger * smaller;
}

/*
다른 사람의 풀이
function solution(sizes) {
    let arr = sizes.map(size => size[0] > size[1] ? [size[0], size[1]] : [size[1], size[0]]);
    // map함수를 이용해서 sizes배열을 순회함. 각 요소를 size라는 변수로 받아옴
    // 만약 [0]이 [1]보다 크다면 [size[0], size[1], 아니면 [size[1], size[0]로 변경함.

    const width = [];
    const height = [];

    for (let i = 0; i < arr.length; i++) {
        width.push(arr[i][0]);
        height.push(arr[i][1]);
    }

    return Math.max(...width) * Math.max(...height);
}
*/

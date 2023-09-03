// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181836

/*
이 그림 파일을 가로 세로로 k배 늘린 그림 파일을 나타내도록 문자열 배열을 return 하는 solution 함수를 작성해 주세요.
*/

function solution(picture, k) {
    let answer = [];

    for (let i = 0 ; i < picture.length; i++) {
        let newRow = '';

        for (let j = 0; j < picture[i].length; j++) {
            // repeat함수로 문자열을 k만큼 반복
            newRow += picture[i][j].repeat(k);
        }

        for (let n = 0; n < k; n++) {
            answer.push(newRow);
        }
    }

    return answer;
}

/*
다른 풀이
function solution(picture, k) {
    const willAddArr = []
    // 문자열의 각 자릿수를 k만큼 반복시킨 배열 생성
    for(let i = 0 ; i < picture.length ; i ++) {
        let str = ''
        for(let j = 0 ; j < picture[i].length ; j ++) {
            for(let l=0 ; l < k ; l ++) {
                str+=picture[i][j]    
            }
        }
        willAddArr.push(str)
    }
    
    // 생성된 배열을 k만큼 반복시킨 배열 반환
    return willAddArr.reduce((acc, cur) => {
        const curArr = []
        for(let i = 0 ; i < k ; i ++) {
            curArr.push(cur)
        }
        return [...acc, ...curArr]
    }, [])
}
*/
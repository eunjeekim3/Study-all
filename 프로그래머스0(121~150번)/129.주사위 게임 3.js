// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181916

/*
네 주사위를 굴렸을 때 나온 숫자가 정수 매개변수 a, b, c, d로 주어질 때, 
얻는 점수를 return 하는 solution 함수를 작성해 주세요.
*/

function solution(a, b, c, d) {
    // 모두 같음
    if(a === b && b === c && c === d) return 1111 * a;

    const arr = [a,b,c,d].sort();

    // 모두 다름
    if(arr[0] !== arr[1] && arr[1] !== arr[2] && arr[2] !== arr[3]) {
        return arr[0];
    }

    // 같은게 두 쌍
    if(arr[0] === arr[1] && arr[1] !== arr[2] && arr[2] === arr[3]) {
        return (arr[0] + arr[2]) * Math.abs(arr[0] - arr[2]);
    }

    let n = 0; // 같은게 몇 개?
    let x = 0; // 같은 숫자

    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i] === arr[i+1]) {
            n++;
            x = arr[i];
        }
    }

    const f = arr.filter(f=>f !== x)
    if(n === 1) {
        // 2개가 같고 나머지가 다름
        return f[0] * f[1];
    } else {
        // 3개가 같고 1개가 다름
        return Math.pow((10 * x + f[0]), 2);
    }
}

/*
다른 풀이
function solution(a, b, c, d) {
    if (a === b && a === c && a === d) return 1111 * a

    if (a === b && a === c) return (10 * a + d) ** 2
    if (a === b && a === d) return (10 * a + c) ** 2
    if (a === c && a === d) return (10 * a + b) ** 2
    if (b === c && b === d) return (10 * b + a) ** 2

    if (a === b && c === d) return (a + c) * Math.abs(a - c)
    if (a === c && b === d) return (a + b) * Math.abs(a - b)
    if (a === d && b === c) return (a + b) * Math.abs(a - b)

    if (a === b) return c * d
    if (a === c) return b * d
    if (a === d) return b * c
    if (b === c) return a * d
    if (b === d) return a * c
    if (c === d) return a * b

    return Math.min(a, b, c, d)
}
*/
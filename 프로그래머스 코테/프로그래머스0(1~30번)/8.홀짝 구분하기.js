// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181944?language=java

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const n = Number(input[0]);
    
    let answer = '';
    if (n % 2 === 0) { // 짝수일 경우
        answer = n + " is even"
    } else { // 홀수일 경우
        answer = n + " is odd"
    }
    
    console.log(answer);
});

// 자바
import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        
        if (n % 2 == 0) {
            System.out.printf("%d is even", n);
        } else {
            System.out.printf("%d is odd", n);
        }
        //System.out.print(n + " is "+(n % 2 == 0 ? "even" : "odd")); 이렇게 쓴사람도 있음
    }
}
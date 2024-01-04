// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181950?language=java

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    str = input[0];
    n = Number(input[1]);
    
    for(let i=0; i<n; i++){
        process.stdout.write(str);
        // process.stdout.write를 사용해서 줄바꿈없이 출력
    }
});

// JAVA
import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.next();
        int n = sc.nextInt();
        
        for (int i=0; i<n; i++) {
            System.out.printf(str);
            // System.out.println(str.repeat(n)); 다른사람은 repeat함수 사용했음
        }
        
    }
}
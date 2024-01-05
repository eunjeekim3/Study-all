// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181948?language=java

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    console.log(
        Number(input[0]) + ' + ' + Number(input[1])
        + ' = ' +
        (Number(input[0]) + Number(input[1]))
    );
});

// 자바
import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();

        System.out.printf("%d + %d = %d", a,b, a + b);
    }
}
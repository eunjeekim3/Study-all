// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181948?language=java

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('close', function () {
    //console.log('!@#$%^&*(\'"<>?:;')
    console.log('!@#$%^&*(\\\'"<>?:;')
    // 특수문자를 출력하기위해서는 \를 입력해야됨
});

// 자바
import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        //System.out.printf("!@#$%^&*(\'"<>?:;");             
        System.out.print("!@#$%^&*(\\'\"<>?:;");
    }
}
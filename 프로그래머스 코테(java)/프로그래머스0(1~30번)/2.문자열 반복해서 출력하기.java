// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181950?language=java

import java.util.Scanner;

class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.next();
        int n = sc.nextInt();
        for (int i = 0; i < n; i++) {
            System.out.printf(str);
            // System.out.println(str.repeat(n)); 다른사람은 repeat함수 사용했음
        }

    }
}
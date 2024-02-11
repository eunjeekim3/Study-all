// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181944?language=java

import java.util.Scanner;

class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();

        if (n % 2 == 0) {
            System.out.printf("%d is even", n);
        } else {
            System.out.printf("%d is odd", n);
        }
        // System.out.print(n + " is "+(n % 2 == 0 ? "even" : "odd")); 이렇게 쓴사람도 있음
    }
}
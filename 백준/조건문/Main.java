// (세 자리 수) × (세 자리 수)는 다음과 같은 과정을 통하여 이루어진다.
// (1)과 (2)위치에 들어갈 세 자리 자연수가 주어질 때 (3), (4), (5), (6)위치에 들어갈 값을 구하는 프로그램을 작성하시오.

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int A = sc.nextInt();
		String B = sc.next();

        sc.close();
 
        // charAt : 문자열의 인덱스 위치에 있는 문자(Character) 값을 반환. 아스키코드값으로 반환함.
        // -'0'을 해줌으로써 문자열로서의 숫자가 아닌, 우리가 보는 숫자의 값이라고 안내하기 위함
		System.out.println(A * (B.charAt(2) - '0'));
		System.out.println(A * (B.charAt(1) - '0'));
		System.out.println(A * (B.charAt(0) - '0'));
		System.out.println(A * Integer.parseInt(B));
    }
}


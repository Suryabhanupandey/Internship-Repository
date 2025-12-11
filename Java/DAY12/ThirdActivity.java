import java.util.*;

class A {

    boolean isPrime(int num) {

        if (num <= 1) {
            return false;  
        }

        for (int i = 2; i <= num / 2; i++) {
            if (num % i == 0) {
                return false;   // Not Prime
            }
        }

        return true;   // Prime
    }
}

public class ThirdActivity {

    public static void main(String args[]) {

        A obj = new A();
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter the number you want: ");
        int number = sc.nextInt();

        if (obj.isPrime(number)) {
            System.out.println("The number " + number + " is PRIME");
        } else {
            System.out.println("The number " + number + " is NOT PRIME");
        }
    }
}

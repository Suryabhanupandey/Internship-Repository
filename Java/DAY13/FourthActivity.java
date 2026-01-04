import java.util.*;

class Room {

    boolean isNaiway(int num) 
    {
        int temp = num;
        int reverse = 0;

        while (temp > 0)
        {
            int rem = temp % 10;
            reverse = reverse * 10 + rem;
            temp = temp / 10;
        }

        return reverse == num; 
    }
}

public class FourthActivity {
    public static void main(String args[]) {

        Room obj = new Room();
        Scanner scan = new Scanner(System.in);

        System.out.println("Enter a Number: ");
        int value = scan.nextInt();

        if (obj.isNaiway(value)) {
            System.out.println("The number " + value + " is a Naiway (Palindrome) Number");
        } else {
            System.out.println("The number " + value + " is NOT a Naiway (Palindrome) Number");
        }
    }
}

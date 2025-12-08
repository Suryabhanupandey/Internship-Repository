import java.util.*;

public class ThirdActivity {
    public static void main(String args[]) {
        
        Scanner scan = new Scanner(System.in);
        System.out.println("Enter the number :: ");
        int value = scan.nextInt();

        int temp = value;
        int sum = 0;

        while (temp > 0) {
            int rem = temp % 10;           
            sum = sum + (rem * rem * rem); 
            temp = temp / 10;              
        }

        if (value == sum) {
            System.out.println(value + " is an Armstrong number");
        } else {
            System.out.println(value + " is NOT an Armstrong number");
        }
    }
}

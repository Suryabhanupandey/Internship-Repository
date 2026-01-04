package Com.app;
import java.util.*;

abstract class NumberCheck
{
    abstract boolean isNiven(int num);
    abstract boolean isPrime(int num);
}

class CheckNumber extends NumberCheck
{
    public boolean isNiven(int num)
    {
        int temp = num;
        int reverse = 0;

        while (temp > 0)
        {
            int rem = temp % 10;
            reverse= reverse*10 + rem;
            temp = temp / 10;
        }

        return (reverse != 0 && num % reverse == 0);
    }

    public boolean isPrime(int num)
    {
        if (num <= 1)
            return false;

        for (int i = 2; i <= num / 2; i++)
        {
            if (num % i == 0)
                return false;
        }
        return true;
    }
}

public class SecondActivity
{
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int num = sc.nextInt();

        NumberCheck obj = new CheckNumber();

        if (obj.isNiven(num))
            System.out.println(num + " is a Niven Number");
        else
            System.out.println(num + " is NOT a Niven Number");

        if (obj.isPrime(num))
            System.out.println(num + " is a Prime Number");
        else
            System.out.println(num + " is NOT a Prime Number");
    }
}

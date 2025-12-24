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
        int temp = Math.abs(num);
        int sum = 0;

        while (temp > 0)
        {
            sum += temp % 10;
            temp = temp / 10;
        }

        return (sum != 0 && num % sum == 0);
    }

    public boolean isPrime(int num)
    {
        if (num <= 1)
            return false;
        if (num == 2)
            return true;
        if (num % 2 == 0)
            return false;

        int limit = (int)Math.sqrt(num);
        for (int i = 3; i <= limit; i += 2)
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
        sc.close();

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

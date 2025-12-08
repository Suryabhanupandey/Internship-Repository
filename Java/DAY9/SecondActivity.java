import java.util.*;

public class SecondActivity{

public static void main(String args[])
		{
			Scanner scan = new Scanner(System.in);
			System.out.println("Enter the number :: ");
			int value = scan.nextInt();
			int temp=value;
			int sum=0;
			
			while(temp>0)
				{
					int rem = temp%10;
					sum=sum+rem;
					temp=temp/10;
				}
			System.out.println("Sum of digit::"+sum);
			if(value%sum==0)
				{
					System.out.println(value+ " niven");

				}
				else
{
					System.out.println(value+ " not niven");


}
		
		}


}
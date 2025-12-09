import java.util.*;

class Facto {
  long factorial(int num) 
         {
		long fact =1;
               for(int i = 1; i<=num; i++)
		{
			fact *=i;
		}

		return fact;

	}



}


public class SecondActivity{

 	public static void main(String args[])
	
		{

			Facto obj = new Facto();
			Scanner sc = new Scanner(System.in);
			System.out.println("Enter the number what you want: ");
			int number = sc.nextInt();
			System.out.println("The Factorial = "+number +" = " +obj.factorial(number));


		}



}
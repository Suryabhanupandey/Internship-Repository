public class Dayoperator
{
	public static void main(String args[])
		{
			//logical and &&  
			int a=10 ,b=20 , c= 30;
			System.out.println((b>a) && (c>b));
			System.out.println((b<a) && (c>b));
			System.out.println((b>a) && (c<b));
			System.out.println((b<a) && (c<b));

			//OR Operator
			System.out.println((b>a) || (c>b));
			System.out.println((b>a) || (c<b));
			System.out.println((b<a) || (c>b));
			System.out.println((b<a) || (c<b));

			// com
			int num1 = Integer.parseInt(args[0]);
			int num2 = Integer.parseInt(args[1]);
			
			System.out.println(num1 == num2 );		



		}


}
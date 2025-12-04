public class SecondActivity
{
	public static void main(String args[])

		{
			int value =Integer.parseInt(args[0]);
				value = value-2;

 				int a = 0, b=1, c= 0;

				System.out.println(a);
				System.out.println(b);

			
			for(int i=1; i<=value; i++)
			{
 				c= a+b;
				System.out.println(c);
				
				a=b;
				b=c;
			}
		
 

		}





}
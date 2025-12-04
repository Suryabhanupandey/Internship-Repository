public class FirstActivity
{
	public static void main(String args[])

		{
			int value =Integer.parseInt(args[0]);
			long result = 1;
			
			for(int i=1; i<=value; i++)
			{
				result = result*i;
			}
		
			System.out.println("The Factorial of " +value+ " is :: "+result);

		}





}
public class SecondActivity
{
	public static void main(String args[])
		{
			int a = Integer.parseInt(args[0]);
				if(a>=60)
					{
						System.out.println("First Division");
					}
					else if(a>=45 && a<=59)
					{
						System.out.println("Second Division");
					}
					else if(a>=33 && a<=44)
					{
						System.out.println("Third Division");
					}
					else
					{
						System.out.println("Failed .....");
					}

		}


}
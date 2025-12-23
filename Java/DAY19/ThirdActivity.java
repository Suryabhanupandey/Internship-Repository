abstract class Aclass
		{

			public Aclass()
				{

				System.out.println("Constructor........");


				}


		}


class Test extends Aclass 
		{

			public Test()
				{
					System.out.println("Constructor of Test");
				
				}

		}

public class ThirdActivity
		{

			public static void main(String args[])
				{

					Aclass obj = new Test();


				}
		
		}
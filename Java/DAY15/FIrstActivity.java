class A

{
 	A(String name)
		{
			System.out.println("COntructor....A");
			System.out.println("Hello..."+name);
		}	

}
class B extends A
			{


				B()
					{
						super("Barrownz");
						System.out.println("Constructor");


					}




			}





public class FirstActivity{
		public static void main(String args[])
			{
 				A obj = new B();

			}



}
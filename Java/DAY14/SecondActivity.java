class A

{
 
   	    A()
		{

     			System.out.println("Constructor of .... A");

		}

}
class B extends A

{
 
   	    B()
		{

     			System.out.println("Constructor of .... B");

		}

}








public class SecondActivity{
		public static void main(String args[])
			{
 				A obj = new B();

 

			}

}
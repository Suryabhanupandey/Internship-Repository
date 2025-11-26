// l /L suffix is optional in long 
// but this suffix makes the treatment of long value easy on JVM
public class SecondFile {

 		public static void main(String args[])
	{
		long a = 12345;
		System.out.println("a = " +a);
		
		a = 12345l; 					  
		System.out.println("a = " +a);

		a = 12345L; 					
		System.out.println("a = " +a);

 


	}
}
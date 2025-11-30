 
 
public class File5 {

 		public static void main(String args[])
	{
		byte a = 10;
                 int b= a;  // System manage type casting = implicit type casting
		System.out.println("a = " +b);
		
		int c = 1000; 	
                byte d = (byte) c; // User manage by type casting = Explicit type casting				  
		System.out.println("d = " +d);

	}
}
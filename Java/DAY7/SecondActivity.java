public class SecondActivity




{
	public static void main(String args[])

			{
				char ch =args[0].charAt(0);
				switch(ch)
				{

					case 'a' :
					case 'e':
					case 'i':
					case 'o':
					case 'u':

						System.out.println(ch+"  is vowel");
						break;
 					default:
						System.out.println(ch+"  is Consonent");
			
						
				}



			}


}
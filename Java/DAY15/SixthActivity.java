class Room

{
		int length;
		int breadth;

		Room(int length ,int breadth)
			{

			this.length=length;
			this.breadth=breadth;

			}
	
		void printValue()
			{
 				System.out.println("length = "+length+"breadth"+breadth);

	 		}


}






public class SixthActivity{
		public static void main(String args[])
			{
 				Room obj = new Room();
				System.out.println("Area = "+obj.printValue());
 

 

			}



}
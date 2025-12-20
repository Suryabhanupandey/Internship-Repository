class Room

{
	
		int calculateArea(int length)
			{
				return length*length;

			}
		int calculateArea(int length,int breadth)
			{
				return length*breadth;

			}
		int calculateArea(float radius)
			{
				return Math.PI*radius*radius;

			}


}






public class ThirdActivity{
		public static void main(String args[])
			{
 				Room obj = new Room();
				System.out.println("Area = "+obj.calculateArea(10));
				System.out.println("Area = "+obj.calculateArea(10,20));

				System.out.println("Area = "+obj.calculateArea(10.0F));

 

			}



}
package com.app;


class Test extends Thread
{

	public void run()
		{
			for(int i=1;i<=10;i++)
				{
				System.out.println("i " +i+" Current Threads Name :: "+Thread.currentThread().getName());
			}
		}

}


public class FirstActivity
{

	public static void main(String args[])
		{
			Test obj = new Test();
			obj.setName("Surya");

			obj.start();

		}

}
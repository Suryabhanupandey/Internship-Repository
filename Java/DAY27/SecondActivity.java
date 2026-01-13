package com.app;
import java.util.*;

class PrintSeries{
	 void printValue(){
		for(int i=2;i<=20;i+=2){
			System.out.println("i "+i+" current thread name: " + Thread.currentThread().getName());
		}
	}
}

class MyTask implements Runnable
{
	PrintSeries series;
	public MyTask(PrintSeries _series)
	{
		series = _series;
	}
	public void run()
	{
		synchronized(series)
		{
			series.printValue();
		}
	}

}


public class SecondActivity{
	public static void main(String args[])
		{

 			PrintSeries series = new PrintSeries();
			MyTask task = new MyTask(series);

			Thread t1 = new Thread(task);
			Thread t2 = new Thread(task);

			t1.setName("Surya");
			t2.setName("Bhanu");
			t1.start();
			t2.start();

 
	}
}
package com.app;


import java.io.*;

public class FirstActivity

	{
		public static void main(String args[]) throws IOException
			{

				InputStream ins = new FileInputStream("Source.txt");
			System.out.println("Number of charcters available in stream :: "+ins.available());

		ins.skip(2);
		System.out.println((char) ins.read());

		ins.close();

			}



	}
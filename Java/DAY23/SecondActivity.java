package com.app;

import java.io.*;

public class SecondActivity
	
{

	public static void main(String args[]) throws IOException
		{

			String line = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

				byte[] buffer = line.getBytes();
				OutputStream ous = new FileOutputStream("Sink.txt");

			ous.write(buffer,2,5);

			ous.close();

			System.out.println("Data Written on to Sink !");




		}




}
package com.app;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;

public class FirstActivity
{
    public static void main(String[] args)
    {
        try
        {
            InputStream ins = new FileInputStream("FIrstActivity.txt");
            int ascii = 0;

            while ((ascii = ins.read()) != -1)
            {
                System.out.print((char) ascii);
            }

            ins.close();
        }
        catch (IOException e)
        {
            System.out.println("Reason of error : " + e.getMessage());
        }
    }
}

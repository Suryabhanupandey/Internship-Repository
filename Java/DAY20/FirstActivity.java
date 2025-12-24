package Com.app;
import java.util.*;

abstract class ShapeArea
{
    public abstract int calculateAreaSphare(int length, int breadth);
    public abstract double calculateAreaCircle(int radius);
}

class Test extends ShapeArea
{
    public int calculateAreaSphare(int length, int breadth)
    {
        return length * breadth;
    }

    public double calculateAreaCircle(int radius)
    {
        return Math.PI * radius * radius;
    }
}

public class FirstActivity
{
    public static void main(String args[])
    {
        ShapeArea obj = new Test();

        System.out.println("Area of Sphare :: " + obj.calculateAreaSphare(10, 20));
        System.out.println("Area of Circle :: " + obj.calculateAreaCircle(10));
    }
}

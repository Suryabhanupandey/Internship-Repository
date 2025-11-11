 
/*
    DOM manipulation
      To selecting any HTML element and provding some styles or creating some elements in HTML with the help of javaScript is basically know as the DOM Manipulations 

      Below are some of the methods which mainly used in DOM manipulations
    1. getElementById()  This method is used to select any HTML element with the help of ID attribute.

    2. queryselector() This method is used to select any HTML element with the help of class attribute or  ID attribute or HTML tag name

    * Note: See in case of queryselector() if we have multiple elements are available in the html with the same class name or tag name and if we trying to target the entire HTML element via queryslector then it will not work it will only target the first element of HTML via class name or tag name. 

    3.queryselectorall() In case of queryselectorall() method is basically return the node list of the element or class and node list is similar to the array but it's not array it's bit different because we cannot apply map, filter, reduce types of operations over the nodelist cause it's not an array. 

    4.getElementByClassName() It's also one of the method of the DOM which basically use to target elements by their className it basically return the HTML collections which is again similar to the array but it's not a array it's collections of items which similarly look like a array but again you cannot apply the map, filter, reduce as well as forEach() types of method on it. If you want to apply these operations then you have to convert this HTML collections into the array by using Array.from() method and then you will be able to apply all the array operations on it.  

/*
 Manipulating Content

 1. innerText
     🔹 Definition:
     innerText returns the visible text inside an HTML element — it ignores hidden text (like text inside elements styled with display:none or visibility:hidden).

2. textContent
    🔹 Definition:
    textContent returns all the text inside an element, including hidden text (it doesn’t care about CSS).
    🔹 It gives raw text exactly as in the HTML structure, without considering visibility.
  
3. innerHTML
    🔹 Definition:
    innerHTML returns the HTML content (including tags) inside an element.
    You can also use it to insert HTML code dynamically.    
*/
// ✅ Example 1: Change Text Content
 function changeText() {
 document.getElementById("heading").innerText = "Welcome to JavaScript!";
 }

// ✅ Example 2: Add a Paragraph 

 function addPara() {
      // Step 1: Create new element
      const p = document.createElement("p");

      // Step 2: Add text inside it
      p.textContent = "This is a new paragraph added with JavaScript!";

      // Step 3: Append it to container
      document.getElementById("container").appendChild(p);
 }

// ✅ Example 2: Add a Paragraph 
 let p = document.createElement("p");
 p.textContent = "this is second para";
 document.getElementById("container").appendChild(p);

//✅ Example 3: Remove Element
 function removePara() {
    const p = document.getElementById("text");
    p.remove();  // Deletes the element
  }

//   ✅ Example 4: Change Attribute
function changeImage() {
    document.getElementById("myImage").setAttribute("src", "woman-client-2.png");
  }

  // let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(num) {
  console.log(num);
});

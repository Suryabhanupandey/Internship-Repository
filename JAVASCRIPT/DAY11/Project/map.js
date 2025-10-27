 
    // 🗃️ Map to store items
    const cart = new Map([
      ["Apple", 40],
      ["Banana", 10],
      ["Milk", 60],
    ]);

    // 🧾 Display items in cart
    function displayCart() {
      const itemList = document.getElementById("itemList");
      itemList.innerHTML = "";

      let total = 0;

      cart.forEach((price, item) => {
        const li = document.createElement("li");
        li.textContent = `${item}: ₹${price}`;
        itemList.appendChild(li);
        total += price;
      });

      document.getElementById("total").textContent = `Total: ₹${total}`;
    }

    // ➕ Add random item
    function addItem() {
      const newItems = [
        ["Chocolate", 50],
        ["Bread", 25],
        ["Juice", 80],
        ["Butter", 70],
        ["Eggs", 60],
        ["Cheese", 90],
      ];

      const randomItem = newItems[Math.floor(Math.random() * newItems.length)];
      cart.set(randomItem[0], randomItem[1]);
      displayCart();
    }

    // ➖ Remove last added item
    function removeItem() {
      const keys = Array.from(cart.keys());
      if (keys.length > 0) {
        cart.delete(keys[keys.length - 1]);
        displayCart();
      } else {
        alert("Cart is empty!");
      }
    } 
        // 🏁 Initial display
    displayCart();
 
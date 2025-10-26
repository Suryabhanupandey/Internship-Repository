    function updateClock() {
      const now = new Date();

      // Get time parts
      let hours = now.getHours();
      let minutes = now.getMinutes();
      let seconds = now.getSeconds();

      // Add zero if single digit
      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      // Get date parts
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      
      const dayName = days[now.getDay()];
      const monthName = months[now.getMonth()];
      const date = now.getDate();
      const year = now.getFullYear();

      // Update HTML
      document.getElementById("clock").innerText = `${hours}:${minutes}:${seconds}`;
      document.getElementById("date").innerText = `${dayName}, ${date} ${monthName} ${year}`;
    }

    // Run immediately and update every second
    updateClock();
    setInterval(updateClock, 1000);
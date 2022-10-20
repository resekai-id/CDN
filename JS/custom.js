 // Get the current Hour. 
      var currentHour = new Date().getHours(),
        output = document.getElementById('greeting');
      if ((currentHour >= 5) && (currentHour < 12)) {
        output.innerHTML += " <br/><br/> Hi, Good Morning 🌄 ";
      } else if ((currentHour >= 12) && (currentHour < 15)) {
        output.innerHTML += "  <br/><br/> Hi, Good Noon 🌤️ ";
      } else if ((currentHour >= 15) && (currentHour < 17)) {
        output.innerHTML += " <br/><br/> Hi, Good Afternoon 🌇 ";
      } else if ((currentHour >= 17) && (currentHour < 21)) {
        output.innerHTML += "  <br/><br/> Hi, Good Evening 🌆 ";    
      } else {
        output.innerHTML += "  <br/><br/> Hi, Good Night 🌃 ";
      }  

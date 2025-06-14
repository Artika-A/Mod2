 let btn = document.getElementById("clickMe")  
         btn.addEventListener("click", function(){  
           let title = document.getElementById("title")  
           //title.innerHTML = "The text has changed!"  
           title.textContent = "The text has changed!"  
         })

      let paragraph = document.getElementById("paragraph")  
      paragraph.addEventListener("mouseover", function(){
        paragraph.style.color = "pink"
      })
      paragraph.addEventListener("mouseout", function(){
        paragraph.style.color = "black"
      })

      paragraph.addEventListener("click", function(){
        paragraph.style.visibility = "hidden"
      })
const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");


toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click", () => {
    sidebar.classList.remove("close");
})


// ตรวจสอบสถานะโหมดที่เก็บไว้ใน Local Storage
const storedMode = localStorage.getItem("mode");
if (storedMode === "dark") {
    body.classList.add("dark");
    modeText.innerText = "Light mode";
} else {
    body.classList.remove("dark");
    modeText.innerText = "Dark mode";
}

// เมื่อผู้ใช้คลิกสลับโหมด
modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        modeText.innerText = "Light mode";
        localStorage.setItem("mode", "dark"); // เซฟสถานะโหมดใน Local Storage
    } else {
        modeText.innerText = "Dark mode";
        localStorage.setItem("mode", "light"); // เซฟสถานะโหมดใน Local Storage
    }
});

//Random
function getShibaImages() {
      const count = 4; // Change the count as desired (from 1 to 100)
      const useUrls = true; // Change to false if you want only image URLs
      const useHttpsUrls = true; // Change to false if you prefer HTTP URLs

      const apiUrl = `https://shibe.online/api/shibes?count=${count}&urls=${useUrls}&httpsUrls=${useHttpsUrls}`;

      fetch(apiUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          displayShibaImages(data);
        })
        .catch(error => {
          console.error('Fetch error:', error);
        });
    }

    function displayShibaImages(images) {
      const shibaImagesContainer = document.getElementById('shibaImages');
      shibaImagesContainer.innerHTML = '';

      images.forEach(imageUrl => {
        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;
        imgElement.style.maxWidth = '300px'; // Adjust the image size as needed
        imgElement.style.margin = '5px';
        shibaImagesContainer.appendChild(imgElement);
      });
    }

//Sheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbx0N7jiqW-aU7CS-g-3_SOYXrHHHxHImdfaeuYNMdeRWfxQj1tZU6CYTLEddcKoemI/exec'
const form = document.forms['contact']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => document.getElementById("demo").innerHTML = "<div class='alert alert-primary' role='alert'>Add Success!!</div>", contact.reset())
        .catch(error => console.error('Error!', error.message))
})

//Parameter API
async function fetchserverstatus() {
    document.getElementById("playername").innerHTML = "";


    const parameterValue = document.getElementById('ipserver').value;

    const mcAPI = `https://api.mcsrvstat.us/3/${parameterValue}`;
    fetch(mcAPI).then(responseMcStatus => {
        if (!responseMcStatus.ok) {
            throw new Error(`Network response was not ok: ${responseMcStatus.status}`);
        }
        return responseMcStatus.json();
    }).then(mcAPI => {
        
        document.getElementById("resultContainer").innerHTML = "Player Online "+ mcAPI.players.online + "/" + mcAPI.players.max + "<br>PlayerList :" 
        const playerInfoDiv = document.getElementById('playername');
        mcAPI.players.list.forEach(player => {  
        const playerName = player.name;
        const playerUUID = player.uuid;
            
        const playerInfoParagraph = document.createElement('p');


        // Log or use the player information as needed
        playerInfoParagraph.textContent = playerName
        playerInfoDiv.appendChild(playerInfoParagraph);
        console.log(playerName);
        console.log("--------------------------");
        
            
        });;
    })
}   

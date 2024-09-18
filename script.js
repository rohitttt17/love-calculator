window.onload = function() {
  let button = document.getElementById("CALCULATE"); // Corrected the id
  button.addEventListener("click", calculatelove);
}

function calculatelove() {
  let yourname = document.getElementById("YOUR-NAME").value; // Corrected the id
  let partnername = document.getElementById("PARTNER-NAME").value; // Corrected the id
  
  if (yourname !== "" && partnername !== "") {
    let percentage = Math.floor(Math.random() * 101);
    document.getElementById("result-message").innerText = `${yourname} and ${partnername}'s chance of love:`;
    document.getElementById("RESULT-PERCENTAGE").innerText = percentage.toString() + "%"; // Corrected the id
  }
}

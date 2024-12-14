// Form Validation
document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const email = document.getElementById("input1").value.trim();
    const message = document.getElementById("input2").value.trim();
  
    if (!email || !message) {
      alert("All fields are required!");
      return;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
   
    if (message.length < 10) {
      alert("Message must be at least 10 characters long.");
      return;
    }
    // Clear inputs
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
  
    var paraSuccess = document.getElementById("p1")
    paraSuccess.textContent = "The form has been submitted successfully!";
    
    setTimeout(() => {
        location.reload();
      }, 300);

  });
  

  //ToUpperCase Fun

  function ToUpperCase(ToUpperCase){

    ToUpperCase.value = ToUpperCase.value.toUpperCase();
   
  }



   //FontSize Hover
const priceElements = document.querySelectorAll(".price");
priceElements.forEach((priceElement) => {
 
  priceElement.addEventListener("mouseover", function () {
    priceElement.style.fontSize = "40px";  
    priceElement.style.transition = "font-size 0.3s ease"; 
  });

   
  priceElement.addEventListener("mouseout", function () {
    priceElement.style.fontSize = "30px";  
  });
});


// Change imgs
const orderButtons = document.querySelectorAll(".orderIt");
orderButtons.forEach(button => {
    button.addEventListener('click', function() {
        const card = button.closest('.card');  
        const img = card.querySelector('img');  
        if (img) {
            img.src = 'https://media.istockphoto.com/vectors/checkmark-vector-icon-put-a-green-symbol-on-the-white-background-vector-id1151872207?k=20&m=1151872207&s=170667a&w=0&h=NzKOi1fjRT-jYlohJ7a15LRWHC3wK0LjTu1fi9yOQYQ='; // Update the image source
        }
    });
});



 


  

  



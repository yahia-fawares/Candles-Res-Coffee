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


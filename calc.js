function updatePrice() {
  let s = document.getElementsByName("prodType");
  let select = s[0];
  let price = 0;
  let prices = getPrices();
  let priceIndex = parseInt(select.value) - 1;
  if (priceIndex >= 0) {
    price = prices.prodTypes[priceIndex];
  }

  let radioDiv = document.getElementById("rad");
  if (select.value == "4"|| select.value=="2"||select.value == "7")  radioDiv.style.display="block"; 
  else radioDiv.style.display="none";
  let radios = document.getElementsByName("prodOptions");
  radios.forEach(function(radio) {
    if (radio.checked) {
      let optionPrice = prices.prodOptions[radio.value];
      if (optionPrice !== undefined) {
        price += optionPrice;
      }
    }
  });

  let checkDiv = document.getElementById("check");
  if (select.value == "1"||select.value == "3")  checkDiv.style.display="block";
   else checkDiv.style.display ="none";
  let checkboxes = document.querySelectorAll("#check input");
  checkboxes.forEach(function(checkbox) {
    if (checkbox.checked) {
      let propPrice = prices.prodProperties[checkbox.name];
      if (propPrice !== undefined) { 
        price += propPrice;
      }
    }
  });

  let num=document.getElementById("numofclass").value;
    if (typeof num==='undefined') num=0;
    price*=num;

  let prodPrice = document.getElementById("prodPrice");
  prodPrice.innerHTML = price + " рублей";
}

function getPrices() {
  return {
    prodTypes: [800, 600, 1000, 700, 750, 500, 650],
    prodOptions: {
      option1: 100,
      option2: 70,
      option3: 0,
    },
    prodProperties: {
      prop1: 90,
      prop2: 130,
    }
  };
}

window.addEventListener('DOMContentLoaded', function (event) {
  let radioDiv = document.getElementById("rad");
  radioDiv.style.display = "none";
  let s = document.getElementsByName("prodType");
  let select = s[0];
  select.addEventListener("change", function(event) {
    let target = event.target;
    console.log(target.value);
    updatePrice();
  });

  let radios = document.getElementsByName("prodOptions");
  radios.forEach(function(radio) {
    radio.addEventListener("change", function(event) {
      let r = event.target;
      console.log(r.value);
      updatePrice();
    });
  });

  let checkboxes = document.querySelectorAll("#check input");
  checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener("change", function(event) {
      let c = event.target;
      console.log(c.name);
      console.log(c.value);
      updatePrice();
    });
  });

  updatePrice();
});

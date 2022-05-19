const Select = document.querySelector(".input-select")
const Money = document.querySelector(".input-money")
const Button = document.querySelector(".btn-primary")
const Result = document.querySelector(".Netice")
let values;
Select.addEventListener("change", function(){
     values = Select.value.toUpperCase()
    
})
axios({
    method: 'get',
    url: 'https://api.exchangerate.host/latest?base=AZN',
  })
    .then(function (response) {
        console.log(response);
        Button.addEventListener("click", function(){
            let money = Money.value
            Result.innerText = response.data.rates[values] * money
        })
    });

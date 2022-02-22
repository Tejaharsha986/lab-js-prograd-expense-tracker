let balance = 0.00;
let income = 0.00;
let expense = 0.00;
function addStroage(){
    var text = document.getElementById("text").value;
    var amount = parseFloat(document.getElementById("amount").value);
    localStorage.setItem(text , amount);
    document.getElementById("list").innerHTML += text+"-" +amount + '<br>' ;

    if(amount > 0)
    {
        income += amount;
        document.getElementById("money-plus").innerHTML="$"+income;
    }
    else{
        expense+=amount
        document.getElementById("money-minus").innerHTML="$"+expense;
    }
    balance = income + expense;
    document.getElementById("balance").innerHTML="$"+balance
}
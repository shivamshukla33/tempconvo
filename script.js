function convert() {
  var inputTemp = document.getElementById("inputTemp").value;
  var unitFrom = document.getElementById("unitFrom").value;
  var unitTo = document.getElementById("unitTo").value;

  if (unitFrom === unitTo) {
    document.getElementById("result").value = inputTemp;
    return;
  }

  if (unitFrom === "celsius" && unitTo === "fahrenheit") {
    var result = (inputTemp * 9 / 5) + 32;
    document.getElementById("result").value = result.toFixed(2);
  }

  if (unitFrom === "fahrenheit" && unitTo === "celsius") {
    var result = (inputTemp - 32) * 5 / 9;
    document.getElementById("result").value = result.toFixed(2);
  }
}

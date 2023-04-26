function calculateTotal() {
  const hoursWorked = parseFloat(document.getElementById("hours").value);
  const hourlyRate = parseFloat(document.getElementById("rate").value);

  // Check if either field is empty or invalid
  if (isNaN(hoursWorked) || isNaN(hourlyRate) || hoursWorked <= 0 || hourlyRate <= 0) {
    alert("Please enter valid values for Hours Worked and Hourly Rate.");
    return;
  }

  

  const fabricValue = parseFloat(document.getElementById("fabric").nextElementSibling.value) || 0;
  const backstageValue = parseFloat(document.getElementById("backstage").nextElementSibling.value) || 0;
  const lineTypeValue = parseFloat(document.getElementById("line-type").nextElementSibling.value) || 0;
  const hookTypeValue = parseFloat(document.getElementById("hook-type").nextElementSibling.value) || 0;
  const finishTypeValue = parseFloat(document.getElementById("finish-type").nextElementSibling.value) || 0;
  const embroideryTypeValue = parseFloat(document.getElementById("embroidery-type").nextElementSibling.value) || 0;

  // Check if any required fields are empty
  if (document.getElementById("fabric").value === "" || fabricValue === 0 ||
      document.getElementById("backstage").value === "" || backstageValue === 0 ||
      document.getElementById("line-type").value === "" || lineTypeValue === 0 ||
      document.getElementById("hook-type").value === "" || hookTypeValue === 0 ||
      document.getElementById("finish-type").value === "" || finishTypeValue === 0 ||
      document.getElementById("embroidery-type").value === "" || embroideryTypeValue === 0) {
    alert("Please select all required materials.");
    return;
  }

  const totalMaterial = (fabricValue + backstageValue + lineTypeValue + hookTypeValue + finishTypeValue + embroideryTypeValue);
  const hourlyTotal = hoursWorked * hourlyRate;
  const sumTotal = totalMaterial;
  const percentage = totalMaterial / 2 + sumTotal;
  const marketing = (percentage + hourlyTotal) * 0.1;
  const total = hourlyTotal + percentage + marketing;


//testes
/*   console.log(totalMaterial);
  console.log(hourlyTotal);
  console.log(percentage);
  console.log(marketing);
  console.log(total); */

  

  document.getElementById("result").innerHTML = "Total: $" + total.toFixed(2);
}

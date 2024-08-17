const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");

for(codes in countryList ){
    console.log(codes,countryList[codes] );
}

for( let select of dropdowns ){
  
  for(currcode in countryList ){
    let newOption = document.createElement("option");
    newOption.innerText = currcode;
    newOption.value = currcode;
      select.append(newOption);
}

}
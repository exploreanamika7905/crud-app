const employeeFormEle = document.getElementById(employee-form);
const firstName = document.getElementById("firstName");
const middleName = document.getElementById("middleName")
const lastName = document.getElementById("lastName");
const maritalStatus = document.getElementById("maritalStatus");
const dob = document.getElementById("dob");
const email = document.getElementById("email");
const mobileNumber = document.getElementById("mobileNumber");
const address = document.getElementById("address");
const street = document.getElementById("street");
const state = document.getElementById("state");
const zipcode = document.getElementById("zipcode");
const city = document.getElementById("city");
const country = document.getElementById("country");
console.log(employeeFormEle);


employeeFormEle.addEventListener("submit", async(e) => {
    e.preventDefault();
    console.log("form submitted");
    

// CREATE NEW EMP OBJECT
let newEmployeeData = {

    firstname : firstNameEle.value.trim(),
    middlename : middleNameEle.value.trim(),
    lastname : lastNameEle.value.trim(),
    maritalstatus : maritalStatusEle.value,
    dob : dobEle.value.trim(),
    email : emailEle.value.trim(),
    phoneno : phoneNoEle.value.trim(),
    address : {
        street : street.value.trim(),
    city : city.value.trim(),
    state : state.value.trim(),
    country : country.value.trim(),
    zipcode : zipcodeEle.value.trim(),
    },

}; 

  try{
    let resp = await fetch("https://crud-app-js-xw67.onrender.com/employees", {
    method: "POST",
    headers: {
        "content-type": "application/json",
    },
    body: JSON.stringify(newEmployeeData), // Send EMP data in json-format
}); 
console.log(resp);

//navigation
window.location.href = "AllEmployee.html";
} catch(err) {
    console.log(err);
   alert("something went wrong");
}
});
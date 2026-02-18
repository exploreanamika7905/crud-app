const employeesContainerEle = document.getElementById("employees-container");

async function getAllEmployees() {
    try {
        let resp = await fetch("https://crud-app-js-xw67.onrender.com/employees/");
        const data = await resp.json();
        console.log(data);
        displayEmployees(data);
    } catch (err) {
        console.log(err);
        alert("something went wrong.");
    }
}
// CALLS FUNCTION AFTER DOM TREE CREATION
window.addEventListener("DOMContentLoaded", () => {
    getAllEmployees();
});

function displayEmployees(allemployees) 
{
    allEmployees.map((emp) => {
        const empCard = document.createElement("article");
        empCard.className = "emp-card";
        

empCard.innerHTML = `
<header class="emp-header">
<h3 class ="emp-name">
<h3>${emp.firstname} ${emp.middlename} ${emp.lastname}</h3>
<span class = "emp-id">ID: ${emp.id}</span>
</header>

<section class ="emp-info">
<P><strong>

<section class="emp-contact">
<p><strong>Email:</strong> ${emp.email}</p>
<p><strong>Phone:</strong> ${emp.phone}</p>
</section>

<section class="emp-address">
<p><strong>Address:</strong></p>  
<P>${emp.address.street}, ${emp.address.city}, <br>${emp.address.state},${emp.address.country}-${emp.address.zipcode}</P>
<P>
</section>

<footer class="emp-actions">
<button class="edit-btn" data-id="${emp.id}">Edit</button>
<button class="delete-btn" data-id="${emp.id}">Delete</button>
</footer>
`;

//apply click event in deleteBtn

const deleteBtn = empCard.querySelector(".delete-btn");
deleteBtn.addEventListener("click", () => {
    handleDelete(emp.id);
});

//apply click event in edit 
const editBtn = empCard.querySelector(".edit-btn");
editBtn.addEventListener("click", () => {
    handleEdit(emp.id);
});

employeesContainerEle.append(empCard);
});
}
 async function handleDelete(id) {
    
    try{
 let resp = await fetch(`https://crud-app-js-xw67.onrender.com/employees/${id}`,
{method: "Delete"},
 );
 if (!resp.ok) {
      throw new Error("Delete failed");
    }

    alert("Employee deleted ✅");
    employeesContainerEle.innerHTML = "";
    getAllEmployees();
    }catch(error){
        console.log(error);
        alert("Unable to delete ❌"); 
    }
}

function handleEdit(id){
window.location.href = `EditEmployee.html?id=${id}`;
}
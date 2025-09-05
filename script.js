document.getElementById("generateBtn").addEventListener("click", function() {
  const name = document.getElementById("name").value;
  const designation = document.getElementById("designation").value;
  const department = document.getElementById("department").value;
  const employeeId = document.getElementById("employeeId").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const joinDate = document.getElementById("joindate").value;
  const photo = document.getElementById("photo").files[0];

  if(!name || !designation || !department || !employeeId || !phone || !email || !joinDate || !photo){
    alert("Please fill all fields and upload a photo!");
    return;
  }

  document.getElementById("cardName").innerText = name;
  document.getElementById("cardDesignation").innerText = designation;
  document.getElementById("cardDepartment").innerText = "Department: " + department;
  document.getElementById("cardEmployeeId").innerText = "ID Number: " + employeeId;
  document.getElementById("cardPhone").innerText = "Phone: " + phone;
  document.getElementById("cardEmail").innerText = "Email: " + email;
  document.getElementById("cardJoinDate").innerText = "Joining: " + joinDate;

  const reader = new FileReader();
  reader.onload = function(e) {
    document.getElementById("cardPhoto").src = e.target.result;
  }
  reader.readAsDataURL(photo);

  document.getElementById("idCard").style.display = "block";
  document.getElementById("idCard").scrollIntoView({behavior:"smooth"});
});

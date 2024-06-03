function getFormvalue() {
    //Write your code here
	let first_name = document.getElementById("fname").value;
	let last_name = document.getElementById("lname").value;
	// let last_name= inputs[1].value;
	let fullName = first_name + " " + last_name;
	alert(fullName);
}

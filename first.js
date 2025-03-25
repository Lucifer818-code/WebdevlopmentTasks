function validation()
{
 var v1 = document.getElementsByName("fname")[0];
 var v2 = document.getElementsByName("lname")[0];
 var nu = document.getElementsByName("n")[0];

var e=document.getElementById("er");
var e1=document.getElementById("er1");
var e2=document.getElementById("er2");
 
var expname=/^[A-Za-z]{3,20}$/;
var expname1=/^[A-Za-z]{1,20}$/;
var expnu=/^[6789]{1}[0-9]{9}$/;

if (v1.value==""){
	e.innerHTML="please fill the name";
	v1.focus();
	return false;
}
else if (expname.test(v1.value)==false){
	e.innerHTML="please Enter Valid Name";
	v1.focus();
	return false;
}
else{
	e.innerHTML="";
	}
	
if (v2.value==""){
	e1.innerHTML="please fill the name";
	v2.focus();
	return false;
}
else if (expname1.test(v2.value)==false){
	e1.innerHTML="please Enter Valid Name";
	v2.focus();
	return false;
}
else{
	e1.innerHTML="";
	}
	
if (nu.value==""){
	e2.innerHTML="please Enter Mobile Number";
	nu.focus();
	return false;
}
else if (expnu.test(nu.value)==false){
	e2.innerHTML="please Enter Valid Mobile Number";
	nu.focus();
	return false;
}
else{
	e2.innerHTML="";
	}
return true;
}
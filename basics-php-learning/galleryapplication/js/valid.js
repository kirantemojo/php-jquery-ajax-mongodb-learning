<<<<<<< HEAD
function validateForm(){
  n = document.Registrationform.Name.value;
  mo  = document.Registrationform.Mobile.value;
  pw = document.Registrationform.Password.value;
  Cpw = document.Registrationform.CPassword.value;
  fname=document.Registrationform.file.value;
    npat = /^[a-z][a-z\s]{2,}$/i;  
  if(!npat.test(n)){
       alert("Name is invalid");
       return false;
  }
  mpat = /^[6-9][0-9]{9}$/; 
  if(!mpat.test(mo)){
      alert("invalid mobile no.");
     return false;
  }
  if(pw.length < 6){
       alert("Password length should be >= 6 ");
       return false;
  }
  if(Cpw!=pw){
       alert("Password Mismatch ");
       return false;
  }
  fpat=/\.(jpe?g|png|gif)$/i;
  if(!fpat.test(fname))
  {
		alert('File is invalid');
		return false;
  }
  return true;
=======
function validateForm(){
  n = document.Registrationform.Name.value;
  mo  = document.Registrationform.Mobile.value;
  pw = document.Registrationform.Password.value;
  Cpw = document.Registrationform.CPassword.value;
  fname=document.Registrationform.file.value;
    npat = /^[a-z][a-z\s]{2,}$/i;  
  if(!npat.test(n)){
       alert("Name is invalid");
       return false;
  }
  mpat = /^[6-9][0-9]{9}$/; 
  if(!mpat.test(mo)){
      alert("invalid mobile no.");
     return false;
  }
  if(pw.length < 6){
       alert("Password length should be >= 6 ");
       return false;
  }
  if(Cpw!=pw){
       alert("Password Mismatch ");
       return false;
  }
  fpat=/\.(jpe?g|png|gif)$/i;
  if(!fpat.test(fname))
  {
		alert('File is invalid');
		return false;
  }
  return true;
>>>>>>> 0498a510dd3669b37c19f161fdfda8c6fac004bd
}
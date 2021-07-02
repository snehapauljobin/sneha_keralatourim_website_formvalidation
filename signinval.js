let error1=document.getElementById("error1");
let error2=document.getElementById("error2");
let email=document.getElementById("email");
let password=document.getElementById("password");
let show=document.querySelector(".show");
let hide=document.querySelector(".hide");

let submitbutton=document.getElementById("submitbutton");

error1.style.fontSize="14px";
error2.style.fontSize="14px";
error1.style.fontStyle="italic";
error2.style.fontStyle="italic";




// ----------------------Email---------------------------
function validateForm(){
if  (email.value.trim()=="" || email.value== null){
    error1.innerHTML="Please enter the Email";
    email.style.border="2px solid #800000";
      return false;
  }
  
  
  else{
    validateemail();
  }
    if(error1.innerHTML=="Invalid"){
      email.style.border="2px solid #800000";
    return false;
  }else{
   email.style.border="2px solid #006400";
   
  }

// ----------------------Password---------------------

if (password.value.trim()==""|| password.value.trim()==null){

    error2.innerHTML="Please enter the password";
    password.style.border="2px solid #800000";
    return false;
  }
else{ error2.innerHTML="Valid";
password.style.border="2px solid #006400";
return true;
}
    
}










//   ----------------------------Email-----------------------
function validateemail(){
    let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/
    if(regexp.test(email.value)){
        error1.innerHTML="Valid" 
        return true;   
    }
        else{
            error1.innerHTML="Invalid Email";
            return false;
        }
}



// ------------------------------Password--------------------------
















// -----------------toggle-----------------------

show.onclick=function toggle(){
    password.setAttribute("type","text");
    show.style.display="none";
    hide.style.display="block";
    }
    
    
    hide.onclick= function toggle1(){
      password.setAttribute("type","password");
      hide.style.display="none";
      show.style.display="block";
      }
    
    
    // ---------------------toggle----------------
    
    function toggle3(){
        submitbutton.style.borderColor=" #006400";
    }
    
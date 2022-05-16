const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
});



const pwShow = document.querySelector(".show"),
createPassword = document.querySelector("#exampleInputPassword1"),
confirmPassword = document.querySelector("#exampleInputPassword2"),
alertIcon = document.querySelector("#exclamationSymbol"),
alertText = document.querySelector(".text"),
submitBtn = document.querySelector("#button");

//js code to show and hide password
pwShow.addEventListener("click", ()=>{
    if((createPassword.type === "password") && (confirmPassword.type === "password")){
            createPassword.type = "text";
            confirmPassword.type = "text";
            pwShow.classList.replace("visibility", "visibility_off");
    }else {
            createPassword.type = "password";
            confirmPassword.type = "password";
            pwShow.classList.replace("visibility_off", "visibility");
    }

});



//js code to check and confirm input password fields
createPassword.addEventListener("input", ()=>{
   let inputValue = createPassword.value.trim();

   if(inputValue.length >= 8){
       confirmPassword.removeAttribute("disabled");
       submitBtn.removeAttribute("disabled");
       submitBtn.classList.add("active");

   }else {
       confirmPassword.setAttribute("disabled", true);
       submitBtn.setAttribute("disabled", true);
       submitBtn.classList.remove("active");
       confirmPassword.value = "";
       alertText.innerHTML ="Enter at least 8 characters";
       alertText.style.color = "#a6a6a6";
       alertIcon.style.display = "none";
   }
});

submitBtn.addEventListener("click", ()=>{
    if(createPassword.value !== confirmPassword.value){
        alertText.innerHTML ="Password doesn't match";
        alertIcon.style.display = "block";
        alertText.style.color = "#D93025";
    }
});
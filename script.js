
//authentication and styles
let homeSection = document.getElementById("home-section")
let username = localStorage.getItem("username")
const setUsernameBtn = document.getElementById("set-username-btn")
const usernameInpField = document.getElementById("username-inp")
let landingPage = document.getElementById("landing-section")
let isSiteAdmin = false
let adminInterface = document.getElementById("admin-interface")
let postBar = document.getElementById("post-section")
let postLink = document.getElementById("post-link")
//check username or agent id script
if (username){
  landingPage.style.display = "none"
  if (username === "PEACHBLOGSITEV1.0") {
    isSiteAdmin = true
  }
} else {
  homeSection.style.display = "none"
}
if (isSiteAdmin) {
  adminInterface.style.display = "inline"
}

//making buttons useful 
setUsernameBtn.addEventListener("click" , function(){
  localStorage.setItem("username" , usernameInpField.value
  )
})

postLink.addEventListener("click" , function () {
  if(postBar.style.display === "block"){
    postBar.style.display = "none"
  } else {
    postBar.style.display = "block"
    postLink.style.animation = "none"
  }
} )

const mobileBio = document.getElementById("biography")
const mobileSkill = document.getElementById("skill")
const mobileExperience = document.getElementById("experience")
const bioBtn = document.getElementById("bio-btn")
const skillBtn = document.getElementById("skill-btn")
const experienceBtn = document.getElementById("experience-btn")
const emailForm = document.getElementById("form")
const mobileForm = document.getElementById("m-form")
const portrait = document.getElementById("portrait")

function openBio(){
if(bioBtn){
  return mobileBio.classList.add("active")
}
}
function openSkill(){
  if(skillBtn){
  return mobileSkill.classList.add("active")
}
}
function openExperience(){
  if(experienceBtn){
  return mobileExperience.classList.add("active")
}
}
function closeMobile(){
  mobileBio.classList.remove("active")
  mobileSkill.classList.remove("active")
  mobileExperience.classList.remove("active")
}

function openForm(){
  emailForm.classList.add("active")
  mobileForm.classList.add("active")
}

function closeForm(){
  emailForm.classList.remove("active")
  mobileForm.classList.remove("active")
}
function revealFace(){
portrait.innerHTML = `<img src='assets/faceReveal/angry-memoji.png' class="profile-pic"/>`
}

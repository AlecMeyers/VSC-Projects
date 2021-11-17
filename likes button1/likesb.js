var button = document.getElementById("likeb")
    count = 0
button.onclick = function() {
    count += 1
    button.innerText = "likes:" + count
}
var numberlikes = document.getElementById("numberlikes")
    count1= 0
function addlike() {
    console.log("sup")
    count1 += 1
    numberlikes.innerText = count1 + "likes"
} 
var numberlikes1 = document.getElementById("numberlikes1")
var count2 = 0
function addlike1 (){
    console.log("ayo")
    count2 += 1
    numberlikes1.innerText= count2 + "likes"
}
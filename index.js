


const items = document.querySelectorAll("ul li");
items.forEach((item) => {
item.addEventListener("click",()=>{
    document.querySelector("li.active").classList.remove("active");
    //item.classList.add("active")
});
});

let copyText = document.querySelector(".copy-text");
copyText.querySelector("button").addEventListener("click",function(){
let input = copyText.querySelector("input.text");
input.select();
document.execCommand("copy");
copyText.classList.add("active");
window.querySelector().removeAllranges();
setTimeout(function(){
    copyText.classList.remove("active");
},2500);
});

let copyText2 = document.querySelector(".copy-text2");
copyText2.querySelector("button").addEventListener("click",function(){
let input = copyText2.querySelector("input.text2");
input.select();
document.execCommand("copy");
copyText2.classList.add("active");
window.querySelector().removeAllranges();
setTimeout(function(){
    copyText2.classList.remove("active");
},2500);
});
let copyText3 = document.querySelector(".copy-text3");
copyText3.querySelector("button").addEventListener("click",function(){
let input = copyText3.querySelector("input.text3");
input.select();
document.execCommand("copy");
copyText3.classList.add("active");
window.querySelector().removeAllranges();
setTimeout(function(){
    copyText3.classList.remove("active");
},2500);
});
let copyText4 = document.querySelector(".copy-text4");
copyText4.querySelector("button").addEventListener("click",function(){
let input = copyText4.querySelector("input.text4");
input.select();
document.execCommand("copy");
copyText4.classList.add("active");
window.querySelector().removeAllranges();
setTimeout(function(){
    copyText4.classList.remove("active");
},2500);
});
let copyText5 = document.querySelector(".copy-text5");
copyText5.querySelector("button").addEventListener("click",function(){
let input = copyText5.querySelector("input.text5");
input.select();
document.execCommand("copy");
copyText5.classList.add("active");
window.querySelector().removeAllranges();
setTimeout(function(){
    copyText5.classList.remove("active");
},2500);
});
let copyText6 = document.querySelector(".copy-text6");
copyText6.querySelector("button").addEventListener("click",function(){
let input = copyText6.querySelector("input.text6");
input.select();
document.execCommand("copy");
copyText6.classList.add("active");
window.querySelector().removeAllranges();
setTimeout(function(){
    copyText6.classList.remove("active");
},2500);
});
let copyText7 = document.querySelector(".copy-text7");
copyText7.querySelector("button").addEventListener("click",function(){
let input = copyText7.querySelector("input.text7");
input.select();
document.execCommand("copy");
copyText7.classList.add("active");
window.querySelector().removeAllranges();
setTimeout(function(){
    copyText7.classList.remove("active");
},2500);
});
let copyText8 = document.querySelector(".copy-text8");
copyText8.querySelector("button").addEventListener("click",function(){
let input = copyText8.querySelector("input.text8");
input.select();
document.execCommand("copy");
copyText8.classList.add("active");
window.querySelector().removeAllranges();
setTimeout(function(){
    copyText8.classList.remove("active");
},2500);
});
let copyText9 = document.querySelector(".copy-text9");
copyText9.querySelector("button").addEventListener("click",function(){
let input = copyText9.querySelector("input.text9");
input.select();
document.execCommand("copy");
copyText9.classList.add("active");
window.querySelector().removeAllranges();
setTimeout(function(){
    copyText9.classList.remove("active");
},2500);
});



function myFunction(){
    var a = document.getElementById("myInput");
    var b = document.getElementById("hide1");
    var c = document.getElementById("hide2");

    if(a.type === 'password'){
      a.type = "text";
      b.style.display = "block";
      c.style.display = "none"; 
    }
    else{
        a.type = "password"
        b.style.display = "none";
        c.style.display = "block"; 
      }
}

var state = false;
function toggle(){
    if (state) {
        document.getElementById("lpword")
        .setAttribute("type", "password")
        document.getElementById("show").style.color ='#0d1a00'
        state = false;
    } else {
        document.getElementById("lpword")
        .setAttribute("type", "text")
        document.getElementById("show").style.color ='#00e600'
        state = true; 
    }
}





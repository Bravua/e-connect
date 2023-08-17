


    const items = document.querySelectorAll("ul li");
    items.forEach((item) => {
    item.addEventListener("click",()=>{
        document.querySelector("li.active").classList.remove("active");
        //item.classList.add("active")
    });
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





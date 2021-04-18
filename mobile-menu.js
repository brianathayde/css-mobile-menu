

function menuopen(){
    document.getElementById("curtain").classList.add("menu-open");
    
    document.getElementById("bg").classList.add("dark-bg-open");
}

function menuclose(){
    document.getElementById("curtain").classList.remove("menu-open");
    
    document.getElementById("bg").classList.remove("dark-bg-open");
}
var icon = document.getElementById("dark-change");
var content = document.getElementsByTagName('body')[0];
const theme = localStorage.getItem("theme");
            
theme && content.classList.add(theme);
if(theme){
    content.classList.add('dark-theme');
}
            
icon.onclick = function(){
    content.classList.toggle("dark-theme");
    if(content.classList.contains("dark-theme")){
        //icon.src="sun.png";
        
        icon.classList.add("bi-sun-fill");
        icon.classList.remove("bi-moon-stars-fill");
        
        localStorage.setItem('theme', "dark-mood");
    }else{
        //icon.src="moon.png";
        
        icon.classList.remove("bi-sun-fill");
        icon.classList.add("bi-moon-stars-fill");
        
        localStorage.removeItem('theme');
    }
}
let icon = document.getElementById("dark-change");
let content = document.getElementsByTagName('body')[0];
let theme = localStorage.getItem("theme");

theme && content.classList.add('theme');
if(theme) {
    content.classList.add('dark-theme');
}

icon.addEventListener("click", ()=> {
    content.classList.toggle("dark-theme");
    if(content.classList.contains("dark-theme")) {
        icon.classList.add("bi-sun-fill");
        icon.classList.remove("bi-moon-stars-fill")
        
        localStorage.setItem('theme', "dark-mood");
    }else {
        icon.classList.remove("bi-sun-fill");
        icon.classList.add("bi-moon-stars-fill");
        
        localStorage.removeItem('theme');
    }
});
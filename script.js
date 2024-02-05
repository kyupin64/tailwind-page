function toggleNav() {
    let navi = document.getElementById("collapsible-nav");
    navi.classList.toggle("hidden");
    let butt = document.getElementById("nav-button")
    butt.classList.toggle("fa-bars");
    butt.classList.toggle("fa-minus")
    butt.classList.toggle("text-white");
    butt.classList.toggle("text-red-600")
    butt.classList.toggle("bg-red-600");
    butt.classList.toggle("bg-gray-200");
};
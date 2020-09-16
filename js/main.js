//menu-icon
document.getElementById('menu-icon').onclick = function() {
    this.classList.toggle('active');
    document.getElementById('sidebar').classList.toggle('active');
}

//like
let like = document.querySelectorAll(".like")
for (i = 0; i < like.length; i++) {
    like[i].addEventListener('click', function() {
        this.classList.toggle('active');
    });
}

let link = document.querySelectorAll(".sidebar__item_drop .sidebar__link")
for (i = 0; i < link.length; i++) {
    link[i].addEventListener('click', function(event) {
        event.preventDefault()
        this.classList.toggle('sidebar__link_active');
    });
}
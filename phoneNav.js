// THis Js file is to monitor Window Event Listener for when to remove and display Phone Nav.
window.addEventListener('resize', add);

function add(){
    if (innerWidth > '650') {
        handle()
    }
}

function remove() {
    window.removeEventListener('resize', remove)
}

function handle() {
    let element = document.getElementById('navbarID')
    if (element.style.display === "") {
        if (window.innerWidth < '650') {
            element.style.display = "flex";
            element.style.flexDirection = 'column';
            element.style.justifyContent = 'flex-start';
        }
    } else {
        element.style.display = ""
        remove()
    }
}


// console.log(innerWidth)
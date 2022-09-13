// let element = document.getElementById('navbarID')
// element.addEventListener('resize', handle)
window.addEventListener('resize', add);

function add(){
    if (innerWidth > '650') {
        handle()
    }
}

function remove() {
    console.log('remove')
    window.removeEventListener('resize', remove)
}

function handle() {
    console.log('called')
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
//        console.log(innerWidth)
//        element.removeEventListener('resize', handle)
    }
}


console.log(innerWidth)
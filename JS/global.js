const navfab = document.getElementsByClassName('navfab')[0]
const nav = document.getElementsByClassName('nav')[0]
const dark = document.getElementsByClassName('dark')[0]

const toggle = () => {
    nav.classList.toggle('active')
    dark.classList.toggle('active')
}

navfab.onclick = toggle
nav.onclick = toggle
dark.onclick = toggle

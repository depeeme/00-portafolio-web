/*SuperHI YT channel: https://www.youtube.com/watch?v=uprZMdVl-aQ&list=PL4txAcgAkueF_FKOgAPR36YXKIO8RklLY*/

const cursorTag = document.querySelector("div.cursor")
const ball = cursorTag.querySelector("div")

const mensajeCursor = cursorTag.querySelector("div span")
const links = document.querySelectorAll("a[data-hover]")

/*configuracion para el cursor */
document.addEventListener("mousemove", function (event) {
ball.style.left = event.pageX + "px"
ball.style.top = event.pageY + "px"
})

/*texto popup para los links [data-hover]*/
links.forEach(link => {
    link.addEventListener("mouseover", function () {
        mensajeCursor.classList.add("visible")
        mensajeCursor.innerHTML = link.getAttribute("data-hover")
    })
    link.addEventListener("mouseout", function () {
        mensajeCursor.classList.remove("visible")
    })
})
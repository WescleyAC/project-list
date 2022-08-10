const conTainer = document.querySelector(".container")
const lists = document.querySelectorAll("li")



lists.forEach((li, index) => {

li.addEventListener("click", e => {

    conTainer.querySelector(".active-list").classList.remove("active-list")
    li.classList.add("active-list")

    const vIndicator = document.querySelector(".indicator")
    vIndicator.style.transform = `translateX(calc(${index * 90}px))`
    


})

})

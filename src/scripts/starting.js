const playbtn = document.querySelector(".play-btn")

const crushName = document.querySelector(".crushName")

playbtn.addEventListener("click", () => {
  if (crushName.value == 0) {
    alert("Digite algum nome!")
  } else {
    localStorage.setItem("crush", crushName.value)
    playbtn.setAttribute("href", "src/pages/home.html")
  }
})

const ignoreBtn = document.querySelector(".ignore-btn")

ignoreBtn.addEventListener("click", () => {
  localStorage.removeItem("crush")
})

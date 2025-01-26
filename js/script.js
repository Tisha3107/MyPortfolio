var typed = new Typed(".typing", {
  strings: [
    "",
    "Web Developer",
    "Web Designer",
    "Front-end Developer",
    "Back-end Developer",
    "Full Stack Developer",
    "UI/UX Designer",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

const nav = document.querySelector(".nav"),
  navlist = nav.querySelectorAll("li"),
  totalNavList = navlist.length;
for (let i = 0; i < totalNavList; i++) {
  console.log(navlist[i]);
  const a = navlist[i].querySelector("a");
  a.addEventListener("click", function () {
    for (let j = 0; j < totalNavList; j++) {
      navlist[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
  });
}

document
  .querySelector(".form-submit-btn")
  .addEventListener("click", function () {
    const name = document.querySelector(".form-input-name").value.trim();
    const email = document.querySelector(".form-input-email").value.trim();
    const subject = document.querySelector(".form-input-subject").value.trim();
    const message = document.querySelector(".form-input-message").value.trim();
    const successMessage = document.querySelector(".form-success-message");

    if (name && email && subject && message) {
      successMessage.style.display = "block";
      successMessage.textContent =
        "Thank you! Your message has been sent successfully.";
    } else {
      successMessage.style.display = "block";
      successMessage.style.color = "#dc3545";
      successMessage.style.backgroundColor = "#f8d7da";
      successMessage.style.borderColor = "#dc3545";
      successMessage.textContent =
        "Please fill in all fields before submitting.";
    }
  });

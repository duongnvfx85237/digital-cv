const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const emailInput = document.querySelector("#emailInput");
const personalInfo = document.querySelector("#personal-info");
const personalForm = document.querySelector("#personal-form");
const submitBtn = document.querySelector("#submitBtn");

submitBtn.addEventListener("click", function () {
  if (emailInput.value.trim() === "") {
    alert("Email không được để trống");
    emailInput.focus();
  } else if (regex.test(emailInput.value)) {
    personalInfo.classList.remove("d-none");
    personalForm.classList.add("d-none");
  } else {
    alert("Email không hợp lệ");
    emailInput.focus();
  }
});

const resumeCards = document.querySelectorAll(".resume-card");

const handleClickViewMore = (card) => {
  const viewMoreBtn = card.querySelector("#viewMoreBtn");
  const resumeCardBody = card.querySelector(".resume-card-body");
  resumeCardBody.classList.add("d-block");
  viewMoreBtn.classList.add("d-none");
  card.setAttribute("data-expanded", "true");
};

resumeCards.forEach((card) => {
  const viewMoreBtn = card.querySelector("#viewMoreBtn");
  const resumeCardBody = card.querySelector(".resume-card-body");
  card.addEventListener("mouseover", function () {
    if (card.getAttribute("data-expanded") === "true") {
      return;
    }
    viewMoreBtn.classList.remove("d-none");
  });

  card.addEventListener("mouseout", function () {
    if (card.getAttribute("data-expanded") === "true") {
      return;
    }
    viewMoreBtn.classList.add("d-none");
  });

  viewMoreBtn.addEventListener("click", () => handleClickViewMore(card));
});

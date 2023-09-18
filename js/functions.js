//GET INITIALS
const myModal = new bootstrap.Modal(document.getElementById("firstTimeModal"), {
  keyboard: false,
  backdrop: (true, "static"),
  focus: false,
});

function getSeparatedName(name, id) {
  let newValue = name.split(" ");
  let initName = newValue[0].charAt(0);
  let initLastName = newValue[1].charAt(0);
}

//FADE WHEN TARGET IS ACTIVE

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

function redirectTestimonials(id) {
  window.location.href = `../landpage/nosotros.html#${id}`;
}

function openModal() {
  let nameCookie = "isFirstTime";
  function check_cookie_exists(name) {
    var match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
    if (match) {
      return true;
    } else {
      return false;
    }
  }
  if (!check_cookie_exists(nameCookie)) {
    setTimeout(() => {
      myModal.toggle();
    }, 1500);
  } else {
  }
}
function closeModalLater() {
  document.cookie = `isFirstTime=${false}; path=/; max-age=432000`;
  myModal.hide();
}

function closeModal() {
  document.cookie = `isFirstTime=${false}; path=/; max-age=7776000`;
  myModal.hide();
}

const readMoreTerms = document.getElementById("readMoreTerms");
const termsIntro = document.getElementById("termsIntro");
const readLessTerms = document.getElementById("readLessTerms");

readMoreTerms.addEventListener("click", function () {
  termsIntro.style.display = "none";
  readLessTerms.style.display = "block";
});

readLessTerms.addEventListener("click", function () {
  termsIntro.style.display = "block";
  readLessTerms.style.display = "none";
  window.scrollTo(0, 0);
});

const readMorePrivacy = document.getElementById("readMorePrivacy");
const privacyIntro = document.getElementById("privacyIntro");
const readLessPrivacy = document.getElementById("readLessPrivacy");

readMorePrivacy.addEventListener("click", function () {
  privacyIntro.style.display = "none";
  readLessPrivacy.style.display = "block";
  window.scrollTo(0, 4500);
});

readLessPrivacy.addEventListener("click", function () {
  privacyIntro.style.display = "block";
  readLessPrivacy.style.display = "none";
  window.scrollTo(0, 0);
});

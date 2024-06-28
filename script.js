function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");
  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

const body = document.querySelector("body"),
  toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");
});

var typingEffect = new Typed(".typedText", {
  strings: ["Student", "Learner", "Aspiring Developer"],

  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});

const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".text-info", { delay: 200 });
sr.reveal(".text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 320 });

sr.reveal(".project-box", { interval: 200 });

sr.reveal(".top-header", {});

const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

const srRight = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srRight.reveal(".skill", { delay: 100 });
srRight.reveal(".skill-box", { delay: 100 });

const sections = document.querySelectorAll(".section[id]");

function scrollActive() {
  document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");

    function changeActiveLink() {
      navLinks.forEach((link) => link.classList.remove("active-link"));
      this.classList.add("active-link");
    }

    navLinks.forEach((link) => {
      link.addEventListener("click", changeActiveLink);
    });
  });
}
window.addEventListener("scroll", scrollActive);

scrollActive();

document.addEventListener("DOMContentLoaded", function () {
  const sendButton = document.getElementById("sendBtn");
  const messageContainer = document.createElement("div");
  messageContainer.id = "messageContainer";
  messageContainer.style.display = "none";
  messageContainer.style.position = "fixed";
  messageContainer.style.top = "0";
  messageContainer.style.left = "50%";
  messageContainer.style.transform = "translateX(-50%)";
  messageContainer.style.padding = "10px 20px";
  messageContainer.style.backgroundColor = "#4CAF50";
  messageContainer.style.color = "#fff";
  messageContainer.style.boxShadow = "0 2px 4px rgba(0,0,0,0.2)";
  messageContainer.style.zIndex = "1000";
  messageContainer.style.transition = "top 0.5s ease";
  document.body.appendChild(messageContainer);

  sendButton.addEventListener("click", function (event) {
    event.preventDefault();
    showMessage("Your message has been sent!");
  });

  function showMessage(message) {
    messageContainer.textContent = message;
    messageContainer.style.display = "block";
    messageContainer.style.top = "-50px";

    void messageContainer.offsetWidth;

    messageContainer.style.top = "20px";

    setTimeout(hideMessage, 3000);
  }

  function hideMessage() {
    messageContainer.style.top = "-50px";
    setTimeout(function () {
      messageContainer.style.display = "none";
    }, 500);
  }
});

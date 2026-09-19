// ============================================
// SRIDHAR CONSULTANCY AND IT SERVICES
// JAVASCRIPT
// ============================================


// Current year in footer
const currentYear = document.getElementById("currentYear");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}


// ============================================
// SCROLL TO TOP BUTTON
// ============================================

const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", function () {
  if (window.scrollY > 400) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

scrollTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


// ============================================
// CONTACT FORM
// ============================================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value.trim();


  // Basic validation
  if (name === "" || email === "" || message === "") {

    formMessage.innerHTML = `
      <div class="alert alert-danger">
        Please complete all required fields.
      </div>
    `;

    return;
  }


  // Create WhatsApp enquiry message
  const whatsappMessage =
    `Hello Sridhar Consultancy and IT Services,

My Name: ${name}

Email: ${email}

Mobile: ${phone || "Not provided"}

Service Required: ${service || "Not selected"}

Project Requirement:
${message}

I would like to discuss this project.`;

  const encodedMessage = encodeURIComponent(whatsappMessage);


  // Business WhatsApp number with India country code
  const whatsappNumber = "918247063268";

  const whatsappURL =
    `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;


  formMessage.innerHTML = `
    <div class="alert alert-success">
      Thank you, ${name}. Your enquiry is ready.
      You will now be redirected to WhatsApp.
    </div>
  `;


  // Open WhatsApp after form submission
  setTimeout(function () {
    window.open(whatsappURL, "_blank");
  }, 700);

});


// ============================================
// CLOSE MOBILE NAVBAR AFTER CLICKING A LINK
// ============================================

const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
const navbarCollapse = document.querySelector(".navbar-collapse");

navLinks.forEach(function (link) {

  link.addEventListener("click", function () {

    if (navbarCollapse.classList.contains("show")) {

      const bootstrapCollapse =
        bootstrap.Collapse.getOrCreateInstance(navbarCollapse);

      bootstrapCollapse.hide();
    }

  });

});


// ============================================
// NAVBAR EFFECT WHILE SCROLLING
// ============================================

const navbar = document.querySelector(".custom-navbar");

window.addEventListener("scroll", function () {

  if (window.scrollY > 80) {

    navbar.style.padding = "8px 0";
    navbar.style.boxShadow =
      "0 4px 15px rgba(0, 0, 0, 0.15)";

  } else {

    navbar.style.padding = "15px 0";
    navbar.style.boxShadow = "none";

  }

});
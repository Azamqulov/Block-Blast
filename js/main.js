// Cookie Consent
document.addEventListener("DOMContentLoaded", () => {
  const cookieConsent = document.getElementById("cookieConsent")
  const cookieAccept = document.getElementById("cookieAccept")

  // Check if user has already accepted cookies
  if (!localStorage.getItem("cookieConsent")) {
    cookieConsent.style.display = "block"
  }

  cookieAccept.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "true")
    cookieConsent.style.display = "none"
  })

  // Header scroll effect
  const header = document.querySelector(".header")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      header.style.backgroundColor = "rgba(10, 25, 41, 0.9)"
    } else {
      header.style.backgroundColor = "rgba(10, 25, 41, 0.9)"
    }
  })

  // FAQ Accordion
  const faqItems = document.querySelectorAll(".faq-item")

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question")

    question.addEventListener("click", () => {
      // Close all other FAQ items
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active")
        }
      })

      // Toggle the clicked FAQ item
      item.classList.toggle("active")
    })
  })

  // Contact Form Submission
  const contactForm = document.getElementById("contactForm")

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Here you would typically send the form data to a server
      // For this example, we'll just show an alert
      alert("Thank you for your message! We will get back to you soon.")
      contactForm.reset()
    })
  }

  // Subscribe Form Submission
  const subscribeForm = document.querySelector(".subscribe-form")

  if (subscribeForm) {
    subscribeForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Here you would typically send the form data to a server
      // For this example, we'll just show an alert
      alert("Thank you for subscribing! You will receive our latest updates soon.")
      subscribeForm.reset()
    })
  }
})

// Cookie Consent
document.addEventListener("DOMContentLoaded", () => {
  const cookieConsent = document.getElementById("cookieConsent")
  const cookieAccept = document.getElementById("cookieAccept")

  // Check if user has already accepted cookies
  if (!localStorage.getItem("cookieConsent")) {
    cookieConsent.style.display = "block"
  }

  cookieAccept.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "true")
    cookieConsent.style.display = "none"
  })

  ///u Toggle
  // const menuToggle = document.querySelector(".mobile-menu-toggle")
  // const navList = document.querySelector(".nav-list")

  // menuToggle.addEventListener("click", () => {
  //   navList.classList.toggle("active")
  //   menuToggle.classList.toggle("active")
  // })
})

const openBtn = document.querySelector('.nav-icon');
const navBlog = document.querySelector('.nav-blog');

openBtn.addEventListener('click', () => {
  // document.querySelector('.nav-list').classList.toggle('active');
  document.querySelector('.nav-blog').classList.toggle('active');
});
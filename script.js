// Custom Cursor
document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.querySelector(".cursor")

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px"
    cursor.style.top = e.clientY + "px"
  })

  document.addEventListener("mousedown", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(0.8)"
  })

  document.addEventListener("mouseup", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1)"
  })

  document.querySelectorAll("a, button, .hamburger, .portfolio-item").forEach((item) => {
    item.addEventListener("mouseenter", () => {
      cursor.style.transform = "translate(-50%, -50%) scale(1.5)"
      cursor.style.borderColor = "transparent"
      cursor.style.backgroundColor = "rgba(0, 255, 170, 0.3)"
    })

    item.addEventListener("mouseleave", () => {
      cursor.style.transform = "translate(-50%, -50%) scale(1)"
      cursor.style.borderColor = "var(--primary-color)"
      cursor.style.backgroundColor = "transparent"
    })
  })

  // Navbar Scroll Effect
  const navbar = document.querySelector(".navbar")
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
    }
  })

  // Mobile Menu Toggle
  const hamburger = document.querySelector(".hamburger")
  const navLinks = document.querySelector(".nav-links")
  const navLinksItems = document.querySelectorAll(".nav-links a")

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navLinks.classList.toggle("active")
  })

  navLinksItems.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.remove("active")
      navLinks.classList.remove("active")
    })
  })

  // Scroll Reveal Animation
  function reveal() {
    const reveals = document.querySelectorAll(".reveal")

    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight
      const elementTop = reveals[i].getBoundingClientRect().top
      const elementVisible = 150

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active")
      }
    }
  }

  window.addEventListener("scroll", reveal)
  reveal() // Initial check on page load

  // Form Submission
  const contactForm = document.getElementById("contactForm")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form values
      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const phone = document.getElementById("phone").value
      const project = document.getElementById("project").value
      const message = document.getElementById("message").value

      // Here you would typically send this data to a server
      // For now, we'll just show an alert
      alert(`¡Gracias ${name}! Tu mensaje ha sido enviado. Te contactaré pronto.`)

      // Reset form
      contactForm.reset()
    })
  }

  // Typing effect for the hero section
  const typingEffect = () => {
    const text = "Webs con estilo. A medida. Sin gastar una fortuna."
    const tagline = document.querySelector(".tagline")

    if (tagline && window.innerWidth > 768) {
      tagline.innerHTML = ""
      let i = 0

      const typing = setInterval(() => {
        if (i < text.length) {
          if (text.substring(i, i + 23) === "Sin gastar una fortuna.") {
            tagline.innerHTML += `<span class="highlight">${text.substring(i, i + 23)}</span>`
            i += 23
          } else {
            tagline.innerHTML += text.charAt(i)
            i++
          }
        } else {
          clearInterval(typing)
        }
      }, 50)
    }
  }

  // Uncomment to enable typing effect
  // typingEffect();
})

// Formulario:


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita que se recargue la página

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const project = document.getElementById("project").value;
    const message = document.getElementById("message").value.trim();

    const subject = `Nuevo contacto desde Overmind - ${name}`;
    const body = `
Nombre: ${name}%0A
Email: ${email}%0A
Teléfono: ${phone}%0A
Plan elegido: ${project}%0A
Mensaje: %0A${message}
    `.trim();

    // Reemplazá el espacio con %20 y saltos de línea con %0A
    const mailtoLink = `mailto:contacto.overmind@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

    window.location.href = mailtoLink;
  });
});


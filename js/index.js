const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Update img src for snippet
const cta = document.getElementById("cta-img")
cta.setAttribute('src', siteContent["cta"]["img-src"])

// Update img src for middle snippet
const mid = document.getElementById("middle-img")
mid.setAttribute('src', siteContent["main-content"]["middle-img-src"])

// Update text in nav links
const linksFromNav = document.querySelectorAll('a')
function updateLinks() {
  const navContents = Object.values(siteContent.nav)
  for (let i = 0; i < linksFromNav.length; i++) {
    linksFromNav[i].textContent = navContents[i]
    linksFromNav[i].style.color = 'green'
  }
}
updateLinks()

// Append / Prepend Nav
const nav = document.querySelector('nav')

const newLink = document.createElement('a')
newLink.href = "#"
newLink.textContent = "New"
newLink.style.color = 'green'
nav.appendChild(newLink)

const oldLink = document.createElement('a')
oldLink.href = "#"
oldLink.textContent = "Legacy"
oldLink.style.color = 'green'
nav.prepend(oldLink)

// Update the cta h1 and button
const h1s = document.querySelector('h1')
h1s.textContent = ('class', siteContent["cta"]["h1"])

const buttons = document.querySelector('button')
buttons.textContent = ('class', siteContent["cta"]["button"])

// Update main section Features
const topContent = document.querySelector('section.main-content > div.top-content > div:nth-child(1) > h4')
topContent.textContent = ('class', siteContent["main-content"]["features-h4"])
const topContent1 = document.querySelector('section.main-content > div.top-content > div:nth-child(1) > p')
topContent1.textContent = ('class', siteContent["main-content"]["features-content"])
// Update main section About
const topContent2 = document.querySelector('section.main-content > div.top-content > div:nth-child(2) > h4')
topContent2.textContent = ('class', siteContent["main-content"]["about-h4"])
const topContent3 = document.querySelector('section.main-content > div.top-content > div:nth-child(2) > p')
topContent3.textContent = ('class', siteContent["main-content"]["about-content"])

// Update main section Services
const bottomContent = document.querySelector('section.main-content > div.bottom-content > div:nth-child(1) > h4')
bottomContent.textContent = ('class', siteContent["main-content"]["services-h4"])
const bottomContent1 = document.querySelector('section.main-content > div.bottom-content > div:nth-child(1) > p')
bottomContent1.textContent = ('class', siteContent["main-content"]["services-content"])
// Update main section Product
const bottomContent2 = document.querySelector('section.main-content > div.bottom-content > div:nth-child(2) > h4')
bottomContent2.textContent = ('class', siteContent["main-content"]["product-h4"])
const bottomContent3 = document.querySelector('section.main-content > div.bottom-content > div:nth-child(2) > p')
bottomContent3.textContent = ('class', siteContent["main-content"]["product-content"])
// Update main section Vision
const bottomContent4 = document.querySelector('section.main-content > div.bottom-content > div:nth-child(3) > h4')
bottomContent4.textContent = ('class', siteContent["main-content"]["vision-h4"])
const bottomContent5 = document.querySelector('section.main-content > div.bottom-content > div:nth-child(3) > p')
bottomContent5.textContent = ('class', siteContent["main-content"]["vision-content"])

// Update contact section
const contactContent = document.querySelector('section.contact > h4')
contactContent.textContent = ('class', siteContent["contact"]["contact-h4"])
const contactContent1 = document.querySelector('section.contact > p:nth-child(2)')
contactContent1.textContent = ('class', siteContent["contact"]["address"])
const contactContent2 = document.querySelector('section.contact > p:nth-child(3)')
contactContent2.textContent = ('class', siteContent["contact"]["phone"])
const contactContent3 = document.querySelector('section.contact > p:last-child')
contactContent3.textContent = ('class', siteContent["contact"]["email"])

// Update footer
const footerContent = document.querySelector('footer > p')
footerContent.textContent = ('class', siteContent["footer"]["copyright"])
const siteContent = { // DO NOT CHANGE THIS OBJECT

  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

//images
const logo = document.querySelector('#logo-img');
const cta = document.querySelector('#cta-img');
const middle = document.querySelector('#middle-img');
logo.src = siteContent.images['logo-img'];
cta.src = siteContent.images['cta-img'];
middle.src = siteContent.images['accent-img'];

//nav
const navigation = document.querySelectorAll("header nav a");
const navLinks = Array.from(navigation);
const navText = Object.values(siteContent.nav);
navLinks.forEach((item,index)=> {
  item.textContent = navText[index];
  item.classList.add('italic');
})

//header
const ctaHeader = document.querySelector('.cta-text > h1');
ctaHeader.textContent = 'DOM IS AWESOME';
const ctaButton = document.querySelector('.cta-text > button');
ctaButton.textContent = 'GET STARTED';

//middle section
const top = document.querySelector('.top-content');
const bottom = document.querySelector('.bottom-content');
//top-middle
top.children[0].children[0].textContent = siteContent['main-content']['features-h4'];
top.children[0].children[1].textContent = siteContent['main-content']['features-content'];
top.children[1].children[0].textContent = siteContent['main-content']['about-h4'];
top.children[1].children[1].textContent = siteContent['main-content']['about-content'];
//bottom-middle
bottom.children[0].children[0].textContent = siteContent['main-content']['services-h4'];
bottom.children[0].children[1].textContent = siteContent['main-content']['services-content'];
bottom.children[1].children[0].textContent = siteContent['main-content']['product-h4'];
bottom.children[1].children[1].textContent = siteContent['main-content']['product-content'];
bottom.children[2].children[0].textContent = siteContent['main-content']['vision-h4'];
bottom.children[2].children[1].textContent = siteContent['main-content']['vision-content'];
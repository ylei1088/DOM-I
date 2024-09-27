const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

//nav
const links = document.querySelectorAll("nav a");

const linkRealArray = Array.from(links);
linkRealArray[0].textContent = "Services";
linkRealArray[1].textContent = "Product";
linkRealArray[2].textContent = "Vision";
linkRealArray[3].textContent = "Features";
linkRealArray[4].textContent = "About";
linkRealArray[5].textContent = "Contact";

//first section cta
const button = document.querySelector("button");

const ctaText = document.querySelector(".cta-text");
const h1 = ctaText.querySelector("h1");
h1.innerHTML = "DOM" + "<br />" + "Is" + "<br />" + "Awesome";

button.textContent = "Get Started";

const imgCta = document.querySelector("img#cta-img");
imgCta.src = "img/header-img.png";

//second section main content

const firstContent = document.querySelector(".text-content:nth-of-type(1)");
const textTitle = firstContent.querySelector("h4");
const textFirst = firstContent.querySelector("p");
textTitle.textContent = "Features";
textFirst.textContent =
  "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const secondContent = document.querySelector(".text-content:nth-of-type(2)");
const textSecondTitle = secondContent.querySelector("h4");
const textSecondFirst = secondContent.querySelector("p");
textSecondTitle.textContent = "About";
textSecondFirst.textContent =
  "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const middleImg = document.querySelector("img#middle-img");
middleImg.src = "img/mid-page-accent.jpg";

// const bottomContentOne = document.querySelector(".text-content:nth-of-type(3)");
// const bottomContentOneTitle = bottomContentOne.querySelector("h4");
// const bottomContentOneText = bottomContentOne.querySelector("p");
// bottomContentOneTitle.textContent = "Product";
// bottomContentOneText.textContent =
//   "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

// const bottomContentTwo = document.querySelector(".text-content:nth-of-type(4)");
// const bottomContentTwoTitle = bottomContentTwo.querySelector("h4");
// const bottomContentTwoText = bottomContentTwo.querySelector("p");
// bottomContentTwoTitle.textContent = "Services";
// bottomContentTwoText.textContent =
//   "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

// const bottomContentThree = document.querySelector(
//   ".text-content:nth-of-type(5)"
// );
// const bottomContentThreeTitle = bottomContentThree.querySelector("h4");
// const bottomContentThreeText = bottomContentThree.querySelector("p");
// bottomContentThreeTitle.textContent = "Vision";
// bottomContentThreeText.textContent =
//   "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

// const contactSection = document.querySelector(".contact");
// contactSection.textContent = "Contact";

const textContentBottom = document.querySelectorAll(".text-content h4");
const textContentBottomText = document.querySelectorAll(".text-content p");

textContentBottom[2].textContent = "Services";
textContentBottomText[2].textContent =
  "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

textContentBottom[3].textContent = "Product";
textContentBottomText[3].textContent =
  "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

textContentBottom[4].textContent = "Vision";
textContentBottomText[4].textContent =
  "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const contact = document.querySelectorAll(".contact h4");
const contactText = document.querySelectorAll(".contact p");

contact[0].textContent = "Contact";
contactText[0].textContent = "123 Way 456 Street Somewhere, USA";
contactText[1].textContent = "1 (888) 888-8888";
contactText[2].textContent = "sales@greatidea.io";

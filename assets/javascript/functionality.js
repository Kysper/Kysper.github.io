const dataHome = data.home;
const dataPortFolio = data.portfolio;
const dataContact = data.contact;
const dataLinks = data.links;
let html1, html2, html3, html4;

const Content = function(id, title, desc, links) {
  this.id = id;
  this.title = title;
  this.desc = desc;
  this.links = links;
};

const home = new Content(
  dataHome.id,
  dataHome.title,
  dataHome.description,
  dataLinks
);
const portfolio = new Content(
  dataPortFolio.id,
  dataPortFolio.title,
  dataPortFolio.description,
  dataLinks
);
const contact = new Content(
  dataContact.id,
  dataContact.title,
  dataContact.description,
  dataLinks
);
const el = [home, contact, portfolio];

const buttons = document
  .querySelector("*")
  .addEventListener("click", function(event) {
    const id = event.target.id;
    switch (id) {
      case "home-button":
        document.getElementById("top-container").scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        });
        break;

      case "about-button":
        document.getElementById("about").scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest"
        });

     
        break;
      case "contact-button":
        document.getElementById("contact").scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest"
        });
        break;
      case "portfolio-button":
        document.getElementById("portfolio").scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        });
        break;
      case "logo":
        document.querySelector("#top-container").scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest"
        });
        case "home-mobile":
          document.getElementById("top-container").scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "nearest"
            
          });toggleResponsiveMenu()
          break;
  
        case "about-mobile":
          document.getElementById("about").scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
          });toggleResponsiveMenu()
  
       
          break;
        case "contact-mobile":
          document.getElementById("contact").scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
          });toggleResponsiveMenu()
          break;
        case "portfolio-mobile":
          document.getElementById("portfolio").scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
          });toggleResponsiveMenu()
          break;
    }
  });

function populatePage() {
  el.forEach(contents => {
    if (contents !== portfolio && contents !== contact) {
      document.getElementById(contents.id).innerHTML = `<div id='${
        contents.id
      }'>
      <img id='profile' src='./assets/images/profilepic.jpg'/>
        <p id='para'>${contents.desc}</p><br>`;
    } else if (contents == contact) {
      populateContact();
    } else {
      createHTML();
      populatePortfolio();
    }
  });
}

function instantiateIcons() {
  for (let i = 0; i < dataHome.technologies.length; i++) {
    document.getElementById("icons").innerHTML += `${
      dataHome.technologies[i]
    } <br>`;
  }
}

function populateContact() {
  document.getElementById("contact").innerHTML += `<h3 id='contact-title'></h3>
        <form action="https://formspree.io/vadams.dev@gmail.com" method="POST">
            <strong>Name:</strong><br><input type="text" name="name" placeholder='John Doe'><br>
            <strong>Email:</strong><br><input type="email" name="_replyto" placeholder='1234@gmail.com'><br>
            <strong>Message:</strong><br><textarea type='message' name='message' placeholder='Hello There!'></textarea><br>
            <input id='send' type="submit" value="Send">
          </form>`;
}

function populatePortfolio() {
  document.getElementById("portfolio").innerHTML += html1;
  document.getElementById("portfolio").innerHTML += html2;
  document.getElementById("portfolio").innerHTML += html3;
  document.getElementById("portfolio").innerHTML += html4;
}

function createHTML() {
  html1 = `<div class='portfolio-wrapper'>
            <h2 id='title'>${dataPortFolio.title[0]}<h2><br>
            <img class='portfolio-image' src='./assets/images/whatsfordinner.png'>       
            <p id='desc'>${dataPortFolio.description[0]}</p>
            <span>${dataHome.technologies[1]}${dataHome.technologies[2]}${
    dataHome.technologies[0]
  }</span><br>
            <a id='links' href='${data.links.projectLinks[0]}'>${
    dataPortFolio.title[0]
  }</a></div>`;
  html2 = `<div class='portfolio-wrapper'>
            <h2 id='title'>${dataPortFolio.title[1]}<h2><br>
            <img class='portfolio-image' src='../assets/images/christmaslist.png'>
            <p id='desc'>${dataPortFolio.description[1]}</p>
            <span>${dataHome.technologies[1]}${dataHome.technologies[2]}${
    dataHome.technologies[0]
  }${dataHome.technologies[3]}${dataHome.technologies[6]}</span><br>
            <a id='links' href='${data.links.projectLinks[1]}'>${
    dataPortFolio.title[1]
  }</a></div>`;

  html3 = `<div class='portfolio-wrapper'>
            <h2 id='title'>${dataPortFolio.title[2]}<h2><br>
            <img class='portfolio-image' src='../assets/images/abacus.png'>
            <p id='desc'>${dataPortFolio.description[2]}</p>
            <span>${dataHome.technologies[1]}${dataHome.technologies[2]}${
    dataHome.technologies[0]
  }${dataHome.technologies[3]}${dataHome.technologies[7]}</span><br>
            <a id='links' href='${data.links.projectLinks[2]}'>${
    dataPortFolio.title[2]
  }</a></div>`;

  html4 = `<div class='portfolio-wrapper'>
            <h2 id='title'>${dataPortFolio.title[3]}<h2><br>
            <img class='portfolio-image' src='../assets/images/budget.png'>
            <p id='desc'>${dataPortFolio.description[3]}</p>
            <span>${dataHome.technologies[1]}${dataHome.technologies[2]}${
    dataHome.technologies[0]
  }</span><br>
            <a id='links' href='${data.links.projectLinks[3]}'>${
    dataPortFolio.title[3]
  }</a></div>`;

  return html1, html2, html3, html4;
}

window.onscroll = function() {
  scrollToColor();
};

function scrollToColor() {
  element = document.querySelector("html");
  const btnPixels = element.scrollTop;
  if (btnPixels >= 300 || btnPixels >= 300) {
    document.querySelector("#home-button").className = "color-change";
    document.querySelector("#about-button").className = "color-change";
    document.querySelector("#portfolio-button").className = "color-change";
    document.querySelector("#contact-button").className = "color-change";
    document.querySelector("#logo").className = "color-change";
    document.querySelector('#bar1').className = "color-change"
    document.querySelector('#bar2').className = "color-change"
    document.querySelector('#bar3').className = "color-change"
  } else {
    document.querySelector("#home-button").className = "btn";
    document.querySelector("#about-button").className = "btn ";
    document.querySelector("#portfolio-button").className = "btn ";
    document.querySelector("#contact-button").className = "btn ";
    document.querySelector("#logo").className = " ";
    document.querySelector('#bar1').className = "hamburger"
    document.querySelector('#bar2').className = "hamburger"
    document.querySelector('#bar3').className = "hamburger"
  }
}

document.querySelector('#menu').addEventListener('click', (e) =>{
  toggleResponsiveMenu();
})

function toggleResponsiveMenu(){
  const nav = document.querySelector('#myNav')
  nav.style.height = nav.style.height === '100%' ? '0%' : '100%'
}



function init() {
  populatePage();
  instantiateIcons();
}

init();

var dataHome = data.home;
var dataPortFolio = data.portfolio;
var dataContact = data.contact;
var dataLinks = data.links;
var html1,html2,html3;

var Content = function (id, title, desc, links) {
    this.id = id;
    this.title = title;
    this.desc = desc;
    this.links = links;
}

var home = new Content(dataHome.id, dataHome.title, dataHome.description, dataLinks);
var portfolio = new Content(dataPortFolio.id, dataPortFolio.title, dataPortFolio.description, dataLinks);
var contact = new Content(dataContact.id,dataContact.title,dataContact.description,dataLinks);
var el = [home, contact, portfolio];


document.querySelector('*').addEventListener('click', function (event) {
    var id = event.target.id;
    switch (id) {
        case 'home-button':
            document.getElementById('contact', 'portfolio').classList.remove('active');
            document.getElementById('home').classList.add('active');
            document.getElementById('top-page').textContent = '';
            setTopPage(el[0]);
            break;
            case 'contact-button':
                document.getElementById('home','portfolio').classList.remove('active');
                document.getElementById('contact').classList.add('active');
                document.getElementById('top-page').textContent = '';
                setTopPage(el[1]);
                break;
        case 'portfolio-button':
            document.getElementById('home','contact').classList.remove('active');
            document.getElementById('portfolio').classList.add('active');
            document.getElementById('top-page').textContent = '';
            setTopPage(el[2]);
            break;
        case 'logo':
            document.getElementById('top-page').innerHTML = '';
    }
});
function setTopPage(content) {
    var active = document.getElementsByClassName('active');
    if (active && content !== portfolio && contact !== contact) {
        document.getElementById('top-page').innerHTML += `<div id='${content.id}'>
                <h2>${content.title}<h2><br>
                <p>${content.desc}</p><br>
                <a href='${content.links.linkURL[0]}'>${content.links.linkName[0]}<br></a> | <a href='${content.links.linkURL[1]}'>${content.links.linkName[1]}<br></a>`
    }

    if(active && content == contact){
        document.getElementById('top-page').innerHTML += `<form action="https://formspree.io/vadams.dev@gmail.com" method="POST">
            <strong>Name:</strong><br><input type="text" name="name" placeholder='John Doe'><br>
            <strong>Email:</strong><br><input type="email" name="_replyto" placeholder='1234@gmail.com'><br>
            <strong>Message:</strong><br><textarea type='message' name='message' placeholder='Hello There!'></textarea><br>
            <input id='send' type="submit" value="Send">
          </form>`
    }

    if (active && content == portfolio) {
        document.getElementById('top-page').innerHTML += html1
        document.getElementById('top-page').innerHTML += html2;
        document.getElementById('top-page').innerHTML += html3;
    }
}

function populatePage() {
    el.forEach(contents => {
        if (contents !== portfolio && contents !== contact) {
            document.getElementById(contents.id).innerHTML = `<div id='${contents.id}'>
                    <h2 id='title'>${contents.title}<h2><br>
                    <p id='para'>${contents.desc}</p><br>`
        } else if(contents == contact){
           
            populateContact();
        }else{
            createHTML();
            populatePortfolio();
        }
    })
}
var i = 0;
var txt = 'Hi! My name is Victor.';
function typeWriter() {
    var speed = 80;

    if (i < txt.length) {
        document.getElementById('type-writer').innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else if (i == txt.length) {
        txt = 'I am a Full-stack Web Developer.';
        if (i < txt.length) {
            i = 0;
            document.getElementById('type-writer').innerHTML += '<br>' + txt.charAt(i);
            i++
            setTimeout(typeWriter, speed);
        }
    }
}
typeWriter();

function instantiateIcons() {
    for (let i = 0; i < dataHome.technologies.length; i++) {
        document.getElementById('icons').innerHTML += dataHome.technologies[i];
    }

}

function populateContact(){
document.getElementById('contact').innerHTML += `<h3 id='title'>Contact</h3>
        <form action="https://formspree.io/vadams.dev@gmail.com" method="POST">
            <strong>Name:</strong><br><input type="text" name="name" placeholder='John Doe'><br>
            <strong>Email:</strong><br><input type="email" name="_replyto" placeholder='1234@gmail.com'><br>
            <strong>Message:</strong><br><textarea type='message' name='message' placeholder='Hello There!'></textarea><br>
            <input id='send' type="submit" value="Send">
          </form>`
}

function populatePortfolio() {
    document.getElementById('portfolio').innerHTML += html1
    document.getElementById('portfolio').innerHTML += html2;
    document.getElementById('portfolio').innerHTML += html3;
}

function createHTML() {
   html1 =    `<div class='portfolio-wrapper'>
            <h2 id='title'>${dataPortFolio.title[0]}<h2><br>
            <img class='portfolio-image' src='http://i64.tinypic.com/snmd1t.png'>       
            <p id='desc'>${dataPortFolio.description[0]}</p>
            <span>${dataHome.technologies[1]}${dataHome.technologies[2]}${dataHome.technologies[0]}</span><br>
            <a id='links' href='${data.links.projectLinks[0]}'>${dataPortFolio.title[0]}</a></div>`;
    html2 = `<div class='portfolio-wrapper'>
            <h2 id='title'>${dataPortFolio.title[1]}<h2><br>
            <img class='portfolio-image' src='http://i66.tinypic.com/2wmghhh.png'>
            <p id='desc'>${dataPortFolio.description[1]}</p>
            <span>${dataHome.technologies[1]}${dataHome.technologies[2]}${dataHome.technologies[0]}${dataHome.technologies[3]}${dataHome.technologies[6]}</span><br>
            <a id='links' href='${data.links.projectLinks[1]}'>${dataPortFolio.title[1]}</a></div>`;

    html3 = `<div class='portfolio-wrapper'>
            <h2 id='title'>${dataPortFolio.title[2]}<h2><br>
            <img class='portfolio-image' src='http://i64.tinypic.com/2uy38tl.png'>
            <p id='desc'>${dataPortFolio.description[2]}</p>
            <span>${dataHome.technologies[1]}${dataHome.technologies[2]}${dataHome.technologies[0]}${dataHome.technologies[3]}${dataHome.technologies[7]}</span><br>
            <a id='links' href='${data.links.projectLinks[2]}'>${dataPortFolio.title[2]}</a></div>`;       
    return html1, html2, html3;

}

function init() {
    populatePage();
    instantiateIcons();
}

init()
var dataHome = data.home;
var dataBio = data.bio;
var dataPortFolio = data.portfolio;
var dataContact = data.contact;
var dataLinks = data.links;

var Content = function (id, title, desc, links) {
    this.id = id;
    this.title = title;
    this.desc = desc;
    this.links = links;
}

var home = new Content(dataHome.id, dataHome.title, dataHome.description, dataLinks);
var bio = new Content(dataBio.id, dataBio.title, dataBio.description, dataLinks);
var portfolio = new Content(dataPortFolio.id, dataPortFolio.title, dataPortFolio.description, dataLinks);
var contact = new Content(dataContact.id, dataContact.title, dataContact.description, dataLinks);
var el = [home, bio, contact, portfolio];


document.querySelector('*').addEventListener('click', function (event) {
    var id = event.target.id;
    switch (id) {
        case 'home-button':
            document.getElementById('bio', 'portfolio', 'contact').classList.remove('active');
            document.getElementById('home').classList.add('active');
            setTopPage(el[0]);
            break;
        case 'bio-button':
            document.getElementById('home', 'portfolio', 'contact').classList.remove('active');
            document.getElementById('bio').classList.add('active');
            setTopPage(el[1]);
            break;
        case 'portfolio-button':
            document.getElementById('home', 'bio', 'contact').classList.remove('active');
            document.getElementById('portfolio').classList.add('active');
            setTopPage(el[3]);
            break;
        case 'contact-button':
            document.getElementById('bio', 'portfolio', 'home').classList.remove('active');
            document.getElementById('contact').classList.add('active');
            setTopPage(el[2]);
            break;
        case 'logo':
            document.getElementById('top-page').innerHTML = 'Recently Clicked:';
    }
});

//Style layout of the page



function setTopPage(content) {
    var active = document.getElementsByClassName('active');
    if (active && content !== portfolio) {
        document.getElementById('top-page').innerHTML = `<h3>Recently Clicked:</h3><br><div id='${content.id}'>
    <h2>${content.title}<h2><br>
    <p>${content.desc}</p><br>
    <a href='${content.links.linkURL[0]}'>${content.links.linkName[0]}<br></a> | <a href='${content.links.linkURL[1]}'>${content.links.linkName[1]}<br></a>`
    } else {
        console.log('====Error====\nDOM did not update!')
    } if (active && content === portfolio) {
        document.getElementById('top-page').innerHTML += html1
        document.getElementById('top-page').innerHTML += html2;
        document.getElementById('top-page').innerHTML += html3;
    }
}

function populatePage() {
    el.forEach(contents => {
        if (contents !== portfolio) {
            document.getElementById(contents.id).innerHTML = `<div id='${contents.id}'>
        <h2>${contents.title}<h2><br>
        <p>${contents.desc}</p><br>
        <a href='${contents.links.linkURL[0]}'>${contents.links.linkName[0]}</a> :: <a href='${contents.links.linkURL[1]}'>${contents.links.linkName[1]}<br></a>`
        } else {
            createHTML();
            populatePortfolio();
        }
    })
}

function populatePortfolio() {
    document.getElementById('portfolio').innerHTML += html1
    document.getElementById('portfolio').innerHTML += html2;
    document.getElementById('portfolio').innerHTML += html3;
}

function createHTML() {
    html1 = `<div id='portfolio-wrapper'>
        <h2 id='title'>${dataPortFolio.title[0]}<h2><br>
            <img src='https://via.placeholder.com/100'>
            <p id='desc'>${dataPortFolio.description[0]}</p>
            <a id='links' href='${data.links.projectLinks[0]}'>${dataPortFolio.title[0]}</a></div>`;

    html2 = `<div id='portfolio-wrapper'>
            <h2 id='title'>${dataPortFolio.title[1]}<h2><br>
                <img src='https://via.placeholder.com/100'>
                <p id='desc'>${dataPortFolio.description[1]}</p>
                <a id='links' href='${data.links.projectLinks[1]}'>${dataPortFolio.title[1]}</a></div>`;

    html3 = `<div id='portfolio-wrapper'>
                <h2 id='title'>${dataPortFolio.title[2]}<h2><br>
                    <img src='https://via.placeholder.com/100'>
                    <p id='desc'>${dataPortFolio.description[2]}</p>
                    <a id='links' href='${data.links.projectLinks[2]}'>${dataPortFolio.title[2]}</a></div>`;

    return html1, html2, html3;

}

function init() {
    populatePage();
}

init()
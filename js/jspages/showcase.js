
document.getElementById('populate').empty;
//Card info

//Titles
var title = ["What's For Dinner", 'Christmas WishList', 'Abacus']
//Images
var image = ['./images/whatsfordinner.webm', './images/ChristmasWishList.webm', './images/Abacus Class Record.webm']
//Descriptions
var description = ['Recipe app able to quickly find recipes quickly for many different options',
    'Wishlist app that allows users to save and buy presents for Christmas',
    'Teacher grading and attendance app for grading assignments and keeping attendance']

function loadShowCase() {
    let showcaseBlock = `<header>
    <h2 id='showcaseHeader'>Showcase</h2>
    </header>
    </div><h3>To see more click projects please click the link to github. <a href='https://github.com/Kysper?tab=repositories'>Github</a></h3>
    <div id='container'>
    <div class='card'>
      
            <h3 class='name'>${title[0]}</h3>
            <video class='video' controls="controls">
            <source src="${image[0]}" type="video/webm" />
            </embed>
            </video>

            <h3>Description</h3>    
            <p class='description'>${description[0]}</p><br><br>
            <button class='github' onclick="window.open('https://github.com/Kysper/WhatsforDinner')">GitHub</button>
            <button class='website' onclick="window.open('https://kysper.github.io/WhatsforDinner/')">Website</button>
    </div>

    <div class='card'>
        
            <h3 class='name'>${title[1]}</h3>
            <video class='video' controls="controls">
                <source src="${image[1]}" type="video/webm" />
                </embed>
            </video>

            <h3>Description</h3>    
            <p class='description'>${description[1]}</p><br><br>
            <button class='github' onclick="window.open('https://github.com/Kysper/ChristmasListApp')">GitHub</button>
            <button class='website' onclick="window.open('https://tbl-christmas-wishlist.herokuapp.com/#/')">Website</button>
        
    </div>

    <div class='card'>
            <h3 class='name'>${title[2]}</h3>
            <video class='video' controls="controls">
                <source src="${image[2]}" type="video/webm" />
                </embed>
            </video> 
                
            <h3>Description</h3>    
                <p class='description'>${description[2]}</p><br><br>
                <button class='github' onclick="window.open('https://github.com/Kysper/Abacus-Class-Record')">GitHub</button>
                <button class='website' onclick="window.open('https://react-abacus.herokuapp.com/')">Website</button>`
    document.getElementById('populate').innerHTML = showcaseBlock
}







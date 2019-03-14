

    document.getElementById('populate').empty;
function loadBio(){
    let bioBlock = `<header>
    <h2>Bio</h2>
    </header>
    <p id='aboutme'>I grew up in a small town in West Virginia. I was fascinated by computers growing up, and I knew I
    wanted to work with technology at a young age. After graduating high school, I would repair, build,
    and maintain computers for friends and family. I met my wonderful wife soon after and moved to
    Missouri to be with her.
    I spent my recent years working for a mirror and glass company cutting and fabricating mirrors for
    customers. Everything changed when we welcomed our first child into the world in 2018. After our
    baby girl's birth, I wanted to teach her to follow her dreams fearlessly and persistently. In an
    attempt to show her this, I quit my job of 8 years and enrolled in KU Bootcamp in pursuit of my
    passions.</p>`
    document.getElementById('populate').innerHTML = bioBlock
}






$(document).ready(function () {
    document.querySelector('*').addEventListener('click', function (event) {
        var el = ['home','bio','portfolio','contact'];
        var id = event.target.id;
        switch (id) {
            case 'homeButton':
            document.getElementById('bio','portfolio','contact').classList.remove('active');
                document.getElementById('home').classList.add('active').add('container');
                flipContent(el[0]);
                break;
            case 'bioButton':
            document.getElementById('home','portfolio','contact').classList.remove('active');
                document.getElementById('bio').classList.add('active').add('container');
                flipContent(el[1]);
                break;
            case 'portfolioButton':
            document.getElementById('home','bio','contact').classList.remove('active');
                document.getElementById('portfolio').classList.add('active').add('container');
                flipContent(el[2]);
                break;
            case 'contactButton':
            document.getElementById('bio','portfolio','home').classList.remove('active');
                document.getElementById('contact').classList.add('active').add('container')
                flipContent(el[3]);
                break;
        }
    })

    function flipContent(location) {
        var isActive = document.getElementById(location).className = 'active';
        if (isActive) {
            document.getElementById(location).attr = 'id','topPage';
            document.getElementById(location).innerHTML = ` <div id='${location}' class='container active'>
            <header>${toUpperCase(location)}</header>
            <p>Welcome to the ${location} page!</p>
        </div>`
        } else if (!isActive) {
            document.getElementById(location).innerHTML = `No longer active! =(`
        } else {
            console.log('Error no current active classes')
        }
    }
});
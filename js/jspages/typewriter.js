//Variables for typewriter function
let i = 0;
txtArr = [' Hello, my name is Victor, I like Coding',
    'Hello, my name is Victor, I like Video Games',
    'Hello, my name is Victor, I like Movies',
    'Hello, my name is Victor, I like Technology',
    'Hello, my name is Victor, I like Learning',
    'Hello, my name is Victor, I Like Web Development',
    'Hello, my name is Victor, I love My Family',
    'Hello, my name is Victor, I like Hiking',
    'Hello, my name is Victor, I Like Biking']
    const speed = 50;
 var html = `<button id='getfact' onclick='newLine()'> Click for a fact!</button>`
 button = document.getElementById('populate').innerHTML = html;

let intro = txtArr[Math.floor(Math.random() * txtArr.length)]
const newLine = () => {
    let type = document.createElement('div')
    let html = document.getElementById('populate').appendChild(type)
    html.setAttribute('class', 'type')
    typing()
}

const typing = () => {
    
        setInterval(() => {
            document.querySelector('.type').innerHTML += intro.charAt(i)
            i++
    }, speed);
    setTimeout(() => {
        button.value = ''    
        document.querySelector('.type').textContent = `Press a button above to see more!`
    }, 3500);
}

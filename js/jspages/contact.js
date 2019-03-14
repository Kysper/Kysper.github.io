document.getElementById('populate').empty;
function loadContact(){
let contactInfo = '<h2>Contact<h2> <hr>'+
'<form method="POST" action="https://formspree.io/vadams.dev@gmail.com">'+
'Name:<br>'+
'<input class="inputWidth" type="text" name="name" placeholder=" Ex: John Doe"><br><br>'+
'Email:<br>'+
'<input  class="inputWidth" type="email" name="email" placeholder=" Ex: iamhuman@beepboop.com"><br><br>'+
'Message:<br>'+
'<textarea class="inputWidth" name="message" placeholder="Text Here"></textarea><br>'+
'<button id="submitBtn" type="submit" value="Send">Send</button>'+
'</form>';
document.getElementById('populate').innerHTML = contactInfo
}
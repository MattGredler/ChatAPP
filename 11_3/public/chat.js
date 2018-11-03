const socket = io();

const render = function(body){
    $('.feed').append(`<div class="innerFeed">
    <br>
    <h4 class="handle">
        I Am Devloper
        <span class="tweetMeta"> @iamdevloper Oct. 5th</span> <button class="deleteTweet" id= "deleteTweet" type="button">x</button>
    </h4>
    <br>
    <p>${body}

    </p>
    <br>
    <hr>
</div>`)
}

// const sendMessage = function(event){
//   event.preventDefault();
//   // get user input ....
//   const name = "Matt";
//   const message = $('#message').val();
//   console.log(message);
//   $.post()
//   // use emit to send this to server
//   socket.emit('new-message', {message: message});
// }
// listeing for things to come into the server
socket.on('emit-message', function(data){
  console.log(data);
});

const sendMessage = function(event){
    event.preventDefault();
    const inputMesage = $('#message').val();
    const inputName = $('#name').val();
const body = {
  sender: inputName,
  mesage: inputMesage
}
$.post('/api/mesage', body)
.then(function(messageResult){
    console.log(messageResult);
    // render(messageResult.tweet);
});
socket.emit('new-message', {message: body});
}
$('#send-msg').on('click' , sendMessage);

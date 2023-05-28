$(document).ready(
    $('#search_button').click(function (){
        window.location.href = 'views/menu2.html';
    }),

    $('.result_button').click(function () {
        $('#barra_result').val("")
    }),

    $('#gmail').click(function (){
        window.location.href = 'https://mail.google.com'
    }),
    $('#yt').click(function (){
        window.location.href = 'https://youtube.com'
    }),
    $('#gsa').click(function (){
        window.location.href ="https://classroom.google.com/u/0/h"
    }),
    $('#github').click(function (){
        window.location.href = "https://github.com"
    }),
    $('#trello').click(function (){
        window.location.href = "https://trello.com"
    }),
    $('#spotify').click(function (){
        window.location.href = "https://open.spotify.com"
    }),
    $('#wt').click(function (){
        window.location.href = "https://web.whatsapp.com"
    }),
    $('#ig').click(function (){
        window.location.href = "https://instagram.com"
    }),
    $('#facebook').click(function (){
        window.location.href = "https://facebook.com"
    }),
    $('#stof').click(function (){
        window.location.href = "https://pt.stackoverflow.com"
    }),
    $('#amazon').click(function (){
        window.location.href = "https://amazon.com"
    }),
    $('#logo').click(function (){
        window.location.href = '/index.html'
    })
);
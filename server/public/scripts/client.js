console.log('handshake');

$(document).ready(onReady);

function onReady(){
    $(`#equals`).on(`click`, postEquation);

}//end onReady

function postEquation(){
    let equationToPost = {
        num1: $(`#firstNumIn`).val(),
        operator: $(`#operation`).val(),
        num2: $(`#secondNumIn`).val(),
    }
    console.log(`equation:`, equationToPost);

    $.ajax({ 
        method:'POST',
        url:'/calculator',
        data: equationToPost
    }).then(function(response){
        //if successful update the DOM
        console.log('in calculator', response);
        getEquation();
    }).catch(function(err){
        console.log('ruh roh shaggy');
    })//end try-then-catch

}//end postEquation

function getEquation(){
    console.log(`in get function:`);

    $.ajax({ 
        method:'GET',
        url:'/calculator',

    }).then(function(response){
        console.log('back from server with total of:', response); 

    }).catch(function(err){
        console.log('wha wha');
    })//end try-then-catch

}//end getEquation






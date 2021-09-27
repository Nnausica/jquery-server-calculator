$(document).ready(onReady);

function onReady(){
    $(`#equals`).on(`click`, postEquation);
    // $(`#equals`).on(`click`, showThis)

}//end onReady

function getEquation(){
    console.log(`in get function:`);
    $.ajax({ 
        method:'GET',
        url:'/calculator',
    }).then(function(response){
        console.log('back from server with response of:', response);
        
        for(let i=0; i<response.length; i++){
        let el=$(`#outputDiv`)
        el.empty()
        el.append( `<li>${response[i].num1} ${response[i].operator} ${response[i].num2} = ${response[i].sum}</li>`)}
  
    }).catch(function(err){
        console.log('wha wha');
    })//end try-then-catch
}//end getEquation


function postEquation(){
    let equationToPost = {
        num1: $(`#firstNumIn`).val(),
        operator: $(`#operation`).val(),
        num2: $(`#secondNumIn`).val(),
        sum: "sumsum"
    }
    console.log(`equation:`, equationToPost);

    $.ajax({ 
        method:'POST',
        url:'/calculator',
        data: equationToPost
    }).then(function(response){
        //if successful update the DOM
        console.log('in array posted to server:', response);
        getEquation();
    }).catch(function(err){
        console.log('ruh roh shaggy');
    })//end try-then-catch
}//end postEquation


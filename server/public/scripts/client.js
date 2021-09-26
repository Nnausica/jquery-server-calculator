$(document).ready(onReady);

function onReady(){
    $(`#equals`).on(`click`, postEquation);
    // $(`#equals`).on(`click`, showThis)

}//end onReady

let objToDisplay={num1:"number", operator:"operator", num2:"number", sum:"somenumber"}

function getEquation(){
    console.log(`in get function:`);
    $.ajax({ 
        method:'GET',
        url:'/calculator',
    }).then(function(response){
        console.log('back from server with response of:', response);
        
       
        for(let i=0; i<response; i++){
            let objToDisplay={
                num1: response[i].num1,
                operator: response[i].operator,
                num2: response[i].num2,
                sum: response[i].length-1, 
            }
        }//end loop
        let el= $(`#outputDiv`)
        el.append(`<li>${objToDisplay.num1}${objToDisplay.operator}${objToDisplay.num2} = ${objToDisplay.sum}</li>`)

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

// function showThis(response){
//     console.log(response);
//     let objToDisplay={
//         num1: $(`#firstNumIn`).val(),
//         operator: $(`#operation`).val(),
//         num2: $(`#secondNumIn`).val(),
//         sum: response, 
//         }

//     let el= $(`#outputDiv`)
//     el.append(`<li>${objToDisplay.num1}${objToDisplay.operator}${objToDisplay.num2} = ${objToDisplay.sum}</li>`)

// }
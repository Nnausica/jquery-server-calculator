//requires
    const express = require( 'express' );
    const app = express();
    const bodyParser = require( 'body-parser' );

//uses
    app.use( express.static('server/public'));

//static server file
    app.use(bodyParser.urlencoded({ extended: true }));

//globals
    const port = 5000;
    let equation = []
    let returnArray = []
    let total=0

//spin up server
    app.listen( port, ()=>{
        console.log('server up on:', port);
    })

//routes

    app.get('/calculator', (req, res)=>{
        console.log('in app get');
        returnArray=[];
        doTheMath();
        res.send(returnArray) //apparently if you use send it has to be a string otherwise it thins its an error code.
    })

    app.post( '/calculator', ( req, res )=>{
        console.log( '/ POST got to server OK:', req.body );//recieving post from client
        equation.push( req.body );
        res.send()
    })

    //add data together

    function doTheMath(){
        for (let i=0; i< equation.length; i++){
            if(equation[i].operator === 'add' ){
                total= (Number(equation[i].num1) + Number(equation[i].num2))//total;
                returnArray.push({num1:equation[i].num1, operator:equation[i].operator, num2:equation[i].num2, sum:total})//push to array to return
            }//end sum

            else if(equation[i].operator === 'subtract'){
                total= (Number(equation[i].num1) - Number(equation[i].num2))
                returnArray.push({num1:equation[i].num1, operator:equation[i].operator, num2:equation[i].num2, sum:total})
            }// end subtract

            else if(equation[i].operator === 'multiply'){
                total= (Number(equation[i].num1) * Number(equation[i].num2))
                returnArray.push({num1:equation[i].num1, operator:equation[i].operator, num2:equation[i].num2, sum:total})
            }// end multiply

            else if(equation[i].operator === 'divide'){
                total= (Number(equation[i].num1) / Number(equation[i].num2))
                returnArray.push({num1:equation[i].num1, operator:equation[i].operator, num2:equation[i].num2, sum:total})
            }//end divide   
            }// end for loop
            
            console.log('return array looks like:', returnArray);//this is the problem, never empties out......
        } 

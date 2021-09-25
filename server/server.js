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

//spin up server
    app.listen( port, ()=>{
        console.log('server up on:', port);
    })

//routes

    app.get('/calculator', (req, res)=>{
        console.log('get route hit');
        res.send ( doTheMath(equation) ) //send this back to client JS- right now its sending the array... :(
    })

    function doTheMath(){
        for (let i=0; i< equation.length; i++){
            if(equation[i].operator === '+' ){
                total+= Number(equation[i].num1) + Number(equation[i].num2)
                console.log('sum total:', total);
            }
            else if(equation[i].operator === '-'){
                total-= Number(equation[i].num1) - Number(equation[i].num2)
                console.log('sub total:', total);
            }
            else if(equation[i].operator === '*'){
                total *= Number(equation[i].num1) * Number(equation[i].num2)
                console.log('multiply total:', total);
            }
            else if(equation[i].operator === '/'){
                total /= Number(equation[i].num1) / Number(equation[i].num2)
                console.log('divide total:', total);
            }
            }//end else if
        } 

    app.post( '/calculator', ( req, res )=>{
        console.log( '/ POST got to server OK:', req.body );//recieving post from client
        equation.push( req.body );
        res.send(doTheMath(equation))
    })

    //add data together




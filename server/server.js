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
        console.log('in app get');
        res.send(doTheMath().toString()) //send this back to client JS- right now its sending the array... :(
    })

    app.post( '/calculator', ( req, res )=>{
        console.log( '/ POST got to server OK:', req.body );//recieving post from client
        equation.push( req.body );
        res.send('post from server to client JS')
    })

    //add data together

    function doTheMath(){
        console.log('in do the math');
        let total=0
        for (let i=0; i< equation.length; i++){
            if(equation[i].operator === 'add' ){
                total+= Number(equation[i].num1) + Number(equation[i].num2)
                return total;
            }
            else if(equation[i].operator === 'subtract'){
                total-= Number(equation[i].num1) - Number(equation[i].num2)
                return total;
            }
            else if(equation[i].operator === 'multiply'){
                total *= Number(equation[i].num1) * Number(equation[i].num2)
                 return total;
            }
            else if(equation[i].operator === 'divide'){
                total /= Number(equation[i].num1) / Number(equation[i].num2)
                return total;
            }
            }//end else if
        } 
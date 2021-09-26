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
    let total=0

//spin up server
    app.listen( port, ()=>{
        console.log('server up on:', port);
    })

//routes

    app.get('/calculator', (req, res)=>{
        console.log('in app get');
        doTheMath();
        res.send(total.toString()) //apparently if you use send it has to be a string otherwise it thins its an error code.
    })

    app.post( '/calculator', ( req, res )=>{
        console.log( '/ POST got to server OK:', req.body );//recieving post from client
        equation.push( req.body );
        res.send('post from server to client JS')
    })

    //add data together

    function doTheMath(){
        console.log('in do the math');
    
        for (let i=0; i< equation.length; i++){
            if(equation[i].operator === 'add' ){
                total= (Number(equation[i].num1) + Number(equation[i].num2))
                // return total;
            }//end sum

            else if(equation[i].operator === 'subtract'){
                total= (Number(equation[i].num1) - Number(equation[i].num2))
                // return total;
            }// end subtract

            else if(equation[i].operator === 'multiply'){
                total= (Number(equation[i].num1) * Number(equation[i].num2))
                // return total;
            }// end multiply

            else if(equation[i].operator === 'divide'){
                total= (Number(equation[i].num1) / Number(equation[i].num2))
                // return total;
            }//end divide
            }//end else if
            console.log("sum", total);
        } 
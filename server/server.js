//requires
    let express = require( 'express' );
    let app = express();
    const bodyParser = require( 'body-parser' );

//uses
    app.use( express.static('server/public'));

//static server file
    app.use( bodyParser.urlencoded( { extended: true } ) );

//globals
    const port = 5000;
    let equation = []
    let total = 0

//spin up server
    app.listen( port, ()=>{
        console.log('server up on:', port);
    })

//routes
    app.get('/calculator', (req, res)=>{
        console.log('get route hit');
        res.send (total)     //send total back to client JS
    })

    app.post( '/calculator', ( req, res )=>{
        console.log( '/ POST hit:', req.body );
        equation.push( req.body );
        
        // function doTheMath(equation){
        // for (let i=0; i<equation.length; i++){
        //     console.log(equation[i].num1);
        //     console.log(equation[i].operator);
        //     console.log(equation[i].num2);
        //     }
        // }//end doTheMath
    })

    //add data together




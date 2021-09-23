//requires
    let express=require('express');
    let app = express();
    const bodyparser=require('bodyparser');

//uses
    app.use(express.static('server/public'));
    app.use(bodyparser.urlencoded, {extended: true});

//globals
    let port=5000;

//spin up server
    app.listen(port, ()=>{
        console.log('server up on:', port);
    })

//routes
    app.get('/', (req, res)=>{

    })
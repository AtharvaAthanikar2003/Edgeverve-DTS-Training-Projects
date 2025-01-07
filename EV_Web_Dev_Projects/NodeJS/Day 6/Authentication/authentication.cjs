const passport =  require('passport')
const LocalStrategy =  require('passport-local').LocalStrategy;

passport.use(new LocalStrategy((username,password,done)=>{

}));

function Authenticated(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    res.send(401).send('Unautorized');
}

app.get('/profile', isAuthenticated,(req,res)=>{
    res.send(req.user);
})
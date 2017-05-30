const Authentication = require('./controllers/authentication');
const passportService =  require('./services/passport');
const passport = require('passport');
const HandleBooks = require('./controllers/handleBooks');

//session false stops passport from creating a cookie
const requireAuth = passport.authenticate('jwt', {session:false});
const requireSignin = passport.authenticate('local' , {session: false});
module.exports = function(app) {
   
   //user API controls
    app.post('/signin', requireSignin,  Authentication.signin);
    app.post('/signup', Authentication.signup);
    app.post('/updateUser', requireAuth ,  Authentication.updateUser);
   
   //book API controls
    app.get('/getAllBooks', HandleBooks.getAllBooks);
    app.post('/addBook' ,requireAuth , HandleBooks.addBook);
    app.post('/deleteBook', requireAuth , HandleBooks.deleteBook);
    app.post('/requestTrade', requireAuth , HandleBooks.requestTrade);
    app.post('/acceptTrade',requireAuth , HandleBooks.acceptTrade);
    app.post('/deleteTrade', requireAuth , HandleBooks.deleteTrade);
    app.get('/booksOnTrade' , requireAuth , HandleBooks.getBooksOnTrade);
}


module.exports = function (req, res, next) {
    console.log(`Session : ${req.session}`);
//    console.log(`User ID : ${req.session.userId}`);   

    if (req.session && req.session.userId) {
        console.log(`Session exist ...`);
       if ( req.session.userId !== null) {
        console.log(`User id : ${req.session.userId}`);
           return next();
       }
    } else {
        console.log(`2222 Hasn't been logged yet`);
        return res.render('login', { title: 'Login' });
    }

  };
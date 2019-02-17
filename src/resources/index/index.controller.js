import { User } from '../user/user.model';
import { Product } from '../product/product.model';

const Messages = {
    messageSuccess: [],
    messageError: [],
}

setInterval( () => {
    Messages.messageSuccess = [],
    Messages.messageError = []
}, 1000);

const index = (req, res) => {
    Product.find({}, (error, product) => {
        if( req.originalUrl === '/') {
            if(req.cookies.userIsSaved){
                res.redirect(`/user/${req.cookies.User}`);
            }else {
                res.render('index', {
                    messageSuccess: Messages.messageSuccess,
                    messageError: Messages.messageError,
                    Product: product
                });
            }
        }

        User.find({userId: req.body.userId}, (err, data) => {
            if( req.originalUrl === `/user/${req.cookies.User}`) {
                res.render('index', {
                    messageSuccess: Messages.messageSuccess,
                    messageError: Messages.messageError,
                    Product: product,
                    isLoggedIn: 'true'
                });
            }
        });
    })
}

module.exports = { index, Messages }
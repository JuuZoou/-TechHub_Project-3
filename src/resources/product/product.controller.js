import { Product } from './product.model';
import { Messages } from '../index/index.controller';

const product = (req, res) => {
    if( req.originalUrl === '/product/add') {
        Product.find( {productOwner: req.body.productOwner}, (err, data) => {
            console.log(req.body.productSection);
            if( data.length === 0 ){
                const productDetails = {
                    productName: req.body.productName,
                    productPrice: req.body.productPrice,
                    productImage: req.file.filename,
                    productAmount: req.body.productAmount,
                    productSection: req.body.productSection,
                    productOwner: req.cookies.User
                }
                Product.create( productDetails )
                Messages.messageSuccess = ['პროდუქტი დამატებულია'];
                return res.redirect(`/user/${req.cookies.User}`);
            }
        })
    }
}

module.exports = { product }
const router = require("express").Router();
const { AddToCart, Product } = require("../../models");
const Auth = require("../../utils/auth");


router.get("/", Auth, async (req, res) => {
    try {
      const cartData = await AddToCart.findAll({
        where: {
          user_id: req.session.user_id,
        }
      });
      const cartItems = cartData.map((item) => item.get({ plain: true }));


      const len = cartItems.length;
      // console.log(len);
      // if(!len || len == 0){
      //   document.location.replace('/');
      //   return;
      // }
      const cost = function() {
          var loop = 0;
          var c = 0;
          while (loop < len){
            var x = parseFloat(cartItems[loop].product_price);
            c = c + x;
            loop++;
            console.log(x);
          }
          if(c){
            return c;
          }else{
            return "Add some items!";
          }
      }
      console.log("test: ", cost);
      res.render("cart", {
        cartItems,
        cost,
        logged_in:req.session.logged_in,
        home:true
      });
    } catch (err) {
      res.status(400).json(err);
      // document.location.replace('/');
    }
  });


  router.post('/:id', async (req, res) => {
    try {
      const item = await Product.findByPk(req.params.id);

      const cartData = await AddToCart.create({
        product_id: req.params.id,
        user_id: req.session.user_id,
        product_name: item.name,
        product_price: item.price
      });
      // sending a response
      res.status(200).json(cartData);
    } catch (err) {
      res.status(400).json(err);
    }
  });


  module.exports = router;
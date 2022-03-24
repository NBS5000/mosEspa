const router = require("express").Router();
const Auth = require("../utils/auth");
const { User, Product } = require("../models");
let home;
// home route needs to fetch the products and display them
// have access to login and a carts page and a profile/my listing page

router.get("/", async (req, res) => {
  try {
    const productData = await Product.findAll({
      include: [
        {
          model: User,
          // attributes: ["name"],
        },
      ],
    });
    const items = productData.map((items) => items.get({ plain: true }));


    res.render("homepage",{
      home:false, 
      logged_in:req.session.logged_in,
      items
    })

  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/profile", async (req, res) => {
  try {
    const productData = await Product.findAll({
      where:
        {
          user_id:req.session.user_id
        },
      
    });
    const product = productData.map((product) => product.get({ plain: true }));
    console.log(req.session)
    res.render("profile",{
      logged_in:req.session.logged_in,
      product,
      userName:req.session.userName,
      userEmail:req.session.userEmail,
      home:true
    })

  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// finding a product by its id

router.get("/product/:id", async (req, res) => {
  try {
    const productData = await Product.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });
    const product = productData.get({ plain: true });
    res.render("product", { product });
  } catch (err) {
    res.status(400).json(err);
  }
});

// accessing login page from home route
router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

module.exports = router;

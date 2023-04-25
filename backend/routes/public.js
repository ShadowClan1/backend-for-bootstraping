const stripe = require("../stripe/stripe");

const app = require("express").Router();

app.post("/buy", async (req, res) => {
  try {
    
    let {name, price, quantity} = req.body;
const  product = {name , price, quantity} ;


    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: product.name,
            },
            unit_amount: product.price * 100,
          },
          quantity: product.quantity,
        },
      ],
      mode: "payment",
      success_url: `http://192.168.3.136:3000/success`,
      cancel_url: "http://192.168.3.136:3000/failed",
    });
    

    res.status(200).json({ data: session, success: true });
  } catch (err) {
    res.status(500).json({ err: err.message, success: false });
  }
});

module.exports = app;

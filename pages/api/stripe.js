import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {

    const shopItems = req.body;
    console.log(shopItems);
    try {
      // Create Checkout Sessions from body params.
      const params = {
        submit_type:'pay',
        mode: 'payment',
        payment_method_types: ['card'],
        billing_address_collection: 'auto',
        shipping_options: [
            {
                shipping_rate: 'shr_1LZbm4SGcp73KePYkoNbzcgP'
            },
            {
                shipping_rate: 'shr_1LZbmxSGcp73KePYimXxQJO6'
            }
        ],
        line_items: shopItems.map((item) => {
            return {
                price_data:{
                    currency:'inr',
                    product_data:{
                        name: item.name,
                    },
                    unit_amount:item.price * 100,
                },
                adjustable_quantity: {
                    enabled:true,
                    minimum:1
                },
                quantity:item.quantity
            }

        }),
        success_url: `${req.headers.origin}/status/success`,
        cancel_url: `${req.headers.origin}/status/failure`,
      };

      const session = await stripe.checkout.sessions.create(params);
      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
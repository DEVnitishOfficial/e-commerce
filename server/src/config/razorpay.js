import Razorpay from 'razorpay'

 const apiKey = process.env.RAZORPAY_KEY_ID
 const apiSecret = process.env.RAZORPAY_SECRET

const razorpay = new Razorpay({
    key_id: apiKey,
    key_secret: apiSecret,
  });

export default razorpay
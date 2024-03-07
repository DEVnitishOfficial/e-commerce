import { createPaymentLink, updatePaymentInfo } from "../services/payment.service.js";


const paymentLinkCreate = async (req, res) => {
  try {
    const paymentLink = await createPaymentLink(req.params.id)
    return res.status(200).send(paymentLink)
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const paymentInfoUpdate = async(req,res) => {
    try{
        await updatePaymentInfo(req.query)
        return res.status(200).send({message:"payment information updated",status:true})

    }catch (error) {
        return res.status(500).send(error.message);
    }
}

export {
    paymentLinkCreate,
    paymentInfoUpdate
}
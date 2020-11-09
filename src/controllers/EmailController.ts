import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Customer from '../models/Customer';
import Order from '../models/Order';
import OrderDetail from '../models/OrderDetail';

import nodemailer from 'nodemailer';

import dotenv from 'dotenv';

dotenv.config();

const { SALES_DEPT_EMAIL } = process.env;
const { SALES_DEPT_PASSWORD } = process.env;


export default class EmailController {
    async mail(req: Request, res: Response){

        try{
            const { 
                id
            } = req.params;

            const orderRepository = getRepository(Order);
            const order = await orderRepository.findOne(id);

            const orderDetailRepository = getRepository(OrderDetail);
            const detailedOrder = await orderDetailRepository.find({
                where: {
                    order_id: id
                }
            });

           // delete detailedOrder[].created_at;
            

            

            if (order){
                const customerId = order.customer_id;

                const customerRepository = getRepository(Customer);

                const customer = await customerRepository.findOne(customerId);

                
                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                    user: SALES_DEPT_EMAIL,
                    pass: SALES_DEPT_PASSWORD,
                    },
                });

                const shoeCount = detailedOrder.length;
                let formattedOrder = '';
                
                for ( let i = 0; i < shoeCount; i++ ) {
                   formattedOrder = formattedOrder + 
                    `
                    <tr>
                        <td> 
                            ${ detailedOrder[i].name } 
                        </td> 
                        <td> 
                            ${detailedOrder[i].price} 
                        </td> 
                        <td>
                            ${detailedOrder[i].quantity} 
                        </td>
                    </tr>
                    `
                }


                if ( customer ) {
                    const customerMail = await transporter.sendMail({
                        from: SALES_DEPT_EMAIL,
                        to: customer.email,
                        subject: 'Detalhes do seu pedido :)',
                        html: `Olá ${customer.name},<br /> 
                        Aqui estão as informações sobre seu último pedido na loja online Sapathanos:
                        <br /><br />
                        <table style="border: 1px solid #333;">
                            <thead>
                                <th> Calçado </th>
                                <th> Valor </th>
                                <th> Quantidade </th>
                            </thead>
                            ${formattedOrder}
                        </table>
                        <br /><br />
                        Sua compra totalizou R$ ${order.total_amount}
                        <br /><br />
                        Esperamos que goste dos seus calçados e que possamos atendê-lo novamente no futuro :D
                        `, 
                    });
                
                    if ( customerMail ){
                        return res.status(201).json(customerMail);
                    }else{
                        return res.status(400).json({ error: "Houve um erro aqui :(" });
                    }
                }

                
            }

        } catch (err) {
            console.log(err);
            return res.status(400).json({ error: "Houve um erro aqui :(" });
        }

    }
} 
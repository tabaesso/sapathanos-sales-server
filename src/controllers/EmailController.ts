import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Customer from '../models/Customer';

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

            const customerRepository = getRepository(Customer);

            const customer = await customerRepository.findOne(id);

            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                user: SALES_DEPT_EMAIL,
                pass: SALES_DEPT_PASSWORD,
                },
            });

            if ( customer ) {
                const customerMail = await transporter.sendMail({
                    from: SALES_DEPT_EMAIL,
                    to: customer.email,
                    subject: 'Detalhes do seu pedido :)',
                    html: `Olá ${customer.name},<br /> 
                    Aqui estão as informações sobre seu último pedido na loja online Sapathanos:
                    <br /><br />
                    `, 
                });
            
                if ( customerMail ){
                    return res.status(201).json(customerMail);
                }else{
                    return res.status(400).json({ error: "Houve um erro aqui :(" });
                }
            }

            
        } catch (err) {
            console.log(err);
            return res.status(400).json({ error: "Houve um erro aqui :(" });
        }

    }
} 
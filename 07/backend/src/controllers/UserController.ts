import { Request, Response } from "express";
import EmailService from "../services/emailService";

const users = [{ name: "Iago", email: "iagocesar.nogueira@gmail.com" }];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();
    emailService.sendMail(
      {
        name: "Iago César",
        email: "iago.nogueira@sicoobcredivass",
      },
      {
        subject: "Cadastro no sistema",
        body: "Você foi cadastrado com sucesso!",
      }
    );
    res.json({ message: "Verifique sua caixa de entrada" });
  },
};

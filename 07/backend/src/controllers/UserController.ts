import { Request, Response } from "express";

const users = [{ name: "Iago", email: "iagocesar.nogueira@gmail.com" }];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },
};

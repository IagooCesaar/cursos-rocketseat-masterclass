// definição de objeto
interface IMailTo {
  name: string;
  email: string;
}

interface IMailMessage {
  subject: string;
  body: string;
  attachment?: string[]; //não obrigatório, array de string, poderia ser Array<strig>
}

class EmailService {
  sendMail(to: IMailTo, message: IMailMessage) {
    console.log(`Email enviado para ${to.name}: ${message.subject}...`);
  }
}

export default EmailService;

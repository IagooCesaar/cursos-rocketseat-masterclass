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

interface IMessageDTO {
  // Data Transfer Object
  to: IMailTo;
  message: IMailMessage;
}

class EmailService {
  sendMail({ to, message }: IMessageDTO) {
    console.log(`Email enviado para ${to.name}: ${message.subject}...`);
  }
}

export default EmailService;

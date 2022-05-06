import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "69446008147228",
        pass: "ddbaa497e333b4"
    }
})

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Widget <oi@fidget.com>',
            to: 'João Pedro Augusto Seco <dev.jpedro@gmail.com>',
            subject,
            html: body
        })
    }
}
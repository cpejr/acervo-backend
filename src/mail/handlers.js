/* eslint-disable import/prefer-default-export */
import { html } from 'code-tag';

// import Email from '../config/mail/nodemailer.js';
import sendEmail from '../config/mail/nodemailer.js';
import template from './template.js';
// import template from './template.js';

// eslint-disable-next-line import/prefer-default-export
// export function editMe(inputData) {
//   const body = html``;

//   const mailOptions = {
//     to: process.env.EMAIL_TO,
//     subject: '',
//     text: ``,
//     html: template(body),
//   };

//   return Email.sendEmail(mailOptions);
// }

export function confirmEmail({ token }) {
  const body = html`
    <h1>Verifique o seu email!</h1>
    <p>
      Estamos quase lá! Confirme o seu email para ter acesso à sua conta
      <a
        href="${`${
          process.env.FRONTEND_URL
        }/email-confirmado/${encodeURIComponent(token)}`}"
        >Confirmar email.</a
      >
    </p>
    <h3>Se você não solicitou esta confirmação, por favor ignore esse email</h3>
  `;

  const mailOptions = {
    to: process.env.EMAIL_TO,
    subject: '[Acervo Cultural] - Confirmação de email',
    text: `
    Verifique o seu email!
    Estamos quase lá! Confirme o seu email para ter acesso à sua conta Confirmar email.
    Se você não solicitou esta confirmação, por favor ignore esse email
    `,
    html: template(body),
  };
  return sendEmail(mailOptions);
}

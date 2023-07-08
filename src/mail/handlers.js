/* eslint-disable import/prefer-default-export */
import { html } from 'code-tag';

import sendEmail from '../config/mail/nodemailer.js';
import template from './template.js';

export function confirmEmail({ user, token }) {
  const body = html`
    <h1>Verifique o seu email!</h1>
    <p>
      Estamos quase lá! Confirme o seu email para ter acesso à sua conta
      <a
        href="${`${
          process.env.FRONTEND_URL
        }/email-confirmado/${encodeURIComponent(token)}`}"
        >Confirmar email</a
      >
    </p>
    <h3>Se você não solicitou esta confirmação, por favor ignore esse email</h3>
  `;

  const mailOptions = {
    to: user.email,
    subject: '[Acervo Cultural] - Confirmação de email',
    text: `
    Verifique o seu email!
    Estamos quase lá! Confirme o seu email para ter acesso à sua conta Confirmar email
    Se você não solicitou esta confirmação, por favor ignore esse email
    `,
    html: template(body),
  };
  return sendEmail(mailOptions);
}

import { html } from 'code-tag';

import Email from '../config/mail/nodemailer.js';
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

export function confirmEmail({ token, user }) {
  const body = html`
    <p>
      Confirme seu email clicando
      <a
        href="${`${
          process.env.FRONTEND_URL
        }/email-confirmado/${encodeURIComponent(token)}`}"
        >aqui</a
      >
    </p>
  `;

  const mailOptions = {
    to: process.env.EMAIL_TO,
    subject: '[Acervo Cultural] - Confirmação de email',
    text: `Confirme seu email clicando aqui`,
    html: template(body),
  };
  return sendEmail(mailOptions);
}

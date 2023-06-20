import { html } from 'code-tag';

const template = (body) => html`
  <!DOCTYPE html>
  <html
    lang="en"
    xmlns="http://www.w3.org/1999/xhtml"
    xmlns:o="urn:schemas-microsoft-com:office:office"
  >
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="x-apple-disable-message-reformatting" />
      <title></title>

      <style>
        table,
        td,
        div,
        h1,
        h2,
        h3,
        p {
          font-family: Cabin, sans-serif;
        }

        h1 {
          font-size: 32px;
          font-weight: 700;
          color: black;
          padding-top: 15px;
        }
        h2 {
          font-size: 24px;
          color: black;
        }
        h3 {
          font-size: 14px;
          font-weight: lighter;
          opacity: 0.5;
          color: black;
        }
        p {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: black;
          font-size: 24px;
          margin: 15px;
        }
        body {
          display: flex;
          flex-direction: column;
          align-items: top;
          width: 100%;
          height: auto;
          justify-content: center;
        }
        a {
          display: flex;
          border-radius: 15px;
          align-items: center;
          justify-content: center;
          max-width: 300px;
          width: 60%;
          height: 50px;
          background: #7f260f;
          color: white;
          font-weight: bold;
          margin-bottom: 15px;
          margin-top: 30px;
          cursor: pointer;
          text-decoration: none;
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2),
            0px 4px 8px rgba(0, 0, 0, 0.1);
        }
        a:hover {
          background: #511302;
          transition: 0.5s;
        }
        @media screen and (max-width: 280px){
          h1{
               font-size: 24px;
          }
          h2{
              font-size: 16px;
          }
          h3{
              font-size: 10px;
          }
          p{
               font-size: 16px;
          }
        }
      </style>
    </head>
    <body
      style=" margin-top: 100px ;justify-content: center;
    align-items: center;"
    >
      <table
        role="presentation"
        style="width:100%;max-width:600px;border-collapse:collapse;text-align:center"
      >
        <tr>
          <td
            style="padding:40px 0 30px 0;background:#FFDDAD; border-radius: 25px 25px 0px 0px;box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2), 0px 4px 8px rgba(0, 0, 0, 0.1);"
          >
            <img
              src="https://preview.redd.it/orlt4m2twf6b1.png?width=512&format=png&auto=webp&v=enabled&s=06e960a06f2e7b65e21320932d06ad36ed482868"
              alt=""
              width="28%"
              style="height:auto;display:block;margin: auto;"
            />
          </td>
        </tr>

        <tr
          style="height:100%;display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 0;
          background-color: white;
          border-radius: 0 0 25px 25px;
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2), 0px 4px 8px rgba(0, 0, 0, 0.1);"
        >
          <td style="padding:0;">
            <td style="padding:0;width:80%;display: flex;
            flex-direction: column;">
              ${body}
            </td>
          </td>
        </tr>
      </table>
    </body>
  </html>
`;

export default template;

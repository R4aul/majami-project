"use strick";
const express = require("express");
const cors = require("cors");
const brevo = require("@getbrevo/brevo");
const app = express();
const port = 3000;
const APY_KEY_BREVO = process.env.APY_KEY_BREVO;

app.use(express.json());
app.use(cors());

const ApiInstance = new brevo.TransactionalEmailsApi();

ApiInstance.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  APY_KEY_BREVO
);

app.post("/api/sendEmail", async (req, res) => {
  try {
    console.log(req.body)
    let sendSmtpEmail = new brevo.SendSmtpEmail();
    sendSmtpEmail.subject = "Hello brevo and majami";
    sendSmtpEmail.to = [{ email: "raul.damian220@gmail.com", name: "Raul Damian Rafael" }];

    sendSmtpEmail.htmlContent = `
  <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 20px;
          background-color: #f4f4f4;
        }
        .container {
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
          text-align: center;
          padding: 20px 0;
        }
        .header h1 {
          margin: 0;
          color: #333333;
        }
        .content {
          padding: 20px 0;
        }
        .content p {
          margin: 0 0 10px;
          color: #555555;
        }
        .footer {
          text-align: center;
          padding: 20px 0;
          color: #aaaaaa;
          font-size: 12px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Nuevo Mensaje de Contacto</h1>
        </div>
        <div class="content">
          <p><strong>Nombre:</strong> ${req.body.name}</p>
          <p><strong>Email:</strong> ${req.body.email}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${req.body.body}</p>
        </div>
        <div class="footer">
          <p>© 2024 Tu Empresa. Todos los derechos reservados.</p>
        </div>
      </div>
    </body>
  </html>
`;

    sendSmtpEmail.sender = {
      name: req.body.name,
      email: req.body.email,
    };

    const result = await ApiInstance.sendTransacEmail(sendSmtpEmail);
    console.log(result);
    
    res.status(200).send({ message: "Email envidado..." });
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

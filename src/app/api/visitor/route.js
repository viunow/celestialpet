// src/app/api/send-visitor-data/route.js
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    //console.log("=== INICIANDO ENVIO DE EMAIL ===");
    const { ip, location, browserInfo, timestamp } = await request.json();

    // Validação básica
    if (!ip) {
      return NextResponse.json(
        { message: "IP não fornecido" },
        { status: 400 }
      );
    }

    // Debug das variáveis de ambiente
    // //console.log("MAILTRAP_USER:", process.env.MAILTRAP_USER);
    // //console.log(
    //   "MAILTRAP_PASS:",
    //   process.env.MAILTRAP_PASS
    //     ? "***" + process.env.MAILTRAP_PASS.slice(-4)
    //     : "Não configurado"
    // );

    // Verificar se as variáveis estão definidas
    if (!process.env.MAILTRAP_USER || !process.env.MAILTRAP_PASS) {
      // console.error("Variáveis do Mailtrap não configuradas!");
      return NextResponse.json(
        {
          message: "Configuração de email incompleta",
          error: "Variáveis MAILTRAP_USER ou MAILTRAP_PASS não encontradas",
        },
        { status: 500 }
      );
    }

    // Configurando transporter com Mailtrap
    // //console.log("Configurando transporter com Mailtrap...");
    const transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS,
      },
      debug: true, // Habilita logs detalhados
      logger: true, // Log informações no console
    });

    // Verificar a conexão
    // //console.log("Verificando conexão...");
    await transporter.verify();
    // //console.log("Conexão verificada com sucesso!");

    // Formatação dos dados para o email
    const emailBody = `
      <html>
        <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8B4513;">Novo Visitante</h2>
          <p><strong>⏰ Timestamp:</strong> ${new Date(
            timestamp
          ).toLocaleString("pt-BR")}</p>
          <p><strong>🌐 IP:</strong> ${ip}</p>
          
          ${
            location
              ? `
            <h3 style="color: #8B4513;">📍 Localização:</h3>
            <ul>
              <li><strong>País:</strong> ${location.country || "N/A"}</li>
              <li><strong>Região:</strong> ${location.region || "N/A"}</li>
              <li><strong>Cidade:</strong> ${location.city || "N/A"}</li>
              <li><strong>CEP:</strong> ${location.zip || "N/A"}</li>
              <li><strong>Fuso Horário:</strong> ${
                location.timezone || "N/A"
              }</li>
              <li><strong>ISP:</strong> ${location.isp || "N/A"}</li>
            </ul>
          `
              : "<p>Dados de localização não disponíveis (localhost)</p>"
          }
          
          ${
            browserInfo
              ? `
            <h3 style="color: #8B4513;">💻 Informações do Navegador:</h3>
            <ul>
              <li><strong>User Agent:</strong> ${
                browserInfo.userAgent || "N/A"
              }</li>
              <li><strong>Idioma:</strong> ${browserInfo.language || "N/A"}</li>
              <li><strong>Tela:</strong> ${browserInfo.screen || "N/A"}</li>
              <li><strong>Referrer:</strong> ${
                browserInfo.referrer || "Direct"
              }</li>
              <li><strong>Plataforma:</strong> ${
                browserInfo.platform || "N/A"
              }</li>
            </ul>
          `
              : ""
          }
          
          <hr style="margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">
            Este email foi gerado automaticamente pelo sistema de monitoramento do site Celestial Pet.
          </p>
        </body>
      </html>
    `;

    // Enviar email
    //console.log("Enviando email...");
    const info = await transporter.sendMail({
      from: "Test <test@example.com>",
      to: "test@example.com",
      subject: `Novo Visitante - ${
        location?.city || "Localização desconhecida"
      }`,
      html: emailBody,
    });

    //console.log("Email enviado com sucesso:", info.messageId);
    return NextResponse.json({
      message: "Dados enviados com sucesso",
      messageId: info.messageId,
    });
  } catch (error) {
    //console.error("Erro detalhado:", error);
    return NextResponse.json(
      {
        message: "Erro interno do servidor",
        error: error.message,
        code: error.code || "UNKNOWN",
      },
      { status: 500 }
    );
  }
}

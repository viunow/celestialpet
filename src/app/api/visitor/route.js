// src/app/api/send-visitor-data/route.js
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const {
      ip,
      location,
      browserInfo,
      sessionId,
      visitorId,
      visitCount,
      isReturningVisitor,
      ipDetectionDebug,
      timestamp,
      pageUrl,
      pageTitle,
    } = await request.json();

    const formattedDate = new Date(timestamp).toLocaleDateString("pt-BR", {
      timeZone: "America/Sao_Paulo",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    // Validação básica
    if (!ip) {
      return NextResponse.json(
        { message: "IP não fornecido" },
        { status: 400 }
      );
    }

    if (!process.env.MAILTRAP_USER || !process.env.MAILTRAP_PASS) {
      return NextResponse.json(
        {
          message: "Configuração de email incompleta",
          error: "Variáveis MAILTRAP_USER ou MAILTRAP_PASS não encontradas",
        },
        { status: 500 }
      );
    }

    // Configurando transporter com Mailtrap
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
    await transporter.verify();

    // Formatação dos dados para o email
    const emailBody = `
      <html>
        <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8B4513;">Novo Visitante${
            isReturningVisitor ? " (Retornando)" : " (Primeiro Acesso)"
          }</h2>
          
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
            <h3 style="color: #8B4513; margin-top: 0;">🔍 Informações da Sessão</h3>
            <p><strong>⏰ Timestamp:</strong> ${formattedDate}</p>
            <p><strong>🌐 IP:</strong> ${ip}</p>
            <p><strong>🆔 ID da Sessão:</strong> ${sessionId}</p>
            <p><strong>👤 ID do Visitante:</strong> ${visitorId}</p>
            <p><strong>📊 Número da Visita:</strong> ${visitCount}</p>
            <p><strong>📄 Página:</strong> ${pageTitle || "N/A"}</p>
            <p><strong>🔗 URL:</strong> ${pageUrl || "N/A"}</p>
          </div>
          
          ${
            ipDetectionDebug
              ? `
            <div style="background-color: #fff3cd; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
              <h3 style="color: #856404; margin-top: 0;">🔧 Debug IP Detection</h3>
              <pre style="background-color: #fff; padding: 10px; border-radius: 3px; font-size: 12px; overflow-x: auto;">${JSON.stringify(
                ipDetectionDebug,
                null,
                2
              )}</pre>
            </div>
            `
              : ""
          }
          
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
              <li><strong>Organização:</strong> ${
                location.organization || "N/A"
              }</li>
              <li><strong>Proxy/VPN:</strong> ${
                location.isProxy ? "Sim" : "Não"
              }</li>
              <li><strong>Mobile:</strong> ${
                location.isMobile ? "Sim" : "Não"
              }</li>
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
              <li><strong>Fuso Horário Local:</strong> ${
                browserInfo.timezone || "N/A"
              }</li>
              <li><strong>Núcleos do Processador:</strong> ${
                browserInfo.hardwareConcurrency || "N/A"
              }</li>
              <li><strong>Cookies Habilitados:</strong> ${
                browserInfo.cookieEnabled ? "Sim" : "Não"
              }</li>
              <li><strong>Do Not Track:</strong> ${
                browserInfo.doNotTrack || "N/A"
              }</li>
            </ul>
          `
              : ""
          }
        </body>
      </html>
    `;

    // Definir assunto do email
    const subject = isReturningVisitor
      ? `🔄 Visitante Retornando - ${
          location?.city || ip
        } (${visitCount}ª visita)`
      : `🆕 Novo Visitante - ${location?.city || ip}`;

    // Enviar email
    const info = await transporter.sendMail({
      from: "CelestialPet Tracking <test@example.com>",
      to: "test@example.com",
      subject: subject,
      html: emailBody,
    });

    return NextResponse.json({
      message: "Dados enviados com sucesso",
      messageId: info.messageId,
      sessionId,
    });
  } catch (error) {
    // console.error("Erro detalhado:", error);
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

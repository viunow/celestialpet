"use client";

import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import avatar from "../../../public/logo2-com-fundo.png";

export default function WhatsappFloating() {
  return (
    <FloatingWhatsApp
      phoneNumber="5554996925823"
      accountName="Celestial Pet"
      avatar={avatar.src}
      statusMessage="Online"
      chatMessage="Olá, como podemos ajudar?"
    />
  );
}

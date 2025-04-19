import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function ButtonContact() {
  const whatsappText = "Olá, gostaria de mais informações sobre os serviços.";
  const whatsappLink = `https://wa.me/5554996925823?text=${encodeURIComponent(
    whatsappText
  )}`;

  return (
    <div className="w-fit">
      <Link href={whatsappLink} target="_blank" className="w-fit">
        <Button className="bg-celestial-blue text-celestial-brown hover:bg-white drop-shadow-lg flex items-center justify-center">
          <MessageCircle className="mr-1.5 text-celestial-brown" size={20} />
          Fale conosco
        </Button>
      </Link>
    </div>
  );
}

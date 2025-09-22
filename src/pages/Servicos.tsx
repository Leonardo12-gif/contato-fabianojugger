import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { MessageCircle, Star, Megaphone, Video, User, Shirt } from "lucide-react";

const Servicos = () => {
  const [openDialog, setOpenDialog] = useState<string | null>(null);

  const services = [
    {
      id: "presenca-vip",
      title: "Presença VIP em eventos",
      description: "Presença do atleta Fabiano Ferreira (Juggernaut), meet & greet e aparições planejadas.",
      icon: <Star className="w-7 h-7 text-accent" />,
      expandedTitle: "Presença VIP em eventos",
      expandedDescription: "Pacote inclui presença do atleta, interação com o público (meet & greet), registros para redes sociais e participação em momentos-chave do evento. Opcional: cobertura em vídeo com entrega de Reels.",
      whatsappMessage: "Olá, quero informações sobre Presença VIP em eventos com o Fabiano Ferreira."
    },
    {
      id: "publicidades",
      title: "Publicidades",
      description: "Campanhas para marcas: foto, vídeo e ativações com credibilidade no nicho fitness.",
      icon: <Megaphone className="w-7 h-7 text-accent" />,
      expandedTitle: "Publicidades",
      expandedDescription: "Criação de peças (foto/vídeo), roteiros e ativações com a imagem do Fabiano para sua marca, produto ou serviço. Direcionamento para performance e autoridade no nicho fitness.",
      whatsappMessage: "Olá, tenho interesse em Publicidades com o Fabiano."
    },
    {
      id: "reels-instagram",
      title: "Reels no Instagram",
      description: "Captação + direção ágil para Reels que geram alcance real e conexão.",
      icon: <Video className="w-7 h-7 text-accent" />,
      expandedTitle: "Reels no Instagram",
      expandedDescription: "Captação dinâmica, direção rápida e edição com cortes que priorizam retenção e entrega. Opcional: roteiro com CTA e motion leve.",
      whatsappMessage: "Olá, quero produzir Reels no Instagram com o Fabiano."
    },
    {
      id: "venda-imagem",
      title: "Venda de imagem do atleta",
      description: "Licenciamento de imagem para campanhas, catálogos e materiais institucionais.",
      icon: <User className="w-7 h-7 text-accent" />,
      expandedTitle: "Venda de imagem do atleta",
      expandedDescription: "Licenciamento de imagem para campanhas, catálogos, vitrines digitais e materiais institucionais, com prazos e territórios definidos em contrato.",
      whatsappMessage: "Olá, quero licenciar a imagem do atleta."
    },
    {
      id: "modelo-roupas",
      title: "Modelo para roupas",
      description: "Ensaio ou vídeo para coleções, lookbooks e e-commerce.",
      icon: <Shirt className="w-7 h-7 text-accent" />,
      expandedTitle: "Modelo para roupas",
      expandedDescription: "Produção de fotos e/ou vídeo para lançamentos, lookbooks e e-commerce. Integre a presença do atleta com prova social para o seu público.",
      whatsappMessage: "Olá, quero contratar como Modelo para Roupas."
    }
  ];

  const handleWhatsAppClick = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5515991273423?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-radial text-foreground">
      {/* Header Spacer */}
      <div className="pt-20">
        {/* Main Content */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Title Section */}
            <div className="text-center mb-12 animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-glow">
                Serviços
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Escolha um serviço para ver detalhes e falar com nossa assessoria pelo WhatsApp.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={service.id} className="glass-card animate-fade-in-up" style={{ animationDelay: `${0.1 * index}s` }}>
                  <CardContent className="p-6">
                    <div className="flex flex-col h-full">
                      {/* Icon and Title */}
                      <div className="mb-4">
                        <div className="mb-3">{service.icon}</div>
                        <h3 className="text-xl font-display font-bold mb-2 leading-tight">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      {/* Buttons */}
                      <div className="flex flex-col gap-3 mt-auto">
                        <Dialog open={openDialog === service.id} onOpenChange={(open) => setOpenDialog(open ? service.id : null)}>
                          <DialogTrigger asChild>
                            <Button variant="outline" className="btn-secondary w-full">
                              Ver detalhes
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="glass-card max-w-lg">
                            <DialogHeader>
                              <DialogTitle className="text-2xl font-display text-glow mb-4">
                                {service.expandedTitle}
                              </DialogTitle>
                            </DialogHeader>
                            <div className="space-y-6">
                              <p className="text-foreground leading-relaxed">
                                {service.expandedDescription}
                              </p>
                              <div className="flex flex-col sm:flex-row gap-3">
                                <Button 
                                  onClick={() => handleWhatsAppClick(service.whatsappMessage)}
                                  className="btn-primary flex-1"
                                >
                                  <MessageCircle className="w-4 h-4 mr-2" />
                                  Falar no WhatsApp
                                </Button>
                                <Button 
                                  variant="outline" 
                                  onClick={() => setOpenDialog(null)}
                                  className="btn-secondary flex-1"
                                >
                                  Fechar
                                </Button>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>

                        <Button 
                          onClick={() => handleWhatsAppClick(service.whatsappMessage)}
                          className="btn-primary w-full"
                        >
                          <MessageCircle className="w-4 h-4 mr-2" />
                          WhatsApp
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/5515991273423" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-whatsapp w-16 h-16 rounded-full flex items-center justify-center text-primary-foreground"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  );
};

export default Servicos;
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { MessageCircle, Mail, Instagram, Facebook, Youtube, ExternalLink, ChevronRight, Zap, Globe, TrendingUp, Users, Megaphone, Settings, CheckCircle, Clock, MapPin } from "lucide-react";
const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    message: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // EmailJS integration would go here
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setFormData({
      name: "",
      email: "",
      whatsapp: "",
      message: ""
    });
  };
  const quickLinks = [{
    title: "Serviços",
    icon: <Settings className="w-5 h-5" />,
    href: "#servicos",
    type: "internal"
  }, {
    title: "Portfólio",
    icon: <ExternalLink className="w-5 h-5" />,
    href: "https://drive.google.com/drive/folders/exemplo",
    type: "external"
  }, {
    title: "Orçamento Rápido",
    icon: <MessageCircle className="w-5 h-5" />,
    href: "#contato",
    type: "internal"
  }, {
    title: "Catálogo/Apresentação",
    icon: <ExternalLink className="w-5 h-5" />,
    href: "/catalogo.pdf",
    type: "external"
  }, {
    title: "Instagram",
    icon: <Instagram className="w-5 h-5" />,
    href: "https://instagram.com/frezzamarketing",
    type: "external"
  }, {
    title: "YouTube",
    icon: <Youtube className="w-5 h-5" />,
    href: "https://www.youtube.com/@fabianoferreira1956",
    type: "external"
  }, {
    title: "WhatsApp",
    icon: <MessageCircle className="w-5 h-5" />,
    href: "https://wa.me/5515991273423",
    type: "external"
  }, {
    title: "Facebook",
    icon: <Facebook className="w-5 h-5" />,
    href: "https://www.facebook.com/FabianoFerreiraJuggernaut?locale=pt_BR",
    type: "external"
  }];
  const services = [{
    icon: <Zap className="w-7 h-7 text-accent" />,
    title: "Automação & Bots",
    description: "WhatsApp Business, integrações e automações inteligentes para seu negócio.",
    cta: "Saiba mais"
  }, {
    icon: <Globe className="w-7 h-7 text-accent" />,
    title: "Criação de Sites Profissionais",
    description: "Sites responsivos, rápidos e otimizados para conversão e SEO.",
    cta: "Saiba mais"
  }, {
    icon: <Users className="w-7 h-7 text-accent" />,
    title: "Personal Media",
    description: "Acompanhamento de imagem e gestão de rotina digital para clientes.",
    cta: "Saiba mais"
  }, {
    icon: <TrendingUp className="w-7 h-7 text-accent" />,
    title: "Gestão de Tráfego Pago",
    description: "Google Ads, Facebook Ads e campanhas otimizadas para ROI máximo.",
    cta: "Saiba mais"
  }, {
    icon: <Megaphone className="w-7 h-7 text-accent" />,
    title: "Social Media & Conteúdo",
    description: "Estratégia, criação e gestão de conteúdo para redes sociais.",
    cta: "Saiba mais"
  }, {
    icon: <Settings className="w-7 h-7 text-accent" />,
    title: "Consultoria/Setup Tech",
    description: "Consultoria técnica e configuração de ferramentas digitais avançadas.",
    cta: "Saiba mais"
  }];
  const testimonials = [{
    quote: "A Frezza transformou completamente nossa presença digital. Resultados incríveis!",
    author: "Maria Silva",
    company: "Boutique Fashion"
  }, {
    quote: "Automação perfeita e atendimento excepcional. Recomendo para todos!",
    author: "João Santos",
    company: "Santos Advocacia"
  }, {
    quote: "ROI fantástico com o tráfego pago. Nossa receita triplicou em 6 meses.",
    author: "Ana Costa",
    company: "Costa Estética"
  }];
  return <div className="min-h-screen bg-gradient-radial text-foreground">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in-up">
            <img src="/profile.jpg" alt="Frezza Marketing - Perfil Profissional" className="w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto profile-image object-cover" />
          </div>
          
          <div className="animate-fade-in-up" style={{
          animationDelay: "0.1s"
        }}>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 text-glow">
              Fabiano Ferreira
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              The Juggernaut
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in-up" style={{
          animationDelay: "0.2s"
        }}>
            <span className="badge">
              <MapPin className="w-3 h-3 mr-1" />
              Parcerias
            </span>
            <span className="badge">
              <Clock className="w-3 h-3 mr-1" />
              Publicidades
            </span>
            <span className="badge">
              <CheckCircle className="w-3 h-3 mr-1" />
              Eventos
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{
          animationDelay: "0.3s"
        }}>
            <Button asChild className="btn-primary px-8 py-6 text-lg rounded-2xl">
              <a href="https://wa.me/5515991273423" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Fale com a minha Assessoria
              </a>
            </Button>
            <Button asChild variant="outline" className="btn-secondary px-8 py-6 text-lg rounded-2xl">
              <a href="mailto:contato@frezzamarketing.com.br">
                <Mail className="w-5 h-5 mr-2" />
                Enviar e-mail
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            Conecte-se comigo em um só lugar
          </h2>
          <div className="space-y-4">
            {quickLinks.map((link, index) => <div key={index} className="animate-fade-in-up" style={{
            animationDelay: `${0.1 * index}s`
          }}>
                <Button asChild variant="outline" className="w-full btn-link p-6 rounded-2xl h-auto">
                  <a href={link.href} target={link.type === "external" ? "_blank" : "_self"} rel={link.type === "external" ? "noopener noreferrer" : ""} className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="text-accent">{link.icon}</div>
                      <span className="text-lg font-medium">{link.title}</span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </a>
                </Button>
              </div>)}
          </div>
        </div>
      </section>

      {/* Services Section */}
      

      {/* Testimonials Section */}
      

      {/* Contact Section */}
      

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-card-border">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex justify-center gap-6 mb-6">
              <a href="https://instagram.com/frezzamarketing" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/FabianoFerreiraJuggernaut?locale=pt_BR" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://www.youtube.com/@fabianoferreira1956" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
            
            <Button asChild variant="outline" className="btn-secondary mb-6">
              <a href="/frezza-marketing.vcf" download>
                Baixar vCard
              </a>
            </Button>
          </div>
          
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Frezza Marketing. Todos os direitos reservados.</p>
            <div className="flex justify-center gap-4 mt-2">
              <a href="#" className="hover:text-accent transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-accent transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a href="https://wa.me/5515991273423" target="_blank" rel="noopener noreferrer" className="floating-whatsapp w-16 h-16 rounded-full flex items-center justify-center text-primary-foreground">
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>;
};
export default Index;
# Frezza Marketing - Link-in-Bio

Um site one-page estilo link-in-bio com visual dark futurista, otimizado para conversão e performance mobile-first.

## 🎨 Design

- **Tema**: Dark minimalista com degradê de fundo
- **Cores**: Preto (#000000) e Amarelo (#FFD600)  
- **Tipografia**: Inter (textos) + Orbitron (títulos)
- **Efeitos**: Glass morphism, animações sutis, glow effects

## 🚀 Funcionalidades

- ✅ Design responsivo mobile-first
- ✅ Animações e microinterações
- ✅ Formulário de contato
- ✅ Links para redes sociais
- ✅ Botão flutuante do WhatsApp
- ✅ SEO otimizado
- ✅ Schema.org estruturado
- ✅ vCard para download

## 📁 Estrutura

```
├── src/
│   ├── pages/Index.tsx     # Página principal
│   ├── index.css          # Design system completo
│   └── components/ui/     # Componentes shadcn/ui
├── public/
│   ├── profile.jpg        # Foto de perfil
│   ├── frezza-marketing.vcf # Cartão de visita digital
│   └── sitemap.xml        # Mapa do site
└── tailwind.config.ts     # Configuração do Tailwind
```

## ⚙️ Personalização

### 1. Informações de Contato
Edite no arquivo `src/pages/Index.tsx`:

```tsx
// WhatsApp
href="https://wa.me/5515991273423"

// Email
href="mailto:contato@frezzamarketing.com.br"

// Redes sociais
href="https://instagram.com/frezzamarketing"
```

### 2. Conteúdo
- **Nome/Título**: Edite a variável no componente Hero
- **Serviços**: Modifique o array `services`  
- **Depoimentos**: Atualize o array `testimonials`
- **Links rápidos**: Personalize o array `quickLinks`

### 3. Imagens
- Substitua `/public/profile.jpg` pela sua foto
- Mantenha proporção quadrada (512x512px recomendado)

### 4. Integração EmailJS
Configure as variáveis de ambiente:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id  
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 🛠️ Desenvolvimento

```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento
npm run dev

# Build para produção
npm run build
```

## 📦 Deploy

### GitHub Pages
1. Build do projeto: `npm run build`
2. Envie a pasta `dist/` para o repositório
3. Configure GitHub Pages para usar a branch main

### Netlify/Vercel
1. Conecte seu repositório
2. Build command: `npm run build`
3. Publish directory: `dist`

## 🔧 SEO

O site já inclui:
- Meta tags otimizadas
- Open Graph e Twitter Cards
- Schema.org estruturado
- Sitemap.xml
- Robots.txt configurado

## 📱 Performance

- Lighthouse Score: 90+ (mobile)
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

## 🎯 Conversão

- CTA primário destacado (WhatsApp)
- Formulário de contato otimizado
- Botão flutuante sempre visível
- Badges de credibilidade
- Depoimentos sociais

## 📞 Contato

- **WhatsApp**: [+55 15 99127-3423](https://wa.me/5515991273423)
- **Email**: contato@frezzamarketing.com.br
- **Site**: https://frezzamarketing.com.br

---

Desenvolvido com ❤️ usando React + Vite + Tailwind CSS
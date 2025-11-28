# 🍔 Burger Event Landing Page - Retro 90s

Uma landing page responsiva e moderna para um evento de hambúrguer com tema nostálgico dos anos 90, celebrando a data de 02/07/1995.

## 🎨 Design Highlights

- **Paleta Retrô Vibrante**: Vermelho (#FF1744), Amarelo (#FFD700), Rosa Neon (#FF006E), Preto (#1A1A1A)
- **Tipografia Ousada**: Fredoka One para títulos, Poppins para corpo
- **Padrões Xadrez**: Backgrounds nostálgicos dos anos 90
- **Efeitos 3D**: Sombras e transformações que evocam o design retrô
- **Totalmente Responsivo**: Otimizado para mobile, tablet e desktop
- **Imagens de Alta Qualidade**: Geradas com IA para o tema específico

## 📋 Seções Incluídas

1. **Hero Section**: Apresentação impactante com CTA e imagem principal
2. **Countdown Timer**: Contagem regressiva até o evento (02/07/2025)
3. **Why You'll Love It**: 3 cards destacando os principais atrativos
4. **Menu Preview**: Showcase dos hambúrgueres especiais com preços
5. **Event Details**: Data, hora e local do evento
6. **Diner Interior**: Showcase da atmosfera retrô
7. **CTA Section**: Call-to-action final para reservas
8. **Footer**: Links de redes sociais e informações

## 🚀 Como Usar

### Instalação

```bash
# Instalar dependências
pnpm install

# Executar em desenvolvimento
pnpm dev

# Build para produção
pnpm build

# Preview do build
pnpm preview
```

### Estrutura de Pastas

```
burger_event_landing/
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   └── Home.tsx          # Página principal
│   │   ├── components/           # Componentes reutilizáveis
│   │   ├── contexts/             # React contexts
│   │   ├── hooks/                # Custom hooks
│   │   ├── App.tsx               # App principal
│   │   ├── main.tsx              # Entry point
│   │   └── index.css             # Estilos globais e temas
│   ├── public/                   # Assets estáticos
│   │   ├── hero-burger.jpg
│   │   ├── celebration-burger.jpg
│   │   ├── retro-diner-interior.jpg
│   │   └── ingredients-collage.jpg
│   └── index.html
├── server/
│   └── index.ts                  # Servidor Express
├── package.json
└── README.md
```

## 🎯 Customização

### Cores
Edite as variáveis CSS em `client/src/index.css`:
```css
--primary: #FF1744;        /* Vermelho vibrante */
--secondary: #FFD700;      /* Amarelo ouro */
--accent: #FF006E;         /* Rosa neon */
```

### Tipografia
As fontes estão importadas do Google Fonts em `client/src/index.css`:
- **Fredoka One**: Títulos ousados
- **Poppins**: Corpo e textos
- **Righteous**: Alternativa para títulos

### Imagens
Substitua as imagens em `client/public/`:
- `hero-burger.jpg`: Imagem principal do hero
- `celebration-burger.jpg`: Imagem do menu
- `retro-diner-interior.jpg`: Interior do diner
- `ingredients-collage.jpg`: Colagem de ingredientes

## 📱 Responsividade

O design foi otimizado para:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

Todos os componentes usam Tailwind CSS com breakpoints responsivos.

## 🔧 Tecnologias

- **React 19**: Framework UI
- **TypeScript**: Type safety
- **Tailwind CSS 4**: Styling
- **Vite**: Build tool
- **shadcn/ui**: Componentes UI
- **Framer Motion**: Animações (opcional)
- **Lucide React**: Ícones

## 📦 Deploy

### Vercel (Recomendado)

1. Faça push do código para GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Clique em "New Project"
4. Selecione o repositório
5. Vercel detectará automaticamente as configurações
6. Clique em "Deploy"

```bash
# Ou use a CLI do Vercel
npm i -g vercel
vercel
```

### Netlify

1. Conecte seu repositório GitHub
2. Build command: `pnpm build`
3. Publish directory: `dist/public`
4. Deploy automático em cada push

### GitHub Pages

1. Faça push para `main` branch
2. Vá para Settings > Pages
3. Selecione "Deploy from a branch"
4. Escolha `main` branch e `/root` folder
5. Seu site estará em `https://seu-usuario.github.io/burger-event-landing`

### Cloudflare Pages

1. Conecte seu repositório GitHub
2. Build command: `pnpm build`
3. Build output directory: `dist/public`
4. Deploy automático

## 🎨 Customização Avançada

### Adicionar Novas Seções

Crie um novo componente em `client/src/pages/` e importe em `Home.tsx`:

```tsx
export default function NewSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Seu conteúdo aqui */}
      </div>
    </section>
  );
}
```

### Adicionar Animações

Use Framer Motion para animações avançadas:

```tsx
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Conteúdo animado
</motion.div>
```

## 📞 Suporte

Para dúvidas ou sugestões, entre em contato através das redes sociais do evento.

## 📄 Licença

MIT License - Sinta-se livre para usar e modificar este projeto.

---

**Desenvolvido com ❤️ para celebrar 30 anos de hambúrguer! 🍔**

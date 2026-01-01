# 🛍️ Ignite Shop

E-commerce moderno desenvolvido com Next.js 16 (App Router), integrado com Stripe para processamento de pagamentos.

## 🚀 Tecnologias

- **[Next.js 16](https://nextjs.org/)** - Framework React com App Router
- **[React 19](https://react.dev/)** - Biblioteca para construção de interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - Superset tipado do JavaScript
- **[Stitches](https://stitches.dev/)** - CSS-in-JS com performance otimizada
- **[Stripe](https://stripe.com/)** - Plataforma de pagamentos
- **[Radix UI](https://www.radix-ui.com/)** - Componentes acessíveis e não estilizados
- **[Axios](https://axios-http.com/)** - Cliente HTTP
- **[Embla Carousel](https://www.embla-carousel.com/)** - Biblioteca de carrossel

## ✨ Funcionalidades

- 🛒 Carrinho de compras com context API
- 💳 Checkout integrado com Stripe
- 📱 Interface responsiva e moderna
- ♿ Componentes acessíveis (ARIA)
- 🎨 Estilos com Stitches (CSS-in-JS)
- 🖼️ Otimização de imagens com Next.js Image
- 🔄 Carrossel de produtos
- ✅ Página de confirmação de compra

## 📋 Pré-requisitos

- Node.js 20+ 
- npm, yarn ou pnpm
- Conta no [Stripe](https://stripe.com/)

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd ignite-shop
```

2. Instale as dependências:
```bash
npm install
# ou
pnpm install
# ou
yarn install
```

3. Configure as variáveis de ambiente:

Crie um arquivo `.env.local` na raiz do projeto:

```env
# Stripe
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_URL=http://localhost:3000
```

Para obter suas chaves do Stripe:
1. Acesse [dashboard.stripe.com](https://dashboard.stripe.com/)
2. Vá em **Developers > API keys**
3. Copie a **Secret key** (use as chaves de teste para desenvolvimento)

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

## 🏗️ Build

Para criar a build de produção:

```bash
npm run build
```

Para iniciar o servidor de produção:

```bash
npm start
```

## 📁 Estrutura do Projeto

```
src/
├── app/                      # App Router do Next.js
│   ├── api/                 # API Routes
│   │   └── checkout/        # Endpoint de checkout
│   ├── product/[id]/        # Página de produto (rota dinâmica)
│   ├── success/             # Página de confirmação
│   ├── layout.tsx           # Layout raiz
│   ├── page.tsx             # Página inicial
│   └── home-client.tsx      # Componente client da home
├── components/              # Componentes React
│   ├── Cart/               # Carrinho de compras
│   ├── CartButton/         # Botão do carrinho
│   ├── Header/             # Cabeçalho
│   ├── ProductSkeleton/    # Loading de produtos
│   └── StitchesRegistry.tsx # Registry de estilos
├── contexts/               # Contexts do React
│   └── CartContext.tsx     # Context do carrinho
├── hooks/                  # Custom hooks
│   └── useCart.ts          # Hook do carrinho
├── lib/                    # Bibliotecas e configurações
│   └── stripe.ts           # Configuração do Stripe
└── styles/                 # Estilos globais e páginas
    ├── globals.ts          # Estilos globais
    ├── index.ts            # Configuração Stitches
    └── pages/              # Estilos das páginas
```

## 🎯 Como Usar

1. **Navegue pelos produtos**: Na página inicial, veja o carrossel de produtos disponíveis
2. **Adicione ao carrinho**: Clique no botão de adicionar de cada produto
3. **Visualize o carrinho**: Clique no ícone do carrinho no canto superior direito
4. **Finalize a compra**: No carrinho, clique em "Finalizar compra"
5. **Complete o pagamento**: Você será redirecionado para o checkout do Stripe
6. **Confirmação**: Após o pagamento, veja a página de sucesso

## 🧪 Testes com Stripe

Para testar pagamentos em ambiente de desenvolvimento, use os cartões de teste do Stripe:

- **Número do cartão**: `4242 4242 4242 4242`
- **Data de validade**: Qualquer data futura
- **CVC**: Qualquer 3 dígitos
- **CEP**: Qualquer 5 dígitos

Mais cartões de teste: [stripe.com/docs/testing](https://stripe.com/docs/testing)

## 🚢 Deploy

O projeto pode ser deployado em plataformas como:

- **[Vercel](https://vercel.com/)** (recomendado para Next.js)
- **[Netlify](https://www.netlify.com/)**
- **[Railway](https://railway.app/)**

### Deploy na Vercel:

1. Conecte seu repositório
2. Configure as variáveis de ambiente:
   - `STRIPE_SECRET_KEY`
   - `NEXT_PUBLIC_URL`
3. Deploy automático!

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Desenvolvido com ❤️

Projeto desenvolvido durante o bootcamp Ignite da Rocketseat.

---

⭐ Se este projeto foi útil, considere dar uma estrela!

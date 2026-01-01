<p align="center">
  <img src="https://raw.githubusercontent.com/Gelzieny/ignite-shop/f45372628719c6deb06b6cb7ad068c3ef2543ac8/public/logo.svg" alt="Logo" width="200"/>
</p>

E-commerce moderno desenvolvido com Next.js 16 (App Router), integrado com Stripe para processamento de pagamentos.


## 📄 Instruções do Desafio

Confira os detalhes completos do desafio [clicando aqui](https://efficient-sloth-d85.notion.site/Desafio-04-Adicionando-features-ao-Ignite-Shop-91e5b2c26c9342f5b1375ba66907d0b7).


## 🎨 Layout

O layout da aplicação está disponível no [Figma](https://www.figma.com/design/ZaS2ENOVY5Mq4Gm3mHUA9i/Ignite-Shop-2.0-%E2%80%A2-Desafio-React--Copy---Copy-?t=MAfuu85Jp9zlHDlk-0)

## 📸 Preview do Projeto

<p align="center">
  <img src="https://github.com/Gelzieny/ignite-shop/blob/main/.github/imgs/home.png?raw=true" alt="Home do projeto" width="400"/>
  <img src="https://github.com/Gelzieny/ignite-shop/blob/main/.github/imgs/Product.png?raw=true" alt="Produto" width="400"/>
  <img src="https://github.com/Gelzieny/ignite-shop/blob/main/.github/imgs/sacola.png?raw=true" alt="Produto na sacola" width="400"/>
  <img src="https://github.com/Gelzieny/ignite-shop/blob/main/.github/imgs/Purchase.png?raw=true" alt="Compra efetuada" width="400"/>
</p>



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

## 🚀 Como executar o projeto

### Pré-requisitos

<p align="justify">Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:</p>

<a href="https://skillicons.dev">
  <img src="https://skillicons.dev/icons?i=git,nodejs,vite,vscode" />
</a>


### Clone o repositório

```bash
# Clone este repositório
$ git clone <https://github.com/Gelzieny/ignite-shop.git>


# Acesse a pasta do projeto no terminal/cmd
$ cd ignite-shop

# Instale as dependências  pnpm | npm | yarn
$ npm install

# Execute a aplicação em modo de desenvolvimento pnpm | npm | yarn
$ npm run dev


# O servidor inciará na porta:3334 - acesse <http://localhost:3000/>
```

### Configure as variáveis de ambiente:

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


## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

# 🧑🏻‍💻 Autor

Feito com ❤️ por Gelzieny R. Martins 👋🏽 [Entre em contato!](https://gelzieny-dev.vercel.app/)

---

<p align="center">
⭐ Se este projeto foi útil, considere dar uma estrela!
</p>
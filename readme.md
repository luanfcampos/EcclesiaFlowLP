# ⛪ Ecclesia Flow - Landing Page

Uma Landing Page moderna, responsiva e de alta performance para um SaaS de gestão de igrejas, desenvolvida com foco no público brasileiro.

O projeto utiliza uma arquitetura **Vanilla JS** (sem frameworks como React/Vue) otimizada pelo **Vite**, utilizando a versão mais recente do **Tailwind CSS (v4)**.

## 🚀 Tecnologias Utilizadas

*   **[Vite](https://vitejs.dev/):** Build tool ultra-rápido para desenvolvimento e produção.
*   **[Tailwind CSS v4](https://tailwindcss.com/):** Framework CSS utility-first (configurado via CSS nativo e PostCSS).
*   **[PostCSS](https://postcss.org/):** Processador de CSS utilizado para integrar o Tailwind.
*   **[JavaScript (ES Modules)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Modules):** Lógica pura, sem dependência de frameworks pesados.
*   **[AOS (Animate On Scroll)](https://michalsnik.github.io/aos/):** Biblioteca para animações de entrada ao rolar a página.
*   **[Lucide Icons](https://lucide.dev/):** Biblioteca de ícones leve e moderna (substituta do Feather Icons).
*   **[Alpine.js](https://alpinejs.dev/):** (Opcional) Usado para micro-interações como o menu mobile.

---

## 📂 Estrutura do Projeto

```text
ecclesia-flow/
├── public/              # Arquivos estáticos (favicon, imagens)
├── src/
│   ├── main.js          # Ponto de entrada do JavaScript (Importa CSS e Libs)
│   └── style.css        # Arquivo de estilos principal (Configuração do Tailwind v4)
├── index.html           # HTML principal
├── postcss.config.js    # Configuração do PostCSS para carregar o Tailwind
├── package.json         # Dependências e scripts
└── README.md            # Documentação
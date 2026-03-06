# Pendências — Valoriza Cred

Itens que precisam ser fornecidos ou definidos antes do lançamento da página.

---

## Conteúdo obrigatório

| # | Item | Onde substituir no código | Observações |
|---|------|--------------------------|-------------|
| 1 | **Número do WhatsApp** | `index.html` — todos os links `href="https://wa.me/5500000000000"` (3 ocorrências) | Formato: `https://wa.me/55DDDNÚMERO` sem espaços ou traços |
| 2 | **CNPJ** | `index.html` — rodapé, `<span>CNPJ: 13.625.057/0001-28</span>` | — |
| 3 | **Logo** | `index.html` — `.header__logo` atualmente exibe texto estilizado | Formatos recomendados: SVG ou PNG com fundo transparente |
| 4 | **Foto da equipe / responsável** | `index.html` — `<div class="hero__img-placeholder">` na seção `#hero` | Substituir a div placeholder por uma tag `<img>` |
| 5 | **Depoimentos reais** | `index.html` — seção `#testimonials`, 3 blocos `<blockquote class="testimonial">` | Nome, cidade/estado, texto e foto do cliente |
| 6 | **Fotos dos clientes** | `index.html` — `<div class="testimonial__avatar">` em cada depoimento | Foto 44×44px mínimo, preferencialmente 88×88px (retina) |

---

## Conteúdo recomendado

| # | Item | Onde | Observações |
|---|------|------|-------------|
| 7 | **URL do site** | `index.html` — meta tag `og:url` (não está preenchida) | Necessário para compartilhamento no WhatsApp/redes sociais |
| 8 | **Imagem Open Graph** | `index.html` — meta tag `og:image` (não está preenchida) | Tamanho recomendado: 1200×630px |
| 9 | **Favicon** | `index.html` — adicionar `<link rel="icon">` no `<head>` | Formatos: `.ico`, `.png` 32×32 ou SVG |
| 10 | **Google Analytics / Meta Pixel** | `index.html` — antes do `</head>` | Para rastreamento de conversões no WhatsApp |

---

## Decisões de conteúdo

| # | Item | Situação atual |
|---|------|---------------|
| 11 | **Remover ou manter seção de depoimentos** | Exibida com exemplos fictícios marcados como *(exemplo)* |
| 12 | **Parceiros / bancos listados** | Não há lista de instituições parceiras na página atual |
| 13 | **Telefone alternativo** | Apenas WhatsApp como canal de contato |

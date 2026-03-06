# Como rodar o projeto

## Pré-requisitos

- [Node.js](https://nodejs.org/) instalado (versão 16+)

---

## Desenvolvimento

### 1. Clonar o repositório

```bash
git clone <url-do-repositorio>
cd ValorizaCred
```

### 2. Compilar o SCSS com watch

O projeto usa SCSS como pré-processador. O arquivo de entrada é `scss/main.scss` e o output é `css/main.css`.

```bash
npx sass --watch scss/main.scss css/main.css --style compressed --no-source-map
```

Deixe esse comando rodando em um terminal enquanto desenvolve — ele recompila automaticamente ao salvar qualquer arquivo `.scss`.

### 3. Abrir no browser

Abra o arquivo `index.html` diretamente no browser. Não é necessário servidor local.

Se preferir um servidor com live-reload, instale a extensão **Live Server** no VS Code e clique em "Open with Live Server".

---

## Build para produção

Para gerar o CSS final sem watch:

```bash
npx sass scss/main.scss css/main.css --style compressed --no-source-map
```

O arquivo `css/main.css` gerado deve ser commitado junto com os fontes SCSS.

---

## Estrutura de arquivos

```
ValorizaCred/
├── index.html          # página principal
├── scss/               # fontes SCSS (não editar css/ diretamente)
│   ├── main.scss       # entry point — importa todos os partials
│   ├── _variables.scss # tokens de design (cores, fontes, espaçamentos)
│   ├── _reset.scss
│   ├── _typography.scss
│   ├── _components.scss
│   └── sections/       # um partial por seção da página
├── css/
│   └── main.css        # output compilado (não editar manualmente)
├── js/
│   └── main.js         # scroll animations + sticky CTA
├── assets/
│   ├── images/
│   └── icons/
└── docs/               # documentação do projeto
```

---

## Avisos esperados na compilação

O compilador exibe avisos sobre `@import` deprecado no Dart Sass 3.0. Isso é esperado e **não afeta o funcionamento** — o CSS é gerado corretamente.

```
DEPRECATION WARNING [import]: Sass @import rules are deprecated...
```

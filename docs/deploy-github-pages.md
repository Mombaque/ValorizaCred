# Deploy no GitHub Pages

## Pré-requisitos

- Conta no [GitHub](https://github.com)
- Repositório criado no GitHub para o projeto

---

## 1. Subir o código para o GitHub

Caso ainda não tenha o repositório remoto configurado:

```bash
git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
git branch -M master
git push -u origin master
```

Para atualizações posteriores:

```bash
git add .
git commit -m "descrição das mudanças"
git push
```

---

## 2. Ativar o GitHub Pages

1. Acesse o repositório no GitHub
2. Clique em **Settings** (aba no topo)
3. No menu lateral esquerdo, clique em **Pages**
4. Em **Branch**, selecione `master` e a pasta `/` (root)
5. Clique em **Save**

O GitHub Pages ficará ativo em alguns segundos.

---

## 3. URL gerada

Após ativar, o site estará disponível em:

```
https://SEU_USUARIO.github.io/SEU_REPOSITORIO/
```

Exemplo: `https://joao.github.io/valorizacred/`

A URL aparece na própria página de Settings → Pages após a ativação.

---

## 4. Atenção: caminhos relativos

Como o site fica em um subdiretório (ex: `/valorizacred/`), todos os caminhos de assets devem ser **relativos** — sem barra `/` no início.

**Correto:**
```html
<link rel="stylesheet" href="css/main.css">
<img src="assets/images/logo.png">
<script src="js/main.js"></script>
```

**Incorreto (quebra no GitHub Pages):**
```html
<link rel="stylesheet" href="/css/main.css">
<img src="/assets/images/logo.png">
```

---

## 5. Atualizar o site

Qualquer `git push` para a branch `master` aciona o redeploy automaticamente. Em geral leva menos de 1 minuto para o site atualizar.

```bash
# Compilar o SCSS antes de fazer push
npx sass scss/main.scss css/main.css --style compressed --no-source-map

# Subir as mudanças
git add .
git commit -m "atualização do site"
git push
```

# RELATÓRIO DE ANÁLISE TÉCNICA E COMPLIANCE — GOOGLE ADS
## Valoriza Cred (valorizacred.com.br)

> **Branch analisada:** `master` (estado atual do repositório)
> **Data da análise:** 2025-05-06
> **Analista:** OpenCode Agent

---

## 1. RESUMO EXECUTIVO

**Provável motivo da reprovação:** A landing page apresenta um perfil de **alto risco algorítmico e manual** para o Google Ads, especialmente na categoria **Financial Products and Services**. O site é uma landing page de captura pura com funil 100% direcionado ao WhatsApp, carece de arquitetura institucional mínima, utiliza **superlativos absolutos não comprováveis** ("Melhores Taxas do Brasil"), contém **depoimentos com claims de tempo e aprovação enganosos**, possui **CTA final com linguagem de promessa financeira direta** ("descubra quanto você pode receber"), e não possui páginas obrigatórias de compliance (Política de Privacidade, Termos de Uso, LGPD detalhada). A combinação desses fatores provavelmente dispara múltiplas flags automáticas do Google e é facilmente reprovada em revisão manual por **Misrepresentation**, **Deceptive Claims** e **Unacceptable Business Practices** (bridge page).

**Nível de risco:** 🔴 **CRÍTICO**

**Problemas mais críticos:**
1. Superlativo absoluto no `<title>`, OG tags e H1: "Melhores Taxas do Brasil".
2. Página única de captura (bridge page) sem conteúdo institucional — 100% dos CTAs levam ao WhatsApp.
3. Depoimentos com claims sensíveis de tempo ("menos de 24 horas", "poucos minutos") e comparação direta com bancos ("encontrou uma opção melhor e com taxa menor").
4. **CTA final com promessa financeira direta:** "Simule agora e descubra quanto você pode receber" — linguagem que sugere valor garantido.
5. Ausência total de Política de Privacidade, Termos de Uso, LGPD, endereço físico, SAC/Ouvidoria e exemplos de CET.
6. Sticky CTA mobile fixo + 4 CTAs WhatsApp = pressão comercial excessiva.

---

## 2. PROBLEMAS ENCONTRADOS

### 📝 COPY / CONTEÚDO

| # | Problema | Localização | Severidade |
|---|----------|-------------|------------|
| 2.1 | **Superlativo absoluto não comprovável:** "Melhores Taxas do Brasil" | `<title>`, `<meta property="og:title">`, H1 `#hero-title` | 🔴 Crítica |
| 2.2 | **Claim de ausência de burocracia:** "Sem burocracia, sem sair de casa" | Parágrafo do Hero | 🔴 Crítica |
| 2.3 | **Promessa financeira direta:** "Simule agora e descubra quanto você pode receber" | H2 `#cta-title` | 🔴 Crítica |
| 2.4 | **Repetição de claim de burocracia no CTA final:** "Atendimento rápido, sem burocracia" | Seção `#cta-final` | 🔴 Crítica |
| 2.5 | **Claim de velocidade específica:** "Em menos de 24 horas o dinheiro estava na minha conta" | Depoimento Maria Aparecida S. | 🔴 Crítica |
| 2.6 | **Claim comparativo enganoso:** "Já tinha tentado em banco e não consegui. A Valoriza Cred encontrou uma opção melhor e com taxa menor" | Depoimento José Carlos R. | 🔴 Crítica |
| 2.7 | **Claim de velocidade irrealista:** "em poucos minutos já tinham a melhor proposta para mim" | Depoimento Ana Lúcia M. | 🔴 Crítica |
| 2.8 | **Termo de aprovação implícita:** "Buscamos a melhor aprovação" | Seção Diferenciais, h3 | 🟡 Alta |
| 2.9 | **Termo problemático:** "Atendimento rápido, sem enrolação" | Step 1 "Como funciona" | 🟡 Alta |
| 2.10 | **Copy de urgência:** "Falar no WhatsApp agora" / "Simular no WhatsApp" | Múltiplos CTAs | 🟡 Alta |
| 2.11 | **Meta description com CTA direto:** "Atendimento pelo WhatsApp" | `<meta name="description">` | 🟡 Alta |
| 2.12 | **Ausência de exemplos reais de operação (CET)** | Todo o site | 🟡 Alta |

### 🎨 UX / INTERFACE

| # | Problema | Localização | Severidade |
|---|----------|-------------|------------|
| 2.13 | **Sticky CTA mobile excessivamente agressivo** | `.sticky-cta` fixo na parte inferior, z-index 200 | 🔴 Crítica |
| 2.14 | **Monocanalidade absoluta: 100% dos CTAs levam ao WhatsApp** | 4 links `wa.me` | 🔴 Crítica |
| 2.15 | **Navegação minimalista demais (apenas 3 âncoras)** | `.header__nav` | 🟡 Alta |
| 2.16 | **Ausência de página "Quem Somos", "Contato" ou institucional** | Estrutura do site | 🔴 Crítica |

### ⚖️ COMPLIANCE / REGULATÓRIO

| # | Problema | Localização | Severidade |
|---|----------|-------------|------------|
| 2.17 | **Ausência de página/link de Política de Privacidade** | Todo o site | 🔴 Crítica |
| 2.18 | **Ausência de Termos de Uso** | Todo o site | 🔴 Crítica |
| 2.19 | **Ausência de informações LGPD detalhadas** (direitos do titular, DPO, etc.) | Todo o site | 🔴 Crítica |
| 2.20 | **Ausência de endereço físico da empresa** | Footer | 🟡 Alta |
| 2.21 | **Ausência de canais SAC / Ouvidoria / BACEN** | Footer | 🟡 Alta |
| 2.22 | **Ausência de exemplos de CET (Custo Efetivo Total)** | Todo o site | 🔴 Crítica |
| 2.23 | **Ausência de transparência sobre taxas de juros** | Todo o site | 🔴 Crítica |
| 2.24 | **CNPJ presente mas isolado** (sem link para consulta na Receita) | Footer | 🟢 Baixa |
| 2.25 | **Disclaimer presente mas insuficiente** — não menciona riscos, inadimplência, etc. | `.footer__legal` | 🟡 Alta |

### 🔧 TÉCNICO

| # | Problema | Localização | Severidade |
|---|----------|-------------|------------|
| 2.26 | **Ausência de `robots.txt`** | Raiz do projeto | 🟡 Alta |
| 2.27 | **Ausência de `sitemap.xml`** | Raiz do projeto | 🟡 Alta |
| 2.28 | **Ausência de Structured Data / Schema.org** | `<head>` | 🟡 Alta |
| 2.29 | **Site de página única (single-page landing)** — alto risco de ser classificado como "bridge page" | Estrutura geral | 🔴 Crítica |
| 2.30 | **Google Ads tag configurada mas sem eventos de conversão explícitos** | `gtag('config', 'AW-10778111618')` | 🟢 Baixa |
| 2.31 | **Não há redirecionamentos, cloaking, iframes ou scripts maliciosos** | — | 🟢 Positivo |
| 2.32 | **Conteúdo oculto não malicioso** (animações `.reveal` com `opacity: 0` inicial) | CSS/JS | 🟢 Positivo |

### 🤝 TRUST / CONFIANÇA

| # | Problema | Localização | Severidade |
|---|----------|-------------|------------|
| 2.33 | **Nenhuma evidência de parceria com bancos** (logos, certificações, selos) | Seção Diferenciais | 🟡 Alta |
| 2.34 | **Depoimentos sem foto real** (avatar placeholder cinza) | `.testimonial__avatar` | 🟡 Alta |
| 2.35 | **Nenhum selo de segurança** (SSL OK implicitamente, mas nenhum selo visual) | Todo o site | 🟢 Baixa |
| 2.36 | **Nenhum link para redes sociais ou presença digital** | Todo o site | 🟡 Alta |

### 🚨 GOOGLE ADS POLICY RISK

| Política Google | Violação Potencial | Severidade |
|-----------------|-------------------|------------|
| **Financial Products and Services** | Site de correspondente bancário sem disclosures adequados de taxas, CET e riscos. | 🔴 Crítica |
| **Misrepresentation** | "Melhores Taxas do Brasil" — claim não comprovável e enganoso. | 🔴 Crítica |
| **Deceptive Claims** | "Sem burocracia", "menos de 24h", "poucos minutos", "descubra quanto você pode receber" — promessas de facilidade/velocidade/valor. | 🔴 Crítica |
| **Unacceptable Business Practices** | Bridge page / doorway page: landing pura de captação sem valor institucional real. | 🔴 Crítica |
| **Sensitive Financial Targeting** | Segmentação direcionada a aposentados/pensionistas INSS (público vulnerável). | 🟡 Alta |
| **Clickbait** | Headlines agressivas e CTAs repetitivos ("Falar agora", "Simular no WhatsApp", "descubra quanto você pode receber"). | 🟡 Alta |
| **Excessively Aggressive CTAs** | 4 CTAs WhatsApp + sticky mobile. Saturação comercial. | 🔴 Crítica |

---

## 3. EVIDÊNCIAS

### Textos problemáticos encontrados

**Arquivo:** `index.html` (branch `master`)

**Superlativos absolutos:**
```html
<title>Valoriza Cred — Crédito Consignado com as Melhores Taxas</title>
<meta property="og:title" content="Valoriza Cred — Crédito Consignado com as Melhores Taxas" />
<h1 id="hero-title">Crédito Consignado com as<br />Melhores Taxas do Brasil</h1>
```

**Claim de burocracia zero (Hero):**
```html
<p>Atendemos aposentados, pensionistas INSS e servidores públicos em todo o Brasil. Sem burocracia, sem sair de casa.</p>
```

**Promessa financeira direta (CTA Final):**
```html
<h2 id="cta-title">Simule agora e descubra quanto você pode receber</h2>
<p>Atendimento rápido, sem burocracia, em todo o Brasil. Fale agora com um especialista.</p>
```

**Depoimento com claim temporal específico:**
```html
<p class="testimonial__text">"Fui atendida com muita atenção. Em menos de 24 horas o dinheiro estava na minha conta. Recomendo demais para todos os aposentados!"</p>
```

**Depoimento comparativo enganoso:**
```html
<p class="testimonial__text">"Já tinha tentado em banco e não consegui. A Valoriza Cred encontrou uma opção melhor e com taxa menor. Ótimo serviço!"</p>
```

**Depoimento com velocidade irrealista:**
```html
<p class="testimonial__text">"Atendimento pelo WhatsApp super fácil. Expliquei minha situação e em poucos minutos já tinham a melhor proposta para mim."</p>
```

**CTAs WhatsApp (4 ocorrências idênticas):**
```html
<!-- Header -->
<a href="https://wa.me/5515998256777?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Valoriza%20Cred%20e%20gostaria%20de%20simular%20um%20cr%C3%A9dito%20consignado." class="btn btn--whatsapp header__cta">WhatsApp</a>

<!-- Hero -->
<a href="https://wa.me/5515998256777?text=..." class="btn btn--whatsapp btn--lg">Falar no WhatsApp agora</a>

<!-- CTA Final -->
<a href="https://wa.me/5515998256777?text=..." class="btn btn--whatsapp btn--lg">Falar no WhatsApp</a>

<!-- Sticky Mobile -->
<a href="https://wa.me/5515998256777?text=..." class="btn btn--whatsapp">Simular no WhatsApp</a>
```

**Sticky CTA mobile:**
```html
<div class="sticky-cta sticky-cta--hidden" role="complementary" aria-label="Botão de contato fixo">
  <a href="https://wa.me/..." class="btn btn--whatsapp">Simular no WhatsApp</a>
</div>
```

**Disclaimer presente mas insuficiente:**
```html
<p class="footer__legal">
  Crédito sujeito à análise e aprovação. Taxas e condições conforme política de cada instituição financeira parceira.
  As informações desta página têm caráter informativo e não constituem oferta de crédito.
  Valoriza Cred atua como correspondente bancário, conforme regulamentação do Banco Central do Brasil.
</p>
```

**CNPJ presente:**
```html
<span>CNPJ: 13.625.057/0001-28</span>
```

**Google Ads Tag:**
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-10778111618"></script>
<script>
  gtag('config', 'AW-10778111618');
</script>
```

**Arquivos relevantes:**
- `index.html` — única página do site (418 linhas na `master`)
- `js/main.js` — lógica de scroll reveal e sticky CTA (sem formulário na `master`)
- `scss/sections/_components.scss` — estilos do sticky CTA e botões
- `css/main.css` — build final (linha única, ~3KB)

**O que NÃO existe no projeto (branch `master`):**
- `robots.txt`
- `sitemap.xml`
- `politica-de-privacidade.html`
- `termos-de-uso.html`
- `lgpd.html`
- `quem-somos.html`
- Página de CET/Exemplos
- Formulário de leads (presente apenas na `dev`)
- Schema.org / Structured Data
- Páginas de erro (404.html)

**Diferença observada entre `master` e `dev`:**
A branch `dev` adiciona um formulário de leads (`#lead-form`) com honeypot anti-spam e consentimento LGPD básico, mas ainda assim não resolve os problemas estruturais de bridge page, superlativos, claims de depoimentos e ausência de páginas de compliance obrigatórias.

---

## 4. PLANO DE ADEQUAÇÃO

### 🔴 PRIORIDADE CRÍTICA (Bloqueiam aprovação)

| # | Ação | Motivação |
|---|------|-----------|
| 4.1 | **Remover ou substituir superlativos absolutos** | "Melhores Taxas do Brasil" → "Taxas Competitivas para Crédito Consignado" ou "Condições Acessíveis". Aplicar em `<title>`, OG tags, H1 e meta description. | Misrepresentation |
| 4.2 | **Remover ou reescrever CTA final** | "Simule agora e descubra quanto você pode receber" → "Solicite uma análise personalizada" ou "Converse com um especialista". Eliminar "sem burocracia" do parágrafo. | Deceptive Claims |
| 4.3 | **Remover ou reescrever depoimentos com claims temporais/comparativos** | Eliminar "menos de 24 horas", "poucos minutos", "tentei em banco e não consegui". Substituir por depoimentos genéricos sobre atendimento e clareza. | Deceptive Claims |
| 4.4 | **Remover "sem burocracia" do Hero** | Substituir por "processo simplificado" ou "atendimento personalizado". | Deceptive Claims |
| 4.5 | **Criar página dedicada de Política de Privacidade** | Página completa com: dados coletados, finalidade, base legal LGPD, direitos do titular, DPO, prazos, cookies. Link obrigatório no footer. | LGPD / Financial Products |
| 4.6 | **Criar página de Termos de Uso** | Condições de uso do site, limitação de responsabilidade, propriedade intelectual, jurisdição. | Trust / Compliance |
| 4.7 | **Criar página "Quem Somos" / Institucional** | História, missão, equipe, CNPJ, endereço físico, foto da sede (se houver), tempo de mercado, certificações. Aumenta trust score. | Unacceptable Business Practices (bridge page) |
| 4.8 | **Criar página de Transparência / CET e Exemplos** | Tabela de CET, exemplos de operação (ex: R$ 10.000 em 24x = R$ X,XX total, taxa Y% a.m.), instituições parceiras. Obrigatório para correspondentes bancários. | Financial Products |
| 4.9 | **Adicionar endereço físico, SAC e Ouvidoria no footer** | Endereço completo, telefone SAC, e-mail, canal de ouvidoria. | Compliance / Trust |
| 4.10 | **Suavizar/remover sticky CTA mobile** | Reduzir ou eliminar o botão fixo inferior. Se mantido, deve ser menor, não-dominante, e não bloquear conteúdo. | Excessively Aggressive CTAs |
| 4.11 | **Diversificar canais de contato** | Adicionar telefone fixo, e-mail. O WhatsApp pode existir, mas não pode ser o ÚNICO canal. | Unacceptable Business Practices |

### 🟡 PRIORIDADE ALTA (Aumentam risco de reprovação)

| # | Ação | Motivação |
|---|------|-----------|
| 4.12 | **Reescrever passo 3 do "Como funciona"** | "Crédito na sua conta" → "Análise e liberação do crédito". Evitar promessa de dinheiro garantido. | Deceptive Claims |
| 4.13 | **Reescrever copy do passo 1** | "Atendimento rápido, sem enrolação" → "Atendimento personalizado e sem compromisso". | Deceptive Claims |
| 4.14 | **Adicionar logos/parceiros** | Incluir selos ou nomes das instituições financeiras parceiras (com autorização). | Trust |
| 4.15 | **Adicionar fotos reais nos depoimentos** | Ou remover completamente os depoimentos se não forem verificáveis. Avatares placeholder são red flag. | Misrepresentation |
| 4.16 | **Criar `robots.txt`** | Permitir crawling, especificar sitemap. | Técnico / SEO |
| 4.17 | **Criar `sitemap.xml`** | Incluir todas as páginas novas (privacidade, termos, quem somos, CET). | Técnico / SEO |
| 4.18 | **Adicionar Structured Data (Schema.org)** | `LocalBusiness`, `FinancialService`, `Organization`, `AggregateRating` (se verificável). | SEO / Trust |
| 4.19 | **Adicionar link de consulta de CNPJ na Receita Federal** | `https://servicos.receitas.fazenda.gov.br/Servicos/cnpjreva/Cnpjreva_Solicitacao.asp` | Trust |
| 4.20 | **Criar página de Perguntas Frequentes (FAQ)** | Responder sobre taxas, prazos, requisitos, riscos. Demonstra transparência. | Trust |

### 🟢 PRIORIDADE MÉDIA

| # | Ação | Motivação |
|---|------|-----------|
| 4.21 | **Adicionar selo de segurança/site blindado** | SSL já existe, mas selo visual ajuda percepção humana. | Trust |
| 4.22 | **Criar links para redes sociais** | LinkedIn, Instagram, Facebook (se existirem). | Trust |
| 4.23 | **Revisar animações `.reveal`** | Garantir que não pareçam "ocultação de conteúdo" para bots. O conteúdo está no DOM, então é OK, mas verificar se `opacity: 0` não é interpretado como cloaking. | Técnico |
| 4.24 | **Adicionar evento de conversão no Google Ads** | Configurar `gtag('event', 'conversion', ...)` no clique de CTAs ou envio de formulário (se houver). | Otimização |

### 🔵 PRIORIDADE BAIXA

| # | Ação | Motivação |
|---|------|-----------|
| 4.25 | **Criar página 404.html** | Experiência do usuário. | UX |
| 4.26 | **Otimizar imagem inicial** | Verificar se `imagem-inicial.png` não contém texto com claims não auditados. | Compliance |
| 4.27 | **Adicionar breadcrumb ou navegação secundária** | Se criar páginas internas. | UX |

---

## 5. ESTRATÉGIA RECOMENDADA

### O que deve ser SUAVIZADO
- **Tom comercial:** Reduzir a densidade de CTAs WhatsApp de 4 para 1-2. Remover o sticky mobile ou torná-lo discreto.
- **Linguagem de velocidade:** Eliminar qualquer menção a prazos específicos ("24h", "poucos minutos", "rápido").
- **Linguagem de facilidade:** Substituir "sem burocracia" por "processo orientado" ou "atendimento personalizado".
- **Linguagem de promessa financeira:** Eliminar "descubra quanto você pode receber", "melhor taxa", "melhor aprovação".
- **Headlines:** Trocar superlativos por qualificadores moderados. Ex: "Condições especiais para aposentados e pensionistas" ao invés de "Melhores taxas".

### O que deve ser REMOVIDO
- Depoimentos não verificáveis com claims temporais ou comparativos. Se não puderem ser comprovados, remova.
- A frase "Sem burocracia" do Hero e do CTA final.
- O superlativo "Melhores Taxas do Brasil" de todos os pontos de contato.
- O sticky CTA mobile (ou reduzir drasticamente).

### O que deve ser INSTITUCIONALIZADO
- **Arquitetura de site:** Transformar de single-page landing em site multi-página com: Home, Quem Somos, Política de Privacidade, Termos de Uso, Transparência (CET), Contato.
- **Canais de comunicação:** Adicionar telefone e e-mail como alternativas ao WhatsApp.
- **Conteúdo educativo:** Adicionar seção explicando o que é crédito consignado, riscos, comparação com outras modalidades. Isso demonstra que o site não é apenas uma "bridge page".
- **Disclosures financeiros:** Tornar o disclaimer do footer mais robusto, incluindo menção a riscos de inadimplência, possibilidade de não aprovação, e que a contratação depende de análise de crédito.

### Como reduzir aparência de "landing agressiva"
1. **Diminuir a dominância do verde WhatsApp:** Use cores da marca (azul/dourado) para CTAs primários. Reserve verde apenas para um CTA secundário.
2. **Adicionar conteúdo acima da dobra:** Colocar texto institucional e educativo antes do primeiro CTA.
3. **Remover o sticky CTA mobile** ou torná-lo um banner fino com texto "Fale conosco" em vez de botão gigante.
4. **Criar uma segunda opção de CTA não-comercial:** Ex: "Baixar guia gratuito sobre crédito consignado" (lead magnet educativo).
5. **Equilibrar a proporção conteúdo/CTA:** Atualmente a landing é ~30% CTA. O ideal para Google Ads em setor financeiro é <10% CTA, 90% conteúdo informativo/institucional.

### Como aumentar confiança algorítmica/regulatória
1. **Páginas de compliance obrigatórias:** Política de Privacidade, Termos, LGPD. O Google Ads bot provavelmente faz crawling em busca dessas páginas.
2. **Schema.org `Organization` e `LocalBusiness`:** Ajuda o Google a entender que é uma empresa legítima.
3. **Sitemap + robots.txt:** Facilita crawling e indexação.
4. **Consistência de NAP (Nome, Endereço, Telefone):** Quando adicionar endereço e telefone, mantenha idêntico em todas as páginas e registros públicos.
5. **Backlinks institucionais:** Se possível, obter menções em sites de notícias ou diretórios de correspondentes bancários.
6. **Idade do domínio e histórico:** `valorizacred.com.br` — verificar se há histórico de penalizações. O domínio pode ter acumulado "reputação negativa" se campanhas anteriores foram reprovadas.

---

## CONCLUSÃO

O site **Valoriza Cred** (branch `master`) é uma landing page de captação direta bem construída visualmente, mas **estructuralmente incompatível com as políticas atuais do Google Ads para produtos financeiros**. A reprovação provavelmente não é causada por um único fator, mas pela **conjugação de múltiplos sinais de risco**: superlativos absolutos, claims de velocidade, promessa financeira direta no CTA final ("descubra quanto você pode receber"), ausência de arquitetura institucional, monocanalidade WhatsApp, e ausência de páginas de compliance.

**A solução não é apenas "suavizar" o texto.** É necessária uma **reestruturação arquitetural** do site, transformando-o de uma bridge page de captação em um **site institucional-legítimo** com múltiplas páginas, disclosures financeiros completos, canais de contato diversificados e conteúdo educativo predominante.

> **Recomendação final:** Não tente reaprovar a campanha sem implementar pelo menos as ações de **Prioridade Crítica** (seção 4). Aprovar sem essas mudanças é improvável e pode resultar em suspensão permanente da conta de anúncios.

---

> **Nota sobre a branch `dev`:** A branch `dev` adiciona um formulário de leads com honeypot anti-spam e checkbox de consentimento LGPD. Embora seja uma melhoria, o formulário sozinho **não resolve** os problemas estruturais identificados neste relatório. Recomenda-se aplicar as correções de prioridade crítica em ambas as branches antes de qualquer tentativa de reaprovação.

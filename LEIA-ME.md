# Azyra Jus — experiência editorial com balança 3D

Versão refeita a partir do site enviado. A direção visual utiliza a gravação de referência: espaço, imagens amplas, tipografia editorial e transições discretas. A marca verde, dourada e creme e as imagens Azyra foram preservadas.

## Abrir no notebook

1. Extraia o ZIP em uma pasta.
2. Abra essa pasta no VS Code.
3. No terminal da pasta, execute `npm start`.
4. Abra `http://localhost:3000` no navegador.

O site já está compilado: não precisa executar `npm install` para abrir. A extensão Live Server também funciona. A execução do 3D depende de um navegador com WebGL 2 disponível. Quando o 3D falha, a referência estática é exibida e os controles são desativados.

## Publicar na Netlify

O `index.html` está na raiz. Faça upload da pasta extraída que contém esse arquivo, ou conecte a pasta ao projeto Git desejado. `netlify.toml` define diretório de publicação `.` e comando de build vazio. O pacote inclui as bibliotecas necessárias e não busca GSAP ou Three.js em um CDN.

Esta versão não foi publicada automaticamente.

## Interação na abertura

- Arraste horizontalmente com o mouse ou com o dedo para explorar os ângulos da balança.
- Os botões de setas giram a vista em incrementos de 45 graus, sem limite horizontal.
- Focalize o objeto com Tab e use as setas do teclado. Home restaura a vista inicial.
- O objeto flutua levemente e oscila em três eixos. Não há rotação de uma fotografia: base, coluna, braço, pratos e barras são malhas tridimensionais.
- “Pausar balanço” interrompe o movimento ambiente. A rotação manual continua disponível.
- O botão de movimento do cabeçalho e a preferência de movimento reduzido do sistema removem as animações automáticas.
- A renderização ambiente para fora da área visível e quando a aba está oculta.

## Skills aplicadas

- **GSAP:** sequências de entrada, transições da demonstração, recortes de imagens e parallax discreto no desktop.
- **Motion Design:** intenção, ritmo, hierarquia, movimentos de baixa amplitude e acessibilidade.
- **img2threejs:** análise da imagem, inventário de detalhes, especificação validada e geração procedural da balança.

## Estado da reconstrução

O ZIP do objeto continha JPG e EPS, sem GLB/OBJ. O modelo foi reconstruído a partir da imagem em código Three.js. A revisão de 14/10/2026 mantém 26 partes e possui 86.724 triângulos, incluindo 156 elos ovais alternados nas seis correntes, base octogonal com chanfros, perfis torneados, bordas dos pratos e barras chanfradas com inscrições em relevo.

É uma **prévia aproximada de reconstrução**, ainda sem aprovação do primeiro estágio de escultura. O verso é inferido e as inscrições são aproximações em relevo. A correção manual do modelo atual fica em `src/refineBalanceModel.js`; seus parâmetros estão preservados em `docs/object-sculpt-spec.json`, no campo `websiteRefinement`. Não é uma réplica fiel nem um modelo com todos os passes da skill aprovados.

A revisão img2threejs permanece pendente. A imagem original tem fundo escuro e reflexos fortes: o novo diagnóstico de silhueta descartou 70,5% dos pixels de primeiro plano da referência e 36,8% do render de inspeção durante a comparação. Esse resultado não fornece uma medida válida de fidelidade. Nenhuma aprovação de fidelidade foi inventada e nenhum passe posterior foi liberado. Para prosseguir com a aprovação, são necessárias uma referência limpa para comparação e capturas do objeto no navegador.

Foram produzidas renderizações offline em cinco ângulos, usando a geometria exata exportada da factory Three.js. Essas renderizações verificam o volume aproximado, mas usam um renderizador de inspeção; não comprovam o material final no navegador. A captura de navegador e a validação visual do site não estavam disponíveis nesta sessão.

A foto de fundo do escritório usa os 1.672 × 941 pixels do arquivo original, sem ampliação artificial, filtro de desfoque ou dessaturação. A opacidade da imagem passou de 7% para 100%, com gradientes de contraste sobrepostos atrás do texto. A foto da seção de visão também deixou de ser ampliada por parallax. O canvas 3D utiliza antialiasing e densidade de até 2 pixels por pixel CSS; o desempenho em GPU e celular permanece a conferir.

## Verificações realizadas

- Sintaxe dos arquivos JS e do servidor local.
- Caminhos de arquivos, IDs HTML únicos, âncoras e configuração Netlify.
- Módulos da demonstração e separação dos dados fictícios por contexto.
- Menu, diálogos, retorno de foco, acesso, contato e privacidade.
- Controles de 360 graus, arraste e teclado com OrbitControls e geometria Three.js reais em ambiente DOM de teste, usando um renderizador WebGL substituído para teste.
- Pausa, movimento reduzido, funcionamento sem GSAP e alternativa estática em caso de falha no WebGL.

Esses testes não verificam GPU, layout renderizado ou desempenho de navegador. Confira a aparência no Chrome e no celular antes da publicação pública.

## Configurações e código

Os endereços públicos ficam em `config.js`. Plataforma, WhatsApp, e-mail e política de privacidade continuam vazios, como no site original. Os botões apresentam o estágio de validação quando o canal não foi configurado. Não foram inventados links comerciais ou integrações.

Os dados da demonstração são fictícios. A página não tem conexão ao backend do SaaS.

Arquivos principais: `index.html`, `editorial.css`, `motion.js` e `app.js`.
A cena está em `src/scene.js`, a factory gerada está em `src/createBalanceModel.ts`, e a correção manual atual está em `src/refineBalanceModel.js`. A correção mantém o status de prévia sem aprovação; não substitui os gates da skill.
Se modificar os fontes 3D, execute `npm install` e depois `npm run build:3d` para atualizar `balance-3d.js`. Não é necessário reinstalar dependências para cada alteração.

## Créditos

Three.js 0.186.1, licença MIT em `assets/vendor/THREE-LICENSE.txt` e aviso no bundle. GSAP e ScrollTrigger 3.15.0, cabeçalhos de licença preservados. Diretrizes Motion Design: LottieFiles. Workflow de reconstrução: img2threejs v2.0.0.

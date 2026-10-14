# Azyra Jus — site de apresentação

Site estático com identidade Azyra Jus, animações GSAP, demonstração com dados fictícios e uma prévia procedural da balança em Three.js.

## Executar

```bash
npm start
```

Abra `http://localhost:3000`. O site já inclui o bundle 3D; não é necessário instalar dependências para abrir a versão entregue.

## Atualizar a cena 3D

```bash
npm install
npm run build:3d
```

Fontes: `src/scene.js`, `src/createBalanceModel.ts` e `src/refineBalanceModel.js`.

A revisão visual inclui correntes com 156 elos, encaixes nos pratos e nas extremidades do braço, pivô central com eixo e duas cabeças, base octogonal com chanfros e frisos, coluna torneada com sulcos, pratos côncavos e barras com inscrições em relevo. A foto do escritório mantém sua resolução original e é exibida sem filtro de desfoque ou dessaturação. O sombreamento do fundo preserva a leitura do texto.

A balança fica na extremidade direita da abertura, aproximadamente 80 pixels mais alta no desktop e ligeiramente ampliada e gira no sentido horário em computadores com mouse, completando uma volta em aproximadamente 45 segundos. O giro começa automaticamente no desktop e continua com o mouse sobre o objeto ou com foco no canvas. Somente o arraste, a pausa explícita e a invisibilidade suspendem o movimento. A configuração antiga de pausa não é herdada. As legendas e botões decorativos marcados nas capturas foram removidos; arraste, setas, Home e Espaço mantêm o controle do objeto. Títulos usam Playfair Display, e textos e interface usam Manrope, com fontes e licenças incluídas no projeto.

## Netlify

Diretório de publicação: `.`. Comando de build vazio. A configuração está em `netlify.toml`.

## Estado e documentação

O modelo 3D é uma reconstrução aproximada ainda sem aprovação de fidelidade do fluxo img2threejs. A validação visual em navegador também permanece pendente. Os módulos desta página são ilustrativos e não estão ligados ao backend do SaaS.

Consulte [LEIA-ME.md](LEIA-ME.md) para controles, configuração comercial, verificações e limitações.

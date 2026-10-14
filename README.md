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

Fontes: `src/scene.js` e `src/createBalanceModel.ts`.

## Netlify

Diretório de publicação: `.`. Comando de build vazio. A configuração está em `netlify.toml`.

## Estado e documentação

O modelo 3D é uma reconstrução aproximada ainda sem aprovação de fidelidade do fluxo img2threejs. A validação visual em navegador também permanece pendente. Os módulos desta página são ilustrativos e não estão ligados ao backend do SaaS.

Consulte [LEIA-ME.md](LEIA-ME.md) para controles, configuração comercial, verificações e limitações.

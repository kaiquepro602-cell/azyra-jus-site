# Publicar Azyra Jus na Netlify

O projeto está preparado para publicação. Preparar os arquivos não publica o site nem configura um domínio automaticamente.

## GitHub (atualizações automáticas)

1. Na Netlify, selecione **Add new project → Import an existing project → GitHub**.
2. Escolha `kaiquepro602-cell/azyra-jus-site` e a branch `main`.
3. Confira os campos abaixo, já definidos em `netlify.toml`:

| Campo | Valor |
| --- | --- |
| Base directory | Deixe vazio (raiz do repositório) |
| Build command | `npm run build` |
| Publish directory | `dist` |
| Variáveis de ambiente obrigatórias | Nenhuma |

4. Inicie o deploy. Após a conclusão, a Netlify informará a URL do site.
5. Abra a URL no computador e no celular e confira fontes, galeria, diálogos e balança 3D. A aparência desta revisão ainda não teve validação visual em navegador.

Os próximos pushes na branch `main` passam a atualizar o site conectado.

## Envio manual

No terminal do VS Code, na pasta do projeto:

```bash
git pull origin main
npm run build
```

Arraste a pasta **dist** para https://app.netlify.com/drop. O `index.html` precisa estar diretamente dentro dela. Não envie a pasta do projeto inteiro.

O build usa apenas módulos nativos do Node.js 18 ou superior. Não é necessário instalar as dependências para gerar `dist` com o bundle 3D entregue. Se alterar o código 3D, execute `npm install` e `npm run build:3d` antes de `npm run build`.

## Contato e verificação

- Instagram oficial: https://instagram.com/azyrajus_
- WhatsApp: preencha `contactWhatsApp` em `config.js` com país e DDD, apenas dígitos. Sem número configurado, o botão oferece o Instagram.
- Plataforma, e-mail e política definitiva também são configurados em `config.js`.
- A página apresenta dados fictícios e não se conecta ao backend jurídico.
- Os links internos usam âncoras; não é necessário redirecionamento de SPA.
- `_headers` acompanha a pasta pública tanto no GitHub quanto no envio manual.
- Fontes, imagens e bibliotecas são locais. As licenças acompanham a publicação.
- A pasta `dist` é gerada e ignorada pelo Git. Estado local da CLI Netlify também está ignorado.

Documentação oficial: https://docs.netlify.com/build/configure-builds/overview/

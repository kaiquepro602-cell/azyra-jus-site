import {createServer} from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {resolve,extname,sep} from 'node:path';
const base=resolve(fileURLToPath(new URL('.',import.meta.url)));
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.webp':'image/webp','.jpeg':'image/jpeg','.jpg':'image/jpeg','.png':'image/png','.woff2':'font/woff2','.json':'application/json; charset=utf-8','.md':'text/plain; charset=utf-8'};
const port=Number(process.env.PORT||3000);
createServer(async(req,res)=>{
 try{
  const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
  let path=resolve(base,'.'+pathname);
  if(path!==base&&!path.startsWith(base+sep)){res.writeHead(403);res.end('Acesso negado');return;}
  if((await stat(path)).isDirectory())path=resolve(path,'index.html');
  const body=await readFile(path);res.writeHead(200,{'Content-Type':types[extname(path)]||'application/octet-stream','Cache-Control':'no-store'});res.end(body);
 }catch{res.writeHead(404,{'Content-Type':'text/plain; charset=utf-8'});res.end('Arquivo não encontrado');}
}).listen(port,'127.0.0.1',()=>console.log(`Azyra Jus: http://localhost:${port}`));

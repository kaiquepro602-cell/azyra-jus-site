import {cp, mkdir, rename, rm, stat} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';

const root=path.dirname(fileURLToPath(import.meta.url));
const staging=path.join(root,'dist-staging');
const output=path.join(root,'dist');
// The 3D bundle is committed; publishing needs no compiler or runtime server.
const publicFiles=['index.html','styles.css','premium.css','editorial.css','app.js',
 'navigation.js','motion.js','config.js','balance-3d.js','balance-3d.js.LEGAL.txt',
 '_headers','assets'];
try{
 for(const file of publicFiles)await stat(path.join(root,file));
 await rm(staging,{recursive:true,force:true});await mkdir(staging);
 for(const file of publicFiles)await cp(path.join(root,file),path.join(staging,file),{recursive:true});
 await rm(output,{recursive:true,force:true});await rename(staging,output);
 console.log('Site pronto para Netlify em dist/ (HTML, CSS, JS, imagens, fontes e licenças).');
}catch(error){
 await rm(staging,{recursive:true,force:true});
 console.error('Build interrompido:',error.message);process.exitCode=1;
}

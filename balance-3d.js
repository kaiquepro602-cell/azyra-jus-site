(()=>{var bi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},xi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},yh=0,zl=1,bh=2;var ki=1,xh=2,Ps=3,Wn=0,Ht=1,yn=2,Xn=0,Is=1,Hl=2,Gl=3,Vl=4,vh=5;var zi=100,Sh=101,Mh=102,wh=103,Eh=104,Th=200,Rh=201,Ah=202,Ch=203,Wl=204,Xl=205,Ph=206,Ih=207,Dh=208,Lh=209,Nh=210,Uh=211,Fh=212,Oh=213,Bh=214,va=0,Sa=1,Ma=2,fs=3,wa=4,Ea=5,Ta=6,Ra=7,to=0,kh=1,zh=2,In=0,ql=1,jl=2,Yl=3,Ds=4,Zl=5,Jl=6,Kl=7;var $l=300,vi=301,Hi=302,no=303,io=304,Ar=306,ei=1e3,Bn=1001,Aa=1002,Ut=1003,Hh=1004;var Cr=1005;var zt=1006,so=1007;var Si=1008;var rn=1009,Ql=1010,ec=1011,Ls=1012,ro=1013,Dn=1014,bn=1015,Ln=1016,ao=1017,oo=1018,Ns=1020,tc=35902,nc=35899,ic=1021,sc=1022,xn=1023,kn=1026,Mi=1027,lo=1028,co=1029,wi=1030,ho=1031;var uo=1033,Pr=33776,Ir=33777,Dr=33778,Lr=33779,fo=35840,po=35841,mo=35842,go=35843,_o=36196,yo=37492,bo=37496,xo=37488,vo=37489,Nr=37490,So=37491,Mo=37808,wo=37809,Eo=37810,To=37811,Ro=37812,Ao=37813,Co=37814,Po=37815,Io=37816,Do=37817,Lo=37818,No=37819,Uo=37820,Fo=37821,Oo=36492,Bo=36494,ko=36495,zo=36283,Ho=36284,Ur=36285,Go=36286;var $s=2300,Ca=2301,ya=2302,Cl=2303,Pl=2400,Il=2401,Dl=2402;var Gh=3200;var Fr=0,Vh=1,Bt="",Pt="srgb",Qs="srgb-linear",er="linear",ht="srgb";var ba=7680;var Wh=519,Xh=512,qh=513,jh=514,Vo=515,Yh=516,Zh=517,Wo=518,Jh=519,Kh=35044;var rc="300 es",An=2e3,ps=2001;function Jd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Kd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ms(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function $h(){let i=ms("canvas");return i.style.display="block",i}var Hc={},gs=null;function ac(...i){let e="THREE."+i.shift();gs?gs("log",e,...i):console.log(e,...i)}function Qh(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ve(...i){i=Qh(i);let e="THREE."+i.shift();if(gs)gs("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function je(...i){i=Qh(i);let e="THREE."+i.shift();if(gs)gs("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Di(...i){let e=i.join(" ");e in Hc||(Hc[e]=!0,Ve(...i))}function ed(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var td={[va]:Sa,[Ma]:Ta,[wa]:Ra,[fs]:Ea,[Sa]:va,[Ta]:Ma,[Ra]:wa,[Ea]:fs},Cn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gc=1234567,Ys=Math.PI/180,_s=180/Math.PI;function Gi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]).toLowerCase()}function Ke(i,e,t){return Math.max(e,Math.min(t,i))}function oc(i,e){return(i%e+e)%e}function $d(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Qd(i,e,t){return i!==e?(t-i)/(e-i):0}function Zs(i,e,t){return(1-t)*i+t*e}function eu(i,e,t,n){return Zs(i,e,1-Math.exp(-t*n))}function tu(i,e=1){return e-Math.abs(oc(i,e*2)-e)}function nu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function iu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function su(i,e){return i+Math.floor(Math.random()*(e-i+1))}function ru(i,e){return i+Math.random()*(e-i)}function au(i){return i*(.5-Math.random())}function ou(i){i!==void 0&&(Gc=i);let e=Gc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function lu(i){return i*Ys}function cu(i){return i*_s}function hu(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function du(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function uu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function fu(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*h,o*c);break;default:Ve("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ds(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function $t(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var tn={DEG2RAD:Ys,RAD2DEG:_s,generateUUID:Gi,clamp:Ke,euclideanModulo:oc,mapLinear:$d,inverseLerp:Qd,lerp:Zs,damp:eu,pingpong:tu,smoothstep:nu,smootherstep:iu,randInt:su,randFloat:ru,randFloatSpread:au,seededRandom:ou,degToRad:lu,radToDeg:cu,isPowerOfTwo:hu,ceilPowerOfTwo:du,floorPowerOfTwo:uu,setQuaternionFromProperEuler:fu,normalize:$t,denormalize:ds},fc=class fc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};fc.prototype.isVector2=!0;var le=fc,en=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(u!==v||l!==d||c!==f||h!==g){let m=l*d+c*f+h*g+u*v;m<0&&(d=-d,f=-f,g=-g,v=-v,m=-m);let p=1-o;if(m<.9995){let M=Math.acos(m),R=Math.sin(M);p=Math.sin(p*M)/R,o=Math.sin(o*M)/R,l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+v*o}else{l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+v*o;let M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-o*f,e[t+2]=c*g+h*f+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:Ve("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},pc=class pc{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return rl.copy(this).projectOnVector(e),this.sub(rl)}reflect(e){return this.sub(rl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};pc.prototype.isVector3=!0;var I=pc,rl=new I,Vc=new en,mc=class mc{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],M=s[1],R=s[4],b=s[7],w=s[2],S=s[5],A=s[8];return r[0]=a*v+o*M+l*w,r[3]=a*m+o*R+l*S,r[6]=a*p+o*b+l*A,r[1]=c*v+h*M+u*w,r[4]=c*m+h*R+u*S,r[7]=c*p+h*b+u*A,r[2]=d*v+f*M+g*w,r[5]=d*m+f*R+g*S,r[8]=d*p+f*b+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=u*v,e[1]=(s*c-h*n)*v,e[2]=(o*n-s*a)*v,e[3]=d*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Di("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(al.makeScale(e,t)),this}rotate(e){return Di("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(al.makeRotation(-e)),this}translate(e,t){return Di("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(al.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};mc.prototype.isMatrix3=!0;var Je=mc,al=new Je,Wc=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xc=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pu(){let i={enabled:!0,workingColorSpace:Qs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ht&&(s.r=Qn(s.r),s.g=Qn(s.g),s.b=Qn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ht&&(s.r=us(s.r),s.g=us(s.g),s.b=us(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Bt?er:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Di("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Di("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Qs]:{primaries:e,whitePoint:n,transfer:er,toXYZ:Wc,fromXYZ:Xc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Pt},outputColorSpaceConfig:{drawingBufferColorSpace:Pt}},[Pt]:{primaries:e,whitePoint:n,transfer:ht,toXYZ:Wc,fromXYZ:Xc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Pt}}}),i}var it=pu();function Qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function us(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ji,Pa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ji===void 0&&(Ji=ms("canvas")),Ji.width=e.width,Ji.height=e.height;let s=Ji.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ji}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ms("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Qn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Qn(t[n]/255)*255):t[n]=Qn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},mu=0,ys=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:mu++}),this.uuid=Gi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ol(s[a].image)):r.push(ol(s[a]))}else r=ol(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function ol(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Pa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ve("Texture: Unable to serialize Texture."),{})}var gu=0,ll=new I,qt=class i extends Cn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Bn,s=Bn,r=zt,a=Si,o=xn,l=rn,c=i.DEFAULT_ANISOTROPY,h=Bt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gu++}),this.uuid=Gi(),this.name="",this.source=new ys(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ll).x}get height(){return this.source.getSize(ll).y}get depth(){return this.source.getSize(ll).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ve(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ve(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$l)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ei:e.x=e.x-Math.floor(e.x);break;case Bn:e.x=e.x<0?0:1;break;case Aa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ei:e.y=e.y-Math.floor(e.y);break;case Bn:e.y=e.y<0?0:1;break;case Aa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=$l;qt.DEFAULT_ANISOTROPY=1;var gc=class gc{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let R=(c+1)/2,b=(f+1)/2,w=(p+1)/2,S=(h+d)/4,A=(u+v)/4,y=(g+m)/4;return R>b&&R>w?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=S/n,r=A/n):b>w?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=S/s,r=y/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=A/r,s=y/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-v)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};gc.prototype.isVector4=!0;var vt=gc,Ia=class extends Cn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new qt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new ys(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},sn=class extends Ia{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},tr=class extends qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Da=class extends qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var eo=class eo{constructor(e,t,n,s,r,a,o,l,c,h,u,d,f,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,d,f,g,v,m)}set(e,t,n,s,r,a,o,l,c,h,u,d,f,g,v,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new eo().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Ki.setFromMatrixColumn(e,0).length(),r=1/Ki.setFromMatrixColumn(e,1).length(),a=1/Ki.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,g=c*h,v=c*u;t[0]=d+v*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,g=c*h,v=c*u;t[0]=d-v*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=v-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-v*u}else if(e.order==="XZY"){let d=a*l,f=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_u,e,yu)}lookAt(e,t,n){let s=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),oi.crossVectors(n,cn),oi.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),oi.crossVectors(n,cn)),oi.normalize(),Jr.crossVectors(cn,oi),s[0]=oi.x,s[4]=Jr.x,s[8]=cn.x,s[1]=oi.y,s[5]=Jr.y,s[9]=cn.y,s[2]=oi.z,s[6]=Jr.z,s[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],M=n[3],R=n[7],b=n[11],w=n[15],S=s[0],A=s[4],y=s[8],T=s[12],C=s[1],D=s[5],F=s[9],O=s[13],P=s[2],B=s[6],V=s[10],W=s[14],Q=s[3],X=s[7],Z=s[11],ie=s[15];return r[0]=a*S+o*C+l*P+c*Q,r[4]=a*A+o*D+l*B+c*X,r[8]=a*y+o*F+l*V+c*Z,r[12]=a*T+o*O+l*W+c*ie,r[1]=h*S+u*C+d*P+f*Q,r[5]=h*A+u*D+d*B+f*X,r[9]=h*y+u*F+d*V+f*Z,r[13]=h*T+u*O+d*W+f*ie,r[2]=g*S+v*C+m*P+p*Q,r[6]=g*A+v*D+m*B+p*X,r[10]=g*y+v*F+m*V+p*Z,r[14]=g*T+v*O+m*W+p*ie,r[3]=M*S+R*C+b*P+w*Q,r[7]=M*A+R*D+b*B+w*X,r[11]=M*y+R*F+b*V+w*Z,r[15]=M*T+R*O+b*W+w*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15],M=l*f-c*d,R=o*f-c*u,b=o*d-l*u,w=a*f-c*h,S=a*d-l*h,A=a*u-o*h;return t*(v*M-m*R+p*b)-n*(g*M-m*w+p*S)+s*(g*R-v*w+p*A)-r*(g*b-v*S+m*A)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],M=t*o-n*a,R=t*l-s*a,b=t*c-r*a,w=n*l-s*o,S=n*c-r*o,A=s*c-r*l,y=h*v-u*g,T=h*m-d*g,C=h*p-f*g,D=u*m-d*v,F=u*p-f*v,O=d*p-f*m,P=M*O-R*F+b*D+w*C-S*T+A*y;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/P;return e[0]=(o*O-l*F+c*D)*B,e[1]=(s*F-n*O-r*D)*B,e[2]=(v*A-m*S+p*w)*B,e[3]=(d*S-u*A-f*w)*B,e[4]=(l*C-a*O-c*T)*B,e[5]=(t*O-s*C+r*T)*B,e[6]=(m*b-g*A-p*R)*B,e[7]=(h*A-d*b+f*R)*B,e[8]=(a*F-o*C+c*y)*B,e[9]=(n*C-t*F-r*y)*B,e[10]=(g*S-v*b+p*M)*B,e[11]=(u*b-h*S-f*M)*B,e[12]=(o*T-a*D-l*y)*B,e[13]=(t*D-n*T+s*y)*B,e[14]=(v*R-g*w-m*M)*B,e[15]=(h*w-u*R+d*M)*B,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,v=a*h,m=a*u,p=o*u,M=l*c,R=l*h,b=l*u,w=n.x,S=n.y,A=n.z;return s[0]=(1-(v+p))*w,s[1]=(f+b)*w,s[2]=(g-R)*w,s[3]=0,s[4]=(f-b)*S,s[5]=(1-(d+p))*S,s[6]=(m+M)*S,s[7]=0,s[8]=(g+R)*A,s[9]=(m-M)*A,s[10]=(1-(d+v))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Ki.set(s[0],s[1],s[2]).length(),o=Ki.set(s[4],s[5],s[6]).length(),l=Ki.set(s[8],s[9],s[10]).length();r<0&&(a=-a),En.copy(this);let c=1/a,h=1/o,u=1/l;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=u,En.elements[9]*=u,En.elements[10]*=u,t.setFromRotationMatrix(En),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=An,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===An)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===ps)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=An,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===An)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===ps)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};eo.prototype.isMatrix4=!0;var gt=eo,Ki=new I,En=new gt,_u=new I(0,0,0),yu=new I(1,1,1),oi=new I,Jr=new I,cn=new I,qc=new gt,jc=new en,zn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return qc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jc.setFromEuler(this),this.setFromQuaternion(jc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};zn.DEFAULT_ORDER="XYZ";var nr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},bu=0,Yc=new I,$i=new en,Yn=new gt,Kr=new I,Hs=new I,xu=new I,vu=new en,Zc=new I(1,0,0),Jc=new I(0,1,0),Kc=new I(0,0,1),$c={type:"added"},Su={type:"removed"},Qi={type:"childadded",child:null},cl={type:"childremoved",child:null},Ft=class i extends Cn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bu++}),this.uuid=Gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new I,t=new zn,n=new en,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new gt},normalMatrix:{value:new Je}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.multiply($i),this}rotateOnWorldAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.premultiply($i),this}rotateX(e){return this.rotateOnAxis(Zc,e)}rotateY(e){return this.rotateOnAxis(Jc,e)}rotateZ(e){return this.rotateOnAxis(Kc,e)}translateOnAxis(e,t){return Yc.copy(e).applyQuaternion(this.quaternion),this.position.add(Yc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zc,e)}translateY(e){return this.translateOnAxis(Jc,e)}translateZ(e){return this.translateOnAxis(Kc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Kr.copy(e):Kr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(Hs,Kr,this.up):Yn.lookAt(Kr,Hs,this.up),this.quaternion.setFromRotationMatrix(Yn),s&&(Yn.extractRotation(s.matrixWorld),$i.setFromRotationMatrix(Yn),this.quaternion.premultiply($i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($c),Qi.child=e,this.dispatchEvent(Qi),Qi.child=null):je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Su),cl.child=e,this.dispatchEvent(cl),cl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($c),Qi.child=e,this.dispatchEvent(Qi),Qi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,e,xu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,vu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ft.DEFAULT_UP=new I(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var nt=class extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}},Mu={type:"move"},bs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Mu)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new nt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},nd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},$r={h:0,s:0,l:0};function hl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var We=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=it.workingColorSpace){return this.r=e,this.g=t,this.b=n,it.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=it.workingColorSpace){if(e=oc(e,1),t=Ke(t,0,1),n=Ke(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=hl(a,r,e+1/3),this.g=hl(a,r,e),this.b=hl(a,r,e-1/3)}return it.colorSpaceToWorking(this,s),this}setStyle(e,t=Pt){function n(r){r!==void 0&&parseFloat(r)<1&&Ve("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ve("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pt){let n=nd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qn(e.r),this.g=Qn(e.g),this.b=Qn(e.b),this}copyLinearToSRGB(e){return this.r=us(e.r),this.g=us(e.g),this.b=us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return it.workingToColorSpace(Xt.copy(this),e),Math.round(Ke(Xt.r*255,0,255))*65536+Math.round(Ke(Xt.g*255,0,255))*256+Math.round(Ke(Xt.b*255,0,255))}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(Xt.copy(this),t);let n=Xt.r,s=Xt.g,r=Xt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Pt){it.workingToColorSpace(Xt.copy(this),e);let t=Xt.r,n=Xt.g,s=Xt.b;return e!==Pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(li),this.setHSL(li.h+e,li.s+t,li.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(li),e.getHSL($r);let n=Zs(li.h,$r.h,t),s=Zs(li.s,$r.s,t),r=Zs(li.l,$r.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xt=new We;We.NAMES=nd;var Li=class extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Tn=new I,Zn=new I,dl=new I,Jn=new I,es=new I,ts=new I,Qc=new I,ul=new I,fl=new I,pl=new I,ml=new vt,gl=new vt,_l=new vt,ui=class i{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Tn.subVectors(e,t),s.cross(Tn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Tn.subVectors(s,t),Zn.subVectors(n,t),dl.subVectors(e,t);let a=Tn.dot(Tn),o=Tn.dot(Zn),l=Tn.dot(dl),c=Zn.dot(Zn),h=Zn.dot(dl),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Jn.x),l.addScaledVector(a,Jn.y),l.addScaledVector(o,Jn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return ml.setScalar(0),gl.setScalar(0),_l.setScalar(0),ml.fromBufferAttribute(e,t),gl.fromBufferAttribute(e,n),_l.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ml,r.x),a.addScaledVector(gl,r.y),a.addScaledVector(_l,r.z),a}static isFrontFacing(e,t,n,s){return Tn.subVectors(n,t),Zn.subVectors(e,t),Tn.cross(Zn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),Tn.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;es.subVectors(s,n),ts.subVectors(r,n),ul.subVectors(e,n);let l=es.dot(ul),c=ts.dot(ul);if(l<=0&&c<=0)return t.copy(n);fl.subVectors(e,s);let h=es.dot(fl),u=ts.dot(fl);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(es,a);pl.subVectors(e,r);let f=es.dot(pl),g=ts.dot(pl);if(g>=0&&f<=g)return t.copy(r);let v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(ts,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Qc.subVectors(r,s),o=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Qc,o);let p=1/(m+v+d);return a=v*p,o=d*p,t.copy(n).addScaledVector(es,a).addScaledVector(ts,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Pn=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Rn):Rn.fromBufferAttribute(r,a),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qr.copy(n.boundingBox)),Qr.applyMatrix4(e.matrixWorld),this.union(Qr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gs),ea.subVectors(this.max,Gs),ns.subVectors(e.a,Gs),is.subVectors(e.b,Gs),ss.subVectors(e.c,Gs),ci.subVectors(is,ns),hi.subVectors(ss,is),Ri.subVectors(ns,ss);let t=[0,-ci.z,ci.y,0,-hi.z,hi.y,0,-Ri.z,Ri.y,ci.z,0,-ci.x,hi.z,0,-hi.x,Ri.z,0,-Ri.x,-ci.y,ci.x,0,-hi.y,hi.x,0,-Ri.y,Ri.x,0];return!yl(t,ns,is,ss,ea)||(t=[1,0,0,0,1,0,0,0,1],!yl(t,ns,is,ss,ea))?!1:(ta.crossVectors(ci,hi),t=[ta.x,ta.y,ta.z],yl(t,ns,is,ss,ea))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Kn=[new I,new I,new I,new I,new I,new I,new I,new I],Rn=new I,Qr=new Pn,ns=new I,is=new I,ss=new I,ci=new I,hi=new I,Ri=new I,Gs=new I,ea=new I,ta=new I,Ai=new I;function yl(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ai.fromArray(i,r);let o=s.x*Math.abs(Ai.x)+s.y*Math.abs(Ai.y)+s.z*Math.abs(Ai.z),l=e.dot(Ai),c=t.dot(Ai),h=n.dot(Ai);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ct=new I,na=new le,wu=0,Qt=class extends Cn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Kh,this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)na.fromBufferAttribute(this,t),na.applyMatrix3(e),this.setXY(t,na.x,na.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ds(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ds(t,this.array)),t}setX(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ds(t,this.array)),t}setY(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ds(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ds(t,this.array)),t}setW(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array),s=$t(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array),s=$t(s,this.array),r=$t(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var ir=class extends Qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var sr=class extends Qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var dt=class extends Qt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Eu=new Pn,Vs=new I,bl=new I,fi=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Eu.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vs.subVectors(e,this.center);let t=Vs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Vs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vs.copy(e.center).add(bl)),this.expandByPoint(Vs.copy(e.center).sub(bl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Tu=0,_n=new gt,xl=new Ft,rs=new I,hn=new Pn,Ws=new Pn,Nt=new I,Ot=class i extends Cn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tu++}),this.uuid=Gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jd(e)?sr:ir)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,t,n){return _n.makeTranslation(e,t,n),this.applyMatrix4(_n),this}scale(e,t,n){return _n.makeScale(e,t,n),this.applyMatrix4(_n),this}lookAt(e){return xl.lookAt(e),xl.updateMatrix(),this.applyMatrix4(xl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new dt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ws.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(hn.min,Ws.min),hn.expandByPoint(Nt),Nt.addVectors(hn.max,Ws.max),hn.expandByPoint(Nt)):(hn.expandByPoint(Ws.min),hn.expandByPoint(Ws.max))}hn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Nt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Nt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Nt.fromBufferAttribute(o,c),l&&(rs.fromBufferAttribute(e,c),Nt.add(rs)),s=Math.max(s,n.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Qt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let y=0;y<n.count;y++)o[y]=new I,l[y]=new I;let c=new I,h=new I,u=new I,d=new le,f=new le,g=new le,v=new I,m=new I;function p(y,T,C){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,C),d.fromBufferAttribute(r,y),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,C),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(D),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(D),o[y].add(v),o[T].add(v),o[C].add(v),l[y].add(m),l[T].add(m),l[C].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let y=0,T=M.length;y<T;++y){let C=M[y],D=C.start,F=C.count;for(let O=D,P=D+F;O<P;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let R=new I,b=new I,w=new I,S=new I;function A(y){w.fromBufferAttribute(s,y),S.copy(w);let T=o[y];R.copy(T),R.sub(w.multiplyScalar(w.dot(T))).normalize(),b.crossVectors(S,T);let D=b.dot(l[y])<0?-1:1;a.setXYZW(y,R.x,R.y,R.z,D)}for(let y=0,T=M.length;y<T;++y){let C=M[y],D=C.start,F=C.count;for(let O=D,P=D+F;O<P;O+=3)A(e.getX(O+0)),A(e.getX(O+1)),A(e.getX(O+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,u=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Qt(d,h,u)}if(this.index===null)return Ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var vl=new I,Ru=new I,Au=new Je,dn=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=vl.subVectors(n,t).cross(Ru.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(vl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Au.getNormalMatrix(e),s=this.coplanarPoint(vl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Cu=0,Hn=class extends Cn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cu++}),this.uuid=Gi(),this.name="",this.type="Material",this.blending=Is,this.side=Wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wl,this.blendDst=Xl,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ba,this.stencilZFail=ba,this.stencilZPass=ba,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ve(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ve(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new We().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new dn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new le().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new le().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var $n=new I,Sl=new I,ia=new I,sa=new I,xs=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=$n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($n.copy(this.origin).addScaledVector(this.direction,t),$n.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Sl.copy(e).add(t).multiplyScalar(.5),ia.copy(t).sub(e).normalize(),sa.copy(this.origin).sub(Sl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(ia),o=sa.dot(this.direction),l=-sa.dot(ia),c=sa.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let v=1/h;u*=v,d*=v,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Sl).addScaledVector(ia,d),f}intersectSphere(e,t){if(e.radius<0)return null;$n.subVectors(e.center,this.origin);let n=$n.dot(this.direction),s=$n.dot($n)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,$n)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,g=t.x-a.x,v=t.y-a.y,m=t.z-a.z,p=n.x-a.x,M=n.y-a.y,R=n.z-a.z,b=Math.abs(l),w=Math.abs(c),S=Math.abs(h),A,y,T,C,D,F,O,P,B,V,W,Q;if(b>=w&&b>=S?(T=l,F=u,B=g,Q=p,l>=0?(A=c,y=h,C=d,D=f,O=v,P=m,V=M,W=R):(A=h,y=c,C=f,D=d,O=m,P=v,V=R,W=M)):w>=S?(T=c,F=d,B=v,Q=M,c>=0?(A=h,y=l,C=f,D=u,O=m,P=g,V=R,W=p):(A=l,y=h,C=u,D=f,O=g,P=m,V=p,W=R)):(T=h,F=f,B=m,Q=R,h>=0?(A=l,y=c,C=u,D=d,O=g,P=v,V=p,W=M):(A=c,y=l,C=d,D=u,O=v,P=g,V=M,W=p)),T===0)return null;let X=A/T,Z=y/T,ie=1/T,ge=C-X*F,_e=D-Z*F,ze=O-X*B,Xe=P-Z*B,qe=V-X*Q,q=W-Z*Q,J=qe*Xe-q*ze,be=ge*q-_e*qe,Se=ze*_e-Xe*ge;if(s){if(J<0||be<0||Se<0)return null}else if((J<0||be<0||Se<0)&&(J>0||be>0||Se>0))return null;let ye=J+be+Se;if(ye===0)return null;let Ue=ie*(J*F+be*B+Se*Q);return(ye>0?Ue<0:Ue>0)?null:this.at(Ue/ye,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ni=class extends Hn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=to,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},eh=new gt,Ci=new xs,ra=new fi,th=new I,aa=new I,oa=new I,la=new I,Ml=new I,ca=new I,nh=new I,ha=new I,Ge=class extends Ft{constructor(e=new Ot,t=new Ni){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ca.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Ml.fromBufferAttribute(u,e),a?ca.addScaledVector(Ml,h):ca.addScaledVector(Ml.sub(t),h))}t.add(ca)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ra.copy(n.boundingSphere),ra.applyMatrix4(r),Ci.copy(e.ray).recast(e.near),!(ra.containsPoint(Ci.origin)===!1&&(Ci.intersectSphere(ra,th)===null||Ci.origin.distanceToSquared(th)>(e.far-e.near)**2))&&(eh.copy(r).invert(),Ci.copy(e.ray).applyMatrix4(eh),!(n.boundingBox!==null&&Ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ci)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let m=d[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),R=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let b=M,w=R;b<w;b+=3){let S=o.getX(b),A=o.getX(b+1),y=o.getX(b+2);s=da(this,p,e,n,c,h,u,S,A,y),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let M=o.getX(m),R=o.getX(m+1),b=o.getX(m+2);s=da(this,a,e,n,c,h,u,M,R,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let m=d[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),R=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=M,w=R;b<w;b+=3){let S=b,A=b+1,y=b+2;s=da(this,p,e,n,c,h,u,S,A,y),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let M=m,R=m+1,b=m+2;s=da(this,a,e,n,c,h,u,M,R,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Pu(i,e,t,n,s,r,a,o){let l;if(e.side===Ht?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Wn,o),l===null)return null;ha.copy(o),ha.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ha);return c<t.near||c>t.far?null:{distance:c,point:ha.clone(),object:i}}function da(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,aa),i.getVertexPosition(l,oa),i.getVertexPosition(c,la);let h=Pu(i,e,t,n,aa,oa,la,nh);if(h){let u=new I;ui.getBarycoord(nh,aa,oa,la,u),s&&(h.uv=ui.getInterpolatedAttribute(s,o,l,c,u,new le)),r&&(h.uv1=ui.getInterpolatedAttribute(r,o,l,c,u,new le)),a&&(h.normal=ui.getInterpolatedAttribute(a,o,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new I,materialIndex:0};ui.getNormal(aa,oa,la,d.normal),h.face=d,h.barycoord=u}return h}var rr=class extends qt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Ut,h=Ut,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vs=class extends Qt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},as=new gt,ih=new gt,ua=[],sh=new Pn,Iu=new gt,Xs=new Ge,qs=new fi,ar=class extends Ge{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new vs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Iu)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Pn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,as),sh.copy(e.boundingBox).applyMatrix4(as),this.boundingBox.union(sh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new fi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,as),qs.copy(e.boundingSphere).applyMatrix4(as),this.boundingSphere.union(qs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Xs.geometry=this.geometry,Xs.material=this.material,Xs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qs.copy(this.boundingSphere),qs.applyMatrix4(n),e.ray.intersectsSphere(qs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,as),ih.multiplyMatrices(n,as),Xs.matrixWorld=ih,Xs.raycast(e,ua);for(let a=0,o=ua.length;a<o;a++){let l=ua[a];l.instanceId=r,l.object=this,t.push(l)}ua.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new vs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new rr(new Float32Array(s*this.count),s,this.count,lo,bn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Pi=new fi,Du=new le(.5,.5),fa=new I,Ss=class{constructor(e=new dn,t=new dn,n=new dn,s=new dn,r=new dn,a=new dn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=An,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],v=r[9],m=r[10],p=r[11],M=r[12],R=r[13],b=r[14],w=r[15];if(s[0].setComponents(c-a,f-h,p-g,w-M).normalize(),s[1].setComponents(c+a,f+h,p+g,w+M).normalize(),s[2].setComponents(c+o,f+u,p+v,w+R).normalize(),s[3].setComponents(c-o,f-u,p-v,w-R).normalize(),n)s[4].setComponents(l,d,m,b).normalize(),s[5].setComponents(c-l,f-d,p-m,w-b).normalize();else if(s[4].setComponents(c-l,f-d,p-m,w-b).normalize(),t===An)s[5].setComponents(c+l,f+d,p+m,w+b).normalize();else if(t===ps)s[5].setComponents(l,d,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(e){Pi.center.set(0,0,0);let t=Du.distanceTo(e.center);return Pi.radius=.7071067811865476+t,Pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(fa.x=s.normal.x>0?e.max.x:e.min.x,fa.y=s.normal.y>0?e.max.y:e.min.y,fa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(fa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var or=class extends qt{constructor(e=[],t=vi,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},lr=class extends qt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var pi=class extends qt{constructor(e,t,n=Dn,s,r,a,o=Ut,l=Ut,c,h=kn,u=1){if(h!==kn&&h!==Mi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ys(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},La=class extends pi{constructor(e,t=Dn,n=vi,s,r,a=Ut,o=Ut,l,c=kn){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},cr=class extends qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},jt=class i extends Ot{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(u,2));function g(v,m,p,M,R,b,w,S,A,y,T){let C=b/A,D=w/y,F=b/2,O=w/2,P=S/2,B=A+1,V=y+1,W=0,Q=0,X=new I;for(let Z=0;Z<V;Z++){let ie=Z*D-O;for(let ge=0;ge<B;ge++){let _e=ge*C-F;X[v]=_e*M,X[m]=ie*R,X[p]=P,c.push(X.x,X.y,X.z),X[v]=0,X[m]=0,X[p]=S>0?1:-1,h.push(X.x,X.y,X.z),u.push(ge/A),u.push(1-Z/y),W+=1}}for(let Z=0;Z<y;Z++)for(let ie=0;ie<A;ie++){let ge=d+ie+B*Z,_e=d+ie+B*(Z+1),ze=d+(ie+1)+B*(Z+1),Xe=d+(ie+1)+B*Z;l.push(ge,_e,Xe),l.push(_e,ze,Xe),Q+=6}o.addGroup(f,Q,T),f+=Q,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var rt=class i extends Ot{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,v=[],m=n/2,p=0;M(),a===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(h),this.setAttribute("position",new dt(u,3)),this.setAttribute("normal",new dt(d,3)),this.setAttribute("uv",new dt(f,2));function M(){let b=new I,w=new I,S=0,A=(t-e)/n;for(let y=0;y<=r;y++){let T=[],C=y/r,D=C*(t-e)+e;for(let F=0;F<=s;F++){let O=F/s,P=O*l+o,B=Math.sin(P),V=Math.cos(P);w.x=D*B,w.y=-C*n+m,w.z=D*V,u.push(w.x,w.y,w.z),b.set(B,A,V).normalize(),d.push(b.x,b.y,b.z),f.push(O,1-C),T.push(g++)}v.push(T)}for(let y=0;y<s;y++)for(let T=0;T<r;T++){let C=v[T][y],D=v[T+1][y],F=v[T+1][y+1],O=v[T][y+1];(e>0||T!==0)&&(h.push(C,D,O),S+=3),(t>0||T!==r-1)&&(h.push(D,F,O),S+=3)}c.addGroup(p,S,0),p+=S}function R(b){let w=g,S=new le,A=new I,y=0,T=b===!0?e:t,C=b===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,m*C,0),d.push(0,C,0),f.push(.5,.5),g++;let D=g;for(let F=0;F<=s;F++){let P=F/s*l+o,B=Math.cos(P),V=Math.sin(P);A.x=T*V,A.y=m*C,A.z=T*B,u.push(A.x,A.y,A.z),d.push(0,C,0),S.x=B*.5+.5,S.y=V*.5*C+.5,f.push(S.x,S.y),g++}for(let F=0;F<s;F++){let O=w+F,P=D+F;b===!0?h.push(P,P+1,O):h.push(P+1,P,O),y+=3}c.addGroup(p,y,b===!0?1:2),p+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var un=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ve("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new le:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new I,s=[],r=[],a=[],o=new I,l=new gt;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Ke(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Ke(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ms=class extends un{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new le){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Na=class extends Ms{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function lc(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var rh=new I,ah=new I,wl=new lc,El=new lc,Tl=new lc,Gn=class extends un{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new I){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(ah.subVectors(s[0],s[1]).add(s[0]),c=ah);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(rh.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=rh),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),wl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,v,m),El.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,v,m),Tl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(wl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),El.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Tl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(wl.calc(l),El.calc(l),Tl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function oh(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Lu(i,e){let t=1-i;return t*t*e}function Nu(i,e){return 2*(1-i)*i*e}function Uu(i,e){return i*i*e}function Js(i,e,t,n){return Lu(i,e)+Nu(i,t)+Uu(i,n)}function Fu(i,e){let t=1-i;return t*t*t*e}function Ou(i,e){let t=1-i;return 3*t*t*i*e}function Bu(i,e){return 3*(1-i)*i*i*e}function ku(i,e){return i*i*i*e}function Ks(i,e,t,n,s){return Fu(i,e)+Ou(i,t)+Bu(i,n)+ku(i,s)}var hr=class extends un{constructor(e=new le,t=new le,n=new le,s=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new le){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ks(e,s.x,r.x,a.x,o.x),Ks(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ua=class extends un{constructor(e=new I,t=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new I){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ks(e,s.x,r.x,a.x,o.x),Ks(e,s.y,r.y,a.y,o.y),Ks(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},dr=class extends un{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fa=class extends un{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ur=class extends un{constructor(e=new le,t=new le,n=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new le){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Js(e,s.x,r.x,a.x),Js(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fr=class extends un{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Js(e,s.x,r.x,a.x),Js(e,s.y,r.y,a.y),Js(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},pr=class extends un{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(oh(o,l.x,c.x,h.x,u.x),oh(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new le().fromArray(s))}return this}},Oa=Object.freeze({__proto__:null,ArcCurve:Na,CatmullRomCurve3:Gn,CubicBezierCurve:hr,CubicBezierCurve3:Ua,EllipseCurve:Ms,LineCurve:dr,LineCurve3:Fa,QuadraticBezierCurve:ur,QuadraticBezierCurve3:fr,SplineCurve:pr}),Ba=class extends un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Oa[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Oa[s.type]().fromJSON(s))}return this}},mr=class extends Ba{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new dr(this.currentPoint.clone(),new le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new ur(this.currentPoint.clone(),new le(e,t),new le(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new hr(this.currentPoint.clone(),new le(e,t),new le(n,s),new le(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new pr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Ms(e,t,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ws=class extends mr{constructor(e){super(e),this.uuid=Gi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new mr().fromJSON(s))}return this}};function zu(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=id(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Xu(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let h=o,u=l;for(let d=t;d<s;d+=t){let f=i[d],g=i[d+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return gr(r,a,t,o,l,c,0),a}function id(i,e,t,n,s){let r;if(s===nf(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=lh(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=lh(a/n|0,i[a],i[a+1],r);return r&&Es(r,r.next)&&(yr(r),r=r.next),r}function Ui(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Es(t,t.next)||Mt(t.prev,t,t.next)===0)){if(yr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function gr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Ju(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Gu(i,n,s,r):Hu(i)){e.push(l.i,i.i,c.i),yr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Vu(Ui(i),e),gr(i,e,t,n,s,r,2)):a===2&&Wu(i,e,t,n,s,r):gr(Ui(i),e,t,n,s,r,1);break}}}function Hu(i){let e=i.prev,t=i,n=i.next;if(Mt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),d=Math.max(s,r,a),f=Math.max(o,l,c),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&js(s,o,r,l,a,c,g.x,g.y)&&Mt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Gu(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Mt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=Math.min(o,l,c),g=Math.min(h,u,d),v=Math.max(o,l,c),m=Math.max(h,u,d),p=Ll(f,g,e,t,n),M=Ll(v,m,e,t,n),R=i.prevZ,b=i.nextZ;for(;R&&R.z>=p&&b&&b.z<=M;){if(R.x>=f&&R.x<=v&&R.y>=g&&R.y<=m&&R!==s&&R!==a&&js(o,h,l,u,c,d,R.x,R.y)&&Mt(R.prev,R,R.next)>=0||(R=R.prevZ,b.x>=f&&b.x<=v&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&js(o,h,l,u,c,d,b.x,b.y)&&Mt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;R&&R.z>=p;){if(R.x>=f&&R.x<=v&&R.y>=g&&R.y<=m&&R!==s&&R!==a&&js(o,h,l,u,c,d,R.x,R.y)&&Mt(R.prev,R,R.next)>=0)return!1;R=R.prevZ}for(;b&&b.z<=M;){if(b.x>=f&&b.x<=v&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&js(o,h,l,u,c,d,b.x,b.y)&&Mt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Vu(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Es(n,s)&&rd(n,t,t.next,s)&&_r(n,s)&&_r(s,n)&&(e.push(n.i,t.i,s.i),yr(t),yr(t.next),t=i=s),t=t.next}while(t!==i);return Ui(t)}function Wu(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Qu(a,o)){let l=ad(a,o);a=Ui(a,a.next),l=Ui(l,l.next),gr(a,e,t,n,s,r,0),gr(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Xu(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=id(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push($u(c))}s.sort(qu);for(let r=0;r<s.length;r++)t=ju(s[r],t);return t}function qu(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function ju(i,e){let t=Yu(i,e);if(!t)return e;let n=ad(t,i);return Ui(n,n.next),Ui(t,t.next)}function Yu(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Es(i,t))return t;do{if(Es(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&sd(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);_r(t,i)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&Zu(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function Zu(i,e){return Mt(i.prev,i,e.prev)<0&&Mt(e.next,i,i.next)<0}function Ju(i,e,t,n){let s=i;do s.z===0&&(s.z=Ll(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Ku(s)}function Ku(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Ll(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function $u(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function sd(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function js(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&sd(i,e,t,n,s,r,a,o)}function Qu(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!ef(i,e)&&(_r(i,e)&&_r(e,i)&&tf(i,e)&&(Mt(i.prev,i,e.prev)||Mt(i,e.prev,e))||Es(i,e)&&Mt(i.prev,i,i.next)>0&&Mt(e.prev,e,e.next)>0)}function Mt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Es(i,e){return i.x===e.x&&i.y===e.y}function rd(i,e,t,n){let s=ma(Mt(i,e,t)),r=ma(Mt(i,e,n)),a=ma(Mt(t,n,i)),o=ma(Mt(t,n,e));return!!(s!==r&&a!==o||s===0&&pa(i,t,e)||r===0&&pa(i,n,e)||a===0&&pa(t,i,n)||o===0&&pa(t,e,n))}function pa(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ma(i){return i>0?1:i<0?-1:0}function ef(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&rd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function _r(i,e){return Mt(i.prev,i,i.next)<0?Mt(i,e,i.next)>=0&&Mt(i,i.prev,e)>=0:Mt(i,e,i.prev)<0||Mt(i,i.next,e)<0}function tf(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function ad(i,e){let t=Nl(i.i,i.x,i.y),n=Nl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function lh(i,e,t,n){let s=Nl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function yr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Nl(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function nf(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Ul=class{static triangulate(e,t,n=2){return zu(e,t,n)}},Ii=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];ch(e),hh(n,e);let a=e.length;t.forEach(ch);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,hh(n,t[l]);let o=Ul.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function ch(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function hh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var br=class i extends Ot{constructor(e=new ws([new le(.5,.5),new le(-.5,.5),new le(-.5,-.5),new le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new dt(s,3)),this.setAttribute("uv",new dt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:sf,R,b=!1,w,S,A,y;if(p){R=p.getSpacedPoints(h),b=!0,d=!1;let te=p.isCatmullRomCurve3?p.closed:!1;w=p.computeFrenetFrames(h,te),S=new I,A=new I,y=new I}d||(m=0,f=0,g=0,v=0);let T=o.extractPoints(c),C=T.shape,D=T.holes;if(!Ii.isClockWise(C)){C=C.reverse();for(let te=0,oe=D.length;te<oe;te++){let ae=D[te];Ii.isClockWise(ae)&&(D[te]=ae.reverse())}}function O(te){let ae=10000000000000001e-36,re=te[0];for(let ne=1;ne<=te.length;ne++){let we=ne%te.length,Ne=te[we],Le=Ne.x-re.x,Oe=Ne.y-re.y,L=Le*Le+Oe*Oe,et=Math.max(Math.abs(Ne.x),Math.abs(Ne.y),Math.abs(re.x),Math.abs(re.y)),Ye=ae*et*et;if(L<=Ye){te.splice(we,1),ne--;continue}re=Ne}}O(C),D.forEach(O);let P=D.length,B=C;for(let te=0;te<P;te++){let oe=D[te];C=C.concat(oe)}function V(te,oe,ae){return oe||je("ExtrudeGeometry: vec does not exist"),te.clone().addScaledVector(oe,ae)}let W=C.length;function Q(te,oe,ae){let re,ne,we,Ne=te.x-oe.x,Le=te.y-oe.y,Oe=ae.x-te.x,L=ae.y-te.y,et=Ne*Ne+Le*Le,Ye=Ne*L-Le*Oe;if(Math.abs(Ye)>Number.EPSILON){let E=Math.sqrt(et),_=Math.sqrt(Oe*Oe+L*L),k=oe.x-Le/E,G=oe.y+Ne/E,Y=ae.x-L/_,ce=ae.y+Oe/_,he=((Y-k)*L-(ce-G)*Oe)/(Ne*L-Le*Oe);re=k+Ne*he-te.x,ne=G+Le*he-te.y;let K=re*re+ne*ne;if(K<=2)return new le(re,ne);we=Math.sqrt(K/2)}else{let E=!1;Ne>Number.EPSILON?Oe>Number.EPSILON&&(E=!0):Ne<-Number.EPSILON?Oe<-Number.EPSILON&&(E=!0):Math.sign(Le)===Math.sign(L)&&(E=!0),E?(re=-Le,ne=Ne,we=Math.sqrt(et)):(re=Ne,ne=Le,we=Math.sqrt(et/2))}return new le(re/we,ne/we)}let X=[];for(let te=0,oe=B.length,ae=oe-1,re=te+1;te<oe;te++,ae++,re++)ae===oe&&(ae=0),re===oe&&(re=0),X[te]=Q(B[te],B[ae],B[re]);let Z=[],ie,ge=X.concat();for(let te=0,oe=P;te<oe;te++){let ae=D[te];ie=[];for(let re=0,ne=ae.length,we=ne-1,Ne=re+1;re<ne;re++,we++,Ne++)we===ne&&(we=0),Ne===ne&&(Ne=0),ie[re]=Q(ae[re],ae[we],ae[Ne]);Z.push(ie),ge=ge.concat(ie)}let _e;if(m===0)_e=Ii.triangulateShape(B,D);else{let te=[],oe=[];for(let ae=0;ae<m;ae++){let re=ae/m,ne=f*Math.cos(re*Math.PI/2),we=g*Math.sin(re*Math.PI/2)+v;for(let Ne=0,Le=B.length;Ne<Le;Ne++){let Oe=V(B[Ne],X[Ne],we);be(Oe.x,Oe.y,-ne),re===0&&te.push(Oe)}for(let Ne=0,Le=P;Ne<Le;Ne++){let Oe=D[Ne];ie=Z[Ne];let L=[];for(let et=0,Ye=Oe.length;et<Ye;et++){let E=V(Oe[et],ie[et],we);be(E.x,E.y,-ne),re===0&&L.push(E)}re===0&&oe.push(L)}}_e=Ii.triangulateShape(te,oe)}let ze=_e.length,Xe=g+v;for(let te=0;te<W;te++){let oe=d?V(C[te],ge[te],Xe):C[te];b?(A.copy(w.normals[0]).multiplyScalar(oe.x),S.copy(w.binormals[0]).multiplyScalar(oe.y),y.copy(R[0]).add(A).add(S),be(y.x,y.y,y.z)):be(oe.x,oe.y,0)}for(let te=1;te<=h;te++)for(let oe=0;oe<W;oe++){let ae=d?V(C[oe],ge[oe],Xe):C[oe];b?(A.copy(w.normals[te]).multiplyScalar(ae.x),S.copy(w.binormals[te]).multiplyScalar(ae.y),y.copy(R[te]).add(A).add(S),be(y.x,y.y,y.z)):be(ae.x,ae.y,u/h*te)}for(let te=m-1;te>=0;te--){let oe=te/m,ae=f*Math.cos(oe*Math.PI/2),re=g*Math.sin(oe*Math.PI/2)+v;for(let ne=0,we=B.length;ne<we;ne++){let Ne=V(B[ne],X[ne],re);be(Ne.x,Ne.y,u+ae)}for(let ne=0,we=D.length;ne<we;ne++){let Ne=D[ne];ie=Z[ne];for(let Le=0,Oe=Ne.length;Le<Oe;Le++){let L=V(Ne[Le],ie[Le],re);b?be(L.x,L.y+R[h-1].y,R[h-1].x+ae):be(L.x,L.y,u+ae)}}}qe(),q();function qe(){let te=s.length/3;if(d){let oe=0,ae=W*oe;for(let re=0;re<ze;re++){let ne=_e[re];Se(ne[2]+ae,ne[1]+ae,ne[0]+ae)}oe=h+m*2,ae=W*oe;for(let re=0;re<ze;re++){let ne=_e[re];Se(ne[0]+ae,ne[1]+ae,ne[2]+ae)}}else{for(let oe=0;oe<ze;oe++){let ae=_e[oe];Se(ae[2],ae[1],ae[0])}for(let oe=0;oe<ze;oe++){let ae=_e[oe];Se(ae[0]+W*h,ae[1]+W*h,ae[2]+W*h)}}n.addGroup(te,s.length/3-te,0)}function q(){let te=s.length/3,oe=0;J(B,oe),oe+=B.length;for(let ae=0,re=D.length;ae<re;ae++){let ne=D[ae];J(ne,oe),oe+=ne.length}n.addGroup(te,s.length/3-te,1)}function J(te,oe){let ae=te.length;for(;--ae>=0;){let re=ae,ne=ae-1;ne<0&&(ne=te.length-1);for(let we=0,Ne=h+m*2;we<Ne;we++){let Le=W*we,Oe=W*(we+1),L=oe+re+Le,et=oe+ne+Le,Ye=oe+ne+Oe,E=oe+re+Oe;ye(L,et,Ye,E)}}}function be(te,oe,ae){l.push(te),l.push(oe),l.push(ae)}function Se(te,oe,ae){Ue(te),Ue(oe),Ue(ae);let re=s.length/3,ne=M.generateTopUV(n,s,re-3,re-2,re-1);st(ne[0]),st(ne[1]),st(ne[2])}function ye(te,oe,ae,re){Ue(te),Ue(oe),Ue(re),Ue(oe),Ue(ae),Ue(re);let ne=s.length/3,we=M.generateSideWallUV(n,s,ne-6,ne-3,ne-2,ne-1);st(we[0]),st(we[1]),st(we[3]),st(we[1]),st(we[2]),st(we[3])}function Ue(te){s.push(l[te*3+0]),s.push(l[te*3+1]),s.push(l[te*3+2])}function st(te){r.push(te.x),r.push(te.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return rf(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Oa[s.type]().fromJSON(s)),new i(n,e.options)}},sf={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new le(r,a),new le(o,l),new le(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],v=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new le(a,1-l),new le(c,1-u),new le(d,1-g),new le(v,1-p)]:[new le(o,1-l),new le(h,1-u),new le(f,1-g),new le(m,1-p)]}};function rf(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Fi=class i extends Ot{constructor(e=[new le(0,-.5),new le(.5,0),new le(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Ke(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,u=new I,d=new le,f=new I,g=new I,v=new I,m=0,p=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:m=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:m=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(g)}for(let M=0;M<=t;M++){let R=n+M*h*s,b=Math.sin(R),w=Math.cos(R);for(let S=0;S<=e.length-1;S++){u.x=e[S].x*b,u.y=e[S].y,u.z=e[S].x*w,a.push(u.x,u.y,u.z),d.x=M/t,d.y=S/(e.length-1),o.push(d.x,d.y);let A=l[3*S+0]*b,y=l[3*S+1],T=l[3*S+0]*w;c.push(A,y,T)}}for(let M=0;M<t;M++)for(let R=0;R<e.length-1;R++){let b=R+M*e.length,w=b,S=b+e.length,A=b+e.length+1,y=b+1;r.push(w,S,y),r.push(A,y,S)}this.setIndex(r),this.setAttribute("position",new dt(a,3)),this.setAttribute("uv",new dt(o,2)),this.setAttribute("normal",new dt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Oi=class i extends Ot{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){let M=p*d-a;for(let R=0;R<c;R++){let b=R*u-r;g.push(b,-M,0),v.push(0,0,1),m.push(R/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){let R=M+c*p,b=M+c*(p+1),w=M+1+c*(p+1),S=M+1+c*p;f.push(R,b,S),f.push(b,w,S)}this.setIndex(f),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(v,3)),this.setAttribute("uv",new dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var mi=class i extends Ot{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new I,d=new I,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){let M=[],R=p/n,b=a+R*o,w=e*Math.cos(b),S=Math.sqrt(e*e-w*w),A=0;p===0&&a===0?A=.5/t:p===n&&l===Math.PI&&(A=-.5/t);for(let y=0;y<=t;y++){let T=y/t,C=s+T*r;u.x=-S*Math.cos(C),u.y=w,u.z=S*Math.sin(C),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(T+A,1-R),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){let R=h[p][M+1],b=h[p][M],w=h[p+1][M],S=h[p+1][M+1];(p!==0||a>0)&&f.push(R,b,S),(p!==n-1||l<Math.PI)&&f.push(b,w,S)}this.setIndex(f),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(v,3)),this.setAttribute("uv",new dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ti=class i extends Ot{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],u=[],d=new I,f=new I,g=new I;for(let v=0;v<=n;v++){let m=a+v/n*o;for(let p=0;p<=s;p++){let M=p/s*r;f.x=(e+t*Math.cos(m))*Math.cos(M),f.y=(e+t*Math.cos(m))*Math.sin(M),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(M),d.y=e*Math.sin(M),g.subVectors(f,d).normalize(),h.push(g.x,g.y,g.z),u.push(p/s),u.push(v/n)}}for(let v=1;v<=n;v++)for(let m=1;m<=s;m++){let p=(s+1)*v+m-1,M=(s+1)*(v-1)+m-1,R=(s+1)*(v-1)+m,b=(s+1)*v+m;l.push(p,M,b),l.push(M,R,b)}this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var ni=class i extends Ot{constructor(e=new fr(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new I,l=new I,c=new le,h=new I,u=[],d=[],f=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new dt(u,3)),this.setAttribute("normal",new dt(d,3)),this.setAttribute("uv",new dt(f,2));function v(){for(let R=0;R<t;R++)m(R);m(r===!1?t:0),M(),p()}function m(R){h=e.getPointAt(R/t,h);let b=a.normals[R],w=a.binormals[R];for(let S=0;S<=s;S++){let A=S/s*Math.PI*2,y=Math.sin(A),T=-Math.cos(A);l.x=T*b.x+y*w.x,l.y=T*b.y+y*w.y,l.z=T*b.z+y*w.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let R=1;R<=t;R++)for(let b=1;b<=s;b++){let w=(s+1)*(R-1)+(b-1),S=(s+1)*R+(b-1),A=(s+1)*R+b,y=(s+1)*(R-1)+b;g.push(w,S,y),g.push(S,A,y)}}function M(){for(let R=0;R<=t;R++)for(let b=0;b<=s;b++)c.x=R/t,c.y=b/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Oa[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var xr=class extends Hn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new We(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function Vi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(dh(s))s.isRenderTargetTexture?(Ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(dh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Yt(i){let e={};for(let t=0;t<i.length;t++){let n=Vi(i[t]);for(let s in n)e[s]=n[s]}return e}function dh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function af(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function cc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}var od={clone:Vi,merge:Yt},of=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,fn=class extends Hn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=of,this.fragmentShader=lf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vi(e.uniforms),this.uniformsGroups=af(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new We().setHex(s.value);break;case"v2":this.uniforms[n].value=new le().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new vt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Je().fromArray(s.value);break;case"m4":this.uniforms[n].value=new gt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ka=class extends fn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},at=class extends Hn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fr,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Vn=class extends at{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new We(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new We(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new We(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var vr=class extends Hn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fr,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=to,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},za=class extends Hn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ha=class extends Hn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function os(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Rl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var gi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ga=class extends gi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pl,endingEnd:Pl}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Il:r=e,o=2*t-n;break;case Dl:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Il:a=e,l=2*n-t;break;case Dl:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),v=g*g,m=v*g,p=-d*m+2*d*v-d*g,M=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,R=(-1-f)*m+(1.5+f)*v+.5*g,b=f*m-f*v;for(let w=0;w!==o;++w)r[w]=p*a[h+w]+M*a[c+w]+R*a[l+w]+b*a[u+w];return r}},Va=class extends gi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Wa=class extends gi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Xa=class extends gi{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(n-t)/(s-t),v=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*v+a[l+m]*g;return r}let d=o*2,f=e-1;for(let g=0;g!==o;++g){let v=a[c+g],m=a[l+g],p=f*d+g*2,M=u[p],R=u[p+1],b=e*d+g*2,w=h[b],S=h[b+1],A=hf(n,t,M,w,s);r[g]=ld(A,v,R,S,m)}return r}};function ld(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function cf(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function hf(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=ld(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=cf(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var pn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=os(t,this.TimeBufferType),this.values=os(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:os(e.times,Array),values:os(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Rl(e.settings)&&(n.settings={inTangents:os(e.settings.inTangents,Array),outTangents:os(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Wa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Va(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ga(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Xa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case $s:t=this.InterpolantFactoryMethodDiscrete;break;case Ca:t=this.InterpolantFactoryMethodLinear;break;case ya:t=this.InterpolantFactoryMethodSmooth;break;case Cl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ve("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $s;case this.InterpolantFactoryMethodLinear:return Ca;case this.InterpolantFactoryMethodSmooth:return ya;case this.InterpolantFactoryMethodBezier:return Cl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Rl(this.settings)&&(uh(this.settings.inTangents,e),uh(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(je("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(je("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){je("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){je("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Kd(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){je("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ya,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let v=t[u+g];if(v!==t[d+g]||v!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Rl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function uh(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}pn.prototype.ValueTypeName="";pn.prototype.TimeBufferType=Float32Array;pn.prototype.ValueBufferType=Float32Array;pn.prototype.DefaultInterpolation=Ca;var _i=class extends pn{constructor(e,t,n){super(e,t,n)}};_i.prototype.ValueTypeName="bool";_i.prototype.ValueBufferType=Array;_i.prototype.DefaultInterpolation=$s;_i.prototype.InterpolantFactoryMethodLinear=void 0;_i.prototype.InterpolantFactoryMethodSmooth=void 0;var qa=class extends pn{constructor(e,t,n,s){super(e,t,n,s)}};qa.prototype.ValueTypeName="color";var ja=class extends pn{constructor(e,t,n,s){super(e,t,n,s)}};ja.prototype.ValueTypeName="number";var Ya=class extends gi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)en.slerpFlat(r,0,a,c-o,a,c,l);return r}},Sr=class extends pn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Ya(this.times,this.values,this.getValueSize(),e)}};Sr.prototype.ValueTypeName="quaternion";Sr.prototype.InterpolantFactoryMethodSmooth=void 0;var yi=class extends pn{constructor(e,t,n){super(e,t,n)}};yi.prototype.ValueTypeName="string";yi.prototype.ValueBufferType=Array;yi.prototype.DefaultInterpolation=$s;yi.prototype.InterpolantFactoryMethodLinear=void 0;yi.prototype.InterpolantFactoryMethodSmooth=void 0;var Za=class extends pn{constructor(e,t,n,s){super(e,t,n,s)}};Za.prototype.ValueTypeName="vector";var xa={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(fh(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!fh(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function fh(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Ja=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},cd=new Ja,Ts=class{constructor(e){this.manager=e!==void 0?e:cd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ts.DEFAULT_MATERIAL_NAME="__DEFAULT";var ls=new WeakMap,Ka=class extends Ts{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=xa.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=ls.get(a);u===void 0&&(u=[],ls.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=ms("img");function l(){h(),t&&t(this);let u=ls.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}ls.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),xa.remove(`image:${e}`);let d=ls.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(u)}ls.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),xa.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var Mr=class extends Ts{constructor(e){super(e)}load(e,t,n,s){let r=new qt,a=new Ka(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Rs=class extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},As=class extends Rs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Al=new gt,ph=new I,mh=new I,wr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.mapType=rn,this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ss,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ph.setFromMatrixPosition(e.matrixWorld),t.position.copy(ph),mh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(mh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Al.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Al,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===ps||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Al)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ga=new I,_a=new en,On=new I,Er=class extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=An,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ga,_a,On),On.x===1&&On.y===1&&On.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ga,_a,On.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ga,_a,On),On.x===1&&On.y===1&&On.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ga,_a,On.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},di=new I,gh=new le,_h=new le,kt=class extends Er{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=_s*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ys*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _s*2*Math.atan(Math.tan(Ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(di.x,di.y).multiplyScalar(-e/di.z),di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(di.x,di.y).multiplyScalar(-e/di.z)}getViewSize(e,t){return this.getViewBounds(e,gh,_h),t.subVectors(_h,gh)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ys*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Fl=class extends wr{constructor(){super(new kt(90,1,.5,500)),this.isPointLightShadow=!0}},Tr=class extends Rs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Fl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Cs=class extends Er{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ol=class extends wr{constructor(){super(new Cs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Bi=class extends Rs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new Ol}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var cs=-90,hs=1,$a=class extends Ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new kt(cs,hs,e,t);s.layers=this.layers,this.add(s);let r=new kt(cs,hs,e,t);r.layers=this.layers,this.add(r);let a=new kt(cs,hs,e,t);a.layers=this.layers,this.add(a);let o=new kt(cs,hs,e,t);o.layers=this.layers,this.add(o);let l=new kt(cs,hs,e,t);l.layers=this.layers,this.add(l);let c=new kt(cs,hs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===An)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ps)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Qa=class extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var hc="\\[\\]\\.:\\/",df=new RegExp("["+hc+"]","g"),dc="[^"+hc+"]",uf="[^"+hc.replace("\\.","")+"]",ff=/((?:WC+[\/:])*)/.source.replace("WC",dc),pf=/(WCOD+)?/.source.replace("WCOD",uf),mf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",dc),gf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",dc),_f=new RegExp("^"+ff+pf+mf+gf+"$"),yf=["material","materials","bones","map"],Bl=class{constructor(e,t,n){let s=n||xt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},xt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(df,"")}static parseTrackName(e){let t=_f.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);yf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ve("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){je("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){je("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){je("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){je("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){je("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;je("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xt.Composite=Bl;xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xt.prototype.GetterByBindingType=[xt.prototype._getValue_direct,xt.prototype._getValue_array,xt.prototype._getValue_arrayElement,xt.prototype._getValue_toArray];xt.prototype.SetterByBindingTypeAndVersioning=[[xt.prototype._setValue_direct,xt.prototype._setValue_direct_setNeedsUpdate,xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_array,xt.prototype._setValue_array_setNeedsUpdate,xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_arrayElement,xt.prototype._setValue_arrayElement_setNeedsUpdate,xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_fromArray,xt.prototype._setValue_fromArray_setNeedsUpdate,xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var V_=new Float32Array(1);var ii=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ke(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ke(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var _c=class _c{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};_c.prototype.isMatrix2=!0;var kl=_c;var Rr=class extends Cn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function uc(i,e,t,n){let s=bf(n);switch(t){case ic:return i*e;case lo:return i*e/s.components*s.byteLength;case co:return i*e/s.components*s.byteLength;case wi:return i*e*2/s.components*s.byteLength;case ho:return i*e*2/s.components*s.byteLength;case sc:return i*e*3/s.components*s.byteLength;case xn:return i*e*4/s.components*s.byteLength;case uo:return i*e*4/s.components*s.byteLength;case Pr:case Ir:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Dr:case Lr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case po:case go:return Math.max(i,16)*Math.max(e,8)/4;case fo:case mo:return Math.max(i,8)*Math.max(e,8)/2;case _o:case yo:case xo:case vo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case bo:case Nr:case So:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Mo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case wo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Eo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case To:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ro:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ao:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Co:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Po:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Io:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Do:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Lo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case No:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Uo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Fo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Oo:case Bo:case ko:return Math.ceil(i/4)*Math.ceil(e/4)*16;case zo:case Ho:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ur:case Go:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function bf(i){switch(i){case rn:case Ql:return{byteLength:1,components:1};case Ls:case ec:case Ln:return{byteLength:2,components:1};case ao:case oo:return{byteLength:2,components:4};case Dn:case ro:case bn:return{byteLength:4,components:1};case tc:case nc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Id(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Tf(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let v=u[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Rf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Af=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Cf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,If=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Df=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Nf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Uf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Ff=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Of=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,zf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Hf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Gf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,jf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Yf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Zf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Jf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Kf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$f=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Qf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ep=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,np=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ip="gl_FragColor = linearToOutputTexel( gl_FragColor );",sp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ap=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,op=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,up=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_p=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,bp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,xp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ep=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Tp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Rp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ap=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cp=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Pp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ip=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Np=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Up=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Op=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Wp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,qp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Jp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Kp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$p=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,em=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,im=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,am=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,om=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,hm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,dm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,um=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,fm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,mm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_m=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ym=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Sm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Tm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Rm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Am=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Nm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Um=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Fm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,km=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Gm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,qm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ym=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Zm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Km=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$m=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,n0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,i0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,r0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,a0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qe={alphahash_fragment:Rf,alphahash_pars_fragment:Af,alphamap_fragment:Cf,alphamap_pars_fragment:Pf,alphatest_fragment:If,alphatest_pars_fragment:Df,aomap_fragment:Lf,aomap_pars_fragment:Nf,batching_pars_vertex:Uf,batching_vertex:Ff,begin_vertex:Of,beginnormal_vertex:Bf,bsdfs:kf,iridescence_fragment:zf,bumpmap_pars_fragment:Hf,clipping_planes_fragment:Gf,clipping_planes_pars_fragment:Vf,clipping_planes_pars_vertex:Wf,clipping_planes_vertex:Xf,color_fragment:qf,color_pars_fragment:jf,color_pars_vertex:Yf,color_vertex:Zf,common:Jf,cube_uv_reflection_fragment:Kf,defaultnormal_vertex:$f,displacementmap_pars_vertex:Qf,displacementmap_vertex:ep,emissivemap_fragment:tp,emissivemap_pars_fragment:np,colorspace_fragment:ip,colorspace_pars_fragment:sp,envmap_fragment:rp,envmap_common_pars_fragment:ap,envmap_pars_fragment:op,envmap_pars_vertex:lp,envmap_physical_pars_fragment:bp,envmap_vertex:cp,fog_vertex:hp,fog_pars_vertex:dp,fog_fragment:up,fog_pars_fragment:fp,gradientmap_pars_fragment:pp,lightmap_pars_fragment:mp,lights_lambert_fragment:gp,lights_lambert_pars_fragment:_p,lights_pars_begin:yp,lights_toon_fragment:xp,lights_toon_pars_fragment:vp,lights_phong_fragment:Sp,lights_phong_pars_fragment:Mp,lights_physical_fragment:wp,lights_physical_pars_fragment:Ep,lights_fragment_begin:Tp,lights_fragment_maps:Rp,lights_fragment_end:Ap,lightprobes_pars_fragment:Cp,logdepthbuf_fragment:Pp,logdepthbuf_pars_fragment:Ip,logdepthbuf_pars_vertex:Dp,logdepthbuf_vertex:Lp,map_fragment:Np,map_pars_fragment:Up,map_particle_fragment:Fp,map_particle_pars_fragment:Op,metalnessmap_fragment:Bp,metalnessmap_pars_fragment:kp,morphinstance_vertex:zp,morphcolor_vertex:Hp,morphnormal_vertex:Gp,morphtarget_pars_vertex:Vp,morphtarget_vertex:Wp,normal_fragment_begin:Xp,normal_fragment_maps:qp,normal_pars_fragment:jp,normal_pars_vertex:Yp,normal_vertex:Zp,normalmap_pars_fragment:Jp,clearcoat_normal_fragment_begin:Kp,clearcoat_normal_fragment_maps:$p,clearcoat_pars_fragment:Qp,iridescence_pars_fragment:em,opaque_fragment:tm,packing:nm,premultiplied_alpha_fragment:im,project_vertex:sm,dithering_fragment:rm,dithering_pars_fragment:am,roughnessmap_fragment:om,roughnessmap_pars_fragment:lm,shadowmap_pars_fragment:cm,shadowmap_pars_vertex:hm,shadowmap_vertex:dm,shadowmask_pars_fragment:um,skinbase_vertex:fm,skinning_pars_vertex:pm,skinning_vertex:mm,skinnormal_vertex:gm,specularmap_fragment:_m,specularmap_pars_fragment:ym,tonemapping_fragment:bm,tonemapping_pars_fragment:xm,transmission_fragment:vm,transmission_pars_fragment:Sm,uv_pars_fragment:Mm,uv_pars_vertex:wm,uv_vertex:Em,worldpos_vertex:Tm,background_vert:Rm,background_frag:Am,backgroundCube_vert:Cm,backgroundCube_frag:Pm,cube_vert:Im,cube_frag:Dm,depth_vert:Lm,depth_frag:Nm,distance_vert:Um,distance_frag:Fm,equirect_vert:Om,equirect_frag:Bm,linedashed_vert:km,linedashed_frag:zm,meshbasic_vert:Hm,meshbasic_frag:Gm,meshlambert_vert:Vm,meshlambert_frag:Wm,meshmatcap_vert:Xm,meshmatcap_frag:qm,meshnormal_vert:jm,meshnormal_frag:Ym,meshphong_vert:Zm,meshphong_frag:Jm,meshphysical_vert:Km,meshphysical_frag:$m,meshtoon_vert:Qm,meshtoon_frag:e0,points_vert:t0,points_frag:n0,shadow_vert:i0,shadow_frag:s0,sprite_vert:r0,sprite_frag:a0},Me={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},jn={basic:{uniforms:Yt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Yt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new We(0)},envMapIntensity:{value:1}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Yt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Yt([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Yt([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new We(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Yt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Yt([Me.points,Me.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Yt([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Yt([Me.common,Me.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Yt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Yt([Me.sprite,Me.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distance:{uniforms:Yt([Me.common,Me.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distance_vert,fragmentShader:Qe.distance_frag},shadow:{uniforms:Yt([Me.lights,Me.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};jn.physical={uniforms:Yt([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};var Xo={r:0,b:0,g:0},o0=new gt,Dd=new Je;Dd.set(-1,0,0,0,1,0,0,0,1);function l0(i,e,t,n,s,r){let a=new We(0),o=s===!0?0:1,l,c,h=null,u=0,d=null;function f(M){let R=M.isScene===!0?M.background:null;if(R&&R.isTexture){let b=M.backgroundBlurriness>0;R=e.get(R,b)}return R}function g(M){let R=!1,b=f(M);b===null?m(a,o):b&&b.isColor&&(m(b,1),R=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(M,R){let b=f(R);b&&(b.isCubeTexture||b.mapping===Ar)?(c===void 0&&(c=new Ge(new jt(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:Vi(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,S,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(o0.makeRotationFromEuler(R.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Dd),c.material.toneMapped=it.getTransfer(b.colorSpace)!==ht,(h!==b||u!==b.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=b,u=b.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Ge(new Oi(2,2),new fn({name:"BackgroundMaterial",uniforms:Vi(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=it.getTransfer(b.colorSpace)!==ht,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||u!==b.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=b,u=b.version,d=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,R){M.getRGB(Xo,cc(i)),t.buffers.color.setClear(Xo.r,Xo.g,Xo.b,R,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,R=1){a.set(M),o=R,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:g,addToRenderList:v,dispose:p}}function c0(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(D,F,O,P,B){let V=!1,W=u(D,P,O,F);r!==W&&(r=W,c(r.object)),V=f(D,P,O,B),V&&g(D,P,O,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,b(D,F,O,P),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function h(D){return i.deleteVertexArray(D)}function u(D,F,O,P){let B=P.wireframe===!0,V=n[F.id];V===void 0&&(V={},n[F.id]=V);let W=D.isInstancedMesh===!0?D.id:0,Q=V[W];Q===void 0&&(Q={},V[W]=Q);let X=Q[O.id];X===void 0&&(X={},Q[O.id]=X);let Z=X[B];return Z===void 0&&(Z=d(l()),X[B]=Z),Z}function d(D){let F=[],O=[],P=[];for(let B=0;B<t;B++)F[B]=0,O[B]=0,P[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:O,attributeDivisors:P,object:D,attributes:{},index:null}}function f(D,F,O,P){let B=r.attributes,V=F.attributes,W=0,Q=O.getAttributes();for(let X in Q)if(Q[X].location>=0){let ie=B[X],ge=V[X];if(ge===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(ge=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(ge=D.instanceColor)),ie===void 0||ie.attribute!==ge||ge&&ie.data!==ge.data)return!0;W++}return r.attributesNum!==W||r.index!==P}function g(D,F,O,P){let B={},V=F.attributes,W=0,Q=O.getAttributes();for(let X in Q)if(Q[X].location>=0){let ie=V[X];ie===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(ie=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(ie=D.instanceColor));let ge={};ge.attribute=ie,ie&&ie.data&&(ge.data=ie.data),B[X]=ge,W++}r.attributes=B,r.attributesNum=W,r.index=P}function v(){let D=r.newAttributes;for(let F=0,O=D.length;F<O;F++)D[F]=0}function m(D){p(D,0)}function p(D,F){let O=r.newAttributes,P=r.enabledAttributes,B=r.attributeDivisors;O[D]=1,P[D]===0&&(i.enableVertexAttribArray(D),P[D]=1),B[D]!==F&&(i.vertexAttribDivisor(D,F),B[D]=F)}function M(){let D=r.newAttributes,F=r.enabledAttributes;for(let O=0,P=F.length;O<P;O++)F[O]!==D[O]&&(i.disableVertexAttribArray(O),F[O]=0)}function R(D,F,O,P,B,V,W){W===!0?i.vertexAttribIPointer(D,F,O,B,V):i.vertexAttribPointer(D,F,O,P,B,V)}function b(D,F,O,P){v();let B=P.attributes,V=O.getAttributes(),W=F.defaultAttributeValues;for(let Q in V){let X=V[Q];if(X.location>=0){let Z=B[Q];if(Z===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(Z=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(Z=D.instanceColor)),Z!==void 0){let ie=Z.normalized,ge=Z.itemSize,_e=e.get(Z);if(_e===void 0)continue;let ze=_e.buffer,Xe=_e.type,qe=_e.bytesPerElement,q=Xe===i.INT||Xe===i.UNSIGNED_INT||Z.gpuType===ro;if(Z.isInterleavedBufferAttribute){let J=Z.data,be=J.stride,Se=Z.offset;if(J.isInstancedInterleavedBuffer){for(let ye=0;ye<X.locationSize;ye++)p(X.location+ye,J.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ye=0;ye<X.locationSize;ye++)m(X.location+ye);i.bindBuffer(i.ARRAY_BUFFER,ze);for(let ye=0;ye<X.locationSize;ye++)R(X.location+ye,ge/X.locationSize,Xe,ie,be*qe,(Se+ge/X.locationSize*ye)*qe,q)}else{if(Z.isInstancedBufferAttribute){for(let J=0;J<X.locationSize;J++)p(X.location+J,Z.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let J=0;J<X.locationSize;J++)m(X.location+J);i.bindBuffer(i.ARRAY_BUFFER,ze);for(let J=0;J<X.locationSize;J++)R(X.location+J,ge/X.locationSize,Xe,ie,ge*qe,ge/X.locationSize*J*qe,q)}}else if(W!==void 0){let ie=W[Q];if(ie!==void 0)switch(ie.length){case 2:i.vertexAttrib2fv(X.location,ie);break;case 3:i.vertexAttrib3fv(X.location,ie);break;case 4:i.vertexAttrib4fv(X.location,ie);break;default:i.vertexAttrib1fv(X.location,ie)}}}}M()}function w(){T();for(let D in n){let F=n[D];for(let O in F){let P=F[O];for(let B in P){let V=P[B];for(let W in V)h(V[W].object),delete V[W];delete P[B]}}delete n[D]}}function S(D){if(n[D.id]===void 0)return;let F=n[D.id];for(let O in F){let P=F[O];for(let B in P){let V=P[B];for(let W in V)h(V[W].object),delete V[W];delete P[B]}}delete n[D.id]}function A(D){for(let F in n){let O=n[F];for(let P in O){let B=O[P];if(B[D.id]===void 0)continue;let V=B[D.id];for(let W in V)h(V[W].object),delete V[W];delete B[D.id]}}}function y(D){for(let F in n){let O=n[F],P=D.isInstancedMesh===!0?D.id:0,B=O[P];if(B!==void 0){for(let V in B){let W=B[V];for(let Q in W)h(W[Q].object),delete W[Q];delete B[V]}delete O[P],Object.keys(O).length===0&&delete n[F]}}}function T(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:C,dispose:w,releaseStatesOfGeometry:S,releaseStatesOfObject:y,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:M}}function h0(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function d0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==xn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let y=A===Ln&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==rn&&A!==bn&&!y&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ve("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Ve("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:R,maxFragmentUniforms:b,maxSamples:w,samples:S}}function u0(i){let e=this,t=null,n=0,s=!1,r=!1,a=new dn,o=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let M=r?0:n,R=M*4,b=p.clippingState||null;l.value=b,b=h(g,d,R,f);for(let w=0;w!==R;++w)b[w]=t[w];p.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let p=f+v*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let R=0,b=f;R!==v;++R,b+=4)a.copy(u[R]).applyMatrix4(M,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}var Fs=4,f0=6,p0=20,m0=256,Or=new Cs,hd=new We,yc=null,bc=0,xc=0,vc=!1,g0=new I,Wi=new I,Xi=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=g0}=r;yc=this._renderer.getRenderTarget(),bc=this._renderer.getActiveCubeFace(),xc=this._renderer.getActiveMipmapLevel(),vc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ud(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(yc,bc,xc),this._renderer.xr.enabled=vc,e.scissorTest=!1,Us(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===vi||e.mapping===Hi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yc=this._renderer.getRenderTarget(),bc=this._renderer.getActiveCubeFace(),xc=this._renderer.getActiveMipmapLevel(),vc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:Ln,format:xn,colorSpace:Qs,depthBuffer:!1},s=dd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dd(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=_0(r)),this._blurMaterial=b0(r,e,t),this._ggxMaterial=y0(r,e,t)}return s}_compileMaterial(e){let t=new Ge(new Ot,e);this._renderer.compile(t,Or)}_sceneToCubeUV(e,t,n,s,r){let l=new kt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(hd),u.toneMapping=In,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ge(new jt,new Ni({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,m=v.material,p=!1,M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,p=!0):(m.color.copy(hd),p=!0);for(let R=0;R<6;R++){let b=R%3;b===0?(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[R],r.y,r.z)):b===1?(l.up.set(0,0,c[R]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[R],r.z)):(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[R]));let w=this._cubeSize;Us(s,b*w,R>2?w:0,w,w),u.setRenderTarget(s),p&&u.render(v,l),u.render(e,l)}u.toneMapping=f,u.autoClear=d,e.background=M}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===vi||e.mapping===Hi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=fd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ud());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Us(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Or)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=c*1.25,f=u*d,{_lodMax:g}=this,v=this._sizeLods[n],m=3*v*(n>g-Fs?n-g+Fs:0),p=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,Us(r,m,p,3*v,2*v),s.setRenderTarget(r),s.render(o,Or),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Us(e,m,p,3*v,2*v),s.setRenderTarget(e),s.render(o,Or)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-Fs?s-this._lodMax+Fs:0),d=4*(this._cubeSize-h);Us(t,u,d,3*h,2*h),a.setRenderTarget(t),a.render(l,Or)}};function _0(i){let e=[],t=[],n=i,s=i-Fs+1+f0;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,d=6,f=3,g=new Float32Array(f*d*u),v=new Float32Array(f*d*u);for(let p=0;p<u;p++){let M=p%3*2/3-1,R=p>2?0:-1,b=[M,R,0,M+2/3,R,0,M+2/3,R+1,0,M,R,0,M+2/3,R+1,0,M,R+1,0];g.set(b,f*d*p);for(let w=0;w<d;w++){let S=h[w*2]*2-1,A=h[w*2+1]*2-1;p===0?Wi.set(1,A,S):p===1?Wi.set(-S,1,-A):p===2?Wi.set(-S,A,1):p===3?Wi.set(-1,A,-S):p===4?Wi.set(-S,-1,A):Wi.set(S,A,-1),Wi.toArray(v,(p*d+w)*f)}}let m=new Ot;m.setAttribute("position",new Qt(g,f)),m.setAttribute("outputDirection",new Qt(v,f)),t.push(new Ge(m,null)),n>Fs&&n--}return{lodMeshes:t,sizeLods:e}}function dd(i,e,t){let n=new sn(i,e,t);return n.texture.mapping=Ar,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Us(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function y0(i,e,t){return new fn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:m0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Zo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function b0(i,e,t){return new fn({name:"SphericalGaussianBlur",defines:{SAMPLES:p0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Zo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function ud(){return new fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function fd(){return new fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Zo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var jo=class extends sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new or(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new jt(5,5,5),r=new fn({name:"CubemapFromEquirect",uniforms:Vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ht,blending:Xn});r.uniforms.tEquirect.value=t;let a=new Ge(s,r),o=t.minFilter;return t.minFilter===Si&&(t.minFilter=zt),new $a(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function x0(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===no||f===io)if(e.has(d)){let g=e.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let v=new jo(g.height);return v.fromEquirectangularTexture(i,d),e.set(d,v),d.addEventListener("dispose",c),o(v.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let f=d.mapping,g=f===no||f===io,v=f===vi||f===Hi;if(g||v){let m=t.get(d),p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new Xi(i)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let M=d.image;return g&&M&&M.height>0||v&&M&&l(M)?(n===null&&(n=new Xi(i)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,f){return f===no?d.mapping=vi:f===io&&(d.mapping=Hi),d}function l(d){let f=0,g=6;for(let v=0;v<g;v++)d[v]!==void 0&&f++;return f===g}function c(d){let f=d.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function v0(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Di("WebGLRenderer: "+n+" extension not supported."),s}}}function S0(i,e,t,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,g=u.attributes.position,v=0;if(g===void 0)return;if(f!==null){let M=f.array;v=f.version;for(let R=0,b=M.length;R<b;R+=3){let w=M[R+0],S=M[R+1],A=M[R+2];d.push(w,S,S,A,A,w)}}else{let M=g.array;v=g.version;for(let R=0,b=M.length/3-1;R<b;R+=3){let w=R+0,S=R+1,A=R+2;d.push(w,S,S,A,A,w)}}let m=new(g.count>=65535?sr:ir)(d,1);m.version=v;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function M0(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*a),t.update(d,n,1)}function c(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*a,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let v=0;for(let m=0;m<f;m++)v+=d[m];t.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function w0(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:je("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function E0(i,e,t){let n=new WeakMap,s=new vt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let T=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],R=0;f===!0&&(R=1),g===!0&&(R=2),v===!0&&(R=3);let b=o.attributes.position.count*R,w=1;b>e.maxTextureSize&&(w=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let S=new Float32Array(b*w*4*u),A=new tr(S,b,w,u);A.type=bn,A.needsUpdate=!0;let y=R*4;for(let C=0;C<u;C++){let D=m[C],F=p[C],O=M[C],P=b*w*4*C;for(let B=0;B<D.count;B++){let V=B*y;f===!0&&(s.fromBufferAttribute(D,B),S[P+V+0]=s.x,S[P+V+1]=s.y,S[P+V+2]=s.z,S[P+V+3]=0),g===!0&&(s.fromBufferAttribute(F,B),S[P+V+4]=s.x,S[P+V+5]=s.y,S[P+V+6]=s.z,S[P+V+7]=0),v===!0&&(s.fromBufferAttribute(O,B),S[P+V+8]=s.x,S[P+V+9]=s.y,S[P+V+10]=s.z,S[P+V+11]=O.itemSize===4?s.w:1)}}d={count:u,texture:A,size:new le(b,w)},n.set(o,d),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function T0(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var R0={[ql]:"LINEAR_TONE_MAPPING",[jl]:"REINHARD_TONE_MAPPING",[Yl]:"CINEON_TONE_MAPPING",[Ds]:"ACES_FILMIC_TONE_MAPPING",[Jl]:"AGX_TONE_MAPPING",[Kl]:"NEUTRAL_TONE_MAPPING",[Zl]:"CUSTOM_TONE_MAPPING"};function A0(i,e,t,n,s,r){let a=new sn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Ot;c.setAttribute("position",new dt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new dt([0,2,0,0,2,0],2));let h=new ka({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Ge(c,h),d=new Cs(-1,1,1,-1,0,1),f=null,g=null,v=!1,m,p=null,M=[],R=!1;this.setSize=function(b,w){a.setSize(b,w),o!==null&&o.setSize(b,w),l!==null&&l.setSize(b,w);for(let S=0;S<M.length;S++){let A=M[S];A.setSize&&A.setSize(b,w)}},this.setEffects=function(b){M=b,R=M.length>0&&M[0].isRenderPass===!0;let w=a.width,S=a.height;M.length>0&&o===null&&(o=new sn(w,S,{type:Ln,depthBuffer:!1,stencilBuffer:!1}),l=new sn(w,S,{type:Ln,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<M.length;A++){let y=M[A];y.setSize&&y.setSize(w,S)}},this.begin=function(b,w){if(v||b.toneMapping===In&&M.length===0)return!1;if(p=w,w!==null){let S=w.width,A=w.height;(a.width!==S||a.height!==A)&&this.setSize(S,A)}return R===!1&&b.setRenderTarget(a),m=b.toneMapping,b.toneMapping=In,!0},this.hasRenderPass=function(){return R},this.end=function(b,w){b.toneMapping=m,v=!0;let S=a,A=o;for(let y=0;y<M.length;y++){let T=M[y];T.enabled!==!1&&(T.render(b,A,S,w),T.needsSwap!==!1&&(S=A,A=A===o?l:o))}if(f!==b.outputColorSpace||g!==b.toneMapping){f=b.outputColorSpace,g=b.toneMapping,h.defines={},it.getTransfer(f)===ht&&(h.defines.SRGB_TRANSFER="");let y=R0[g];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,b.setRenderTarget(p),b.render(u,d),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Ld=new qt,wc=new pi(1,1),Nd=new tr,Ud=new Da,Fd=new or,pd=[],md=[],gd=new Float32Array(16),_d=new Float32Array(9),yd=new Float32Array(4);function Bs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=pd[s];if(r===void 0&&(r=new Float32Array(s),pd[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function It(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Dt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Jo(i,e){let t=md[e];t===void 0&&(t=new Int32Array(e),md[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function C0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function P0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2fv(this.addr,e),Dt(t,e)}}function I0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;i.uniform3fv(this.addr,e),Dt(t,e)}}function D0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4fv(this.addr,e),Dt(t,e)}}function L0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;yd.set(n),i.uniformMatrix2fv(this.addr,!1,yd),Dt(t,n)}}function N0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;_d.set(n),i.uniformMatrix3fv(this.addr,!1,_d),Dt(t,n)}}function U0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;gd.set(n),i.uniformMatrix4fv(this.addr,!1,gd),Dt(t,n)}}function F0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function O0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2iv(this.addr,e),Dt(t,e)}}function B0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3iv(this.addr,e),Dt(t,e)}}function k0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4iv(this.addr,e),Dt(t,e)}}function z0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function H0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2uiv(this.addr,e),Dt(t,e)}}function G0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3uiv(this.addr,e),Dt(t,e)}}function V0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4uiv(this.addr,e),Dt(t,e)}}function W0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(wc.compareFunction=t.isReversedDepthBuffer()?Wo:Vo,r=wc):r=Ld,t.setTexture2D(e||r,s)}function X0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Ud,s)}function q0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Fd,s)}function j0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Nd,s)}function Y0(i){switch(i){case 5126:return C0;case 35664:return P0;case 35665:return I0;case 35666:return D0;case 35674:return L0;case 35675:return N0;case 35676:return U0;case 5124:case 35670:return F0;case 35667:case 35671:return O0;case 35668:case 35672:return B0;case 35669:case 35673:return k0;case 5125:return z0;case 36294:return H0;case 36295:return G0;case 36296:return V0;case 35678:case 36198:case 36298:case 36306:case 35682:return W0;case 35679:case 36299:case 36307:return X0;case 35680:case 36300:case 36308:case 36293:return q0;case 36289:case 36303:case 36311:case 36292:return j0}}function Z0(i,e){i.uniform1fv(this.addr,e)}function J0(i,e){let t=Bs(e,this.size,2);i.uniform2fv(this.addr,t)}function K0(i,e){let t=Bs(e,this.size,3);i.uniform3fv(this.addr,t)}function $0(i,e){let t=Bs(e,this.size,4);i.uniform4fv(this.addr,t)}function Q0(i,e){let t=Bs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function eg(i,e){let t=Bs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function tg(i,e){let t=Bs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ng(i,e){i.uniform1iv(this.addr,e)}function ig(i,e){i.uniform2iv(this.addr,e)}function sg(i,e){i.uniform3iv(this.addr,e)}function rg(i,e){i.uniform4iv(this.addr,e)}function ag(i,e){i.uniform1uiv(this.addr,e)}function og(i,e){i.uniform2uiv(this.addr,e)}function lg(i,e){i.uniform3uiv(this.addr,e)}function cg(i,e){i.uniform4uiv(this.addr,e)}function hg(i,e,t){let n=this.cache,s=e.length,r=Jo(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=wc:a=Ld;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function dg(i,e,t){let n=this.cache,s=e.length,r=Jo(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Ud,r[a])}function ug(i,e,t){let n=this.cache,s=e.length,r=Jo(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Fd,r[a])}function fg(i,e,t){let n=this.cache,s=e.length,r=Jo(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Nd,r[a])}function pg(i){switch(i){case 5126:return Z0;case 35664:return J0;case 35665:return K0;case 35666:return $0;case 35674:return Q0;case 35675:return eg;case 35676:return tg;case 5124:case 35670:return ng;case 35667:case 35671:return ig;case 35668:case 35672:return sg;case 35669:case 35673:return rg;case 5125:return ag;case 36294:return og;case 36295:return lg;case 36296:return cg;case 35678:case 36198:case 36298:case 36306:case 35682:return hg;case 35679:case 36299:case 36307:return dg;case 35680:case 36300:case 36308:case 36293:return ug;case 36289:case 36303:case 36311:case 36292:return fg}}var Ec=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Y0(t.type)}},Tc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pg(t.type)}},Rc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Sc=/(\w+)(\])?(\[|\.)?/g;function bd(i,e){i.seq.push(e),i.map[e.id]=e}function mg(i,e,t){let n=i.name,s=n.length;for(Sc.lastIndex=0;;){let r=Sc.exec(n),a=Sc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){bd(t,c===void 0?new Ec(o,i,e):new Tc(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Rc(o),bd(t,u)),t=u}}}var Os=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);mg(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function xd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var gg=37297,_g=0;function yg(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var vd=new Je;function bg(i){it._getMatrix(vd,it.workingColorSpace,i);let e=`mat3( ${vd.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(i)){case er:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Sd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+yg(i.getShaderSource(e),o)}else return r}function xg(i,e){let t=bg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var vg={[ql]:"Linear",[jl]:"Reinhard",[Yl]:"Cineon",[Ds]:"ACESFilmic",[Jl]:"AgX",[Kl]:"Neutral",[Zl]:"Custom"};function Sg(i,e){let t=vg[e];return t===void 0?(Ve("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var qo=new I;function Mg(){it.getLuminanceCoefficients(qo);let i=qo.x.toFixed(4),e=qo.y.toFixed(4),t=qo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(kr).join(`
`)}function Eg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Tg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function kr(i){return i!==""}function Md(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Rg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ac(i){return i.replace(Rg,Cg)}var Ag=new Map;function Cg(i,e){let t=Qe[e];if(t===void 0){let n=Ag.get(e);if(n!==void 0)t=Qe[n],Ve('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ac(t)}var Pg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ed(i){return i.replace(Pg,Ig)}function Ig(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Td(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Dg={[ki]:"SHADOWMAP_TYPE_PCF",[Ps]:"SHADOWMAP_TYPE_VSM"};function Lg(i){return Dg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Ng={[vi]:"ENVMAP_TYPE_CUBE",[Hi]:"ENVMAP_TYPE_CUBE",[Ar]:"ENVMAP_TYPE_CUBE_UV"};function Ug(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Ng[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Fg={[Hi]:"ENVMAP_MODE_REFRACTION"};function Og(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Fg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Bg={[to]:"ENVMAP_BLENDING_MULTIPLY",[kh]:"ENVMAP_BLENDING_MIX",[zh]:"ENVMAP_BLENDING_ADD"};function kg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Bg[i.combine]||"ENVMAP_BLENDING_NONE"}function zg(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Hg(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Lg(t),c=Ug(t),h=Og(t),u=kg(t),d=zg(t),f=wg(t),g=Eg(r),v=s.createProgram(),m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(kr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(kr).join(`
`),p.length>0&&(p+=`
`)):(m=[Td(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(kr).join(`
`),p=[Td(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==In?"#define TONE_MAPPING":"",t.toneMapping!==In?Qe.tonemapping_pars_fragment:"",t.toneMapping!==In?Sg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,xg("linearToOutputTexel",t.outputColorSpace),Mg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(kr).join(`
`)),a=Ac(a),a=Md(a,t),a=wd(a,t),o=Ac(o),o=Md(o,t),o=wd(o,t),a=Ed(a),o=Ed(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===rc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let R=M+m+a,b=M+p+o,w=xd(s,s.VERTEX_SHADER,R),S=xd(s,s.FRAGMENT_SHADER,b);s.attachShader(v,w),s.attachShader(v,S),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(D){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(v)||"",O=s.getShaderInfoLog(w)||"",P=s.getShaderInfoLog(S)||"",B=F.trim(),V=O.trim(),W=P.trim(),Q=!0,X=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,w,S);else{let Z=Sd(s,w,"vertex"),ie=Sd(s,S,"fragment");je("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+B+`
`+Z+`
`+ie)}else B!==""?Ve("WebGLProgram: Program Info Log:",B):(V===""||W==="")&&(X=!1);X&&(D.diagnostics={runnable:Q,programLog:B,vertexShader:{log:V,prefix:m},fragmentShader:{log:W,prefix:p}})}s.deleteShader(w),s.deleteShader(S),y=new Os(s,v),T=Tg(s,v)}let y;this.getUniforms=function(){return y===void 0&&A(this),y};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(v,gg)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_g++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=S,this}var Gg=0,Cc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Pc(e),t.set(e,n)),n}},Pc=class{constructor(e){this.id=Gg++,this.code=e,this.usedTimes=0}};function Vg(i){return i===wi||i===Nr||i===Ur}function Wg(i,e,t,n,s,r){let a=new nr,o=new Cc,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function v(y,T,C,D,F,O){let P=D.fog,B=F.geometry,V=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?D.environment:null,W=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,Q=e.get(y.envMap||V,W),X=Q&&Q.mapping===Ar?Q.image.height:null,Z=f[y.type];y.precision!==null&&(d=n.getMaxPrecision(y.precision),d!==y.precision&&Ve("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let ie=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ge=ie!==void 0?ie.length:0,_e=0;B.morphAttributes.position!==void 0&&(_e=1),B.morphAttributes.normal!==void 0&&(_e=2),B.morphAttributes.color!==void 0&&(_e=3);let ze,Xe,qe,q;if(Z){let ut=jn[Z];ze=ut.vertexShader,Xe=ut.fragmentShader}else{ze=y.vertexShader,Xe=y.fragmentShader;let ut=o.getVertexShaderStage(y),tt=o.getFragmentShaderStage(y);o.update(y,ut,tt),qe=ut.id,q=tt.id}let J=i.getRenderTarget(),be=i.state.buffers.depth.getReversed(),Se=F.isInstancedMesh===!0,ye=F.isBatchedMesh===!0,Ue=!!y.map,st=!!y.matcap,te=!!Q,oe=!!y.aoMap,ae=!!y.lightMap,re=!!y.bumpMap&&y.wireframe===!1,ne=!!y.normalMap,we=!!y.displacementMap,Ne=!!y.emissiveMap,Le=!!y.metalnessMap,Oe=!!y.roughnessMap,L=y.anisotropy>0,et=y.clearcoat>0,Ye=y.dispersion>0,E=y.retroreflectivity>0,_=y.iridescence>0,k=y.sheen>0,G=y.transmission>0,Y=L&&!!y.anisotropyMap,ce=et&&!!y.clearcoatMap,he=et&&!!y.clearcoatNormalMap,K=et&&!!y.clearcoatRoughnessMap,ee=_&&!!y.iridescenceMap,de=_&&!!y.iridescenceThicknessMap,ke=k&&!!y.sheenColorMap,pe=k&&!!y.sheenRoughnessMap,xe=!!y.specularMap,Pe=!!y.specularColorMap,Fe=!!y.specularIntensityMap,Ze=G&&!!y.transmissionMap,U=G&&!!y.thicknessMap,ve=!!y.gradientMap,$=!!y.alphaMap,ue=y.alphaTest>0,Ee=!!y.alphaHash,se=!!y.extensions,Ie=In;y.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ie=i.toneMapping);let Te={shaderID:Z,shaderType:y.type,shaderName:y.name,vertexShader:ze,fragmentShader:Xe,defines:y.defines,customVertexShaderID:qe,customFragmentShaderID:q,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:ye,batchingColor:ye&&F._colorsTexture!==null,instancing:Se,instancingColor:Se&&F.instanceColor!==null,instancingMorph:Se&&F.morphTexture!==null,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:it.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Ue,matcap:st,envMap:te,envMapMode:te&&Q.mapping,envMapCubeUVHeight:X,aoMap:oe,lightMap:ae,bumpMap:re,normalMap:ne,displacementMap:we,emissiveMap:Ne,normalMapObjectSpace:ne&&y.normalMapType===Vh,normalMapTangentSpace:ne&&y.normalMapType===Fr,packedNormalMap:ne&&y.normalMapType===Fr&&Vg(y.normalMap.format),metalnessMap:Le,roughnessMap:Oe,anisotropy:L,anisotropyMap:Y,clearcoat:et,clearcoatMap:ce,clearcoatNormalMap:he,clearcoatRoughnessMap:K,dispersion:Ye,retroreflection:E,iridescence:_,iridescenceMap:ee,iridescenceThicknessMap:de,sheen:k,sheenColorMap:ke,sheenRoughnessMap:pe,specularMap:xe,specularColorMap:Pe,specularIntensityMap:Fe,transmission:G,transmissionMap:Ze,thicknessMap:U,gradientMap:ve,opaque:y.transparent===!1&&y.blending===Is&&y.alphaToCoverage===!1,alphaMap:$,alphaTest:ue,alphaHash:Ee,combine:y.combine,mapUv:Ue&&g(y.map.channel),aoMapUv:oe&&g(y.aoMap.channel),lightMapUv:ae&&g(y.lightMap.channel),bumpMapUv:re&&g(y.bumpMap.channel),normalMapUv:ne&&g(y.normalMap.channel),displacementMapUv:we&&g(y.displacementMap.channel),emissiveMapUv:Ne&&g(y.emissiveMap.channel),metalnessMapUv:Le&&g(y.metalnessMap.channel),roughnessMapUv:Oe&&g(y.roughnessMap.channel),anisotropyMapUv:Y&&g(y.anisotropyMap.channel),clearcoatMapUv:ce&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:he&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:de&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:pe&&g(y.sheenRoughnessMap.channel),specularMapUv:xe&&g(y.specularMap.channel),specularColorMapUv:Pe&&g(y.specularColorMap.channel),specularIntensityMapUv:Fe&&g(y.specularIntensityMap.channel),transmissionMapUv:Ze&&g(y.transmissionMap.channel),thicknessMapUv:U&&g(y.thicknessMap.channel),alphaMapUv:$&&g(y.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ne||L),vertexNormals:!!B.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!B.attributes.uv&&(Ue||$),fog:!!P,useFog:y.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||B.attributes.normal===void 0&&ne===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:be,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:_e,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ie,decodeVideoTexture:Ue&&y.map.isVideoTexture===!0&&it.getTransfer(y.map.colorSpace)===ht,decodeVideoTextureEmissive:Ne&&y.emissiveMap.isVideoTexture===!0&&it.getTransfer(y.emissiveMap.colorSpace)===ht,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===yn,flipSided:y.side===Ht,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:se&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&y.extensions.multiDraw===!0||ye)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Te.vertexUv1s=l.has(1),Te.vertexUv2s=l.has(2),Te.vertexUv3s=l.has(3),l.clear(),Te}function m(y){let T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(let C in y.defines)T.push(C),T.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(p(T,y),M(T,y),T.push(i.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function p(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numSunLights),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numSunLightShadows),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function M(y,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function R(y){let T=f[y.type],C;if(T){let D=jn[T];C=od.clone(D.uniforms)}else C=y.uniforms;return C}function b(y,T){let C=h.get(T);return C!==void 0?++C.usedTimes:(C=new Hg(i,T,y,s),c.push(C),h.set(T,C)),C}function w(y){if(--y.usedTimes===0){let T=c.indexOf(y);c[T]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function S(y){o.remove(y)}function A(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:R,acquireProgram:b,releaseProgram:w,releaseShaderCache:S,programs:c,dispose:A}}function Xg(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function qg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Rd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ad(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,v,m,p){let M=i[e];return M===void 0?(M={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:v,renderOrder:d.renderOrder,z:m,group:p},i[e]=M):(M.id=d.id,M.object=d,M.geometry=f,M.material=g,M.materialVariant=a(d),M.groupOrder=v,M.renderOrder=d.renderOrder,M.z=m,M.group=p),e++,M}function l(d,f,g,v,m,p,M){M.reversedDepth===!0&&(m=-m);let R=o(d,f,g,v,m,p);g.transmission>0?n.push(R):g.transparent===!0?s.push(R):t.push(R)}function c(d,f,g,v,m,p){let M=o(d,f,g,v,m,p);g.transmission>0?n.unshift(M):g.transparent===!0?s.unshift(M):t.unshift(M)}function h(d,f){t.length>1&&t.sort(d||qg),n.length>1&&n.sort(f||Rd),s.length>1&&s.sort(f||Rd)}function u(){for(let d=e,f=i.length;d<f;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function jg(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Ad,i.set(n,[a])):s>=r.length?(a=new Ad,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Yg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new I,color:new We};break;case"SpotLight":t={position:new I,direction:new I,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function Zg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Jg=0;function Kg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function $g(i){let e=new Yg,t=Zg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let s=new I,r=new gt,a=new gt;function o(c){let h=0,u=0,d=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,M=0,R=0,b=0,w=0,S=0,A=0,y=0,T=0,C=0;c.sort(Kg);for(let F=0,O=c.length;F<O;F++){let P=c[F],B=P.color,V=P.intensity,W=P.distance,Q=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===wi?Q=P.shadow.map.texture:Q=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=B.r*V,u+=B.g*V,d+=B.b*V;else if(P.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(P.sh.coefficients[X],V);C++}else if(P.isSunLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Z=P.shadow,ie=t.get(P);ie.shadowIntensity=Z.intensity,ie.shadowBias=Z.bias,ie.shadowNormalBias=Z.normalBias,ie.shadowRadius=Z.radius,ie.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),n.sunShadow[g]=ie,n.sunShadowMap[g]=Q;let ge=Z.getViewportCount();for(let _e=0;_e<ge;_e++)n.sunShadowMatrix[v+_e]=Z.getMatrix(_e),n.sunShadowCascade[v+_e]=Z._cascadeData[_e];v+=ge,g++}n.sun[f]=X,f++}else if(P.isDirectionalLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Z=P.shadow,ie=t.get(P);ie.shadowIntensity=Z.intensity,ie.shadowBias=Z.bias,ie.shadowNormalBias=Z.normalBias,ie.shadowRadius=Z.radius,ie.shadowMapSize=Z.mapSize,n.directionalShadow[m]=ie,n.directionalShadowMap[m]=Q,n.directionalShadowMatrix[m]=P.shadow.matrix,w++}n.directional[m]=X,m++}else if(P.isSpotLight){let X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(B).multiplyScalar(V),X.distance=W,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,n.spot[M]=X;let Z=P.shadow;if(P.map&&(n.spotLightMap[y]=P.map,y++,Z.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[M]=Z.matrix,P.castShadow){let ie=t.get(P);ie.shadowIntensity=Z.intensity,ie.shadowBias=Z.bias,ie.shadowNormalBias=Z.normalBias,ie.shadowRadius=Z.radius,ie.shadowMapSize=Z.mapSize,n.spotShadow[M]=ie,n.spotShadowMap[M]=Q,A++}M++}else if(P.isRectAreaLight){let X=e.get(P);X.color.copy(B).multiplyScalar(V),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),n.rectArea[R]=X,R++}else if(P.isPointLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){let Z=P.shadow,ie=t.get(P);ie.shadowIntensity=Z.intensity,ie.shadowBias=Z.bias,ie.shadowNormalBias=Z.normalBias,ie.shadowRadius=Z.radius,ie.shadowMapSize=Z.mapSize,ie.shadowCameraNear=Z.camera.near,ie.shadowCameraFar=Z.camera.far,n.pointShadow[p]=ie,n.pointShadowMap[p]=Q,n.pointShadowMatrix[p]=P.shadow.matrix,S++}n.point[p]=X,p++}else if(P.isHemisphereLight){let X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(V),X.groundColor.copy(P.groundColor).multiplyScalar(V),n.hemi[b]=X,b++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let D=n.hash;(D.sunLength!==f||D.directionalLength!==m||D.pointLength!==p||D.spotLength!==M||D.rectAreaLength!==R||D.hemiLength!==b||D.numSunShadows!==g||D.numDirectionalShadows!==w||D.numPointShadows!==S||D.numSpotShadows!==A||D.numSpotMaps!==y||D.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=m,n.spot.length=M,n.rectArea.length=R,n.point.length=p,n.hemi.length=b,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+y-T,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,D.sunLength=f,D.directionalLength=m,D.pointLength=p,D.spotLength=M,D.rectAreaLength=R,D.hemiLength=b,D.numSunShadows=g,D.numDirectionalShadows=w,D.numPointShadows=S,D.numSpotShadows=A,D.numSpotMaps=y,D.numLightProbes=C,n.version=Jg++)}function l(c,h){let u=0,d=0,f=0,g=0,v=0,m=0,p=h.matrixWorldInverse;for(let M=0,R=c.length;M<R;M++){let b=c[M];if(b.isSunLight){let w=n.sun[u];w.direction.setFromMatrixPosition(b.matrixWorld),w.direction.transformDirection(p),u++}else if(b.isDirectionalLight){let w=n.directional[d];w.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),d++}else if(b.isSpotLight){let w=n.spot[g];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),g++}else if(b.isRectAreaLight){let w=n.rectArea[v];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(p),a.identity(),r.copy(b.matrixWorld),r.premultiply(p),a.extractRotation(r),w.halfWidth.set(b.width*.5,0,0),w.halfHeight.set(0,b.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),v++}else if(b.isPointLight){let w=n.point[f];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){let w=n.hemi[m];w.direction.setFromMatrixPosition(b.matrixWorld),w.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function Cd(i){let e=new $g(i),t=[],n=[],s=[];function r(d){u.camera=d,t.length=0,n.length=0,s.length=0}function a(d){t.push(d)}function o(d){n.push(d)}function l(d){s.push(d)}function c(){e.setup(t)}function h(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Qg(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Cd(i),e.set(s,[o])):r>=a.length?(o=new Cd(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var e_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,t_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,n_=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],i_=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Pd=new gt,Br=new I,Mc=new I;function s_(i,e,t){let n=new Ss,s=new le,r=new le,a=new vt,o=new za,l=new Ha,c={},h=t.maxTextureSize,u={[Wn]:Ht,[Ht]:Wn,[yn]:yn},d=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:e_,fragmentShader:t_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ot;g.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Ge(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ki;let p=this.type;this.render=function(S,A,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===xh&&(Ve("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ki);let T=i.getRenderTarget(),C=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Xn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let O=p!==this.type;O&&A.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(B=>B.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,B=S.length;P<B;P++){let V=S[P],W=V.shadow;if(W===void 0){Ve("WebGLShadowMap:",V,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let Q=W.getFrameExtents();s.multiply(Q),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Q.x),s.x=r.x*Q.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Q.y),s.y=r.y*Q.y,W.mapSize.y=r.y));let X=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=X,W.map===null||O===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Ps){if(V.isPointLight){Ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new sn(s.x,s.y,{format:wi,type:Ln,minFilter:zt,magFilter:zt,generateMipmaps:!1}),W.map.texture.name=V.name+".shadowMap",W.map.depthTexture=new pi(s.x,s.y,bn),W.map.depthTexture.name=V.name+".shadowMapDepth",W.map.depthTexture.format=kn,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Ut,W.map.depthTexture.magFilter=Ut}else V.isPointLight?(W.map=new jo(s.x),W.map.depthTexture=new La(s.x,Dn)):(W.map=new sn(s.x,s.y),W.map.depthTexture=new pi(s.x,s.y,Dn)),W.map.depthTexture.name=V.name+".shadowMap",W.map.depthTexture.format=kn,this.type===ki?(W.map.depthTexture.compareFunction=X?Wo:Vo,W.map.depthTexture.minFilter=zt,W.map.depthTexture.magFilter=zt):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Ut,W.map.depthTexture.magFilter=Ut);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);let Z=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();V.isPointLight!==!0&&W.updateMatrices(V,y);for(let ie=0;ie<Z;ie++){let ge=W.getCamera(ie);if(V.isPointLight){let _e=W.camera,ze=W.matrix,Xe=V.distance||_e.far;Xe!==_e.far&&(_e.far=Xe,_e.updateProjectionMatrix()),Br.setFromMatrixPosition(V.matrixWorld),_e.position.copy(Br),Mc.copy(_e.position),Mc.add(n_[ie]),_e.up.copy(i_[ie]),_e.lookAt(Mc),_e.updateMatrixWorld(),ze.makeTranslation(-Br.x,-Br.y,-Br.z),Pd.multiplyMatrices(_e.projectionMatrix,_e.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Pd,_e.coordinateSystem,_e.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,ie),i.clear();else{ie===0&&(i.setRenderTarget(W.map),i.clear());let _e=W.getViewport(ie);a.set(r.x*_e.x,r.y*_e.y,r.x*_e.z,r.y*_e.w),F.viewport(a)}n=W.getFrustum(ie),b(A,y,ge,V,this.type)}W.isPointLightShadow!==!0&&this.type===Ps&&M(W,y),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(T,C,D)};function M(S,A){let y=e.update(v);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null?S.mapPass=new sn(s.x,s.y,{format:wi,type:Ln}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),d.uniforms.shadow_pass.value=S.map.depthTexture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(A,null,y,d,v,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(A,null,y,f,v,null)}function R(S,A,y,T){let C=null,D=y.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(D!==void 0)C=D;else if(C=y.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let F=C.uuid,O=A.uuid,P=c[F];P===void 0&&(P={},c[F]=P);let B=P[O];B===void 0&&(B=C.clone(),P[O]=B,A.addEventListener("dispose",w)),C=B}if(C.visible=A.visible,C.wireframe=A.wireframe,T===Ps?C.side=A.shadowSide!==null?A.shadowSide:A.side:C.side=A.shadowSide!==null?A.shadowSide:u[A.side],C.alphaMap=A.alphaMap,C.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,C.map=A.map,C.clipShadows=A.clipShadows,C.clippingPlanes=A.clippingPlanes,C.clipIntersection=A.clipIntersection,C.displacementMap=A.displacementMap,C.displacementScale=A.displacementScale,C.displacementBias=A.displacementBias,C.wireframeLinewidth=A.wireframeLinewidth,C.linewidth=A.linewidth,y.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let F=i.properties.get(C);F.light=y}return C}function b(S,A,y,T,C){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&C===Ps)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,S.matrixWorld);let O=e.update(S),P=S.material;if(Array.isArray(P)){let B=O.groups;for(let V=0,W=B.length;V<W;V++){let Q=B[V],X=P[Q.materialIndex];if(X&&X.visible){let Z=R(S,X,T,C);S.onBeforeShadow(i,S,A,y,O,Z,Q),i.renderBufferDirect(y,null,O,Z,S,Q),S.onAfterShadow(i,S,A,y,O,Z,Q)}}}else if(P.visible){let B=R(S,P,T,C);S.onBeforeShadow(i,S,A,y,O,B,null),i.renderBufferDirect(y,null,O,B,S,null),S.onAfterShadow(i,S,A,y,O,B,null)}}let F=S.children;for(let O=0,P=F.length;O<P;O++)b(F[O],A,y,T,C)}function w(S){S.target.removeEventListener("dispose",w);for(let y in c){let T=c[y],C=S.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function r_(i,e){function t(){let U=!1,ve=new vt,$=null,ue=new vt(0,0,0,0);return{setMask:function(Ee){$!==Ee&&!U&&(i.colorMask(Ee,Ee,Ee,Ee),$=Ee)},setLocked:function(Ee){U=Ee},setClear:function(Ee,se,Ie,Te,ut){ut===!0&&(Ee*=Te,se*=Te,Ie*=Te),ve.set(Ee,se,Ie,Te),ue.equals(ve)===!1&&(i.clearColor(Ee,se,Ie,Te),ue.copy(ve))},reset:function(){U=!1,$=null,ue.set(-1,0,0,0)}}}function n(){let U=!1,ve=!1,$=null,ue=null,Ee=null;return{setReversed:function(se){if(ve!==se){let Ie=e.get("EXT_clip_control");se?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),ve=se;let Te=Ee;Ee=null,this.setClear(Te)}},getReversed:function(){return ve},setTest:function(se){se?J(i.DEPTH_TEST):be(i.DEPTH_TEST)},setMask:function(se){$!==se&&!U&&(i.depthMask(se),$=se)},setFunc:function(se){if(ve&&(se=td[se]),ue!==se){switch(se){case va:i.depthFunc(i.NEVER);break;case Sa:i.depthFunc(i.ALWAYS);break;case Ma:i.depthFunc(i.LESS);break;case fs:i.depthFunc(i.LEQUAL);break;case wa:i.depthFunc(i.EQUAL);break;case Ea:i.depthFunc(i.GEQUAL);break;case Ta:i.depthFunc(i.GREATER);break;case Ra:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ue=se}},setLocked:function(se){U=se},setClear:function(se){Ee!==se&&(Ee=se,ve&&(se=1-se),i.clearDepth(se))},reset:function(){U=!1,$=null,ue=null,Ee=null,ve=!1}}}function s(){let U=!1,ve=null,$=null,ue=null,Ee=null,se=null,Ie=null,Te=null,ut=null;return{setTest:function(tt){U||(tt?J(i.STENCIL_TEST):be(i.STENCIL_TEST))},setMask:function(tt){ve!==tt&&!U&&(i.stencilMask(tt),ve=tt)},setFunc:function(tt,wt,St){($!==tt||ue!==wt||Ee!==St)&&(i.stencilFunc(tt,wt,St),$=tt,ue=wt,Ee=St)},setOp:function(tt,wt,St){(se!==tt||Ie!==wt||Te!==St)&&(i.stencilOp(tt,wt,St),se=tt,Ie=wt,Te=St)},setLocked:function(tt){U=tt},setClear:function(tt){ut!==tt&&(i.clearStencil(tt),ut=tt)},reset:function(){U=!1,ve=null,$=null,ue=null,Ee=null,se=null,Ie=null,Te=null,ut=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],v=null,m=!1,p=null,M=null,R=null,b=null,w=null,S=null,A=null,y=new We(0,0,0),T=0,C=!1,D=null,F=null,O=null,P=null,B=null,V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,Q=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(X)[1]),W=Q>=1):X.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),W=Q>=2);let Z=null,ie={},ge=i.getParameter(i.SCISSOR_BOX),_e=i.getParameter(i.VIEWPORT),ze=new vt().fromArray(ge),Xe=new vt().fromArray(_e);function qe(U,ve,$,ue){let Ee=new Uint8Array(4),se=i.createTexture();i.bindTexture(U,se),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ie=0;Ie<$;Ie++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ve,0,i.RGBA,1,1,ue,0,i.RGBA,i.UNSIGNED_BYTE,Ee):i.texImage2D(ve+Ie,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ee);return se}let q={};q[i.TEXTURE_2D]=qe(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=qe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=qe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=qe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(i.DEPTH_TEST),a.setFunc(fs),re(!1),ne(zl),J(i.CULL_FACE),oe(Xn);function J(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function be(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function Se(U,ve){return d[U]!==ve?(i.bindFramebuffer(U,ve),d[U]=ve,U===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ve),U===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ve),!0):!1}function ye(U,ve){let $=g,ue=!1;if(U){$=f.get(ve),$===void 0&&($=[],f.set(ve,$));let Ee=U.textures;if($.length!==Ee.length||$[0]!==i.COLOR_ATTACHMENT0){for(let se=0,Ie=Ee.length;se<Ie;se++)$[se]=i.COLOR_ATTACHMENT0+se;$.length=Ee.length,ue=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,ue=!0);ue&&i.drawBuffers($)}function Ue(U){return v!==U?(i.useProgram(U),v=U,!0):!1}let st={[zi]:i.FUNC_ADD,[Sh]:i.FUNC_SUBTRACT,[Mh]:i.FUNC_REVERSE_SUBTRACT};st[wh]=i.MIN,st[Eh]=i.MAX;let te={[Th]:i.ZERO,[Rh]:i.ONE,[Ah]:i.SRC_COLOR,[Wl]:i.SRC_ALPHA,[Nh]:i.SRC_ALPHA_SATURATE,[Dh]:i.DST_COLOR,[Ph]:i.DST_ALPHA,[Ch]:i.ONE_MINUS_SRC_COLOR,[Xl]:i.ONE_MINUS_SRC_ALPHA,[Lh]:i.ONE_MINUS_DST_COLOR,[Ih]:i.ONE_MINUS_DST_ALPHA,[Uh]:i.CONSTANT_COLOR,[Fh]:i.ONE_MINUS_CONSTANT_COLOR,[Oh]:i.CONSTANT_ALPHA,[Bh]:i.ONE_MINUS_CONSTANT_ALPHA};function oe(U,ve,$,ue,Ee,se,Ie,Te,ut,tt){if(U===Xn){m===!0&&(be(i.BLEND),m=!1);return}if(m===!1&&(J(i.BLEND),m=!0),U!==vh){if(U!==p||tt!==C){if((M!==zi||w!==zi)&&(i.blendEquation(i.FUNC_ADD),M=zi,w=zi),tt)switch(U){case Is:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Hl:i.blendFunc(i.ONE,i.ONE);break;case Gl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:je("WebGLState: Invalid blending: ",U);break}else switch(U){case Is:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Hl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Gl:je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vl:je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:je("WebGLState: Invalid blending: ",U);break}R=null,b=null,S=null,A=null,y.set(0,0,0),T=0,p=U,C=tt}return}Ee=Ee||ve,se=se||$,Ie=Ie||ue,(ve!==M||Ee!==w)&&(i.blendEquationSeparate(st[ve],st[Ee]),M=ve,w=Ee),($!==R||ue!==b||se!==S||Ie!==A)&&(i.blendFuncSeparate(te[$],te[ue],te[se],te[Ie]),R=$,b=ue,S=se,A=Ie),(Te.equals(y)===!1||ut!==T)&&(i.blendColor(Te.r,Te.g,Te.b,ut),y.copy(Te),T=ut),p=U,C=!1}function ae(U,ve){U.side===yn?be(i.CULL_FACE):J(i.CULL_FACE);let $=U.side===Ht;ve&&($=!$),re($),U.blending===Is&&U.transparent===!1?oe(Xn):oe(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);let ue=U.stencilWrite;o.setTest(ue),ue&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ne(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):be(i.SAMPLE_ALPHA_TO_COVERAGE)}function re(U){D!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),D=U)}function ne(U){U!==yh?(J(i.CULL_FACE),U!==F&&(U===zl?i.cullFace(i.BACK):U===bh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):be(i.CULL_FACE),F=U}function we(U){U!==O&&(W&&i.lineWidth(U),O=U)}function Ne(U,ve,$){U?(J(i.POLYGON_OFFSET_FILL),(P!==ve||B!==$)&&(P=ve,B=$,a.getReversed()&&(ve=-ve),i.polygonOffset(ve,$))):be(i.POLYGON_OFFSET_FILL)}function Le(U){U?J(i.SCISSOR_TEST):be(i.SCISSOR_TEST)}function Oe(U){U===void 0&&(U=i.TEXTURE0+V-1),Z!==U&&(i.activeTexture(U),Z=U)}function L(U,ve,$){$===void 0&&(Z===null?$=i.TEXTURE0+V-1:$=Z);let ue=ie[$];ue===void 0&&(ue={type:void 0,texture:void 0},ie[$]=ue),(ue.type!==U||ue.texture!==ve)&&(Z!==$&&(i.activeTexture($),Z=$),i.bindTexture(U,ve||q[U]),ue.type=U,ue.texture=ve)}function et(){let U=ie[Z];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Ye(){try{i.compressedTexImage2D(...arguments)}catch(U){je("WebGLState:",U)}}function E(){try{i.compressedTexImage3D(...arguments)}catch(U){je("WebGLState:",U)}}function _(){try{i.texSubImage2D(...arguments)}catch(U){je("WebGLState:",U)}}function k(){try{i.texSubImage3D(...arguments)}catch(U){je("WebGLState:",U)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(U){je("WebGLState:",U)}}function Y(){try{i.compressedTexSubImage3D(...arguments)}catch(U){je("WebGLState:",U)}}function ce(){try{i.texStorage2D(...arguments)}catch(U){je("WebGLState:",U)}}function he(){try{i.texStorage3D(...arguments)}catch(U){je("WebGLState:",U)}}function K(){try{i.texImage2D(...arguments)}catch(U){je("WebGLState:",U)}}function ee(){try{i.texImage3D(...arguments)}catch(U){je("WebGLState:",U)}}function de(U){return u[U]!==void 0?u[U]:i.getParameter(U)}function ke(U,ve){u[U]!==ve&&(i.pixelStorei(U,ve),u[U]=ve)}function pe(U){ze.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),ze.copy(U))}function xe(U){Xe.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Xe.copy(U))}function Pe(U,ve){let $=c.get(ve);$===void 0&&($=new WeakMap,c.set(ve,$));let ue=$.get(U);ue===void 0&&(ue=i.getUniformBlockIndex(ve,U.name),$.set(U,ue))}function Fe(U,ve){let ue=c.get(ve).get(U);l.get(ve)!==ue&&(i.uniformBlockBinding(ve,ue,U.__bindingPointIndex),l.set(ve,ue))}function Ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},Z=null,ie={},d={},f=new WeakMap,g=[],v=null,m=!1,p=null,M=null,R=null,b=null,w=null,S=null,A=null,y=new We(0,0,0),T=0,C=!1,D=null,F=null,O=null,P=null,B=null,ze.set(0,0,i.canvas.width,i.canvas.height),Xe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:J,disable:be,bindFramebuffer:Se,drawBuffers:ye,useProgram:Ue,setBlending:oe,setMaterial:ae,setFlipSided:re,setCullFace:ne,setLineWidth:we,setPolygonOffset:Ne,setScissorTest:Le,activeTexture:Oe,bindTexture:L,unbindTexture:et,compressedTexImage2D:Ye,compressedTexImage3D:E,texImage2D:K,texImage3D:ee,pixelStorei:ke,getParameter:de,updateUBOMapping:Pe,uniformBlockBinding:Fe,texStorage2D:ce,texStorage3D:he,texSubImage2D:_,texSubImage3D:k,compressedTexSubImage2D:G,compressedTexSubImage3D:Y,scissor:pe,viewport:xe,reset:Ze}}function a_(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new le,h=new WeakMap,u=new Set,d,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(E,_){return g?new OffscreenCanvas(E,_):ms("canvas")}function m(E,_,k){let G=1,Y=Ye(E);if((Y.width>k||Y.height>k)&&(G=k/Math.max(Y.width,Y.height)),G<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let ce=Math.floor(G*Y.width),he=Math.floor(G*Y.height);d===void 0&&(d=v(ce,he));let K=_?v(ce,he):d;return K.width=ce,K.height=he,K.getContext("2d").drawImage(E,0,0,ce,he),Ve("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+ce+"x"+he+")."),K}else return"data"in E&&Ve("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),E;return E}function p(E){return E.generateMipmaps}function M(E){i.generateMipmap(E)}function R(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(E,_,k,G,Y,ce=!1){if(E!==null){if(i[E]!==void 0)return i[E];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let he;G&&(he=e.get("EXT_texture_norm16"),he||Ve("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=_;if(_===i.RED&&(k===i.FLOAT&&(K=i.R32F),k===i.HALF_FLOAT&&(K=i.R16F),k===i.UNSIGNED_BYTE&&(K=i.R8),k===i.UNSIGNED_SHORT&&he&&(K=he.R16_EXT),k===i.SHORT&&he&&(K=he.R16_SNORM_EXT)),_===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(K=i.R8UI),k===i.UNSIGNED_SHORT&&(K=i.R16UI),k===i.UNSIGNED_INT&&(K=i.R32UI),k===i.BYTE&&(K=i.R8I),k===i.SHORT&&(K=i.R16I),k===i.INT&&(K=i.R32I)),_===i.RG&&(k===i.FLOAT&&(K=i.RG32F),k===i.HALF_FLOAT&&(K=i.RG16F),k===i.UNSIGNED_BYTE&&(K=i.RG8),k===i.UNSIGNED_SHORT&&he&&(K=he.RG16_EXT),k===i.SHORT&&he&&(K=he.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(K=i.RG8UI),k===i.UNSIGNED_SHORT&&(K=i.RG16UI),k===i.UNSIGNED_INT&&(K=i.RG32UI),k===i.BYTE&&(K=i.RG8I),k===i.SHORT&&(K=i.RG16I),k===i.INT&&(K=i.RG32I)),_===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(K=i.RGB8UI),k===i.UNSIGNED_SHORT&&(K=i.RGB16UI),k===i.UNSIGNED_INT&&(K=i.RGB32UI),k===i.BYTE&&(K=i.RGB8I),k===i.SHORT&&(K=i.RGB16I),k===i.INT&&(K=i.RGB32I)),_===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),k===i.UNSIGNED_INT&&(K=i.RGBA32UI),k===i.BYTE&&(K=i.RGBA8I),k===i.SHORT&&(K=i.RGBA16I),k===i.INT&&(K=i.RGBA32I)),_===i.RGB&&(k===i.UNSIGNED_SHORT&&he&&(K=he.RGB16_EXT),k===i.SHORT&&he&&(K=he.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),_===i.RGBA){let ee=ce?er:it.getTransfer(Y);k===i.FLOAT&&(K=i.RGBA32F),k===i.HALF_FLOAT&&(K=i.RGBA16F),k===i.UNSIGNED_BYTE&&(K=ee===ht?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&he&&(K=he.RGBA16_EXT),k===i.SHORT&&he&&(K=he.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function w(E,_){let k;return E?_===null||_===Dn||_===Ns?k=i.DEPTH24_STENCIL8:_===bn?k=i.DEPTH32F_STENCIL8:_===Ls&&(k=i.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Dn||_===Ns?k=i.DEPTH_COMPONENT24:_===bn?k=i.DEPTH_COMPONENT32F:_===Ls&&(k=i.DEPTH_COMPONENT16),k}function S(E,_){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==Ut&&E.minFilter!==zt?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function A(E){let _=E.target;_.removeEventListener("dispose",A),T(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&u.delete(_)}function y(E){let _=E.target;_.removeEventListener("dispose",y),D(_)}function T(E){let _=n.get(E);if(_.__webglInit===void 0)return;let k=E.source,G=f.get(k);if(G){let Y=G[_.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&C(E),Object.keys(G).length===0&&f.delete(k)}n.remove(E)}function C(E){let _=n.get(E);i.deleteTexture(_.__webglTexture);let k=E.source,G=f.get(k);delete G[_.__cacheKey],a.memory.textures--}function D(E){let _=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(_.__webglFramebuffer[G]))for(let Y=0;Y<_.__webglFramebuffer[G].length;Y++)i.deleteFramebuffer(_.__webglFramebuffer[G][Y]);else i.deleteFramebuffer(_.__webglFramebuffer[G]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[G])}else{if(Array.isArray(_.__webglFramebuffer))for(let G=0;G<_.__webglFramebuffer.length;G++)i.deleteFramebuffer(_.__webglFramebuffer[G]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let G=0;G<_.__webglColorRenderbuffer.length;G++)_.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[G]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let k=E.textures;for(let G=0,Y=k.length;G<Y;G++){let ce=n.get(k[G]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),a.memory.textures--),n.remove(k[G])}n.remove(E)}let F=0;function O(){F=0}function P(){return F}function B(E){F=E}function V(){let E=F;return E>=s.maxTextures&&Ve("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,E}function W(E){let _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function Q(E,_){let k=n.get(E);if(E.isVideoTexture&&L(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&k.__version!==E.version){let G=E.image;if(G===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{be(k,E,_);return}}else E.isExternalTexture&&(k.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+_)}function X(E,_){let k=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&k.__version!==E.version){be(k,E,_);return}else E.isExternalTexture&&(k.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+_)}function Z(E,_){let k=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&k.__version!==E.version){be(k,E,_);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+_)}function ie(E,_){let k=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&k.__version!==E.version){Se(k,E,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+_)}let ge={[ei]:i.REPEAT,[Bn]:i.CLAMP_TO_EDGE,[Aa]:i.MIRRORED_REPEAT},_e={[Ut]:i.NEAREST,[Hh]:i.NEAREST_MIPMAP_NEAREST,[Cr]:i.NEAREST_MIPMAP_LINEAR,[zt]:i.LINEAR,[so]:i.LINEAR_MIPMAP_NEAREST,[Si]:i.LINEAR_MIPMAP_LINEAR},ze={[Xh]:i.NEVER,[Jh]:i.ALWAYS,[qh]:i.LESS,[Vo]:i.LEQUAL,[jh]:i.EQUAL,[Wo]:i.GEQUAL,[Yh]:i.GREATER,[Zh]:i.NOTEQUAL};function Xe(E,_){if(_.type===bn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===zt||_.magFilter===so||_.magFilter===Cr||_.magFilter===Si||_.minFilter===zt||_.minFilter===so||_.minFilter===Cr||_.minFilter===Si)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,ge[_.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,ge[_.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,ge[_.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,_e[_.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,_e[_.minFilter]),_.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,ze[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ut||_.minFilter!==Cr&&_.minFilter!==Si||_.type===bn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function qe(E,_){let k=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",A));let G=_.source,Y=f.get(G);Y===void 0&&(Y={},f.set(G,Y));let ce=W(_);if(ce!==E.__cacheKey){Y[ce]===void 0&&(Y[ce]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),Y[ce].usedTimes++;let he=Y[E.__cacheKey];he!==void 0&&(Y[E.__cacheKey].usedTimes--,he.usedTimes===0&&C(_)),E.__cacheKey=ce,E.__webglTexture=Y[ce].texture}return k}function q(E,_,k){return Math.floor(Math.floor(E/k)/_)}function J(E,_,k,G){let ce=E.updateRanges;if(ce.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,k,G,_.data);else{ce.sort((ke,pe)=>ke.start-pe.start);let he=0;for(let ke=1;ke<ce.length;ke++){let pe=ce[he],xe=ce[ke],Pe=pe.start+pe.count,Fe=q(xe.start,_.width,4),Ze=q(pe.start,_.width,4);xe.start<=Pe+1&&Fe===Ze&&q(xe.start+xe.count-1,_.width,4)===Fe?pe.count=Math.max(pe.count,xe.start+xe.count-pe.start):(++he,ce[he]=xe)}ce.length=he+1;let K=t.getParameter(i.UNPACK_ROW_LENGTH),ee=t.getParameter(i.UNPACK_SKIP_PIXELS),de=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let ke=0,pe=ce.length;ke<pe;ke++){let xe=ce[ke],Pe=Math.floor(xe.start/4),Fe=Math.ceil(xe.count/4),Ze=Pe%_.width,U=Math.floor(Pe/_.width),ve=Fe,$=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ze),t.pixelStorei(i.UNPACK_SKIP_ROWS,U),t.texSubImage2D(i.TEXTURE_2D,0,Ze,U,ve,$,k,G,_.data)}E.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,K),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(i.UNPACK_SKIP_ROWS,de)}}function be(E,_,k){let G=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(G=i.TEXTURE_3D);let Y=qe(E,_),ce=_.source;t.bindTexture(G,E.__webglTexture,i.TEXTURE0+k);let he=n.get(ce);if(ce.version!==he.__version||Y===!0){if(t.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let $=it.getPrimaries(it.workingColorSpace),ue=_.colorSpace===Bt?null:it.getPrimaries(_.colorSpace),Ee=_.colorSpace===Bt||$===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee)}t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let ee=m(_.image,!1,s.maxTextureSize);ee=et(_,ee);let de=r.convert(_.format,_.colorSpace),ke=r.convert(_.type),pe=b(_.internalFormat,de,ke,_.normalized,_.colorSpace,_.isVideoTexture);Xe(G,_);let xe,Pe=_.mipmaps,Fe=_.isVideoTexture!==!0,Ze=he.__version===void 0||Y===!0,U=ce.dataReady,ve=S(_,ee);if(_.isDepthTexture)pe=w(_.format===Mi,_.type),Ze&&(Fe?t.texStorage2D(i.TEXTURE_2D,1,pe,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,pe,ee.width,ee.height,0,de,ke,null));else if(_.isDataTexture)if(Pe.length>0){Fe&&Ze&&t.texStorage2D(i.TEXTURE_2D,ve,pe,Pe[0].width,Pe[0].height);for(let $=0,ue=Pe.length;$<ue;$++)xe=Pe[$],Fe?U&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,xe.width,xe.height,de,ke,xe.data):t.texImage2D(i.TEXTURE_2D,$,pe,xe.width,xe.height,0,de,ke,xe.data);_.generateMipmaps=!1}else Fe?(Ze&&t.texStorage2D(i.TEXTURE_2D,ve,pe,ee.width,ee.height),U&&J(_,ee,de,ke)):t.texImage2D(i.TEXTURE_2D,0,pe,ee.width,ee.height,0,de,ke,ee.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Fe&&Ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,pe,Pe[0].width,Pe[0].height,ee.depth);for(let $=0,ue=Pe.length;$<ue;$++)if(xe=Pe[$],_.format!==xn)if(de!==null)if(Fe){if(U)if(_.layerUpdates.size>0){let Ee=uc(xe.width,xe.height,_.format,_.type);for(let se of _.layerUpdates){let Ie=xe.data.subarray(se*Ee/xe.data.BYTES_PER_ELEMENT,(se+1)*Ee/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,se,xe.width,xe.height,1,de,Ie)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,xe.width,xe.height,ee.depth,de,xe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,pe,xe.width,xe.height,ee.depth,0,xe.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?U&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,xe.width,xe.height,ee.depth,de,ke,xe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,$,pe,xe.width,xe.height,ee.depth,0,de,ke,xe.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Fe&&Ze&&t.texStorage2D(i.TEXTURE_2D,ve,pe,Pe[0].width,Pe[0].height);for(let $=0,ue=Pe.length;$<ue;$++)xe=Pe[$],_.format!==xn?de!==null?Fe?U&&t.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,xe.width,xe.height,de,xe.data):t.compressedTexImage2D(i.TEXTURE_2D,$,pe,xe.width,xe.height,0,xe.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?U&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,xe.width,xe.height,de,ke,xe.data):t.texImage2D(i.TEXTURE_2D,$,pe,xe.width,xe.height,0,de,ke,xe.data)}else if(_.isDataArrayTexture)if(Fe){if(Ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,pe,ee.width,ee.height,ee.depth),U)if(_.layerUpdates.size>0){let $=uc(ee.width,ee.height,_.format,_.type);for(let ue of _.layerUpdates){let Ee=ee.data.subarray(ue*$/ee.data.BYTES_PER_ELEMENT,(ue+1)*$/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ue,ee.width,ee.height,1,de,ke,Ee)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,de,ke,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,pe,ee.width,ee.height,ee.depth,0,de,ke,ee.data);else if(_.isData3DTexture)Fe?(Ze&&t.texStorage3D(i.TEXTURE_3D,ve,pe,ee.width,ee.height,ee.depth),U&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,de,ke,ee.data)):t.texImage3D(i.TEXTURE_3D,0,pe,ee.width,ee.height,ee.depth,0,de,ke,ee.data);else if(_.isFramebufferTexture){if(Ze)if(Fe)t.texStorage2D(i.TEXTURE_2D,ve,pe,ee.width,ee.height);else{let $=ee.width,ue=ee.height;for(let Ee=0;Ee<ve;Ee++)t.texImage2D(i.TEXTURE_2D,Ee,pe,$,ue,0,de,ke,null),$>>=1,ue>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let $=i.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),ee.parentNode!==$){$.appendChild(ee),u.add(_),$.onpaint=ue=>{let Ee=ue.changedElements;for(let se of u)Ee.includes(se.image)&&(se.needsUpdate=!0)},$.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ee);else{let Ee=i.RGBA,se=i.RGBA,Ie=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ee,se,Ie,ee)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Pe.length>0){if(Fe&&Ze){let $=Ye(Pe[0]);t.texStorage2D(i.TEXTURE_2D,ve,pe,$.width,$.height)}for(let $=0,ue=Pe.length;$<ue;$++)xe=Pe[$],Fe?U&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,de,ke,xe):t.texImage2D(i.TEXTURE_2D,$,pe,de,ke,xe);_.generateMipmaps=!1}else if(Fe){if(Ze){let $=Ye(ee);t.texStorage2D(i.TEXTURE_2D,ve,pe,$.width,$.height)}U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de,ke,ee)}else t.texImage2D(i.TEXTURE_2D,0,pe,de,ke,ee);p(_)&&M(G),he.__version=ce.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function Se(E,_,k){if(_.image.length!==6)return;let G=qe(E,_),Y=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+k);let ce=n.get(Y);if(Y.version!==ce.__version||G===!0){t.activeTexture(i.TEXTURE0+k);let he=it.getPrimaries(it.workingColorSpace),K=_.colorSpace===Bt?null:it.getPrimaries(_.colorSpace),ee=_.colorSpace===Bt||he===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let de=_.isCompressedTexture||_.image[0].isCompressedTexture,ke=_.image[0]&&_.image[0].isDataTexture,pe=[];for(let se=0;se<6;se++)!de&&!ke?pe[se]=m(_.image[se],!0,s.maxCubemapSize):pe[se]=ke?_.image[se].image:_.image[se],pe[se]=et(_,pe[se]);let xe=pe[0],Pe=r.convert(_.format,_.colorSpace),Fe=r.convert(_.type),Ze=b(_.internalFormat,Pe,Fe,_.normalized,_.colorSpace),U=_.isVideoTexture!==!0,ve=ce.__version===void 0||G===!0,$=Y.dataReady,ue=S(_,xe);Xe(i.TEXTURE_CUBE_MAP,_);let Ee;if(de){U&&ve&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,Ze,xe.width,xe.height);for(let se=0;se<6;se++){Ee=pe[se].mipmaps;for(let Ie=0;Ie<Ee.length;Ie++){let Te=Ee[Ie];_.format!==xn?Pe!==null?U?$&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie,0,0,Te.width,Te.height,Pe,Te.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie,Ze,Te.width,Te.height,0,Te.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie,0,0,Te.width,Te.height,Pe,Fe,Te.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie,Ze,Te.width,Te.height,0,Pe,Fe,Te.data)}}}else{if(Ee=_.mipmaps,U&&ve){Ee.length>0&&ue++;let se=Ye(pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,Ze,se.width,se.height)}for(let se=0;se<6;se++)if(ke){U?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,pe[se].width,pe[se].height,Pe,Fe,pe[se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ze,pe[se].width,pe[se].height,0,Pe,Fe,pe[se].data);for(let Ie=0;Ie<Ee.length;Ie++){let ut=Ee[Ie].image[se].image;U?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie+1,0,0,ut.width,ut.height,Pe,Fe,ut.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie+1,Ze,ut.width,ut.height,0,Pe,Fe,ut.data)}}else{U?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Pe,Fe,pe[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ze,Pe,Fe,pe[se]);for(let Ie=0;Ie<Ee.length;Ie++){let Te=Ee[Ie];U?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie+1,0,0,Pe,Fe,Te.image[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie+1,Ze,Pe,Fe,Te.image[se])}}}p(_)&&M(i.TEXTURE_CUBE_MAP),ce.__version=Y.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function ye(E,_,k,G,Y,ce){let he=r.convert(k.format,k.colorSpace),K=r.convert(k.type),ee=b(k.internalFormat,he,K,k.normalized,k.colorSpace),de=n.get(_),ke=n.get(k);if(ke.__renderTarget=_,!de.__hasExternalTextures){let pe=Math.max(1,_.width>>ce),xe=Math.max(1,_.height>>ce);Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?t.texImage3D(Y,ce,ee,pe,xe,_.depth,0,he,K,null):t.texImage2D(Y,ce,ee,pe,xe,0,he,K,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),Oe(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,Y,ke.__webglTexture,0,Le(_)):(Y===i.TEXTURE_2D||Y>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,Y,ke.__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(E,_,k){if(i.bindRenderbuffer(i.RENDERBUFFER,E),_.depthBuffer){let G=_.depthTexture,Y=G&&G.isDepthTexture?G.type:null,ce=w(_.stencilBuffer,Y),he=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Oe(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Le(_),ce,_.width,_.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,Le(_),ce,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ce,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,E)}else{let G=_.textures;for(let Y=0;Y<G.length;Y++){let ce=G[Y],he=r.convert(ce.format,ce.colorSpace),K=r.convert(ce.type),ee=b(ce.internalFormat,he,K,ce.normalized,ce.colorSpace);Oe(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Le(_),ee,_.width,_.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,Le(_),ee,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ee,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function st(E,_,k){let G=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Y=n.get(_.depthTexture);if(Y.__renderTarget=_,(!Y.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),G){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,_.depthTexture.addEventListener("dispose",A)),Y.__webglTexture===void 0){Y.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Xe(i.TEXTURE_CUBE_MAP,_.depthTexture);let de=r.convert(_.depthTexture.format),ke=r.convert(_.depthTexture.type),pe;_.depthTexture.format===kn?pe=i.DEPTH_COMPONENT24:_.depthTexture.format===Mi&&(pe=i.DEPTH24_STENCIL8);for(let xe=0;xe<6;xe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,pe,_.width,_.height,0,de,ke,null)}}else Q(_.depthTexture,0);let ce=Y.__webglTexture,he=Le(_),K=G?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,ee=_.depthTexture.format===Mi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===kn)Oe(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,K,ce,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,ee,K,ce,0);else if(_.depthTexture.format===Mi)Oe(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,K,ce,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,ee,K,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function te(E){let _=n.get(E),k=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){let G=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),G){let Y=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,G.removeEventListener("dispose",Y)};G.addEventListener("dispose",Y),_.__depthDisposeCallback=Y}_.__boundDepthTexture=G}if(E.depthTexture&&!_.__autoAllocateDepthBuffer)if(k)for(let G=0;G<6;G++)st(_.__webglFramebuffer[G],E,G);else{let G=E.texture.mipmaps;G&&G.length>0?st(_.__webglFramebuffer[0],E,0):st(_.__webglFramebuffer,E,0)}else if(k){_.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[G]),_.__webglDepthbuffer[G]===void 0)_.__webglDepthbuffer[G]=i.createRenderbuffer(),Ue(_.__webglDepthbuffer[G],E,!1);else{let Y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=_.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,ce)}}else{let G=E.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Ue(_.__webglDepthbuffer,E,!1);else{let Y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,ce)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function oe(E,_,k){let G=n.get(E);_!==void 0&&ye(G.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&te(E)}function ae(E){let _=E.texture,k=n.get(E),G=n.get(_);E.addEventListener("dispose",y);let Y=E.textures,ce=E.isWebGLCubeRenderTarget===!0,he=Y.length>1;if(he||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=_.version,a.memory.textures++),ce){k.__webglFramebuffer=[];for(let K=0;K<6;K++)if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer[K]=[];for(let ee=0;ee<_.mipmaps.length;ee++)k.__webglFramebuffer[K][ee]=i.createFramebuffer()}else k.__webglFramebuffer[K]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer=[];for(let K=0;K<_.mipmaps.length;K++)k.__webglFramebuffer[K]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(he)for(let K=0,ee=Y.length;K<ee;K++){let de=n.get(Y[K]);de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&Oe(E)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let K=0;K<Y.length;K++){let ee=Y[K];k.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[K]);let de=r.convert(ee.format,ee.colorSpace),ke=r.convert(ee.type),pe=b(ee.internalFormat,de,ke,ee.normalized,ee.colorSpace,E.isXRRenderTarget===!0),xe=Le(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,pe,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,k.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Ue(k.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),Xe(i.TEXTURE_CUBE_MAP,_);for(let K=0;K<6;K++)if(_.mipmaps&&_.mipmaps.length>0)for(let ee=0;ee<_.mipmaps.length;ee++)ye(k.__webglFramebuffer[K][ee],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ee);else ye(k.__webglFramebuffer[K],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);p(_)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let K=0,ee=Y.length;K<ee;K++){let de=Y[K],ke=n.get(de),pe=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(pe=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,ke.__webglTexture),Xe(pe,de),ye(k.__webglFramebuffer,E,de,i.COLOR_ATTACHMENT0+K,pe,0),p(de)&&M(pe)}t.unbindTexture()}else{let K=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(K=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(K,G.__webglTexture),Xe(K,_),_.mipmaps&&_.mipmaps.length>0)for(let ee=0;ee<_.mipmaps.length;ee++)ye(k.__webglFramebuffer[ee],E,_,i.COLOR_ATTACHMENT0,K,ee);else ye(k.__webglFramebuffer,E,_,i.COLOR_ATTACHMENT0,K,0);p(_)&&M(K),t.unbindTexture()}E.depthBuffer&&te(E)}function re(E){let _=E.textures;for(let k=0,G=_.length;k<G;k++){let Y=_[k];if(p(Y)){let ce=R(E),he=n.get(Y).__webglTexture;t.bindTexture(ce,he),M(ce),t.unbindTexture()}}}let ne=[],we=[];function Ne(E){if(E.samples>0){if(Oe(E)===!1){let _=E.textures,k=E.width,G=E.height,Y=i.COLOR_BUFFER_BIT,ce=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=n.get(E),K=_.length>1;if(K)for(let de=0;de<_.length;de++)t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer);let ee=E.texture.mipmaps;ee&&ee.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let de=0;de<_.length;de++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Y|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Y|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,he.__webglColorRenderbuffer[de]);let ke=n.get(_[de]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ke,0)}i.blitFramebuffer(0,0,k,G,0,0,k,G,Y,i.NEAREST),l===!0&&(ne.length=0,we.length=0,ne.push(i.COLOR_ATTACHMENT0+de),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&(ne.push(ce),we.push(ce),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,we)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ne))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let de=0;de<_.length;de++){t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,he.__webglColorRenderbuffer[de]);let ke=n.get(_[de]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,ke,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){let _=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Le(E){return Math.min(s.maxSamples,E.samples)}function Oe(E){let _=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function L(E){let _=a.render.frame;h.get(E)!==_&&(h.set(E,_),E.update())}function et(E,_){let k=E.colorSpace,G=E.format,Y=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||k!==Qs&&k!==Bt&&(it.getTransfer(k)===ht?(G!==xn||Y!==rn)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):je("WebGLTextures: Unsupported texture color space:",k)),_}function Ye(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=O,this.getTextureUnits=P,this.setTextureUnits=B,this.setTexture2D=Q,this.setTexture2DArray=X,this.setTexture3D=Z,this.setTextureCube=ie,this.rebindTextures=oe,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Oe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function o_(i,e){function t(n,s=Bt){let r,a=it.getTransfer(s);if(n===rn)return i.UNSIGNED_BYTE;if(n===ao)return i.UNSIGNED_SHORT_4_4_4_4;if(n===oo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===tc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===nc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ql)return i.BYTE;if(n===ec)return i.SHORT;if(n===Ls)return i.UNSIGNED_SHORT;if(n===ro)return i.INT;if(n===Dn)return i.UNSIGNED_INT;if(n===bn)return i.FLOAT;if(n===Ln)return i.HALF_FLOAT;if(n===ic)return i.ALPHA;if(n===sc)return i.RGB;if(n===xn)return i.RGBA;if(n===kn)return i.DEPTH_COMPONENT;if(n===Mi)return i.DEPTH_STENCIL;if(n===lo)return i.RED;if(n===co)return i.RED_INTEGER;if(n===wi)return i.RG;if(n===ho)return i.RG_INTEGER;if(n===uo)return i.RGBA_INTEGER;if(n===Pr||n===Ir||n===Dr||n===Lr)if(a===ht)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Pr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Pr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ir)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Lr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fo||n===po||n===mo||n===go)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===fo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===po)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===mo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===go)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_o||n===yo||n===bo||n===xo||n===vo||n===Nr||n===So)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===_o||n===yo)return a===ht?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===bo)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===xo)return r.COMPRESSED_R11_EAC;if(n===vo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Nr)return r.COMPRESSED_RG11_EAC;if(n===So)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Mo||n===wo||n===Eo||n===To||n===Ro||n===Ao||n===Co||n===Po||n===Io||n===Do||n===Lo||n===No||n===Uo||n===Fo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Mo)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wo)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Eo)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===To)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ro)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ao)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Co)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Po)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Io)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Do)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Lo)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===No)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Uo)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fo)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Oo||n===Bo||n===ko)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Oo)return a===ht?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Bo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ko)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zo||n===Ho||n===Ur||n===Go)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===zo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ho)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ur)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Go)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ns?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var l_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,c_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ic=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new cr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new fn({vertexShader:l_,fragmentShader:c_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ge(new Oi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Dc=class extends Cn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,v=typeof XRWebGLBinding<"u",m=new Ic,p={},M=t.getContextAttributes(),R=null,b=null,w=[],S=[],A=new le,y=null,T=null,C=new kt;C.viewport=new vt;let D=new kt;D.viewport=new vt;let F=[C,D],O=new Qa,P=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let J=w[q];return J===void 0&&(J=new bs,w[q]=J),J.getTargetRaySpace()},this.getControllerGrip=function(q){let J=w[q];return J===void 0&&(J=new bs,w[q]=J),J.getGripSpace()},this.getHand=function(q){let J=w[q];return J===void 0&&(J=new bs,w[q]=J),J.getHandSpace()};function V(q){let J=S.indexOf(q.inputSource);if(J===-1)return;let be=w[J];be!==void 0&&(be.update(q.inputSource,q.frame,c||a),be.dispatchEvent({type:q.type,data:q.inputSource}))}function W(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",Q);for(let q=0;q<w.length;q++){let J=S[q];J!==null&&(S[q]=null,w[q].disconnect(J))}P=null,B=null,m.reset();for(let q in p)delete p[q];if(e.setRenderTarget(R),f=null,d=null,u=null,s=null,b=null,qe.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(A.width,A.height,!1),T!==null){let q=T.camera;q.fov=T.fov,q.zoom=T.zoom,q.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(R=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",W),s.addEventListener("inputsourceschange",Q),M.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(A),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Se=null,ye=null;M.depth&&(ye=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=M.stencil?Mi:kn,Se=M.stencil?Ns:Dn);let Ue={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Ue),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new sn(d.textureWidth,d.textureHeight,{format:xn,type:rn,depthTexture:new pi(d.textureWidth,d.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let be={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,be),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new sn(f.framebufferWidth,f.framebufferHeight,{format:xn,type:rn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),qe.setContext(s),qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Q(q){for(let J=0;J<q.removed.length;J++){let be=q.removed[J],Se=S.indexOf(be);Se>=0&&(S[Se]=null,w[Se].disconnect(be))}for(let J=0;J<q.added.length;J++){let be=q.added[J],Se=S.indexOf(be);if(Se===-1){for(let Ue=0;Ue<w.length;Ue++)if(Ue>=S.length){S.push(be),Se=Ue;break}else if(S[Ue]===null){S[Ue]=be,Se=Ue;break}if(Se===-1)break}let ye=w[Se];ye&&ye.connect(be)}}let X=new I,Z=new I;function ie(q,J,be){X.setFromMatrixPosition(J.matrixWorld),Z.setFromMatrixPosition(be.matrixWorld);let Se=X.distanceTo(Z),ye=J.projectionMatrix.elements,Ue=be.projectionMatrix.elements,st=ye[14]/(ye[10]-1),te=ye[14]/(ye[10]+1),oe=(ye[9]+1)/ye[5],ae=(ye[9]-1)/ye[5],re=(ye[8]-1)/ye[0],ne=(Ue[8]+1)/Ue[0],we=st*re,Ne=st*ne,Le=Se/(-re+ne),Oe=Le*-re;if(J.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Oe),q.translateZ(Le),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),ye[10]===-1)q.projectionMatrix.copy(J.projectionMatrix),q.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let L=st+Le,et=te+Le,Ye=we-Oe,E=Ne+(Se-Oe),_=oe*te/et*L,k=ae*te/et*L;q.projectionMatrix.makePerspective(Ye,E,_,k,L,et),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ge(q,J){J===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(J.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let J=q.near,be=q.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(be=m.depthFar)),O.near=D.near=C.near=J,O.far=D.far=C.far=be,(P!==O.near||B!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),P=O.near,B=O.far),O.layers.mask=q.layers.mask|6,C.layers.mask=O.layers.mask&-5,D.layers.mask=O.layers.mask&-3;let Se=q.parent,ye=O.cameras;ge(O,Se);for(let Ue=0;Ue<ye.length;Ue++)ge(ye[Ue],Se);ye.length===2?ie(O,C,D):O.projectionMatrix.copy(C.projectionMatrix),T===null&&q.isPerspectiveCamera&&(T={camera:q,fov:q.fov,zoom:q.zoom}),_e(q,O,Se)};function _e(q,J,be){be===null?q.matrix.copy(J.matrixWorld):(q.matrix.copy(be.matrixWorld),q.matrix.invert(),q.matrix.multiply(J.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(J.projectionMatrix),q.projectionMatrixInverse.copy(J.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=_s*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(q){return p[q]};let ze=null;function Xe(q,J){if(h=J.getViewerPose(c||a),g=J,h!==null){let be=h.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let Se=!1;be.length!==O.cameras.length&&(O.cameras.length=0,Se=!0);for(let te=0;te<be.length;te++){let oe=be[te],ae=null;if(f!==null)ae=f.getViewport(oe);else{let ne=u.getViewSubImage(d,oe);ae=ne.viewport,te===0&&(e.setRenderTargetTextures(b,ne.colorTexture,ne.depthStencilTexture),e.setRenderTarget(b))}let re=F[te];re===void 0&&(re=new kt,re.layers.enable(te),re.viewport=new vt,F[te]=re),re.matrix.fromArray(oe.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(oe.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(ae.x,ae.y,ae.width,ae.height),te===0&&(O.matrix.copy(re.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Se===!0&&O.cameras.push(re)}let ye=s.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=n.getBinding();let te=u.getDepthInformation(be[0]);te&&te.isValid&&te.texture&&m.init(te,s.renderState)}if(ye&&ye.includes("camera-access")&&v){e.state.unbindTexture(),u=n.getBinding();for(let te=0;te<be.length;te++){let oe=be[te].camera;if(oe){let ae=p[oe];ae||(ae=new cr,p[oe]=ae);let re=u.getCameraImage(oe);ae.sourceTexture=re}}}}for(let be=0;be<w.length;be++){let Se=S[be],ye=w[be];Se!==null&&ye!==void 0&&ye.update(Se,J,c||a)}ze&&ze(q,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}let qe=new Id;qe.setAnimationLoop(Xe),this.setAnimationLoop=function(q){ze=q},this.dispose=function(){}}},h_=new gt,Od=new Je;Od.set(-1,0,0,0,1,0,0,0,1);function d_(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,cc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,R,b){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,R):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ht&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ht&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=e.get(p),R=M.envMap,b=M.envMapRotation;R&&(m.envMap.value=R,m.envMapRotation.value.setFromMatrix4(h_.makeRotationFromEuler(b)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Od),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,R){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=R*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ht&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function u_(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,w){let S=w.program;n.uniformBlockBinding(b,S)}function c(b,w){let S=s[b.id];S===void 0&&(m(b),S=h(b),s[b.id]=S,b.addEventListener("dispose",M));let A=w.program;n.updateUBOMapping(b,A);let y=e.render.frame;r[b.id]!==y&&(d(b),r[b.id]=y)}function h(b){let w=u();b.__bindingPointIndex=w;let S=i.createBuffer(),A=b.__size,y=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,A,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,S),S}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let w=s[b.id],S=b.uniforms,A=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let y=0,T=S.length;y<T;y++){let C=S[y];if(Array.isArray(C))for(let D=0,F=C.length;D<F;D++)f(C[D],y,D,A);else f(C,y,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,w,S,A){if(v(b,w,S,A)===!0){let y=b.__offset,T=b.value;if(Array.isArray(T)){let C=0;for(let D=0;D<T.length;D++){let F=T[D],O=p(F);g(F,b.__data,C),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(C+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,b.__data)}}function g(b,w,S){typeof b=="number"||typeof b=="boolean"?w[0]=b:b.isMatrix3?(w[0]=b.elements[0],w[1]=b.elements[1],w[2]=b.elements[2],w[3]=0,w[4]=b.elements[3],w[5]=b.elements[4],w[6]=b.elements[5],w[7]=0,w[8]=b.elements[6],w[9]=b.elements[7],w[10]=b.elements[8],w[11]=0):ArrayBuffer.isView(b)?w.set(new b.constructor(b.buffer,b.byteOffset,w.length)):b.toArray(w,S)}function v(b,w,S,A){let y=b.value,T=w+"_"+S;if(A[T]===void 0)return typeof y=="number"||typeof y=="boolean"?A[T]=y:ArrayBuffer.isView(y)?A[T]=y.slice():A[T]=y.clone(),!0;{let C=A[T];if(typeof y=="number"||typeof y=="boolean"){if(C!==y)return A[T]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(C.equals(y)===!1)return C.copy(y),!0}}return!1}function m(b){let w=b.uniforms,S=0,A=16;for(let T=0,C=w.length;T<C;T++){let D=Array.isArray(w[T])?w[T]:[w[T]];for(let F=0,O=D.length;F<O;F++){let P=D[F],B=Array.isArray(P.value)?P.value:[P.value];for(let V=0,W=B.length;V<W;V++){let Q=B[V],X=p(Q),Z=S%A,ie=Z%X.boundary,ge=Z+ie;S+=ie,ge!==0&&A-ge<X.storage&&(S+=A-ge),P.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=S,S+=X.storage}}}let y=S%A;return y>0&&(S+=A-y),b.__size=S,b.__cache={},this}function p(b){let w={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(w.boundary=4,w.storage=4):b.isVector2?(w.boundary=8,w.storage=8):b.isVector3||b.isColor?(w.boundary=16,w.storage=12):b.isVector4?(w.boundary=16,w.storage=16):b.isMatrix3?(w.boundary=48,w.storage=48):b.isMatrix4?(w.boundary=64,w.storage=64):b.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(w.boundary=16,w.storage=b.byteLength):Ve("WebGLRenderer: Unsupported uniform value type.",b),w}function M(b){let w=b.target;w.removeEventListener("dispose",M);let S=a.indexOf(w.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function R(){for(let b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:R}}var f_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),qn=null;function p_(){return qn===null&&(qn=new rr(f_,16,16,wi,Ln),qn.name="DFG_LUT",qn.minFilter=zt,qn.magFilter=zt,qn.wrapS=Bn,qn.wrapT=Bn,qn.generateMipmaps=!1,qn.needsUpdate=!0),qn}var Yo=class{constructor(e={}){let{canvas:t=$h(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=rn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let v=f,m=new Set([uo,ho,co]),p=new Set([rn,Dn,Ls,Ns,ao,oo]),M=new Uint32Array(4),R=new Int32Array(4),b=new I,w=null,S=null,A=[],y=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=In,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,D=!1,F=null,O=null,P=null,B=null;this._outputColorSpace=Pt;let V=0,W=0,Q=null,X=-1,Z=null,ie=new vt,ge=new vt,_e=null,ze=new We(0),Xe=0,qe=t.width,q=t.height,J=1,be=null,Se=null,ye=new vt(0,0,qe,q),Ue=new vt(0,0,qe,q),st=!1,te=new Ss,oe=!1,ae=!1,re=new gt,ne=new I,we=new vt,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Le=!1;function Oe(){return Q===null?J:1}let L=n;function et(x,N){return t.getContext(x,N)}let Ye,E,_,k,G,Y,ce,he,K,ee,de,ke,pe,xe,Pe,Fe,Ze,U,ve,$,ue,Ee,se;try{let x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",ut,!1),t.addEventListener("webglcontextrestored",tt,!1),t.addEventListener("webglcontextcreationerror",wt,!1),L===null){let N="webgl2";if(L=et(N,x),L===null)throw et(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ie()}catch(x){throw t.removeEventListener("webglcontextlost",ut,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",wt,!1),je("WebGLRenderer: "+x.message),x}function Ie(){Ye=new v0(L),Ye.init(),ue=new o_(L,Ye),E=new d0(L,Ye,e,ue),_=new r_(L,Ye),E.reversedDepthBuffer&&d&&_.buffers.depth.setReversed(!0),O=L.createFramebuffer(),P=L.createFramebuffer(),B=L.createFramebuffer(),k=new w0(L),G=new Xg,Y=new a_(L,Ye,_,G,E,ue,k),ce=new x0(C),he=new Tf(L),Ee=new c0(L,he),K=new S0(L,he,k,Ee),ee=new T0(L,K,he,Ee,k),U=new E0(L,E,Y),Pe=new u0(G),de=new Wg(C,ce,Ye,E,Ee,Pe),ke=new d_(C,G),pe=new jg,xe=new Qg(Ye),Ze=new l0(C,ce,_,ee,g,l),Fe=new s_(C,ee,E),se=new u_(L,k,E,_),ve=new h0(L,Ye,k),$=new M0(L,Ye,k),k.programs=de.programs,C.capabilities=E,C.extensions=Ye,C.properties=G,C.renderLists=pe,C.shadowMap=Fe,C.state=_,C.info=k}v!==rn&&(T=new A0(v,t.width,t.height,o,s,r));let Te=new Dc(C,L);this.xr=Te,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let x=Ye.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=Ye.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(x){x!==void 0&&(J=x,this.setSize(qe,q,!1))},this.getSize=function(x){return x.set(qe,q)},this.setSize=function(x,N,j=!0){if(Te.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}qe=x,q=N,t.width=Math.floor(x*J),t.height=Math.floor(N*J),j===!0&&(t.style.width=x+"px",t.style.height=N+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,x,N)},this.getDrawingBufferSize=function(x){return x.set(qe*J,q*J).floor()},this.setDrawingBufferSize=function(x,N,j){qe=x,q=N,J=j,t.width=Math.floor(x*j),t.height=Math.floor(N*j),this.setViewport(0,0,x,N)},this.setEffects=function(x){if(v===rn){je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let N=0;N<x.length;N++)if(x[N].isOutputPass===!0){Ve("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(ie)},this.getViewport=function(x){return x.copy(ye)},this.setViewport=function(x,N,j,H){x.isVector4?ye.set(x.x,x.y,x.z,x.w):ye.set(x,N,j,H),_.viewport(ie.copy(ye).multiplyScalar(J).round())},this.getScissor=function(x){return x.copy(Ue)},this.setScissor=function(x,N,j,H){x.isVector4?Ue.set(x.x,x.y,x.z,x.w):Ue.set(x,N,j,H),_.scissor(ge.copy(Ue).multiplyScalar(J).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(x){_.setScissorTest(st=x)},this.setOpaqueSort=function(x){be=x},this.setTransparentSort=function(x){Se=x},this.getClearColor=function(x){return x.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(x=!0,N=!0,j=!0){let H=0;if(x){let z=!1;if(Q!==null){let fe=Q.texture.format;z=m.has(fe)}if(z){let fe=Q.texture.type,Ce=p.has(fe),me=Ze.getClearColor(),Be=Ze.getClearAlpha(),Ae=me.r,He=me.g,$e=me.b;Ce?(M[0]=Ae,M[1]=He,M[2]=$e,M[3]=Be,L.clearBufferuiv(L.COLOR,0,M)):(R[0]=Ae,R[1]=He,R[2]=$e,R[3]=Be,L.clearBufferiv(L.COLOR,0,R))}else H|=L.COLOR_BUFFER_BIT}N&&(H|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),F=x},this.dispose=function(){t.removeEventListener("webglcontextlost",ut,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",wt,!1),Ze.dispose(),pe.dispose(),xe.dispose(),G.dispose(),ce.dispose(),ee.dispose(),Ee.dispose(),se.dispose(),de.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",Sn),Te.removeEventListener("sessionend",ln),Rt.stop()};function ut(x){x.preventDefault(),ac("WebGLRenderer: Context Lost."),D=!0}function tt(){ac("WebGLRenderer: Context Restored."),D=!1;let x=k.autoReset,N=Fe.enabled,j=Fe.autoUpdate,H=Fe.needsUpdate,z=Fe.type;Ie(),k.autoReset=x,Fe.enabled=N,Fe.autoUpdate=j,Fe.needsUpdate=H,Fe.type=z}function wt(x){je("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function St(x){let N=x.target;N.removeEventListener("dispose",St),jr(N)}function jr(x){Nn(x),G.remove(x)}function Nn(x){let N=G.get(x).programs;N!==void 0&&(N.forEach(function(j){de.releaseProgram(j)}),x.isShaderMaterial&&de.releaseShaderCache(x))}this.renderBufferDirect=function(x,N,j,H,z,fe){N===null&&(N=Ne);let Ce=z.isMesh&&z.matrixWorld.determinantAffine()<0,me=nn(x,N,j,H,z);_.setMaterial(H,Ce);let Be=j.index,Ae=1;if(H.wireframe===!0){if(Be=K.getWireframeAttribute(j),Be===void 0)return;Ae=2}let He=j.drawRange,$e=j.attributes.position,Re=He.start*Ae,ct=(He.start+He.count)*Ae;fe!==null&&(Re=Math.max(Re,fe.start*Ae),ct=Math.min(ct,(fe.start+fe.count)*Ae)),Be!==null?(Re=Math.max(Re,0),ct=Math.min(ct,Be.count)):$e!=null&&(Re=Math.max(Re,0),ct=Math.min(ct,$e.count));let At=ct-Re;if(At<0||At===1/0)return;Ee.setup(z,H,me,j,Be);let bt,mt=ve;if(Be!==null&&(bt=he.get(Be),mt=$,mt.setIndex(bt)),z.isMesh)H.wireframe===!0?(_.setLineWidth(H.wireframeLinewidth*Oe()),mt.setMode(L.LINES)):mt.setMode(L.TRIANGLES);else if(z.isLine){let Vt=H.linewidth;Vt===void 0&&(Vt=1),_.setLineWidth(Vt*Oe()),z.isLineSegments?mt.setMode(L.LINES):z.isLineLoop?mt.setMode(L.LINE_LOOP):mt.setMode(L.LINE_STRIP)}else z.isPoints?mt.setMode(L.POINTS):z.isSprite&&mt.setMode(L.TRIANGLES);if(z.isBatchedMesh)if(Ye.get("WEBGL_multi_draw"))mt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Vt=z._multiDrawStarts,De=z._multiDrawCounts,Kt=z._multiDrawCount,ot=Be?he.get(Be).bytesPerElement:1,gn=G.get(H).currentProgram.getUniforms();for(let Fn=0;Fn<Kt;Fn++)gn.setValue(L,"_gl_DrawID",Fn),mt.render(Vt[Fn]/ot,De[Fn])}else if(z.isInstancedMesh)mt.renderInstances(Re,At,z.count);else if(j.isInstancedBufferGeometry){let Vt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,De=Math.min(j.instanceCount,Vt);mt.renderInstances(Re,At,De)}else mt.render(Re,At)};function on(x,N,j,H){F!==null&&x.isNodeMaterial&&F.setObject(H,x),oe===!0&&Pe.setState(x,j,!1),x.transparent===!0&&x.side===yn&&x.forceSinglePass===!1?(x.side=Ht,x.needsUpdate=!0,Ti(x,N,H),x.side=Wn,x.needsUpdate=!0,Ti(x,N,H),x.side=yn):Ti(x,N,H)}this.compile=function(x,N,j=null){j===null&&(j=x),F!==null&&F.renderStart(x,N,j),S=xe.get(j),S.init(N),y.push(S),j.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(S.pushLight(z),z.castShadow&&S.pushShadow(z))}),x!==j&&x.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(S.pushLight(z),z.castShadow&&S.pushShadow(z))}),S.setupLights(),F!==null&&F.updateLights(S.state.lightsArray),ae=this.localClippingEnabled,oe=Pe.init(this.clippingPlanes,ae),oe===!0&&Pe.setGlobalState(this.clippingPlanes,N),F!==null&&Fe.render(S.state.shadowsArray,j,N);let H=new Set;return x.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let fe=z.material;if(fe)if(Array.isArray(fe))for(let Ce=0;Ce<fe.length;Ce++){let me=fe[Ce];on(me,j,N,z),H.add(me)}else on(fe,j,N,z),H.add(fe)}),S=y.pop(),F!==null&&F.renderEnd(),H},this.compileAsync=function(x,N,j=null){let H=this.compile(x,N,j);return new Promise(z=>{function fe(){if(H.forEach(function(Ce){let Be=G.get(Ce).currentProgram;(Be===void 0||Be.isReady())&&H.delete(Ce)}),H.size===0){z(x);return}setTimeout(fe,10)}Ye.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Gt=null;function Yr(x){Gt&&Gt(x)}function Sn(){Rt.stop()}function ln(){Rt.start()}let Rt=new Id;Rt.setAnimationLoop(Yr),typeof self<"u"&&Rt.setContext(self),this.setAnimationLoop=function(x){Gt=x,Te.setAnimationLoop(x),x===null?Rt.stop():Rt.start()},Te.addEventListener("sessionstart",Sn),Te.addEventListener("sessionend",ln),this.render=function(x,N){if(N!==void 0&&N.isCamera!==!0){je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;F!==null&&F.renderStart(x,N);let j=Te.enabled===!0&&Te.isPresenting===!0,H=T!==null&&(Q===null||j)&&T.begin(C,Q);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(N),N=Te.getCamera()),x.isScene===!0&&x.onBeforeRender(C,x,N,Q),S=xe.get(x,y.length),S.init(N),S.state.textureUnits=Y.getTextureUnits(),y.push(S),re.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),te.setFromProjectionMatrix(re,An,N.reversedDepth),ae=this.localClippingEnabled,oe=Pe.init(this.clippingPlanes,ae),w=pe.get(x,A.length),w.init(),A.push(w),Te.enabled===!0&&Te.isPresenting===!0){let Ce=C.xr.getDepthSensingMesh();Ce!==null&&ji(Ce,N,-1/0,C.sortObjects)}ji(x,N,0,C.sortObjects),w.finish(),F!==null&&F.updateLights(S.state.lightsArray),C.sortObjects===!0&&w.sort(be,Se),Le=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,Le&&Ze.addToRenderList(w,x),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),oe===!0&&Pe.beginShadows();let z=S.state.shadowsArray;if(Fe.render(z,x,N),oe===!0&&Pe.endShadows(),(H&&T.hasRenderPass())===!1){let Ce=w.opaque,me=w.transmissive;if(S.setupLights(),N.isArrayCamera){let Be=N.cameras;if(me.length>0)for(let Ae=0,He=Be.length;Ae<He;Ae++){let $e=Be[Ae];nl(Ce,me,x,$e)}Le&&Ze.render(x);for(let Ae=0,He=Be.length;Ae<He;Ae++){let $e=Be[Ae];Mn(w,x,$e,$e.viewport)}}else me.length>0&&nl(Ce,me,x,N),Le&&Ze.render(x),Mn(w,x,N)}Q!==null&&W===0&&(Y.updateMultisampleRenderTarget(Q),Y.updateRenderTargetMipmap(Q)),H&&T.end(C),x.isScene===!0&&x.onAfterRender(C,x,N),Ee.resetDefaultState(),X=-1,Z=null,y.pop(),y.length>0?(S=y[y.length-1],Y.setTextureUnits(S.state.textureUnits),oe===!0&&Pe.setGlobalState(C.clippingPlanes,S.state.camera)):S=null,A.pop(),A.length>0?w=A[A.length-1]:w=null,F!==null&&F.renderEnd()};function ji(x,N,j,H){if(x.visible===!1)return;if(x.layers.test(N.layers)){if(x.isGroup)j=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(N);else if(x.isLightProbeGrid)S.pushLightProbeGrid(x);else if(x.isLight)S.pushLight(x),x.castShadow&&S.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||x.intersectsFrustum(te)){H&&we.setFromMatrixPosition(x.matrixWorld).applyMatrix4(re);let Ce=ee.update(x),me=x.material;me.visible&&w.push(x,Ce,me,j,we.z,null,N)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||x.intersectsFrustum(te))){let Ce=ee.update(x),me=x.material;if(H&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),we.copy(x.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),we.copy(Ce.boundingSphere.center)),we.applyMatrix4(x.matrixWorld).applyMatrix4(re)),Array.isArray(me)){let Be=Ce.groups;for(let Ae=0,He=Be.length;Ae<He;Ae++){let $e=Be[Ae],Re=me[$e.materialIndex];Re&&Re.visible&&w.push(x,Ce,Re,j,we.z,$e,N)}}else me.visible&&w.push(x,Ce,me,j,we.z,null,N)}}let fe=x.children;for(let Ce=0,me=fe.length;Ce<me;Ce++)ji(fe[Ce],N,j,H)}function Mn(x,N,j,H){let{opaque:z,transmissive:fe,transparent:Ce}=x;S.setupLightsView(j),oe===!0&&Pe.setGlobalState(C.clippingPlanes,j),H&&_.viewport(ie.copy(H)),z.length>0&&Zt(z,N,j),fe.length>0&&Zt(fe,N,j),Ce.length>0&&Zt(Ce,N,j),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function nl(x,N,j,H){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[H.id]===void 0){let Re=Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[H.id]=new sn(1,1,{generateMipmaps:!0,type:Re?Ln:rn,minFilter:Si,samples:Math.max(4,E.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:it.workingColorSpace})}let fe=S.state.transmissionRenderTarget[H.id],Ce=H.viewport||ie;fe.setSize(Ce.z*C.transmissionResolutionScale,Ce.w*C.transmissionResolutionScale);let me=C.getRenderTarget(),Be=C.getActiveCubeFace(),Ae=C.getActiveMipmapLevel();C.setRenderTarget(fe),C.getClearColor(ze),Xe=C.getClearAlpha(),Xe<1&&C.setClearColor(16777215,.5),C.clear(),Le&&Ze.render(j);let He=C.toneMapping;C.toneMapping=In;let $e=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),S.setupLightsView(H),oe===!0&&Pe.setGlobalState(C.clippingPlanes,H),Zt(x,j,H),Y.updateMultisampleRenderTarget(fe),Y.updateRenderTargetMipmap(fe),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let ct=0,At=N.length;ct<At;ct++){let bt=N[ct],{object:mt,geometry:Vt,material:De,group:Kt}=bt;if(De.side===yn&&mt.layers.test(H.layers)){let ot=De.side;De.side=Ht,De.needsUpdate=!0,Jt(mt,j,H,Vt,De,Kt),De.side=ot,De.needsUpdate=!0,Re=!0}}Re===!0&&(Y.updateMultisampleRenderTarget(fe),Y.updateRenderTargetMipmap(fe))}C.setRenderTarget(me,Be,Ae),C.setClearColor(ze,Xe),$e!==void 0&&(H.viewport=$e),C.toneMapping=He}function Zt(x,N,j){let H=N.isScene===!0?N.overrideMaterial:null;for(let z=0,fe=x.length;z<fe;z++){let Ce=x[z],{object:me,geometry:Be,group:Ae}=Ce,He=Ce.material;He.allowOverride===!0&&H!==null&&(He=H),me.layers.test(j.layers)&&Jt(me,N,j,Be,He,Ae)}}function Jt(x,N,j,H,z,fe){F!==null&&z.isNodeMaterial&&F.setObject(x,z),x.onBeforeRender(C,N,j,H,z,fe),x.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),z.onBeforeRender(C,N,j,H,x,fe),z.transparent===!0&&z.side===yn&&z.forceSinglePass===!1?(z.side=Ht,z.needsUpdate=!0,C.renderBufferDirect(j,N,H,z,x,fe),z.side=Wn,z.needsUpdate=!0,C.renderBufferDirect(j,N,H,z,x,fe),z.side=yn):C.renderBufferDirect(j,N,H,z,x,fe),x.onAfterRender(C,N,j,H,z,fe)}function Ti(x,N,j){N.isScene!==!0&&(N=Ne);let H=G.get(x),z=S.state.lights,fe=S.state.shadowsArray,Ce=z.state.version,me=de.getParameters(x,z.state,fe,N,j,S.state.lightProbeGridArray),Be=de.getProgramCacheKey(me),Ae=H.programs;H.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?N.environment:null,H.fog=N.fog;let He=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;H.envMap=ce.get(x.envMap||H.environment,He),H.envMapRotation=H.environment!==null&&x.envMap===null?N.environmentRotation:x.envMapRotation,Ae===void 0&&(x.addEventListener("dispose",St),Ae=new Map,H.programs=Ae);let $e=Ae.get(Be);if($e!==void 0){if(H.currentProgram===$e&&H.lightsStateVersion===Ce)return il(x,me),$e}else me.uniforms=de.getUniforms(x),F!==null&&x.isNodeMaterial&&F.build(x,j,me),x.onBeforeCompile(me,C),$e=de.acquireProgram(me,Be),Ae.set(Be,$e),H.uniforms=me.uniforms;let Re=H.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Re.clippingPlanes=Pe.uniform),il(x,me),H.needsLights=Un(x),H.lightsStateVersion=Ce,H.needsLights&&(Re.ambientLightColor.value=z.state.ambient,Re.lightProbe.value=z.state.probe,Re.sunLights.value=z.state.sun,Re.sunLightShadows.value=z.state.sunShadow,Re.directionalLights.value=z.state.directional,Re.directionalLightShadows.value=z.state.directionalShadow,Re.spotLights.value=z.state.spot,Re.spotLightShadows.value=z.state.spotShadow,Re.rectAreaLights.value=z.state.rectArea,Re.ltc_1.value=z.state.rectAreaLTC1,Re.ltc_2.value=z.state.rectAreaLTC2,Re.pointLights.value=z.state.point,Re.pointLightShadows.value=z.state.pointShadow,Re.hemisphereLights.value=z.state.hemi,Re.sunShadowMatrix.value=z.state.sunShadowMatrix,Re.sunShadowCascade.value=z.state.sunShadowCascade,Re.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Re.spotLightMatrix.value=z.state.spotLightMatrix,Re.spotLightMap.value=z.state.spotLightMap,Re.pointShadowMatrix.value=z.state.pointShadowMatrix),H.lightProbeGrid=S.state.lightProbeGridArray.length>0,H.currentProgram=$e,H.uniformsList=null,$e}function wn(x){if(x.uniformsList===null){let N=x.currentProgram.getUniforms();x.uniformsList=Os.seqWithValue(N.seq,x.uniforms)}return x.uniformsList}function il(x,N){let j=G.get(x);j.outputColorSpace=N.outputColorSpace,j.batching=N.batching,j.batchingColor=N.batchingColor,j.instancing=N.instancing,j.instancingColor=N.instancingColor,j.instancingMorph=N.instancingMorph,j.skinning=N.skinning,j.morphTargets=N.morphTargets,j.morphNormals=N.morphNormals,j.morphColors=N.morphColors,j.morphTargetsCount=N.morphTargetsCount,j.numClippingPlanes=N.numClippingPlanes,j.numIntersection=N.numClipIntersection,j.vertexAlphas=N.vertexAlphas,j.vertexTangents=N.vertexTangents,j.toneMapping=N.toneMapping}function mn(x,N){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;b.setFromMatrixPosition(N.matrixWorld);for(let j=0,H=x.length;j<H;j++){let z=x[j];if(z.texture!==null&&z.boundingBox.containsPoint(b))return z}return null}function nn(x,N,j,H,z){N.isScene!==!0&&(N=Ne),Y.resetTextureUnits();let fe=N.fog,Ce=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?N.environment:null,me=Q===null?C.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:it.workingColorSpace,Be=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Ae=ce.get(H.envMap||Ce,Be),He=H.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,$e=!!j.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Re=!!j.morphAttributes.position,ct=!!j.morphAttributes.normal,At=!!j.morphAttributes.color,bt=In;H.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(bt=C.toneMapping);let mt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Vt=mt!==void 0?mt.length:0,De=G.get(H),Kt=S.state.lights;if(oe===!0&&(ae===!0||x!==Z)){let _t=x===Z&&H.id===X;Pe.setState(H,x,_t)}let ot=!1;H.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Kt.state.version||De.outputColorSpace!==me||z.isBatchedMesh&&De.batching===!1||!z.isBatchedMesh&&De.batching===!0||z.isBatchedMesh&&De.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&De.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&De.instancing===!1||!z.isInstancedMesh&&De.instancing===!0||z.isSkinnedMesh&&De.skinning===!1||!z.isSkinnedMesh&&De.skinning===!0||z.isInstancedMesh&&De.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&De.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&De.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&De.instancingMorph===!1&&z.morphTexture!==null||De.envMap!==Ae||H.fog===!0&&De.fog!==fe||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==Pe.numPlanes||De.numIntersection!==Pe.numIntersection)||De.vertexAlphas!==He||De.vertexTangents!==$e||De.morphTargets!==Re||De.morphNormals!==ct||De.morphColors!==At||De.toneMapping!==bt||De.morphTargetsCount!==Vt||!!De.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(ot=!0):(ot=!0,De.__version=H.version);let gn=De.currentProgram;ot===!0&&(gn=Ti(H,N,z),F&&H.isNodeMaterial&&F.onUpdateProgram(H,gn,De));let Fn=!1,si=!1,Yi=!1,pt=gn.getUniforms(),Et=De.uniforms;if(_.useProgram(gn.program)&&(Fn=!0,si=!0,Yi=!0),H.id!==X&&(X=H.id,si=!0),De.needsLights){let _t=mn(S.state.lightProbeGridArray,z);De.lightProbeGrid!==_t&&(De.lightProbeGrid=_t,si=!0)}if(Fn||Z!==x){_.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),pt.setValue(L,"projectionMatrix",x.projectionMatrix),pt.setValue(L,"viewMatrix",x.matrixWorldInverse);let ai=pt.map.cameraPosition;ai!==void 0&&ai.setValue(L,ne.setFromMatrixPosition(x.matrixWorld)),E.logarithmicDepthBuffer&&pt.setValue(L,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&pt.setValue(L,"isOrthographic",x.isOrthographicCamera===!0),Z!==x&&(Z=x,si=!0,Yi=!0)}if(De.needsLights&&(Kt.state.sunShadowMap.length>0&&pt.setValue(L,"sunShadowMap",Kt.state.sunShadowMap,Y),Kt.state.directionalShadowMap.length>0&&pt.setValue(L,"directionalShadowMap",Kt.state.directionalShadowMap,Y),Kt.state.spotShadowMap.length>0&&pt.setValue(L,"spotShadowMap",Kt.state.spotShadowMap,Y),Kt.state.pointShadowMap.length>0&&pt.setValue(L,"pointShadowMap",Kt.state.pointShadowMap,Y)),z.isSkinnedMesh){pt.setOptional(L,z,"bindMatrix"),pt.setOptional(L,z,"bindMatrixInverse");let _t=z.skeleton;_t&&(_t.boneTexture===null&&_t.computeBoneTexture(),pt.setValue(L,"boneTexture",_t.boneTexture,Y))}z.isBatchedMesh&&(pt.setOptional(L,z,"batchingTexture"),pt.setValue(L,"batchingTexture",z._matricesTexture,Y),pt.setOptional(L,z,"batchingIdTexture"),pt.setValue(L,"batchingIdTexture",z._indirectTexture,Y),pt.setOptional(L,z,"batchingColorTexture"),z._colorsTexture!==null&&pt.setValue(L,"batchingColorTexture",z._colorsTexture,Y));let ri=j.morphAttributes;if((ri.position!==void 0||ri.normal!==void 0||ri.color!==void 0)&&U.update(z,j,gn),(si||De.receiveShadow!==z.receiveShadow)&&(De.receiveShadow=z.receiveShadow,pt.setValue(L,"receiveShadow",z.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&N.environment!==null&&(Et.envMapIntensity.value=N.environmentIntensity),Et.dfgLUT!==void 0&&(Et.dfgLUT.value=p_()),si){if(pt.setValue(L,"toneMappingExposure",C.toneMappingExposure),De.needsLights&&Zr(Et,Yi),fe&&H.fog===!0&&ke.refreshFogUniforms(Et,fe),ke.refreshMaterialUniforms(Et,H,J,q,S.state.transmissionRenderTarget[x.id]),De.needsLights&&De.lightProbeGrid){let _t=De.lightProbeGrid;Et.probesSH.value=_t.texture,Et.probesMin.value.copy(_t.boundingBox.min),Et.probesMax.value.copy(_t.boundingBox.max),Et.probesResolution.value.copy(_t.resolution)}Os.upload(L,wn(De),Et,Y)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Os.upload(L,wn(De),Et,Y),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&pt.setValue(L,"center",z.center),pt.setValue(L,"modelViewMatrix",z.modelViewMatrix),pt.setValue(L,"normalMatrix",z.normalMatrix),pt.setValue(L,"modelMatrix",z.matrixWorld),H.uniformsGroups!==void 0){let _t=H.uniformsGroups;for(let ai=0,Zi=_t.length;ai<Zi;ai++){let zc=_t[ai];se.update(zc,gn),se.bind(zc,gn)}}return gn}function Zr(x,N){x.ambientLightColor.needsUpdate=N,x.lightProbe.needsUpdate=N,x.sunLights.needsUpdate=N,x.sunLightShadows.needsUpdate=N,x.directionalLights.needsUpdate=N,x.directionalLightShadows.needsUpdate=N,x.pointLights.needsUpdate=N,x.pointLightShadows.needsUpdate=N,x.spotLights.needsUpdate=N,x.spotLightShadows.needsUpdate=N,x.rectAreaLights.needsUpdate=N,x.hemisphereLights.needsUpdate=N}function Un(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(x,N,j){let H=G.get(x);H.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),G.get(x.texture).__webglTexture=N,G.get(x.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:j,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,N){let j=G.get(x);j.__webglFramebuffer=N,j.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(x,N=0,j=0){Q=x,V=N,W=j;let H=null,z=!1,fe=!1;if(x){let me=G.get(x);if(me.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(L.FRAMEBUFFER,me.__webglFramebuffer),ie.copy(x.viewport),ge.copy(x.scissor),_e=x.scissorTest,_.viewport(ie),_.scissor(ge),_.setScissorTest(_e),X=-1;return}else if(me.__webglFramebuffer===void 0)Y.setupRenderTarget(x);else if(me.__hasExternalTextures)Y.rebindTextures(x,G.get(x.texture).__webglTexture,G.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let He=x.depthTexture;if(me.__boundDepthTexture!==He){if(He!==null&&G.has(He)&&(x.width!==He.image.width||x.height!==He.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(x)}}let Be=x.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(fe=!0);let Ae=G.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ae[N])?H=Ae[N][j]:H=Ae[N],z=!0):x.samples>0&&Y.useMultisampledRTT(x)===!1?H=G.get(x).__webglMultisampledFramebuffer:Array.isArray(Ae)?H=Ae[j]:H=Ae,ie.copy(x.viewport),ge.copy(x.scissor),_e=x.scissorTest}else ie.copy(ye).multiplyScalar(J).floor(),ge.copy(Ue).multiplyScalar(J).floor(),_e=st;if(j!==0&&(H=O),_.bindFramebuffer(L.FRAMEBUFFER,H)&&_.drawBuffers(x,H),_.viewport(ie),_.scissor(ge),_.setScissorTest(_e),z){let me=G.get(x.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,me.__webglTexture,j)}else if(fe){let me=N;for(let Be=0;Be<x.textures.length;Be++){let Ae=G.get(x.textures[Be]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Be,Ae.__webglTexture,j,me)}}else if(x!==null&&j!==0){let me=G.get(x.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,me.__webglTexture,j)}X=-1};function sl(x){let N=G.get(x);return(N.__readFormat!==x.format||N.__readType!==x.type)&&(N.__readFormat=x.format,N.__readType=x.type,N.__formatReadable=E.textureFormatReadable(x.format),N.__typeReadable=E.textureTypeReadable(x.type)),N}this.readRenderTargetPixels=function(x,N,j,H,z,fe,Ce,me=0){if(!(x&&x.isWebGLRenderTarget)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=G.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Ce!==void 0&&(Be=Be[Ce]),Be){_.bindFramebuffer(L.FRAMEBUFFER,Be);try{let Ae=x.textures[me],He=Ae.format,$e=Ae.type;x.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+me);let Re=sl(Ae);if(Re.__formatReadable===!1){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Re.__typeReadable===!1){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=x.width-H&&j>=0&&j<=x.height-z&&L.readPixels(N,j,H,z,ue.convert(He),ue.convert($e),fe)}finally{let Ae=Q!==null?G.get(Q).__webglFramebuffer:null;_.bindFramebuffer(L.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(x,N,j,H,z,fe,Ce,me=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=G.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Ce!==void 0&&(Be=Be[Ce]),Be)if(N>=0&&N<=x.width-H&&j>=0&&j<=x.height-z){_.bindFramebuffer(L.FRAMEBUFFER,Be);let Ae=x.textures[me],He=Ae.format,$e=Ae.type;x.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+me);let Re=sl(Ae);if(Re.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Re.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ct=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ct),L.bufferData(L.PIXEL_PACK_BUFFER,fe.byteLength,L.STREAM_READ),L.readPixels(N,j,H,z,ue.convert(He),ue.convert($e),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let At=Q!==null?G.get(Q).__webglFramebuffer:null;_.bindFramebuffer(L.FRAMEBUFFER,At);let bt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await ed(L,bt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,ct),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,fe),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(ct),L.deleteSync(bt),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,N=null,j=0){let H=Math.pow(2,-j),z=Math.floor(x.image.width*H),fe=Math.floor(x.image.height*H),Ce=N!==null?N.x:0,me=N!==null?N.y:0;Y.setTexture2D(x,0),L.copyTexSubImage2D(L.TEXTURE_2D,j,0,0,Ce,me,z,fe),_.unbindTexture()},this.copyTextureToTexture=function(x,N,j=null,H=null,z=0,fe=0){let Ce,me,Be,Ae,He,$e,Re,ct,At,bt=x.isCompressedTexture?x.mipmaps[fe]:x.image;if(j!==null)Ce=j.max.x-j.min.x,me=j.max.y-j.min.y,Be=j.isBox3?j.max.z-j.min.z:1,Ae=j.min.x,He=j.min.y,$e=j.isBox3?j.min.z:0;else{let Et=Math.pow(2,-z);Ce=Math.floor(bt.width*Et),me=Math.floor(bt.height*Et),x.isDataArrayTexture?Be=bt.depth:x.isData3DTexture?Be=Math.floor(bt.depth*Et):Be=1,Ae=0,He=0,$e=0}H!==null?(Re=H.x,ct=H.y,At=H.z):(Re=0,ct=0,At=0);let mt=ue.convert(N.format),Vt=ue.convert(N.type),De;N.isData3DTexture?(Y.setTexture3D(N,0),De=L.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Y.setTexture2DArray(N,0),De=L.TEXTURE_2D_ARRAY):(Y.setTexture2D(N,0),De=L.TEXTURE_2D),_.activeTexture(L.TEXTURE0),_.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),_.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),_.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);let Kt=_.getParameter(L.UNPACK_ROW_LENGTH),ot=_.getParameter(L.UNPACK_IMAGE_HEIGHT),gn=_.getParameter(L.UNPACK_SKIP_PIXELS),Fn=_.getParameter(L.UNPACK_SKIP_ROWS),si=_.getParameter(L.UNPACK_SKIP_IMAGES);_.pixelStorei(L.UNPACK_ROW_LENGTH,bt.width),_.pixelStorei(L.UNPACK_IMAGE_HEIGHT,bt.height),_.pixelStorei(L.UNPACK_SKIP_PIXELS,Ae),_.pixelStorei(L.UNPACK_SKIP_ROWS,He),_.pixelStorei(L.UNPACK_SKIP_IMAGES,$e);let Yi=x.isDataArrayTexture||x.isData3DTexture,pt=N.isDataArrayTexture||N.isData3DTexture;if(x.isDepthTexture){let Et=G.get(x),ri=G.get(N),_t=G.get(Et.__renderTarget),ai=G.get(ri.__renderTarget);_.bindFramebuffer(L.READ_FRAMEBUFFER,_t.__webglFramebuffer),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,ai.__webglFramebuffer);for(let Zi=0;Zi<Be;Zi++)Yi&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,G.get(x).__webglTexture,z,$e+Zi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,G.get(N).__webglTexture,fe,At+Zi)),L.blitFramebuffer(Ae,He,Ce,me,Re,ct,Ce,me,L.DEPTH_BUFFER_BIT,L.NEAREST);_.bindFramebuffer(L.READ_FRAMEBUFFER,null),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(z!==0||x.isRenderTargetTexture||G.has(x)){let Et=G.get(x),ri=G.get(N);_.bindFramebuffer(L.READ_FRAMEBUFFER,P),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,B);for(let _t=0;_t<Be;_t++)Yi?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Et.__webglTexture,z,$e+_t):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Et.__webglTexture,z),pt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ri.__webglTexture,fe,At+_t):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ri.__webglTexture,fe),z!==0?L.blitFramebuffer(Ae,He,Ce,me,Re,ct,Ce,me,L.COLOR_BUFFER_BIT,L.NEAREST):pt?L.copyTexSubImage3D(De,fe,Re,ct,At+_t,Ae,He,Ce,me):L.copyTexSubImage2D(De,fe,Re,ct,Ae,He,Ce,me);_.bindFramebuffer(L.READ_FRAMEBUFFER,null),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else pt?x.isDataTexture||x.isData3DTexture?L.texSubImage3D(De,fe,Re,ct,At,Ce,me,Be,mt,Vt,bt.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(De,fe,Re,ct,At,Ce,me,Be,mt,bt.data):L.texSubImage3D(De,fe,Re,ct,At,Ce,me,Be,mt,Vt,bt):x.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,fe,Re,ct,Ce,me,mt,Vt,bt.data):x.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,fe,Re,ct,bt.width,bt.height,mt,bt.data):L.texSubImage2D(L.TEXTURE_2D,fe,Re,ct,Ce,me,mt,Vt,bt);_.pixelStorei(L.UNPACK_ROW_LENGTH,Kt),_.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ot),_.pixelStorei(L.UNPACK_SKIP_PIXELS,gn),_.pixelStorei(L.UNPACK_SKIP_ROWS,Fn),_.pixelStorei(L.UNPACK_SKIP_IMAGES,si),fe===0&&N.generateMipmaps&&L.generateMipmap(De),_.unbindTexture()},this.initRenderTarget=function(x){G.get(x).__webglFramebuffer===void 0&&Y.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Y.setTextureCube(x,0):x.isData3DTexture?Y.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Y.setTexture2DArray(x,0):Y.setTexture2D(x,0),_.unbindTexture()},this.resetState=function(){V=0,W=0,Q=null,_.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}};var Bd={type:"change"},Uc={type:"start"},zd={type:"end"},Ko=new xs,kd=new dn,m_=Math.cos(70*tn.DEG2RAD),Lt=new I,an=2*Math.PI,ft={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Nc=1e-6,$o=class extends Rr{constructor(e,t=null){super(e,t),this.state=ft.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:bi.ROTATE,MIDDLE:bi.DOLLY,RIGHT:bi.PAN},this.touches={ONE:xi.ROTATE,TWO:xi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new en,this._lastTargetPosition=new I,this._quat=new en().setFromUnitVectors(e.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ii,this._sphericalDelta=new ii,this._scale=1,this._panOffset=new I,this._rotateStart=new le,this._rotateEnd=new le,this._rotateDelta=new le,this._panStart=new le,this._panEnd=new le,this._panDelta=new le,this._dollyStart=new le,this._dollyEnd=new le,this._dollyDelta=new le,this._dollyDirection=new I,this._mouse=new le,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=__.bind(this),this._onPointerDown=g_.bind(this),this._onPointerUp=y_.bind(this),this._onContextMenu=E_.bind(this),this._onMouseWheel=v_.bind(this),this._onKeyDown=S_.bind(this),this._onTouchStart=M_.bind(this),this._onTouchMove=w_.bind(this),this._onMouseDown=b_.bind(this),this._onMouseMove=x_.bind(this),this._interceptControlDown=T_.bind(this),this._interceptControlUp=R_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ft.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Bd),this.update(),this.state=ft.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Lt.copy(t).sub(this.target),Lt.applyQuaternion(this._quat),this._spherical.setFromVector3(Lt),this.autoRotate&&this.state===ft.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=an:n>Math.PI&&(n-=an),s<-Math.PI?s+=an:s>Math.PI&&(s-=an),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Lt.setFromSpherical(this._spherical),Lt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Lt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Lt.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new I(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Lt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Ko.origin.copy(this.object.position),Ko.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ko.direction))<m_?this.object.lookAt(this.target):(kd.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ko.intersectPlane(kd,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Nc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Nc||this._lastTargetPosition.distanceToSquared(this.target)>Nc?(this.dispatchEvent(Bd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?an/60*this.autoRotateSpeed*e:an/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Lt.setFromMatrixColumn(t,0),Lt.multiplyScalar(-e),this._panOffset.add(Lt)}_panUp(e,t){this.screenSpacePanning===!0?Lt.setFromMatrixColumn(t,1):(Lt.setFromMatrixColumn(t,0),Lt.crossVectors(this.object.up,Lt)),Lt.multiplyScalar(e),this._panOffset.add(Lt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Lt.copy(s).sub(this.target);let r=Lt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(an*this._rotateDelta.x/t.clientHeight),this._rotateUp(an*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(an*this._rotateDelta.x/t.clientHeight),this._rotateUp(an*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new le,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function g_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function __(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function y_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(zd),this.state=ft.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function b_(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case bi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ft.DOLLY;break;case bi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ft.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ft.ROTATE}break;case bi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ft.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ft.PAN}break;default:this.state=ft.NONE}this.state!==ft.NONE&&this.dispatchEvent(Uc)}function x_(i){switch(this.state){case ft.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ft.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ft.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function v_(i){this.enabled===!1||this.enableZoom===!1||this.state!==ft.NONE||(i.preventDefault(),this.dispatchEvent(Uc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(zd))}function S_(i){this.enabled!==!1&&this._handleKeyDown(i)}function M_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case xi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ft.TOUCH_ROTATE;break;case xi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ft.TOUCH_PAN;break;default:this.state=ft.NONE}break;case 2:switch(this.touches.TWO){case xi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ft.TOUCH_DOLLY_PAN;break;case xi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ft.TOUCH_DOLLY_ROTATE;break;default:this.state=ft.NONE}break;default:this.state=ft.NONE}this.state!==ft.NONE&&this.dispatchEvent(Uc)}function w_(i){switch(this._trackPointer(i),this.state){case ft.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ft.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ft.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ft.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ft.NONE}}function E_(i){this.enabled!==!1&&i.preventDefault()}function T_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function R_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Qo=class extends Li{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new jt;e.deleteAttribute("uv");let t=new at({side:Ht}),n=new at,s=new Tr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Ge(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new ar(e,n,6),o=new Ft;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Ge(e,ks(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Ge(e,ks(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Ge(e,ks(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new Ge(e,ks(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new Ge(e,ks(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new Ge(e,ks(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function ks(i){return new vr({color:0,emissive:16777215,emissiveIntensity:i})}function Ei(i){let e=i.points.map(([t,n])=>new le(Math.max(1e-4,t),n));return new Fi(e,i.segments??24)}function qi(i){let e=i.points.map(([s,r,a])=>new I(s,r,a)),t=new Gn(e,i.closed??!1),n=Math.max(8,i.points.length*6);return new ni(t,n,i.radius??.05,i.radialSegments??8,i.closed??!1)}function A_(i){let e=2166136261;for(let t=0;t<i.length;t+=1)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function lt(i,e,t){if(typeof i=="number")return i;if(i&&typeof i=="object"){let n=i;for(let s of e)if(typeof n[s]=="number")return n[s]}return t}function C_(i){let e=/^#[0-9a-f]{3}$/i.test(i)?"#"+i.slice(1).split("").map(n=>n+n).join(""):i,t=/^#[0-9a-f]{6}$/i.test(e)?Number.parseInt(e.slice(1),16):9075295;return[zs(t>>16&255),zs(t>>8&255),zs(t&255)]}function P_(i){let e=i.colorVariation?.palette;if(Array.isArray(e)&&e.length>0)return e.filter(s=>typeof s=="string");let t=i.albedo?.secondary;return[i.baseColor??i.color??i.albedo?.dominant,...Array.isArray(t)?t:[]].filter(s=>typeof s=="string"&&s.startsWith("#"))}function Tt(i){return Math.max(0,Math.min(1,i))}function zs(i){return Math.max(30,Math.min(240,Math.round(i)))}function I_(i){return Math.max(.02,Math.min(1,i))}function Hd(i){return Math.max(1,Math.min(2.5,i))}function D_(i){return i>=.5?1:0}function L_(i){let e=typeof i.baseColor=="string"?i.baseColor:"#8A7A5F";return new We().setStyle(e,Pt)}function Gd(i){return i*i*(3-2*i)}function el(i,e,t,n,s){let r=(i%n+n)%n,a=(e%s+s)%s,o=Math.imul(r+t*17,374761393)^Math.imul(a+t*31,668265263);return o=Math.imul(o^o>>>13,1274126177),((o^o>>>16)>>>0)/4294967295}function N_(i,e,t,n,s){let r=i*n,a=e*s,o=Math.floor(r),l=Math.floor(a),c=Gd(r-o),h=Gd(a-l),u=el(o,l,t,n,s),d=el(o+1,l,t,n,s),f=el(o,l+1,t,n,s),g=el(o+1,l+1,t,n,s);return tn.lerp(tn.lerp(u,d,c),tn.lerp(f,g,c),h)}function U_(i){let t=(Array.isArray(i.surfaceFrequencyBands)?i.surfaceFrequencyBands:[]).flatMap(n=>{if(!n||typeof n!="object")return[];let s=n,r=typeof s.frequency=="number"?s.frequency:0,a=typeof s.amplitude=="number"?s.amplitude:0;if(r<=0||a<=0)return[];let o=Array.isArray(s.stretch)?s.stretch:[1,1],l=`${String(s.pattern??"")} ${String(s.role??"")}`.toLowerCase();return[{frequency:r,amplitude:a,stretchX:typeof o[0]=="number"?Math.max(.1,o[0]):1,stretchY:typeof o[1]=="number"?Math.max(.1,o[1]):1,ridge:/(ridge|groove|grain|fiber|striated|crack)/.test(l)}]});return t.length>0?t:[{frequency:2,amplitude:.42,stretchX:1,stretchY:1,ridge:!1},{frequency:12,amplitude:.22,stretchX:1,stretchY:1,ridge:!1},{frequency:56,amplitude:.08,stretchX:1,stretchY:1,ridge:!1}]}function Fc(i,e,t,n){let s=0,r=0;for(let a=0;a<t.length;a+=1){let o=t[a],l=Math.max(1,Math.round(o.frequency*o.stretchX)),c=Math.max(1,Math.round(o.frequency*o.stretchY)),h=N_(i,e,n+a*1013,l,c);o.ridge&&(h=1-Math.abs(h*2-1)),s+=h*o.amplitude,r+=o.amplitude}return r>0?Tt(s/r):.5}function F_(i,e){if(i.length===1)return i[0];let t=Tt(e)*(i.length-1),n=Math.min(i.length-2,Math.floor(t)),s=t-n,r=i[n],a=i[n+1];return[Math.round(tn.lerp(r[0],a[0],s)),Math.round(tn.lerp(r[1],a[1],s)),Math.round(tn.lerp(r[2],a[2],s))]}function Vd(i){let e=/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/.exec(i);return e?[zs(Number(e[1])),zs(Number(e[2])),zs(Number(e[3]))]:[138,122,95]}function O_(i,e,t){let n=i.stops.length>=2?i.stops:[{offset:0,color:"rgba(138,122,95,1)"},{offset:1,color:"rgba(138,122,95,1)"}],s;if(i.type==="radial"){let[h,u]=i.axis,d=e-h,f=t-u,g=Math.max(.001,Math.hypot(Math.max(h,1-h),Math.max(u,1-u)));s=Tt(Math.hypot(d,f)/g)}else{let[h,u]=i.axis,d=(e-.5)*h+(t-.5)*u,f=.5*(Math.abs(h)+Math.abs(u))||.5;s=Tt(d/f+.5)}let r=s*(n.length-1),a=Math.min(n.length-2,Math.max(0,Math.floor(r))),o=r-a,l=Vd(n[a].color),c=Vd(n[a+1].color);return[tn.lerp(l[0],c[0],o),tn.lerp(l[1],c[1],o),tn.lerp(l[2],c[2],o)]}function zr(i,e,t,n,s){i[e]=Math.max(0,Math.min(255,Math.round(t))),i[e+1]=Math.max(0,Math.min(255,Math.round(n))),i[e+2]=Math.max(0,Math.min(255,Math.round(s))),i[e+3]=255}function Hr(i){let e=document.createElement("canvas");return e.width=i,e.height=i,e}function Gr(i,e,t,n){let s=new lr(i),r=t.textureProjection&&typeof t.textureProjection=="object"?t.textureProjection:{},a=Array.isArray(r.repeat)?r.repeat:[2,2];return s.colorSpace=e,s.wrapS=ei,s.wrapT=ei,s.repeat.set(typeof a[0]=="number"?a[0]:2,typeof a[1]=="number"?a[1]:2),s.anisotropy=Math.max(1,Math.round(n.textureAnisotropy??r.anisotropy??8)),s.needsUpdate=!0,s}function Vr(i,e){let t=i.referencePbr;if(!t||typeof t!="object"||t.usable===!1)return null;let n=typeof t.confidence=="number"?t.confidence:typeof t.estimatedFidelity=="number"?t.estimatedFidelity:0,s=typeof t.targetThreshold=="number"?t.targetThreshold:.7;if(n<s)return null;let r=t.maps;if(!r||typeof r!="object")return null;let a=r[e];if(!a||typeof a!="object")return null;let o=a,l=typeof o.url=="string"&&o.url.trim()?o.url:o.path;return typeof l=="string"&&l.trim()?l:null}function Wr(i,e,t,n){let s=new Mr().load(i),r=t.textureProjection&&typeof t.textureProjection=="object"?t.textureProjection:{},a=Array.isArray(r.repeat)?r.repeat:[1,1];return s.colorSpace=e,s.wrapS=ei,s.wrapT=ei,s.repeat.set(typeof a[0]=="number"?a[0]:1,typeof a[1]=="number"?a[1]:1),s.anisotropy=Math.max(1,Math.round(n.textureAnisotropy??r.anisotropy??8)),s.needsUpdate=!0,s}function B_(i,e){let t=Vr(i,"albedo"),n=Vr(i,"roughness"),s=Vr(i,"height"),r=Vr(i,"normal"),a=Vr(i,"ao");return!t||!n||!s||!r||!a?null:{albedo:Wr(t,Pt,i,e),roughness:Wr(n,Bt,i,e),height:Wr(s,Bt,i,e),normal:Wr(r,Bt,i,e),ao:Wr(a,Bt,i,e),source:"reference-pixel-extraction"}}function k_(i,e,t){if(typeof document>"u")return null;let n=(t.qualityPriority??"reference-fidelity")==="reference-fidelity",s=t.textureSize??e.textureResolution,r=typeof s=="number"&&Number.isFinite(s)?s:n?1024:512,a=Math.max(256,Math.min(2048,2**Math.round(Math.log2(r)))),o={albedo:Hr(a),roughness:Hr(a),height:Hr(a),normal:Hr(a),ao:Hr(a)},l={albedo:o.albedo.getContext("2d"),roughness:o.roughness.getContext("2d"),height:o.height.getContext("2d"),normal:o.normal.getContext("2d"),ao:o.ao.getContext("2d")};if(!l.albedo||!l.roughness||!l.height||!l.normal||!l.ao)return null;let c={albedo:l.albedo.createImageData(a,a),roughness:l.roughness.createImageData(a,a),height:l.height.createImageData(a,a),normal:l.normal.createImageData(a,a),ao:l.ao.createImageData(a,a)},h=A_(i),u=U_(e),d=new Float32Array(a*a),f=new Float32Array(a*a),g=P_(e),v=typeof e.baseColor=="string"?e.baseColor:"#8A7A5F",m=(g.length>=2?g:[v,"#6E614B","#A08F70"]).map(C_),p=Tt(lt(e.roughness,["base"],.76)),M=Tt(lt(e.roughness,["variation"],.18)),R=Tt(lt(e.colorVariation,["amplitude","variation"],.18)),b=Tt(lt(e.colorVariation,["heightCorrelation"],.3)),w=e.colorGradient;for(let y=0;y<a;y+=1){let T=y/a;for(let C=0;C<a;C+=1){let D=C/a,F=y*a+C,O=Fc(D,T,u,h+101),P=Fc(D,T,u,h+7001),B=Fc(D,T,u,h+15013);d[F]=O,f[F]=Tt(p+(P-.5)*M*2);let V;if(w)V=O_(w,D,T);else{let W=Tt(.5+(B-.5)*R*2+(O-.5)*b);V=F_(m,W)}zr(c.albedo.data,F*4,V[0],V[1],V[2])}}let S=Math.max(.05,lt(e.normal,["strength","amplitude"],.35)),A=Tt(lt(e.ambientOcclusion,["cavityStrength","strength"],.35));for(let y=0;y<a;y+=1){let T=(y-1+a)%a*a,C=(y+1)%a*a;for(let D=0;D<a;D+=1){let F=(D-1+a)%a,O=(D+1)%a,P=y*a+D,B=d[P],V=(d[y*a+O]-d[y*a+F])*S*6,W=(d[C+D]-d[T+D])*S*6,Q=1/Math.sqrt(V*V+W*W+1),X=-V*Q,Z=-W*Q,ie=Q,ge=(d[y*a+F]+d[y*a+O]+d[T+D]+d[C+D])*.25,_e=Math.max(0,ge-B),ze=Tt(1-A*(_e*12+(1-B)*.16)),Xe=P*4,qe=B*255,q=f[P]*255;zr(c.height.data,Xe,qe,qe,qe),zr(c.roughness.data,Xe,q,q,q),zr(c.normal.data,Xe,(X*.5+.5)*255,(Z*.5+.5)*255,(ie*.5+.5)*255),zr(c.ao.data,Xe,ze*255,ze*255,ze*255)}}return l.albedo.putImageData(c.albedo,0,0),l.roughness.putImageData(c.roughness,0,0),l.height.putImageData(c.height,0,0),l.normal.putImageData(c.normal,0,0),l.ao.putImageData(c.ao,0,0),{albedo:Gr(o.albedo,Pt,e,t),roughness:Gr(o.roughness,Bt,e,t),height:Gr(o.height,Bt,e,t),normal:Gr(o.normal,Bt,e,t),ao:Gr(o.ao,Bt,e,t),source:"procedural"}}function Oc(i,e,t,n=!1){let r=e.textureless?.declared===!0?null:B_(e,t)??k_(i,e,t),a=new Vn({color:r?16777215:L_(e),roughness:r?1:Tt(lt(e.roughness,["base"],.76)),metalness:D_(lt(e.metalness,["base"],0)),clearcoat:Tt(lt(e.clearcoat,["base","amount"],0)),clearcoatRoughness:Tt(lt(e.clearcoatRoughness,["base"],.25)),transmission:Tt(lt(e.transmission,["base","amount"],0)),ior:Hd(lt(e.ior,["base","value"],1.5)),thickness:Math.max(0,lt(e.thickness,["base","amount"],0)),attenuationDistance:Math.max(.001,lt(e.attenuationDistance,["base","value"],1/0)),attenuationColor:new We(typeof e.attenuationColor=="string"?e.attenuationColor:"#ffffff"),sheen:Tt(lt(e.sheen,["base","amount"],0)),sheenColor:new We(typeof e.sheenColor=="string"?e.sheenColor:"#ffffff"),sheenRoughness:Tt(lt(e.sheenRoughness,["base"],1)),iridescence:Tt(lt(e.iridescence,["base","amount"],0)),iridescenceIOR:Hd(lt(e.iridescenceIOR,["base","value"],1.3)),anisotropy:Tt(lt(e.anisotropy,["base","amount"],0)),anisotropyRotation:lt(e.anisotropy,["rotation"],0),specularIntensity:I_(lt(e.specularF0??e.f0??e.specularIntensity,["base","value"],1)),specularColor:new We(typeof e.specularColor=="string"?e.specularColor:"#ffffff"),emissive:new We(typeof e.emissive=="string"?e.emissive:"#000000"),emissiveIntensity:Math.max(0,lt(e.emissiveIntensity,["base"],1)),opacity:Tt(lt(e.opacity,["base"],1)),transparent:lt(e.transmission,["base","amount"],0)>0||lt(e.opacity,["base"],1)<1,alphaTest:Math.max(0,lt(e.alpha,["cutoff","alphaTest"],0)),wireframe:t.wireframe??!1,side:e.doubleSided===!0?yn:Wn,flatShading:e.flatShading===!0});if(r){a.map=r.albedo,a.roughnessMap=r.roughness,a.normalMap=r.normal,a.normalScale.setScalar(Math.max(.05,lt(e.normal,["strength","amplitude"],.35))),a.aoMap=r.ao,a.aoMap.channel=0,a.aoMapIntensity=lt(e.ambientOcclusion,["cavityStrength","strength"],.35);let o=n||e.denseMesh===!0||e.geometryDensity==="dense"||e.topologyClass==="dense",l=Math.max(0,lt(e.bump,["amplitude","strength"],0)),c=o?Math.max(.05,l):l;c>0&&(a.bumpMap=r.height,a.bumpScale=c);let h=Math.max(0,lt(e.displacement,["amplitude","strength"],0)),u=o?Math.max(.005,h):h;u>0&&(a.displacementMap=r.height,a.displacementScale=u,a.displacementBias=-u*.5)}return a.envMapIntensity=lt(e,["envMapIntensity"],.8),a.userData.sculptMaterial=e,a.userData.proceduralMapsIndependent=!0,a.userData.pbrConstraints={albedoRange:[30,240],binaryMetalness:!0,f0Range:[.02,1],iorRange:[1,2.5]},a.userData.pbrTextureSource=r?.source??"flat-fallback",a.userData.referencePbr=e.referencePbr??null,a.userData.referenceMaterialId=e.referenceMaterialId??e.materialReference?.profileId??null,a.userData.materialEvidence=e.materialEvidence??null,a.userData.validationViews=e.materialReference?.validationViews??[],a.needsUpdate=!0,a}function Wd(i,e){return Array.isArray(i)&&i.length===3&&i.every(t=>typeof t=="number")?new I(i[0],i[1],i[2]):new I(e[0],e[1],e[2])}function Xd(i,e){return typeof i=="number"&&Number.isFinite(i)?i:e}function yt(i){if(!i||typeof i!="object")return null;let e=i,t=Wd(e.localStart,[0,0,0]),s=Wd(e.localEnd,[0,1,0]).clone().sub(t),r=s.length();if(r<=1e-4)return null;let a=s.clone().normalize(),o=new en().setFromUnitVectors(new I(0,1,0),a),l=Math.max(.005,Xd(e.baseRadius,.06)),c=Math.max(.003,Xd(e.endRadius,l*.55));return{start:t,midpoint:s.multiplyScalar(.5),quaternion:o,length:r,baseRadius:l,endRadius:c}}function qd(i={}){let e=new nt;e.name="Gold balance with curved beam chains and bullion",e.userData.reconstructionEvidence={itemFamily:null,subtype:null,componentAdapter:null,route:null,exactnessTier:null,referenceCamera:{solved:!1,fovDegrees:36,aspect:1,orientation:{yaw:0,pitch:0,roll:0},positionHint:[.2,2.7,12],note:"Front review at Y 2.7, orthographic height 6.6. Side/rear/left inferred review views use same framing."},approximationNotes:[]},e.userData.materialPipeline={},e.userData.materialReferenceRegistry=null;let t={};t.gold=Oc("gold",{id:"gold",name:"gold",type:"physical",shaderModel:"MeshStandardMaterial / PBR approximation",baseColor:"#d6a64c",color:"#d6a64c",albedo:{dominant:"#d6a64c",secondary:["#c6933c","#f2ce86"],samplingNotes:"Textureless gold; specular image pixels are excluded from base albedo."},colorVariation:{palette:["#150B03","#ECC92C","#FEF695","#B4780A","#5A3002"],pattern:"none",amplitude:0,heightCorrelation:.42},roughness:{base:.24,variation:.025,map:"none"},metalness:{base:1,variation:0},ambientOcclusion:{cavityStrength:.38,contactShadowBias:.35,notes:"Reference-derived cavity estimate from local height minima; verify against grazing-light screenshot."},wear:{edgeWear:0,scratches:[],chips:[]},dirt:{amount:0,cavityBias:0,color:"#2F2A22"},localOverrides:[{id:"gold-polish",roughness:.21,region:"exposed bevel edges",evidenceRefs:["full-object"]}],shaderNotes:["Prefer MeshPhysicalMaterial when clearcoat, sheen, transmission, or thin-surface response is observed; otherwise use MeshStandardMaterial-compatible PBR channels.","Generate albedo, roughness, height/normal, and AO independently; never alias albedo into roughness.","Use normal/bump/displacement only when they map to observed surface relief.","Use displacement geometry when the observed relief changes the close-up silhouette; texture-only relief is insufficient there.","Reference-derived maps are estimates from image pixels; verify with neutral, grazing, and reference-matched renders.","Do not treat baked image shadows as final albedo; rerun extraction with a tighter material crop if highlights/shadows pollute the maps."],notes:"Textureless polished metal. Image reflection is not baked into surface albedo; exact lighting and rear geometry are inferred.",textureless:{declared:!0,evidence:["Uploaded balance illustration: column crop shows smooth specular reflected panels with no visible grain, patina, printed pattern or pores.","Silhouette and bevel geometry define the gold surfaces. Variation in the image is dominated by lighting, not texture."]}},i),t["edge-gold"]=Oc("edge-gold",{id:"edge-gold",name:"edge-gold",type:"physical",shaderModel:"MeshStandardMaterial / PBR approximation",baseColor:"#edc779",color:"#edc779",albedo:{dominant:"#edc779",secondary:["#c6933c","#f2ce86"],samplingNotes:"Representative gold albedo inferred without baked reflection highlights."},colorVariation:{palette:["#edc779","#c6933c","#f2ce86"],pattern:"none",amplitude:0,heightCorrelation:0},roughness:{base:.19,variation:.025,map:"none"},metalness:{base:1,variation:0},ambientOcclusion:{cavityStrength:.25,contactShadowBias:.35,notes:"Darken creases, seams, intersections, and recessed local features."},wear:{edgeWear:0,scratches:[],chips:[]},dirt:{amount:0,cavityBias:0,color:"#2F2A22"},localOverrides:[{id:"edge-gold-polish",roughness:.16,region:"exposed bevel edges",evidenceRefs:["full-object"]}],shaderNotes:["Prefer MeshPhysicalMaterial when clearcoat, sheen, transmission, or thin-surface response is observed; otherwise use MeshStandardMaterial-compatible PBR channels.","Generate albedo, roughness, height/normal, and AO independently; never alias albedo into roughness.","Use normal/bump/displacement only when they map to observed surface relief.","Use displacement geometry when the observed relief changes the close-up silhouette; texture-only relief is insufficient there."],notes:"Textureless polished metal. Image reflection is not baked into surface albedo; exact lighting and rear geometry are inferred.",textureless:{declared:!0,evidence:["Uploaded balance illustration: column crop shows smooth specular reflected panels with no visible grain, patina, printed pattern or pores.","Silhouette and bevel geometry define the gold surfaces. Variation in the image is dominated by lighting, not texture."]}},i),t.bullion=Oc("bullion",{id:"bullion",name:"bullion",type:"physical",shaderModel:"MeshStandardMaterial / PBR approximation",baseColor:"#e2b751",color:"#e2b751",albedo:{dominant:"#e2b751",secondary:["#c6933c","#f2ce86"],samplingNotes:"Representative gold albedo inferred without baked reflection highlights."},colorVariation:{palette:["#e2b751","#c6933c","#f2ce86"],pattern:"none",amplitude:0,heightCorrelation:0},roughness:{base:.27,variation:.025,map:"none"},metalness:{base:1,variation:0},ambientOcclusion:{cavityStrength:.25,contactShadowBias:.35,notes:"Darken creases, seams, intersections, and recessed local features."},wear:{edgeWear:0,scratches:[],chips:[]},dirt:{amount:0,cavityBias:0,color:"#2F2A22"},localOverrides:[{id:"bullion-polish",roughness:.24000000000000002,region:"exposed bevel edges",evidenceRefs:["full-object"]}],shaderNotes:["Prefer MeshPhysicalMaterial when clearcoat, sheen, transmission, or thin-surface response is observed; otherwise use MeshStandardMaterial-compatible PBR channels.","Generate albedo, roughness, height/normal, and AO independently; never alias albedo into roughness.","Use normal/bump/displacement only when they map to observed surface relief.","Use displacement geometry when the observed relief changes the close-up silhouette; texture-only relief is insufficient there."],notes:"Textureless polished metal. Image reflection is not baked into surface albedo; exact lighting and rear geometry are inferred.",textureless:{declared:!0,evidence:["Uploaded balance illustration: column crop shows smooth specular reflected panels with no visible grain, patina, printed pattern or pores.","Silhouette and bevel geometry define the gold surfaces. Variation in the image is dominated by lighting, not texture."]}},i);let n={root:e},s={},r={},a={},o={},c=yt(null),h=new nt;h.name="root__pivot",h.scale.set(1,1,1),c?(h.position.copy(c.start),h.rotation.set(0,0,0)):(h.position.set(0,.08,0),h.rotation.set(0,0,0)),h.userData.sculptComponent={id:"root",name:"root",level:"macro",role:"body",importance:.85,confidence:.88,primitive:"cylinder",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",radialSegments:8},parent:null,attachment:null,dimensions:{width:1.28,height:.16,depth:.94,units:"world",confidence:.85},transform:{position:[0,.08,0],rotation:[0,0,0]},actionProfile:{animationRole:"root",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"root",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"octagonal-foot",kind:"bevel",placement:"foot perimeter",geometryEffect:"8-sided stepped beveled base",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},h.userData.actionProfile={animationRole:"root",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"root",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(h),n.root=h;let u=c?new rt(c.endRadius,c.baseRadius,c.length,16,6):new rt(.5,.5,1,24,8);c||u.scale(1.28,.16,.94);let d=new Ge(u,t.gold??new at({color:8947848}));d.name="root",c&&(d.position.copy(c.midpoint),d.quaternion.copy(c.quaternion)),d.castShadow=i.castShadow??!0,d.receiveShadow=i.receiveShadow??!0,d.userData.sculptComponent={id:"root",name:"root",level:"macro",role:"body",importance:.85,confidence:.88,primitive:"cylinder",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",radialSegments:8},parent:null,attachment:null,dimensions:{width:1.28,height:.16,depth:.94,units:"world",confidence:.85},transform:{position:[0,.08,0],rotation:[0,0,0]},actionProfile:{animationRole:"root",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"root",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"octagonal-foot",kind:"bevel",placement:"foot perimeter",geometryEffect:"8-sided stepped beveled base",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},h.add(d),s.root=d,a.root={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o.root??(o.root=[]),o.root.push(h);let g=yt({parentId:"root",parentSocket:"foot-step-seat",localStart:[0,.17,0],localEnd:[0,.17,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]}),v=new nt;v.name="foot-step__pivot",v.scale.set(1,1,1),g?(v.position.copy(g.start),v.rotation.set(0,0,0)):(v.position.set(0,.17,0),v.rotation.set(0,0,0)),v.userData.sculptComponent={id:"foot-step",name:"foot-step",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"cylinder",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:{parentId:"root",parentSocket:"foot-step-seat",localStart:[0,.17,0],localEnd:[0,.17,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:1.08,height:.18,depth:.8,units:"world",confidence:.85},transform:{position:[0,.17,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"foot-step",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"step-edge",kind:"ridge",geometryEffect:"second raised plinth",confidence:.95}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},v.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"foot-step",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(v),n["foot-step"]=v;let m=g?new rt(g.endRadius,g.baseRadius,g.length,16,6):new rt(.5,.5,1,24,8);g||m.scale(1.08,.18,.8);let p=new Ge(m,t.gold??new at({color:8947848}));p.name="foot-step",g&&(p.position.copy(g.midpoint),p.quaternion.copy(g.quaternion)),p.castShadow=i.castShadow??!0,p.receiveShadow=i.receiveShadow??!0,p.userData.sculptComponent={id:"foot-step",name:"foot-step",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"cylinder",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:{parentId:"root",parentSocket:"foot-step-seat",localStart:[0,.17,0],localEnd:[0,.17,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:1.08,height:.18,depth:.8,units:"world",confidence:.85},transform:{position:[0,.17,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"foot-step",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"step-edge",kind:"ridge",geometryEffect:"second raised plinth",confidence:.95}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},v.add(p),s["foot-step"]=p,a["foot-step"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["foot-step"]??(o["foot-step"]=[]),o["foot-step"].push(v);let R=yt({parentId:"root",parentSocket:"column-seat",localStart:[0,2.3,0],localEnd:[0,2.3,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]}),b=new nt;b.name="column__pivot",b.scale.set(1,1,1),R?(b.position.copy(R.start),b.rotation.set(0,0,0)):(b.position.set(0,2.3,0),b.rotation.set(0,0,0)),b.userData.sculptComponent={id:"column",name:"column",level:"macro",role:"body",importance:.85,confidence:.88,primitive:"cylinder",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:{parentId:"root",parentSocket:"column-seat",localStart:[0,2.3,0],localEnd:[0,2.3,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.32,height:4.6,depth:.32,units:"world",confidence:.85},transform:{position:[0,2.3,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"column",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"vertical-spindle",kind:"gloss",materialEffect:"metalness 1 roughness .24",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},b.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"column",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(b),n.column=b;let w=R?new rt(R.endRadius,R.baseRadius,R.length,16,6):new rt(.5,.5,1,24,8);R||w.scale(.32,4.6,.32);let S=new Ge(w,t.gold??new at({color:8947848}));S.name="column",R&&(S.position.copy(R.midpoint),S.quaternion.copy(R.quaternion)),S.castShadow=i.castShadow??!0,S.receiveShadow=i.receiveShadow??!0,S.userData.sculptComponent={id:"column",name:"column",level:"macro",role:"body",importance:.85,confidence:.88,primitive:"cylinder",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:{parentId:"root",parentSocket:"column-seat",localStart:[0,2.3,0],localEnd:[0,2.3,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.32,height:4.6,depth:.32,units:"world",confidence:.85},transform:{position:[0,2.3,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"column",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"vertical-spindle",kind:"gloss",materialEffect:"metalness 1 roughness .24",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},b.add(S),s.column=S,a.column={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o.column??(o.column=[]),o.column.push(b);let A=yt(null),y=new nt;y.name="collar-0__pivot",y.scale.set(1,1,1),A?(y.position.copy(A.start),y.rotation.set(0,0,0)):(y.position.set(0,.48,0),y.rotation.set(0,0,0)),y.userData.sculptComponent={id:"collar-0",name:"collar-0",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"lathe",topologyClass:"continuous-sculpt",topologyRationale:"Observed turned radial profile with varying radius",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",latheProfile:{points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24}},parent:"root",attachment:{parentId:"root",parentSocket:"collar-0-seat",localStart:[0,.48,0],localEnd:[0,.48,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.46,height:.2,depth:.46,units:"world",confidence:.85},transform:{position:[0,.48,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-0",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"turned-band-0",kind:"ridge",geometryEffect:"rounded turned spindle collar",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},y.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-0",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(y),n["collar-0"]=y;let T=A?new rt(A.endRadius,A.baseRadius,A.length,16,6):Ei({points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24});A||T.scale(.46,.2,.46);let C=new Ge(T,t.gold??new at({color:8947848}));C.name="collar-0",A&&(C.position.copy(A.midpoint),C.quaternion.copy(A.quaternion)),C.castShadow=i.castShadow??!0,C.receiveShadow=i.receiveShadow??!0,C.userData.sculptComponent={id:"collar-0",name:"collar-0",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"lathe",topologyClass:"continuous-sculpt",topologyRationale:"Observed turned radial profile with varying radius",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",latheProfile:{points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24}},parent:"root",attachment:{parentId:"root",parentSocket:"collar-0-seat",localStart:[0,.48,0],localEnd:[0,.48,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.46,height:.2,depth:.46,units:"world",confidence:.85},transform:{position:[0,.48,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-0",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"turned-band-0",kind:"ridge",geometryEffect:"rounded turned spindle collar",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},y.add(C),s["collar-0"]=C,a["collar-0"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["collar-0"]??(o["collar-0"]=[]),o["collar-0"].push(y);let D=yt(null),F=new nt;F.name="collar-1__pivot",F.scale.set(1,1,1),D?(F.position.copy(D.start),F.rotation.set(0,0,0)):(F.position.set(0,.83,0),F.rotation.set(0,0,0)),F.userData.sculptComponent={id:"collar-1",name:"collar-1",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"lathe",topologyClass:"continuous-sculpt",topologyRationale:"Observed turned radial profile with varying radius",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",latheProfile:{points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24}},parent:"root",attachment:{parentId:"root",parentSocket:"collar-1-seat",localStart:[0,.83,0],localEnd:[0,.83,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.46,height:.2,depth:.46,units:"world",confidence:.85},transform:{position:[0,.83,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-1",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"turned-band-1",kind:"ridge",geometryEffect:"rounded turned spindle collar",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},F.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-1",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(F),n["collar-1"]=F;let O=D?new rt(D.endRadius,D.baseRadius,D.length,16,6):Ei({points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24});D||O.scale(.46,.2,.46);let P=new Ge(O,t.gold??new at({color:8947848}));P.name="collar-1",D&&(P.position.copy(D.midpoint),P.quaternion.copy(D.quaternion)),P.castShadow=i.castShadow??!0,P.receiveShadow=i.receiveShadow??!0,P.userData.sculptComponent={id:"collar-1",name:"collar-1",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"lathe",topologyClass:"continuous-sculpt",topologyRationale:"Observed turned radial profile with varying radius",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",latheProfile:{points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24}},parent:"root",attachment:{parentId:"root",parentSocket:"collar-1-seat",localStart:[0,.83,0],localEnd:[0,.83,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.46,height:.2,depth:.46,units:"world",confidence:.85},transform:{position:[0,.83,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-1",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"turned-band-1",kind:"ridge",geometryEffect:"rounded turned spindle collar",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},F.add(P),s["collar-1"]=P,a["collar-1"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["collar-1"]??(o["collar-1"]=[]),o["collar-1"].push(F);let B=yt(null),V=new nt;V.name="collar-2__pivot",V.scale.set(1,1,1),B?(V.position.copy(B.start),V.rotation.set(0,0,0)):(V.position.set(0,3.62,0),V.rotation.set(0,0,0)),V.userData.sculptComponent={id:"collar-2",name:"collar-2",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"lathe",topologyClass:"continuous-sculpt",topologyRationale:"Observed turned radial profile with varying radius",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",latheProfile:{points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24}},parent:"root",attachment:{parentId:"root",parentSocket:"collar-2-seat",localStart:[0,3.62,0],localEnd:[0,3.62,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.46,height:.2,depth:.46,units:"world",confidence:.85},transform:{position:[0,3.62,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-2",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"turned-band-2",kind:"ridge",geometryEffect:"rounded turned spindle collar",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},V.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-2",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(V),n["collar-2"]=V;let W=B?new rt(B.endRadius,B.baseRadius,B.length,16,6):Ei({points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24});B||W.scale(.46,.2,.46);let Q=new Ge(W,t.gold??new at({color:8947848}));Q.name="collar-2",B&&(Q.position.copy(B.midpoint),Q.quaternion.copy(B.quaternion)),Q.castShadow=i.castShadow??!0,Q.receiveShadow=i.receiveShadow??!0,Q.userData.sculptComponent={id:"collar-2",name:"collar-2",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"lathe",topologyClass:"continuous-sculpt",topologyRationale:"Observed turned radial profile with varying radius",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",latheProfile:{points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24}},parent:"root",attachment:{parentId:"root",parentSocket:"collar-2-seat",localStart:[0,3.62,0],localEnd:[0,3.62,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.46,height:.2,depth:.46,units:"world",confidence:.85},transform:{position:[0,3.62,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-2",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"turned-band-2",kind:"ridge",geometryEffect:"rounded turned spindle collar",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},V.add(Q),s["collar-2"]=Q,a["collar-2"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["collar-2"]??(o["collar-2"]=[]),o["collar-2"].push(V);let X=yt(null),Z=new nt;Z.name="collar-3__pivot",Z.scale.set(1,1,1),X?(Z.position.copy(X.start),Z.rotation.set(0,0,0)):(Z.position.set(0,4.04,0),Z.rotation.set(0,0,0)),Z.userData.sculptComponent={id:"collar-3",name:"collar-3",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"lathe",topologyClass:"continuous-sculpt",topologyRationale:"Observed turned radial profile with varying radius",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",latheProfile:{points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24}},parent:"root",attachment:{parentId:"root",parentSocket:"collar-3-seat",localStart:[0,4.04,0],localEnd:[0,4.04,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.46,height:.2,depth:.46,units:"world",confidence:.85},transform:{position:[0,4.04,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-3",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"turned-band-3",kind:"ridge",geometryEffect:"rounded turned spindle collar",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},Z.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-3",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(Z),n["collar-3"]=Z;let ie=X?new rt(X.endRadius,X.baseRadius,X.length,16,6):Ei({points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24});X||ie.scale(.46,.2,.46);let ge=new Ge(ie,t.gold??new at({color:8947848}));ge.name="collar-3",X&&(ge.position.copy(X.midpoint),ge.quaternion.copy(X.quaternion)),ge.castShadow=i.castShadow??!0,ge.receiveShadow=i.receiveShadow??!0,ge.userData.sculptComponent={id:"collar-3",name:"collar-3",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"lathe",topologyClass:"continuous-sculpt",topologyRationale:"Observed turned radial profile with varying radius",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",latheProfile:{points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24}},parent:"root",attachment:{parentId:"root",parentSocket:"collar-3-seat",localStart:[0,4.04,0],localEnd:[0,4.04,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.46,height:.2,depth:.46,units:"world",confidence:.85},transform:{position:[0,4.04,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-3",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"turned-band-3",kind:"ridge",geometryEffect:"rounded turned spindle collar",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},Z.add(ge),s["collar-3"]=ge,a["collar-3"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["collar-3"]??(o["collar-3"]=[]),o["collar-3"].push(Z);let _e=yt(null),ze=new nt;ze.name="collar-4__pivot",ze.scale.set(1,1,1),_e?(ze.position.copy(_e.start),ze.rotation.set(0,0,0)):(ze.position.set(0,4.51,0),ze.rotation.set(0,0,0)),ze.userData.sculptComponent={id:"collar-4",name:"collar-4",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"lathe",topologyClass:"continuous-sculpt",topologyRationale:"Observed turned radial profile with varying radius",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",latheProfile:{points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24}},parent:"root",attachment:{parentId:"root",parentSocket:"collar-4-seat",localStart:[0,4.51,0],localEnd:[0,4.51,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.46,height:.2,depth:.46,units:"world",confidence:.85},transform:{position:[0,4.51,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-4",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"turned-band-4",kind:"ridge",geometryEffect:"rounded turned spindle collar",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},ze.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-4",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(ze),n["collar-4"]=ze;let Xe=_e?new rt(_e.endRadius,_e.baseRadius,_e.length,16,6):Ei({points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24});_e||Xe.scale(.46,.2,.46);let qe=new Ge(Xe,t.gold??new at({color:8947848}));qe.name="collar-4",_e&&(qe.position.copy(_e.midpoint),qe.quaternion.copy(_e.quaternion)),qe.castShadow=i.castShadow??!0,qe.receiveShadow=i.receiveShadow??!0,qe.userData.sculptComponent={id:"collar-4",name:"collar-4",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"lathe",topologyClass:"continuous-sculpt",topologyRationale:"Observed turned radial profile with varying radius",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",latheProfile:{points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24}},parent:"root",attachment:{parentId:"root",parentSocket:"collar-4-seat",localStart:[0,4.51,0],localEnd:[0,4.51,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.46,height:.2,depth:.46,units:"world",confidence:.85},transform:{position:[0,4.51,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-4",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"turned-band-4",kind:"ridge",geometryEffect:"rounded turned spindle collar",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},ze.add(qe),s["collar-4"]=qe,a["collar-4"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["collar-4"]??(o["collar-4"]=[]),o["collar-4"].push(ze);let q=yt(null),J=new nt;J.name="collar-5__pivot",J.scale.set(1,1,1),q?(J.position.copy(q.start),J.rotation.set(0,0,0)):(J.position.set(0,4.91,0),J.rotation.set(0,0,0)),J.userData.sculptComponent={id:"collar-5",name:"collar-5",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"lathe",topologyClass:"continuous-sculpt",topologyRationale:"Observed turned radial profile with varying radius",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",latheProfile:{points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24}},parent:"root",attachment:{parentId:"root",parentSocket:"collar-5-seat",localStart:[0,4.91,0],localEnd:[0,4.91,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.46,height:.2,depth:.46,units:"world",confidence:.85},transform:{position:[0,4.91,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-5",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"turned-band-5",kind:"ridge",geometryEffect:"rounded turned spindle collar",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},J.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-5",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(J),n["collar-5"]=J;let be=q?new rt(q.endRadius,q.baseRadius,q.length,16,6):Ei({points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24});q||be.scale(.46,.2,.46);let Se=new Ge(be,t.gold??new at({color:8947848}));Se.name="collar-5",q&&(Se.position.copy(q.midpoint),Se.quaternion.copy(q.quaternion)),Se.castShadow=i.castShadow??!0,Se.receiveShadow=i.receiveShadow??!0,Se.userData.sculptComponent={id:"collar-5",name:"collar-5",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"lathe",topologyClass:"continuous-sculpt",topologyRationale:"Observed turned radial profile with varying radius",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",latheProfile:{points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24}},parent:"root",attachment:{parentId:"root",parentSocket:"collar-5-seat",localStart:[0,4.91,0],localEnd:[0,4.91,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.46,height:.2,depth:.46,units:"world",confidence:.85},transform:{position:[0,4.91,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-5",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"turned-band-5",kind:"ridge",geometryEffect:"rounded turned spindle collar",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},J.add(Se),s["collar-5"]=Se,a["collar-5"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["collar-5"]??(o["collar-5"]=[]),o["collar-5"].push(J);let ye=yt(null),Ue=new nt;Ue.name="finial__pivot",Ue.scale.set(1,1,1),ye?(Ue.position.copy(ye.start),Ue.rotation.set(0,0,0)):(Ue.position.set(0,5.09,0),Ue.rotation.set(0,0,0)),Ue.userData.sculptComponent={id:"finial",name:"finial",level:"macro",role:"body",importance:.85,confidence:.88,primitive:"sphere",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:{parentId:"root",parentSocket:"finial-seat",localStart:[0,5.18,0],localEnd:[0,5.18,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.34,height:.38,depth:.34,units:"world",confidence:.85},transform:{position:[0,5.09,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"finial",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"finial-crown",kind:"contour",geometryEffect:"rounded upper crown",confidence:.95}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},Ue.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"finial",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(Ue),n.finial=Ue;let st=ye?new rt(ye.endRadius,ye.baseRadius,ye.length,16,6):new mi(.5,32,20);ye||st.scale(.34,.38,.34);let te=new Ge(st,t.gold??new at({color:8947848}));te.name="finial",ye&&(te.position.copy(ye.midpoint),te.quaternion.copy(ye.quaternion)),te.castShadow=i.castShadow??!0,te.receiveShadow=i.receiveShadow??!0,te.userData.sculptComponent={id:"finial",name:"finial",level:"macro",role:"body",importance:.85,confidence:.88,primitive:"sphere",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:{parentId:"root",parentSocket:"finial-seat",localStart:[0,5.18,0],localEnd:[0,5.18,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.34,height:.38,depth:.34,units:"world",confidence:.85},transform:{position:[0,5.09,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"finial",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"finial-crown",kind:"contour",geometryEffect:"rounded upper crown",confidence:.95}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},Ue.add(te),s.finial=te,a.finial={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o.finial??(o.finial=[]),o.finial.push(Ue);let ae=yt({parentId:"root",parentSocket:"beam-seat",localStart:[0,4.29,0],localEnd:[0,4.29,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]}),re=new nt;re.name="beam__pivot",re.scale.set(1,1,1),ae?(re.position.copy(ae.start),re.rotation.set(0,0,.08)):(re.position.set(0,4.29,0),re.rotation.set(0,0,.08)),re.userData.sculptComponent={id:"beam",name:"beam",level:"macro",role:"body",importance:.85,confidence:.88,primitive:"tube",topologyClass:"fiber-strand",topologyRationale:"Observed thin member following a curved centerline",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",tubePath:{points:[[-1.58,-.28,0],[-1.22,-.2,0],[-.79,.16,0],[0,.27,0],[.79,.16,0],[1.22,-.2,0],[1.58,-.28,0]],radius:.075,radialSegments:12},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"beam-seat",localStart:[0,4.29,0],localEnd:[0,4.29,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[0,4.29,0],rotation:[0,0,.08]},actionProfile:{animationRole:"hinge",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"compound",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"beam",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"curved-beam",kind:"contour",geometryEffect:"curved tube sweeps with raised central beam",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},re.userData.actionProfile={animationRole:"hinge",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"compound",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"beam",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(re),n.beam=re;let ne=ae?new rt(ae.endRadius,ae.baseRadius,ae.length,16,6):qi({points:[[-1.58,-.28,0],[-1.22,-.2,0],[-.79,.16,0],[0,.27,0],[.79,.16,0],[1.22,-.2,0],[1.58,-.28,0]],radius:.075,radialSegments:12});ae||ne.scale(1,1,1);let we=new Ge(ne,t.gold??new at({color:8947848}));we.name="beam",ae&&(we.position.copy(ae.midpoint),we.quaternion.copy(ae.quaternion)),we.castShadow=i.castShadow??!0,we.receiveShadow=i.receiveShadow??!0,we.userData.sculptComponent={id:"beam",name:"beam",level:"macro",role:"body",importance:.85,confidence:.88,primitive:"tube",topologyClass:"fiber-strand",topologyRationale:"Observed thin member following a curved centerline",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",tubePath:{points:[[-1.58,-.28,0],[-1.22,-.2,0],[-.79,.16,0],[0,.27,0],[.79,.16,0],[1.22,-.2,0],[1.58,-.28,0]],radius:.075,radialSegments:12},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"beam-seat",localStart:[0,4.29,0],localEnd:[0,4.29,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[0,4.29,0],rotation:[0,0,.08]},actionProfile:{animationRole:"hinge",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"compound",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"beam",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"curved-beam",kind:"contour",geometryEffect:"curved tube sweeps with raised central beam",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},re.add(we),s.beam=we,a.beam={type:"compound",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o.beam??(o.beam=[]),o.beam.push(re);let Le=yt({parentId:"beam",parentSocket:"beam-center-seat",localStart:[0,.26,0],localEnd:[0,.26,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]}),Oe=new nt;Oe.name="beam-center__pivot",Oe.scale.set(1,1,1),Le?(Oe.position.copy(Le.start),Oe.rotation.set(0,0,1.5707963267948966)):(Oe.position.set(0,.26,0),Oe.rotation.set(0,0,1.5707963267948966)),Oe.userData.sculptComponent={id:"beam-center",name:"beam-center",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"cylinder",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"beam",attachment:{parentId:"beam",parentSocket:"beam-center-seat",localStart:[0,.26,0],localEnd:[0,.26,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.23,height:1.14,depth:.23,units:"world",confidence:.85},transform:{position:[0,.26,0],rotation:[0,0,1.5707963267948966]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"beam-center",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"edge-gold",materialLayers:["edge-gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"crossbar-sleeve",kind:"gloss",materialEffect:"polished horizontal sleeve",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},Oe.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"beam-center",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.beam??e).add(Oe),n["beam-center"]=Oe;let L=Le?new rt(Le.endRadius,Le.baseRadius,Le.length,16,6):new rt(.5,.5,1,24,8);Le||L.scale(.23,1.14,.23);let et=new Ge(L,t["edge-gold"]??new at({color:8947848}));et.name="beam-center",Le&&(et.position.copy(Le.midpoint),et.quaternion.copy(Le.quaternion)),et.castShadow=i.castShadow??!0,et.receiveShadow=i.receiveShadow??!0,et.userData.sculptComponent={id:"beam-center",name:"beam-center",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"cylinder",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"beam",attachment:{parentId:"beam",parentSocket:"beam-center-seat",localStart:[0,.26,0],localEnd:[0,.26,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.23,height:1.14,depth:.23,units:"world",confidence:.85},transform:{position:[0,.26,0],rotation:[0,0,1.5707963267948966]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"beam-center",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"edge-gold",materialLayers:["edge-gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"crossbar-sleeve",kind:"gloss",materialEffect:"polished horizontal sleeve",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},Oe.add(et),s["beam-center"]=et,a["beam-center"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["beam-center"]??(o["beam-center"]=[]),o["beam-center"].push(Oe);let Ye=yt(null),E=new nt;E.name="pan-left__pivot",E.scale.set(1,1,1),Ye?(E.position.copy(Ye.start),E.rotation.set(0,0,0)):(E.position.set(-1.57,1.3499999999999999,0),E.rotation.set(0,0,0)),E.userData.sculptComponent={id:"pan-left",name:"pan-left",level:"macro",role:"body",importance:.85,confidence:.88,primitive:"lathe",topologyClass:"continuous-sculpt",topologyRationale:"Observed turned radial profile with varying radius",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",latheProfile:{points:[[0,-.11],[.45,-.105],[.66,-.05],[.75,.06],[.77,.09],[.75,.105],[.7,.085],[.59,-.025],[.43,-.058],[0,-.06]],segments:48},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"pan-left-seat",localStart:[-1.57,1.3499999999999999,0],localEnd:[-1.57,1.3499999999999999,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[-1.57,1.3499999999999999,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"pan-left",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"bowl-left",kind:"hole",geometryEffect:"open shallow bowl with returned wall thickness",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},E.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"pan-left",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(E),n["pan-left"]=E;let _=Ye?new rt(Ye.endRadius,Ye.baseRadius,Ye.length,16,6):Ei({points:[[0,-.11],[.45,-.105],[.66,-.05],[.75,.06],[.77,.09],[.75,.105],[.7,.085],[.59,-.025],[.43,-.058],[0,-.06]],segments:48});Ye||_.scale(1,1,1);let k=new Ge(_,t.gold??new at({color:8947848}));k.name="pan-left",Ye&&(k.position.copy(Ye.midpoint),k.quaternion.copy(Ye.quaternion)),k.castShadow=i.castShadow??!0,k.receiveShadow=i.receiveShadow??!0,k.userData.sculptComponent={id:"pan-left",name:"pan-left",level:"macro",role:"body",importance:.85,confidence:.88,primitive:"lathe",topologyClass:"continuous-sculpt",topologyRationale:"Observed turned radial profile with varying radius",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",latheProfile:{points:[[0,-.11],[.45,-.105],[.66,-.05],[.75,.06],[.77,.09],[.75,.105],[.7,.085],[.59,-.025],[.43,-.058],[0,-.06]],segments:48},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"pan-left-seat",localStart:[-1.57,1.3499999999999999,0],localEnd:[-1.57,1.3499999999999999,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[-1.57,1.3499999999999999,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"pan-left",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"bowl-left",kind:"hole",geometryEffect:"open shallow bowl with returned wall thickness",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},E.add(k),s["pan-left"]=k,a["pan-left"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["pan-left"]??(o["pan-left"]=[]),o["pan-left"].push(E);let G=yt(null),Y=new nt;Y.name="rim-left__pivot",Y.scale.set(1,1,1),G?(Y.position.copy(G.start),Y.rotation.set(1.5707963267948966,0,0)):(Y.position.set(0,.097,0),Y.rotation.set(1.5707963267948966,0,0)),Y.userData.sculptComponent={id:"rim-left",name:"rim-left",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"torus",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"pan-left",attachment:{parentId:"pan-left",parentSocket:"rim-left-seat",localStart:[0,.097,0],localEnd:[0,.097,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:1.55,height:1.55,depth:.026,units:"world",confidence:.85},transform:{position:[0,.097,0],rotation:[1.5707963267948966,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"rim-left",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"edge-gold",materialLayers:["edge-gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"rim-bead-left",kind:"ridge",geometryEffect:"thin circular rim accent",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},Y.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"rim-left",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n["pan-left"]??e).add(Y),n["rim-left"]=Y;let ce=G?new rt(G.endRadius,G.baseRadius,G.length,16,6):new ti(.45,.08,12,48);G||ce.scale(1.55,1.55,.026);let he=new Ge(ce,t["edge-gold"]??new at({color:8947848}));he.name="rim-left",G&&(he.position.copy(G.midpoint),he.quaternion.copy(G.quaternion)),he.castShadow=i.castShadow??!0,he.receiveShadow=i.receiveShadow??!0,he.userData.sculptComponent={id:"rim-left",name:"rim-left",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"torus",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"pan-left",attachment:{parentId:"pan-left",parentSocket:"rim-left-seat",localStart:[0,.097,0],localEnd:[0,.097,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:1.55,height:1.55,depth:.026,units:"world",confidence:.85},transform:{position:[0,.097,0],rotation:[1.5707963267948966,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"rim-left",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"edge-gold",materialLayers:["edge-gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"rim-bead-left",kind:"ridge",geometryEffect:"thin circular rim accent",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},Y.add(he),s["rim-left"]=he,a["rim-left"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["rim-left"]??(o["rim-left"]=[]),o["rim-left"].push(Y);let ee=yt({parentId:"root",parentSocket:"chain-left-0-seat",localStart:[-1.57,3.8844,0],localEnd:[-.9464617092752042,1.43,.35999999999999993],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015}),de=new nt;de.name="chain-left-0__pivot",de.scale.set(1,1,1),ee?(de.position.copy(ee.start),de.rotation.set(0,0,0)):(de.position.set(-1.57,3.8844,0),de.rotation.set(0,0,0)),de.userData.sculptComponent={id:"chain-left-0",name:"chain-left-0",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"tube",topologyClass:"fiber-strand",topologyRationale:"Observed thin member following a curved centerline",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",tubePath:{points:[[0,0,0],[.6235382907247958,-2.4543999999999997,.35999999999999993]],radius:.013,radialSegments:6},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"chain-left-0-seat",localStart:[-1.57,3.8844,0],localEnd:[-.9464617092752042,1.43,.35999999999999993],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[-1.57,3.8844,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-left-0",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"links-left-0",kind:"ridge",geometryEffect:"repeated alternating oval chain links along endpoints",confidence:.83}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},de.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-left-0",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(de),n["chain-left-0"]=de;let ke=ee?new rt(ee.endRadius,ee.baseRadius,ee.length,16,6):qi({points:[[0,0,0],[.6235382907247958,-2.4543999999999997,.35999999999999993]],radius:.013,radialSegments:6});ee||ke.scale(1,1,1);let pe=new Ge(ke,t.gold??new at({color:8947848}));pe.name="chain-left-0",ee&&(pe.position.copy(ee.midpoint),pe.quaternion.copy(ee.quaternion)),pe.castShadow=i.castShadow??!0,pe.receiveShadow=i.receiveShadow??!0,pe.userData.sculptComponent={id:"chain-left-0",name:"chain-left-0",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"tube",topologyClass:"fiber-strand",topologyRationale:"Observed thin member following a curved centerline",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",tubePath:{points:[[0,0,0],[.6235382907247958,-2.4543999999999997,.35999999999999993]],radius:.013,radialSegments:6},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"chain-left-0-seat",localStart:[-1.57,3.8844,0],localEnd:[-.9464617092752042,1.43,.35999999999999993],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[-1.57,3.8844,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-left-0",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"links-left-0",kind:"ridge",geometryEffect:"repeated alternating oval chain links along endpoints",confidence:.83}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},de.add(pe),s["chain-left-0"]=pe,a["chain-left-0"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["chain-left-0"]??(o["chain-left-0"]=[]),o["chain-left-0"].push(de);let Pe=yt({parentId:"root",parentSocket:"chain-left-1-seat",localStart:[-1.57,3.8844,0],localEnd:[-2.193538290724796,1.43,.35999999999999993],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015}),Fe=new nt;Fe.name="chain-left-1__pivot",Fe.scale.set(1,1,1),Pe?(Fe.position.copy(Pe.start),Fe.rotation.set(0,0,0)):(Fe.position.set(-1.57,3.8844,0),Fe.rotation.set(0,0,0)),Fe.userData.sculptComponent={id:"chain-left-1",name:"chain-left-1",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"tube",topologyClass:"fiber-strand",topologyRationale:"Observed thin member following a curved centerline",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",tubePath:{points:[[0,0,0],[-.6235382907247959,-2.4543999999999997,.35999999999999993]],radius:.013,radialSegments:6},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"chain-left-1-seat",localStart:[-1.57,3.8844,0],localEnd:[-2.193538290724796,1.43,.35999999999999993],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[-1.57,3.8844,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-left-1",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"links-left-1",kind:"ridge",geometryEffect:"repeated alternating oval chain links along endpoints",confidence:.83}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},Fe.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-left-1",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(Fe),n["chain-left-1"]=Fe;let Ze=Pe?new rt(Pe.endRadius,Pe.baseRadius,Pe.length,16,6):qi({points:[[0,0,0],[-.6235382907247959,-2.4543999999999997,.35999999999999993]],radius:.013,radialSegments:6});Pe||Ze.scale(1,1,1);let U=new Ge(Ze,t.gold??new at({color:8947848}));U.name="chain-left-1",Pe&&(U.position.copy(Pe.midpoint),U.quaternion.copy(Pe.quaternion)),U.castShadow=i.castShadow??!0,U.receiveShadow=i.receiveShadow??!0,U.userData.sculptComponent={id:"chain-left-1",name:"chain-left-1",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"tube",topologyClass:"fiber-strand",topologyRationale:"Observed thin member following a curved centerline",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",tubePath:{points:[[0,0,0],[-.6235382907247959,-2.4543999999999997,.35999999999999993]],radius:.013,radialSegments:6},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"chain-left-1-seat",localStart:[-1.57,3.8844,0],localEnd:[-2.193538290724796,1.43,.35999999999999993],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[-1.57,3.8844,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-left-1",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"links-left-1",kind:"ridge",geometryEffect:"repeated alternating oval chain links along endpoints",confidence:.83}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},Fe.add(U),s["chain-left-1"]=U,a["chain-left-1"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["chain-left-1"]??(o["chain-left-1"]=[]),o["chain-left-1"].push(Fe);let $=yt({parentId:"root",parentSocket:"chain-left-2-seat",localStart:[-1.57,3.8844,0],localEnd:[-1.5700000000000003,1.43,-.72],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015}),ue=new nt;ue.name="chain-left-2__pivot",ue.scale.set(1,1,1),$?(ue.position.copy($.start),ue.rotation.set(0,0,0)):(ue.position.set(-1.57,3.8844,0),ue.rotation.set(0,0,0)),ue.userData.sculptComponent={id:"chain-left-2",name:"chain-left-2",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"tube",topologyClass:"fiber-strand",topologyRationale:"Observed thin member following a curved centerline",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",tubePath:{points:[[0,0,0],[-2220446049250313e-31,-2.4543999999999997,-.72]],radius:.013,radialSegments:6},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"chain-left-2-seat",localStart:[-1.57,3.8844,0],localEnd:[-1.5700000000000003,1.43,-.72],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[-1.57,3.8844,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-left-2",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"links-left-2",kind:"ridge",geometryEffect:"repeated alternating oval chain links along endpoints",confidence:.83}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},ue.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-left-2",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(ue),n["chain-left-2"]=ue;let Ee=$?new rt($.endRadius,$.baseRadius,$.length,16,6):qi({points:[[0,0,0],[-2220446049250313e-31,-2.4543999999999997,-.72]],radius:.013,radialSegments:6});$||Ee.scale(1,1,1);let se=new Ge(Ee,t.gold??new at({color:8947848}));se.name="chain-left-2",$&&(se.position.copy($.midpoint),se.quaternion.copy($.quaternion)),se.castShadow=i.castShadow??!0,se.receiveShadow=i.receiveShadow??!0,se.userData.sculptComponent={id:"chain-left-2",name:"chain-left-2",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"tube",topologyClass:"fiber-strand",topologyRationale:"Observed thin member following a curved centerline",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",tubePath:{points:[[0,0,0],[-2220446049250313e-31,-2.4543999999999997,-.72]],radius:.013,radialSegments:6},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"chain-left-2-seat",localStart:[-1.57,3.8844,0],localEnd:[-1.5700000000000003,1.43,-.72],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[-1.57,3.8844,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-left-2",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"links-left-2",kind:"ridge",geometryEffect:"repeated alternating oval chain links along endpoints",confidence:.83}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},ue.add(se),s["chain-left-2"]=se,a["chain-left-2"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["chain-left-2"]??(o["chain-left-2"]=[]),o["chain-left-2"].push(ue);let Ie=yt(null),Te=new nt;Te.name="bar-left__pivot",Te.scale.set(1,1,1),Ie?(Te.position.copy(Ie.start),Te.rotation.set(0,.3,.05)):(Te.position.set(-1.57,1.5,0),Te.rotation.set(0,.3,.05)),Te.userData.sculptComponent={id:"bar-left",name:"bar-left",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"box",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:{parentId:"root",parentSocket:"bar-left-seat",localStart:[-1.57,1.5,0],localEnd:[-1.57,1.5,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.82,height:.28,depth:.44,units:"world",confidence:.85},transform:{position:[-1.57,1.5,0],rotation:[0,.3,.05]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"bar-left",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"bullion",materialLayers:["bullion"],deformations:[],joints:[],seams:[],localFeatures:[{id:"bullion-bevel-left",kind:"bevel",geometryEffect:"beveled trapezoid bullion block",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},Te.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"bar-left",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(Te),n["bar-left"]=Te;let ut=Ie?new rt(Ie.endRadius,Ie.baseRadius,Ie.length,16,6):new jt(1,1,1,4,4,4);Ie||ut.scale(.82,.28,.44);let tt=new Ge(ut,t.bullion??new at({color:8947848}));tt.name="bar-left",Ie&&(tt.position.copy(Ie.midpoint),tt.quaternion.copy(Ie.quaternion)),tt.castShadow=i.castShadow??!0,tt.receiveShadow=i.receiveShadow??!0,tt.userData.sculptComponent={id:"bar-left",name:"bar-left",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"box",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:{parentId:"root",parentSocket:"bar-left-seat",localStart:[-1.57,1.5,0],localEnd:[-1.57,1.5,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.82,height:.28,depth:.44,units:"world",confidence:.85},transform:{position:[-1.57,1.5,0],rotation:[0,.3,.05]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"bar-left",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"bullion",materialLayers:["bullion"],deformations:[],joints:[],seams:[],localFeatures:[{id:"bullion-bevel-left",kind:"bevel",geometryEffect:"beveled trapezoid bullion block",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},Te.add(tt),s["bar-left"]=tt,a["bar-left"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["bar-left"]??(o["bar-left"]=[]),o["bar-left"].push(Te);let wt=yt(null),St=new nt;St.name="bar-left-second__pivot",St.scale.set(1,1,1),wt?(St.position.copy(wt.start),St.rotation.set(0,-.22,-.06)):(St.position.set(-1.44,1.76,.015),St.rotation.set(0,-.22,-.06)),St.userData.sculptComponent={id:"bar-left-second",name:"bar-left-second",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"box",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:{parentId:"root",parentSocket:"bar-left-second-seat",localStart:[-1.44,1.76,.015],localEnd:[-1.44,1.76,.015],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.82,height:.28,depth:.44,units:"world",confidence:.85},transform:{position:[-1.44,1.76,.015],rotation:[0,-.22,-.06]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"bar-left-second",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"bullion",materialLayers:["bullion"],deformations:[],joints:[],seams:[],localFeatures:[{id:"second-bullion",kind:"bevel",geometryEffect:"second stacked bar with bevel edge",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},St.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"bar-left-second",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(St),n["bar-left-second"]=St;let jr=wt?new rt(wt.endRadius,wt.baseRadius,wt.length,16,6):new jt(1,1,1,4,4,4);wt||jr.scale(.82,.28,.44);let Nn=new Ge(jr,t.bullion??new at({color:8947848}));Nn.name="bar-left-second",wt&&(Nn.position.copy(wt.midpoint),Nn.quaternion.copy(wt.quaternion)),Nn.castShadow=i.castShadow??!0,Nn.receiveShadow=i.receiveShadow??!0,Nn.userData.sculptComponent={id:"bar-left-second",name:"bar-left-second",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"box",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:{parentId:"root",parentSocket:"bar-left-second-seat",localStart:[-1.44,1.76,.015],localEnd:[-1.44,1.76,.015],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.82,height:.28,depth:.44,units:"world",confidence:.85},transform:{position:[-1.44,1.76,.015],rotation:[0,-.22,-.06]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"bar-left-second",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"bullion",materialLayers:["bullion"],deformations:[],joints:[],seams:[],localFeatures:[{id:"second-bullion",kind:"bevel",geometryEffect:"second stacked bar with bevel edge",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},St.add(Nn),s["bar-left-second"]=Nn,a["bar-left-second"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["bar-left-second"]??(o["bar-left-second"]=[]),o["bar-left-second"].push(St);let on=yt(null),Gt=new nt;Gt.name="pan-right__pivot",Gt.scale.set(1,1,1),on?(Gt.position.copy(on.start),Gt.rotation.set(0,0,0)):(Gt.position.set(1.57,1.5999999999999999,0),Gt.rotation.set(0,0,0)),Gt.userData.sculptComponent={id:"pan-right",name:"pan-right",level:"macro",role:"body",importance:.85,confidence:.88,primitive:"lathe",topologyClass:"continuous-sculpt",topologyRationale:"Observed turned radial profile with varying radius",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",latheProfile:{points:[[0,-.11],[.45,-.105],[.66,-.05],[.75,.06],[.77,.09],[.75,.105],[.7,.085],[.59,-.025],[.43,-.058],[0,-.06]],segments:48},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"pan-right-seat",localStart:[1.57,1.5999999999999999,0],localEnd:[1.57,1.5999999999999999,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[1.57,1.5999999999999999,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"pan-right",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"bowl-right",kind:"hole",geometryEffect:"open shallow bowl with returned wall thickness",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},Gt.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"pan-right",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(Gt),n["pan-right"]=Gt;let Yr=on?new rt(on.endRadius,on.baseRadius,on.length,16,6):Ei({points:[[0,-.11],[.45,-.105],[.66,-.05],[.75,.06],[.77,.09],[.75,.105],[.7,.085],[.59,-.025],[.43,-.058],[0,-.06]],segments:48});on||Yr.scale(1,1,1);let Sn=new Ge(Yr,t.gold??new at({color:8947848}));Sn.name="pan-right",on&&(Sn.position.copy(on.midpoint),Sn.quaternion.copy(on.quaternion)),Sn.castShadow=i.castShadow??!0,Sn.receiveShadow=i.receiveShadow??!0,Sn.userData.sculptComponent={id:"pan-right",name:"pan-right",level:"macro",role:"body",importance:.85,confidence:.88,primitive:"lathe",topologyClass:"continuous-sculpt",topologyRationale:"Observed turned radial profile with varying radius",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",latheProfile:{points:[[0,-.11],[.45,-.105],[.66,-.05],[.75,.06],[.77,.09],[.75,.105],[.7,.085],[.59,-.025],[.43,-.058],[0,-.06]],segments:48},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"pan-right-seat",localStart:[1.57,1.5999999999999999,0],localEnd:[1.57,1.5999999999999999,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[1.57,1.5999999999999999,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"pan-right",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"bowl-right",kind:"hole",geometryEffect:"open shallow bowl with returned wall thickness",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},Gt.add(Sn),s["pan-right"]=Sn,a["pan-right"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["pan-right"]??(o["pan-right"]=[]),o["pan-right"].push(Gt);let ln=yt(null),Rt=new nt;Rt.name="rim-right__pivot",Rt.scale.set(1,1,1),ln?(Rt.position.copy(ln.start),Rt.rotation.set(1.5707963267948966,0,0)):(Rt.position.set(0,.097,0),Rt.rotation.set(1.5707963267948966,0,0)),Rt.userData.sculptComponent={id:"rim-right",name:"rim-right",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"torus",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"pan-right",attachment:{parentId:"pan-right",parentSocket:"rim-right-seat",localStart:[0,.097,0],localEnd:[0,.097,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:1.55,height:1.55,depth:.026,units:"world",confidence:.85},transform:{position:[0,.097,0],rotation:[1.5707963267948966,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"rim-right",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"edge-gold",materialLayers:["edge-gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"rim-bead-right",kind:"ridge",geometryEffect:"thin circular rim accent",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},Rt.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"rim-right",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n["pan-right"]??e).add(Rt),n["rim-right"]=Rt;let ji=ln?new rt(ln.endRadius,ln.baseRadius,ln.length,16,6):new ti(.45,.08,12,48);ln||ji.scale(1.55,1.55,.026);let Mn=new Ge(ji,t["edge-gold"]??new at({color:8947848}));Mn.name="rim-right",ln&&(Mn.position.copy(ln.midpoint),Mn.quaternion.copy(ln.quaternion)),Mn.castShadow=i.castShadow??!0,Mn.receiveShadow=i.receiveShadow??!0,Mn.userData.sculptComponent={id:"rim-right",name:"rim-right",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"torus",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"pan-right",attachment:{parentId:"pan-right",parentSocket:"rim-right-seat",localStart:[0,.097,0],localEnd:[0,.097,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:1.55,height:1.55,depth:.026,units:"world",confidence:.85},transform:{position:[0,.097,0],rotation:[1.5707963267948966,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"rim-right",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"edge-gold",materialLayers:["edge-gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"rim-bead-right",kind:"ridge",geometryEffect:"thin circular rim accent",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},Rt.add(Mn),s["rim-right"]=Mn,a["rim-right"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["rim-right"]??(o["rim-right"]=[]),o["rim-right"].push(Rt);let Zt=yt({parentId:"root",parentSocket:"chain-right-0-seat",localStart:[1.57,4.1356,0],localEnd:[2.193538290724796,1.68,.35999999999999993],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015}),Jt=new nt;Jt.name="chain-right-0__pivot",Jt.scale.set(1,1,1),Zt?(Jt.position.copy(Zt.start),Jt.rotation.set(0,0,0)):(Jt.position.set(1.57,4.1356,0),Jt.rotation.set(0,0,0)),Jt.userData.sculptComponent={id:"chain-right-0",name:"chain-right-0",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"tube",topologyClass:"fiber-strand",topologyRationale:"Observed thin member following a curved centerline",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",tubePath:{points:[[0,0,0],[.6235382907247959,-2.4556000000000004,.35999999999999993]],radius:.013,radialSegments:6},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"chain-right-0-seat",localStart:[1.57,4.1356,0],localEnd:[2.193538290724796,1.68,.35999999999999993],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[1.57,4.1356,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-right-0",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"links-right-0",kind:"ridge",geometryEffect:"repeated alternating oval chain links along endpoints",confidence:.83}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},Jt.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-right-0",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(Jt),n["chain-right-0"]=Jt;let Ti=Zt?new rt(Zt.endRadius,Zt.baseRadius,Zt.length,16,6):qi({points:[[0,0,0],[.6235382907247959,-2.4556000000000004,.35999999999999993]],radius:.013,radialSegments:6});Zt||Ti.scale(1,1,1);let wn=new Ge(Ti,t.gold??new at({color:8947848}));wn.name="chain-right-0",Zt&&(wn.position.copy(Zt.midpoint),wn.quaternion.copy(Zt.quaternion)),wn.castShadow=i.castShadow??!0,wn.receiveShadow=i.receiveShadow??!0,wn.userData.sculptComponent={id:"chain-right-0",name:"chain-right-0",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"tube",topologyClass:"fiber-strand",topologyRationale:"Observed thin member following a curved centerline",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",tubePath:{points:[[0,0,0],[.6235382907247959,-2.4556000000000004,.35999999999999993]],radius:.013,radialSegments:6},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"chain-right-0-seat",localStart:[1.57,4.1356,0],localEnd:[2.193538290724796,1.68,.35999999999999993],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[1.57,4.1356,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-right-0",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"links-right-0",kind:"ridge",geometryEffect:"repeated alternating oval chain links along endpoints",confidence:.83}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},Jt.add(wn),s["chain-right-0"]=wn,a["chain-right-0"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["chain-right-0"]??(o["chain-right-0"]=[]),o["chain-right-0"].push(Jt);let mn=yt({parentId:"root",parentSocket:"chain-right-1-seat",localStart:[1.57,4.1356,0],localEnd:[.9464617092752042,1.68,.35999999999999993],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015}),nn=new nt;nn.name="chain-right-1__pivot",nn.scale.set(1,1,1),mn?(nn.position.copy(mn.start),nn.rotation.set(0,0,0)):(nn.position.set(1.57,4.1356,0),nn.rotation.set(0,0,0)),nn.userData.sculptComponent={id:"chain-right-1",name:"chain-right-1",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"tube",topologyClass:"fiber-strand",topologyRationale:"Observed thin member following a curved centerline",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",tubePath:{points:[[0,0,0],[-.6235382907247958,-2.4556000000000004,.35999999999999993]],radius:.013,radialSegments:6},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"chain-right-1-seat",localStart:[1.57,4.1356,0],localEnd:[.9464617092752042,1.68,.35999999999999993],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[1.57,4.1356,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-right-1",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"links-right-1",kind:"ridge",geometryEffect:"repeated alternating oval chain links along endpoints",confidence:.83}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},nn.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-right-1",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(nn),n["chain-right-1"]=nn;let Zr=mn?new rt(mn.endRadius,mn.baseRadius,mn.length,16,6):qi({points:[[0,0,0],[-.6235382907247958,-2.4556000000000004,.35999999999999993]],radius:.013,radialSegments:6});mn||Zr.scale(1,1,1);let Un=new Ge(Zr,t.gold??new at({color:8947848}));Un.name="chain-right-1",mn&&(Un.position.copy(mn.midpoint),Un.quaternion.copy(mn.quaternion)),Un.castShadow=i.castShadow??!0,Un.receiveShadow=i.receiveShadow??!0,Un.userData.sculptComponent={id:"chain-right-1",name:"chain-right-1",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"tube",topologyClass:"fiber-strand",topologyRationale:"Observed thin member following a curved centerline",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",tubePath:{points:[[0,0,0],[-.6235382907247958,-2.4556000000000004,.35999999999999993]],radius:.013,radialSegments:6},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"chain-right-1-seat",localStart:[1.57,4.1356,0],localEnd:[.9464617092752042,1.68,.35999999999999993],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[1.57,4.1356,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-right-1",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"links-right-1",kind:"ridge",geometryEffect:"repeated alternating oval chain links along endpoints",confidence:.83}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},nn.add(Un),s["chain-right-1"]=Un,a["chain-right-1"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["chain-right-1"]??(o["chain-right-1"]=[]),o["chain-right-1"].push(nn);let x=yt({parentId:"root",parentSocket:"chain-right-2-seat",localStart:[1.57,4.1356,0],localEnd:[1.5699999999999998,1.68,-.72],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015}),N=new nt;N.name="chain-right-2__pivot",N.scale.set(1,1,1),x?(N.position.copy(x.start),N.rotation.set(0,0,0)):(N.position.set(1.57,4.1356,0),N.rotation.set(0,0,0)),N.userData.sculptComponent={id:"chain-right-2",name:"chain-right-2",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"tube",topologyClass:"fiber-strand",topologyRationale:"Observed thin member following a curved centerline",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",tubePath:{points:[[0,0,0],[-2220446049250313e-31,-2.4556000000000004,-.72]],radius:.013,radialSegments:6},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"chain-right-2-seat",localStart:[1.57,4.1356,0],localEnd:[1.5699999999999998,1.68,-.72],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[1.57,4.1356,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-right-2",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"links-right-2",kind:"ridge",geometryEffect:"repeated alternating oval chain links along endpoints",confidence:.83}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},N.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-right-2",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(N),n["chain-right-2"]=N;let j=x?new rt(x.endRadius,x.baseRadius,x.length,16,6):qi({points:[[0,0,0],[-2220446049250313e-31,-2.4556000000000004,-.72]],radius:.013,radialSegments:6});x||j.scale(1,1,1);let H=new Ge(j,t.gold??new at({color:8947848}));H.name="chain-right-2",x&&(H.position.copy(x.midpoint),H.quaternion.copy(x.quaternion)),H.castShadow=i.castShadow??!0,H.receiveShadow=i.receiveShadow??!0,H.userData.sculptComponent={id:"chain-right-2",name:"chain-right-2",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"tube",topologyClass:"fiber-strand",topologyRationale:"Observed thin member following a curved centerline",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",tubePath:{points:[[0,0,0],[-2220446049250313e-31,-2.4556000000000004,-.72]],radius:.013,radialSegments:6},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"chain-right-2-seat",localStart:[1.57,4.1356,0],localEnd:[1.5699999999999998,1.68,-.72],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[1.57,4.1356,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-right-2",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"links-right-2",kind:"ridge",geometryEffect:"repeated alternating oval chain links along endpoints",confidence:.83}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},N.add(H),s["chain-right-2"]=H,a["chain-right-2"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["chain-right-2"]??(o["chain-right-2"]=[]),o["chain-right-2"].push(N);let z=yt(null),fe=new nt;fe.name="bar-right__pivot",fe.scale.set(1,1,1),z?(fe.position.copy(z.start),fe.rotation.set(0,-.1,.05)):(fe.position.set(1.57,1.75,0),fe.rotation.set(0,-.1,.05)),fe.userData.sculptComponent={id:"bar-right",name:"bar-right",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"box",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:{parentId:"root",parentSocket:"bar-right-seat",localStart:[1.57,1.75,0],localEnd:[1.57,1.75,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.82,height:.28,depth:.44,units:"world",confidence:.85},transform:{position:[1.57,1.75,0],rotation:[0,-.1,.05]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"bar-right",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"bullion",materialLayers:["bullion"],deformations:[],joints:[],seams:[],localFeatures:[{id:"bullion-bevel-right",kind:"bevel",geometryEffect:"beveled trapezoid bullion block",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},fe.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"bar-right",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(fe),n["bar-right"]=fe;let Ce=z?new rt(z.endRadius,z.baseRadius,z.length,16,6):new jt(1,1,1,4,4,4);z||Ce.scale(.82,.28,.44);let me=new Ge(Ce,t.bullion??new at({color:8947848}));me.name="bar-right",z&&(me.position.copy(z.midpoint),me.quaternion.copy(z.quaternion)),me.castShadow=i.castShadow??!0,me.receiveShadow=i.receiveShadow??!0,me.userData.sculptComponent={id:"bar-right",name:"bar-right",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"box",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:{parentId:"root",parentSocket:"bar-right-seat",localStart:[1.57,1.75,0],localEnd:[1.57,1.75,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.82,height:.28,depth:.44,units:"world",confidence:.85},transform:{position:[1.57,1.75,0],rotation:[0,-.1,.05]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"bar-right",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"bullion",materialLayers:["bullion"],deformations:[],joints:[],seams:[],localFeatures:[{id:"bullion-bevel-right",kind:"bevel",geometryEffect:"beveled trapezoid bullion block",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},fe.add(me),s["bar-right"]=me,a["bar-right"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["bar-right"]??(o["bar-right"]=[]),o["bar-right"].push(fe);let Ae=yt({parentId:"root",parentSocket:"column-seat",localStart:[0,2.3,0],localEnd:[0,2.3,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]}),He=new nt;He.name="finial-neck__pivot",He.scale.set(1,1,1),Ae?(He.position.copy(Ae.start),He.rotation.set(0,0,0)):(He.position.set(0,4.77,0),He.rotation.set(0,0,0)),He.userData.sculptComponent={id:"finial-neck",name:"finial-neck",level:"macro",role:"body",importance:.85,confidence:.88,primitive:"cylinder",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:{parentId:"root",parentSocket:"column-seat",localStart:[0,2.3,0],localEnd:[0,2.3,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.2,height:.65,depth:.2,units:"world",confidence:.7},transform:{position:[0,4.77,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"column",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"upper-neck",kind:"contour",geometryEffect:"solid connection from spindle to finial",confidence:.8}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},He.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"column",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(He),n["finial-neck"]=He;let $e=Ae?new rt(Ae.endRadius,Ae.baseRadius,Ae.length,16,6):new rt(.5,.5,1,24,8);Ae||$e.scale(.2,.65,.2);let Re=new Ge($e,t.gold??new at({color:8947848}));return Re.name="finial-neck",Ae&&(Re.position.copy(Ae.midpoint),Re.quaternion.copy(Ae.quaternion)),Re.castShadow=i.castShadow??!0,Re.receiveShadow=i.receiveShadow??!0,Re.userData.sculptComponent={id:"finial-neck",name:"finial-neck",level:"macro",role:"body",importance:.85,confidence:.88,primitive:"cylinder",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:{parentId:"root",parentSocket:"column-seat",localStart:[0,2.3,0],localEnd:[0,2.3,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.2,height:.65,depth:.2,units:"world",confidence:.7},transform:{position:[0,4.77,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"column",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"upper-neck",kind:"contour",geometryEffect:"solid connection from spindle to finial",confidence:.8}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},He.add(Re),s["finial-neck"]=Re,a["finial-neck"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o.column??(o.column=[]),o.column.push(He),e.userData.sculptRuntime={nodes:n,meshes:s,sockets:r,colliders:a,destructionGroups:o},e.userData.lookDevTargets={qualityPriority:"reference-fidelity",materialPass:{albedoPaletteRequired:!0,roughnessVariationRequired:!0,normalOrBumpRequired:!0,localOverridesRequired:!0,minimumTextureResolution:1024,preferredTextureResolution:2048,independentMapChannels:["albedo","roughness","height","normal","ambient-occlusion"],requiredSurfaceFrequencyBands:["macro","meso","micro"],geometryReliefRequiredWhenSilhouetteAffected:!0,referencePbrExtraction:{requiredWhenSourceImagePresent:!0,targetThreshold:.7,stopOnLowConfidence:!0,script:"forge/stage1_intake/extract_pbr_evidence.py",acceptedLimitation:"Illustration of highly reflective homogeneous gold: exact maps cannot be recovered. Representative independent PBR channels and measured visual render review are used; no exact material recovery claim."},mustAvoid:["single flat albedo per material","uniform roughness","albedo texture reused as roughness/height/normal/AO","single-frequency random noise","plastic-looking smooth bark, stone, cloth, foliage, or aged material","local color/detail described only in prose without material masks","claiming exact PBR recovery when confidence is below the target threshold"]},lightingPass:{requiredTerms:["key light","fill light","rim or environment light","exposure","tone mapping","background","contact shadow"],mustAvoid:["ambient-only lighting","flat value range","missing contact shadow","reference lighting copied without separating material readability"]},screenshotReview:["Compare albedo palette and local color zones.","Compare roughness/normal/bump response under light.","Compare cavity dirt, edge wear, stains, moss, scratches, or other local masks.","Compare key/fill/rim structure, exposure, tone mapping, background, and contact shadows.","Capture a neutral-light render to verify material readability without reference lighting.","Capture a grazing-light close-up to expose flat normals, uniform roughness, tiling, and plastic highlights.","Capture a reference-matched render from the same camera framing as the source."]},e.userData.actionReadiness={note:"Use root.userData.sculptRuntime.nodes for transforms, sockets for attachments, colliders for physics proxies, and destructionGroups for breakable sets."},e}var Xr=new I;function vn(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;Xr.copy(e),Xr[n]=0,Xr.normalize();let c=.5*a/(a+o),h=1-Xr.angleTo(i)/l;return Math.sign(Xr[t])===1?h*c:o/(a+o)+c+c*(1-h)}var tl=class i extends jt{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new I,c=new I,h=new I(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,g=u.length/6,v=new I,m=.5/a;for(let p=0,M=0;p<u.length;p+=3,M+=2)switch(l.fromArray(u,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),u[p+0]=h.x*Math.sign(l.x)+c.x*r,u[p+1]=h.y*Math.sign(l.y)+c.y*r,u[p+2]=h.z*Math.sign(l.z)+c.z*r,d[p+0]=c.x,d[p+1]=c.y,d[p+2]=c.z,Math.floor(p/g)){case 0:v.set(1,0,0),f[M+0]=vn(v,c,"z","y",r,n),f[M+1]=1-vn(v,c,"y","z",r,t);break;case 1:v.set(-1,0,0),f[M+0]=1-vn(v,c,"z","y",r,n),f[M+1]=1-vn(v,c,"y","z",r,t);break;case 2:v.set(0,1,0),f[M+0]=1-vn(v,c,"x","z",r,e),f[M+1]=vn(v,c,"z","x",r,n);break;case 3:v.set(0,-1,0),f[M+0]=1-vn(v,c,"x","z",r,e),f[M+1]=1-vn(v,c,"z","x",r,n);break;case 4:v.set(0,0,1),f[M+0]=1-vn(v,c,"x","y",r,e),f[M+1]=1-vn(v,c,"y","x",r,t);break;case 5:v.set(0,0,-1),f[M+0]=vn(v,c,"x","y",r,e),f[M+1]=1-vn(v,c,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};function Bc(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Ot,c=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=jd(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let v=0;v<a[h].length;++v)f.push(a[h][v][d]);let g=jd(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function jd(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new Qt(a,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<t;g++){let v=h.getComponent(d,g);o.setComponent(d+u,g,v)}}else a.set(h.array,l);l+=h.count*t}return s!==void 0&&(o.gpuType=s),o}var qr=(i,e=72)=>new Fi(i.map(t=>new le(...t)),e),kc=i=>{let e=i.map(n=>n.index?n.toNonIndexed():n.clone()),t=Bc(e,!1);if(e.forEach(n=>n.dispose()),i.forEach(n=>n.dispose()),!t)throw new Error("Balance geometry attributes do not match");return t};function z_(i,e,t){let n=new ws;for(let a=0;a<8;a++){let o=Math.PI/8+a*Math.PI/4,l=Math.cos(o)*i/2,c=Math.sin(o)*i/2;a===0?n.moveTo(l,c):n.lineTo(l,c)}n.closePath();let s=.012,r=new br(n,{depth:e-2*s,steps:1,bevelEnabled:!0,bevelSize:s,bevelThickness:s,bevelSegments:3,curveSegments:1});return r.rotateX(-Math.PI/2),r.translate(0,-e/2+s,0),r.scale(1,1,t/i),r}function H_(i){let s=Array.from({length:25},(c,h)=>{let u=h/24*Math.PI*2;return new I(.033*Math.cos(u),.065*Math.sin(u),0)}),r=new Gn(s.slice(0,-1),!0,"centripetal"),a=new ni(r,24,.01,6,!0),o=Math.max(2,Math.round((i-.15)/.098)+1),l=[];for(let c=0;c<o;c++){let h=a.clone();h.rotateY(c%2?Math.PI/2:0),h.translate(0,-i/2+.075+c*(i-.15)/(o-1),0),l.push(h)}return a.dispose(),{geometry:kc(l),count:o}}function G_(){let i={G:[[[.85,.86],[.6,1],[.2,.95],[0,.7],[0,.25],[.2,0],[.7,0],[.9,.2],[.9,.45],[.55,.45]]],O:[[[.2,0],[0,.25],[0,.75],[.2,1],[.7,1],[.9,.75],[.9,.25],[.7,0],[.2,0]]],L:[[[0,1],[0,0],[.8,0]]],D:[[[0,0],[0,1],[.45,1],[.85,.75],[.85,.25],[.45,0],[0,0]]],9:[[[.85,.5],[.2,.5],[0,.7],[0,.9],[.2,1],[.65,1],[.85,.8],[.85,.25],[.65,0],[.1,0]]],".":[[[.35,0],[.36,.04]]]},e=[];for(let[t,n,s]of[["GOLD",.058,-.035],["999.9",.034,.045]]){let r=n*1.24,a=(t.length-1)*r+n*.9;[...t].forEach((o,l)=>i[o].forEach(c=>{let h=c.map(([d,f])=>new I(-a/2+l*r+d*n,.141,s-f*n)),u=new Gn(h,!1,"centripetal");e.push(new ni(u,Math.max(6,h.length*3),.0021,4,!1))}))}return kc(e)}function Yd(i){let e={gold:new Vn({color:14923344,metalness:1,roughness:.23,envMapIntensity:1.15}),edge:new Vn({color:15583080,metalness:1,roughness:.18,envMapIntensity:1.2}),bullion:new Vn({color:15780188,metalness:1,roughness:.22,envMapIntensity:1.1}),stamp:new Vn({color:10911013,metalness:1,roughness:.32,envMapIntensity:.9})},t=new Set,n=new Set,s={parts:0,links:0,triangles:0};return i.traverse(r=>{if(!r.isMesh)return;let a=r.name,o=r.userData.sculptComponent;if(!o)return;(Array.isArray(r.material)?r.material:[r.material]).forEach(u=>{t.add(u);for(let d of Object.values(u))d?.isTexture&&n.add(d)});let c,h=e.gold;if(a==="root"||a==="foot-step"){let u=o.dimensions;c=z_(u.width,u.height,u.depth),h=e.edge}else if(a==="column")c=qr([[.13,.22],[.16,.27],[.19,.32],[.23,.4],[.265,.51],[.28,.61],[.265,.69],[.21,.77],[.155,.87],[.15,.94],[.15,1.48],[.155,1.6],[.2,1.67],[.23,1.75],[.24,1.82],[.225,1.91],[.175,2.02],[.155,2.07],[.15,2.14],[.15,3.52],[.155,3.61],[.2,3.68],[.24,3.76],[.25,3.83],[.23,3.93],[.17,4.02],[.15,4.11],[.15,4.59]].map(([d,f])=>[d,f-2.3]),96);else if(a.startsWith("collar-"))c=qr([[.15,-.1],[.185,-.1],[.215,-.095],[.24,-.077],[.253,-.049],[.257,0],[.253,.049],[.24,.077],[.215,.095],[.185,.1],[.15,.1]],80),h=e.edge;else if(a==="finial-neck")c=qr([[.145,-.325],[.17,-.29],[.195,-.22],[.18,-.16],[.15,-.13],[.16,-.09],[.17,-.065],[.14,-.035],[.11,.035],[.095,.09],[.11,.14],[.14,.2],[.17,.26],[.18,.325]],80);else if(a==="finial")c=new mi(.17,40,28),c.scale(1,1.12,1),h=e.edge;else if(a==="beam"){let u=o.geometryDescriptor.tubePath.points.map(g=>new I(...g)),d=new ni(new Gn(u),96,.069,20,!1);d.scale(1,1,.8);let f=[d];for(let g of[u[0],u.at(-1)]){let v=new mi(.067,16,10);v.scale(1,1,.8),v.translate(g.x,g.y,g.z),f.push(v);let m=new ti(.06,.014,8,32);m.rotateX(Math.PI/2),m.scale(1.3,1,.8),m.translate(g.x,g.y,g.z),f.push(m)}c=kc(f)}else if(a==="beam-center")c=qr([[0,-.57],[.09,-.57],[.113,-.555],[.126,-.53],[.13,-.5],[.13,.5],[.126,.53],[.113,.555],[.09,.57],[0,.57]],80),h=e.edge;else if(a.startsWith("pan-"))c=qr([[0,-.165],[.25,-.165],[.42,-.154],[.53,-.128],[.62,-.082],[.69,-.025],[.739,.039],[.765,.083],[.767,.095],[.757,.105],[.745,.1],[.721,.061],[.681,.002],[.615,-.057],[.53,-.101],[.42,-.124],[.25,-.13],[0,-.13]],96);else if(a.startsWith("rim-"))c=new ti(.756,.012,10,96),h=e.edge;else if(a.startsWith("chain-")){let u=o.attachment,d=new I(...u.localStart).distanceTo(new I(...u.localEnd)),f=H_(d);c=f.geometry,s.links+=f.count,r.userData.linkCount=f.count,h=e.edge}else if(a.startsWith("bar-")){let u={"bar-left":1.38,"bar-left-second":1.643,"bar-right":1.63}[a];u!==void 0&&(r.parent.position.y=u);let d=o.dimensions,f=new tl(d.width,d.height,d.depth,3,.023),g=f.attributes.position;for(let p=0;p<g.count;p++){let M=1-.09*(g.getY(p)/d.height+.5);g.setX(p,g.getX(p)*M),g.setZ(p,g.getZ(p)*M)}f.computeVertexNormals();let v=G_(),m=[f,v].map(p=>p.index?p.toNonIndexed():p.clone());c=Bc(m,!0),m.forEach(p=>p.dispose()),f.dispose(),v.dispose(),h=[e.bullion,e.stamp]}c&&(r.geometry.dispose(),r.geometry=c),r.material=h,r.castShadow=!1,r.receiveShadow=!1,r.userData.websiteRefinement={pass:"blockout",approved:!1,source:"single-image, procedural geometry"},s.parts++,s.triangles+=r.geometry.index?r.geometry.index.count/3:r.geometry.attributes.position.count/3}),n.forEach(r=>r.dispose()),t.forEach(r=>r.dispose()),i.userData.websiteRefinement={...s,approved:!1,notes:"Hidden views and hallmark letterforms are inferred. Browser review pending; no subsequent sculpt pass unlocked."},i}function Zd(){let i=document.querySelector("#balance-viewport");if(!i)return;let e=document.querySelector("#balance-fallback"),t=document.querySelector("#scene-status"),n=matchMedia("(prefers-reduced-motion: reduce)"),s=matchMedia("(hover: hover) and (pointer: fine)"),r,a,o,l,c,h=[],u=0,d=!0,f=!1,g=!1,v=!1,m=!1,p=window.AzyraMotion?.reduced??n.matches,M=!1,R=0,b=0,w=s.matches,S=0,A=0,y=-1/0,T=null,C=!1,D=O=>{t.textContent=O};try{let q=function(){if(M)return;let ne=Math.max(1,i.clientWidth),we=Math.max(1,i.clientHeight);Q.aspect=ne/we,Q.updateProjectionMatrix(),r.setSize(ne,we,!1);let Ne=Math.max(5.7,4.9/Q.aspect)/2/Math.tan(tn.degToRad(17))*1.12;Q.position.normalize().multiplyScalar(Ne),o.update(),Se()},be=function(ne){if(u=0,M||!d||document.hidden)return;let we=b?Math.min(.05,(ne-b)/1e3):0;b=ne;let Ne=!p&&!m&&!f&&!g&&!v;if(Ne){R+=we;let Oe=w&&ne-y>1200?Math.PI/40:0;A+=(Oe-A)*(1-Math.exp(-we/.8)),S=(S-we*A)%(Math.PI*2),ge.position.y=Math.sin(R*.6)*.018,ge.rotation.x=Math.sin(R*.45)*.008,ge.rotation.y=S,ge.rotation.z=Math.sin(R*.6)*.006}if(T!==null){let Oe=new ii().setFromVector3(Q.position.clone().sub(o.target)),L=T-Oe.theta;L=Math.atan2(Math.sin(L),Math.cos(L)),Math.abs(L)<.005?(T=null,C=!1):(Oe.theta+=L*(p?1:.12),Q.position.copy(new I().setFromSpherical(Oe).add(o.target)))}let Le=o.update();r.render(P,Q),(Ne||f||Le||C)&&Se()},Se=function(){!u&&!M&&d&&!document.hidden&&(u=requestAnimationFrame(be))};r=new Yo({antialias:!0,alpha:!0,powerPreference:"high-performance"}),r.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),r.setClearColor(0,0),r.outputColorSpace=Pt,r.toneMapping=Ds,r.toneMappingExposure=.95,r.shadowMap.enabled=!0,r.shadowMap.type=ki;let O=r.domElement;O.id="balance-canvas",O.tabIndex=0,O.setAttribute("role","img"),O.setAttribute("aria-label","Balan\xE7a dourada interativa em 3D. Arraste para explorar. Setas giram a vista, Home restaura e Espa\xE7o pausa ou retoma."),O.setAttribute("aria-describedby","scene-help"),O.style.touchAction="pan-y",O.setAttribute("aria-keyshortcuts","ArrowLeft ArrowRight Home Space"),i.append(O);let P=new Li,B=new Xi(r),V=new Qo,W=[];for(let[ne,we,Ne]of[[[-4,2,4],[2,7,.1],3],[[4,1,-2],[1,6,.1],2],[[0,6,1],[5,.1,3],2.5]]){let Le=new Ge(new jt(...we),new Ni({color:new We(16774367).multiplyScalar(Ne)}));Le.position.set(...ne),Le.lookAt(0,1,0),V.add(Le),W.push(Le)}a=B.fromScene(V,.015),P.environment=a.texture,W.forEach(ne=>{V.remove(ne),ne.geometry.dispose(),ne.material.dispose()}),V.dispose(),B.dispose();let Q=new kt(34,1,.1,100);Q.position.set(6,3.5,12);let X=new As(16773596,408622,.65);P.add(X);let Z=new Bi(16773852,2.6);Z.position.set(-4,6,6),P.add(Z),Z.castShadow=!0,Z.shadow.mapSize.set(w?1024:512,w?1024:512),Object.assign(Z.shadow.camera,{left:-4,right:4,top:4,bottom:-4,near:.1,far:24}),Z.shadow.camera.updateProjectionMatrix(),Z.shadow.normalBias=.008,Z.shadow.bias=-2e-4,Z.shadow.radius=2;let ie=new Bi(16767889,1.8);ie.position.set(5,2,-4),P.add(ie);let ge=new nt;P.add(ge);let _e=Yd(qd({castShadow:!0,receiveShadow:!0,textureSize:32}));_e.position.y=-2.68,ge.add(_e),_e.traverse(ne=>{ne.isMesh&&(ne.castShadow=!0,ne.receiveShadow=!0)});let ze=new Ge(new Oi(5,4),new xr({opacity:.24}));ze.rotation.x=-Math.PI/2,ze.position.y=-2.735,ze.receiveShadow=!0,P.add(ze),h.push(()=>{ze.geometry.dispose(),ze.material.dispose()}),o=new $o(Q,O),o.enableDamping=!0,o.dampingFactor=.075,o.enablePan=!1,o.enableZoom=!1,o.minPolarAngle=.32,o.maxPolarAngle=Math.PI-.32,o.rotateSpeed=.65,o.target.set(0,0,0),o.update(),o.addEventListener("start",()=>{f=!0,A=0,T=null,C=!1,Se()}),o.addEventListener("end",()=>{f=!1,y=performance.now(),Se()}),o.addEventListener("change",Se);let Xe=(ne,we,Ne)=>{ne.addEventListener(we,Ne),h.push(()=>ne.removeEventListener(we,Ne))};Xe(O,"pointerenter",()=>{g=!0,A=0,Se()}),Xe(O,"pointerleave",()=>{g=!1,y=performance.now(),Se()}),Xe(O,"focus",()=>{v=!0,A=0,Se()}),Xe(O,"blur",()=>{v=!1,y=performance.now(),Se()});let qe=()=>{w=s.matches,A=0,Se()};s.addEventListener("change",qe),h.push(()=>s.removeEventListener("change",qe));let J=()=>q();"ResizeObserver"in window?(l=new ResizeObserver(J),l.observe(i)):(window.addEventListener("resize",J),h.push(()=>window.removeEventListener("resize",J))),"IntersectionObserver"in window&&(c=new IntersectionObserver(ne=>{d=ne[0].isIntersecting,d?Se():(cancelAnimationFrame(u),u=0,b=0)},{threshold:.03}),c.observe(i));let ye=ne=>{let we=new ii().setFromVector3(Q.position.clone().sub(o.target));T=(T??we.theta)+ne*Math.PI/4,C=!0,Se(),D(ne>0?"Vista girada 45 graus para a direita.":"Vista girada 45 graus para a esquerda.")},Ue=()=>{Q.position.set(6,3.5,12),T=null,C=!1,S=0,A=0,y=performance.now(),ge.rotation.set(0,0,0),ge.position.y=0,q(),D("Perspectiva inicial restaurada.")},st=()=>{m=!m,A=0,D(m?"Rota\xE7\xE3o pausada.":"Rota\xE7\xE3o retomada."),Se()},te=ne=>{(ne.key==="ArrowLeft"||ne.key==="ArrowRight")&&(ne.preventDefault(),ye(ne.key==="ArrowLeft"?-1:1)),ne.key==="Home"&&(ne.preventDefault(),Ue()),(ne.code==="Space"||ne.key===" ")&&(ne.preventDefault(),ne.repeat||st())};O.addEventListener("keydown",te),h.push(()=>O.removeEventListener("keydown",te));let oe=ne=>{p=ne.detail.reduced,o.enableDamping=!p,p&&(A=0,ge.rotation.x=0,ge.rotation.z=0,ge.position.y=0),Se()};document.addEventListener("azyra:motion",oe),h.push(()=>document.removeEventListener("azyra:motion",oe)),p=window.AzyraMotion?.reduced??n.matches,o.enableDamping=!p;let ae=()=>{document.hidden?(cancelAnimationFrame(u),u=0,b=0):Se()};document.addEventListener("visibilitychange",ae),h.push(()=>document.removeEventListener("visibilitychange",ae));let re=ne=>{ne.preventDefault(),M=!0,cancelAnimationFrame(u),u=0,e.hidden=!1,O.hidden=!0,document.querySelector("#scene-help").textContent="Refer\xEAncia visual da balan\xE7a.",D("Visualiza\xE7\xE3o est\xE1tica. Recarregue a p\xE1gina para tentar retomar o 3D.")};O.addEventListener("webglcontextlost",re),h.push(()=>O.removeEventListener("webglcontextlost",re)),window.Azyra3D={root:ge,model:_e,camera:Q,controls:o,turn:ye,reset:Ue,togglePause:st,get state(){return{reduced:p,userPaused:m,visible:d,dragging:f,desktop:w,hovered:g,focused:v,clockwiseAngle:S,autoRotating:w&&!p&&!m&&!f&&!g&&!v}}},q(),r.render(P,Q),e.hidden=!0,i.classList.add("is-ready"),D("3D pronto. Explore com mouse ou teclado."),Se()}catch(O){M=!0,h.forEach(P=>P()),o?.dispose(),a?.dispose(),r?.dispose(),i.querySelector("canvas")?.remove(),e.hidden=!1,document.querySelector("#scene-help").textContent="Refer\xEAncia visual da balan\xE7a.",D("Visualiza\xE7\xE3o est\xE1tica dispon\xEDvel. Seu navegador n\xE3o iniciou a experi\xEAncia 3D."),console.warn("Azyra 3D unavailable:",O.message)}function F(){M=!0,cancelAnimationFrame(u),l?.disconnect(),c?.disconnect(),o?.dispose(),h.forEach(P=>P()),a?.dispose();let O=new Set;window.Azyra3D?.model.traverse(P=>{P.isMesh&&(P.geometry.dispose(),(Array.isArray(P.material)?P.material:[P.material]).forEach(V=>{O.has(V)||(O.add(V),V.dispose())}))}),r?.dispose()}window.addEventListener("pagehide",O=>{O.persisted||F()})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Zd,{once:!0}):Zd();})();
/*! For license information please see balance-3d.js.LEGAL.txt */

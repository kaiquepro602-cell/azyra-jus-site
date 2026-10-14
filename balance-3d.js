(()=>{var ui={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},fi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Vc=0,_l=1,Wc=2;var hr=1,Xc=2,ps=3,kn=0,Bt=1,_n=2,zn=0,ms=1,yl=2,bl=3,xl=4,qc=5;var Ri=100,jc=101,Yc=102,Zc=103,Jc=104,Kc=200,$c=201,Qc=202,eh=203,vl=204,Sl=205,th=206,nh=207,ih=208,sh=209,rh=210,ah=211,oh=212,lh=213,ch=214,ea=0,ta=1,na=2,Qi=3,ia=4,sa=5,ra=6,aa=7,Fa=0,hh=1,dh=2,Cn=0,Ml=1,wl=2,Tl=3,gs=4,El=5,Rl=6,Al=7;var Cl=300,pi=301,Ai=302,Oa=303,Ba=304,dr=306,Zn=1e3,Fn=1001,oa=1002,Lt=1003,uh=1004;var ur=1005;var Ot=1006,ka=1007;var mi=1008;var tn=1009,Pl=1010,Il=1011,_s=1012,za=1013,Pn=1014,yn=1015,In=1016,Ha=1017,Ga=1018,ys=1020,Dl=35902,Ll=35899,Nl=1021,Ul=1022,bn=1023,On=1026,gi=1027,Va=1028,Wa=1029,_i=1030,Xa=1031;var qa=1033,fr=33776,pr=33777,mr=33778,gr=33779,ja=35840,Ya=35841,Za=35842,Ja=35843,Ka=36196,$a=37492,Qa=37496,eo=37488,to=37489,_r=37490,no=37491,io=37808,so=37809,ro=37810,ao=37811,oo=37812,lo=37813,co=37814,ho=37815,uo=37816,fo=37817,po=37818,mo=37819,go=37820,_o=37821,yo=36492,bo=36494,xo=36495,vo=36283,So=36284,yr=36285,Mo=36286;var Fs=2300,la=2301,Kr=2302,cl=2303,hl=2400,dl=2401,ul=2402;var fh=3200;var br=0,ph=1,Ut="",At="srgb",Os="srgb-linear",Bs="linear",rt="srgb";var $r=7680;var mh=519,gh=512,_h=513,yh=514,wo=515,bh=516,xh=517,To=518,vh=519,Sh=35044;var Fl="300 es",En=2e3,es=2001;function gd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function _d(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ts(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Mh(){let i=ts("canvas");return i.style.display="block",i}var mc={},ns=null;function Ol(...i){let e="THREE."+i.shift();ns?ns("log",e,...i):console.log(e,...i)}function wh(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function De(...i){i=wh(i);let e="THREE."+i.shift();if(ns)ns("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Fe(...i){i=wh(i);let e="THREE."+i.shift();if(ns)ns("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function wi(...i){let e=i.join(" ");e in mc||(mc[e]=!0,De(...i))}function Th(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Eh={[ea]:ta,[na]:ra,[ia]:aa,[Qi]:sa,[ta]:ea,[ra]:na,[aa]:ia,[sa]:Qi},Rn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gc=1234567,Ds=Math.PI/180,is=180/Math.PI;function bs(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]).toLowerCase()}function Ve(i,e,t){return Math.max(e,Math.min(t,i))}function Bl(i,e){return(i%e+e)%e}function yd(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function bd(i,e,t){return i!==e?(t-i)/(e-i):0}function Ls(i,e,t){return(1-t)*i+t*e}function xd(i,e,t,n){return Ls(i,e,1-Math.exp(-t*n))}function vd(i,e=1){return e-Math.abs(Bl(i,e*2)-e)}function Sd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Md(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function wd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Td(i,e){return i+Math.random()*(e-i)}function Ed(i){return i*(.5-Math.random())}function Rd(i){i!==void 0&&(gc=i);let e=gc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ad(i){return i*Ds}function Cd(i){return i*is}function Pd(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Id(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Dd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ld(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),d=a((e+n)/2),u=r((e-n)/2),h=a((e-n)/2),f=r((n-e)/2),y=a((n-e)/2);switch(s){case"XYX":i.set(o*d,l*u,l*h,o*c);break;case"YZY":i.set(l*h,o*d,l*u,o*c);break;case"ZXZ":i.set(l*u,l*h,o*d,o*c);break;case"XZX":i.set(o*d,l*y,l*f,o*c);break;case"YXY":i.set(l*f,o*d,l*y,o*c);break;case"ZYZ":i.set(l*y,l*f,o*d,o*c);break;default:De("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ki(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Zt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var $t={DEG2RAD:Ds,RAD2DEG:is,generateUUID:bs,clamp:Ve,euclideanModulo:Bl,mapLinear:yd,inverseLerp:bd,lerp:Ls,damp:xd,pingpong:vd,smoothstep:Sd,smootherstep:Md,randInt:wd,randFloat:Td,randFloatSpread:Ed,seededRandom:Rd,degToRad:Ad,radToDeg:Cd,isPowerOfTwo:Pd,ceilPowerOfTwo:Id,floorPowerOfTwo:Dd,setQuaternionFromProperEuler:Ld,normalize:Zt,denormalize:Ki},Wl=class Wl{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Wl.prototype.isVector2=!0;var ge=Wl,Jt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],d=n[s+2],u=n[s+3],h=r[a+0],f=r[a+1],y=r[a+2],v=r[a+3];if(u!==v||l!==h||c!==f||d!==y){let m=l*h+c*f+d*y+u*v;m<0&&(h=-h,f=-f,y=-y,v=-v,m=-m);let p=1-o;if(m<.9995){let T=Math.acos(m),A=Math.sin(T);p=Math.sin(p*T)/A,o=Math.sin(o*T)/A,l=l*p+h*o,c=c*p+f*o,d=d*p+y*o,u=u*p+v*o}else{l=l*p+h*o,c=c*p+f*o,d=d*p+y*o,u=u*p+v*o;let T=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=T,c*=T,d*=T,u*=T}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],d=n[s+3],u=r[a],h=r[a+1],f=r[a+2],y=r[a+3];return e[t]=o*y+d*u+l*f-c*h,e[t+1]=l*y+d*h+c*u-o*f,e[t+2]=c*y+d*f+o*h-l*u,e[t+3]=d*y-o*u-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(s/2),u=o(r/2),h=l(n/2),f=l(s/2),y=l(r/2);switch(a){case"XYZ":this._x=h*d*u+c*f*y,this._y=c*f*u-h*d*y,this._z=c*d*y+h*f*u,this._w=c*d*u-h*f*y;break;case"YXZ":this._x=h*d*u+c*f*y,this._y=c*f*u-h*d*y,this._z=c*d*y-h*f*u,this._w=c*d*u+h*f*y;break;case"ZXY":this._x=h*d*u-c*f*y,this._y=c*f*u+h*d*y,this._z=c*d*y+h*f*u,this._w=c*d*u-h*f*y;break;case"ZYX":this._x=h*d*u-c*f*y,this._y=c*f*u+h*d*y,this._z=c*d*y-h*f*u,this._w=c*d*u+h*f*y;break;case"YZX":this._x=h*d*u+c*f*y,this._y=c*f*u+h*d*y,this._z=c*d*y-h*f*u,this._w=c*d*u-h*f*y;break;case"XZY":this._x=h*d*u-c*f*y,this._y=c*f*u-h*d*y,this._z=c*d*y+h*f*u,this._w=c*d*u+h*f*y;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],u=t[10],h=n+o+u;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(d-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(d-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+d)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+a*o+s*c-r*l,this._y=s*d+a*l+r*o-n*c,this._z=r*d+a*c+n*l-s*o,this._w=a*d-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Xl=class Xl{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_c.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_c.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),d=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*d,this.y=n+l*d+o*c-r*u,this.z=s+l*u+r*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ko.copy(this).projectOnVector(e),this.sub(ko)}reflect(e){return this.sub(ko.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Xl.prototype.isVector3=!0;var L=Xl,ko=new L,_c=new Jt,ql=class ql{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],u=n[7],h=n[2],f=n[5],y=n[8],v=s[0],m=s[3],p=s[6],T=s[1],A=s[4],x=s[7],M=s[2],S=s[5],R=s[8];return r[0]=a*v+o*T+l*M,r[3]=a*m+o*A+l*S,r[6]=a*p+o*x+l*R,r[1]=c*v+d*T+u*M,r[4]=c*m+d*A+u*S,r[7]=c*p+d*x+u*R,r[2]=h*v+f*T+y*M,r[5]=h*m+f*A+y*S,r[8]=h*p+f*x+y*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-n*r*d+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],u=d*a-o*c,h=o*l-d*r,f=c*r-a*l,y=t*u+n*h+s*f;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/y;return e[0]=u*v,e[1]=(s*c-d*n)*v,e[2]=(o*n-s*a)*v,e[3]=h*v,e[4]=(d*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return wi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(zo.makeScale(e,t)),this}rotate(e){return wi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(zo.makeRotation(-e)),this}translate(e,t){return wi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(zo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ql.prototype.isMatrix3=!0;var Ge=ql,zo=new Ge,yc=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bc=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Nd(){let i={enabled:!0,workingColorSpace:Os,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===rt&&(s.r=Yn(s.r),s.g=Yn(s.g),s.b=Yn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===rt&&(s.r=$i(s.r),s.g=$i(s.g),s.b=$i(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ut?Bs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return wi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return wi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Os]:{primaries:e,whitePoint:n,transfer:Bs,toXYZ:yc,fromXYZ:bc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:At},outputColorSpaceConfig:{drawingBufferColorSpace:At}},[At]:{primaries:e,whitePoint:n,transfer:rt,toXYZ:yc,fromXYZ:bc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:At}}}),i}var Ke=Nd();function Yn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function $i(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Fi,ca=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Fi===void 0&&(Fi=ts("canvas")),Fi.width=e.width,Fi.height=e.height;let s=Fi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Fi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ts("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Yn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Yn(t[n]/255)*255):t[n]=Yn(t[n]);return{data:t,width:e.width,height:e.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Ud=0,ss=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=bs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ho(s[a].image)):r.push(Ho(s[a]))}else r=Ho(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Ho(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ca.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})}var Fd=0,Go=new L,Vt=class i extends Rn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Fn,s=Fn,r=Ot,a=mi,o=bn,l=tn,c=i.DEFAULT_ANISOTROPY,d=Ut){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=bs(),this.name="",this.source=new ss(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Go).x}get height(){return this.source.getSize(Go).y}get depth(){return this.source.getSize(Go).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){De(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){De(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zn:e.x=e.x-Math.floor(e.x);break;case Fn:e.x=e.x<0?0:1;break;case oa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zn:e.y=e.y-Math.floor(e.y);break;case Fn:e.y=e.y<0?0:1;break;case oa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=Cl;Vt.DEFAULT_ANISOTROPY=1;var jl=class jl{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],d=l[4],u=l[8],h=l[1],f=l[5],y=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(d-h)<.01&&Math.abs(u-v)<.01&&Math.abs(y-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+v)<.1&&Math.abs(y+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(c+1)/2,x=(f+1)/2,M=(p+1)/2,S=(d+h)/4,R=(u+v)/4,_=(y+m)/4;return A>x&&A>M?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=S/n,r=R/n):x>M?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=S/s,r=_/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=R/r,s=_/r),this.set(n,s,r,t),this}let T=Math.sqrt((m-y)*(m-y)+(u-v)*(u-v)+(h-d)*(h-d));return Math.abs(T)<.001&&(T=1),this.x=(m-y)/T,this.y=(u-v)/T,this.z=(h-d)/T,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this.w=Ve(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this.w=Ve(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};jl.prototype.isVector4=!0;var xt=jl,ha=class extends Rn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ot,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Vt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ot,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new ss(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},en=class extends ha{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ks=class extends Vt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var da=class extends Vt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Ua=class Ua{constructor(e,t,n,s,r,a,o,l,c,d,u,h,f,y,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,d,u,h,f,y,v,m)}set(e,t,n,s,r,a,o,l,c,d,u,h,f,y,v,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=d,p[10]=u,p[14]=h,p[3]=f,p[7]=y,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ua().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Oi.setFromMatrixColumn(e,0).length(),r=1/Oi.setFromMatrixColumn(e,1).length(),a=1/Oi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let h=a*d,f=a*u,y=o*d,v=o*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=f+y*c,t[5]=h-v*c,t[9]=-o*l,t[2]=v-h*c,t[6]=y+f*c,t[10]=a*l}else if(e.order==="YXZ"){let h=l*d,f=l*u,y=c*d,v=c*u;t[0]=h+v*o,t[4]=y*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*d,t[9]=-o,t[2]=f*o-y,t[6]=v+h*o,t[10]=a*l}else if(e.order==="ZXY"){let h=l*d,f=l*u,y=c*d,v=c*u;t[0]=h-v*o,t[4]=-a*u,t[8]=y+f*o,t[1]=f+y*o,t[5]=a*d,t[9]=v-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let h=a*d,f=a*u,y=o*d,v=o*u;t[0]=l*d,t[4]=y*c-f,t[8]=h*c+v,t[1]=l*u,t[5]=v*c+h,t[9]=f*c-y,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let h=a*l,f=a*c,y=o*l,v=o*c;t[0]=l*d,t[4]=v-h*u,t[8]=y*u+f,t[1]=u,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=f*u+y,t[10]=h-v*u}else if(e.order==="XZY"){let h=a*l,f=a*c,y=o*l,v=o*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=h*u+v,t[5]=a*d,t[9]=f*u-y,t[2]=y*u-f,t[6]=o*d,t[10]=v*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Od,e,Bd)}lookAt(e,t,n){let s=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),ti.crossVectors(n,an),ti.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),ti.crossVectors(n,an)),ti.normalize(),Ir.crossVectors(an,ti),s[0]=ti.x,s[4]=Ir.x,s[8]=an.x,s[1]=ti.y,s[5]=Ir.y,s[9]=an.y,s[2]=ti.z,s[6]=Ir.z,s[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],u=n[5],h=n[9],f=n[13],y=n[2],v=n[6],m=n[10],p=n[14],T=n[3],A=n[7],x=n[11],M=n[15],S=s[0],R=s[4],_=s[8],w=s[12],C=s[1],P=s[5],F=s[9],H=s[13],D=s[2],O=s[6],V=s[10],Y=s[14],ee=s[3],q=s[7],Z=s[11],ne=s[15];return r[0]=a*S+o*C+l*D+c*ee,r[4]=a*R+o*P+l*O+c*q,r[8]=a*_+o*F+l*V+c*Z,r[12]=a*w+o*H+l*Y+c*ne,r[1]=d*S+u*C+h*D+f*ee,r[5]=d*R+u*P+h*O+f*q,r[9]=d*_+u*F+h*V+f*Z,r[13]=d*w+u*H+h*Y+f*ne,r[2]=y*S+v*C+m*D+p*ee,r[6]=y*R+v*P+m*O+p*q,r[10]=y*_+v*F+m*V+p*Z,r[14]=y*w+v*H+m*Y+p*ne,r[3]=T*S+A*C+x*D+M*ee,r[7]=T*R+A*P+x*O+M*q,r[11]=T*_+A*F+x*V+M*Z,r[15]=T*w+A*H+x*Y+M*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],u=e[6],h=e[10],f=e[14],y=e[3],v=e[7],m=e[11],p=e[15],T=l*f-c*h,A=o*f-c*u,x=o*h-l*u,M=a*f-c*d,S=a*h-l*d,R=a*u-o*d;return t*(v*T-m*A+p*x)-n*(y*T-m*M+p*S)+s*(y*A-v*M+p*R)-r*(y*x-v*S+m*R)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],d=e[10];return t*(a*d-o*c)-n*(r*d-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],u=e[9],h=e[10],f=e[11],y=e[12],v=e[13],m=e[14],p=e[15],T=t*o-n*a,A=t*l-s*a,x=t*c-r*a,M=n*l-s*o,S=n*c-r*o,R=s*c-r*l,_=d*v-u*y,w=d*m-h*y,C=d*p-f*y,P=u*m-h*v,F=u*p-f*v,H=h*p-f*m,D=T*H-A*F+x*P+M*C-S*w+R*_;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/D;return e[0]=(o*H-l*F+c*P)*O,e[1]=(s*F-n*H-r*P)*O,e[2]=(v*R-m*S+p*M)*O,e[3]=(h*S-u*R-f*M)*O,e[4]=(l*C-a*H-c*w)*O,e[5]=(t*H-s*C+r*w)*O,e[6]=(m*x-y*R-p*A)*O,e[7]=(d*R-h*x+f*A)*O,e[8]=(a*F-o*C+c*_)*O,e[9]=(n*C-t*F-r*_)*O,e[10]=(y*S-v*x+p*T)*O,e[11]=(u*x-d*S-f*T)*O,e[12]=(o*w-a*P-l*_)*O,e[13]=(t*P-n*w+s*_)*O,e[14]=(v*A-y*M-m*T)*O,e[15]=(d*M-u*A+h*T)*O,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,d=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+n,d*l-s*a,0,c*l-s*o,d*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,d=a+a,u=o+o,h=r*c,f=r*d,y=r*u,v=a*d,m=a*u,p=o*u,T=l*c,A=l*d,x=l*u,M=n.x,S=n.y,R=n.z;return s[0]=(1-(v+p))*M,s[1]=(f+x)*M,s[2]=(y-A)*M,s[3]=0,s[4]=(f-x)*S,s[5]=(1-(h+p))*S,s[6]=(m+T)*S,s[7]=0,s[8]=(y+A)*R,s[9]=(m-T)*R,s[10]=(1-(h+v))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Oi.set(s[0],s[1],s[2]).length(),o=Oi.set(s[4],s[5],s[6]).length(),l=Oi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Mn.copy(this);let c=1/a,d=1/o,u=1/l;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=d,Mn.elements[5]*=d,Mn.elements[6]*=d,Mn.elements[8]*=u,Mn.elements[9]*=u,Mn.elements[10]*=u,t.setFromRotationMatrix(Mn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=En,l=!1){let c=this.elements,d=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),f=(n+s)/(n-s),y,v;if(l)y=r/(a-r),v=a*r/(a-r);else if(o===En)y=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===es)y=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=y,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=En,l=!1){let c=this.elements,d=2/(t-e),u=2/(n-s),h=-(t+e)/(t-e),f=-(n+s)/(n-s),y,v;if(l)y=1/(a-r),v=a/(a-r);else if(o===En)y=-2/(a-r),v=-(a+r)/(a-r);else if(o===es)y=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=y,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Ua.prototype.isMatrix4=!0;var ut=Ua,Oi=new L,Mn=new ut,Od=new L(0,0,0),Bd=new L(1,1,1),ti=new L,Ir=new L,an=new L,xc=new ut,vc=new Jt,Bn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],d=s[9],u=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ve(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return xc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vc.setFromEuler(this),this.setFromQuaternion(vc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Bn.DEFAULT_ORDER="XYZ";var zs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},kd=0,Sc=new L,Bi=new Jt,Vn=new ut,Dr=new L,Es=new L,zd=new L,Hd=new Jt,Mc=new L(1,0,0),wc=new L(0,1,0),Tc=new L(0,0,1),Ec={type:"added"},Gd={type:"removed"},ki={type:"childadded",child:null},Vo={type:"childremoved",child:null},Nt=class i extends Rn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=bs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new Bn,n=new Jt,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ut},normalMatrix:{value:new Ge}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bi.setFromAxisAngle(e,t),this.quaternion.multiply(Bi),this}rotateOnWorldAxis(e,t){return Bi.setFromAxisAngle(e,t),this.quaternion.premultiply(Bi),this}rotateX(e){return this.rotateOnAxis(Mc,e)}rotateY(e){return this.rotateOnAxis(wc,e)}rotateZ(e){return this.rotateOnAxis(Tc,e)}translateOnAxis(e,t){return Sc.copy(e).applyQuaternion(this.quaternion),this.position.add(Sc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mc,e)}translateY(e){return this.translateOnAxis(wc,e)}translateZ(e){return this.translateOnAxis(Tc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Dr.copy(e):Dr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(Es,Dr,this.up):Vn.lookAt(Dr,Es,this.up),this.quaternion.setFromRotationMatrix(Vn),s&&(Vn.extractRotation(s.matrixWorld),Bi.setFromRotationMatrix(Vn),this.quaternion.premultiply(Bi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Fe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ec),ki.child=e,this.dispatchEvent(ki),ki.child=null):Fe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gd),Vo.child=e,this.dispatchEvent(Vo),Vo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ec),ki.child=e,this.dispatchEvent(ki),ki.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,e,zd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,Hd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),u=a(e.shapes),h=a(e.skeletons),f=a(e.animations),y=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),y.length>0&&(n.nodes=y)}return n.object=s,n;function a(o){let l=[];for(let c in o){let d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Nt.DEFAULT_UP=new L(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Je=class extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Vd={type:"move"},rs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=d.position.distanceTo(u.position),f=.02,y=.005;c.inputState.pinching&&h>f+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Vd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Je;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Rh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},Lr={h:0,s:0,l:0};function Wo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Oe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ke.workingColorSpace){if(e=Bl(e,1),t=Ve(t,0,1),n=Ve(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Wo(a,r,e+1/3),this.g=Wo(a,r,e),this.b=Wo(a,r,e-1/3)}return Ke.colorSpaceToWorking(this,s),this}setStyle(e,t=At){function n(r){r!==void 0&&parseFloat(r)<1&&De("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:De("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);De("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){let n=Rh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):De("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yn(e.r),this.g=Yn(e.g),this.b=Yn(e.b),this}copyLinearToSRGB(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return Ke.workingToColorSpace(Gt.copy(this),e),Math.round(Ve(Gt.r*255,0,255))*65536+Math.round(Ve(Gt.g*255,0,255))*256+Math.round(Ve(Gt.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(Gt.copy(this),t);let n=Gt.r,s=Gt.g,r=Gt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,d=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=d<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=At){Ke.workingToColorSpace(Gt.copy(this),e);let t=Gt.r,n=Gt.g,s=Gt.b;return e!==At?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ni),this.setHSL(ni.h+e,ni.s+t,ni.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ni),e.getHSL(Lr);let n=Ls(ni.h,Lr.h,t),s=Ls(ni.s,Lr.s,t),r=Ls(ni.l,Lr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Gt=new Oe;Oe.NAMES=Rh;var Ti=class extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bn,this.environmentIntensity=1,this.environmentRotation=new Bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},wn=new L,Wn=new L,Xo=new L,Xn=new L,zi=new L,Hi=new L,Rc=new L,qo=new L,jo=new L,Yo=new L,Zo=new xt,Jo=new xt,Ko=new xt,ai=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),wn.subVectors(e,t),s.cross(wn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){wn.subVectors(s,t),Wn.subVectors(n,t),Xo.subVectors(e,t);let a=wn.dot(wn),o=wn.dot(Wn),l=wn.dot(Xo),c=Wn.dot(Wn),d=Wn.dot(Xo),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let h=1/u,f=(c*l-o*d)*h,y=(a*d-o*l)*h;return r.set(1-f-y,y,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Xn.x),l.addScaledVector(a,Xn.y),l.addScaledVector(o,Xn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Zo.setScalar(0),Jo.setScalar(0),Ko.setScalar(0),Zo.fromBufferAttribute(e,t),Jo.fromBufferAttribute(e,n),Ko.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Zo,r.x),a.addScaledVector(Jo,r.y),a.addScaledVector(Ko,r.z),a}static isFrontFacing(e,t,n,s){return wn.subVectors(n,t),Wn.subVectors(e,t),wn.cross(Wn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),wn.cross(Wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;zi.subVectors(s,n),Hi.subVectors(r,n),qo.subVectors(e,n);let l=zi.dot(qo),c=Hi.dot(qo);if(l<=0&&c<=0)return t.copy(n);jo.subVectors(e,s);let d=zi.dot(jo),u=Hi.dot(jo);if(d>=0&&u<=d)return t.copy(s);let h=l*u-d*c;if(h<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(n).addScaledVector(zi,a);Yo.subVectors(e,r);let f=zi.dot(Yo),y=Hi.dot(Yo);if(y>=0&&f<=y)return t.copy(r);let v=f*c-l*y;if(v<=0&&c>=0&&y<=0)return o=c/(c-y),t.copy(n).addScaledVector(Hi,o);let m=d*y-f*u;if(m<=0&&u-d>=0&&f-y>=0)return Rc.subVectors(r,s),o=(u-d)/(u-d+(f-y)),t.copy(s).addScaledVector(Rc,o);let p=1/(m+v+h);return a=v*p,o=h*p,t.copy(n).addScaledVector(zi,a).addScaledVector(Hi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},An=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Tn):Tn.fromBufferAttribute(r,a),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Nr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Nr.copy(n.boundingBox)),Nr.applyMatrix4(e.matrixWorld),this.union(Nr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rs),Ur.subVectors(this.max,Rs),Gi.subVectors(e.a,Rs),Vi.subVectors(e.b,Rs),Wi.subVectors(e.c,Rs),ii.subVectors(Vi,Gi),si.subVectors(Wi,Vi),xi.subVectors(Gi,Wi);let t=[0,-ii.z,ii.y,0,-si.z,si.y,0,-xi.z,xi.y,ii.z,0,-ii.x,si.z,0,-si.x,xi.z,0,-xi.x,-ii.y,ii.x,0,-si.y,si.x,0,-xi.y,xi.x,0];return!$o(t,Gi,Vi,Wi,Ur)||(t=[1,0,0,0,1,0,0,0,1],!$o(t,Gi,Vi,Wi,Ur))?!1:(Fr.crossVectors(ii,si),t=[Fr.x,Fr.y,Fr.z],$o(t,Gi,Vi,Wi,Ur))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},qn=[new L,new L,new L,new L,new L,new L,new L,new L],Tn=new L,Nr=new An,Gi=new L,Vi=new L,Wi=new L,ii=new L,si=new L,xi=new L,Rs=new L,Ur=new L,Fr=new L,vi=new L;function $o(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){vi.fromArray(i,r);let o=s.x*Math.abs(vi.x)+s.y*Math.abs(vi.y)+s.z*Math.abs(vi.z),l=e.dot(vi),c=t.dot(vi),d=n.dot(vi);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}var Rt=new L,Or=new ge,Wd=0,cn=class extends Rn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Sh,this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Or.fromBufferAttribute(this,t),Or.applyMatrix3(e),this.setXY(t,Or.x,Or.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ki(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ki(t,this.array)),t}setX(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ki(t,this.array)),t}setY(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ki(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ki(t,this.array)),t}setW(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array),s=Zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array),s=Zt(s,this.array),r=Zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Hs=class extends cn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Gs=class extends cn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ft=class extends cn{constructor(e,t,n){super(new Float32Array(e),t,n)}},Xd=new An,As=new L,Qo=new L,oi=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Xd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;As.subVectors(e,this.center);let t=As.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(As,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(As.copy(e.center).add(Qo)),this.expandByPoint(As.copy(e.center).sub(Qo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},qd=0,pn=new ut,el=new Nt,Xi=new L,on=new An,Cs=new An,Dt=new L,Kt=class i extends Rn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=bs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gd(e)?Gs:Hs)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ge().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,t,n){return pn.makeTranslation(e,t,n),this.applyMatrix4(pn),this}scale(e,t,n){return pn.makeScale(e,t,n),this.applyMatrix4(pn),this}lookAt(e){return el.lookAt(e),el.updateMatrix(),this.applyMatrix4(el.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xi).negate(),this.translate(Xi.x,Xi.y,Xi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ft(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new An);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];on.setFromBufferAttribute(r),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Fe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(on.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Cs.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(on.min,Cs.min),on.expandByPoint(Dt),Dt.addVectors(on.max,Cs.max),on.expandByPoint(Dt)):(on.expandByPoint(Cs.min),on.expandByPoint(Cs.max))}on.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Dt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Dt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Dt.fromBufferAttribute(o,c),l&&(Xi.fromBufferAttribute(e,c),Dt.add(Xi)),s=Math.max(s,n.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Fe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Fe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new cn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new L,l[_]=new L;let c=new L,d=new L,u=new L,h=new ge,f=new ge,y=new ge,v=new L,m=new L;function p(_,w,C){c.fromBufferAttribute(n,_),d.fromBufferAttribute(n,w),u.fromBufferAttribute(n,C),h.fromBufferAttribute(r,_),f.fromBufferAttribute(r,w),y.fromBufferAttribute(r,C),d.sub(c),u.sub(c),f.sub(h),y.sub(h);let P=1/(f.x*y.y-y.x*f.y);isFinite(P)&&(v.copy(d).multiplyScalar(y.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(d,-y.x).multiplyScalar(P),o[_].add(v),o[w].add(v),o[C].add(v),l[_].add(m),l[w].add(m),l[C].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let _=0,w=T.length;_<w;++_){let C=T[_],P=C.start,F=C.count;for(let H=P,D=P+F;H<D;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let A=new L,x=new L,M=new L,S=new L;function R(_){M.fromBufferAttribute(s,_),S.copy(M);let w=o[_];A.copy(w),A.sub(M.multiplyScalar(M.dot(w))).normalize(),x.crossVectors(S,w);let P=x.dot(l[_])<0?-1:1;a.setXYZW(_,A.x,A.y,A.z,P)}for(let _=0,w=T.length;_<w;++_){let C=T[_],P=C.start,F=C.count;for(let H=P,D=P+F;H<D;H+=3)R(e.getX(H+0)),R(e.getX(H+1)),R(e.getX(H+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new cn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,d=new L,u=new L;if(e)for(let h=0,f=e.count;h<f;h+=3){let y=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,y),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),o.fromBufferAttribute(n,y),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(d),l.add(d),c.add(d),n.setXYZ(y,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,l){let c=o.array,d=o.itemSize,u=o.normalized,h=new c.constructor(l.length*d),f=0,y=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*d;for(let p=0;p<d;p++)h[y++]=c[f++]}return new cn(h,d,u)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let d=0,u=c.length;d<u;d++){let h=c[d],f=e(h,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let u=0,h=c.length;u<h;u++){let f=c[u];d.push(f.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let d=s[c];this.setAttribute(c,d.clone(t))}let r=e.morphAttributes;for(let c in r){let d=[],u=r[c];for(let h=0,f=u.length;h<f;h++)d.push(u[h].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,d=a.length;c<d;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var tl=new L,jd=new L,Yd=new Ge,ln=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=tl.subVectors(n,t).cross(jd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(tl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Yd.getNormalMatrix(e),s=this.coplanarPoint(tl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Zd=0,Jn=class extends Rn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=bs(),this.name="",this.type="Material",this.blending=ms,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vl,this.blendDst=Sl,this.blendEquation=Ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=Qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$r,this.stencilZFail=$r,this.stencilZPass=$r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){De(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){De(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Oe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new ln().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ge().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ge().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var jn=new L,nl=new L,Br=new L,kr=new L,as=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jn.copy(this.origin).addScaledVector(this.direction,t),jn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){nl.copy(e).add(t).multiplyScalar(.5),Br.copy(t).sub(e).normalize(),kr.copy(this.origin).sub(nl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Br),o=kr.dot(this.direction),l=-kr.dot(Br),c=kr.lengthSq(),d=Math.abs(1-a*a),u,h,f,y;if(d>0)if(u=a*l-o,h=a*o-l,y=r*d,u>=0)if(h>=-y)if(h<=y){let v=1/d;u*=v,h*=v,f=u*(u+a*h+2*o)+h*(a*u+h+2*l)+c}else h=r,u=Math.max(0,-(a*h+o)),f=-u*u+h*(h+2*l)+c;else h=-r,u=Math.max(0,-(a*h+o)),f=-u*u+h*(h+2*l)+c;else h<=-y?(u=Math.max(0,-(-a*r+o)),h=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+h*(h+2*l)+c):h<=y?(u=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(u=Math.max(0,-(a*r+o)),h=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+h*(h+2*l)+c);else h=a>0?-r:r,u=Math.max(0,-(a*h+o)),f=-u*u+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(nl).addScaledVector(Br,h),f}intersectSphere(e,t){if(e.radius<0)return null;jn.subVectors(e.center,this.origin);let n=jn.dot(this.direction),s=jn.dot(jn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),d>=0?(r=(e.min.y-h.y)*d,a=(e.max.y-h.y)*d):(r=(e.max.y-h.y)*d,a=(e.min.y-h.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-h.z)*u,l=(e.max.z-h.z)*u):(o=(e.max.z-h.z)*u,l=(e.min.z-h.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,jn)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,d=o.z,u=e.x-a.x,h=e.y-a.y,f=e.z-a.z,y=t.x-a.x,v=t.y-a.y,m=t.z-a.z,p=n.x-a.x,T=n.y-a.y,A=n.z-a.z,x=Math.abs(l),M=Math.abs(c),S=Math.abs(d),R,_,w,C,P,F,H,D,O,V,Y,ee;if(x>=M&&x>=S?(w=l,F=u,O=y,ee=p,l>=0?(R=c,_=d,C=h,P=f,H=v,D=m,V=T,Y=A):(R=d,_=c,C=f,P=h,H=m,D=v,V=A,Y=T)):M>=S?(w=c,F=h,O=v,ee=T,c>=0?(R=d,_=l,C=f,P=u,H=m,D=y,V=A,Y=p):(R=l,_=d,C=u,P=f,H=y,D=m,V=p,Y=A)):(w=d,F=f,O=m,ee=A,d>=0?(R=l,_=c,C=u,P=h,H=y,D=v,V=p,Y=T):(R=c,_=l,C=h,P=u,H=v,D=y,V=T,Y=p)),w===0)return null;let q=R/w,Z=_/w,ne=1/w,Se=C-q*F,_e=P-Z*F,ke=H-q*O,ze=D-Z*O,Be=V-q*ee,X=Y-Z*ee,K=Be*ze-X*ke,xe=Se*X-_e*Be,oe=ke*_e-ze*Se;if(s){if(K<0||xe<0||oe<0)return null}else if((K<0||xe<0||oe<0)&&(K>0||xe>0||oe>0))return null;let re=K+xe+oe;if(re===0)return null;let Pe=ne*(K*F+xe*O+oe*ee);return(re>0?Pe<0:Pe>0)?null:this.at(Pe/re,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Vs=class extends Jn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=Fa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ac=new ut,Si=new as,zr=new oi,Cc=new L,Hr=new L,Gr=new L,Vr=new L,il=new L,Wr=new L,Pc=new L,Xr=new L,Ue=class extends Nt{constructor(e=new Kt,t=new Vs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Wr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let d=o[l],u=r[l];d!==0&&(il.fromBufferAttribute(u,e),a?Wr.addScaledVector(il,d):Wr.addScaledVector(il.sub(t),d))}t.add(Wr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere),zr.applyMatrix4(r),Si.copy(e.ray).recast(e.near),!(zr.containsPoint(Si.origin)===!1&&(Si.intersectSphere(zr,Cc)===null||Si.origin.distanceToSquared(Cc)>(e.far-e.near)**2))&&(Ac.copy(r).invert(),Si.copy(e.ray).applyMatrix4(Ac),!(n.boundingBox!==null&&Si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Si)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let y=0,v=h.length;y<v;y++){let m=h[y],p=a[m.materialIndex],T=Math.max(m.start,f.start),A=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=T,M=A;x<M;x+=3){let S=o.getX(x),R=o.getX(x+1),_=o.getX(x+2);s=qr(this,p,e,n,c,d,u,S,R,_),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let y=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=y,p=v;m<p;m+=3){let T=o.getX(m),A=o.getX(m+1),x=o.getX(m+2);s=qr(this,a,e,n,c,d,u,T,A,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let y=0,v=h.length;y<v;y++){let m=h[y],p=a[m.materialIndex],T=Math.max(m.start,f.start),A=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=T,M=A;x<M;x+=3){let S=x,R=x+1,_=x+2;s=qr(this,p,e,n,c,d,u,S,R,_),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let y=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=y,p=v;m<p;m+=3){let T=m,A=m+1,x=m+2;s=qr(this,a,e,n,c,d,u,T,A,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Jd(i,e,t,n,s,r,a,o){let l;if(e.side===Bt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===kn,o),l===null)return null;Xr.copy(o),Xr.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Xr);return c<t.near||c>t.far?null:{distance:c,point:Xr.clone(),object:i}}function qr(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Hr),i.getVertexPosition(l,Gr),i.getVertexPosition(c,Vr);let d=Jd(i,e,t,n,Hr,Gr,Vr,Pc);if(d){let u=new L;ai.getBarycoord(Pc,Hr,Gr,Vr,u),s&&(d.uv=ai.getInterpolatedAttribute(s,o,l,c,u,new ge)),r&&(d.uv1=ai.getInterpolatedAttribute(r,o,l,c,u,new ge)),a&&(d.normal=ai.getInterpolatedAttribute(a,o,l,c,u,new L),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new L,materialIndex:0};ai.getNormal(Hr,Gr,Vr,h.normal),d.face=h,d.barycoord=u}return d}var Ws=class extends Vt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Lt,d=Lt,u,h){super(null,a,o,l,c,d,s,r,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Xs=class extends cn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},qi=new ut,Ic=new ut,jr=[],Dc=new An,Kd=new ut,Ps=new Ue,Is=new oi,qs=class extends Ue{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Xs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Kd)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new An),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,qi),Dc.copy(e.boundingBox).applyMatrix4(qi),this.boundingBox.union(Dc)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new oi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,qi),Is.copy(e.boundingSphere).applyMatrix4(qi),this.boundingSphere.union(Is)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Ps.geometry=this.geometry,Ps.material=this.material,Ps.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Is.copy(this.boundingSphere),Is.applyMatrix4(n),e.ray.intersectsSphere(Is)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,qi),Ic.multiplyMatrices(n,qi),Ps.matrixWorld=Ic,Ps.raycast(e,jr);for(let a=0,o=jr.length;a<o;a++){let l=jr[a];l.instanceId=r,l.object=this,t.push(l)}jr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Xs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ws(new Float32Array(s*this.count),s,this.count,Va,yn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Mi=new oi,$d=new ge(.5,.5),Yr=new L,os=class{constructor(e=new ln,t=new ln,n=new ln,s=new ln,r=new ln,a=new ln){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=En,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],d=r[4],u=r[5],h=r[6],f=r[7],y=r[8],v=r[9],m=r[10],p=r[11],T=r[12],A=r[13],x=r[14],M=r[15];if(s[0].setComponents(c-a,f-d,p-y,M-T).normalize(),s[1].setComponents(c+a,f+d,p+y,M+T).normalize(),s[2].setComponents(c+o,f+u,p+v,M+A).normalize(),s[3].setComponents(c-o,f-u,p-v,M-A).normalize(),n)s[4].setComponents(l,h,m,x).normalize(),s[5].setComponents(c-l,f-h,p-m,M-x).normalize();else if(s[4].setComponents(c-l,f-h,p-m,M-x).normalize(),t===En)s[5].setComponents(c+l,f+h,p+m,M+x).normalize();else if(t===es)s[5].setComponents(l,h,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mi)}intersectsSprite(e){Mi.center.set(0,0,0);let t=$d.distanceTo(e.center);return Mi.radius=.7071067811865476+t,Mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Yr.x=s.normal.x>0?e.max.x:e.min.x,Yr.y=s.normal.y>0?e.max.y:e.min.y,Yr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Yr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var js=class extends Vt{constructor(e=[],t=pi,n,s,r,a,o,l,c,d){super(e,t,n,s,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ys=class extends Vt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var li=class extends Vt{constructor(e,t,n=Pn,s,r,a,o=Lt,l=Lt,c,d=On,u=1){if(d!==On&&d!==gi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:u};super(h,s,r,a,o,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ss(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ua=class extends li{constructor(e,t=Pn,n=pi,s,r,a=Lt,o=Lt,l,c=On){let d={width:e,height:e,depth:1},u=[d,d,d,d,d,d];super(e,e,t,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Zs=class extends Vt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},mn=class i extends Kt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],d=[],u=[],h=0,f=0;y("z","y","x",-1,-1,n,t,e,a,r,0),y("z","y","x",1,-1,n,t,-e,a,r,1),y("x","z","y",1,1,e,n,t,s,a,2),y("x","z","y",1,-1,e,n,-t,s,a,3),y("x","y","z",1,-1,e,t,n,s,r,4),y("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(d,3)),this.setAttribute("uv",new ft(u,2));function y(v,m,p,T,A,x,M,S,R,_,w){let C=x/R,P=M/_,F=x/2,H=M/2,D=S/2,O=R+1,V=_+1,Y=0,ee=0,q=new L;for(let Z=0;Z<V;Z++){let ne=Z*P-H;for(let Se=0;Se<O;Se++){let _e=Se*C-F;q[v]=_e*T,q[m]=ne*A,q[p]=D,c.push(q.x,q.y,q.z),q[v]=0,q[m]=0,q[p]=S>0?1:-1,d.push(q.x,q.y,q.z),u.push(Se/R),u.push(1-Z/_),Y+=1}}for(let Z=0;Z<_;Z++)for(let ne=0;ne<R;ne++){let Se=h+ne+O*Z,_e=h+ne+O*(Z+1),ke=h+(ne+1)+O*(Z+1),ze=h+(ne+1)+O*Z;l.push(Se,_e,ze),l.push(_e,ke,ze),ee+=6}o.addGroup(f,ee,w),f+=ee,h+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var $e=class i extends Kt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let d=[],u=[],h=[],f=[],y=0,v=[],m=n/2,p=0;T(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(d),this.setAttribute("position",new ft(u,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(f,2));function T(){let x=new L,M=new L,S=0,R=(t-e)/n;for(let _=0;_<=r;_++){let w=[],C=_/r,P=C*(t-e)+e;for(let F=0;F<=s;F++){let H=F/s,D=H*l+o,O=Math.sin(D),V=Math.cos(D);M.x=P*O,M.y=-C*n+m,M.z=P*V,u.push(M.x,M.y,M.z),x.set(O,R,V).normalize(),h.push(x.x,x.y,x.z),f.push(H,1-C),w.push(y++)}v.push(w)}for(let _=0;_<s;_++)for(let w=0;w<r;w++){let C=v[w][_],P=v[w+1][_],F=v[w+1][_+1],H=v[w][_+1];(e>0||w!==0)&&(d.push(C,P,H),S+=3),(t>0||w!==r-1)&&(d.push(P,F,H),S+=3)}c.addGroup(p,S,0),p+=S}function A(x){let M=y,S=new ge,R=new L,_=0,w=x===!0?e:t,C=x===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,m*C,0),h.push(0,C,0),f.push(.5,.5),y++;let P=y;for(let F=0;F<=s;F++){let D=F/s*l+o,O=Math.cos(D),V=Math.sin(D);R.x=w*V,R.y=m*C,R.z=w*O,u.push(R.x,R.y,R.z),h.push(0,C,0),S.x=O*.5+.5,S.y=V*.5*C+.5,f.push(S.x,S.y),y++}for(let F=0;F<s;F++){let H=M+F,D=P+F;x===!0?d.push(D,D+1,H):d.push(D+1,D,H),_+=3}c.addGroup(p,_,x===!0?1:2),p+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var gn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){De("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let d=n[s],h=n[s+1]-d,f=(a-d)/h;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ge:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new L,s=[],r=[],a=[],o=new L,l=new ut;for(let f=0;f<=e;f++){let y=f/e;s[f]=this.getTangentAt(y,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE,d=Math.abs(s[0].x),u=Math.abs(s[0].y),h=Math.abs(s[0].z);d<=c&&(c=d,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let y=Math.acos(Ve(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,y))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Ve(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let y=1;y<=e;y++)r[y].applyMatrix4(l.makeRotationAxis(s[y],f*y)),a[y].crossVectors(s[y],r[y])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Js=class extends gn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ge){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let d=Math.cos(this.aRotation),u=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*d-f*u+this.aX,c=h*u+f*d+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},fa=class extends Js{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function kl(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,d,u){let h=(a-r)/c-(o-r)/(c+d)+(o-a)/d,f=(o-a)/d-(l-a)/(d+u)+(l-o)/u;h*=d,f*=d,s(a,o,h,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Lc=new L,Nc=new L,sl=new kl,rl=new kl,al=new kl,ls=class extends gn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,d;this.closed||o>0?c=s[(o-1)%r]:(Nc.subVectors(s[0],s[1]).add(s[0]),c=Nc);let u=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?d=s[(o+2)%r]:(Lc.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=Lc),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,y=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(d),f);v<1e-4&&(v=1),y<1e-4&&(y=v),m<1e-4&&(m=v),sl.initNonuniformCatmullRom(c.x,u.x,h.x,d.x,y,v,m),rl.initNonuniformCatmullRom(c.y,u.y,h.y,d.y,y,v,m),al.initNonuniformCatmullRom(c.z,u.z,h.z,d.z,y,v,m)}else this.curveType==="catmullrom"&&(sl.initCatmullRom(c.x,u.x,h.x,d.x,this.tension),rl.initCatmullRom(c.y,u.y,h.y,d.y,this.tension),al.initCatmullRom(c.z,u.z,h.z,d.z,this.tension));return n.set(sl.calc(l),rl.calc(l),al.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Uc(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Qd(i,e){let t=1-i;return t*t*e}function eu(i,e){return 2*(1-i)*i*e}function tu(i,e){return i*i*e}function Ns(i,e,t,n){return Qd(i,e)+eu(i,t)+tu(i,n)}function nu(i,e){let t=1-i;return t*t*t*e}function iu(i,e){let t=1-i;return 3*t*t*i*e}function su(i,e){return 3*(1-i)*i*i*e}function ru(i,e){return i*i*i*e}function Us(i,e,t,n,s){return nu(i,e)+iu(i,t)+su(i,n)+ru(i,s)}var pa=class extends gn{constructor(e=new ge,t=new ge,n=new ge,s=new ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ge){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Us(e,s.x,r.x,a.x,o.x),Us(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ma=class extends gn{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Us(e,s.x,r.x,a.x,o.x),Us(e,s.y,r.y,a.y,o.y),Us(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ga=class extends gn{constructor(e=new ge,t=new ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ge){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_a=class extends gn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ya=class extends gn{constructor(e=new ge,t=new ge,n=new ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ge){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ns(e,s.x,r.x,a.x),Ns(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ks=class extends gn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ns(e,s.x,r.x,a.x),Ns(e,s.y,r.y,a.y),Ns(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ba=class extends gn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ge){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],d=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Uc(o,l.x,c.x,d.x,u.x),Uc(o,l.y,c.y,d.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ge().fromArray(s))}return this}},au=Object.freeze({__proto__:null,ArcCurve:fa,CatmullRomCurve3:ls,CubicBezierCurve:pa,CubicBezierCurve3:ma,EllipseCurve:Js,LineCurve:ga,LineCurve3:_a,QuadraticBezierCurve:ya,QuadraticBezierCurve3:Ks,SplineCurve:ba});var $s=class i extends Kt{constructor(e=[new ge(0,-.5),new ge(.5,0),new ge(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Ve(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],d=1/t,u=new L,h=new ge,f=new L,y=new L,v=new L,m=0,p=0;for(let T=0;T<=e.length-1;T++)switch(T){case 0:m=e[T+1].x-e[T].x,p=e[T+1].y-e[T].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:m=e[T+1].x-e[T].x,p=e[T+1].y-e[T].y,f.x=p*1,f.y=-m,f.z=p*0,y.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(y)}for(let T=0;T<=t;T++){let A=n+T*d*s,x=Math.sin(A),M=Math.cos(A);for(let S=0;S<=e.length-1;S++){u.x=e[S].x*x,u.y=e[S].y,u.z=e[S].x*M,a.push(u.x,u.y,u.z),h.x=T/t,h.y=S/(e.length-1),o.push(h.x,h.y);let R=l[3*S+0]*x,_=l[3*S+1],w=l[3*S+0]*M;c.push(R,_,w)}}for(let T=0;T<t;T++)for(let A=0;A<e.length-1;A++){let x=A+T*e.length,M=x,S=x+e.length,R=x+e.length+1,_=x+1;r.push(M,S,_),r.push(R,_,S)}this.setIndex(r),this.setAttribute("position",new ft(a,3)),this.setAttribute("uv",new ft(o,2)),this.setAttribute("normal",new ft(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Qs=class i extends Kt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,d=l+1,u=e/o,h=t/l,f=[],y=[],v=[],m=[];for(let p=0;p<d;p++){let T=p*h-a;for(let A=0;A<c;A++){let x=A*u-r;y.push(x,-T,0),v.push(0,0,1),m.push(A/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<o;T++){let A=T+c*p,x=T+c*(p+1),M=T+1+c*(p+1),S=T+1+c*p;f.push(A,x,S),f.push(x,M,S)}this.setIndex(f),this.setAttribute("position",new ft(y,3)),this.setAttribute("normal",new ft(v,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var er=class i extends Kt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,d=[],u=new L,h=new L,f=[],y=[],v=[],m=[];for(let p=0;p<=n;p++){let T=[],A=p/n,x=a+A*o,M=e*Math.cos(x),S=Math.sqrt(e*e-M*M),R=0;p===0&&a===0?R=.5/t:p===n&&l===Math.PI&&(R=-.5/t);for(let _=0;_<=t;_++){let w=_/t,C=s+w*r;u.x=-S*Math.cos(C),u.y=M,u.z=S*Math.sin(C),y.push(u.x,u.y,u.z),h.copy(u).normalize(),v.push(h.x,h.y,h.z),m.push(w+R,1-A),T.push(c++)}d.push(T)}for(let p=0;p<n;p++)for(let T=0;T<t;T++){let A=d[p][T+1],x=d[p][T],M=d[p+1][T],S=d[p+1][T+1];(p!==0||a>0)&&f.push(A,x,S),(p!==n-1||l<Math.PI)&&f.push(x,M,S)}this.setIndex(f),this.setAttribute("position",new ft(y,3)),this.setAttribute("normal",new ft(v,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var cs=class i extends Kt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],d=[],u=[],h=new L,f=new L,y=new L;for(let v=0;v<=n;v++){let m=a+v/n*o;for(let p=0;p<=s;p++){let T=p/s*r;f.x=(e+t*Math.cos(m))*Math.cos(T),f.y=(e+t*Math.cos(m))*Math.sin(T),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),h.x=e*Math.cos(T),h.y=e*Math.sin(T),y.subVectors(f,h).normalize(),d.push(y.x,y.y,y.z),u.push(p/s),u.push(v/n)}}for(let v=1;v<=n;v++)for(let m=1;m<=s;m++){let p=(s+1)*v+m-1,T=(s+1)*(v-1)+m-1,A=(s+1)*(v-1)+m,x=(s+1)*v+m;l.push(p,T,x),l.push(T,A,x)}this.setIndex(l),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(d,3)),this.setAttribute("uv",new ft(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var tr=class i extends Kt{constructor(e=new Ks(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new L,l=new L,c=new ge,d=new L,u=[],h=[],f=[],y=[];v(),this.setIndex(y),this.setAttribute("position",new ft(u,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(f,2));function v(){for(let A=0;A<t;A++)m(A);m(r===!1?t:0),T(),p()}function m(A){d=e.getPointAt(A/t,d);let x=a.normals[A],M=a.binormals[A];for(let S=0;S<=s;S++){let R=S/s*Math.PI*2,_=Math.sin(R),w=-Math.cos(R);l.x=w*x.x+_*M.x,l.y=w*x.y+_*M.y,l.z=w*x.z+_*M.z,l.normalize(),h.push(l.x,l.y,l.z),o.x=d.x+n*l.x,o.y=d.y+n*l.y,o.z=d.z+n*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let A=1;A<=t;A++)for(let x=1;x<=s;x++){let M=(s+1)*(A-1)+(x-1),S=(s+1)*A+(x-1),R=(s+1)*A+x,_=(s+1)*(A-1)+x;y.push(M,S,_),y.push(S,R,_)}}function T(){for(let A=0;A<=t;A++)for(let x=0;x<=s;x++)c.x=A/t,c.y=x/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new au[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Ci(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Fc(s))s.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Fc(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Wt(i){let e={};for(let t=0;t<i.length;t++){let n=Ci(i[t]);for(let s in n)e[s]=n[s]}return e}function Fc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function ou(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function zl(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}var Ah={clone:Ci,merge:Wt},lu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,hn=class extends Jn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lu,this.fragmentShader=cu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ci(e.uniforms),this.uniformsGroups=ou(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Oe().setHex(s.value);break;case"v2":this.uniforms[n].value=new ge().fromArray(s.value);break;case"v3":this.uniforms[n].value=new L().fromArray(s.value);break;case"v4":this.uniforms[n].value=new xt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ge().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ut().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},xa=class extends hn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},et=class extends Jn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=br,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},nr=class extends et{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ge(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ve(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Oe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ir=class extends Jn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=br,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=Fa,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},va=class extends Jn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Sa=class extends Jn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ji(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function ol(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ci=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ma=class extends ci{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:hl,endingEnd:hl}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case dl:r=e,o=2*t-n;break;case ul:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case dl:a=e,l=2*n-t;break;case ul:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,d=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,f=this._weightNext,y=(n-t)/(s-t),v=y*y,m=v*y,p=-h*m+2*h*v-h*y,T=(1+h)*m+(-1.5-2*h)*v+(-.5+h)*y+1,A=(-1-f)*m+(1.5+f)*v+.5*y,x=f*m-f*v;for(let M=0;M!==o;++M)r[M]=p*a[d+M]+T*a[c+M]+A*a[l+M]+x*a[u+M];return r}},wa=class extends ci{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=(n-t)/(s-t),u=1-d;for(let h=0;h!==o;++h)r[h]=a[c+h]*u+a[l+h]*d;return r}},Ta=class extends ci{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ea=class extends ci{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=this.inTangents,u=this.outTangents;if(!d||!u){let y=(n-t)/(s-t),v=1-y;for(let m=0;m!==o;++m)r[m]=a[c+m]*v+a[l+m]*y;return r}let h=o*2,f=e-1;for(let y=0;y!==o;++y){let v=a[c+y],m=a[l+y],p=f*h+y*2,T=u[p],A=u[p+1],x=e*h+y*2,M=d[x],S=d[x+1],R=du(n,t,T,M,s);r[y]=Ch(R,v,A,S,m)}return r}};function Ch(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function hu(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function du(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Ch(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=hu(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var dn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ji(t,this.TimeBufferType),this.values=ji(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ji(e.times,Array),values:ji(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),ol(e.settings)&&(n.settings={inTangents:ji(e.settings.inTangents,Array),outTangents:ji(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ta(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new wa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ma(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ea(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Fs:t=this.InterpolantFactoryMethodDiscrete;break;case la:t=this.InterpolantFactoryMethodLinear;break;case Kr:t=this.InterpolantFactoryMethodSmooth;break;case cl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return De("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fs;case this.InterpolantFactoryMethodLinear:return la;case this.InterpolantFactoryMethodSmooth:return Kr;case this.InterpolantFactoryMethodBezier:return cl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;ol(this.settings)&&(Oc(this.settings.inTangents,e),Oc(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Fe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Fe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Fe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Fe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&_d(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Fe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Kr,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],d=e[o+1];if(c!==d&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,h=u-n,f=u+n;for(let y=0;y!==n;++y){let v=t[u+y];if(v!==t[h+y]||v!==t[f+y]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,h=a*n;for(let f=0;f!==n;++f)t[h+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,ol(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Oc(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}dn.prototype.ValueTypeName="";dn.prototype.TimeBufferType=Float32Array;dn.prototype.ValueBufferType=Float32Array;dn.prototype.DefaultInterpolation=la;var hi=class extends dn{constructor(e,t,n){super(e,t,n)}};hi.prototype.ValueTypeName="bool";hi.prototype.ValueBufferType=Array;hi.prototype.DefaultInterpolation=Fs;hi.prototype.InterpolantFactoryMethodLinear=void 0;hi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ra=class extends dn{constructor(e,t,n,s){super(e,t,n,s)}};Ra.prototype.ValueTypeName="color";var Aa=class extends dn{constructor(e,t,n,s){super(e,t,n,s)}};Aa.prototype.ValueTypeName="number";var Ca=class extends ci{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let d=c+o;c!==d;c+=4)Jt.slerpFlat(r,0,a,c-o,a,c,l);return r}},sr=class extends dn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Ca(this.times,this.values,this.getValueSize(),e)}};sr.prototype.ValueTypeName="quaternion";sr.prototype.InterpolantFactoryMethodSmooth=void 0;var di=class extends dn{constructor(e,t,n){super(e,t,n)}};di.prototype.ValueTypeName="string";di.prototype.ValueBufferType=Array;di.prototype.DefaultInterpolation=Fs;di.prototype.InterpolantFactoryMethodLinear=void 0;di.prototype.InterpolantFactoryMethodSmooth=void 0;var Pa=class extends dn{constructor(e,t,n,s){super(e,t,n,s)}};Pa.prototype.ValueTypeName="vector";var Qr={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Bc(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Bc(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Bc(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Ia=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,u){return c.push(d,u),this},this.removeHandler=function(d){let u=c.indexOf(d);return u!==-1&&c.splice(u,2),this},this.getHandler=function(d){for(let u=0,h=c.length;u<h;u+=2){let f=c[u],y=c[u+1];if(f.global&&(f.lastIndex=0),f.test(d))return y}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ph=new Ia,hs=class{constructor(e){this.manager=e!==void 0?e:Ph,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};hs.DEFAULT_MATERIAL_NAME="__DEFAULT";var Yi=new WeakMap,Da=class extends hs{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Qr.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Yi.get(a);u===void 0&&(u=[],Yi.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=ts("img");function l(){d(),t&&t(this);let u=Yi.get(this)||[];for(let h=0;h<u.length;h++){let f=u[h];f.onLoad&&f.onLoad(this)}Yi.delete(this),r.manager.itemEnd(e)}function c(u){d(),s&&s(u),Qr.remove(`image:${e}`);let h=Yi.get(this)||[];for(let f=0;f<h.length;f++){let y=h[f];y.onError&&y.onError(u)}Yi.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function d(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Qr.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var rr=class extends hs{constructor(e){super(e)}load(e,t,n,s){let r=new Vt,a=new Da(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},ds=class extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},us=class extends ds{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},ll=new ut,kc=new L,zc=new L,ar=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.mapType=tn,this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new os,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;kc.setFromMatrixPosition(e.matrixWorld),t.position.copy(kc),zc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){ll.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(ll,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===es||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(ll)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Zr=new L,Jr=new Jt,Un=new L,or=class extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=En,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Zr,Jr,Un),Un.x===1&&Un.y===1&&Un.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zr,Jr,Un.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Zr,Jr,Un),Un.x===1&&Un.y===1&&Un.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zr,Jr,Un.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ri=new L,Hc=new ge,Gc=new ge,Ft=class extends or{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=is*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ds*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return is*2*Math.atan(Math.tan(Ds*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ri.x,ri.y).multiplyScalar(-e/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ri.x,ri.y).multiplyScalar(-e/ri.z)}getViewSize(e,t){return this.getViewBounds(e,Hc,Gc),t.subVectors(Gc,Hc)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ds*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var fl=class extends ar{constructor(){super(new Ft(90,1,.5,500)),this.isPointLightShadow=!0}},lr=class extends ds{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new fl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},fs=class extends or{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},pl=class extends ar{constructor(){super(new fs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ei=class extends ds{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new pl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Zi=-90,Ji=1,La=class extends Nt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ft(Zi,Ji,e,t);s.layers=this.layers,this.add(s);let r=new Ft(Zi,Ji,e,t);r.layers=this.layers,this.add(r);let a=new Ft(Zi,Ji,e,t);a.layers=this.layers,this.add(a);let o=new Ft(Zi,Ji,e,t);o.layers=this.layers,this.add(o);let l=new Ft(Zi,Ji,e,t);l.layers=this.layers,this.add(l);let c=new Ft(Zi,Ji,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===En)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===es)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,d]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(u,h,f),e.xr.enabled=y,n.texture.needsPMREMUpdate=!0}},Na=class extends Ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Hl="\\[\\]\\.:\\/",uu=new RegExp("["+Hl+"]","g"),Gl="[^"+Hl+"]",fu="[^"+Hl.replace("\\.","")+"]",pu=/((?:WC+[\/:])*)/.source.replace("WC",Gl),mu=/(WCOD+)?/.source.replace("WCOD",fu),gu=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gl),_u=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gl),yu=new RegExp("^"+pu+mu+gu+_u+"$"),bu=["material","materials","bones","map"],ml=class{constructor(e,t,n){let s=n||yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},yt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(uu,"")}static parseTrackName(e){let t=yu.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);bu.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){De("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Fe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Fe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Fe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Fe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Fe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Fe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Fe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Fe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Fe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Fe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};yt.Composite=ml;yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};yt.prototype.GetterByBindingType=[yt.prototype._getValue_direct,yt.prototype._getValue_array,yt.prototype._getValue_arrayElement,yt.prototype._getValue_toArray];yt.prototype.SetterByBindingTypeAndVersioning=[[yt.prototype._setValue_direct,yt.prototype._setValue_direct_setNeedsUpdate,yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_array,yt.prototype._setValue_array_setNeedsUpdate,yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_arrayElement,yt.prototype._setValue_arrayElement_setNeedsUpdate,yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_fromArray,yt.prototype._setValue_fromArray_setNeedsUpdate,yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Og=new Float32Array(1);var Kn=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ve(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ve(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Yl=class Yl{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Yl.prototype.isMatrix2=!0;var gl=Yl;var cr=class extends Rn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Vl(i,e,t,n){let s=xu(n);switch(t){case Nl:return i*e;case Va:return i*e/s.components*s.byteLength;case Wa:return i*e/s.components*s.byteLength;case _i:return i*e*2/s.components*s.byteLength;case Xa:return i*e*2/s.components*s.byteLength;case Ul:return i*e*3/s.components*s.byteLength;case bn:return i*e*4/s.components*s.byteLength;case qa:return i*e*4/s.components*s.byteLength;case fr:case pr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case mr:case gr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ya:case Ja:return Math.max(i,16)*Math.max(e,8)/4;case ja:case Za:return Math.max(i,8)*Math.max(e,8)/2;case Ka:case $a:case eo:case to:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Qa:case _r:case no:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case io:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case so:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ro:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ao:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case oo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case lo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case co:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ho:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case uo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case fo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case po:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case mo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case go:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case _o:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case yo:case bo:case xo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case vo:case So:return Math.ceil(i/4)*Math.ceil(e/4)*8;case yr:case Mo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function xu(i){switch(i){case tn:case Pl:return{byteLength:1,components:1};case _s:case Il:case In:return{byteLength:2,components:1};case Ha:case Ga:return{byteLength:2,components:4};case Pn:case za:case yn:return{byteLength:4,components:1};case Dl:case Ll:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function $h(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Su(i){let e=new WeakMap;function t(o,l){let c=o.array,d=o.usage,u=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,d),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let d=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,d);else{u.sort((f,y)=>f.start-y.start);let h=0;for(let f=1;f<u.length;f++){let y=u[h],v=u[f];v.start<=y.start+y.count+1?y.count=Math.max(y.count,v.start+v.count-y.start):(++h,u[h]=v)}u.length=h+1;for(let f=0,y=u.length;f<y;f++){let v=u[f];i.bufferSubData(c,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Mu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wu=`#ifdef USE_ALPHAHASH
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
#endif`,Tu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Eu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ru=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Au=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cu=`#ifdef USE_AOMAP
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
#endif`,Pu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Iu=`#ifdef USE_BATCHING
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
#endif`,Du=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Uu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Fu=`#ifdef USE_IRIDESCENCE
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
#endif`,Ou=`#ifdef USE_BUMPMAP
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
#endif`,Bu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ku=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Vu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Wu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Xu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,qu=`#define PI 3.141592653589793
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
} // validated`,ju=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Yu=`vec3 transformedNormal = objectNormal;
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
#endif`,Zu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ju=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ku=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$u=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qu="gl_FragColor = linearToOutputTexel( gl_FragColor );",ef=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tf=`#ifdef USE_ENVMAP
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
#endif`,nf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,sf=`#ifdef USE_ENVMAP
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
#endif`,rf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,af=`#ifdef USE_ENVMAP
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
#endif`,of=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,df=`#ifdef USE_GRADIENTMAP
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
}`,uf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ff=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mf=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,gf=`#ifdef USE_ENVMAP
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
#endif`,_f=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vf=`PhysicalMaterial material;
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
#endif`,Sf=`uniform sampler2D dfgLUT;
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
}`,Mf=`
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
#endif`,wf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Tf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ef=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Rf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Af=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,If=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Df=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Nf=`#if defined( USE_POINTS_UV )
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
#endif`,Uf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ff=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Of=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zf=`#ifdef USE_MORPHTARGETS
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
#endif`,Hf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Vf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Wf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,jf=`#ifdef USE_NORMALMAP
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
#endif`,Yf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$f=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ep=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,np=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ip=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ap=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,op=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cp=`float getShadowMask() {
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
}`,hp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dp=`#ifdef USE_SKINNING
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
#endif`,up=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fp=`#ifdef USE_SKINNING
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
#endif`,pp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_p=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yp=`#ifdef USE_TRANSMISSION
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
#endif`,bp=`#ifdef USE_TRANSMISSION
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
#endif`,xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,wp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tp=`uniform sampler2D t2D;
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
}`,Ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pp=`#include <common>
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
}`,Ip=`#if DEPTH_PACKING == 3200
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
}`,Dp=`#define DISTANCE
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
}`,Lp=`#define DISTANCE
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
}`,Np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Up=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fp=`uniform float scale;
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
}`,Op=`uniform vec3 diffuse;
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
}`,Bp=`#include <common>
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
}`,kp=`uniform vec3 diffuse;
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
}`,zp=`#define LAMBERT
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
}`,Hp=`#define LAMBERT
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
}`,Gp=`#define MATCAP
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
}`,Vp=`#define MATCAP
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
}`,Wp=`#define NORMAL
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
}`,Xp=`#define NORMAL
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
}`,qp=`#define PHONG
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
}`,jp=`#define PHONG
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
}`,Yp=`#define STANDARD
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
}`,Zp=`#define STANDARD
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
}`,Jp=`#define TOON
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
}`,Kp=`#define TOON
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
}`,$p=`uniform float size;
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
}`,Qp=`uniform vec3 diffuse;
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
}`,em=`#include <common>
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
}`,tm=`uniform vec3 color;
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
}`,nm=`uniform float rotation;
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
}`,im=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:Mu,alphahash_pars_fragment:wu,alphamap_fragment:Tu,alphamap_pars_fragment:Eu,alphatest_fragment:Ru,alphatest_pars_fragment:Au,aomap_fragment:Cu,aomap_pars_fragment:Pu,batching_pars_vertex:Iu,batching_vertex:Du,begin_vertex:Lu,beginnormal_vertex:Nu,bsdfs:Uu,iridescence_fragment:Fu,bumpmap_pars_fragment:Ou,clipping_planes_fragment:Bu,clipping_planes_pars_fragment:ku,clipping_planes_pars_vertex:zu,clipping_planes_vertex:Hu,color_fragment:Gu,color_pars_fragment:Vu,color_pars_vertex:Wu,color_vertex:Xu,common:qu,cube_uv_reflection_fragment:ju,defaultnormal_vertex:Yu,displacementmap_pars_vertex:Zu,displacementmap_vertex:Ju,emissivemap_fragment:Ku,emissivemap_pars_fragment:$u,colorspace_fragment:Qu,colorspace_pars_fragment:ef,envmap_fragment:tf,envmap_common_pars_fragment:nf,envmap_pars_fragment:sf,envmap_pars_vertex:rf,envmap_physical_pars_fragment:gf,envmap_vertex:af,fog_vertex:of,fog_pars_vertex:lf,fog_fragment:cf,fog_pars_fragment:hf,gradientmap_pars_fragment:df,lightmap_pars_fragment:uf,lights_lambert_fragment:ff,lights_lambert_pars_fragment:pf,lights_pars_begin:mf,lights_toon_fragment:_f,lights_toon_pars_fragment:yf,lights_phong_fragment:bf,lights_phong_pars_fragment:xf,lights_physical_fragment:vf,lights_physical_pars_fragment:Sf,lights_fragment_begin:Mf,lights_fragment_maps:wf,lights_fragment_end:Tf,lightprobes_pars_fragment:Ef,logdepthbuf_fragment:Rf,logdepthbuf_pars_fragment:Af,logdepthbuf_pars_vertex:Cf,logdepthbuf_vertex:Pf,map_fragment:If,map_pars_fragment:Df,map_particle_fragment:Lf,map_particle_pars_fragment:Nf,metalnessmap_fragment:Uf,metalnessmap_pars_fragment:Ff,morphinstance_vertex:Of,morphcolor_vertex:Bf,morphnormal_vertex:kf,morphtarget_pars_vertex:zf,morphtarget_vertex:Hf,normal_fragment_begin:Gf,normal_fragment_maps:Vf,normal_pars_fragment:Wf,normal_pars_vertex:Xf,normal_vertex:qf,normalmap_pars_fragment:jf,clearcoat_normal_fragment_begin:Yf,clearcoat_normal_fragment_maps:Zf,clearcoat_pars_fragment:Jf,iridescence_pars_fragment:Kf,opaque_fragment:$f,packing:Qf,premultiplied_alpha_fragment:ep,project_vertex:tp,dithering_fragment:np,dithering_pars_fragment:ip,roughnessmap_fragment:sp,roughnessmap_pars_fragment:rp,shadowmap_pars_fragment:ap,shadowmap_pars_vertex:op,shadowmap_vertex:lp,shadowmask_pars_fragment:cp,skinbase_vertex:hp,skinning_pars_vertex:dp,skinning_vertex:up,skinnormal_vertex:fp,specularmap_fragment:pp,specularmap_pars_fragment:mp,tonemapping_fragment:gp,tonemapping_pars_fragment:_p,transmission_fragment:yp,transmission_pars_fragment:bp,uv_pars_fragment:xp,uv_pars_vertex:vp,uv_vertex:Sp,worldpos_vertex:Mp,background_vert:wp,background_frag:Tp,backgroundCube_vert:Ep,backgroundCube_frag:Rp,cube_vert:Ap,cube_frag:Cp,depth_vert:Pp,depth_frag:Ip,distance_vert:Dp,distance_frag:Lp,equirect_vert:Np,equirect_frag:Up,linedashed_vert:Fp,linedashed_frag:Op,meshbasic_vert:Bp,meshbasic_frag:kp,meshlambert_vert:zp,meshlambert_frag:Hp,meshmatcap_vert:Gp,meshmatcap_frag:Vp,meshnormal_vert:Wp,meshnormal_frag:Xp,meshphong_vert:qp,meshphong_frag:jp,meshphysical_vert:Yp,meshphysical_frag:Zp,meshtoon_vert:Jp,meshtoon_frag:Kp,points_vert:$p,points_frag:Qp,shadow_vert:em,shadow_frag:tm,sprite_vert:nm,sprite_frag:im},pe={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Gn={basic:{uniforms:Wt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Wt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Oe(0)},envMapIntensity:{value:1}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Wt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Wt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Wt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Oe(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Wt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Wt([pe.points,pe.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Wt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Wt([pe.common,pe.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Wt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Wt([pe.sprite,pe.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distance:{uniforms:Wt([pe.common,pe.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distance_vert,fragmentShader:qe.distance_frag},shadow:{uniforms:Wt([pe.lights,pe.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Gn.physical={uniforms:Wt([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};var Eo={r:0,b:0,g:0},sm=new ut,Qh=new Ge;Qh.set(-1,0,0,0,1,0,0,0,1);function rm(i,e,t,n,s,r){let a=new Oe(0),o=s===!0?0:1,l,c,d=null,u=0,h=null;function f(T){let A=T.isScene===!0?T.background:null;if(A&&A.isTexture){let x=T.backgroundBlurriness>0;A=e.get(A,x)}return A}function y(T){let A=!1,x=f(T);x===null?m(a,o):x&&x.isColor&&(m(x,1),A=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(T,A){let x=f(A);x&&(x.isCubeTexture||x.mapping===dr)?(c===void 0&&(c=new Ue(new mn(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:Ci(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,S,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(sm.makeRotationFromEuler(A.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Qh),c.material.toneMapped=Ke.getTransfer(x.colorSpace)!==rt,(d!==x||u!==x.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,d=x,u=x.version,h=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Ue(new Qs(2,2),new hn({name:"BackgroundMaterial",uniforms:Ci(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=Ke.getTransfer(x.colorSpace)!==rt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||u!==x.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,d=x,u=x.version,h=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function m(T,A){T.getRGB(Eo,zl(i)),t.buffers.color.setClear(Eo.r,Eo.g,Eo.b,A,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,A=1){a.set(T),o=A,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,m(a,o)},render:y,addToRenderList:v,dispose:p}}function am(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(P,F,H,D,O){let V=!1,Y=u(P,D,H,F);r!==Y&&(r=Y,c(r.object)),V=f(P,D,H,O),V&&y(P,D,H,O),O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,x(P,F,H,D),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function d(P){return i.deleteVertexArray(P)}function u(P,F,H,D){let O=D.wireframe===!0,V=n[F.id];V===void 0&&(V={},n[F.id]=V);let Y=P.isInstancedMesh===!0?P.id:0,ee=V[Y];ee===void 0&&(ee={},V[Y]=ee);let q=ee[H.id];q===void 0&&(q={},ee[H.id]=q);let Z=q[O];return Z===void 0&&(Z=h(l()),q[O]=Z),Z}function h(P){let F=[],H=[],D=[];for(let O=0;O<t;O++)F[O]=0,H[O]=0,D[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:H,attributeDivisors:D,object:P,attributes:{},index:null}}function f(P,F,H,D){let O=r.attributes,V=F.attributes,Y=0,ee=H.getAttributes();for(let q in ee)if(ee[q].location>=0){let ne=O[q],Se=V[q];if(Se===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(Se=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(Se=P.instanceColor)),ne===void 0||ne.attribute!==Se||Se&&ne.data!==Se.data)return!0;Y++}return r.attributesNum!==Y||r.index!==D}function y(P,F,H,D){let O={},V=F.attributes,Y=0,ee=H.getAttributes();for(let q in ee)if(ee[q].location>=0){let ne=V[q];ne===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(ne=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(ne=P.instanceColor));let Se={};Se.attribute=ne,ne&&ne.data&&(Se.data=ne.data),O[q]=Se,Y++}r.attributes=O,r.attributesNum=Y,r.index=D}function v(){let P=r.newAttributes;for(let F=0,H=P.length;F<H;F++)P[F]=0}function m(P){p(P,0)}function p(P,F){let H=r.newAttributes,D=r.enabledAttributes,O=r.attributeDivisors;H[P]=1,D[P]===0&&(i.enableVertexAttribArray(P),D[P]=1),O[P]!==F&&(i.vertexAttribDivisor(P,F),O[P]=F)}function T(){let P=r.newAttributes,F=r.enabledAttributes;for(let H=0,D=F.length;H<D;H++)F[H]!==P[H]&&(i.disableVertexAttribArray(H),F[H]=0)}function A(P,F,H,D,O,V,Y){Y===!0?i.vertexAttribIPointer(P,F,H,O,V):i.vertexAttribPointer(P,F,H,D,O,V)}function x(P,F,H,D){v();let O=D.attributes,V=H.getAttributes(),Y=F.defaultAttributeValues;for(let ee in V){let q=V[ee];if(q.location>=0){let Z=O[ee];if(Z===void 0&&(ee==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),ee==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor)),Z!==void 0){let ne=Z.normalized,Se=Z.itemSize,_e=e.get(Z);if(_e===void 0)continue;let ke=_e.buffer,ze=_e.type,Be=_e.bytesPerElement,X=ze===i.INT||ze===i.UNSIGNED_INT||Z.gpuType===za;if(Z.isInterleavedBufferAttribute){let K=Z.data,xe=K.stride,oe=Z.offset;if(K.isInstancedInterleavedBuffer){for(let re=0;re<q.locationSize;re++)p(q.location+re,K.meshPerAttribute);P.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let re=0;re<q.locationSize;re++)m(q.location+re);i.bindBuffer(i.ARRAY_BUFFER,ke);for(let re=0;re<q.locationSize;re++)A(q.location+re,Se/q.locationSize,ze,ne,xe*Be,(oe+Se/q.locationSize*re)*Be,X)}else{if(Z.isInstancedBufferAttribute){for(let K=0;K<q.locationSize;K++)p(q.location+K,Z.meshPerAttribute);P.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let K=0;K<q.locationSize;K++)m(q.location+K);i.bindBuffer(i.ARRAY_BUFFER,ke);for(let K=0;K<q.locationSize;K++)A(q.location+K,Se/q.locationSize,ze,ne,Se*Be,Se/q.locationSize*K*Be,X)}}else if(Y!==void 0){let ne=Y[ee];if(ne!==void 0)switch(ne.length){case 2:i.vertexAttrib2fv(q.location,ne);break;case 3:i.vertexAttrib3fv(q.location,ne);break;case 4:i.vertexAttrib4fv(q.location,ne);break;default:i.vertexAttrib1fv(q.location,ne)}}}}T()}function M(){w();for(let P in n){let F=n[P];for(let H in F){let D=F[H];for(let O in D){let V=D[O];for(let Y in V)d(V[Y].object),delete V[Y];delete D[O]}}delete n[P]}}function S(P){if(n[P.id]===void 0)return;let F=n[P.id];for(let H in F){let D=F[H];for(let O in D){let V=D[O];for(let Y in V)d(V[Y].object),delete V[Y];delete D[O]}}delete n[P.id]}function R(P){for(let F in n){let H=n[F];for(let D in H){let O=H[D];if(O[P.id]===void 0)continue;let V=O[P.id];for(let Y in V)d(V[Y].object),delete V[Y];delete O[P.id]}}}function _(P){for(let F in n){let H=n[F],D=P.isInstancedMesh===!0?P.id:0,O=H[D];if(O!==void 0){for(let V in O){let Y=O[V];for(let ee in Y)d(Y[ee].object),delete Y[ee];delete O[V]}delete H[D],Object.keys(H).length===0&&delete n[F]}}}function w(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:C,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:T}}function om(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,d){d!==0&&(i.drawArraysInstanced(n,l,c,d),t.update(c,n,d))}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,d);let h=0;for(let f=0;f<d;f++)h+=c[f];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function lm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==bn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let _=R===In&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==tn&&R!==yn&&!_&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",d=l(c);d!==c&&(De("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);let u=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&De("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:y,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:A,maxFragmentUniforms:x,maxSamples:M,samples:S}}function cm(i){let e=this,t=null,n=0,s=!1,r=!1,a=new ln,o=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){let f=u.length!==0||h||n!==0||s;return s=h,n=u.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,h){t=d(u,h,0)},this.setState=function(u,h,f){let y=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||y===null||y.length===0||r&&!m)r?d(null):c();else{let T=r?0:n,A=T*4,x=p.clippingState||null;l.value=x,x=d(y,h,A,f);for(let M=0;M!==A;++M)x[M]=t[M];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(u,h,f,y){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=l.value,y!==!0||m===null){let p=f+v*4,T=h.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,x=f;A!==v;++A,x+=4)a.copy(u[A]).applyMatrix4(T,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}var vs=4,hm=6,dm=20,um=256,xr=new fs,Ih=new Oe,Zl=null,Jl=0,Kl=0,$l=!1,fm=new L,Pi=new L,Ii=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=fm}=r;Zl=this._renderer.getRenderTarget(),Jl=this._renderer.getActiveCubeFace(),Kl=this._renderer.getActiveMipmapLevel(),$l=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Zl,Jl,Kl),this._renderer.xr.enabled=$l,e.scissorTest=!1,xs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pi||e.mapping===Ai?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zl=this._renderer.getRenderTarget(),Jl=this._renderer.getActiveCubeFace(),Kl=this._renderer.getActiveMipmapLevel(),$l=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:In,format:bn,colorSpace:Os,depthBuffer:!1},s=Dh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dh(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=pm(r)),this._blurMaterial=gm(r,e,t),this._ggxMaterial=mm(r,e,t)}return s}_compileMaterial(e){let t=new Ue(new Kt,e);this._renderer.compile(t,xr)}_sceneToCubeUV(e,t,n,s,r){let l=new Ft(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Ih),u.toneMapping=Cn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ue(new mn,new Vs({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,m=v.material,p=!1,T=e.background;T?T.isColor&&(m.color.copy(T),e.background=null,p=!0):(m.color.copy(Ih),p=!0);for(let A=0;A<6;A++){let x=A%3;x===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[A],r.y,r.z)):x===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[A]));let M=this._cubeSize;xs(s,x*M,A>2?M:0,M,M),u.setRenderTarget(s),p&&u.render(v,l),u.render(e,l)}u.toneMapping=f,u.autoClear=h,e.background=T}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===pi||e.mapping===Ai;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;xs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,xr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-d*d),h=c*1.25,f=u*h,{_lodMax:y}=this,v=this._sizeLods[n],m=3*v*(n>y-vs?n-y+vs:0),p=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=y-t,xs(r,m,p,3*v,2*v),s.setRenderTarget(r),s.render(o,xr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=y-n,xs(e,m,p,3*v,2*v),s.setRenderTarget(e),s.render(o,xr)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let d=this._sizeLods[s],u=3*d*(s>this._lodMax-vs?s-this._lodMax+vs:0),h=4*(this._cubeSize-d);xs(t,u,h,3*d,2*d),a.setRenderTarget(t),a.render(l,xr)}};function pm(i){let e=[],t=[],n=i,s=i-vs+1+hm;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,d=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,h=6,f=3,y=new Float32Array(f*h*u),v=new Float32Array(f*h*u);for(let p=0;p<u;p++){let T=p%3*2/3-1,A=p>2?0:-1,x=[T,A,0,T+2/3,A,0,T+2/3,A+1,0,T,A,0,T+2/3,A+1,0,T,A+1,0];y.set(x,f*h*p);for(let M=0;M<h;M++){let S=d[M*2]*2-1,R=d[M*2+1]*2-1;p===0?Pi.set(1,R,S):p===1?Pi.set(-S,1,-R):p===2?Pi.set(-S,R,1):p===3?Pi.set(-1,R,-S):p===4?Pi.set(-S,-1,R):Pi.set(S,R,-1),Pi.toArray(v,(p*h+M)*f)}}let m=new Kt;m.setAttribute("position",new cn(y,f)),m.setAttribute("outputDirection",new cn(v,f)),t.push(new Ue(m,null)),n>vs&&n--}return{lodMeshes:t,sizeLods:e}}function Dh(i,e,t){let n=new en(i,e,t);return n.texture.mapping=dr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function mm(i,e,t){return new hn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:um,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Po(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function gm(i,e,t){return new hn({name:"SphericalGaussianBlur",defines:{SAMPLES:dm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Po(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Lh(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Po(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Nh(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Po(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Po(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ao=class extends en{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new js(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new mn(5,5,5),r=new hn({name:"CubemapFromEquirect",uniforms:Ci(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bt,blending:zn});r.uniforms.tEquirect.value=t;let a=new Ue(s,r),o=t.minFilter;return t.minFilter===mi&&(t.minFilter=Ot),new La(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function _m(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,f=!1){return h==null?null:f?a(h):r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===Oa||f===Ba)if(e.has(h)){let y=e.get(h).texture;return o(y,h.mapping)}else{let y=h.image;if(y&&y.height>0){let v=new Ao(y.height);return v.fromEquirectangularTexture(i,h),e.set(h,v),h.addEventListener("dispose",c),o(v.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let f=h.mapping,y=f===Oa||f===Ba,v=f===pi||f===Ai;if(y||v){let m=t.get(h),p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new Ii(i)),m=y?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{let T=h.image;return y&&T&&T.height>0||v&&T&&l(T)?(n===null&&(n=new Ii(i)),m=y?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",d),m.texture):null}}}return h}function o(h,f){return f===Oa?h.mapping=pi:f===Ba&&(h.mapping=Ai),h}function l(h){let f=0,y=6;for(let v=0;v<y;v++)h[v]!==void 0&&f++;return f===y}function c(h){let f=h.target;f.removeEventListener("dispose",c);let y=e.get(f);y!==void 0&&(e.delete(f),y.dispose())}function d(h){let f=h.target;f.removeEventListener("dispose",d);let y=t.get(f);y!==void 0&&(t.delete(f),y.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function ym(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&wi("WebGLRenderer: "+n+" extension not supported."),s}}}function bm(i,e,t,n){let s={},r=new WeakMap;function a(u){let h=u.target;h.index!==null&&e.remove(h.index);for(let y in h.attributes)e.remove(h.attributes[y]);h.removeEventListener("dispose",a),delete s[h.id];let f=r.get(h);f&&(e.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(u,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(u){let h=u.attributes;for(let f in h)e.update(h[f],i.ARRAY_BUFFER)}function c(u){let h=[],f=u.index,y=u.attributes.position,v=0;if(y===void 0)return;if(f!==null){let T=f.array;v=f.version;for(let A=0,x=T.length;A<x;A+=3){let M=T[A+0],S=T[A+1],R=T[A+2];h.push(M,S,S,R,R,M)}}else{let T=y.array;v=y.version;for(let A=0,x=T.length/3-1;A<x;A+=3){let M=A+0,S=A+1,R=A+2;h.push(M,S,S,R,R,M)}}let m=new(y.count>=65535?Gs:Hs)(h,1);m.version=v;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function d(u){let h=r.get(u);if(h){let f=u.index;f!==null&&h.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:d}}function xm(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,h){i.drawElements(n,h,r,u*a),t.update(h,n,1)}function c(u,h,f){f!==0&&(i.drawElementsInstanced(n,h,r,u*a,f),t.update(h,n,f))}function d(u,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,u,0,f);let v=0;for(let m=0;m<f;m++)v+=h[m];t.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function vm(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Fe("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Sm(i,e,t){let n=new WeakMap,s=new xt;function r(a,o,l){let c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=d!==void 0?d.length:0,h=n.get(o);if(h===void 0||h.count!==u){let w=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",w)};h!==void 0&&h.texture.dispose();let f=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],T=o.morphAttributes.color||[],A=0;f===!0&&(A=1),y===!0&&(A=2),v===!0&&(A=3);let x=o.attributes.position.count*A,M=1;x>e.maxTextureSize&&(M=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let S=new Float32Array(x*M*4*u),R=new ks(S,x,M,u);R.type=yn,R.needsUpdate=!0;let _=A*4;for(let C=0;C<u;C++){let P=m[C],F=p[C],H=T[C],D=x*M*4*C;for(let O=0;O<P.count;O++){let V=O*_;f===!0&&(s.fromBufferAttribute(P,O),S[D+V+0]=s.x,S[D+V+1]=s.y,S[D+V+2]=s.z,S[D+V+3]=0),y===!0&&(s.fromBufferAttribute(F,O),S[D+V+4]=s.x,S[D+V+5]=s.y,S[D+V+6]=s.z,S[D+V+7]=0),v===!0&&(s.fromBufferAttribute(H,O),S[D+V+8]=s.x,S[D+V+9]=s.y,S[D+V+10]=s.z,S[D+V+11]=H.itemSize===4?s.w:1)}}h={count:u,texture:R,size:new ge(x,M)},n.set(o,h),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let y=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",y),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Mm(i,e,t,n,s){let r=new WeakMap;function a(c){let d=s.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==d&&(e.update(h),r.set(h,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==d&&(f.update(),r.set(f,d))}return h}function o(){r=new WeakMap}function l(c){let d=c.target;d.removeEventListener("dispose",l),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:o}}var wm={[Ml]:"LINEAR_TONE_MAPPING",[wl]:"REINHARD_TONE_MAPPING",[Tl]:"CINEON_TONE_MAPPING",[gs]:"ACES_FILMIC_TONE_MAPPING",[Rl]:"AGX_TONE_MAPPING",[Al]:"NEUTRAL_TONE_MAPPING",[El]:"CUSTOM_TONE_MAPPING"};function Tm(i,e,t,n,s,r){let a=new en(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Kt;c.setAttribute("position",new ft([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ft([0,2,0,0,2,0],2));let d=new xa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Ue(c,d),h=new fs(-1,1,1,-1,0,1),f=null,y=null,v=!1,m,p=null,T=[],A=!1;this.setSize=function(x,M){a.setSize(x,M),o!==null&&o.setSize(x,M),l!==null&&l.setSize(x,M);for(let S=0;S<T.length;S++){let R=T[S];R.setSize&&R.setSize(x,M)}},this.setEffects=function(x){T=x,A=T.length>0&&T[0].isRenderPass===!0;let M=a.width,S=a.height;T.length>0&&o===null&&(o=new en(M,S,{type:In,depthBuffer:!1,stencilBuffer:!1}),l=new en(M,S,{type:In,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<T.length;R++){let _=T[R];_.setSize&&_.setSize(M,S)}},this.begin=function(x,M){if(v||x.toneMapping===Cn&&T.length===0)return!1;if(p=M,M!==null){let S=M.width,R=M.height;(a.width!==S||a.height!==R)&&this.setSize(S,R)}return A===!1&&x.setRenderTarget(a),m=x.toneMapping,x.toneMapping=Cn,!0},this.hasRenderPass=function(){return A},this.end=function(x,M){x.toneMapping=m,v=!0;let S=a,R=o;for(let _=0;_<T.length;_++){let w=T[_];w.enabled!==!1&&(w.render(x,R,S,M),w.needsSwap!==!1&&(S=R,R=R===o?l:o))}if(f!==x.outputColorSpace||y!==x.toneMapping){f=x.outputColorSpace,y=x.toneMapping,d.defines={},Ke.getTransfer(f)===rt&&(d.defines.SRGB_TRANSFER="");let _=wm[y];_&&(d.defines[_]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=S.texture,x.setRenderTarget(p),x.render(u,h),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),d.dispose()}}var ed=new Vt,tc=new li(1,1),td=new ks,nd=new da,id=new js,Uh=[],Fh=[],Oh=new Float32Array(16),Bh=new Float32Array(9),kh=new Float32Array(4);function Ms(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Uh[s];if(r===void 0&&(r=new Float32Array(s),Uh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Ct(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Pt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Io(i,e){let t=Fh[e];t===void 0&&(t=new Int32Array(e),Fh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Em(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Rm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2fv(this.addr,e),Pt(t,e)}}function Am(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;i.uniform3fv(this.addr,e),Pt(t,e)}}function Cm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4fv(this.addr,e),Pt(t,e)}}function Pm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;kh.set(n),i.uniformMatrix2fv(this.addr,!1,kh),Pt(t,n)}}function Im(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;Bh.set(n),i.uniformMatrix3fv(this.addr,!1,Bh),Pt(t,n)}}function Dm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;Oh.set(n),i.uniformMatrix4fv(this.addr,!1,Oh),Pt(t,n)}}function Lm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Nm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2iv(this.addr,e),Pt(t,e)}}function Um(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;i.uniform3iv(this.addr,e),Pt(t,e)}}function Fm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4iv(this.addr,e),Pt(t,e)}}function Om(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Bm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2uiv(this.addr,e),Pt(t,e)}}function km(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;i.uniform3uiv(this.addr,e),Pt(t,e)}}function zm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4uiv(this.addr,e),Pt(t,e)}}function Hm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(tc.compareFunction=t.isReversedDepthBuffer()?To:wo,r=tc):r=ed,t.setTexture2D(e||r,s)}function Gm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||nd,s)}function Vm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||id,s)}function Wm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||td,s)}function Xm(i){switch(i){case 5126:return Em;case 35664:return Rm;case 35665:return Am;case 35666:return Cm;case 35674:return Pm;case 35675:return Im;case 35676:return Dm;case 5124:case 35670:return Lm;case 35667:case 35671:return Nm;case 35668:case 35672:return Um;case 35669:case 35673:return Fm;case 5125:return Om;case 36294:return Bm;case 36295:return km;case 36296:return zm;case 35678:case 36198:case 36298:case 36306:case 35682:return Hm;case 35679:case 36299:case 36307:return Gm;case 35680:case 36300:case 36308:case 36293:return Vm;case 36289:case 36303:case 36311:case 36292:return Wm}}function qm(i,e){i.uniform1fv(this.addr,e)}function jm(i,e){let t=Ms(e,this.size,2);i.uniform2fv(this.addr,t)}function Ym(i,e){let t=Ms(e,this.size,3);i.uniform3fv(this.addr,t)}function Zm(i,e){let t=Ms(e,this.size,4);i.uniform4fv(this.addr,t)}function Jm(i,e){let t=Ms(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Km(i,e){let t=Ms(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function $m(i,e){let t=Ms(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Qm(i,e){i.uniform1iv(this.addr,e)}function e0(i,e){i.uniform2iv(this.addr,e)}function t0(i,e){i.uniform3iv(this.addr,e)}function n0(i,e){i.uniform4iv(this.addr,e)}function i0(i,e){i.uniform1uiv(this.addr,e)}function s0(i,e){i.uniform2uiv(this.addr,e)}function r0(i,e){i.uniform3uiv(this.addr,e)}function a0(i,e){i.uniform4uiv(this.addr,e)}function o0(i,e,t){let n=this.cache,s=e.length,r=Io(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=tc:a=ed;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function l0(i,e,t){let n=this.cache,s=e.length,r=Io(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||nd,r[a])}function c0(i,e,t){let n=this.cache,s=e.length,r=Io(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||id,r[a])}function h0(i,e,t){let n=this.cache,s=e.length,r=Io(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||td,r[a])}function d0(i){switch(i){case 5126:return qm;case 35664:return jm;case 35665:return Ym;case 35666:return Zm;case 35674:return Jm;case 35675:return Km;case 35676:return $m;case 5124:case 35670:return Qm;case 35667:case 35671:return e0;case 35668:case 35672:return t0;case 35669:case 35673:return n0;case 5125:return i0;case 36294:return s0;case 36295:return r0;case 36296:return a0;case 35678:case 36198:case 36298:case 36306:case 35682:return o0;case 35679:case 36299:case 36307:return l0;case 35680:case 36300:case 36308:case 36293:return c0;case 36289:case 36303:case 36311:case 36292:return h0}}var nc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Xm(t.type)}},ic=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=d0(t.type)}},sc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Ql=/(\w+)(\])?(\[|\.)?/g;function zh(i,e){i.seq.push(e),i.map[e.id]=e}function u0(i,e,t){let n=i.name,s=n.length;for(Ql.lastIndex=0;;){let r=Ql.exec(n),a=Ql.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){zh(t,c===void 0?new nc(o,i,e):new ic(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new sc(o),zh(t,u)),t=u}}}var Ss=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);u0(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Hh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var f0=37297,p0=0;function m0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Gh=new Ge;function g0(i){Ke._getMatrix(Gh,Ke.workingColorSpace,i);let e=`mat3( ${Gh.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(i)){case Bs:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Vh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+m0(i.getShaderSource(e),o)}else return r}function _0(i,e){let t=g0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var y0={[Ml]:"Linear",[wl]:"Reinhard",[Tl]:"Cineon",[gs]:"ACESFilmic",[Rl]:"AgX",[Al]:"Neutral",[El]:"Custom"};function b0(i,e){let t=y0[e];return t===void 0?(De("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ro=new L;function x0(){Ke.getLuminanceCoefficients(Ro);let i=Ro.x.toFixed(4),e=Ro.y.toFixed(4),t=Ro.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function v0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sr).join(`
`)}function S0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function M0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Sr(i){return i!==""}function Wh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var w0=/^[ \t]*#include +<([\w\d./]+)>/gm;function rc(i){return i.replace(w0,E0)}var T0=new Map;function E0(i,e){let t=qe[e];if(t===void 0){let n=T0.get(e);if(n!==void 0)t=qe[n],De('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return rc(t)}var R0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qh(i){return i.replace(R0,A0)}function A0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function jh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var C0={[hr]:"SHADOWMAP_TYPE_PCF",[ps]:"SHADOWMAP_TYPE_VSM"};function P0(i){return C0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var I0={[pi]:"ENVMAP_TYPE_CUBE",[Ai]:"ENVMAP_TYPE_CUBE",[dr]:"ENVMAP_TYPE_CUBE_UV"};function D0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":I0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var L0={[Ai]:"ENVMAP_MODE_REFRACTION"};function N0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":L0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var U0={[Fa]:"ENVMAP_BLENDING_MULTIPLY",[hh]:"ENVMAP_BLENDING_MIX",[dh]:"ENVMAP_BLENDING_ADD"};function F0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":U0[i.combine]||"ENVMAP_BLENDING_NONE"}function O0(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function B0(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=P0(t),c=D0(t),d=N0(t),u=F0(t),h=O0(t),f=v0(t),y=S0(r),v=s.createProgram(),m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Sr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Sr).join(`
`),p.length>0&&(p+=`
`)):(m=[jh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sr).join(`
`),p=[jh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cn?"#define TONE_MAPPING":"",t.toneMapping!==Cn?qe.tonemapping_pars_fragment:"",t.toneMapping!==Cn?b0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,_0("linearToOutputTexel",t.outputColorSpace),x0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Sr).join(`
`)),a=rc(a),a=Wh(a,t),a=Xh(a,t),o=rc(o),o=Wh(o,t),o=Xh(o,t),a=qh(a),o=qh(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Fl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let A=T+m+a,x=T+p+o,M=Hh(s,s.VERTEX_SHADER,A),S=Hh(s,s.FRAGMENT_SHADER,x);s.attachShader(v,M),s.attachShader(v,S),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(P){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(v)||"",H=s.getShaderInfoLog(M)||"",D=s.getShaderInfoLog(S)||"",O=F.trim(),V=H.trim(),Y=D.trim(),ee=!0,q=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(ee=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,M,S);else{let Z=Vh(s,M,"vertex"),ne=Vh(s,S,"fragment");Fe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+Z+`
`+ne)}else O!==""?De("WebGLProgram: Program Info Log:",O):(V===""||Y==="")&&(q=!1);q&&(P.diagnostics={runnable:ee,programLog:O,vertexShader:{log:V,prefix:m},fragmentShader:{log:Y,prefix:p}})}s.deleteShader(M),s.deleteShader(S),_=new Ss(s,v),w=M0(s,v)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(v,f0)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=p0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=M,this.fragmentShader=S,this}var k0=0,ac=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new oc(e),t.set(e,n)),n}},oc=class{constructor(e){this.id=k0++,this.code=e,this.usedTimes=0}};function z0(i){return i===_i||i===_r||i===yr}function H0(i,e,t,n,s,r){let a=new zs,o=new ac,l=new Set,c=[],d=new Map,u=n.logarithmicDepthBuffer,h=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(_){return l.add(_),_===0?"uv":`uv${_}`}function v(_,w,C,P,F,H){let D=P.fog,O=F.geometry,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,ee=e.get(_.envMap||V,Y),q=ee&&ee.mapping===dr?ee.image.height:null,Z=f[_.type];_.precision!==null&&(h=n.getMaxPrecision(_.precision),h!==_.precision&&De("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));let ne=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Se=ne!==void 0?ne.length:0,_e=0;O.morphAttributes.position!==void 0&&(_e=1),O.morphAttributes.normal!==void 0&&(_e=2),O.morphAttributes.color!==void 0&&(_e=3);let ke,ze,Be,X;if(Z){let at=Gn[Z];ke=at.vertexShader,ze=at.fragmentShader}else{ke=_.vertexShader,ze=_.fragmentShader;let at=o.getVertexShaderStage(_),Ye=o.getFragmentShaderStage(_);o.update(_,at,Ye),Be=at.id,X=Ye.id}let K=i.getRenderTarget(),xe=i.state.buffers.depth.getReversed(),oe=F.isInstancedMesh===!0,re=F.isBatchedMesh===!0,Pe=!!_.map,bt=!!_.matcap,Le=!!ee,je=!!_.aoMap,Ze=!!_.lightMap,Ne=!!_.bumpMap&&_.wireframe===!1,ct=!!_.normalMap,ht=!!_.displacementMap,Xt=!!_.emissiveMap,Qe=!!_.metalnessMap,tt=!!_.roughnessMap,U=_.anisotropy>0,gt=_.clearcoat>0,We=_.dispersion>0,E=_.retroreflectivity>0,g=_.iridescence>0,B=_.sheen>0,G=_.transmission>0,j=U&&!!_.anisotropyMap,ae=gt&&!!_.clearcoatMap,le=gt&&!!_.clearcoatNormalMap,$=gt&&!!_.clearcoatRoughnessMap,Q=g&&!!_.iridescenceMap,ie=g&&!!_.iridescenceThicknessMap,Ce=B&&!!_.sheenColorMap,he=B&&!!_.sheenRoughnessMap,ue=!!_.specularMap,we=!!_.specularColorMap,Re=!!_.specularIntensityMap,He=G&&!!_.transmissionMap,N=G&&!!_.thicknessMap,fe=!!_.gradientMap,J=!!_.alphaMap,se=_.alphaTest>0,me=!!_.alphaHash,te=!!_.extensions,Te=Cn;_.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Te=i.toneMapping);let ye={shaderID:Z,shaderType:_.type,shaderName:_.name,vertexShader:ke,fragmentShader:ze,defines:_.defines,customVertexShaderID:Be,customFragmentShaderID:X,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:re,batchingColor:re&&F._colorsTexture!==null,instancing:oe,instancingColor:oe&&F.instanceColor!==null,instancingMorph:oe&&F.morphTexture!==null,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Ke.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Pe,matcap:bt,envMap:Le,envMapMode:Le&&ee.mapping,envMapCubeUVHeight:q,aoMap:je,lightMap:Ze,bumpMap:Ne,normalMap:ct,displacementMap:ht,emissiveMap:Xt,normalMapObjectSpace:ct&&_.normalMapType===ph,normalMapTangentSpace:ct&&_.normalMapType===br,packedNormalMap:ct&&_.normalMapType===br&&z0(_.normalMap.format),metalnessMap:Qe,roughnessMap:tt,anisotropy:U,anisotropyMap:j,clearcoat:gt,clearcoatMap:ae,clearcoatNormalMap:le,clearcoatRoughnessMap:$,dispersion:We,retroreflection:E,iridescence:g,iridescenceMap:Q,iridescenceThicknessMap:ie,sheen:B,sheenColorMap:Ce,sheenRoughnessMap:he,specularMap:ue,specularColorMap:we,specularIntensityMap:Re,transmission:G,transmissionMap:He,thicknessMap:N,gradientMap:fe,opaque:_.transparent===!1&&_.blending===ms&&_.alphaToCoverage===!1,alphaMap:J,alphaTest:se,alphaHash:me,combine:_.combine,mapUv:Pe&&y(_.map.channel),aoMapUv:je&&y(_.aoMap.channel),lightMapUv:Ze&&y(_.lightMap.channel),bumpMapUv:Ne&&y(_.bumpMap.channel),normalMapUv:ct&&y(_.normalMap.channel),displacementMapUv:ht&&y(_.displacementMap.channel),emissiveMapUv:Xt&&y(_.emissiveMap.channel),metalnessMapUv:Qe&&y(_.metalnessMap.channel),roughnessMapUv:tt&&y(_.roughnessMap.channel),anisotropyMapUv:j&&y(_.anisotropyMap.channel),clearcoatMapUv:ae&&y(_.clearcoatMap.channel),clearcoatNormalMapUv:le&&y(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&y(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&y(_.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&y(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&y(_.sheenColorMap.channel),sheenRoughnessMapUv:he&&y(_.sheenRoughnessMap.channel),specularMapUv:ue&&y(_.specularMap.channel),specularColorMapUv:we&&y(_.specularColorMap.channel),specularIntensityMapUv:Re&&y(_.specularIntensityMap.channel),transmissionMapUv:He&&y(_.transmissionMap.channel),thicknessMapUv:N&&y(_.thicknessMap.channel),alphaMapUv:J&&y(_.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ct||U),vertexNormals:!!O.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!O.attributes.uv&&(Pe||J),fog:!!D,useFog:_.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||O.attributes.normal===void 0&&ct===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:xe,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:_e,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Te,decodeVideoTexture:Pe&&_.map.isVideoTexture===!0&&Ke.getTransfer(_.map.colorSpace)===rt,decodeVideoTextureEmissive:Xt&&_.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(_.emissiveMap.colorSpace)===rt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===_n,flipSided:_.side===Bt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:te&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(te&&_.extensions.multiDraw===!0||re)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ye.vertexUv1s=l.has(1),ye.vertexUv2s=l.has(2),ye.vertexUv3s=l.has(3),l.clear(),ye}function m(_){let w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(let C in _.defines)w.push(C),w.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(p(w,_),T(w,_),w.push(i.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function p(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numSunLights),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numSunLightShadows),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function T(_,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function A(_){let w=f[_.type],C;if(w){let P=Gn[w];C=Ah.clone(P.uniforms)}else C=_.uniforms;return C}function x(_,w){let C=d.get(w);return C!==void 0?++C.usedTimes:(C=new B0(i,w,_,s),c.push(C),d.set(w,C)),C}function M(_){if(--_.usedTimes===0){let w=c.indexOf(_);c[w]=c[c.length-1],c.pop(),d.delete(_.cacheKey),_.destroy()}}function S(_){o.remove(_)}function R(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:A,acquireProgram:x,releaseProgram:M,releaseShaderCache:S,programs:c,dispose:R}}function G0(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function V0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Yh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Zh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,y,v,m,p){let T=i[e];return T===void 0?(T={id:h.id,object:h,geometry:f,material:y,materialVariant:a(h),groupOrder:v,renderOrder:h.renderOrder,z:m,group:p},i[e]=T):(T.id=h.id,T.object=h,T.geometry=f,T.material=y,T.materialVariant=a(h),T.groupOrder=v,T.renderOrder=h.renderOrder,T.z=m,T.group=p),e++,T}function l(h,f,y,v,m,p,T){T.reversedDepth===!0&&(m=-m);let A=o(h,f,y,v,m,p);y.transmission>0?n.push(A):y.transparent===!0?s.push(A):t.push(A)}function c(h,f,y,v,m,p){let T=o(h,f,y,v,m,p);y.transmission>0?n.unshift(T):y.transparent===!0?s.unshift(T):t.unshift(T)}function d(h,f){t.length>1&&t.sort(h||V0),n.length>1&&n.sort(f||Yh),s.length>1&&s.sort(f||Yh)}function u(){for(let h=e,f=i.length;h<f;h++){let y=i[h];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:d}}function W0(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Zh,i.set(n,[a])):s>=r.length?(a=new Zh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function X0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new Oe};break;case"SpotLight":t={position:new L,direction:new L,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function q0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var j0=0;function Y0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Z0(i){let e=new X0,t=q0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let s=new L,r=new ut,a=new ut;function o(c){let d=0,u=0,h=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let f=0,y=0,v=0,m=0,p=0,T=0,A=0,x=0,M=0,S=0,R=0,_=0,w=0,C=0;c.sort(Y0);for(let F=0,H=c.length;F<H;F++){let D=c[F],O=D.color,V=D.intensity,Y=D.distance,ee=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===_i?ee=D.shadow.map.texture:ee=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)d+=O.r*V,u+=O.g*V,h+=O.b*V;else if(D.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(D.sh.coefficients[q],V);C++}else if(D.isSunLight){let q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Z=D.shadow,ne=t.get(D);ne.shadowIntensity=Z.intensity,ne.shadowBias=Z.bias,ne.shadowNormalBias=Z.normalBias,ne.shadowRadius=Z.radius,ne.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),n.sunShadow[y]=ne,n.sunShadowMap[y]=ee;let Se=Z.getViewportCount();for(let _e=0;_e<Se;_e++)n.sunShadowMatrix[v+_e]=Z.getMatrix(_e),n.sunShadowCascade[v+_e]=Z._cascadeData[_e];v+=Se,y++}n.sun[f]=q,f++}else if(D.isDirectionalLight){let q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Z=D.shadow,ne=t.get(D);ne.shadowIntensity=Z.intensity,ne.shadowBias=Z.bias,ne.shadowNormalBias=Z.normalBias,ne.shadowRadius=Z.radius,ne.shadowMapSize=Z.mapSize,n.directionalShadow[m]=ne,n.directionalShadowMap[m]=ee,n.directionalShadowMatrix[m]=D.shadow.matrix,M++}n.directional[m]=q,m++}else if(D.isSpotLight){let q=e.get(D);q.position.setFromMatrixPosition(D.matrixWorld),q.color.copy(O).multiplyScalar(V),q.distance=Y,q.coneCos=Math.cos(D.angle),q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),q.decay=D.decay,n.spot[T]=q;let Z=D.shadow;if(D.map&&(n.spotLightMap[_]=D.map,_++,Z.updateMatrices(D),D.castShadow&&w++),n.spotLightMatrix[T]=Z.matrix,D.castShadow){let ne=t.get(D);ne.shadowIntensity=Z.intensity,ne.shadowBias=Z.bias,ne.shadowNormalBias=Z.normalBias,ne.shadowRadius=Z.radius,ne.shadowMapSize=Z.mapSize,n.spotShadow[T]=ne,n.spotShadowMap[T]=ee,R++}T++}else if(D.isRectAreaLight){let q=e.get(D);q.color.copy(O).multiplyScalar(V),q.halfWidth.set(D.width*.5,0,0),q.halfHeight.set(0,D.height*.5,0),n.rectArea[A]=q,A++}else if(D.isPointLight){let q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),q.distance=D.distance,q.decay=D.decay,D.castShadow){let Z=D.shadow,ne=t.get(D);ne.shadowIntensity=Z.intensity,ne.shadowBias=Z.bias,ne.shadowNormalBias=Z.normalBias,ne.shadowRadius=Z.radius,ne.shadowMapSize=Z.mapSize,ne.shadowCameraNear=Z.camera.near,ne.shadowCameraFar=Z.camera.far,n.pointShadow[p]=ne,n.pointShadowMap[p]=ee,n.pointShadowMatrix[p]=D.shadow.matrix,S++}n.point[p]=q,p++}else if(D.isHemisphereLight){let q=e.get(D);q.skyColor.copy(D.color).multiplyScalar(V),q.groundColor.copy(D.groundColor).multiplyScalar(V),n.hemi[x]=q,x++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=h;let P=n.hash;(P.sunLength!==f||P.directionalLength!==m||P.pointLength!==p||P.spotLength!==T||P.rectAreaLength!==A||P.hemiLength!==x||P.numSunShadows!==y||P.numDirectionalShadows!==M||P.numPointShadows!==S||P.numSpotShadows!==R||P.numSpotMaps!==_||P.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=m,n.spot.length=T,n.rectArea.length=A,n.point.length=p,n.hemi.length=x,n.sunShadow.length=y,n.sunShadowMap.length=y,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+_-w,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,P.sunLength=f,P.directionalLength=m,P.pointLength=p,P.spotLength=T,P.rectAreaLength=A,P.hemiLength=x,P.numSunShadows=y,P.numDirectionalShadows=M,P.numPointShadows=S,P.numSpotShadows=R,P.numSpotMaps=_,P.numLightProbes=C,n.version=j0++)}function l(c,d){let u=0,h=0,f=0,y=0,v=0,m=0,p=d.matrixWorldInverse;for(let T=0,A=c.length;T<A;T++){let x=c[T];if(x.isSunLight){let M=n.sun[u];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(p),u++}else if(x.isDirectionalLight){let M=n.directional[h];M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),h++}else if(x.isSpotLight){let M=n.spot[y];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),y++}else if(x.isRectAreaLight){let M=n.rectArea[v];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),a.identity(),r.copy(x.matrixWorld),r.premultiply(p),a.extractRotation(r),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),v++}else if(x.isPointLight){let M=n.point[f];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){let M=n.hemi[m];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function Jh(i){let e=new Z0(i),t=[],n=[],s=[];function r(h){u.camera=h,t.length=0,n.length=0,s.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function d(h){e.setupView(t,h)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function J0(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Jh(i),e.set(s,[o])):r>=a.length?(o=new Jh(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var K0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$0=`uniform sampler2D shadow_pass;
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
}`,Q0=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],eg=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Kh=new ut,vr=new L,ec=new L;function tg(i,e,t){let n=new os,s=new ge,r=new ge,a=new xt,o=new va,l=new Sa,c={},d=t.maxTextureSize,u={[kn]:Bt,[Bt]:kn,[_n]:_n},h=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:K0,fragmentShader:$0}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let y=new Kt;y.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Ue(y,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hr;let p=this.type;this.render=function(S,R,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===Xc&&(De("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=hr);let w=i.getRenderTarget(),C=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),F=i.state;F.setBlending(zn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let H=p!==this.type;H&&R.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(O=>O.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,O=S.length;D<O;D++){let V=S[D],Y=V.shadow;if(Y===void 0){De("WebGLShadowMap:",V,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let ee=Y.getFrameExtents();s.multiply(ee),r.copy(Y.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/ee.x),s.x=r.x*ee.x,Y.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/ee.y),s.y=r.y*ee.y,Y.mapSize.y=r.y));let q=i.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=q,Y.map===null||H===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===ps){if(V.isPointLight){De("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new en(s.x,s.y,{format:_i,type:In,minFilter:Ot,magFilter:Ot,generateMipmaps:!1}),Y.map.texture.name=V.name+".shadowMap",Y.map.depthTexture=new li(s.x,s.y,yn),Y.map.depthTexture.name=V.name+".shadowMapDepth",Y.map.depthTexture.format=On,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Lt,Y.map.depthTexture.magFilter=Lt}else V.isPointLight?(Y.map=new Ao(s.x),Y.map.depthTexture=new ua(s.x,Pn)):(Y.map=new en(s.x,s.y),Y.map.depthTexture=new li(s.x,s.y,Pn)),Y.map.depthTexture.name=V.name+".shadowMap",Y.map.depthTexture.format=On,this.type===hr?(Y.map.depthTexture.compareFunction=q?To:wo,Y.map.depthTexture.minFilter=Ot,Y.map.depthTexture.magFilter=Ot):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Lt,Y.map.depthTexture.magFilter=Lt);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==s.x||Y.map.height!==s.y)&&Y.map.setSize(s.x,s.y);let Z=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();V.isPointLight!==!0&&Y.updateMatrices(V,_);for(let ne=0;ne<Z;ne++){let Se=Y.getCamera(ne);if(V.isPointLight){let _e=Y.camera,ke=Y.matrix,ze=V.distance||_e.far;ze!==_e.far&&(_e.far=ze,_e.updateProjectionMatrix()),vr.setFromMatrixPosition(V.matrixWorld),_e.position.copy(vr),ec.copy(_e.position),ec.add(Q0[ne]),_e.up.copy(eg[ne]),_e.lookAt(ec),_e.updateMatrixWorld(),ke.makeTranslation(-vr.x,-vr.y,-vr.z),Kh.multiplyMatrices(_e.projectionMatrix,_e.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(Kh,_e.coordinateSystem,_e.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)i.setRenderTarget(Y.map,ne),i.clear();else{ne===0&&(i.setRenderTarget(Y.map),i.clear());let _e=Y.getViewport(ne);a.set(r.x*_e.x,r.y*_e.y,r.x*_e.z,r.y*_e.w),F.viewport(a)}n=Y.getFrustum(ne),x(R,_,Se,V,this.type)}Y.isPointLightShadow!==!0&&this.type===ps&&T(Y,_),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(w,C,P)};function T(S,R){let _=e.update(v);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null?S.mapPass=new en(s.x,s.y,{format:_i,type:In}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),h.uniforms.shadow_pass.value=S.map.depthTexture,h.uniforms.resolution.value.set(S.map.width,S.map.height),h.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(R,null,_,h,v,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(R,null,_,f,v,null)}function A(S,R,_,w){let C=null,P=_.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(P!==void 0)C=P;else if(C=_.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let F=C.uuid,H=R.uuid,D=c[F];D===void 0&&(D={},c[F]=D);let O=D[H];O===void 0&&(O=C.clone(),D[H]=O,R.addEventListener("dispose",M)),C=O}if(C.visible=R.visible,C.wireframe=R.wireframe,w===ps?C.side=R.shadowSide!==null?R.shadowSide:R.side:C.side=R.shadowSide!==null?R.shadowSide:u[R.side],C.alphaMap=R.alphaMap,C.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,C.map=R.map,C.clipShadows=R.clipShadows,C.clippingPlanes=R.clippingPlanes,C.clipIntersection=R.clipIntersection,C.displacementMap=R.displacementMap,C.displacementScale=R.displacementScale,C.displacementBias=R.displacementBias,C.wireframeLinewidth=R.wireframeLinewidth,C.linewidth=R.linewidth,_.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let F=i.properties.get(C);F.light=_}return C}function x(S,R,_,w,C){if(S.visible===!1)return;if(S.layers.test(R.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&C===ps)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,S.matrixWorld);let H=e.update(S),D=S.material;if(Array.isArray(D)){let O=H.groups;for(let V=0,Y=O.length;V<Y;V++){let ee=O[V],q=D[ee.materialIndex];if(q&&q.visible){let Z=A(S,q,w,C);S.onBeforeShadow(i,S,R,_,H,Z,ee),i.renderBufferDirect(_,null,H,Z,S,ee),S.onAfterShadow(i,S,R,_,H,Z,ee)}}}else if(D.visible){let O=A(S,D,w,C);S.onBeforeShadow(i,S,R,_,H,O,null),i.renderBufferDirect(_,null,H,O,S,null),S.onAfterShadow(i,S,R,_,H,O,null)}}let F=S.children;for(let H=0,D=F.length;H<D;H++)x(F[H],R,_,w,C)}function M(S){S.target.removeEventListener("dispose",M);for(let _ in c){let w=c[_],C=S.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}function ng(i,e){function t(){let N=!1,fe=new xt,J=null,se=new xt(0,0,0,0);return{setMask:function(me){J!==me&&!N&&(i.colorMask(me,me,me,me),J=me)},setLocked:function(me){N=me},setClear:function(me,te,Te,ye,at){at===!0&&(me*=ye,te*=ye,Te*=ye),fe.set(me,te,Te,ye),se.equals(fe)===!1&&(i.clearColor(me,te,Te,ye),se.copy(fe))},reset:function(){N=!1,J=null,se.set(-1,0,0,0)}}}function n(){let N=!1,fe=!1,J=null,se=null,me=null;return{setReversed:function(te){if(fe!==te){let Te=e.get("EXT_clip_control");te?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),fe=te;let ye=me;me=null,this.setClear(ye)}},getReversed:function(){return fe},setTest:function(te){te?K(i.DEPTH_TEST):xe(i.DEPTH_TEST)},setMask:function(te){J!==te&&!N&&(i.depthMask(te),J=te)},setFunc:function(te){if(fe&&(te=Eh[te]),se!==te){switch(te){case ea:i.depthFunc(i.NEVER);break;case ta:i.depthFunc(i.ALWAYS);break;case na:i.depthFunc(i.LESS);break;case Qi:i.depthFunc(i.LEQUAL);break;case ia:i.depthFunc(i.EQUAL);break;case sa:i.depthFunc(i.GEQUAL);break;case ra:i.depthFunc(i.GREATER);break;case aa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}se=te}},setLocked:function(te){N=te},setClear:function(te){me!==te&&(me=te,fe&&(te=1-te),i.clearDepth(te))},reset:function(){N=!1,J=null,se=null,me=null,fe=!1}}}function s(){let N=!1,fe=null,J=null,se=null,me=null,te=null,Te=null,ye=null,at=null;return{setTest:function(Ye){N||(Ye?K(i.STENCIL_TEST):xe(i.STENCIL_TEST))},setMask:function(Ye){fe!==Ye&&!N&&(i.stencilMask(Ye),fe=Ye)},setFunc:function(Ye,St,vt){(J!==Ye||se!==St||me!==vt)&&(i.stencilFunc(Ye,St,vt),J=Ye,se=St,me=vt)},setOp:function(Ye,St,vt){(te!==Ye||Te!==St||ye!==vt)&&(i.stencilOp(Ye,St,vt),te=Ye,Te=St,ye=vt)},setLocked:function(Ye){N=Ye},setClear:function(Ye){at!==Ye&&(i.clearStencil(Ye),at=Ye)},reset:function(){N=!1,fe=null,J=null,se=null,me=null,te=null,Te=null,ye=null,at=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,d={},u={},h={},f=new WeakMap,y=[],v=null,m=!1,p=null,T=null,A=null,x=null,M=null,S=null,R=null,_=new Oe(0,0,0),w=0,C=!1,P=null,F=null,H=null,D=null,O=null,V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,ee=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(q)[1]),Y=ee>=1):q.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Y=ee>=2);let Z=null,ne={},Se=i.getParameter(i.SCISSOR_BOX),_e=i.getParameter(i.VIEWPORT),ke=new xt().fromArray(Se),ze=new xt().fromArray(_e);function Be(N,fe,J,se){let me=new Uint8Array(4),te=i.createTexture();i.bindTexture(N,te),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Te=0;Te<J;Te++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(fe,0,i.RGBA,1,1,se,0,i.RGBA,i.UNSIGNED_BYTE,me):i.texImage2D(fe+Te,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,me);return te}let X={};X[i.TEXTURE_2D]=Be(i.TEXTURE_2D,i.TEXTURE_2D,1),X[i.TEXTURE_CUBE_MAP]=Be(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[i.TEXTURE_2D_ARRAY]=Be(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),X[i.TEXTURE_3D]=Be(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(i.DEPTH_TEST),a.setFunc(Qi),Ne(!1),ct(_l),K(i.CULL_FACE),je(zn);function K(N){d[N]!==!0&&(i.enable(N),d[N]=!0)}function xe(N){d[N]!==!1&&(i.disable(N),d[N]=!1)}function oe(N,fe){return h[N]!==fe?(i.bindFramebuffer(N,fe),h[N]=fe,N===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=fe),N===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=fe),!0):!1}function re(N,fe){let J=y,se=!1;if(N){J=f.get(fe),J===void 0&&(J=[],f.set(fe,J));let me=N.textures;if(J.length!==me.length||J[0]!==i.COLOR_ATTACHMENT0){for(let te=0,Te=me.length;te<Te;te++)J[te]=i.COLOR_ATTACHMENT0+te;J.length=me.length,se=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,se=!0);se&&i.drawBuffers(J)}function Pe(N){return v!==N?(i.useProgram(N),v=N,!0):!1}let bt={[Ri]:i.FUNC_ADD,[jc]:i.FUNC_SUBTRACT,[Yc]:i.FUNC_REVERSE_SUBTRACT};bt[Zc]=i.MIN,bt[Jc]=i.MAX;let Le={[Kc]:i.ZERO,[$c]:i.ONE,[Qc]:i.SRC_COLOR,[vl]:i.SRC_ALPHA,[rh]:i.SRC_ALPHA_SATURATE,[ih]:i.DST_COLOR,[th]:i.DST_ALPHA,[eh]:i.ONE_MINUS_SRC_COLOR,[Sl]:i.ONE_MINUS_SRC_ALPHA,[sh]:i.ONE_MINUS_DST_COLOR,[nh]:i.ONE_MINUS_DST_ALPHA,[ah]:i.CONSTANT_COLOR,[oh]:i.ONE_MINUS_CONSTANT_COLOR,[lh]:i.CONSTANT_ALPHA,[ch]:i.ONE_MINUS_CONSTANT_ALPHA};function je(N,fe,J,se,me,te,Te,ye,at,Ye){if(N===zn){m===!0&&(xe(i.BLEND),m=!1);return}if(m===!1&&(K(i.BLEND),m=!0),N!==qc){if(N!==p||Ye!==C){if((T!==Ri||M!==Ri)&&(i.blendEquation(i.FUNC_ADD),T=Ri,M=Ri),Ye)switch(N){case ms:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yl:i.blendFunc(i.ONE,i.ONE);break;case bl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Fe("WebGLState: Invalid blending: ",N);break}else switch(N){case ms:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case bl:Fe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xl:Fe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Fe("WebGLState: Invalid blending: ",N);break}A=null,x=null,S=null,R=null,_.set(0,0,0),w=0,p=N,C=Ye}return}me=me||fe,te=te||J,Te=Te||se,(fe!==T||me!==M)&&(i.blendEquationSeparate(bt[fe],bt[me]),T=fe,M=me),(J!==A||se!==x||te!==S||Te!==R)&&(i.blendFuncSeparate(Le[J],Le[se],Le[te],Le[Te]),A=J,x=se,S=te,R=Te),(ye.equals(_)===!1||at!==w)&&(i.blendColor(ye.r,ye.g,ye.b,at),_.copy(ye),w=at),p=N,C=!1}function Ze(N,fe){N.side===_n?xe(i.CULL_FACE):K(i.CULL_FACE);let J=N.side===Bt;fe&&(J=!J),Ne(J),N.blending===ms&&N.transparent===!1?je(zn):je(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let se=N.stencilWrite;o.setTest(se),se&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Xt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(N){P!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),P=N)}function ct(N){N!==Vc?(K(i.CULL_FACE),N!==F&&(N===_l?i.cullFace(i.BACK):N===Wc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xe(i.CULL_FACE),F=N}function ht(N){N!==H&&(Y&&i.lineWidth(N),H=N)}function Xt(N,fe,J){N?(K(i.POLYGON_OFFSET_FILL),(D!==fe||O!==J)&&(D=fe,O=J,a.getReversed()&&(fe=-fe),i.polygonOffset(fe,J))):xe(i.POLYGON_OFFSET_FILL)}function Qe(N){N?K(i.SCISSOR_TEST):xe(i.SCISSOR_TEST)}function tt(N){N===void 0&&(N=i.TEXTURE0+V-1),Z!==N&&(i.activeTexture(N),Z=N)}function U(N,fe,J){J===void 0&&(Z===null?J=i.TEXTURE0+V-1:J=Z);let se=ne[J];se===void 0&&(se={type:void 0,texture:void 0},ne[J]=se),(se.type!==N||se.texture!==fe)&&(Z!==J&&(i.activeTexture(J),Z=J),i.bindTexture(N,fe||X[N]),se.type=N,se.texture=fe)}function gt(){let N=ne[Z];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function We(){try{i.compressedTexImage2D(...arguments)}catch(N){Fe("WebGLState:",N)}}function E(){try{i.compressedTexImage3D(...arguments)}catch(N){Fe("WebGLState:",N)}}function g(){try{i.texSubImage2D(...arguments)}catch(N){Fe("WebGLState:",N)}}function B(){try{i.texSubImage3D(...arguments)}catch(N){Fe("WebGLState:",N)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(N){Fe("WebGLState:",N)}}function j(){try{i.compressedTexSubImage3D(...arguments)}catch(N){Fe("WebGLState:",N)}}function ae(){try{i.texStorage2D(...arguments)}catch(N){Fe("WebGLState:",N)}}function le(){try{i.texStorage3D(...arguments)}catch(N){Fe("WebGLState:",N)}}function $(){try{i.texImage2D(...arguments)}catch(N){Fe("WebGLState:",N)}}function Q(){try{i.texImage3D(...arguments)}catch(N){Fe("WebGLState:",N)}}function ie(N){return u[N]!==void 0?u[N]:i.getParameter(N)}function Ce(N,fe){u[N]!==fe&&(i.pixelStorei(N,fe),u[N]=fe)}function he(N){ke.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),ke.copy(N))}function ue(N){ze.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),ze.copy(N))}function we(N,fe){let J=c.get(fe);J===void 0&&(J=new WeakMap,c.set(fe,J));let se=J.get(N);se===void 0&&(se=i.getUniformBlockIndex(fe,N.name),J.set(N,se))}function Re(N,fe){let se=c.get(fe).get(N);l.get(fe)!==se&&(i.uniformBlockBinding(fe,se,N.__bindingPointIndex),l.set(fe,se))}function He(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},u={},Z=null,ne={},h={},f=new WeakMap,y=[],v=null,m=!1,p=null,T=null,A=null,x=null,M=null,S=null,R=null,_=new Oe(0,0,0),w=0,C=!1,P=null,F=null,H=null,D=null,O=null,ke.set(0,0,i.canvas.width,i.canvas.height),ze.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:K,disable:xe,bindFramebuffer:oe,drawBuffers:re,useProgram:Pe,setBlending:je,setMaterial:Ze,setFlipSided:Ne,setCullFace:ct,setLineWidth:ht,setPolygonOffset:Xt,setScissorTest:Qe,activeTexture:tt,bindTexture:U,unbindTexture:gt,compressedTexImage2D:We,compressedTexImage3D:E,texImage2D:$,texImage3D:Q,pixelStorei:Ce,getParameter:ie,updateUBOMapping:we,uniformBlockBinding:Re,texStorage2D:ae,texStorage3D:le,texSubImage2D:g,texSubImage3D:B,compressedTexSubImage2D:G,compressedTexSubImage3D:j,scissor:he,viewport:ue,reset:He}}function ig(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ge,d=new WeakMap,u=new Set,h,f=new WeakMap,y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(E,g){return y?new OffscreenCanvas(E,g):ts("canvas")}function m(E,g,B){let G=1,j=We(E);if((j.width>B||j.height>B)&&(G=B/Math.max(j.width,j.height)),G<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let ae=Math.floor(G*j.width),le=Math.floor(G*j.height);h===void 0&&(h=v(ae,le));let $=g?v(ae,le):h;return $.width=ae,$.height=le,$.getContext("2d").drawImage(E,0,0,ae,le),De("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+ae+"x"+le+")."),$}else return"data"in E&&De("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),E;return E}function p(E){return E.generateMipmaps}function T(E){i.generateMipmap(E)}function A(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(E,g,B,G,j,ae=!1){if(E!==null){if(i[E]!==void 0)return i[E];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let le;G&&(le=e.get("EXT_texture_norm16"),le||De("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=g;if(g===i.RED&&(B===i.FLOAT&&($=i.R32F),B===i.HALF_FLOAT&&($=i.R16F),B===i.UNSIGNED_BYTE&&($=i.R8),B===i.UNSIGNED_SHORT&&le&&($=le.R16_EXT),B===i.SHORT&&le&&($=le.R16_SNORM_EXT)),g===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.R8UI),B===i.UNSIGNED_SHORT&&($=i.R16UI),B===i.UNSIGNED_INT&&($=i.R32UI),B===i.BYTE&&($=i.R8I),B===i.SHORT&&($=i.R16I),B===i.INT&&($=i.R32I)),g===i.RG&&(B===i.FLOAT&&($=i.RG32F),B===i.HALF_FLOAT&&($=i.RG16F),B===i.UNSIGNED_BYTE&&($=i.RG8),B===i.UNSIGNED_SHORT&&le&&($=le.RG16_EXT),B===i.SHORT&&le&&($=le.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RG8UI),B===i.UNSIGNED_SHORT&&($=i.RG16UI),B===i.UNSIGNED_INT&&($=i.RG32UI),B===i.BYTE&&($=i.RG8I),B===i.SHORT&&($=i.RG16I),B===i.INT&&($=i.RG32I)),g===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RGB8UI),B===i.UNSIGNED_SHORT&&($=i.RGB16UI),B===i.UNSIGNED_INT&&($=i.RGB32UI),B===i.BYTE&&($=i.RGB8I),B===i.SHORT&&($=i.RGB16I),B===i.INT&&($=i.RGB32I)),g===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RGBA8UI),B===i.UNSIGNED_SHORT&&($=i.RGBA16UI),B===i.UNSIGNED_INT&&($=i.RGBA32UI),B===i.BYTE&&($=i.RGBA8I),B===i.SHORT&&($=i.RGBA16I),B===i.INT&&($=i.RGBA32I)),g===i.RGB&&(B===i.UNSIGNED_SHORT&&le&&($=le.RGB16_EXT),B===i.SHORT&&le&&($=le.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),g===i.RGBA){let Q=ae?Bs:Ke.getTransfer(j);B===i.FLOAT&&($=i.RGBA32F),B===i.HALF_FLOAT&&($=i.RGBA16F),B===i.UNSIGNED_BYTE&&($=Q===rt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&le&&($=le.RGBA16_EXT),B===i.SHORT&&le&&($=le.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function M(E,g){let B;return E?g===null||g===Pn||g===ys?B=i.DEPTH24_STENCIL8:g===yn?B=i.DEPTH32F_STENCIL8:g===_s&&(B=i.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Pn||g===ys?B=i.DEPTH_COMPONENT24:g===yn?B=i.DEPTH_COMPONENT32F:g===_s&&(B=i.DEPTH_COMPONENT16),B}function S(E,g){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==Lt&&E.minFilter!==Ot?Math.log2(Math.max(g.width,g.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?g.mipmaps.length:1}function R(E){let g=E.target;g.removeEventListener("dispose",R),w(g),g.isVideoTexture&&d.delete(g),g.isHTMLTexture&&u.delete(g)}function _(E){let g=E.target;g.removeEventListener("dispose",_),P(g)}function w(E){let g=n.get(E);if(g.__webglInit===void 0)return;let B=E.source,G=f.get(B);if(G){let j=G[g.__cacheKey];j.usedTimes--,j.usedTimes===0&&C(E),Object.keys(G).length===0&&f.delete(B)}n.remove(E)}function C(E){let g=n.get(E);i.deleteTexture(g.__webglTexture);let B=E.source,G=f.get(B);delete G[g.__cacheKey],a.memory.textures--}function P(E){let g=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(g.__webglFramebuffer[G]))for(let j=0;j<g.__webglFramebuffer[G].length;j++)i.deleteFramebuffer(g.__webglFramebuffer[G][j]);else i.deleteFramebuffer(g.__webglFramebuffer[G]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[G])}else{if(Array.isArray(g.__webglFramebuffer))for(let G=0;G<g.__webglFramebuffer.length;G++)i.deleteFramebuffer(g.__webglFramebuffer[G]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let G=0;G<g.__webglColorRenderbuffer.length;G++)g.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[G]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let B=E.textures;for(let G=0,j=B.length;G<j;G++){let ae=n.get(B[G]);ae.__webglTexture&&(i.deleteTexture(ae.__webglTexture),a.memory.textures--),n.remove(B[G])}n.remove(E)}let F=0;function H(){F=0}function D(){return F}function O(E){F=E}function V(){let E=F;return E>=s.maxTextures&&De("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,E}function Y(E){let g=[];return g.push(E.wrapS),g.push(E.wrapT),g.push(E.wrapR||0),g.push(E.magFilter),g.push(E.minFilter),g.push(E.anisotropy),g.push(E.internalFormat),g.push(E.format),g.push(E.type),g.push(E.generateMipmaps),g.push(E.premultiplyAlpha),g.push(E.flipY),g.push(E.unpackAlignment),g.push(E.colorSpace),g.join()}function ee(E,g){let B=n.get(E);if(E.isVideoTexture&&U(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&B.__version!==E.version){let G=E.image;if(G===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{xe(B,E,g);return}}else E.isExternalTexture&&(B.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+g)}function q(E,g){let B=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){xe(B,E,g);return}else E.isExternalTexture&&(B.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+g)}function Z(E,g){let B=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){xe(B,E,g);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+g)}function ne(E,g){let B=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&B.__version!==E.version){oe(B,E,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+g)}let Se={[Zn]:i.REPEAT,[Fn]:i.CLAMP_TO_EDGE,[oa]:i.MIRRORED_REPEAT},_e={[Lt]:i.NEAREST,[uh]:i.NEAREST_MIPMAP_NEAREST,[ur]:i.NEAREST_MIPMAP_LINEAR,[Ot]:i.LINEAR,[ka]:i.LINEAR_MIPMAP_NEAREST,[mi]:i.LINEAR_MIPMAP_LINEAR},ke={[gh]:i.NEVER,[vh]:i.ALWAYS,[_h]:i.LESS,[wo]:i.LEQUAL,[yh]:i.EQUAL,[To]:i.GEQUAL,[bh]:i.GREATER,[xh]:i.NOTEQUAL};function ze(E,g){if(g.type===yn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Ot||g.magFilter===ka||g.magFilter===ur||g.magFilter===mi||g.minFilter===Ot||g.minFilter===ka||g.minFilter===ur||g.minFilter===mi)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,Se[g.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,Se[g.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,Se[g.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,_e[g.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,_e[g.minFilter]),g.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,ke[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Lt||g.minFilter!==ur&&g.minFilter!==mi||g.type===yn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Be(E,g){let B=!1;E.__webglInit===void 0&&(E.__webglInit=!0,g.addEventListener("dispose",R));let G=g.source,j=f.get(G);j===void 0&&(j={},f.set(G,j));let ae=Y(g);if(ae!==E.__cacheKey){j[ae]===void 0&&(j[ae]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),j[ae].usedTimes++;let le=j[E.__cacheKey];le!==void 0&&(j[E.__cacheKey].usedTimes--,le.usedTimes===0&&C(g)),E.__cacheKey=ae,E.__webglTexture=j[ae].texture}return B}function X(E,g,B){return Math.floor(Math.floor(E/B)/g)}function K(E,g,B,G){let ae=E.updateRanges;if(ae.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,B,G,g.data);else{ae.sort((Ce,he)=>Ce.start-he.start);let le=0;for(let Ce=1;Ce<ae.length;Ce++){let he=ae[le],ue=ae[Ce],we=he.start+he.count,Re=X(ue.start,g.width,4),He=X(he.start,g.width,4);ue.start<=we+1&&Re===He&&X(ue.start+ue.count-1,g.width,4)===Re?he.count=Math.max(he.count,ue.start+ue.count-he.start):(++le,ae[le]=ue)}ae.length=le+1;let $=t.getParameter(i.UNPACK_ROW_LENGTH),Q=t.getParameter(i.UNPACK_SKIP_PIXELS),ie=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let Ce=0,he=ae.length;Ce<he;Ce++){let ue=ae[Ce],we=Math.floor(ue.start/4),Re=Math.ceil(ue.count/4),He=we%g.width,N=Math.floor(we/g.width),fe=Re,J=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,He),t.pixelStorei(i.UNPACK_SKIP_ROWS,N),t.texSubImage2D(i.TEXTURE_2D,0,He,N,fe,J,B,G,g.data)}E.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,$),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(i.UNPACK_SKIP_ROWS,ie)}}function xe(E,g,B){let G=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(G=i.TEXTURE_3D);let j=Be(E,g),ae=g.source;t.bindTexture(G,E.__webglTexture,i.TEXTURE0+B);let le=n.get(ae);if(ae.version!==le.__version||j===!0){if(t.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){let J=Ke.getPrimaries(Ke.workingColorSpace),se=g.colorSpace===Ut?null:Ke.getPrimaries(g.colorSpace),me=g.colorSpace===Ut||J===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,me)}t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let Q=m(g.image,!1,s.maxTextureSize);Q=gt(g,Q);let ie=r.convert(g.format,g.colorSpace),Ce=r.convert(g.type),he=x(g.internalFormat,ie,Ce,g.normalized,g.colorSpace,g.isVideoTexture);ze(G,g);let ue,we=g.mipmaps,Re=g.isVideoTexture!==!0,He=le.__version===void 0||j===!0,N=ae.dataReady,fe=S(g,Q);if(g.isDepthTexture)he=M(g.format===gi,g.type),He&&(Re?t.texStorage2D(i.TEXTURE_2D,1,he,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,he,Q.width,Q.height,0,ie,Ce,null));else if(g.isDataTexture)if(we.length>0){Re&&He&&t.texStorage2D(i.TEXTURE_2D,fe,he,we[0].width,we[0].height);for(let J=0,se=we.length;J<se;J++)ue=we[J],Re?N&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,ue.width,ue.height,ie,Ce,ue.data):t.texImage2D(i.TEXTURE_2D,J,he,ue.width,ue.height,0,ie,Ce,ue.data);g.generateMipmaps=!1}else Re?(He&&t.texStorage2D(i.TEXTURE_2D,fe,he,Q.width,Q.height),N&&K(g,Q,ie,Ce)):t.texImage2D(i.TEXTURE_2D,0,he,Q.width,Q.height,0,ie,Ce,Q.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Re&&He&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,he,we[0].width,we[0].height,Q.depth);for(let J=0,se=we.length;J<se;J++)if(ue=we[J],g.format!==bn)if(ie!==null)if(Re){if(N)if(g.layerUpdates.size>0){let me=Vl(ue.width,ue.height,g.format,g.type);for(let te of g.layerUpdates){let Te=ue.data.subarray(te*me/ue.data.BYTES_PER_ELEMENT,(te+1)*me/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,te,ue.width,ue.height,1,ie,Te)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,ue.width,ue.height,Q.depth,ie,ue.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,he,ue.width,ue.height,Q.depth,0,ue.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Re?N&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,ue.width,ue.height,Q.depth,ie,Ce,ue.data):t.texImage3D(i.TEXTURE_2D_ARRAY,J,he,ue.width,ue.height,Q.depth,0,ie,Ce,ue.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{Re&&He&&t.texStorage2D(i.TEXTURE_2D,fe,he,we[0].width,we[0].height);for(let J=0,se=we.length;J<se;J++)ue=we[J],g.format!==bn?ie!==null?Re?N&&t.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,ue.width,ue.height,ie,ue.data):t.compressedTexImage2D(i.TEXTURE_2D,J,he,ue.width,ue.height,0,ue.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?N&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,ue.width,ue.height,ie,Ce,ue.data):t.texImage2D(i.TEXTURE_2D,J,he,ue.width,ue.height,0,ie,Ce,ue.data)}else if(g.isDataArrayTexture)if(Re){if(He&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,he,Q.width,Q.height,Q.depth),N)if(g.layerUpdates.size>0){let J=Vl(Q.width,Q.height,g.format,g.type);for(let se of g.layerUpdates){let me=Q.data.subarray(se*J/Q.data.BYTES_PER_ELEMENT,(se+1)*J/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,se,Q.width,Q.height,1,ie,Ce,me)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ie,Ce,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,he,Q.width,Q.height,Q.depth,0,ie,Ce,Q.data);else if(g.isData3DTexture)Re?(He&&t.texStorage3D(i.TEXTURE_3D,fe,he,Q.width,Q.height,Q.depth),N&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ie,Ce,Q.data)):t.texImage3D(i.TEXTURE_3D,0,he,Q.width,Q.height,Q.depth,0,ie,Ce,Q.data);else if(g.isFramebufferTexture){if(He)if(Re)t.texStorage2D(i.TEXTURE_2D,fe,he,Q.width,Q.height);else{let J=Q.width,se=Q.height;for(let me=0;me<fe;me++)t.texImage2D(i.TEXTURE_2D,me,he,J,se,0,ie,Ce,null),J>>=1,se>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){let J=i.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),Q.parentNode!==J){J.appendChild(Q),u.add(g),J.onpaint=se=>{let me=se.changedElements;for(let te of u)me.includes(te.image)&&(te.needsUpdate=!0)},J.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Q);else{let me=i.RGBA,te=i.RGBA,Te=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,me,te,Te,Q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(we.length>0){if(Re&&He){let J=We(we[0]);t.texStorage2D(i.TEXTURE_2D,fe,he,J.width,J.height)}for(let J=0,se=we.length;J<se;J++)ue=we[J],Re?N&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,ie,Ce,ue):t.texImage2D(i.TEXTURE_2D,J,he,ie,Ce,ue);g.generateMipmaps=!1}else if(Re){if(He){let J=We(Q);t.texStorage2D(i.TEXTURE_2D,fe,he,J.width,J.height)}N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ie,Ce,Q)}else t.texImage2D(i.TEXTURE_2D,0,he,ie,Ce,Q);p(g)&&T(G),le.__version=ae.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function oe(E,g,B){if(g.image.length!==6)return;let G=Be(E,g),j=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+B);let ae=n.get(j);if(j.version!==ae.__version||G===!0){t.activeTexture(i.TEXTURE0+B);let le=Ke.getPrimaries(Ke.workingColorSpace),$=g.colorSpace===Ut?null:Ke.getPrimaries(g.colorSpace),Q=g.colorSpace===Ut||le===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let ie=g.isCompressedTexture||g.image[0].isCompressedTexture,Ce=g.image[0]&&g.image[0].isDataTexture,he=[];for(let te=0;te<6;te++)!ie&&!Ce?he[te]=m(g.image[te],!0,s.maxCubemapSize):he[te]=Ce?g.image[te].image:g.image[te],he[te]=gt(g,he[te]);let ue=he[0],we=r.convert(g.format,g.colorSpace),Re=r.convert(g.type),He=x(g.internalFormat,we,Re,g.normalized,g.colorSpace),N=g.isVideoTexture!==!0,fe=ae.__version===void 0||G===!0,J=j.dataReady,se=S(g,ue);ze(i.TEXTURE_CUBE_MAP,g);let me;if(ie){N&&fe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,se,He,ue.width,ue.height);for(let te=0;te<6;te++){me=he[te].mipmaps;for(let Te=0;Te<me.length;Te++){let ye=me[Te];g.format!==bn?we!==null?N?J&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te,0,0,ye.width,ye.height,we,ye.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te,He,ye.width,ye.height,0,ye.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te,0,0,ye.width,ye.height,we,Re,ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te,He,ye.width,ye.height,0,we,Re,ye.data)}}}else{if(me=g.mipmaps,N&&fe){me.length>0&&se++;let te=We(he[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,se,He,te.width,te.height)}for(let te=0;te<6;te++)if(Ce){N?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,he[te].width,he[te].height,we,Re,he[te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,He,he[te].width,he[te].height,0,we,Re,he[te].data);for(let Te=0;Te<me.length;Te++){let at=me[Te].image[te].image;N?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te+1,0,0,at.width,at.height,we,Re,at.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te+1,He,at.width,at.height,0,we,Re,at.data)}}else{N?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,we,Re,he[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,He,we,Re,he[te]);for(let Te=0;Te<me.length;Te++){let ye=me[Te];N?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te+1,0,0,we,Re,ye.image[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te+1,He,we,Re,ye.image[te])}}}p(g)&&T(i.TEXTURE_CUBE_MAP),ae.__version=j.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function re(E,g,B,G,j,ae){let le=r.convert(B.format,B.colorSpace),$=r.convert(B.type),Q=x(B.internalFormat,le,$,B.normalized,B.colorSpace),ie=n.get(g),Ce=n.get(B);if(Ce.__renderTarget=g,!ie.__hasExternalTextures){let he=Math.max(1,g.width>>ae),ue=Math.max(1,g.height>>ae);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,ae,Q,he,ue,g.depth,0,le,$,null):t.texImage2D(j,ae,Q,he,ue,0,le,$,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),tt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,j,Ce.__webglTexture,0,Qe(g)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,j,Ce.__webglTexture,ae),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Pe(E,g,B){if(i.bindRenderbuffer(i.RENDERBUFFER,E),g.depthBuffer){let G=g.depthTexture,j=G&&G.isDepthTexture?G.type:null,ae=M(g.stencilBuffer,j),le=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;tt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qe(g),ae,g.width,g.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qe(g),ae,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,ae,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,E)}else{let G=g.textures;for(let j=0;j<G.length;j++){let ae=G[j],le=r.convert(ae.format,ae.colorSpace),$=r.convert(ae.type),Q=x(ae.internalFormat,le,$,ae.normalized,ae.colorSpace);tt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qe(g),Q,g.width,g.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qe(g),Q,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,Q,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function bt(E,g,B){let G=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=n.get(g.depthTexture);if(j.__renderTarget=g,(!j.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),G){if(j.__webglInit===void 0&&(j.__webglInit=!0,g.depthTexture.addEventListener("dispose",R)),j.__webglTexture===void 0){j.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),ze(i.TEXTURE_CUBE_MAP,g.depthTexture);let ie=r.convert(g.depthTexture.format),Ce=r.convert(g.depthTexture.type),he;g.depthTexture.format===On?he=i.DEPTH_COMPONENT24:g.depthTexture.format===gi&&(he=i.DEPTH24_STENCIL8);for(let ue=0;ue<6;ue++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,he,g.width,g.height,0,ie,Ce,null)}}else ee(g.depthTexture,0);let ae=j.__webglTexture,le=Qe(g),$=G?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,Q=g.depthTexture.format===gi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===On)tt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,$,ae,0,le):i.framebufferTexture2D(i.FRAMEBUFFER,Q,$,ae,0);else if(g.depthTexture.format===gi)tt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,$,ae,0,le):i.framebufferTexture2D(i.FRAMEBUFFER,Q,$,ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Le(E){let g=n.get(E),B=E.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==E.depthTexture){let G=E.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),G){let j=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,G.removeEventListener("dispose",j)};G.addEventListener("dispose",j),g.__depthDisposeCallback=j}g.__boundDepthTexture=G}if(E.depthTexture&&!g.__autoAllocateDepthBuffer)if(B)for(let G=0;G<6;G++)bt(g.__webglFramebuffer[G],E,G);else{let G=E.texture.mipmaps;G&&G.length>0?bt(g.__webglFramebuffer[0],E,0):bt(g.__webglFramebuffer,E,0)}else if(B){g.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[G]),g.__webglDepthbuffer[G]===void 0)g.__webglDepthbuffer[G]=i.createRenderbuffer(),Pe(g.__webglDepthbuffer[G],E,!1);else{let j=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=g.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,ae)}}else{let G=E.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Pe(g.__webglDepthbuffer,E,!1);else{let j=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,ae)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function je(E,g,B){let G=n.get(E);g!==void 0&&re(G.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Le(E)}function Ze(E){let g=E.texture,B=n.get(E),G=n.get(g);E.addEventListener("dispose",_);let j=E.textures,ae=E.isWebGLCubeRenderTarget===!0,le=j.length>1;if(le||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=g.version,a.memory.textures++),ae){B.__webglFramebuffer=[];for(let $=0;$<6;$++)if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer[$]=[];for(let Q=0;Q<g.mipmaps.length;Q++)B.__webglFramebuffer[$][Q]=i.createFramebuffer()}else B.__webglFramebuffer[$]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer=[];for(let $=0;$<g.mipmaps.length;$++)B.__webglFramebuffer[$]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(le)for(let $=0,Q=j.length;$<Q;$++){let ie=n.get(j[$]);ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&tt(E)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let $=0;$<j.length;$++){let Q=j[$];B.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[$]);let ie=r.convert(Q.format,Q.colorSpace),Ce=r.convert(Q.type),he=x(Q.internalFormat,ie,Ce,Q.normalized,Q.colorSpace,E.isXRRenderTarget===!0),ue=Qe(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,he,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,B.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Pe(B.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ae){t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),ze(i.TEXTURE_CUBE_MAP,g);for(let $=0;$<6;$++)if(g.mipmaps&&g.mipmaps.length>0)for(let Q=0;Q<g.mipmaps.length;Q++)re(B.__webglFramebuffer[$][Q],E,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Q);else re(B.__webglFramebuffer[$],E,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);p(g)&&T(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){for(let $=0,Q=j.length;$<Q;$++){let ie=j[$],Ce=n.get(ie),he=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(he=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,Ce.__webglTexture),ze(he,ie),re(B.__webglFramebuffer,E,ie,i.COLOR_ATTACHMENT0+$,he,0),p(ie)&&T(he)}t.unbindTexture()}else{let $=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&($=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture($,G.__webglTexture),ze($,g),g.mipmaps&&g.mipmaps.length>0)for(let Q=0;Q<g.mipmaps.length;Q++)re(B.__webglFramebuffer[Q],E,g,i.COLOR_ATTACHMENT0,$,Q);else re(B.__webglFramebuffer,E,g,i.COLOR_ATTACHMENT0,$,0);p(g)&&T($),t.unbindTexture()}E.depthBuffer&&Le(E)}function Ne(E){let g=E.textures;for(let B=0,G=g.length;B<G;B++){let j=g[B];if(p(j)){let ae=A(E),le=n.get(j).__webglTexture;t.bindTexture(ae,le),T(ae),t.unbindTexture()}}}let ct=[],ht=[];function Xt(E){if(E.samples>0){if(tt(E)===!1){let g=E.textures,B=E.width,G=E.height,j=i.COLOR_BUFFER_BIT,ae=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=n.get(E),$=g.length>1;if($)for(let ie=0;ie<g.length;ie++)t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer);let Q=E.texture.mipmaps;Q&&Q.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let ie=0;ie<g.length;ie++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,le.__webglColorRenderbuffer[ie]);let Ce=n.get(g[ie]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ce,0)}i.blitFramebuffer(0,0,B,G,0,0,B,G,j,i.NEAREST),l===!0&&(ct.length=0,ht.length=0,ct.push(i.COLOR_ATTACHMENT0+ie),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&(ct.push(ae),ht.push(ae),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ht)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ct))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let ie=0;ie<g.length;ie++){t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,le.__webglColorRenderbuffer[ie]);let Ce=n.get(g[ie]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.TEXTURE_2D,Ce,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){let g=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function Qe(E){return Math.min(s.maxSamples,E.samples)}function tt(E){let g=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function U(E){let g=a.render.frame;d.get(E)!==g&&(d.set(E,g),E.update())}function gt(E,g){let B=E.colorSpace,G=E.format,j=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||B!==Os&&B!==Ut&&(Ke.getTransfer(B)===rt?(G!==bn||j!==tn)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Fe("WebGLTextures: Unsupported texture color space:",B)),g}function We(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=H,this.getTextureUnits=D,this.setTextureUnits=O,this.setTexture2D=ee,this.setTexture2DArray=q,this.setTexture3D=Z,this.setTextureCube=ne,this.rebindTextures=je,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=Ne,this.updateMultisampleRenderTarget=Xt,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=re,this.useMultisampledRTT=tt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function sg(i,e){function t(n,s=Ut){let r,a=Ke.getTransfer(s);if(n===tn)return i.UNSIGNED_BYTE;if(n===Ha)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ga)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Dl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ll)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Pl)return i.BYTE;if(n===Il)return i.SHORT;if(n===_s)return i.UNSIGNED_SHORT;if(n===za)return i.INT;if(n===Pn)return i.UNSIGNED_INT;if(n===yn)return i.FLOAT;if(n===In)return i.HALF_FLOAT;if(n===Nl)return i.ALPHA;if(n===Ul)return i.RGB;if(n===bn)return i.RGBA;if(n===On)return i.DEPTH_COMPONENT;if(n===gi)return i.DEPTH_STENCIL;if(n===Va)return i.RED;if(n===Wa)return i.RED_INTEGER;if(n===_i)return i.RG;if(n===Xa)return i.RG_INTEGER;if(n===qa)return i.RGBA_INTEGER;if(n===fr||n===pr||n===mr||n===gr)if(a===rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===fr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===fr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===gr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ja||n===Ya||n===Za||n===Ja)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ja)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ya)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Za)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ja)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ka||n===$a||n===Qa||n===eo||n===to||n===_r||n===no)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ka||n===$a)return a===rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Qa)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===eo)return r.COMPRESSED_R11_EAC;if(n===to)return r.COMPRESSED_SIGNED_R11_EAC;if(n===_r)return r.COMPRESSED_RG11_EAC;if(n===no)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===io||n===so||n===ro||n===ao||n===oo||n===lo||n===co||n===ho||n===uo||n===fo||n===po||n===mo||n===go||n===_o)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===io)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===so)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ro)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ao)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===oo)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===lo)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===co)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ho)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===uo)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===fo)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===po)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===mo)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===go)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_o)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===yo||n===bo||n===xo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===yo)return a===rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===bo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vo||n===So||n===yr||n===Mo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===vo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===So)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===yr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Mo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ys?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var rg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ag=`
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

}`,lc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Zs(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new hn({vertexShader:rg,fragmentShader:ag,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ue(new Qs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},cc=class extends Rn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,u=null,h=null,f=null,y=null,v=typeof XRWebGLBinding<"u",m=new lc,p={},T=t.getContextAttributes(),A=null,x=null,M=[],S=[],R=new ge,_=null,w=null,C=new Ft;C.viewport=new xt;let P=new Ft;P.viewport=new xt;let F=[C,P],H=new Na,D=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let K=M[X];return K===void 0&&(K=new rs,M[X]=K),K.getTargetRaySpace()},this.getControllerGrip=function(X){let K=M[X];return K===void 0&&(K=new rs,M[X]=K),K.getGripSpace()},this.getHand=function(X){let K=M[X];return K===void 0&&(K=new rs,M[X]=K),K.getHandSpace()};function V(X){let K=S.indexOf(X.inputSource);if(K===-1)return;let xe=M[K];xe!==void 0&&(xe.update(X.inputSource,X.frame,c||a),xe.dispatchEvent({type:X.type,data:X.inputSource}))}function Y(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",ee);for(let X=0;X<M.length;X++){let K=S[X];K!==null&&(S[X]=null,M[X].disconnect(K))}D=null,O=null,m.reset();for(let X in p)delete p[X];if(e.setRenderTarget(A),f=null,h=null,u=null,s=null,x=null,Be.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(R.width,R.height,!1),w!==null){let X=w.camera;X.fov=w.fov,X.zoom=w.zoom,X.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",ee),T.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,oe=null,re=null;T.depth&&(re=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=T.stencil?gi:On,oe=T.stencil?ys:Pn);let Pe={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:r};u=this.getBinding(),h=u.createProjectionLayer(Pe),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new en(h.textureWidth,h.textureHeight,{format:bn,type:tn,depthTexture:new li(h.textureWidth,h.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let xe={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,xe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new en(f.framebufferWidth,f.framebufferHeight,{format:bn,type:tn,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Be.setContext(s),Be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ee(X){for(let K=0;K<X.removed.length;K++){let xe=X.removed[K],oe=S.indexOf(xe);oe>=0&&(S[oe]=null,M[oe].disconnect(xe))}for(let K=0;K<X.added.length;K++){let xe=X.added[K],oe=S.indexOf(xe);if(oe===-1){for(let Pe=0;Pe<M.length;Pe++)if(Pe>=S.length){S.push(xe),oe=Pe;break}else if(S[Pe]===null){S[Pe]=xe,oe=Pe;break}if(oe===-1)break}let re=M[oe];re&&re.connect(xe)}}let q=new L,Z=new L;function ne(X,K,xe){q.setFromMatrixPosition(K.matrixWorld),Z.setFromMatrixPosition(xe.matrixWorld);let oe=q.distanceTo(Z),re=K.projectionMatrix.elements,Pe=xe.projectionMatrix.elements,bt=re[14]/(re[10]-1),Le=re[14]/(re[10]+1),je=(re[9]+1)/re[5],Ze=(re[9]-1)/re[5],Ne=(re[8]-1)/re[0],ct=(Pe[8]+1)/Pe[0],ht=bt*Ne,Xt=bt*ct,Qe=oe/(-Ne+ct),tt=Qe*-Ne;if(K.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(tt),X.translateZ(Qe),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),re[10]===-1)X.projectionMatrix.copy(K.projectionMatrix),X.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let U=bt+Qe,gt=Le+Qe,We=ht-tt,E=Xt+(oe-tt),g=je*Le/gt*U,B=Ze*Le/gt*U;X.projectionMatrix.makePerspective(We,E,g,B,U,gt),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function Se(X,K){K===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(K.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let K=X.near,xe=X.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(xe=m.depthFar)),H.near=P.near=C.near=K,H.far=P.far=C.far=xe,(D!==H.near||O!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),D=H.near,O=H.far),H.layers.mask=X.layers.mask|6,C.layers.mask=H.layers.mask&-5,P.layers.mask=H.layers.mask&-3;let oe=X.parent,re=H.cameras;Se(H,oe);for(let Pe=0;Pe<re.length;Pe++)Se(re[Pe],oe);re.length===2?ne(H,C,P):H.projectionMatrix.copy(C.projectionMatrix),w===null&&X.isPerspectiveCamera&&(w={camera:X,fov:X.fov,zoom:X.zoom}),_e(X,H,oe)};function _e(X,K,xe){xe===null?X.matrix.copy(K.matrixWorld):(X.matrix.copy(xe.matrixWorld),X.matrix.invert(),X.matrix.multiply(K.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(K.projectionMatrix),X.projectionMatrixInverse.copy(K.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=is*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(X){l=X,h!==null&&(h.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(X){return p[X]};let ke=null;function ze(X,K){if(d=K.getViewerPose(c||a),y=K,d!==null){let xe=d.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let oe=!1;xe.length!==H.cameras.length&&(H.cameras.length=0,oe=!0);for(let Le=0;Le<xe.length;Le++){let je=xe[Le],Ze=null;if(f!==null)Ze=f.getViewport(je);else{let ct=u.getViewSubImage(h,je);Ze=ct.viewport,Le===0&&(e.setRenderTargetTextures(x,ct.colorTexture,ct.depthStencilTexture),e.setRenderTarget(x))}let Ne=F[Le];Ne===void 0&&(Ne=new Ft,Ne.layers.enable(Le),Ne.viewport=new xt,F[Le]=Ne),Ne.matrix.fromArray(je.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(je.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),Le===0&&(H.matrix.copy(Ne.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),oe===!0&&H.cameras.push(Ne)}let re=s.enabledFeatures;if(re&&re.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=n.getBinding();let Le=u.getDepthInformation(xe[0]);Le&&Le.isValid&&Le.texture&&m.init(Le,s.renderState)}if(re&&re.includes("camera-access")&&v){e.state.unbindTexture(),u=n.getBinding();for(let Le=0;Le<xe.length;Le++){let je=xe[Le].camera;if(je){let Ze=p[je];Ze||(Ze=new Zs,p[je]=Ze);let Ne=u.getCameraImage(je);Ze.sourceTexture=Ne}}}}for(let xe=0;xe<M.length;xe++){let oe=S[xe],re=M[xe];oe!==null&&re!==void 0&&re.update(oe,K,c||a)}ke&&ke(X,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),y=null}let Be=new $h;Be.setAnimationLoop(ze),this.setAnimationLoop=function(X){ke=X},this.dispose=function(){}}},og=new ut,sd=new Ge;sd.set(-1,0,0,0,1,0,0,0,1);function lg(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,zl(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,T,A,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),d(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),y(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,T,A):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Bt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Bt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let T=e.get(p),A=T.envMap,x=T.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(og.makeRotationFromEuler(x)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(sd),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=A*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Bt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function y(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function cg(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,M){let S=M.program;n.uniformBlockBinding(x,S)}function c(x,M){let S=s[x.id];S===void 0&&(m(x),S=d(x),s[x.id]=S,x.addEventListener("dispose",T));let R=M.program;n.updateUBOMapping(x,R);let _=e.render.frame;r[x.id]!==_&&(h(x),r[x.id]=_)}function d(x){let M=u();x.__bindingPointIndex=M;let S=i.createBuffer(),R=x.__size,_=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,R,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,S),S}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return Fe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){let M=s[x.id],S=x.uniforms,R=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let _=0,w=S.length;_<w;_++){let C=S[_];if(Array.isArray(C))for(let P=0,F=C.length;P<F;P++)f(C[P],_,P,R);else f(C,_,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,M,S,R){if(v(x,M,S,R)===!0){let _=x.__offset,w=x.value;if(Array.isArray(w)){let C=0;for(let P=0;P<w.length;P++){let F=w[P],H=p(F);y(F,x.__data,C),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(C+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else y(w,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,x.__data)}}function y(x,M,S){typeof x=="number"||typeof x=="boolean"?M[0]=x:x.isMatrix3?(M[0]=x.elements[0],M[1]=x.elements[1],M[2]=x.elements[2],M[3]=0,M[4]=x.elements[3],M[5]=x.elements[4],M[6]=x.elements[5],M[7]=0,M[8]=x.elements[6],M[9]=x.elements[7],M[10]=x.elements[8],M[11]=0):ArrayBuffer.isView(x)?M.set(new x.constructor(x.buffer,x.byteOffset,M.length)):x.toArray(M,S)}function v(x,M,S,R){let _=x.value,w=M+"_"+S;if(R[w]===void 0)return typeof _=="number"||typeof _=="boolean"?R[w]=_:ArrayBuffer.isView(_)?R[w]=_.slice():R[w]=_.clone(),!0;{let C=R[w];if(typeof _=="number"||typeof _=="boolean"){if(C!==_)return R[w]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(C.equals(_)===!1)return C.copy(_),!0}}return!1}function m(x){let M=x.uniforms,S=0,R=16;for(let w=0,C=M.length;w<C;w++){let P=Array.isArray(M[w])?M[w]:[M[w]];for(let F=0,H=P.length;F<H;F++){let D=P[F],O=Array.isArray(D.value)?D.value:[D.value];for(let V=0,Y=O.length;V<Y;V++){let ee=O[V],q=p(ee),Z=S%R,ne=Z%q.boundary,Se=Z+ne;S+=ne,Se!==0&&R-Se<q.storage&&(S+=R-Se),D.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=S,S+=q.storage}}}let _=S%R;return _>0&&(S+=R-_),x.__size=S,x.__cache={},this}function p(x){let M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(M.boundary=16,M.storage=x.byteLength):De("WebGLRenderer: Unsupported uniform value type.",x),M}function T(x){let M=x.target;M.removeEventListener("dispose",T);let S=a.indexOf(M.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function A(){for(let x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:A}}var hg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Hn=null;function dg(){return Hn===null&&(Hn=new Ws(hg,16,16,_i,In),Hn.name="DFG_LUT",Hn.minFilter=Ot,Hn.magFilter=Ot,Hn.wrapS=Fn,Hn.wrapT=Fn,Hn.generateMipmaps=!1,Hn.needsUpdate=!0),Hn}var Co=class{constructor(e={}){let{canvas:t=Mh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1,outputBufferType:f=tn}=e;this.isWebGLRenderer=!0;let y;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=n.getContextAttributes().alpha}else y=a;let v=f,m=new Set([qa,Xa,Wa]),p=new Set([tn,Pn,_s,ys,Ha,Ga]),T=new Uint32Array(4),A=new Int32Array(4),x=new L,M=null,S=null,R=[],_=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Cn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,P=!1,F=null,H=null,D=null,O=null;this._outputColorSpace=At;let V=0,Y=0,ee=null,q=-1,Z=null,ne=new xt,Se=new xt,_e=null,ke=new Oe(0),ze=0,Be=t.width,X=t.height,K=1,xe=null,oe=null,re=new xt(0,0,Be,X),Pe=new xt(0,0,Be,X),bt=!1,Le=new os,je=!1,Ze=!1,Ne=new ut,ct=new L,ht=new xt,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Qe=!1;function tt(){return ee===null?K:1}let U=n;function gt(b,I){return t.getContext(b,I)}let We,E,g,B,G,j,ae,le,$,Q,ie,Ce,he,ue,we,Re,He,N,fe,J,se,me,te;try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",at,!1),t.addEventListener("webglcontextrestored",Ye,!1),t.addEventListener("webglcontextcreationerror",St,!1),U===null){let I="webgl2";if(U=gt(I,b),U===null)throw gt(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Te()}catch(b){throw t.removeEventListener("webglcontextlost",at,!1),t.removeEventListener("webglcontextrestored",Ye,!1),t.removeEventListener("webglcontextcreationerror",St,!1),Fe("WebGLRenderer: "+b.message),b}function Te(){We=new ym(U),We.init(),se=new sg(U,We),E=new lm(U,We,e,se),g=new ng(U,We),E.reversedDepthBuffer&&h&&g.buffers.depth.setReversed(!0),H=U.createFramebuffer(),D=U.createFramebuffer(),O=U.createFramebuffer(),B=new vm(U),G=new G0,j=new ig(U,We,g,G,E,se,B),ae=new _m(C),le=new Su(U),me=new am(U,le),$=new bm(U,le,B,me),Q=new Mm(U,$,le,me,B),N=new Sm(U,E,j),we=new cm(G),ie=new H0(C,ae,We,E,me,we),Ce=new lg(C,G),he=new W0,ue=new J0(We),He=new rm(C,ae,g,Q,y,l),Re=new tg(C,Q,E),te=new cg(U,B,E,g),fe=new om(U,We,B),J=new xm(U,We,B),B.programs=ie.programs,C.capabilities=E,C.extensions=We,C.properties=G,C.renderLists=he,C.shadowMap=Re,C.state=g,C.info=B}v!==tn&&(w=new Tm(v,t.width,t.height,o,s,r));let ye=new cc(C,U);this.xr=ye,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let b=We.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=We.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(b){b!==void 0&&(K=b,this.setSize(Be,X,!1))},this.getSize=function(b){return b.set(Be,X)},this.setSize=function(b,I,W=!0){if(ye.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}Be=b,X=I,t.width=Math.floor(b*K),t.height=Math.floor(I*K),W===!0&&(t.style.width=b+"px",t.style.height=I+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,b,I)},this.getDrawingBufferSize=function(b){return b.set(Be*K,X*K).floor()},this.setDrawingBufferSize=function(b,I,W){Be=b,X=I,K=W,t.width=Math.floor(b*W),t.height=Math.floor(I*W),this.setViewport(0,0,b,I)},this.setEffects=function(b){if(v===tn){Fe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let I=0;I<b.length;I++)if(b[I].isOutputPass===!0){De("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(ne)},this.getViewport=function(b){return b.copy(re)},this.setViewport=function(b,I,W,z){b.isVector4?re.set(b.x,b.y,b.z,b.w):re.set(b,I,W,z),g.viewport(ne.copy(re).multiplyScalar(K).round())},this.getScissor=function(b){return b.copy(Pe)},this.setScissor=function(b,I,W,z){b.isVector4?Pe.set(b.x,b.y,b.z,b.w):Pe.set(b,I,W,z),g.scissor(Se.copy(Pe).multiplyScalar(K).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(b){g.setScissorTest(bt=b)},this.setOpaqueSort=function(b){xe=b},this.setTransparentSort=function(b){oe=b},this.getClearColor=function(b){return b.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor(...arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha(...arguments)},this.clear=function(b=!0,I=!0,W=!0){let z=0;if(b){let k=!1;if(ee!==null){let ce=ee.texture.format;k=m.has(ce)}if(k){let ce=ee.texture.type,Me=p.has(ce),de=He.getClearColor(),Ae=He.getClearAlpha(),ve=de.r,Ie=de.g,Xe=de.b;Me?(T[0]=ve,T[1]=Ie,T[2]=Xe,T[3]=Ae,U.clearBufferuiv(U.COLOR,0,T)):(A[0]=ve,A[1]=Ie,A[2]=Xe,A[3]=Ae,U.clearBufferiv(U.COLOR,0,A))}else z|=U.COLOR_BUFFER_BIT}I&&(z|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&U.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),F=b},this.dispose=function(){t.removeEventListener("webglcontextlost",at,!1),t.removeEventListener("webglcontextrestored",Ye,!1),t.removeEventListener("webglcontextcreationerror",St,!1),He.dispose(),he.dispose(),ue.dispose(),G.dispose(),ae.dispose(),Q.dispose(),me.dispose(),te.dispose(),ie.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",xn),ye.removeEventListener("sessionend",rn),Tt.stop()};function at(b){b.preventDefault(),Ol("WebGLRenderer: Context Lost."),P=!0}function Ye(){Ol("WebGLRenderer: Context Restored."),P=!1;let b=B.autoReset,I=Re.enabled,W=Re.autoUpdate,z=Re.needsUpdate,k=Re.type;Te(),B.autoReset=b,Re.enabled=I,Re.autoUpdate=W,Re.needsUpdate=z,Re.type=k}function St(b){Fe("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function vt(b){let I=b.target;I.removeEventListener("dispose",vt),Ar(I)}function Ar(b){Dn(b),G.remove(b)}function Dn(b){let I=G.get(b).programs;I!==void 0&&(I.forEach(function(W){ie.releaseProgram(W)}),b.isShaderMaterial&&ie.releaseShaderCache(b))}this.renderBufferDirect=function(b,I,W,z,k,ce){I===null&&(I=Xt);let Me=k.isMesh&&k.matrixWorld.determinantAffine()<0,de=Qt(b,I,W,z,k);g.setMaterial(z,Me);let Ae=W.index,ve=1;if(z.wireframe===!0){if(Ae=$.getWireframeAttribute(W),Ae===void 0)return;ve=2}let Ie=W.drawRange,Xe=W.attributes.position,be=Ie.start*ve,st=(Ie.start+Ie.count)*ve;ce!==null&&(be=Math.max(be,ce.start*ve),st=Math.min(st,(ce.start+ce.count)*ve)),Ae!==null?(be=Math.max(be,0),st=Math.min(st,Ae.count)):Xe!=null&&(be=Math.max(be,0),st=Math.min(st,Xe.count));let Et=st-be;if(Et<0||Et===1/0)return;me.setup(k,z,de,W,Ae);let _t,dt=fe;if(Ae!==null&&(_t=le.get(Ae),dt=J,dt.setIndex(_t)),k.isMesh)z.wireframe===!0?(g.setLineWidth(z.wireframeLinewidth*tt()),dt.setMode(U.LINES)):dt.setMode(U.TRIANGLES);else if(k.isLine){let zt=z.linewidth;zt===void 0&&(zt=1),g.setLineWidth(zt*tt()),k.isLineSegments?dt.setMode(U.LINES):k.isLineLoop?dt.setMode(U.LINE_LOOP):dt.setMode(U.LINE_STRIP)}else k.isPoints?dt.setMode(U.POINTS):k.isSprite&&dt.setMode(U.TRIANGLES);if(k.isBatchedMesh)if(We.get("WEBGL_multi_draw"))dt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let zt=k._multiDrawStarts,Ee=k._multiDrawCounts,Yt=k._multiDrawCount,nt=Ae?le.get(Ae).bytesPerElement:1,fn=G.get(z).currentProgram.getUniforms();for(let Nn=0;Nn<Yt;Nn++)fn.setValue(U,"_gl_DrawID",Nn),dt.render(zt[Nn]/nt,Ee[Nn])}else if(k.isInstancedMesh)dt.renderInstances(be,Et,k.count);else if(W.isInstancedBufferGeometry){let zt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ee=Math.min(W.instanceCount,zt);dt.renderInstances(be,Et,Ee)}else dt.render(be,Et)};function sn(b,I,W,z){F!==null&&b.isNodeMaterial&&F.setObject(z,b),je===!0&&we.setState(b,W,!1),b.transparent===!0&&b.side===_n&&b.forceSinglePass===!1?(b.side=Bt,b.needsUpdate=!0,bi(b,I,z),b.side=kn,b.needsUpdate=!0,bi(b,I,z),b.side=_n):bi(b,I,z)}this.compile=function(b,I,W=null){W===null&&(W=b),F!==null&&F.renderStart(b,I,W),S=ue.get(W),S.init(I),_.push(S),W.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(S.pushLight(k),k.castShadow&&S.pushShadow(k))}),b!==W&&b.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(S.pushLight(k),k.castShadow&&S.pushShadow(k))}),S.setupLights(),F!==null&&F.updateLights(S.state.lightsArray),Ze=this.localClippingEnabled,je=we.init(this.clippingPlanes,Ze),je===!0&&we.setGlobalState(this.clippingPlanes,I),F!==null&&Re.render(S.state.shadowsArray,W,I);let z=new Set;return b.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let ce=k.material;if(ce)if(Array.isArray(ce))for(let Me=0;Me<ce.length;Me++){let de=ce[Me];sn(de,W,I,k),z.add(de)}else sn(ce,W,I,k),z.add(ce)}),S=_.pop(),F!==null&&F.renderEnd(),z},this.compileAsync=function(b,I,W=null){let z=this.compile(b,I,W);return new Promise(k=>{function ce(){if(z.forEach(function(Me){let Ae=G.get(Me).currentProgram;(Ae===void 0||Ae.isReady())&&z.delete(Me)}),z.size===0){k(b);return}setTimeout(ce,10)}We.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let kt=null;function Cr(b){kt&&kt(b)}function xn(){Tt.stop()}function rn(){Tt.start()}let Tt=new $h;Tt.setAnimationLoop(Cr),typeof self<"u"&&Tt.setContext(self),this.setAnimationLoop=function(b){kt=b,ye.setAnimationLoop(b),b===null?Tt.stop():Tt.start()},ye.addEventListener("sessionstart",xn),ye.addEventListener("sessionend",rn),this.render=function(b,I){if(I!==void 0&&I.isCamera!==!0){Fe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;F!==null&&F.renderStart(b,I);let W=ye.enabled===!0&&ye.isPresenting===!0,z=w!==null&&(ee===null||W)&&w.begin(C,ee);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(I),I=ye.getCamera()),b.isScene===!0&&b.onBeforeRender(C,b,I,ee),S=ue.get(b,_.length),S.init(I),S.state.textureUnits=j.getTextureUnits(),_.push(S),Ne.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Le.setFromProjectionMatrix(Ne,En,I.reversedDepth),Ze=this.localClippingEnabled,je=we.init(this.clippingPlanes,Ze),M=he.get(b,R.length),M.init(),R.push(M),ye.enabled===!0&&ye.isPresenting===!0){let Me=C.xr.getDepthSensingMesh();Me!==null&&Li(Me,I,-1/0,C.sortObjects)}Li(b,I,0,C.sortObjects),M.finish(),F!==null&&F.updateLights(S.state.lightsArray),C.sortObjects===!0&&M.sort(xe,oe),Qe=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,Qe&&He.addToRenderList(M,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),je===!0&&we.beginShadows();let k=S.state.shadowsArray;if(Re.render(k,b,I),je===!0&&we.endShadows(),(z&&w.hasRenderPass())===!1){let Me=M.opaque,de=M.transmissive;if(S.setupLights(),I.isArrayCamera){let Ae=I.cameras;if(de.length>0)for(let ve=0,Ie=Ae.length;ve<Ie;ve++){let Xe=Ae[ve];Fo(Me,de,b,Xe)}Qe&&He.render(b);for(let ve=0,Ie=Ae.length;ve<Ie;ve++){let Xe=Ae[ve];vn(M,b,Xe,Xe.viewport)}}else de.length>0&&Fo(Me,de,b,I),Qe&&He.render(b),vn(M,b,I)}ee!==null&&Y===0&&(j.updateMultisampleRenderTarget(ee),j.updateRenderTargetMipmap(ee)),z&&w.end(C),b.isScene===!0&&b.onAfterRender(C,b,I),me.resetDefaultState(),q=-1,Z=null,_.pop(),_.length>0?(S=_[_.length-1],j.setTextureUnits(S.state.textureUnits),je===!0&&we.setGlobalState(C.clippingPlanes,S.state.camera)):S=null,R.pop(),R.length>0?M=R[R.length-1]:M=null,F!==null&&F.renderEnd()};function Li(b,I,W,z){if(b.visible===!1)return;if(b.layers.test(I.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(I);else if(b.isLightProbeGrid)S.pushLightProbeGrid(b);else if(b.isLight)S.pushLight(b),b.castShadow&&S.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(Le)){z&&ht.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ne);let Me=Q.update(b),de=b.material;de.visible&&M.push(b,Me,de,W,ht.z,null,I)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(Le))){let Me=Q.update(b),de=b.material;if(z&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ht.copy(b.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),ht.copy(Me.boundingSphere.center)),ht.applyMatrix4(b.matrixWorld).applyMatrix4(Ne)),Array.isArray(de)){let Ae=Me.groups;for(let ve=0,Ie=Ae.length;ve<Ie;ve++){let Xe=Ae[ve],be=de[Xe.materialIndex];be&&be.visible&&M.push(b,Me,be,W,ht.z,Xe,I)}}else de.visible&&M.push(b,Me,de,W,ht.z,null,I)}}let ce=b.children;for(let Me=0,de=ce.length;Me<de;Me++)Li(ce[Me],I,W,z)}function vn(b,I,W,z){let{opaque:k,transmissive:ce,transparent:Me}=b;S.setupLightsView(W),je===!0&&we.setGlobalState(C.clippingPlanes,W),z&&g.viewport(ne.copy(z)),k.length>0&&qt(k,I,W),ce.length>0&&qt(ce,I,W),Me.length>0&&qt(Me,I,W),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function Fo(b,I,W,z){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[z.id]===void 0){let be=We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[z.id]=new en(1,1,{generateMipmaps:!0,type:be?In:tn,minFilter:mi,samples:Math.max(4,E.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ke.workingColorSpace})}let ce=S.state.transmissionRenderTarget[z.id],Me=z.viewport||ne;ce.setSize(Me.z*C.transmissionResolutionScale,Me.w*C.transmissionResolutionScale);let de=C.getRenderTarget(),Ae=C.getActiveCubeFace(),ve=C.getActiveMipmapLevel();C.setRenderTarget(ce),C.getClearColor(ke),ze=C.getClearAlpha(),ze<1&&C.setClearColor(16777215,.5),C.clear(),Qe&&He.render(W);let Ie=C.toneMapping;C.toneMapping=Cn;let Xe=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),S.setupLightsView(z),je===!0&&we.setGlobalState(C.clippingPlanes,z),qt(b,W,z),j.updateMultisampleRenderTarget(ce),j.updateRenderTargetMipmap(ce),We.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let st=0,Et=I.length;st<Et;st++){let _t=I[st],{object:dt,geometry:zt,material:Ee,group:Yt}=_t;if(Ee.side===_n&&dt.layers.test(z.layers)){let nt=Ee.side;Ee.side=Bt,Ee.needsUpdate=!0,jt(dt,W,z,zt,Ee,Yt),Ee.side=nt,Ee.needsUpdate=!0,be=!0}}be===!0&&(j.updateMultisampleRenderTarget(ce),j.updateRenderTargetMipmap(ce))}C.setRenderTarget(de,Ae,ve),C.setClearColor(ke,ze),Xe!==void 0&&(z.viewport=Xe),C.toneMapping=Ie}function qt(b,I,W){let z=I.isScene===!0?I.overrideMaterial:null;for(let k=0,ce=b.length;k<ce;k++){let Me=b[k],{object:de,geometry:Ae,group:ve}=Me,Ie=Me.material;Ie.allowOverride===!0&&z!==null&&(Ie=z),de.layers.test(W.layers)&&jt(de,I,W,Ae,Ie,ve)}}function jt(b,I,W,z,k,ce){F!==null&&k.isNodeMaterial&&F.setObject(b,k),b.onBeforeRender(C,I,W,z,k,ce),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),k.onBeforeRender(C,I,W,z,b,ce),k.transparent===!0&&k.side===_n&&k.forceSinglePass===!1?(k.side=Bt,k.needsUpdate=!0,C.renderBufferDirect(W,I,z,k,b,ce),k.side=kn,k.needsUpdate=!0,C.renderBufferDirect(W,I,z,k,b,ce),k.side=_n):C.renderBufferDirect(W,I,z,k,b,ce),b.onAfterRender(C,I,W,z,k,ce)}function bi(b,I,W){I.isScene!==!0&&(I=Xt);let z=G.get(b),k=S.state.lights,ce=S.state.shadowsArray,Me=k.state.version,de=ie.getParameters(b,k.state,ce,I,W,S.state.lightProbeGridArray),Ae=ie.getProgramCacheKey(de),ve=z.programs;z.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?I.environment:null,z.fog=I.fog;let Ie=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;z.envMap=ae.get(b.envMap||z.environment,Ie),z.envMapRotation=z.environment!==null&&b.envMap===null?I.environmentRotation:b.envMapRotation,ve===void 0&&(b.addEventListener("dispose",vt),ve=new Map,z.programs=ve);let Xe=ve.get(Ae);if(Xe!==void 0){if(z.currentProgram===Xe&&z.lightsStateVersion===Me)return Oo(b,de),Xe}else de.uniforms=ie.getUniforms(b),F!==null&&b.isNodeMaterial&&F.build(b,W,de),b.onBeforeCompile(de,C),Xe=ie.acquireProgram(de,Ae),ve.set(Ae,Xe),z.uniforms=de.uniforms;let be=z.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(be.clippingPlanes=we.uniform),Oo(b,de),z.needsLights=Ln(b),z.lightsStateVersion=Me,z.needsLights&&(be.ambientLightColor.value=k.state.ambient,be.lightProbe.value=k.state.probe,be.sunLights.value=k.state.sun,be.sunLightShadows.value=k.state.sunShadow,be.directionalLights.value=k.state.directional,be.directionalLightShadows.value=k.state.directionalShadow,be.spotLights.value=k.state.spot,be.spotLightShadows.value=k.state.spotShadow,be.rectAreaLights.value=k.state.rectArea,be.ltc_1.value=k.state.rectAreaLTC1,be.ltc_2.value=k.state.rectAreaLTC2,be.pointLights.value=k.state.point,be.pointLightShadows.value=k.state.pointShadow,be.hemisphereLights.value=k.state.hemi,be.sunShadowMatrix.value=k.state.sunShadowMatrix,be.sunShadowCascade.value=k.state.sunShadowCascade,be.directionalShadowMatrix.value=k.state.directionalShadowMatrix,be.spotLightMatrix.value=k.state.spotLightMatrix,be.spotLightMap.value=k.state.spotLightMap,be.pointShadowMatrix.value=k.state.pointShadowMatrix),z.lightProbeGrid=S.state.lightProbeGridArray.length>0,z.currentProgram=Xe,z.uniformsList=null,Xe}function Sn(b){if(b.uniformsList===null){let I=b.currentProgram.getUniforms();b.uniformsList=Ss.seqWithValue(I.seq,b.uniforms)}return b.uniformsList}function Oo(b,I){let W=G.get(b);W.outputColorSpace=I.outputColorSpace,W.batching=I.batching,W.batchingColor=I.batchingColor,W.instancing=I.instancing,W.instancingColor=I.instancingColor,W.instancingMorph=I.instancingMorph,W.skinning=I.skinning,W.morphTargets=I.morphTargets,W.morphNormals=I.morphNormals,W.morphColors=I.morphColors,W.morphTargetsCount=I.morphTargetsCount,W.numClippingPlanes=I.numClippingPlanes,W.numIntersection=I.numClipIntersection,W.vertexAlphas=I.vertexAlphas,W.vertexTangents=I.vertexTangents,W.toneMapping=I.toneMapping}function un(b,I){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;x.setFromMatrixPosition(I.matrixWorld);for(let W=0,z=b.length;W<z;W++){let k=b[W];if(k.texture!==null&&k.boundingBox.containsPoint(x))return k}return null}function Qt(b,I,W,z,k){I.isScene!==!0&&(I=Xt),j.resetTextureUnits();let ce=I.fog,Me=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?I.environment:null,de=ee===null?C.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Ke.workingColorSpace,Ae=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,ve=ae.get(z.envMap||Me,Ae),Ie=z.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Xe=!!W.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),be=!!W.morphAttributes.position,st=!!W.morphAttributes.normal,Et=!!W.morphAttributes.color,_t=Cn;z.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(_t=C.toneMapping);let dt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,zt=dt!==void 0?dt.length:0,Ee=G.get(z),Yt=S.state.lights;if(je===!0&&(Ze===!0||b!==Z)){let pt=b===Z&&z.id===q;we.setState(z,b,pt)}let nt=!1;z.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==Yt.state.version||Ee.outputColorSpace!==de||k.isBatchedMesh&&Ee.batching===!1||!k.isBatchedMesh&&Ee.batching===!0||k.isBatchedMesh&&Ee.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&Ee.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&Ee.instancing===!1||!k.isInstancedMesh&&Ee.instancing===!0||k.isSkinnedMesh&&Ee.skinning===!1||!k.isSkinnedMesh&&Ee.skinning===!0||k.isInstancedMesh&&Ee.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ee.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ee.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ee.instancingMorph===!1&&k.morphTexture!==null||Ee.envMap!==ve||z.fog===!0&&Ee.fog!==ce||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==we.numPlanes||Ee.numIntersection!==we.numIntersection)||Ee.vertexAlphas!==Ie||Ee.vertexTangents!==Xe||Ee.morphTargets!==be||Ee.morphNormals!==st||Ee.morphColors!==Et||Ee.toneMapping!==_t||Ee.morphTargetsCount!==zt||!!Ee.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(nt=!0):(nt=!0,Ee.__version=z.version);let fn=Ee.currentProgram;nt===!0&&(fn=bi(z,I,k),F&&z.isNodeMaterial&&F.onUpdateProgram(z,fn,Ee));let Nn=!1,$n=!1,Ni=!1,lt=fn.getUniforms(),Mt=Ee.uniforms;if(g.useProgram(fn.program)&&(Nn=!0,$n=!0,Ni=!0),z.id!==q&&(q=z.id,$n=!0),Ee.needsLights){let pt=un(S.state.lightProbeGridArray,k);Ee.lightProbeGrid!==pt&&(Ee.lightProbeGrid=pt,$n=!0)}if(Nn||Z!==b){g.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),lt.setValue(U,"projectionMatrix",b.projectionMatrix),lt.setValue(U,"viewMatrix",b.matrixWorldInverse);let ei=lt.map.cameraPosition;ei!==void 0&&ei.setValue(U,ct.setFromMatrixPosition(b.matrixWorld)),E.logarithmicDepthBuffer&&lt.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&lt.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),Z!==b&&(Z=b,$n=!0,Ni=!0)}if(Ee.needsLights&&(Yt.state.sunShadowMap.length>0&&lt.setValue(U,"sunShadowMap",Yt.state.sunShadowMap,j),Yt.state.directionalShadowMap.length>0&&lt.setValue(U,"directionalShadowMap",Yt.state.directionalShadowMap,j),Yt.state.spotShadowMap.length>0&&lt.setValue(U,"spotShadowMap",Yt.state.spotShadowMap,j),Yt.state.pointShadowMap.length>0&&lt.setValue(U,"pointShadowMap",Yt.state.pointShadowMap,j)),k.isSkinnedMesh){lt.setOptional(U,k,"bindMatrix"),lt.setOptional(U,k,"bindMatrixInverse");let pt=k.skeleton;pt&&(pt.boneTexture===null&&pt.computeBoneTexture(),lt.setValue(U,"boneTexture",pt.boneTexture,j))}k.isBatchedMesh&&(lt.setOptional(U,k,"batchingTexture"),lt.setValue(U,"batchingTexture",k._matricesTexture,j),lt.setOptional(U,k,"batchingIdTexture"),lt.setValue(U,"batchingIdTexture",k._indirectTexture,j),lt.setOptional(U,k,"batchingColorTexture"),k._colorsTexture!==null&&lt.setValue(U,"batchingColorTexture",k._colorsTexture,j));let Qn=W.morphAttributes;if((Qn.position!==void 0||Qn.normal!==void 0||Qn.color!==void 0)&&N.update(k,W,fn),($n||Ee.receiveShadow!==k.receiveShadow)&&(Ee.receiveShadow=k.receiveShadow,lt.setValue(U,"receiveShadow",k.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&I.environment!==null&&(Mt.envMapIntensity.value=I.environmentIntensity),Mt.dfgLUT!==void 0&&(Mt.dfgLUT.value=dg()),$n){if(lt.setValue(U,"toneMappingExposure",C.toneMappingExposure),Ee.needsLights&&Pr(Mt,Ni),ce&&z.fog===!0&&Ce.refreshFogUniforms(Mt,ce),Ce.refreshMaterialUniforms(Mt,z,K,X,S.state.transmissionRenderTarget[b.id]),Ee.needsLights&&Ee.lightProbeGrid){let pt=Ee.lightProbeGrid;Mt.probesSH.value=pt.texture,Mt.probesMin.value.copy(pt.boundingBox.min),Mt.probesMax.value.copy(pt.boundingBox.max),Mt.probesResolution.value.copy(pt.resolution)}Ss.upload(U,Sn(Ee),Mt,j)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Ss.upload(U,Sn(Ee),Mt,j),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&lt.setValue(U,"center",k.center),lt.setValue(U,"modelViewMatrix",k.modelViewMatrix),lt.setValue(U,"normalMatrix",k.normalMatrix),lt.setValue(U,"modelMatrix",k.matrixWorld),z.uniformsGroups!==void 0){let pt=z.uniformsGroups;for(let ei=0,Ui=pt.length;ei<Ui;ei++){let pc=pt[ei];te.update(pc,fn),te.bind(pc,fn)}}return fn}function Pr(b,I){b.ambientLightColor.needsUpdate=I,b.lightProbe.needsUpdate=I,b.sunLights.needsUpdate=I,b.sunLightShadows.needsUpdate=I,b.directionalLights.needsUpdate=I,b.directionalLightShadows.needsUpdate=I,b.pointLights.needsUpdate=I,b.pointLightShadows.needsUpdate=I,b.spotLights.needsUpdate=I,b.spotLightShadows.needsUpdate=I,b.rectAreaLights.needsUpdate=I,b.hemisphereLights.needsUpdate=I}function Ln(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(b,I,W){let z=G.get(b);z.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),G.get(b.texture).__webglTexture=I,G.get(b.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:W,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,I){let W=G.get(b);W.__webglFramebuffer=I,W.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(b,I=0,W=0){ee=b,V=I,Y=W;let z=null,k=!1,ce=!1;if(b){let de=G.get(b);if(de.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(U.FRAMEBUFFER,de.__webglFramebuffer),ne.copy(b.viewport),Se.copy(b.scissor),_e=b.scissorTest,g.viewport(ne),g.scissor(Se),g.setScissorTest(_e),q=-1;return}else if(de.__webglFramebuffer===void 0)j.setupRenderTarget(b);else if(de.__hasExternalTextures)j.rebindTextures(b,G.get(b.texture).__webglTexture,G.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Ie=b.depthTexture;if(de.__boundDepthTexture!==Ie){if(Ie!==null&&G.has(Ie)&&(b.width!==Ie.image.width||b.height!==Ie.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(b)}}let Ae=b.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(ce=!0);let ve=G.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ve[I])?z=ve[I][W]:z=ve[I],k=!0):b.samples>0&&j.useMultisampledRTT(b)===!1?z=G.get(b).__webglMultisampledFramebuffer:Array.isArray(ve)?z=ve[W]:z=ve,ne.copy(b.viewport),Se.copy(b.scissor),_e=b.scissorTest}else ne.copy(re).multiplyScalar(K).floor(),Se.copy(Pe).multiplyScalar(K).floor(),_e=bt;if(W!==0&&(z=H),g.bindFramebuffer(U.FRAMEBUFFER,z)&&g.drawBuffers(b,z),g.viewport(ne),g.scissor(Se),g.setScissorTest(_e),k){let de=G.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+I,de.__webglTexture,W)}else if(ce){let de=I;for(let Ae=0;Ae<b.textures.length;Ae++){let ve=G.get(b.textures[Ae]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ae,ve.__webglTexture,W,de)}}else if(b!==null&&W!==0){let de=G.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,de.__webglTexture,W)}q=-1};function Bo(b){let I=G.get(b);return(I.__readFormat!==b.format||I.__readType!==b.type)&&(I.__readFormat=b.format,I.__readType=b.type,I.__formatReadable=E.textureFormatReadable(b.format),I.__typeReadable=E.textureTypeReadable(b.type)),I}this.readRenderTargetPixels=function(b,I,W,z,k,ce,Me,de=0){if(!(b&&b.isWebGLRenderTarget)){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=G.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Me!==void 0&&(Ae=Ae[Me]),Ae){g.bindFramebuffer(U.FRAMEBUFFER,Ae);try{let ve=b.textures[de],Ie=ve.format,Xe=ve.type;b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+de);let be=Bo(ve);if(be.__formatReadable===!1){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(be.__typeReadable===!1){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=b.width-z&&W>=0&&W<=b.height-k&&U.readPixels(I,W,z,k,se.convert(Ie),se.convert(Xe),ce)}finally{let ve=ee!==null?G.get(ee).__webglFramebuffer:null;g.bindFramebuffer(U.FRAMEBUFFER,ve)}}},this.readRenderTargetPixelsAsync=async function(b,I,W,z,k,ce,Me,de=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=G.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Me!==void 0&&(Ae=Ae[Me]),Ae)if(I>=0&&I<=b.width-z&&W>=0&&W<=b.height-k){g.bindFramebuffer(U.FRAMEBUFFER,Ae);let ve=b.textures[de],Ie=ve.format,Xe=ve.type;b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+de);let be=Bo(ve);if(be.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(be.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let st=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,st),U.bufferData(U.PIXEL_PACK_BUFFER,ce.byteLength,U.STREAM_READ),U.readPixels(I,W,z,k,se.convert(Ie),se.convert(Xe),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let Et=ee!==null?G.get(ee).__webglFramebuffer:null;g.bindFramebuffer(U.FRAMEBUFFER,Et);let _t=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Th(U,_t,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,st),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ce),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(st),U.deleteSync(_t),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,I=null,W=0){let z=Math.pow(2,-W),k=Math.floor(b.image.width*z),ce=Math.floor(b.image.height*z),Me=I!==null?I.x:0,de=I!==null?I.y:0;j.setTexture2D(b,0),U.copyTexSubImage2D(U.TEXTURE_2D,W,0,0,Me,de,k,ce),g.unbindTexture()},this.copyTextureToTexture=function(b,I,W=null,z=null,k=0,ce=0){let Me,de,Ae,ve,Ie,Xe,be,st,Et,_t=b.isCompressedTexture?b.mipmaps[ce]:b.image;if(W!==null)Me=W.max.x-W.min.x,de=W.max.y-W.min.y,Ae=W.isBox3?W.max.z-W.min.z:1,ve=W.min.x,Ie=W.min.y,Xe=W.isBox3?W.min.z:0;else{let Mt=Math.pow(2,-k);Me=Math.floor(_t.width*Mt),de=Math.floor(_t.height*Mt),b.isDataArrayTexture?Ae=_t.depth:b.isData3DTexture?Ae=Math.floor(_t.depth*Mt):Ae=1,ve=0,Ie=0,Xe=0}z!==null?(be=z.x,st=z.y,Et=z.z):(be=0,st=0,Et=0);let dt=se.convert(I.format),zt=se.convert(I.type),Ee;I.isData3DTexture?(j.setTexture3D(I,0),Ee=U.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(j.setTexture2DArray(I,0),Ee=U.TEXTURE_2D_ARRAY):(j.setTexture2D(I,0),Ee=U.TEXTURE_2D),g.activeTexture(U.TEXTURE0),g.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,I.flipY),g.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),g.pixelStorei(U.UNPACK_ALIGNMENT,I.unpackAlignment);let Yt=g.getParameter(U.UNPACK_ROW_LENGTH),nt=g.getParameter(U.UNPACK_IMAGE_HEIGHT),fn=g.getParameter(U.UNPACK_SKIP_PIXELS),Nn=g.getParameter(U.UNPACK_SKIP_ROWS),$n=g.getParameter(U.UNPACK_SKIP_IMAGES);g.pixelStorei(U.UNPACK_ROW_LENGTH,_t.width),g.pixelStorei(U.UNPACK_IMAGE_HEIGHT,_t.height),g.pixelStorei(U.UNPACK_SKIP_PIXELS,ve),g.pixelStorei(U.UNPACK_SKIP_ROWS,Ie),g.pixelStorei(U.UNPACK_SKIP_IMAGES,Xe);let Ni=b.isDataArrayTexture||b.isData3DTexture,lt=I.isDataArrayTexture||I.isData3DTexture;if(b.isDepthTexture){let Mt=G.get(b),Qn=G.get(I),pt=G.get(Mt.__renderTarget),ei=G.get(Qn.__renderTarget);g.bindFramebuffer(U.READ_FRAMEBUFFER,pt.__webglFramebuffer),g.bindFramebuffer(U.DRAW_FRAMEBUFFER,ei.__webglFramebuffer);for(let Ui=0;Ui<Ae;Ui++)Ni&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,G.get(b).__webglTexture,k,Xe+Ui),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,G.get(I).__webglTexture,ce,Et+Ui)),U.blitFramebuffer(ve,Ie,Me,de,be,st,Me,de,U.DEPTH_BUFFER_BIT,U.NEAREST);g.bindFramebuffer(U.READ_FRAMEBUFFER,null),g.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(k!==0||b.isRenderTargetTexture||G.has(b)){let Mt=G.get(b),Qn=G.get(I);g.bindFramebuffer(U.READ_FRAMEBUFFER,D),g.bindFramebuffer(U.DRAW_FRAMEBUFFER,O);for(let pt=0;pt<Ae;pt++)Ni?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Mt.__webglTexture,k,Xe+pt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Mt.__webglTexture,k),lt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Qn.__webglTexture,ce,Et+pt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Qn.__webglTexture,ce),k!==0?U.blitFramebuffer(ve,Ie,Me,de,be,st,Me,de,U.COLOR_BUFFER_BIT,U.NEAREST):lt?U.copyTexSubImage3D(Ee,ce,be,st,Et+pt,ve,Ie,Me,de):U.copyTexSubImage2D(Ee,ce,be,st,ve,Ie,Me,de);g.bindFramebuffer(U.READ_FRAMEBUFFER,null),g.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else lt?b.isDataTexture||b.isData3DTexture?U.texSubImage3D(Ee,ce,be,st,Et,Me,de,Ae,dt,zt,_t.data):I.isCompressedArrayTexture?U.compressedTexSubImage3D(Ee,ce,be,st,Et,Me,de,Ae,dt,_t.data):U.texSubImage3D(Ee,ce,be,st,Et,Me,de,Ae,dt,zt,_t):b.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ce,be,st,Me,de,dt,zt,_t.data):b.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ce,be,st,_t.width,_t.height,dt,_t.data):U.texSubImage2D(U.TEXTURE_2D,ce,be,st,Me,de,dt,zt,_t);g.pixelStorei(U.UNPACK_ROW_LENGTH,Yt),g.pixelStorei(U.UNPACK_IMAGE_HEIGHT,nt),g.pixelStorei(U.UNPACK_SKIP_PIXELS,fn),g.pixelStorei(U.UNPACK_SKIP_ROWS,Nn),g.pixelStorei(U.UNPACK_SKIP_IMAGES,$n),ce===0&&I.generateMipmaps&&U.generateMipmap(Ee),g.unbindTexture()},this.initRenderTarget=function(b){G.get(b).__webglFramebuffer===void 0&&j.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?j.setTextureCube(b,0):b.isData3DTexture?j.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?j.setTexture2DArray(b,0):j.setTexture2D(b,0),g.unbindTexture()},this.resetState=function(){V=0,Y=0,ee=null,g.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}};var ad={type:"change"},dc={type:"start"},ld={type:"end"},Do=new as,od=new ln,ug=Math.cos(70*$t.DEG2RAD),It=new L,nn=2*Math.PI,ot={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},hc=1e-6,Lo=class extends cr{constructor(e,t=null){super(e,t),this.state=ot.NONE,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ui.ROTATE,MIDDLE:ui.DOLLY,RIGHT:ui.PAN},this.touches={ONE:fi.ROTATE,TWO:fi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new Jt,this._lastTargetPosition=new L,this._quat=new Jt().setFromUnitVectors(e.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Kn,this._sphericalDelta=new Kn,this._scale=1,this._panOffset=new L,this._rotateStart=new ge,this._rotateEnd=new ge,this._rotateDelta=new ge,this._panStart=new ge,this._panEnd=new ge,this._panDelta=new ge,this._dollyStart=new ge,this._dollyEnd=new ge,this._dollyDelta=new ge,this._dollyDirection=new L,this._mouse=new ge,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=pg.bind(this),this._onPointerDown=fg.bind(this),this._onPointerUp=mg.bind(this),this._onContextMenu=Sg.bind(this),this._onMouseWheel=yg.bind(this),this._onKeyDown=bg.bind(this),this._onTouchStart=xg.bind(this),this._onTouchMove=vg.bind(this),this._onMouseDown=gg.bind(this),this._onMouseMove=_g.bind(this),this._interceptControlDown=Mg.bind(this),this._interceptControlUp=wg.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ot.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ad),this.update(),this.state=ot.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;It.copy(t).sub(this.target),It.applyQuaternion(this._quat),this._spherical.setFromVector3(It),this.autoRotate&&this.state===ot.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=nn:n>Math.PI&&(n-=nn),s<-Math.PI?s+=nn:s>Math.PI&&(s-=nn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(It.setFromSpherical(this._spherical),It.applyQuaternion(this._quatInverse),t.copy(this.target).add(It),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=It.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new L(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new L(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=It.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Do.origin.copy(this.object.position),Do.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Do.direction))<ug?this.object.lookAt(this.target):(od.setFromNormalAndCoplanarPoint(this.object.up,this.target),Do.intersectPlane(od,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>hc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>hc||this._lastTargetPosition.distanceToSquared(this.target)>hc?(this.dispatchEvent(ad),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?nn/60*this.autoRotateSpeed*e:nn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){It.setFromMatrixColumn(t,0),It.multiplyScalar(-e),this._panOffset.add(It)}_panUp(e,t){this.screenSpacePanning===!0?It.setFromMatrixColumn(t,1):(It.setFromMatrixColumn(t,0),It.crossVectors(this.object.up,It)),It.multiplyScalar(e),this._panOffset.add(It)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;It.copy(s).sub(this.target);let r=It.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(nn*this._rotateDelta.x/t.clientHeight),this._rotateUp(nn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(nn*this._rotateDelta.x/t.clientHeight),this._rotateUp(nn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ge,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function fg(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function pg(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function mg(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ld),this.state=ot.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function gg(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ui.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ot.DOLLY;break;case ui.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ot.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ot.ROTATE}break;case ui.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ot.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ot.PAN}break;default:this.state=ot.NONE}this.state!==ot.NONE&&this.dispatchEvent(dc)}function _g(i){switch(this.state){case ot.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ot.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ot.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function yg(i){this.enabled===!1||this.enableZoom===!1||this.state!==ot.NONE||(i.preventDefault(),this.dispatchEvent(dc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(ld))}function bg(i){this.enabled!==!1&&this._handleKeyDown(i)}function xg(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case fi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ot.TOUCH_ROTATE;break;case fi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ot.TOUCH_PAN;break;default:this.state=ot.NONE}break;case 2:switch(this.touches.TWO){case fi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ot.TOUCH_DOLLY_PAN;break;case fi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ot.TOUCH_DOLLY_ROTATE;break;default:this.state=ot.NONE}break;default:this.state=ot.NONE}this.state!==ot.NONE&&this.dispatchEvent(dc)}function vg(i){switch(this._trackPointer(i),this.state){case ot.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ot.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ot.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ot.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ot.NONE}}function Sg(i){this.enabled!==!1&&i.preventDefault()}function Mg(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function wg(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var No=class extends Ti{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new mn;e.deleteAttribute("uv");let t=new et({side:Bt}),n=new et,s=new lr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Ue(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new qs(e,n,6),o=new Nt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Ue(e,ws(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Ue(e,ws(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let d=new Ue(e,ws(17));d.position.set(14.904,12.198,-1.832),d.scale.set(.15,4.265,6.331),this.add(d);let u=new Ue(e,ws(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let h=new Ue(e,ws(20));h.position.set(3.235,11.486,-12.541),h.scale.set(2.5,2,.1),this.add(h);let f=new Ue(e,ws(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function ws(i){return new ir({color:0,emissive:16777215,emissiveIntensity:i})}function yi(i){let e=i.points.map(([t,n])=>new ge(Math.max(1e-4,t),n));return new $s(e,i.segments??24)}function Di(i){let e=i.points.map(([s,r,a])=>new L(s,r,a)),t=new ls(e,i.closed??!1),n=Math.max(8,i.points.length*6);return new tr(t,n,i.radius??.05,i.radialSegments??8,i.closed??!1)}function Tg(i){let e=2166136261;for(let t=0;t<i.length;t+=1)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function it(i,e,t){if(typeof i=="number")return i;if(i&&typeof i=="object"){let n=i;for(let s of e)if(typeof n[s]=="number")return n[s]}return t}function Eg(i){let e=/^#[0-9a-f]{3}$/i.test(i)?"#"+i.slice(1).split("").map(n=>n+n).join(""):i,t=/^#[0-9a-f]{6}$/i.test(e)?Number.parseInt(e.slice(1),16):9075295;return[Ts(t>>16&255),Ts(t>>8&255),Ts(t&255)]}function Rg(i){let e=i.colorVariation?.palette;if(Array.isArray(e)&&e.length>0)return e.filter(s=>typeof s=="string");let t=i.albedo?.secondary;return[i.baseColor??i.color??i.albedo?.dominant,...Array.isArray(t)?t:[]].filter(s=>typeof s=="string"&&s.startsWith("#"))}function wt(i){return Math.max(0,Math.min(1,i))}function Ts(i){return Math.max(30,Math.min(240,Math.round(i)))}function Ag(i){return Math.max(.02,Math.min(1,i))}function cd(i){return Math.max(1,Math.min(2.5,i))}function Cg(i){return i>=.5?1:0}function Pg(i){let e=typeof i.baseColor=="string"?i.baseColor:"#8A7A5F";return new Oe().setStyle(e,At)}function hd(i){return i*i*(3-2*i)}function Uo(i,e,t,n,s){let r=(i%n+n)%n,a=(e%s+s)%s,o=Math.imul(r+t*17,374761393)^Math.imul(a+t*31,668265263);return o=Math.imul(o^o>>>13,1274126177),((o^o>>>16)>>>0)/4294967295}function Ig(i,e,t,n,s){let r=i*n,a=e*s,o=Math.floor(r),l=Math.floor(a),c=hd(r-o),d=hd(a-l),u=Uo(o,l,t,n,s),h=Uo(o+1,l,t,n,s),f=Uo(o,l+1,t,n,s),y=Uo(o+1,l+1,t,n,s);return $t.lerp($t.lerp(u,h,c),$t.lerp(f,y,c),d)}function Dg(i){let t=(Array.isArray(i.surfaceFrequencyBands)?i.surfaceFrequencyBands:[]).flatMap(n=>{if(!n||typeof n!="object")return[];let s=n,r=typeof s.frequency=="number"?s.frequency:0,a=typeof s.amplitude=="number"?s.amplitude:0;if(r<=0||a<=0)return[];let o=Array.isArray(s.stretch)?s.stretch:[1,1],l=`${String(s.pattern??"")} ${String(s.role??"")}`.toLowerCase();return[{frequency:r,amplitude:a,stretchX:typeof o[0]=="number"?Math.max(.1,o[0]):1,stretchY:typeof o[1]=="number"?Math.max(.1,o[1]):1,ridge:/(ridge|groove|grain|fiber|striated|crack)/.test(l)}]});return t.length>0?t:[{frequency:2,amplitude:.42,stretchX:1,stretchY:1,ridge:!1},{frequency:12,amplitude:.22,stretchX:1,stretchY:1,ridge:!1},{frequency:56,amplitude:.08,stretchX:1,stretchY:1,ridge:!1}]}function uc(i,e,t,n){let s=0,r=0;for(let a=0;a<t.length;a+=1){let o=t[a],l=Math.max(1,Math.round(o.frequency*o.stretchX)),c=Math.max(1,Math.round(o.frequency*o.stretchY)),d=Ig(i,e,n+a*1013,l,c);o.ridge&&(d=1-Math.abs(d*2-1)),s+=d*o.amplitude,r+=o.amplitude}return r>0?wt(s/r):.5}function Lg(i,e){if(i.length===1)return i[0];let t=wt(e)*(i.length-1),n=Math.min(i.length-2,Math.floor(t)),s=t-n,r=i[n],a=i[n+1];return[Math.round($t.lerp(r[0],a[0],s)),Math.round($t.lerp(r[1],a[1],s)),Math.round($t.lerp(r[2],a[2],s))]}function dd(i){let e=/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/.exec(i);return e?[Ts(Number(e[1])),Ts(Number(e[2])),Ts(Number(e[3]))]:[138,122,95]}function Ng(i,e,t){let n=i.stops.length>=2?i.stops:[{offset:0,color:"rgba(138,122,95,1)"},{offset:1,color:"rgba(138,122,95,1)"}],s;if(i.type==="radial"){let[d,u]=i.axis,h=e-d,f=t-u,y=Math.max(.001,Math.hypot(Math.max(d,1-d),Math.max(u,1-u)));s=wt(Math.hypot(h,f)/y)}else{let[d,u]=i.axis,h=(e-.5)*d+(t-.5)*u,f=.5*(Math.abs(d)+Math.abs(u))||.5;s=wt(h/f+.5)}let r=s*(n.length-1),a=Math.min(n.length-2,Math.max(0,Math.floor(r))),o=r-a,l=dd(n[a].color),c=dd(n[a+1].color);return[$t.lerp(l[0],c[0],o),$t.lerp(l[1],c[1],o),$t.lerp(l[2],c[2],o)]}function Mr(i,e,t,n,s){i[e]=Math.max(0,Math.min(255,Math.round(t))),i[e+1]=Math.max(0,Math.min(255,Math.round(n))),i[e+2]=Math.max(0,Math.min(255,Math.round(s))),i[e+3]=255}function wr(i){let e=document.createElement("canvas");return e.width=i,e.height=i,e}function Tr(i,e,t,n){let s=new Ys(i),r=t.textureProjection&&typeof t.textureProjection=="object"?t.textureProjection:{},a=Array.isArray(r.repeat)?r.repeat:[2,2];return s.colorSpace=e,s.wrapS=Zn,s.wrapT=Zn,s.repeat.set(typeof a[0]=="number"?a[0]:2,typeof a[1]=="number"?a[1]:2),s.anisotropy=Math.max(1,Math.round(n.textureAnisotropy??r.anisotropy??8)),s.needsUpdate=!0,s}function Er(i,e){let t=i.referencePbr;if(!t||typeof t!="object"||t.usable===!1)return null;let n=typeof t.confidence=="number"?t.confidence:typeof t.estimatedFidelity=="number"?t.estimatedFidelity:0,s=typeof t.targetThreshold=="number"?t.targetThreshold:.7;if(n<s)return null;let r=t.maps;if(!r||typeof r!="object")return null;let a=r[e];if(!a||typeof a!="object")return null;let o=a,l=typeof o.url=="string"&&o.url.trim()?o.url:o.path;return typeof l=="string"&&l.trim()?l:null}function Rr(i,e,t,n){let s=new rr().load(i),r=t.textureProjection&&typeof t.textureProjection=="object"?t.textureProjection:{},a=Array.isArray(r.repeat)?r.repeat:[1,1];return s.colorSpace=e,s.wrapS=Zn,s.wrapT=Zn,s.repeat.set(typeof a[0]=="number"?a[0]:1,typeof a[1]=="number"?a[1]:1),s.anisotropy=Math.max(1,Math.round(n.textureAnisotropy??r.anisotropy??8)),s.needsUpdate=!0,s}function Ug(i,e){let t=Er(i,"albedo"),n=Er(i,"roughness"),s=Er(i,"height"),r=Er(i,"normal"),a=Er(i,"ao");return!t||!n||!s||!r||!a?null:{albedo:Rr(t,At,i,e),roughness:Rr(n,Ut,i,e),height:Rr(s,Ut,i,e),normal:Rr(r,Ut,i,e),ao:Rr(a,Ut,i,e),source:"reference-pixel-extraction"}}function Fg(i,e,t){if(typeof document>"u")return null;let n=(t.qualityPriority??"reference-fidelity")==="reference-fidelity",s=t.textureSize??e.textureResolution,r=typeof s=="number"&&Number.isFinite(s)?s:n?1024:512,a=Math.max(256,Math.min(2048,2**Math.round(Math.log2(r)))),o={albedo:wr(a),roughness:wr(a),height:wr(a),normal:wr(a),ao:wr(a)},l={albedo:o.albedo.getContext("2d"),roughness:o.roughness.getContext("2d"),height:o.height.getContext("2d"),normal:o.normal.getContext("2d"),ao:o.ao.getContext("2d")};if(!l.albedo||!l.roughness||!l.height||!l.normal||!l.ao)return null;let c={albedo:l.albedo.createImageData(a,a),roughness:l.roughness.createImageData(a,a),height:l.height.createImageData(a,a),normal:l.normal.createImageData(a,a),ao:l.ao.createImageData(a,a)},d=Tg(i),u=Dg(e),h=new Float32Array(a*a),f=new Float32Array(a*a),y=Rg(e),v=typeof e.baseColor=="string"?e.baseColor:"#8A7A5F",m=(y.length>=2?y:[v,"#6E614B","#A08F70"]).map(Eg),p=wt(it(e.roughness,["base"],.76)),T=wt(it(e.roughness,["variation"],.18)),A=wt(it(e.colorVariation,["amplitude","variation"],.18)),x=wt(it(e.colorVariation,["heightCorrelation"],.3)),M=e.colorGradient;for(let _=0;_<a;_+=1){let w=_/a;for(let C=0;C<a;C+=1){let P=C/a,F=_*a+C,H=uc(P,w,u,d+101),D=uc(P,w,u,d+7001),O=uc(P,w,u,d+15013);h[F]=H,f[F]=wt(p+(D-.5)*T*2);let V;if(M)V=Ng(M,P,w);else{let Y=wt(.5+(O-.5)*A*2+(H-.5)*x);V=Lg(m,Y)}Mr(c.albedo.data,F*4,V[0],V[1],V[2])}}let S=Math.max(.05,it(e.normal,["strength","amplitude"],.35)),R=wt(it(e.ambientOcclusion,["cavityStrength","strength"],.35));for(let _=0;_<a;_+=1){let w=(_-1+a)%a*a,C=(_+1)%a*a;for(let P=0;P<a;P+=1){let F=(P-1+a)%a,H=(P+1)%a,D=_*a+P,O=h[D],V=(h[_*a+H]-h[_*a+F])*S*6,Y=(h[C+P]-h[w+P])*S*6,ee=1/Math.sqrt(V*V+Y*Y+1),q=-V*ee,Z=-Y*ee,ne=ee,Se=(h[_*a+F]+h[_*a+H]+h[w+P]+h[C+P])*.25,_e=Math.max(0,Se-O),ke=wt(1-R*(_e*12+(1-O)*.16)),ze=D*4,Be=O*255,X=f[D]*255;Mr(c.height.data,ze,Be,Be,Be),Mr(c.roughness.data,ze,X,X,X),Mr(c.normal.data,ze,(q*.5+.5)*255,(Z*.5+.5)*255,(ne*.5+.5)*255),Mr(c.ao.data,ze,ke*255,ke*255,ke*255)}}return l.albedo.putImageData(c.albedo,0,0),l.roughness.putImageData(c.roughness,0,0),l.height.putImageData(c.height,0,0),l.normal.putImageData(c.normal,0,0),l.ao.putImageData(c.ao,0,0),{albedo:Tr(o.albedo,At,e,t),roughness:Tr(o.roughness,Ut,e,t),height:Tr(o.height,Ut,e,t),normal:Tr(o.normal,Ut,e,t),ao:Tr(o.ao,Ut,e,t),source:"procedural"}}function fc(i,e,t,n=!1){let r=e.textureless?.declared===!0?null:Ug(e,t)??Fg(i,e,t),a=new nr({color:r?16777215:Pg(e),roughness:r?1:wt(it(e.roughness,["base"],.76)),metalness:Cg(it(e.metalness,["base"],0)),clearcoat:wt(it(e.clearcoat,["base","amount"],0)),clearcoatRoughness:wt(it(e.clearcoatRoughness,["base"],.25)),transmission:wt(it(e.transmission,["base","amount"],0)),ior:cd(it(e.ior,["base","value"],1.5)),thickness:Math.max(0,it(e.thickness,["base","amount"],0)),attenuationDistance:Math.max(.001,it(e.attenuationDistance,["base","value"],1/0)),attenuationColor:new Oe(typeof e.attenuationColor=="string"?e.attenuationColor:"#ffffff"),sheen:wt(it(e.sheen,["base","amount"],0)),sheenColor:new Oe(typeof e.sheenColor=="string"?e.sheenColor:"#ffffff"),sheenRoughness:wt(it(e.sheenRoughness,["base"],1)),iridescence:wt(it(e.iridescence,["base","amount"],0)),iridescenceIOR:cd(it(e.iridescenceIOR,["base","value"],1.3)),anisotropy:wt(it(e.anisotropy,["base","amount"],0)),anisotropyRotation:it(e.anisotropy,["rotation"],0),specularIntensity:Ag(it(e.specularF0??e.f0??e.specularIntensity,["base","value"],1)),specularColor:new Oe(typeof e.specularColor=="string"?e.specularColor:"#ffffff"),emissive:new Oe(typeof e.emissive=="string"?e.emissive:"#000000"),emissiveIntensity:Math.max(0,it(e.emissiveIntensity,["base"],1)),opacity:wt(it(e.opacity,["base"],1)),transparent:it(e.transmission,["base","amount"],0)>0||it(e.opacity,["base"],1)<1,alphaTest:Math.max(0,it(e.alpha,["cutoff","alphaTest"],0)),wireframe:t.wireframe??!1,side:e.doubleSided===!0?_n:kn,flatShading:e.flatShading===!0});if(r){a.map=r.albedo,a.roughnessMap=r.roughness,a.normalMap=r.normal,a.normalScale.setScalar(Math.max(.05,it(e.normal,["strength","amplitude"],.35))),a.aoMap=r.ao,a.aoMap.channel=0,a.aoMapIntensity=it(e.ambientOcclusion,["cavityStrength","strength"],.35);let o=n||e.denseMesh===!0||e.geometryDensity==="dense"||e.topologyClass==="dense",l=Math.max(0,it(e.bump,["amplitude","strength"],0)),c=o?Math.max(.05,l):l;c>0&&(a.bumpMap=r.height,a.bumpScale=c);let d=Math.max(0,it(e.displacement,["amplitude","strength"],0)),u=o?Math.max(.005,d):d;u>0&&(a.displacementMap=r.height,a.displacementScale=u,a.displacementBias=-u*.5)}return a.envMapIntensity=it(e,["envMapIntensity"],.8),a.userData.sculptMaterial=e,a.userData.proceduralMapsIndependent=!0,a.userData.pbrConstraints={albedoRange:[30,240],binaryMetalness:!0,f0Range:[.02,1],iorRange:[1,2.5]},a.userData.pbrTextureSource=r?.source??"flat-fallback",a.userData.referencePbr=e.referencePbr??null,a.userData.referenceMaterialId=e.referenceMaterialId??e.materialReference?.profileId??null,a.userData.materialEvidence=e.materialEvidence??null,a.userData.validationViews=e.materialReference?.validationViews??[],a.needsUpdate=!0,a}function ud(i,e){return Array.isArray(i)&&i.length===3&&i.every(t=>typeof t=="number")?new L(i[0],i[1],i[2]):new L(e[0],e[1],e[2])}function fd(i,e){return typeof i=="number"&&Number.isFinite(i)?i:e}function mt(i){if(!i||typeof i!="object")return null;let e=i,t=ud(e.localStart,[0,0,0]),s=ud(e.localEnd,[0,1,0]).clone().sub(t),r=s.length();if(r<=1e-4)return null;let a=s.clone().normalize(),o=new Jt().setFromUnitVectors(new L(0,1,0),a),l=Math.max(.005,fd(e.baseRadius,.06)),c=Math.max(.003,fd(e.endRadius,l*.55));return{start:t,midpoint:s.multiplyScalar(.5),quaternion:o,length:r,baseRadius:l,endRadius:c}}function pd(i={}){let e=new Je;e.name="Gold balance with curved beam chains and bullion",e.userData.reconstructionEvidence={itemFamily:null,subtype:null,componentAdapter:null,route:null,exactnessTier:null,referenceCamera:{solved:!1,fovDegrees:36,aspect:1,orientation:{yaw:0,pitch:0,roll:0},positionHint:[.2,2.7,12],note:"Front review at Y 2.7, orthographic height 6.6. Side/rear/left inferred review views use same framing."},approximationNotes:[]},e.userData.materialPipeline={},e.userData.materialReferenceRegistry=null;let t={};t.gold=fc("gold",{id:"gold",name:"gold",type:"physical",shaderModel:"MeshStandardMaterial / PBR approximation",baseColor:"#d6a64c",color:"#d6a64c",albedo:{dominant:"#d6a64c",secondary:["#c6933c","#f2ce86"],samplingNotes:"Textureless gold; specular image pixels are excluded from base albedo."},colorVariation:{palette:["#150B03","#ECC92C","#FEF695","#B4780A","#5A3002"],pattern:"none",amplitude:0,heightCorrelation:.42},roughness:{base:.24,variation:.025,map:"none"},metalness:{base:1,variation:0},ambientOcclusion:{cavityStrength:.38,contactShadowBias:.35,notes:"Reference-derived cavity estimate from local height minima; verify against grazing-light screenshot."},wear:{edgeWear:0,scratches:[],chips:[]},dirt:{amount:0,cavityBias:0,color:"#2F2A22"},localOverrides:[{id:"gold-polish",roughness:.21,region:"exposed bevel edges",evidenceRefs:["full-object"]}],shaderNotes:["Prefer MeshPhysicalMaterial when clearcoat, sheen, transmission, or thin-surface response is observed; otherwise use MeshStandardMaterial-compatible PBR channels.","Generate albedo, roughness, height/normal, and AO independently; never alias albedo into roughness.","Use normal/bump/displacement only when they map to observed surface relief.","Use displacement geometry when the observed relief changes the close-up silhouette; texture-only relief is insufficient there.","Reference-derived maps are estimates from image pixels; verify with neutral, grazing, and reference-matched renders.","Do not treat baked image shadows as final albedo; rerun extraction with a tighter material crop if highlights/shadows pollute the maps."],notes:"Textureless polished metal. Image reflection is not baked into surface albedo; exact lighting and rear geometry are inferred.",textureless:{declared:!0,evidence:["Uploaded balance illustration: column crop shows smooth specular reflected panels with no visible grain, patina, printed pattern or pores.","Silhouette and bevel geometry define the gold surfaces. Variation in the image is dominated by lighting, not texture."]}},i),t["edge-gold"]=fc("edge-gold",{id:"edge-gold",name:"edge-gold",type:"physical",shaderModel:"MeshStandardMaterial / PBR approximation",baseColor:"#edc779",color:"#edc779",albedo:{dominant:"#edc779",secondary:["#c6933c","#f2ce86"],samplingNotes:"Representative gold albedo inferred without baked reflection highlights."},colorVariation:{palette:["#edc779","#c6933c","#f2ce86"],pattern:"none",amplitude:0,heightCorrelation:0},roughness:{base:.19,variation:.025,map:"none"},metalness:{base:1,variation:0},ambientOcclusion:{cavityStrength:.25,contactShadowBias:.35,notes:"Darken creases, seams, intersections, and recessed local features."},wear:{edgeWear:0,scratches:[],chips:[]},dirt:{amount:0,cavityBias:0,color:"#2F2A22"},localOverrides:[{id:"edge-gold-polish",roughness:.16,region:"exposed bevel edges",evidenceRefs:["full-object"]}],shaderNotes:["Prefer MeshPhysicalMaterial when clearcoat, sheen, transmission, or thin-surface response is observed; otherwise use MeshStandardMaterial-compatible PBR channels.","Generate albedo, roughness, height/normal, and AO independently; never alias albedo into roughness.","Use normal/bump/displacement only when they map to observed surface relief.","Use displacement geometry when the observed relief changes the close-up silhouette; texture-only relief is insufficient there."],notes:"Textureless polished metal. Image reflection is not baked into surface albedo; exact lighting and rear geometry are inferred.",textureless:{declared:!0,evidence:["Uploaded balance illustration: column crop shows smooth specular reflected panels with no visible grain, patina, printed pattern or pores.","Silhouette and bevel geometry define the gold surfaces. Variation in the image is dominated by lighting, not texture."]}},i),t.bullion=fc("bullion",{id:"bullion",name:"bullion",type:"physical",shaderModel:"MeshStandardMaterial / PBR approximation",baseColor:"#e2b751",color:"#e2b751",albedo:{dominant:"#e2b751",secondary:["#c6933c","#f2ce86"],samplingNotes:"Representative gold albedo inferred without baked reflection highlights."},colorVariation:{palette:["#e2b751","#c6933c","#f2ce86"],pattern:"none",amplitude:0,heightCorrelation:0},roughness:{base:.27,variation:.025,map:"none"},metalness:{base:1,variation:0},ambientOcclusion:{cavityStrength:.25,contactShadowBias:.35,notes:"Darken creases, seams, intersections, and recessed local features."},wear:{edgeWear:0,scratches:[],chips:[]},dirt:{amount:0,cavityBias:0,color:"#2F2A22"},localOverrides:[{id:"bullion-polish",roughness:.24000000000000002,region:"exposed bevel edges",evidenceRefs:["full-object"]}],shaderNotes:["Prefer MeshPhysicalMaterial when clearcoat, sheen, transmission, or thin-surface response is observed; otherwise use MeshStandardMaterial-compatible PBR channels.","Generate albedo, roughness, height/normal, and AO independently; never alias albedo into roughness.","Use normal/bump/displacement only when they map to observed surface relief.","Use displacement geometry when the observed relief changes the close-up silhouette; texture-only relief is insufficient there."],notes:"Textureless polished metal. Image reflection is not baked into surface albedo; exact lighting and rear geometry are inferred.",textureless:{declared:!0,evidence:["Uploaded balance illustration: column crop shows smooth specular reflected panels with no visible grain, patina, printed pattern or pores.","Silhouette and bevel geometry define the gold surfaces. Variation in the image is dominated by lighting, not texture."]}},i);let n={root:e},s={},r={},a={},o={},c=mt(null),d=new Je;d.name="root__pivot",d.scale.set(1,1,1),c?(d.position.copy(c.start),d.rotation.set(0,0,0)):(d.position.set(0,.08,0),d.rotation.set(0,0,0)),d.userData.sculptComponent={id:"root",name:"root",level:"macro",role:"body",importance:.85,confidence:.88,primitive:"cylinder",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",radialSegments:8},parent:null,attachment:null,dimensions:{width:1.28,height:.16,depth:.94,units:"world",confidence:.85},transform:{position:[0,.08,0],rotation:[0,0,0]},actionProfile:{animationRole:"root",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"root",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"octagonal-foot",kind:"bevel",placement:"foot perimeter",geometryEffect:"8-sided stepped beveled base",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},d.userData.actionProfile={animationRole:"root",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"root",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(d),n.root=d;let u=c?new $e(c.endRadius,c.baseRadius,c.length,16,6):new $e(.5,.5,1,24,8);c||u.scale(1.28,.16,.94);let h=new Ue(u,t.gold??new et({color:8947848}));h.name="root",c&&(h.position.copy(c.midpoint),h.quaternion.copy(c.quaternion)),h.castShadow=i.castShadow??!0,h.receiveShadow=i.receiveShadow??!0,h.userData.sculptComponent={id:"root",name:"root",level:"macro",role:"body",importance:.85,confidence:.88,primitive:"cylinder",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",radialSegments:8},parent:null,attachment:null,dimensions:{width:1.28,height:.16,depth:.94,units:"world",confidence:.85},transform:{position:[0,.08,0],rotation:[0,0,0]},actionProfile:{animationRole:"root",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"root",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"octagonal-foot",kind:"bevel",placement:"foot perimeter",geometryEffect:"8-sided stepped beveled base",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},d.add(h),s.root=h,a.root={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o.root??(o.root=[]),o.root.push(d);let y=mt({parentId:"root",parentSocket:"foot-step-seat",localStart:[0,.17,0],localEnd:[0,.17,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]}),v=new Je;v.name="foot-step__pivot",v.scale.set(1,1,1),y?(v.position.copy(y.start),v.rotation.set(0,0,0)):(v.position.set(0,.17,0),v.rotation.set(0,0,0)),v.userData.sculptComponent={id:"foot-step",name:"foot-step",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"cylinder",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:{parentId:"root",parentSocket:"foot-step-seat",localStart:[0,.17,0],localEnd:[0,.17,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:1.08,height:.18,depth:.8,units:"world",confidence:.85},transform:{position:[0,.17,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"foot-step",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"step-edge",kind:"ridge",geometryEffect:"second raised plinth",confidence:.95}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},v.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"foot-step",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(v),n["foot-step"]=v;let m=y?new $e(y.endRadius,y.baseRadius,y.length,16,6):new $e(.5,.5,1,24,8);y||m.scale(1.08,.18,.8);let p=new Ue(m,t.gold??new et({color:8947848}));p.name="foot-step",y&&(p.position.copy(y.midpoint),p.quaternion.copy(y.quaternion)),p.castShadow=i.castShadow??!0,p.receiveShadow=i.receiveShadow??!0,p.userData.sculptComponent={id:"foot-step",name:"foot-step",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"cylinder",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:{parentId:"root",parentSocket:"foot-step-seat",localStart:[0,.17,0],localEnd:[0,.17,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:1.08,height:.18,depth:.8,units:"world",confidence:.85},transform:{position:[0,.17,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"foot-step",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"step-edge",kind:"ridge",geometryEffect:"second raised plinth",confidence:.95}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},v.add(p),s["foot-step"]=p,a["foot-step"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["foot-step"]??(o["foot-step"]=[]),o["foot-step"].push(v);let A=mt({parentId:"root",parentSocket:"column-seat",localStart:[0,2.3,0],localEnd:[0,2.3,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]}),x=new Je;x.name="column__pivot",x.scale.set(1,1,1),A?(x.position.copy(A.start),x.rotation.set(0,0,0)):(x.position.set(0,2.3,0),x.rotation.set(0,0,0)),x.userData.sculptComponent={id:"column",name:"column",level:"macro",role:"body",importance:.85,confidence:.88,primitive:"cylinder",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:{parentId:"root",parentSocket:"column-seat",localStart:[0,2.3,0],localEnd:[0,2.3,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.32,height:4.6,depth:.32,units:"world",confidence:.85},transform:{position:[0,2.3,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"column",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"vertical-spindle",kind:"gloss",materialEffect:"metalness 1 roughness .24",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},x.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"column",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(x),n.column=x;let M=A?new $e(A.endRadius,A.baseRadius,A.length,16,6):new $e(.5,.5,1,24,8);A||M.scale(.32,4.6,.32);let S=new Ue(M,t.gold??new et({color:8947848}));S.name="column",A&&(S.position.copy(A.midpoint),S.quaternion.copy(A.quaternion)),S.castShadow=i.castShadow??!0,S.receiveShadow=i.receiveShadow??!0,S.userData.sculptComponent={id:"column",name:"column",level:"macro",role:"body",importance:.85,confidence:.88,primitive:"cylinder",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:{parentId:"root",parentSocket:"column-seat",localStart:[0,2.3,0],localEnd:[0,2.3,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.32,height:4.6,depth:.32,units:"world",confidence:.85},transform:{position:[0,2.3,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"column",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"vertical-spindle",kind:"gloss",materialEffect:"metalness 1 roughness .24",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},x.add(S),s.column=S,a.column={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o.column??(o.column=[]),o.column.push(x);let R=mt(null),_=new Je;_.name="collar-0__pivot",_.scale.set(1,1,1),R?(_.position.copy(R.start),_.rotation.set(0,0,0)):(_.position.set(0,.48,0),_.rotation.set(0,0,0)),_.userData.sculptComponent={id:"collar-0",name:"collar-0",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"lathe",topologyClass:"continuous-sculpt",topologyRationale:"Observed turned radial profile with varying radius",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",latheProfile:{points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24}},parent:"root",attachment:{parentId:"root",parentSocket:"collar-0-seat",localStart:[0,.48,0],localEnd:[0,.48,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.46,height:.2,depth:.46,units:"world",confidence:.85},transform:{position:[0,.48,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-0",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"turned-band-0",kind:"ridge",geometryEffect:"rounded turned spindle collar",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},_.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-0",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(_),n["collar-0"]=_;let w=R?new $e(R.endRadius,R.baseRadius,R.length,16,6):yi({points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24});R||w.scale(.46,.2,.46);let C=new Ue(w,t.gold??new et({color:8947848}));C.name="collar-0",R&&(C.position.copy(R.midpoint),C.quaternion.copy(R.quaternion)),C.castShadow=i.castShadow??!0,C.receiveShadow=i.receiveShadow??!0,C.userData.sculptComponent={id:"collar-0",name:"collar-0",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"lathe",topologyClass:"continuous-sculpt",topologyRationale:"Observed turned radial profile with varying radius",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",latheProfile:{points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24}},parent:"root",attachment:{parentId:"root",parentSocket:"collar-0-seat",localStart:[0,.48,0],localEnd:[0,.48,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.46,height:.2,depth:.46,units:"world",confidence:.85},transform:{position:[0,.48,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-0",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"turned-band-0",kind:"ridge",geometryEffect:"rounded turned spindle collar",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},_.add(C),s["collar-0"]=C,a["collar-0"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["collar-0"]??(o["collar-0"]=[]),o["collar-0"].push(_);let P=mt(null),F=new Je;F.name="collar-1__pivot",F.scale.set(1,1,1),P?(F.position.copy(P.start),F.rotation.set(0,0,0)):(F.position.set(0,.83,0),F.rotation.set(0,0,0)),F.userData.sculptComponent={id:"collar-1",name:"collar-1",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"lathe",topologyClass:"continuous-sculpt",topologyRationale:"Observed turned radial profile with varying radius",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",latheProfile:{points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24}},parent:"root",attachment:{parentId:"root",parentSocket:"collar-1-seat",localStart:[0,.83,0],localEnd:[0,.83,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.46,height:.2,depth:.46,units:"world",confidence:.85},transform:{position:[0,.83,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-1",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"turned-band-1",kind:"ridge",geometryEffect:"rounded turned spindle collar",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},F.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-1",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(F),n["collar-1"]=F;let H=P?new $e(P.endRadius,P.baseRadius,P.length,16,6):yi({points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24});P||H.scale(.46,.2,.46);let D=new Ue(H,t.gold??new et({color:8947848}));D.name="collar-1",P&&(D.position.copy(P.midpoint),D.quaternion.copy(P.quaternion)),D.castShadow=i.castShadow??!0,D.receiveShadow=i.receiveShadow??!0,D.userData.sculptComponent={id:"collar-1",name:"collar-1",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"lathe",topologyClass:"continuous-sculpt",topologyRationale:"Observed turned radial profile with varying radius",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",latheProfile:{points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24}},parent:"root",attachment:{parentId:"root",parentSocket:"collar-1-seat",localStart:[0,.83,0],localEnd:[0,.83,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.46,height:.2,depth:.46,units:"world",confidence:.85},transform:{position:[0,.83,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-1",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"turned-band-1",kind:"ridge",geometryEffect:"rounded turned spindle collar",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},F.add(D),s["collar-1"]=D,a["collar-1"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["collar-1"]??(o["collar-1"]=[]),o["collar-1"].push(F);let O=mt(null),V=new Je;V.name="collar-2__pivot",V.scale.set(1,1,1),O?(V.position.copy(O.start),V.rotation.set(0,0,0)):(V.position.set(0,3.62,0),V.rotation.set(0,0,0)),V.userData.sculptComponent={id:"collar-2",name:"collar-2",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"lathe",topologyClass:"continuous-sculpt",topologyRationale:"Observed turned radial profile with varying radius",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",latheProfile:{points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24}},parent:"root",attachment:{parentId:"root",parentSocket:"collar-2-seat",localStart:[0,3.62,0],localEnd:[0,3.62,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.46,height:.2,depth:.46,units:"world",confidence:.85},transform:{position:[0,3.62,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-2",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"turned-band-2",kind:"ridge",geometryEffect:"rounded turned spindle collar",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},V.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-2",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(V),n["collar-2"]=V;let Y=O?new $e(O.endRadius,O.baseRadius,O.length,16,6):yi({points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24});O||Y.scale(.46,.2,.46);let ee=new Ue(Y,t.gold??new et({color:8947848}));ee.name="collar-2",O&&(ee.position.copy(O.midpoint),ee.quaternion.copy(O.quaternion)),ee.castShadow=i.castShadow??!0,ee.receiveShadow=i.receiveShadow??!0,ee.userData.sculptComponent={id:"collar-2",name:"collar-2",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"lathe",topologyClass:"continuous-sculpt",topologyRationale:"Observed turned radial profile with varying radius",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",latheProfile:{points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24}},parent:"root",attachment:{parentId:"root",parentSocket:"collar-2-seat",localStart:[0,3.62,0],localEnd:[0,3.62,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.46,height:.2,depth:.46,units:"world",confidence:.85},transform:{position:[0,3.62,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-2",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"turned-band-2",kind:"ridge",geometryEffect:"rounded turned spindle collar",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},V.add(ee),s["collar-2"]=ee,a["collar-2"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["collar-2"]??(o["collar-2"]=[]),o["collar-2"].push(V);let q=mt(null),Z=new Je;Z.name="collar-3__pivot",Z.scale.set(1,1,1),q?(Z.position.copy(q.start),Z.rotation.set(0,0,0)):(Z.position.set(0,4.04,0),Z.rotation.set(0,0,0)),Z.userData.sculptComponent={id:"collar-3",name:"collar-3",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"lathe",topologyClass:"continuous-sculpt",topologyRationale:"Observed turned radial profile with varying radius",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",latheProfile:{points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24}},parent:"root",attachment:{parentId:"root",parentSocket:"collar-3-seat",localStart:[0,4.04,0],localEnd:[0,4.04,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.46,height:.2,depth:.46,units:"world",confidence:.85},transform:{position:[0,4.04,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-3",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"turned-band-3",kind:"ridge",geometryEffect:"rounded turned spindle collar",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},Z.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-3",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(Z),n["collar-3"]=Z;let ne=q?new $e(q.endRadius,q.baseRadius,q.length,16,6):yi({points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24});q||ne.scale(.46,.2,.46);let Se=new Ue(ne,t.gold??new et({color:8947848}));Se.name="collar-3",q&&(Se.position.copy(q.midpoint),Se.quaternion.copy(q.quaternion)),Se.castShadow=i.castShadow??!0,Se.receiveShadow=i.receiveShadow??!0,Se.userData.sculptComponent={id:"collar-3",name:"collar-3",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"lathe",topologyClass:"continuous-sculpt",topologyRationale:"Observed turned radial profile with varying radius",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",latheProfile:{points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24}},parent:"root",attachment:{parentId:"root",parentSocket:"collar-3-seat",localStart:[0,4.04,0],localEnd:[0,4.04,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.46,height:.2,depth:.46,units:"world",confidence:.85},transform:{position:[0,4.04,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-3",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"turned-band-3",kind:"ridge",geometryEffect:"rounded turned spindle collar",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},Z.add(Se),s["collar-3"]=Se,a["collar-3"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["collar-3"]??(o["collar-3"]=[]),o["collar-3"].push(Z);let _e=mt(null),ke=new Je;ke.name="collar-4__pivot",ke.scale.set(1,1,1),_e?(ke.position.copy(_e.start),ke.rotation.set(0,0,0)):(ke.position.set(0,4.51,0),ke.rotation.set(0,0,0)),ke.userData.sculptComponent={id:"collar-4",name:"collar-4",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"lathe",topologyClass:"continuous-sculpt",topologyRationale:"Observed turned radial profile with varying radius",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",latheProfile:{points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24}},parent:"root",attachment:{parentId:"root",parentSocket:"collar-4-seat",localStart:[0,4.51,0],localEnd:[0,4.51,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.46,height:.2,depth:.46,units:"world",confidence:.85},transform:{position:[0,4.51,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-4",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"turned-band-4",kind:"ridge",geometryEffect:"rounded turned spindle collar",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},ke.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-4",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(ke),n["collar-4"]=ke;let ze=_e?new $e(_e.endRadius,_e.baseRadius,_e.length,16,6):yi({points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24});_e||ze.scale(.46,.2,.46);let Be=new Ue(ze,t.gold??new et({color:8947848}));Be.name="collar-4",_e&&(Be.position.copy(_e.midpoint),Be.quaternion.copy(_e.quaternion)),Be.castShadow=i.castShadow??!0,Be.receiveShadow=i.receiveShadow??!0,Be.userData.sculptComponent={id:"collar-4",name:"collar-4",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"lathe",topologyClass:"continuous-sculpt",topologyRationale:"Observed turned radial profile with varying radius",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",latheProfile:{points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24}},parent:"root",attachment:{parentId:"root",parentSocket:"collar-4-seat",localStart:[0,4.51,0],localEnd:[0,4.51,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.46,height:.2,depth:.46,units:"world",confidence:.85},transform:{position:[0,4.51,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-4",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"turned-band-4",kind:"ridge",geometryEffect:"rounded turned spindle collar",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},ke.add(Be),s["collar-4"]=Be,a["collar-4"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["collar-4"]??(o["collar-4"]=[]),o["collar-4"].push(ke);let X=mt(null),K=new Je;K.name="collar-5__pivot",K.scale.set(1,1,1),X?(K.position.copy(X.start),K.rotation.set(0,0,0)):(K.position.set(0,4.91,0),K.rotation.set(0,0,0)),K.userData.sculptComponent={id:"collar-5",name:"collar-5",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"lathe",topologyClass:"continuous-sculpt",topologyRationale:"Observed turned radial profile with varying radius",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",latheProfile:{points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24}},parent:"root",attachment:{parentId:"root",parentSocket:"collar-5-seat",localStart:[0,4.91,0],localEnd:[0,4.91,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.46,height:.2,depth:.46,units:"world",confidence:.85},transform:{position:[0,4.91,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-5",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"turned-band-5",kind:"ridge",geometryEffect:"rounded turned spindle collar",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},K.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-5",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(K),n["collar-5"]=K;let xe=X?new $e(X.endRadius,X.baseRadius,X.length,16,6):yi({points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24});X||xe.scale(.46,.2,.46);let oe=new Ue(xe,t.gold??new et({color:8947848}));oe.name="collar-5",X&&(oe.position.copy(X.midpoint),oe.quaternion.copy(X.quaternion)),oe.castShadow=i.castShadow??!0,oe.receiveShadow=i.receiveShadow??!0,oe.userData.sculptComponent={id:"collar-5",name:"collar-5",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"lathe",topologyClass:"continuous-sculpt",topologyRationale:"Observed turned radial profile with varying radius",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",latheProfile:{points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24}},parent:"root",attachment:{parentId:"root",parentSocket:"collar-5-seat",localStart:[0,4.91,0],localEnd:[0,4.91,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.46,height:.2,depth:.46,units:"world",confidence:.85},transform:{position:[0,4.91,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-5",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"turned-band-5",kind:"ridge",geometryEffect:"rounded turned spindle collar",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},K.add(oe),s["collar-5"]=oe,a["collar-5"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["collar-5"]??(o["collar-5"]=[]),o["collar-5"].push(K);let re=mt(null),Pe=new Je;Pe.name="finial__pivot",Pe.scale.set(1,1,1),re?(Pe.position.copy(re.start),Pe.rotation.set(0,0,0)):(Pe.position.set(0,5.09,0),Pe.rotation.set(0,0,0)),Pe.userData.sculptComponent={id:"finial",name:"finial",level:"macro",role:"body",importance:.85,confidence:.88,primitive:"sphere",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:{parentId:"root",parentSocket:"finial-seat",localStart:[0,5.18,0],localEnd:[0,5.18,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.34,height:.38,depth:.34,units:"world",confidence:.85},transform:{position:[0,5.09,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"finial",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"finial-crown",kind:"contour",geometryEffect:"rounded upper crown",confidence:.95}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},Pe.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"finial",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(Pe),n.finial=Pe;let bt=re?new $e(re.endRadius,re.baseRadius,re.length,16,6):new er(.5,32,20);re||bt.scale(.34,.38,.34);let Le=new Ue(bt,t.gold??new et({color:8947848}));Le.name="finial",re&&(Le.position.copy(re.midpoint),Le.quaternion.copy(re.quaternion)),Le.castShadow=i.castShadow??!0,Le.receiveShadow=i.receiveShadow??!0,Le.userData.sculptComponent={id:"finial",name:"finial",level:"macro",role:"body",importance:.85,confidence:.88,primitive:"sphere",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:{parentId:"root",parentSocket:"finial-seat",localStart:[0,5.18,0],localEnd:[0,5.18,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.34,height:.38,depth:.34,units:"world",confidence:.85},transform:{position:[0,5.09,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"finial",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"finial-crown",kind:"contour",geometryEffect:"rounded upper crown",confidence:.95}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},Pe.add(Le),s.finial=Le,a.finial={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o.finial??(o.finial=[]),o.finial.push(Pe);let Ze=mt({parentId:"root",parentSocket:"beam-seat",localStart:[0,4.29,0],localEnd:[0,4.29,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]}),Ne=new Je;Ne.name="beam__pivot",Ne.scale.set(1,1,1),Ze?(Ne.position.copy(Ze.start),Ne.rotation.set(0,0,.08)):(Ne.position.set(0,4.29,0),Ne.rotation.set(0,0,.08)),Ne.userData.sculptComponent={id:"beam",name:"beam",level:"macro",role:"body",importance:.85,confidence:.88,primitive:"tube",topologyClass:"fiber-strand",topologyRationale:"Observed thin member following a curved centerline",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",tubePath:{points:[[-1.58,-.28,0],[-1.22,-.2,0],[-.79,.16,0],[0,.27,0],[.79,.16,0],[1.22,-.2,0],[1.58,-.28,0]],radius:.075,radialSegments:12},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"beam-seat",localStart:[0,4.29,0],localEnd:[0,4.29,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[0,4.29,0],rotation:[0,0,.08]},actionProfile:{animationRole:"hinge",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"compound",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"beam",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"curved-beam",kind:"contour",geometryEffect:"curved tube sweeps with raised central beam",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},Ne.userData.actionProfile={animationRole:"hinge",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"compound",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"beam",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(Ne),n.beam=Ne;let ct=Ze?new $e(Ze.endRadius,Ze.baseRadius,Ze.length,16,6):Di({points:[[-1.58,-.28,0],[-1.22,-.2,0],[-.79,.16,0],[0,.27,0],[.79,.16,0],[1.22,-.2,0],[1.58,-.28,0]],radius:.075,radialSegments:12});Ze||ct.scale(1,1,1);let ht=new Ue(ct,t.gold??new et({color:8947848}));ht.name="beam",Ze&&(ht.position.copy(Ze.midpoint),ht.quaternion.copy(Ze.quaternion)),ht.castShadow=i.castShadow??!0,ht.receiveShadow=i.receiveShadow??!0,ht.userData.sculptComponent={id:"beam",name:"beam",level:"macro",role:"body",importance:.85,confidence:.88,primitive:"tube",topologyClass:"fiber-strand",topologyRationale:"Observed thin member following a curved centerline",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",tubePath:{points:[[-1.58,-.28,0],[-1.22,-.2,0],[-.79,.16,0],[0,.27,0],[.79,.16,0],[1.22,-.2,0],[1.58,-.28,0]],radius:.075,radialSegments:12},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"beam-seat",localStart:[0,4.29,0],localEnd:[0,4.29,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[0,4.29,0],rotation:[0,0,.08]},actionProfile:{animationRole:"hinge",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"compound",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"beam",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"curved-beam",kind:"contour",geometryEffect:"curved tube sweeps with raised central beam",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},Ne.add(ht),s.beam=ht,a.beam={type:"compound",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o.beam??(o.beam=[]),o.beam.push(Ne);let Qe=mt({parentId:"beam",parentSocket:"beam-center-seat",localStart:[0,.26,0],localEnd:[0,.26,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]}),tt=new Je;tt.name="beam-center__pivot",tt.scale.set(1,1,1),Qe?(tt.position.copy(Qe.start),tt.rotation.set(0,0,1.5707963267948966)):(tt.position.set(0,.26,0),tt.rotation.set(0,0,1.5707963267948966)),tt.userData.sculptComponent={id:"beam-center",name:"beam-center",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"cylinder",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"beam",attachment:{parentId:"beam",parentSocket:"beam-center-seat",localStart:[0,.26,0],localEnd:[0,.26,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.23,height:1.14,depth:.23,units:"world",confidence:.85},transform:{position:[0,.26,0],rotation:[0,0,1.5707963267948966]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"beam-center",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"edge-gold",materialLayers:["edge-gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"crossbar-sleeve",kind:"gloss",materialEffect:"polished horizontal sleeve",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},tt.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"beam-center",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.beam??e).add(tt),n["beam-center"]=tt;let U=Qe?new $e(Qe.endRadius,Qe.baseRadius,Qe.length,16,6):new $e(.5,.5,1,24,8);Qe||U.scale(.23,1.14,.23);let gt=new Ue(U,t["edge-gold"]??new et({color:8947848}));gt.name="beam-center",Qe&&(gt.position.copy(Qe.midpoint),gt.quaternion.copy(Qe.quaternion)),gt.castShadow=i.castShadow??!0,gt.receiveShadow=i.receiveShadow??!0,gt.userData.sculptComponent={id:"beam-center",name:"beam-center",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"cylinder",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"beam",attachment:{parentId:"beam",parentSocket:"beam-center-seat",localStart:[0,.26,0],localEnd:[0,.26,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.23,height:1.14,depth:.23,units:"world",confidence:.85},transform:{position:[0,.26,0],rotation:[0,0,1.5707963267948966]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"beam-center",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"edge-gold",materialLayers:["edge-gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"crossbar-sleeve",kind:"gloss",materialEffect:"polished horizontal sleeve",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},tt.add(gt),s["beam-center"]=gt,a["beam-center"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["beam-center"]??(o["beam-center"]=[]),o["beam-center"].push(tt);let We=mt(null),E=new Je;E.name="pan-left__pivot",E.scale.set(1,1,1),We?(E.position.copy(We.start),E.rotation.set(0,0,0)):(E.position.set(-1.57,1.3499999999999999,0),E.rotation.set(0,0,0)),E.userData.sculptComponent={id:"pan-left",name:"pan-left",level:"macro",role:"body",importance:.85,confidence:.88,primitive:"lathe",topologyClass:"continuous-sculpt",topologyRationale:"Observed turned radial profile with varying radius",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",latheProfile:{points:[[0,-.11],[.45,-.105],[.66,-.05],[.75,.06],[.77,.09],[.75,.105],[.7,.085],[.59,-.025],[.43,-.058],[0,-.06]],segments:48},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"pan-left-seat",localStart:[-1.57,1.3499999999999999,0],localEnd:[-1.57,1.3499999999999999,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[-1.57,1.3499999999999999,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"pan-left",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"bowl-left",kind:"hole",geometryEffect:"open shallow bowl with returned wall thickness",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},E.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"pan-left",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(E),n["pan-left"]=E;let g=We?new $e(We.endRadius,We.baseRadius,We.length,16,6):yi({points:[[0,-.11],[.45,-.105],[.66,-.05],[.75,.06],[.77,.09],[.75,.105],[.7,.085],[.59,-.025],[.43,-.058],[0,-.06]],segments:48});We||g.scale(1,1,1);let B=new Ue(g,t.gold??new et({color:8947848}));B.name="pan-left",We&&(B.position.copy(We.midpoint),B.quaternion.copy(We.quaternion)),B.castShadow=i.castShadow??!0,B.receiveShadow=i.receiveShadow??!0,B.userData.sculptComponent={id:"pan-left",name:"pan-left",level:"macro",role:"body",importance:.85,confidence:.88,primitive:"lathe",topologyClass:"continuous-sculpt",topologyRationale:"Observed turned radial profile with varying radius",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",latheProfile:{points:[[0,-.11],[.45,-.105],[.66,-.05],[.75,.06],[.77,.09],[.75,.105],[.7,.085],[.59,-.025],[.43,-.058],[0,-.06]],segments:48},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"pan-left-seat",localStart:[-1.57,1.3499999999999999,0],localEnd:[-1.57,1.3499999999999999,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[-1.57,1.3499999999999999,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"pan-left",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"bowl-left",kind:"hole",geometryEffect:"open shallow bowl with returned wall thickness",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},E.add(B),s["pan-left"]=B,a["pan-left"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["pan-left"]??(o["pan-left"]=[]),o["pan-left"].push(E);let G=mt(null),j=new Je;j.name="rim-left__pivot",j.scale.set(1,1,1),G?(j.position.copy(G.start),j.rotation.set(1.5707963267948966,0,0)):(j.position.set(0,.097,0),j.rotation.set(1.5707963267948966,0,0)),j.userData.sculptComponent={id:"rim-left",name:"rim-left",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"torus",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"pan-left",attachment:{parentId:"pan-left",parentSocket:"rim-left-seat",localStart:[0,.097,0],localEnd:[0,.097,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:1.55,height:1.55,depth:.026,units:"world",confidence:.85},transform:{position:[0,.097,0],rotation:[1.5707963267948966,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"rim-left",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"edge-gold",materialLayers:["edge-gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"rim-bead-left",kind:"ridge",geometryEffect:"thin circular rim accent",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},j.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"rim-left",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n["pan-left"]??e).add(j),n["rim-left"]=j;let ae=G?new $e(G.endRadius,G.baseRadius,G.length,16,6):new cs(.45,.08,12,48);G||ae.scale(1.55,1.55,.026);let le=new Ue(ae,t["edge-gold"]??new et({color:8947848}));le.name="rim-left",G&&(le.position.copy(G.midpoint),le.quaternion.copy(G.quaternion)),le.castShadow=i.castShadow??!0,le.receiveShadow=i.receiveShadow??!0,le.userData.sculptComponent={id:"rim-left",name:"rim-left",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"torus",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"pan-left",attachment:{parentId:"pan-left",parentSocket:"rim-left-seat",localStart:[0,.097,0],localEnd:[0,.097,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:1.55,height:1.55,depth:.026,units:"world",confidence:.85},transform:{position:[0,.097,0],rotation:[1.5707963267948966,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"rim-left",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"edge-gold",materialLayers:["edge-gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"rim-bead-left",kind:"ridge",geometryEffect:"thin circular rim accent",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},j.add(le),s["rim-left"]=le,a["rim-left"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["rim-left"]??(o["rim-left"]=[]),o["rim-left"].push(j);let Q=mt({parentId:"root",parentSocket:"chain-left-0-seat",localStart:[-1.57,3.8844,0],localEnd:[-.9464617092752042,1.43,.35999999999999993],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015}),ie=new Je;ie.name="chain-left-0__pivot",ie.scale.set(1,1,1),Q?(ie.position.copy(Q.start),ie.rotation.set(0,0,0)):(ie.position.set(-1.57,3.8844,0),ie.rotation.set(0,0,0)),ie.userData.sculptComponent={id:"chain-left-0",name:"chain-left-0",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"tube",topologyClass:"fiber-strand",topologyRationale:"Observed thin member following a curved centerline",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",tubePath:{points:[[0,0,0],[.6235382907247958,-2.4543999999999997,.35999999999999993]],radius:.013,radialSegments:6},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"chain-left-0-seat",localStart:[-1.57,3.8844,0],localEnd:[-.9464617092752042,1.43,.35999999999999993],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[-1.57,3.8844,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-left-0",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"links-left-0",kind:"ridge",geometryEffect:"repeated alternating oval chain links along endpoints",confidence:.83}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},ie.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-left-0",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(ie),n["chain-left-0"]=ie;let Ce=Q?new $e(Q.endRadius,Q.baseRadius,Q.length,16,6):Di({points:[[0,0,0],[.6235382907247958,-2.4543999999999997,.35999999999999993]],radius:.013,radialSegments:6});Q||Ce.scale(1,1,1);let he=new Ue(Ce,t.gold??new et({color:8947848}));he.name="chain-left-0",Q&&(he.position.copy(Q.midpoint),he.quaternion.copy(Q.quaternion)),he.castShadow=i.castShadow??!0,he.receiveShadow=i.receiveShadow??!0,he.userData.sculptComponent={id:"chain-left-0",name:"chain-left-0",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"tube",topologyClass:"fiber-strand",topologyRationale:"Observed thin member following a curved centerline",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",tubePath:{points:[[0,0,0],[.6235382907247958,-2.4543999999999997,.35999999999999993]],radius:.013,radialSegments:6},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"chain-left-0-seat",localStart:[-1.57,3.8844,0],localEnd:[-.9464617092752042,1.43,.35999999999999993],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[-1.57,3.8844,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-left-0",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"links-left-0",kind:"ridge",geometryEffect:"repeated alternating oval chain links along endpoints",confidence:.83}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},ie.add(he),s["chain-left-0"]=he,a["chain-left-0"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["chain-left-0"]??(o["chain-left-0"]=[]),o["chain-left-0"].push(ie);let we=mt({parentId:"root",parentSocket:"chain-left-1-seat",localStart:[-1.57,3.8844,0],localEnd:[-2.193538290724796,1.43,.35999999999999993],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015}),Re=new Je;Re.name="chain-left-1__pivot",Re.scale.set(1,1,1),we?(Re.position.copy(we.start),Re.rotation.set(0,0,0)):(Re.position.set(-1.57,3.8844,0),Re.rotation.set(0,0,0)),Re.userData.sculptComponent={id:"chain-left-1",name:"chain-left-1",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"tube",topologyClass:"fiber-strand",topologyRationale:"Observed thin member following a curved centerline",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",tubePath:{points:[[0,0,0],[-.6235382907247959,-2.4543999999999997,.35999999999999993]],radius:.013,radialSegments:6},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"chain-left-1-seat",localStart:[-1.57,3.8844,0],localEnd:[-2.193538290724796,1.43,.35999999999999993],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[-1.57,3.8844,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-left-1",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"links-left-1",kind:"ridge",geometryEffect:"repeated alternating oval chain links along endpoints",confidence:.83}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},Re.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-left-1",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(Re),n["chain-left-1"]=Re;let He=we?new $e(we.endRadius,we.baseRadius,we.length,16,6):Di({points:[[0,0,0],[-.6235382907247959,-2.4543999999999997,.35999999999999993]],radius:.013,radialSegments:6});we||He.scale(1,1,1);let N=new Ue(He,t.gold??new et({color:8947848}));N.name="chain-left-1",we&&(N.position.copy(we.midpoint),N.quaternion.copy(we.quaternion)),N.castShadow=i.castShadow??!0,N.receiveShadow=i.receiveShadow??!0,N.userData.sculptComponent={id:"chain-left-1",name:"chain-left-1",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"tube",topologyClass:"fiber-strand",topologyRationale:"Observed thin member following a curved centerline",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",tubePath:{points:[[0,0,0],[-.6235382907247959,-2.4543999999999997,.35999999999999993]],radius:.013,radialSegments:6},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"chain-left-1-seat",localStart:[-1.57,3.8844,0],localEnd:[-2.193538290724796,1.43,.35999999999999993],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[-1.57,3.8844,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-left-1",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"links-left-1",kind:"ridge",geometryEffect:"repeated alternating oval chain links along endpoints",confidence:.83}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},Re.add(N),s["chain-left-1"]=N,a["chain-left-1"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["chain-left-1"]??(o["chain-left-1"]=[]),o["chain-left-1"].push(Re);let J=mt({parentId:"root",parentSocket:"chain-left-2-seat",localStart:[-1.57,3.8844,0],localEnd:[-1.5700000000000003,1.43,-.72],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015}),se=new Je;se.name="chain-left-2__pivot",se.scale.set(1,1,1),J?(se.position.copy(J.start),se.rotation.set(0,0,0)):(se.position.set(-1.57,3.8844,0),se.rotation.set(0,0,0)),se.userData.sculptComponent={id:"chain-left-2",name:"chain-left-2",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"tube",topologyClass:"fiber-strand",topologyRationale:"Observed thin member following a curved centerline",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",tubePath:{points:[[0,0,0],[-2220446049250313e-31,-2.4543999999999997,-.72]],radius:.013,radialSegments:6},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"chain-left-2-seat",localStart:[-1.57,3.8844,0],localEnd:[-1.5700000000000003,1.43,-.72],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[-1.57,3.8844,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-left-2",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"links-left-2",kind:"ridge",geometryEffect:"repeated alternating oval chain links along endpoints",confidence:.83}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},se.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-left-2",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(se),n["chain-left-2"]=se;let me=J?new $e(J.endRadius,J.baseRadius,J.length,16,6):Di({points:[[0,0,0],[-2220446049250313e-31,-2.4543999999999997,-.72]],radius:.013,radialSegments:6});J||me.scale(1,1,1);let te=new Ue(me,t.gold??new et({color:8947848}));te.name="chain-left-2",J&&(te.position.copy(J.midpoint),te.quaternion.copy(J.quaternion)),te.castShadow=i.castShadow??!0,te.receiveShadow=i.receiveShadow??!0,te.userData.sculptComponent={id:"chain-left-2",name:"chain-left-2",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"tube",topologyClass:"fiber-strand",topologyRationale:"Observed thin member following a curved centerline",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",tubePath:{points:[[0,0,0],[-2220446049250313e-31,-2.4543999999999997,-.72]],radius:.013,radialSegments:6},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"chain-left-2-seat",localStart:[-1.57,3.8844,0],localEnd:[-1.5700000000000003,1.43,-.72],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[-1.57,3.8844,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-left-2",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"links-left-2",kind:"ridge",geometryEffect:"repeated alternating oval chain links along endpoints",confidence:.83}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},se.add(te),s["chain-left-2"]=te,a["chain-left-2"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["chain-left-2"]??(o["chain-left-2"]=[]),o["chain-left-2"].push(se);let Te=mt(null),ye=new Je;ye.name="bar-left__pivot",ye.scale.set(1,1,1),Te?(ye.position.copy(Te.start),ye.rotation.set(0,.3,.05)):(ye.position.set(-1.57,1.5,0),ye.rotation.set(0,.3,.05)),ye.userData.sculptComponent={id:"bar-left",name:"bar-left",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"box",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:{parentId:"root",parentSocket:"bar-left-seat",localStart:[-1.57,1.5,0],localEnd:[-1.57,1.5,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.82,height:.28,depth:.44,units:"world",confidence:.85},transform:{position:[-1.57,1.5,0],rotation:[0,.3,.05]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"bar-left",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"bullion",materialLayers:["bullion"],deformations:[],joints:[],seams:[],localFeatures:[{id:"bullion-bevel-left",kind:"bevel",geometryEffect:"beveled trapezoid bullion block",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},ye.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"bar-left",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(ye),n["bar-left"]=ye;let at=Te?new $e(Te.endRadius,Te.baseRadius,Te.length,16,6):new mn(1,1,1,4,4,4);Te||at.scale(.82,.28,.44);let Ye=new Ue(at,t.bullion??new et({color:8947848}));Ye.name="bar-left",Te&&(Ye.position.copy(Te.midpoint),Ye.quaternion.copy(Te.quaternion)),Ye.castShadow=i.castShadow??!0,Ye.receiveShadow=i.receiveShadow??!0,Ye.userData.sculptComponent={id:"bar-left",name:"bar-left",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"box",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:{parentId:"root",parentSocket:"bar-left-seat",localStart:[-1.57,1.5,0],localEnd:[-1.57,1.5,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.82,height:.28,depth:.44,units:"world",confidence:.85},transform:{position:[-1.57,1.5,0],rotation:[0,.3,.05]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"bar-left",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"bullion",materialLayers:["bullion"],deformations:[],joints:[],seams:[],localFeatures:[{id:"bullion-bevel-left",kind:"bevel",geometryEffect:"beveled trapezoid bullion block",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},ye.add(Ye),s["bar-left"]=Ye,a["bar-left"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["bar-left"]??(o["bar-left"]=[]),o["bar-left"].push(ye);let St=mt(null),vt=new Je;vt.name="bar-left-second__pivot",vt.scale.set(1,1,1),St?(vt.position.copy(St.start),vt.rotation.set(0,-.22,-.06)):(vt.position.set(-1.44,1.76,.015),vt.rotation.set(0,-.22,-.06)),vt.userData.sculptComponent={id:"bar-left-second",name:"bar-left-second",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"box",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:{parentId:"root",parentSocket:"bar-left-second-seat",localStart:[-1.44,1.76,.015],localEnd:[-1.44,1.76,.015],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.82,height:.28,depth:.44,units:"world",confidence:.85},transform:{position:[-1.44,1.76,.015],rotation:[0,-.22,-.06]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"bar-left-second",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"bullion",materialLayers:["bullion"],deformations:[],joints:[],seams:[],localFeatures:[{id:"second-bullion",kind:"bevel",geometryEffect:"second stacked bar with bevel edge",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},vt.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"bar-left-second",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(vt),n["bar-left-second"]=vt;let Ar=St?new $e(St.endRadius,St.baseRadius,St.length,16,6):new mn(1,1,1,4,4,4);St||Ar.scale(.82,.28,.44);let Dn=new Ue(Ar,t.bullion??new et({color:8947848}));Dn.name="bar-left-second",St&&(Dn.position.copy(St.midpoint),Dn.quaternion.copy(St.quaternion)),Dn.castShadow=i.castShadow??!0,Dn.receiveShadow=i.receiveShadow??!0,Dn.userData.sculptComponent={id:"bar-left-second",name:"bar-left-second",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"box",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:{parentId:"root",parentSocket:"bar-left-second-seat",localStart:[-1.44,1.76,.015],localEnd:[-1.44,1.76,.015],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.82,height:.28,depth:.44,units:"world",confidence:.85},transform:{position:[-1.44,1.76,.015],rotation:[0,-.22,-.06]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"bar-left-second",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"bullion",materialLayers:["bullion"],deformations:[],joints:[],seams:[],localFeatures:[{id:"second-bullion",kind:"bevel",geometryEffect:"second stacked bar with bevel edge",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},vt.add(Dn),s["bar-left-second"]=Dn,a["bar-left-second"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["bar-left-second"]??(o["bar-left-second"]=[]),o["bar-left-second"].push(vt);let sn=mt(null),kt=new Je;kt.name="pan-right__pivot",kt.scale.set(1,1,1),sn?(kt.position.copy(sn.start),kt.rotation.set(0,0,0)):(kt.position.set(1.57,1.5999999999999999,0),kt.rotation.set(0,0,0)),kt.userData.sculptComponent={id:"pan-right",name:"pan-right",level:"macro",role:"body",importance:.85,confidence:.88,primitive:"lathe",topologyClass:"continuous-sculpt",topologyRationale:"Observed turned radial profile with varying radius",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",latheProfile:{points:[[0,-.11],[.45,-.105],[.66,-.05],[.75,.06],[.77,.09],[.75,.105],[.7,.085],[.59,-.025],[.43,-.058],[0,-.06]],segments:48},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"pan-right-seat",localStart:[1.57,1.5999999999999999,0],localEnd:[1.57,1.5999999999999999,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[1.57,1.5999999999999999,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"pan-right",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"bowl-right",kind:"hole",geometryEffect:"open shallow bowl with returned wall thickness",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},kt.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"pan-right",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(kt),n["pan-right"]=kt;let Cr=sn?new $e(sn.endRadius,sn.baseRadius,sn.length,16,6):yi({points:[[0,-.11],[.45,-.105],[.66,-.05],[.75,.06],[.77,.09],[.75,.105],[.7,.085],[.59,-.025],[.43,-.058],[0,-.06]],segments:48});sn||Cr.scale(1,1,1);let xn=new Ue(Cr,t.gold??new et({color:8947848}));xn.name="pan-right",sn&&(xn.position.copy(sn.midpoint),xn.quaternion.copy(sn.quaternion)),xn.castShadow=i.castShadow??!0,xn.receiveShadow=i.receiveShadow??!0,xn.userData.sculptComponent={id:"pan-right",name:"pan-right",level:"macro",role:"body",importance:.85,confidence:.88,primitive:"lathe",topologyClass:"continuous-sculpt",topologyRationale:"Observed turned radial profile with varying radius",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",latheProfile:{points:[[0,-.11],[.45,-.105],[.66,-.05],[.75,.06],[.77,.09],[.75,.105],[.7,.085],[.59,-.025],[.43,-.058],[0,-.06]],segments:48},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"pan-right-seat",localStart:[1.57,1.5999999999999999,0],localEnd:[1.57,1.5999999999999999,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[1.57,1.5999999999999999,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"pan-right",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"bowl-right",kind:"hole",geometryEffect:"open shallow bowl with returned wall thickness",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},kt.add(xn),s["pan-right"]=xn,a["pan-right"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["pan-right"]??(o["pan-right"]=[]),o["pan-right"].push(kt);let rn=mt(null),Tt=new Je;Tt.name="rim-right__pivot",Tt.scale.set(1,1,1),rn?(Tt.position.copy(rn.start),Tt.rotation.set(1.5707963267948966,0,0)):(Tt.position.set(0,.097,0),Tt.rotation.set(1.5707963267948966,0,0)),Tt.userData.sculptComponent={id:"rim-right",name:"rim-right",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"torus",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"pan-right",attachment:{parentId:"pan-right",parentSocket:"rim-right-seat",localStart:[0,.097,0],localEnd:[0,.097,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:1.55,height:1.55,depth:.026,units:"world",confidence:.85},transform:{position:[0,.097,0],rotation:[1.5707963267948966,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"rim-right",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"edge-gold",materialLayers:["edge-gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"rim-bead-right",kind:"ridge",geometryEffect:"thin circular rim accent",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},Tt.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"rim-right",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n["pan-right"]??e).add(Tt),n["rim-right"]=Tt;let Li=rn?new $e(rn.endRadius,rn.baseRadius,rn.length,16,6):new cs(.45,.08,12,48);rn||Li.scale(1.55,1.55,.026);let vn=new Ue(Li,t["edge-gold"]??new et({color:8947848}));vn.name="rim-right",rn&&(vn.position.copy(rn.midpoint),vn.quaternion.copy(rn.quaternion)),vn.castShadow=i.castShadow??!0,vn.receiveShadow=i.receiveShadow??!0,vn.userData.sculptComponent={id:"rim-right",name:"rim-right",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"torus",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"pan-right",attachment:{parentId:"pan-right",parentSocket:"rim-right-seat",localStart:[0,.097,0],localEnd:[0,.097,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:1.55,height:1.55,depth:.026,units:"world",confidence:.85},transform:{position:[0,.097,0],rotation:[1.5707963267948966,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"rim-right",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"edge-gold",materialLayers:["edge-gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"rim-bead-right",kind:"ridge",geometryEffect:"thin circular rim accent",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},Tt.add(vn),s["rim-right"]=vn,a["rim-right"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["rim-right"]??(o["rim-right"]=[]),o["rim-right"].push(Tt);let qt=mt({parentId:"root",parentSocket:"chain-right-0-seat",localStart:[1.57,4.1356,0],localEnd:[2.193538290724796,1.68,.35999999999999993],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015}),jt=new Je;jt.name="chain-right-0__pivot",jt.scale.set(1,1,1),qt?(jt.position.copy(qt.start),jt.rotation.set(0,0,0)):(jt.position.set(1.57,4.1356,0),jt.rotation.set(0,0,0)),jt.userData.sculptComponent={id:"chain-right-0",name:"chain-right-0",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"tube",topologyClass:"fiber-strand",topologyRationale:"Observed thin member following a curved centerline",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",tubePath:{points:[[0,0,0],[.6235382907247959,-2.4556000000000004,.35999999999999993]],radius:.013,radialSegments:6},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"chain-right-0-seat",localStart:[1.57,4.1356,0],localEnd:[2.193538290724796,1.68,.35999999999999993],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[1.57,4.1356,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-right-0",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"links-right-0",kind:"ridge",geometryEffect:"repeated alternating oval chain links along endpoints",confidence:.83}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},jt.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-right-0",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(jt),n["chain-right-0"]=jt;let bi=qt?new $e(qt.endRadius,qt.baseRadius,qt.length,16,6):Di({points:[[0,0,0],[.6235382907247959,-2.4556000000000004,.35999999999999993]],radius:.013,radialSegments:6});qt||bi.scale(1,1,1);let Sn=new Ue(bi,t.gold??new et({color:8947848}));Sn.name="chain-right-0",qt&&(Sn.position.copy(qt.midpoint),Sn.quaternion.copy(qt.quaternion)),Sn.castShadow=i.castShadow??!0,Sn.receiveShadow=i.receiveShadow??!0,Sn.userData.sculptComponent={id:"chain-right-0",name:"chain-right-0",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"tube",topologyClass:"fiber-strand",topologyRationale:"Observed thin member following a curved centerline",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",tubePath:{points:[[0,0,0],[.6235382907247959,-2.4556000000000004,.35999999999999993]],radius:.013,radialSegments:6},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"chain-right-0-seat",localStart:[1.57,4.1356,0],localEnd:[2.193538290724796,1.68,.35999999999999993],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[1.57,4.1356,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-right-0",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"links-right-0",kind:"ridge",geometryEffect:"repeated alternating oval chain links along endpoints",confidence:.83}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},jt.add(Sn),s["chain-right-0"]=Sn,a["chain-right-0"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["chain-right-0"]??(o["chain-right-0"]=[]),o["chain-right-0"].push(jt);let un=mt({parentId:"root",parentSocket:"chain-right-1-seat",localStart:[1.57,4.1356,0],localEnd:[.9464617092752042,1.68,.35999999999999993],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015}),Qt=new Je;Qt.name="chain-right-1__pivot",Qt.scale.set(1,1,1),un?(Qt.position.copy(un.start),Qt.rotation.set(0,0,0)):(Qt.position.set(1.57,4.1356,0),Qt.rotation.set(0,0,0)),Qt.userData.sculptComponent={id:"chain-right-1",name:"chain-right-1",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"tube",topologyClass:"fiber-strand",topologyRationale:"Observed thin member following a curved centerline",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",tubePath:{points:[[0,0,0],[-.6235382907247958,-2.4556000000000004,.35999999999999993]],radius:.013,radialSegments:6},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"chain-right-1-seat",localStart:[1.57,4.1356,0],localEnd:[.9464617092752042,1.68,.35999999999999993],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[1.57,4.1356,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-right-1",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"links-right-1",kind:"ridge",geometryEffect:"repeated alternating oval chain links along endpoints",confidence:.83}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},Qt.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-right-1",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(Qt),n["chain-right-1"]=Qt;let Pr=un?new $e(un.endRadius,un.baseRadius,un.length,16,6):Di({points:[[0,0,0],[-.6235382907247958,-2.4556000000000004,.35999999999999993]],radius:.013,radialSegments:6});un||Pr.scale(1,1,1);let Ln=new Ue(Pr,t.gold??new et({color:8947848}));Ln.name="chain-right-1",un&&(Ln.position.copy(un.midpoint),Ln.quaternion.copy(un.quaternion)),Ln.castShadow=i.castShadow??!0,Ln.receiveShadow=i.receiveShadow??!0,Ln.userData.sculptComponent={id:"chain-right-1",name:"chain-right-1",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"tube",topologyClass:"fiber-strand",topologyRationale:"Observed thin member following a curved centerline",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",tubePath:{points:[[0,0,0],[-.6235382907247958,-2.4556000000000004,.35999999999999993]],radius:.013,radialSegments:6},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"chain-right-1-seat",localStart:[1.57,4.1356,0],localEnd:[.9464617092752042,1.68,.35999999999999993],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[1.57,4.1356,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-right-1",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"links-right-1",kind:"ridge",geometryEffect:"repeated alternating oval chain links along endpoints",confidence:.83}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},Qt.add(Ln),s["chain-right-1"]=Ln,a["chain-right-1"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["chain-right-1"]??(o["chain-right-1"]=[]),o["chain-right-1"].push(Qt);let b=mt({parentId:"root",parentSocket:"chain-right-2-seat",localStart:[1.57,4.1356,0],localEnd:[1.5699999999999998,1.68,-.72],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015}),I=new Je;I.name="chain-right-2__pivot",I.scale.set(1,1,1),b?(I.position.copy(b.start),I.rotation.set(0,0,0)):(I.position.set(1.57,4.1356,0),I.rotation.set(0,0,0)),I.userData.sculptComponent={id:"chain-right-2",name:"chain-right-2",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"tube",topologyClass:"fiber-strand",topologyRationale:"Observed thin member following a curved centerline",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",tubePath:{points:[[0,0,0],[-2220446049250313e-31,-2.4556000000000004,-.72]],radius:.013,radialSegments:6},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"chain-right-2-seat",localStart:[1.57,4.1356,0],localEnd:[1.5699999999999998,1.68,-.72],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[1.57,4.1356,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-right-2",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"links-right-2",kind:"ridge",geometryEffect:"repeated alternating oval chain links along endpoints",confidence:.83}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},I.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-right-2",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(I),n["chain-right-2"]=I;let W=b?new $e(b.endRadius,b.baseRadius,b.length,16,6):Di({points:[[0,0,0],[-2220446049250313e-31,-2.4556000000000004,-.72]],radius:.013,radialSegments:6});b||W.scale(1,1,1);let z=new Ue(W,t.gold??new et({color:8947848}));z.name="chain-right-2",b&&(z.position.copy(b.midpoint),z.quaternion.copy(b.quaternion)),z.castShadow=i.castShadow??!0,z.receiveShadow=i.receiveShadow??!0,z.userData.sculptComponent={id:"chain-right-2",name:"chain-right-2",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"tube",topologyClass:"fiber-strand",topologyRationale:"Observed thin member following a curved centerline",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",tubePath:{points:[[0,0,0],[-2220446049250313e-31,-2.4556000000000004,-.72]],radius:.013,radialSegments:6},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"chain-right-2-seat",localStart:[1.57,4.1356,0],localEnd:[1.5699999999999998,1.68,-.72],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[1.57,4.1356,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-right-2",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"links-right-2",kind:"ridge",geometryEffect:"repeated alternating oval chain links along endpoints",confidence:.83}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},I.add(z),s["chain-right-2"]=z,a["chain-right-2"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["chain-right-2"]??(o["chain-right-2"]=[]),o["chain-right-2"].push(I);let k=mt(null),ce=new Je;ce.name="bar-right__pivot",ce.scale.set(1,1,1),k?(ce.position.copy(k.start),ce.rotation.set(0,-.1,.05)):(ce.position.set(1.57,1.75,0),ce.rotation.set(0,-.1,.05)),ce.userData.sculptComponent={id:"bar-right",name:"bar-right",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"box",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:{parentId:"root",parentSocket:"bar-right-seat",localStart:[1.57,1.75,0],localEnd:[1.57,1.75,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.82,height:.28,depth:.44,units:"world",confidence:.85},transform:{position:[1.57,1.75,0],rotation:[0,-.1,.05]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"bar-right",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"bullion",materialLayers:["bullion"],deformations:[],joints:[],seams:[],localFeatures:[{id:"bullion-bevel-right",kind:"bevel",geometryEffect:"beveled trapezoid bullion block",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},ce.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"bar-right",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(ce),n["bar-right"]=ce;let Me=k?new $e(k.endRadius,k.baseRadius,k.length,16,6):new mn(1,1,1,4,4,4);k||Me.scale(.82,.28,.44);let de=new Ue(Me,t.bullion??new et({color:8947848}));de.name="bar-right",k&&(de.position.copy(k.midpoint),de.quaternion.copy(k.quaternion)),de.castShadow=i.castShadow??!0,de.receiveShadow=i.receiveShadow??!0,de.userData.sculptComponent={id:"bar-right",name:"bar-right",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"box",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:{parentId:"root",parentSocket:"bar-right-seat",localStart:[1.57,1.75,0],localEnd:[1.57,1.75,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.82,height:.28,depth:.44,units:"world",confidence:.85},transform:{position:[1.57,1.75,0],rotation:[0,-.1,.05]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"bar-right",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"bullion",materialLayers:["bullion"],deformations:[],joints:[],seams:[],localFeatures:[{id:"bullion-bevel-right",kind:"bevel",geometryEffect:"beveled trapezoid bullion block",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},ce.add(de),s["bar-right"]=de,a["bar-right"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["bar-right"]??(o["bar-right"]=[]),o["bar-right"].push(ce);let ve=mt({parentId:"root",parentSocket:"column-seat",localStart:[0,2.3,0],localEnd:[0,2.3,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]}),Ie=new Je;Ie.name="finial-neck__pivot",Ie.scale.set(1,1,1),ve?(Ie.position.copy(ve.start),Ie.rotation.set(0,0,0)):(Ie.position.set(0,4.77,0),Ie.rotation.set(0,0,0)),Ie.userData.sculptComponent={id:"finial-neck",name:"finial-neck",level:"macro",role:"body",importance:.85,confidence:.88,primitive:"cylinder",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:{parentId:"root",parentSocket:"column-seat",localStart:[0,2.3,0],localEnd:[0,2.3,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.2,height:.65,depth:.2,units:"world",confidence:.7},transform:{position:[0,4.77,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"column",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"upper-neck",kind:"contour",geometryEffect:"solid connection from spindle to finial",confidence:.8}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},Ie.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"column",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(Ie),n["finial-neck"]=Ie;let Xe=ve?new $e(ve.endRadius,ve.baseRadius,ve.length,16,6):new $e(.5,.5,1,24,8);ve||Xe.scale(.2,.65,.2);let be=new Ue(Xe,t.gold??new et({color:8947848}));return be.name="finial-neck",ve&&(be.position.copy(ve.midpoint),be.quaternion.copy(ve.quaternion)),be.castShadow=i.castShadow??!0,be.receiveShadow=i.receiveShadow??!0,be.userData.sculptComponent={id:"finial-neck",name:"finial-neck",level:"macro",role:"body",importance:.85,confidence:.88,primitive:"cylinder",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:{parentId:"root",parentSocket:"column-seat",localStart:[0,2.3,0],localEnd:[0,2.3,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.2,height:.65,depth:.2,units:"world",confidence:.7},transform:{position:[0,4.77,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"column",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"upper-neck",kind:"contour",geometryEffect:"solid connection from spindle to finial",confidence:.8}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},Ie.add(be),s["finial-neck"]=be,a["finial-neck"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o.column??(o.column=[]),o.column.push(Ie),e.userData.sculptRuntime={nodes:n,meshes:s,sockets:r,colliders:a,destructionGroups:o},e.userData.lookDevTargets={qualityPriority:"reference-fidelity",materialPass:{albedoPaletteRequired:!0,roughnessVariationRequired:!0,normalOrBumpRequired:!0,localOverridesRequired:!0,minimumTextureResolution:1024,preferredTextureResolution:2048,independentMapChannels:["albedo","roughness","height","normal","ambient-occlusion"],requiredSurfaceFrequencyBands:["macro","meso","micro"],geometryReliefRequiredWhenSilhouetteAffected:!0,referencePbrExtraction:{requiredWhenSourceImagePresent:!0,targetThreshold:.7,stopOnLowConfidence:!0,script:"forge/stage1_intake/extract_pbr_evidence.py",acceptedLimitation:"Illustration of highly reflective homogeneous gold: exact maps cannot be recovered. Representative independent PBR channels and measured visual render review are used; no exact material recovery claim."},mustAvoid:["single flat albedo per material","uniform roughness","albedo texture reused as roughness/height/normal/AO","single-frequency random noise","plastic-looking smooth bark, stone, cloth, foliage, or aged material","local color/detail described only in prose without material masks","claiming exact PBR recovery when confidence is below the target threshold"]},lightingPass:{requiredTerms:["key light","fill light","rim or environment light","exposure","tone mapping","background","contact shadow"],mustAvoid:["ambient-only lighting","flat value range","missing contact shadow","reference lighting copied without separating material readability"]},screenshotReview:["Compare albedo palette and local color zones.","Compare roughness/normal/bump response under light.","Compare cavity dirt, edge wear, stains, moss, scratches, or other local masks.","Compare key/fill/rim structure, exposure, tone mapping, background, and contact shadows.","Capture a neutral-light render to verify material readability without reference lighting.","Capture a grazing-light close-up to expose flat normals, uniform roughness, tiling, and plastic highlights.","Capture a reference-matched render from the same camera framing as the source."]},e.userData.actionReadiness={note:"Use root.userData.sculptRuntime.nodes for transforms, sockets for attachments, colliders for physics proxies, and destructionGroups for breakable sets."},e}function md(){let i=document.querySelector("#balance-viewport");if(!i)return;let e=document.querySelector("#balance-fallback"),t=document.querySelector("#scene-status"),n=document.querySelector("#balance-pause"),s=matchMedia("(prefers-reduced-motion: reduce)"),r,a,o,l,c,d=[],u=0,h=!0,f=!1,y=!1,v=s.matches,m=!1,p=0,T=0,A=null,x=!1,M=R=>{t.textContent=R};try{let Y=function(){if(m)return;let oe=Math.max(1,i.clientWidth),re=Math.max(1,i.clientHeight);P.aspect=oe/re,P.updateProjectionMatrix(),r.setSize(oe,re,!1);let Pe=Math.max(5.7,4.9/P.aspect)/2/Math.tan($t.degToRad(17))*1.12;P.position.normalize().multiplyScalar(Pe),o.update(),Z()},q=function(oe){if(u=0,m||!h||document.hidden)return;let re=T?Math.min(.05,(oe-T)/1e3):0;T=oe;let Pe=!v&&!y&&!f;if(Pe&&(p+=re,O.position.y=Math.sin(p*.7)*.045,O.rotation.x=Math.sin(p*.55)*.025,O.rotation.y=Math.sin(p*.33)*.1,O.rotation.z=Math.sin(p*.72)*.018),A!==null){let Le=new Kn().setFromVector3(P.position.clone().sub(o.target)),je=A-Le.theta;je=Math.atan2(Math.sin(je),Math.cos(je)),Math.abs(je)<.005?(A=null,x=!1):(Le.theta+=je*(v?1:.12),P.position.copy(new L().setFromSpherical(Le).add(o.target)))}let bt=o.update();r.render(_,P),(Pe||f||bt||x)&&Z()},Z=function(){!u&&!m&&h&&!document.hidden&&(u=requestAnimationFrame(q))};r=new Co({antialias:!0,alpha:!0,powerPreference:"low-power"}),r.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),r.setClearColor(0,0),r.outputColorSpace=At,r.toneMapping=gs,r.toneMappingExposure=1.05;let R=r.domElement;R.id="balance-canvas",R.tabIndex=0,R.setAttribute("role","img"),R.setAttribute("aria-label","Balan\xE7a dourada em 3D. Arraste horizontalmente para girar 360 graus. Use as setas do teclado para girar e a tecla Home para restaurar."),R.setAttribute("aria-describedby","scene-help"),R.style.touchAction="pan-y",i.append(R);let _=new Ti,w=new Ii(r),C=new No;a=w.fromScene(C,.04),_.environment=a.texture,C.dispose(),w.dispose();let P=new Ft(34,1,.1,100);P.position.set(6,2,12);let F=new us(16773596,408622,1.5);_.add(F);let H=new Ei(16772561,3);H.position.set(-4,6,6),_.add(H);let D=new Ei(13017435,2);D.position.set(5,2,-4),_.add(D);let O=new Je;_.add(O);let V=pd({castShadow:!1,receiveShadow:!1});V.position.y=-2.68,O.add(V),V.traverse(oe=>{oe.isMesh&&(oe.material.envMapIntensity=1.3,oe.material.roughness=Math.max(.18,oe.material.roughness))}),o=new Lo(P,R),o.enableDamping=!0,o.dampingFactor=.075,o.enablePan=!1,o.enableZoom=!1,o.minPolarAngle=.32,o.maxPolarAngle=Math.PI-.32,o.rotateSpeed=.65,o.target.set(0,0,0),o.update(),o.addEventListener("start",()=>{f=!0,A=null,x=!1,Z()}),o.addEventListener("end",()=>{f=!1,Z()}),o.addEventListener("change",Z);let ee=()=>Y();"ResizeObserver"in window?(l=new ResizeObserver(ee),l.observe(i)):(window.addEventListener("resize",ee),d.push(()=>window.removeEventListener("resize",ee))),"IntersectionObserver"in window&&(c=new IntersectionObserver(oe=>{h=oe[0].isIntersecting,h?Z():(cancelAnimationFrame(u),u=0,T=0)},{threshold:.03}),c.observe(i));let ne=oe=>{let re=new Kn().setFromVector3(P.position.clone().sub(o.target));A=(A??re.theta)+oe*Math.PI/4,x=!0,Z(),M(oe>0?"Vista girada 45 graus para a direita.":"Vista girada 45 graus para a esquerda.")},Se=()=>{P.position.set(6,2,12),A=null,x=!1,O.rotation.set(0,0,0),O.position.y=0,Y(),M("Perspectiva inicial restaurada.")},_e=()=>{let oe=y||v;n.setAttribute("aria-pressed",String(oe)),n.textContent=oe?"Retomar balan\xE7o":"Pausar balan\xE7o",n.disabled=v},ke=()=>{y=!y,_e(),Z()};n.addEventListener("click",ke),d.push(()=>n.removeEventListener("click",ke)),document.querySelectorAll("[data-turn]").forEach(oe=>{let re=()=>ne(Number(oe.dataset.turn));oe.addEventListener("click",re),d.push(()=>oe.removeEventListener("click",re))});let ze=document.querySelector("#balance-reset");ze.addEventListener("click",Se),d.push(()=>ze.removeEventListener("click",Se));let Be=oe=>{(oe.key==="ArrowLeft"||oe.key==="ArrowRight")&&(oe.preventDefault(),ne(oe.key==="ArrowLeft"?-1:1)),oe.key==="Home"&&(oe.preventDefault(),Se())};R.addEventListener("keydown",Be),d.push(()=>R.removeEventListener("keydown",Be));let X=oe=>{v=oe.detail.reduced||s.matches,o.enableDamping=!v,v&&(O.rotation.set(0,0,0),O.position.y=0),_e(),Z()};document.addEventListener("azyra:motion",X),d.push(()=>document.removeEventListener("azyra:motion",X)),v=s.matches||document.body.classList.contains("reduced-motion"),o.enableDamping=!v;let K=()=>{document.hidden?(cancelAnimationFrame(u),u=0,T=0):Z()};document.addEventListener("visibilitychange",K),d.push(()=>document.removeEventListener("visibilitychange",K));let xe=oe=>{oe.preventDefault(),m=!0,cancelAnimationFrame(u),u=0,e.hidden=!1,R.hidden=!0,document.querySelectorAll(".balance-controls button").forEach(re=>re.disabled=!0),document.querySelector("#scene-help").textContent="Refer\xEAncia visual da balan\xE7a.",M("Visualiza\xE7\xE3o est\xE1tica. Recarregue a p\xE1gina para tentar retomar o 3D.")};R.addEventListener("webglcontextlost",xe),d.push(()=>R.removeEventListener("webglcontextlost",xe)),window.Azyra3D={root:O,model:V,camera:P,controls:o,turn:ne,reset:Se,get state(){return{reduced:v,userPaused:y,visible:h,dragging:f}}},_e(),Y(),r.render(_,P),e.hidden=!0,i.classList.add("is-ready"),M("3D pronto. Arraste para explorar 360 graus."),Z()}catch(R){m=!0,d.forEach(_=>_()),o?.dispose(),a?.dispose(),r?.dispose(),i.querySelector("canvas")?.remove(),e.hidden=!1,document.querySelectorAll(".balance-controls button").forEach(_=>_.disabled=!0),document.querySelector("#scene-help").textContent="Refer\xEAncia visual da balan\xE7a.",M("Visualiza\xE7\xE3o est\xE1tica dispon\xEDvel. Seu navegador n\xE3o iniciou a experi\xEAncia 3D."),console.warn("Azyra 3D unavailable:",R.message)}function S(){m=!0,cancelAnimationFrame(u),l?.disconnect(),c?.disconnect(),o?.dispose(),d.forEach(_=>_()),a?.dispose();let R=new Set;window.Azyra3D?.model.traverse(_=>{_.isMesh&&(_.geometry.dispose(),(Array.isArray(_.material)?_.material:[_.material]).forEach(C=>{R.has(C)||(R.add(C),C.dispose())}))}),r?.dispose()}window.addEventListener("pagehide",R=>{R.persisted||S()})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",md,{once:!0}):md();})();
/*! For license information please see balance-3d.js.LEGAL.txt */

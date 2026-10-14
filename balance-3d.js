(()=>{var yi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},bi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},gh=0,kl=1,_h=2;var Tr=1,yh=2,As=3,Vn=0,Ht=1,yn=2,Wn=0,Cs=1,zl=2,Hl=3,Gl=4,bh=5;var Bi=100,xh=101,vh=102,Sh=103,Mh=104,wh=200,Eh=201,Th=202,Rh=203,Vl=204,Wl=205,Ah=206,Ch=207,Ph=208,Ih=209,Dh=210,Lh=211,Nh=212,Uh=213,Fh=214,xa=0,va=1,Sa=2,ds=3,Ma=4,wa=5,Ea=6,Ta=7,eo=0,Oh=1,Bh=2,In=0,Xl=1,ql=2,jl=3,Ps=4,Yl=5,Zl=6,Jl=7;var Kl=300,xi=301,ki=302,to=303,no=304,Rr=306,Qn=1e3,Bn=1001,Ra=1002,Ut=1003,kh=1004;var Ar=1005;var zt=1006,io=1007;var vi=1008;var rn=1009,$l=1010,Ql=1011,Is=1012,so=1013,Dn=1014,bn=1015,Ln=1016,ro=1017,ao=1018,Ds=1020,ec=35902,tc=35899,nc=1021,ic=1022,xn=1023,kn=1026,Si=1027,oo=1028,lo=1029,Mi=1030,co=1031;var ho=1033,Cr=33776,Pr=33777,Ir=33778,Dr=33779,uo=35840,fo=35841,po=35842,mo=35843,go=36196,_o=37492,yo=37496,bo=37488,xo=37489,Lr=37490,vo=37491,So=37808,Mo=37809,wo=37810,Eo=37811,To=37812,Ro=37813,Ao=37814,Co=37815,Po=37816,Io=37817,Do=37818,Lo=37819,No=37820,Uo=37821,Fo=36492,Oo=36494,Bo=36495,ko=36283,zo=36284,Nr=36285,Ho=36286;var Js=2300,Aa=2301,_a=2302,Al=2303,Cl=2400,Pl=2401,Il=2402;var zh=3200;var Ur=0,Hh=1,Bt="",Pt="srgb",Ks="srgb-linear",$s="linear",ht="srgb";var ya=7680;var Gh=519,Vh=512,Wh=513,Xh=514,Go=515,qh=516,jh=517,Vo=518,Yh=519,Zh=35044;var sc="300 es",An=2e3,us=2001;function Zd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Jd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function fs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Jh(){let i=fs("canvas");return i.style.display="block",i}var kc={},ps=null;function rc(...i){let e="THREE."+i.shift();ps?ps("log",e,...i):console.log(e,...i)}function Kh(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ge(...i){i=Kh(i);let e="THREE."+i.shift();if(ps)ps("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function qe(...i){i=Kh(i);let e="THREE."+i.shift();if(ps)ps("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ii(...i){let e=i.join(" ");e in kc||(kc[e]=!0,Ge(...i))}function $h(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Qh={[xa]:va,[Sa]:Ea,[Ma]:Ta,[ds]:wa,[va]:xa,[Ea]:Sa,[Ta]:Ma,[wa]:ds},Cn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zc=1234567,qs=Math.PI/180,ms=180/Math.PI;function zi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]).toLowerCase()}function Ke(i,e,t){return Math.max(e,Math.min(t,i))}function ac(i,e){return(i%e+e)%e}function Kd(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function $d(i,e,t){return i!==e?(t-i)/(e-i):0}function js(i,e,t){return(1-t)*i+t*e}function Qd(i,e,t,n){return js(i,e,1-Math.exp(-t*n))}function eu(i,e=1){return e-Math.abs(ac(i,e*2)-e)}function tu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function nu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function iu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function su(i,e){return i+Math.random()*(e-i)}function ru(i){return i*(.5-Math.random())}function au(i){i!==void 0&&(zc=i);let e=zc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ou(i){return i*qs}function lu(i){return i*ms}function cu(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function hu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function du(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function uu(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*h,o*c);break;default:Ge("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function cs(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function $t(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var tn={DEG2RAD:qs,RAD2DEG:ms,generateUUID:zi,clamp:Ke,euclideanModulo:ac,mapLinear:Kd,inverseLerp:$d,lerp:js,damp:Qd,pingpong:eu,smoothstep:tu,smootherstep:nu,randInt:iu,randFloat:su,randFloatSpread:ru,seededRandom:au,degToRad:ou,radToDeg:lu,isPowerOfTwo:cu,ceilPowerOfTwo:hu,floorPowerOfTwo:du,setQuaternionFromProperEuler:uu,normalize:$t,denormalize:cs},uc=class uc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};uc.prototype.isVector2=!0;var le=uc,en=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(u!==v||l!==d||c!==f||h!==g){let m=l*d+c*f+h*g+u*v;m<0&&(d=-d,f=-f,g=-g,v=-v,m=-m);let p=1-o;if(m<.9995){let M=Math.acos(m),R=Math.sin(M);p=Math.sin(p*M)/R,o=Math.sin(o*M)/R,l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+v*o}else{l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+v*o;let M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-o*f,e[t+2]=c*g+h*f+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:Ge("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},fc=class fc{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return sl.copy(this).projectOnVector(e),this.sub(sl)}reflect(e){return this.sub(sl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};fc.prototype.isVector3=!0;var P=fc,sl=new P,Hc=new en,pc=class pc{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],M=s[1],R=s[4],b=s[7],w=s[2],S=s[5],A=s[8];return r[0]=a*v+o*M+l*w,r[3]=a*m+o*R+l*S,r[6]=a*p+o*b+l*A,r[1]=c*v+h*M+u*w,r[4]=c*m+h*R+u*S,r[7]=c*p+h*b+u*A,r[2]=d*v+f*M+g*w,r[5]=d*m+f*R+g*S,r[8]=d*p+f*b+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=u*v,e[1]=(s*c-h*n)*v,e[2]=(o*n-s*a)*v,e[3]=d*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ii("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(rl.makeScale(e,t)),this}rotate(e){return Ii("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(rl.makeRotation(-e)),this}translate(e,t){return Ii("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(rl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};pc.prototype.isMatrix3=!0;var Je=pc,rl=new Je,Gc=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vc=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fu(){let i={enabled:!0,workingColorSpace:Ks,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ht&&(s.r=$n(s.r),s.g=$n(s.g),s.b=$n(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ht&&(s.r=hs(s.r),s.g=hs(s.g),s.b=hs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Bt?$s:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ii("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ii("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ks]:{primaries:e,whitePoint:n,transfer:$s,toXYZ:Gc,fromXYZ:Vc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Pt},outputColorSpaceConfig:{drawingBufferColorSpace:Pt}},[Pt]:{primaries:e,whitePoint:n,transfer:ht,toXYZ:Gc,fromXYZ:Vc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Pt}}}),i}var st=fu();function $n(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function hs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Yi,Ca=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Yi===void 0&&(Yi=fs("canvas")),Yi.width=e.width,Yi.height=e.height;let s=Yi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Yi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=fs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=$n(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor($n(t[n]/255)*255):t[n]=$n(t[n]);return{data:t,width:e.width,height:e.height}}else return Ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},pu=0,gs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:pu++}),this.uuid=zi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(al(s[a].image)):r.push(al(s[a]))}else r=al(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function al(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ca.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ge("Texture: Unable to serialize Texture."),{})}var mu=0,ol=new P,qt=class i extends Cn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Bn,s=Bn,r=zt,a=vi,o=xn,l=rn,c=i.DEFAULT_ANISOTROPY,h=Bt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mu++}),this.uuid=zi(),this.name="",this.source=new gs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ol).x}get height(){return this.source.getSize(ol).y}get depth(){return this.source.getSize(ol).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ge(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ge(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qn:e.x=e.x-Math.floor(e.x);break;case Bn:e.x=e.x<0?0:1;break;case Ra:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qn:e.y=e.y-Math.floor(e.y);break;case Bn:e.y=e.y<0?0:1;break;case Ra:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=Kl;qt.DEFAULT_ANISOTROPY=1;var mc=class mc{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let R=(c+1)/2,b=(f+1)/2,w=(p+1)/2,S=(h+d)/4,A=(u+v)/4,_=(g+m)/4;return R>b&&R>w?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=S/n,r=A/n):b>w?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=S/s,r=_/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=A/r,s=_/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-v)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};mc.prototype.isVector4=!0;var vt=mc,Pa=class extends Cn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new qt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new gs(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},sn=class extends Pa{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Qs=class extends qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ia=class extends qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Qa=class Qa{constructor(e,t,n,s,r,a,o,l,c,h,u,d,f,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,d,f,g,v,m)}set(e,t,n,s,r,a,o,l,c,h,u,d,f,g,v,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qa().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Zi.setFromMatrixColumn(e,0).length(),r=1/Zi.setFromMatrixColumn(e,1).length(),a=1/Zi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,g=c*h,v=c*u;t[0]=d+v*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,g=c*h,v=c*u;t[0]=d-v*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=v-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-v*u}else if(e.order==="XZY"){let d=a*l,f=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gu,e,_u)}lookAt(e,t,n){let s=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),ai.crossVectors(n,cn),ai.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),ai.crossVectors(n,cn)),ai.normalize(),Zr.crossVectors(cn,ai),s[0]=ai.x,s[4]=Zr.x,s[8]=cn.x,s[1]=ai.y,s[5]=Zr.y,s[9]=cn.y,s[2]=ai.z,s[6]=Zr.z,s[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],M=n[3],R=n[7],b=n[11],w=n[15],S=s[0],A=s[4],_=s[8],T=s[12],C=s[1],I=s[5],U=s[9],V=s[13],D=s[2],O=s[6],H=s[10],X=s[14],ne=s[3],W=s[7],Z=s[11],ee=s[15];return r[0]=a*S+o*C+l*D+c*ne,r[4]=a*A+o*I+l*O+c*W,r[8]=a*_+o*U+l*H+c*Z,r[12]=a*T+o*V+l*X+c*ee,r[1]=h*S+u*C+d*D+f*ne,r[5]=h*A+u*I+d*O+f*W,r[9]=h*_+u*U+d*H+f*Z,r[13]=h*T+u*V+d*X+f*ee,r[2]=g*S+v*C+m*D+p*ne,r[6]=g*A+v*I+m*O+p*W,r[10]=g*_+v*U+m*H+p*Z,r[14]=g*T+v*V+m*X+p*ee,r[3]=M*S+R*C+b*D+w*ne,r[7]=M*A+R*I+b*O+w*W,r[11]=M*_+R*U+b*H+w*Z,r[15]=M*T+R*V+b*X+w*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15],M=l*f-c*d,R=o*f-c*u,b=o*d-l*u,w=a*f-c*h,S=a*d-l*h,A=a*u-o*h;return t*(v*M-m*R+p*b)-n*(g*M-m*w+p*S)+s*(g*R-v*w+p*A)-r*(g*b-v*S+m*A)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],M=t*o-n*a,R=t*l-s*a,b=t*c-r*a,w=n*l-s*o,S=n*c-r*o,A=s*c-r*l,_=h*v-u*g,T=h*m-d*g,C=h*p-f*g,I=u*m-d*v,U=u*p-f*v,V=d*p-f*m,D=M*V-R*U+b*I+w*C-S*T+A*_;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/D;return e[0]=(o*V-l*U+c*I)*O,e[1]=(s*U-n*V-r*I)*O,e[2]=(v*A-m*S+p*w)*O,e[3]=(d*S-u*A-f*w)*O,e[4]=(l*C-a*V-c*T)*O,e[5]=(t*V-s*C+r*T)*O,e[6]=(m*b-g*A-p*R)*O,e[7]=(h*A-d*b+f*R)*O,e[8]=(a*U-o*C+c*_)*O,e[9]=(n*C-t*U-r*_)*O,e[10]=(g*S-v*b+p*M)*O,e[11]=(u*b-h*S-f*M)*O,e[12]=(o*T-a*I-l*_)*O,e[13]=(t*I-n*T+s*_)*O,e[14]=(v*R-g*w-m*M)*O,e[15]=(h*w-u*R+d*M)*O,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,v=a*h,m=a*u,p=o*u,M=l*c,R=l*h,b=l*u,w=n.x,S=n.y,A=n.z;return s[0]=(1-(v+p))*w,s[1]=(f+b)*w,s[2]=(g-R)*w,s[3]=0,s[4]=(f-b)*S,s[5]=(1-(d+p))*S,s[6]=(m+M)*S,s[7]=0,s[8]=(g+R)*A,s[9]=(m-M)*A,s[10]=(1-(d+v))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Zi.set(s[0],s[1],s[2]).length(),o=Zi.set(s[4],s[5],s[6]).length(),l=Zi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),En.copy(this);let c=1/a,h=1/o,u=1/l;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=u,En.elements[9]*=u,En.elements[10]*=u,t.setFromRotationMatrix(En),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=An,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===An)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===us)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=An,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===An)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===us)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Qa.prototype.isMatrix4=!0;var gt=Qa,Zi=new P,En=new gt,gu=new P(0,0,0),_u=new P(1,1,1),ai=new P,Zr=new P,cn=new P,Wc=new gt,Xc=new en,zn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Wc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xc.setFromEuler(this),this.setFromQuaternion(Xc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};zn.DEFAULT_ORDER="XYZ";var er=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},yu=0,qc=new P,Ji=new en,jn=new gt,Jr=new P,ks=new P,bu=new P,xu=new en,jc=new P(1,0,0),Yc=new P(0,1,0),Zc=new P(0,0,1),Jc={type:"added"},vu={type:"removed"},Ki={type:"childadded",child:null},ll={type:"childremoved",child:null},Ft=class i extends Cn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yu++}),this.uuid=zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new P,t=new zn,n=new en,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new gt},normalMatrix:{value:new Je}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new er,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.premultiply(Ji),this}rotateX(e){return this.rotateOnAxis(jc,e)}rotateY(e){return this.rotateOnAxis(Yc,e)}rotateZ(e){return this.rotateOnAxis(Zc,e)}translateOnAxis(e,t){return qc.copy(e).applyQuaternion(this.quaternion),this.position.add(qc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(jc,e)}translateY(e){return this.translateOnAxis(Yc,e)}translateZ(e){return this.translateOnAxis(Zc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Jr.copy(e):Jr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(ks,Jr,this.up):jn.lookAt(Jr,ks,this.up),this.quaternion.setFromRotationMatrix(jn),s&&(jn.extractRotation(s.matrixWorld),Ji.setFromRotationMatrix(jn),this.quaternion.premultiply(Ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jc),Ki.child=e,this.dispatchEvent(Ki),Ki.child=null):qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vu),ll.child=e,this.dispatchEvent(ll),ll.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jc),Ki.child=e,this.dispatchEvent(Ki),Ki.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,e,bu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,xu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ft.DEFAULT_UP=new P(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var it=class extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}},Su={type:"move"},_s=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new it,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new it,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new it,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Su)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new it;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ed={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},Kr={h:0,s:0,l:0};function cl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var We=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=st.workingColorSpace){return this.r=e,this.g=t,this.b=n,st.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=st.workingColorSpace){if(e=ac(e,1),t=Ke(t,0,1),n=Ke(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=cl(a,r,e+1/3),this.g=cl(a,r,e),this.b=cl(a,r,e-1/3)}return st.colorSpaceToWorking(this,s),this}setStyle(e,t=Pt){function n(r){r!==void 0&&parseFloat(r)<1&&Ge("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ge("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ge("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pt){let n=ed[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ge("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$n(e.r),this.g=$n(e.g),this.b=$n(e.b),this}copyLinearToSRGB(e){return this.r=hs(e.r),this.g=hs(e.g),this.b=hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return st.workingToColorSpace(Xt.copy(this),e),Math.round(Ke(Xt.r*255,0,255))*65536+Math.round(Ke(Xt.g*255,0,255))*256+Math.round(Ke(Xt.b*255,0,255))}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.workingToColorSpace(Xt.copy(this),t);let n=Xt.r,s=Xt.g,r=Xt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=st.workingColorSpace){return st.workingToColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Pt){st.workingToColorSpace(Xt.copy(this),e);let t=Xt.r,n=Xt.g,s=Xt.b;return e!==Pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(oi),this.setHSL(oi.h+e,oi.s+t,oi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(oi),e.getHSL(Kr);let n=js(oi.h,Kr.h,t),s=js(oi.s,Kr.s,t),r=js(oi.l,Kr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xt=new We;We.NAMES=ed;var Di=class extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Tn=new P,Yn=new P,hl=new P,Zn=new P,$i=new P,Qi=new P,Kc=new P,dl=new P,ul=new P,fl=new P,pl=new vt,ml=new vt,gl=new vt,di=class i{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Tn.subVectors(e,t),s.cross(Tn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Tn.subVectors(s,t),Yn.subVectors(n,t),hl.subVectors(e,t);let a=Tn.dot(Tn),o=Tn.dot(Yn),l=Tn.dot(hl),c=Yn.dot(Yn),h=Yn.dot(hl),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Zn.x),l.addScaledVector(a,Zn.y),l.addScaledVector(o,Zn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return pl.setScalar(0),ml.setScalar(0),gl.setScalar(0),pl.fromBufferAttribute(e,t),ml.fromBufferAttribute(e,n),gl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(pl,r.x),a.addScaledVector(ml,r.y),a.addScaledVector(gl,r.z),a}static isFrontFacing(e,t,n,s){return Tn.subVectors(n,t),Yn.subVectors(e,t),Tn.cross(Yn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),Tn.cross(Yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;$i.subVectors(s,n),Qi.subVectors(r,n),dl.subVectors(e,n);let l=$i.dot(dl),c=Qi.dot(dl);if(l<=0&&c<=0)return t.copy(n);ul.subVectors(e,s);let h=$i.dot(ul),u=Qi.dot(ul);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector($i,a);fl.subVectors(e,r);let f=$i.dot(fl),g=Qi.dot(fl);if(g>=0&&f<=g)return t.copy(r);let v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Qi,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Kc.subVectors(r,s),o=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Kc,o);let p=1/(m+v+d);return a=v*p,o=d*p,t.copy(n).addScaledVector($i,a).addScaledVector(Qi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Pn=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Rn):Rn.fromBufferAttribute(r,a),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$r.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$r.copy(n.boundingBox)),$r.applyMatrix4(e.matrixWorld),this.union($r)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zs),Qr.subVectors(this.max,zs),es.subVectors(e.a,zs),ts.subVectors(e.b,zs),ns.subVectors(e.c,zs),li.subVectors(ts,es),ci.subVectors(ns,ts),Ti.subVectors(es,ns);let t=[0,-li.z,li.y,0,-ci.z,ci.y,0,-Ti.z,Ti.y,li.z,0,-li.x,ci.z,0,-ci.x,Ti.z,0,-Ti.x,-li.y,li.x,0,-ci.y,ci.x,0,-Ti.y,Ti.x,0];return!_l(t,es,ts,ns,Qr)||(t=[1,0,0,0,1,0,0,0,1],!_l(t,es,ts,ns,Qr))?!1:(ea.crossVectors(li,ci),t=[ea.x,ea.y,ea.z],_l(t,es,ts,ns,Qr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Jn=[new P,new P,new P,new P,new P,new P,new P,new P],Rn=new P,$r=new Pn,es=new P,ts=new P,ns=new P,li=new P,ci=new P,Ti=new P,zs=new P,Qr=new P,ea=new P,Ri=new P;function _l(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ri.fromArray(i,r);let o=s.x*Math.abs(Ri.x)+s.y*Math.abs(Ri.y)+s.z*Math.abs(Ri.z),l=e.dot(Ri),c=t.dot(Ri),h=n.dot(Ri);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ct=new P,ta=new le,Mu=0,Qt=class extends Cn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Mu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Zh,this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ta.fromBufferAttribute(this,t),ta.applyMatrix3(e),this.setXY(t,ta.x,ta.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=cs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=cs(t,this.array)),t}setX(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=cs(t,this.array)),t}setY(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=cs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=cs(t,this.array)),t}setW(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array),s=$t(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array),s=$t(s,this.array),r=$t(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var tr=class extends Qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var nr=class extends Qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var dt=class extends Qt{constructor(e,t,n){super(new Float32Array(e),t,n)}},wu=new Pn,Hs=new P,yl=new P,ui=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):wu.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hs.subVectors(e,this.center);let t=Hs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Hs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hs.copy(e.center).add(yl)),this.expandByPoint(Hs.copy(e.center).sub(yl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Eu=0,_n=new gt,bl=new Ft,is=new P,hn=new Pn,Gs=new Pn,Nt=new P,Ot=class i extends Cn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Eu++}),this.uuid=zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zd(e)?nr:tr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,t,n){return _n.makeTranslation(e,t,n),this.applyMatrix4(_n),this}scale(e,t,n){return _n.makeScale(e,t,n),this.applyMatrix4(_n),this}lookAt(e){return bl.lookAt(e),bl.updateMatrix(),this.applyMatrix4(bl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new dt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ui);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Gs.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(hn.min,Gs.min),hn.expandByPoint(Nt),Nt.addVectors(hn.max,Gs.max),hn.expandByPoint(Nt)):(hn.expandByPoint(Gs.min),hn.expandByPoint(Gs.max))}hn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Nt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Nt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Nt.fromBufferAttribute(o,c),l&&(is.fromBufferAttribute(e,c),Nt.add(is)),s=Math.max(s,n.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Qt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new P,l[_]=new P;let c=new P,h=new P,u=new P,d=new le,f=new le,g=new le,v=new P,m=new P;function p(_,T,C){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,C),d.fromBufferAttribute(r,_),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,C),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(I),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(I),o[_].add(v),o[T].add(v),o[C].add(v),l[_].add(m),l[T].add(m),l[C].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let _=0,T=M.length;_<T;++_){let C=M[_],I=C.start,U=C.count;for(let V=I,D=I+U;V<D;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}let R=new P,b=new P,w=new P,S=new P;function A(_){w.fromBufferAttribute(s,_),S.copy(w);let T=o[_];R.copy(T),R.sub(w.multiplyScalar(w.dot(T))).normalize(),b.crossVectors(S,T);let I=b.dot(l[_])<0?-1:1;a.setXYZW(_,R.x,R.y,R.z,I)}for(let _=0,T=M.length;_<T;++_){let C=M[_],I=C.start,U=C.count;for(let V=I,D=I+U;V<D;V+=3)A(e.getX(V+0)),A(e.getX(V+1)),A(e.getX(V+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,u=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Qt(d,h,u)}if(this.index===null)return Ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var xl=new P,Tu=new P,Ru=new Je,dn=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=xl.subVectors(n,t).cross(Tu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(xl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ru.getNormalMatrix(e),s=this.coplanarPoint(xl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Au=0,ei=class extends Cn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Au++}),this.uuid=zi(),this.name="",this.type="Material",this.blending=Cs,this.side=Vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vl,this.blendDst=Wl,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ya,this.stencilZFail=ya,this.stencilZPass=ya,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ge(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ge(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new We().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new dn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new le().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new le().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Kn=new P,vl=new P,na=new P,ia=new P,ys=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kn.copy(this.origin).addScaledVector(this.direction,t),Kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){vl.copy(e).add(t).multiplyScalar(.5),na.copy(t).sub(e).normalize(),ia.copy(this.origin).sub(vl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(na),o=ia.dot(this.direction),l=-ia.dot(na),c=ia.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let v=1/h;u*=v,d*=v,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(vl).addScaledVector(na,d),f}intersectSphere(e,t){if(e.radius<0)return null;Kn.subVectors(e.center,this.origin);let n=Kn.dot(this.direction),s=Kn.dot(Kn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Kn)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,g=t.x-a.x,v=t.y-a.y,m=t.z-a.z,p=n.x-a.x,M=n.y-a.y,R=n.z-a.z,b=Math.abs(l),w=Math.abs(c),S=Math.abs(h),A,_,T,C,I,U,V,D,O,H,X,ne;if(b>=w&&b>=S?(T=l,U=u,O=g,ne=p,l>=0?(A=c,_=h,C=d,I=f,V=v,D=m,H=M,X=R):(A=h,_=c,C=f,I=d,V=m,D=v,H=R,X=M)):w>=S?(T=c,U=d,O=v,ne=M,c>=0?(A=h,_=l,C=f,I=u,V=m,D=g,H=R,X=p):(A=l,_=h,C=u,I=f,V=g,D=m,H=p,X=R)):(T=h,U=f,O=m,ne=R,h>=0?(A=l,_=c,C=u,I=d,V=g,D=v,H=p,X=M):(A=c,_=l,C=d,I=u,V=v,D=g,H=M,X=p)),T===0)return null;let W=A/T,Z=_/T,ee=1/T,we=C-W*U,_e=I-Z*U,He=V-W*O,je=D-Z*O,Xe=H-W*ne,j=X-Z*ne,J=Xe*je-j*He,ye=we*j-_e*Xe,Ne=He*_e-je*we;if(s){if(J<0||ye<0||Ne<0)return null}else if((J<0||ye<0||Ne<0)&&(J>0||ye>0||Ne>0))return null;let ie=J+ye+Ne;if(ie===0)return null;let ve=ee*(J*U+ye*O+Ne*ne);return(ie>0?ve<0:ve>0)?null:this.at(ve/ie,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Li=class extends ei{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=eo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},$c=new gt,Ai=new ys,sa=new ui,Qc=new P,ra=new P,aa=new P,oa=new P,Sl=new P,la=new P,eh=new P,ca=new P,Ve=class extends Ft{constructor(e=new Ot,t=new Li){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){la.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Sl.fromBufferAttribute(u,e),a?la.addScaledVector(Sl,h):la.addScaledVector(Sl.sub(t),h))}t.add(la)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),sa.copy(n.boundingSphere),sa.applyMatrix4(r),Ai.copy(e.ray).recast(e.near),!(sa.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(sa,Qc)===null||Ai.origin.distanceToSquared(Qc)>(e.far-e.near)**2))&&($c.copy(r).invert(),Ai.copy(e.ray).applyMatrix4($c),!(n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ai)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let m=d[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),R=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let b=M,w=R;b<w;b+=3){let S=o.getX(b),A=o.getX(b+1),_=o.getX(b+2);s=ha(this,p,e,n,c,h,u,S,A,_),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let M=o.getX(m),R=o.getX(m+1),b=o.getX(m+2);s=ha(this,a,e,n,c,h,u,M,R,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let m=d[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),R=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=M,w=R;b<w;b+=3){let S=b,A=b+1,_=b+2;s=ha(this,p,e,n,c,h,u,S,A,_),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let M=m,R=m+1,b=m+2;s=ha(this,a,e,n,c,h,u,M,R,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Cu(i,e,t,n,s,r,a,o){let l;if(e.side===Ht?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Vn,o),l===null)return null;ca.copy(o),ca.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ca);return c<t.near||c>t.far?null:{distance:c,point:ca.clone(),object:i}}function ha(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,ra),i.getVertexPosition(l,aa),i.getVertexPosition(c,oa);let h=Cu(i,e,t,n,ra,aa,oa,eh);if(h){let u=new P;di.getBarycoord(eh,ra,aa,oa,u),s&&(h.uv=di.getInterpolatedAttribute(s,o,l,c,u,new le)),r&&(h.uv1=di.getInterpolatedAttribute(r,o,l,c,u,new le)),a&&(h.normal=di.getInterpolatedAttribute(a,o,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new P,materialIndex:0};di.getNormal(ra,aa,oa,d.normal),h.face=d,h.barycoord=u}return h}var ir=class extends qt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Ut,h=Ut,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var bs=class extends Qt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ss=new gt,th=new gt,da=[],nh=new Pn,Pu=new gt,Vs=new Ve,Ws=new ui,sr=class extends Ve{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new bs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Pu)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Pn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ss),nh.copy(e.boundingBox).applyMatrix4(ss),this.boundingBox.union(nh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ui),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ss),Ws.copy(e.boundingSphere).applyMatrix4(ss),this.boundingSphere.union(Ws)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Vs.geometry=this.geometry,Vs.material=this.material,Vs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ws.copy(this.boundingSphere),Ws.applyMatrix4(n),e.ray.intersectsSphere(Ws)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ss),th.multiplyMatrices(n,ss),Vs.matrixWorld=th,Vs.raycast(e,da);for(let a=0,o=da.length;a<o;a++){let l=da[a];l.instanceId=r,l.object=this,t.push(l)}da.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new bs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ir(new Float32Array(s*this.count),s,this.count,oo,bn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ci=new ui,Iu=new le(.5,.5),ua=new P,xs=class{constructor(e=new dn,t=new dn,n=new dn,s=new dn,r=new dn,a=new dn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=An,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],v=r[9],m=r[10],p=r[11],M=r[12],R=r[13],b=r[14],w=r[15];if(s[0].setComponents(c-a,f-h,p-g,w-M).normalize(),s[1].setComponents(c+a,f+h,p+g,w+M).normalize(),s[2].setComponents(c+o,f+u,p+v,w+R).normalize(),s[3].setComponents(c-o,f-u,p-v,w-R).normalize(),n)s[4].setComponents(l,d,m,b).normalize(),s[5].setComponents(c-l,f-d,p-m,w-b).normalize();else if(s[4].setComponents(c-l,f-d,p-m,w-b).normalize(),t===An)s[5].setComponents(c+l,f+d,p+m,w+b).normalize();else if(t===us)s[5].setComponents(l,d,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(e){Ci.center.set(0,0,0);let t=Iu.distanceTo(e.center);return Ci.radius=.7071067811865476+t,Ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ua.x=s.normal.x>0?e.max.x:e.min.x,ua.y=s.normal.y>0?e.max.y:e.min.y,ua.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ua)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var rr=class extends qt{constructor(e=[],t=xi,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ar=class extends qt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var fi=class extends qt{constructor(e,t,n=Dn,s,r,a,o=Ut,l=Ut,c,h=kn,u=1){if(h!==kn&&h!==Si)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new gs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Da=class extends fi{constructor(e,t=Dn,n=xi,s,r,a=Ut,o=Ut,l,c=kn){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},or=class extends qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},jt=class i extends Ot{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(u,2));function g(v,m,p,M,R,b,w,S,A,_,T){let C=b/A,I=w/_,U=b/2,V=w/2,D=S/2,O=A+1,H=_+1,X=0,ne=0,W=new P;for(let Z=0;Z<H;Z++){let ee=Z*I-V;for(let we=0;we<O;we++){let _e=we*C-U;W[v]=_e*M,W[m]=ee*R,W[p]=D,c.push(W.x,W.y,W.z),W[v]=0,W[m]=0,W[p]=S>0?1:-1,h.push(W.x,W.y,W.z),u.push(we/A),u.push(1-Z/_),X+=1}}for(let Z=0;Z<_;Z++)for(let ee=0;ee<A;ee++){let we=d+ee+O*Z,_e=d+ee+O*(Z+1),He=d+(ee+1)+O*(Z+1),je=d+(ee+1)+O*Z;l.push(we,_e,je),l.push(_e,He,je),ne+=6}o.addGroup(f,ne,T),f+=ne,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var rt=class i extends Ot{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,v=[],m=n/2,p=0;M(),a===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(h),this.setAttribute("position",new dt(u,3)),this.setAttribute("normal",new dt(d,3)),this.setAttribute("uv",new dt(f,2));function M(){let b=new P,w=new P,S=0,A=(t-e)/n;for(let _=0;_<=r;_++){let T=[],C=_/r,I=C*(t-e)+e;for(let U=0;U<=s;U++){let V=U/s,D=V*l+o,O=Math.sin(D),H=Math.cos(D);w.x=I*O,w.y=-C*n+m,w.z=I*H,u.push(w.x,w.y,w.z),b.set(O,A,H).normalize(),d.push(b.x,b.y,b.z),f.push(V,1-C),T.push(g++)}v.push(T)}for(let _=0;_<s;_++)for(let T=0;T<r;T++){let C=v[T][_],I=v[T+1][_],U=v[T+1][_+1],V=v[T][_+1];(e>0||T!==0)&&(h.push(C,I,V),S+=3),(t>0||T!==r-1)&&(h.push(I,U,V),S+=3)}c.addGroup(p,S,0),p+=S}function R(b){let w=g,S=new le,A=new P,_=0,T=b===!0?e:t,C=b===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,m*C,0),d.push(0,C,0),f.push(.5,.5),g++;let I=g;for(let U=0;U<=s;U++){let D=U/s*l+o,O=Math.cos(D),H=Math.sin(D);A.x=T*H,A.y=m*C,A.z=T*O,u.push(A.x,A.y,A.z),d.push(0,C,0),S.x=O*.5+.5,S.y=H*.5*C+.5,f.push(S.x,S.y),g++}for(let U=0;U<s;U++){let V=w+U,D=I+U;b===!0?h.push(D,D+1,V):h.push(D+1,D,V),_+=3}c.addGroup(p,_,b===!0?1:2),p+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var un=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ge("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new le:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new P,s=[],r=[],a=[],o=new P,l=new gt;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Ke(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Ke(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},vs=class extends un{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new le){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},La=class extends vs{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function oc(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var ih=new P,sh=new P,Ml=new oc,wl=new oc,El=new oc,Hn=class extends un{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new P){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(sh.subVectors(s[0],s[1]).add(s[0]),c=sh);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(ih.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ih),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Ml.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,v,m),wl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,v,m),El.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Ml.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),wl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),El.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Ml.calc(l),wl.calc(l),El.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function rh(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Du(i,e){let t=1-i;return t*t*e}function Lu(i,e){return 2*(1-i)*i*e}function Nu(i,e){return i*i*e}function Ys(i,e,t,n){return Du(i,e)+Lu(i,t)+Nu(i,n)}function Uu(i,e){let t=1-i;return t*t*t*e}function Fu(i,e){let t=1-i;return 3*t*t*i*e}function Ou(i,e){return 3*(1-i)*i*i*e}function Bu(i,e){return i*i*i*e}function Zs(i,e,t,n,s){return Uu(i,e)+Fu(i,t)+Ou(i,n)+Bu(i,s)}var lr=class extends un{constructor(e=new le,t=new le,n=new le,s=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new le){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Zs(e,s.x,r.x,a.x,o.x),Zs(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Na=class extends un{constructor(e=new P,t=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Zs(e,s.x,r.x,a.x,o.x),Zs(e,s.y,r.y,a.y,o.y),Zs(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},cr=class extends un{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ua=class extends un{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},hr=class extends un{constructor(e=new le,t=new le,n=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new le){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ys(e,s.x,r.x,a.x),Ys(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},dr=class extends un{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ys(e,s.x,r.x,a.x),Ys(e,s.y,r.y,a.y),Ys(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ur=class extends un{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(rh(o,l.x,c.x,h.x,u.x),rh(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new le().fromArray(s))}return this}},Fa=Object.freeze({__proto__:null,ArcCurve:La,CatmullRomCurve3:Hn,CubicBezierCurve:lr,CubicBezierCurve3:Na,EllipseCurve:vs,LineCurve:cr,LineCurve3:Ua,QuadraticBezierCurve:hr,QuadraticBezierCurve3:dr,SplineCurve:ur}),Oa=class extends un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Fa[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Fa[s.type]().fromJSON(s))}return this}},fr=class extends Oa{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new cr(this.currentPoint.clone(),new le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new hr(this.currentPoint.clone(),new le(e,t),new le(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new lr(this.currentPoint.clone(),new le(e,t),new le(n,s),new le(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ur(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new vs(e,t,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ss=class extends fr{constructor(e){super(e),this.uuid=zi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new fr().fromJSON(s))}return this}};function ku(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=td(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Wu(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let h=o,u=l;for(let d=t;d<s;d+=t){let f=i[d],g=i[d+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return pr(r,a,t,o,l,c,0),a}function td(i,e,t,n,s){let r;if(s===tf(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=ah(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=ah(a/n|0,i[a],i[a+1],r);return r&&Ms(r,r.next)&&(gr(r),r=r.next),r}function Ni(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ms(t,t.next)||Mt(t.prev,t,t.next)===0)){if(gr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function pr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Zu(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Hu(i,n,s,r):zu(i)){e.push(l.i,i.i,c.i),gr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Gu(Ni(i),e),pr(i,e,t,n,s,r,2)):a===2&&Vu(i,e,t,n,s,r):pr(Ni(i),e,t,n,s,r,1);break}}}function zu(i){let e=i.prev,t=i,n=i.next;if(Mt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),d=Math.max(s,r,a),f=Math.max(o,l,c),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Xs(s,o,r,l,a,c,g.x,g.y)&&Mt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Hu(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Mt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=Math.min(o,l,c),g=Math.min(h,u,d),v=Math.max(o,l,c),m=Math.max(h,u,d),p=Dl(f,g,e,t,n),M=Dl(v,m,e,t,n),R=i.prevZ,b=i.nextZ;for(;R&&R.z>=p&&b&&b.z<=M;){if(R.x>=f&&R.x<=v&&R.y>=g&&R.y<=m&&R!==s&&R!==a&&Xs(o,h,l,u,c,d,R.x,R.y)&&Mt(R.prev,R,R.next)>=0||(R=R.prevZ,b.x>=f&&b.x<=v&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&Xs(o,h,l,u,c,d,b.x,b.y)&&Mt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;R&&R.z>=p;){if(R.x>=f&&R.x<=v&&R.y>=g&&R.y<=m&&R!==s&&R!==a&&Xs(o,h,l,u,c,d,R.x,R.y)&&Mt(R.prev,R,R.next)>=0)return!1;R=R.prevZ}for(;b&&b.z<=M;){if(b.x>=f&&b.x<=v&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&Xs(o,h,l,u,c,d,b.x,b.y)&&Mt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Gu(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Ms(n,s)&&id(n,t,t.next,s)&&mr(n,s)&&mr(s,n)&&(e.push(n.i,t.i,s.i),gr(t),gr(t.next),t=i=s),t=t.next}while(t!==i);return Ni(t)}function Vu(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&$u(a,o)){let l=sd(a,o);a=Ni(a,a.next),l=Ni(l,l.next),pr(a,e,t,n,s,r,0),pr(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Wu(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=td(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Ku(c))}s.sort(Xu);for(let r=0;r<s.length;r++)t=qu(s[r],t);return t}function Xu(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function qu(i,e){let t=ju(i,e);if(!t)return e;let n=sd(t,i);return Ni(n,n.next),Ni(t,t.next)}function ju(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Ms(i,t))return t;do{if(Ms(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&nd(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);mr(t,i)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&Yu(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function Yu(i,e){return Mt(i.prev,i,e.prev)<0&&Mt(e.next,i,i.next)<0}function Zu(i,e,t,n){let s=i;do s.z===0&&(s.z=Dl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Ju(s)}function Ju(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Dl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Ku(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function nd(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Xs(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&nd(i,e,t,n,s,r,a,o)}function $u(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Qu(i,e)&&(mr(i,e)&&mr(e,i)&&ef(i,e)&&(Mt(i.prev,i,e.prev)||Mt(i,e.prev,e))||Ms(i,e)&&Mt(i.prev,i,i.next)>0&&Mt(e.prev,e,e.next)>0)}function Mt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ms(i,e){return i.x===e.x&&i.y===e.y}function id(i,e,t,n){let s=pa(Mt(i,e,t)),r=pa(Mt(i,e,n)),a=pa(Mt(t,n,i)),o=pa(Mt(t,n,e));return!!(s!==r&&a!==o||s===0&&fa(i,t,e)||r===0&&fa(i,n,e)||a===0&&fa(t,i,n)||o===0&&fa(t,e,n))}function fa(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function pa(i){return i>0?1:i<0?-1:0}function Qu(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&id(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function mr(i,e){return Mt(i.prev,i,i.next)<0?Mt(i,e,i.next)>=0&&Mt(i,i.prev,e)>=0:Mt(i,e,i.prev)<0||Mt(i,i.next,e)<0}function ef(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function sd(i,e){let t=Ll(i.i,i.x,i.y),n=Ll(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function ah(i,e,t,n){let s=Ll(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function gr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ll(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function tf(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Nl=class{static triangulate(e,t,n=2){return ku(e,t,n)}},Pi=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];oh(e),lh(n,e);let a=e.length;t.forEach(oh);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,lh(n,t[l]);let o=Nl.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function oh(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function lh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var _r=class i extends Ot{constructor(e=new Ss([new le(.5,.5),new le(-.5,.5),new le(-.5,-.5),new le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new dt(s,3)),this.setAttribute("uv",new dt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:nf,R,b=!1,w,S,A,_;if(p){R=p.getSpacedPoints(h),b=!0,d=!1;let K=p.isCatmullRomCurve3?p.closed:!1;w=p.computeFrenetFrames(h,K),S=new P,A=new P,_=new P}d||(m=0,f=0,g=0,v=0);let T=o.extractPoints(c),C=T.shape,I=T.holes;if(!Pi.isClockWise(C)){C=C.reverse();for(let K=0,ae=I.length;K<ae;K++){let re=I[K];Pi.isClockWise(re)&&(I[K]=re.reverse())}}function V(K){let re=10000000000000001e-36,oe=K[0];for(let me=1;me<=K.length;me++){let Ue=me%K.length,ke=K[Ue],Oe=ke.x-oe.x,Be=ke.y-oe.y,L=Oe*Oe+Be*Be,tt=Math.max(Math.abs(ke.x),Math.abs(ke.y),Math.abs(oe.x),Math.abs(oe.y)),Ye=re*tt*tt;if(L<=Ye){K.splice(Ue,1),me--;continue}oe=ke}}V(C),I.forEach(V);let D=I.length,O=C;for(let K=0;K<D;K++){let ae=I[K];C=C.concat(ae)}function H(K,ae,re){return ae||qe("ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(ae,re)}let X=C.length;function ne(K,ae,re){let oe,me,Ue,ke=K.x-ae.x,Oe=K.y-ae.y,Be=re.x-K.x,L=re.y-K.y,tt=ke*ke+Oe*Oe,Ye=ke*L-Oe*Be;if(Math.abs(Ye)>Number.EPSILON){let E=Math.sqrt(tt),y=Math.sqrt(Be*Be+L*L),B=ae.x-Oe/E,G=ae.y+ke/E,Y=re.x-L/y,ce=re.y+Be/y,he=((Y-B)*L-(ce-G)*Be)/(ke*L-Oe*Be);oe=B+ke*he-K.x,me=G+Oe*he-K.y;let $=oe*oe+me*me;if($<=2)return new le(oe,me);Ue=Math.sqrt($/2)}else{let E=!1;ke>Number.EPSILON?Be>Number.EPSILON&&(E=!0):ke<-Number.EPSILON?Be<-Number.EPSILON&&(E=!0):Math.sign(Oe)===Math.sign(L)&&(E=!0),E?(oe=-Oe,me=ke,Ue=Math.sqrt(tt)):(oe=ke,me=Oe,Ue=Math.sqrt(tt/2))}return new le(oe/Ue,me/Ue)}let W=[];for(let K=0,ae=O.length,re=ae-1,oe=K+1;K<ae;K++,re++,oe++)re===ae&&(re=0),oe===ae&&(oe=0),W[K]=ne(O[K],O[re],O[oe]);let Z=[],ee,we=W.concat();for(let K=0,ae=D;K<ae;K++){let re=I[K];ee=[];for(let oe=0,me=re.length,Ue=me-1,ke=oe+1;oe<me;oe++,Ue++,ke++)Ue===me&&(Ue=0),ke===me&&(ke=0),ee[oe]=ne(re[oe],re[Ue],re[ke]);Z.push(ee),we=we.concat(ee)}let _e;if(m===0)_e=Pi.triangulateShape(O,I);else{let K=[],ae=[];for(let re=0;re<m;re++){let oe=re/m,me=f*Math.cos(oe*Math.PI/2),Ue=g*Math.sin(oe*Math.PI/2)+v;for(let ke=0,Oe=O.length;ke<Oe;ke++){let Be=H(O[ke],W[ke],Ue);ye(Be.x,Be.y,-me),oe===0&&K.push(Be)}for(let ke=0,Oe=D;ke<Oe;ke++){let Be=I[ke];ee=Z[ke];let L=[];for(let tt=0,Ye=Be.length;tt<Ye;tt++){let E=H(Be[tt],ee[tt],Ue);ye(E.x,E.y,-me),oe===0&&L.push(E)}oe===0&&ae.push(L)}}_e=Pi.triangulateShape(K,ae)}let He=_e.length,je=g+v;for(let K=0;K<X;K++){let ae=d?H(C[K],we[K],je):C[K];b?(A.copy(w.normals[0]).multiplyScalar(ae.x),S.copy(w.binormals[0]).multiplyScalar(ae.y),_.copy(R[0]).add(A).add(S),ye(_.x,_.y,_.z)):ye(ae.x,ae.y,0)}for(let K=1;K<=h;K++)for(let ae=0;ae<X;ae++){let re=d?H(C[ae],we[ae],je):C[ae];b?(A.copy(w.normals[K]).multiplyScalar(re.x),S.copy(w.binormals[K]).multiplyScalar(re.y),_.copy(R[K]).add(A).add(S),ye(_.x,_.y,_.z)):ye(re.x,re.y,u/h*K)}for(let K=m-1;K>=0;K--){let ae=K/m,re=f*Math.cos(ae*Math.PI/2),oe=g*Math.sin(ae*Math.PI/2)+v;for(let me=0,Ue=O.length;me<Ue;me++){let ke=H(O[me],W[me],oe);ye(ke.x,ke.y,u+re)}for(let me=0,Ue=I.length;me<Ue;me++){let ke=I[me];ee=Z[me];for(let Oe=0,Be=ke.length;Oe<Be;Oe++){let L=H(ke[Oe],ee[Oe],oe);b?ye(L.x,L.y+R[h-1].y,R[h-1].x+re):ye(L.x,L.y,u+re)}}}Xe(),j();function Xe(){let K=s.length/3;if(d){let ae=0,re=X*ae;for(let oe=0;oe<He;oe++){let me=_e[oe];Ne(me[2]+re,me[1]+re,me[0]+re)}ae=h+m*2,re=X*ae;for(let oe=0;oe<He;oe++){let me=_e[oe];Ne(me[0]+re,me[1]+re,me[2]+re)}}else{for(let ae=0;ae<He;ae++){let re=_e[ae];Ne(re[2],re[1],re[0])}for(let ae=0;ae<He;ae++){let re=_e[ae];Ne(re[0]+X*h,re[1]+X*h,re[2]+X*h)}}n.addGroup(K,s.length/3-K,0)}function j(){let K=s.length/3,ae=0;J(O,ae),ae+=O.length;for(let re=0,oe=I.length;re<oe;re++){let me=I[re];J(me,ae),ae+=me.length}n.addGroup(K,s.length/3-K,1)}function J(K,ae){let re=K.length;for(;--re>=0;){let oe=re,me=re-1;me<0&&(me=K.length-1);for(let Ue=0,ke=h+m*2;Ue<ke;Ue++){let Oe=X*Ue,Be=X*(Ue+1),L=ae+oe+Oe,tt=ae+me+Oe,Ye=ae+me+Be,E=ae+oe+Be;ie(L,tt,Ye,E)}}}function ye(K,ae,re){l.push(K),l.push(ae),l.push(re)}function Ne(K,ae,re){ve(K),ve(ae),ve(re);let oe=s.length/3,me=M.generateTopUV(n,s,oe-3,oe-2,oe-1);et(me[0]),et(me[1]),et(me[2])}function ie(K,ae,re,oe){ve(K),ve(ae),ve(oe),ve(ae),ve(re),ve(oe);let me=s.length/3,Ue=M.generateSideWallUV(n,s,me-6,me-3,me-2,me-1);et(Ue[0]),et(Ue[1]),et(Ue[3]),et(Ue[1]),et(Ue[2]),et(Ue[3])}function ve(K){s.push(l[K*3+0]),s.push(l[K*3+1]),s.push(l[K*3+2])}function et(K){r.push(K.x),r.push(K.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return sf(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Fa[s.type]().fromJSON(s)),new i(n,e.options)}},nf={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new le(r,a),new le(o,l),new le(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],v=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new le(a,1-l),new le(c,1-u),new le(d,1-g),new le(v,1-p)]:[new le(o,1-l),new le(h,1-u),new le(f,1-g),new le(m,1-p)]}};function sf(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ui=class i extends Ot{constructor(e=[new le(0,-.5),new le(.5,0),new le(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Ke(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,u=new P,d=new le,f=new P,g=new P,v=new P,m=0,p=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:m=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:m=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(g)}for(let M=0;M<=t;M++){let R=n+M*h*s,b=Math.sin(R),w=Math.cos(R);for(let S=0;S<=e.length-1;S++){u.x=e[S].x*b,u.y=e[S].y,u.z=e[S].x*w,a.push(u.x,u.y,u.z),d.x=M/t,d.y=S/(e.length-1),o.push(d.x,d.y);let A=l[3*S+0]*b,_=l[3*S+1],T=l[3*S+0]*w;c.push(A,_,T)}}for(let M=0;M<t;M++)for(let R=0;R<e.length-1;R++){let b=R+M*e.length,w=b,S=b+e.length,A=b+e.length+1,_=b+1;r.push(w,S,_),r.push(A,_,S)}this.setIndex(r),this.setAttribute("position",new dt(a,3)),this.setAttribute("uv",new dt(o,2)),this.setAttribute("normal",new dt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var yr=class i extends Ot{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){let M=p*d-a;for(let R=0;R<c;R++){let b=R*u-r;g.push(b,-M,0),v.push(0,0,1),m.push(R/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){let R=M+c*p,b=M+c*(p+1),w=M+1+c*(p+1),S=M+1+c*p;f.push(R,b,S),f.push(b,w,S)}this.setIndex(f),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(v,3)),this.setAttribute("uv",new dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Fi=class i extends Ot{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new P,d=new P,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){let M=[],R=p/n,b=a+R*o,w=e*Math.cos(b),S=Math.sqrt(e*e-w*w),A=0;p===0&&a===0?A=.5/t:p===n&&l===Math.PI&&(A=-.5/t);for(let _=0;_<=t;_++){let T=_/t,C=s+T*r;u.x=-S*Math.cos(C),u.y=w,u.z=S*Math.sin(C),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(T+A,1-R),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){let R=h[p][M+1],b=h[p][M],w=h[p+1][M],S=h[p+1][M+1];(p!==0||a>0)&&f.push(R,b,S),(p!==n-1||l<Math.PI)&&f.push(b,w,S)}this.setIndex(f),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(v,3)),this.setAttribute("uv",new dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var pi=class i extends Ot{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],u=[],d=new P,f=new P,g=new P;for(let v=0;v<=n;v++){let m=a+v/n*o;for(let p=0;p<=s;p++){let M=p/s*r;f.x=(e+t*Math.cos(m))*Math.cos(M),f.y=(e+t*Math.cos(m))*Math.sin(M),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(M),d.y=e*Math.sin(M),g.subVectors(f,d).normalize(),h.push(g.x,g.y,g.z),u.push(p/s),u.push(v/n)}}for(let v=1;v<=n;v++)for(let m=1;m<=s;m++){let p=(s+1)*v+m-1,M=(s+1)*(v-1)+m-1,R=(s+1)*(v-1)+m,b=(s+1)*v+m;l.push(p,M,b),l.push(M,R,b)}this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var ti=class i extends Ot{constructor(e=new dr(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new P,l=new P,c=new le,h=new P,u=[],d=[],f=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new dt(u,3)),this.setAttribute("normal",new dt(d,3)),this.setAttribute("uv",new dt(f,2));function v(){for(let R=0;R<t;R++)m(R);m(r===!1?t:0),M(),p()}function m(R){h=e.getPointAt(R/t,h);let b=a.normals[R],w=a.binormals[R];for(let S=0;S<=s;S++){let A=S/s*Math.PI*2,_=Math.sin(A),T=-Math.cos(A);l.x=T*b.x+_*w.x,l.y=T*b.y+_*w.y,l.z=T*b.z+_*w.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let R=1;R<=t;R++)for(let b=1;b<=s;b++){let w=(s+1)*(R-1)+(b-1),S=(s+1)*R+(b-1),A=(s+1)*R+b,_=(s+1)*(R-1)+b;g.push(w,S,_),g.push(S,A,_)}}function M(){for(let R=0;R<=t;R++)for(let b=0;b<=s;b++)c.x=R/t,c.y=b/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Fa[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Hi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(ch(s))s.isRenderTargetTexture?(Ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(ch(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Yt(i){let e={};for(let t=0;t<i.length;t++){let n=Hi(i[t]);for(let s in n)e[s]=n[s]}return e}function ch(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function rf(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function lc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}var rd={clone:Hi,merge:Yt},af=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,of=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,fn=class extends ei{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=af,this.fragmentShader=of,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hi(e.uniforms),this.uniformsGroups=rf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new We().setHex(s.value);break;case"v2":this.uniforms[n].value=new le().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new vt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Je().fromArray(s.value);break;case"m4":this.uniforms[n].value=new gt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ba=class extends fn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},at=class extends ei{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ur,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Gn=class extends at{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new We(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new We(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new We(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var br=class extends ei{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ur,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=eo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ka=class extends ei{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},za=class extends ei{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function rs(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Tl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var mi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ha=class extends mi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Cl,endingEnd:Cl}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Pl:r=e,o=2*t-n;break;case Il:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Pl:a=e,l=2*n-t;break;case Il:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),v=g*g,m=v*g,p=-d*m+2*d*v-d*g,M=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,R=(-1-f)*m+(1.5+f)*v+.5*g,b=f*m-f*v;for(let w=0;w!==o;++w)r[w]=p*a[h+w]+M*a[c+w]+R*a[l+w]+b*a[u+w];return r}},Ga=class extends mi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Va=class extends mi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Wa=class extends mi{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(n-t)/(s-t),v=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*v+a[l+m]*g;return r}let d=o*2,f=e-1;for(let g=0;g!==o;++g){let v=a[c+g],m=a[l+g],p=f*d+g*2,M=u[p],R=u[p+1],b=e*d+g*2,w=h[b],S=h[b+1],A=cf(n,t,M,w,s);r[g]=ad(A,v,R,S,m)}return r}};function ad(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function lf(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function cf(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=ad(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=lf(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var pn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=rs(t,this.TimeBufferType),this.values=rs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:rs(e.times,Array),values:rs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Tl(e.settings)&&(n.settings={inTangents:rs(e.settings.inTangents,Array),outTangents:rs(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Va(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ga(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ha(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Wa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Js:t=this.InterpolantFactoryMethodDiscrete;break;case Aa:t=this.InterpolantFactoryMethodLinear;break;case _a:t=this.InterpolantFactoryMethodSmooth;break;case Al:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ge("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Js;case this.InterpolantFactoryMethodLinear:return Aa;case this.InterpolantFactoryMethodSmooth:return _a;case this.InterpolantFactoryMethodBezier:return Al}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Tl(this.settings)&&(hh(this.settings.inTangents,e),hh(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(qe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(qe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){qe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){qe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Jd(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){qe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===_a,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let v=t[u+g];if(v!==t[d+g]||v!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Tl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function hh(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}pn.prototype.ValueTypeName="";pn.prototype.TimeBufferType=Float32Array;pn.prototype.ValueBufferType=Float32Array;pn.prototype.DefaultInterpolation=Aa;var gi=class extends pn{constructor(e,t,n){super(e,t,n)}};gi.prototype.ValueTypeName="bool";gi.prototype.ValueBufferType=Array;gi.prototype.DefaultInterpolation=Js;gi.prototype.InterpolantFactoryMethodLinear=void 0;gi.prototype.InterpolantFactoryMethodSmooth=void 0;var Xa=class extends pn{constructor(e,t,n,s){super(e,t,n,s)}};Xa.prototype.ValueTypeName="color";var qa=class extends pn{constructor(e,t,n,s){super(e,t,n,s)}};qa.prototype.ValueTypeName="number";var ja=class extends mi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)en.slerpFlat(r,0,a,c-o,a,c,l);return r}},xr=class extends pn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new ja(this.times,this.values,this.getValueSize(),e)}};xr.prototype.ValueTypeName="quaternion";xr.prototype.InterpolantFactoryMethodSmooth=void 0;var _i=class extends pn{constructor(e,t,n){super(e,t,n)}};_i.prototype.ValueTypeName="string";_i.prototype.ValueBufferType=Array;_i.prototype.DefaultInterpolation=Js;_i.prototype.InterpolantFactoryMethodLinear=void 0;_i.prototype.InterpolantFactoryMethodSmooth=void 0;var Ya=class extends pn{constructor(e,t,n,s){super(e,t,n,s)}};Ya.prototype.ValueTypeName="vector";var ba={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(dh(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!dh(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function dh(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Za=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},od=new Za,ws=class{constructor(e){this.manager=e!==void 0?e:od,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ws.DEFAULT_MATERIAL_NAME="__DEFAULT";var as=new WeakMap,Ja=class extends ws{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ba.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=as.get(a);u===void 0&&(u=[],as.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=fs("img");function l(){h(),t&&t(this);let u=as.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}as.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),ba.remove(`image:${e}`);let d=as.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(u)}as.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ba.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var vr=class extends ws{constructor(e){super(e)}load(e,t,n,s){let r=new qt,a=new Ja(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Es=class extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ts=class extends Es{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Rl=new gt,uh=new P,fh=new P,Sr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.mapType=rn,this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xs,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;uh.setFromMatrixPosition(e.matrixWorld),t.position.copy(uh),fh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Rl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Rl,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===us||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Rl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ma=new P,ga=new en,On=new P,Mr=class extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=An,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ma,ga,On),On.x===1&&On.y===1&&On.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ma,ga,On.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ma,ga,On),On.x===1&&On.y===1&&On.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ma,ga,On.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},hi=new P,ph=new le,mh=new le,kt=class extends Mr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ms*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(qs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ms*2*Math.atan(Math.tan(qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hi.x,hi.y).multiplyScalar(-e/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hi.x,hi.y).multiplyScalar(-e/hi.z)}getViewSize(e,t){return this.getViewBounds(e,ph,mh),t.subVectors(mh,ph)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(qs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Ul=class extends Sr{constructor(){super(new kt(90,1,.5,500)),this.isPointLightShadow=!0}},wr=class extends Es{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ul}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Rs=class extends Mr{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Fl=class extends Sr{constructor(){super(new Rs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Oi=class extends Es{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new Fl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var os=-90,ls=1,Ka=class extends Ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new kt(os,ls,e,t);s.layers=this.layers,this.add(s);let r=new kt(os,ls,e,t);r.layers=this.layers,this.add(r);let a=new kt(os,ls,e,t);a.layers=this.layers,this.add(a);let o=new kt(os,ls,e,t);o.layers=this.layers,this.add(o);let l=new kt(os,ls,e,t);l.layers=this.layers,this.add(l);let c=new kt(os,ls,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===An)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===us)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},$a=class extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var cc="\\[\\]\\.:\\/",hf=new RegExp("["+cc+"]","g"),hc="[^"+cc+"]",df="[^"+cc.replace("\\.","")+"]",uf=/((?:WC+[\/:])*)/.source.replace("WC",hc),ff=/(WCOD+)?/.source.replace("WCOD",df),pf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hc),mf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hc),gf=new RegExp("^"+uf+ff+pf+mf+"$"),_f=["material","materials","bones","map"],Ol=class{constructor(e,t,n){let s=n||xt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},xt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(hf,"")}static parseTrackName(e){let t=gf.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);_f.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ge("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){qe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){qe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){qe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){qe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){qe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;qe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xt.Composite=Ol;xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xt.prototype.GetterByBindingType=[xt.prototype._getValue_direct,xt.prototype._getValue_array,xt.prototype._getValue_arrayElement,xt.prototype._getValue_toArray];xt.prototype.SetterByBindingTypeAndVersioning=[[xt.prototype._setValue_direct,xt.prototype._setValue_direct_setNeedsUpdate,xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_array,xt.prototype._setValue_array_setNeedsUpdate,xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_arrayElement,xt.prototype._setValue_arrayElement_setNeedsUpdate,xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_fromArray,xt.prototype._setValue_fromArray_setNeedsUpdate,xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var G_=new Float32Array(1);var ni=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ke(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ke(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var gc=class gc{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};gc.prototype.isMatrix2=!0;var Bl=gc;var Er=class extends Cn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function dc(i,e,t,n){let s=yf(n);switch(t){case nc:return i*e;case oo:return i*e/s.components*s.byteLength;case lo:return i*e/s.components*s.byteLength;case Mi:return i*e*2/s.components*s.byteLength;case co:return i*e*2/s.components*s.byteLength;case ic:return i*e*3/s.components*s.byteLength;case xn:return i*e*4/s.components*s.byteLength;case ho:return i*e*4/s.components*s.byteLength;case Cr:case Pr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ir:case Dr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fo:case mo:return Math.max(i,16)*Math.max(e,8)/4;case uo:case po:return Math.max(i,8)*Math.max(e,8)/2;case go:case _o:case bo:case xo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case yo:case Lr:case vo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case So:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Mo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case wo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Eo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case To:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ro:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ao:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Co:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Po:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Io:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Do:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Lo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case No:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Uo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Fo:case Oo:case Bo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ko:case zo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Nr:case Ho:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function yf(i){switch(i){case rn:case $l:return{byteLength:1,components:1};case Is:case Ql:case Ln:return{byteLength:2,components:1};case ro:case ao:return{byteLength:2,components:4};case Dn:case so:case bn:return{byteLength:4,components:1};case ec:case tc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Cd(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Ef(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let v=u[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Tf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rf=`#ifdef USE_ALPHAHASH
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
#endif`,Af=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,If=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Df=`#ifdef USE_AOMAP
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
#endif`,Lf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nf=`#ifdef USE_BATCHING
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
#endif`,Uf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ff=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Of=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kf=`#ifdef USE_IRIDESCENCE
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
#endif`,zf=`#ifdef USE_BUMPMAP
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
#endif`,Hf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,qf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,jf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Yf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Zf=`#define PI 3.141592653589793
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
} // validated`,Jf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Kf=`vec3 transformedNormal = objectNormal;
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
#endif`,$f=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ep=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,np="gl_FragColor = linearToOutputTexel( gl_FragColor );",ip=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sp=`#ifdef USE_ENVMAP
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
#endif`,rp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ap=`#ifdef USE_ENVMAP
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
#endif`,op=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lp=`#ifdef USE_ENVMAP
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
#endif`,cp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,up=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fp=`#ifdef USE_GRADIENTMAP
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
}`,pp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_p=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,yp=`#ifdef USE_ENVMAP
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
#endif`,bp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mp=`PhysicalMaterial material;
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
#endif`,wp=`uniform sampler2D dfgLUT;
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
}`,Ep=`
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
#endif`,Tp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ap=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Cp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ip=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Np=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Up=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Fp=`#if defined( USE_POINTS_UV )
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
#endif`,Op=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gp=`#ifdef USE_MORPHTARGETS
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
#endif`,Vp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Zp=`#ifdef USE_NORMALMAP
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
#endif`,Jp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$p=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,em=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,nm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,im=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,am=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,om=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,dm=`float getShadowMask() {
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
}`,um=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fm=`#ifdef USE_SKINNING
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
#endif`,pm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mm=`#ifdef USE_SKINNING
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
#endif`,gm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_m=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ym=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xm=`#ifdef USE_TRANSMISSION
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
#endif`,vm=`#ifdef USE_TRANSMISSION
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
#endif`,Sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Em=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Tm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rm=`uniform sampler2D t2D;
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
}`,Am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Im=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dm=`#include <common>
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
}`,Lm=`#if DEPTH_PACKING == 3200
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
}`,Nm=`#define DISTANCE
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
}`,Um=`#define DISTANCE
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
}`,Fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Om=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bm=`uniform float scale;
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
}`,km=`uniform vec3 diffuse;
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
}`,zm=`#include <common>
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
}`,Hm=`uniform vec3 diffuse;
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
}`,Gm=`#define LAMBERT
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
}`,Vm=`#define LAMBERT
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
}`,Wm=`#define MATCAP
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
}`,Xm=`#define MATCAP
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
}`,qm=`#define NORMAL
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
}`,jm=`#define NORMAL
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
}`,Ym=`#define PHONG
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
}`,Zm=`#define PHONG
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
}`,Jm=`#define STANDARD
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
}`,Km=`#define STANDARD
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
}`,$m=`#define TOON
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
}`,Qm=`#define TOON
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
}`,e0=`uniform float size;
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
}`,t0=`uniform vec3 diffuse;
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
}`,n0=`#include <common>
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
}`,i0=`uniform vec3 color;
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
}`,s0=`uniform float rotation;
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
}`,r0=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:Tf,alphahash_pars_fragment:Rf,alphamap_fragment:Af,alphamap_pars_fragment:Cf,alphatest_fragment:Pf,alphatest_pars_fragment:If,aomap_fragment:Df,aomap_pars_fragment:Lf,batching_pars_vertex:Nf,batching_vertex:Uf,begin_vertex:Ff,beginnormal_vertex:Of,bsdfs:Bf,iridescence_fragment:kf,bumpmap_pars_fragment:zf,clipping_planes_fragment:Hf,clipping_planes_pars_fragment:Gf,clipping_planes_pars_vertex:Vf,clipping_planes_vertex:Wf,color_fragment:Xf,color_pars_fragment:qf,color_pars_vertex:jf,color_vertex:Yf,common:Zf,cube_uv_reflection_fragment:Jf,defaultnormal_vertex:Kf,displacementmap_pars_vertex:$f,displacementmap_vertex:Qf,emissivemap_fragment:ep,emissivemap_pars_fragment:tp,colorspace_fragment:np,colorspace_pars_fragment:ip,envmap_fragment:sp,envmap_common_pars_fragment:rp,envmap_pars_fragment:ap,envmap_pars_vertex:op,envmap_physical_pars_fragment:yp,envmap_vertex:lp,fog_vertex:cp,fog_pars_vertex:hp,fog_fragment:dp,fog_pars_fragment:up,gradientmap_pars_fragment:fp,lightmap_pars_fragment:pp,lights_lambert_fragment:mp,lights_lambert_pars_fragment:gp,lights_pars_begin:_p,lights_toon_fragment:bp,lights_toon_pars_fragment:xp,lights_phong_fragment:vp,lights_phong_pars_fragment:Sp,lights_physical_fragment:Mp,lights_physical_pars_fragment:wp,lights_fragment_begin:Ep,lights_fragment_maps:Tp,lights_fragment_end:Rp,lightprobes_pars_fragment:Ap,logdepthbuf_fragment:Cp,logdepthbuf_pars_fragment:Pp,logdepthbuf_pars_vertex:Ip,logdepthbuf_vertex:Dp,map_fragment:Lp,map_pars_fragment:Np,map_particle_fragment:Up,map_particle_pars_fragment:Fp,metalnessmap_fragment:Op,metalnessmap_pars_fragment:Bp,morphinstance_vertex:kp,morphcolor_vertex:zp,morphnormal_vertex:Hp,morphtarget_pars_vertex:Gp,morphtarget_vertex:Vp,normal_fragment_begin:Wp,normal_fragment_maps:Xp,normal_pars_fragment:qp,normal_pars_vertex:jp,normal_vertex:Yp,normalmap_pars_fragment:Zp,clearcoat_normal_fragment_begin:Jp,clearcoat_normal_fragment_maps:Kp,clearcoat_pars_fragment:$p,iridescence_pars_fragment:Qp,opaque_fragment:em,packing:tm,premultiplied_alpha_fragment:nm,project_vertex:im,dithering_fragment:sm,dithering_pars_fragment:rm,roughnessmap_fragment:am,roughnessmap_pars_fragment:om,shadowmap_pars_fragment:lm,shadowmap_pars_vertex:cm,shadowmap_vertex:hm,shadowmask_pars_fragment:dm,skinbase_vertex:um,skinning_pars_vertex:fm,skinning_vertex:pm,skinnormal_vertex:mm,specularmap_fragment:gm,specularmap_pars_fragment:_m,tonemapping_fragment:ym,tonemapping_pars_fragment:bm,transmission_fragment:xm,transmission_pars_fragment:vm,uv_pars_fragment:Sm,uv_pars_vertex:Mm,uv_vertex:wm,worldpos_vertex:Em,background_vert:Tm,background_frag:Rm,backgroundCube_vert:Am,backgroundCube_frag:Cm,cube_vert:Pm,cube_frag:Im,depth_vert:Dm,depth_frag:Lm,distance_vert:Nm,distance_frag:Um,equirect_vert:Fm,equirect_frag:Om,linedashed_vert:Bm,linedashed_frag:km,meshbasic_vert:zm,meshbasic_frag:Hm,meshlambert_vert:Gm,meshlambert_frag:Vm,meshmatcap_vert:Wm,meshmatcap_frag:Xm,meshnormal_vert:qm,meshnormal_frag:jm,meshphong_vert:Ym,meshphong_frag:Zm,meshphysical_vert:Jm,meshphysical_frag:Km,meshtoon_vert:$m,meshtoon_frag:Qm,points_vert:e0,points_frag:t0,shadow_vert:n0,shadow_frag:i0,sprite_vert:s0,sprite_frag:r0},Se={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},qn={basic:{uniforms:Yt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Yt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new We(0)},envMapIntensity:{value:1}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Yt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Yt([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Yt([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new We(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Yt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Yt([Se.points,Se.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Yt([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Yt([Se.common,Se.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Yt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Yt([Se.sprite,Se.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distance:{uniforms:Yt([Se.common,Se.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distance_vert,fragmentShader:Qe.distance_frag},shadow:{uniforms:Yt([Se.lights,Se.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};qn.physical={uniforms:Yt([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};var Wo={r:0,b:0,g:0},a0=new gt,Pd=new Je;Pd.set(-1,0,0,0,1,0,0,0,1);function o0(i,e,t,n,s,r){let a=new We(0),o=s===!0?0:1,l,c,h=null,u=0,d=null;function f(M){let R=M.isScene===!0?M.background:null;if(R&&R.isTexture){let b=M.backgroundBlurriness>0;R=e.get(R,b)}return R}function g(M){let R=!1,b=f(M);b===null?m(a,o):b&&b.isColor&&(m(b,1),R=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(M,R){let b=f(R);b&&(b.isCubeTexture||b.mapping===Rr)?(c===void 0&&(c=new Ve(new jt(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:Hi(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,S,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(a0.makeRotationFromEuler(R.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Pd),c.material.toneMapped=st.getTransfer(b.colorSpace)!==ht,(h!==b||u!==b.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=b,u=b.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Ve(new yr(2,2),new fn({name:"BackgroundMaterial",uniforms:Hi(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=st.getTransfer(b.colorSpace)!==ht,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||u!==b.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=b,u=b.version,d=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,R){M.getRGB(Wo,lc(i)),t.buffers.color.setClear(Wo.r,Wo.g,Wo.b,R,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,R=1){a.set(M),o=R,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:g,addToRenderList:v,dispose:p}}function l0(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(I,U,V,D,O){let H=!1,X=u(I,D,V,U);r!==X&&(r=X,c(r.object)),H=f(I,D,V,O),H&&g(I,D,V,O),O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,b(I,U,V,D),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function h(I){return i.deleteVertexArray(I)}function u(I,U,V,D){let O=D.wireframe===!0,H=n[U.id];H===void 0&&(H={},n[U.id]=H);let X=I.isInstancedMesh===!0?I.id:0,ne=H[X];ne===void 0&&(ne={},H[X]=ne);let W=ne[V.id];W===void 0&&(W={},ne[V.id]=W);let Z=W[O];return Z===void 0&&(Z=d(l()),W[O]=Z),Z}function d(I){let U=[],V=[],D=[];for(let O=0;O<t;O++)U[O]=0,V[O]=0,D[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:V,attributeDivisors:D,object:I,attributes:{},index:null}}function f(I,U,V,D){let O=r.attributes,H=U.attributes,X=0,ne=V.getAttributes();for(let W in ne)if(ne[W].location>=0){let ee=O[W],we=H[W];if(we===void 0&&(W==="instanceMatrix"&&I.instanceMatrix&&(we=I.instanceMatrix),W==="instanceColor"&&I.instanceColor&&(we=I.instanceColor)),ee===void 0||ee.attribute!==we||we&&ee.data!==we.data)return!0;X++}return r.attributesNum!==X||r.index!==D}function g(I,U,V,D){let O={},H=U.attributes,X=0,ne=V.getAttributes();for(let W in ne)if(ne[W].location>=0){let ee=H[W];ee===void 0&&(W==="instanceMatrix"&&I.instanceMatrix&&(ee=I.instanceMatrix),W==="instanceColor"&&I.instanceColor&&(ee=I.instanceColor));let we={};we.attribute=ee,ee&&ee.data&&(we.data=ee.data),O[W]=we,X++}r.attributes=O,r.attributesNum=X,r.index=D}function v(){let I=r.newAttributes;for(let U=0,V=I.length;U<V;U++)I[U]=0}function m(I){p(I,0)}function p(I,U){let V=r.newAttributes,D=r.enabledAttributes,O=r.attributeDivisors;V[I]=1,D[I]===0&&(i.enableVertexAttribArray(I),D[I]=1),O[I]!==U&&(i.vertexAttribDivisor(I,U),O[I]=U)}function M(){let I=r.newAttributes,U=r.enabledAttributes;for(let V=0,D=U.length;V<D;V++)U[V]!==I[V]&&(i.disableVertexAttribArray(V),U[V]=0)}function R(I,U,V,D,O,H,X){X===!0?i.vertexAttribIPointer(I,U,V,O,H):i.vertexAttribPointer(I,U,V,D,O,H)}function b(I,U,V,D){v();let O=D.attributes,H=V.getAttributes(),X=U.defaultAttributeValues;for(let ne in H){let W=H[ne];if(W.location>=0){let Z=O[ne];if(Z===void 0&&(ne==="instanceMatrix"&&I.instanceMatrix&&(Z=I.instanceMatrix),ne==="instanceColor"&&I.instanceColor&&(Z=I.instanceColor)),Z!==void 0){let ee=Z.normalized,we=Z.itemSize,_e=e.get(Z);if(_e===void 0)continue;let He=_e.buffer,je=_e.type,Xe=_e.bytesPerElement,j=je===i.INT||je===i.UNSIGNED_INT||Z.gpuType===so;if(Z.isInterleavedBufferAttribute){let J=Z.data,ye=J.stride,Ne=Z.offset;if(J.isInstancedInterleavedBuffer){for(let ie=0;ie<W.locationSize;ie++)p(W.location+ie,J.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ie=0;ie<W.locationSize;ie++)m(W.location+ie);i.bindBuffer(i.ARRAY_BUFFER,He);for(let ie=0;ie<W.locationSize;ie++)R(W.location+ie,we/W.locationSize,je,ee,ye*Xe,(Ne+we/W.locationSize*ie)*Xe,j)}else{if(Z.isInstancedBufferAttribute){for(let J=0;J<W.locationSize;J++)p(W.location+J,Z.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let J=0;J<W.locationSize;J++)m(W.location+J);i.bindBuffer(i.ARRAY_BUFFER,He);for(let J=0;J<W.locationSize;J++)R(W.location+J,we/W.locationSize,je,ee,we*Xe,we/W.locationSize*J*Xe,j)}}else if(X!==void 0){let ee=X[ne];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(W.location,ee);break;case 3:i.vertexAttrib3fv(W.location,ee);break;case 4:i.vertexAttrib4fv(W.location,ee);break;default:i.vertexAttrib1fv(W.location,ee)}}}}M()}function w(){T();for(let I in n){let U=n[I];for(let V in U){let D=U[V];for(let O in D){let H=D[O];for(let X in H)h(H[X].object),delete H[X];delete D[O]}}delete n[I]}}function S(I){if(n[I.id]===void 0)return;let U=n[I.id];for(let V in U){let D=U[V];for(let O in D){let H=D[O];for(let X in H)h(H[X].object),delete H[X];delete D[O]}}delete n[I.id]}function A(I){for(let U in n){let V=n[U];for(let D in V){let O=V[D];if(O[I.id]===void 0)continue;let H=O[I.id];for(let X in H)h(H[X].object),delete H[X];delete O[I.id]}}}function _(I){for(let U in n){let V=n[U],D=I.isInstancedMesh===!0?I.id:0,O=V[D];if(O!==void 0){for(let H in O){let X=O[H];for(let ne in X)h(X[ne].object),delete X[ne];delete O[H]}delete V[D],Object.keys(V).length===0&&delete n[U]}}}function T(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:C,dispose:w,releaseStatesOfGeometry:S,releaseStatesOfObject:_,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:M}}function c0(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function h0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==xn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let _=A===Ln&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==rn&&A!==bn&&!_&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ge("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Ge("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:R,maxFragmentUniforms:b,maxSamples:w,samples:S}}function d0(i){let e=this,t=null,n=0,s=!1,r=!1,a=new dn,o=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let M=r?0:n,R=M*4,b=p.clippingState||null;l.value=b,b=h(g,d,R,f);for(let w=0;w!==R;++w)b[w]=t[w];p.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let p=f+v*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let R=0,b=f;R!==v;++R,b+=4)a.copy(u[R]).applyMatrix4(M,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}var Ns=4,u0=6,f0=20,p0=256,Fr=new Rs,ld=new We,_c=null,yc=0,bc=0,xc=!1,m0=new P,Gi=new P,Vi=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=m0}=r;_c=this._renderer.getRenderTarget(),yc=this._renderer.getActiveCubeFace(),bc=this._renderer.getActiveMipmapLevel(),xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(_c,yc,bc),this._renderer.xr.enabled=xc,e.scissorTest=!1,Ls(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xi||e.mapping===ki?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_c=this._renderer.getRenderTarget(),yc=this._renderer.getActiveCubeFace(),bc=this._renderer.getActiveMipmapLevel(),xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:Ln,format:xn,colorSpace:Ks,depthBuffer:!1},s=cd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cd(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=g0(r)),this._blurMaterial=y0(r,e,t),this._ggxMaterial=_0(r,e,t)}return s}_compileMaterial(e){let t=new Ve(new Ot,e);this._renderer.compile(t,Fr)}_sceneToCubeUV(e,t,n,s,r){let l=new kt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(ld),u.toneMapping=In,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ve(new jt,new Li({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,m=v.material,p=!1,M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,p=!0):(m.color.copy(ld),p=!0);for(let R=0;R<6;R++){let b=R%3;b===0?(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[R],r.y,r.z)):b===1?(l.up.set(0,0,c[R]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[R],r.z)):(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[R]));let w=this._cubeSize;Ls(s,b*w,R>2?w:0,w,w),u.setRenderTarget(s),p&&u.render(v,l),u.render(e,l)}u.toneMapping=f,u.autoClear=d,e.background=M}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===xi||e.mapping===ki;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=dd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Ls(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Fr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=c*1.25,f=u*d,{_lodMax:g}=this,v=this._sizeLods[n],m=3*v*(n>g-Ns?n-g+Ns:0),p=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,Ls(r,m,p,3*v,2*v),s.setRenderTarget(r),s.render(o,Fr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Ls(e,m,p,3*v,2*v),s.setRenderTarget(e),s.render(o,Fr)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-Ns?s-this._lodMax+Ns:0),d=4*(this._cubeSize-h);Ls(t,u,d,3*h,2*h),a.setRenderTarget(t),a.render(l,Fr)}};function g0(i){let e=[],t=[],n=i,s=i-Ns+1+u0;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,d=6,f=3,g=new Float32Array(f*d*u),v=new Float32Array(f*d*u);for(let p=0;p<u;p++){let M=p%3*2/3-1,R=p>2?0:-1,b=[M,R,0,M+2/3,R,0,M+2/3,R+1,0,M,R,0,M+2/3,R+1,0,M,R+1,0];g.set(b,f*d*p);for(let w=0;w<d;w++){let S=h[w*2]*2-1,A=h[w*2+1]*2-1;p===0?Gi.set(1,A,S):p===1?Gi.set(-S,1,-A):p===2?Gi.set(-S,A,1):p===3?Gi.set(-1,A,-S):p===4?Gi.set(-S,-1,A):Gi.set(S,A,-1),Gi.toArray(v,(p*d+w)*f)}}let m=new Ot;m.setAttribute("position",new Qt(g,f)),m.setAttribute("outputDirection",new Qt(v,f)),t.push(new Ve(m,null)),n>Ns&&n--}return{lodMeshes:t,sizeLods:e}}function cd(i,e,t){let n=new sn(i,e,t);return n.texture.mapping=Rr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ls(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function _0(i,e,t){return new fn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:p0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Yo(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function y0(i,e,t){return new fn({name:"SphericalGaussianBlur",defines:{SAMPLES:f0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Yo(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function hd(){return new fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yo(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function dd(){return new fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Yo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var qo=class extends sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new rr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new jt(5,5,5),r=new fn({name:"CubemapFromEquirect",uniforms:Hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ht,blending:Wn});r.uniforms.tEquirect.value=t;let a=new Ve(s,r),o=t.minFilter;return t.minFilter===vi&&(t.minFilter=zt),new Ka(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function b0(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===to||f===no)if(e.has(d)){let g=e.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let v=new qo(g.height);return v.fromEquirectangularTexture(i,d),e.set(d,v),d.addEventListener("dispose",c),o(v.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let f=d.mapping,g=f===to||f===no,v=f===xi||f===ki;if(g||v){let m=t.get(d),p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new Vi(i)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let M=d.image;return g&&M&&M.height>0||v&&M&&l(M)?(n===null&&(n=new Vi(i)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,f){return f===to?d.mapping=xi:f===no&&(d.mapping=ki),d}function l(d){let f=0,g=6;for(let v=0;v<g;v++)d[v]!==void 0&&f++;return f===g}function c(d){let f=d.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function x0(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ii("WebGLRenderer: "+n+" extension not supported."),s}}}function v0(i,e,t,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,g=u.attributes.position,v=0;if(g===void 0)return;if(f!==null){let M=f.array;v=f.version;for(let R=0,b=M.length;R<b;R+=3){let w=M[R+0],S=M[R+1],A=M[R+2];d.push(w,S,S,A,A,w)}}else{let M=g.array;v=g.version;for(let R=0,b=M.length/3-1;R<b;R+=3){let w=R+0,S=R+1,A=R+2;d.push(w,S,S,A,A,w)}}let m=new(g.count>=65535?nr:tr)(d,1);m.version=v;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function S0(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*a),t.update(d,n,1)}function c(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*a,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let v=0;for(let m=0;m<f;m++)v+=d[m];t.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function M0(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:qe("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function w0(i,e,t){let n=new WeakMap,s=new vt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let T=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],R=0;f===!0&&(R=1),g===!0&&(R=2),v===!0&&(R=3);let b=o.attributes.position.count*R,w=1;b>e.maxTextureSize&&(w=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let S=new Float32Array(b*w*4*u),A=new Qs(S,b,w,u);A.type=bn,A.needsUpdate=!0;let _=R*4;for(let C=0;C<u;C++){let I=m[C],U=p[C],V=M[C],D=b*w*4*C;for(let O=0;O<I.count;O++){let H=O*_;f===!0&&(s.fromBufferAttribute(I,O),S[D+H+0]=s.x,S[D+H+1]=s.y,S[D+H+2]=s.z,S[D+H+3]=0),g===!0&&(s.fromBufferAttribute(U,O),S[D+H+4]=s.x,S[D+H+5]=s.y,S[D+H+6]=s.z,S[D+H+7]=0),v===!0&&(s.fromBufferAttribute(V,O),S[D+H+8]=s.x,S[D+H+9]=s.y,S[D+H+10]=s.z,S[D+H+11]=V.itemSize===4?s.w:1)}}d={count:u,texture:A,size:new le(b,w)},n.set(o,d),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function E0(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var T0={[Xl]:"LINEAR_TONE_MAPPING",[ql]:"REINHARD_TONE_MAPPING",[jl]:"CINEON_TONE_MAPPING",[Ps]:"ACES_FILMIC_TONE_MAPPING",[Zl]:"AGX_TONE_MAPPING",[Jl]:"NEUTRAL_TONE_MAPPING",[Yl]:"CUSTOM_TONE_MAPPING"};function R0(i,e,t,n,s,r){let a=new sn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Ot;c.setAttribute("position",new dt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new dt([0,2,0,0,2,0],2));let h=new Ba({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Ve(c,h),d=new Rs(-1,1,1,-1,0,1),f=null,g=null,v=!1,m,p=null,M=[],R=!1;this.setSize=function(b,w){a.setSize(b,w),o!==null&&o.setSize(b,w),l!==null&&l.setSize(b,w);for(let S=0;S<M.length;S++){let A=M[S];A.setSize&&A.setSize(b,w)}},this.setEffects=function(b){M=b,R=M.length>0&&M[0].isRenderPass===!0;let w=a.width,S=a.height;M.length>0&&o===null&&(o=new sn(w,S,{type:Ln,depthBuffer:!1,stencilBuffer:!1}),l=new sn(w,S,{type:Ln,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<M.length;A++){let _=M[A];_.setSize&&_.setSize(w,S)}},this.begin=function(b,w){if(v||b.toneMapping===In&&M.length===0)return!1;if(p=w,w!==null){let S=w.width,A=w.height;(a.width!==S||a.height!==A)&&this.setSize(S,A)}return R===!1&&b.setRenderTarget(a),m=b.toneMapping,b.toneMapping=In,!0},this.hasRenderPass=function(){return R},this.end=function(b,w){b.toneMapping=m,v=!0;let S=a,A=o;for(let _=0;_<M.length;_++){let T=M[_];T.enabled!==!1&&(T.render(b,A,S,w),T.needsSwap!==!1&&(S=A,A=A===o?l:o))}if(f!==b.outputColorSpace||g!==b.toneMapping){f=b.outputColorSpace,g=b.toneMapping,h.defines={},st.getTransfer(f)===ht&&(h.defines.SRGB_TRANSFER="");let _=T0[g];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,b.setRenderTarget(p),b.render(u,d),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Id=new qt,Mc=new fi(1,1),Dd=new Qs,Ld=new Ia,Nd=new rr,ud=[],fd=[],pd=new Float32Array(16),md=new Float32Array(9),gd=new Float32Array(4);function Fs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=ud[s];if(r===void 0&&(r=new Float32Array(s),ud[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function It(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Dt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Zo(i,e){let t=fd[e];t===void 0&&(t=new Int32Array(e),fd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function A0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function C0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2fv(this.addr,e),Dt(t,e)}}function P0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;i.uniform3fv(this.addr,e),Dt(t,e)}}function I0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4fv(this.addr,e),Dt(t,e)}}function D0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;gd.set(n),i.uniformMatrix2fv(this.addr,!1,gd),Dt(t,n)}}function L0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;md.set(n),i.uniformMatrix3fv(this.addr,!1,md),Dt(t,n)}}function N0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;pd.set(n),i.uniformMatrix4fv(this.addr,!1,pd),Dt(t,n)}}function U0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function F0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2iv(this.addr,e),Dt(t,e)}}function O0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3iv(this.addr,e),Dt(t,e)}}function B0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4iv(this.addr,e),Dt(t,e)}}function k0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function z0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2uiv(this.addr,e),Dt(t,e)}}function H0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3uiv(this.addr,e),Dt(t,e)}}function G0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4uiv(this.addr,e),Dt(t,e)}}function V0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Mc.compareFunction=t.isReversedDepthBuffer()?Vo:Go,r=Mc):r=Id,t.setTexture2D(e||r,s)}function W0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Ld,s)}function X0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Nd,s)}function q0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Dd,s)}function j0(i){switch(i){case 5126:return A0;case 35664:return C0;case 35665:return P0;case 35666:return I0;case 35674:return D0;case 35675:return L0;case 35676:return N0;case 5124:case 35670:return U0;case 35667:case 35671:return F0;case 35668:case 35672:return O0;case 35669:case 35673:return B0;case 5125:return k0;case 36294:return z0;case 36295:return H0;case 36296:return G0;case 35678:case 36198:case 36298:case 36306:case 35682:return V0;case 35679:case 36299:case 36307:return W0;case 35680:case 36300:case 36308:case 36293:return X0;case 36289:case 36303:case 36311:case 36292:return q0}}function Y0(i,e){i.uniform1fv(this.addr,e)}function Z0(i,e){let t=Fs(e,this.size,2);i.uniform2fv(this.addr,t)}function J0(i,e){let t=Fs(e,this.size,3);i.uniform3fv(this.addr,t)}function K0(i,e){let t=Fs(e,this.size,4);i.uniform4fv(this.addr,t)}function $0(i,e){let t=Fs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Q0(i,e){let t=Fs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function eg(i,e){let t=Fs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function tg(i,e){i.uniform1iv(this.addr,e)}function ng(i,e){i.uniform2iv(this.addr,e)}function ig(i,e){i.uniform3iv(this.addr,e)}function sg(i,e){i.uniform4iv(this.addr,e)}function rg(i,e){i.uniform1uiv(this.addr,e)}function ag(i,e){i.uniform2uiv(this.addr,e)}function og(i,e){i.uniform3uiv(this.addr,e)}function lg(i,e){i.uniform4uiv(this.addr,e)}function cg(i,e,t){let n=this.cache,s=e.length,r=Zo(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Mc:a=Id;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function hg(i,e,t){let n=this.cache,s=e.length,r=Zo(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Ld,r[a])}function dg(i,e,t){let n=this.cache,s=e.length,r=Zo(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Nd,r[a])}function ug(i,e,t){let n=this.cache,s=e.length,r=Zo(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Dd,r[a])}function fg(i){switch(i){case 5126:return Y0;case 35664:return Z0;case 35665:return J0;case 35666:return K0;case 35674:return $0;case 35675:return Q0;case 35676:return eg;case 5124:case 35670:return tg;case 35667:case 35671:return ng;case 35668:case 35672:return ig;case 35669:case 35673:return sg;case 5125:return rg;case 36294:return ag;case 36295:return og;case 36296:return lg;case 35678:case 36198:case 36298:case 36306:case 35682:return cg;case 35679:case 36299:case 36307:return hg;case 35680:case 36300:case 36308:case 36293:return dg;case 36289:case 36303:case 36311:case 36292:return ug}}var wc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=j0(t.type)}},Ec=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=fg(t.type)}},Tc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},vc=/(\w+)(\])?(\[|\.)?/g;function _d(i,e){i.seq.push(e),i.map[e.id]=e}function pg(i,e,t){let n=i.name,s=n.length;for(vc.lastIndex=0;;){let r=vc.exec(n),a=vc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){_d(t,c===void 0?new wc(o,i,e):new Ec(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Tc(o),_d(t,u)),t=u}}}var Us=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);pg(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function yd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var mg=37297,gg=0;function _g(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var bd=new Je;function yg(i){st._getMatrix(bd,st.workingColorSpace,i);let e=`mat3( ${bd.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(i)){case $s:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return Ge("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function xd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+_g(i.getShaderSource(e),o)}else return r}function bg(i,e){let t=yg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var xg={[Xl]:"Linear",[ql]:"Reinhard",[jl]:"Cineon",[Ps]:"ACESFilmic",[Zl]:"AgX",[Jl]:"Neutral",[Yl]:"Custom"};function vg(i,e){let t=xg[e];return t===void 0?(Ge("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Xo=new P;function Sg(){st.getLuminanceCoefficients(Xo);let i=Xo.x.toFixed(4),e=Xo.y.toFixed(4),t=Xo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Mg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Br).join(`
`)}function wg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Eg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Br(i){return i!==""}function vd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Tg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rc(i){return i.replace(Tg,Ag)}var Rg=new Map;function Ag(i,e){let t=Qe[e];if(t===void 0){let n=Rg.get(e);if(n!==void 0)t=Qe[n],Ge('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Rc(t)}var Cg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Md(i){return i.replace(Cg,Pg)}function Pg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wd(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Ig={[Tr]:"SHADOWMAP_TYPE_PCF",[As]:"SHADOWMAP_TYPE_VSM"};function Dg(i){return Ig[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Lg={[xi]:"ENVMAP_TYPE_CUBE",[ki]:"ENVMAP_TYPE_CUBE",[Rr]:"ENVMAP_TYPE_CUBE_UV"};function Ng(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Lg[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Ug={[ki]:"ENVMAP_MODE_REFRACTION"};function Fg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Ug[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Og={[eo]:"ENVMAP_BLENDING_MULTIPLY",[Oh]:"ENVMAP_BLENDING_MIX",[Bh]:"ENVMAP_BLENDING_ADD"};function Bg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Og[i.combine]||"ENVMAP_BLENDING_NONE"}function kg(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function zg(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Dg(t),c=Ng(t),h=Fg(t),u=Bg(t),d=kg(t),f=Mg(t),g=wg(r),v=s.createProgram(),m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Br).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Br).join(`
`),p.length>0&&(p+=`
`)):(m=[wd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Br).join(`
`),p=[wd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==In?"#define TONE_MAPPING":"",t.toneMapping!==In?Qe.tonemapping_pars_fragment:"",t.toneMapping!==In?vg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,bg("linearToOutputTexel",t.outputColorSpace),Sg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Br).join(`
`)),a=Rc(a),a=vd(a,t),a=Sd(a,t),o=Rc(o),o=vd(o,t),o=Sd(o,t),a=Md(a),o=Md(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===sc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===sc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let R=M+m+a,b=M+p+o,w=yd(s,s.VERTEX_SHADER,R),S=yd(s,s.FRAGMENT_SHADER,b);s.attachShader(v,w),s.attachShader(v,S),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(I){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(v)||"",V=s.getShaderInfoLog(w)||"",D=s.getShaderInfoLog(S)||"",O=U.trim(),H=V.trim(),X=D.trim(),ne=!0,W=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(ne=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,w,S);else{let Z=xd(s,w,"vertex"),ee=xd(s,S,"fragment");qe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+O+`
`+Z+`
`+ee)}else O!==""?Ge("WebGLProgram: Program Info Log:",O):(H===""||X==="")&&(W=!1);W&&(I.diagnostics={runnable:ne,programLog:O,vertexShader:{log:H,prefix:m},fragmentShader:{log:X,prefix:p}})}s.deleteShader(w),s.deleteShader(S),_=new Us(s,v),T=Eg(s,v)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(v,mg)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=gg++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=S,this}var Hg=0,Ac=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Cc(e),t.set(e,n)),n}},Cc=class{constructor(e){this.id=Hg++,this.code=e,this.usedTimes=0}};function Gg(i){return i===Mi||i===Lr||i===Nr}function Vg(i,e,t,n,s,r){let a=new er,o=new Ac,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function v(_,T,C,I,U,V){let D=I.fog,O=U.geometry,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,ne=e.get(_.envMap||H,X),W=ne&&ne.mapping===Rr?ne.image.height:null,Z=f[_.type];_.precision!==null&&(d=n.getMaxPrecision(_.precision),d!==_.precision&&Ge("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));let ee=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,we=ee!==void 0?ee.length:0,_e=0;O.morphAttributes.position!==void 0&&(_e=1),O.morphAttributes.normal!==void 0&&(_e=2),O.morphAttributes.color!==void 0&&(_e=3);let He,je,Xe,j;if(Z){let ut=qn[Z];He=ut.vertexShader,je=ut.fragmentShader}else{He=_.vertexShader,je=_.fragmentShader;let ut=o.getVertexShaderStage(_),nt=o.getFragmentShaderStage(_);o.update(_,ut,nt),Xe=ut.id,j=nt.id}let J=i.getRenderTarget(),ye=i.state.buffers.depth.getReversed(),Ne=U.isInstancedMesh===!0,ie=U.isBatchedMesh===!0,ve=!!_.map,et=!!_.matcap,K=!!ne,ae=!!_.aoMap,re=!!_.lightMap,oe=!!_.bumpMap&&_.wireframe===!1,me=!!_.normalMap,Ue=!!_.displacementMap,ke=!!_.emissiveMap,Oe=!!_.metalnessMap,Be=!!_.roughnessMap,L=_.anisotropy>0,tt=_.clearcoat>0,Ye=_.dispersion>0,E=_.retroreflectivity>0,y=_.iridescence>0,B=_.sheen>0,G=_.transmission>0,Y=L&&!!_.anisotropyMap,ce=tt&&!!_.clearcoatMap,he=tt&&!!_.clearcoatNormalMap,$=tt&&!!_.clearcoatRoughnessMap,te=y&&!!_.iridescenceMap,de=y&&!!_.iridescenceThicknessMap,Fe=B&&!!_.sheenColorMap,pe=B&&!!_.sheenRoughnessMap,be=!!_.specularMap,Ce=!!_.specularColorMap,De=!!_.specularIntensityMap,Ze=G&&!!_.transmissionMap,F=G&&!!_.thicknessMap,xe=!!_.gradientMap,Q=!!_.alphaMap,ue=_.alphaTest>0,Me=!!_.alphaHash,se=!!_.extensions,Pe=In;_.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Pe=i.toneMapping);let Ee={shaderID:Z,shaderType:_.type,shaderName:_.name,vertexShader:He,fragmentShader:je,defines:_.defines,customVertexShaderID:Xe,customFragmentShaderID:j,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:ie,batchingColor:ie&&U._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&U.instanceColor!==null,instancingMorph:Ne&&U.morphTexture!==null,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:st.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:ve,matcap:et,envMap:K,envMapMode:K&&ne.mapping,envMapCubeUVHeight:W,aoMap:ae,lightMap:re,bumpMap:oe,normalMap:me,displacementMap:Ue,emissiveMap:ke,normalMapObjectSpace:me&&_.normalMapType===Hh,normalMapTangentSpace:me&&_.normalMapType===Ur,packedNormalMap:me&&_.normalMapType===Ur&&Gg(_.normalMap.format),metalnessMap:Oe,roughnessMap:Be,anisotropy:L,anisotropyMap:Y,clearcoat:tt,clearcoatMap:ce,clearcoatNormalMap:he,clearcoatRoughnessMap:$,dispersion:Ye,retroreflection:E,iridescence:y,iridescenceMap:te,iridescenceThicknessMap:de,sheen:B,sheenColorMap:Fe,sheenRoughnessMap:pe,specularMap:be,specularColorMap:Ce,specularIntensityMap:De,transmission:G,transmissionMap:Ze,thicknessMap:F,gradientMap:xe,opaque:_.transparent===!1&&_.blending===Cs&&_.alphaToCoverage===!1,alphaMap:Q,alphaTest:ue,alphaHash:Me,combine:_.combine,mapUv:ve&&g(_.map.channel),aoMapUv:ae&&g(_.aoMap.channel),lightMapUv:re&&g(_.lightMap.channel),bumpMapUv:oe&&g(_.bumpMap.channel),normalMapUv:me&&g(_.normalMap.channel),displacementMapUv:Ue&&g(_.displacementMap.channel),emissiveMapUv:ke&&g(_.emissiveMap.channel),metalnessMapUv:Oe&&g(_.metalnessMap.channel),roughnessMapUv:Be&&g(_.roughnessMap.channel),anisotropyMapUv:Y&&g(_.anisotropyMap.channel),clearcoatMapUv:ce&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:he&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:de&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:pe&&g(_.sheenRoughnessMap.channel),specularMapUv:be&&g(_.specularMap.channel),specularColorMapUv:Ce&&g(_.specularColorMap.channel),specularIntensityMapUv:De&&g(_.specularIntensityMap.channel),transmissionMapUv:Ze&&g(_.transmissionMap.channel),thicknessMapUv:F&&g(_.thicknessMap.channel),alphaMapUv:Q&&g(_.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(me||L),vertexNormals:!!O.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!O.attributes.uv&&(ve||Q),fog:!!D,useFog:_.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||O.attributes.normal===void 0&&me===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ye,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:_e,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Pe,decodeVideoTexture:ve&&_.map.isVideoTexture===!0&&st.getTransfer(_.map.colorSpace)===ht,decodeVideoTextureEmissive:ke&&_.emissiveMap.isVideoTexture===!0&&st.getTransfer(_.emissiveMap.colorSpace)===ht,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===yn,flipSided:_.side===Ht,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:se&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&_.extensions.multiDraw===!0||ie)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ee.vertexUv1s=l.has(1),Ee.vertexUv2s=l.has(2),Ee.vertexUv3s=l.has(3),l.clear(),Ee}function m(_){let T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(let C in _.defines)T.push(C),T.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(p(T,_),M(T,_),T.push(i.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function p(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function M(_,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function R(_){let T=f[_.type],C;if(T){let I=qn[T];C=rd.clone(I.uniforms)}else C=_.uniforms;return C}function b(_,T){let C=h.get(T);return C!==void 0?++C.usedTimes:(C=new zg(i,T,_,s),c.push(C),h.set(T,C)),C}function w(_){if(--_.usedTimes===0){let T=c.indexOf(_);c[T]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function S(_){o.remove(_)}function A(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:R,acquireProgram:b,releaseProgram:w,releaseShaderCache:S,programs:c,dispose:A}}function Wg(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Xg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Ed(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Td(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,v,m,p){let M=i[e];return M===void 0?(M={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:v,renderOrder:d.renderOrder,z:m,group:p},i[e]=M):(M.id=d.id,M.object=d,M.geometry=f,M.material=g,M.materialVariant=a(d),M.groupOrder=v,M.renderOrder=d.renderOrder,M.z=m,M.group=p),e++,M}function l(d,f,g,v,m,p,M){M.reversedDepth===!0&&(m=-m);let R=o(d,f,g,v,m,p);g.transmission>0?n.push(R):g.transparent===!0?s.push(R):t.push(R)}function c(d,f,g,v,m,p){let M=o(d,f,g,v,m,p);g.transmission>0?n.unshift(M):g.transparent===!0?s.unshift(M):t.unshift(M)}function h(d,f){t.length>1&&t.sort(d||Xg),n.length>1&&n.sort(f||Ed),s.length>1&&s.sort(f||Ed)}function u(){for(let d=e,f=i.length;d<f;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function qg(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Td,i.set(n,[a])):s>=r.length?(a=new Td,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function jg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new P,color:new We};break;case"SpotLight":t={position:new P,direction:new P,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function Yg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Zg=0;function Jg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Kg(i){let e=new jg,t=Yg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new gt,a=new gt;function o(c){let h=0,u=0,d=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,M=0,R=0,b=0,w=0,S=0,A=0,_=0,T=0,C=0;c.sort(Jg);for(let U=0,V=c.length;U<V;U++){let D=c[U],O=D.color,H=D.intensity,X=D.distance,ne=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Mi?ne=D.shadow.map.texture:ne=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=O.r*H,u+=O.g*H,d+=O.b*H;else if(D.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(D.sh.coefficients[W],H);C++}else if(D.isSunLight){let W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Z=D.shadow,ee=t.get(D);ee.shadowIntensity=Z.intensity,ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),n.sunShadow[g]=ee,n.sunShadowMap[g]=ne;let we=Z.getViewportCount();for(let _e=0;_e<we;_e++)n.sunShadowMatrix[v+_e]=Z.getMatrix(_e),n.sunShadowCascade[v+_e]=Z._cascadeData[_e];v+=we,g++}n.sun[f]=W,f++}else if(D.isDirectionalLight){let W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Z=D.shadow,ee=t.get(D);ee.shadowIntensity=Z.intensity,ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize=Z.mapSize,n.directionalShadow[m]=ee,n.directionalShadowMap[m]=ne,n.directionalShadowMatrix[m]=D.shadow.matrix,w++}n.directional[m]=W,m++}else if(D.isSpotLight){let W=e.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(O).multiplyScalar(H),W.distance=X,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,n.spot[M]=W;let Z=D.shadow;if(D.map&&(n.spotLightMap[_]=D.map,_++,Z.updateMatrices(D),D.castShadow&&T++),n.spotLightMatrix[M]=Z.matrix,D.castShadow){let ee=t.get(D);ee.shadowIntensity=Z.intensity,ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize=Z.mapSize,n.spotShadow[M]=ee,n.spotShadowMap[M]=ne,A++}M++}else if(D.isRectAreaLight){let W=e.get(D);W.color.copy(O).multiplyScalar(H),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),n.rectArea[R]=W,R++}else if(D.isPointLight){let W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),W.distance=D.distance,W.decay=D.decay,D.castShadow){let Z=D.shadow,ee=t.get(D);ee.shadowIntensity=Z.intensity,ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize=Z.mapSize,ee.shadowCameraNear=Z.camera.near,ee.shadowCameraFar=Z.camera.far,n.pointShadow[p]=ee,n.pointShadowMap[p]=ne,n.pointShadowMatrix[p]=D.shadow.matrix,S++}n.point[p]=W,p++}else if(D.isHemisphereLight){let W=e.get(D);W.skyColor.copy(D.color).multiplyScalar(H),W.groundColor.copy(D.groundColor).multiplyScalar(H),n.hemi[b]=W,b++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Se.LTC_FLOAT_1,n.rectAreaLTC2=Se.LTC_FLOAT_2):(n.rectAreaLTC1=Se.LTC_HALF_1,n.rectAreaLTC2=Se.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let I=n.hash;(I.sunLength!==f||I.directionalLength!==m||I.pointLength!==p||I.spotLength!==M||I.rectAreaLength!==R||I.hemiLength!==b||I.numSunShadows!==g||I.numDirectionalShadows!==w||I.numPointShadows!==S||I.numSpotShadows!==A||I.numSpotMaps!==_||I.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=m,n.spot.length=M,n.rectArea.length=R,n.point.length=p,n.hemi.length=b,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+_-T,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,I.sunLength=f,I.directionalLength=m,I.pointLength=p,I.spotLength=M,I.rectAreaLength=R,I.hemiLength=b,I.numSunShadows=g,I.numDirectionalShadows=w,I.numPointShadows=S,I.numSpotShadows=A,I.numSpotMaps=_,I.numLightProbes=C,n.version=Zg++)}function l(c,h){let u=0,d=0,f=0,g=0,v=0,m=0,p=h.matrixWorldInverse;for(let M=0,R=c.length;M<R;M++){let b=c[M];if(b.isSunLight){let w=n.sun[u];w.direction.setFromMatrixPosition(b.matrixWorld),w.direction.transformDirection(p),u++}else if(b.isDirectionalLight){let w=n.directional[d];w.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),d++}else if(b.isSpotLight){let w=n.spot[g];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),g++}else if(b.isRectAreaLight){let w=n.rectArea[v];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(p),a.identity(),r.copy(b.matrixWorld),r.premultiply(p),a.extractRotation(r),w.halfWidth.set(b.width*.5,0,0),w.halfHeight.set(0,b.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),v++}else if(b.isPointLight){let w=n.point[f];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){let w=n.hemi[m];w.direction.setFromMatrixPosition(b.matrixWorld),w.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function Rd(i){let e=new Kg(i),t=[],n=[],s=[];function r(d){u.camera=d,t.length=0,n.length=0,s.length=0}function a(d){t.push(d)}function o(d){n.push(d)}function l(d){s.push(d)}function c(){e.setup(t)}function h(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function $g(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Rd(i),e.set(s,[o])):r>=a.length?(o=new Rd(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Qg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,e_=`uniform sampler2D shadow_pass;
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
}`,t_=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],n_=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Ad=new gt,Or=new P,Sc=new P;function i_(i,e,t){let n=new xs,s=new le,r=new le,a=new vt,o=new ka,l=new za,c={},h=t.maxTextureSize,u={[Vn]:Ht,[Ht]:Vn,[yn]:yn},d=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:Qg,fragmentShader:e_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ot;g.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Ve(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tr;let p=this.type;this.render=function(S,A,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===yh&&(Ge("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Tr);let T=i.getRenderTarget(),C=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Wn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let V=p!==this.type;V&&A.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(O=>O.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,O=S.length;D<O;D++){let H=S[D],X=H.shadow;if(X===void 0){Ge("WebGLShadowMap:",H,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let ne=X.getFrameExtents();s.multiply(ne),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ne.x),s.x=r.x*ne.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ne.y),s.y=r.y*ne.y,X.mapSize.y=r.y));let W=i.state.buffers.depth.getReversed();if(X.camera._reversedDepth=W,X.map===null||V===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===As){if(H.isPointLight){Ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new sn(s.x,s.y,{format:Mi,type:Ln,minFilter:zt,magFilter:zt,generateMipmaps:!1}),X.map.texture.name=H.name+".shadowMap",X.map.depthTexture=new fi(s.x,s.y,bn),X.map.depthTexture.name=H.name+".shadowMapDepth",X.map.depthTexture.format=kn,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Ut,X.map.depthTexture.magFilter=Ut}else H.isPointLight?(X.map=new qo(s.x),X.map.depthTexture=new Da(s.x,Dn)):(X.map=new sn(s.x,s.y),X.map.depthTexture=new fi(s.x,s.y,Dn)),X.map.depthTexture.name=H.name+".shadowMap",X.map.depthTexture.format=kn,this.type===Tr?(X.map.depthTexture.compareFunction=W?Vo:Go,X.map.depthTexture.minFilter=zt,X.map.depthTexture.magFilter=zt):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Ut,X.map.depthTexture.magFilter=Ut);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==s.x||X.map.height!==s.y)&&X.map.setSize(s.x,s.y);let Z=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();H.isPointLight!==!0&&X.updateMatrices(H,_);for(let ee=0;ee<Z;ee++){let we=X.getCamera(ee);if(H.isPointLight){let _e=X.camera,He=X.matrix,je=H.distance||_e.far;je!==_e.far&&(_e.far=je,_e.updateProjectionMatrix()),Or.setFromMatrixPosition(H.matrixWorld),_e.position.copy(Or),Sc.copy(_e.position),Sc.add(t_[ee]),_e.up.copy(n_[ee]),_e.lookAt(Sc),_e.updateMatrixWorld(),He.makeTranslation(-Or.x,-Or.y,-Or.z),Ad.multiplyMatrices(_e.projectionMatrix,_e.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Ad,_e.coordinateSystem,_e.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)i.setRenderTarget(X.map,ee),i.clear();else{ee===0&&(i.setRenderTarget(X.map),i.clear());let _e=X.getViewport(ee);a.set(r.x*_e.x,r.y*_e.y,r.x*_e.z,r.y*_e.w),U.viewport(a)}n=X.getFrustum(ee),b(A,_,we,H,this.type)}X.isPointLightShadow!==!0&&this.type===As&&M(X,_),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(T,C,I)};function M(S,A){let _=e.update(v);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null?S.mapPass=new sn(s.x,s.y,{format:Mi,type:Ln}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),d.uniforms.shadow_pass.value=S.map.depthTexture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(A,null,_,d,v,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(A,null,_,f,v,null)}function R(S,A,_,T){let C=null,I=_.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(I!==void 0)C=I;else if(C=_.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let U=C.uuid,V=A.uuid,D=c[U];D===void 0&&(D={},c[U]=D);let O=D[V];O===void 0&&(O=C.clone(),D[V]=O,A.addEventListener("dispose",w)),C=O}if(C.visible=A.visible,C.wireframe=A.wireframe,T===As?C.side=A.shadowSide!==null?A.shadowSide:A.side:C.side=A.shadowSide!==null?A.shadowSide:u[A.side],C.alphaMap=A.alphaMap,C.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,C.map=A.map,C.clipShadows=A.clipShadows,C.clippingPlanes=A.clippingPlanes,C.clipIntersection=A.clipIntersection,C.displacementMap=A.displacementMap,C.displacementScale=A.displacementScale,C.displacementBias=A.displacementBias,C.wireframeLinewidth=A.wireframeLinewidth,C.linewidth=A.linewidth,_.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let U=i.properties.get(C);U.light=_}return C}function b(S,A,_,T,C){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&C===As)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,S.matrixWorld);let V=e.update(S),D=S.material;if(Array.isArray(D)){let O=V.groups;for(let H=0,X=O.length;H<X;H++){let ne=O[H],W=D[ne.materialIndex];if(W&&W.visible){let Z=R(S,W,T,C);S.onBeforeShadow(i,S,A,_,V,Z,ne),i.renderBufferDirect(_,null,V,Z,S,ne),S.onAfterShadow(i,S,A,_,V,Z,ne)}}}else if(D.visible){let O=R(S,D,T,C);S.onBeforeShadow(i,S,A,_,V,O,null),i.renderBufferDirect(_,null,V,O,S,null),S.onAfterShadow(i,S,A,_,V,O,null)}}let U=S.children;for(let V=0,D=U.length;V<D;V++)b(U[V],A,_,T,C)}function w(S){S.target.removeEventListener("dispose",w);for(let _ in c){let T=c[_],C=S.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function s_(i,e){function t(){let F=!1,xe=new vt,Q=null,ue=new vt(0,0,0,0);return{setMask:function(Me){Q!==Me&&!F&&(i.colorMask(Me,Me,Me,Me),Q=Me)},setLocked:function(Me){F=Me},setClear:function(Me,se,Pe,Ee,ut){ut===!0&&(Me*=Ee,se*=Ee,Pe*=Ee),xe.set(Me,se,Pe,Ee),ue.equals(xe)===!1&&(i.clearColor(Me,se,Pe,Ee),ue.copy(xe))},reset:function(){F=!1,Q=null,ue.set(-1,0,0,0)}}}function n(){let F=!1,xe=!1,Q=null,ue=null,Me=null;return{setReversed:function(se){if(xe!==se){let Pe=e.get("EXT_clip_control");se?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),xe=se;let Ee=Me;Me=null,this.setClear(Ee)}},getReversed:function(){return xe},setTest:function(se){se?J(i.DEPTH_TEST):ye(i.DEPTH_TEST)},setMask:function(se){Q!==se&&!F&&(i.depthMask(se),Q=se)},setFunc:function(se){if(xe&&(se=Qh[se]),ue!==se){switch(se){case xa:i.depthFunc(i.NEVER);break;case va:i.depthFunc(i.ALWAYS);break;case Sa:i.depthFunc(i.LESS);break;case ds:i.depthFunc(i.LEQUAL);break;case Ma:i.depthFunc(i.EQUAL);break;case wa:i.depthFunc(i.GEQUAL);break;case Ea:i.depthFunc(i.GREATER);break;case Ta:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ue=se}},setLocked:function(se){F=se},setClear:function(se){Me!==se&&(Me=se,xe&&(se=1-se),i.clearDepth(se))},reset:function(){F=!1,Q=null,ue=null,Me=null,xe=!1}}}function s(){let F=!1,xe=null,Q=null,ue=null,Me=null,se=null,Pe=null,Ee=null,ut=null;return{setTest:function(nt){F||(nt?J(i.STENCIL_TEST):ye(i.STENCIL_TEST))},setMask:function(nt){xe!==nt&&!F&&(i.stencilMask(nt),xe=nt)},setFunc:function(nt,wt,St){(Q!==nt||ue!==wt||Me!==St)&&(i.stencilFunc(nt,wt,St),Q=nt,ue=wt,Me=St)},setOp:function(nt,wt,St){(se!==nt||Pe!==wt||Ee!==St)&&(i.stencilOp(nt,wt,St),se=nt,Pe=wt,Ee=St)},setLocked:function(nt){F=nt},setClear:function(nt){ut!==nt&&(i.clearStencil(nt),ut=nt)},reset:function(){F=!1,xe=null,Q=null,ue=null,Me=null,se=null,Pe=null,Ee=null,ut=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],v=null,m=!1,p=null,M=null,R=null,b=null,w=null,S=null,A=null,_=new We(0,0,0),T=0,C=!1,I=null,U=null,V=null,D=null,O=null,H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,ne=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(W)[1]),X=ne>=1):W.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),X=ne>=2);let Z=null,ee={},we=i.getParameter(i.SCISSOR_BOX),_e=i.getParameter(i.VIEWPORT),He=new vt().fromArray(we),je=new vt().fromArray(_e);function Xe(F,xe,Q,ue){let Me=new Uint8Array(4),se=i.createTexture();i.bindTexture(F,se),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pe=0;Pe<Q;Pe++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(xe,0,i.RGBA,1,1,ue,0,i.RGBA,i.UNSIGNED_BYTE,Me):i.texImage2D(xe+Pe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Me);return se}let j={};j[i.TEXTURE_2D]=Xe(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=Xe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=Xe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=Xe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(i.DEPTH_TEST),a.setFunc(ds),oe(!1),me(kl),J(i.CULL_FACE),ae(Wn);function J(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function ye(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function Ne(F,xe){return d[F]!==xe?(i.bindFramebuffer(F,xe),d[F]=xe,F===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=xe),F===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=xe),!0):!1}function ie(F,xe){let Q=g,ue=!1;if(F){Q=f.get(xe),Q===void 0&&(Q=[],f.set(xe,Q));let Me=F.textures;if(Q.length!==Me.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let se=0,Pe=Me.length;se<Pe;se++)Q[se]=i.COLOR_ATTACHMENT0+se;Q.length=Me.length,ue=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,ue=!0);ue&&i.drawBuffers(Q)}function ve(F){return v!==F?(i.useProgram(F),v=F,!0):!1}let et={[Bi]:i.FUNC_ADD,[xh]:i.FUNC_SUBTRACT,[vh]:i.FUNC_REVERSE_SUBTRACT};et[Sh]=i.MIN,et[Mh]=i.MAX;let K={[wh]:i.ZERO,[Eh]:i.ONE,[Th]:i.SRC_COLOR,[Vl]:i.SRC_ALPHA,[Dh]:i.SRC_ALPHA_SATURATE,[Ph]:i.DST_COLOR,[Ah]:i.DST_ALPHA,[Rh]:i.ONE_MINUS_SRC_COLOR,[Wl]:i.ONE_MINUS_SRC_ALPHA,[Ih]:i.ONE_MINUS_DST_COLOR,[Ch]:i.ONE_MINUS_DST_ALPHA,[Lh]:i.CONSTANT_COLOR,[Nh]:i.ONE_MINUS_CONSTANT_COLOR,[Uh]:i.CONSTANT_ALPHA,[Fh]:i.ONE_MINUS_CONSTANT_ALPHA};function ae(F,xe,Q,ue,Me,se,Pe,Ee,ut,nt){if(F===Wn){m===!0&&(ye(i.BLEND),m=!1);return}if(m===!1&&(J(i.BLEND),m=!0),F!==bh){if(F!==p||nt!==C){if((M!==Bi||w!==Bi)&&(i.blendEquation(i.FUNC_ADD),M=Bi,w=Bi),nt)switch(F){case Cs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zl:i.blendFunc(i.ONE,i.ONE);break;case Hl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:qe("WebGLState: Invalid blending: ",F);break}else switch(F){case Cs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Hl:qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gl:qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qe("WebGLState: Invalid blending: ",F);break}R=null,b=null,S=null,A=null,_.set(0,0,0),T=0,p=F,C=nt}return}Me=Me||xe,se=se||Q,Pe=Pe||ue,(xe!==M||Me!==w)&&(i.blendEquationSeparate(et[xe],et[Me]),M=xe,w=Me),(Q!==R||ue!==b||se!==S||Pe!==A)&&(i.blendFuncSeparate(K[Q],K[ue],K[se],K[Pe]),R=Q,b=ue,S=se,A=Pe),(Ee.equals(_)===!1||ut!==T)&&(i.blendColor(Ee.r,Ee.g,Ee.b,ut),_.copy(Ee),T=ut),p=F,C=!1}function re(F,xe){F.side===yn?ye(i.CULL_FACE):J(i.CULL_FACE);let Q=F.side===Ht;xe&&(Q=!Q),oe(Q),F.blending===Cs&&F.transparent===!1?ae(Wn):ae(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);let ue=F.stencilWrite;o.setTest(ue),ue&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ke(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):ye(i.SAMPLE_ALPHA_TO_COVERAGE)}function oe(F){I!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),I=F)}function me(F){F!==gh?(J(i.CULL_FACE),F!==U&&(F===kl?i.cullFace(i.BACK):F===_h?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ye(i.CULL_FACE),U=F}function Ue(F){F!==V&&(X&&i.lineWidth(F),V=F)}function ke(F,xe,Q){F?(J(i.POLYGON_OFFSET_FILL),(D!==xe||O!==Q)&&(D=xe,O=Q,a.getReversed()&&(xe=-xe),i.polygonOffset(xe,Q))):ye(i.POLYGON_OFFSET_FILL)}function Oe(F){F?J(i.SCISSOR_TEST):ye(i.SCISSOR_TEST)}function Be(F){F===void 0&&(F=i.TEXTURE0+H-1),Z!==F&&(i.activeTexture(F),Z=F)}function L(F,xe,Q){Q===void 0&&(Z===null?Q=i.TEXTURE0+H-1:Q=Z);let ue=ee[Q];ue===void 0&&(ue={type:void 0,texture:void 0},ee[Q]=ue),(ue.type!==F||ue.texture!==xe)&&(Z!==Q&&(i.activeTexture(Q),Z=Q),i.bindTexture(F,xe||j[F]),ue.type=F,ue.texture=xe)}function tt(){let F=ee[Z];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Ye(){try{i.compressedTexImage2D(...arguments)}catch(F){qe("WebGLState:",F)}}function E(){try{i.compressedTexImage3D(...arguments)}catch(F){qe("WebGLState:",F)}}function y(){try{i.texSubImage2D(...arguments)}catch(F){qe("WebGLState:",F)}}function B(){try{i.texSubImage3D(...arguments)}catch(F){qe("WebGLState:",F)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(F){qe("WebGLState:",F)}}function Y(){try{i.compressedTexSubImage3D(...arguments)}catch(F){qe("WebGLState:",F)}}function ce(){try{i.texStorage2D(...arguments)}catch(F){qe("WebGLState:",F)}}function he(){try{i.texStorage3D(...arguments)}catch(F){qe("WebGLState:",F)}}function $(){try{i.texImage2D(...arguments)}catch(F){qe("WebGLState:",F)}}function te(){try{i.texImage3D(...arguments)}catch(F){qe("WebGLState:",F)}}function de(F){return u[F]!==void 0?u[F]:i.getParameter(F)}function Fe(F,xe){u[F]!==xe&&(i.pixelStorei(F,xe),u[F]=xe)}function pe(F){He.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),He.copy(F))}function be(F){je.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),je.copy(F))}function Ce(F,xe){let Q=c.get(xe);Q===void 0&&(Q=new WeakMap,c.set(xe,Q));let ue=Q.get(F);ue===void 0&&(ue=i.getUniformBlockIndex(xe,F.name),Q.set(F,ue))}function De(F,xe){let ue=c.get(xe).get(F);l.get(xe)!==ue&&(i.uniformBlockBinding(xe,ue,F.__bindingPointIndex),l.set(xe,ue))}function Ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},Z=null,ee={},d={},f=new WeakMap,g=[],v=null,m=!1,p=null,M=null,R=null,b=null,w=null,S=null,A=null,_=new We(0,0,0),T=0,C=!1,I=null,U=null,V=null,D=null,O=null,He.set(0,0,i.canvas.width,i.canvas.height),je.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:J,disable:ye,bindFramebuffer:Ne,drawBuffers:ie,useProgram:ve,setBlending:ae,setMaterial:re,setFlipSided:oe,setCullFace:me,setLineWidth:Ue,setPolygonOffset:ke,setScissorTest:Oe,activeTexture:Be,bindTexture:L,unbindTexture:tt,compressedTexImage2D:Ye,compressedTexImage3D:E,texImage2D:$,texImage3D:te,pixelStorei:Fe,getParameter:de,updateUBOMapping:Ce,uniformBlockBinding:De,texStorage2D:ce,texStorage3D:he,texSubImage2D:y,texSubImage3D:B,compressedTexSubImage2D:G,compressedTexSubImage3D:Y,scissor:pe,viewport:be,reset:Ze}}function r_(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new le,h=new WeakMap,u=new Set,d,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(E,y){return g?new OffscreenCanvas(E,y):fs("canvas")}function m(E,y,B){let G=1,Y=Ye(E);if((Y.width>B||Y.height>B)&&(G=B/Math.max(Y.width,Y.height)),G<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let ce=Math.floor(G*Y.width),he=Math.floor(G*Y.height);d===void 0&&(d=v(ce,he));let $=y?v(ce,he):d;return $.width=ce,$.height=he,$.getContext("2d").drawImage(E,0,0,ce,he),Ge("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+ce+"x"+he+")."),$}else return"data"in E&&Ge("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),E;return E}function p(E){return E.generateMipmaps}function M(E){i.generateMipmap(E)}function R(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(E,y,B,G,Y,ce=!1){if(E!==null){if(i[E]!==void 0)return i[E];Ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let he;G&&(he=e.get("EXT_texture_norm16"),he||Ge("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=y;if(y===i.RED&&(B===i.FLOAT&&($=i.R32F),B===i.HALF_FLOAT&&($=i.R16F),B===i.UNSIGNED_BYTE&&($=i.R8),B===i.UNSIGNED_SHORT&&he&&($=he.R16_EXT),B===i.SHORT&&he&&($=he.R16_SNORM_EXT)),y===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.R8UI),B===i.UNSIGNED_SHORT&&($=i.R16UI),B===i.UNSIGNED_INT&&($=i.R32UI),B===i.BYTE&&($=i.R8I),B===i.SHORT&&($=i.R16I),B===i.INT&&($=i.R32I)),y===i.RG&&(B===i.FLOAT&&($=i.RG32F),B===i.HALF_FLOAT&&($=i.RG16F),B===i.UNSIGNED_BYTE&&($=i.RG8),B===i.UNSIGNED_SHORT&&he&&($=he.RG16_EXT),B===i.SHORT&&he&&($=he.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RG8UI),B===i.UNSIGNED_SHORT&&($=i.RG16UI),B===i.UNSIGNED_INT&&($=i.RG32UI),B===i.BYTE&&($=i.RG8I),B===i.SHORT&&($=i.RG16I),B===i.INT&&($=i.RG32I)),y===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RGB8UI),B===i.UNSIGNED_SHORT&&($=i.RGB16UI),B===i.UNSIGNED_INT&&($=i.RGB32UI),B===i.BYTE&&($=i.RGB8I),B===i.SHORT&&($=i.RGB16I),B===i.INT&&($=i.RGB32I)),y===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RGBA8UI),B===i.UNSIGNED_SHORT&&($=i.RGBA16UI),B===i.UNSIGNED_INT&&($=i.RGBA32UI),B===i.BYTE&&($=i.RGBA8I),B===i.SHORT&&($=i.RGBA16I),B===i.INT&&($=i.RGBA32I)),y===i.RGB&&(B===i.UNSIGNED_SHORT&&he&&($=he.RGB16_EXT),B===i.SHORT&&he&&($=he.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),y===i.RGBA){let te=ce?$s:st.getTransfer(Y);B===i.FLOAT&&($=i.RGBA32F),B===i.HALF_FLOAT&&($=i.RGBA16F),B===i.UNSIGNED_BYTE&&($=te===ht?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&he&&($=he.RGBA16_EXT),B===i.SHORT&&he&&($=he.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function w(E,y){let B;return E?y===null||y===Dn||y===Ds?B=i.DEPTH24_STENCIL8:y===bn?B=i.DEPTH32F_STENCIL8:y===Is&&(B=i.DEPTH24_STENCIL8,Ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Dn||y===Ds?B=i.DEPTH_COMPONENT24:y===bn?B=i.DEPTH_COMPONENT32F:y===Is&&(B=i.DEPTH_COMPONENT16),B}function S(E,y){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==Ut&&E.minFilter!==zt?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function A(E){let y=E.target;y.removeEventListener("dispose",A),T(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&u.delete(y)}function _(E){let y=E.target;y.removeEventListener("dispose",_),I(y)}function T(E){let y=n.get(E);if(y.__webglInit===void 0)return;let B=E.source,G=f.get(B);if(G){let Y=G[y.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&C(E),Object.keys(G).length===0&&f.delete(B)}n.remove(E)}function C(E){let y=n.get(E);i.deleteTexture(y.__webglTexture);let B=E.source,G=f.get(B);delete G[y.__cacheKey],a.memory.textures--}function I(E){let y=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(y.__webglFramebuffer[G]))for(let Y=0;Y<y.__webglFramebuffer[G].length;Y++)i.deleteFramebuffer(y.__webglFramebuffer[G][Y]);else i.deleteFramebuffer(y.__webglFramebuffer[G]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[G])}else{if(Array.isArray(y.__webglFramebuffer))for(let G=0;G<y.__webglFramebuffer.length;G++)i.deleteFramebuffer(y.__webglFramebuffer[G]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let G=0;G<y.__webglColorRenderbuffer.length;G++)y.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[G]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let B=E.textures;for(let G=0,Y=B.length;G<Y;G++){let ce=n.get(B[G]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),a.memory.textures--),n.remove(B[G])}n.remove(E)}let U=0;function V(){U=0}function D(){return U}function O(E){U=E}function H(){let E=U;return E>=s.maxTextures&&Ge("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures),U+=1,E}function X(E){let y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.colorSpace),y.join()}function ne(E,y){let B=n.get(E);if(E.isVideoTexture&&L(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&B.__version!==E.version){let G=E.image;if(G===null)Ge("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Ge("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(B,E,y);return}}else E.isExternalTexture&&(B.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+y)}function W(E,y){let B=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){ye(B,E,y);return}else E.isExternalTexture&&(B.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+y)}function Z(E,y){let B=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){ye(B,E,y);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+y)}function ee(E,y){let B=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&B.__version!==E.version){Ne(B,E,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+y)}let we={[Qn]:i.REPEAT,[Bn]:i.CLAMP_TO_EDGE,[Ra]:i.MIRRORED_REPEAT},_e={[Ut]:i.NEAREST,[kh]:i.NEAREST_MIPMAP_NEAREST,[Ar]:i.NEAREST_MIPMAP_LINEAR,[zt]:i.LINEAR,[io]:i.LINEAR_MIPMAP_NEAREST,[vi]:i.LINEAR_MIPMAP_LINEAR},He={[Vh]:i.NEVER,[Yh]:i.ALWAYS,[Wh]:i.LESS,[Go]:i.LEQUAL,[Xh]:i.EQUAL,[Vo]:i.GEQUAL,[qh]:i.GREATER,[jh]:i.NOTEQUAL};function je(E,y){if(y.type===bn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===zt||y.magFilter===io||y.magFilter===Ar||y.magFilter===vi||y.minFilter===zt||y.minFilter===io||y.minFilter===Ar||y.minFilter===vi)&&Ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,we[y.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,we[y.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,we[y.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,_e[y.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,_e[y.minFilter]),y.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,He[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ut||y.minFilter!==Ar&&y.minFilter!==vi||y.type===bn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Xe(E,y){let B=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",A));let G=y.source,Y=f.get(G);Y===void 0&&(Y={},f.set(G,Y));let ce=X(y);if(ce!==E.__cacheKey){Y[ce]===void 0&&(Y[ce]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Y[ce].usedTimes++;let he=Y[E.__cacheKey];he!==void 0&&(Y[E.__cacheKey].usedTimes--,he.usedTimes===0&&C(y)),E.__cacheKey=ce,E.__webglTexture=Y[ce].texture}return B}function j(E,y,B){return Math.floor(Math.floor(E/B)/y)}function J(E,y,B,G){let ce=E.updateRanges;if(ce.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,B,G,y.data);else{ce.sort((Fe,pe)=>Fe.start-pe.start);let he=0;for(let Fe=1;Fe<ce.length;Fe++){let pe=ce[he],be=ce[Fe],Ce=pe.start+pe.count,De=j(be.start,y.width,4),Ze=j(pe.start,y.width,4);be.start<=Ce+1&&De===Ze&&j(be.start+be.count-1,y.width,4)===De?pe.count=Math.max(pe.count,be.start+be.count-pe.start):(++he,ce[he]=be)}ce.length=he+1;let $=t.getParameter(i.UNPACK_ROW_LENGTH),te=t.getParameter(i.UNPACK_SKIP_PIXELS),de=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let Fe=0,pe=ce.length;Fe<pe;Fe++){let be=ce[Fe],Ce=Math.floor(be.start/4),De=Math.ceil(be.count/4),Ze=Ce%y.width,F=Math.floor(Ce/y.width),xe=De,Q=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ze),t.pixelStorei(i.UNPACK_SKIP_ROWS,F),t.texSubImage2D(i.TEXTURE_2D,0,Ze,F,xe,Q,B,G,y.data)}E.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,$),t.pixelStorei(i.UNPACK_SKIP_PIXELS,te),t.pixelStorei(i.UNPACK_SKIP_ROWS,de)}}function ye(E,y,B){let G=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(G=i.TEXTURE_3D);let Y=Xe(E,y),ce=y.source;t.bindTexture(G,E.__webglTexture,i.TEXTURE0+B);let he=n.get(ce);if(ce.version!==he.__version||Y===!0){if(t.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let Q=st.getPrimaries(st.workingColorSpace),ue=y.colorSpace===Bt?null:st.getPrimaries(y.colorSpace),Me=y.colorSpace===Bt||Q===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me)}t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let te=m(y.image,!1,s.maxTextureSize);te=tt(y,te);let de=r.convert(y.format,y.colorSpace),Fe=r.convert(y.type),pe=b(y.internalFormat,de,Fe,y.normalized,y.colorSpace,y.isVideoTexture);je(G,y);let be,Ce=y.mipmaps,De=y.isVideoTexture!==!0,Ze=he.__version===void 0||Y===!0,F=ce.dataReady,xe=S(y,te);if(y.isDepthTexture)pe=w(y.format===Si,y.type),Ze&&(De?t.texStorage2D(i.TEXTURE_2D,1,pe,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,pe,te.width,te.height,0,de,Fe,null));else if(y.isDataTexture)if(Ce.length>0){De&&Ze&&t.texStorage2D(i.TEXTURE_2D,xe,pe,Ce[0].width,Ce[0].height);for(let Q=0,ue=Ce.length;Q<ue;Q++)be=Ce[Q],De?F&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,be.width,be.height,de,Fe,be.data):t.texImage2D(i.TEXTURE_2D,Q,pe,be.width,be.height,0,de,Fe,be.data);y.generateMipmaps=!1}else De?(Ze&&t.texStorage2D(i.TEXTURE_2D,xe,pe,te.width,te.height),F&&J(y,te,de,Fe)):t.texImage2D(i.TEXTURE_2D,0,pe,te.width,te.height,0,de,Fe,te.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){De&&Ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,pe,Ce[0].width,Ce[0].height,te.depth);for(let Q=0,ue=Ce.length;Q<ue;Q++)if(be=Ce[Q],y.format!==xn)if(de!==null)if(De){if(F)if(y.layerUpdates.size>0){let Me=dc(be.width,be.height,y.format,y.type);for(let se of y.layerUpdates){let Pe=be.data.subarray(se*Me/be.data.BYTES_PER_ELEMENT,(se+1)*Me/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,se,be.width,be.height,1,de,Pe)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,be.width,be.height,te.depth,de,be.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,pe,be.width,be.height,te.depth,0,be.data,0,0);else Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?F&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,be.width,be.height,te.depth,de,Fe,be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,pe,be.width,be.height,te.depth,0,de,Fe,be.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{De&&Ze&&t.texStorage2D(i.TEXTURE_2D,xe,pe,Ce[0].width,Ce[0].height);for(let Q=0,ue=Ce.length;Q<ue;Q++)be=Ce[Q],y.format!==xn?de!==null?De?F&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,be.width,be.height,de,be.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,pe,be.width,be.height,0,be.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?F&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,be.width,be.height,de,Fe,be.data):t.texImage2D(i.TEXTURE_2D,Q,pe,be.width,be.height,0,de,Fe,be.data)}else if(y.isDataArrayTexture)if(De){if(Ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,pe,te.width,te.height,te.depth),F)if(y.layerUpdates.size>0){let Q=dc(te.width,te.height,y.format,y.type);for(let ue of y.layerUpdates){let Me=te.data.subarray(ue*Q/te.data.BYTES_PER_ELEMENT,(ue+1)*Q/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ue,te.width,te.height,1,de,Fe,Me)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,de,Fe,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,pe,te.width,te.height,te.depth,0,de,Fe,te.data);else if(y.isData3DTexture)De?(Ze&&t.texStorage3D(i.TEXTURE_3D,xe,pe,te.width,te.height,te.depth),F&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,de,Fe,te.data)):t.texImage3D(i.TEXTURE_3D,0,pe,te.width,te.height,te.depth,0,de,Fe,te.data);else if(y.isFramebufferTexture){if(Ze)if(De)t.texStorage2D(i.TEXTURE_2D,xe,pe,te.width,te.height);else{let Q=te.width,ue=te.height;for(let Me=0;Me<xe;Me++)t.texImage2D(i.TEXTURE_2D,Me,pe,Q,ue,0,de,Fe,null),Q>>=1,ue>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){let Q=i.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),te.parentNode!==Q){Q.appendChild(te),u.add(y),Q.onpaint=ue=>{let Me=ue.changedElements;for(let se of u)Me.includes(se.image)&&(se.needsUpdate=!0)},Q.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,te);else{let Me=i.RGBA,se=i.RGBA,Pe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Me,se,Pe,te)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ce.length>0){if(De&&Ze){let Q=Ye(Ce[0]);t.texStorage2D(i.TEXTURE_2D,xe,pe,Q.width,Q.height)}for(let Q=0,ue=Ce.length;Q<ue;Q++)be=Ce[Q],De?F&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,de,Fe,be):t.texImage2D(i.TEXTURE_2D,Q,pe,de,Fe,be);y.generateMipmaps=!1}else if(De){if(Ze){let Q=Ye(te);t.texStorage2D(i.TEXTURE_2D,xe,pe,Q.width,Q.height)}F&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de,Fe,te)}else t.texImage2D(i.TEXTURE_2D,0,pe,de,Fe,te);p(y)&&M(G),he.__version=ce.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function Ne(E,y,B){if(y.image.length!==6)return;let G=Xe(E,y),Y=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+B);let ce=n.get(Y);if(Y.version!==ce.__version||G===!0){t.activeTexture(i.TEXTURE0+B);let he=st.getPrimaries(st.workingColorSpace),$=y.colorSpace===Bt?null:st.getPrimaries(y.colorSpace),te=y.colorSpace===Bt||he===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let de=y.isCompressedTexture||y.image[0].isCompressedTexture,Fe=y.image[0]&&y.image[0].isDataTexture,pe=[];for(let se=0;se<6;se++)!de&&!Fe?pe[se]=m(y.image[se],!0,s.maxCubemapSize):pe[se]=Fe?y.image[se].image:y.image[se],pe[se]=tt(y,pe[se]);let be=pe[0],Ce=r.convert(y.format,y.colorSpace),De=r.convert(y.type),Ze=b(y.internalFormat,Ce,De,y.normalized,y.colorSpace),F=y.isVideoTexture!==!0,xe=ce.__version===void 0||G===!0,Q=Y.dataReady,ue=S(y,be);je(i.TEXTURE_CUBE_MAP,y);let Me;if(de){F&&xe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,Ze,be.width,be.height);for(let se=0;se<6;se++){Me=pe[se].mipmaps;for(let Pe=0;Pe<Me.length;Pe++){let Ee=Me[Pe];y.format!==xn?Ce!==null?F?Q&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe,0,0,Ee.width,Ee.height,Ce,Ee.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe,Ze,Ee.width,Ee.height,0,Ee.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe,0,0,Ee.width,Ee.height,Ce,De,Ee.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe,Ze,Ee.width,Ee.height,0,Ce,De,Ee.data)}}}else{if(Me=y.mipmaps,F&&xe){Me.length>0&&ue++;let se=Ye(pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,Ze,se.width,se.height)}for(let se=0;se<6;se++)if(Fe){F?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,pe[se].width,pe[se].height,Ce,De,pe[se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ze,pe[se].width,pe[se].height,0,Ce,De,pe[se].data);for(let Pe=0;Pe<Me.length;Pe++){let ut=Me[Pe].image[se].image;F?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe+1,0,0,ut.width,ut.height,Ce,De,ut.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe+1,Ze,ut.width,ut.height,0,Ce,De,ut.data)}}else{F?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ce,De,pe[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ze,Ce,De,pe[se]);for(let Pe=0;Pe<Me.length;Pe++){let Ee=Me[Pe];F?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe+1,0,0,Ce,De,Ee.image[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe+1,Ze,Ce,De,Ee.image[se])}}}p(y)&&M(i.TEXTURE_CUBE_MAP),ce.__version=Y.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function ie(E,y,B,G,Y,ce){let he=r.convert(B.format,B.colorSpace),$=r.convert(B.type),te=b(B.internalFormat,he,$,B.normalized,B.colorSpace),de=n.get(y),Fe=n.get(B);if(Fe.__renderTarget=y,!de.__hasExternalTextures){let pe=Math.max(1,y.width>>ce),be=Math.max(1,y.height>>ce);Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?t.texImage3D(Y,ce,te,pe,be,y.depth,0,he,$,null):t.texImage2D(Y,ce,te,pe,be,0,he,$,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),Be(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,Y,Fe.__webglTexture,0,Oe(y)):(Y===i.TEXTURE_2D||Y>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,Y,Fe.__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ve(E,y,B){if(i.bindRenderbuffer(i.RENDERBUFFER,E),y.depthBuffer){let G=y.depthTexture,Y=G&&G.isDepthTexture?G.type:null,ce=w(y.stencilBuffer,Y),he=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Be(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Oe(y),ce,y.width,y.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,Oe(y),ce,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ce,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,E)}else{let G=y.textures;for(let Y=0;Y<G.length;Y++){let ce=G[Y],he=r.convert(ce.format,ce.colorSpace),$=r.convert(ce.type),te=b(ce.internalFormat,he,$,ce.normalized,ce.colorSpace);Be(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Oe(y),te,y.width,y.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,Oe(y),te,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,te,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function et(E,y,B){let G=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Y=n.get(y.depthTexture);if(Y.__renderTarget=y,(!Y.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),G){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,y.depthTexture.addEventListener("dispose",A)),Y.__webglTexture===void 0){Y.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),je(i.TEXTURE_CUBE_MAP,y.depthTexture);let de=r.convert(y.depthTexture.format),Fe=r.convert(y.depthTexture.type),pe;y.depthTexture.format===kn?pe=i.DEPTH_COMPONENT24:y.depthTexture.format===Si&&(pe=i.DEPTH24_STENCIL8);for(let be=0;be<6;be++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,pe,y.width,y.height,0,de,Fe,null)}}else ne(y.depthTexture,0);let ce=Y.__webglTexture,he=Oe(y),$=G?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,te=y.depthTexture.format===Si?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===kn)Be(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,$,ce,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,te,$,ce,0);else if(y.depthTexture.format===Si)Be(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,$,ce,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,te,$,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function K(E){let y=n.get(E),B=E.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==E.depthTexture){let G=E.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),G){let Y=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,G.removeEventListener("dispose",Y)};G.addEventListener("dispose",Y),y.__depthDisposeCallback=Y}y.__boundDepthTexture=G}if(E.depthTexture&&!y.__autoAllocateDepthBuffer)if(B)for(let G=0;G<6;G++)et(y.__webglFramebuffer[G],E,G);else{let G=E.texture.mipmaps;G&&G.length>0?et(y.__webglFramebuffer[0],E,0):et(y.__webglFramebuffer,E,0)}else if(B){y.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[G]),y.__webglDepthbuffer[G]===void 0)y.__webglDepthbuffer[G]=i.createRenderbuffer(),ve(y.__webglDepthbuffer[G],E,!1);else{let Y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=y.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,ce)}}else{let G=E.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),ve(y.__webglDepthbuffer,E,!1);else{let Y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,ce)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(E,y,B){let G=n.get(E);y!==void 0&&ie(G.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&K(E)}function re(E){let y=E.texture,B=n.get(E),G=n.get(y);E.addEventListener("dispose",_);let Y=E.textures,ce=E.isWebGLCubeRenderTarget===!0,he=Y.length>1;if(he||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=y.version,a.memory.textures++),ce){B.__webglFramebuffer=[];for(let $=0;$<6;$++)if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer[$]=[];for(let te=0;te<y.mipmaps.length;te++)B.__webglFramebuffer[$][te]=i.createFramebuffer()}else B.__webglFramebuffer[$]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer=[];for(let $=0;$<y.mipmaps.length;$++)B.__webglFramebuffer[$]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(he)for(let $=0,te=Y.length;$<te;$++){let de=n.get(Y[$]);de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&Be(E)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let $=0;$<Y.length;$++){let te=Y[$];B.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[$]);let de=r.convert(te.format,te.colorSpace),Fe=r.convert(te.type),pe=b(te.internalFormat,de,Fe,te.normalized,te.colorSpace,E.isXRRenderTarget===!0),be=Oe(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,be,pe,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,B.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),ve(B.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),je(i.TEXTURE_CUBE_MAP,y);for(let $=0;$<6;$++)if(y.mipmaps&&y.mipmaps.length>0)for(let te=0;te<y.mipmaps.length;te++)ie(B.__webglFramebuffer[$][te],E,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,te);else ie(B.__webglFramebuffer[$],E,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);p(y)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let $=0,te=Y.length;$<te;$++){let de=Y[$],Fe=n.get(de),pe=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(pe=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,Fe.__webglTexture),je(pe,de),ie(B.__webglFramebuffer,E,de,i.COLOR_ATTACHMENT0+$,pe,0),p(de)&&M(pe)}t.unbindTexture()}else{let $=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&($=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture($,G.__webglTexture),je($,y),y.mipmaps&&y.mipmaps.length>0)for(let te=0;te<y.mipmaps.length;te++)ie(B.__webglFramebuffer[te],E,y,i.COLOR_ATTACHMENT0,$,te);else ie(B.__webglFramebuffer,E,y,i.COLOR_ATTACHMENT0,$,0);p(y)&&M($),t.unbindTexture()}E.depthBuffer&&K(E)}function oe(E){let y=E.textures;for(let B=0,G=y.length;B<G;B++){let Y=y[B];if(p(Y)){let ce=R(E),he=n.get(Y).__webglTexture;t.bindTexture(ce,he),M(ce),t.unbindTexture()}}}let me=[],Ue=[];function ke(E){if(E.samples>0){if(Be(E)===!1){let y=E.textures,B=E.width,G=E.height,Y=i.COLOR_BUFFER_BIT,ce=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=n.get(E),$=y.length>1;if($)for(let de=0;de<y.length;de++)t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer);let te=E.texture.mipmaps;te&&te.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let de=0;de<y.length;de++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Y|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Y|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,he.__webglColorRenderbuffer[de]);let Fe=n.get(y[de]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Fe,0)}i.blitFramebuffer(0,0,B,G,0,0,B,G,Y,i.NEAREST),l===!0&&(me.length=0,Ue.length=0,me.push(i.COLOR_ATTACHMENT0+de),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&(me.push(ce),Ue.push(ce),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ue)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,me))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let de=0;de<y.length;de++){t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,he.__webglColorRenderbuffer[de]);let Fe=n.get(y[de]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,Fe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){let y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Oe(E){return Math.min(s.maxSamples,E.samples)}function Be(E){let y=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function L(E){let y=a.render.frame;h.get(E)!==y&&(h.set(E,y),E.update())}function tt(E,y){let B=E.colorSpace,G=E.format,Y=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||B!==Ks&&B!==Bt&&(st.getTransfer(B)===ht?(G!==xn||Y!==rn)&&Ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qe("WebGLTextures: Unsupported texture color space:",B)),y}function Ye(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=V,this.getTextureUnits=D,this.setTextureUnits=O,this.setTexture2D=ne,this.setTexture2DArray=W,this.setTexture3D=Z,this.setTextureCube=ee,this.rebindTextures=ae,this.setupRenderTarget=re,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=K,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=Be,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function a_(i,e){function t(n,s=Bt){let r,a=st.getTransfer(s);if(n===rn)return i.UNSIGNED_BYTE;if(n===ro)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ao)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ec)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===tc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===$l)return i.BYTE;if(n===Ql)return i.SHORT;if(n===Is)return i.UNSIGNED_SHORT;if(n===so)return i.INT;if(n===Dn)return i.UNSIGNED_INT;if(n===bn)return i.FLOAT;if(n===Ln)return i.HALF_FLOAT;if(n===nc)return i.ALPHA;if(n===ic)return i.RGB;if(n===xn)return i.RGBA;if(n===kn)return i.DEPTH_COMPONENT;if(n===Si)return i.DEPTH_STENCIL;if(n===oo)return i.RED;if(n===lo)return i.RED_INTEGER;if(n===Mi)return i.RG;if(n===co)return i.RG_INTEGER;if(n===ho)return i.RGBA_INTEGER;if(n===Cr||n===Pr||n===Ir||n===Dr)if(a===ht)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Cr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Cr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Pr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ir)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Dr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===uo||n===fo||n===po||n===mo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===uo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===fo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===po)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===mo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===go||n===_o||n===yo||n===bo||n===xo||n===Lr||n===vo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===go||n===_o)return a===ht?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===yo)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===bo)return r.COMPRESSED_R11_EAC;if(n===xo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Lr)return r.COMPRESSED_RG11_EAC;if(n===vo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===So||n===Mo||n===wo||n===Eo||n===To||n===Ro||n===Ao||n===Co||n===Po||n===Io||n===Do||n===Lo||n===No||n===Uo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===So)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Mo)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wo)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Eo)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===To)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ro)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ao)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Co)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Po)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Io)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Do)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Lo)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===No)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Uo)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fo||n===Oo||n===Bo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Fo)return a===ht?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Oo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Bo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ko||n===zo||n===Nr||n===Ho)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ko)return r.COMPRESSED_RED_RGTC1_EXT;if(n===zo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Nr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ho)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ds?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var o_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,l_=`
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

}`,Pc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new or(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new fn({vertexShader:o_,fragmentShader:l_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ve(new yr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ic=class extends Cn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,v=typeof XRWebGLBinding<"u",m=new Pc,p={},M=t.getContextAttributes(),R=null,b=null,w=[],S=[],A=new le,_=null,T=null,C=new kt;C.viewport=new vt;let I=new kt;I.viewport=new vt;let U=[C,I],V=new $a,D=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let J=w[j];return J===void 0&&(J=new _s,w[j]=J),J.getTargetRaySpace()},this.getControllerGrip=function(j){let J=w[j];return J===void 0&&(J=new _s,w[j]=J),J.getGripSpace()},this.getHand=function(j){let J=w[j];return J===void 0&&(J=new _s,w[j]=J),J.getHandSpace()};function H(j){let J=S.indexOf(j.inputSource);if(J===-1)return;let ye=w[J];ye!==void 0&&(ye.update(j.inputSource,j.frame,c||a),ye.dispatchEvent({type:j.type,data:j.inputSource}))}function X(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",ne);for(let j=0;j<w.length;j++){let J=S[j];J!==null&&(S[j]=null,w[j].disconnect(J))}D=null,O=null,m.reset();for(let j in p)delete p[j];if(e.setRenderTarget(R),f=null,d=null,u=null,s=null,b=null,Xe.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(A.width,A.height,!1),T!==null){let j=T.camera;j.fov=T.fov,j.zoom=T.zoom,j.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&Ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&Ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(R=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",X),s.addEventListener("inputsourceschange",ne),M.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(A),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Ne=null,ie=null;M.depth&&(ie=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=M.stencil?Si:kn,Ne=M.stencil?Ds:Dn);let ve={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(ve),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new sn(d.textureWidth,d.textureHeight,{format:xn,type:rn,depthTexture:new fi(d.textureWidth,d.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ye={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ye),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new sn(f.framebufferWidth,f.framebufferHeight,{format:xn,type:rn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Xe.setContext(s),Xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ne(j){for(let J=0;J<j.removed.length;J++){let ye=j.removed[J],Ne=S.indexOf(ye);Ne>=0&&(S[Ne]=null,w[Ne].disconnect(ye))}for(let J=0;J<j.added.length;J++){let ye=j.added[J],Ne=S.indexOf(ye);if(Ne===-1){for(let ve=0;ve<w.length;ve++)if(ve>=S.length){S.push(ye),Ne=ve;break}else if(S[ve]===null){S[ve]=ye,Ne=ve;break}if(Ne===-1)break}let ie=w[Ne];ie&&ie.connect(ye)}}let W=new P,Z=new P;function ee(j,J,ye){W.setFromMatrixPosition(J.matrixWorld),Z.setFromMatrixPosition(ye.matrixWorld);let Ne=W.distanceTo(Z),ie=J.projectionMatrix.elements,ve=ye.projectionMatrix.elements,et=ie[14]/(ie[10]-1),K=ie[14]/(ie[10]+1),ae=(ie[9]+1)/ie[5],re=(ie[9]-1)/ie[5],oe=(ie[8]-1)/ie[0],me=(ve[8]+1)/ve[0],Ue=et*oe,ke=et*me,Oe=Ne/(-oe+me),Be=Oe*-oe;if(J.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Be),j.translateZ(Oe),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),ie[10]===-1)j.projectionMatrix.copy(J.projectionMatrix),j.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let L=et+Oe,tt=K+Oe,Ye=Ue-Be,E=ke+(Ne-Be),y=ae*K/tt*L,B=re*K/tt*L;j.projectionMatrix.makePerspective(Ye,E,y,B,L,tt),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function we(j,J){J===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(J.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let J=j.near,ye=j.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(ye=m.depthFar)),V.near=I.near=C.near=J,V.far=I.far=C.far=ye,(D!==V.near||O!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),D=V.near,O=V.far),V.layers.mask=j.layers.mask|6,C.layers.mask=V.layers.mask&-5,I.layers.mask=V.layers.mask&-3;let Ne=j.parent,ie=V.cameras;we(V,Ne);for(let ve=0;ve<ie.length;ve++)we(ie[ve],Ne);ie.length===2?ee(V,C,I):V.projectionMatrix.copy(C.projectionMatrix),T===null&&j.isPerspectiveCamera&&(T={camera:j,fov:j.fov,zoom:j.zoom}),_e(j,V,Ne)};function _e(j,J,ye){ye===null?j.matrix.copy(J.matrixWorld):(j.matrix.copy(ye.matrixWorld),j.matrix.invert(),j.matrix.multiply(J.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(J.projectionMatrix),j.projectionMatrixInverse.copy(J.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=ms*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function(j){return p[j]};let He=null;function je(j,J){if(h=J.getViewerPose(c||a),g=J,h!==null){let ye=h.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let Ne=!1;ye.length!==V.cameras.length&&(V.cameras.length=0,Ne=!0);for(let K=0;K<ye.length;K++){let ae=ye[K],re=null;if(f!==null)re=f.getViewport(ae);else{let me=u.getViewSubImage(d,ae);re=me.viewport,K===0&&(e.setRenderTargetTextures(b,me.colorTexture,me.depthStencilTexture),e.setRenderTarget(b))}let oe=U[K];oe===void 0&&(oe=new kt,oe.layers.enable(K),oe.viewport=new vt,U[K]=oe),oe.matrix.fromArray(ae.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(ae.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(re.x,re.y,re.width,re.height),K===0&&(V.matrix.copy(oe.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Ne===!0&&V.cameras.push(oe)}let ie=s.enabledFeatures;if(ie&&ie.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=n.getBinding();let K=u.getDepthInformation(ye[0]);K&&K.isValid&&K.texture&&m.init(K,s.renderState)}if(ie&&ie.includes("camera-access")&&v){e.state.unbindTexture(),u=n.getBinding();for(let K=0;K<ye.length;K++){let ae=ye[K].camera;if(ae){let re=p[ae];re||(re=new or,p[ae]=re);let oe=u.getCameraImage(ae);re.sourceTexture=oe}}}}for(let ye=0;ye<w.length;ye++){let Ne=S[ye],ie=w[ye];Ne!==null&&ie!==void 0&&ie.update(Ne,J,c||a)}He&&He(j,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}let Xe=new Cd;Xe.setAnimationLoop(je),this.setAnimationLoop=function(j){He=j},this.dispose=function(){}}},c_=new gt,Ud=new Je;Ud.set(-1,0,0,0,1,0,0,0,1);function h_(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,lc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,R,b){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,R):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ht&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ht&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=e.get(p),R=M.envMap,b=M.envMapRotation;R&&(m.envMap.value=R,m.envMapRotation.value.setFromMatrix4(c_.makeRotationFromEuler(b)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Ud),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,R){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=R*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ht&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function d_(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,w){let S=w.program;n.uniformBlockBinding(b,S)}function c(b,w){let S=s[b.id];S===void 0&&(m(b),S=h(b),s[b.id]=S,b.addEventListener("dispose",M));let A=w.program;n.updateUBOMapping(b,A);let _=e.render.frame;r[b.id]!==_&&(d(b),r[b.id]=_)}function h(b){let w=u();b.__bindingPointIndex=w;let S=i.createBuffer(),A=b.__size,_=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,A,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,S),S}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let w=s[b.id],S=b.uniforms,A=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let _=0,T=S.length;_<T;_++){let C=S[_];if(Array.isArray(C))for(let I=0,U=C.length;I<U;I++)f(C[I],_,I,A);else f(C,_,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,w,S,A){if(v(b,w,S,A)===!0){let _=b.__offset,T=b.value;if(Array.isArray(T)){let C=0;for(let I=0;I<T.length;I++){let U=T[I],V=p(U);g(U,b.__data,C),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(C+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,b.__data)}}function g(b,w,S){typeof b=="number"||typeof b=="boolean"?w[0]=b:b.isMatrix3?(w[0]=b.elements[0],w[1]=b.elements[1],w[2]=b.elements[2],w[3]=0,w[4]=b.elements[3],w[5]=b.elements[4],w[6]=b.elements[5],w[7]=0,w[8]=b.elements[6],w[9]=b.elements[7],w[10]=b.elements[8],w[11]=0):ArrayBuffer.isView(b)?w.set(new b.constructor(b.buffer,b.byteOffset,w.length)):b.toArray(w,S)}function v(b,w,S,A){let _=b.value,T=w+"_"+S;if(A[T]===void 0)return typeof _=="number"||typeof _=="boolean"?A[T]=_:ArrayBuffer.isView(_)?A[T]=_.slice():A[T]=_.clone(),!0;{let C=A[T];if(typeof _=="number"||typeof _=="boolean"){if(C!==_)return A[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(C.equals(_)===!1)return C.copy(_),!0}}return!1}function m(b){let w=b.uniforms,S=0,A=16;for(let T=0,C=w.length;T<C;T++){let I=Array.isArray(w[T])?w[T]:[w[T]];for(let U=0,V=I.length;U<V;U++){let D=I[U],O=Array.isArray(D.value)?D.value:[D.value];for(let H=0,X=O.length;H<X;H++){let ne=O[H],W=p(ne),Z=S%A,ee=Z%W.boundary,we=Z+ee;S+=ee,we!==0&&A-we<W.storage&&(S+=A-we),D.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=S,S+=W.storage}}}let _=S%A;return _>0&&(S+=A-_),b.__size=S,b.__cache={},this}function p(b){let w={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(w.boundary=4,w.storage=4):b.isVector2?(w.boundary=8,w.storage=8):b.isVector3||b.isColor?(w.boundary=16,w.storage=12):b.isVector4?(w.boundary=16,w.storage=16):b.isMatrix3?(w.boundary=48,w.storage=48):b.isMatrix4?(w.boundary=64,w.storage=64):b.isTexture?Ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(w.boundary=16,w.storage=b.byteLength):Ge("WebGLRenderer: Unsupported uniform value type.",b),w}function M(b){let w=b.target;w.removeEventListener("dispose",M);let S=a.indexOf(w.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function R(){for(let b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:R}}var u_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Xn=null;function f_(){return Xn===null&&(Xn=new ir(u_,16,16,Mi,Ln),Xn.name="DFG_LUT",Xn.minFilter=zt,Xn.magFilter=zt,Xn.wrapS=Bn,Xn.wrapT=Bn,Xn.generateMipmaps=!1,Xn.needsUpdate=!0),Xn}var jo=class{constructor(e={}){let{canvas:t=Jh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=rn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let v=f,m=new Set([ho,co,lo]),p=new Set([rn,Dn,Is,Ds,ro,ao]),M=new Uint32Array(4),R=new Int32Array(4),b=new P,w=null,S=null,A=[],_=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=In,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,I=!1,U=null,V=null,D=null,O=null;this._outputColorSpace=Pt;let H=0,X=0,ne=null,W=-1,Z=null,ee=new vt,we=new vt,_e=null,He=new We(0),je=0,Xe=t.width,j=t.height,J=1,ye=null,Ne=null,ie=new vt(0,0,Xe,j),ve=new vt(0,0,Xe,j),et=!1,K=new xs,ae=!1,re=!1,oe=new gt,me=new P,Ue=new vt,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Oe=!1;function Be(){return ne===null?J:1}let L=n;function tt(x,N){return t.getContext(x,N)}let Ye,E,y,B,G,Y,ce,he,$,te,de,Fe,pe,be,Ce,De,Ze,F,xe,Q,ue,Me,se;try{let x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",ut,!1),t.addEventListener("webglcontextrestored",nt,!1),t.addEventListener("webglcontextcreationerror",wt,!1),L===null){let N="webgl2";if(L=tt(N,x),L===null)throw tt(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Pe()}catch(x){throw t.removeEventListener("webglcontextlost",ut,!1),t.removeEventListener("webglcontextrestored",nt,!1),t.removeEventListener("webglcontextcreationerror",wt,!1),qe("WebGLRenderer: "+x.message),x}function Pe(){Ye=new x0(L),Ye.init(),ue=new a_(L,Ye),E=new h0(L,Ye,e,ue),y=new s_(L,Ye),E.reversedDepthBuffer&&d&&y.buffers.depth.setReversed(!0),V=L.createFramebuffer(),D=L.createFramebuffer(),O=L.createFramebuffer(),B=new M0(L),G=new Wg,Y=new r_(L,Ye,y,G,E,ue,B),ce=new b0(C),he=new Ef(L),Me=new l0(L,he),$=new v0(L,he,B,Me),te=new E0(L,$,he,Me,B),F=new w0(L,E,Y),Ce=new d0(G),de=new Vg(C,ce,Ye,E,Me,Ce),Fe=new h_(C,G),pe=new qg,be=new $g(Ye),Ze=new o0(C,ce,y,te,g,l),De=new i_(C,te,E),se=new d_(L,B,E,y),xe=new c0(L,Ye,B),Q=new S0(L,Ye,B),B.programs=de.programs,C.capabilities=E,C.extensions=Ye,C.properties=G,C.renderLists=pe,C.shadowMap=De,C.state=y,C.info=B}v!==rn&&(T=new R0(v,t.width,t.height,o,s,r));let Ee=new Ic(C,L);this.xr=Ee,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let x=Ye.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=Ye.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(x){x!==void 0&&(J=x,this.setSize(Xe,j,!1))},this.getSize=function(x){return x.set(Xe,j)},this.setSize=function(x,N,q=!0){if(Ee.isPresenting){Ge("WebGLRenderer: Can't change size while VR device is presenting.");return}Xe=x,j=N,t.width=Math.floor(x*J),t.height=Math.floor(N*J),q===!0&&(t.style.width=x+"px",t.style.height=N+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,x,N)},this.getDrawingBufferSize=function(x){return x.set(Xe*J,j*J).floor()},this.setDrawingBufferSize=function(x,N,q){Xe=x,j=N,J=q,t.width=Math.floor(x*q),t.height=Math.floor(N*q),this.setViewport(0,0,x,N)},this.setEffects=function(x){if(v===rn){qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let N=0;N<x.length;N++)if(x[N].isOutputPass===!0){Ge("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(ee)},this.getViewport=function(x){return x.copy(ie)},this.setViewport=function(x,N,q,z){x.isVector4?ie.set(x.x,x.y,x.z,x.w):ie.set(x,N,q,z),y.viewport(ee.copy(ie).multiplyScalar(J).round())},this.getScissor=function(x){return x.copy(ve)},this.setScissor=function(x,N,q,z){x.isVector4?ve.set(x.x,x.y,x.z,x.w):ve.set(x,N,q,z),y.scissor(we.copy(ve).multiplyScalar(J).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(x){y.setScissorTest(et=x)},this.setOpaqueSort=function(x){ye=x},this.setTransparentSort=function(x){Ne=x},this.getClearColor=function(x){return x.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(x=!0,N=!0,q=!0){let z=0;if(x){let k=!1;if(ne!==null){let fe=ne.texture.format;k=m.has(fe)}if(k){let fe=ne.texture.type,Ae=p.has(fe),ge=Ze.getClearColor(),Le=Ze.getClearAlpha(),Re=ge.r,ze=ge.g,$e=ge.b;Ae?(M[0]=Re,M[1]=ze,M[2]=$e,M[3]=Le,L.clearBufferuiv(L.COLOR,0,M)):(R[0]=Re,R[1]=ze,R[2]=$e,R[3]=Le,L.clearBufferiv(L.COLOR,0,R))}else z|=L.COLOR_BUFFER_BIT}N&&(z|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(z|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&L.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),U=x},this.dispose=function(){t.removeEventListener("webglcontextlost",ut,!1),t.removeEventListener("webglcontextrestored",nt,!1),t.removeEventListener("webglcontextcreationerror",wt,!1),Ze.dispose(),pe.dispose(),be.dispose(),G.dispose(),ce.dispose(),te.dispose(),Me.dispose(),se.dispose(),de.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",Sn),Ee.removeEventListener("sessionend",ln),Rt.stop()};function ut(x){x.preventDefault(),rc("WebGLRenderer: Context Lost."),I=!0}function nt(){rc("WebGLRenderer: Context Restored."),I=!1;let x=B.autoReset,N=De.enabled,q=De.autoUpdate,z=De.needsUpdate,k=De.type;Pe(),B.autoReset=x,De.enabled=N,De.autoUpdate=q,De.needsUpdate=z,De.type=k}function wt(x){qe("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function St(x){let N=x.target;N.removeEventListener("dispose",St),qr(N)}function qr(x){Nn(x),G.remove(x)}function Nn(x){let N=G.get(x).programs;N!==void 0&&(N.forEach(function(q){de.releaseProgram(q)}),x.isShaderMaterial&&de.releaseShaderCache(x))}this.renderBufferDirect=function(x,N,q,z,k,fe){N===null&&(N=ke);let Ae=k.isMesh&&k.matrixWorld.determinantAffine()<0,ge=nn(x,N,q,z,k);y.setMaterial(z,Ae);let Le=q.index,Re=1;if(z.wireframe===!0){if(Le=$.getWireframeAttribute(q),Le===void 0)return;Re=2}let ze=q.drawRange,$e=q.attributes.position,Te=ze.start*Re,ct=(ze.start+ze.count)*Re;fe!==null&&(Te=Math.max(Te,fe.start*Re),ct=Math.min(ct,(fe.start+fe.count)*Re)),Le!==null?(Te=Math.max(Te,0),ct=Math.min(ct,Le.count)):$e!=null&&(Te=Math.max(Te,0),ct=Math.min(ct,$e.count));let At=ct-Te;if(At<0||At===1/0)return;Me.setup(k,z,ge,q,Le);let bt,mt=xe;if(Le!==null&&(bt=he.get(Le),mt=Q,mt.setIndex(bt)),k.isMesh)z.wireframe===!0?(y.setLineWidth(z.wireframeLinewidth*Be()),mt.setMode(L.LINES)):mt.setMode(L.TRIANGLES);else if(k.isLine){let Vt=z.linewidth;Vt===void 0&&(Vt=1),y.setLineWidth(Vt*Be()),k.isLineSegments?mt.setMode(L.LINES):k.isLineLoop?mt.setMode(L.LINE_LOOP):mt.setMode(L.LINE_STRIP)}else k.isPoints?mt.setMode(L.POINTS):k.isSprite&&mt.setMode(L.TRIANGLES);if(k.isBatchedMesh)if(Ye.get("WEBGL_multi_draw"))mt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Vt=k._multiDrawStarts,Ie=k._multiDrawCounts,Kt=k._multiDrawCount,ot=Le?he.get(Le).bytesPerElement:1,gn=G.get(z).currentProgram.getUniforms();for(let Fn=0;Fn<Kt;Fn++)gn.setValue(L,"_gl_DrawID",Fn),mt.render(Vt[Fn]/ot,Ie[Fn])}else if(k.isInstancedMesh)mt.renderInstances(Te,At,k.count);else if(q.isInstancedBufferGeometry){let Vt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ie=Math.min(q.instanceCount,Vt);mt.renderInstances(Te,At,Ie)}else mt.render(Te,At)};function on(x,N,q,z){U!==null&&x.isNodeMaterial&&U.setObject(z,x),ae===!0&&Ce.setState(x,q,!1),x.transparent===!0&&x.side===yn&&x.forceSinglePass===!1?(x.side=Ht,x.needsUpdate=!0,Ei(x,N,z),x.side=Vn,x.needsUpdate=!0,Ei(x,N,z),x.side=yn):Ei(x,N,z)}this.compile=function(x,N,q=null){q===null&&(q=x),U!==null&&U.renderStart(x,N,q),S=be.get(q),S.init(N),_.push(S),q.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(S.pushLight(k),k.castShadow&&S.pushShadow(k))}),x!==q&&x.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(S.pushLight(k),k.castShadow&&S.pushShadow(k))}),S.setupLights(),U!==null&&U.updateLights(S.state.lightsArray),re=this.localClippingEnabled,ae=Ce.init(this.clippingPlanes,re),ae===!0&&Ce.setGlobalState(this.clippingPlanes,N),U!==null&&De.render(S.state.shadowsArray,q,N);let z=new Set;return x.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let fe=k.material;if(fe)if(Array.isArray(fe))for(let Ae=0;Ae<fe.length;Ae++){let ge=fe[Ae];on(ge,q,N,k),z.add(ge)}else on(fe,q,N,k),z.add(fe)}),S=_.pop(),U!==null&&U.renderEnd(),z},this.compileAsync=function(x,N,q=null){let z=this.compile(x,N,q);return new Promise(k=>{function fe(){if(z.forEach(function(Ae){let Le=G.get(Ae).currentProgram;(Le===void 0||Le.isReady())&&z.delete(Ae)}),z.size===0){k(x);return}setTimeout(fe,10)}Ye.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Gt=null;function jr(x){Gt&&Gt(x)}function Sn(){Rt.stop()}function ln(){Rt.start()}let Rt=new Cd;Rt.setAnimationLoop(jr),typeof self<"u"&&Rt.setContext(self),this.setAnimationLoop=function(x){Gt=x,Ee.setAnimationLoop(x),x===null?Rt.stop():Rt.start()},Ee.addEventListener("sessionstart",Sn),Ee.addEventListener("sessionend",ln),this.render=function(x,N){if(N!==void 0&&N.isCamera!==!0){qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;U!==null&&U.renderStart(x,N);let q=Ee.enabled===!0&&Ee.isPresenting===!0,z=T!==null&&(ne===null||q)&&T.begin(C,ne);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(N),N=Ee.getCamera()),x.isScene===!0&&x.onBeforeRender(C,x,N,ne),S=be.get(x,_.length),S.init(N),S.state.textureUnits=Y.getTextureUnits(),_.push(S),oe.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),K.setFromProjectionMatrix(oe,An,N.reversedDepth),re=this.localClippingEnabled,ae=Ce.init(this.clippingPlanes,re),w=pe.get(x,A.length),w.init(),A.push(w),Ee.enabled===!0&&Ee.isPresenting===!0){let Ae=C.xr.getDepthSensingMesh();Ae!==null&&Xi(Ae,N,-1/0,C.sortObjects)}Xi(x,N,0,C.sortObjects),w.finish(),U!==null&&U.updateLights(S.state.lightsArray),C.sortObjects===!0&&w.sort(ye,Ne),Oe=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,Oe&&Ze.addToRenderList(w,x),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ae===!0&&Ce.beginShadows();let k=S.state.shadowsArray;if(De.render(k,x,N),ae===!0&&Ce.endShadows(),(z&&T.hasRenderPass())===!1){let Ae=w.opaque,ge=w.transmissive;if(S.setupLights(),N.isArrayCamera){let Le=N.cameras;if(ge.length>0)for(let Re=0,ze=Le.length;Re<ze;Re++){let $e=Le[Re];tl(Ae,ge,x,$e)}Oe&&Ze.render(x);for(let Re=0,ze=Le.length;Re<ze;Re++){let $e=Le[Re];Mn(w,x,$e,$e.viewport)}}else ge.length>0&&tl(Ae,ge,x,N),Oe&&Ze.render(x),Mn(w,x,N)}ne!==null&&X===0&&(Y.updateMultisampleRenderTarget(ne),Y.updateRenderTargetMipmap(ne)),z&&T.end(C),x.isScene===!0&&x.onAfterRender(C,x,N),Me.resetDefaultState(),W=-1,Z=null,_.pop(),_.length>0?(S=_[_.length-1],Y.setTextureUnits(S.state.textureUnits),ae===!0&&Ce.setGlobalState(C.clippingPlanes,S.state.camera)):S=null,A.pop(),A.length>0?w=A[A.length-1]:w=null,U!==null&&U.renderEnd()};function Xi(x,N,q,z){if(x.visible===!1)return;if(x.layers.test(N.layers)){if(x.isGroup)q=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(N);else if(x.isLightProbeGrid)S.pushLightProbeGrid(x);else if(x.isLight)S.pushLight(x),x.castShadow&&S.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||x.intersectsFrustum(K)){z&&Ue.setFromMatrixPosition(x.matrixWorld).applyMatrix4(oe);let Ae=te.update(x),ge=x.material;ge.visible&&w.push(x,Ae,ge,q,Ue.z,null,N)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||x.intersectsFrustum(K))){let Ae=te.update(x),ge=x.material;if(z&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Ue.copy(x.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Ue.copy(Ae.boundingSphere.center)),Ue.applyMatrix4(x.matrixWorld).applyMatrix4(oe)),Array.isArray(ge)){let Le=Ae.groups;for(let Re=0,ze=Le.length;Re<ze;Re++){let $e=Le[Re],Te=ge[$e.materialIndex];Te&&Te.visible&&w.push(x,Ae,Te,q,Ue.z,$e,N)}}else ge.visible&&w.push(x,Ae,ge,q,Ue.z,null,N)}}let fe=x.children;for(let Ae=0,ge=fe.length;Ae<ge;Ae++)Xi(fe[Ae],N,q,z)}function Mn(x,N,q,z){let{opaque:k,transmissive:fe,transparent:Ae}=x;S.setupLightsView(q),ae===!0&&Ce.setGlobalState(C.clippingPlanes,q),z&&y.viewport(ee.copy(z)),k.length>0&&Zt(k,N,q),fe.length>0&&Zt(fe,N,q),Ae.length>0&&Zt(Ae,N,q),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function tl(x,N,q,z){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[z.id]===void 0){let Te=Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[z.id]=new sn(1,1,{generateMipmaps:!0,type:Te?Ln:rn,minFilter:vi,samples:Math.max(4,E.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:st.workingColorSpace})}let fe=S.state.transmissionRenderTarget[z.id],Ae=z.viewport||ee;fe.setSize(Ae.z*C.transmissionResolutionScale,Ae.w*C.transmissionResolutionScale);let ge=C.getRenderTarget(),Le=C.getActiveCubeFace(),Re=C.getActiveMipmapLevel();C.setRenderTarget(fe),C.getClearColor(He),je=C.getClearAlpha(),je<1&&C.setClearColor(16777215,.5),C.clear(),Oe&&Ze.render(q);let ze=C.toneMapping;C.toneMapping=In;let $e=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),S.setupLightsView(z),ae===!0&&Ce.setGlobalState(C.clippingPlanes,z),Zt(x,q,z),Y.updateMultisampleRenderTarget(fe),Y.updateRenderTargetMipmap(fe),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let ct=0,At=N.length;ct<At;ct++){let bt=N[ct],{object:mt,geometry:Vt,material:Ie,group:Kt}=bt;if(Ie.side===yn&&mt.layers.test(z.layers)){let ot=Ie.side;Ie.side=Ht,Ie.needsUpdate=!0,Jt(mt,q,z,Vt,Ie,Kt),Ie.side=ot,Ie.needsUpdate=!0,Te=!0}}Te===!0&&(Y.updateMultisampleRenderTarget(fe),Y.updateRenderTargetMipmap(fe))}C.setRenderTarget(ge,Le,Re),C.setClearColor(He,je),$e!==void 0&&(z.viewport=$e),C.toneMapping=ze}function Zt(x,N,q){let z=N.isScene===!0?N.overrideMaterial:null;for(let k=0,fe=x.length;k<fe;k++){let Ae=x[k],{object:ge,geometry:Le,group:Re}=Ae,ze=Ae.material;ze.allowOverride===!0&&z!==null&&(ze=z),ge.layers.test(q.layers)&&Jt(ge,N,q,Le,ze,Re)}}function Jt(x,N,q,z,k,fe){U!==null&&k.isNodeMaterial&&U.setObject(x,k),x.onBeforeRender(C,N,q,z,k,fe),x.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),k.onBeforeRender(C,N,q,z,x,fe),k.transparent===!0&&k.side===yn&&k.forceSinglePass===!1?(k.side=Ht,k.needsUpdate=!0,C.renderBufferDirect(q,N,z,k,x,fe),k.side=Vn,k.needsUpdate=!0,C.renderBufferDirect(q,N,z,k,x,fe),k.side=yn):C.renderBufferDirect(q,N,z,k,x,fe),x.onAfterRender(C,N,q,z,k,fe)}function Ei(x,N,q){N.isScene!==!0&&(N=ke);let z=G.get(x),k=S.state.lights,fe=S.state.shadowsArray,Ae=k.state.version,ge=de.getParameters(x,k.state,fe,N,q,S.state.lightProbeGridArray),Le=de.getProgramCacheKey(ge),Re=z.programs;z.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?N.environment:null,z.fog=N.fog;let ze=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;z.envMap=ce.get(x.envMap||z.environment,ze),z.envMapRotation=z.environment!==null&&x.envMap===null?N.environmentRotation:x.envMapRotation,Re===void 0&&(x.addEventListener("dispose",St),Re=new Map,z.programs=Re);let $e=Re.get(Le);if($e!==void 0){if(z.currentProgram===$e&&z.lightsStateVersion===Ae)return nl(x,ge),$e}else ge.uniforms=de.getUniforms(x),U!==null&&x.isNodeMaterial&&U.build(x,q,ge),x.onBeforeCompile(ge,C),$e=de.acquireProgram(ge,Le),Re.set(Le,$e),z.uniforms=ge.uniforms;let Te=z.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Te.clippingPlanes=Ce.uniform),nl(x,ge),z.needsLights=Un(x),z.lightsStateVersion=Ae,z.needsLights&&(Te.ambientLightColor.value=k.state.ambient,Te.lightProbe.value=k.state.probe,Te.sunLights.value=k.state.sun,Te.sunLightShadows.value=k.state.sunShadow,Te.directionalLights.value=k.state.directional,Te.directionalLightShadows.value=k.state.directionalShadow,Te.spotLights.value=k.state.spot,Te.spotLightShadows.value=k.state.spotShadow,Te.rectAreaLights.value=k.state.rectArea,Te.ltc_1.value=k.state.rectAreaLTC1,Te.ltc_2.value=k.state.rectAreaLTC2,Te.pointLights.value=k.state.point,Te.pointLightShadows.value=k.state.pointShadow,Te.hemisphereLights.value=k.state.hemi,Te.sunShadowMatrix.value=k.state.sunShadowMatrix,Te.sunShadowCascade.value=k.state.sunShadowCascade,Te.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Te.spotLightMatrix.value=k.state.spotLightMatrix,Te.spotLightMap.value=k.state.spotLightMap,Te.pointShadowMatrix.value=k.state.pointShadowMatrix),z.lightProbeGrid=S.state.lightProbeGridArray.length>0,z.currentProgram=$e,z.uniformsList=null,$e}function wn(x){if(x.uniformsList===null){let N=x.currentProgram.getUniforms();x.uniformsList=Us.seqWithValue(N.seq,x.uniforms)}return x.uniformsList}function nl(x,N){let q=G.get(x);q.outputColorSpace=N.outputColorSpace,q.batching=N.batching,q.batchingColor=N.batchingColor,q.instancing=N.instancing,q.instancingColor=N.instancingColor,q.instancingMorph=N.instancingMorph,q.skinning=N.skinning,q.morphTargets=N.morphTargets,q.morphNormals=N.morphNormals,q.morphColors=N.morphColors,q.morphTargetsCount=N.morphTargetsCount,q.numClippingPlanes=N.numClippingPlanes,q.numIntersection=N.numClipIntersection,q.vertexAlphas=N.vertexAlphas,q.vertexTangents=N.vertexTangents,q.toneMapping=N.toneMapping}function mn(x,N){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;b.setFromMatrixPosition(N.matrixWorld);for(let q=0,z=x.length;q<z;q++){let k=x[q];if(k.texture!==null&&k.boundingBox.containsPoint(b))return k}return null}function nn(x,N,q,z,k){N.isScene!==!0&&(N=ke),Y.resetTextureUnits();let fe=N.fog,Ae=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?N.environment:null,ge=ne===null?C.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:st.workingColorSpace,Le=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Re=ce.get(z.envMap||Ae,Le),ze=z.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,$e=!!q.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Te=!!q.morphAttributes.position,ct=!!q.morphAttributes.normal,At=!!q.morphAttributes.color,bt=In;z.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(bt=C.toneMapping);let mt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Vt=mt!==void 0?mt.length:0,Ie=G.get(z),Kt=S.state.lights;if(ae===!0&&(re===!0||x!==Z)){let _t=x===Z&&z.id===W;Ce.setState(z,x,_t)}let ot=!1;z.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==Kt.state.version||Ie.outputColorSpace!==ge||k.isBatchedMesh&&Ie.batching===!1||!k.isBatchedMesh&&Ie.batching===!0||k.isBatchedMesh&&Ie.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&Ie.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&Ie.instancing===!1||!k.isInstancedMesh&&Ie.instancing===!0||k.isSkinnedMesh&&Ie.skinning===!1||!k.isSkinnedMesh&&Ie.skinning===!0||k.isInstancedMesh&&Ie.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ie.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ie.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ie.instancingMorph===!1&&k.morphTexture!==null||Ie.envMap!==Re||z.fog===!0&&Ie.fog!==fe||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==Ce.numPlanes||Ie.numIntersection!==Ce.numIntersection)||Ie.vertexAlphas!==ze||Ie.vertexTangents!==$e||Ie.morphTargets!==Te||Ie.morphNormals!==ct||Ie.morphColors!==At||Ie.toneMapping!==bt||Ie.morphTargetsCount!==Vt||!!Ie.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(ot=!0):(ot=!0,Ie.__version=z.version);let gn=Ie.currentProgram;ot===!0&&(gn=Ei(z,N,k),U&&z.isNodeMaterial&&U.onUpdateProgram(z,gn,Ie));let Fn=!1,ii=!1,qi=!1,pt=gn.getUniforms(),Et=Ie.uniforms;if(y.useProgram(gn.program)&&(Fn=!0,ii=!0,qi=!0),z.id!==W&&(W=z.id,ii=!0),Ie.needsLights){let _t=mn(S.state.lightProbeGridArray,k);Ie.lightProbeGrid!==_t&&(Ie.lightProbeGrid=_t,ii=!0)}if(Fn||Z!==x){y.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),pt.setValue(L,"projectionMatrix",x.projectionMatrix),pt.setValue(L,"viewMatrix",x.matrixWorldInverse);let ri=pt.map.cameraPosition;ri!==void 0&&ri.setValue(L,me.setFromMatrixPosition(x.matrixWorld)),E.logarithmicDepthBuffer&&pt.setValue(L,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&pt.setValue(L,"isOrthographic",x.isOrthographicCamera===!0),Z!==x&&(Z=x,ii=!0,qi=!0)}if(Ie.needsLights&&(Kt.state.sunShadowMap.length>0&&pt.setValue(L,"sunShadowMap",Kt.state.sunShadowMap,Y),Kt.state.directionalShadowMap.length>0&&pt.setValue(L,"directionalShadowMap",Kt.state.directionalShadowMap,Y),Kt.state.spotShadowMap.length>0&&pt.setValue(L,"spotShadowMap",Kt.state.spotShadowMap,Y),Kt.state.pointShadowMap.length>0&&pt.setValue(L,"pointShadowMap",Kt.state.pointShadowMap,Y)),k.isSkinnedMesh){pt.setOptional(L,k,"bindMatrix"),pt.setOptional(L,k,"bindMatrixInverse");let _t=k.skeleton;_t&&(_t.boneTexture===null&&_t.computeBoneTexture(),pt.setValue(L,"boneTexture",_t.boneTexture,Y))}k.isBatchedMesh&&(pt.setOptional(L,k,"batchingTexture"),pt.setValue(L,"batchingTexture",k._matricesTexture,Y),pt.setOptional(L,k,"batchingIdTexture"),pt.setValue(L,"batchingIdTexture",k._indirectTexture,Y),pt.setOptional(L,k,"batchingColorTexture"),k._colorsTexture!==null&&pt.setValue(L,"batchingColorTexture",k._colorsTexture,Y));let si=q.morphAttributes;if((si.position!==void 0||si.normal!==void 0||si.color!==void 0)&&F.update(k,q,gn),(ii||Ie.receiveShadow!==k.receiveShadow)&&(Ie.receiveShadow=k.receiveShadow,pt.setValue(L,"receiveShadow",k.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&N.environment!==null&&(Et.envMapIntensity.value=N.environmentIntensity),Et.dfgLUT!==void 0&&(Et.dfgLUT.value=f_()),ii){if(pt.setValue(L,"toneMappingExposure",C.toneMappingExposure),Ie.needsLights&&Yr(Et,qi),fe&&z.fog===!0&&Fe.refreshFogUniforms(Et,fe),Fe.refreshMaterialUniforms(Et,z,J,j,S.state.transmissionRenderTarget[x.id]),Ie.needsLights&&Ie.lightProbeGrid){let _t=Ie.lightProbeGrid;Et.probesSH.value=_t.texture,Et.probesMin.value.copy(_t.boundingBox.min),Et.probesMax.value.copy(_t.boundingBox.max),Et.probesResolution.value.copy(_t.resolution)}Us.upload(L,wn(Ie),Et,Y)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Us.upload(L,wn(Ie),Et,Y),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&pt.setValue(L,"center",k.center),pt.setValue(L,"modelViewMatrix",k.modelViewMatrix),pt.setValue(L,"normalMatrix",k.normalMatrix),pt.setValue(L,"modelMatrix",k.matrixWorld),z.uniformsGroups!==void 0){let _t=z.uniformsGroups;for(let ri=0,ji=_t.length;ri<ji;ri++){let Bc=_t[ri];se.update(Bc,gn),se.bind(Bc,gn)}}return gn}function Yr(x,N){x.ambientLightColor.needsUpdate=N,x.lightProbe.needsUpdate=N,x.sunLights.needsUpdate=N,x.sunLightShadows.needsUpdate=N,x.directionalLights.needsUpdate=N,x.directionalLightShadows.needsUpdate=N,x.pointLights.needsUpdate=N,x.pointLightShadows.needsUpdate=N,x.spotLights.needsUpdate=N,x.spotLightShadows.needsUpdate=N,x.rectAreaLights.needsUpdate=N,x.hemisphereLights.needsUpdate=N}function Un(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(x,N,q){let z=G.get(x);z.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),G.get(x.texture).__webglTexture=N,G.get(x.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:q,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,N){let q=G.get(x);q.__webglFramebuffer=N,q.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(x,N=0,q=0){ne=x,H=N,X=q;let z=null,k=!1,fe=!1;if(x){let ge=G.get(x);if(ge.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(L.FRAMEBUFFER,ge.__webglFramebuffer),ee.copy(x.viewport),we.copy(x.scissor),_e=x.scissorTest,y.viewport(ee),y.scissor(we),y.setScissorTest(_e),W=-1;return}else if(ge.__webglFramebuffer===void 0)Y.setupRenderTarget(x);else if(ge.__hasExternalTextures)Y.rebindTextures(x,G.get(x.texture).__webglTexture,G.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let ze=x.depthTexture;if(ge.__boundDepthTexture!==ze){if(ze!==null&&G.has(ze)&&(x.width!==ze.image.width||x.height!==ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(x)}}let Le=x.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(fe=!0);let Re=G.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Re[N])?z=Re[N][q]:z=Re[N],k=!0):x.samples>0&&Y.useMultisampledRTT(x)===!1?z=G.get(x).__webglMultisampledFramebuffer:Array.isArray(Re)?z=Re[q]:z=Re,ee.copy(x.viewport),we.copy(x.scissor),_e=x.scissorTest}else ee.copy(ie).multiplyScalar(J).floor(),we.copy(ve).multiplyScalar(J).floor(),_e=et;if(q!==0&&(z=V),y.bindFramebuffer(L.FRAMEBUFFER,z)&&y.drawBuffers(x,z),y.viewport(ee),y.scissor(we),y.setScissorTest(_e),k){let ge=G.get(x.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,ge.__webglTexture,q)}else if(fe){let ge=N;for(let Le=0;Le<x.textures.length;Le++){let Re=G.get(x.textures[Le]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Le,Re.__webglTexture,q,ge)}}else if(x!==null&&q!==0){let ge=G.get(x.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ge.__webglTexture,q)}W=-1};function il(x){let N=G.get(x);return(N.__readFormat!==x.format||N.__readType!==x.type)&&(N.__readFormat=x.format,N.__readType=x.type,N.__formatReadable=E.textureFormatReadable(x.format),N.__typeReadable=E.textureTypeReadable(x.type)),N}this.readRenderTargetPixels=function(x,N,q,z,k,fe,Ae,ge=0){if(!(x&&x.isWebGLRenderTarget)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=G.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Ae!==void 0&&(Le=Le[Ae]),Le){y.bindFramebuffer(L.FRAMEBUFFER,Le);try{let Re=x.textures[ge],ze=Re.format,$e=Re.type;x.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ge);let Te=il(Re);if(Te.__formatReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Te.__typeReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=x.width-z&&q>=0&&q<=x.height-k&&L.readPixels(N,q,z,k,ue.convert(ze),ue.convert($e),fe)}finally{let Re=ne!==null?G.get(ne).__webglFramebuffer:null;y.bindFramebuffer(L.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(x,N,q,z,k,fe,Ae,ge=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=G.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Ae!==void 0&&(Le=Le[Ae]),Le)if(N>=0&&N<=x.width-z&&q>=0&&q<=x.height-k){y.bindFramebuffer(L.FRAMEBUFFER,Le);let Re=x.textures[ge],ze=Re.format,$e=Re.type;x.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ge);let Te=il(Re);if(Te.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Te.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ct=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ct),L.bufferData(L.PIXEL_PACK_BUFFER,fe.byteLength,L.STREAM_READ),L.readPixels(N,q,z,k,ue.convert(ze),ue.convert($e),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let At=ne!==null?G.get(ne).__webglFramebuffer:null;y.bindFramebuffer(L.FRAMEBUFFER,At);let bt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await $h(L,bt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,ct),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,fe),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(ct),L.deleteSync(bt),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,N=null,q=0){let z=Math.pow(2,-q),k=Math.floor(x.image.width*z),fe=Math.floor(x.image.height*z),Ae=N!==null?N.x:0,ge=N!==null?N.y:0;Y.setTexture2D(x,0),L.copyTexSubImage2D(L.TEXTURE_2D,q,0,0,Ae,ge,k,fe),y.unbindTexture()},this.copyTextureToTexture=function(x,N,q=null,z=null,k=0,fe=0){let Ae,ge,Le,Re,ze,$e,Te,ct,At,bt=x.isCompressedTexture?x.mipmaps[fe]:x.image;if(q!==null)Ae=q.max.x-q.min.x,ge=q.max.y-q.min.y,Le=q.isBox3?q.max.z-q.min.z:1,Re=q.min.x,ze=q.min.y,$e=q.isBox3?q.min.z:0;else{let Et=Math.pow(2,-k);Ae=Math.floor(bt.width*Et),ge=Math.floor(bt.height*Et),x.isDataArrayTexture?Le=bt.depth:x.isData3DTexture?Le=Math.floor(bt.depth*Et):Le=1,Re=0,ze=0,$e=0}z!==null?(Te=z.x,ct=z.y,At=z.z):(Te=0,ct=0,At=0);let mt=ue.convert(N.format),Vt=ue.convert(N.type),Ie;N.isData3DTexture?(Y.setTexture3D(N,0),Ie=L.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Y.setTexture2DArray(N,0),Ie=L.TEXTURE_2D_ARRAY):(Y.setTexture2D(N,0),Ie=L.TEXTURE_2D),y.activeTexture(L.TEXTURE0),y.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),y.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),y.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);let Kt=y.getParameter(L.UNPACK_ROW_LENGTH),ot=y.getParameter(L.UNPACK_IMAGE_HEIGHT),gn=y.getParameter(L.UNPACK_SKIP_PIXELS),Fn=y.getParameter(L.UNPACK_SKIP_ROWS),ii=y.getParameter(L.UNPACK_SKIP_IMAGES);y.pixelStorei(L.UNPACK_ROW_LENGTH,bt.width),y.pixelStorei(L.UNPACK_IMAGE_HEIGHT,bt.height),y.pixelStorei(L.UNPACK_SKIP_PIXELS,Re),y.pixelStorei(L.UNPACK_SKIP_ROWS,ze),y.pixelStorei(L.UNPACK_SKIP_IMAGES,$e);let qi=x.isDataArrayTexture||x.isData3DTexture,pt=N.isDataArrayTexture||N.isData3DTexture;if(x.isDepthTexture){let Et=G.get(x),si=G.get(N),_t=G.get(Et.__renderTarget),ri=G.get(si.__renderTarget);y.bindFramebuffer(L.READ_FRAMEBUFFER,_t.__webglFramebuffer),y.bindFramebuffer(L.DRAW_FRAMEBUFFER,ri.__webglFramebuffer);for(let ji=0;ji<Le;ji++)qi&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,G.get(x).__webglTexture,k,$e+ji),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,G.get(N).__webglTexture,fe,At+ji)),L.blitFramebuffer(Re,ze,Ae,ge,Te,ct,Ae,ge,L.DEPTH_BUFFER_BIT,L.NEAREST);y.bindFramebuffer(L.READ_FRAMEBUFFER,null),y.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(k!==0||x.isRenderTargetTexture||G.has(x)){let Et=G.get(x),si=G.get(N);y.bindFramebuffer(L.READ_FRAMEBUFFER,D),y.bindFramebuffer(L.DRAW_FRAMEBUFFER,O);for(let _t=0;_t<Le;_t++)qi?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Et.__webglTexture,k,$e+_t):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Et.__webglTexture,k),pt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,si.__webglTexture,fe,At+_t):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,si.__webglTexture,fe),k!==0?L.blitFramebuffer(Re,ze,Ae,ge,Te,ct,Ae,ge,L.COLOR_BUFFER_BIT,L.NEAREST):pt?L.copyTexSubImage3D(Ie,fe,Te,ct,At+_t,Re,ze,Ae,ge):L.copyTexSubImage2D(Ie,fe,Te,ct,Re,ze,Ae,ge);y.bindFramebuffer(L.READ_FRAMEBUFFER,null),y.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else pt?x.isDataTexture||x.isData3DTexture?L.texSubImage3D(Ie,fe,Te,ct,At,Ae,ge,Le,mt,Vt,bt.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(Ie,fe,Te,ct,At,Ae,ge,Le,mt,bt.data):L.texSubImage3D(Ie,fe,Te,ct,At,Ae,ge,Le,mt,Vt,bt):x.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,fe,Te,ct,Ae,ge,mt,Vt,bt.data):x.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,fe,Te,ct,bt.width,bt.height,mt,bt.data):L.texSubImage2D(L.TEXTURE_2D,fe,Te,ct,Ae,ge,mt,Vt,bt);y.pixelStorei(L.UNPACK_ROW_LENGTH,Kt),y.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ot),y.pixelStorei(L.UNPACK_SKIP_PIXELS,gn),y.pixelStorei(L.UNPACK_SKIP_ROWS,Fn),y.pixelStorei(L.UNPACK_SKIP_IMAGES,ii),fe===0&&N.generateMipmaps&&L.generateMipmap(Ie),y.unbindTexture()},this.initRenderTarget=function(x){G.get(x).__webglFramebuffer===void 0&&Y.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Y.setTextureCube(x,0):x.isData3DTexture?Y.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Y.setTexture2DArray(x,0):Y.setTexture2D(x,0),y.unbindTexture()},this.resetState=function(){H=0,X=0,ne=null,y.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}};var Fd={type:"change"},Nc={type:"start"},Bd={type:"end"},Jo=new ys,Od=new dn,p_=Math.cos(70*tn.DEG2RAD),Lt=new P,an=2*Math.PI,ft={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Lc=1e-6,Ko=class extends Er{constructor(e,t=null){super(e,t),this.state=ft.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:yi.ROTATE,MIDDLE:yi.DOLLY,RIGHT:yi.PAN},this.touches={ONE:bi.ROTATE,TWO:bi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new en,this._lastTargetPosition=new P,this._quat=new en().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ni,this._sphericalDelta=new ni,this._scale=1,this._panOffset=new P,this._rotateStart=new le,this._rotateEnd=new le,this._rotateDelta=new le,this._panStart=new le,this._panEnd=new le,this._panDelta=new le,this._dollyStart=new le,this._dollyEnd=new le,this._dollyDelta=new le,this._dollyDirection=new P,this._mouse=new le,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=g_.bind(this),this._onPointerDown=m_.bind(this),this._onPointerUp=__.bind(this),this._onContextMenu=w_.bind(this),this._onMouseWheel=x_.bind(this),this._onKeyDown=v_.bind(this),this._onTouchStart=S_.bind(this),this._onTouchMove=M_.bind(this),this._onMouseDown=y_.bind(this),this._onMouseMove=b_.bind(this),this._interceptControlDown=E_.bind(this),this._interceptControlUp=T_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ft.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Fd),this.update(),this.state=ft.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Lt.copy(t).sub(this.target),Lt.applyQuaternion(this._quat),this._spherical.setFromVector3(Lt),this.autoRotate&&this.state===ft.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=an:n>Math.PI&&(n-=an),s<-Math.PI?s+=an:s>Math.PI&&(s-=an),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Lt.setFromSpherical(this._spherical),Lt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Lt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Lt.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new P(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Lt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Jo.origin.copy(this.object.position),Jo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Jo.direction))<p_?this.object.lookAt(this.target):(Od.setFromNormalAndCoplanarPoint(this.object.up,this.target),Jo.intersectPlane(Od,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Lc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Lc||this._lastTargetPosition.distanceToSquared(this.target)>Lc?(this.dispatchEvent(Fd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?an/60*this.autoRotateSpeed*e:an/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Lt.setFromMatrixColumn(t,0),Lt.multiplyScalar(-e),this._panOffset.add(Lt)}_panUp(e,t){this.screenSpacePanning===!0?Lt.setFromMatrixColumn(t,1):(Lt.setFromMatrixColumn(t,0),Lt.crossVectors(this.object.up,Lt)),Lt.multiplyScalar(e),this._panOffset.add(Lt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Lt.copy(s).sub(this.target);let r=Lt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(an*this._rotateDelta.x/t.clientHeight),this._rotateUp(an*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(an*this._rotateDelta.x/t.clientHeight),this._rotateUp(an*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new le,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function m_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function g_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function __(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Bd),this.state=ft.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function y_(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case yi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ft.DOLLY;break;case yi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ft.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ft.ROTATE}break;case yi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ft.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ft.PAN}break;default:this.state=ft.NONE}this.state!==ft.NONE&&this.dispatchEvent(Nc)}function b_(i){switch(this.state){case ft.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ft.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ft.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function x_(i){this.enabled===!1||this.enableZoom===!1||this.state!==ft.NONE||(i.preventDefault(),this.dispatchEvent(Nc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Bd))}function v_(i){this.enabled!==!1&&this._handleKeyDown(i)}function S_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case bi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ft.TOUCH_ROTATE;break;case bi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ft.TOUCH_PAN;break;default:this.state=ft.NONE}break;case 2:switch(this.touches.TWO){case bi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ft.TOUCH_DOLLY_PAN;break;case bi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ft.TOUCH_DOLLY_ROTATE;break;default:this.state=ft.NONE}break;default:this.state=ft.NONE}this.state!==ft.NONE&&this.dispatchEvent(Nc)}function M_(i){switch(this._trackPointer(i),this.state){case ft.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ft.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ft.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ft.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ft.NONE}}function w_(i){this.enabled!==!1&&i.preventDefault()}function E_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function T_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var $o=class extends Di{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new jt;e.deleteAttribute("uv");let t=new at({side:Ht}),n=new at,s=new wr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Ve(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new sr(e,n,6),o=new Ft;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Ve(e,Os(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Ve(e,Os(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Ve(e,Os(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new Ve(e,Os(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new Ve(e,Os(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new Ve(e,Os(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Os(i){return new br({color:0,emissive:16777215,emissiveIntensity:i})}function wi(i){let e=i.points.map(([t,n])=>new le(Math.max(1e-4,t),n));return new Ui(e,i.segments??24)}function Wi(i){let e=i.points.map(([s,r,a])=>new P(s,r,a)),t=new Hn(e,i.closed??!1),n=Math.max(8,i.points.length*6);return new ti(t,n,i.radius??.05,i.radialSegments??8,i.closed??!1)}function R_(i){let e=2166136261;for(let t=0;t<i.length;t+=1)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function lt(i,e,t){if(typeof i=="number")return i;if(i&&typeof i=="object"){let n=i;for(let s of e)if(typeof n[s]=="number")return n[s]}return t}function A_(i){let e=/^#[0-9a-f]{3}$/i.test(i)?"#"+i.slice(1).split("").map(n=>n+n).join(""):i,t=/^#[0-9a-f]{6}$/i.test(e)?Number.parseInt(e.slice(1),16):9075295;return[Bs(t>>16&255),Bs(t>>8&255),Bs(t&255)]}function C_(i){let e=i.colorVariation?.palette;if(Array.isArray(e)&&e.length>0)return e.filter(s=>typeof s=="string");let t=i.albedo?.secondary;return[i.baseColor??i.color??i.albedo?.dominant,...Array.isArray(t)?t:[]].filter(s=>typeof s=="string"&&s.startsWith("#"))}function Tt(i){return Math.max(0,Math.min(1,i))}function Bs(i){return Math.max(30,Math.min(240,Math.round(i)))}function P_(i){return Math.max(.02,Math.min(1,i))}function kd(i){return Math.max(1,Math.min(2.5,i))}function I_(i){return i>=.5?1:0}function D_(i){let e=typeof i.baseColor=="string"?i.baseColor:"#8A7A5F";return new We().setStyle(e,Pt)}function zd(i){return i*i*(3-2*i)}function Qo(i,e,t,n,s){let r=(i%n+n)%n,a=(e%s+s)%s,o=Math.imul(r+t*17,374761393)^Math.imul(a+t*31,668265263);return o=Math.imul(o^o>>>13,1274126177),((o^o>>>16)>>>0)/4294967295}function L_(i,e,t,n,s){let r=i*n,a=e*s,o=Math.floor(r),l=Math.floor(a),c=zd(r-o),h=zd(a-l),u=Qo(o,l,t,n,s),d=Qo(o+1,l,t,n,s),f=Qo(o,l+1,t,n,s),g=Qo(o+1,l+1,t,n,s);return tn.lerp(tn.lerp(u,d,c),tn.lerp(f,g,c),h)}function N_(i){let t=(Array.isArray(i.surfaceFrequencyBands)?i.surfaceFrequencyBands:[]).flatMap(n=>{if(!n||typeof n!="object")return[];let s=n,r=typeof s.frequency=="number"?s.frequency:0,a=typeof s.amplitude=="number"?s.amplitude:0;if(r<=0||a<=0)return[];let o=Array.isArray(s.stretch)?s.stretch:[1,1],l=`${String(s.pattern??"")} ${String(s.role??"")}`.toLowerCase();return[{frequency:r,amplitude:a,stretchX:typeof o[0]=="number"?Math.max(.1,o[0]):1,stretchY:typeof o[1]=="number"?Math.max(.1,o[1]):1,ridge:/(ridge|groove|grain|fiber|striated|crack)/.test(l)}]});return t.length>0?t:[{frequency:2,amplitude:.42,stretchX:1,stretchY:1,ridge:!1},{frequency:12,amplitude:.22,stretchX:1,stretchY:1,ridge:!1},{frequency:56,amplitude:.08,stretchX:1,stretchY:1,ridge:!1}]}function Uc(i,e,t,n){let s=0,r=0;for(let a=0;a<t.length;a+=1){let o=t[a],l=Math.max(1,Math.round(o.frequency*o.stretchX)),c=Math.max(1,Math.round(o.frequency*o.stretchY)),h=L_(i,e,n+a*1013,l,c);o.ridge&&(h=1-Math.abs(h*2-1)),s+=h*o.amplitude,r+=o.amplitude}return r>0?Tt(s/r):.5}function U_(i,e){if(i.length===1)return i[0];let t=Tt(e)*(i.length-1),n=Math.min(i.length-2,Math.floor(t)),s=t-n,r=i[n],a=i[n+1];return[Math.round(tn.lerp(r[0],a[0],s)),Math.round(tn.lerp(r[1],a[1],s)),Math.round(tn.lerp(r[2],a[2],s))]}function Hd(i){let e=/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/.exec(i);return e?[Bs(Number(e[1])),Bs(Number(e[2])),Bs(Number(e[3]))]:[138,122,95]}function F_(i,e,t){let n=i.stops.length>=2?i.stops:[{offset:0,color:"rgba(138,122,95,1)"},{offset:1,color:"rgba(138,122,95,1)"}],s;if(i.type==="radial"){let[h,u]=i.axis,d=e-h,f=t-u,g=Math.max(.001,Math.hypot(Math.max(h,1-h),Math.max(u,1-u)));s=Tt(Math.hypot(d,f)/g)}else{let[h,u]=i.axis,d=(e-.5)*h+(t-.5)*u,f=.5*(Math.abs(h)+Math.abs(u))||.5;s=Tt(d/f+.5)}let r=s*(n.length-1),a=Math.min(n.length-2,Math.max(0,Math.floor(r))),o=r-a,l=Hd(n[a].color),c=Hd(n[a+1].color);return[tn.lerp(l[0],c[0],o),tn.lerp(l[1],c[1],o),tn.lerp(l[2],c[2],o)]}function kr(i,e,t,n,s){i[e]=Math.max(0,Math.min(255,Math.round(t))),i[e+1]=Math.max(0,Math.min(255,Math.round(n))),i[e+2]=Math.max(0,Math.min(255,Math.round(s))),i[e+3]=255}function zr(i){let e=document.createElement("canvas");return e.width=i,e.height=i,e}function Hr(i,e,t,n){let s=new ar(i),r=t.textureProjection&&typeof t.textureProjection=="object"?t.textureProjection:{},a=Array.isArray(r.repeat)?r.repeat:[2,2];return s.colorSpace=e,s.wrapS=Qn,s.wrapT=Qn,s.repeat.set(typeof a[0]=="number"?a[0]:2,typeof a[1]=="number"?a[1]:2),s.anisotropy=Math.max(1,Math.round(n.textureAnisotropy??r.anisotropy??8)),s.needsUpdate=!0,s}function Gr(i,e){let t=i.referencePbr;if(!t||typeof t!="object"||t.usable===!1)return null;let n=typeof t.confidence=="number"?t.confidence:typeof t.estimatedFidelity=="number"?t.estimatedFidelity:0,s=typeof t.targetThreshold=="number"?t.targetThreshold:.7;if(n<s)return null;let r=t.maps;if(!r||typeof r!="object")return null;let a=r[e];if(!a||typeof a!="object")return null;let o=a,l=typeof o.url=="string"&&o.url.trim()?o.url:o.path;return typeof l=="string"&&l.trim()?l:null}function Vr(i,e,t,n){let s=new vr().load(i),r=t.textureProjection&&typeof t.textureProjection=="object"?t.textureProjection:{},a=Array.isArray(r.repeat)?r.repeat:[1,1];return s.colorSpace=e,s.wrapS=Qn,s.wrapT=Qn,s.repeat.set(typeof a[0]=="number"?a[0]:1,typeof a[1]=="number"?a[1]:1),s.anisotropy=Math.max(1,Math.round(n.textureAnisotropy??r.anisotropy??8)),s.needsUpdate=!0,s}function O_(i,e){let t=Gr(i,"albedo"),n=Gr(i,"roughness"),s=Gr(i,"height"),r=Gr(i,"normal"),a=Gr(i,"ao");return!t||!n||!s||!r||!a?null:{albedo:Vr(t,Pt,i,e),roughness:Vr(n,Bt,i,e),height:Vr(s,Bt,i,e),normal:Vr(r,Bt,i,e),ao:Vr(a,Bt,i,e),source:"reference-pixel-extraction"}}function B_(i,e,t){if(typeof document>"u")return null;let n=(t.qualityPriority??"reference-fidelity")==="reference-fidelity",s=t.textureSize??e.textureResolution,r=typeof s=="number"&&Number.isFinite(s)?s:n?1024:512,a=Math.max(256,Math.min(2048,2**Math.round(Math.log2(r)))),o={albedo:zr(a),roughness:zr(a),height:zr(a),normal:zr(a),ao:zr(a)},l={albedo:o.albedo.getContext("2d"),roughness:o.roughness.getContext("2d"),height:o.height.getContext("2d"),normal:o.normal.getContext("2d"),ao:o.ao.getContext("2d")};if(!l.albedo||!l.roughness||!l.height||!l.normal||!l.ao)return null;let c={albedo:l.albedo.createImageData(a,a),roughness:l.roughness.createImageData(a,a),height:l.height.createImageData(a,a),normal:l.normal.createImageData(a,a),ao:l.ao.createImageData(a,a)},h=R_(i),u=N_(e),d=new Float32Array(a*a),f=new Float32Array(a*a),g=C_(e),v=typeof e.baseColor=="string"?e.baseColor:"#8A7A5F",m=(g.length>=2?g:[v,"#6E614B","#A08F70"]).map(A_),p=Tt(lt(e.roughness,["base"],.76)),M=Tt(lt(e.roughness,["variation"],.18)),R=Tt(lt(e.colorVariation,["amplitude","variation"],.18)),b=Tt(lt(e.colorVariation,["heightCorrelation"],.3)),w=e.colorGradient;for(let _=0;_<a;_+=1){let T=_/a;for(let C=0;C<a;C+=1){let I=C/a,U=_*a+C,V=Uc(I,T,u,h+101),D=Uc(I,T,u,h+7001),O=Uc(I,T,u,h+15013);d[U]=V,f[U]=Tt(p+(D-.5)*M*2);let H;if(w)H=F_(w,I,T);else{let X=Tt(.5+(O-.5)*R*2+(V-.5)*b);H=U_(m,X)}kr(c.albedo.data,U*4,H[0],H[1],H[2])}}let S=Math.max(.05,lt(e.normal,["strength","amplitude"],.35)),A=Tt(lt(e.ambientOcclusion,["cavityStrength","strength"],.35));for(let _=0;_<a;_+=1){let T=(_-1+a)%a*a,C=(_+1)%a*a;for(let I=0;I<a;I+=1){let U=(I-1+a)%a,V=(I+1)%a,D=_*a+I,O=d[D],H=(d[_*a+V]-d[_*a+U])*S*6,X=(d[C+I]-d[T+I])*S*6,ne=1/Math.sqrt(H*H+X*X+1),W=-H*ne,Z=-X*ne,ee=ne,we=(d[_*a+U]+d[_*a+V]+d[T+I]+d[C+I])*.25,_e=Math.max(0,we-O),He=Tt(1-A*(_e*12+(1-O)*.16)),je=D*4,Xe=O*255,j=f[D]*255;kr(c.height.data,je,Xe,Xe,Xe),kr(c.roughness.data,je,j,j,j),kr(c.normal.data,je,(W*.5+.5)*255,(Z*.5+.5)*255,(ee*.5+.5)*255),kr(c.ao.data,je,He*255,He*255,He*255)}}return l.albedo.putImageData(c.albedo,0,0),l.roughness.putImageData(c.roughness,0,0),l.height.putImageData(c.height,0,0),l.normal.putImageData(c.normal,0,0),l.ao.putImageData(c.ao,0,0),{albedo:Hr(o.albedo,Pt,e,t),roughness:Hr(o.roughness,Bt,e,t),height:Hr(o.height,Bt,e,t),normal:Hr(o.normal,Bt,e,t),ao:Hr(o.ao,Bt,e,t),source:"procedural"}}function Fc(i,e,t,n=!1){let r=e.textureless?.declared===!0?null:O_(e,t)??B_(i,e,t),a=new Gn({color:r?16777215:D_(e),roughness:r?1:Tt(lt(e.roughness,["base"],.76)),metalness:I_(lt(e.metalness,["base"],0)),clearcoat:Tt(lt(e.clearcoat,["base","amount"],0)),clearcoatRoughness:Tt(lt(e.clearcoatRoughness,["base"],.25)),transmission:Tt(lt(e.transmission,["base","amount"],0)),ior:kd(lt(e.ior,["base","value"],1.5)),thickness:Math.max(0,lt(e.thickness,["base","amount"],0)),attenuationDistance:Math.max(.001,lt(e.attenuationDistance,["base","value"],1/0)),attenuationColor:new We(typeof e.attenuationColor=="string"?e.attenuationColor:"#ffffff"),sheen:Tt(lt(e.sheen,["base","amount"],0)),sheenColor:new We(typeof e.sheenColor=="string"?e.sheenColor:"#ffffff"),sheenRoughness:Tt(lt(e.sheenRoughness,["base"],1)),iridescence:Tt(lt(e.iridescence,["base","amount"],0)),iridescenceIOR:kd(lt(e.iridescenceIOR,["base","value"],1.3)),anisotropy:Tt(lt(e.anisotropy,["base","amount"],0)),anisotropyRotation:lt(e.anisotropy,["rotation"],0),specularIntensity:P_(lt(e.specularF0??e.f0??e.specularIntensity,["base","value"],1)),specularColor:new We(typeof e.specularColor=="string"?e.specularColor:"#ffffff"),emissive:new We(typeof e.emissive=="string"?e.emissive:"#000000"),emissiveIntensity:Math.max(0,lt(e.emissiveIntensity,["base"],1)),opacity:Tt(lt(e.opacity,["base"],1)),transparent:lt(e.transmission,["base","amount"],0)>0||lt(e.opacity,["base"],1)<1,alphaTest:Math.max(0,lt(e.alpha,["cutoff","alphaTest"],0)),wireframe:t.wireframe??!1,side:e.doubleSided===!0?yn:Vn,flatShading:e.flatShading===!0});if(r){a.map=r.albedo,a.roughnessMap=r.roughness,a.normalMap=r.normal,a.normalScale.setScalar(Math.max(.05,lt(e.normal,["strength","amplitude"],.35))),a.aoMap=r.ao,a.aoMap.channel=0,a.aoMapIntensity=lt(e.ambientOcclusion,["cavityStrength","strength"],.35);let o=n||e.denseMesh===!0||e.geometryDensity==="dense"||e.topologyClass==="dense",l=Math.max(0,lt(e.bump,["amplitude","strength"],0)),c=o?Math.max(.05,l):l;c>0&&(a.bumpMap=r.height,a.bumpScale=c);let h=Math.max(0,lt(e.displacement,["amplitude","strength"],0)),u=o?Math.max(.005,h):h;u>0&&(a.displacementMap=r.height,a.displacementScale=u,a.displacementBias=-u*.5)}return a.envMapIntensity=lt(e,["envMapIntensity"],.8),a.userData.sculptMaterial=e,a.userData.proceduralMapsIndependent=!0,a.userData.pbrConstraints={albedoRange:[30,240],binaryMetalness:!0,f0Range:[.02,1],iorRange:[1,2.5]},a.userData.pbrTextureSource=r?.source??"flat-fallback",a.userData.referencePbr=e.referencePbr??null,a.userData.referenceMaterialId=e.referenceMaterialId??e.materialReference?.profileId??null,a.userData.materialEvidence=e.materialEvidence??null,a.userData.validationViews=e.materialReference?.validationViews??[],a.needsUpdate=!0,a}function Gd(i,e){return Array.isArray(i)&&i.length===3&&i.every(t=>typeof t=="number")?new P(i[0],i[1],i[2]):new P(e[0],e[1],e[2])}function Vd(i,e){return typeof i=="number"&&Number.isFinite(i)?i:e}function yt(i){if(!i||typeof i!="object")return null;let e=i,t=Gd(e.localStart,[0,0,0]),s=Gd(e.localEnd,[0,1,0]).clone().sub(t),r=s.length();if(r<=1e-4)return null;let a=s.clone().normalize(),o=new en().setFromUnitVectors(new P(0,1,0),a),l=Math.max(.005,Vd(e.baseRadius,.06)),c=Math.max(.003,Vd(e.endRadius,l*.55));return{start:t,midpoint:s.multiplyScalar(.5),quaternion:o,length:r,baseRadius:l,endRadius:c}}function Wd(i={}){let e=new it;e.name="Gold balance with curved beam chains and bullion",e.userData.reconstructionEvidence={itemFamily:null,subtype:null,componentAdapter:null,route:null,exactnessTier:null,referenceCamera:{solved:!1,fovDegrees:36,aspect:1,orientation:{yaw:0,pitch:0,roll:0},positionHint:[.2,2.7,12],note:"Front review at Y 2.7, orthographic height 6.6. Side/rear/left inferred review views use same framing."},approximationNotes:[]},e.userData.materialPipeline={},e.userData.materialReferenceRegistry=null;let t={};t.gold=Fc("gold",{id:"gold",name:"gold",type:"physical",shaderModel:"MeshStandardMaterial / PBR approximation",baseColor:"#d6a64c",color:"#d6a64c",albedo:{dominant:"#d6a64c",secondary:["#c6933c","#f2ce86"],samplingNotes:"Textureless gold; specular image pixels are excluded from base albedo."},colorVariation:{palette:["#150B03","#ECC92C","#FEF695","#B4780A","#5A3002"],pattern:"none",amplitude:0,heightCorrelation:.42},roughness:{base:.24,variation:.025,map:"none"},metalness:{base:1,variation:0},ambientOcclusion:{cavityStrength:.38,contactShadowBias:.35,notes:"Reference-derived cavity estimate from local height minima; verify against grazing-light screenshot."},wear:{edgeWear:0,scratches:[],chips:[]},dirt:{amount:0,cavityBias:0,color:"#2F2A22"},localOverrides:[{id:"gold-polish",roughness:.21,region:"exposed bevel edges",evidenceRefs:["full-object"]}],shaderNotes:["Prefer MeshPhysicalMaterial when clearcoat, sheen, transmission, or thin-surface response is observed; otherwise use MeshStandardMaterial-compatible PBR channels.","Generate albedo, roughness, height/normal, and AO independently; never alias albedo into roughness.","Use normal/bump/displacement only when they map to observed surface relief.","Use displacement geometry when the observed relief changes the close-up silhouette; texture-only relief is insufficient there.","Reference-derived maps are estimates from image pixels; verify with neutral, grazing, and reference-matched renders.","Do not treat baked image shadows as final albedo; rerun extraction with a tighter material crop if highlights/shadows pollute the maps."],notes:"Textureless polished metal. Image reflection is not baked into surface albedo; exact lighting and rear geometry are inferred.",textureless:{declared:!0,evidence:["Uploaded balance illustration: column crop shows smooth specular reflected panels with no visible grain, patina, printed pattern or pores.","Silhouette and bevel geometry define the gold surfaces. Variation in the image is dominated by lighting, not texture."]}},i),t["edge-gold"]=Fc("edge-gold",{id:"edge-gold",name:"edge-gold",type:"physical",shaderModel:"MeshStandardMaterial / PBR approximation",baseColor:"#edc779",color:"#edc779",albedo:{dominant:"#edc779",secondary:["#c6933c","#f2ce86"],samplingNotes:"Representative gold albedo inferred without baked reflection highlights."},colorVariation:{palette:["#edc779","#c6933c","#f2ce86"],pattern:"none",amplitude:0,heightCorrelation:0},roughness:{base:.19,variation:.025,map:"none"},metalness:{base:1,variation:0},ambientOcclusion:{cavityStrength:.25,contactShadowBias:.35,notes:"Darken creases, seams, intersections, and recessed local features."},wear:{edgeWear:0,scratches:[],chips:[]},dirt:{amount:0,cavityBias:0,color:"#2F2A22"},localOverrides:[{id:"edge-gold-polish",roughness:.16,region:"exposed bevel edges",evidenceRefs:["full-object"]}],shaderNotes:["Prefer MeshPhysicalMaterial when clearcoat, sheen, transmission, or thin-surface response is observed; otherwise use MeshStandardMaterial-compatible PBR channels.","Generate albedo, roughness, height/normal, and AO independently; never alias albedo into roughness.","Use normal/bump/displacement only when they map to observed surface relief.","Use displacement geometry when the observed relief changes the close-up silhouette; texture-only relief is insufficient there."],notes:"Textureless polished metal. Image reflection is not baked into surface albedo; exact lighting and rear geometry are inferred.",textureless:{declared:!0,evidence:["Uploaded balance illustration: column crop shows smooth specular reflected panels with no visible grain, patina, printed pattern or pores.","Silhouette and bevel geometry define the gold surfaces. Variation in the image is dominated by lighting, not texture."]}},i),t.bullion=Fc("bullion",{id:"bullion",name:"bullion",type:"physical",shaderModel:"MeshStandardMaterial / PBR approximation",baseColor:"#e2b751",color:"#e2b751",albedo:{dominant:"#e2b751",secondary:["#c6933c","#f2ce86"],samplingNotes:"Representative gold albedo inferred without baked reflection highlights."},colorVariation:{palette:["#e2b751","#c6933c","#f2ce86"],pattern:"none",amplitude:0,heightCorrelation:0},roughness:{base:.27,variation:.025,map:"none"},metalness:{base:1,variation:0},ambientOcclusion:{cavityStrength:.25,contactShadowBias:.35,notes:"Darken creases, seams, intersections, and recessed local features."},wear:{edgeWear:0,scratches:[],chips:[]},dirt:{amount:0,cavityBias:0,color:"#2F2A22"},localOverrides:[{id:"bullion-polish",roughness:.24000000000000002,region:"exposed bevel edges",evidenceRefs:["full-object"]}],shaderNotes:["Prefer MeshPhysicalMaterial when clearcoat, sheen, transmission, or thin-surface response is observed; otherwise use MeshStandardMaterial-compatible PBR channels.","Generate albedo, roughness, height/normal, and AO independently; never alias albedo into roughness.","Use normal/bump/displacement only when they map to observed surface relief.","Use displacement geometry when the observed relief changes the close-up silhouette; texture-only relief is insufficient there."],notes:"Textureless polished metal. Image reflection is not baked into surface albedo; exact lighting and rear geometry are inferred.",textureless:{declared:!0,evidence:["Uploaded balance illustration: column crop shows smooth specular reflected panels with no visible grain, patina, printed pattern or pores.","Silhouette and bevel geometry define the gold surfaces. Variation in the image is dominated by lighting, not texture."]}},i);let n={root:e},s={},r={},a={},o={},c=yt(null),h=new it;h.name="root__pivot",h.scale.set(1,1,1),c?(h.position.copy(c.start),h.rotation.set(0,0,0)):(h.position.set(0,.08,0),h.rotation.set(0,0,0)),h.userData.sculptComponent={id:"root",name:"root",level:"macro",role:"body",importance:.85,confidence:.88,primitive:"cylinder",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",radialSegments:8},parent:null,attachment:null,dimensions:{width:1.28,height:.16,depth:.94,units:"world",confidence:.85},transform:{position:[0,.08,0],rotation:[0,0,0]},actionProfile:{animationRole:"root",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"root",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"octagonal-foot",kind:"bevel",placement:"foot perimeter",geometryEffect:"8-sided stepped beveled base",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},h.userData.actionProfile={animationRole:"root",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"root",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(h),n.root=h;let u=c?new rt(c.endRadius,c.baseRadius,c.length,16,6):new rt(.5,.5,1,24,8);c||u.scale(1.28,.16,.94);let d=new Ve(u,t.gold??new at({color:8947848}));d.name="root",c&&(d.position.copy(c.midpoint),d.quaternion.copy(c.quaternion)),d.castShadow=i.castShadow??!0,d.receiveShadow=i.receiveShadow??!0,d.userData.sculptComponent={id:"root",name:"root",level:"macro",role:"body",importance:.85,confidence:.88,primitive:"cylinder",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",radialSegments:8},parent:null,attachment:null,dimensions:{width:1.28,height:.16,depth:.94,units:"world",confidence:.85},transform:{position:[0,.08,0],rotation:[0,0,0]},actionProfile:{animationRole:"root",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"root",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"octagonal-foot",kind:"bevel",placement:"foot perimeter",geometryEffect:"8-sided stepped beveled base",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},h.add(d),s.root=d,a.root={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o.root??(o.root=[]),o.root.push(h);let g=yt({parentId:"root",parentSocket:"foot-step-seat",localStart:[0,.17,0],localEnd:[0,.17,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]}),v=new it;v.name="foot-step__pivot",v.scale.set(1,1,1),g?(v.position.copy(g.start),v.rotation.set(0,0,0)):(v.position.set(0,.17,0),v.rotation.set(0,0,0)),v.userData.sculptComponent={id:"foot-step",name:"foot-step",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"cylinder",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:{parentId:"root",parentSocket:"foot-step-seat",localStart:[0,.17,0],localEnd:[0,.17,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:1.08,height:.18,depth:.8,units:"world",confidence:.85},transform:{position:[0,.17,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"foot-step",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"step-edge",kind:"ridge",geometryEffect:"second raised plinth",confidence:.95}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},v.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"foot-step",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(v),n["foot-step"]=v;let m=g?new rt(g.endRadius,g.baseRadius,g.length,16,6):new rt(.5,.5,1,24,8);g||m.scale(1.08,.18,.8);let p=new Ve(m,t.gold??new at({color:8947848}));p.name="foot-step",g&&(p.position.copy(g.midpoint),p.quaternion.copy(g.quaternion)),p.castShadow=i.castShadow??!0,p.receiveShadow=i.receiveShadow??!0,p.userData.sculptComponent={id:"foot-step",name:"foot-step",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"cylinder",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:{parentId:"root",parentSocket:"foot-step-seat",localStart:[0,.17,0],localEnd:[0,.17,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:1.08,height:.18,depth:.8,units:"world",confidence:.85},transform:{position:[0,.17,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"foot-step",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"step-edge",kind:"ridge",geometryEffect:"second raised plinth",confidence:.95}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},v.add(p),s["foot-step"]=p,a["foot-step"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["foot-step"]??(o["foot-step"]=[]),o["foot-step"].push(v);let R=yt({parentId:"root",parentSocket:"column-seat",localStart:[0,2.3,0],localEnd:[0,2.3,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]}),b=new it;b.name="column__pivot",b.scale.set(1,1,1),R?(b.position.copy(R.start),b.rotation.set(0,0,0)):(b.position.set(0,2.3,0),b.rotation.set(0,0,0)),b.userData.sculptComponent={id:"column",name:"column",level:"macro",role:"body",importance:.85,confidence:.88,primitive:"cylinder",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:{parentId:"root",parentSocket:"column-seat",localStart:[0,2.3,0],localEnd:[0,2.3,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.32,height:4.6,depth:.32,units:"world",confidence:.85},transform:{position:[0,2.3,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"column",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"vertical-spindle",kind:"gloss",materialEffect:"metalness 1 roughness .24",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},b.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"column",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(b),n.column=b;let w=R?new rt(R.endRadius,R.baseRadius,R.length,16,6):new rt(.5,.5,1,24,8);R||w.scale(.32,4.6,.32);let S=new Ve(w,t.gold??new at({color:8947848}));S.name="column",R&&(S.position.copy(R.midpoint),S.quaternion.copy(R.quaternion)),S.castShadow=i.castShadow??!0,S.receiveShadow=i.receiveShadow??!0,S.userData.sculptComponent={id:"column",name:"column",level:"macro",role:"body",importance:.85,confidence:.88,primitive:"cylinder",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:{parentId:"root",parentSocket:"column-seat",localStart:[0,2.3,0],localEnd:[0,2.3,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.32,height:4.6,depth:.32,units:"world",confidence:.85},transform:{position:[0,2.3,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"column",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"vertical-spindle",kind:"gloss",materialEffect:"metalness 1 roughness .24",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},b.add(S),s.column=S,a.column={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o.column??(o.column=[]),o.column.push(b);let A=yt(null),_=new it;_.name="collar-0__pivot",_.scale.set(1,1,1),A?(_.position.copy(A.start),_.rotation.set(0,0,0)):(_.position.set(0,.48,0),_.rotation.set(0,0,0)),_.userData.sculptComponent={id:"collar-0",name:"collar-0",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"lathe",topologyClass:"continuous-sculpt",topologyRationale:"Observed turned radial profile with varying radius",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",latheProfile:{points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24}},parent:"root",attachment:{parentId:"root",parentSocket:"collar-0-seat",localStart:[0,.48,0],localEnd:[0,.48,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.46,height:.2,depth:.46,units:"world",confidence:.85},transform:{position:[0,.48,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-0",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"turned-band-0",kind:"ridge",geometryEffect:"rounded turned spindle collar",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},_.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-0",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(_),n["collar-0"]=_;let T=A?new rt(A.endRadius,A.baseRadius,A.length,16,6):wi({points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24});A||T.scale(.46,.2,.46);let C=new Ve(T,t.gold??new at({color:8947848}));C.name="collar-0",A&&(C.position.copy(A.midpoint),C.quaternion.copy(A.quaternion)),C.castShadow=i.castShadow??!0,C.receiveShadow=i.receiveShadow??!0,C.userData.sculptComponent={id:"collar-0",name:"collar-0",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"lathe",topologyClass:"continuous-sculpt",topologyRationale:"Observed turned radial profile with varying radius",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",latheProfile:{points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24}},parent:"root",attachment:{parentId:"root",parentSocket:"collar-0-seat",localStart:[0,.48,0],localEnd:[0,.48,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.46,height:.2,depth:.46,units:"world",confidence:.85},transform:{position:[0,.48,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-0",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"turned-band-0",kind:"ridge",geometryEffect:"rounded turned spindle collar",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},_.add(C),s["collar-0"]=C,a["collar-0"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["collar-0"]??(o["collar-0"]=[]),o["collar-0"].push(_);let I=yt(null),U=new it;U.name="collar-1__pivot",U.scale.set(1,1,1),I?(U.position.copy(I.start),U.rotation.set(0,0,0)):(U.position.set(0,.83,0),U.rotation.set(0,0,0)),U.userData.sculptComponent={id:"collar-1",name:"collar-1",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"lathe",topologyClass:"continuous-sculpt",topologyRationale:"Observed turned radial profile with varying radius",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",latheProfile:{points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24}},parent:"root",attachment:{parentId:"root",parentSocket:"collar-1-seat",localStart:[0,.83,0],localEnd:[0,.83,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.46,height:.2,depth:.46,units:"world",confidence:.85},transform:{position:[0,.83,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-1",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"turned-band-1",kind:"ridge",geometryEffect:"rounded turned spindle collar",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},U.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-1",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(U),n["collar-1"]=U;let V=I?new rt(I.endRadius,I.baseRadius,I.length,16,6):wi({points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24});I||V.scale(.46,.2,.46);let D=new Ve(V,t.gold??new at({color:8947848}));D.name="collar-1",I&&(D.position.copy(I.midpoint),D.quaternion.copy(I.quaternion)),D.castShadow=i.castShadow??!0,D.receiveShadow=i.receiveShadow??!0,D.userData.sculptComponent={id:"collar-1",name:"collar-1",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"lathe",topologyClass:"continuous-sculpt",topologyRationale:"Observed turned radial profile with varying radius",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",latheProfile:{points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24}},parent:"root",attachment:{parentId:"root",parentSocket:"collar-1-seat",localStart:[0,.83,0],localEnd:[0,.83,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.46,height:.2,depth:.46,units:"world",confidence:.85},transform:{position:[0,.83,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-1",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"turned-band-1",kind:"ridge",geometryEffect:"rounded turned spindle collar",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},U.add(D),s["collar-1"]=D,a["collar-1"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["collar-1"]??(o["collar-1"]=[]),o["collar-1"].push(U);let O=yt(null),H=new it;H.name="collar-2__pivot",H.scale.set(1,1,1),O?(H.position.copy(O.start),H.rotation.set(0,0,0)):(H.position.set(0,3.62,0),H.rotation.set(0,0,0)),H.userData.sculptComponent={id:"collar-2",name:"collar-2",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"lathe",topologyClass:"continuous-sculpt",topologyRationale:"Observed turned radial profile with varying radius",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",latheProfile:{points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24}},parent:"root",attachment:{parentId:"root",parentSocket:"collar-2-seat",localStart:[0,3.62,0],localEnd:[0,3.62,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.46,height:.2,depth:.46,units:"world",confidence:.85},transform:{position:[0,3.62,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-2",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"turned-band-2",kind:"ridge",geometryEffect:"rounded turned spindle collar",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},H.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-2",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(H),n["collar-2"]=H;let X=O?new rt(O.endRadius,O.baseRadius,O.length,16,6):wi({points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24});O||X.scale(.46,.2,.46);let ne=new Ve(X,t.gold??new at({color:8947848}));ne.name="collar-2",O&&(ne.position.copy(O.midpoint),ne.quaternion.copy(O.quaternion)),ne.castShadow=i.castShadow??!0,ne.receiveShadow=i.receiveShadow??!0,ne.userData.sculptComponent={id:"collar-2",name:"collar-2",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"lathe",topologyClass:"continuous-sculpt",topologyRationale:"Observed turned radial profile with varying radius",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",latheProfile:{points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24}},parent:"root",attachment:{parentId:"root",parentSocket:"collar-2-seat",localStart:[0,3.62,0],localEnd:[0,3.62,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.46,height:.2,depth:.46,units:"world",confidence:.85},transform:{position:[0,3.62,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-2",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"turned-band-2",kind:"ridge",geometryEffect:"rounded turned spindle collar",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},H.add(ne),s["collar-2"]=ne,a["collar-2"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["collar-2"]??(o["collar-2"]=[]),o["collar-2"].push(H);let W=yt(null),Z=new it;Z.name="collar-3__pivot",Z.scale.set(1,1,1),W?(Z.position.copy(W.start),Z.rotation.set(0,0,0)):(Z.position.set(0,4.04,0),Z.rotation.set(0,0,0)),Z.userData.sculptComponent={id:"collar-3",name:"collar-3",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"lathe",topologyClass:"continuous-sculpt",topologyRationale:"Observed turned radial profile with varying radius",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",latheProfile:{points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24}},parent:"root",attachment:{parentId:"root",parentSocket:"collar-3-seat",localStart:[0,4.04,0],localEnd:[0,4.04,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.46,height:.2,depth:.46,units:"world",confidence:.85},transform:{position:[0,4.04,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-3",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"turned-band-3",kind:"ridge",geometryEffect:"rounded turned spindle collar",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},Z.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-3",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(Z),n["collar-3"]=Z;let ee=W?new rt(W.endRadius,W.baseRadius,W.length,16,6):wi({points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24});W||ee.scale(.46,.2,.46);let we=new Ve(ee,t.gold??new at({color:8947848}));we.name="collar-3",W&&(we.position.copy(W.midpoint),we.quaternion.copy(W.quaternion)),we.castShadow=i.castShadow??!0,we.receiveShadow=i.receiveShadow??!0,we.userData.sculptComponent={id:"collar-3",name:"collar-3",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"lathe",topologyClass:"continuous-sculpt",topologyRationale:"Observed turned radial profile with varying radius",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",latheProfile:{points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24}},parent:"root",attachment:{parentId:"root",parentSocket:"collar-3-seat",localStart:[0,4.04,0],localEnd:[0,4.04,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.46,height:.2,depth:.46,units:"world",confidence:.85},transform:{position:[0,4.04,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-3",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"turned-band-3",kind:"ridge",geometryEffect:"rounded turned spindle collar",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},Z.add(we),s["collar-3"]=we,a["collar-3"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["collar-3"]??(o["collar-3"]=[]),o["collar-3"].push(Z);let _e=yt(null),He=new it;He.name="collar-4__pivot",He.scale.set(1,1,1),_e?(He.position.copy(_e.start),He.rotation.set(0,0,0)):(He.position.set(0,4.51,0),He.rotation.set(0,0,0)),He.userData.sculptComponent={id:"collar-4",name:"collar-4",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"lathe",topologyClass:"continuous-sculpt",topologyRationale:"Observed turned radial profile with varying radius",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",latheProfile:{points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24}},parent:"root",attachment:{parentId:"root",parentSocket:"collar-4-seat",localStart:[0,4.51,0],localEnd:[0,4.51,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.46,height:.2,depth:.46,units:"world",confidence:.85},transform:{position:[0,4.51,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-4",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"turned-band-4",kind:"ridge",geometryEffect:"rounded turned spindle collar",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},He.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-4",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(He),n["collar-4"]=He;let je=_e?new rt(_e.endRadius,_e.baseRadius,_e.length,16,6):wi({points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24});_e||je.scale(.46,.2,.46);let Xe=new Ve(je,t.gold??new at({color:8947848}));Xe.name="collar-4",_e&&(Xe.position.copy(_e.midpoint),Xe.quaternion.copy(_e.quaternion)),Xe.castShadow=i.castShadow??!0,Xe.receiveShadow=i.receiveShadow??!0,Xe.userData.sculptComponent={id:"collar-4",name:"collar-4",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"lathe",topologyClass:"continuous-sculpt",topologyRationale:"Observed turned radial profile with varying radius",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",latheProfile:{points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24}},parent:"root",attachment:{parentId:"root",parentSocket:"collar-4-seat",localStart:[0,4.51,0],localEnd:[0,4.51,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.46,height:.2,depth:.46,units:"world",confidence:.85},transform:{position:[0,4.51,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-4",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"turned-band-4",kind:"ridge",geometryEffect:"rounded turned spindle collar",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},He.add(Xe),s["collar-4"]=Xe,a["collar-4"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["collar-4"]??(o["collar-4"]=[]),o["collar-4"].push(He);let j=yt(null),J=new it;J.name="collar-5__pivot",J.scale.set(1,1,1),j?(J.position.copy(j.start),J.rotation.set(0,0,0)):(J.position.set(0,4.91,0),J.rotation.set(0,0,0)),J.userData.sculptComponent={id:"collar-5",name:"collar-5",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"lathe",topologyClass:"continuous-sculpt",topologyRationale:"Observed turned radial profile with varying radius",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",latheProfile:{points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24}},parent:"root",attachment:{parentId:"root",parentSocket:"collar-5-seat",localStart:[0,4.91,0],localEnd:[0,4.91,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.46,height:.2,depth:.46,units:"world",confidence:.85},transform:{position:[0,4.91,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-5",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"turned-band-5",kind:"ridge",geometryEffect:"rounded turned spindle collar",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},J.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-5",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(J),n["collar-5"]=J;let ye=j?new rt(j.endRadius,j.baseRadius,j.length,16,6):wi({points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24});j||ye.scale(.46,.2,.46);let Ne=new Ve(ye,t.gold??new at({color:8947848}));Ne.name="collar-5",j&&(Ne.position.copy(j.midpoint),Ne.quaternion.copy(j.quaternion)),Ne.castShadow=i.castShadow??!0,Ne.receiveShadow=i.receiveShadow??!0,Ne.userData.sculptComponent={id:"collar-5",name:"collar-5",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"lathe",topologyClass:"continuous-sculpt",topologyRationale:"Observed turned radial profile with varying radius",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",latheProfile:{points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24}},parent:"root",attachment:{parentId:"root",parentSocket:"collar-5-seat",localStart:[0,4.91,0],localEnd:[0,4.91,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.46,height:.2,depth:.46,units:"world",confidence:.85},transform:{position:[0,4.91,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-5",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"turned-band-5",kind:"ridge",geometryEffect:"rounded turned spindle collar",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},J.add(Ne),s["collar-5"]=Ne,a["collar-5"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["collar-5"]??(o["collar-5"]=[]),o["collar-5"].push(J);let ie=yt(null),ve=new it;ve.name="finial__pivot",ve.scale.set(1,1,1),ie?(ve.position.copy(ie.start),ve.rotation.set(0,0,0)):(ve.position.set(0,5.09,0),ve.rotation.set(0,0,0)),ve.userData.sculptComponent={id:"finial",name:"finial",level:"macro",role:"body",importance:.85,confidence:.88,primitive:"sphere",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:{parentId:"root",parentSocket:"finial-seat",localStart:[0,5.18,0],localEnd:[0,5.18,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.34,height:.38,depth:.34,units:"world",confidence:.85},transform:{position:[0,5.09,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"finial",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"finial-crown",kind:"contour",geometryEffect:"rounded upper crown",confidence:.95}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},ve.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"finial",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(ve),n.finial=ve;let et=ie?new rt(ie.endRadius,ie.baseRadius,ie.length,16,6):new Fi(.5,32,20);ie||et.scale(.34,.38,.34);let K=new Ve(et,t.gold??new at({color:8947848}));K.name="finial",ie&&(K.position.copy(ie.midpoint),K.quaternion.copy(ie.quaternion)),K.castShadow=i.castShadow??!0,K.receiveShadow=i.receiveShadow??!0,K.userData.sculptComponent={id:"finial",name:"finial",level:"macro",role:"body",importance:.85,confidence:.88,primitive:"sphere",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:{parentId:"root",parentSocket:"finial-seat",localStart:[0,5.18,0],localEnd:[0,5.18,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.34,height:.38,depth:.34,units:"world",confidence:.85},transform:{position:[0,5.09,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"finial",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"finial-crown",kind:"contour",geometryEffect:"rounded upper crown",confidence:.95}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},ve.add(K),s.finial=K,a.finial={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o.finial??(o.finial=[]),o.finial.push(ve);let re=yt({parentId:"root",parentSocket:"beam-seat",localStart:[0,4.29,0],localEnd:[0,4.29,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]}),oe=new it;oe.name="beam__pivot",oe.scale.set(1,1,1),re?(oe.position.copy(re.start),oe.rotation.set(0,0,.08)):(oe.position.set(0,4.29,0),oe.rotation.set(0,0,.08)),oe.userData.sculptComponent={id:"beam",name:"beam",level:"macro",role:"body",importance:.85,confidence:.88,primitive:"tube",topologyClass:"fiber-strand",topologyRationale:"Observed thin member following a curved centerline",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",tubePath:{points:[[-1.58,-.28,0],[-1.22,-.2,0],[-.79,.16,0],[0,.27,0],[.79,.16,0],[1.22,-.2,0],[1.58,-.28,0]],radius:.075,radialSegments:12},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"beam-seat",localStart:[0,4.29,0],localEnd:[0,4.29,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[0,4.29,0],rotation:[0,0,.08]},actionProfile:{animationRole:"hinge",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"compound",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"beam",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"curved-beam",kind:"contour",geometryEffect:"curved tube sweeps with raised central beam",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},oe.userData.actionProfile={animationRole:"hinge",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"compound",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"beam",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(oe),n.beam=oe;let me=re?new rt(re.endRadius,re.baseRadius,re.length,16,6):Wi({points:[[-1.58,-.28,0],[-1.22,-.2,0],[-.79,.16,0],[0,.27,0],[.79,.16,0],[1.22,-.2,0],[1.58,-.28,0]],radius:.075,radialSegments:12});re||me.scale(1,1,1);let Ue=new Ve(me,t.gold??new at({color:8947848}));Ue.name="beam",re&&(Ue.position.copy(re.midpoint),Ue.quaternion.copy(re.quaternion)),Ue.castShadow=i.castShadow??!0,Ue.receiveShadow=i.receiveShadow??!0,Ue.userData.sculptComponent={id:"beam",name:"beam",level:"macro",role:"body",importance:.85,confidence:.88,primitive:"tube",topologyClass:"fiber-strand",topologyRationale:"Observed thin member following a curved centerline",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",tubePath:{points:[[-1.58,-.28,0],[-1.22,-.2,0],[-.79,.16,0],[0,.27,0],[.79,.16,0],[1.22,-.2,0],[1.58,-.28,0]],radius:.075,radialSegments:12},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"beam-seat",localStart:[0,4.29,0],localEnd:[0,4.29,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[0,4.29,0],rotation:[0,0,.08]},actionProfile:{animationRole:"hinge",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"compound",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"beam",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"curved-beam",kind:"contour",geometryEffect:"curved tube sweeps with raised central beam",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},oe.add(Ue),s.beam=Ue,a.beam={type:"compound",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o.beam??(o.beam=[]),o.beam.push(oe);let Oe=yt({parentId:"beam",parentSocket:"beam-center-seat",localStart:[0,.26,0],localEnd:[0,.26,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]}),Be=new it;Be.name="beam-center__pivot",Be.scale.set(1,1,1),Oe?(Be.position.copy(Oe.start),Be.rotation.set(0,0,1.5707963267948966)):(Be.position.set(0,.26,0),Be.rotation.set(0,0,1.5707963267948966)),Be.userData.sculptComponent={id:"beam-center",name:"beam-center",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"cylinder",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"beam",attachment:{parentId:"beam",parentSocket:"beam-center-seat",localStart:[0,.26,0],localEnd:[0,.26,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.23,height:1.14,depth:.23,units:"world",confidence:.85},transform:{position:[0,.26,0],rotation:[0,0,1.5707963267948966]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"beam-center",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"edge-gold",materialLayers:["edge-gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"crossbar-sleeve",kind:"gloss",materialEffect:"polished horizontal sleeve",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},Be.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"beam-center",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.beam??e).add(Be),n["beam-center"]=Be;let L=Oe?new rt(Oe.endRadius,Oe.baseRadius,Oe.length,16,6):new rt(.5,.5,1,24,8);Oe||L.scale(.23,1.14,.23);let tt=new Ve(L,t["edge-gold"]??new at({color:8947848}));tt.name="beam-center",Oe&&(tt.position.copy(Oe.midpoint),tt.quaternion.copy(Oe.quaternion)),tt.castShadow=i.castShadow??!0,tt.receiveShadow=i.receiveShadow??!0,tt.userData.sculptComponent={id:"beam-center",name:"beam-center",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"cylinder",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"beam",attachment:{parentId:"beam",parentSocket:"beam-center-seat",localStart:[0,.26,0],localEnd:[0,.26,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.23,height:1.14,depth:.23,units:"world",confidence:.85},transform:{position:[0,.26,0],rotation:[0,0,1.5707963267948966]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"beam-center",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"edge-gold",materialLayers:["edge-gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"crossbar-sleeve",kind:"gloss",materialEffect:"polished horizontal sleeve",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},Be.add(tt),s["beam-center"]=tt,a["beam-center"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["beam-center"]??(o["beam-center"]=[]),o["beam-center"].push(Be);let Ye=yt(null),E=new it;E.name="pan-left__pivot",E.scale.set(1,1,1),Ye?(E.position.copy(Ye.start),E.rotation.set(0,0,0)):(E.position.set(-1.57,1.3499999999999999,0),E.rotation.set(0,0,0)),E.userData.sculptComponent={id:"pan-left",name:"pan-left",level:"macro",role:"body",importance:.85,confidence:.88,primitive:"lathe",topologyClass:"continuous-sculpt",topologyRationale:"Observed turned radial profile with varying radius",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",latheProfile:{points:[[0,-.11],[.45,-.105],[.66,-.05],[.75,.06],[.77,.09],[.75,.105],[.7,.085],[.59,-.025],[.43,-.058],[0,-.06]],segments:48},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"pan-left-seat",localStart:[-1.57,1.3499999999999999,0],localEnd:[-1.57,1.3499999999999999,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[-1.57,1.3499999999999999,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"pan-left",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"bowl-left",kind:"hole",geometryEffect:"open shallow bowl with returned wall thickness",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},E.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"pan-left",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(E),n["pan-left"]=E;let y=Ye?new rt(Ye.endRadius,Ye.baseRadius,Ye.length,16,6):wi({points:[[0,-.11],[.45,-.105],[.66,-.05],[.75,.06],[.77,.09],[.75,.105],[.7,.085],[.59,-.025],[.43,-.058],[0,-.06]],segments:48});Ye||y.scale(1,1,1);let B=new Ve(y,t.gold??new at({color:8947848}));B.name="pan-left",Ye&&(B.position.copy(Ye.midpoint),B.quaternion.copy(Ye.quaternion)),B.castShadow=i.castShadow??!0,B.receiveShadow=i.receiveShadow??!0,B.userData.sculptComponent={id:"pan-left",name:"pan-left",level:"macro",role:"body",importance:.85,confidence:.88,primitive:"lathe",topologyClass:"continuous-sculpt",topologyRationale:"Observed turned radial profile with varying radius",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",latheProfile:{points:[[0,-.11],[.45,-.105],[.66,-.05],[.75,.06],[.77,.09],[.75,.105],[.7,.085],[.59,-.025],[.43,-.058],[0,-.06]],segments:48},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"pan-left-seat",localStart:[-1.57,1.3499999999999999,0],localEnd:[-1.57,1.3499999999999999,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[-1.57,1.3499999999999999,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"pan-left",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"bowl-left",kind:"hole",geometryEffect:"open shallow bowl with returned wall thickness",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},E.add(B),s["pan-left"]=B,a["pan-left"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["pan-left"]??(o["pan-left"]=[]),o["pan-left"].push(E);let G=yt(null),Y=new it;Y.name="rim-left__pivot",Y.scale.set(1,1,1),G?(Y.position.copy(G.start),Y.rotation.set(1.5707963267948966,0,0)):(Y.position.set(0,.097,0),Y.rotation.set(1.5707963267948966,0,0)),Y.userData.sculptComponent={id:"rim-left",name:"rim-left",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"torus",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"pan-left",attachment:{parentId:"pan-left",parentSocket:"rim-left-seat",localStart:[0,.097,0],localEnd:[0,.097,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:1.55,height:1.55,depth:.026,units:"world",confidence:.85},transform:{position:[0,.097,0],rotation:[1.5707963267948966,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"rim-left",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"edge-gold",materialLayers:["edge-gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"rim-bead-left",kind:"ridge",geometryEffect:"thin circular rim accent",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},Y.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"rim-left",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n["pan-left"]??e).add(Y),n["rim-left"]=Y;let ce=G?new rt(G.endRadius,G.baseRadius,G.length,16,6):new pi(.45,.08,12,48);G||ce.scale(1.55,1.55,.026);let he=new Ve(ce,t["edge-gold"]??new at({color:8947848}));he.name="rim-left",G&&(he.position.copy(G.midpoint),he.quaternion.copy(G.quaternion)),he.castShadow=i.castShadow??!0,he.receiveShadow=i.receiveShadow??!0,he.userData.sculptComponent={id:"rim-left",name:"rim-left",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"torus",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"pan-left",attachment:{parentId:"pan-left",parentSocket:"rim-left-seat",localStart:[0,.097,0],localEnd:[0,.097,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:1.55,height:1.55,depth:.026,units:"world",confidence:.85},transform:{position:[0,.097,0],rotation:[1.5707963267948966,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"rim-left",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"edge-gold",materialLayers:["edge-gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"rim-bead-left",kind:"ridge",geometryEffect:"thin circular rim accent",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},Y.add(he),s["rim-left"]=he,a["rim-left"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["rim-left"]??(o["rim-left"]=[]),o["rim-left"].push(Y);let te=yt({parentId:"root",parentSocket:"chain-left-0-seat",localStart:[-1.57,3.8844,0],localEnd:[-.9464617092752042,1.43,.35999999999999993],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015}),de=new it;de.name="chain-left-0__pivot",de.scale.set(1,1,1),te?(de.position.copy(te.start),de.rotation.set(0,0,0)):(de.position.set(-1.57,3.8844,0),de.rotation.set(0,0,0)),de.userData.sculptComponent={id:"chain-left-0",name:"chain-left-0",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"tube",topologyClass:"fiber-strand",topologyRationale:"Observed thin member following a curved centerline",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",tubePath:{points:[[0,0,0],[.6235382907247958,-2.4543999999999997,.35999999999999993]],radius:.013,radialSegments:6},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"chain-left-0-seat",localStart:[-1.57,3.8844,0],localEnd:[-.9464617092752042,1.43,.35999999999999993],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[-1.57,3.8844,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-left-0",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"links-left-0",kind:"ridge",geometryEffect:"repeated alternating oval chain links along endpoints",confidence:.83}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},de.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-left-0",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(de),n["chain-left-0"]=de;let Fe=te?new rt(te.endRadius,te.baseRadius,te.length,16,6):Wi({points:[[0,0,0],[.6235382907247958,-2.4543999999999997,.35999999999999993]],radius:.013,radialSegments:6});te||Fe.scale(1,1,1);let pe=new Ve(Fe,t.gold??new at({color:8947848}));pe.name="chain-left-0",te&&(pe.position.copy(te.midpoint),pe.quaternion.copy(te.quaternion)),pe.castShadow=i.castShadow??!0,pe.receiveShadow=i.receiveShadow??!0,pe.userData.sculptComponent={id:"chain-left-0",name:"chain-left-0",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"tube",topologyClass:"fiber-strand",topologyRationale:"Observed thin member following a curved centerline",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",tubePath:{points:[[0,0,0],[.6235382907247958,-2.4543999999999997,.35999999999999993]],radius:.013,radialSegments:6},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"chain-left-0-seat",localStart:[-1.57,3.8844,0],localEnd:[-.9464617092752042,1.43,.35999999999999993],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[-1.57,3.8844,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-left-0",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"links-left-0",kind:"ridge",geometryEffect:"repeated alternating oval chain links along endpoints",confidence:.83}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},de.add(pe),s["chain-left-0"]=pe,a["chain-left-0"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["chain-left-0"]??(o["chain-left-0"]=[]),o["chain-left-0"].push(de);let Ce=yt({parentId:"root",parentSocket:"chain-left-1-seat",localStart:[-1.57,3.8844,0],localEnd:[-2.193538290724796,1.43,.35999999999999993],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015}),De=new it;De.name="chain-left-1__pivot",De.scale.set(1,1,1),Ce?(De.position.copy(Ce.start),De.rotation.set(0,0,0)):(De.position.set(-1.57,3.8844,0),De.rotation.set(0,0,0)),De.userData.sculptComponent={id:"chain-left-1",name:"chain-left-1",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"tube",topologyClass:"fiber-strand",topologyRationale:"Observed thin member following a curved centerline",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",tubePath:{points:[[0,0,0],[-.6235382907247959,-2.4543999999999997,.35999999999999993]],radius:.013,radialSegments:6},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"chain-left-1-seat",localStart:[-1.57,3.8844,0],localEnd:[-2.193538290724796,1.43,.35999999999999993],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[-1.57,3.8844,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-left-1",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"links-left-1",kind:"ridge",geometryEffect:"repeated alternating oval chain links along endpoints",confidence:.83}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},De.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-left-1",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(De),n["chain-left-1"]=De;let Ze=Ce?new rt(Ce.endRadius,Ce.baseRadius,Ce.length,16,6):Wi({points:[[0,0,0],[-.6235382907247959,-2.4543999999999997,.35999999999999993]],radius:.013,radialSegments:6});Ce||Ze.scale(1,1,1);let F=new Ve(Ze,t.gold??new at({color:8947848}));F.name="chain-left-1",Ce&&(F.position.copy(Ce.midpoint),F.quaternion.copy(Ce.quaternion)),F.castShadow=i.castShadow??!0,F.receiveShadow=i.receiveShadow??!0,F.userData.sculptComponent={id:"chain-left-1",name:"chain-left-1",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"tube",topologyClass:"fiber-strand",topologyRationale:"Observed thin member following a curved centerline",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",tubePath:{points:[[0,0,0],[-.6235382907247959,-2.4543999999999997,.35999999999999993]],radius:.013,radialSegments:6},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"chain-left-1-seat",localStart:[-1.57,3.8844,0],localEnd:[-2.193538290724796,1.43,.35999999999999993],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[-1.57,3.8844,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-left-1",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"links-left-1",kind:"ridge",geometryEffect:"repeated alternating oval chain links along endpoints",confidence:.83}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},De.add(F),s["chain-left-1"]=F,a["chain-left-1"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["chain-left-1"]??(o["chain-left-1"]=[]),o["chain-left-1"].push(De);let Q=yt({parentId:"root",parentSocket:"chain-left-2-seat",localStart:[-1.57,3.8844,0],localEnd:[-1.5700000000000003,1.43,-.72],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015}),ue=new it;ue.name="chain-left-2__pivot",ue.scale.set(1,1,1),Q?(ue.position.copy(Q.start),ue.rotation.set(0,0,0)):(ue.position.set(-1.57,3.8844,0),ue.rotation.set(0,0,0)),ue.userData.sculptComponent={id:"chain-left-2",name:"chain-left-2",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"tube",topologyClass:"fiber-strand",topologyRationale:"Observed thin member following a curved centerline",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",tubePath:{points:[[0,0,0],[-2220446049250313e-31,-2.4543999999999997,-.72]],radius:.013,radialSegments:6},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"chain-left-2-seat",localStart:[-1.57,3.8844,0],localEnd:[-1.5700000000000003,1.43,-.72],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[-1.57,3.8844,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-left-2",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"links-left-2",kind:"ridge",geometryEffect:"repeated alternating oval chain links along endpoints",confidence:.83}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},ue.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-left-2",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(ue),n["chain-left-2"]=ue;let Me=Q?new rt(Q.endRadius,Q.baseRadius,Q.length,16,6):Wi({points:[[0,0,0],[-2220446049250313e-31,-2.4543999999999997,-.72]],radius:.013,radialSegments:6});Q||Me.scale(1,1,1);let se=new Ve(Me,t.gold??new at({color:8947848}));se.name="chain-left-2",Q&&(se.position.copy(Q.midpoint),se.quaternion.copy(Q.quaternion)),se.castShadow=i.castShadow??!0,se.receiveShadow=i.receiveShadow??!0,se.userData.sculptComponent={id:"chain-left-2",name:"chain-left-2",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"tube",topologyClass:"fiber-strand",topologyRationale:"Observed thin member following a curved centerline",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",tubePath:{points:[[0,0,0],[-2220446049250313e-31,-2.4543999999999997,-.72]],radius:.013,radialSegments:6},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"chain-left-2-seat",localStart:[-1.57,3.8844,0],localEnd:[-1.5700000000000003,1.43,-.72],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[-1.57,3.8844,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-left-2",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"links-left-2",kind:"ridge",geometryEffect:"repeated alternating oval chain links along endpoints",confidence:.83}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},ue.add(se),s["chain-left-2"]=se,a["chain-left-2"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["chain-left-2"]??(o["chain-left-2"]=[]),o["chain-left-2"].push(ue);let Pe=yt(null),Ee=new it;Ee.name="bar-left__pivot",Ee.scale.set(1,1,1),Pe?(Ee.position.copy(Pe.start),Ee.rotation.set(0,.3,.05)):(Ee.position.set(-1.57,1.5,0),Ee.rotation.set(0,.3,.05)),Ee.userData.sculptComponent={id:"bar-left",name:"bar-left",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"box",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:{parentId:"root",parentSocket:"bar-left-seat",localStart:[-1.57,1.5,0],localEnd:[-1.57,1.5,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.82,height:.28,depth:.44,units:"world",confidence:.85},transform:{position:[-1.57,1.5,0],rotation:[0,.3,.05]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"bar-left",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"bullion",materialLayers:["bullion"],deformations:[],joints:[],seams:[],localFeatures:[{id:"bullion-bevel-left",kind:"bevel",geometryEffect:"beveled trapezoid bullion block",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},Ee.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"bar-left",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(Ee),n["bar-left"]=Ee;let ut=Pe?new rt(Pe.endRadius,Pe.baseRadius,Pe.length,16,6):new jt(1,1,1,4,4,4);Pe||ut.scale(.82,.28,.44);let nt=new Ve(ut,t.bullion??new at({color:8947848}));nt.name="bar-left",Pe&&(nt.position.copy(Pe.midpoint),nt.quaternion.copy(Pe.quaternion)),nt.castShadow=i.castShadow??!0,nt.receiveShadow=i.receiveShadow??!0,nt.userData.sculptComponent={id:"bar-left",name:"bar-left",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"box",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:{parentId:"root",parentSocket:"bar-left-seat",localStart:[-1.57,1.5,0],localEnd:[-1.57,1.5,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.82,height:.28,depth:.44,units:"world",confidence:.85},transform:{position:[-1.57,1.5,0],rotation:[0,.3,.05]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"bar-left",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"bullion",materialLayers:["bullion"],deformations:[],joints:[],seams:[],localFeatures:[{id:"bullion-bevel-left",kind:"bevel",geometryEffect:"beveled trapezoid bullion block",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},Ee.add(nt),s["bar-left"]=nt,a["bar-left"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["bar-left"]??(o["bar-left"]=[]),o["bar-left"].push(Ee);let wt=yt(null),St=new it;St.name="bar-left-second__pivot",St.scale.set(1,1,1),wt?(St.position.copy(wt.start),St.rotation.set(0,-.22,-.06)):(St.position.set(-1.44,1.76,.015),St.rotation.set(0,-.22,-.06)),St.userData.sculptComponent={id:"bar-left-second",name:"bar-left-second",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"box",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:{parentId:"root",parentSocket:"bar-left-second-seat",localStart:[-1.44,1.76,.015],localEnd:[-1.44,1.76,.015],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.82,height:.28,depth:.44,units:"world",confidence:.85},transform:{position:[-1.44,1.76,.015],rotation:[0,-.22,-.06]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"bar-left-second",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"bullion",materialLayers:["bullion"],deformations:[],joints:[],seams:[],localFeatures:[{id:"second-bullion",kind:"bevel",geometryEffect:"second stacked bar with bevel edge",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},St.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"bar-left-second",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(St),n["bar-left-second"]=St;let qr=wt?new rt(wt.endRadius,wt.baseRadius,wt.length,16,6):new jt(1,1,1,4,4,4);wt||qr.scale(.82,.28,.44);let Nn=new Ve(qr,t.bullion??new at({color:8947848}));Nn.name="bar-left-second",wt&&(Nn.position.copy(wt.midpoint),Nn.quaternion.copy(wt.quaternion)),Nn.castShadow=i.castShadow??!0,Nn.receiveShadow=i.receiveShadow??!0,Nn.userData.sculptComponent={id:"bar-left-second",name:"bar-left-second",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"box",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:{parentId:"root",parentSocket:"bar-left-second-seat",localStart:[-1.44,1.76,.015],localEnd:[-1.44,1.76,.015],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.82,height:.28,depth:.44,units:"world",confidence:.85},transform:{position:[-1.44,1.76,.015],rotation:[0,-.22,-.06]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"bar-left-second",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"bullion",materialLayers:["bullion"],deformations:[],joints:[],seams:[],localFeatures:[{id:"second-bullion",kind:"bevel",geometryEffect:"second stacked bar with bevel edge",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},St.add(Nn),s["bar-left-second"]=Nn,a["bar-left-second"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["bar-left-second"]??(o["bar-left-second"]=[]),o["bar-left-second"].push(St);let on=yt(null),Gt=new it;Gt.name="pan-right__pivot",Gt.scale.set(1,1,1),on?(Gt.position.copy(on.start),Gt.rotation.set(0,0,0)):(Gt.position.set(1.57,1.5999999999999999,0),Gt.rotation.set(0,0,0)),Gt.userData.sculptComponent={id:"pan-right",name:"pan-right",level:"macro",role:"body",importance:.85,confidence:.88,primitive:"lathe",topologyClass:"continuous-sculpt",topologyRationale:"Observed turned radial profile with varying radius",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",latheProfile:{points:[[0,-.11],[.45,-.105],[.66,-.05],[.75,.06],[.77,.09],[.75,.105],[.7,.085],[.59,-.025],[.43,-.058],[0,-.06]],segments:48},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"pan-right-seat",localStart:[1.57,1.5999999999999999,0],localEnd:[1.57,1.5999999999999999,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[1.57,1.5999999999999999,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"pan-right",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"bowl-right",kind:"hole",geometryEffect:"open shallow bowl with returned wall thickness",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},Gt.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"pan-right",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(Gt),n["pan-right"]=Gt;let jr=on?new rt(on.endRadius,on.baseRadius,on.length,16,6):wi({points:[[0,-.11],[.45,-.105],[.66,-.05],[.75,.06],[.77,.09],[.75,.105],[.7,.085],[.59,-.025],[.43,-.058],[0,-.06]],segments:48});on||jr.scale(1,1,1);let Sn=new Ve(jr,t.gold??new at({color:8947848}));Sn.name="pan-right",on&&(Sn.position.copy(on.midpoint),Sn.quaternion.copy(on.quaternion)),Sn.castShadow=i.castShadow??!0,Sn.receiveShadow=i.receiveShadow??!0,Sn.userData.sculptComponent={id:"pan-right",name:"pan-right",level:"macro",role:"body",importance:.85,confidence:.88,primitive:"lathe",topologyClass:"continuous-sculpt",topologyRationale:"Observed turned radial profile with varying radius",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",latheProfile:{points:[[0,-.11],[.45,-.105],[.66,-.05],[.75,.06],[.77,.09],[.75,.105],[.7,.085],[.59,-.025],[.43,-.058],[0,-.06]],segments:48},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"pan-right-seat",localStart:[1.57,1.5999999999999999,0],localEnd:[1.57,1.5999999999999999,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[1.57,1.5999999999999999,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"pan-right",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"bowl-right",kind:"hole",geometryEffect:"open shallow bowl with returned wall thickness",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},Gt.add(Sn),s["pan-right"]=Sn,a["pan-right"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["pan-right"]??(o["pan-right"]=[]),o["pan-right"].push(Gt);let ln=yt(null),Rt=new it;Rt.name="rim-right__pivot",Rt.scale.set(1,1,1),ln?(Rt.position.copy(ln.start),Rt.rotation.set(1.5707963267948966,0,0)):(Rt.position.set(0,.097,0),Rt.rotation.set(1.5707963267948966,0,0)),Rt.userData.sculptComponent={id:"rim-right",name:"rim-right",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"torus",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"pan-right",attachment:{parentId:"pan-right",parentSocket:"rim-right-seat",localStart:[0,.097,0],localEnd:[0,.097,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:1.55,height:1.55,depth:.026,units:"world",confidence:.85},transform:{position:[0,.097,0],rotation:[1.5707963267948966,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"rim-right",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"edge-gold",materialLayers:["edge-gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"rim-bead-right",kind:"ridge",geometryEffect:"thin circular rim accent",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},Rt.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"rim-right",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n["pan-right"]??e).add(Rt),n["rim-right"]=Rt;let Xi=ln?new rt(ln.endRadius,ln.baseRadius,ln.length,16,6):new pi(.45,.08,12,48);ln||Xi.scale(1.55,1.55,.026);let Mn=new Ve(Xi,t["edge-gold"]??new at({color:8947848}));Mn.name="rim-right",ln&&(Mn.position.copy(ln.midpoint),Mn.quaternion.copy(ln.quaternion)),Mn.castShadow=i.castShadow??!0,Mn.receiveShadow=i.receiveShadow??!0,Mn.userData.sculptComponent={id:"rim-right",name:"rim-right",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"torus",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"pan-right",attachment:{parentId:"pan-right",parentSocket:"rim-right-seat",localStart:[0,.097,0],localEnd:[0,.097,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:1.55,height:1.55,depth:.026,units:"world",confidence:.85},transform:{position:[0,.097,0],rotation:[1.5707963267948966,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"rim-right",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"edge-gold",materialLayers:["edge-gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"rim-bead-right",kind:"ridge",geometryEffect:"thin circular rim accent",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},Rt.add(Mn),s["rim-right"]=Mn,a["rim-right"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["rim-right"]??(o["rim-right"]=[]),o["rim-right"].push(Rt);let Zt=yt({parentId:"root",parentSocket:"chain-right-0-seat",localStart:[1.57,4.1356,0],localEnd:[2.193538290724796,1.68,.35999999999999993],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015}),Jt=new it;Jt.name="chain-right-0__pivot",Jt.scale.set(1,1,1),Zt?(Jt.position.copy(Zt.start),Jt.rotation.set(0,0,0)):(Jt.position.set(1.57,4.1356,0),Jt.rotation.set(0,0,0)),Jt.userData.sculptComponent={id:"chain-right-0",name:"chain-right-0",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"tube",topologyClass:"fiber-strand",topologyRationale:"Observed thin member following a curved centerline",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",tubePath:{points:[[0,0,0],[.6235382907247959,-2.4556000000000004,.35999999999999993]],radius:.013,radialSegments:6},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"chain-right-0-seat",localStart:[1.57,4.1356,0],localEnd:[2.193538290724796,1.68,.35999999999999993],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[1.57,4.1356,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-right-0",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"links-right-0",kind:"ridge",geometryEffect:"repeated alternating oval chain links along endpoints",confidence:.83}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},Jt.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-right-0",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(Jt),n["chain-right-0"]=Jt;let Ei=Zt?new rt(Zt.endRadius,Zt.baseRadius,Zt.length,16,6):Wi({points:[[0,0,0],[.6235382907247959,-2.4556000000000004,.35999999999999993]],radius:.013,radialSegments:6});Zt||Ei.scale(1,1,1);let wn=new Ve(Ei,t.gold??new at({color:8947848}));wn.name="chain-right-0",Zt&&(wn.position.copy(Zt.midpoint),wn.quaternion.copy(Zt.quaternion)),wn.castShadow=i.castShadow??!0,wn.receiveShadow=i.receiveShadow??!0,wn.userData.sculptComponent={id:"chain-right-0",name:"chain-right-0",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"tube",topologyClass:"fiber-strand",topologyRationale:"Observed thin member following a curved centerline",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",tubePath:{points:[[0,0,0],[.6235382907247959,-2.4556000000000004,.35999999999999993]],radius:.013,radialSegments:6},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"chain-right-0-seat",localStart:[1.57,4.1356,0],localEnd:[2.193538290724796,1.68,.35999999999999993],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[1.57,4.1356,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-right-0",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"links-right-0",kind:"ridge",geometryEffect:"repeated alternating oval chain links along endpoints",confidence:.83}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},Jt.add(wn),s["chain-right-0"]=wn,a["chain-right-0"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["chain-right-0"]??(o["chain-right-0"]=[]),o["chain-right-0"].push(Jt);let mn=yt({parentId:"root",parentSocket:"chain-right-1-seat",localStart:[1.57,4.1356,0],localEnd:[.9464617092752042,1.68,.35999999999999993],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015}),nn=new it;nn.name="chain-right-1__pivot",nn.scale.set(1,1,1),mn?(nn.position.copy(mn.start),nn.rotation.set(0,0,0)):(nn.position.set(1.57,4.1356,0),nn.rotation.set(0,0,0)),nn.userData.sculptComponent={id:"chain-right-1",name:"chain-right-1",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"tube",topologyClass:"fiber-strand",topologyRationale:"Observed thin member following a curved centerline",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",tubePath:{points:[[0,0,0],[-.6235382907247958,-2.4556000000000004,.35999999999999993]],radius:.013,radialSegments:6},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"chain-right-1-seat",localStart:[1.57,4.1356,0],localEnd:[.9464617092752042,1.68,.35999999999999993],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[1.57,4.1356,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-right-1",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"links-right-1",kind:"ridge",geometryEffect:"repeated alternating oval chain links along endpoints",confidence:.83}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},nn.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-right-1",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(nn),n["chain-right-1"]=nn;let Yr=mn?new rt(mn.endRadius,mn.baseRadius,mn.length,16,6):Wi({points:[[0,0,0],[-.6235382907247958,-2.4556000000000004,.35999999999999993]],radius:.013,radialSegments:6});mn||Yr.scale(1,1,1);let Un=new Ve(Yr,t.gold??new at({color:8947848}));Un.name="chain-right-1",mn&&(Un.position.copy(mn.midpoint),Un.quaternion.copy(mn.quaternion)),Un.castShadow=i.castShadow??!0,Un.receiveShadow=i.receiveShadow??!0,Un.userData.sculptComponent={id:"chain-right-1",name:"chain-right-1",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"tube",topologyClass:"fiber-strand",topologyRationale:"Observed thin member following a curved centerline",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",tubePath:{points:[[0,0,0],[-.6235382907247958,-2.4556000000000004,.35999999999999993]],radius:.013,radialSegments:6},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"chain-right-1-seat",localStart:[1.57,4.1356,0],localEnd:[.9464617092752042,1.68,.35999999999999993],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[1.57,4.1356,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-right-1",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"links-right-1",kind:"ridge",geometryEffect:"repeated alternating oval chain links along endpoints",confidence:.83}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},nn.add(Un),s["chain-right-1"]=Un,a["chain-right-1"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["chain-right-1"]??(o["chain-right-1"]=[]),o["chain-right-1"].push(nn);let x=yt({parentId:"root",parentSocket:"chain-right-2-seat",localStart:[1.57,4.1356,0],localEnd:[1.5699999999999998,1.68,-.72],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015}),N=new it;N.name="chain-right-2__pivot",N.scale.set(1,1,1),x?(N.position.copy(x.start),N.rotation.set(0,0,0)):(N.position.set(1.57,4.1356,0),N.rotation.set(0,0,0)),N.userData.sculptComponent={id:"chain-right-2",name:"chain-right-2",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"tube",topologyClass:"fiber-strand",topologyRationale:"Observed thin member following a curved centerline",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",tubePath:{points:[[0,0,0],[-2220446049250313e-31,-2.4556000000000004,-.72]],radius:.013,radialSegments:6},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"chain-right-2-seat",localStart:[1.57,4.1356,0],localEnd:[1.5699999999999998,1.68,-.72],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[1.57,4.1356,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-right-2",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"links-right-2",kind:"ridge",geometryEffect:"repeated alternating oval chain links along endpoints",confidence:.83}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},N.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-right-2",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(N),n["chain-right-2"]=N;let q=x?new rt(x.endRadius,x.baseRadius,x.length,16,6):Wi({points:[[0,0,0],[-2220446049250313e-31,-2.4556000000000004,-.72]],radius:.013,radialSegments:6});x||q.scale(1,1,1);let z=new Ve(q,t.gold??new at({color:8947848}));z.name="chain-right-2",x&&(z.position.copy(x.midpoint),z.quaternion.copy(x.quaternion)),z.castShadow=i.castShadow??!0,z.receiveShadow=i.receiveShadow??!0,z.userData.sculptComponent={id:"chain-right-2",name:"chain-right-2",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"tube",topologyClass:"fiber-strand",topologyRationale:"Observed thin member following a curved centerline",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",tubePath:{points:[[0,0,0],[-2220446049250313e-31,-2.4556000000000004,-.72]],radius:.013,radialSegments:6},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"chain-right-2-seat",localStart:[1.57,4.1356,0],localEnd:[1.5699999999999998,1.68,-.72],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[1.57,4.1356,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-right-2",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"links-right-2",kind:"ridge",geometryEffect:"repeated alternating oval chain links along endpoints",confidence:.83}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},N.add(z),s["chain-right-2"]=z,a["chain-right-2"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["chain-right-2"]??(o["chain-right-2"]=[]),o["chain-right-2"].push(N);let k=yt(null),fe=new it;fe.name="bar-right__pivot",fe.scale.set(1,1,1),k?(fe.position.copy(k.start),fe.rotation.set(0,-.1,.05)):(fe.position.set(1.57,1.75,0),fe.rotation.set(0,-.1,.05)),fe.userData.sculptComponent={id:"bar-right",name:"bar-right",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"box",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:{parentId:"root",parentSocket:"bar-right-seat",localStart:[1.57,1.75,0],localEnd:[1.57,1.75,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.82,height:.28,depth:.44,units:"world",confidence:.85},transform:{position:[1.57,1.75,0],rotation:[0,-.1,.05]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"bar-right",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"bullion",materialLayers:["bullion"],deformations:[],joints:[],seams:[],localFeatures:[{id:"bullion-bevel-right",kind:"bevel",geometryEffect:"beveled trapezoid bullion block",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},fe.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"bar-right",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(fe),n["bar-right"]=fe;let Ae=k?new rt(k.endRadius,k.baseRadius,k.length,16,6):new jt(1,1,1,4,4,4);k||Ae.scale(.82,.28,.44);let ge=new Ve(Ae,t.bullion??new at({color:8947848}));ge.name="bar-right",k&&(ge.position.copy(k.midpoint),ge.quaternion.copy(k.quaternion)),ge.castShadow=i.castShadow??!0,ge.receiveShadow=i.receiveShadow??!0,ge.userData.sculptComponent={id:"bar-right",name:"bar-right",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"box",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:{parentId:"root",parentSocket:"bar-right-seat",localStart:[1.57,1.75,0],localEnd:[1.57,1.75,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.82,height:.28,depth:.44,units:"world",confidence:.85},transform:{position:[1.57,1.75,0],rotation:[0,-.1,.05]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"bar-right",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"bullion",materialLayers:["bullion"],deformations:[],joints:[],seams:[],localFeatures:[{id:"bullion-bevel-right",kind:"bevel",geometryEffect:"beveled trapezoid bullion block",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},fe.add(ge),s["bar-right"]=ge,a["bar-right"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["bar-right"]??(o["bar-right"]=[]),o["bar-right"].push(fe);let Re=yt({parentId:"root",parentSocket:"column-seat",localStart:[0,2.3,0],localEnd:[0,2.3,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]}),ze=new it;ze.name="finial-neck__pivot",ze.scale.set(1,1,1),Re?(ze.position.copy(Re.start),ze.rotation.set(0,0,0)):(ze.position.set(0,4.77,0),ze.rotation.set(0,0,0)),ze.userData.sculptComponent={id:"finial-neck",name:"finial-neck",level:"macro",role:"body",importance:.85,confidence:.88,primitive:"cylinder",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:{parentId:"root",parentSocket:"column-seat",localStart:[0,2.3,0],localEnd:[0,2.3,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.2,height:.65,depth:.2,units:"world",confidence:.7},transform:{position:[0,4.77,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"column",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"upper-neck",kind:"contour",geometryEffect:"solid connection from spindle to finial",confidence:.8}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},ze.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"column",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(ze),n["finial-neck"]=ze;let $e=Re?new rt(Re.endRadius,Re.baseRadius,Re.length,16,6):new rt(.5,.5,1,24,8);Re||$e.scale(.2,.65,.2);let Te=new Ve($e,t.gold??new at({color:8947848}));return Te.name="finial-neck",Re&&(Te.position.copy(Re.midpoint),Te.quaternion.copy(Re.quaternion)),Te.castShadow=i.castShadow??!0,Te.receiveShadow=i.receiveShadow??!0,Te.userData.sculptComponent={id:"finial-neck",name:"finial-neck",level:"macro",role:"body",importance:.85,confidence:.88,primitive:"cylinder",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:{parentId:"root",parentSocket:"column-seat",localStart:[0,2.3,0],localEnd:[0,2.3,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.2,height:.65,depth:.2,units:"world",confidence:.7},transform:{position:[0,4.77,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"column",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"upper-neck",kind:"contour",geometryEffect:"solid connection from spindle to finial",confidence:.8}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},ze.add(Te),s["finial-neck"]=Te,a["finial-neck"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o.column??(o.column=[]),o.column.push(ze),e.userData.sculptRuntime={nodes:n,meshes:s,sockets:r,colliders:a,destructionGroups:o},e.userData.lookDevTargets={qualityPriority:"reference-fidelity",materialPass:{albedoPaletteRequired:!0,roughnessVariationRequired:!0,normalOrBumpRequired:!0,localOverridesRequired:!0,minimumTextureResolution:1024,preferredTextureResolution:2048,independentMapChannels:["albedo","roughness","height","normal","ambient-occlusion"],requiredSurfaceFrequencyBands:["macro","meso","micro"],geometryReliefRequiredWhenSilhouetteAffected:!0,referencePbrExtraction:{requiredWhenSourceImagePresent:!0,targetThreshold:.7,stopOnLowConfidence:!0,script:"forge/stage1_intake/extract_pbr_evidence.py",acceptedLimitation:"Illustration of highly reflective homogeneous gold: exact maps cannot be recovered. Representative independent PBR channels and measured visual render review are used; no exact material recovery claim."},mustAvoid:["single flat albedo per material","uniform roughness","albedo texture reused as roughness/height/normal/AO","single-frequency random noise","plastic-looking smooth bark, stone, cloth, foliage, or aged material","local color/detail described only in prose without material masks","claiming exact PBR recovery when confidence is below the target threshold"]},lightingPass:{requiredTerms:["key light","fill light","rim or environment light","exposure","tone mapping","background","contact shadow"],mustAvoid:["ambient-only lighting","flat value range","missing contact shadow","reference lighting copied without separating material readability"]},screenshotReview:["Compare albedo palette and local color zones.","Compare roughness/normal/bump response under light.","Compare cavity dirt, edge wear, stains, moss, scratches, or other local masks.","Compare key/fill/rim structure, exposure, tone mapping, background, and contact shadows.","Capture a neutral-light render to verify material readability without reference lighting.","Capture a grazing-light close-up to expose flat normals, uniform roughness, tiling, and plastic highlights.","Capture a reference-matched render from the same camera framing as the source."]},e.userData.actionReadiness={note:"Use root.userData.sculptRuntime.nodes for transforms, sockets for attachments, colliders for physics proxies, and destructionGroups for breakable sets."},e}var Wr=new P;function vn(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;Wr.copy(e),Wr[n]=0,Wr.normalize();let c=.5*a/(a+o),h=1-Wr.angleTo(i)/l;return Math.sign(Wr[t])===1?h*c:o/(a+o)+c+c*(1-h)}var el=class i extends jt{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new P,c=new P,h=new P(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,g=u.length/6,v=new P,m=.5/a;for(let p=0,M=0;p<u.length;p+=3,M+=2)switch(l.fromArray(u,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),u[p+0]=h.x*Math.sign(l.x)+c.x*r,u[p+1]=h.y*Math.sign(l.y)+c.y*r,u[p+2]=h.z*Math.sign(l.z)+c.z*r,d[p+0]=c.x,d[p+1]=c.y,d[p+2]=c.z,Math.floor(p/g)){case 0:v.set(1,0,0),f[M+0]=vn(v,c,"z","y",r,n),f[M+1]=1-vn(v,c,"y","z",r,t);break;case 1:v.set(-1,0,0),f[M+0]=1-vn(v,c,"z","y",r,n),f[M+1]=1-vn(v,c,"y","z",r,t);break;case 2:v.set(0,1,0),f[M+0]=1-vn(v,c,"x","z",r,e),f[M+1]=vn(v,c,"z","x",r,n);break;case 3:v.set(0,-1,0),f[M+0]=1-vn(v,c,"x","z",r,e),f[M+1]=1-vn(v,c,"z","x",r,n);break;case 4:v.set(0,0,1),f[M+0]=1-vn(v,c,"x","y",r,e),f[M+1]=1-vn(v,c,"y","x",r,t);break;case 5:v.set(0,0,-1),f[M+0]=vn(v,c,"x","y",r,e),f[M+1]=1-vn(v,c,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};function Oc(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Ot,c=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Xd(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let v=0;v<a[h].length;++v)f.push(a[h][v][d]);let g=Xd(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function Xd(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new Qt(a,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<t;g++){let v=h.getComponent(d,g);o.setComponent(d+u,g,v)}}else a.set(h.array,l);l+=h.count*t}return s!==void 0&&(o.gpuType=s),o}var Xr=(i,e=72)=>new Ui(i.map(t=>new le(...t)),e),qd=i=>{let e=i.map(n=>n.index?n.toNonIndexed():n.clone()),t=Oc(e,!1);if(e.forEach(n=>n.dispose()),i.forEach(n=>n.dispose()),!t)throw new Error("Balance geometry attributes do not match");return t};function k_(i,e,t){let n=new Ss;for(let a=0;a<8;a++){let o=Math.PI/8+a*Math.PI/4,l=Math.cos(o)*i/2,c=Math.sin(o)*i/2;a===0?n.moveTo(l,c):n.lineTo(l,c)}n.closePath();let s=.012,r=new _r(n,{depth:e-2*s,steps:1,bevelEnabled:!0,bevelSize:s,bevelThickness:s,bevelSegments:3,curveSegments:1});return r.rotateX(-Math.PI/2),r.translate(0,-e/2+s,0),r.scale(1,1,t/i),r}function z_(i){let s=Array.from({length:25},(c,h)=>{let u=h/24*Math.PI*2;return new P(.033*Math.cos(u),.065*Math.sin(u),0)}),r=new Hn(s.slice(0,-1),!0,"centripetal"),a=new ti(r,24,.01,6,!0),o=Math.max(2,Math.round((i-.15)/.098)+1),l=[];for(let c=0;c<o;c++){let h=a.clone();h.rotateY(c%2?Math.PI/2:0),h.translate(0,-i/2+.075+c*(i-.15)/(o-1),0),l.push(h)}return a.dispose(),{geometry:qd(l),count:o}}function H_(){let i={G:[[[.85,.86],[.6,1],[.2,.95],[0,.7],[0,.25],[.2,0],[.7,0],[.9,.2],[.9,.45],[.55,.45]]],O:[[[.2,0],[0,.25],[0,.75],[.2,1],[.7,1],[.9,.75],[.9,.25],[.7,0],[.2,0]]],L:[[[0,1],[0,0],[.8,0]]],D:[[[0,0],[0,1],[.45,1],[.85,.75],[.85,.25],[.45,0],[0,0]]],9:[[[.85,.5],[.2,.5],[0,.7],[0,.9],[.2,1],[.65,1],[.85,.8],[.85,.25],[.65,0],[.1,0]]],".":[[[.35,0],[.36,.04]]]},e=[];for(let[t,n,s]of[["GOLD",.058,-.035],["999.9",.034,.045]]){let r=n*1.24,a=(t.length-1)*r+n*.9;[...t].forEach((o,l)=>i[o].forEach(c=>{let h=c.map(([d,f])=>new P(-a/2+l*r+d*n,.141,s-f*n)),u=new Hn(h,!1,"centripetal");e.push(new ti(u,Math.max(6,h.length*3),.0021,4,!1))}))}return qd(e)}function jd(i){let e={gold:new Gn({color:14923344,metalness:1,roughness:.19,envMapIntensity:1.15}),edge:new Gn({color:15583080,metalness:1,roughness:.14,envMapIntensity:1.2}),bullion:new Gn({color:15780188,metalness:1,roughness:.22,envMapIntensity:1.1}),stamp:new Gn({color:10911013,metalness:1,roughness:.32,envMapIntensity:.9})},t=new Set,n=new Set,s={parts:0,links:0,triangles:0};return i.traverse(r=>{if(!r.isMesh)return;let a=r.name,o=r.userData.sculptComponent;if(!o)return;(Array.isArray(r.material)?r.material:[r.material]).forEach(u=>{t.add(u);for(let d of Object.values(u))d?.isTexture&&n.add(d)});let c,h=e.gold;if(a==="root"||a==="foot-step"){let u=o.dimensions;c=k_(u.width,u.height,u.depth),h=e.edge}else if(a==="column")c=Xr([[.13,.22],[.16,.27],[.19,.32],[.23,.4],[.265,.51],[.28,.61],[.265,.69],[.21,.77],[.155,.87],[.15,.94],[.15,1.48],[.155,1.6],[.2,1.67],[.23,1.75],[.24,1.82],[.225,1.91],[.175,2.02],[.155,2.07],[.15,2.14],[.15,3.52],[.155,3.61],[.2,3.68],[.24,3.76],[.25,3.83],[.23,3.93],[.17,4.02],[.15,4.11],[.15,4.59]].map(([d,f])=>[d,f-2.3]),96);else if(a.startsWith("collar-"))c=Xr([[.15,-.1],[.185,-.1],[.215,-.095],[.24,-.077],[.253,-.049],[.257,0],[.253,.049],[.24,.077],[.215,.095],[.185,.1],[.15,.1]],80),h=e.edge;else if(a==="finial-neck")c=Xr([[.145,-.325],[.17,-.29],[.195,-.22],[.18,-.16],[.15,-.13],[.16,-.09],[.17,-.065],[.14,-.035],[.11,.035],[.095,.09],[.11,.14],[.14,.2],[.17,.26],[.18,.325]],80);else if(a==="finial")c=new Fi(.17,40,28),c.scale(1,1.12,1),h=e.edge;else if(a==="beam"){let u=o.geometryDescriptor.tubePath.points.map(d=>new P(...d));c=new ti(new Hn(u),96,.069,20,!1),c.scale(1,1,.8)}else if(a==="beam-center")c=Xr([[0,-.57],[.09,-.57],[.113,-.555],[.126,-.53],[.13,-.5],[.13,.5],[.126,.53],[.113,.555],[.09,.57],[0,.57]],80),h=e.edge;else if(a.startsWith("pan-"))c=Xr([[0,-.117],[.25,-.117],[.42,-.113],[.53,-.097],[.62,-.059],[.69,-.011],[.739,.044],[.765,.083],[.767,.095],[.757,.105],[.745,.1],[.721,.066],[.681,.018],[.615,-.033],[.53,-.071],[.42,-.087],[.25,-.092],[0,-.092]],96);else if(a.startsWith("rim-"))c=new pi(.756,.012,10,96),h=e.edge;else if(a.startsWith("chain-")){let u=o.attachment,d=new P(...u.localStart).distanceTo(new P(...u.localEnd)),f=z_(d);c=f.geometry,s.links+=f.count,r.userData.linkCount=f.count,h=e.edge}else if(a.startsWith("bar-")){let u=o.dimensions,d=new el(u.width,u.height,u.depth,3,.023),f=d.attributes.position;for(let m=0;m<f.count;m++){let p=1-.09*(f.getY(m)/u.height+.5);f.setX(m,f.getX(m)*p),f.setZ(m,f.getZ(m)*p)}d.computeVertexNormals();let g=H_(),v=[d,g].map(m=>m.index?m.toNonIndexed():m.clone());c=Oc(v,!0),v.forEach(m=>m.dispose()),d.dispose(),g.dispose(),h=[e.bullion,e.stamp]}c&&(r.geometry.dispose(),r.geometry=c),r.material=h,r.castShadow=!1,r.receiveShadow=!1,r.userData.websiteRefinement={pass:"blockout",approved:!1,source:"single-image, procedural geometry"},s.parts++,s.triangles+=r.geometry.index?r.geometry.index.count/3:r.geometry.attributes.position.count/3}),n.forEach(r=>r.dispose()),t.forEach(r=>r.dispose()),i.userData.websiteRefinement={...s,approved:!1,notes:"Hidden views and hallmark letterforms are inferred. Browser review pending; no subsequent sculpt pass unlocked."},i}function Yd(){let i=document.querySelector("#balance-viewport");if(!i)return;let e=document.querySelector("#balance-fallback"),t=document.querySelector("#scene-status"),n=document.querySelector("#balance-pause"),s=matchMedia("(prefers-reduced-motion: reduce)"),r,a,o,l,c,h=[],u=0,d=!0,f=!1,g=!1,v=s.matches,m=!1,p=0,M=0,R=null,b=!1,w=A=>{t.textContent=A};try{let ne=function(){if(m)return;let ie=Math.max(1,i.clientWidth),ve=Math.max(1,i.clientHeight);U.aspect=ie/ve,U.updateProjectionMatrix(),r.setSize(ie,ve,!1);let et=Math.max(5.7,4.9/U.aspect)/2/Math.tan(tn.degToRad(17))*1.12;U.position.normalize().multiplyScalar(et),o.update(),ee()},Z=function(ie){if(u=0,m||!d||document.hidden)return;let ve=M?Math.min(.05,(ie-M)/1e3):0;M=ie;let et=!v&&!g&&!f;if(et&&(p+=ve,H.position.y=Math.sin(p*.6)*.024,H.rotation.x=Math.sin(p*.45)*.012,H.rotation.y=Math.sin(p*.3)*.055,H.rotation.z=Math.sin(p*.6)*.009),R!==null){let ae=new ni().setFromVector3(U.position.clone().sub(o.target)),re=R-ae.theta;re=Math.atan2(Math.sin(re),Math.cos(re)),Math.abs(re)<.005?(R=null,b=!1):(ae.theta+=re*(v?1:.12),U.position.copy(new P().setFromSpherical(ae).add(o.target)))}let K=o.update();r.render(_,U),(et||f||K||b)&&ee()},ee=function(){!u&&!m&&d&&!document.hidden&&(u=requestAnimationFrame(Z))};r=new jo({antialias:!0,alpha:!0,powerPreference:"high-performance"}),r.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),r.setClearColor(0,0),r.outputColorSpace=Pt,r.toneMapping=Ps,r.toneMappingExposure=.95;let A=r.domElement;A.id="balance-canvas",A.tabIndex=0,A.setAttribute("role","img"),A.setAttribute("aria-label","Balan\xE7a dourada em 3D. Arraste horizontalmente para girar 360 graus. Use as setas do teclado para girar e a tecla Home para restaurar."),A.setAttribute("aria-describedby","scene-help"),A.style.touchAction="pan-y",i.append(A);let _=new Di,T=new Vi(r),C=new $o,I=[];for(let[ie,ve,et]of[[[-4,2,4],[2,7,.1],3],[[4,1,-2],[1,6,.1],2],[[0,6,1],[5,.1,3],2.5]]){let K=new Ve(new jt(...ve),new Li({color:new We(16774367).multiplyScalar(et)}));K.position.set(...ie),K.lookAt(0,1,0),C.add(K),I.push(K)}a=T.fromScene(C,.015),_.environment=a.texture,I.forEach(ie=>{C.remove(ie),ie.geometry.dispose(),ie.material.dispose()}),C.dispose(),T.dispose();let U=new kt(34,1,.1,100);U.position.set(3.2,2.1,14);let V=new Ts(16773596,408622,.65);_.add(V);let D=new Oi(16773852,2.6);D.position.set(-4,6,6),_.add(D);let O=new Oi(16767889,1.8);O.position.set(5,2,-4),_.add(O);let H=new it;_.add(H);let X=jd(Wd({castShadow:!1,receiveShadow:!1,textureSize:32}));X.position.y=-2.68,H.add(X),o=new Ko(U,A),o.enableDamping=!0,o.dampingFactor=.075,o.enablePan=!1,o.enableZoom=!1,o.minPolarAngle=.32,o.maxPolarAngle=Math.PI-.32,o.rotateSpeed=.65,o.target.set(0,0,0),o.update(),o.addEventListener("start",()=>{f=!0,R=null,b=!1,ee()}),o.addEventListener("end",()=>{f=!1,ee()}),o.addEventListener("change",ee);let W=()=>ne();"ResizeObserver"in window?(l=new ResizeObserver(W),l.observe(i)):(window.addEventListener("resize",W),h.push(()=>window.removeEventListener("resize",W))),"IntersectionObserver"in window&&(c=new IntersectionObserver(ie=>{d=ie[0].isIntersecting,d?ee():(cancelAnimationFrame(u),u=0,M=0)},{threshold:.03}),c.observe(i));let we=ie=>{let ve=new ni().setFromVector3(U.position.clone().sub(o.target));R=(R??ve.theta)+ie*Math.PI/4,b=!0,ee(),w(ie>0?"Vista girada 45 graus para a direita.":"Vista girada 45 graus para a esquerda.")},_e=()=>{U.position.set(3.2,2.1,14),R=null,b=!1,H.rotation.set(0,0,0),H.position.y=0,ne(),w("Perspectiva inicial restaurada.")},He=()=>{let ie=g||v;n.setAttribute("aria-pressed",String(ie)),n.textContent=ie?"Retomar balan\xE7o":"Pausar balan\xE7o",n.disabled=v},je=()=>{g=!g,He(),ee()};n.addEventListener("click",je),h.push(()=>n.removeEventListener("click",je)),document.querySelectorAll("[data-turn]").forEach(ie=>{let ve=()=>we(Number(ie.dataset.turn));ie.addEventListener("click",ve),h.push(()=>ie.removeEventListener("click",ve))});let Xe=document.querySelector("#balance-reset");Xe.addEventListener("click",_e),h.push(()=>Xe.removeEventListener("click",_e));let j=ie=>{(ie.key==="ArrowLeft"||ie.key==="ArrowRight")&&(ie.preventDefault(),we(ie.key==="ArrowLeft"?-1:1)),ie.key==="Home"&&(ie.preventDefault(),_e())};A.addEventListener("keydown",j),h.push(()=>A.removeEventListener("keydown",j));let J=ie=>{v=ie.detail.reduced||s.matches,o.enableDamping=!v,v&&(H.rotation.set(0,0,0),H.position.y=0),He(),ee()};document.addEventListener("azyra:motion",J),h.push(()=>document.removeEventListener("azyra:motion",J)),v=s.matches||document.body.classList.contains("reduced-motion"),o.enableDamping=!v;let ye=()=>{document.hidden?(cancelAnimationFrame(u),u=0,M=0):ee()};document.addEventListener("visibilitychange",ye),h.push(()=>document.removeEventListener("visibilitychange",ye));let Ne=ie=>{ie.preventDefault(),m=!0,cancelAnimationFrame(u),u=0,e.hidden=!1,A.hidden=!0,document.querySelectorAll(".balance-controls button").forEach(ve=>ve.disabled=!0),document.querySelector("#scene-help").textContent="Refer\xEAncia visual da balan\xE7a.",w("Visualiza\xE7\xE3o est\xE1tica. Recarregue a p\xE1gina para tentar retomar o 3D.")};A.addEventListener("webglcontextlost",Ne),h.push(()=>A.removeEventListener("webglcontextlost",Ne)),window.Azyra3D={root:H,model:X,camera:U,controls:o,turn:we,reset:_e,get state(){return{reduced:v,userPaused:g,visible:d,dragging:f}}},He(),ne(),r.render(_,U),e.hidden=!0,i.classList.add("is-ready"),w("3D pronto. Arraste para explorar 360 graus."),ee()}catch(A){m=!0,h.forEach(_=>_()),o?.dispose(),a?.dispose(),r?.dispose(),i.querySelector("canvas")?.remove(),e.hidden=!1,document.querySelectorAll(".balance-controls button").forEach(_=>_.disabled=!0),document.querySelector("#scene-help").textContent="Refer\xEAncia visual da balan\xE7a.",w("Visualiza\xE7\xE3o est\xE1tica dispon\xEDvel. Seu navegador n\xE3o iniciou a experi\xEAncia 3D."),console.warn("Azyra 3D unavailable:",A.message)}function S(){m=!0,cancelAnimationFrame(u),l?.disconnect(),c?.disconnect(),o?.dispose(),h.forEach(_=>_()),a?.dispose();let A=new Set;window.Azyra3D?.model.traverse(_=>{_.isMesh&&(_.geometry.dispose(),(Array.isArray(_.material)?_.material:[_.material]).forEach(C=>{A.has(C)||(A.add(C),C.dispose())}))}),r?.dispose()}window.addEventListener("pagehide",A=>{A.persisted||S()})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Yd,{once:!0}):Yd();})();
/*! For license information please see balance-3d.js.LEGAL.txt */

(()=>{var bi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},xi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},yh=0,Hl=1,bh=2;var ki=1,xh=2,Ds=3,qn=0,Ht=1,yn=2,jn=0,Ls=1,Gl=2,Vl=3,Wl=4,vh=5;var zi=100,Sh=101,Mh=102,wh=103,Eh=104,Th=200,Rh=201,Ah=202,Ch=203,Xl=204,ql=205,Ph=206,Ih=207,Dh=208,Lh=209,Nh=210,Uh=211,Fh=212,Oh=213,Bh=214,wa=0,Ea=1,Ta=2,fs=3,Ra=4,Aa=5,Ca=6,Pa=7,no=0,kh=1,zh=2,Nn=0,jl=1,Yl=2,Zl=3,Ns=4,Jl=5,Kl=6,$l=7;var Ql=300,vi=301,Hi=302,io=303,so=304,Ir=306,ni=1e3,Hn=1001,Ia=1002,Ut=1003,Hh=1004;var Dr=1005;var zt=1006,ro=1007;var Si=1008;var rn=1009,ec=1010,tc=1011,Us=1012,ao=1013,Un=1014,bn=1015,Fn=1016,oo=1017,lo=1018,Fs=1020,nc=35902,ic=35899,sc=1021,rc=1022,xn=1023,Gn=1026,Mi=1027,co=1028,ho=1029,wi=1030,uo=1031;var fo=1033,Lr=33776,Nr=33777,Ur=33778,Fr=33779,po=35840,mo=35841,go=35842,_o=35843,yo=36196,bo=37492,xo=37496,vo=37488,So=37489,Or=37490,Mo=37491,wo=37808,Eo=37809,To=37810,Ro=37811,Ao=37812,Co=37813,Po=37814,Io=37815,Do=37816,Lo=37817,No=37818,Uo=37819,Fo=37820,Oo=37821,Bo=36492,ko=36494,zo=36495,Ho=36283,Go=36284,Br=36285,Vo=36286;var tr=2300,Da=2301,va=2302,Pl=2303,Il=2400,Dl=2401,Ll=2402;var Gh=3200;var kr=0,Vh=1,Bt="",Pt="srgb",nr="srgb-linear",ir="linear",ht="srgb";var Sa=7680;var Wh=519,Xh=512,qh=513,jh=514,Wo=515,Yh=516,Zh=517,Xo=518,Jh=519,Kh=35044;var ac="300 es",An=2e3,ps=2001;function Jd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Kd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ms(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function $h(){let i=ms("canvas");return i.style.display="block",i}var Hc={},gs=null;function oc(...i){let e="THREE."+i.shift();gs?gs("log",e,...i):console.log(e,...i)}function Qh(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ve(...i){i=Qh(i);let e="THREE."+i.shift();if(gs)gs("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function qe(...i){i=Qh(i);let e="THREE."+i.shift();if(gs)gs("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Di(...i){let e=i.join(" ");e in Hc||(Hc[e]=!0,Ve(...i))}function ed(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var td={[wa]:Ea,[Ta]:Ca,[Ra]:Pa,[fs]:Aa,[Ea]:wa,[Ca]:Ta,[Pa]:Ra,[Aa]:fs},Cn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gc=1234567,Ks=Math.PI/180,_s=180/Math.PI;function Gi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]).toLowerCase()}function Ke(i,e,t){return Math.max(e,Math.min(t,i))}function lc(i,e){return(i%e+e)%e}function $d(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Qd(i,e,t){return i!==e?(t-i)/(e-i):0}function $s(i,e,t){return(1-t)*i+t*e}function eu(i,e,t,n){return $s(i,e,1-Math.exp(-t*n))}function tu(i,e=1){return e-Math.abs(lc(i,e*2)-e)}function nu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function iu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function su(i,e){return i+Math.floor(Math.random()*(e-i+1))}function ru(i,e){return i+Math.random()*(e-i)}function au(i){return i*(.5-Math.random())}function ou(i){i!==void 0&&(Gc=i);let e=Gc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function lu(i){return i*Ks}function cu(i){return i*_s}function hu(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function du(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function uu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function fu(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),m=a((n-e)/2);switch(s){case"XYX":i.set(o*h,c*u,c*d,o*l);break;case"YZY":i.set(c*d,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*d,o*h,o*l);break;case"XZX":i.set(o*h,c*m,c*f,o*l);break;case"YXY":i.set(c*f,o*h,c*m,o*l);break;case"ZYZ":i.set(c*m,c*f,o*h,o*l);break;default:Ve("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ds(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function $t(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var tn={DEG2RAD:Ks,RAD2DEG:_s,generateUUID:Gi,clamp:Ke,euclideanModulo:lc,mapLinear:$d,inverseLerp:Qd,lerp:$s,damp:eu,pingpong:tu,smoothstep:nu,smootherstep:iu,randInt:su,randFloat:ru,randFloatSpread:au,seededRandom:ou,degToRad:lu,radToDeg:cu,isPowerOfTwo:hu,ceilPowerOfTwo:du,floorPowerOfTwo:uu,setQuaternionFromProperEuler:fu,normalize:$t,denormalize:ds},pc=class pc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};pc.prototype.isVector2=!0;var oe=pc,en=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],m=r[a+2],x=r[a+3];if(u!==x||c!==d||l!==f||h!==m){let g=c*d+l*f+h*m+u*x;g<0&&(d=-d,f=-f,m=-m,x=-x,g=-g);let p=1-o;if(g<.9995){let M=Math.acos(g),R=Math.sin(M);p=Math.sin(p*M)/R,o=Math.sin(o*M)/R,c=c*p+d*o,l=l*p+f*o,h=h*p+m*o,u=u*p+x*o}else{c=c*p+d*o,l=l*p+f*o,h=h*p+m*o,u=u*p+x*o;let M=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=M,l*=M,h*=M,u*=M}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return e[t]=o*m+h*u+c*f-l*d,e[t+1]=c*m+h*d+l*u-o*f,e[t+2]=l*m+h*f+o*d-c*u,e[t+3]=h*m-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),f=c(s/2),m=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:Ve("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},mc=class mc{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return al.copy(this).projectOnVector(e),this.sub(al)}reflect(e){return this.sub(al.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};mc.prototype.isVector3=!0;var I=mc,al=new I,Vc=new en,gc=class gc{constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],x=s[0],g=s[3],p=s[6],M=s[1],R=s[4],b=s[7],w=s[2],S=s[5],A=s[8];return r[0]=a*x+o*M+c*w,r[3]=a*g+o*R+c*S,r[6]=a*p+o*b+c*A,r[1]=l*x+h*M+u*w,r[4]=l*g+h*R+u*S,r[7]=l*p+h*b+u*A,r[2]=d*x+f*M+m*w,r[5]=d*g+f*R+m*S,r[8]=d*p+f*b+m*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,m=t*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=u*x,e[1]=(s*l-h*n)*x,e[2]=(o*n-s*a)*x,e[3]=d*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-o*t)*x,e[6]=f*x,e[7]=(n*c-l*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Di("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ol.makeScale(e,t)),this}rotate(e){return Di("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ol.makeRotation(-e)),this}translate(e,t){return Di("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ol.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};gc.prototype.isMatrix3=!0;var Je=gc,ol=new Je,Wc=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xc=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pu(){let i={enabled:!0,workingColorSpace:nr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ht&&(s.r=ti(s.r),s.g=ti(s.g),s.b=ti(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ht&&(s.r=us(s.r),s.g=us(s.g),s.b=us(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Bt?ir:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Di("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Di("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[nr]:{primaries:e,whitePoint:n,transfer:ir,toXYZ:Wc,fromXYZ:Xc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Pt},outputColorSpaceConfig:{drawingBufferColorSpace:Pt}},[Pt]:{primaries:e,whitePoint:n,transfer:ht,toXYZ:Wc,fromXYZ:Xc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Pt}}}),i}var st=pu();function ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function us(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ji,La=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ji===void 0&&(Ji=ms("canvas")),Ji.width=e.width,Ji.height=e.height;let s=Ji.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ji}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ms("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ti(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ti(t[n]/255)*255):t[n]=ti(t[n]);return{data:t,width:e.width,height:e.height}}else return Ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},mu=0,ys=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:mu++}),this.uuid=Gi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ll(s[a].image)):r.push(ll(s[a]))}else r=ll(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function ll(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?La.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ve("Texture: Unable to serialize Texture."),{})}var gu=0,cl=new I,qt=class i extends Cn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Hn,s=Hn,r=zt,a=Si,o=xn,c=rn,l=i.DEFAULT_ANISOTROPY,h=Bt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gu++}),this.uuid=Gi(),this.name="",this.source=new ys(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(cl).x}get height(){return this.source.getSize(cl).y}get depth(){return this.source.getSize(cl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ve(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ve(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ql)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ni:e.x=e.x-Math.floor(e.x);break;case Hn:e.x=e.x<0?0:1;break;case Ia:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ni:e.y=e.y-Math.floor(e.y);break;case Hn:e.y=e.y<0?0:1;break;case Ia:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=Ql;qt.DEFAULT_ANISOTROPY=1;var _c=class _c{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],x=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let R=(l+1)/2,b=(f+1)/2,w=(p+1)/2,S=(h+d)/4,A=(u+x)/4,y=(m+g)/4;return R>b&&R>w?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=S/n,r=A/n):b>w?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=S/s,r=y/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=A/r,s=y/r),this.set(n,s,r,t),this}let M=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(u-x)/M,this.z=(d-h)/M,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};_c.prototype.isVector4=!0;var vt=_c,Na=class extends Cn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new qt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new ys(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},sn=class extends Na{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},sr=class extends qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ua=class extends qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var to=class to{constructor(e,t,n,s,r,a,o,c,l,h,u,d,f,m,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,u,d,f,m,x,g)}set(e,t,n,s,r,a,o,c,l,h,u,d,f,m,x,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new to().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Ki.setFromMatrixColumn(e,0).length(),r=1/Ki.setFromMatrixColumn(e,1).length(),a=1/Ki.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,m=o*h,x=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+m*l,t[5]=d-x*l,t[9]=-o*c,t[2]=x-d*l,t[6]=m+f*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,m=l*h,x=l*u;t[0]=d+x*o,t[4]=m*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-m,t[6]=x+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,m=l*h,x=l*u;t[0]=d-x*o,t[4]=-a*u,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,f=a*u,m=o*h,x=o*u;t[0]=c*h,t[4]=m*l-f,t[8]=d*l+x,t[1]=c*u,t[5]=x*l+d,t[9]=f*l-m,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,f=a*l,m=o*c,x=o*l;t[0]=c*h,t[4]=x-d*u,t[8]=m*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+m,t[10]=d-x*u}else if(e.order==="XZY"){let d=a*c,f=a*l,m=o*c,x=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+x,t[5]=a*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=o*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_u,e,yu)}lookAt(e,t,n){let s=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),oi.crossVectors(n,cn),oi.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),oi.crossVectors(n,cn)),oi.normalize(),Qr.crossVectors(cn,oi),s[0]=oi.x,s[4]=Qr.x,s[8]=cn.x,s[1]=oi.y,s[5]=Qr.y,s[9]=cn.y,s[2]=oi.z,s[6]=Qr.z,s[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],x=n[6],g=n[10],p=n[14],M=n[3],R=n[7],b=n[11],w=n[15],S=s[0],A=s[4],y=s[8],T=s[12],P=s[1],C=s[5],U=s[9],G=s[13],D=s[2],O=s[6],z=s[10],j=s[14],ne=s[3],X=s[7],Z=s[11],ie=s[15];return r[0]=a*S+o*P+c*D+l*ne,r[4]=a*A+o*C+c*O+l*X,r[8]=a*y+o*U+c*z+l*Z,r[12]=a*T+o*G+c*j+l*ie,r[1]=h*S+u*P+d*D+f*ne,r[5]=h*A+u*C+d*O+f*X,r[9]=h*y+u*U+d*z+f*Z,r[13]=h*T+u*G+d*j+f*ie,r[2]=m*S+x*P+g*D+p*ne,r[6]=m*A+x*C+g*O+p*X,r[10]=m*y+x*U+g*z+p*Z,r[14]=m*T+x*G+g*j+p*ie,r[3]=M*S+R*P+b*D+w*ne,r[7]=M*A+R*C+b*O+w*X,r[11]=M*y+R*U+b*z+w*Z,r[15]=M*T+R*G+b*j+w*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],x=e[7],g=e[11],p=e[15],M=c*f-l*d,R=o*f-l*u,b=o*d-c*u,w=a*f-l*h,S=a*d-c*h,A=a*u-o*h;return t*(x*M-g*R+p*b)-n*(m*M-g*w+p*S)+s*(m*R-x*w+p*A)-r*(m*b-x*S+g*A)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],x=e[13],g=e[14],p=e[15],M=t*o-n*a,R=t*c-s*a,b=t*l-r*a,w=n*c-s*o,S=n*l-r*o,A=s*l-r*c,y=h*x-u*m,T=h*g-d*m,P=h*p-f*m,C=u*g-d*x,U=u*p-f*x,G=d*p-f*g,D=M*G-R*U+b*C+w*P-S*T+A*y;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/D;return e[0]=(o*G-c*U+l*C)*O,e[1]=(s*U-n*G-r*C)*O,e[2]=(x*A-g*S+p*w)*O,e[3]=(d*S-u*A-f*w)*O,e[4]=(c*P-a*G-l*T)*O,e[5]=(t*G-s*P+r*T)*O,e[6]=(g*b-m*A-p*R)*O,e[7]=(h*A-d*b+f*R)*O,e[8]=(a*U-o*P+l*y)*O,e[9]=(n*P-t*U-r*y)*O,e[10]=(m*S-x*b+p*M)*O,e[11]=(u*b-h*S-f*M)*O,e[12]=(o*T-a*C-c*y)*O,e[13]=(t*C-n*T+s*y)*O,e[14]=(x*R-m*w-g*M)*O,e[15]=(h*w-u*R+d*M)*O,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,m=r*u,x=a*h,g=a*u,p=o*u,M=c*l,R=c*h,b=c*u,w=n.x,S=n.y,A=n.z;return s[0]=(1-(x+p))*w,s[1]=(f+b)*w,s[2]=(m-R)*w,s[3]=0,s[4]=(f-b)*S,s[5]=(1-(d+p))*S,s[6]=(g+M)*S,s[7]=0,s[8]=(m+R)*A,s[9]=(g-M)*A,s[10]=(1-(d+x))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Ki.set(s[0],s[1],s[2]).length(),o=Ki.set(s[4],s[5],s[6]).length(),c=Ki.set(s[8],s[9],s[10]).length();r<0&&(a=-a),En.copy(this);let l=1/a,h=1/o,u=1/c;return En.elements[0]*=l,En.elements[1]*=l,En.elements[2]*=l,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=u,En.elements[9]*=u,En.elements[10]*=u,t.setFromRotationMatrix(En),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=An,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),m,x;if(c)m=r/(a-r),x=a*r/(a-r);else if(o===An)m=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===ps)m=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=An,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),m,x;if(c)m=1/(a-r),x=a/(a-r);else if(o===An)m=-2/(a-r),x=-(a+r)/(a-r);else if(o===ps)m=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};to.prototype.isMatrix4=!0;var gt=to,Ki=new I,En=new gt,_u=new I(0,0,0),yu=new I(1,1,1),oi=new I,Qr=new I,cn=new I,qc=new gt,jc=new en,Vn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return qc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jc.setFromEuler(this),this.setFromQuaternion(jc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Vn.DEFAULT_ORDER="XYZ";var rr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},bu=0,Yc=new I,$i=new en,Jn=new gt,ea=new I,Ws=new I,xu=new I,vu=new en,Zc=new I(1,0,0),Jc=new I(0,1,0),Kc=new I(0,0,1),$c={type:"added"},Su={type:"removed"},Qi={type:"childadded",child:null},hl={type:"childremoved",child:null},Ft=class i extends Cn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bu++}),this.uuid=Gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new I,t=new Vn,n=new en,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new gt},normalMatrix:{value:new Je}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.multiply($i),this}rotateOnWorldAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.premultiply($i),this}rotateX(e){return this.rotateOnAxis(Zc,e)}rotateY(e){return this.rotateOnAxis(Jc,e)}rotateZ(e){return this.rotateOnAxis(Kc,e)}translateOnAxis(e,t){return Yc.copy(e).applyQuaternion(this.quaternion),this.position.add(Yc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zc,e)}translateY(e){return this.translateOnAxis(Jc,e)}translateZ(e){return this.translateOnAxis(Kc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ea.copy(e):ea.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(Ws,ea,this.up):Jn.lookAt(ea,Ws,this.up),this.quaternion.setFromRotationMatrix(Jn),s&&(Jn.extractRotation(s.matrixWorld),$i.setFromRotationMatrix(Jn),this.quaternion.premultiply($i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($c),Qi.child=e,this.dispatchEvent(Qi),Qi.child=null):qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Su),hl.child=e,this.dispatchEvent(hl),hl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($c),Qi.child=e,this.dispatchEvent(Qi),Qi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,e,xu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,vu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ft.DEFAULT_UP=new I(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var it=class extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}},Mu={type:"move"},bs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new it,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new it,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new it,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),p=this._getHandJoint(l,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Mu)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new it;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},nd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},ta={h:0,s:0,l:0};function dl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var We=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=st.workingColorSpace){return this.r=e,this.g=t,this.b=n,st.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=st.workingColorSpace){if(e=lc(e,1),t=Ke(t,0,1),n=Ke(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=dl(a,r,e+1/3),this.g=dl(a,r,e),this.b=dl(a,r,e-1/3)}return st.colorSpaceToWorking(this,s),this}setStyle(e,t=Pt){function n(r){r!==void 0&&parseFloat(r)<1&&Ve("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ve("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pt){let n=nd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ti(e.r),this.g=ti(e.g),this.b=ti(e.b),this}copyLinearToSRGB(e){return this.r=us(e.r),this.g=us(e.g),this.b=us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return st.workingToColorSpace(Xt.copy(this),e),Math.round(Ke(Xt.r*255,0,255))*65536+Math.round(Ke(Xt.g*255,0,255))*256+Math.round(Ke(Xt.b*255,0,255))}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.workingToColorSpace(Xt.copy(this),t);let n=Xt.r,s=Xt.g,r=Xt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=st.workingColorSpace){return st.workingToColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Pt){st.workingToColorSpace(Xt.copy(this),e);let t=Xt.r,n=Xt.g,s=Xt.b;return e!==Pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(li),this.setHSL(li.h+e,li.s+t,li.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(li),e.getHSL(ta);let n=$s(li.h,ta.h,t),s=$s(li.s,ta.s,t),r=$s(li.l,ta.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xt=new We;We.NAMES=nd;var Li=class extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Tn=new I,Kn=new I,ul=new I,$n=new I,es=new I,ts=new I,Qc=new I,fl=new I,pl=new I,ml=new I,gl=new vt,_l=new vt,yl=new vt,ui=class i{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Tn.subVectors(e,t),s.cross(Tn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Tn.subVectors(s,t),Kn.subVectors(n,t),ul.subVectors(e,t);let a=Tn.dot(Tn),o=Tn.dot(Kn),c=Tn.dot(ul),l=Kn.dot(Kn),h=Kn.dot(ul),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,m=(a*h-o*c)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,$n)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,$n.x),c.addScaledVector(a,$n.y),c.addScaledVector(o,$n.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return gl.setScalar(0),_l.setScalar(0),yl.setScalar(0),gl.fromBufferAttribute(e,t),_l.fromBufferAttribute(e,n),yl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(gl,r.x),a.addScaledVector(_l,r.y),a.addScaledVector(yl,r.z),a}static isFrontFacing(e,t,n,s){return Tn.subVectors(n,t),Kn.subVectors(e,t),Tn.cross(Kn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),Tn.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;es.subVectors(s,n),ts.subVectors(r,n),fl.subVectors(e,n);let c=es.dot(fl),l=ts.dot(fl);if(c<=0&&l<=0)return t.copy(n);pl.subVectors(e,s);let h=es.dot(pl),u=ts.dot(pl);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(es,a);ml.subVectors(e,r);let f=es.dot(ml),m=ts.dot(ml);if(m>=0&&f<=m)return t.copy(r);let x=f*l-c*m;if(x<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(ts,o);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return Qc.subVectors(r,s),o=(u-h)/(u-h+(f-m)),t.copy(s).addScaledVector(Qc,o);let p=1/(g+x+d);return a=x*p,o=d*p,t.copy(n).addScaledVector(es,a).addScaledVector(ts,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Pn=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Rn):Rn.fromBufferAttribute(r,a),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),na.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),na.copy(n.boundingBox)),na.applyMatrix4(e.matrixWorld),this.union(na)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xs),ia.subVectors(this.max,Xs),ns.subVectors(e.a,Xs),is.subVectors(e.b,Xs),ss.subVectors(e.c,Xs),ci.subVectors(is,ns),hi.subVectors(ss,is),Ri.subVectors(ns,ss);let t=[0,-ci.z,ci.y,0,-hi.z,hi.y,0,-Ri.z,Ri.y,ci.z,0,-ci.x,hi.z,0,-hi.x,Ri.z,0,-Ri.x,-ci.y,ci.x,0,-hi.y,hi.x,0,-Ri.y,Ri.x,0];return!bl(t,ns,is,ss,ia)||(t=[1,0,0,0,1,0,0,0,1],!bl(t,ns,is,ss,ia))?!1:(sa.crossVectors(ci,hi),t=[sa.x,sa.y,sa.z],bl(t,ns,is,ss,ia))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Qn=[new I,new I,new I,new I,new I,new I,new I,new I],Rn=new I,na=new Pn,ns=new I,is=new I,ss=new I,ci=new I,hi=new I,Ri=new I,Xs=new I,ia=new I,sa=new I,Ai=new I;function bl(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ai.fromArray(i,r);let o=s.x*Math.abs(Ai.x)+s.y*Math.abs(Ai.y)+s.z*Math.abs(Ai.z),c=e.dot(Ai),l=t.dot(Ai),h=n.dot(Ai);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Ct=new I,ra=new oe,wu=0,Qt=class extends Cn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Kh,this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ra.fromBufferAttribute(this,t),ra.applyMatrix3(e),this.setXY(t,ra.x,ra.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ds(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ds(t,this.array)),t}setX(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ds(t,this.array)),t}setY(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ds(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ds(t,this.array)),t}setW(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array),s=$t(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array),s=$t(s,this.array),r=$t(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var ar=class extends Qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var or=class extends Qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var dt=class extends Qt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Eu=new Pn,qs=new I,xl=new I,fi=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Eu.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qs.subVectors(e,this.center);let t=qs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(qs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qs.copy(e.center).add(xl)),this.expandByPoint(qs.copy(e.center).sub(xl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Tu=0,_n=new gt,vl=new Ft,rs=new I,hn=new Pn,js=new Pn,Nt=new I,Ot=class i extends Cn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tu++}),this.uuid=Gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jd(e)?or:ar)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,t,n){return _n.makeTranslation(e,t,n),this.applyMatrix4(_n),this}scale(e,t,n){return _n.makeScale(e,t,n),this.applyMatrix4(_n),this}lookAt(e){return vl.lookAt(e),vl.updateMatrix(),this.applyMatrix4(vl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new dt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];js.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(hn.min,js.min),hn.expandByPoint(Nt),Nt.addVectors(hn.max,js.max),hn.expandByPoint(Nt)):(hn.expandByPoint(js.min),hn.expandByPoint(js.max))}hn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Nt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Nt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Nt.fromBufferAttribute(o,l),c&&(rs.fromBufferAttribute(e,l),Nt.add(rs)),s=Math.max(s,n.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Qt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let y=0;y<n.count;y++)o[y]=new I,c[y]=new I;let l=new I,h=new I,u=new I,d=new oe,f=new oe,m=new oe,x=new I,g=new I;function p(y,T,P){l.fromBufferAttribute(n,y),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,P),d.fromBufferAttribute(r,y),f.fromBufferAttribute(r,T),m.fromBufferAttribute(r,P),h.sub(l),u.sub(l),f.sub(d),m.sub(d);let C=1/(f.x*m.y-m.x*f.y);isFinite(C)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(C),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(C),o[y].add(x),o[T].add(x),o[P].add(x),c[y].add(g),c[T].add(g),c[P].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let y=0,T=M.length;y<T;++y){let P=M[y],C=P.start,U=P.count;for(let G=C,D=C+U;G<D;G+=3)p(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let R=new I,b=new I,w=new I,S=new I;function A(y){w.fromBufferAttribute(s,y),S.copy(w);let T=o[y];R.copy(T),R.sub(w.multiplyScalar(w.dot(T))).normalize(),b.crossVectors(S,T);let C=b.dot(c[y])<0?-1:1;a.setXYZW(y,R.x,R.y,R.z,C)}for(let y=0,T=M.length;y<T;++y){let P=M[y],C=P.start,U=P.count;for(let G=C,D=C+U;G<D;G+=3)A(e.getX(G+0)),A(e.getX(G+1)),A(e.getX(G+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new I,r=new I,a=new I,o=new I,c=new I,l=new I,h=new I,u=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,m=0;for(let x=0,g=c.length;x<g;x++){o.isInterleavedBufferAttribute?f=c[x]*o.data.stride+o.offset:f=c[x]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new Qt(d,h,u)}if(this.index===null)return Ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Sl=new I,Ru=new I,Au=new Je,dn=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Sl.subVectors(n,t).cross(Ru.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Sl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Au.getNormalMatrix(e),s=this.coplanarPoint(Sl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Cu=0,Wn=class extends Cn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cu++}),this.uuid=Gi(),this.name="",this.type="Material",this.blending=Ls,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xl,this.blendDst=ql,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sa,this.stencilZFail=Sa,this.stencilZPass=Sa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ve(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ve(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new We().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new dn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new oe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new oe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var ei=new I,Ml=new I,aa=new I,oa=new I,xs=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ei.copy(this.origin).addScaledVector(this.direction,t),ei.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ml.copy(e).add(t).multiplyScalar(.5),aa.copy(t).sub(e).normalize(),oa.copy(this.origin).sub(Ml);let r=e.distanceTo(t)*.5,a=-this.direction.dot(aa),o=oa.dot(this.direction),c=-oa.dot(aa),l=oa.lengthSq(),h=Math.abs(1-a*a),u,d,f,m;if(h>0)if(u=a*c-o,d=a*o-c,m=r*h,u>=0)if(d>=-m)if(d<=m){let x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ml).addScaledVector(aa,d),f}intersectSphere(e,t){if(e.radius<0)return null;ei.subVectors(e.center,this.origin);let n=ei.dot(this.direction),s=ei.dot(ei)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ei)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,m=t.x-a.x,x=t.y-a.y,g=t.z-a.z,p=n.x-a.x,M=n.y-a.y,R=n.z-a.z,b=Math.abs(c),w=Math.abs(l),S=Math.abs(h),A,y,T,P,C,U,G,D,O,z,j,ne;if(b>=w&&b>=S?(T=c,U=u,O=m,ne=p,c>=0?(A=l,y=h,P=d,C=f,G=x,D=g,z=M,j=R):(A=h,y=l,P=f,C=d,G=g,D=x,z=R,j=M)):w>=S?(T=l,U=d,O=x,ne=M,l>=0?(A=h,y=c,P=f,C=u,G=g,D=m,z=R,j=p):(A=c,y=h,P=u,C=f,G=m,D=g,z=p,j=R)):(T=h,U=f,O=g,ne=R,h>=0?(A=c,y=l,P=u,C=d,G=m,D=x,z=p,j=M):(A=l,y=c,P=d,C=u,G=x,D=m,z=M,j=p)),T===0)return null;let X=A/T,Z=y/T,ie=1/T,ve=P-X*U,_e=C-Z*U,He=G-X*O,Xe=D-Z*O,je=z-X*ne,W=j-Z*ne,K=je*Xe-W*He,ye=ve*W-_e*je,Ue=He*_e-Xe*ve;if(s){if(K<0||ye<0||Ue<0)return null}else if((K<0||ye<0||Ue<0)&&(K>0||ye>0||Ue>0))return null;let ge=K+ye+Ue;if(ge===0)return null;let De=ie*(K*U+ye*O+Ue*ne);return(ge>0?De<0:De>0)?null:this.at(De/ge,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ni=class extends Wn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=no,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},eh=new gt,Ci=new xs,la=new fi,th=new I,ca=new I,ha=new I,da=new I,wl=new I,ua=new I,nh=new I,fa=new I,Ge=class extends Ft{constructor(e=new Ot,t=new Ni){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ua.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(wl.fromBufferAttribute(u,e),a?ua.addScaledVector(wl,h):ua.addScaledVector(wl.sub(t),h))}t.add(ua)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),la.copy(n.boundingSphere),la.applyMatrix4(r),Ci.copy(e.ray).recast(e.near),!(la.containsPoint(Ci.origin)===!1&&(Ci.intersectSphere(la,th)===null||Ci.origin.distanceToSquared(th)>(e.far-e.near)**2))&&(eh.copy(r).invert(),Ci.copy(e.ray).applyMatrix4(eh),!(n.boundingBox!==null&&Ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ci)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=a[g.materialIndex],M=Math.max(g.start,f.start),R=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let b=M,w=R;b<w;b+=3){let S=o.getX(b),A=o.getX(b+1),y=o.getX(b+2);s=pa(this,p,e,n,l,h,u,S,A,y),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let M=o.getX(g),R=o.getX(g+1),b=o.getX(g+2);s=pa(this,a,e,n,l,h,u,M,R,b),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=a[g.materialIndex],M=Math.max(g.start,f.start),R=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let b=M,w=R;b<w;b+=3){let S=b,A=b+1,y=b+2;s=pa(this,p,e,n,l,h,u,S,A,y),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let M=g,R=g+1,b=g+2;s=pa(this,a,e,n,l,h,u,M,R,b),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Pu(i,e,t,n,s,r,a,o){let c;if(e.side===Ht?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===qn,o),c===null)return null;fa.copy(o),fa.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(fa);return l<t.near||l>t.far?null:{distance:l,point:fa.clone(),object:i}}function pa(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,ca),i.getVertexPosition(c,ha),i.getVertexPosition(l,da);let h=Pu(i,e,t,n,ca,ha,da,nh);if(h){let u=new I;ui.getBarycoord(nh,ca,ha,da,u),s&&(h.uv=ui.getInterpolatedAttribute(s,o,c,l,u,new oe)),r&&(h.uv1=ui.getInterpolatedAttribute(r,o,c,l,u,new oe)),a&&(h.normal=ui.getInterpolatedAttribute(a,o,c,l,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new I,materialIndex:0};ui.getNormal(ca,ha,da,d.normal),h.face=d,h.barycoord=u}return h}var lr=class extends qt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Ut,h=Ut,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vs=class extends Qt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},as=new gt,ih=new gt,ma=[],sh=new Pn,Iu=new gt,Ys=new Ge,Zs=new fi,cr=class extends Ge{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new vs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Iu)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Pn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,as),sh.copy(e.boundingBox).applyMatrix4(as),this.boundingBox.union(sh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new fi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,as),Zs.copy(e.boundingSphere).applyMatrix4(as),this.boundingSphere.union(Zs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Ys.geometry=this.geometry,Ys.material=this.material,Ys.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zs.copy(this.boundingSphere),Zs.applyMatrix4(n),e.ray.intersectsSphere(Zs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,as),ih.multiplyMatrices(n,as),Ys.matrixWorld=ih,Ys.raycast(e,ma);for(let a=0,o=ma.length;a<o;a++){let c=ma[a];c.instanceId=r,c.object=this,t.push(c)}ma.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new vs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new lr(new Float32Array(s*this.count),s,this.count,co,bn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Pi=new fi,Du=new oe(.5,.5),ga=new I,Ss=class{constructor(e=new dn,t=new dn,n=new dn,s=new dn,r=new dn,a=new dn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=An,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],m=r[8],x=r[9],g=r[10],p=r[11],M=r[12],R=r[13],b=r[14],w=r[15];if(s[0].setComponents(l-a,f-h,p-m,w-M).normalize(),s[1].setComponents(l+a,f+h,p+m,w+M).normalize(),s[2].setComponents(l+o,f+u,p+x,w+R).normalize(),s[3].setComponents(l-o,f-u,p-x,w-R).normalize(),n)s[4].setComponents(c,d,g,b).normalize(),s[5].setComponents(l-c,f-d,p-g,w-b).normalize();else if(s[4].setComponents(l-c,f-d,p-g,w-b).normalize(),t===An)s[5].setComponents(l+c,f+d,p+g,w+b).normalize();else if(t===ps)s[5].setComponents(c,d,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(e){Pi.center.set(0,0,0);let t=Du.distanceTo(e.center);return Pi.radius=.7071067811865476+t,Pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ga.x=s.normal.x>0?e.max.x:e.min.x,ga.y=s.normal.y>0?e.max.y:e.min.y,ga.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ga)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var hr=class extends qt{constructor(e=[],t=vi,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},dr=class extends qt{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var pi=class extends qt{constructor(e,t,n=Un,s,r,a,o=Ut,c=Ut,l,h=Gn,u=1){if(h!==Gn&&h!==Mi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ys(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Fa=class extends pi{constructor(e,t=Un,n=vi,s,r,a=Ut,o=Ut,c,l=Gn){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ur=class extends qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},jt=class i extends Ot{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,s,a,2),m("x","z","y",1,-1,e,n,-t,s,a,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(u,2));function m(x,g,p,M,R,b,w,S,A,y,T){let P=b/A,C=w/y,U=b/2,G=w/2,D=S/2,O=A+1,z=y+1,j=0,ne=0,X=new I;for(let Z=0;Z<z;Z++){let ie=Z*C-G;for(let ve=0;ve<O;ve++){let _e=ve*P-U;X[x]=_e*M,X[g]=ie*R,X[p]=D,l.push(X.x,X.y,X.z),X[x]=0,X[g]=0,X[p]=S>0?1:-1,h.push(X.x,X.y,X.z),u.push(ve/A),u.push(1-Z/y),j+=1}}for(let Z=0;Z<y;Z++)for(let ie=0;ie<A;ie++){let ve=d+ie+O*Z,_e=d+ie+O*(Z+1),He=d+(ie+1)+O*(Z+1),Xe=d+(ie+1)+O*Z;c.push(ve,_e,Xe),c.push(_e,He,Xe),ne+=6}o.addGroup(f,ne,T),f+=ne,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var nt=class i extends Ot{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,x=[],g=n/2,p=0;M(),a===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(h),this.setAttribute("position",new dt(u,3)),this.setAttribute("normal",new dt(d,3)),this.setAttribute("uv",new dt(f,2));function M(){let b=new I,w=new I,S=0,A=(t-e)/n;for(let y=0;y<=r;y++){let T=[],P=y/r,C=P*(t-e)+e;for(let U=0;U<=s;U++){let G=U/s,D=G*c+o,O=Math.sin(D),z=Math.cos(D);w.x=C*O,w.y=-P*n+g,w.z=C*z,u.push(w.x,w.y,w.z),b.set(O,A,z).normalize(),d.push(b.x,b.y,b.z),f.push(G,1-P),T.push(m++)}x.push(T)}for(let y=0;y<s;y++)for(let T=0;T<r;T++){let P=x[T][y],C=x[T+1][y],U=x[T+1][y+1],G=x[T][y+1];(e>0||T!==0)&&(h.push(P,C,G),S+=3),(t>0||T!==r-1)&&(h.push(C,U,G),S+=3)}l.addGroup(p,S,0),p+=S}function R(b){let w=m,S=new oe,A=new I,y=0,T=b===!0?e:t,P=b===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,g*P,0),d.push(0,P,0),f.push(.5,.5),m++;let C=m;for(let U=0;U<=s;U++){let D=U/s*c+o,O=Math.cos(D),z=Math.sin(D);A.x=T*z,A.y=g*P,A.z=T*O,u.push(A.x,A.y,A.z),d.push(0,P,0),S.x=O*.5+.5,S.y=z*.5*P+.5,f.push(S.x,S.y),m++}for(let U=0;U<s;U++){let G=w+U,D=C+U;b===!0?h.push(D,D+1,G):h.push(D+1,D,G),y+=3}l.addGroup(p,y,b===!0?1:2),p+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var un=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ve("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new oe:new I);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new I,s=[],r=[],a=[],o=new I,c=new gt;for(let f=0;f<=e;f++){let m=f/e;s[f]=this.getTangentAt(m,new I)}r[0]=new I,a[0]=new I;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(Ke(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,m))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Ke(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],f*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ms=class extends un{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new oe){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Oa=class extends Ms{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function cc(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var rh=new I,ah=new I,El=new cc,Tl=new cc,Rl=new cc,In=class extends un{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new I){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(ah.subVectors(s[0],s[1]).add(s[0]),l=ah);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(rh.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=rh),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),El.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,m,x,g),Tl.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,m,x,g),Rl.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(El.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Tl.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Rl.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(El.calc(c),Tl.calc(c),Rl.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function oh(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function Lu(i,e){let t=1-i;return t*t*e}function Nu(i,e){return 2*(1-i)*i*e}function Uu(i,e){return i*i*e}function Qs(i,e,t,n){return Lu(i,e)+Nu(i,t)+Uu(i,n)}function Fu(i,e){let t=1-i;return t*t*t*e}function Ou(i,e){let t=1-i;return 3*t*t*i*e}function Bu(i,e){return 3*(1-i)*i*i*e}function ku(i,e){return i*i*i*e}function er(i,e,t,n,s){return Fu(i,e)+Ou(i,t)+Bu(i,n)+ku(i,s)}var fr=class extends un{constructor(e=new oe,t=new oe,n=new oe,s=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new oe){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(er(e,s.x,r.x,a.x,o.x),er(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ba=class extends un{constructor(e=new I,t=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new I){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(er(e,s.x,r.x,a.x,o.x),er(e,s.y,r.y,a.y,o.y),er(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},pr=class extends un{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ws=class extends un{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},mr=class extends un{constructor(e=new oe,t=new oe,n=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new oe){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Qs(e,s.x,r.x,a.x),Qs(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},gr=class extends un{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Qs(e,s.x,r.x,a.x),Qs(e,s.y,r.y,a.y),Qs(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_r=class extends un{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(oh(o,c.x,l.x,h.x,u.x),oh(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new oe().fromArray(s))}return this}},ka=Object.freeze({__proto__:null,ArcCurve:Oa,CatmullRomCurve3:In,CubicBezierCurve:fr,CubicBezierCurve3:Ba,EllipseCurve:Ms,LineCurve:pr,LineCurve3:ws,QuadraticBezierCurve:mr,QuadraticBezierCurve3:gr,SplineCurve:_r}),Es=class extends un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ka[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new ka[s.type]().fromJSON(s))}return this}},yr=class extends Es{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new pr(this.currentPoint.clone(),new oe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new mr(this.currentPoint.clone(),new oe(e,t),new oe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new fr(this.currentPoint.clone(),new oe(e,t),new oe(n,s),new oe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new _r(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,a,o,c),this}absellipse(e,t,n,s,r,a,o,c){let l=new Ms(e,t,n,s,r,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ts=class extends yr{constructor(e){super(e),this.uuid=Gi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new yr().fromJSON(s))}return this}};function zu(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=id(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=Xu(i,e,r,t)),i.length>80*t){o=i[0],c=i[1];let h=o,u=c;for(let d=t;d<s;d+=t){let f=i[d],m=i[d+1];f<o&&(o=f),m<c&&(c=m),f>h&&(h=f),m>u&&(u=m)}l=Math.max(h-o,u-c),l=l!==0?32767/l:0}return br(r,a,t,o,c,l,0),a}function id(i,e,t,n,s){let r;if(s===nf(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=lh(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=lh(a/n|0,i[a],i[a+1],r);return r&&Rs(r,r.next)&&(vr(r),r=r.next),r}function Ui(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Rs(t,t.next)||Mt(t.prev,t,t.next)===0)){if(vr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function br(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Ju(i,n,s,r);let o=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?Gu(i,n,s,r):Hu(i)){e.push(c.i,i.i,l.i),vr(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=Vu(Ui(i),e),br(i,e,t,n,s,r,2)):a===2&&Wu(i,e,t,n,s,r):br(Ui(i),e,t,n,s,r,1);break}}}function Hu(i){let e=i.prev,t=i,n=i.next;if(Mt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=Math.min(s,r,a),u=Math.min(o,c,l),d=Math.max(s,r,a),f=Math.max(o,c,l),m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&Js(s,o,r,c,a,l,m.x,m.y)&&Mt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Gu(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Mt(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,u=r.y,d=a.y,f=Math.min(o,c,l),m=Math.min(h,u,d),x=Math.max(o,c,l),g=Math.max(h,u,d),p=Nl(f,m,e,t,n),M=Nl(x,g,e,t,n),R=i.prevZ,b=i.nextZ;for(;R&&R.z>=p&&b&&b.z<=M;){if(R.x>=f&&R.x<=x&&R.y>=m&&R.y<=g&&R!==s&&R!==a&&Js(o,h,c,u,l,d,R.x,R.y)&&Mt(R.prev,R,R.next)>=0||(R=R.prevZ,b.x>=f&&b.x<=x&&b.y>=m&&b.y<=g&&b!==s&&b!==a&&Js(o,h,c,u,l,d,b.x,b.y)&&Mt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;R&&R.z>=p;){if(R.x>=f&&R.x<=x&&R.y>=m&&R.y<=g&&R!==s&&R!==a&&Js(o,h,c,u,l,d,R.x,R.y)&&Mt(R.prev,R,R.next)>=0)return!1;R=R.prevZ}for(;b&&b.z<=M;){if(b.x>=f&&b.x<=x&&b.y>=m&&b.y<=g&&b!==s&&b!==a&&Js(o,h,c,u,l,d,b.x,b.y)&&Mt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Vu(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Rs(n,s)&&rd(n,t,t.next,s)&&xr(n,s)&&xr(s,n)&&(e.push(n.i,t.i,s.i),vr(t),vr(t.next),t=i=s),t=t.next}while(t!==i);return Ui(t)}function Wu(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Qu(a,o)){let c=ad(a,o);a=Ui(a,a.next),c=Ui(c,c.next),br(a,e,t,n,s,r,0),br(c,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Xu(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,c=r<a-1?e[r+1]*n:i.length,l=id(i,o,c,n,!1);l===l.next&&(l.steiner=!0),s.push($u(l))}s.sort(qu);for(let r=0;r<s.length;r++)t=ju(s[r],t);return t}function qu(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function ju(i,e){let t=Yu(i,e);if(!t)return e;let n=ad(t,i);return Ui(n,n.next),Ui(t,t.next)}function Yu(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Rs(i,t))return t;do{if(Rs(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,c=a.x,l=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&sd(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);xr(t,i)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&Zu(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function Zu(i,e){return Mt(i.prev,i,e.prev)<0&&Mt(e.next,i,i.next)<0}function Ju(i,e,t,n){let s=i;do s.z===0&&(s.z=Nl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Ku(s)}function Ku(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Nl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function $u(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function sd(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Js(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&sd(i,e,t,n,s,r,a,o)}function Qu(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!ef(i,e)&&(xr(i,e)&&xr(e,i)&&tf(i,e)&&(Mt(i.prev,i,e.prev)||Mt(i,e.prev,e))||Rs(i,e)&&Mt(i.prev,i,i.next)>0&&Mt(e.prev,e,e.next)>0)}function Mt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Rs(i,e){return i.x===e.x&&i.y===e.y}function rd(i,e,t,n){let s=ya(Mt(i,e,t)),r=ya(Mt(i,e,n)),a=ya(Mt(t,n,i)),o=ya(Mt(t,n,e));return!!(s!==r&&a!==o||s===0&&_a(i,t,e)||r===0&&_a(i,n,e)||a===0&&_a(t,i,n)||o===0&&_a(t,e,n))}function _a(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ya(i){return i>0?1:i<0?-1:0}function ef(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&rd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function xr(i,e){return Mt(i.prev,i,i.next)<0?Mt(i,e,i.next)>=0&&Mt(i,i.prev,e)>=0:Mt(i,e,i.prev)<0||Mt(i,i.next,e)<0}function tf(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function ad(i,e){let t=Ul(i.i,i.x,i.y),n=Ul(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function lh(i,e,t,n){let s=Ul(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function vr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ul(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function nf(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Fl=class{static triangulate(e,t,n=2){return zu(e,t,n)}},Ii=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];ch(e),hh(n,e);let a=e.length;t.forEach(ch);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,hh(n,t[c]);let o=Fl.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function ch(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function hh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Sr=class i extends Ot{constructor(e=new Ts([new oe(.5,.5),new oe(-.5,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++){let l=e[o];a(l)}this.setAttribute("position",new dt(s,3)),this.setAttribute("uv",new dt(r,2)),this.computeVertexNormals();function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:sf,R,b=!1,w,S,A,y;if(p){R=p.getSpacedPoints(h),b=!0,d=!1;let te=p.isCatmullRomCurve3?p.closed:!1;w=p.computeFrenetFrames(h,te),S=new I,A=new I,y=new I}d||(g=0,f=0,m=0,x=0);let T=o.extractPoints(l),P=T.shape,C=T.holes;if(!Ii.isClockWise(P)){P=P.reverse();for(let te=0,J=C.length;te<J;te++){let re=C[te];Ii.isClockWise(re)&&(C[te]=re.reverse())}}function G(te){let re=10000000000000001e-36,ae=te[0];for(let le=1;le<=te.length;le++){let Ie=le%te.length,Fe=te[Ie],Be=Fe.x-ae.x,ke=Fe.y-ae.y,L=Be*Be+ke*ke,et=Math.max(Math.abs(Fe.x),Math.abs(Fe.y),Math.abs(ae.x),Math.abs(ae.y)),Ye=re*et*et;if(L<=Ye){te.splice(Ie,1),le--;continue}ae=Fe}}G(P),C.forEach(G);let D=C.length,O=P;for(let te=0;te<D;te++){let J=C[te];P=P.concat(J)}function z(te,J,re){return J||qe("ExtrudeGeometry: vec does not exist"),te.clone().addScaledVector(J,re)}let j=P.length;function ne(te,J,re){let ae,le,Ie,Fe=te.x-J.x,Be=te.y-J.y,ke=re.x-te.x,L=re.y-te.y,et=Fe*Fe+Be*Be,Ye=Fe*L-Be*ke;if(Math.abs(Ye)>Number.EPSILON){let E=Math.sqrt(et),_=Math.sqrt(ke*ke+L*L),B=J.x-Be/E,V=J.y+Fe/E,Y=re.x-L/_,ce=re.y+ke/_,he=((Y-B)*L-(ce-V)*ke)/(Fe*L-Be*ke);ae=B+Fe*he-te.x,le=V+Be*he-te.y;let $=ae*ae+le*le;if($<=2)return new oe(ae,le);Ie=Math.sqrt($/2)}else{let E=!1;Fe>Number.EPSILON?ke>Number.EPSILON&&(E=!0):Fe<-Number.EPSILON?ke<-Number.EPSILON&&(E=!0):Math.sign(Be)===Math.sign(L)&&(E=!0),E?(ae=-Be,le=Fe,Ie=Math.sqrt(et)):(ae=Fe,le=Be,Ie=Math.sqrt(et/2))}return new oe(ae/Ie,le/Ie)}let X=[];for(let te=0,J=O.length,re=J-1,ae=te+1;te<J;te++,re++,ae++)re===J&&(re=0),ae===J&&(ae=0),X[te]=ne(O[te],O[re],O[ae]);let Z=[],ie,ve=X.concat();for(let te=0,J=D;te<J;te++){let re=C[te];ie=[];for(let ae=0,le=re.length,Ie=le-1,Fe=ae+1;ae<le;ae++,Ie++,Fe++)Ie===le&&(Ie=0),Fe===le&&(Fe=0),ie[ae]=ne(re[ae],re[Ie],re[Fe]);Z.push(ie),ve=ve.concat(ie)}let _e;if(g===0)_e=Ii.triangulateShape(O,C);else{let te=[],J=[];for(let re=0;re<g;re++){let ae=re/g,le=f*Math.cos(ae*Math.PI/2),Ie=m*Math.sin(ae*Math.PI/2)+x;for(let Fe=0,Be=O.length;Fe<Be;Fe++){let ke=z(O[Fe],X[Fe],Ie);ye(ke.x,ke.y,-le),ae===0&&te.push(ke)}for(let Fe=0,Be=D;Fe<Be;Fe++){let ke=C[Fe];ie=Z[Fe];let L=[];for(let et=0,Ye=ke.length;et<Ye;et++){let E=z(ke[et],ie[et],Ie);ye(E.x,E.y,-le),ae===0&&L.push(E)}ae===0&&J.push(L)}}_e=Ii.triangulateShape(te,J)}let He=_e.length,Xe=m+x;for(let te=0;te<j;te++){let J=d?z(P[te],ve[te],Xe):P[te];b?(A.copy(w.normals[0]).multiplyScalar(J.x),S.copy(w.binormals[0]).multiplyScalar(J.y),y.copy(R[0]).add(A).add(S),ye(y.x,y.y,y.z)):ye(J.x,J.y,0)}for(let te=1;te<=h;te++)for(let J=0;J<j;J++){let re=d?z(P[J],ve[J],Xe):P[J];b?(A.copy(w.normals[te]).multiplyScalar(re.x),S.copy(w.binormals[te]).multiplyScalar(re.y),y.copy(R[te]).add(A).add(S),ye(y.x,y.y,y.z)):ye(re.x,re.y,u/h*te)}for(let te=g-1;te>=0;te--){let J=te/g,re=f*Math.cos(J*Math.PI/2),ae=m*Math.sin(J*Math.PI/2)+x;for(let le=0,Ie=O.length;le<Ie;le++){let Fe=z(O[le],X[le],ae);ye(Fe.x,Fe.y,u+re)}for(let le=0,Ie=C.length;le<Ie;le++){let Fe=C[le];ie=Z[le];for(let Be=0,ke=Fe.length;Be<ke;Be++){let L=z(Fe[Be],ie[Be],ae);b?ye(L.x,L.y+R[h-1].y,R[h-1].x+re):ye(L.x,L.y,u+re)}}}je(),W();function je(){let te=s.length/3;if(d){let J=0,re=j*J;for(let ae=0;ae<He;ae++){let le=_e[ae];Ue(le[2]+re,le[1]+re,le[0]+re)}J=h+g*2,re=j*J;for(let ae=0;ae<He;ae++){let le=_e[ae];Ue(le[0]+re,le[1]+re,le[2]+re)}}else{for(let J=0;J<He;J++){let re=_e[J];Ue(re[2],re[1],re[0])}for(let J=0;J<He;J++){let re=_e[J];Ue(re[0]+j*h,re[1]+j*h,re[2]+j*h)}}n.addGroup(te,s.length/3-te,0)}function W(){let te=s.length/3,J=0;K(O,J),J+=O.length;for(let re=0,ae=C.length;re<ae;re++){let le=C[re];K(le,J),J+=le.length}n.addGroup(te,s.length/3-te,1)}function K(te,J){let re=te.length;for(;--re>=0;){let ae=re,le=re-1;le<0&&(le=te.length-1);for(let Ie=0,Fe=h+g*2;Ie<Fe;Ie++){let Be=j*Ie,ke=j*(Ie+1),L=J+ae+Be,et=J+le+Be,Ye=J+le+ke,E=J+ae+ke;ge(L,et,Ye,E)}}}function ye(te,J,re){c.push(te),c.push(J),c.push(re)}function Ue(te,J,re){De(te),De(J),De(re);let ae=s.length/3,le=M.generateTopUV(n,s,ae-3,ae-2,ae-1);rt(le[0]),rt(le[1]),rt(le[2])}function ge(te,J,re,ae){De(te),De(J),De(ae),De(J),De(re),De(ae);let le=s.length/3,Ie=M.generateSideWallUV(n,s,le-6,le-3,le-2,le-1);rt(Ie[0]),rt(Ie[1]),rt(Ie[3]),rt(Ie[1]),rt(Ie[2]),rt(Ie[3])}function De(te){s.push(c[te*3+0]),s.push(c[te*3+1]),s.push(c[te*3+2])}function rt(te){r.push(te.x),r.push(te.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return rf(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new ka[s.type]().fromJSON(s)),new i(n,e.options)}},sf={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new oe(r,a),new oe(o,c),new oe(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],m=e[s*3+2],x=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new oe(a,1-c),new oe(l,1-u),new oe(d,1-m),new oe(x,1-p)]:[new oe(o,1-c),new oe(h,1-u),new oe(f,1-m),new oe(g,1-p)]}};function rf(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Fi=class i extends Ot{constructor(e=[new oe(0,-.5),new oe(.5,0),new oe(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Ke(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],h=1/t,u=new I,d=new oe,f=new I,m=new I,x=new I,g=0,p=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:g=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,f.x=p*1,f.y=-g,f.z=p*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:g=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(m)}for(let M=0;M<=t;M++){let R=n+M*h*s,b=Math.sin(R),w=Math.cos(R);for(let S=0;S<=e.length-1;S++){u.x=e[S].x*b,u.y=e[S].y,u.z=e[S].x*w,a.push(u.x,u.y,u.z),d.x=M/t,d.y=S/(e.length-1),o.push(d.x,d.y);let A=c[3*S+0]*b,y=c[3*S+1],T=c[3*S+0]*w;l.push(A,y,T)}}for(let M=0;M<t;M++)for(let R=0;R<e.length-1;R++){let b=R+M*e.length,w=b,S=b+e.length,A=b+e.length+1,y=b+1;r.push(w,S,y),r.push(A,y,S)}this.setIndex(r),this.setAttribute("position",new dt(a,3)),this.setAttribute("uv",new dt(o,2)),this.setAttribute("normal",new dt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Oi=class i extends Ot{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=e/o,d=t/c,f=[],m=[],x=[],g=[];for(let p=0;p<h;p++){let M=p*d-a;for(let R=0;R<l;R++){let b=R*u-r;m.push(b,-M,0),x.push(0,0,1),g.push(R/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<o;M++){let R=M+l*p,b=M+l*(p+1),w=M+1+l*(p+1),S=M+1+l*p;f.push(R,b,S),f.push(b,w,S)}this.setIndex(f),this.setAttribute("position",new dt(m,3)),this.setAttribute("normal",new dt(x,3)),this.setAttribute("uv",new dt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var mi=class i extends Ot{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new I,d=new I,f=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let M=[],R=p/n,b=a+R*o,w=e*Math.cos(b),S=Math.sqrt(e*e-w*w),A=0;p===0&&a===0?A=.5/t:p===n&&c===Math.PI&&(A=-.5/t);for(let y=0;y<=t;y++){let T=y/t,P=s+T*r;u.x=-S*Math.cos(P),u.y=w,u.z=S*Math.sin(P),m.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(T+A,1-R),M.push(l++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){let R=h[p][M+1],b=h[p][M],w=h[p+1][M],S=h[p+1][M+1];(p!==0||a>0)&&f.push(R,b,S),(p!==n-1||c<Math.PI)&&f.push(b,w,S)}this.setIndex(f),this.setAttribute("position",new dt(m,3)),this.setAttribute("normal",new dt(x,3)),this.setAttribute("uv",new dt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Dn=class i extends Ot{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],u=[],d=new I,f=new I,m=new I;for(let x=0;x<=n;x++){let g=a+x/n*o;for(let p=0;p<=s;p++){let M=p/s*r;f.x=(e+t*Math.cos(g))*Math.cos(M),f.y=(e+t*Math.cos(g))*Math.sin(M),f.z=t*Math.sin(g),l.push(f.x,f.y,f.z),d.x=e*Math.cos(M),d.y=e*Math.sin(M),m.subVectors(f,d).normalize(),h.push(m.x,m.y,m.z),u.push(p/s),u.push(x/n)}}for(let x=1;x<=n;x++)for(let g=1;g<=s;g++){let p=(s+1)*x+g-1,M=(s+1)*(x-1)+g-1,R=(s+1)*(x-1)+g,b=(s+1)*x+g;c.push(p,M,b),c.push(M,R,b)}this.setIndex(c),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Ln=class i extends Ot{constructor(e=new gr(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new I,c=new I,l=new oe,h=new I,u=[],d=[],f=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new dt(u,3)),this.setAttribute("normal",new dt(d,3)),this.setAttribute("uv",new dt(f,2));function x(){for(let R=0;R<t;R++)g(R);g(r===!1?t:0),M(),p()}function g(R){h=e.getPointAt(R/t,h);let b=a.normals[R],w=a.binormals[R];for(let S=0;S<=s;S++){let A=S/s*Math.PI*2,y=Math.sin(A),T=-Math.cos(A);c.x=T*b.x+y*w.x,c.y=T*b.y+y*w.y,c.z=T*b.z+y*w.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,u.push(o.x,o.y,o.z)}}function p(){for(let R=1;R<=t;R++)for(let b=1;b<=s;b++){let w=(s+1)*(R-1)+(b-1),S=(s+1)*R+(b-1),A=(s+1)*R+b,y=(s+1)*(R-1)+b;m.push(w,S,y),m.push(S,A,y)}}function M(){for(let R=0;R<=t;R++)for(let b=0;b<=s;b++)l.x=R/t,l.y=b/s,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new ka[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Mr=class extends Wn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new We(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function Vi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(dh(s))s.isRenderTargetTexture?(Ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(dh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Yt(i){let e={};for(let t=0;t<i.length;t++){let n=Vi(i[t]);for(let s in n)e[s]=n[s]}return e}function dh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function af(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function hc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}var od={clone:Vi,merge:Yt},of=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,fn=class extends Wn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=of,this.fragmentShader=lf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vi(e.uniforms),this.uniformsGroups=af(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new We().setHex(s.value);break;case"v2":this.uniforms[n].value=new oe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new vt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Je().fromArray(s.value);break;case"m4":this.uniforms[n].value=new gt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},za=class extends fn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},at=class extends Wn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kr,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Xn=class extends at{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new We(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new We(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new We(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var wr=class extends Wn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kr,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=no,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ha=class extends Wn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ga=class extends Wn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function os(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Al(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var gi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Va=class extends gi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Il,endingEnd:Il}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Dl:r=e,o=2*t-n;break;case Ll:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Dl:a=e,c=2*n-t;break;case Ll:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(s-t),x=m*m,g=x*m,p=-d*g+2*d*x-d*m,M=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*m+1,R=(-1-f)*g+(1.5+f)*x+.5*m,b=f*g-f*x;for(let w=0;w!==o;++w)r[w]=p*a[h+w]+M*a[l+w]+R*a[c+w]+b*a[u+w];return r}},Wa=class extends gi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},Xa=class extends gi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},qa=class extends gi{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let m=(n-t)/(s-t),x=1-m;for(let g=0;g!==o;++g)r[g]=a[l+g]*x+a[c+g]*m;return r}let d=o*2,f=e-1;for(let m=0;m!==o;++m){let x=a[l+m],g=a[c+m],p=f*d+m*2,M=u[p],R=u[p+1],b=e*d+m*2,w=h[b],S=h[b+1],A=hf(n,t,M,w,s);r[m]=ld(A,x,R,S,g)}return r}};function ld(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function cf(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function hf(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=ld(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let c=cf(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var pn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=os(t,this.TimeBufferType),this.values=os(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:os(e.times,Array),values:os(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Al(e.settings)&&(n.settings={inTangents:os(e.settings.inTangents,Array),outTangents:os(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Xa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Wa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Va(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new qa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case tr:t=this.InterpolantFactoryMethodDiscrete;break;case Da:t=this.InterpolantFactoryMethodLinear;break;case va:t=this.InterpolantFactoryMethodSmooth;break;case Pl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ve("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return tr;case this.InterpolantFactoryMethodLinear:return Da;case this.InterpolantFactoryMethodSmooth:return va;case this.InterpolantFactoryMethodBezier:return Pl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Al(this.settings)&&(uh(this.settings.inTangents,e),uh(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(qe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(qe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){qe("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){qe("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Kd(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){qe("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===va,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let u=o*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let x=t[u+m];if(x!==t[d+m]||x!==t[f+m]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Al(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function uh(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}pn.prototype.ValueTypeName="";pn.prototype.TimeBufferType=Float32Array;pn.prototype.ValueBufferType=Float32Array;pn.prototype.DefaultInterpolation=Da;var _i=class extends pn{constructor(e,t,n){super(e,t,n)}};_i.prototype.ValueTypeName="bool";_i.prototype.ValueBufferType=Array;_i.prototype.DefaultInterpolation=tr;_i.prototype.InterpolantFactoryMethodLinear=void 0;_i.prototype.InterpolantFactoryMethodSmooth=void 0;var ja=class extends pn{constructor(e,t,n,s){super(e,t,n,s)}};ja.prototype.ValueTypeName="color";var Ya=class extends pn{constructor(e,t,n,s){super(e,t,n,s)}};Ya.prototype.ValueTypeName="number";var Za=class extends gi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)en.slerpFlat(r,0,a,l-o,a,l,c);return r}},Er=class extends pn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Za(this.times,this.values,this.getValueSize(),e)}};Er.prototype.ValueTypeName="quaternion";Er.prototype.InterpolantFactoryMethodSmooth=void 0;var yi=class extends pn{constructor(e,t,n){super(e,t,n)}};yi.prototype.ValueTypeName="string";yi.prototype.ValueBufferType=Array;yi.prototype.DefaultInterpolation=tr;yi.prototype.InterpolantFactoryMethodLinear=void 0;yi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ja=class extends pn{constructor(e,t,n,s){super(e,t,n,s)}};Ja.prototype.ValueTypeName="vector";var Ma={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(fh(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!fh(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function fh(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Ka=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],m=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},cd=new Ka,As=class{constructor(e){this.manager=e!==void 0?e:cd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};As.DEFAULT_MATERIAL_NAME="__DEFAULT";var ls=new WeakMap,$a=class extends As{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Ma.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=ls.get(a);u===void 0&&(u=[],ls.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=ms("img");function c(){h(),t&&t(this);let u=ls.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}ls.delete(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),Ma.remove(`image:${e}`);let d=ls.get(this)||[];for(let f=0;f<d.length;f++){let m=d[f];m.onError&&m.onError(u)}ls.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ma.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var Tr=class extends As{constructor(e){super(e)}load(e,t,n,s){let r=new qt,a=new $a(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Cs=class extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ps=class extends Cs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Cl=new gt,ph=new I,mh=new I,Rr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.mapType=rn,this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ss,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ph.setFromMatrixPosition(e.matrixWorld),t.position.copy(ph),mh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(mh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Cl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Cl,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===ps||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Cl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ba=new I,xa=new en,zn=new I,Ar=class extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=An,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ba,xa,zn),zn.x===1&&zn.y===1&&zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ba,xa,zn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ba,xa,zn),zn.x===1&&zn.y===1&&zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ba,xa,zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},di=new I,gh=new oe,_h=new oe,kt=class extends Ar{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=_s*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ks*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _s*2*Math.atan(Math.tan(Ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(di.x,di.y).multiplyScalar(-e/di.z),di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(di.x,di.y).multiplyScalar(-e/di.z)}getViewSize(e,t){return this.getViewBounds(e,gh,_h),t.subVectors(_h,gh)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ks*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Ol=class extends Rr{constructor(){super(new kt(90,1,.5,500)),this.isPointLightShadow=!0}},Cr=class extends Cs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ol}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Is=class extends Ar{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Bl=class extends Rr{constructor(){super(new Is(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Bi=class extends Cs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new Bl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var cs=-90,hs=1,Qa=class extends Ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new kt(cs,hs,e,t);s.layers=this.layers,this.add(s);let r=new kt(cs,hs,e,t);r.layers=this.layers,this.add(r);let a=new kt(cs,hs,e,t);a.layers=this.layers,this.add(a);let o=new kt(cs,hs,e,t);o.layers=this.layers,this.add(o);let c=new kt(cs,hs,e,t);c.layers=this.layers,this.add(c);let l=new kt(cs,hs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===An)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ps)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},eo=class extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var dc="\\[\\]\\.:\\/",df=new RegExp("["+dc+"]","g"),uc="[^"+dc+"]",uf="[^"+dc.replace("\\.","")+"]",ff=/((?:WC+[\/:])*)/.source.replace("WC",uc),pf=/(WCOD+)?/.source.replace("WCOD",uf),mf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uc),gf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uc),_f=new RegExp("^"+ff+pf+mf+gf+"$"),yf=["material","materials","bones","map"],kl=class{constructor(e,t,n){let s=n||xt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},xt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(df,"")}static parseTrackName(e){let t=_f.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);yf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ve("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){qe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){qe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){qe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){qe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){qe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;qe("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xt.Composite=kl;xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xt.prototype.GetterByBindingType=[xt.prototype._getValue_direct,xt.prototype._getValue_array,xt.prototype._getValue_arrayElement,xt.prototype._getValue_toArray];xt.prototype.SetterByBindingTypeAndVersioning=[[xt.prototype._setValue_direct,xt.prototype._setValue_direct_setNeedsUpdate,xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_array,xt.prototype._setValue_array_setNeedsUpdate,xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_arrayElement,xt.prototype._setValue_arrayElement_setNeedsUpdate,xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_fromArray,xt.prototype._setValue_fromArray_setNeedsUpdate,xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var V_=new Float32Array(1);var ii=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ke(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ke(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var yc=class yc{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};yc.prototype.isMatrix2=!0;var zl=yc;var Pr=class extends Cn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function fc(i,e,t,n){let s=bf(n);switch(t){case sc:return i*e;case co:return i*e/s.components*s.byteLength;case ho:return i*e/s.components*s.byteLength;case wi:return i*e*2/s.components*s.byteLength;case uo:return i*e*2/s.components*s.byteLength;case rc:return i*e*3/s.components*s.byteLength;case xn:return i*e*4/s.components*s.byteLength;case fo:return i*e*4/s.components*s.byteLength;case Lr:case Nr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ur:case Fr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case mo:case _o:return Math.max(i,16)*Math.max(e,8)/4;case po:case go:return Math.max(i,8)*Math.max(e,8)/2;case yo:case bo:case vo:case So:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case xo:case Or:case Mo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case wo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Eo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case To:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ro:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ao:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Co:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Po:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Io:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Do:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Lo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case No:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Uo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Fo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Oo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Bo:case ko:case zo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ho:case Go:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Br:case Vo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function bf(i){switch(i){case rn:case ec:return{byteLength:1,components:1};case Us:case tc:case Fn:return{byteLength:2,components:1};case oo:case lo:return{byteLength:2,components:4};case Un:case ao:case bn:return{byteLength:4,components:1};case nc:case ic:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Id(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Tf(i){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],x=u[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let x=u[f];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Rf=`#ifdef USE_ALPHAHASH
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
}`,Qe={alphahash_fragment:Rf,alphahash_pars_fragment:Af,alphamap_fragment:Cf,alphamap_pars_fragment:Pf,alphatest_fragment:If,alphatest_pars_fragment:Df,aomap_fragment:Lf,aomap_pars_fragment:Nf,batching_pars_vertex:Uf,batching_vertex:Ff,begin_vertex:Of,beginnormal_vertex:Bf,bsdfs:kf,iridescence_fragment:zf,bumpmap_pars_fragment:Hf,clipping_planes_fragment:Gf,clipping_planes_pars_fragment:Vf,clipping_planes_pars_vertex:Wf,clipping_planes_vertex:Xf,color_fragment:qf,color_pars_fragment:jf,color_pars_vertex:Yf,color_vertex:Zf,common:Jf,cube_uv_reflection_fragment:Kf,defaultnormal_vertex:$f,displacementmap_pars_vertex:Qf,displacementmap_vertex:ep,emissivemap_fragment:tp,emissivemap_pars_fragment:np,colorspace_fragment:ip,colorspace_pars_fragment:sp,envmap_fragment:rp,envmap_common_pars_fragment:ap,envmap_pars_fragment:op,envmap_pars_vertex:lp,envmap_physical_pars_fragment:bp,envmap_vertex:cp,fog_vertex:hp,fog_pars_vertex:dp,fog_fragment:up,fog_pars_fragment:fp,gradientmap_pars_fragment:pp,lightmap_pars_fragment:mp,lights_lambert_fragment:gp,lights_lambert_pars_fragment:_p,lights_pars_begin:yp,lights_toon_fragment:xp,lights_toon_pars_fragment:vp,lights_phong_fragment:Sp,lights_phong_pars_fragment:Mp,lights_physical_fragment:wp,lights_physical_pars_fragment:Ep,lights_fragment_begin:Tp,lights_fragment_maps:Rp,lights_fragment_end:Ap,lightprobes_pars_fragment:Cp,logdepthbuf_fragment:Pp,logdepthbuf_pars_fragment:Ip,logdepthbuf_pars_vertex:Dp,logdepthbuf_vertex:Lp,map_fragment:Np,map_pars_fragment:Up,map_particle_fragment:Fp,map_particle_pars_fragment:Op,metalnessmap_fragment:Bp,metalnessmap_pars_fragment:kp,morphinstance_vertex:zp,morphcolor_vertex:Hp,morphnormal_vertex:Gp,morphtarget_pars_vertex:Vp,morphtarget_vertex:Wp,normal_fragment_begin:Xp,normal_fragment_maps:qp,normal_pars_fragment:jp,normal_pars_vertex:Yp,normal_vertex:Zp,normalmap_pars_fragment:Jp,clearcoat_normal_fragment_begin:Kp,clearcoat_normal_fragment_maps:$p,clearcoat_pars_fragment:Qp,iridescence_pars_fragment:em,opaque_fragment:tm,packing:nm,premultiplied_alpha_fragment:im,project_vertex:sm,dithering_fragment:rm,dithering_pars_fragment:am,roughnessmap_fragment:om,roughnessmap_pars_fragment:lm,shadowmap_pars_fragment:cm,shadowmap_pars_vertex:hm,shadowmap_vertex:dm,shadowmask_pars_fragment:um,skinbase_vertex:fm,skinning_pars_vertex:pm,skinning_vertex:mm,skinnormal_vertex:gm,specularmap_fragment:_m,specularmap_pars_fragment:ym,tonemapping_fragment:bm,tonemapping_pars_fragment:xm,transmission_fragment:vm,transmission_pars_fragment:Sm,uv_pars_fragment:Mm,uv_pars_vertex:wm,uv_vertex:Em,worldpos_vertex:Tm,background_vert:Rm,background_frag:Am,backgroundCube_vert:Cm,backgroundCube_frag:Pm,cube_vert:Im,cube_frag:Dm,depth_vert:Lm,depth_frag:Nm,distance_vert:Um,distance_frag:Fm,equirect_vert:Om,equirect_frag:Bm,linedashed_vert:km,linedashed_frag:zm,meshbasic_vert:Hm,meshbasic_frag:Gm,meshlambert_vert:Vm,meshlambert_frag:Wm,meshmatcap_vert:Xm,meshmatcap_frag:qm,meshnormal_vert:jm,meshnormal_frag:Ym,meshphong_vert:Zm,meshphong_frag:Jm,meshphysical_vert:Km,meshphysical_frag:$m,meshtoon_vert:Qm,meshtoon_frag:e0,points_vert:t0,points_frag:n0,shadow_vert:i0,shadow_frag:s0,sprite_vert:r0,sprite_frag:a0},Se={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Zn={basic:{uniforms:Yt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Yt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new We(0)},envMapIntensity:{value:1}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Yt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Yt([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Yt([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new We(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Yt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Yt([Se.points,Se.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Yt([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Yt([Se.common,Se.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Yt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Yt([Se.sprite,Se.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distance:{uniforms:Yt([Se.common,Se.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distance_vert,fragmentShader:Qe.distance_frag},shadow:{uniforms:Yt([Se.lights,Se.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Zn.physical={uniforms:Yt([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};var qo={r:0,b:0,g:0},o0=new gt,Dd=new Je;Dd.set(-1,0,0,0,1,0,0,0,1);function l0(i,e,t,n,s,r){let a=new We(0),o=s===!0?0:1,c,l,h=null,u=0,d=null;function f(M){let R=M.isScene===!0?M.background:null;if(R&&R.isTexture){let b=M.backgroundBlurriness>0;R=e.get(R,b)}return R}function m(M){let R=!1,b=f(M);b===null?g(a,o):b&&b.isColor&&(g(b,1),R=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(M,R){let b=f(R);b&&(b.isCubeTexture||b.mapping===Ir)?(l===void 0&&(l=new Ge(new jt(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:Vi(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,S,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(o0.makeRotationFromEuler(R.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Dd),l.material.toneMapped=st.getTransfer(b.colorSpace)!==ht,(h!==b||u!==b.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=b,u=b.version,d=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Ge(new Oi(2,2),new fn({name:"BackgroundMaterial",uniforms:Vi(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.toneMapped=st.getTransfer(b.colorSpace)!==ht,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||u!==b.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=b,u=b.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function g(M,R){M.getRGB(qo,hc(i)),t.buffers.color.setClear(qo.r,qo.g,qo.b,R,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,R=1){a.set(M),o=R,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,g(a,o)},render:m,addToRenderList:x,dispose:p}}function c0(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(C,U,G,D,O){let z=!1,j=u(C,D,G,U);r!==j&&(r=j,l(r.object)),z=f(C,D,G,O),z&&m(C,D,G,O),O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,b(C,U,G,D),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function c(){return i.createVertexArray()}function l(C){return i.bindVertexArray(C)}function h(C){return i.deleteVertexArray(C)}function u(C,U,G,D){let O=D.wireframe===!0,z=n[U.id];z===void 0&&(z={},n[U.id]=z);let j=C.isInstancedMesh===!0?C.id:0,ne=z[j];ne===void 0&&(ne={},z[j]=ne);let X=ne[G.id];X===void 0&&(X={},ne[G.id]=X);let Z=X[O];return Z===void 0&&(Z=d(c()),X[O]=Z),Z}function d(C){let U=[],G=[],D=[];for(let O=0;O<t;O++)U[O]=0,G[O]=0,D[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:G,attributeDivisors:D,object:C,attributes:{},index:null}}function f(C,U,G,D){let O=r.attributes,z=U.attributes,j=0,ne=G.getAttributes();for(let X in ne)if(ne[X].location>=0){let ie=O[X],ve=z[X];if(ve===void 0&&(X==="instanceMatrix"&&C.instanceMatrix&&(ve=C.instanceMatrix),X==="instanceColor"&&C.instanceColor&&(ve=C.instanceColor)),ie===void 0||ie.attribute!==ve||ve&&ie.data!==ve.data)return!0;j++}return r.attributesNum!==j||r.index!==D}function m(C,U,G,D){let O={},z=U.attributes,j=0,ne=G.getAttributes();for(let X in ne)if(ne[X].location>=0){let ie=z[X];ie===void 0&&(X==="instanceMatrix"&&C.instanceMatrix&&(ie=C.instanceMatrix),X==="instanceColor"&&C.instanceColor&&(ie=C.instanceColor));let ve={};ve.attribute=ie,ie&&ie.data&&(ve.data=ie.data),O[X]=ve,j++}r.attributes=O,r.attributesNum=j,r.index=D}function x(){let C=r.newAttributes;for(let U=0,G=C.length;U<G;U++)C[U]=0}function g(C){p(C,0)}function p(C,U){let G=r.newAttributes,D=r.enabledAttributes,O=r.attributeDivisors;G[C]=1,D[C]===0&&(i.enableVertexAttribArray(C),D[C]=1),O[C]!==U&&(i.vertexAttribDivisor(C,U),O[C]=U)}function M(){let C=r.newAttributes,U=r.enabledAttributes;for(let G=0,D=U.length;G<D;G++)U[G]!==C[G]&&(i.disableVertexAttribArray(G),U[G]=0)}function R(C,U,G,D,O,z,j){j===!0?i.vertexAttribIPointer(C,U,G,O,z):i.vertexAttribPointer(C,U,G,D,O,z)}function b(C,U,G,D){x();let O=D.attributes,z=G.getAttributes(),j=U.defaultAttributeValues;for(let ne in z){let X=z[ne];if(X.location>=0){let Z=O[ne];if(Z===void 0&&(ne==="instanceMatrix"&&C.instanceMatrix&&(Z=C.instanceMatrix),ne==="instanceColor"&&C.instanceColor&&(Z=C.instanceColor)),Z!==void 0){let ie=Z.normalized,ve=Z.itemSize,_e=e.get(Z);if(_e===void 0)continue;let He=_e.buffer,Xe=_e.type,je=_e.bytesPerElement,W=Xe===i.INT||Xe===i.UNSIGNED_INT||Z.gpuType===ao;if(Z.isInterleavedBufferAttribute){let K=Z.data,ye=K.stride,Ue=Z.offset;if(K.isInstancedInterleavedBuffer){for(let ge=0;ge<X.locationSize;ge++)p(X.location+ge,K.meshPerAttribute);C.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ge=0;ge<X.locationSize;ge++)g(X.location+ge);i.bindBuffer(i.ARRAY_BUFFER,He);for(let ge=0;ge<X.locationSize;ge++)R(X.location+ge,ve/X.locationSize,Xe,ie,ye*je,(Ue+ve/X.locationSize*ge)*je,W)}else{if(Z.isInstancedBufferAttribute){for(let K=0;K<X.locationSize;K++)p(X.location+K,Z.meshPerAttribute);C.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let K=0;K<X.locationSize;K++)g(X.location+K);i.bindBuffer(i.ARRAY_BUFFER,He);for(let K=0;K<X.locationSize;K++)R(X.location+K,ve/X.locationSize,Xe,ie,ve*je,ve/X.locationSize*K*je,W)}}else if(j!==void 0){let ie=j[ne];if(ie!==void 0)switch(ie.length){case 2:i.vertexAttrib2fv(X.location,ie);break;case 3:i.vertexAttrib3fv(X.location,ie);break;case 4:i.vertexAttrib4fv(X.location,ie);break;default:i.vertexAttrib1fv(X.location,ie)}}}}M()}function w(){T();for(let C in n){let U=n[C];for(let G in U){let D=U[G];for(let O in D){let z=D[O];for(let j in z)h(z[j].object),delete z[j];delete D[O]}}delete n[C]}}function S(C){if(n[C.id]===void 0)return;let U=n[C.id];for(let G in U){let D=U[G];for(let O in D){let z=D[O];for(let j in z)h(z[j].object),delete z[j];delete D[O]}}delete n[C.id]}function A(C){for(let U in n){let G=n[U];for(let D in G){let O=G[D];if(O[C.id]===void 0)continue;let z=O[C.id];for(let j in z)h(z[j].object),delete z[j];delete O[C.id]}}}function y(C){for(let U in n){let G=n[U],D=C.isInstancedMesh===!0?C.id:0,O=G[D];if(O!==void 0){for(let z in O){let j=O[z];for(let ne in j)h(j[ne].object),delete j[ne];delete O[z]}delete G[D],Object.keys(G).length===0&&delete n[U]}}}function T(){P(),a=!0,r!==s&&(r=s,l(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:P,dispose:w,releaseStatesOfGeometry:S,releaseStatesOfObject:y,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:g,disableUnusedAttributes:M}}function h0(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let f=0;f<h;f++)d+=l[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function d0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==xn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let y=A===Fn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==rn&&A!==bn&&!y&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Ve("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Ve("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:R,maxFragmentUniforms:b,maxSamples:w,samples:S}}function u0(i){let e=this,t=null,n=0,s=!1,r=!1,a=new dn,o=new Je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{let M=r?0:n,R=M*4,b=p.clippingState||null;c.value=b,b=h(m,d,R,f);for(let w=0;w!==R;++w)b[w]=t[w];p.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=c.value,m!==!0||g===null){let p=f+x*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let R=0,b=f;R!==x;++R,b+=4)a.copy(u[R]).applyMatrix4(M,o),a.normal.toArray(g,b),g[b+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}var Bs=4,f0=6,p0=20,m0=256,zr=new Is,hd=new We,bc=null,xc=0,vc=0,Sc=!1,g0=new I,Wi=new I,Xi=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=g0}=r;bc=this._renderer.getRenderTarget(),xc=this._renderer.getActiveCubeFace(),vc=this._renderer.getActiveMipmapLevel(),Sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ud(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(bc,xc,vc),this._renderer.xr.enabled=Sc,e.scissorTest=!1,Os(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===vi||e.mapping===Hi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bc=this._renderer.getRenderTarget(),xc=this._renderer.getActiveCubeFace(),vc=this._renderer.getActiveMipmapLevel(),Sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:Fn,format:xn,colorSpace:nr,depthBuffer:!1},s=dd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dd(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=_0(r)),this._blurMaterial=b0(r,e,t),this._ggxMaterial=y0(r,e,t)}return s}_compileMaterial(e){let t=new Ge(new Ot,e);this._renderer.compile(t,zr)}_sceneToCubeUV(e,t,n,s,r){let c=new kt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(hd),u.toneMapping=Nn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ge(new jt,new Ni({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,p=!1,M=e.background;M?M.isColor&&(g.color.copy(M),e.background=null,p=!0):(g.color.copy(hd),p=!0);for(let R=0;R<6;R++){let b=R%3;b===0?(c.up.set(0,l[R],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[R],r.y,r.z)):b===1?(c.up.set(0,0,l[R]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[R],r.z)):(c.up.set(0,l[R],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[R]));let w=this._cubeSize;Os(s,b*w,R>2?w:0,w,w),u.setRenderTarget(s),p&&u.render(x,c),u.render(e,c)}u.toneMapping=f,u.autoClear=d,e.background=M}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===vi||e.mapping===Hi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=fd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ud());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;Os(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,zr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),d=l*1.25,f=u*d,{_lodMax:m}=this,x=this._sizeLods[n],g=3*x*(n>m-Bs?n-m+Bs:0),p=4*(this._cubeSize-x);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=m-t,Os(r,g,p,3*x,2*x),s.setRenderTarget(r),s.render(o,zr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=m-n,Os(e,g,p,3*x,2*x),s.setRenderTarget(e),s.render(o,zr)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-Bs?s-this._lodMax+Bs:0),d=4*(this._cubeSize-h);Os(t,u,d,3*h,2*h),a.setRenderTarget(t),a.render(c,zr)}};function _0(i){let e=[],t=[],n=i,s=i-Bs+1+f0;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],u=6,d=6,f=3,m=new Float32Array(f*d*u),x=new Float32Array(f*d*u);for(let p=0;p<u;p++){let M=p%3*2/3-1,R=p>2?0:-1,b=[M,R,0,M+2/3,R,0,M+2/3,R+1,0,M,R,0,M+2/3,R+1,0,M,R+1,0];m.set(b,f*d*p);for(let w=0;w<d;w++){let S=h[w*2]*2-1,A=h[w*2+1]*2-1;p===0?Wi.set(1,A,S):p===1?Wi.set(-S,1,-A):p===2?Wi.set(-S,A,1):p===3?Wi.set(-1,A,-S):p===4?Wi.set(-S,-1,A):Wi.set(S,A,-1),Wi.toArray(x,(p*d+w)*f)}}let g=new Ot;g.setAttribute("position",new Qt(m,f)),g.setAttribute("outputDirection",new Qt(x,f)),t.push(new Ge(g,null)),n>Bs&&n--}return{lodMeshes:t,sizeLods:e}}function dd(i,e,t){let n=new sn(i,e,t);return n.texture.mapping=Ir,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Os(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function y0(i,e,t){return new fn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:m0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Jo(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function b0(i,e,t){return new fn({name:"SphericalGaussianBlur",defines:{SAMPLES:p0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Jo(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function ud(){return new fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jo(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function fd(){return new fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Jo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Yo=class extends sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new hr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new jt(5,5,5),r=new fn({name:"CubemapFromEquirect",uniforms:Vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ht,blending:jn});r.uniforms.tEquirect.value=t;let a=new Ge(s,r),o=t.minFilter;return t.minFilter===Si&&(t.minFilter=zt),new Qa(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function x0(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===io||f===so)if(e.has(d)){let m=e.get(d).texture;return o(m,d.mapping)}else{let m=d.image;if(m&&m.height>0){let x=new Yo(m.height);return x.fromEquirectangularTexture(i,d),e.set(d,x),d.addEventListener("dispose",l),o(x.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let f=d.mapping,m=f===io||f===so,x=f===vi||f===Hi;if(m||x){let g=t.get(d),p=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new Xi(i)),g=m?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{let M=d.image;return m&&M&&M.height>0||x&&M&&c(M)?(n===null&&(n=new Xi(i)),g=m?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function o(d,f){return f===io?d.mapping=vi:f===so&&(d.mapping=Hi),d}function c(d){let f=0,m=6;for(let x=0;x<m;x++)d[x]!==void 0&&f++;return f===m}function l(d){let f=d.target;f.removeEventListener("dispose",l);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function v0(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Di("WebGLRenderer: "+n+" extension not supported."),s}}}function S0(i,e,t,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function l(u){let d=[],f=u.index,m=u.attributes.position,x=0;if(m===void 0)return;if(f!==null){let M=f.array;x=f.version;for(let R=0,b=M.length;R<b;R+=3){let w=M[R+0],S=M[R+1],A=M[R+2];d.push(w,S,S,A,A,w)}}else{let M=m.array;x=m.version;for(let R=0,b=M.length/3-1;R<b;R+=3){let w=R+0,S=R+1,A=R+2;d.push(w,S,S,A,A,w)}}let g=new(m.count>=65535?or:ar)(d,1);g.version=x;let p=r.get(u);p&&e.remove(p),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function M0(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,d){i.drawElements(n,d,r,u*a),t.update(d,n,1)}function l(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*a,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let x=0;for(let g=0;g<f;g++)x+=d[g];t.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function w0(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:qe("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function E0(i,e,t){let n=new WeakMap,s=new vt;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let T=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],R=0;f===!0&&(R=1),m===!0&&(R=2),x===!0&&(R=3);let b=o.attributes.position.count*R,w=1;b>e.maxTextureSize&&(w=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let S=new Float32Array(b*w*4*u),A=new sr(S,b,w,u);A.type=bn,A.needsUpdate=!0;let y=R*4;for(let P=0;P<u;P++){let C=g[P],U=p[P],G=M[P],D=b*w*4*P;for(let O=0;O<C.count;O++){let z=O*y;f===!0&&(s.fromBufferAttribute(C,O),S[D+z+0]=s.x,S[D+z+1]=s.y,S[D+z+2]=s.z,S[D+z+3]=0),m===!0&&(s.fromBufferAttribute(U,O),S[D+z+4]=s.x,S[D+z+5]=s.y,S[D+z+6]=s.z,S[D+z+7]=0),x===!0&&(s.fromBufferAttribute(G,O),S[D+z+8]=s.x,S[D+z+9]=s.y,S[D+z+10]=s.z,S[D+z+11]=G.itemSize===4?s.w:1)}}d={count:u,texture:A,size:new oe(b,w)},n.set(o,d),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let m=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function T0(i,e,t,n,s){let r=new WeakMap;function a(l){let h=s.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var R0={[jl]:"LINEAR_TONE_MAPPING",[Yl]:"REINHARD_TONE_MAPPING",[Zl]:"CINEON_TONE_MAPPING",[Ns]:"ACES_FILMIC_TONE_MAPPING",[Kl]:"AGX_TONE_MAPPING",[$l]:"NEUTRAL_TONE_MAPPING",[Jl]:"CUSTOM_TONE_MAPPING"};function A0(i,e,t,n,s,r){let a=new sn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new Ot;l.setAttribute("position",new dt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new dt([0,2,0,0,2,0],2));let h=new za({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Ge(l,h),d=new Is(-1,1,1,-1,0,1),f=null,m=null,x=!1,g,p=null,M=[],R=!1;this.setSize=function(b,w){a.setSize(b,w),o!==null&&o.setSize(b,w),c!==null&&c.setSize(b,w);for(let S=0;S<M.length;S++){let A=M[S];A.setSize&&A.setSize(b,w)}},this.setEffects=function(b){M=b,R=M.length>0&&M[0].isRenderPass===!0;let w=a.width,S=a.height;M.length>0&&o===null&&(o=new sn(w,S,{type:Fn,depthBuffer:!1,stencilBuffer:!1}),c=new sn(w,S,{type:Fn,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<M.length;A++){let y=M[A];y.setSize&&y.setSize(w,S)}},this.begin=function(b,w){if(x||b.toneMapping===Nn&&M.length===0)return!1;if(p=w,w!==null){let S=w.width,A=w.height;(a.width!==S||a.height!==A)&&this.setSize(S,A)}return R===!1&&b.setRenderTarget(a),g=b.toneMapping,b.toneMapping=Nn,!0},this.hasRenderPass=function(){return R},this.end=function(b,w){b.toneMapping=g,x=!0;let S=a,A=o;for(let y=0;y<M.length;y++){let T=M[y];T.enabled!==!1&&(T.render(b,A,S,w),T.needsSwap!==!1&&(S=A,A=A===o?c:o))}if(f!==b.outputColorSpace||m!==b.toneMapping){f=b.outputColorSpace,m=b.toneMapping,h.defines={},st.getTransfer(f)===ht&&(h.defines.SRGB_TRANSFER="");let y=R0[m];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,b.setRenderTarget(p),b.render(u,d),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var Ld=new qt,Ec=new pi(1,1),Nd=new sr,Ud=new Ua,Fd=new hr,pd=[],md=[],gd=new Float32Array(16),_d=new Float32Array(9),yd=new Float32Array(4);function zs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=pd[s];if(r===void 0&&(r=new Float32Array(s),pd[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function It(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Dt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ko(i,e){let t=md[e];t===void 0&&(t=new Int32Array(e),md[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function C0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function P0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2fv(this.addr,e),Dt(t,e)}}function I0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;i.uniform3fv(this.addr,e),Dt(t,e)}}function D0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4fv(this.addr,e),Dt(t,e)}}function L0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;yd.set(n),i.uniformMatrix2fv(this.addr,!1,yd),Dt(t,n)}}function N0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;_d.set(n),i.uniformMatrix3fv(this.addr,!1,_d),Dt(t,n)}}function U0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;gd.set(n),i.uniformMatrix4fv(this.addr,!1,gd),Dt(t,n)}}function F0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function O0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2iv(this.addr,e),Dt(t,e)}}function B0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3iv(this.addr,e),Dt(t,e)}}function k0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4iv(this.addr,e),Dt(t,e)}}function z0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function H0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2uiv(this.addr,e),Dt(t,e)}}function G0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3uiv(this.addr,e),Dt(t,e)}}function V0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4uiv(this.addr,e),Dt(t,e)}}function W0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ec.compareFunction=t.isReversedDepthBuffer()?Xo:Wo,r=Ec):r=Ld,t.setTexture2D(e||r,s)}function X0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Ud,s)}function q0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Fd,s)}function j0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Nd,s)}function Y0(i){switch(i){case 5126:return C0;case 35664:return P0;case 35665:return I0;case 35666:return D0;case 35674:return L0;case 35675:return N0;case 35676:return U0;case 5124:case 35670:return F0;case 35667:case 35671:return O0;case 35668:case 35672:return B0;case 35669:case 35673:return k0;case 5125:return z0;case 36294:return H0;case 36295:return G0;case 36296:return V0;case 35678:case 36198:case 36298:case 36306:case 35682:return W0;case 35679:case 36299:case 36307:return X0;case 35680:case 36300:case 36308:case 36293:return q0;case 36289:case 36303:case 36311:case 36292:return j0}}function Z0(i,e){i.uniform1fv(this.addr,e)}function J0(i,e){let t=zs(e,this.size,2);i.uniform2fv(this.addr,t)}function K0(i,e){let t=zs(e,this.size,3);i.uniform3fv(this.addr,t)}function $0(i,e){let t=zs(e,this.size,4);i.uniform4fv(this.addr,t)}function Q0(i,e){let t=zs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function eg(i,e){let t=zs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function tg(i,e){let t=zs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ng(i,e){i.uniform1iv(this.addr,e)}function ig(i,e){i.uniform2iv(this.addr,e)}function sg(i,e){i.uniform3iv(this.addr,e)}function rg(i,e){i.uniform4iv(this.addr,e)}function ag(i,e){i.uniform1uiv(this.addr,e)}function og(i,e){i.uniform2uiv(this.addr,e)}function lg(i,e){i.uniform3uiv(this.addr,e)}function cg(i,e){i.uniform4uiv(this.addr,e)}function hg(i,e,t){let n=this.cache,s=e.length,r=Ko(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ec:a=Ld;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function dg(i,e,t){let n=this.cache,s=e.length,r=Ko(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Ud,r[a])}function ug(i,e,t){let n=this.cache,s=e.length,r=Ko(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Fd,r[a])}function fg(i,e,t){let n=this.cache,s=e.length,r=Ko(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Nd,r[a])}function pg(i){switch(i){case 5126:return Z0;case 35664:return J0;case 35665:return K0;case 35666:return $0;case 35674:return Q0;case 35675:return eg;case 35676:return tg;case 5124:case 35670:return ng;case 35667:case 35671:return ig;case 35668:case 35672:return sg;case 35669:case 35673:return rg;case 5125:return ag;case 36294:return og;case 36295:return lg;case 36296:return cg;case 35678:case 36198:case 36298:case 36306:case 35682:return hg;case 35679:case 36299:case 36307:return dg;case 35680:case 36300:case 36308:case 36293:return ug;case 36289:case 36303:case 36311:case 36292:return fg}}var Tc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Y0(t.type)}},Rc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pg(t.type)}},Ac=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Mc=/(\w+)(\])?(\[|\.)?/g;function bd(i,e){i.seq.push(e),i.map[e.id]=e}function mg(i,e,t){let n=i.name,s=n.length;for(Mc.lastIndex=0;;){let r=Mc.exec(n),a=Mc.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){bd(t,l===void 0?new Tc(o,i,e):new Rc(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Ac(o),bd(t,u)),t=u}}}var ks=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);mg(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function xd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var gg=37297,_g=0;function yg(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var vd=new Je;function bg(i){st._getMatrix(vd,st.workingColorSpace,i);let e=`mat3( ${vd.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(i)){case ir:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Sd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+yg(i.getShaderSource(e),o)}else return r}function xg(i,e){let t=bg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var vg={[jl]:"Linear",[Yl]:"Reinhard",[Zl]:"Cineon",[Ns]:"ACESFilmic",[Kl]:"AgX",[$l]:"Neutral",[Jl]:"Custom"};function Sg(i,e){let t=vg[e];return t===void 0?(Ve("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var jo=new I;function Mg(){st.getLuminanceCoefficients(jo);let i=jo.x.toFixed(4),e=jo.y.toFixed(4),t=jo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gr).join(`
`)}function Eg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Tg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Gr(i){return i!==""}function Md(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Rg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cc(i){return i.replace(Rg,Cg)}var Ag=new Map;function Cg(i,e){let t=Qe[e];if(t===void 0){let n=Ag.get(e);if(n!==void 0)t=Qe[n],Ve('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Cc(t)}var Pg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ed(i){return i.replace(Pg,Ig)}function Ig(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Td(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Dg={[ki]:"SHADOWMAP_TYPE_PCF",[Ds]:"SHADOWMAP_TYPE_VSM"};function Lg(i){return Dg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Ng={[vi]:"ENVMAP_TYPE_CUBE",[Hi]:"ENVMAP_TYPE_CUBE",[Ir]:"ENVMAP_TYPE_CUBE_UV"};function Ug(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Ng[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Fg={[Hi]:"ENVMAP_MODE_REFRACTION"};function Og(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Fg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Bg={[no]:"ENVMAP_BLENDING_MULTIPLY",[kh]:"ENVMAP_BLENDING_MIX",[zh]:"ENVMAP_BLENDING_ADD"};function kg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Bg[i.combine]||"ENVMAP_BLENDING_NONE"}function zg(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Hg(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=Lg(t),l=Ug(t),h=Og(t),u=kg(t),d=zg(t),f=wg(t),m=Eg(r),x=s.createProgram(),g,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Gr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Gr).join(`
`),p.length>0&&(p+=`
`)):(g=[Td(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gr).join(`
`),p=[Td(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Nn?"#define TONE_MAPPING":"",t.toneMapping!==Nn?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Nn?Sg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,xg("linearToOutputTexel",t.outputColorSpace),Mg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gr).join(`
`)),a=Cc(a),a=Md(a,t),a=wd(a,t),o=Cc(o),o=Md(o,t),o=wd(o,t),a=Ed(a),o=Ed(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===ac?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ac?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let R=M+g+a,b=M+p+o,w=xd(s,s.VERTEX_SHADER,R),S=xd(s,s.FRAGMENT_SHADER,b);s.attachShader(x,w),s.attachShader(x,S),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(C){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(x)||"",G=s.getShaderInfoLog(w)||"",D=s.getShaderInfoLog(S)||"",O=U.trim(),z=G.trim(),j=D.trim(),ne=!0,X=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(ne=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,w,S);else{let Z=Sd(s,w,"vertex"),ie=Sd(s,S,"fragment");qe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+O+`
`+Z+`
`+ie)}else O!==""?Ve("WebGLProgram: Program Info Log:",O):(z===""||j==="")&&(X=!1);X&&(C.diagnostics={runnable:ne,programLog:O,vertexShader:{log:z,prefix:g},fragmentShader:{log:j,prefix:p}})}s.deleteShader(w),s.deleteShader(S),y=new ks(s,x),T=Tg(s,x)}let y;this.getUniforms=function(){return y===void 0&&A(this),y};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(x,gg)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_g++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=S,this}var Gg=0,Pc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ic(e),t.set(e,n)),n}},Ic=class{constructor(e){this.id=Gg++,this.code=e,this.usedTimes=0}};function Vg(i){return i===wi||i===Or||i===Br}function Wg(i,e,t,n,s,r){let a=new rr,o=new Pc,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return c.add(y),y===0?"uv":`uv${y}`}function x(y,T,P,C,U,G){let D=C.fog,O=U.geometry,z=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?C.environment:null,j=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,ne=e.get(y.envMap||z,j),X=ne&&ne.mapping===Ir?ne.image.height:null,Z=f[y.type];y.precision!==null&&(d=n.getMaxPrecision(y.precision),d!==y.precision&&Ve("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let ie=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ve=ie!==void 0?ie.length:0,_e=0;O.morphAttributes.position!==void 0&&(_e=1),O.morphAttributes.normal!==void 0&&(_e=2),O.morphAttributes.color!==void 0&&(_e=3);let He,Xe,je,W;if(Z){let ut=Zn[Z];He=ut.vertexShader,Xe=ut.fragmentShader}else{He=y.vertexShader,Xe=y.fragmentShader;let ut=o.getVertexShaderStage(y),tt=o.getFragmentShaderStage(y);o.update(y,ut,tt),je=ut.id,W=tt.id}let K=i.getRenderTarget(),ye=i.state.buffers.depth.getReversed(),Ue=U.isInstancedMesh===!0,ge=U.isBatchedMesh===!0,De=!!y.map,rt=!!y.matcap,te=!!ne,J=!!y.aoMap,re=!!y.lightMap,ae=!!y.bumpMap&&y.wireframe===!1,le=!!y.normalMap,Ie=!!y.displacementMap,Fe=!!y.emissiveMap,Be=!!y.metalnessMap,ke=!!y.roughnessMap,L=y.anisotropy>0,et=y.clearcoat>0,Ye=y.dispersion>0,E=y.retroreflectivity>0,_=y.iridescence>0,B=y.sheen>0,V=y.transmission>0,Y=L&&!!y.anisotropyMap,ce=et&&!!y.clearcoatMap,he=et&&!!y.clearcoatNormalMap,$=et&&!!y.clearcoatRoughnessMap,ee=_&&!!y.iridescenceMap,de=_&&!!y.iridescenceThicknessMap,Oe=B&&!!y.sheenColorMap,pe=B&&!!y.sheenRoughnessMap,be=!!y.specularMap,Ae=!!y.specularColorMap,Le=!!y.specularIntensityMap,Ze=V&&!!y.transmissionMap,F=V&&!!y.thicknessMap,xe=!!y.gradientMap,Q=!!y.alphaMap,ue=y.alphaTest>0,Me=!!y.alphaHash,se=!!y.extensions,Ce=Nn;y.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ce=i.toneMapping);let we={shaderID:Z,shaderType:y.type,shaderName:y.name,vertexShader:He,fragmentShader:Xe,defines:y.defines,customVertexShaderID:je,customFragmentShaderID:W,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:ge,batchingColor:ge&&U._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&U.instanceColor!==null,instancingMorph:Ue&&U.morphTexture!==null,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:st.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:De,matcap:rt,envMap:te,envMapMode:te&&ne.mapping,envMapCubeUVHeight:X,aoMap:J,lightMap:re,bumpMap:ae,normalMap:le,displacementMap:Ie,emissiveMap:Fe,normalMapObjectSpace:le&&y.normalMapType===Vh,normalMapTangentSpace:le&&y.normalMapType===kr,packedNormalMap:le&&y.normalMapType===kr&&Vg(y.normalMap.format),metalnessMap:Be,roughnessMap:ke,anisotropy:L,anisotropyMap:Y,clearcoat:et,clearcoatMap:ce,clearcoatNormalMap:he,clearcoatRoughnessMap:$,dispersion:Ye,retroreflection:E,iridescence:_,iridescenceMap:ee,iridescenceThicknessMap:de,sheen:B,sheenColorMap:Oe,sheenRoughnessMap:pe,specularMap:be,specularColorMap:Ae,specularIntensityMap:Le,transmission:V,transmissionMap:Ze,thicknessMap:F,gradientMap:xe,opaque:y.transparent===!1&&y.blending===Ls&&y.alphaToCoverage===!1,alphaMap:Q,alphaTest:ue,alphaHash:Me,combine:y.combine,mapUv:De&&m(y.map.channel),aoMapUv:J&&m(y.aoMap.channel),lightMapUv:re&&m(y.lightMap.channel),bumpMapUv:ae&&m(y.bumpMap.channel),normalMapUv:le&&m(y.normalMap.channel),displacementMapUv:Ie&&m(y.displacementMap.channel),emissiveMapUv:Fe&&m(y.emissiveMap.channel),metalnessMapUv:Be&&m(y.metalnessMap.channel),roughnessMapUv:ke&&m(y.roughnessMap.channel),anisotropyMapUv:Y&&m(y.anisotropyMap.channel),clearcoatMapUv:ce&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:he&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:de&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:pe&&m(y.sheenRoughnessMap.channel),specularMapUv:be&&m(y.specularMap.channel),specularColorMapUv:Ae&&m(y.specularColorMap.channel),specularIntensityMapUv:Le&&m(y.specularIntensityMap.channel),transmissionMapUv:Ze&&m(y.transmissionMap.channel),thicknessMapUv:F&&m(y.thicknessMap.channel),alphaMapUv:Q&&m(y.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(le||L),vertexNormals:!!O.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!O.attributes.uv&&(De||Q),fog:!!D,useFog:y.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||O.attributes.normal===void 0&&le===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ye,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:_e,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ce,decodeVideoTexture:De&&y.map.isVideoTexture===!0&&st.getTransfer(y.map.colorSpace)===ht,decodeVideoTextureEmissive:Fe&&y.emissiveMap.isVideoTexture===!0&&st.getTransfer(y.emissiveMap.colorSpace)===ht,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===yn,flipSided:y.side===Ht,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:se&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&y.extensions.multiDraw===!0||ge)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return we.vertexUv1s=c.has(1),we.vertexUv2s=c.has(2),we.vertexUv3s=c.has(3),c.clear(),we}function g(y){let T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(let P in y.defines)T.push(P),T.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(p(T,y),M(T,y),T.push(i.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function p(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numSunLights),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numSunLightShadows),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function M(y,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function R(y){let T=f[y.type],P;if(T){let C=Zn[T];P=od.clone(C.uniforms)}else P=y.uniforms;return P}function b(y,T){let P=h.get(T);return P!==void 0?++P.usedTimes:(P=new Hg(i,T,y,s),l.push(P),h.set(T,P)),P}function w(y){if(--y.usedTimes===0){let T=l.indexOf(y);l[T]=l[l.length-1],l.pop(),h.delete(y.cacheKey),y.destroy()}}function S(y){o.remove(y)}function A(){o.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:R,acquireProgram:b,releaseProgram:w,releaseShaderCache:S,programs:l,dispose:A}}function Xg(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function qg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Rd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ad(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,m,x,g,p){let M=i[e];return M===void 0?(M={id:d.id,object:d,geometry:f,material:m,materialVariant:a(d),groupOrder:x,renderOrder:d.renderOrder,z:g,group:p},i[e]=M):(M.id=d.id,M.object=d,M.geometry=f,M.material=m,M.materialVariant=a(d),M.groupOrder=x,M.renderOrder=d.renderOrder,M.z=g,M.group=p),e++,M}function c(d,f,m,x,g,p,M){M.reversedDepth===!0&&(g=-g);let R=o(d,f,m,x,g,p);m.transmission>0?n.push(R):m.transparent===!0?s.push(R):t.push(R)}function l(d,f,m,x,g,p){let M=o(d,f,m,x,g,p);m.transmission>0?n.unshift(M):m.transparent===!0?s.unshift(M):t.unshift(M)}function h(d,f){t.length>1&&t.sort(d||qg),n.length>1&&n.sort(f||Rd),s.length>1&&s.sort(f||Rd)}function u(){for(let d=e,f=i.length;d<f;d++){let m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:u,sort:h}}function jg(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Ad,i.set(n,[a])):s>=r.length?(a=new Ad,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Yg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new I,color:new We};break;case"SpotLight":t={position:new I,direction:new I,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function Zg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Jg=0;function Kg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function $g(i){let e=new Yg,t=Zg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);let s=new I,r=new gt,a=new gt;function o(l){let h=0,u=0,d=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,M=0,R=0,b=0,w=0,S=0,A=0,y=0,T=0,P=0;l.sort(Kg);for(let U=0,G=l.length;U<G;U++){let D=l[U],O=D.color,z=D.intensity,j=D.distance,ne=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===wi?ne=D.shadow.map.texture:ne=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=O.r*z,u+=O.g*z,d+=O.b*z;else if(D.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(D.sh.coefficients[X],z);P++}else if(D.isSunLight){let X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Z=D.shadow,ie=t.get(D);ie.shadowIntensity=Z.intensity,ie.shadowBias=Z.bias,ie.shadowNormalBias=Z.normalBias,ie.shadowRadius=Z.radius,ie.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),n.sunShadow[m]=ie,n.sunShadowMap[m]=ne;let ve=Z.getViewportCount();for(let _e=0;_e<ve;_e++)n.sunShadowMatrix[x+_e]=Z.getMatrix(_e),n.sunShadowCascade[x+_e]=Z._cascadeData[_e];x+=ve,m++}n.sun[f]=X,f++}else if(D.isDirectionalLight){let X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Z=D.shadow,ie=t.get(D);ie.shadowIntensity=Z.intensity,ie.shadowBias=Z.bias,ie.shadowNormalBias=Z.normalBias,ie.shadowRadius=Z.radius,ie.shadowMapSize=Z.mapSize,n.directionalShadow[g]=ie,n.directionalShadowMap[g]=ne,n.directionalShadowMatrix[g]=D.shadow.matrix,w++}n.directional[g]=X,g++}else if(D.isSpotLight){let X=e.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(O).multiplyScalar(z),X.distance=j,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,n.spot[M]=X;let Z=D.shadow;if(D.map&&(n.spotLightMap[y]=D.map,y++,Z.updateMatrices(D),D.castShadow&&T++),n.spotLightMatrix[M]=Z.matrix,D.castShadow){let ie=t.get(D);ie.shadowIntensity=Z.intensity,ie.shadowBias=Z.bias,ie.shadowNormalBias=Z.normalBias,ie.shadowRadius=Z.radius,ie.shadowMapSize=Z.mapSize,n.spotShadow[M]=ie,n.spotShadowMap[M]=ne,A++}M++}else if(D.isRectAreaLight){let X=e.get(D);X.color.copy(O).multiplyScalar(z),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),n.rectArea[R]=X,R++}else if(D.isPointLight){let X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){let Z=D.shadow,ie=t.get(D);ie.shadowIntensity=Z.intensity,ie.shadowBias=Z.bias,ie.shadowNormalBias=Z.normalBias,ie.shadowRadius=Z.radius,ie.shadowMapSize=Z.mapSize,ie.shadowCameraNear=Z.camera.near,ie.shadowCameraFar=Z.camera.far,n.pointShadow[p]=ie,n.pointShadowMap[p]=ne,n.pointShadowMatrix[p]=D.shadow.matrix,S++}n.point[p]=X,p++}else if(D.isHemisphereLight){let X=e.get(D);X.skyColor.copy(D.color).multiplyScalar(z),X.groundColor.copy(D.groundColor).multiplyScalar(z),n.hemi[b]=X,b++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Se.LTC_FLOAT_1,n.rectAreaLTC2=Se.LTC_FLOAT_2):(n.rectAreaLTC1=Se.LTC_HALF_1,n.rectAreaLTC2=Se.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let C=n.hash;(C.sunLength!==f||C.directionalLength!==g||C.pointLength!==p||C.spotLength!==M||C.rectAreaLength!==R||C.hemiLength!==b||C.numSunShadows!==m||C.numDirectionalShadows!==w||C.numPointShadows!==S||C.numSpotShadows!==A||C.numSpotMaps!==y||C.numLightProbes!==P)&&(n.sun.length=f,n.directional.length=g,n.spot.length=M,n.rectArea.length=R,n.point.length=p,n.hemi.length=b,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+y-T,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=P,C.sunLength=f,C.directionalLength=g,C.pointLength=p,C.spotLength=M,C.rectAreaLength=R,C.hemiLength=b,C.numSunShadows=m,C.numDirectionalShadows=w,C.numPointShadows=S,C.numSpotShadows=A,C.numSpotMaps=y,C.numLightProbes=P,n.version=Jg++)}function c(l,h){let u=0,d=0,f=0,m=0,x=0,g=0,p=h.matrixWorldInverse;for(let M=0,R=l.length;M<R;M++){let b=l[M];if(b.isSunLight){let w=n.sun[u];w.direction.setFromMatrixPosition(b.matrixWorld),w.direction.transformDirection(p),u++}else if(b.isDirectionalLight){let w=n.directional[d];w.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),d++}else if(b.isSpotLight){let w=n.spot[m];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),m++}else if(b.isRectAreaLight){let w=n.rectArea[x];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(p),a.identity(),r.copy(b.matrixWorld),r.premultiply(p),a.extractRotation(r),w.halfWidth.set(b.width*.5,0,0),w.halfHeight.set(0,b.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),x++}else if(b.isPointLight){let w=n.point[f];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){let w=n.hemi[g];w.direction.setFromMatrixPosition(b.matrixWorld),w.direction.transformDirection(p),g++}}}return{setup:o,setupView:c,state:n}}function Cd(i){let e=new $g(i),t=[],n=[],s=[];function r(d){u.camera=d,t.length=0,n.length=0,s.length=0}function a(d){t.push(d)}function o(d){n.push(d)}function c(d){s.push(d)}function l(){e.setup(t)}function h(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function Qg(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Cd(i),e.set(s,[o])):r>=a.length?(o=new Cd(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var e_=`void main() {
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
}`,n_=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],i_=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Pd=new gt,Hr=new I,wc=new I;function s_(i,e,t){let n=new Ss,s=new oe,r=new oe,a=new vt,o=new Ha,c=new Ga,l={},h=t.maxTextureSize,u={[qn]:Ht,[Ht]:qn,[yn]:yn},d=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:e_,fragmentShader:t_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new Ot;m.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ge(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ki;let p=this.type;this.render=function(S,A,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;this.type===xh&&(Ve("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ki);let T=i.getRenderTarget(),P=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),U=i.state;U.setBlending(jn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let G=p!==this.type;G&&A.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(O=>O.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,O=S.length;D<O;D++){let z=S[D],j=z.shadow;if(j===void 0){Ve("WebGLShadowMap:",z,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);let ne=j.getFrameExtents();s.multiply(ne),r.copy(j.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ne.x),s.x=r.x*ne.x,j.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ne.y),s.y=r.y*ne.y,j.mapSize.y=r.y));let X=i.state.buffers.depth.getReversed();if(j.camera._reversedDepth=X,j.map===null||G===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===Ds){if(z.isPointLight){Ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new sn(s.x,s.y,{format:wi,type:Fn,minFilter:zt,magFilter:zt,generateMipmaps:!1}),j.map.texture.name=z.name+".shadowMap",j.map.depthTexture=new pi(s.x,s.y,bn),j.map.depthTexture.name=z.name+".shadowMapDepth",j.map.depthTexture.format=Gn,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=Ut,j.map.depthTexture.magFilter=Ut}else z.isPointLight?(j.map=new Yo(s.x),j.map.depthTexture=new Fa(s.x,Un)):(j.map=new sn(s.x,s.y),j.map.depthTexture=new pi(s.x,s.y,Un)),j.map.depthTexture.name=z.name+".shadowMap",j.map.depthTexture.format=Gn,this.type===ki?(j.map.depthTexture.compareFunction=X?Xo:Wo,j.map.depthTexture.minFilter=zt,j.map.depthTexture.magFilter=zt):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=Ut,j.map.depthTexture.magFilter=Ut);j.camera.updateProjectionMatrix()}j.map.isWebGLCubeRenderTarget!==!0&&(j.map.width!==s.x||j.map.height!==s.y)&&j.map.setSize(s.x,s.y);let Z=j.map.isWebGLCubeRenderTarget?6:j.getViewportCount();z.isPointLight!==!0&&j.updateMatrices(z,y);for(let ie=0;ie<Z;ie++){let ve=j.getCamera(ie);if(z.isPointLight){let _e=j.camera,He=j.matrix,Xe=z.distance||_e.far;Xe!==_e.far&&(_e.far=Xe,_e.updateProjectionMatrix()),Hr.setFromMatrixPosition(z.matrixWorld),_e.position.copy(Hr),wc.copy(_e.position),wc.add(n_[ie]),_e.up.copy(i_[ie]),_e.lookAt(wc),_e.updateMatrixWorld(),He.makeTranslation(-Hr.x,-Hr.y,-Hr.z),Pd.multiplyMatrices(_e.projectionMatrix,_e.matrixWorldInverse),j._frustum.setFromProjectionMatrix(Pd,_e.coordinateSystem,_e.reversedDepth)}if(j.map.isWebGLCubeRenderTarget)i.setRenderTarget(j.map,ie),i.clear();else{ie===0&&(i.setRenderTarget(j.map),i.clear());let _e=j.getViewport(ie);a.set(r.x*_e.x,r.y*_e.y,r.x*_e.z,r.y*_e.w),U.viewport(a)}n=j.getFrustum(ie),b(A,y,ve,z,this.type)}j.isPointLightShadow!==!0&&this.type===Ds&&M(j,y),j.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(T,P,C)};function M(S,A){let y=e.update(x);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null?S.mapPass=new sn(s.x,s.y,{format:wi,type:Fn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),d.uniforms.shadow_pass.value=S.map.depthTexture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(A,null,y,d,x,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(A,null,y,f,x,null)}function R(S,A,y,T){let P=null,C=y.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(C!==void 0)P=C;else if(P=y.isPointLight===!0?c:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let U=P.uuid,G=A.uuid,D=l[U];D===void 0&&(D={},l[U]=D);let O=D[G];O===void 0&&(O=P.clone(),D[G]=O,A.addEventListener("dispose",w)),P=O}if(P.visible=A.visible,P.wireframe=A.wireframe,T===Ds?P.side=A.shadowSide!==null?A.shadowSide:A.side:P.side=A.shadowSide!==null?A.shadowSide:u[A.side],P.alphaMap=A.alphaMap,P.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,P.map=A.map,P.clipShadows=A.clipShadows,P.clippingPlanes=A.clippingPlanes,P.clipIntersection=A.clipIntersection,P.displacementMap=A.displacementMap,P.displacementScale=A.displacementScale,P.displacementBias=A.displacementBias,P.wireframeLinewidth=A.wireframeLinewidth,P.linewidth=A.linewidth,y.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let U=i.properties.get(P);U.light=y}return P}function b(S,A,y,T,P){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&P===Ds)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,S.matrixWorld);let G=e.update(S),D=S.material;if(Array.isArray(D)){let O=G.groups;for(let z=0,j=O.length;z<j;z++){let ne=O[z],X=D[ne.materialIndex];if(X&&X.visible){let Z=R(S,X,T,P);S.onBeforeShadow(i,S,A,y,G,Z,ne),i.renderBufferDirect(y,null,G,Z,S,ne),S.onAfterShadow(i,S,A,y,G,Z,ne)}}}else if(D.visible){let O=R(S,D,T,P);S.onBeforeShadow(i,S,A,y,G,O,null),i.renderBufferDirect(y,null,G,O,S,null),S.onAfterShadow(i,S,A,y,G,O,null)}}let U=S.children;for(let G=0,D=U.length;G<D;G++)b(U[G],A,y,T,P)}function w(S){S.target.removeEventListener("dispose",w);for(let y in l){let T=l[y],P=S.target.uuid;P in T&&(T[P].dispose(),delete T[P])}}}function r_(i,e){function t(){let F=!1,xe=new vt,Q=null,ue=new vt(0,0,0,0);return{setMask:function(Me){Q!==Me&&!F&&(i.colorMask(Me,Me,Me,Me),Q=Me)},setLocked:function(Me){F=Me},setClear:function(Me,se,Ce,we,ut){ut===!0&&(Me*=we,se*=we,Ce*=we),xe.set(Me,se,Ce,we),ue.equals(xe)===!1&&(i.clearColor(Me,se,Ce,we),ue.copy(xe))},reset:function(){F=!1,Q=null,ue.set(-1,0,0,0)}}}function n(){let F=!1,xe=!1,Q=null,ue=null,Me=null;return{setReversed:function(se){if(xe!==se){let Ce=e.get("EXT_clip_control");se?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),xe=se;let we=Me;Me=null,this.setClear(we)}},getReversed:function(){return xe},setTest:function(se){se?K(i.DEPTH_TEST):ye(i.DEPTH_TEST)},setMask:function(se){Q!==se&&!F&&(i.depthMask(se),Q=se)},setFunc:function(se){if(xe&&(se=td[se]),ue!==se){switch(se){case wa:i.depthFunc(i.NEVER);break;case Ea:i.depthFunc(i.ALWAYS);break;case Ta:i.depthFunc(i.LESS);break;case fs:i.depthFunc(i.LEQUAL);break;case Ra:i.depthFunc(i.EQUAL);break;case Aa:i.depthFunc(i.GEQUAL);break;case Ca:i.depthFunc(i.GREATER);break;case Pa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ue=se}},setLocked:function(se){F=se},setClear:function(se){Me!==se&&(Me=se,xe&&(se=1-se),i.clearDepth(se))},reset:function(){F=!1,Q=null,ue=null,Me=null,xe=!1}}}function s(){let F=!1,xe=null,Q=null,ue=null,Me=null,se=null,Ce=null,we=null,ut=null;return{setTest:function(tt){F||(tt?K(i.STENCIL_TEST):ye(i.STENCIL_TEST))},setMask:function(tt){xe!==tt&&!F&&(i.stencilMask(tt),xe=tt)},setFunc:function(tt,wt,St){(Q!==tt||ue!==wt||Me!==St)&&(i.stencilFunc(tt,wt,St),Q=tt,ue=wt,Me=St)},setOp:function(tt,wt,St){(se!==tt||Ce!==wt||we!==St)&&(i.stencilOp(tt,wt,St),se=tt,Ce=wt,we=St)},setLocked:function(tt){F=tt},setClear:function(tt){ut!==tt&&(i.clearStencil(tt),ut=tt)},reset:function(){F=!1,xe=null,Q=null,ue=null,Me=null,se=null,Ce=null,we=null,ut=null}}}let r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},u={},d={},f=new WeakMap,m=[],x=null,g=!1,p=null,M=null,R=null,b=null,w=null,S=null,A=null,y=new We(0,0,0),T=0,P=!1,C=null,U=null,G=null,D=null,O=null,z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,ne=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(X)[1]),j=ne>=1):X.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),j=ne>=2);let Z=null,ie={},ve=i.getParameter(i.SCISSOR_BOX),_e=i.getParameter(i.VIEWPORT),He=new vt().fromArray(ve),Xe=new vt().fromArray(_e);function je(F,xe,Q,ue){let Me=new Uint8Array(4),se=i.createTexture();i.bindTexture(F,se),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ce=0;Ce<Q;Ce++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(xe,0,i.RGBA,1,1,ue,0,i.RGBA,i.UNSIGNED_BYTE,Me):i.texImage2D(xe+Ce,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Me);return se}let W={};W[i.TEXTURE_2D]=je(i.TEXTURE_2D,i.TEXTURE_2D,1),W[i.TEXTURE_CUBE_MAP]=je(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[i.TEXTURE_2D_ARRAY]=je(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),W[i.TEXTURE_3D]=je(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(i.DEPTH_TEST),a.setFunc(fs),ae(!1),le(Hl),K(i.CULL_FACE),J(jn);function K(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function ye(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function Ue(F,xe){return d[F]!==xe?(i.bindFramebuffer(F,xe),d[F]=xe,F===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=xe),F===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=xe),!0):!1}function ge(F,xe){let Q=m,ue=!1;if(F){Q=f.get(xe),Q===void 0&&(Q=[],f.set(xe,Q));let Me=F.textures;if(Q.length!==Me.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let se=0,Ce=Me.length;se<Ce;se++)Q[se]=i.COLOR_ATTACHMENT0+se;Q.length=Me.length,ue=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,ue=!0);ue&&i.drawBuffers(Q)}function De(F){return x!==F?(i.useProgram(F),x=F,!0):!1}let rt={[zi]:i.FUNC_ADD,[Sh]:i.FUNC_SUBTRACT,[Mh]:i.FUNC_REVERSE_SUBTRACT};rt[wh]=i.MIN,rt[Eh]=i.MAX;let te={[Th]:i.ZERO,[Rh]:i.ONE,[Ah]:i.SRC_COLOR,[Xl]:i.SRC_ALPHA,[Nh]:i.SRC_ALPHA_SATURATE,[Dh]:i.DST_COLOR,[Ph]:i.DST_ALPHA,[Ch]:i.ONE_MINUS_SRC_COLOR,[ql]:i.ONE_MINUS_SRC_ALPHA,[Lh]:i.ONE_MINUS_DST_COLOR,[Ih]:i.ONE_MINUS_DST_ALPHA,[Uh]:i.CONSTANT_COLOR,[Fh]:i.ONE_MINUS_CONSTANT_COLOR,[Oh]:i.CONSTANT_ALPHA,[Bh]:i.ONE_MINUS_CONSTANT_ALPHA};function J(F,xe,Q,ue,Me,se,Ce,we,ut,tt){if(F===jn){g===!0&&(ye(i.BLEND),g=!1);return}if(g===!1&&(K(i.BLEND),g=!0),F!==vh){if(F!==p||tt!==P){if((M!==zi||w!==zi)&&(i.blendEquation(i.FUNC_ADD),M=zi,w=zi),tt)switch(F){case Ls:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gl:i.blendFunc(i.ONE,i.ONE);break;case Vl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:qe("WebGLState: Invalid blending: ",F);break}else switch(F){case Ls:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Vl:qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wl:qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qe("WebGLState: Invalid blending: ",F);break}R=null,b=null,S=null,A=null,y.set(0,0,0),T=0,p=F,P=tt}return}Me=Me||xe,se=se||Q,Ce=Ce||ue,(xe!==M||Me!==w)&&(i.blendEquationSeparate(rt[xe],rt[Me]),M=xe,w=Me),(Q!==R||ue!==b||se!==S||Ce!==A)&&(i.blendFuncSeparate(te[Q],te[ue],te[se],te[Ce]),R=Q,b=ue,S=se,A=Ce),(we.equals(y)===!1||ut!==T)&&(i.blendColor(we.r,we.g,we.b,ut),y.copy(we),T=ut),p=F,P=!1}function re(F,xe){F.side===yn?ye(i.CULL_FACE):K(i.CULL_FACE);let Q=F.side===Ht;xe&&(Q=!Q),ae(Q),F.blending===Ls&&F.transparent===!1?J(jn):J(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);let ue=F.stencilWrite;o.setTest(ue),ue&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Fe(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):ye(i.SAMPLE_ALPHA_TO_COVERAGE)}function ae(F){C!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),C=F)}function le(F){F!==yh?(K(i.CULL_FACE),F!==U&&(F===Hl?i.cullFace(i.BACK):F===bh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ye(i.CULL_FACE),U=F}function Ie(F){F!==G&&(j&&i.lineWidth(F),G=F)}function Fe(F,xe,Q){F?(K(i.POLYGON_OFFSET_FILL),(D!==xe||O!==Q)&&(D=xe,O=Q,a.getReversed()&&(xe=-xe),i.polygonOffset(xe,Q))):ye(i.POLYGON_OFFSET_FILL)}function Be(F){F?K(i.SCISSOR_TEST):ye(i.SCISSOR_TEST)}function ke(F){F===void 0&&(F=i.TEXTURE0+z-1),Z!==F&&(i.activeTexture(F),Z=F)}function L(F,xe,Q){Q===void 0&&(Z===null?Q=i.TEXTURE0+z-1:Q=Z);let ue=ie[Q];ue===void 0&&(ue={type:void 0,texture:void 0},ie[Q]=ue),(ue.type!==F||ue.texture!==xe)&&(Z!==Q&&(i.activeTexture(Q),Z=Q),i.bindTexture(F,xe||W[F]),ue.type=F,ue.texture=xe)}function et(){let F=ie[Z];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Ye(){try{i.compressedTexImage2D(...arguments)}catch(F){qe("WebGLState:",F)}}function E(){try{i.compressedTexImage3D(...arguments)}catch(F){qe("WebGLState:",F)}}function _(){try{i.texSubImage2D(...arguments)}catch(F){qe("WebGLState:",F)}}function B(){try{i.texSubImage3D(...arguments)}catch(F){qe("WebGLState:",F)}}function V(){try{i.compressedTexSubImage2D(...arguments)}catch(F){qe("WebGLState:",F)}}function Y(){try{i.compressedTexSubImage3D(...arguments)}catch(F){qe("WebGLState:",F)}}function ce(){try{i.texStorage2D(...arguments)}catch(F){qe("WebGLState:",F)}}function he(){try{i.texStorage3D(...arguments)}catch(F){qe("WebGLState:",F)}}function $(){try{i.texImage2D(...arguments)}catch(F){qe("WebGLState:",F)}}function ee(){try{i.texImage3D(...arguments)}catch(F){qe("WebGLState:",F)}}function de(F){return u[F]!==void 0?u[F]:i.getParameter(F)}function Oe(F,xe){u[F]!==xe&&(i.pixelStorei(F,xe),u[F]=xe)}function pe(F){He.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),He.copy(F))}function be(F){Xe.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Xe.copy(F))}function Ae(F,xe){let Q=l.get(xe);Q===void 0&&(Q=new WeakMap,l.set(xe,Q));let ue=Q.get(F);ue===void 0&&(ue=i.getUniformBlockIndex(xe,F.name),Q.set(F,ue))}function Le(F,xe){let ue=l.get(xe).get(F);c.get(xe)!==ue&&(i.uniformBlockBinding(xe,ue,F.__bindingPointIndex),c.set(xe,ue))}function Ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},Z=null,ie={},d={},f=new WeakMap,m=[],x=null,g=!1,p=null,M=null,R=null,b=null,w=null,S=null,A=null,y=new We(0,0,0),T=0,P=!1,C=null,U=null,G=null,D=null,O=null,He.set(0,0,i.canvas.width,i.canvas.height),Xe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:K,disable:ye,bindFramebuffer:Ue,drawBuffers:ge,useProgram:De,setBlending:J,setMaterial:re,setFlipSided:ae,setCullFace:le,setLineWidth:Ie,setPolygonOffset:Fe,setScissorTest:Be,activeTexture:ke,bindTexture:L,unbindTexture:et,compressedTexImage2D:Ye,compressedTexImage3D:E,texImage2D:$,texImage3D:ee,pixelStorei:Oe,getParameter:de,updateUBOMapping:Ae,uniformBlockBinding:Le,texStorage2D:ce,texStorage3D:he,texSubImage2D:_,texSubImage3D:B,compressedTexSubImage2D:V,compressedTexSubImage3D:Y,scissor:pe,viewport:be,reset:Ze}}function a_(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new oe,h=new WeakMap,u=new Set,d,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(E,_){return m?new OffscreenCanvas(E,_):ms("canvas")}function g(E,_,B){let V=1,Y=Ye(E);if((Y.width>B||Y.height>B)&&(V=B/Math.max(Y.width,Y.height)),V<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let ce=Math.floor(V*Y.width),he=Math.floor(V*Y.height);d===void 0&&(d=x(ce,he));let $=_?x(ce,he):d;return $.width=ce,$.height=he,$.getContext("2d").drawImage(E,0,0,ce,he),Ve("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+ce+"x"+he+")."),$}else return"data"in E&&Ve("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),E;return E}function p(E){return E.generateMipmaps}function M(E){i.generateMipmap(E)}function R(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(E,_,B,V,Y,ce=!1){if(E!==null){if(i[E]!==void 0)return i[E];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let he;V&&(he=e.get("EXT_texture_norm16"),he||Ve("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=_;if(_===i.RED&&(B===i.FLOAT&&($=i.R32F),B===i.HALF_FLOAT&&($=i.R16F),B===i.UNSIGNED_BYTE&&($=i.R8),B===i.UNSIGNED_SHORT&&he&&($=he.R16_EXT),B===i.SHORT&&he&&($=he.R16_SNORM_EXT)),_===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.R8UI),B===i.UNSIGNED_SHORT&&($=i.R16UI),B===i.UNSIGNED_INT&&($=i.R32UI),B===i.BYTE&&($=i.R8I),B===i.SHORT&&($=i.R16I),B===i.INT&&($=i.R32I)),_===i.RG&&(B===i.FLOAT&&($=i.RG32F),B===i.HALF_FLOAT&&($=i.RG16F),B===i.UNSIGNED_BYTE&&($=i.RG8),B===i.UNSIGNED_SHORT&&he&&($=he.RG16_EXT),B===i.SHORT&&he&&($=he.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RG8UI),B===i.UNSIGNED_SHORT&&($=i.RG16UI),B===i.UNSIGNED_INT&&($=i.RG32UI),B===i.BYTE&&($=i.RG8I),B===i.SHORT&&($=i.RG16I),B===i.INT&&($=i.RG32I)),_===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RGB8UI),B===i.UNSIGNED_SHORT&&($=i.RGB16UI),B===i.UNSIGNED_INT&&($=i.RGB32UI),B===i.BYTE&&($=i.RGB8I),B===i.SHORT&&($=i.RGB16I),B===i.INT&&($=i.RGB32I)),_===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RGBA8UI),B===i.UNSIGNED_SHORT&&($=i.RGBA16UI),B===i.UNSIGNED_INT&&($=i.RGBA32UI),B===i.BYTE&&($=i.RGBA8I),B===i.SHORT&&($=i.RGBA16I),B===i.INT&&($=i.RGBA32I)),_===i.RGB&&(B===i.UNSIGNED_SHORT&&he&&($=he.RGB16_EXT),B===i.SHORT&&he&&($=he.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),_===i.RGBA){let ee=ce?ir:st.getTransfer(Y);B===i.FLOAT&&($=i.RGBA32F),B===i.HALF_FLOAT&&($=i.RGBA16F),B===i.UNSIGNED_BYTE&&($=ee===ht?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&he&&($=he.RGBA16_EXT),B===i.SHORT&&he&&($=he.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function w(E,_){let B;return E?_===null||_===Un||_===Fs?B=i.DEPTH24_STENCIL8:_===bn?B=i.DEPTH32F_STENCIL8:_===Us&&(B=i.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Un||_===Fs?B=i.DEPTH_COMPONENT24:_===bn?B=i.DEPTH_COMPONENT32F:_===Us&&(B=i.DEPTH_COMPONENT16),B}function S(E,_){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==Ut&&E.minFilter!==zt?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function A(E){let _=E.target;_.removeEventListener("dispose",A),T(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&u.delete(_)}function y(E){let _=E.target;_.removeEventListener("dispose",y),C(_)}function T(E){let _=n.get(E);if(_.__webglInit===void 0)return;let B=E.source,V=f.get(B);if(V){let Y=V[_.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&P(E),Object.keys(V).length===0&&f.delete(B)}n.remove(E)}function P(E){let _=n.get(E);i.deleteTexture(_.__webglTexture);let B=E.source,V=f.get(B);delete V[_.__cacheKey],a.memory.textures--}function C(E){let _=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(_.__webglFramebuffer[V]))for(let Y=0;Y<_.__webglFramebuffer[V].length;Y++)i.deleteFramebuffer(_.__webglFramebuffer[V][Y]);else i.deleteFramebuffer(_.__webglFramebuffer[V]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[V])}else{if(Array.isArray(_.__webglFramebuffer))for(let V=0;V<_.__webglFramebuffer.length;V++)i.deleteFramebuffer(_.__webglFramebuffer[V]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let V=0;V<_.__webglColorRenderbuffer.length;V++)_.__webglColorRenderbuffer[V]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[V]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let B=E.textures;for(let V=0,Y=B.length;V<Y;V++){let ce=n.get(B[V]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),a.memory.textures--),n.remove(B[V])}n.remove(E)}let U=0;function G(){U=0}function D(){return U}function O(E){U=E}function z(){let E=U;return E>=s.maxTextures&&Ve("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures),U+=1,E}function j(E){let _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function ne(E,_){let B=n.get(E);if(E.isVideoTexture&&L(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&B.__version!==E.version){let V=E.image;if(V===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(B,E,_);return}}else E.isExternalTexture&&(B.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+_)}function X(E,_){let B=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){ye(B,E,_);return}else E.isExternalTexture&&(B.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+_)}function Z(E,_){let B=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){ye(B,E,_);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+_)}function ie(E,_){let B=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&B.__version!==E.version){Ue(B,E,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+_)}let ve={[ni]:i.REPEAT,[Hn]:i.CLAMP_TO_EDGE,[Ia]:i.MIRRORED_REPEAT},_e={[Ut]:i.NEAREST,[Hh]:i.NEAREST_MIPMAP_NEAREST,[Dr]:i.NEAREST_MIPMAP_LINEAR,[zt]:i.LINEAR,[ro]:i.LINEAR_MIPMAP_NEAREST,[Si]:i.LINEAR_MIPMAP_LINEAR},He={[Xh]:i.NEVER,[Jh]:i.ALWAYS,[qh]:i.LESS,[Wo]:i.LEQUAL,[jh]:i.EQUAL,[Xo]:i.GEQUAL,[Yh]:i.GREATER,[Zh]:i.NOTEQUAL};function Xe(E,_){if(_.type===bn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===zt||_.magFilter===ro||_.magFilter===Dr||_.magFilter===Si||_.minFilter===zt||_.minFilter===ro||_.minFilter===Dr||_.minFilter===Si)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,ve[_.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,ve[_.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,ve[_.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,_e[_.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,_e[_.minFilter]),_.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,He[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ut||_.minFilter!==Dr&&_.minFilter!==Si||_.type===bn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function je(E,_){let B=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",A));let V=_.source,Y=f.get(V);Y===void 0&&(Y={},f.set(V,Y));let ce=j(_);if(ce!==E.__cacheKey){Y[ce]===void 0&&(Y[ce]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Y[ce].usedTimes++;let he=Y[E.__cacheKey];he!==void 0&&(Y[E.__cacheKey].usedTimes--,he.usedTimes===0&&P(_)),E.__cacheKey=ce,E.__webglTexture=Y[ce].texture}return B}function W(E,_,B){return Math.floor(Math.floor(E/B)/_)}function K(E,_,B,V){let ce=E.updateRanges;if(ce.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,B,V,_.data);else{ce.sort((Oe,pe)=>Oe.start-pe.start);let he=0;for(let Oe=1;Oe<ce.length;Oe++){let pe=ce[he],be=ce[Oe],Ae=pe.start+pe.count,Le=W(be.start,_.width,4),Ze=W(pe.start,_.width,4);be.start<=Ae+1&&Le===Ze&&W(be.start+be.count-1,_.width,4)===Le?pe.count=Math.max(pe.count,be.start+be.count-pe.start):(++he,ce[he]=be)}ce.length=he+1;let $=t.getParameter(i.UNPACK_ROW_LENGTH),ee=t.getParameter(i.UNPACK_SKIP_PIXELS),de=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Oe=0,pe=ce.length;Oe<pe;Oe++){let be=ce[Oe],Ae=Math.floor(be.start/4),Le=Math.ceil(be.count/4),Ze=Ae%_.width,F=Math.floor(Ae/_.width),xe=Le,Q=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ze),t.pixelStorei(i.UNPACK_SKIP_ROWS,F),t.texSubImage2D(i.TEXTURE_2D,0,Ze,F,xe,Q,B,V,_.data)}E.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,$),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(i.UNPACK_SKIP_ROWS,de)}}function ye(E,_,B){let V=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(V=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(V=i.TEXTURE_3D);let Y=je(E,_),ce=_.source;t.bindTexture(V,E.__webglTexture,i.TEXTURE0+B);let he=n.get(ce);if(ce.version!==he.__version||Y===!0){if(t.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let Q=st.getPrimaries(st.workingColorSpace),ue=_.colorSpace===Bt?null:st.getPrimaries(_.colorSpace),Me=_.colorSpace===Bt||Q===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me)}t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let ee=g(_.image,!1,s.maxTextureSize);ee=et(_,ee);let de=r.convert(_.format,_.colorSpace),Oe=r.convert(_.type),pe=b(_.internalFormat,de,Oe,_.normalized,_.colorSpace,_.isVideoTexture);Xe(V,_);let be,Ae=_.mipmaps,Le=_.isVideoTexture!==!0,Ze=he.__version===void 0||Y===!0,F=ce.dataReady,xe=S(_,ee);if(_.isDepthTexture)pe=w(_.format===Mi,_.type),Ze&&(Le?t.texStorage2D(i.TEXTURE_2D,1,pe,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,pe,ee.width,ee.height,0,de,Oe,null));else if(_.isDataTexture)if(Ae.length>0){Le&&Ze&&t.texStorage2D(i.TEXTURE_2D,xe,pe,Ae[0].width,Ae[0].height);for(let Q=0,ue=Ae.length;Q<ue;Q++)be=Ae[Q],Le?F&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,be.width,be.height,de,Oe,be.data):t.texImage2D(i.TEXTURE_2D,Q,pe,be.width,be.height,0,de,Oe,be.data);_.generateMipmaps=!1}else Le?(Ze&&t.texStorage2D(i.TEXTURE_2D,xe,pe,ee.width,ee.height),F&&K(_,ee,de,Oe)):t.texImage2D(i.TEXTURE_2D,0,pe,ee.width,ee.height,0,de,Oe,ee.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Le&&Ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,pe,Ae[0].width,Ae[0].height,ee.depth);for(let Q=0,ue=Ae.length;Q<ue;Q++)if(be=Ae[Q],_.format!==xn)if(de!==null)if(Le){if(F)if(_.layerUpdates.size>0){let Me=fc(be.width,be.height,_.format,_.type);for(let se of _.layerUpdates){let Ce=be.data.subarray(se*Me/be.data.BYTES_PER_ELEMENT,(se+1)*Me/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,se,be.width,be.height,1,de,Ce)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,be.width,be.height,ee.depth,de,be.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,pe,be.width,be.height,ee.depth,0,be.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?F&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,be.width,be.height,ee.depth,de,Oe,be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,pe,be.width,be.height,ee.depth,0,de,Oe,be.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Le&&Ze&&t.texStorage2D(i.TEXTURE_2D,xe,pe,Ae[0].width,Ae[0].height);for(let Q=0,ue=Ae.length;Q<ue;Q++)be=Ae[Q],_.format!==xn?de!==null?Le?F&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,be.width,be.height,de,be.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,pe,be.width,be.height,0,be.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?F&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,be.width,be.height,de,Oe,be.data):t.texImage2D(i.TEXTURE_2D,Q,pe,be.width,be.height,0,de,Oe,be.data)}else if(_.isDataArrayTexture)if(Le){if(Ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,pe,ee.width,ee.height,ee.depth),F)if(_.layerUpdates.size>0){let Q=fc(ee.width,ee.height,_.format,_.type);for(let ue of _.layerUpdates){let Me=ee.data.subarray(ue*Q/ee.data.BYTES_PER_ELEMENT,(ue+1)*Q/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ue,ee.width,ee.height,1,de,Oe,Me)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,de,Oe,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,pe,ee.width,ee.height,ee.depth,0,de,Oe,ee.data);else if(_.isData3DTexture)Le?(Ze&&t.texStorage3D(i.TEXTURE_3D,xe,pe,ee.width,ee.height,ee.depth),F&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,de,Oe,ee.data)):t.texImage3D(i.TEXTURE_3D,0,pe,ee.width,ee.height,ee.depth,0,de,Oe,ee.data);else if(_.isFramebufferTexture){if(Ze)if(Le)t.texStorage2D(i.TEXTURE_2D,xe,pe,ee.width,ee.height);else{let Q=ee.width,ue=ee.height;for(let Me=0;Me<xe;Me++)t.texImage2D(i.TEXTURE_2D,Me,pe,Q,ue,0,de,Oe,null),Q>>=1,ue>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let Q=i.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),ee.parentNode!==Q){Q.appendChild(ee),u.add(_),Q.onpaint=ue=>{let Me=ue.changedElements;for(let se of u)Me.includes(se.image)&&(se.needsUpdate=!0)},Q.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ee);else{let Me=i.RGBA,se=i.RGBA,Ce=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Me,se,Ce,ee)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ae.length>0){if(Le&&Ze){let Q=Ye(Ae[0]);t.texStorage2D(i.TEXTURE_2D,xe,pe,Q.width,Q.height)}for(let Q=0,ue=Ae.length;Q<ue;Q++)be=Ae[Q],Le?F&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,de,Oe,be):t.texImage2D(i.TEXTURE_2D,Q,pe,de,Oe,be);_.generateMipmaps=!1}else if(Le){if(Ze){let Q=Ye(ee);t.texStorage2D(i.TEXTURE_2D,xe,pe,Q.width,Q.height)}F&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de,Oe,ee)}else t.texImage2D(i.TEXTURE_2D,0,pe,de,Oe,ee);p(_)&&M(V),he.__version=ce.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function Ue(E,_,B){if(_.image.length!==6)return;let V=je(E,_),Y=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+B);let ce=n.get(Y);if(Y.version!==ce.__version||V===!0){t.activeTexture(i.TEXTURE0+B);let he=st.getPrimaries(st.workingColorSpace),$=_.colorSpace===Bt?null:st.getPrimaries(_.colorSpace),ee=_.colorSpace===Bt||he===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let de=_.isCompressedTexture||_.image[0].isCompressedTexture,Oe=_.image[0]&&_.image[0].isDataTexture,pe=[];for(let se=0;se<6;se++)!de&&!Oe?pe[se]=g(_.image[se],!0,s.maxCubemapSize):pe[se]=Oe?_.image[se].image:_.image[se],pe[se]=et(_,pe[se]);let be=pe[0],Ae=r.convert(_.format,_.colorSpace),Le=r.convert(_.type),Ze=b(_.internalFormat,Ae,Le,_.normalized,_.colorSpace),F=_.isVideoTexture!==!0,xe=ce.__version===void 0||V===!0,Q=Y.dataReady,ue=S(_,be);Xe(i.TEXTURE_CUBE_MAP,_);let Me;if(de){F&&xe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,Ze,be.width,be.height);for(let se=0;se<6;se++){Me=pe[se].mipmaps;for(let Ce=0;Ce<Me.length;Ce++){let we=Me[Ce];_.format!==xn?Ae!==null?F?Q&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ce,0,0,we.width,we.height,Ae,we.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ce,Ze,we.width,we.height,0,we.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ce,0,0,we.width,we.height,Ae,Le,we.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ce,Ze,we.width,we.height,0,Ae,Le,we.data)}}}else{if(Me=_.mipmaps,F&&xe){Me.length>0&&ue++;let se=Ye(pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,Ze,se.width,se.height)}for(let se=0;se<6;se++)if(Oe){F?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,pe[se].width,pe[se].height,Ae,Le,pe[se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ze,pe[se].width,pe[se].height,0,Ae,Le,pe[se].data);for(let Ce=0;Ce<Me.length;Ce++){let ut=Me[Ce].image[se].image;F?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ce+1,0,0,ut.width,ut.height,Ae,Le,ut.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ce+1,Ze,ut.width,ut.height,0,Ae,Le,ut.data)}}else{F?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ae,Le,pe[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ze,Ae,Le,pe[se]);for(let Ce=0;Ce<Me.length;Ce++){let we=Me[Ce];F?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ce+1,0,0,Ae,Le,we.image[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ce+1,Ze,Ae,Le,we.image[se])}}}p(_)&&M(i.TEXTURE_CUBE_MAP),ce.__version=Y.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function ge(E,_,B,V,Y,ce){let he=r.convert(B.format,B.colorSpace),$=r.convert(B.type),ee=b(B.internalFormat,he,$,B.normalized,B.colorSpace),de=n.get(_),Oe=n.get(B);if(Oe.__renderTarget=_,!de.__hasExternalTextures){let pe=Math.max(1,_.width>>ce),be=Math.max(1,_.height>>ce);Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?t.texImage3D(Y,ce,ee,pe,be,_.depth,0,he,$,null):t.texImage2D(Y,ce,ee,pe,be,0,he,$,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),ke(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,V,Y,Oe.__webglTexture,0,Be(_)):(Y===i.TEXTURE_2D||Y>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,V,Y,Oe.__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function De(E,_,B){if(i.bindRenderbuffer(i.RENDERBUFFER,E),_.depthBuffer){let V=_.depthTexture,Y=V&&V.isDepthTexture?V.type:null,ce=w(_.stencilBuffer,Y),he=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ke(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Be(_),ce,_.width,_.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,Be(_),ce,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ce,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,E)}else{let V=_.textures;for(let Y=0;Y<V.length;Y++){let ce=V[Y],he=r.convert(ce.format,ce.colorSpace),$=r.convert(ce.type),ee=b(ce.internalFormat,he,$,ce.normalized,ce.colorSpace);ke(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Be(_),ee,_.width,_.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,Be(_),ee,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ee,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function rt(E,_,B){let V=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Y=n.get(_.depthTexture);if(Y.__renderTarget=_,(!Y.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),V){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,_.depthTexture.addEventListener("dispose",A)),Y.__webglTexture===void 0){Y.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Xe(i.TEXTURE_CUBE_MAP,_.depthTexture);let de=r.convert(_.depthTexture.format),Oe=r.convert(_.depthTexture.type),pe;_.depthTexture.format===Gn?pe=i.DEPTH_COMPONENT24:_.depthTexture.format===Mi&&(pe=i.DEPTH24_STENCIL8);for(let be=0;be<6;be++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,pe,_.width,_.height,0,de,Oe,null)}}else ne(_.depthTexture,0);let ce=Y.__webglTexture,he=Be(_),$=V?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,ee=_.depthTexture.format===Mi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Gn)ke(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,$,ce,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,ee,$,ce,0);else if(_.depthTexture.format===Mi)ke(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,$,ce,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,ee,$,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function te(E){let _=n.get(E),B=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){let V=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),V){let Y=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,V.removeEventListener("dispose",Y)};V.addEventListener("dispose",Y),_.__depthDisposeCallback=Y}_.__boundDepthTexture=V}if(E.depthTexture&&!_.__autoAllocateDepthBuffer)if(B)for(let V=0;V<6;V++)rt(_.__webglFramebuffer[V],E,V);else{let V=E.texture.mipmaps;V&&V.length>0?rt(_.__webglFramebuffer[0],E,0):rt(_.__webglFramebuffer,E,0)}else if(B){_.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[V]),_.__webglDepthbuffer[V]===void 0)_.__webglDepthbuffer[V]=i.createRenderbuffer(),De(_.__webglDepthbuffer[V],E,!1);else{let Y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=_.__webglDepthbuffer[V];i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,ce)}}else{let V=E.texture.mipmaps;if(V&&V.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),De(_.__webglDepthbuffer,E,!1);else{let Y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,ce)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function J(E,_,B){let V=n.get(E);_!==void 0&&ge(V.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&te(E)}function re(E){let _=E.texture,B=n.get(E),V=n.get(_);E.addEventListener("dispose",y);let Y=E.textures,ce=E.isWebGLCubeRenderTarget===!0,he=Y.length>1;if(he||(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=_.version,a.memory.textures++),ce){B.__webglFramebuffer=[];for(let $=0;$<6;$++)if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer[$]=[];for(let ee=0;ee<_.mipmaps.length;ee++)B.__webglFramebuffer[$][ee]=i.createFramebuffer()}else B.__webglFramebuffer[$]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer=[];for(let $=0;$<_.mipmaps.length;$++)B.__webglFramebuffer[$]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(he)for(let $=0,ee=Y.length;$<ee;$++){let de=n.get(Y[$]);de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&ke(E)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let $=0;$<Y.length;$++){let ee=Y[$];B.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[$]);let de=r.convert(ee.format,ee.colorSpace),Oe=r.convert(ee.type),pe=b(ee.internalFormat,de,Oe,ee.normalized,ee.colorSpace,E.isXRRenderTarget===!0),be=Be(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,be,pe,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,B.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),De(B.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),Xe(i.TEXTURE_CUBE_MAP,_);for(let $=0;$<6;$++)if(_.mipmaps&&_.mipmaps.length>0)for(let ee=0;ee<_.mipmaps.length;ee++)ge(B.__webglFramebuffer[$][ee],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ee);else ge(B.__webglFramebuffer[$],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);p(_)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let $=0,ee=Y.length;$<ee;$++){let de=Y[$],Oe=n.get(de),pe=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(pe=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,Oe.__webglTexture),Xe(pe,de),ge(B.__webglFramebuffer,E,de,i.COLOR_ATTACHMENT0+$,pe,0),p(de)&&M(pe)}t.unbindTexture()}else{let $=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&($=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture($,V.__webglTexture),Xe($,_),_.mipmaps&&_.mipmaps.length>0)for(let ee=0;ee<_.mipmaps.length;ee++)ge(B.__webglFramebuffer[ee],E,_,i.COLOR_ATTACHMENT0,$,ee);else ge(B.__webglFramebuffer,E,_,i.COLOR_ATTACHMENT0,$,0);p(_)&&M($),t.unbindTexture()}E.depthBuffer&&te(E)}function ae(E){let _=E.textures;for(let B=0,V=_.length;B<V;B++){let Y=_[B];if(p(Y)){let ce=R(E),he=n.get(Y).__webglTexture;t.bindTexture(ce,he),M(ce),t.unbindTexture()}}}let le=[],Ie=[];function Fe(E){if(E.samples>0){if(ke(E)===!1){let _=E.textures,B=E.width,V=E.height,Y=i.COLOR_BUFFER_BIT,ce=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=n.get(E),$=_.length>1;if($)for(let de=0;de<_.length;de++)t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer);let ee=E.texture.mipmaps;ee&&ee.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let de=0;de<_.length;de++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Y|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Y|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,he.__webglColorRenderbuffer[de]);let Oe=n.get(_[de]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Oe,0)}i.blitFramebuffer(0,0,B,V,0,0,B,V,Y,i.NEAREST),c===!0&&(le.length=0,Ie.length=0,le.push(i.COLOR_ATTACHMENT0+de),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&(le.push(ce),Ie.push(ce),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ie)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,le))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let de=0;de<_.length;de++){t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,he.__webglColorRenderbuffer[de]);let Oe=n.get(_[de]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,Oe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&c){let _=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Be(E){return Math.min(s.maxSamples,E.samples)}function ke(E){let _=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function L(E){let _=a.render.frame;h.get(E)!==_&&(h.set(E,_),E.update())}function et(E,_){let B=E.colorSpace,V=E.format,Y=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||B!==nr&&B!==Bt&&(st.getTransfer(B)===ht?(V!==xn||Y!==rn)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qe("WebGLTextures: Unsupported texture color space:",B)),_}function Ye(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=G,this.getTextureUnits=D,this.setTextureUnits=O,this.setTexture2D=ne,this.setTexture2DArray=X,this.setTexture3D=Z,this.setTextureCube=ie,this.rebindTextures=J,this.setupRenderTarget=re,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=ke,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function o_(i,e){function t(n,s=Bt){let r,a=st.getTransfer(s);if(n===rn)return i.UNSIGNED_BYTE;if(n===oo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===lo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===nc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ic)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ec)return i.BYTE;if(n===tc)return i.SHORT;if(n===Us)return i.UNSIGNED_SHORT;if(n===ao)return i.INT;if(n===Un)return i.UNSIGNED_INT;if(n===bn)return i.FLOAT;if(n===Fn)return i.HALF_FLOAT;if(n===sc)return i.ALPHA;if(n===rc)return i.RGB;if(n===xn)return i.RGBA;if(n===Gn)return i.DEPTH_COMPONENT;if(n===Mi)return i.DEPTH_STENCIL;if(n===co)return i.RED;if(n===ho)return i.RED_INTEGER;if(n===wi)return i.RG;if(n===uo)return i.RG_INTEGER;if(n===fo)return i.RGBA_INTEGER;if(n===Lr||n===Nr||n===Ur||n===Fr)if(a===ht)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Lr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Lr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ur)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===po||n===mo||n===go||n===_o)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===po)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===mo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===go)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_o)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===yo||n===bo||n===xo||n===vo||n===So||n===Or||n===Mo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===yo||n===bo)return a===ht?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===xo)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===vo)return r.COMPRESSED_R11_EAC;if(n===So)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Or)return r.COMPRESSED_RG11_EAC;if(n===Mo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===wo||n===Eo||n===To||n===Ro||n===Ao||n===Co||n===Po||n===Io||n===Do||n===Lo||n===No||n===Uo||n===Fo||n===Oo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===wo)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Eo)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===To)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ro)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ao)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Co)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Po)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Io)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Do)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Lo)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===No)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Uo)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fo)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Oo)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Bo||n===ko||n===zo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Bo)return a===ht?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ko)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===zo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ho||n===Go||n===Br||n===Vo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ho)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Go)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Br)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Vo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var l_=`
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

}`,Dc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ur(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new fn({vertexShader:l_,fragmentShader:c_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ge(new Oi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Lc=class extends Cn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null,x=typeof XRWebGLBinding<"u",g=new Dc,p={},M=t.getContextAttributes(),R=null,b=null,w=[],S=[],A=new oe,y=null,T=null,P=new kt;P.viewport=new vt;let C=new kt;C.viewport=new vt;let U=[P,C],G=new eo,D=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let K=w[W];return K===void 0&&(K=new bs,w[W]=K),K.getTargetRaySpace()},this.getControllerGrip=function(W){let K=w[W];return K===void 0&&(K=new bs,w[W]=K),K.getGripSpace()},this.getHand=function(W){let K=w[W];return K===void 0&&(K=new bs,w[W]=K),K.getHandSpace()};function z(W){let K=S.indexOf(W.inputSource);if(K===-1)return;let ye=w[K];ye!==void 0&&(ye.update(W.inputSource,W.frame,l||a),ye.dispatchEvent({type:W.type,data:W.inputSource}))}function j(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",ne);for(let W=0;W<w.length;W++){let K=S[W];K!==null&&(S[W]=null,w[W].disconnect(K))}D=null,O=null,g.reset();for(let W in p)delete p[W];if(e.setRenderTarget(R),f=null,d=null,u=null,s=null,b=null,je.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(A.width,A.height,!1),T!==null){let W=T.camera;W.fov=T.fov,W.zoom=T.zoom,W.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(R=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",j),s.addEventListener("inputsourceschange",ne),M.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Ue=null,ge=null;M.depth&&(ge=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=M.stencil?Mi:Gn,Ue=M.stencil?Fs:Un);let De={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(De),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new sn(d.textureWidth,d.textureHeight,{format:xn,type:rn,depthTexture:new pi(d.textureWidth,d.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ye={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ye),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new sn(f.framebufferWidth,f.framebufferHeight,{format:xn,type:rn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),je.setContext(s),je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ne(W){for(let K=0;K<W.removed.length;K++){let ye=W.removed[K],Ue=S.indexOf(ye);Ue>=0&&(S[Ue]=null,w[Ue].disconnect(ye))}for(let K=0;K<W.added.length;K++){let ye=W.added[K],Ue=S.indexOf(ye);if(Ue===-1){for(let De=0;De<w.length;De++)if(De>=S.length){S.push(ye),Ue=De;break}else if(S[De]===null){S[De]=ye,Ue=De;break}if(Ue===-1)break}let ge=w[Ue];ge&&ge.connect(ye)}}let X=new I,Z=new I;function ie(W,K,ye){X.setFromMatrixPosition(K.matrixWorld),Z.setFromMatrixPosition(ye.matrixWorld);let Ue=X.distanceTo(Z),ge=K.projectionMatrix.elements,De=ye.projectionMatrix.elements,rt=ge[14]/(ge[10]-1),te=ge[14]/(ge[10]+1),J=(ge[9]+1)/ge[5],re=(ge[9]-1)/ge[5],ae=(ge[8]-1)/ge[0],le=(De[8]+1)/De[0],Ie=rt*ae,Fe=rt*le,Be=Ue/(-ae+le),ke=Be*-ae;if(K.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(ke),W.translateZ(Be),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),ge[10]===-1)W.projectionMatrix.copy(K.projectionMatrix),W.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let L=rt+Be,et=te+Be,Ye=Ie-ke,E=Fe+(Ue-ke),_=J*te/et*L,B=re*te/et*L;W.projectionMatrix.makePerspective(Ye,E,_,B,L,et),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function ve(W,K){K===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(K.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let K=W.near,ye=W.far;g.texture!==null&&(g.depthNear>0&&(K=g.depthNear),g.depthFar>0&&(ye=g.depthFar)),G.near=C.near=P.near=K,G.far=C.far=P.far=ye,(D!==G.near||O!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),D=G.near,O=G.far),G.layers.mask=W.layers.mask|6,P.layers.mask=G.layers.mask&-5,C.layers.mask=G.layers.mask&-3;let Ue=W.parent,ge=G.cameras;ve(G,Ue);for(let De=0;De<ge.length;De++)ve(ge[De],Ue);ge.length===2?ie(G,P,C):G.projectionMatrix.copy(P.projectionMatrix),T===null&&W.isPerspectiveCamera&&(T={camera:W,fov:W.fov,zoom:W.zoom}),_e(W,G,Ue)};function _e(W,K,ye){ye===null?W.matrix.copy(K.matrixWorld):(W.matrix.copy(ye.matrixWorld),W.matrix.invert(),W.matrix.multiply(K.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(K.projectionMatrix),W.projectionMatrixInverse.copy(K.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=_s*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(W){c=W,d!==null&&(d.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(G)},this.getCameraTexture=function(W){return p[W]};let He=null;function Xe(W,K){if(h=K.getViewerPose(l||a),m=K,h!==null){let ye=h.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let Ue=!1;ye.length!==G.cameras.length&&(G.cameras.length=0,Ue=!0);for(let te=0;te<ye.length;te++){let J=ye[te],re=null;if(f!==null)re=f.getViewport(J);else{let le=u.getViewSubImage(d,J);re=le.viewport,te===0&&(e.setRenderTargetTextures(b,le.colorTexture,le.depthStencilTexture),e.setRenderTarget(b))}let ae=U[te];ae===void 0&&(ae=new kt,ae.layers.enable(te),ae.viewport=new vt,U[te]=ae),ae.matrix.fromArray(J.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(J.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(re.x,re.y,re.width,re.height),te===0&&(G.matrix.copy(ae.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Ue===!0&&G.cameras.push(ae)}let ge=s.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let te=u.getDepthInformation(ye[0]);te&&te.isValid&&te.texture&&g.init(te,s.renderState)}if(ge&&ge.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let te=0;te<ye.length;te++){let J=ye[te].camera;if(J){let re=p[J];re||(re=new ur,p[J]=re);let ae=u.getCameraImage(J);re.sourceTexture=ae}}}}for(let ye=0;ye<w.length;ye++){let Ue=S[ye],ge=w[ye];Ue!==null&&ge!==void 0&&ge.update(Ue,K,l||a)}He&&He(W,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),m=null}let je=new Id;je.setAnimationLoop(Xe),this.setAnimationLoop=function(W){He=W},this.dispose=function(){}}},h_=new gt,Od=new Je;Od.set(-1,0,0,0,1,0,0,0,1);function d_(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,hc(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,M,R,b){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,b)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,M,R):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Ht&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Ht&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let M=e.get(p),R=M.envMap,b=M.envMapRotation;R&&(g.envMap.value=R,g.envMapRotation.value.setFromMatrix4(h_.makeRotationFromEuler(b)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Od),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,M,R){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=R*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ht&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let M=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function u_(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,w){let S=w.program;n.uniformBlockBinding(b,S)}function l(b,w){let S=s[b.id];S===void 0&&(g(b),S=h(b),s[b.id]=S,b.addEventListener("dispose",M));let A=w.program;n.updateUBOMapping(b,A);let y=e.render.frame;r[b.id]!==y&&(d(b),r[b.id]=y)}function h(b){let w=u();b.__bindingPointIndex=w;let S=i.createBuffer(),A=b.__size,y=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,A,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,S),S}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let w=s[b.id],S=b.uniforms,A=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let y=0,T=S.length;y<T;y++){let P=S[y];if(Array.isArray(P))for(let C=0,U=P.length;C<U;C++)f(P[C],y,C,A);else f(P,y,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,w,S,A){if(x(b,w,S,A)===!0){let y=b.__offset,T=b.value;if(Array.isArray(T)){let P=0;for(let C=0;C<T.length;C++){let U=T[C],G=p(U);m(U,b.__data,P),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(P+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(T,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,b.__data)}}function m(b,w,S){typeof b=="number"||typeof b=="boolean"?w[0]=b:b.isMatrix3?(w[0]=b.elements[0],w[1]=b.elements[1],w[2]=b.elements[2],w[3]=0,w[4]=b.elements[3],w[5]=b.elements[4],w[6]=b.elements[5],w[7]=0,w[8]=b.elements[6],w[9]=b.elements[7],w[10]=b.elements[8],w[11]=0):ArrayBuffer.isView(b)?w.set(new b.constructor(b.buffer,b.byteOffset,w.length)):b.toArray(w,S)}function x(b,w,S,A){let y=b.value,T=w+"_"+S;if(A[T]===void 0)return typeof y=="number"||typeof y=="boolean"?A[T]=y:ArrayBuffer.isView(y)?A[T]=y.slice():A[T]=y.clone(),!0;{let P=A[T];if(typeof y=="number"||typeof y=="boolean"){if(P!==y)return A[T]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(P.equals(y)===!1)return P.copy(y),!0}}return!1}function g(b){let w=b.uniforms,S=0,A=16;for(let T=0,P=w.length;T<P;T++){let C=Array.isArray(w[T])?w[T]:[w[T]];for(let U=0,G=C.length;U<G;U++){let D=C[U],O=Array.isArray(D.value)?D.value:[D.value];for(let z=0,j=O.length;z<j;z++){let ne=O[z],X=p(ne),Z=S%A,ie=Z%X.boundary,ve=Z+ie;S+=ie,ve!==0&&A-ve<X.storage&&(S+=A-ve),D.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=S,S+=X.storage}}}let y=S%A;return y>0&&(S+=A-y),b.__size=S,b.__cache={},this}function p(b){let w={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(w.boundary=4,w.storage=4):b.isVector2?(w.boundary=8,w.storage=8):b.isVector3||b.isColor?(w.boundary=16,w.storage=12):b.isVector4?(w.boundary=16,w.storage=16):b.isMatrix3?(w.boundary=48,w.storage=48):b.isMatrix4?(w.boundary=64,w.storage=64):b.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(w.boundary=16,w.storage=b.byteLength):Ve("WebGLRenderer: Unsupported uniform value type.",b),w}function M(b){let w=b.target;w.removeEventListener("dispose",M);let S=a.indexOf(w.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function R(){for(let b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:c,update:l,dispose:R}}var f_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Yn=null;function p_(){return Yn===null&&(Yn=new lr(f_,16,16,wi,Fn),Yn.name="DFG_LUT",Yn.minFilter=zt,Yn.magFilter=zt,Yn.wrapS=Hn,Yn.wrapT=Hn,Yn.generateMipmaps=!1,Yn.needsUpdate=!0),Yn}var Zo=class{constructor(e={}){let{canvas:t=$h(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=rn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let x=f,g=new Set([fo,uo,ho]),p=new Set([rn,Un,Us,Fs,oo,lo]),M=new Uint32Array(4),R=new Int32Array(4),b=new I,w=null,S=null,A=[],y=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Nn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,C=!1,U=null,G=null,D=null,O=null;this._outputColorSpace=Pt;let z=0,j=0,ne=null,X=-1,Z=null,ie=new vt,ve=new vt,_e=null,He=new We(0),Xe=0,je=t.width,W=t.height,K=1,ye=null,Ue=null,ge=new vt(0,0,je,W),De=new vt(0,0,je,W),rt=!1,te=new Ss,J=!1,re=!1,ae=new gt,le=new I,Ie=new vt,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Be=!1;function ke(){return ne===null?K:1}let L=n;function et(v,N){return t.getContext(v,N)}let Ye,E,_,B,V,Y,ce,he,$,ee,de,Oe,pe,be,Ae,Le,Ze,F,xe,Q,ue,Me,se;try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",ut,!1),t.addEventListener("webglcontextrestored",tt,!1),t.addEventListener("webglcontextcreationerror",wt,!1),L===null){let N="webgl2";if(L=et(N,v),L===null)throw et(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ce()}catch(v){throw t.removeEventListener("webglcontextlost",ut,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",wt,!1),qe("WebGLRenderer: "+v.message),v}function Ce(){Ye=new v0(L),Ye.init(),ue=new o_(L,Ye),E=new d0(L,Ye,e,ue),_=new r_(L,Ye),E.reversedDepthBuffer&&d&&_.buffers.depth.setReversed(!0),G=L.createFramebuffer(),D=L.createFramebuffer(),O=L.createFramebuffer(),B=new w0(L),V=new Xg,Y=new a_(L,Ye,_,V,E,ue,B),ce=new x0(P),he=new Tf(L),Me=new c0(L,he),$=new S0(L,he,B,Me),ee=new T0(L,$,he,Me,B),F=new E0(L,E,Y),Ae=new u0(V),de=new Wg(P,ce,Ye,E,Me,Ae),Oe=new d_(P,V),pe=new jg,be=new Qg(Ye),Ze=new l0(P,ce,_,ee,m,c),Le=new s_(P,ee,E),se=new u_(L,B,E,_),xe=new h0(L,Ye,B),Q=new M0(L,Ye,B),B.programs=de.programs,P.capabilities=E,P.extensions=Ye,P.properties=V,P.renderLists=pe,P.shadowMap=Le,P.state=_,P.info=B}x!==rn&&(T=new A0(x,t.width,t.height,o,s,r));let we=new Lc(P,L);this.xr=we,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let v=Ye.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=Ye.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(v){v!==void 0&&(K=v,this.setSize(je,W,!1))},this.getSize=function(v){return v.set(je,W)},this.setSize=function(v,N,q=!0){if(we.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}je=v,W=N,t.width=Math.floor(v*K),t.height=Math.floor(N*K),q===!0&&(t.style.width=v+"px",t.style.height=N+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,v,N)},this.getDrawingBufferSize=function(v){return v.set(je*K,W*K).floor()},this.setDrawingBufferSize=function(v,N,q){je=v,W=N,K=q,t.width=Math.floor(v*q),t.height=Math.floor(N*q),this.setViewport(0,0,v,N)},this.setEffects=function(v){if(x===rn){qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let N=0;N<v.length;N++)if(v[N].isOutputPass===!0){Ve("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(ie)},this.getViewport=function(v){return v.copy(ge)},this.setViewport=function(v,N,q,H){v.isVector4?ge.set(v.x,v.y,v.z,v.w):ge.set(v,N,q,H),_.viewport(ie.copy(ge).multiplyScalar(K).round())},this.getScissor=function(v){return v.copy(De)},this.setScissor=function(v,N,q,H){v.isVector4?De.set(v.x,v.y,v.z,v.w):De.set(v,N,q,H),_.scissor(ve.copy(De).multiplyScalar(K).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(v){_.setScissorTest(rt=v)},this.setOpaqueSort=function(v){ye=v},this.setTransparentSort=function(v){Ue=v},this.getClearColor=function(v){return v.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(v=!0,N=!0,q=!0){let H=0;if(v){let k=!1;if(ne!==null){let fe=ne.texture.format;k=g.has(fe)}if(k){let fe=ne.texture.type,Re=p.has(fe),me=Ze.getClearColor(),Ne=Ze.getClearAlpha(),Te=me.r,ze=me.g,$e=me.b;Re?(M[0]=Te,M[1]=ze,M[2]=$e,M[3]=Ne,L.clearBufferuiv(L.COLOR,0,M)):(R[0]=Te,R[1]=ze,R[2]=$e,R[3]=Ne,L.clearBufferiv(L.COLOR,0,R))}else H|=L.COLOR_BUFFER_BIT}N&&(H|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),U=v},this.dispose=function(){t.removeEventListener("webglcontextlost",ut,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",wt,!1),Ze.dispose(),pe.dispose(),be.dispose(),V.dispose(),ce.dispose(),ee.dispose(),Me.dispose(),se.dispose(),de.dispose(),we.dispose(),we.removeEventListener("sessionstart",Sn),we.removeEventListener("sessionend",ln),Rt.stop()};function ut(v){v.preventDefault(),oc("WebGLRenderer: Context Lost."),C=!0}function tt(){oc("WebGLRenderer: Context Restored."),C=!1;let v=B.autoReset,N=Le.enabled,q=Le.autoUpdate,H=Le.needsUpdate,k=Le.type;Ce(),B.autoReset=v,Le.enabled=N,Le.autoUpdate=q,Le.needsUpdate=H,Le.type=k}function wt(v){qe("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function St(v){let N=v.target;N.removeEventListener("dispose",St),Jr(N)}function Jr(v){On(v),V.remove(v)}function On(v){let N=V.get(v).programs;N!==void 0&&(N.forEach(function(q){de.releaseProgram(q)}),v.isShaderMaterial&&de.releaseShaderCache(v))}this.renderBufferDirect=function(v,N,q,H,k,fe){N===null&&(N=Fe);let Re=k.isMesh&&k.matrixWorld.determinantAffine()<0,me=nn(v,N,q,H,k);_.setMaterial(H,Re);let Ne=q.index,Te=1;if(H.wireframe===!0){if(Ne=$.getWireframeAttribute(q),Ne===void 0)return;Te=2}let ze=q.drawRange,$e=q.attributes.position,Ee=ze.start*Te,ct=(ze.start+ze.count)*Te;fe!==null&&(Ee=Math.max(Ee,fe.start*Te),ct=Math.min(ct,(fe.start+fe.count)*Te)),Ne!==null?(Ee=Math.max(Ee,0),ct=Math.min(ct,Ne.count)):$e!=null&&(Ee=Math.max(Ee,0),ct=Math.min(ct,$e.count));let At=ct-Ee;if(At<0||At===1/0)return;Me.setup(k,H,me,q,Ne);let bt,mt=xe;if(Ne!==null&&(bt=he.get(Ne),mt=Q,mt.setIndex(bt)),k.isMesh)H.wireframe===!0?(_.setLineWidth(H.wireframeLinewidth*ke()),mt.setMode(L.LINES)):mt.setMode(L.TRIANGLES);else if(k.isLine){let Vt=H.linewidth;Vt===void 0&&(Vt=1),_.setLineWidth(Vt*ke()),k.isLineSegments?mt.setMode(L.LINES):k.isLineLoop?mt.setMode(L.LINE_LOOP):mt.setMode(L.LINE_STRIP)}else k.isPoints?mt.setMode(L.POINTS):k.isSprite&&mt.setMode(L.TRIANGLES);if(k.isBatchedMesh)if(Ye.get("WEBGL_multi_draw"))mt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Vt=k._multiDrawStarts,Pe=k._multiDrawCounts,Kt=k._multiDrawCount,ot=Ne?he.get(Ne).bytesPerElement:1,gn=V.get(H).currentProgram.getUniforms();for(let kn=0;kn<Kt;kn++)gn.setValue(L,"_gl_DrawID",kn),mt.render(Vt[kn]/ot,Pe[kn])}else if(k.isInstancedMesh)mt.renderInstances(Ee,At,k.count);else if(q.isInstancedBufferGeometry){let Vt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Pe=Math.min(q.instanceCount,Vt);mt.renderInstances(Ee,At,Pe)}else mt.render(Ee,At)};function on(v,N,q,H){U!==null&&v.isNodeMaterial&&U.setObject(H,v),J===!0&&Ae.setState(v,q,!1),v.transparent===!0&&v.side===yn&&v.forceSinglePass===!1?(v.side=Ht,v.needsUpdate=!0,Ti(v,N,H),v.side=qn,v.needsUpdate=!0,Ti(v,N,H),v.side=yn):Ti(v,N,H)}this.compile=function(v,N,q=null){q===null&&(q=v),U!==null&&U.renderStart(v,N,q),S=be.get(q),S.init(N),y.push(S),q.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(S.pushLight(k),k.castShadow&&S.pushShadow(k))}),v!==q&&v.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(S.pushLight(k),k.castShadow&&S.pushShadow(k))}),S.setupLights(),U!==null&&U.updateLights(S.state.lightsArray),re=this.localClippingEnabled,J=Ae.init(this.clippingPlanes,re),J===!0&&Ae.setGlobalState(this.clippingPlanes,N),U!==null&&Le.render(S.state.shadowsArray,q,N);let H=new Set;return v.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let fe=k.material;if(fe)if(Array.isArray(fe))for(let Re=0;Re<fe.length;Re++){let me=fe[Re];on(me,q,N,k),H.add(me)}else on(fe,q,N,k),H.add(fe)}),S=y.pop(),U!==null&&U.renderEnd(),H},this.compileAsync=function(v,N,q=null){let H=this.compile(v,N,q);return new Promise(k=>{function fe(){if(H.forEach(function(Re){let Ne=V.get(Re).currentProgram;(Ne===void 0||Ne.isReady())&&H.delete(Re)}),H.size===0){k(v);return}setTimeout(fe,10)}Ye.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Gt=null;function Kr(v){Gt&&Gt(v)}function Sn(){Rt.stop()}function ln(){Rt.start()}let Rt=new Id;Rt.setAnimationLoop(Kr),typeof self<"u"&&Rt.setContext(self),this.setAnimationLoop=function(v){Gt=v,we.setAnimationLoop(v),v===null?Rt.stop():Rt.start()},we.addEventListener("sessionstart",Sn),we.addEventListener("sessionend",ln),this.render=function(v,N){if(N!==void 0&&N.isCamera!==!0){qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;U!==null&&U.renderStart(v,N);let q=we.enabled===!0&&we.isPresenting===!0,H=T!==null&&(ne===null||q)&&T.begin(P,ne);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(we.cameraAutoUpdate===!0&&we.updateCamera(N),N=we.getCamera()),v.isScene===!0&&v.onBeforeRender(P,v,N,ne),S=be.get(v,y.length),S.init(N),S.state.textureUnits=Y.getTextureUnits(),y.push(S),ae.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),te.setFromProjectionMatrix(ae,An,N.reversedDepth),re=this.localClippingEnabled,J=Ae.init(this.clippingPlanes,re),w=pe.get(v,A.length),w.init(),A.push(w),we.enabled===!0&&we.isPresenting===!0){let Re=P.xr.getDepthSensingMesh();Re!==null&&ji(Re,N,-1/0,P.sortObjects)}ji(v,N,0,P.sortObjects),w.finish(),U!==null&&U.updateLights(S.state.lightsArray),P.sortObjects===!0&&w.sort(ye,Ue),Be=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,Be&&Ze.addToRenderList(w,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),J===!0&&Ae.beginShadows();let k=S.state.shadowsArray;if(Le.render(k,v,N),J===!0&&Ae.endShadows(),(H&&T.hasRenderPass())===!1){let Re=w.opaque,me=w.transmissive;if(S.setupLights(),N.isArrayCamera){let Ne=N.cameras;if(me.length>0)for(let Te=0,ze=Ne.length;Te<ze;Te++){let $e=Ne[Te];il(Re,me,v,$e)}Be&&Ze.render(v);for(let Te=0,ze=Ne.length;Te<ze;Te++){let $e=Ne[Te];Mn(w,v,$e,$e.viewport)}}else me.length>0&&il(Re,me,v,N),Be&&Ze.render(v),Mn(w,v,N)}ne!==null&&j===0&&(Y.updateMultisampleRenderTarget(ne),Y.updateRenderTargetMipmap(ne)),H&&T.end(P),v.isScene===!0&&v.onAfterRender(P,v,N),Me.resetDefaultState(),X=-1,Z=null,y.pop(),y.length>0?(S=y[y.length-1],Y.setTextureUnits(S.state.textureUnits),J===!0&&Ae.setGlobalState(P.clippingPlanes,S.state.camera)):S=null,A.pop(),A.length>0?w=A[A.length-1]:w=null,U!==null&&U.renderEnd()};function ji(v,N,q,H){if(v.visible===!1)return;if(v.layers.test(N.layers)){if(v.isGroup)q=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(N);else if(v.isLightProbeGrid)S.pushLightProbeGrid(v);else if(v.isLight)S.pushLight(v),v.castShadow&&S.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||v.intersectsFrustum(te)){H&&Ie.setFromMatrixPosition(v.matrixWorld).applyMatrix4(ae);let Re=ee.update(v),me=v.material;me.visible&&w.push(v,Re,me,q,Ie.z,null,N)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||v.intersectsFrustum(te))){let Re=ee.update(v),me=v.material;if(H&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ie.copy(v.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Ie.copy(Re.boundingSphere.center)),Ie.applyMatrix4(v.matrixWorld).applyMatrix4(ae)),Array.isArray(me)){let Ne=Re.groups;for(let Te=0,ze=Ne.length;Te<ze;Te++){let $e=Ne[Te],Ee=me[$e.materialIndex];Ee&&Ee.visible&&w.push(v,Re,Ee,q,Ie.z,$e,N)}}else me.visible&&w.push(v,Re,me,q,Ie.z,null,N)}}let fe=v.children;for(let Re=0,me=fe.length;Re<me;Re++)ji(fe[Re],N,q,H)}function Mn(v,N,q,H){let{opaque:k,transmissive:fe,transparent:Re}=v;S.setupLightsView(q),J===!0&&Ae.setGlobalState(P.clippingPlanes,q),H&&_.viewport(ie.copy(H)),k.length>0&&Zt(k,N,q),fe.length>0&&Zt(fe,N,q),Re.length>0&&Zt(Re,N,q),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function il(v,N,q,H){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[H.id]===void 0){let Ee=Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[H.id]=new sn(1,1,{generateMipmaps:!0,type:Ee?Fn:rn,minFilter:Si,samples:Math.max(4,E.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:st.workingColorSpace})}let fe=S.state.transmissionRenderTarget[H.id],Re=H.viewport||ie;fe.setSize(Re.z*P.transmissionResolutionScale,Re.w*P.transmissionResolutionScale);let me=P.getRenderTarget(),Ne=P.getActiveCubeFace(),Te=P.getActiveMipmapLevel();P.setRenderTarget(fe),P.getClearColor(He),Xe=P.getClearAlpha(),Xe<1&&P.setClearColor(16777215,.5),P.clear(),Be&&Ze.render(q);let ze=P.toneMapping;P.toneMapping=Nn;let $e=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),S.setupLightsView(H),J===!0&&Ae.setGlobalState(P.clippingPlanes,H),Zt(v,q,H),Y.updateMultisampleRenderTarget(fe),Y.updateRenderTargetMipmap(fe),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let Ee=!1;for(let ct=0,At=N.length;ct<At;ct++){let bt=N[ct],{object:mt,geometry:Vt,material:Pe,group:Kt}=bt;if(Pe.side===yn&&mt.layers.test(H.layers)){let ot=Pe.side;Pe.side=Ht,Pe.needsUpdate=!0,Jt(mt,q,H,Vt,Pe,Kt),Pe.side=ot,Pe.needsUpdate=!0,Ee=!0}}Ee===!0&&(Y.updateMultisampleRenderTarget(fe),Y.updateRenderTargetMipmap(fe))}P.setRenderTarget(me,Ne,Te),P.setClearColor(He,Xe),$e!==void 0&&(H.viewport=$e),P.toneMapping=ze}function Zt(v,N,q){let H=N.isScene===!0?N.overrideMaterial:null;for(let k=0,fe=v.length;k<fe;k++){let Re=v[k],{object:me,geometry:Ne,group:Te}=Re,ze=Re.material;ze.allowOverride===!0&&H!==null&&(ze=H),me.layers.test(q.layers)&&Jt(me,N,q,Ne,ze,Te)}}function Jt(v,N,q,H,k,fe){U!==null&&k.isNodeMaterial&&U.setObject(v,k),v.onBeforeRender(P,N,q,H,k,fe),v.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),k.onBeforeRender(P,N,q,H,v,fe),k.transparent===!0&&k.side===yn&&k.forceSinglePass===!1?(k.side=Ht,k.needsUpdate=!0,P.renderBufferDirect(q,N,H,k,v,fe),k.side=qn,k.needsUpdate=!0,P.renderBufferDirect(q,N,H,k,v,fe),k.side=yn):P.renderBufferDirect(q,N,H,k,v,fe),v.onAfterRender(P,N,q,H,k,fe)}function Ti(v,N,q){N.isScene!==!0&&(N=Fe);let H=V.get(v),k=S.state.lights,fe=S.state.shadowsArray,Re=k.state.version,me=de.getParameters(v,k.state,fe,N,q,S.state.lightProbeGridArray),Ne=de.getProgramCacheKey(me),Te=H.programs;H.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?N.environment:null,H.fog=N.fog;let ze=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;H.envMap=ce.get(v.envMap||H.environment,ze),H.envMapRotation=H.environment!==null&&v.envMap===null?N.environmentRotation:v.envMapRotation,Te===void 0&&(v.addEventListener("dispose",St),Te=new Map,H.programs=Te);let $e=Te.get(Ne);if($e!==void 0){if(H.currentProgram===$e&&H.lightsStateVersion===Re)return sl(v,me),$e}else me.uniforms=de.getUniforms(v),U!==null&&v.isNodeMaterial&&U.build(v,q,me),v.onBeforeCompile(me,P),$e=de.acquireProgram(me,Ne),Te.set(Ne,$e),H.uniforms=me.uniforms;let Ee=H.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Ee.clippingPlanes=Ae.uniform),sl(v,me),H.needsLights=Bn(v),H.lightsStateVersion=Re,H.needsLights&&(Ee.ambientLightColor.value=k.state.ambient,Ee.lightProbe.value=k.state.probe,Ee.sunLights.value=k.state.sun,Ee.sunLightShadows.value=k.state.sunShadow,Ee.directionalLights.value=k.state.directional,Ee.directionalLightShadows.value=k.state.directionalShadow,Ee.spotLights.value=k.state.spot,Ee.spotLightShadows.value=k.state.spotShadow,Ee.rectAreaLights.value=k.state.rectArea,Ee.ltc_1.value=k.state.rectAreaLTC1,Ee.ltc_2.value=k.state.rectAreaLTC2,Ee.pointLights.value=k.state.point,Ee.pointLightShadows.value=k.state.pointShadow,Ee.hemisphereLights.value=k.state.hemi,Ee.sunShadowMatrix.value=k.state.sunShadowMatrix,Ee.sunShadowCascade.value=k.state.sunShadowCascade,Ee.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ee.spotLightMatrix.value=k.state.spotLightMatrix,Ee.spotLightMap.value=k.state.spotLightMap,Ee.pointShadowMatrix.value=k.state.pointShadowMatrix),H.lightProbeGrid=S.state.lightProbeGridArray.length>0,H.currentProgram=$e,H.uniformsList=null,$e}function wn(v){if(v.uniformsList===null){let N=v.currentProgram.getUniforms();v.uniformsList=ks.seqWithValue(N.seq,v.uniforms)}return v.uniformsList}function sl(v,N){let q=V.get(v);q.outputColorSpace=N.outputColorSpace,q.batching=N.batching,q.batchingColor=N.batchingColor,q.instancing=N.instancing,q.instancingColor=N.instancingColor,q.instancingMorph=N.instancingMorph,q.skinning=N.skinning,q.morphTargets=N.morphTargets,q.morphNormals=N.morphNormals,q.morphColors=N.morphColors,q.morphTargetsCount=N.morphTargetsCount,q.numClippingPlanes=N.numClippingPlanes,q.numIntersection=N.numClipIntersection,q.vertexAlphas=N.vertexAlphas,q.vertexTangents=N.vertexTangents,q.toneMapping=N.toneMapping}function mn(v,N){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;b.setFromMatrixPosition(N.matrixWorld);for(let q=0,H=v.length;q<H;q++){let k=v[q];if(k.texture!==null&&k.boundingBox.containsPoint(b))return k}return null}function nn(v,N,q,H,k){N.isScene!==!0&&(N=Fe),Y.resetTextureUnits();let fe=N.fog,Re=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?N.environment:null,me=ne===null?P.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:st.workingColorSpace,Ne=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Te=ce.get(H.envMap||Re,Ne),ze=H.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,$e=!!q.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ee=!!q.morphAttributes.position,ct=!!q.morphAttributes.normal,At=!!q.morphAttributes.color,bt=Nn;H.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(bt=P.toneMapping);let mt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Vt=mt!==void 0?mt.length:0,Pe=V.get(H),Kt=S.state.lights;if(J===!0&&(re===!0||v!==Z)){let _t=v===Z&&H.id===X;Ae.setState(H,v,_t)}let ot=!1;H.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==Kt.state.version||Pe.outputColorSpace!==me||k.isBatchedMesh&&Pe.batching===!1||!k.isBatchedMesh&&Pe.batching===!0||k.isBatchedMesh&&Pe.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&Pe.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&Pe.instancing===!1||!k.isInstancedMesh&&Pe.instancing===!0||k.isSkinnedMesh&&Pe.skinning===!1||!k.isSkinnedMesh&&Pe.skinning===!0||k.isInstancedMesh&&Pe.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Pe.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Pe.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Pe.instancingMorph===!1&&k.morphTexture!==null||Pe.envMap!==Te||H.fog===!0&&Pe.fog!==fe||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==Ae.numPlanes||Pe.numIntersection!==Ae.numIntersection)||Pe.vertexAlphas!==ze||Pe.vertexTangents!==$e||Pe.morphTargets!==Ee||Pe.morphNormals!==ct||Pe.morphColors!==At||Pe.toneMapping!==bt||Pe.morphTargetsCount!==Vt||!!Pe.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(ot=!0):(ot=!0,Pe.__version=H.version);let gn=Pe.currentProgram;ot===!0&&(gn=Ti(H,N,k),U&&H.isNodeMaterial&&U.onUpdateProgram(H,gn,Pe));let kn=!1,si=!1,Yi=!1,pt=gn.getUniforms(),Et=Pe.uniforms;if(_.useProgram(gn.program)&&(kn=!0,si=!0,Yi=!0),H.id!==X&&(X=H.id,si=!0),Pe.needsLights){let _t=mn(S.state.lightProbeGridArray,k);Pe.lightProbeGrid!==_t&&(Pe.lightProbeGrid=_t,si=!0)}if(kn||Z!==v){_.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),pt.setValue(L,"projectionMatrix",v.projectionMatrix),pt.setValue(L,"viewMatrix",v.matrixWorldInverse);let ai=pt.map.cameraPosition;ai!==void 0&&ai.setValue(L,le.setFromMatrixPosition(v.matrixWorld)),E.logarithmicDepthBuffer&&pt.setValue(L,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&pt.setValue(L,"isOrthographic",v.isOrthographicCamera===!0),Z!==v&&(Z=v,si=!0,Yi=!0)}if(Pe.needsLights&&(Kt.state.sunShadowMap.length>0&&pt.setValue(L,"sunShadowMap",Kt.state.sunShadowMap,Y),Kt.state.directionalShadowMap.length>0&&pt.setValue(L,"directionalShadowMap",Kt.state.directionalShadowMap,Y),Kt.state.spotShadowMap.length>0&&pt.setValue(L,"spotShadowMap",Kt.state.spotShadowMap,Y),Kt.state.pointShadowMap.length>0&&pt.setValue(L,"pointShadowMap",Kt.state.pointShadowMap,Y)),k.isSkinnedMesh){pt.setOptional(L,k,"bindMatrix"),pt.setOptional(L,k,"bindMatrixInverse");let _t=k.skeleton;_t&&(_t.boneTexture===null&&_t.computeBoneTexture(),pt.setValue(L,"boneTexture",_t.boneTexture,Y))}k.isBatchedMesh&&(pt.setOptional(L,k,"batchingTexture"),pt.setValue(L,"batchingTexture",k._matricesTexture,Y),pt.setOptional(L,k,"batchingIdTexture"),pt.setValue(L,"batchingIdTexture",k._indirectTexture,Y),pt.setOptional(L,k,"batchingColorTexture"),k._colorsTexture!==null&&pt.setValue(L,"batchingColorTexture",k._colorsTexture,Y));let ri=q.morphAttributes;if((ri.position!==void 0||ri.normal!==void 0||ri.color!==void 0)&&F.update(k,q,gn),(si||Pe.receiveShadow!==k.receiveShadow)&&(Pe.receiveShadow=k.receiveShadow,pt.setValue(L,"receiveShadow",k.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&N.environment!==null&&(Et.envMapIntensity.value=N.environmentIntensity),Et.dfgLUT!==void 0&&(Et.dfgLUT.value=p_()),si){if(pt.setValue(L,"toneMappingExposure",P.toneMappingExposure),Pe.needsLights&&$r(Et,Yi),fe&&H.fog===!0&&Oe.refreshFogUniforms(Et,fe),Oe.refreshMaterialUniforms(Et,H,K,W,S.state.transmissionRenderTarget[v.id]),Pe.needsLights&&Pe.lightProbeGrid){let _t=Pe.lightProbeGrid;Et.probesSH.value=_t.texture,Et.probesMin.value.copy(_t.boundingBox.min),Et.probesMax.value.copy(_t.boundingBox.max),Et.probesResolution.value.copy(_t.resolution)}ks.upload(L,wn(Pe),Et,Y)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ks.upload(L,wn(Pe),Et,Y),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&pt.setValue(L,"center",k.center),pt.setValue(L,"modelViewMatrix",k.modelViewMatrix),pt.setValue(L,"normalMatrix",k.normalMatrix),pt.setValue(L,"modelMatrix",k.matrixWorld),H.uniformsGroups!==void 0){let _t=H.uniformsGroups;for(let ai=0,Zi=_t.length;ai<Zi;ai++){let zc=_t[ai];se.update(zc,gn),se.bind(zc,gn)}}return gn}function $r(v,N){v.ambientLightColor.needsUpdate=N,v.lightProbe.needsUpdate=N,v.sunLights.needsUpdate=N,v.sunLightShadows.needsUpdate=N,v.directionalLights.needsUpdate=N,v.directionalLightShadows.needsUpdate=N,v.pointLights.needsUpdate=N,v.pointLightShadows.needsUpdate=N,v.spotLights.needsUpdate=N,v.spotLightShadows.needsUpdate=N,v.rectAreaLights.needsUpdate=N,v.hemisphereLights.needsUpdate=N}function Bn(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(v,N,q){let H=V.get(v);H.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),V.get(v.texture).__webglTexture=N,V.get(v.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:q,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,N){let q=V.get(v);q.__webglFramebuffer=N,q.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(v,N=0,q=0){ne=v,z=N,j=q;let H=null,k=!1,fe=!1;if(v){let me=V.get(v);if(me.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(L.FRAMEBUFFER,me.__webglFramebuffer),ie.copy(v.viewport),ve.copy(v.scissor),_e=v.scissorTest,_.viewport(ie),_.scissor(ve),_.setScissorTest(_e),X=-1;return}else if(me.__webglFramebuffer===void 0)Y.setupRenderTarget(v);else if(me.__hasExternalTextures)Y.rebindTextures(v,V.get(v.texture).__webglTexture,V.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let ze=v.depthTexture;if(me.__boundDepthTexture!==ze){if(ze!==null&&V.has(ze)&&(v.width!==ze.image.width||v.height!==ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(v)}}let Ne=v.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(fe=!0);let Te=V.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Te[N])?H=Te[N][q]:H=Te[N],k=!0):v.samples>0&&Y.useMultisampledRTT(v)===!1?H=V.get(v).__webglMultisampledFramebuffer:Array.isArray(Te)?H=Te[q]:H=Te,ie.copy(v.viewport),ve.copy(v.scissor),_e=v.scissorTest}else ie.copy(ge).multiplyScalar(K).floor(),ve.copy(De).multiplyScalar(K).floor(),_e=rt;if(q!==0&&(H=G),_.bindFramebuffer(L.FRAMEBUFFER,H)&&_.drawBuffers(v,H),_.viewport(ie),_.scissor(ve),_.setScissorTest(_e),k){let me=V.get(v.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,me.__webglTexture,q)}else if(fe){let me=N;for(let Ne=0;Ne<v.textures.length;Ne++){let Te=V.get(v.textures[Ne]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ne,Te.__webglTexture,q,me)}}else if(v!==null&&q!==0){let me=V.get(v.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,me.__webglTexture,q)}X=-1};function rl(v){let N=V.get(v);return(N.__readFormat!==v.format||N.__readType!==v.type)&&(N.__readFormat=v.format,N.__readType=v.type,N.__formatReadable=E.textureFormatReadable(v.format),N.__typeReadable=E.textureTypeReadable(v.type)),N}this.readRenderTargetPixels=function(v,N,q,H,k,fe,Re,me=0){if(!(v&&v.isWebGLRenderTarget)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=V.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Re!==void 0&&(Ne=Ne[Re]),Ne){_.bindFramebuffer(L.FRAMEBUFFER,Ne);try{let Te=v.textures[me],ze=Te.format,$e=Te.type;v.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+me);let Ee=rl(Te);if(Ee.__formatReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ee.__typeReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=v.width-H&&q>=0&&q<=v.height-k&&L.readPixels(N,q,H,k,ue.convert(ze),ue.convert($e),fe)}finally{let Te=ne!==null?V.get(ne).__webglFramebuffer:null;_.bindFramebuffer(L.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(v,N,q,H,k,fe,Re,me=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=V.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Re!==void 0&&(Ne=Ne[Re]),Ne)if(N>=0&&N<=v.width-H&&q>=0&&q<=v.height-k){_.bindFramebuffer(L.FRAMEBUFFER,Ne);let Te=v.textures[me],ze=Te.format,$e=Te.type;v.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+me);let Ee=rl(Te);if(Ee.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ee.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ct=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ct),L.bufferData(L.PIXEL_PACK_BUFFER,fe.byteLength,L.STREAM_READ),L.readPixels(N,q,H,k,ue.convert(ze),ue.convert($e),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let At=ne!==null?V.get(ne).__webglFramebuffer:null;_.bindFramebuffer(L.FRAMEBUFFER,At);let bt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await ed(L,bt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,ct),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,fe),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(ct),L.deleteSync(bt),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,N=null,q=0){let H=Math.pow(2,-q),k=Math.floor(v.image.width*H),fe=Math.floor(v.image.height*H),Re=N!==null?N.x:0,me=N!==null?N.y:0;Y.setTexture2D(v,0),L.copyTexSubImage2D(L.TEXTURE_2D,q,0,0,Re,me,k,fe),_.unbindTexture()},this.copyTextureToTexture=function(v,N,q=null,H=null,k=0,fe=0){let Re,me,Ne,Te,ze,$e,Ee,ct,At,bt=v.isCompressedTexture?v.mipmaps[fe]:v.image;if(q!==null)Re=q.max.x-q.min.x,me=q.max.y-q.min.y,Ne=q.isBox3?q.max.z-q.min.z:1,Te=q.min.x,ze=q.min.y,$e=q.isBox3?q.min.z:0;else{let Et=Math.pow(2,-k);Re=Math.floor(bt.width*Et),me=Math.floor(bt.height*Et),v.isDataArrayTexture?Ne=bt.depth:v.isData3DTexture?Ne=Math.floor(bt.depth*Et):Ne=1,Te=0,ze=0,$e=0}H!==null?(Ee=H.x,ct=H.y,At=H.z):(Ee=0,ct=0,At=0);let mt=ue.convert(N.format),Vt=ue.convert(N.type),Pe;N.isData3DTexture?(Y.setTexture3D(N,0),Pe=L.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Y.setTexture2DArray(N,0),Pe=L.TEXTURE_2D_ARRAY):(Y.setTexture2D(N,0),Pe=L.TEXTURE_2D),_.activeTexture(L.TEXTURE0),_.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),_.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),_.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);let Kt=_.getParameter(L.UNPACK_ROW_LENGTH),ot=_.getParameter(L.UNPACK_IMAGE_HEIGHT),gn=_.getParameter(L.UNPACK_SKIP_PIXELS),kn=_.getParameter(L.UNPACK_SKIP_ROWS),si=_.getParameter(L.UNPACK_SKIP_IMAGES);_.pixelStorei(L.UNPACK_ROW_LENGTH,bt.width),_.pixelStorei(L.UNPACK_IMAGE_HEIGHT,bt.height),_.pixelStorei(L.UNPACK_SKIP_PIXELS,Te),_.pixelStorei(L.UNPACK_SKIP_ROWS,ze),_.pixelStorei(L.UNPACK_SKIP_IMAGES,$e);let Yi=v.isDataArrayTexture||v.isData3DTexture,pt=N.isDataArrayTexture||N.isData3DTexture;if(v.isDepthTexture){let Et=V.get(v),ri=V.get(N),_t=V.get(Et.__renderTarget),ai=V.get(ri.__renderTarget);_.bindFramebuffer(L.READ_FRAMEBUFFER,_t.__webglFramebuffer),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,ai.__webglFramebuffer);for(let Zi=0;Zi<Ne;Zi++)Yi&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,V.get(v).__webglTexture,k,$e+Zi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,V.get(N).__webglTexture,fe,At+Zi)),L.blitFramebuffer(Te,ze,Re,me,Ee,ct,Re,me,L.DEPTH_BUFFER_BIT,L.NEAREST);_.bindFramebuffer(L.READ_FRAMEBUFFER,null),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(k!==0||v.isRenderTargetTexture||V.has(v)){let Et=V.get(v),ri=V.get(N);_.bindFramebuffer(L.READ_FRAMEBUFFER,D),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,O);for(let _t=0;_t<Ne;_t++)Yi?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Et.__webglTexture,k,$e+_t):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Et.__webglTexture,k),pt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ri.__webglTexture,fe,At+_t):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ri.__webglTexture,fe),k!==0?L.blitFramebuffer(Te,ze,Re,me,Ee,ct,Re,me,L.COLOR_BUFFER_BIT,L.NEAREST):pt?L.copyTexSubImage3D(Pe,fe,Ee,ct,At+_t,Te,ze,Re,me):L.copyTexSubImage2D(Pe,fe,Ee,ct,Te,ze,Re,me);_.bindFramebuffer(L.READ_FRAMEBUFFER,null),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else pt?v.isDataTexture||v.isData3DTexture?L.texSubImage3D(Pe,fe,Ee,ct,At,Re,me,Ne,mt,Vt,bt.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(Pe,fe,Ee,ct,At,Re,me,Ne,mt,bt.data):L.texSubImage3D(Pe,fe,Ee,ct,At,Re,me,Ne,mt,Vt,bt):v.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,fe,Ee,ct,Re,me,mt,Vt,bt.data):v.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,fe,Ee,ct,bt.width,bt.height,mt,bt.data):L.texSubImage2D(L.TEXTURE_2D,fe,Ee,ct,Re,me,mt,Vt,bt);_.pixelStorei(L.UNPACK_ROW_LENGTH,Kt),_.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ot),_.pixelStorei(L.UNPACK_SKIP_PIXELS,gn),_.pixelStorei(L.UNPACK_SKIP_ROWS,kn),_.pixelStorei(L.UNPACK_SKIP_IMAGES,si),fe===0&&N.generateMipmaps&&L.generateMipmap(Pe),_.unbindTexture()},this.initRenderTarget=function(v){V.get(v).__webglFramebuffer===void 0&&Y.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Y.setTextureCube(v,0):v.isData3DTexture?Y.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Y.setTexture2DArray(v,0):Y.setTexture2D(v,0),_.unbindTexture()},this.resetState=function(){z=0,j=0,ne=null,_.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}};var Bd={type:"change"},Fc={type:"start"},zd={type:"end"},$o=new xs,kd=new dn,m_=Math.cos(70*tn.DEG2RAD),Lt=new I,an=2*Math.PI,ft={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Uc=1e-6,Qo=class extends Pr{constructor(e,t=null){super(e,t),this.state=ft.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:bi.ROTATE,MIDDLE:bi.DOLLY,RIGHT:bi.PAN},this.touches={ONE:xi.ROTATE,TWO:xi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new en,this._lastTargetPosition=new I,this._quat=new en().setFromUnitVectors(e.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ii,this._sphericalDelta=new ii,this._scale=1,this._panOffset=new I,this._rotateStart=new oe,this._rotateEnd=new oe,this._rotateDelta=new oe,this._panStart=new oe,this._panEnd=new oe,this._panDelta=new oe,this._dollyStart=new oe,this._dollyEnd=new oe,this._dollyDelta=new oe,this._dollyDirection=new I,this._mouse=new oe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=__.bind(this),this._onPointerDown=g_.bind(this),this._onPointerUp=y_.bind(this),this._onContextMenu=E_.bind(this),this._onMouseWheel=v_.bind(this),this._onKeyDown=S_.bind(this),this._onTouchStart=M_.bind(this),this._onTouchMove=w_.bind(this),this._onMouseDown=b_.bind(this),this._onMouseMove=x_.bind(this),this._interceptControlDown=T_.bind(this),this._interceptControlUp=R_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ft.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Bd),this.update(),this.state=ft.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Lt.copy(t).sub(this.target),Lt.applyQuaternion(this._quat),this._spherical.setFromVector3(Lt),this.autoRotate&&this.state===ft.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=an:n>Math.PI&&(n-=an),s<-Math.PI?s+=an:s>Math.PI&&(s-=an),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Lt.setFromSpherical(this._spherical),Lt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Lt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Lt.length();a=this._clampDistance(o*this._scale);let c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let o=new I(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new I(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=Lt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):($o.origin.copy(this.object.position),$o.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot($o.direction))<m_?this.object.lookAt(this.target):(kd.setFromNormalAndCoplanarPoint(this.object.up,this.target),$o.intersectPlane(kd,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Uc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Uc||this._lastTargetPosition.distanceToSquared(this.target)>Uc?(this.dispatchEvent(Bd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?an/60*this.autoRotateSpeed*e:an/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Lt.setFromMatrixColumn(t,0),Lt.multiplyScalar(-e),this._panOffset.add(Lt)}_panUp(e,t){this.screenSpacePanning===!0?Lt.setFromMatrixColumn(t,1):(Lt.setFromMatrixColumn(t,0),Lt.crossVectors(this.object.up,Lt)),Lt.multiplyScalar(e),this._panOffset.add(Lt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Lt.copy(s).sub(this.target);let r=Lt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(an*this._rotateDelta.x/t.clientHeight),this._rotateUp(an*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(an*this._rotateDelta.x/t.clientHeight),this._rotateUp(an*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new oe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function g_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function __(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function y_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(zd),this.state=ft.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function b_(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case bi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ft.DOLLY;break;case bi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ft.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ft.ROTATE}break;case bi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ft.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ft.PAN}break;default:this.state=ft.NONE}this.state!==ft.NONE&&this.dispatchEvent(Fc)}function x_(i){switch(this.state){case ft.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ft.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ft.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function v_(i){this.enabled===!1||this.enableZoom===!1||this.state!==ft.NONE||(i.preventDefault(),this.dispatchEvent(Fc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(zd))}function S_(i){this.enabled!==!1&&this._handleKeyDown(i)}function M_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case xi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ft.TOUCH_ROTATE;break;case xi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ft.TOUCH_PAN;break;default:this.state=ft.NONE}break;case 2:switch(this.touches.TWO){case xi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ft.TOUCH_DOLLY_PAN;break;case xi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ft.TOUCH_DOLLY_ROTATE;break;default:this.state=ft.NONE}break;default:this.state=ft.NONE}this.state!==ft.NONE&&this.dispatchEvent(Fc)}function w_(i){switch(this._trackPointer(i),this.state){case ft.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ft.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ft.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ft.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ft.NONE}}function E_(i){this.enabled!==!1&&i.preventDefault()}function T_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function R_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var el=class extends Li{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new jt;e.deleteAttribute("uv");let t=new at({side:Ht}),n=new at,s=new Cr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Ge(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new cr(e,n,6),o=new Ft;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let c=new Ge(e,Hs(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new Ge(e,Hs(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let h=new Ge(e,Hs(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new Ge(e,Hs(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new Ge(e,Hs(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new Ge(e,Hs(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Hs(i){return new wr({color:0,emissive:16777215,emissiveIntensity:i})}function Ei(i){let e=i.points.map(([t,n])=>new oe(Math.max(1e-4,t),n));return new Fi(e,i.segments??24)}function qi(i){let e=i.points.map(([s,r,a])=>new I(s,r,a)),t=new In(e,i.closed??!1),n=Math.max(8,i.points.length*6);return new Ln(t,n,i.radius??.05,i.radialSegments??8,i.closed??!1)}function A_(i){let e=2166136261;for(let t=0;t<i.length;t+=1)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function lt(i,e,t){if(typeof i=="number")return i;if(i&&typeof i=="object"){let n=i;for(let s of e)if(typeof n[s]=="number")return n[s]}return t}function C_(i){let e=/^#[0-9a-f]{3}$/i.test(i)?"#"+i.slice(1).split("").map(n=>n+n).join(""):i,t=/^#[0-9a-f]{6}$/i.test(e)?Number.parseInt(e.slice(1),16):9075295;return[Gs(t>>16&255),Gs(t>>8&255),Gs(t&255)]}function P_(i){let e=i.colorVariation?.palette;if(Array.isArray(e)&&e.length>0)return e.filter(s=>typeof s=="string");let t=i.albedo?.secondary;return[i.baseColor??i.color??i.albedo?.dominant,...Array.isArray(t)?t:[]].filter(s=>typeof s=="string"&&s.startsWith("#"))}function Tt(i){return Math.max(0,Math.min(1,i))}function Gs(i){return Math.max(30,Math.min(240,Math.round(i)))}function I_(i){return Math.max(.02,Math.min(1,i))}function Hd(i){return Math.max(1,Math.min(2.5,i))}function D_(i){return i>=.5?1:0}function L_(i){let e=typeof i.baseColor=="string"?i.baseColor:"#8A7A5F";return new We().setStyle(e,Pt)}function Gd(i){return i*i*(3-2*i)}function tl(i,e,t,n,s){let r=(i%n+n)%n,a=(e%s+s)%s,o=Math.imul(r+t*17,374761393)^Math.imul(a+t*31,668265263);return o=Math.imul(o^o>>>13,1274126177),((o^o>>>16)>>>0)/4294967295}function N_(i,e,t,n,s){let r=i*n,a=e*s,o=Math.floor(r),c=Math.floor(a),l=Gd(r-o),h=Gd(a-c),u=tl(o,c,t,n,s),d=tl(o+1,c,t,n,s),f=tl(o,c+1,t,n,s),m=tl(o+1,c+1,t,n,s);return tn.lerp(tn.lerp(u,d,l),tn.lerp(f,m,l),h)}function U_(i){let t=(Array.isArray(i.surfaceFrequencyBands)?i.surfaceFrequencyBands:[]).flatMap(n=>{if(!n||typeof n!="object")return[];let s=n,r=typeof s.frequency=="number"?s.frequency:0,a=typeof s.amplitude=="number"?s.amplitude:0;if(r<=0||a<=0)return[];let o=Array.isArray(s.stretch)?s.stretch:[1,1],c=`${String(s.pattern??"")} ${String(s.role??"")}`.toLowerCase();return[{frequency:r,amplitude:a,stretchX:typeof o[0]=="number"?Math.max(.1,o[0]):1,stretchY:typeof o[1]=="number"?Math.max(.1,o[1]):1,ridge:/(ridge|groove|grain|fiber|striated|crack)/.test(c)}]});return t.length>0?t:[{frequency:2,amplitude:.42,stretchX:1,stretchY:1,ridge:!1},{frequency:12,amplitude:.22,stretchX:1,stretchY:1,ridge:!1},{frequency:56,amplitude:.08,stretchX:1,stretchY:1,ridge:!1}]}function Oc(i,e,t,n){let s=0,r=0;for(let a=0;a<t.length;a+=1){let o=t[a],c=Math.max(1,Math.round(o.frequency*o.stretchX)),l=Math.max(1,Math.round(o.frequency*o.stretchY)),h=N_(i,e,n+a*1013,c,l);o.ridge&&(h=1-Math.abs(h*2-1)),s+=h*o.amplitude,r+=o.amplitude}return r>0?Tt(s/r):.5}function F_(i,e){if(i.length===1)return i[0];let t=Tt(e)*(i.length-1),n=Math.min(i.length-2,Math.floor(t)),s=t-n,r=i[n],a=i[n+1];return[Math.round(tn.lerp(r[0],a[0],s)),Math.round(tn.lerp(r[1],a[1],s)),Math.round(tn.lerp(r[2],a[2],s))]}function Vd(i){let e=/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/.exec(i);return e?[Gs(Number(e[1])),Gs(Number(e[2])),Gs(Number(e[3]))]:[138,122,95]}function O_(i,e,t){let n=i.stops.length>=2?i.stops:[{offset:0,color:"rgba(138,122,95,1)"},{offset:1,color:"rgba(138,122,95,1)"}],s;if(i.type==="radial"){let[h,u]=i.axis,d=e-h,f=t-u,m=Math.max(.001,Math.hypot(Math.max(h,1-h),Math.max(u,1-u)));s=Tt(Math.hypot(d,f)/m)}else{let[h,u]=i.axis,d=(e-.5)*h+(t-.5)*u,f=.5*(Math.abs(h)+Math.abs(u))||.5;s=Tt(d/f+.5)}let r=s*(n.length-1),a=Math.min(n.length-2,Math.max(0,Math.floor(r))),o=r-a,c=Vd(n[a].color),l=Vd(n[a+1].color);return[tn.lerp(c[0],l[0],o),tn.lerp(c[1],l[1],o),tn.lerp(c[2],l[2],o)]}function Vr(i,e,t,n,s){i[e]=Math.max(0,Math.min(255,Math.round(t))),i[e+1]=Math.max(0,Math.min(255,Math.round(n))),i[e+2]=Math.max(0,Math.min(255,Math.round(s))),i[e+3]=255}function Wr(i){let e=document.createElement("canvas");return e.width=i,e.height=i,e}function Xr(i,e,t,n){let s=new dr(i),r=t.textureProjection&&typeof t.textureProjection=="object"?t.textureProjection:{},a=Array.isArray(r.repeat)?r.repeat:[2,2];return s.colorSpace=e,s.wrapS=ni,s.wrapT=ni,s.repeat.set(typeof a[0]=="number"?a[0]:2,typeof a[1]=="number"?a[1]:2),s.anisotropy=Math.max(1,Math.round(n.textureAnisotropy??r.anisotropy??8)),s.needsUpdate=!0,s}function qr(i,e){let t=i.referencePbr;if(!t||typeof t!="object"||t.usable===!1)return null;let n=typeof t.confidence=="number"?t.confidence:typeof t.estimatedFidelity=="number"?t.estimatedFidelity:0,s=typeof t.targetThreshold=="number"?t.targetThreshold:.7;if(n<s)return null;let r=t.maps;if(!r||typeof r!="object")return null;let a=r[e];if(!a||typeof a!="object")return null;let o=a,c=typeof o.url=="string"&&o.url.trim()?o.url:o.path;return typeof c=="string"&&c.trim()?c:null}function jr(i,e,t,n){let s=new Tr().load(i),r=t.textureProjection&&typeof t.textureProjection=="object"?t.textureProjection:{},a=Array.isArray(r.repeat)?r.repeat:[1,1];return s.colorSpace=e,s.wrapS=ni,s.wrapT=ni,s.repeat.set(typeof a[0]=="number"?a[0]:1,typeof a[1]=="number"?a[1]:1),s.anisotropy=Math.max(1,Math.round(n.textureAnisotropy??r.anisotropy??8)),s.needsUpdate=!0,s}function B_(i,e){let t=qr(i,"albedo"),n=qr(i,"roughness"),s=qr(i,"height"),r=qr(i,"normal"),a=qr(i,"ao");return!t||!n||!s||!r||!a?null:{albedo:jr(t,Pt,i,e),roughness:jr(n,Bt,i,e),height:jr(s,Bt,i,e),normal:jr(r,Bt,i,e),ao:jr(a,Bt,i,e),source:"reference-pixel-extraction"}}function k_(i,e,t){if(typeof document>"u")return null;let n=(t.qualityPriority??"reference-fidelity")==="reference-fidelity",s=t.textureSize??e.textureResolution,r=typeof s=="number"&&Number.isFinite(s)?s:n?1024:512,a=Math.max(256,Math.min(2048,2**Math.round(Math.log2(r)))),o={albedo:Wr(a),roughness:Wr(a),height:Wr(a),normal:Wr(a),ao:Wr(a)},c={albedo:o.albedo.getContext("2d"),roughness:o.roughness.getContext("2d"),height:o.height.getContext("2d"),normal:o.normal.getContext("2d"),ao:o.ao.getContext("2d")};if(!c.albedo||!c.roughness||!c.height||!c.normal||!c.ao)return null;let l={albedo:c.albedo.createImageData(a,a),roughness:c.roughness.createImageData(a,a),height:c.height.createImageData(a,a),normal:c.normal.createImageData(a,a),ao:c.ao.createImageData(a,a)},h=A_(i),u=U_(e),d=new Float32Array(a*a),f=new Float32Array(a*a),m=P_(e),x=typeof e.baseColor=="string"?e.baseColor:"#8A7A5F",g=(m.length>=2?m:[x,"#6E614B","#A08F70"]).map(C_),p=Tt(lt(e.roughness,["base"],.76)),M=Tt(lt(e.roughness,["variation"],.18)),R=Tt(lt(e.colorVariation,["amplitude","variation"],.18)),b=Tt(lt(e.colorVariation,["heightCorrelation"],.3)),w=e.colorGradient;for(let y=0;y<a;y+=1){let T=y/a;for(let P=0;P<a;P+=1){let C=P/a,U=y*a+P,G=Oc(C,T,u,h+101),D=Oc(C,T,u,h+7001),O=Oc(C,T,u,h+15013);d[U]=G,f[U]=Tt(p+(D-.5)*M*2);let z;if(w)z=O_(w,C,T);else{let j=Tt(.5+(O-.5)*R*2+(G-.5)*b);z=F_(g,j)}Vr(l.albedo.data,U*4,z[0],z[1],z[2])}}let S=Math.max(.05,lt(e.normal,["strength","amplitude"],.35)),A=Tt(lt(e.ambientOcclusion,["cavityStrength","strength"],.35));for(let y=0;y<a;y+=1){let T=(y-1+a)%a*a,P=(y+1)%a*a;for(let C=0;C<a;C+=1){let U=(C-1+a)%a,G=(C+1)%a,D=y*a+C,O=d[D],z=(d[y*a+G]-d[y*a+U])*S*6,j=(d[P+C]-d[T+C])*S*6,ne=1/Math.sqrt(z*z+j*j+1),X=-z*ne,Z=-j*ne,ie=ne,ve=(d[y*a+U]+d[y*a+G]+d[T+C]+d[P+C])*.25,_e=Math.max(0,ve-O),He=Tt(1-A*(_e*12+(1-O)*.16)),Xe=D*4,je=O*255,W=f[D]*255;Vr(l.height.data,Xe,je,je,je),Vr(l.roughness.data,Xe,W,W,W),Vr(l.normal.data,Xe,(X*.5+.5)*255,(Z*.5+.5)*255,(ie*.5+.5)*255),Vr(l.ao.data,Xe,He*255,He*255,He*255)}}return c.albedo.putImageData(l.albedo,0,0),c.roughness.putImageData(l.roughness,0,0),c.height.putImageData(l.height,0,0),c.normal.putImageData(l.normal,0,0),c.ao.putImageData(l.ao,0,0),{albedo:Xr(o.albedo,Pt,e,t),roughness:Xr(o.roughness,Bt,e,t),height:Xr(o.height,Bt,e,t),normal:Xr(o.normal,Bt,e,t),ao:Xr(o.ao,Bt,e,t),source:"procedural"}}function Bc(i,e,t,n=!1){let r=e.textureless?.declared===!0?null:B_(e,t)??k_(i,e,t),a=new Xn({color:r?16777215:L_(e),roughness:r?1:Tt(lt(e.roughness,["base"],.76)),metalness:D_(lt(e.metalness,["base"],0)),clearcoat:Tt(lt(e.clearcoat,["base","amount"],0)),clearcoatRoughness:Tt(lt(e.clearcoatRoughness,["base"],.25)),transmission:Tt(lt(e.transmission,["base","amount"],0)),ior:Hd(lt(e.ior,["base","value"],1.5)),thickness:Math.max(0,lt(e.thickness,["base","amount"],0)),attenuationDistance:Math.max(.001,lt(e.attenuationDistance,["base","value"],1/0)),attenuationColor:new We(typeof e.attenuationColor=="string"?e.attenuationColor:"#ffffff"),sheen:Tt(lt(e.sheen,["base","amount"],0)),sheenColor:new We(typeof e.sheenColor=="string"?e.sheenColor:"#ffffff"),sheenRoughness:Tt(lt(e.sheenRoughness,["base"],1)),iridescence:Tt(lt(e.iridescence,["base","amount"],0)),iridescenceIOR:Hd(lt(e.iridescenceIOR,["base","value"],1.3)),anisotropy:Tt(lt(e.anisotropy,["base","amount"],0)),anisotropyRotation:lt(e.anisotropy,["rotation"],0),specularIntensity:I_(lt(e.specularF0??e.f0??e.specularIntensity,["base","value"],1)),specularColor:new We(typeof e.specularColor=="string"?e.specularColor:"#ffffff"),emissive:new We(typeof e.emissive=="string"?e.emissive:"#000000"),emissiveIntensity:Math.max(0,lt(e.emissiveIntensity,["base"],1)),opacity:Tt(lt(e.opacity,["base"],1)),transparent:lt(e.transmission,["base","amount"],0)>0||lt(e.opacity,["base"],1)<1,alphaTest:Math.max(0,lt(e.alpha,["cutoff","alphaTest"],0)),wireframe:t.wireframe??!1,side:e.doubleSided===!0?yn:qn,flatShading:e.flatShading===!0});if(r){a.map=r.albedo,a.roughnessMap=r.roughness,a.normalMap=r.normal,a.normalScale.setScalar(Math.max(.05,lt(e.normal,["strength","amplitude"],.35))),a.aoMap=r.ao,a.aoMap.channel=0,a.aoMapIntensity=lt(e.ambientOcclusion,["cavityStrength","strength"],.35);let o=n||e.denseMesh===!0||e.geometryDensity==="dense"||e.topologyClass==="dense",c=Math.max(0,lt(e.bump,["amplitude","strength"],0)),l=o?Math.max(.05,c):c;l>0&&(a.bumpMap=r.height,a.bumpScale=l);let h=Math.max(0,lt(e.displacement,["amplitude","strength"],0)),u=o?Math.max(.005,h):h;u>0&&(a.displacementMap=r.height,a.displacementScale=u,a.displacementBias=-u*.5)}return a.envMapIntensity=lt(e,["envMapIntensity"],.8),a.userData.sculptMaterial=e,a.userData.proceduralMapsIndependent=!0,a.userData.pbrConstraints={albedoRange:[30,240],binaryMetalness:!0,f0Range:[.02,1],iorRange:[1,2.5]},a.userData.pbrTextureSource=r?.source??"flat-fallback",a.userData.referencePbr=e.referencePbr??null,a.userData.referenceMaterialId=e.referenceMaterialId??e.materialReference?.profileId??null,a.userData.materialEvidence=e.materialEvidence??null,a.userData.validationViews=e.materialReference?.validationViews??[],a.needsUpdate=!0,a}function Wd(i,e){return Array.isArray(i)&&i.length===3&&i.every(t=>typeof t=="number")?new I(i[0],i[1],i[2]):new I(e[0],e[1],e[2])}function Xd(i,e){return typeof i=="number"&&Number.isFinite(i)?i:e}function yt(i){if(!i||typeof i!="object")return null;let e=i,t=Wd(e.localStart,[0,0,0]),s=Wd(e.localEnd,[0,1,0]).clone().sub(t),r=s.length();if(r<=1e-4)return null;let a=s.clone().normalize(),o=new en().setFromUnitVectors(new I(0,1,0),a),c=Math.max(.005,Xd(e.baseRadius,.06)),l=Math.max(.003,Xd(e.endRadius,c*.55));return{start:t,midpoint:s.multiplyScalar(.5),quaternion:o,length:r,baseRadius:c,endRadius:l}}function qd(i={}){let e=new it;e.name="Gold balance with curved beam chains and bullion",e.userData.reconstructionEvidence={itemFamily:null,subtype:null,componentAdapter:null,route:null,exactnessTier:null,referenceCamera:{solved:!1,fovDegrees:36,aspect:1,orientation:{yaw:0,pitch:0,roll:0},positionHint:[.2,2.7,12],note:"Front review at Y 2.7, orthographic height 6.6. Side/rear/left inferred review views use same framing."},approximationNotes:[]},e.userData.materialPipeline={},e.userData.materialReferenceRegistry=null;let t={};t.gold=Bc("gold",{id:"gold",name:"gold",type:"physical",shaderModel:"MeshStandardMaterial / PBR approximation",baseColor:"#d6a64c",color:"#d6a64c",albedo:{dominant:"#d6a64c",secondary:["#c6933c","#f2ce86"],samplingNotes:"Textureless gold; specular image pixels are excluded from base albedo."},colorVariation:{palette:["#150B03","#ECC92C","#FEF695","#B4780A","#5A3002"],pattern:"none",amplitude:0,heightCorrelation:.42},roughness:{base:.24,variation:.025,map:"none"},metalness:{base:1,variation:0},ambientOcclusion:{cavityStrength:.38,contactShadowBias:.35,notes:"Reference-derived cavity estimate from local height minima; verify against grazing-light screenshot."},wear:{edgeWear:0,scratches:[],chips:[]},dirt:{amount:0,cavityBias:0,color:"#2F2A22"},localOverrides:[{id:"gold-polish",roughness:.21,region:"exposed bevel edges",evidenceRefs:["full-object"]}],shaderNotes:["Prefer MeshPhysicalMaterial when clearcoat, sheen, transmission, or thin-surface response is observed; otherwise use MeshStandardMaterial-compatible PBR channels.","Generate albedo, roughness, height/normal, and AO independently; never alias albedo into roughness.","Use normal/bump/displacement only when they map to observed surface relief.","Use displacement geometry when the observed relief changes the close-up silhouette; texture-only relief is insufficient there.","Reference-derived maps are estimates from image pixels; verify with neutral, grazing, and reference-matched renders.","Do not treat baked image shadows as final albedo; rerun extraction with a tighter material crop if highlights/shadows pollute the maps."],notes:"Textureless polished metal. Image reflection is not baked into surface albedo; exact lighting and rear geometry are inferred.",textureless:{declared:!0,evidence:["Uploaded balance illustration: column crop shows smooth specular reflected panels with no visible grain, patina, printed pattern or pores.","Silhouette and bevel geometry define the gold surfaces. Variation in the image is dominated by lighting, not texture."]}},i),t["edge-gold"]=Bc("edge-gold",{id:"edge-gold",name:"edge-gold",type:"physical",shaderModel:"MeshStandardMaterial / PBR approximation",baseColor:"#edc779",color:"#edc779",albedo:{dominant:"#edc779",secondary:["#c6933c","#f2ce86"],samplingNotes:"Representative gold albedo inferred without baked reflection highlights."},colorVariation:{palette:["#edc779","#c6933c","#f2ce86"],pattern:"none",amplitude:0,heightCorrelation:0},roughness:{base:.19,variation:.025,map:"none"},metalness:{base:1,variation:0},ambientOcclusion:{cavityStrength:.25,contactShadowBias:.35,notes:"Darken creases, seams, intersections, and recessed local features."},wear:{edgeWear:0,scratches:[],chips:[]},dirt:{amount:0,cavityBias:0,color:"#2F2A22"},localOverrides:[{id:"edge-gold-polish",roughness:.16,region:"exposed bevel edges",evidenceRefs:["full-object"]}],shaderNotes:["Prefer MeshPhysicalMaterial when clearcoat, sheen, transmission, or thin-surface response is observed; otherwise use MeshStandardMaterial-compatible PBR channels.","Generate albedo, roughness, height/normal, and AO independently; never alias albedo into roughness.","Use normal/bump/displacement only when they map to observed surface relief.","Use displacement geometry when the observed relief changes the close-up silhouette; texture-only relief is insufficient there."],notes:"Textureless polished metal. Image reflection is not baked into surface albedo; exact lighting and rear geometry are inferred.",textureless:{declared:!0,evidence:["Uploaded balance illustration: column crop shows smooth specular reflected panels with no visible grain, patina, printed pattern or pores.","Silhouette and bevel geometry define the gold surfaces. Variation in the image is dominated by lighting, not texture."]}},i),t.bullion=Bc("bullion",{id:"bullion",name:"bullion",type:"physical",shaderModel:"MeshStandardMaterial / PBR approximation",baseColor:"#e2b751",color:"#e2b751",albedo:{dominant:"#e2b751",secondary:["#c6933c","#f2ce86"],samplingNotes:"Representative gold albedo inferred without baked reflection highlights."},colorVariation:{palette:["#e2b751","#c6933c","#f2ce86"],pattern:"none",amplitude:0,heightCorrelation:0},roughness:{base:.27,variation:.025,map:"none"},metalness:{base:1,variation:0},ambientOcclusion:{cavityStrength:.25,contactShadowBias:.35,notes:"Darken creases, seams, intersections, and recessed local features."},wear:{edgeWear:0,scratches:[],chips:[]},dirt:{amount:0,cavityBias:0,color:"#2F2A22"},localOverrides:[{id:"bullion-polish",roughness:.24000000000000002,region:"exposed bevel edges",evidenceRefs:["full-object"]}],shaderNotes:["Prefer MeshPhysicalMaterial when clearcoat, sheen, transmission, or thin-surface response is observed; otherwise use MeshStandardMaterial-compatible PBR channels.","Generate albedo, roughness, height/normal, and AO independently; never alias albedo into roughness.","Use normal/bump/displacement only when they map to observed surface relief.","Use displacement geometry when the observed relief changes the close-up silhouette; texture-only relief is insufficient there."],notes:"Textureless polished metal. Image reflection is not baked into surface albedo; exact lighting and rear geometry are inferred.",textureless:{declared:!0,evidence:["Uploaded balance illustration: column crop shows smooth specular reflected panels with no visible grain, patina, printed pattern or pores.","Silhouette and bevel geometry define the gold surfaces. Variation in the image is dominated by lighting, not texture."]}},i);let n={root:e},s={},r={},a={},o={},l=yt(null),h=new it;h.name="root__pivot",h.scale.set(1,1,1),l?(h.position.copy(l.start),h.rotation.set(0,0,0)):(h.position.set(0,.08,0),h.rotation.set(0,0,0)),h.userData.sculptComponent={id:"root",name:"root",level:"macro",role:"body",importance:.85,confidence:.88,primitive:"cylinder",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",radialSegments:8},parent:null,attachment:null,dimensions:{width:1.28,height:.16,depth:.94,units:"world",confidence:.85},transform:{position:[0,.08,0],rotation:[0,0,0]},actionProfile:{animationRole:"root",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"root",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"octagonal-foot",kind:"bevel",placement:"foot perimeter",geometryEffect:"8-sided stepped beveled base",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},h.userData.actionProfile={animationRole:"root",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"root",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(h),n.root=h;let u=l?new nt(l.endRadius,l.baseRadius,l.length,16,6):new nt(.5,.5,1,24,8);l||u.scale(1.28,.16,.94);let d=new Ge(u,t.gold??new at({color:8947848}));d.name="root",l&&(d.position.copy(l.midpoint),d.quaternion.copy(l.quaternion)),d.castShadow=i.castShadow??!0,d.receiveShadow=i.receiveShadow??!0,d.userData.sculptComponent={id:"root",name:"root",level:"macro",role:"body",importance:.85,confidence:.88,primitive:"cylinder",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",radialSegments:8},parent:null,attachment:null,dimensions:{width:1.28,height:.16,depth:.94,units:"world",confidence:.85},transform:{position:[0,.08,0],rotation:[0,0,0]},actionProfile:{animationRole:"root",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"root",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"octagonal-foot",kind:"bevel",placement:"foot perimeter",geometryEffect:"8-sided stepped beveled base",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},h.add(d),s.root=d,a.root={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o.root??(o.root=[]),o.root.push(h);let m=yt({parentId:"root",parentSocket:"foot-step-seat",localStart:[0,.17,0],localEnd:[0,.17,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]}),x=new it;x.name="foot-step__pivot",x.scale.set(1,1,1),m?(x.position.copy(m.start),x.rotation.set(0,0,0)):(x.position.set(0,.17,0),x.rotation.set(0,0,0)),x.userData.sculptComponent={id:"foot-step",name:"foot-step",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"cylinder",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:{parentId:"root",parentSocket:"foot-step-seat",localStart:[0,.17,0],localEnd:[0,.17,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:1.08,height:.18,depth:.8,units:"world",confidence:.85},transform:{position:[0,.17,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"foot-step",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"step-edge",kind:"ridge",geometryEffect:"second raised plinth",confidence:.95}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},x.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"foot-step",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(x),n["foot-step"]=x;let g=m?new nt(m.endRadius,m.baseRadius,m.length,16,6):new nt(.5,.5,1,24,8);m||g.scale(1.08,.18,.8);let p=new Ge(g,t.gold??new at({color:8947848}));p.name="foot-step",m&&(p.position.copy(m.midpoint),p.quaternion.copy(m.quaternion)),p.castShadow=i.castShadow??!0,p.receiveShadow=i.receiveShadow??!0,p.userData.sculptComponent={id:"foot-step",name:"foot-step",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"cylinder",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:{parentId:"root",parentSocket:"foot-step-seat",localStart:[0,.17,0],localEnd:[0,.17,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:1.08,height:.18,depth:.8,units:"world",confidence:.85},transform:{position:[0,.17,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"foot-step",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"step-edge",kind:"ridge",geometryEffect:"second raised plinth",confidence:.95}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},x.add(p),s["foot-step"]=p,a["foot-step"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["foot-step"]??(o["foot-step"]=[]),o["foot-step"].push(x);let R=yt({parentId:"root",parentSocket:"column-seat",localStart:[0,2.3,0],localEnd:[0,2.3,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]}),b=new it;b.name="column__pivot",b.scale.set(1,1,1),R?(b.position.copy(R.start),b.rotation.set(0,0,0)):(b.position.set(0,2.3,0),b.rotation.set(0,0,0)),b.userData.sculptComponent={id:"column",name:"column",level:"macro",role:"body",importance:.85,confidence:.88,primitive:"cylinder",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:{parentId:"root",parentSocket:"column-seat",localStart:[0,2.3,0],localEnd:[0,2.3,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.32,height:4.6,depth:.32,units:"world",confidence:.85},transform:{position:[0,2.3,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"column",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"vertical-spindle",kind:"gloss",materialEffect:"metalness 1 roughness .24",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},b.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"column",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(b),n.column=b;let w=R?new nt(R.endRadius,R.baseRadius,R.length,16,6):new nt(.5,.5,1,24,8);R||w.scale(.32,4.6,.32);let S=new Ge(w,t.gold??new at({color:8947848}));S.name="column",R&&(S.position.copy(R.midpoint),S.quaternion.copy(R.quaternion)),S.castShadow=i.castShadow??!0,S.receiveShadow=i.receiveShadow??!0,S.userData.sculptComponent={id:"column",name:"column",level:"macro",role:"body",importance:.85,confidence:.88,primitive:"cylinder",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:{parentId:"root",parentSocket:"column-seat",localStart:[0,2.3,0],localEnd:[0,2.3,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.32,height:4.6,depth:.32,units:"world",confidence:.85},transform:{position:[0,2.3,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"column",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"vertical-spindle",kind:"gloss",materialEffect:"metalness 1 roughness .24",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},b.add(S),s.column=S,a.column={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o.column??(o.column=[]),o.column.push(b);let A=yt(null),y=new it;y.name="collar-0__pivot",y.scale.set(1,1,1),A?(y.position.copy(A.start),y.rotation.set(0,0,0)):(y.position.set(0,.48,0),y.rotation.set(0,0,0)),y.userData.sculptComponent={id:"collar-0",name:"collar-0",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"lathe",topologyClass:"continuous-sculpt",topologyRationale:"Observed turned radial profile with varying radius",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",latheProfile:{points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24}},parent:"root",attachment:{parentId:"root",parentSocket:"collar-0-seat",localStart:[0,.48,0],localEnd:[0,.48,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.46,height:.2,depth:.46,units:"world",confidence:.85},transform:{position:[0,.48,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-0",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"turned-band-0",kind:"ridge",geometryEffect:"rounded turned spindle collar",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},y.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-0",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(y),n["collar-0"]=y;let T=A?new nt(A.endRadius,A.baseRadius,A.length,16,6):Ei({points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24});A||T.scale(.46,.2,.46);let P=new Ge(T,t.gold??new at({color:8947848}));P.name="collar-0",A&&(P.position.copy(A.midpoint),P.quaternion.copy(A.quaternion)),P.castShadow=i.castShadow??!0,P.receiveShadow=i.receiveShadow??!0,P.userData.sculptComponent={id:"collar-0",name:"collar-0",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"lathe",topologyClass:"continuous-sculpt",topologyRationale:"Observed turned radial profile with varying radius",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",latheProfile:{points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24}},parent:"root",attachment:{parentId:"root",parentSocket:"collar-0-seat",localStart:[0,.48,0],localEnd:[0,.48,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.46,height:.2,depth:.46,units:"world",confidence:.85},transform:{position:[0,.48,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-0",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"turned-band-0",kind:"ridge",geometryEffect:"rounded turned spindle collar",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},y.add(P),s["collar-0"]=P,a["collar-0"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["collar-0"]??(o["collar-0"]=[]),o["collar-0"].push(y);let C=yt(null),U=new it;U.name="collar-1__pivot",U.scale.set(1,1,1),C?(U.position.copy(C.start),U.rotation.set(0,0,0)):(U.position.set(0,.83,0),U.rotation.set(0,0,0)),U.userData.sculptComponent={id:"collar-1",name:"collar-1",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"lathe",topologyClass:"continuous-sculpt",topologyRationale:"Observed turned radial profile with varying radius",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",latheProfile:{points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24}},parent:"root",attachment:{parentId:"root",parentSocket:"collar-1-seat",localStart:[0,.83,0],localEnd:[0,.83,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.46,height:.2,depth:.46,units:"world",confidence:.85},transform:{position:[0,.83,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-1",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"turned-band-1",kind:"ridge",geometryEffect:"rounded turned spindle collar",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},U.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-1",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(U),n["collar-1"]=U;let G=C?new nt(C.endRadius,C.baseRadius,C.length,16,6):Ei({points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24});C||G.scale(.46,.2,.46);let D=new Ge(G,t.gold??new at({color:8947848}));D.name="collar-1",C&&(D.position.copy(C.midpoint),D.quaternion.copy(C.quaternion)),D.castShadow=i.castShadow??!0,D.receiveShadow=i.receiveShadow??!0,D.userData.sculptComponent={id:"collar-1",name:"collar-1",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"lathe",topologyClass:"continuous-sculpt",topologyRationale:"Observed turned radial profile with varying radius",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",latheProfile:{points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24}},parent:"root",attachment:{parentId:"root",parentSocket:"collar-1-seat",localStart:[0,.83,0],localEnd:[0,.83,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.46,height:.2,depth:.46,units:"world",confidence:.85},transform:{position:[0,.83,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-1",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"turned-band-1",kind:"ridge",geometryEffect:"rounded turned spindle collar",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},U.add(D),s["collar-1"]=D,a["collar-1"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["collar-1"]??(o["collar-1"]=[]),o["collar-1"].push(U);let O=yt(null),z=new it;z.name="collar-2__pivot",z.scale.set(1,1,1),O?(z.position.copy(O.start),z.rotation.set(0,0,0)):(z.position.set(0,3.62,0),z.rotation.set(0,0,0)),z.userData.sculptComponent={id:"collar-2",name:"collar-2",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"lathe",topologyClass:"continuous-sculpt",topologyRationale:"Observed turned radial profile with varying radius",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",latheProfile:{points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24}},parent:"root",attachment:{parentId:"root",parentSocket:"collar-2-seat",localStart:[0,3.62,0],localEnd:[0,3.62,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.46,height:.2,depth:.46,units:"world",confidence:.85},transform:{position:[0,3.62,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-2",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"turned-band-2",kind:"ridge",geometryEffect:"rounded turned spindle collar",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},z.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-2",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(z),n["collar-2"]=z;let j=O?new nt(O.endRadius,O.baseRadius,O.length,16,6):Ei({points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24});O||j.scale(.46,.2,.46);let ne=new Ge(j,t.gold??new at({color:8947848}));ne.name="collar-2",O&&(ne.position.copy(O.midpoint),ne.quaternion.copy(O.quaternion)),ne.castShadow=i.castShadow??!0,ne.receiveShadow=i.receiveShadow??!0,ne.userData.sculptComponent={id:"collar-2",name:"collar-2",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"lathe",topologyClass:"continuous-sculpt",topologyRationale:"Observed turned radial profile with varying radius",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",latheProfile:{points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24}},parent:"root",attachment:{parentId:"root",parentSocket:"collar-2-seat",localStart:[0,3.62,0],localEnd:[0,3.62,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.46,height:.2,depth:.46,units:"world",confidence:.85},transform:{position:[0,3.62,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-2",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"turned-band-2",kind:"ridge",geometryEffect:"rounded turned spindle collar",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},z.add(ne),s["collar-2"]=ne,a["collar-2"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["collar-2"]??(o["collar-2"]=[]),o["collar-2"].push(z);let X=yt(null),Z=new it;Z.name="collar-3__pivot",Z.scale.set(1,1,1),X?(Z.position.copy(X.start),Z.rotation.set(0,0,0)):(Z.position.set(0,4.04,0),Z.rotation.set(0,0,0)),Z.userData.sculptComponent={id:"collar-3",name:"collar-3",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"lathe",topologyClass:"continuous-sculpt",topologyRationale:"Observed turned radial profile with varying radius",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",latheProfile:{points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24}},parent:"root",attachment:{parentId:"root",parentSocket:"collar-3-seat",localStart:[0,4.04,0],localEnd:[0,4.04,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.46,height:.2,depth:.46,units:"world",confidence:.85},transform:{position:[0,4.04,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-3",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"turned-band-3",kind:"ridge",geometryEffect:"rounded turned spindle collar",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},Z.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-3",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(Z),n["collar-3"]=Z;let ie=X?new nt(X.endRadius,X.baseRadius,X.length,16,6):Ei({points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24});X||ie.scale(.46,.2,.46);let ve=new Ge(ie,t.gold??new at({color:8947848}));ve.name="collar-3",X&&(ve.position.copy(X.midpoint),ve.quaternion.copy(X.quaternion)),ve.castShadow=i.castShadow??!0,ve.receiveShadow=i.receiveShadow??!0,ve.userData.sculptComponent={id:"collar-3",name:"collar-3",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"lathe",topologyClass:"continuous-sculpt",topologyRationale:"Observed turned radial profile with varying radius",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",latheProfile:{points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24}},parent:"root",attachment:{parentId:"root",parentSocket:"collar-3-seat",localStart:[0,4.04,0],localEnd:[0,4.04,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.46,height:.2,depth:.46,units:"world",confidence:.85},transform:{position:[0,4.04,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-3",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"turned-band-3",kind:"ridge",geometryEffect:"rounded turned spindle collar",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},Z.add(ve),s["collar-3"]=ve,a["collar-3"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["collar-3"]??(o["collar-3"]=[]),o["collar-3"].push(Z);let _e=yt(null),He=new it;He.name="collar-4__pivot",He.scale.set(1,1,1),_e?(He.position.copy(_e.start),He.rotation.set(0,0,0)):(He.position.set(0,4.51,0),He.rotation.set(0,0,0)),He.userData.sculptComponent={id:"collar-4",name:"collar-4",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"lathe",topologyClass:"continuous-sculpt",topologyRationale:"Observed turned radial profile with varying radius",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",latheProfile:{points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24}},parent:"root",attachment:{parentId:"root",parentSocket:"collar-4-seat",localStart:[0,4.51,0],localEnd:[0,4.51,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.46,height:.2,depth:.46,units:"world",confidence:.85},transform:{position:[0,4.51,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-4",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"turned-band-4",kind:"ridge",geometryEffect:"rounded turned spindle collar",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},He.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-4",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(He),n["collar-4"]=He;let Xe=_e?new nt(_e.endRadius,_e.baseRadius,_e.length,16,6):Ei({points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24});_e||Xe.scale(.46,.2,.46);let je=new Ge(Xe,t.gold??new at({color:8947848}));je.name="collar-4",_e&&(je.position.copy(_e.midpoint),je.quaternion.copy(_e.quaternion)),je.castShadow=i.castShadow??!0,je.receiveShadow=i.receiveShadow??!0,je.userData.sculptComponent={id:"collar-4",name:"collar-4",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"lathe",topologyClass:"continuous-sculpt",topologyRationale:"Observed turned radial profile with varying radius",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",latheProfile:{points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24}},parent:"root",attachment:{parentId:"root",parentSocket:"collar-4-seat",localStart:[0,4.51,0],localEnd:[0,4.51,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.46,height:.2,depth:.46,units:"world",confidence:.85},transform:{position:[0,4.51,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-4",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"turned-band-4",kind:"ridge",geometryEffect:"rounded turned spindle collar",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},He.add(je),s["collar-4"]=je,a["collar-4"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["collar-4"]??(o["collar-4"]=[]),o["collar-4"].push(He);let W=yt(null),K=new it;K.name="collar-5__pivot",K.scale.set(1,1,1),W?(K.position.copy(W.start),K.rotation.set(0,0,0)):(K.position.set(0,4.91,0),K.rotation.set(0,0,0)),K.userData.sculptComponent={id:"collar-5",name:"collar-5",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"lathe",topologyClass:"continuous-sculpt",topologyRationale:"Observed turned radial profile with varying radius",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",latheProfile:{points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24}},parent:"root",attachment:{parentId:"root",parentSocket:"collar-5-seat",localStart:[0,4.91,0],localEnd:[0,4.91,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.46,height:.2,depth:.46,units:"world",confidence:.85},transform:{position:[0,4.91,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-5",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"turned-band-5",kind:"ridge",geometryEffect:"rounded turned spindle collar",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},K.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-5",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(K),n["collar-5"]=K;let ye=W?new nt(W.endRadius,W.baseRadius,W.length,16,6):Ei({points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24});W||ye.scale(.46,.2,.46);let Ue=new Ge(ye,t.gold??new at({color:8947848}));Ue.name="collar-5",W&&(Ue.position.copy(W.midpoint),Ue.quaternion.copy(W.quaternion)),Ue.castShadow=i.castShadow??!0,Ue.receiveShadow=i.receiveShadow??!0,Ue.userData.sculptComponent={id:"collar-5",name:"collar-5",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"lathe",topologyClass:"continuous-sculpt",topologyRationale:"Observed turned radial profile with varying radius",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",latheProfile:{points:[[.15,-.5],[.42,-.48],[.5,-.15],[.5,.15],[.42,.48],[.15,.5]],segments:24}},parent:"root",attachment:{parentId:"root",parentSocket:"collar-5-seat",localStart:[0,4.91,0],localEnd:[0,4.91,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.46,height:.2,depth:.46,units:"world",confidence:.85},transform:{position:[0,4.91,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"collar-5",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"turned-band-5",kind:"ridge",geometryEffect:"rounded turned spindle collar",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},K.add(Ue),s["collar-5"]=Ue,a["collar-5"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["collar-5"]??(o["collar-5"]=[]),o["collar-5"].push(K);let ge=yt(null),De=new it;De.name="finial__pivot",De.scale.set(1,1,1),ge?(De.position.copy(ge.start),De.rotation.set(0,0,0)):(De.position.set(0,5.09,0),De.rotation.set(0,0,0)),De.userData.sculptComponent={id:"finial",name:"finial",level:"macro",role:"body",importance:.85,confidence:.88,primitive:"sphere",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:{parentId:"root",parentSocket:"finial-seat",localStart:[0,5.18,0],localEnd:[0,5.18,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.34,height:.38,depth:.34,units:"world",confidence:.85},transform:{position:[0,5.09,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"finial",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"finial-crown",kind:"contour",geometryEffect:"rounded upper crown",confidence:.95}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},De.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"finial",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(De),n.finial=De;let rt=ge?new nt(ge.endRadius,ge.baseRadius,ge.length,16,6):new mi(.5,32,20);ge||rt.scale(.34,.38,.34);let te=new Ge(rt,t.gold??new at({color:8947848}));te.name="finial",ge&&(te.position.copy(ge.midpoint),te.quaternion.copy(ge.quaternion)),te.castShadow=i.castShadow??!0,te.receiveShadow=i.receiveShadow??!0,te.userData.sculptComponent={id:"finial",name:"finial",level:"macro",role:"body",importance:.85,confidence:.88,primitive:"sphere",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:{parentId:"root",parentSocket:"finial-seat",localStart:[0,5.18,0],localEnd:[0,5.18,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.34,height:.38,depth:.34,units:"world",confidence:.85},transform:{position:[0,5.09,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"finial",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"finial-crown",kind:"contour",geometryEffect:"rounded upper crown",confidence:.95}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},De.add(te),s.finial=te,a.finial={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o.finial??(o.finial=[]),o.finial.push(De);let re=yt({parentId:"root",parentSocket:"beam-seat",localStart:[0,4.29,0],localEnd:[0,4.29,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]}),ae=new it;ae.name="beam__pivot",ae.scale.set(1,1,1),re?(ae.position.copy(re.start),ae.rotation.set(0,0,.08)):(ae.position.set(0,4.29,0),ae.rotation.set(0,0,.08)),ae.userData.sculptComponent={id:"beam",name:"beam",level:"macro",role:"body",importance:.85,confidence:.88,primitive:"tube",topologyClass:"fiber-strand",topologyRationale:"Observed thin member following a curved centerline",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",tubePath:{points:[[-1.58,-.28,0],[-1.22,-.2,0],[-.79,.16,0],[0,.27,0],[.79,.16,0],[1.22,-.2,0],[1.58,-.28,0]],radius:.075,radialSegments:12},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"beam-seat",localStart:[0,4.29,0],localEnd:[0,4.29,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[0,4.29,0],rotation:[0,0,.08]},actionProfile:{animationRole:"hinge",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"compound",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"beam",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"curved-beam",kind:"contour",geometryEffect:"curved tube sweeps with raised central beam",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},ae.userData.actionProfile={animationRole:"hinge",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"compound",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"beam",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(ae),n.beam=ae;let le=re?new nt(re.endRadius,re.baseRadius,re.length,16,6):qi({points:[[-1.58,-.28,0],[-1.22,-.2,0],[-.79,.16,0],[0,.27,0],[.79,.16,0],[1.22,-.2,0],[1.58,-.28,0]],radius:.075,radialSegments:12});re||le.scale(1,1,1);let Ie=new Ge(le,t.gold??new at({color:8947848}));Ie.name="beam",re&&(Ie.position.copy(re.midpoint),Ie.quaternion.copy(re.quaternion)),Ie.castShadow=i.castShadow??!0,Ie.receiveShadow=i.receiveShadow??!0,Ie.userData.sculptComponent={id:"beam",name:"beam",level:"macro",role:"body",importance:.85,confidence:.88,primitive:"tube",topologyClass:"fiber-strand",topologyRationale:"Observed thin member following a curved centerline",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",tubePath:{points:[[-1.58,-.28,0],[-1.22,-.2,0],[-.79,.16,0],[0,.27,0],[.79,.16,0],[1.22,-.2,0],[1.58,-.28,0]],radius:.075,radialSegments:12},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"beam-seat",localStart:[0,4.29,0],localEnd:[0,4.29,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[0,4.29,0],rotation:[0,0,.08]},actionProfile:{animationRole:"hinge",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"compound",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"beam",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"curved-beam",kind:"contour",geometryEffect:"curved tube sweeps with raised central beam",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},ae.add(Ie),s.beam=Ie,a.beam={type:"compound",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o.beam??(o.beam=[]),o.beam.push(ae);let Be=yt({parentId:"beam",parentSocket:"beam-center-seat",localStart:[0,.26,0],localEnd:[0,.26,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]}),ke=new it;ke.name="beam-center__pivot",ke.scale.set(1,1,1),Be?(ke.position.copy(Be.start),ke.rotation.set(0,0,1.5707963267948966)):(ke.position.set(0,.26,0),ke.rotation.set(0,0,1.5707963267948966)),ke.userData.sculptComponent={id:"beam-center",name:"beam-center",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"cylinder",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"beam",attachment:{parentId:"beam",parentSocket:"beam-center-seat",localStart:[0,.26,0],localEnd:[0,.26,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.23,height:1.14,depth:.23,units:"world",confidence:.85},transform:{position:[0,.26,0],rotation:[0,0,1.5707963267948966]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"beam-center",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"edge-gold",materialLayers:["edge-gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"crossbar-sleeve",kind:"gloss",materialEffect:"polished horizontal sleeve",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},ke.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"beam-center",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.beam??e).add(ke),n["beam-center"]=ke;let L=Be?new nt(Be.endRadius,Be.baseRadius,Be.length,16,6):new nt(.5,.5,1,24,8);Be||L.scale(.23,1.14,.23);let et=new Ge(L,t["edge-gold"]??new at({color:8947848}));et.name="beam-center",Be&&(et.position.copy(Be.midpoint),et.quaternion.copy(Be.quaternion)),et.castShadow=i.castShadow??!0,et.receiveShadow=i.receiveShadow??!0,et.userData.sculptComponent={id:"beam-center",name:"beam-center",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"cylinder",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"beam",attachment:{parentId:"beam",parentSocket:"beam-center-seat",localStart:[0,.26,0],localEnd:[0,.26,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.23,height:1.14,depth:.23,units:"world",confidence:.85},transform:{position:[0,.26,0],rotation:[0,0,1.5707963267948966]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"beam-center",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"edge-gold",materialLayers:["edge-gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"crossbar-sleeve",kind:"gloss",materialEffect:"polished horizontal sleeve",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},ke.add(et),s["beam-center"]=et,a["beam-center"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["beam-center"]??(o["beam-center"]=[]),o["beam-center"].push(ke);let Ye=yt(null),E=new it;E.name="pan-left__pivot",E.scale.set(1,1,1),Ye?(E.position.copy(Ye.start),E.rotation.set(0,0,0)):(E.position.set(-1.57,1.3499999999999999,0),E.rotation.set(0,0,0)),E.userData.sculptComponent={id:"pan-left",name:"pan-left",level:"macro",role:"body",importance:.85,confidence:.88,primitive:"lathe",topologyClass:"continuous-sculpt",topologyRationale:"Observed turned radial profile with varying radius",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",latheProfile:{points:[[0,-.11],[.45,-.105],[.66,-.05],[.75,.06],[.77,.09],[.75,.105],[.7,.085],[.59,-.025],[.43,-.058],[0,-.06]],segments:48},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"pan-left-seat",localStart:[-1.57,1.3499999999999999,0],localEnd:[-1.57,1.3499999999999999,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[-1.57,1.3499999999999999,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"pan-left",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"bowl-left",kind:"hole",geometryEffect:"open shallow bowl with returned wall thickness",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},E.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"pan-left",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(E),n["pan-left"]=E;let _=Ye?new nt(Ye.endRadius,Ye.baseRadius,Ye.length,16,6):Ei({points:[[0,-.11],[.45,-.105],[.66,-.05],[.75,.06],[.77,.09],[.75,.105],[.7,.085],[.59,-.025],[.43,-.058],[0,-.06]],segments:48});Ye||_.scale(1,1,1);let B=new Ge(_,t.gold??new at({color:8947848}));B.name="pan-left",Ye&&(B.position.copy(Ye.midpoint),B.quaternion.copy(Ye.quaternion)),B.castShadow=i.castShadow??!0,B.receiveShadow=i.receiveShadow??!0,B.userData.sculptComponent={id:"pan-left",name:"pan-left",level:"macro",role:"body",importance:.85,confidence:.88,primitive:"lathe",topologyClass:"continuous-sculpt",topologyRationale:"Observed turned radial profile with varying radius",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",latheProfile:{points:[[0,-.11],[.45,-.105],[.66,-.05],[.75,.06],[.77,.09],[.75,.105],[.7,.085],[.59,-.025],[.43,-.058],[0,-.06]],segments:48},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"pan-left-seat",localStart:[-1.57,1.3499999999999999,0],localEnd:[-1.57,1.3499999999999999,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[-1.57,1.3499999999999999,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"pan-left",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"bowl-left",kind:"hole",geometryEffect:"open shallow bowl with returned wall thickness",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},E.add(B),s["pan-left"]=B,a["pan-left"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["pan-left"]??(o["pan-left"]=[]),o["pan-left"].push(E);let V=yt(null),Y=new it;Y.name="rim-left__pivot",Y.scale.set(1,1,1),V?(Y.position.copy(V.start),Y.rotation.set(1.5707963267948966,0,0)):(Y.position.set(0,.097,0),Y.rotation.set(1.5707963267948966,0,0)),Y.userData.sculptComponent={id:"rim-left",name:"rim-left",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"torus",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"pan-left",attachment:{parentId:"pan-left",parentSocket:"rim-left-seat",localStart:[0,.097,0],localEnd:[0,.097,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:1.55,height:1.55,depth:.026,units:"world",confidence:.85},transform:{position:[0,.097,0],rotation:[1.5707963267948966,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"rim-left",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"edge-gold",materialLayers:["edge-gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"rim-bead-left",kind:"ridge",geometryEffect:"thin circular rim accent",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},Y.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"rim-left",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n["pan-left"]??e).add(Y),n["rim-left"]=Y;let ce=V?new nt(V.endRadius,V.baseRadius,V.length,16,6):new Dn(.45,.08,12,48);V||ce.scale(1.55,1.55,.026);let he=new Ge(ce,t["edge-gold"]??new at({color:8947848}));he.name="rim-left",V&&(he.position.copy(V.midpoint),he.quaternion.copy(V.quaternion)),he.castShadow=i.castShadow??!0,he.receiveShadow=i.receiveShadow??!0,he.userData.sculptComponent={id:"rim-left",name:"rim-left",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"torus",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"pan-left",attachment:{parentId:"pan-left",parentSocket:"rim-left-seat",localStart:[0,.097,0],localEnd:[0,.097,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:1.55,height:1.55,depth:.026,units:"world",confidence:.85},transform:{position:[0,.097,0],rotation:[1.5707963267948966,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"rim-left",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"edge-gold",materialLayers:["edge-gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"rim-bead-left",kind:"ridge",geometryEffect:"thin circular rim accent",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},Y.add(he),s["rim-left"]=he,a["rim-left"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["rim-left"]??(o["rim-left"]=[]),o["rim-left"].push(Y);let ee=yt({parentId:"root",parentSocket:"chain-left-0-seat",localStart:[-1.57,3.8844,0],localEnd:[-.9464617092752042,1.43,.35999999999999993],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015}),de=new it;de.name="chain-left-0__pivot",de.scale.set(1,1,1),ee?(de.position.copy(ee.start),de.rotation.set(0,0,0)):(de.position.set(-1.57,3.8844,0),de.rotation.set(0,0,0)),de.userData.sculptComponent={id:"chain-left-0",name:"chain-left-0",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"tube",topologyClass:"fiber-strand",topologyRationale:"Observed thin member following a curved centerline",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",tubePath:{points:[[0,0,0],[.6235382907247958,-2.4543999999999997,.35999999999999993]],radius:.013,radialSegments:6},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"chain-left-0-seat",localStart:[-1.57,3.8844,0],localEnd:[-.9464617092752042,1.43,.35999999999999993],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[-1.57,3.8844,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-left-0",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"links-left-0",kind:"ridge",geometryEffect:"repeated alternating oval chain links along endpoints",confidence:.83}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},de.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-left-0",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(de),n["chain-left-0"]=de;let Oe=ee?new nt(ee.endRadius,ee.baseRadius,ee.length,16,6):qi({points:[[0,0,0],[.6235382907247958,-2.4543999999999997,.35999999999999993]],radius:.013,radialSegments:6});ee||Oe.scale(1,1,1);let pe=new Ge(Oe,t.gold??new at({color:8947848}));pe.name="chain-left-0",ee&&(pe.position.copy(ee.midpoint),pe.quaternion.copy(ee.quaternion)),pe.castShadow=i.castShadow??!0,pe.receiveShadow=i.receiveShadow??!0,pe.userData.sculptComponent={id:"chain-left-0",name:"chain-left-0",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"tube",topologyClass:"fiber-strand",topologyRationale:"Observed thin member following a curved centerline",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",tubePath:{points:[[0,0,0],[.6235382907247958,-2.4543999999999997,.35999999999999993]],radius:.013,radialSegments:6},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"chain-left-0-seat",localStart:[-1.57,3.8844,0],localEnd:[-.9464617092752042,1.43,.35999999999999993],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[-1.57,3.8844,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-left-0",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"links-left-0",kind:"ridge",geometryEffect:"repeated alternating oval chain links along endpoints",confidence:.83}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},de.add(pe),s["chain-left-0"]=pe,a["chain-left-0"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["chain-left-0"]??(o["chain-left-0"]=[]),o["chain-left-0"].push(de);let Ae=yt({parentId:"root",parentSocket:"chain-left-1-seat",localStart:[-1.57,3.8844,0],localEnd:[-2.193538290724796,1.43,.35999999999999993],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015}),Le=new it;Le.name="chain-left-1__pivot",Le.scale.set(1,1,1),Ae?(Le.position.copy(Ae.start),Le.rotation.set(0,0,0)):(Le.position.set(-1.57,3.8844,0),Le.rotation.set(0,0,0)),Le.userData.sculptComponent={id:"chain-left-1",name:"chain-left-1",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"tube",topologyClass:"fiber-strand",topologyRationale:"Observed thin member following a curved centerline",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",tubePath:{points:[[0,0,0],[-.6235382907247959,-2.4543999999999997,.35999999999999993]],radius:.013,radialSegments:6},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"chain-left-1-seat",localStart:[-1.57,3.8844,0],localEnd:[-2.193538290724796,1.43,.35999999999999993],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[-1.57,3.8844,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-left-1",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"links-left-1",kind:"ridge",geometryEffect:"repeated alternating oval chain links along endpoints",confidence:.83}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},Le.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-left-1",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(Le),n["chain-left-1"]=Le;let Ze=Ae?new nt(Ae.endRadius,Ae.baseRadius,Ae.length,16,6):qi({points:[[0,0,0],[-.6235382907247959,-2.4543999999999997,.35999999999999993]],radius:.013,radialSegments:6});Ae||Ze.scale(1,1,1);let F=new Ge(Ze,t.gold??new at({color:8947848}));F.name="chain-left-1",Ae&&(F.position.copy(Ae.midpoint),F.quaternion.copy(Ae.quaternion)),F.castShadow=i.castShadow??!0,F.receiveShadow=i.receiveShadow??!0,F.userData.sculptComponent={id:"chain-left-1",name:"chain-left-1",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"tube",topologyClass:"fiber-strand",topologyRationale:"Observed thin member following a curved centerline",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",tubePath:{points:[[0,0,0],[-.6235382907247959,-2.4543999999999997,.35999999999999993]],radius:.013,radialSegments:6},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"chain-left-1-seat",localStart:[-1.57,3.8844,0],localEnd:[-2.193538290724796,1.43,.35999999999999993],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[-1.57,3.8844,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-left-1",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"links-left-1",kind:"ridge",geometryEffect:"repeated alternating oval chain links along endpoints",confidence:.83}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},Le.add(F),s["chain-left-1"]=F,a["chain-left-1"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["chain-left-1"]??(o["chain-left-1"]=[]),o["chain-left-1"].push(Le);let Q=yt({parentId:"root",parentSocket:"chain-left-2-seat",localStart:[-1.57,3.8844,0],localEnd:[-1.5700000000000003,1.43,-.72],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015}),ue=new it;ue.name="chain-left-2__pivot",ue.scale.set(1,1,1),Q?(ue.position.copy(Q.start),ue.rotation.set(0,0,0)):(ue.position.set(-1.57,3.8844,0),ue.rotation.set(0,0,0)),ue.userData.sculptComponent={id:"chain-left-2",name:"chain-left-2",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"tube",topologyClass:"fiber-strand",topologyRationale:"Observed thin member following a curved centerline",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",tubePath:{points:[[0,0,0],[-2220446049250313e-31,-2.4543999999999997,-.72]],radius:.013,radialSegments:6},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"chain-left-2-seat",localStart:[-1.57,3.8844,0],localEnd:[-1.5700000000000003,1.43,-.72],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[-1.57,3.8844,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-left-2",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"links-left-2",kind:"ridge",geometryEffect:"repeated alternating oval chain links along endpoints",confidence:.83}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},ue.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-left-2",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(ue),n["chain-left-2"]=ue;let Me=Q?new nt(Q.endRadius,Q.baseRadius,Q.length,16,6):qi({points:[[0,0,0],[-2220446049250313e-31,-2.4543999999999997,-.72]],radius:.013,radialSegments:6});Q||Me.scale(1,1,1);let se=new Ge(Me,t.gold??new at({color:8947848}));se.name="chain-left-2",Q&&(se.position.copy(Q.midpoint),se.quaternion.copy(Q.quaternion)),se.castShadow=i.castShadow??!0,se.receiveShadow=i.receiveShadow??!0,se.userData.sculptComponent={id:"chain-left-2",name:"chain-left-2",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"tube",topologyClass:"fiber-strand",topologyRationale:"Observed thin member following a curved centerline",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",tubePath:{points:[[0,0,0],[-2220446049250313e-31,-2.4543999999999997,-.72]],radius:.013,radialSegments:6},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"chain-left-2-seat",localStart:[-1.57,3.8844,0],localEnd:[-1.5700000000000003,1.43,-.72],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[-1.57,3.8844,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-left-2",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"links-left-2",kind:"ridge",geometryEffect:"repeated alternating oval chain links along endpoints",confidence:.83}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},ue.add(se),s["chain-left-2"]=se,a["chain-left-2"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["chain-left-2"]??(o["chain-left-2"]=[]),o["chain-left-2"].push(ue);let Ce=yt(null),we=new it;we.name="bar-left__pivot",we.scale.set(1,1,1),Ce?(we.position.copy(Ce.start),we.rotation.set(0,.3,.05)):(we.position.set(-1.57,1.5,0),we.rotation.set(0,.3,.05)),we.userData.sculptComponent={id:"bar-left",name:"bar-left",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"box",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:{parentId:"root",parentSocket:"bar-left-seat",localStart:[-1.57,1.5,0],localEnd:[-1.57,1.5,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.82,height:.28,depth:.44,units:"world",confidence:.85},transform:{position:[-1.57,1.5,0],rotation:[0,.3,.05]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"bar-left",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"bullion",materialLayers:["bullion"],deformations:[],joints:[],seams:[],localFeatures:[{id:"bullion-bevel-left",kind:"bevel",geometryEffect:"beveled trapezoid bullion block",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},we.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"bar-left",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(we),n["bar-left"]=we;let ut=Ce?new nt(Ce.endRadius,Ce.baseRadius,Ce.length,16,6):new jt(1,1,1,4,4,4);Ce||ut.scale(.82,.28,.44);let tt=new Ge(ut,t.bullion??new at({color:8947848}));tt.name="bar-left",Ce&&(tt.position.copy(Ce.midpoint),tt.quaternion.copy(Ce.quaternion)),tt.castShadow=i.castShadow??!0,tt.receiveShadow=i.receiveShadow??!0,tt.userData.sculptComponent={id:"bar-left",name:"bar-left",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"box",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:{parentId:"root",parentSocket:"bar-left-seat",localStart:[-1.57,1.5,0],localEnd:[-1.57,1.5,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.82,height:.28,depth:.44,units:"world",confidence:.85},transform:{position:[-1.57,1.5,0],rotation:[0,.3,.05]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"bar-left",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"bullion",materialLayers:["bullion"],deformations:[],joints:[],seams:[],localFeatures:[{id:"bullion-bevel-left",kind:"bevel",geometryEffect:"beveled trapezoid bullion block",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},we.add(tt),s["bar-left"]=tt,a["bar-left"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["bar-left"]??(o["bar-left"]=[]),o["bar-left"].push(we);let wt=yt(null),St=new it;St.name="bar-left-second__pivot",St.scale.set(1,1,1),wt?(St.position.copy(wt.start),St.rotation.set(0,-.22,-.06)):(St.position.set(-1.44,1.76,.015),St.rotation.set(0,-.22,-.06)),St.userData.sculptComponent={id:"bar-left-second",name:"bar-left-second",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"box",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:{parentId:"root",parentSocket:"bar-left-second-seat",localStart:[-1.44,1.76,.015],localEnd:[-1.44,1.76,.015],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.82,height:.28,depth:.44,units:"world",confidence:.85},transform:{position:[-1.44,1.76,.015],rotation:[0,-.22,-.06]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"bar-left-second",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"bullion",materialLayers:["bullion"],deformations:[],joints:[],seams:[],localFeatures:[{id:"second-bullion",kind:"bevel",geometryEffect:"second stacked bar with bevel edge",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},St.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"bar-left-second",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(St),n["bar-left-second"]=St;let Jr=wt?new nt(wt.endRadius,wt.baseRadius,wt.length,16,6):new jt(1,1,1,4,4,4);wt||Jr.scale(.82,.28,.44);let On=new Ge(Jr,t.bullion??new at({color:8947848}));On.name="bar-left-second",wt&&(On.position.copy(wt.midpoint),On.quaternion.copy(wt.quaternion)),On.castShadow=i.castShadow??!0,On.receiveShadow=i.receiveShadow??!0,On.userData.sculptComponent={id:"bar-left-second",name:"bar-left-second",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"box",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:{parentId:"root",parentSocket:"bar-left-second-seat",localStart:[-1.44,1.76,.015],localEnd:[-1.44,1.76,.015],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.82,height:.28,depth:.44,units:"world",confidence:.85},transform:{position:[-1.44,1.76,.015],rotation:[0,-.22,-.06]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"bar-left-second",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"bullion",materialLayers:["bullion"],deformations:[],joints:[],seams:[],localFeatures:[{id:"second-bullion",kind:"bevel",geometryEffect:"second stacked bar with bevel edge",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},St.add(On),s["bar-left-second"]=On,a["bar-left-second"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["bar-left-second"]??(o["bar-left-second"]=[]),o["bar-left-second"].push(St);let on=yt(null),Gt=new it;Gt.name="pan-right__pivot",Gt.scale.set(1,1,1),on?(Gt.position.copy(on.start),Gt.rotation.set(0,0,0)):(Gt.position.set(1.57,1.5999999999999999,0),Gt.rotation.set(0,0,0)),Gt.userData.sculptComponent={id:"pan-right",name:"pan-right",level:"macro",role:"body",importance:.85,confidence:.88,primitive:"lathe",topologyClass:"continuous-sculpt",topologyRationale:"Observed turned radial profile with varying radius",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",latheProfile:{points:[[0,-.11],[.45,-.105],[.66,-.05],[.75,.06],[.77,.09],[.75,.105],[.7,.085],[.59,-.025],[.43,-.058],[0,-.06]],segments:48},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"pan-right-seat",localStart:[1.57,1.5999999999999999,0],localEnd:[1.57,1.5999999999999999,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[1.57,1.5999999999999999,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"pan-right",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"bowl-right",kind:"hole",geometryEffect:"open shallow bowl with returned wall thickness",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},Gt.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"pan-right",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(Gt),n["pan-right"]=Gt;let Kr=on?new nt(on.endRadius,on.baseRadius,on.length,16,6):Ei({points:[[0,-.11],[.45,-.105],[.66,-.05],[.75,.06],[.77,.09],[.75,.105],[.7,.085],[.59,-.025],[.43,-.058],[0,-.06]],segments:48});on||Kr.scale(1,1,1);let Sn=new Ge(Kr,t.gold??new at({color:8947848}));Sn.name="pan-right",on&&(Sn.position.copy(on.midpoint),Sn.quaternion.copy(on.quaternion)),Sn.castShadow=i.castShadow??!0,Sn.receiveShadow=i.receiveShadow??!0,Sn.userData.sculptComponent={id:"pan-right",name:"pan-right",level:"macro",role:"body",importance:.85,confidence:.88,primitive:"lathe",topologyClass:"continuous-sculpt",topologyRationale:"Observed turned radial profile with varying radius",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",latheProfile:{points:[[0,-.11],[.45,-.105],[.66,-.05],[.75,.06],[.77,.09],[.75,.105],[.7,.085],[.59,-.025],[.43,-.058],[0,-.06]],segments:48},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"pan-right-seat",localStart:[1.57,1.5999999999999999,0],localEnd:[1.57,1.5999999999999999,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[1.57,1.5999999999999999,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"pan-right",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"bowl-right",kind:"hole",geometryEffect:"open shallow bowl with returned wall thickness",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},Gt.add(Sn),s["pan-right"]=Sn,a["pan-right"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["pan-right"]??(o["pan-right"]=[]),o["pan-right"].push(Gt);let ln=yt(null),Rt=new it;Rt.name="rim-right__pivot",Rt.scale.set(1,1,1),ln?(Rt.position.copy(ln.start),Rt.rotation.set(1.5707963267948966,0,0)):(Rt.position.set(0,.097,0),Rt.rotation.set(1.5707963267948966,0,0)),Rt.userData.sculptComponent={id:"rim-right",name:"rim-right",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"torus",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"pan-right",attachment:{parentId:"pan-right",parentSocket:"rim-right-seat",localStart:[0,.097,0],localEnd:[0,.097,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:1.55,height:1.55,depth:.026,units:"world",confidence:.85},transform:{position:[0,.097,0],rotation:[1.5707963267948966,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"rim-right",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"edge-gold",materialLayers:["edge-gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"rim-bead-right",kind:"ridge",geometryEffect:"thin circular rim accent",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},Rt.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"rim-right",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n["pan-right"]??e).add(Rt),n["rim-right"]=Rt;let ji=ln?new nt(ln.endRadius,ln.baseRadius,ln.length,16,6):new Dn(.45,.08,12,48);ln||ji.scale(1.55,1.55,.026);let Mn=new Ge(ji,t["edge-gold"]??new at({color:8947848}));Mn.name="rim-right",ln&&(Mn.position.copy(ln.midpoint),Mn.quaternion.copy(ln.quaternion)),Mn.castShadow=i.castShadow??!0,Mn.receiveShadow=i.receiveShadow??!0,Mn.userData.sculptComponent={id:"rim-right",name:"rim-right",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"torus",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"pan-right",attachment:{parentId:"pan-right",parentSocket:"rim-right-seat",localStart:[0,.097,0],localEnd:[0,.097,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:1.55,height:1.55,depth:.026,units:"world",confidence:.85},transform:{position:[0,.097,0],rotation:[1.5707963267948966,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"rim-right",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"edge-gold",materialLayers:["edge-gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"rim-bead-right",kind:"ridge",geometryEffect:"thin circular rim accent",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},Rt.add(Mn),s["rim-right"]=Mn,a["rim-right"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["rim-right"]??(o["rim-right"]=[]),o["rim-right"].push(Rt);let Zt=yt({parentId:"root",parentSocket:"chain-right-0-seat",localStart:[1.57,4.1356,0],localEnd:[2.193538290724796,1.68,.35999999999999993],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015}),Jt=new it;Jt.name="chain-right-0__pivot",Jt.scale.set(1,1,1),Zt?(Jt.position.copy(Zt.start),Jt.rotation.set(0,0,0)):(Jt.position.set(1.57,4.1356,0),Jt.rotation.set(0,0,0)),Jt.userData.sculptComponent={id:"chain-right-0",name:"chain-right-0",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"tube",topologyClass:"fiber-strand",topologyRationale:"Observed thin member following a curved centerline",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",tubePath:{points:[[0,0,0],[.6235382907247959,-2.4556000000000004,.35999999999999993]],radius:.013,radialSegments:6},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"chain-right-0-seat",localStart:[1.57,4.1356,0],localEnd:[2.193538290724796,1.68,.35999999999999993],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[1.57,4.1356,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-right-0",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"links-right-0",kind:"ridge",geometryEffect:"repeated alternating oval chain links along endpoints",confidence:.83}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},Jt.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-right-0",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(Jt),n["chain-right-0"]=Jt;let Ti=Zt?new nt(Zt.endRadius,Zt.baseRadius,Zt.length,16,6):qi({points:[[0,0,0],[.6235382907247959,-2.4556000000000004,.35999999999999993]],radius:.013,radialSegments:6});Zt||Ti.scale(1,1,1);let wn=new Ge(Ti,t.gold??new at({color:8947848}));wn.name="chain-right-0",Zt&&(wn.position.copy(Zt.midpoint),wn.quaternion.copy(Zt.quaternion)),wn.castShadow=i.castShadow??!0,wn.receiveShadow=i.receiveShadow??!0,wn.userData.sculptComponent={id:"chain-right-0",name:"chain-right-0",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"tube",topologyClass:"fiber-strand",topologyRationale:"Observed thin member following a curved centerline",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",tubePath:{points:[[0,0,0],[.6235382907247959,-2.4556000000000004,.35999999999999993]],radius:.013,radialSegments:6},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"chain-right-0-seat",localStart:[1.57,4.1356,0],localEnd:[2.193538290724796,1.68,.35999999999999993],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[1.57,4.1356,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-right-0",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"links-right-0",kind:"ridge",geometryEffect:"repeated alternating oval chain links along endpoints",confidence:.83}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},Jt.add(wn),s["chain-right-0"]=wn,a["chain-right-0"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["chain-right-0"]??(o["chain-right-0"]=[]),o["chain-right-0"].push(Jt);let mn=yt({parentId:"root",parentSocket:"chain-right-1-seat",localStart:[1.57,4.1356,0],localEnd:[.9464617092752042,1.68,.35999999999999993],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015}),nn=new it;nn.name="chain-right-1__pivot",nn.scale.set(1,1,1),mn?(nn.position.copy(mn.start),nn.rotation.set(0,0,0)):(nn.position.set(1.57,4.1356,0),nn.rotation.set(0,0,0)),nn.userData.sculptComponent={id:"chain-right-1",name:"chain-right-1",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"tube",topologyClass:"fiber-strand",topologyRationale:"Observed thin member following a curved centerline",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",tubePath:{points:[[0,0,0],[-.6235382907247958,-2.4556000000000004,.35999999999999993]],radius:.013,radialSegments:6},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"chain-right-1-seat",localStart:[1.57,4.1356,0],localEnd:[.9464617092752042,1.68,.35999999999999993],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[1.57,4.1356,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-right-1",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"links-right-1",kind:"ridge",geometryEffect:"repeated alternating oval chain links along endpoints",confidence:.83}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},nn.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-right-1",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(nn),n["chain-right-1"]=nn;let $r=mn?new nt(mn.endRadius,mn.baseRadius,mn.length,16,6):qi({points:[[0,0,0],[-.6235382907247958,-2.4556000000000004,.35999999999999993]],radius:.013,radialSegments:6});mn||$r.scale(1,1,1);let Bn=new Ge($r,t.gold??new at({color:8947848}));Bn.name="chain-right-1",mn&&(Bn.position.copy(mn.midpoint),Bn.quaternion.copy(mn.quaternion)),Bn.castShadow=i.castShadow??!0,Bn.receiveShadow=i.receiveShadow??!0,Bn.userData.sculptComponent={id:"chain-right-1",name:"chain-right-1",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"tube",topologyClass:"fiber-strand",topologyRationale:"Observed thin member following a curved centerline",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",tubePath:{points:[[0,0,0],[-.6235382907247958,-2.4556000000000004,.35999999999999993]],radius:.013,radialSegments:6},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"chain-right-1-seat",localStart:[1.57,4.1356,0],localEnd:[.9464617092752042,1.68,.35999999999999993],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[1.57,4.1356,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-right-1",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"links-right-1",kind:"ridge",geometryEffect:"repeated alternating oval chain links along endpoints",confidence:.83}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},nn.add(Bn),s["chain-right-1"]=Bn,a["chain-right-1"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["chain-right-1"]??(o["chain-right-1"]=[]),o["chain-right-1"].push(nn);let v=yt({parentId:"root",parentSocket:"chain-right-2-seat",localStart:[1.57,4.1356,0],localEnd:[1.5699999999999998,1.68,-.72],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015}),N=new it;N.name="chain-right-2__pivot",N.scale.set(1,1,1),v?(N.position.copy(v.start),N.rotation.set(0,0,0)):(N.position.set(1.57,4.1356,0),N.rotation.set(0,0,0)),N.userData.sculptComponent={id:"chain-right-2",name:"chain-right-2",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"tube",topologyClass:"fiber-strand",topologyRationale:"Observed thin member following a curved centerline",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",tubePath:{points:[[0,0,0],[-2220446049250313e-31,-2.4556000000000004,-.72]],radius:.013,radialSegments:6},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"chain-right-2-seat",localStart:[1.57,4.1356,0],localEnd:[1.5699999999999998,1.68,-.72],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[1.57,4.1356,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-right-2",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"links-right-2",kind:"ridge",geometryEffect:"repeated alternating oval chain links along endpoints",confidence:.83}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},N.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-right-2",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(N),n["chain-right-2"]=N;let q=v?new nt(v.endRadius,v.baseRadius,v.length,16,6):qi({points:[[0,0,0],[-2220446049250313e-31,-2.4556000000000004,-.72]],radius:.013,radialSegments:6});v||q.scale(1,1,1);let H=new Ge(q,t.gold??new at({color:8947848}));H.name="chain-right-2",v&&(H.position.copy(v.midpoint),H.quaternion.copy(v.quaternion)),H.castShadow=i.castShadow??!0,H.receiveShadow=i.receiveShadow??!0,H.userData.sculptComponent={id:"chain-right-2",name:"chain-right-2",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"tube",topologyClass:"fiber-strand",topologyRationale:"Observed thin member following a curved centerline",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry",tubePath:{points:[[0,0,0],[-2220446049250313e-31,-2.4556000000000004,-.72]],radius:.013,radialSegments:6},worldSpaceDescriptor:!0},parent:"root",attachment:{parentId:"root",parentSocket:"chain-right-2-seat",localStart:[1.57,4.1356,0],localEnd:[1.5699999999999998,1.68,-.72],contactType:"hinge",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"],baseRadius:.015,endRadius:.015},dimensions:{width:1,height:1,depth:1,units:"world",confidence:.85},transform:{position:[1.57,4.1356,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"chain-right-2",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"links-right-2",kind:"ridge",geometryEffect:"repeated alternating oval chain links along endpoints",confidence:.83}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},N.add(H),s["chain-right-2"]=H,a["chain-right-2"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["chain-right-2"]??(o["chain-right-2"]=[]),o["chain-right-2"].push(N);let k=yt(null),fe=new it;fe.name="bar-right__pivot",fe.scale.set(1,1,1),k?(fe.position.copy(k.start),fe.rotation.set(0,-.1,.05)):(fe.position.set(1.57,1.75,0),fe.rotation.set(0,-.1,.05)),fe.userData.sculptComponent={id:"bar-right",name:"bar-right",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"box",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:{parentId:"root",parentSocket:"bar-right-seat",localStart:[1.57,1.75,0],localEnd:[1.57,1.75,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.82,height:.28,depth:.44,units:"world",confidence:.85},transform:{position:[1.57,1.75,0],rotation:[0,-.1,.05]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"bar-right",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"bullion",materialLayers:["bullion"],deformations:[],joints:[],seams:[],localFeatures:[{id:"bullion-bevel-right",kind:"bevel",geometryEffect:"beveled trapezoid bullion block",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},fe.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"bar-right",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(fe),n["bar-right"]=fe;let Re=k?new nt(k.endRadius,k.baseRadius,k.length,16,6):new jt(1,1,1,4,4,4);k||Re.scale(.82,.28,.44);let me=new Ge(Re,t.bullion??new at({color:8947848}));me.name="bar-right",k&&(me.position.copy(k.midpoint),me.quaternion.copy(k.quaternion)),me.castShadow=i.castShadow??!0,me.receiveShadow=i.receiveShadow??!0,me.userData.sculptComponent={id:"bar-right",name:"bar-right",level:"meso",role:"body",importance:.85,confidence:.88,primitive:"box",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:{parentId:"root",parentSocket:"bar-right-seat",localStart:[1.57,1.75,0],localEnd:[1.57,1.75,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.82,height:.28,depth:.44,units:"world",confidence:.85},transform:{position:[1.57,1.75,0],rotation:[0,-.1,.05]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"bar-right",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"bullion",materialLayers:["bullion"],deformations:[],joints:[],seams:[],localFeatures:[{id:"bullion-bevel-right",kind:"bevel",geometryEffect:"beveled trapezoid bullion block",confidence:.9}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"structural-pass",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},fe.add(me),s["bar-right"]=me,a["bar-right"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o["bar-right"]??(o["bar-right"]=[]),o["bar-right"].push(fe);let Te=yt({parentId:"root",parentSocket:"column-seat",localStart:[0,2.3,0],localEnd:[0,2.3,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]}),ze=new it;ze.name="finial-neck__pivot",ze.scale.set(1,1,1),Te?(ze.position.copy(Te.start),ze.rotation.set(0,0,0)):(ze.position.set(0,4.77,0),ze.rotation.set(0,0,0)),ze.userData.sculptComponent={id:"finial-neck",name:"finial-neck",level:"macro",role:"body",importance:.85,confidence:.88,primitive:"cylinder",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:{parentId:"root",parentSocket:"column-seat",localStart:[0,2.3,0],localEnd:[0,2.3,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.2,height:.65,depth:.2,units:"world",confidence:.7},transform:{position:[0,4.77,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"column",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"upper-neck",kind:"contour",geometryEffect:"solid connection from spindle to finial",confidence:.8}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},ze.userData.actionProfile={animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"column",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},(n.root??e).add(ze),n["finial-neck"]=ze;let $e=Te?new nt(Te.endRadius,Te.baseRadius,Te.length,16,6):new nt(.5,.5,1,24,8);Te||$e.scale(.2,.65,.2);let Ee=new Ge($e,t.gold??new at({color:8947848}));return Ee.name="finial-neck",Te&&(Ee.position.copy(Te.midpoint),Ee.quaternion.copy(Te.quaternion)),Ee.castShadow=i.castShadow??!0,Ee.receiveShadow=i.receiveShadow??!0,Ee.userData.sculptComponent={id:"finial-neck",name:"finial-neck",level:"macro",role:"body",importance:.85,confidence:.88,primitive:"cylinder",topologyClass:"assembled-solid",topologyRationale:"Observed rigid discrete component with circular or planar faces",geometryDescriptor:{topologyIntent:"subject-specific procedural form",edgeTreatment:{type:"bevel",bevelRadius:.02,segments:2},deformationStack:[],uvStrategy:"generated procedural coordinates",normalStrategy:"vertex normals from generated geometry"},parent:"root",attachment:{parentId:"root",parentSocket:"column-seat",localStart:[0,2.3,0],localEnd:[0,2.3,0],contactType:"surface-contact",overlap:.025,embedDepth:.025,gapTolerance:.035,evidenceRefs:["full-object"]},dimensions:{width:.2,height:.65,depth:.2,units:"world",confidence:.7},transform:{position:[0,4.77,0],rotation:[0,0,0]},actionProfile:{animationRole:"rigid-part",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.9},transformChannels:{translate:!0,rotate:!0,scale:!0,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!0},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},constraints:[],destruction:{breakable:!1,fractureGroup:"column",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"base"}},material:"gold",materialLayers:["gold"],deformations:[],joints:[],seams:[],localFeatures:[{id:"upper-neck",kind:"contour",geometryEffect:"solid connection from spindle to finial",confidence:.8}],surfaceDetail:{macroRoughness:0,microRoughness:0,bumpAmplitude:0,normalPattern:"",displacementPattern:"",occlusionPattern:"",edgeWearPattern:"",notes:""},evidenceRefs:["full-object"],details:[],fidelityTier:"blockout",colorMaterialRecipe:{dominantAlbedo:"rgba(214, 166, 76, 1)",secondaryAlbedo:"rgba(242, 206, 134, 1)",materialClass:"metal",materialClassConfidence:.9}},ze.add(Ee),s["finial-neck"]=Ee,a["finial-neck"]={type:"box",offset:[0,0,0],scale:[1,1,1],isTrigger:!1,notes:"Replace with sphere/capsule/compound proxy when the object shape demands it."},o.column??(o.column=[]),o.column.push(ze),e.userData.sculptRuntime={nodes:n,meshes:s,sockets:r,colliders:a,destructionGroups:o},e.userData.lookDevTargets={qualityPriority:"reference-fidelity",materialPass:{albedoPaletteRequired:!0,roughnessVariationRequired:!0,normalOrBumpRequired:!0,localOverridesRequired:!0,minimumTextureResolution:1024,preferredTextureResolution:2048,independentMapChannels:["albedo","roughness","height","normal","ambient-occlusion"],requiredSurfaceFrequencyBands:["macro","meso","micro"],geometryReliefRequiredWhenSilhouetteAffected:!0,referencePbrExtraction:{requiredWhenSourceImagePresent:!0,targetThreshold:.7,stopOnLowConfidence:!0,script:"forge/stage1_intake/extract_pbr_evidence.py",acceptedLimitation:"Illustration of highly reflective homogeneous gold: exact maps cannot be recovered. Representative independent PBR channels and measured visual render review are used; no exact material recovery claim."},mustAvoid:["single flat albedo per material","uniform roughness","albedo texture reused as roughness/height/normal/AO","single-frequency random noise","plastic-looking smooth bark, stone, cloth, foliage, or aged material","local color/detail described only in prose without material masks","claiming exact PBR recovery when confidence is below the target threshold"]},lightingPass:{requiredTerms:["key light","fill light","rim or environment light","exposure","tone mapping","background","contact shadow"],mustAvoid:["ambient-only lighting","flat value range","missing contact shadow","reference lighting copied without separating material readability"]},screenshotReview:["Compare albedo palette and local color zones.","Compare roughness/normal/bump response under light.","Compare cavity dirt, edge wear, stains, moss, scratches, or other local masks.","Compare key/fill/rim structure, exposure, tone mapping, background, and contact shadows.","Capture a neutral-light render to verify material readability without reference lighting.","Capture a grazing-light close-up to expose flat normals, uniform roughness, tiling, and plastic highlights.","Capture a reference-matched render from the same camera framing as the source."]},e.userData.actionReadiness={note:"Use root.userData.sculptRuntime.nodes for transforms, sockets for attachments, colliders for physics proxies, and destructionGroups for breakable sets."},e}var Yr=new I;function vn(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;Yr.copy(e),Yr[n]=0,Yr.normalize();let l=.5*a/(a+o),h=1-Yr.angleTo(i)/c;return Math.sign(Yr[t])===1?h*l:o/(a+o)+l+l*(1-h)}var nl=class i extends jt{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new I,l=new I,h=new I(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,m=u.length/6,x=new I,g=.5/a;for(let p=0,M=0;p<u.length;p+=3,M+=2)switch(c.fromArray(u,p),l.copy(c),l.x-=Math.sign(l.x)*g,l.y-=Math.sign(l.y)*g,l.z-=Math.sign(l.z)*g,l.normalize(),u[p+0]=h.x*Math.sign(c.x)+l.x*r,u[p+1]=h.y*Math.sign(c.y)+l.y*r,u[p+2]=h.z*Math.sign(c.z)+l.z*r,d[p+0]=l.x,d[p+1]=l.y,d[p+2]=l.z,Math.floor(p/m)){case 0:x.set(1,0,0),f[M+0]=vn(x,l,"z","y",r,n),f[M+1]=1-vn(x,l,"y","z",r,t);break;case 1:x.set(-1,0,0),f[M+0]=1-vn(x,l,"z","y",r,n),f[M+1]=1-vn(x,l,"y","z",r,t);break;case 2:x.set(0,1,0),f[M+0]=1-vn(x,l,"x","z",r,e),f[M+1]=vn(x,l,"z","x",r,n);break;case 3:x.set(0,-1,0),f[M+0]=1-vn(x,l,"x","z",r,e),f[M+1]=1-vn(x,l,"z","x",r,n);break;case 4:x.set(0,0,1),f[M+0]=1-vn(x,l,"x","y",r,e),f[M+1]=1-vn(x,l,"y","x",r,t);break;case 5:x.set(0,0,-1),f[M+0]=vn(x,l,"x","y",r,e),f[M+1]=1-vn(x,l,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};function kc(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new Ot,l=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=jd(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<a[h].length;++x)f.push(a[h][x][d]);let m=jd(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}}return c}function jd(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new Qt(a,t,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<t;m++){let x=h.getComponent(d,m);o.setComponent(d+u,m,x)}}else a.set(h.array,c);c+=h.count*t}return s!==void 0&&(o.gpuType=s),o}var Zr=(i,e=72)=>new Fi(i.map(t=>new oe(...t)),e),Vs=i=>{let e=i.map(n=>n.index?n.toNonIndexed():n.clone()),t=kc(e,!1);if(e.forEach(n=>n.dispose()),i.forEach(n=>n.dispose()),!t)throw new Error("Balance geometry attributes do not match");return t};function z_(i,e,t){let n=new Ts;for(let l=0;l<8;l++){let h=Math.PI/8+l*Math.PI/4,u=Math.cos(h)*i/2,d=Math.sin(h)*i/2;l===0?n.moveTo(u,d):n.lineTo(u,d)}n.closePath();let s=.012,r=new Sr(n,{depth:e-2*s,steps:1,bevelEnabled:!0,bevelSize:s,bevelThickness:s,bevelSegments:3,curveSegments:1});r.rotateX(-Math.PI/2),r.translate(0,-e/2+s,0),r.scale(1,1,t/i);let a=new Es,o=Array.from({length:8},(l,h)=>{let u=Math.PI/8+h*Math.PI/4,d=i/2+.014;return new I(Math.cos(u)*d,-e*.23,Math.sin(u)*d*t/i)});for(let l=0;l<8;l++)a.add(new ws(o[l],o[(l+1)%8]));let c=new Ln(a,64,.007,6,!0);return Vs([r,c])}function H_(i){let s=Array.from({length:25},(l,h)=>{let u=h/24*Math.PI*2;return new I(.033*Math.cos(u),.065*Math.sin(u),0)}),r=new In(s.slice(0,-1),!0,"centripetal"),a=new Ln(r,24,.01,6,!0),o=Math.max(2,Math.round((i-.15)/.098)+1),c=[];for(let l=0;l<o;l++){let h=a.clone();h.rotateY(l%2?Math.PI/2:0),h.translate(0,-i/2+.075+l*(i-.15)/(o-1),0),c.push(h)}return a.dispose(),{geometry:Vs(c),count:o}}function G_(){let i={G:[[[.85,.86],[.6,1],[.2,.95],[0,.7],[0,.25],[.2,0],[.7,0],[.9,.2],[.9,.45],[.55,.45]]],O:[[[.2,0],[0,.25],[0,.75],[.2,1],[.7,1],[.9,.75],[.9,.25],[.7,0],[.2,0]]],L:[[[0,1],[0,0],[.8,0]]],D:[[[0,0],[0,1],[.45,1],[.85,.75],[.85,.25],[.45,0],[0,0]]],9:[[[.85,.5],[.2,.5],[0,.7],[0,.9],[.2,1],[.65,1],[.85,.8],[.85,.25],[.65,0],[.1,0]]],".":[[[.35,0],[.36,.04]]]},e=[];for(let[n,s,r]of[["GOLD",.058,-.035],["999.9",.034,.045]]){let a=s*1.24,o=(n.length-1)*a+s*.9;[...n].forEach((c,l)=>i[c].forEach(h=>{let u=h.map(([f,m])=>new I(-o/2+l*a+f*s,.141,r-m*s)),d=new In(u,!1,"centripetal");e.push(new Ln(d,Math.max(6,u.length*3),.0021,4,!1))}))}let t=[[-.24,-.13],[.24,-.13],[.27,-.1],[.27,.055],[.24,.08],[-.24,.08],[-.27,.055],[-.27,-.1]].map(([n,s])=>new I(n,.141,s));return e.push(new Ln(new In(t,!0,"centripetal"),64,.0032,6,!0)),Vs(e)}function Yd(i){let e={gold:new Xn({color:14923344,metalness:1,roughness:.23,envMapIntensity:1.15}),edge:new Xn({color:15583080,metalness:1,roughness:.18,envMapIntensity:1.2}),bullion:new Xn({color:15780188,metalness:1,roughness:.22,envMapIntensity:1.1}),stamp:new Xn({color:10911013,metalness:1,roughness:.32,envMapIntensity:.9})},t=new Set,n=new Set,s={parts:0,links:0,triangles:0,suspensionEyes:0,pivotHeads:0};return i.traverse(r=>{if(!r.isMesh)return;let a=r.name,o=r.userData.sculptComponent;if(!o)return;(Array.isArray(r.material)?r.material:[r.material]).forEach(u=>{t.add(u);for(let d of Object.values(u))d?.isTexture&&n.add(d)});let l,h=e.gold;if(a==="root"||a==="foot-step"){let u=o.dimensions;l=z_(u.width,u.height,u.depth),h=e.edge}else if(a==="column")l=Zr([[.13,.22],[.16,.27],[.19,.32],[.23,.4],[.265,.51],[.28,.61],[.265,.69],[.21,.77],[.155,.87],[.15,.94],[.15,1.48],[.155,1.6],[.2,1.67],[.23,1.75],[.24,1.82],[.225,1.91],[.175,2.02],[.155,2.07],[.15,2.14],[.15,3.52],[.155,3.61],[.2,3.68],[.24,3.76],[.25,3.83],[.23,3.93],[.17,4.02],[.15,4.11],[.15,4.59]].map(([d,f])=>[d,f-2.3]),96);else if(a.startsWith("collar-"))l=Zr([[.15,-.1],[.185,-.1],[.215,-.095],[.24,-.077],[.255,-.049],[.255,-.043],[.239,-.033],[.239,-.024],[.254,-.014],[.258,0],[.254,.014],[.239,.024],[.239,.033],[.255,.043],[.255,.049],[.24,.077],[.215,.095],[.185,.1],[.15,.1]],48),h=e.edge;else if(a==="finial-neck")l=Zr([[.145,-.325],[.17,-.29],[.195,-.22],[.18,-.16],[.15,-.13],[.16,-.09],[.17,-.065],[.14,-.035],[.11,.035],[.095,.09],[.11,.14],[.14,.2],[.17,.26],[.18,.325]],80);else if(a==="finial")l=new mi(.17,40,28),l.scale(1,1.12,1),h=e.edge;else if(a==="beam"){let u=o.geometryDescriptor.tubePath.points.map(m=>new I(...m)),d=new Ln(new In(u),96,.069,20,!1);d.scale(1,1,.8);let f=[d];for(let m of[u[0],u.at(-1)]){let x=new mi(.067,16,10);x.scale(1,1,.8),x.translate(m.x,m.y,m.z),f.push(x);let g=new Dn(.06,.014,8,32);g.rotateX(Math.PI/2),g.scale(1.3,1,.8),g.translate(m.x,m.y,m.z),f.push(g)}l=Vs(f)}else if(a==="beam-center"){let d=[Zr([[0,-.57],[.09,-.57],[.113,-.555],[.126,-.53],[.13,-.5],[.13,.5],[.126,.53],[.113,.555],[.09,.57],[0,.57]],80)],f=new nt(.044,.044,.54,24);f.rotateX(Math.PI/2),d.push(f);for(let m of[-1,1]){let x=new nt(.054,.061,.042,32);x.rotateX(m*Math.PI/2),x.translate(0,0,m*.27),d.push(x);let g=new Dn(.046,.008,8,32);g.translate(0,0,m*.286),d.push(g),s.pivotHeads++}l=Vs(d),h=e.edge}else if(a.startsWith("pan-")){let d=[Zr([[0,-.165],[.25,-.165],[.42,-.154],[.53,-.128],[.62,-.082],[.69,-.025],[.739,.039],[.765,.083],[.767,.095],[.757,.105],[.745,.1],[.721,.061],[.681,.002],[.615,-.057],[.53,-.101],[.42,-.124],[.25,-.13],[0,-.13]],96)];for(let f=0;f<3;f++){let m=Math.PI/6+f*Math.PI*2/3,x=new Dn(.028,.009,8,24);x.rotateY(-m),x.translate(.72*Math.cos(m),.102,.72*Math.sin(m)),d.push(x),s.suspensionEyes++}l=Vs(d)}else if(a.startsWith("rim-"))l=new Dn(.756,.012,10,96),h=e.edge;else if(a.startsWith("chain-")){let u=o.attachment,d=new I(...u.localStart).distanceTo(new I(...u.localEnd)),f=H_(d);l=f.geometry,s.links+=f.count,r.userData.linkCount=f.count,h=e.edge}else if(a.startsWith("bar-")){let u={"bar-left":1.38,"bar-left-second":1.643,"bar-right":1.63}[a];u!==void 0&&(r.parent.position.y=u);let d=o.dimensions,f=new nl(d.width,d.height,d.depth,3,.023),m=f.attributes.position;for(let p=0;p<m.count;p++){let M=1-.09*(m.getY(p)/d.height+.5);m.setX(p,m.getX(p)*M),m.setZ(p,m.getZ(p)*M)}f.computeVertexNormals();let x=G_(),g=[f,x].map(p=>p.index?p.toNonIndexed():p.clone());l=kc(g,!0),g.forEach(p=>p.dispose()),f.dispose(),x.dispose(),h=[e.bullion,e.stamp]}l&&(r.geometry.dispose(),r.geometry=l),r.material=h,r.castShadow=!1,r.receiveShadow=!1,r.userData.websiteRefinement={pass:"blockout",approved:!1,source:"single-image, procedural geometry"},s.parts++,s.triangles+=r.geometry.index?r.geometry.index.count/3:r.geometry.attributes.position.count/3}),n.forEach(r=>r.dispose()),t.forEach(r=>r.dispose()),i.userData.websiteRefinement={...s,approved:!1,notes:"Hidden views and hallmark letterforms are inferred. Browser review pending; no subsequent sculpt pass unlocked."},i}function Zd(){let i=document.querySelector("#balance-viewport");if(!i)return;let e=document.querySelector("#balance-fallback"),t=document.querySelector("#scene-status"),n=matchMedia("(prefers-reduced-motion: reduce)"),s=matchMedia("(min-width: 951px), (any-hover: hover) and (any-pointer: fine)"),r,a,o,c,l,h=[],u=0,d=!0,f=!1,m=!1,x=window.AzyraMotion?.reduced??n.matches,g=!1,p=0,M=0,R=s.matches,b=0,w=0,S=-1/0,A=null,y=!1,T=C=>{t.textContent=C};try{let He=function(){if(g)return;let J=Math.max(1,i.clientWidth),re=Math.max(1,i.clientHeight);z.aspect=J/re,z.updateProjectionMatrix(),r.setSize(J,re,!1);let ae=Math.max(5.7,4.9/z.aspect)/2/Math.tan(tn.degToRad(17))*1.12;z.position.normalize().multiplyScalar(ae),o.update(),W()},je=function(J){if(u=0,g||!d||document.hidden)return;let re=M?Math.min(.05,(J-M)/1e3):0;M=J;let ae=!x&&!m&&!f;if(ae){p+=re;let Ie=R&&J-S>1200?Math.PI/22.5:0;w+=(Ie-w)*(1-Math.exp(-re/.8)),b=(b-re*w)%(Math.PI*2),Z.position.y=Math.sin(p*.6)*.018,Z.rotation.x=Math.sin(p*.45)*.008,Z.rotation.y=b,Z.rotation.z=Math.sin(p*.6)*.006}if(A!==null){let Ie=new ii().setFromVector3(z.position.clone().sub(o.target)),Fe=A-Ie.theta;Fe=Math.atan2(Math.sin(Fe),Math.cos(Fe)),Math.abs(Fe)<.005?(A=null,y=!1):(Ie.theta+=Fe*(x?1:.12),z.position.copy(new I().setFromSpherical(Ie).add(o.target)))}let le=o.update();r.render(U,z),(ae||f||le||y)&&W()},W=function(){!u&&!g&&d&&!document.hidden&&(u=requestAnimationFrame(je))};r=new Zo({antialias:!0,alpha:!0,powerPreference:"high-performance"}),r.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),r.setClearColor(0,0),r.outputColorSpace=Pt,r.toneMapping=Ns,r.toneMappingExposure=.95,r.shadowMap.enabled=!0,r.shadowMap.type=ki;let C=r.domElement;C.id="balance-canvas",C.tabIndex=0,C.setAttribute("role","img"),C.setAttribute("aria-label","Balan\xE7a dourada interativa em 3D. Arraste para explorar. Setas giram a vista, Home restaura e Espa\xE7o pausa ou retoma."),C.setAttribute("aria-describedby","scene-help"),C.style.touchAction="pan-y",C.setAttribute("aria-keyshortcuts","ArrowLeft ArrowRight Home Space"),i.append(C);let U=new Li,G=new Xi(r),D=new el,O=[];for(let[J,re,ae]of[[[-4,2,4],[2,7,.1],3],[[4,1,-2],[1,6,.1],2],[[0,6,1],[5,.1,3],2.5]]){let le=new Ge(new jt(...re),new Ni({color:new We(16774367).multiplyScalar(ae)}));le.position.set(...J),le.lookAt(0,1,0),D.add(le),O.push(le)}a=G.fromScene(D,.015),U.environment=a.texture,O.forEach(J=>{D.remove(J),J.geometry.dispose(),J.material.dispose()}),D.dispose(),G.dispose();let z=new kt(34,1,.1,100);z.position.set(6,3.5,12);let j=new Ps(16773596,408622,.65);U.add(j);let ne=new Bi(16773852,2.6);ne.position.set(-4,6,6),U.add(ne),ne.castShadow=!0,ne.shadow.mapSize.set(R?1024:512,R?1024:512),Object.assign(ne.shadow.camera,{left:-4,right:4,top:4,bottom:-4,near:.1,far:24}),ne.shadow.camera.updateProjectionMatrix(),ne.shadow.normalBias=.008,ne.shadow.bias=-2e-4,ne.shadow.radius=2;let X=new Bi(16767889,1.8);X.position.set(5,2,-4),U.add(X);let Z=new it;U.add(Z);let ie=Yd(qd({castShadow:!0,receiveShadow:!0,textureSize:32}));ie.position.y=-2.68,Z.add(ie),ie.traverse(J=>{J.isMesh&&(J.castShadow=!0,J.receiveShadow=!0)});let ve=new Ge(new Oi(5,4),new Mr({opacity:.24}));ve.rotation.x=-Math.PI/2,ve.position.y=-2.735,ve.receiveShadow=!0,U.add(ve),h.push(()=>{ve.geometry.dispose(),ve.material.dispose()}),o=new Qo(z,C),o.enableDamping=!0,o.dampingFactor=.075,o.enablePan=!1,o.enableZoom=!1,o.minPolarAngle=.32,o.maxPolarAngle=Math.PI-.32,o.rotateSpeed=.65,o.target.set(0,0,0),o.update(),o.addEventListener("start",()=>{f=!0,w=0,A=null,y=!1,W()}),o.addEventListener("end",()=>{f=!1,S=performance.now(),W()}),o.addEventListener("change",W);let _e=()=>{R=s.matches,w=0,W()};s.addEventListener("change",_e),h.push(()=>s.removeEventListener("change",_e));let Xe=()=>He();"ResizeObserver"in window?(c=new ResizeObserver(Xe),c.observe(i)):(window.addEventListener("resize",Xe),h.push(()=>window.removeEventListener("resize",Xe))),"IntersectionObserver"in window&&(l=new IntersectionObserver(J=>{d=J[0].isIntersecting,d?W():(cancelAnimationFrame(u),u=0,M=0)},{threshold:.03}),l.observe(i));let K=J=>{let re=new ii().setFromVector3(z.position.clone().sub(o.target));A=(A??re.theta)+J*Math.PI/4,y=!0,W(),T(J>0?"Vista girada 45 graus para a direita.":"Vista girada 45 graus para a esquerda.")},ye=()=>{z.position.set(6,3.5,12),A=null,y=!1,b=0,w=0,S=performance.now(),Z.rotation.set(0,0,0),Z.position.y=0,He(),T("Perspectiva inicial restaurada.")},Ue=()=>{m=!m,w=0,T(m?"Rota\xE7\xE3o pausada.":"Rota\xE7\xE3o retomada."),W()},ge=J=>{(J.key==="ArrowLeft"||J.key==="ArrowRight")&&(J.preventDefault(),K(J.key==="ArrowLeft"?-1:1)),J.key==="Home"&&(J.preventDefault(),ye()),(J.code==="Space"||J.key===" ")&&(J.preventDefault(),J.repeat||Ue())};C.addEventListener("keydown",ge),h.push(()=>C.removeEventListener("keydown",ge));let De=J=>{x=J.detail.reduced,o.enableDamping=!x,w=0,x?(Z.rotation.x=0,Z.rotation.z=0,Z.position.y=0):(m=!1,S=-1/0),W()};document.addEventListener("azyra:motion",De),h.push(()=>document.removeEventListener("azyra:motion",De)),x=window.AzyraMotion?.reduced??n.matches,o.enableDamping=!x;let rt=()=>{document.hidden?(cancelAnimationFrame(u),u=0,M=0):W()};document.addEventListener("visibilitychange",rt),h.push(()=>document.removeEventListener("visibilitychange",rt));let te=J=>{J.preventDefault(),g=!0,cancelAnimationFrame(u),u=0,e.hidden=!1,C.hidden=!0,document.querySelector("#scene-help").textContent="Refer\xEAncia visual da balan\xE7a.",T("Visualiza\xE7\xE3o est\xE1tica. Recarregue a p\xE1gina para tentar retomar o 3D.")};C.addEventListener("webglcontextlost",te),h.push(()=>C.removeEventListener("webglcontextlost",te)),window.Azyra3D={root:Z,model:ie,camera:z,controls:o,turn:K,reset:ye,togglePause:Ue,get state(){return{reduced:x,userPaused:m,visible:d,dragging:f,desktop:R,clockwiseAngle:b,autoRotating:R&&!x&&!m&&!f}}},He(),r.render(U,z),e.hidden=!0,i.classList.add("is-ready"),T("3D pronto. Explore com mouse ou teclado."),W()}catch(C){g=!0,h.forEach(U=>U()),o?.dispose(),a?.dispose(),r?.dispose(),i.querySelector("canvas")?.remove(),e.hidden=!1,document.querySelector("#scene-help").textContent="Refer\xEAncia visual da balan\xE7a.",T("Visualiza\xE7\xE3o est\xE1tica dispon\xEDvel. Seu navegador n\xE3o iniciou a experi\xEAncia 3D."),console.warn("Azyra 3D unavailable:",C.message)}function P(){g=!0,cancelAnimationFrame(u),c?.disconnect(),l?.disconnect(),o?.dispose(),h.forEach(U=>U()),a?.dispose();let C=new Set;window.Azyra3D?.model.traverse(U=>{U.isMesh&&(U.geometry.dispose(),(Array.isArray(U.material)?U.material:[U.material]).forEach(D=>{C.has(D)||(C.add(D),D.dispose())}))}),r?.dispose()}window.addEventListener("pagehide",C=>{C.persisted||P()})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Zd,{once:!0}):Zd();})();
/*! For license information please see balance-3d.js.LEGAL.txt */

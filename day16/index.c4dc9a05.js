var e=globalThis,t={},r={},a=e.parcelRequire94c2;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var a=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,a.call(n.exports,n,n.exports),n.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},e.parcelRequire94c2=a),a.register,a("bICZs");var n=a("dENGy"),i=a("3Ru88");const o=i.Array2d.parse,s=(e,t=new Set)=>{for(let r of(t.add(e),e.predecessors))s(r,t);return t};var i=a("3Ru88"),l=a("7zFg5");const d=document.getElementById("canvas");if(!(d instanceof HTMLCanvasElement))throw Error("no canvas");const c=d.getContext("2d");if(!c)throw Error("no ctx");(0,l.scaleCanvasToPixelRatio)(c,300,300);const p={green:"#91cfa1",red:"#ea859a",yellow:"#fef59d",black:"black",white:"white"};let f=()=>{};const v=document.createElement("div");v.style.position="fixed",v.style.zIndex="1000",v.style.pointerEvents="none",v.style.padding="5px",v.style.border="1px solid black",v.style.borderRadius="5px",v.style.backgroundColor="white",v.style.color="black",v.style.display="none",v.style.fontFamily="monospace",v.style.fontSize="12px",document.body.appendChild(v);const y=document.getElementById("input-form");if(!(y instanceof HTMLFormElement))throw Error("no form");y.addEventListener("submit",function(e){e.preventDefault();let t=new FormData(this);!function(e,t,r){cancelAnimationFrame(0),f();let a=o(e),c=a[0].length,y=a.length;(0,l.scaleCanvasToPixelRatio)(t,10*c,10*y),t.canvas.scrollIntoView({behavior:"smooth"});let u=(e,r,a,n=p.white)=>{t.font="10px monospace",t.textAlign="center",t.textBaseline="middle",t.fillStyle=n,t.fillText(a,10*e+5,10*r+5)},m=-1,x=-1,h=(e,t,r)=>{v.textContent=r,v.style.left=`${e}px`,v.style.top=`${t-30}px`,v.style.display="block"},b=()=>{v.style.display="none"},{visited:g,end:w,start:E}=function(e){let t=(0,i.Array2d).traverse(e).find(e=>"S"===e.value).pos,r=(0,i.Array2d).traverse(e).find(e=>"E"===e.value).pos;return{visited:s((0,n.dijkstra)(t=>[{value:{pos:(0,i.V).add(t.pos,i.V.DIRS_4[t.dir]),dir:t.dir},distance:1},{value:{pos:t.pos,dir:(0,i.Lib).mod(t.dir+1,4)},distance:1e3},{value:{pos:t.pos,dir:(0,i.Lib).mod(t.dir-1,4)},distance:1e3}].filter(({value:t})=>"#"!==(0,i.Array2d).get(e,t.pos)),[{value:{pos:t,dir:1},distance:0}],e=>`${e.pos[0]},${e.pos[1]},${e.dir}`).find(e=>(0,i.V).eq(e.value.pos,r))),start:t,end:r}}(a),k=Array.from(g).sort((e,t)=>e.distance-t.distance);(()=>{f();let e=(0,i.Array2d).map(a,(e,t)=>"#"===e?{type:"wall",distance:0,dir:0}:(0,i.V).eq(t,E)?{type:"start",distance:0,dir:1}:(0,i.V).eq(t,w)?{type:"end",distance:0,dir:0}:{type:"empty",distance:0,dir:0});for(let t of k)if(!(0,i.V).eq(t.value.pos,E)){if((0,i.V).eq(t.value.pos,w)){(0,i.Array2d).set(e,t.value.pos,{type:"end",distance:t.distance,dir:t.value.dir});continue}(0,i.Array2d).set(e,t.value.pos,{type:"visited",distance:t.distance,dir:t.value.dir})}function r(){for(let r of(t.fillStyle=p.black,t.fillRect(0,0,t.canvas.width,t.canvas.height),(0,i.Array2d).traverse(e))){let{type:e}=r.value,[a,n]=r.pos,i=a===m&&n===x?p.black:p.white;switch(a===m&&n===x&&(t.fillStyle=p.yellow,t.fillRect(10*a,10*n,10,10)),e){case"wall":u(a,n,"#",p.green);break;case"start":u(a,n,"S",i);break;case"end":u(a,n,"E",i);break;case"empty":u(a,n,".",i);break;case"visited":u(a,n,["^",">","v","<"][r.value.dir],p.red)}}}function n(t){let a=Math.floor(t.offsetX/10),n=Math.floor(t.offsetY/10);m=a,x=n;let o=(0,i.V).vec(a,n),s=(0,i.Array2d).get(e,o);s&&["visited","start","end"].includes(s.type)?(r(),h(t.clientX,t.clientY,`${s.type} ${s.distance}`)):(r(),b())}r(),d&&(d.addEventListener("mousemove",n),f=()=>d.removeEventListener("mousemove",n))})()}((t.get("input")?.toString()??"").trim(),c,t.get("part2")?.toString())}),y.querySelector("#input").textContent=`\
###########
##...######
##.#.######
##.#.....E#
##.#####.##
#S...###.##
####.###.##
####.###.##
####.###.##
####.###.##
####.....##
###########`;
//# sourceMappingURL=index.c4dc9a05.js.map

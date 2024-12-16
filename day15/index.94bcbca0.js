var v=globalThis,e={},t={},r=v.parcelRequire94c2;null==r&&((r=function(v){if(v in e)return e[v].exports;if(v in t){var r=t[v];delete t[v];var l={id:v,exports:{}};return e[v]=l,r.call(l.exports,l,l.exports),l.exports}var n=Error("Cannot find module '"+v+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(v,e){t[v]=e},v.parcelRequire94c2=r),r.register,r("bICZs");var l=r("3Ru88"),n=r("i4wae"),i=r("kxxN7");const o=(0,i.t).tuple([l.Array2d,(0,i.t).str().map(v=>v.replaceAll("\n","")).map(v=>v.split("").map(l.V.asArrow))]).parse,a=v=>"O"===v||"["===v||"]"===v,f=(v,e)=>"["===(0,l.Array2d).get(v,e)?[e,(0,l.V).add(e,l.V.DIR_TO_VEC.R)]:"]"===(0,l.Array2d).get(v,e)?[(0,l.V).add(e,l.V.DIR_TO_VEC.L),e]:[e];var l=r("3Ru88"),c=r("7zFg5");const d=document.getElementById("canvas");if(!(d instanceof HTMLCanvasElement))throw Error("no canvas");const s=d.getContext("2d");if(!s)throw Error("no ctx");(0,c.scaleCanvasToPixelRatio)(s,300,300);const u={green:"#91cfa1",red:"#ea859a",yellow:"#fef59d",text:"#fee15b"};let p=0,y=()=>{};const m=document.getElementById("input-form");if(!(m instanceof HTMLFormElement))throw Error("no form");m.addEventListener("submit",function(v){v.preventDefault();let e=new FormData(this);!function(v,e,t){cancelAnimationFrame(p),y();let[r,i]=o(v),d=window.innerWidth/2-32,s=d;t&&(r=r.map(v=>v.flatMap(v=>"#"===v?["#","#"]:"O"===v?["[","]"]:[v,"."])),d*=2);let m=r[0].length,O=d/m;(0,c.scaleCanvasToPixelRatio)(e,d,s),e.canvas.scrollIntoView({behavior:"smooth"});let g=(v,t)=>{e.clearRect(0,0,d,s),e.font=`${O}px monospace`,v.forEach((v,r)=>{v.forEach((v,n)=>{e.fillStyle="white",e.fillRect(n*O,r*O,O,O);let i=.05*O;e.fillStyle=u.yellow,e.fillRect(n*O+i,r*O+i,O-2*i,O-2*i),e.font=`${O}px monospace`,e.textAlign="center",e.textBaseline="top",(0,l.V).eq((0,l.V).vec(n,r),t)&&(e.fillStyle=u.text,e.fillText("\uD83E\uDD16",n*O+O/2,r*O)),"#"===v&&(e.fillStyle=u.red,e.fillRect(n*O+i,r*O+i,O-2*i,O-2*i),e.fillStyle=u.text,e.fillText(v,n*O+O/2,r*O+2*i)),"O"===v&&(e.fillStyle=u.green,e.fillRect(n*O+i,r*O+i,O-2*i,O-2*i),e.fillStyle=u.text,e.fillText(v,n*O+O/2,r*O+2*i)),"["===v&&(e.fillStyle=u.green,e.fillRect(n*O+i,r*O+i,O-i,O-2*i),e.fillStyle=u.text,e.fillText(v,n*O+O/2,r*O+2*i)),"]"===v&&(e.fillStyle=u.green,e.fillRect(n*O,r*O+i,O-i,O-2*i),e.fillStyle=u.text,e.fillText(v,n*O+O/2,r*O+2*i))})})},x=function*(v,e){let t=(0,l.Array2d).traverse(v).find(v=>"@"===v.value).pos;(0,l.Array2d).set(v,t,".");let r=t;for(let t of(yield(0,n.tuple)(r,v,"start"),e))r=function(v,e,t){let r=(0,l.V).fromArrow(t),n=(0,l.V).add(e,r);if("#"===(0,l.Array2d).get(v,n))return e;if("."===(0,l.Array2d).get(v,n))return n;if(a((0,l.Array2d).get(v,n))){let t=[],i=f(v,n),o=new Set;for(;i.length>0;){let e=i.pop();if(o.has((0,l.V).toString(e)))continue;o.add((0,l.V).toString(e)),t.push(e);let n=(0,l.V).add(e,r);a((0,l.Array2d).get(v,n))&&i.push(...f(v,n))}if(!t.every(e=>"#"!==(0,l.Array2d).get(v,(0,l.V).add(e,r))))return e;for(let e of(t.sort((v,e)=>(0,l.V).mLen(e,n)-(0,l.V).mLen(v,n)),t)){let t=(0,l.Array2d).get(v,e);(0,l.Array2d).set(v,e,"."),(0,l.Array2d).set(v,(0,l.V).add(e,r),t)}return n}throw Error("Invalid move")}(v,r,t),yield(0,n.tuple)(r,v,t)}(r,i),A=0;p=requestAnimationFrame(function v(e){if(e-A>30){A=e;let{value:v,done:t}=x.next();if(t){y();return}let[r,l]=v;g(l,r)}p=requestAnimationFrame(v)})}((e.get("input")?.toString()??"").trim(),s,e.get("part2")?.toString()==="on")}),m.querySelector("#input").textContent=`\
##########
#..O..O.O#
#......O.#
#.OO..O.O#
#..O@..O.#
#O#..O...#
#O..O..O.#
#.OO.O.OO#
#....O...#
##########

<vv>^<v^>v>^vv^v>v<>v^v<v<^vv<<<^><<><>>v<vvv<>^v^>^<<<><<v<<<v^vv^v>^
vvv<<^>^v^^><<>>><>^<<><^vv^^<>vvv<>><^^v>^>vv<>v<<<<v<^v>^<^^>>>^<v<v
><>vv>v^v^<>><>>>><^^>vv>v<^^^>>v^v^<^^>v^^>v^<^v>v<>>v^v^<v>v^^<^^vv<
<<v<^>>^^^^>>>v^<>vvv^><v<<<>^^^vv^<vvv>^>v<^^^^v<>^>vvvv><>>v^<<^^^^^
^><^><>>><>^^<<^^v>>><^<v>^<vv>>v>>>^v><>^v><<<<v>>v<v<v>vvv>^<><<>^><
^>><>^v<><^vvv<^^<><v<<<<<><^v<<<><<<^^<v<^^^><^>>^<v^><<<^>>^v<v^v<v^
>^>>^v>vv>^<<^v<>><<><<v<<v><>v<^vv<<<>^^v^>^^>>><<^v>>v^v><^^>>^<>vv^
<><^^>^^^<><vvvvv^v<v<<>^v<v>v<<^><<><<><<<^^<<<^<<>><<><^^^>^^<>^>v<>
^^>vv<^v^v<vv>^<><v<^v>^^^>>>^^vvv^>vvv<>>>^<^>>>>>^<<^v>^vvv<>^<><<v>
v^^>>><<^^<>>^v^<v^vv<>v^<<>^<^v^v><^<<<><<^<v><v<>vv>>v><v^<vv<>v^<<^`;
//# sourceMappingURL=index.94bcbca0.js.map

const vm=require('node:vm');
const fs=require('node:fs');
const assert=require('node:assert/strict');
const nodes=new Map();
function node(key){if(!nodes.has(key))nodes.set(key,{textContent:'',disabled:false,classList:{add(){},remove(){}},insertAdjacentHTML(){},addEventListener(){},setAttribute(){}});return nodes.get(key)}
const document={querySelector:node,querySelectorAll:()=>[],addEventListener(){}};
node('#board').getContext=()=>({});
const context=vm.createContext({document,console,Math,setTimeout:()=>{},setInterval:()=>{},clearInterval(){},requestAnimationFrame(){}});
vm.runInContext(fs.readFileSync('game.js','utf8'),context);
vm.runInContext(`
audio={};
let seen=new Set();
for(let shot=0;shot<100;shot++){
 shoot();
 if(!playing)throw Error('Shot did not launch');
 let frames=0;
 while(playing&&frames<14400){update(1/120);frames++}
 if(playing)throw Error('Ball stuck on shot '+shot);
 if(count!==shot+1)throw Error('Wrong play count');
 if(!Number.isFinite(ball.x)||!Number.isFinite(ball.y))throw Error('Invalid physics');
 if(ball.x<0||ball.x>620)throw Error('Ball escaped');
 if(document.querySelector('#shoot').disabled)throw Error('Shoot did not unlock');
 seen.add(Math.floor(ball.x/(620/6)));
}
if(seen.size<4)throw Error('Insufficient reward variation');
console.log('PASS: 100 completed shots, finite physics, board bounds, reward counts, shoot unlock, '+seen.size+' distinct gift slots');
`,context);
assert.equal(node('#count').textContent,'100');

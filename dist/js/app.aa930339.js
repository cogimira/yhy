(function(e){function t(t){for(var i,c,r=t[0],u=t[1],s=t[2],l=0,f=[];l<r.length;l++)c=r[l],a[c]&&f.push(a[c][0]),a[c]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(e[i]=u[i]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,r=1;r<n.length;r++){var u=n[r];0!==a[u]&&(i=!1)}i&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var i={},a={app:0},o=[];function c(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=i,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)c.d(n,i,function(t){return e[t]}.bind(null,i));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],u=r.push.bind(r);r.push=t,r=r.slice();for(var s=0;s<r.length;s++)t(r[s]);var d=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var i=n("64a9"),a=n.n(i);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("canvas",{attrs:{id:"canvas"}})])}],c=n("d225"),r=n("b0b4"),u=n("308d"),s=n("6bb5"),d=n("013f"),l=n("4e2b"),f=n("faa1"),h=n.n(f),v=(n("ac6a"),n("5df3"),n("4f7f"),function(e){function t(e){var n;Object(c["a"])(this,t),n=Object(u["a"])(this,Object(s["a"])(t).call(this)),e||(e=document),n.targetSet=new Set;var i=n.mouseUp.bind(Object(d["a"])(n)),a=n.mouseMove.bind(Object(d["a"])(n)),o=n.mouseDown.bind(Object(d["a"])(n)),r=n.click.bind(Object(d["a"])(n));return e.addEventListener("mouseup",i),e.addEventListener("mousemove",a),e.addEventListener("click",r),e.addEventListener("mousedown",o),n}return Object(l["a"])(t,e),Object(r["a"])(t,[{key:"addListenTarget",value:function(e){this.targetSet.add(e)}},{key:"deleteListenTarget",value:function(e){this.targetSet.delete(e)}},{key:"mouseUp",value:function(e){this.targetSet.forEach(function(t){t.mouseUp&&"function"===typeof t.mouseUp&&t.mouseUp(e)})}},{key:"mouseMove",value:function(e){this.targetSet.forEach(function(t){t.mouseMove&&"function"===typeof t.mouseMove&&t.mouseMove(e)})}},{key:"mouseDown",value:function(e){this.targetSet.forEach(function(t){t.mouseDown&&"function"===typeof t.mouseDown&&t.mouseDown(e)})}},{key:"click",value:function(e){this.targetSet.forEach(function(t){t.click&&"function"===typeof t.click&&t.click(e)})}}]),t}(h.a)),m=(n("f400"),function(){function e(){var t=this;Object(c["a"])(this,e),this.keyDownMap=new Map,this.keyDownSet=new Set,this.checkKeys=new Set,this.keys={a:65,b:66,c:67,d:68,ctr:17,e:69,s:83,w:87,command:91,option:18,shift:16},this.initCheckKey(),document.addEventListener("keydown",function(e){t.checkKeys.has(e.keyCode)&&t.keyDownSet.add(e.keyCode)}),document.addEventListener("keyup",function(e){t.keyDownSet.delete(e.keyCode)})}return Object(r["a"])(e,[{key:"initCheckKey",value:function(){for(var e in this.keys)this.checkKeys.add(this.keys[e])}},{key:"checkKeysDown",value:function(e){for(var t=!0,n=0;n<e.length;n++){var i=e[n];if(!this.keys[i])return!1;var a=this.keys[i];if(!this.keyDownSet.has(a))return t=!1,t}return t}}]),e}()),p=new m,b={eventOffsetDom:function(e,t){var n=t.getBoundingClientRect(),i=e.clientX,a=e.clientY;return{x:i-n.left,y:a-n.top}}},y="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",k=function(){for(var e=20,t=y.length,n=[],i=0;i<e;i++)n[i]=y.charAt(Math.random()*t);return n.join("")},g=k,O=function(e){function t(e,n,i,a){var o;return Object(c["a"])(this,t),o=Object(u["a"])(this,Object(s["a"])(t).call(this)),o.uuid=e||g(),o.startNode=n,o.endNode=i,o.type=a,o}return Object(l["a"])(t,e),t}(h.a),j={ctx:null,canvasRender:null},w=function(e){function t(e,n,i,a,o,r){var d;return Object(c["a"])(this,t),d=Object(u["a"])(this,Object(s["a"])(t).call(this)),d.uuid=e||g(),d.x=i,d.y=a,d.r=o,d.type=n,d.label=r||"默认值",d.directOutEdges=[],d.directInEdges=[],d}return Object(l["a"])(t,e),Object(r["a"])(t,[{key:"linkToTheNode",value:function(e,t){var n=new O(null,this,e,t),i=this.findSameEdgeAndTargetNode(t,e);i||(this.directOutEdges.push(n),e.directInEdges.push(n))}},{key:"findSameEdgeAndTargetNode",value:function(e,t){for(var n=0;n<this.directOutEdges.length;n++){var i=this.directOutEdges[n];if(e===i.edgeType){var a=i.endNode;if(t===a&&t.uuid===a.uuid)return t}}return null}},{key:"render",value:function(e){var t=j.canvasRender;t&&t.renderNode(this)}}]),t}(h.a),x=function(){function e(){Object(c["a"])(this,e),this.nodeMap=new Map,this.edgeMap=new Map}return Object(r["a"])(e,[{key:"tick",value:function(e){this.nodeMap.forEach(function(e,t){j.canvasRender&&e.render(j.canvasRender)})}}]),e}(),S=new x,E=function(e){function t(){return Object(c["a"])(this,t),Object(u["a"])(this,Object(s["a"])(t).call(this))}return Object(l["a"])(t,e),Object(r["a"])(t,[{key:"addNodeAtPosition",value:function(e,t){var n=new w(null,null,e,t,15);S.nodeMap.set(n.uuid,n)}}]),t}(h.a),D=new E,M=(n("6c7b"),function(){function e(t){Object(c["a"])(this,e),this.context=t.getContext("2d"),this.ratio=this.getPixelRatio(this.context)}return Object(r["a"])(e,[{key:"getPixelRatio",value:function(e){var t=e.backingStorePixelRatio||e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/t}},{key:"renderNode",value:function(e){this.context.save(),this.context.beginPath(),this.context.translate(e.x,e.y),this.context.arc(0,0,e.r/2,0,2*Math.PI),this.context.fill(),this.context.restore()}}]),e}()),T=function(){function e(){Object(c["a"])(this,e),this._targetTickSet=new Set,this._targetTickSet.add(S)}return Object(r["a"])(e,[{key:"addTickTarget",value:function(e){this._targetTickSet.add(e)}},{key:"deleteTickTarget",value:function(e){this._targetTickSet.delete(e)}},{key:"tick",value:function(e){this._targetTickSet.forEach(function(t){t.tick&&"function"===typeof t.tick&&t.tick(e)})}}]),e}(),P=new T,R=function(e){function t(e,n){var i;return Object(c["a"])(this,t),i=Object(u["a"])(this,Object(s["a"])(t).call(this)),i.offset=n.offset,i.container=e,i.data=n,i.createMenu(),i}return Object(l["a"])(t,e),Object(r["a"])(t,[{key:"createMenu",value:function(){var e=this;this.div=document.createElement("div"),this.div.style.width="60px",this.div.style.height=14*this.data.menuData.length+"px",this.div.style.lineHeight="14px",this.div.style.fontSize="12px",this.div.style.textAlign="left",this.div.style.position="absolute",this.div.style.left=this.offset.left+"px",this.div.style.top=this.offset.top+"px";for(var t=function(t){var n=document.createElement("div");n.style.background="orange",n.style.borderBottom="1px solid gray",n.innerText=e.data.menuData[t].label;var i=e;e.data.menuData[t].command;n.onclick=function(){i.emit("menuCommand",i.data.menuData[t].command)},e.div.appendChild(n)},n=0;n<this.data.menuData.length;n++)t(n);this.container.appendChild(this.div)}},{key:"dispose",value:function(){this.container.removeChild(this.div)}}]),t}(h.a),_=function(e){function t(e,n){var i;return Object(c["a"])(this,t),i=Object(u["a"])(this,Object(s["a"])(t).call(this)),i.container=n.container,i.canvas=e,i.canvasEventer=new v(e),i.canvasEventer.addListenTarget(Object(d["a"])(i)),j.canvasRender=new M(e),i}return Object(l["a"])(t,e),Object(r["a"])(t,[{key:"mouseMove",value:function(e){}},{key:"mouseDown",value:function(e){if(p.checkKeysDown(["command"])){var t=b.eventOffsetDom(e,this.canvas);D.addNodeAtPosition(t.x,t.y)}}},{key:"mouseUp",value:function(e){}},{key:"click",value:function(e){if(p.checkKeysDown(["option"])){console.log("option add");var t=b.eventOffsetDom(e,this.canvas);this.menu&&this.menu.dispose(),this.menu=new R(this.container,{offset:{left:t.x,top:t.y},menuData:[{label:"11111",command:"nice"},{label:"11111",command:"nice"},{label:"11111",command:"nice"},{label:"11111",command:"nice"},{label:"11111",command:"nice"}]}),this.menu.on("menuCommand",function(e){console.log(e)})}}}]),t}(h.a),C=0;requestAnimationFrame(function e(t){var n=t-C;P.tick(function(e){return Math.round(e*n/1e3)}),C=t,requestAnimationFrame(e)});var A={name:"app",methods:{},mounted:function(){var e=document.getElementById("canvas");e.setAttribute("width",document.body.offsetWidth),e.setAttribute("height",window.innerHeight);var t=document.getElementById("app");new _(e,{container:t})},components:{}},N=A,L=(n("034f"),n("2877")),B=Object(L["a"])(N,a,o,!1,null,null,null),K=B.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(K)}}).$mount("#app")},"64a9":function(e,t,n){}});
//# sourceMappingURL=app.aa930339.js.map
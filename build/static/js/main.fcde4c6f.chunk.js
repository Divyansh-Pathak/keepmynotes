(this["webpackJsonpkeeper-app-part-2-starting"]=this["webpackJsonpkeeper-app-part-2-starting"]||[]).push([[0],{39:function(e,t,n){e.exports=n(51)},51:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(6),c=n.n(r),u=n(35),o=n(21);var i=function(){return l.a.createElement("div",null,l.a.createElement("header",null,l.a.createElement("h1",null,"Keeper")))},m=(new Date).getFullYear();var E=function(){return l.a.createElement("div",null,l.a.createElement("footer",null,l.a.createElement("p",null,"Copyright@",m)))},p=n(32),f=n.n(p);var s=function(e){return l.a.createElement("div",{className:"note"},l.a.createElement("h1",null,e.title),l.a.createElement("p",null,e.content),l.a.createElement("button",{onClick:function(){e.onDelete(e.id)}},l.a.createElement(f.a,null)))},v=n(27),d=n(34),b=n.n(d),h=n(68),j=n(69);var k=function(e){var t=Object(a.useState)(!1),n=Object(o.a)(t,2),r=n[0],c=n[1],u=Object(a.useState)({title:"",content:""}),i=Object(o.a)(u,2),m=i[0],E=i[1];function p(e){var t=e.target,n=t.name,a=t.value;E((function(e){return Object(v.a)(Object(v.a)({},e),{},{[n]:a})}))}return l.a.createElement("div",null,l.a.createElement("form",{className:"create-note"},r&&l.a.createElement("input",{name:"title",onChange:p,value:m.title,placeholder:"Title"}),l.a.createElement("textarea",{name:"content",onClick:function(){c(!0)},onChange:p,value:m.content,placeholder:"Take a note...",rows:r?3:1}),l.a.createElement(j.a,{in:r},l.a.createElement(h.a,{onClick:function(t){e.onAdd(m),E({title:"",content:""}),t.preventDefault()}},l.a.createElement(b.a,null)))))};var O=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1];function c(e){r((function(t){return t.filter((function(t,n){return n!==e}))}))}return l.a.createElement("div",null,l.a.createElement(i,null),l.a.createElement(k,{onAdd:function(e){r((function(t){return[].concat(Object(u.a)(t),[e])}))}}),n.map((function(e,t){return l.a.createElement(s,{key:t,id:t,title:e.title,content:e.content,onDelete:c})})),l.a.createElement(E,null))};c.a.render(l.a.createElement(O,null),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.fcde4c6f.chunk.js.map
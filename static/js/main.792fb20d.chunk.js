(this["webpackJsonpreact-website"]=this["webpackJsonpreact-website"]||[]).push([[0],{40:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),r=n(11),a=n.n(r),s=(n(40),n(33)),j=n(19),o=n.p+"static/media/logo.890716d5.jpg",l=n(2),u=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)("img",{src:o,alt:"logo",width:"70",height:"50"}),Object(l.jsx)("h1",{children:"Note"})]})})},b=function(){var e=(new Date).getFullYear();return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("footer",{children:Object(l.jsxs)("p",{children:["copyright \xa9 ",e]})})})},O=n(23),d=n(26),h=n(63),x=n(31),f=n.n(x),m=function(e){var t=Object(c.useState)(!1),n=Object(j.a)(t,2),i=n[0],r=n[1],a=Object(c.useState)({title:"",content:""}),s=Object(j.a)(a,2),o=s[0],u=s[1],b=function(e){var t=e.target,n=t.name,c=t.value;u((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(O.a)({},n,c))}))};return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"main_note",children:Object(l.jsxs)("form",{children:[i?Object(l.jsx)("input",{type:"text",name:"title",value:o.title,onChange:b,placeholder:"Title",autoComplete:"off"}):null,Object(l.jsx)("textarea",{rows:"",column:"",name:"content",value:o.content,onChange:b,placeholder:"write a note...",onClick:function(){r(!0)},onDoubleClick:function(){r(!1)}}),i?Object(l.jsx)(h.a,{onClick:function(){e.passNote(o),u({title:"",content:""})},children:Object(l.jsx)(f.a,{className:"plus_sign"})}):null]})})})},g=n(32),p=n.n(g),v=function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"note",children:[Object(l.jsx)("h1",{children:e.title}),Object(l.jsx)("br",{}),Object(l.jsxs)("p",{children:[" ",e.content]}),Object(l.jsx)("button",{className:"btn",onClick:function(){e.deleteItem(e.id)},children:Object(l.jsx)(p.a,{class:"deleteIcon"})})]})})},C=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],i=t[1],r=function(e){i((function(t){return t.filter((function(t,n){return n!==e}))}))};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(u,{}),Object(l.jsx)(m,{passNote:function(e){i((function(t){return[].concat(Object(s.a)(t),[e])}))}}),n.map((function(e,t){return Object(l.jsx)(v,{id:t,title:e.title,content:e.content,deleteItem:r},t)})),Object(l.jsx)(b,{})]})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),r(e),a(e)}))};a.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(C,{})}),document.getElementById("root")),F()}},[[48,1,2]]]);
//# sourceMappingURL=main.792fb20d.chunk.js.map
(this["webpackJsonpddns-over-html"]=this["webpackJsonpddns-over-html"]||[]).push([[0],[,,function(e){e.exports=JSON.parse('{"a":"QnBSW7/4g9zlWUMPPG4fyw==","c":"QTWUmf/Tu4/+M0+Of1bMgQ==","b":"dLW0jr5nSRNDTnbYFKq29g=="}')},,function(e,t,n){e.exports={label:"input_label__na2Zl",input:"input_input__1IAcy"}},,function(e,t,n){e.exports={app:"app_app__cewju",form:"app_form__lnJUg"}},,,,function(e,t,n){e.exports={button:"button_button__3_GL1"}},,,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(9),s=n.n(a),o=(n(16),n(8)),l=n(4),i=n.n(l),u=n(3),p=n.n(u),b=n(0);var d=function(e){var t=e.type,n=e.label,c=e.className,r=e.value,a=e.onChange;return n?Object(b.jsxs)("label",{className:i.a.label,children:[n,Object(b.jsx)("input",{type:t,className:p()(i.a.input,c),value:r,onChange:a})]}):Object(b.jsx)("input",{className:p()(i.a.input,c),value:r,onChange:a})},j=n(10),h=n.n(j);var f=function(e){var t=e.className,n=e.children,c=e.onClick;return Object(b.jsx)("button",{className:p()(h.a.button,t),onClick:c,children:n})},x=n(6),O=n.n(x),m=n(2),v=n(7),y=n.n(v),g=n(11);function C(){return(C=Object(g.a)(y.a.mark((function e(t,n){var c,r,a,s,o,l,i,u;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.ciphertext,r=n.salt,a=n.iv,s=new TextEncoder,o=new TextDecoder,console.log("Generating pbkdf2 key..."),e.next=6,crypto.subtle.importKey("raw",s.encode(t),{name:"PBKDF2"},!1,["deriveBits","deriveKey"]);case 6:return l=e.sent,console.log("Generated pbkdf2 key..."),console.log("Generating encryption key..."),e.next=11,crypto.subtle.deriveKey({name:"PBKDF2",salt:Uint8Array.from(atob(r),(function(e){return e.charCodeAt(0)})),iterations:1e5,hash:"SHA-256"},l,{name:"AES-CBC",length:256},!0,["decrypt"]);case 11:return i=e.sent,console.log("Generated AES-CBC key"),console.log("Decrypting IP..."),e.next=16,crypto.subtle.decrypt({name:"AES-CBC",iv:Uint8Array.from(atob(a),(function(e){return e.charCodeAt(0)}))},i,Uint8Array.from(atob(c),(function(e){return e.charCodeAt(0)})));case 16:return u=e.sent,console.log("IP decrypted"),e.abrupt("return",o.decode(u));case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1],a=Object(c.useCallback)((function(e){var t=e.target.value;r(t)}),[r]),s=Object(c.useState)(null),l=Object(o.a)(s,2),i=l[0],u=l[1],p=Object(c.useCallback)((function(){(function(e,t){return C.apply(this,arguments)})(n,{ciphertext:m.a,salt:m.c,iv:m.b}).then((function(e){return u(e)})),r("")}),[n,u,r]);return Object(b.jsxs)("div",{className:O.a.app,children:[Object(b.jsx)("h1",{children:"DDNS Over HTML"}),Object(b.jsx)("h2",{children:"Ciphertext"}),Object(b.jsx)("p",{children:m.a}),Object(b.jsx)("h2",{children:"Salt"}),Object(b.jsx)("p",{children:m.c}),Object(b.jsx)("h2",{children:"IV"}),Object(b.jsx)("p",{children:m.b}),Object(b.jsxs)("div",{className:O.a.form,children:[Object(b.jsx)(d,{type:"password",className:"",label:"Password",value:n,onChange:a}),Object(b.jsx)(f,{className:"",onClick:p,children:"Decrypt"})]}),Object(b.jsx)("h2",{children:"IP"}),Object(b.jsx)("p",{children:i||"N/A"})]})}var k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(_,{})}),document.getElementById("root")),k()}],[[19,1,2]]]);
//# sourceMappingURL=main.9b57627a.chunk.js.map
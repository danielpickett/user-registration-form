(this["webpackJsonpuser-registration-example"]=this["webpackJsonpuser-registration-example"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),c=n(5),s=n.n(c),i=(n(11),n(12),n(0)),o=function(e){var t=e.label,n=e.value,a=e.name,r=e.touched,c=e.valid,s=e.onChange,o=e.onBlur,u=r&&""===n?"required":""===n||c?Object(i.jsx)(i.Fragment,{children:"\xa0"}):"Invalid ".concat(t.toLowerCase());return Object(i.jsxs)("div",{className:"TextInput",children:[Object(i.jsx)("label",{className:"TextInput__label",htmlFor:a,children:t}),Object(i.jsx)("input",{className:"TextInput__input",id:a,type:"text",value:n,onChange:function(e){return s(e.target.value,a)},onBlur:function(){return o(a)}}),Object(i.jsx)("span",{className:"TextInput__message",children:u})]})},u=n(6),l=n(3),b=n(1),m=(n(14),[{name:"firstName",label:"First name",regex:void 0},{name:"lastName",label:"Last name",regex:void 0},{name:"npiNumber",label:"NPI number",regex:/^[0-9]*$/},{name:"businessAddress",label:"Business address",regex:void 0},{name:"phoneNumber",label:"Phone number",regex:/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im},{name:"email",label:"Email",regex:/(.+)@(.+){2,}\.(.+){2,}/}]),j=m.reduce((function(e,t){return Object(b.a)(Object(b.a)({},e),{},Object(l.a)({},t.name,{value:"",touched:!1}))}),{}),d=function(){var e=Object(a.useState)(j),t=Object(u.a)(e,2),n=t[0],r=t[1],c=function(e,t){return r((function(n){return Object(b.a)(Object(b.a)({},n),{},Object(l.a)({},t,Object(b.a)(Object(b.a)({},n[t]),{},{value:e})))}))},s=function(e){r((function(t){return Object(b.a)(Object(b.a)({},t),{},Object(l.a)({},e,Object(b.a)(Object(b.a)({},t[e]),{},{touched:!0})))}))},d=function(e,t){return""!==e&&(!t||!!t.test(e))};console.log("state",n);var x=m.some((function(e){var t=e.regex,a=n[e.name].value;return!d(a,t)}));return console.log("isSubmitDisabled",x),Object(i.jsxs)("div",{className:"RegistrationForm",children:[Object(i.jsx)("h1",{className:"RegistrationForm__heading",children:"Provider Registration"}),m.map((function(e){var t=n[e.name];return Object(i.jsx)(o,{label:e.label,name:e.name,value:t.value,onChange:c,valid:d(t.value,e.regex),touched:t.touched,onBlur:s},e.name)})),Object(i.jsx)("button",{className:"RegistrationForm__button".concat(x?" RegistrationForm__button--is-disabled":""),type:"button",onClick:function(){console.log(n)},children:"Submit Registration"})]})},x=(n(15),n(16),function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)("div",{className:"App__form",children:Object(i.jsx)(d,{})})})});s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(x,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.68fc3ac0.chunk.js.map
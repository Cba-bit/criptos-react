(this.webpackJsonpcriptomonedas=this.webpackJsonpcriptomonedas||[]).push([[0],{26:function(n,e,t){},48:function(n,e,t){},49:function(n,e,t){"use strict";t.r(e);var r=t(0),c=t(1),a=t.n(c),o=t(18),i=t.n(o),s=(t(26),t(6)),u=t.n(s),l=t(7),d=t(4),b=t(2),j=t(3);function f(){var n=Object(b.a)(["\n    width: 100%;\n    display: block;\n    padding: 1rem;\n    -webkit-appearance: none;\n    border-radius: 10px;\n    border: none;\n    font-size: 1.2rem;\n"]);return f=function(){return n},n}function p(){var n=Object(b.a)(["\n    font-family: 'Bebas Neue', cursive;\n    color: #fff;\n    text-transform: uppercase;\n    font-weight: bold;\n    font-size: 2.4rem;\n    margin-top: 2rem;\n    display: block;\n"]);return p=function(){return n},n}var m=j.a.label(p()),O=j.a.select(f()),x=function(n,e,t){var a=Object(c.useState)(e),o=Object(d.a)(a,2),i=o[0],s=o[1];return[i,function(){return Object(r.jsxs)(c.Fragment,{children:[Object(r.jsx)(m,{children:n}),Object(r.jsxs)(O,{onChange:function(n){return s(n.target.value)},value:i,children:[Object(r.jsx)("option",{value:"",children:"- Seleccione -"}),t.map((function(n){return Object(r.jsx)("option",{value:n.codigo,children:n.nombre},n.codigo)}))]})]})},s]};function h(){var n=Object(b.a)(["\n    width: 100%;\n    display: block;\n    padding: 1rem;\n    -webkit-appearance: none;\n    border-radius: 10px;\n    border: none;\n    font-size: 1.2rem;\n"]);return h=function(){return n},n}function v(){var n=Object(b.a)(["\n    font-family: 'Bebas Neue', cursive;\n    color: #fff;\n    text-transform: uppercase;\n    font-weight: bold;\n    font-size: 2.4rem;\n    margin-top: 2rem;\n    display: block;\n"]);return v=function(){return n},n}var g=j.a.label(v()),k=j.a.select(h()),y=function(n,e,t){var a=Object(c.useState)(e),o=Object(d.a)(a,2),i=o[0],s=o[1];return[i,function(){return Object(r.jsxs)(c.Fragment,{children:[Object(r.jsx)(g,{children:n}),Object(r.jsxs)(k,{onChange:function(n){return s(n.target.value)},value:i,children:[Object(r.jsx)("option",{value:"",children:"- Seleccione -"}),t.map((function(n){return Object(r.jsx)("option",{value:n.CoinInfo.Name,children:n.CoinInfo.FullName},n.CoinInfo.Id)}))]})]})},s]},w=t(8),S=t.n(w);function C(){var n=Object(b.a)(["\n    background-color: #b7322c;\n    padding: 1rem;\n    color: #fff;\n    font-size: 30px;\n    text-transform: uppercase;\n    font-weight: bold;\n    text-align: center;\n    font-family: 'Bebas Neue', cursive;\n"]);return C=function(){return n},n}var E=j.a.p(C()),z=function(n){var e=n.mensaje;return Object(r.jsx)(E,{children:e})};function D(){var n=Object(b.a)(["\n    margin-top: 20px;\n    margin-bottom: 15px;\n    font-weight: bold;\n    font-size: 20px;\n    padding: 10px;\n    background-color: #66adfe;\n    border: none;\n    width: 100%;\n    border-radius: 10px;\n    color: #fff;\n    transition: background-color 0.3s ease;\n\n    &:hover {\n        background-color: #326ac0;\n        cursor: pointer;\n    }\n"]);return D=function(){return n},n}var A=j.a.input(D()),I=function(n){var e=n.setMoneda,t=n.setCriptomoneda,a=Object(c.useState)([]),o=Object(d.a)(a,2),i=o[0],s=o[1],b=Object(c.useState)(!1),j=Object(d.a)(b,2),f=j[0],p=j[1],m=x("Elige tu Moneda","",[{codigo:"USD",nombre:"Dolar EEUU"},{codigo:"EUR",nombre:"Euro"},{codigo:"ARS",nombre:"Peso Argentino"},{codigo:"GBP",nombre:"Libra Esterlina"}]),O=Object(d.a)(m,2),h=O[0],v=O[1],g=y("Elige tu Criptomoneda","",i),k=Object(d.a)(g,2),w=k[0],C=k[1];Object(c.useEffect)((function(){(function(){var n=Object(l.a)(u.a.mark((function n(){var e;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD",n.next=3,S.a.get("https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD");case 3:e=n.sent,s(e.data.Data);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[]);return Object(r.jsxs)("form",{onSubmit:function(n){n.preventDefault(),""!==h&&""!==w?(p(!1),e(h),t(w)):p(!0)},children:[f?Object(r.jsx)(z,{mensaje:"Todos los campos son obligatorios"}):null,Object(r.jsx)(v,{}),Object(r.jsx)(C,{}),Object(r.jsx)(A,{type:"submit",value:"Calcular"})]})},P=t.p+"static/media/cryptomonedas.51f1d2ed.png";function N(){var n=Object(b.a)(["\n    font-size: 30px;\n    span {\n        font-weight: bold;\n    }\n"]);return N=function(){return n},n}function U(){var n=Object(b.a)(["\n    font-size: 18px;\n\n    span {\n        font-weight: bold;\n    }\n"]);return U=function(){return n},n}function B(){var n=Object(b.a)(["\n    color: #fff;\n    font-family: Arial, Helvetica, sans-serif;\n"]);return B=function(){return n},n}var F=j.a.div(B()),T=j.a.p(U()),H=j.a.span(N()),L=function(n){var e=n.resultado;return 0===Object.keys(e).length?null:(console.log(e),Object(r.jsxs)(F,{children:[Object(r.jsxs)(H,{children:["El precio es: ",Object(r.jsx)("span",{children:e.PRICE})]}),Object(r.jsxs)(T,{children:["Precio m\xe1s alto del d\xeda: ",Object(r.jsx)("span",{children:e.HIGHDAY})]}),Object(r.jsxs)(T,{children:["El m\xe1s bajo del d\xeda: ",Object(r.jsx)("span",{children:e.LOWDAY})]}),Object(r.jsxs)(T,{children:["Variaci\xf3n \xfaltimas 24HS:"," ",Object(r.jsxs)("span",{children:[e.CHANGEPCT24HOUR," %"]})]}),Object(r.jsxs)(T,{children:["\xdaltima actualizaci\xf3n: ",Object(r.jsx)("span",{children:e.LASTUPDATE})]})]}))},M=(t(48),function(){return Object(r.jsxs)("div",{class:"sk-chase",children:[Object(r.jsx)("div",{class:"sk-chase-dot"}),Object(r.jsx)("div",{class:"sk-chase-dot"}),Object(r.jsx)("div",{class:"sk-chase-dot"}),Object(r.jsx)("div",{class:"sk-chase-dot"}),Object(r.jsx)("div",{class:"sk-chase-dot"}),Object(r.jsx)("div",{class:"sk-chase-dot"})]})});function R(){var n=Object(b.a)(["\n    font-family: 'Bebas Neue', cursive;\n    color: #fff;\n    text-align: left;\n    font-weight: 700;\n    font-size: 50px;\n    margin-bottom: 50px;\n    margin-top: 80px;\n\n    &::after {\n        content: '';\n        width: 100px;\n        height: 6px;\n        background-color: #66a2fe;\n        display: block;\n    }\n"]);return R=function(){return n},n}function G(){var n=Object(b.a)(["\n    max-width: 100%;\n    margin-top: 5rem;\n"]);return G=function(){return n},n}function Y(){var n=Object(b.a)(["\n    max-width: 900px;\n    margin: -45px auto;\n    @media (min-width: 992px) {\n        display: grid;\n        grid-template-columns: repeat(2, 1fr);\n        column-gap: 2 rem;\n    }\n"]);return Y=function(){return n},n}var J=j.a.div(Y()),V=j.a.img(G()),W=j.a.h1(R());var q=function(){var n=Object(c.useState)(""),e=Object(d.a)(n,2),t=e[0],a=e[1],o=Object(c.useState)(""),i=Object(d.a)(o,2),s=i[0],b=i[1],j=Object(c.useState)({}),f=Object(d.a)(j,2),p=f[0],m=f[1],O=Object(c.useState)(!1),x=Object(d.a)(O,2),h=x[0],v=x[1];Object(c.useEffect)((function(){(function(){var n=Object(l.a)(u.a.mark((function n(){var e,r;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(""!==t){n.next=2;break}return n.abrupt("return");case 2:return e="https://min-api.cryptocompare.com/data/pricemultifull?fsyms=".concat(s,"&tsyms=").concat(t),n.next=5,S.a.get(e);case 5:r=n.sent,v(!0),setTimeout((function(){v(!1),m(r.data.DISPLAY[s][t])}),1500);case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[t,s]);var g=h?Object(r.jsx)(M,{}):Object(r.jsx)(L,{resultado:p});return Object(r.jsxs)(J,{className:"App",children:[Object(r.jsx)("div",{children:Object(r.jsx)(V,{src:P,alt:"imagen cripto"})}),Object(r.jsxs)("div",{children:[Object(r.jsx)(W,{children:"Cotiza Criptomonedas al Instante"}),Object(r.jsx)(I,{setMoneda:a,setCriptomoneda:b}),g]})]})},K=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,50)).then((function(e){var t=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,o=e.getTTFB;t(n),r(n),c(n),a(n),o(n)}))};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(q,{})}),document.getElementById("root")),K()}},[[49,1,2]]]);
//# sourceMappingURL=main.c48ec14f.chunk.js.map
(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],{10:function(t,n,c){"use strict";c.r(n);var e=c(1),i=c(4),r=c.n(i),o=c(2),u=c(0),j="x",b=function(){var t=Object(e.useState)(["..","..","..","..","..","..","..","..",".."]),n=Object(o.a)(t,2),c=n[0],i=n[1],r=Object(e.useState)([!0,!0,!0,!0,!0,!0,!0,!0,!0]),b=Object(o.a)(r,2),s=b[0],l=(b[1],Object(e.useState)("Ongoing play")),d=Object(o.a)(l,2),O=d[0],x=d[1],a=function(){var t=c;return".."!==t[0]&&t[0]===t[1]&&t[1]===t[2]?t[0]:".."!==t[3]&&t[3]===t[4]&&t[4]===t[5]?t[3]:".."!==t[6]&&t[6]===t[7]&&t[7]===t[8]?t[6]:".."!==t[0]&&t[0]===t[3]&&t[3]===t[6]?t[0]:".."!==t[1]&&t[1]===t[4]&&t[4]===t[7]?t[1]:".."!==t[2]&&t[2]===t[5]&&t[5]===t[8]?t[2]:".."!==t[0]&&t[0]===t[4]&&t[4]===t[8]?t[0]:".."!==t[2]&&t[2]===t[4]&&t[4]===t[6]?t[2]:void 0},h=function(t){if("x"===a()&&x("player x wins!"),"o"===a()&&x("player o wins!"),!0===s[t]){var n=[];return n=n.concat(c.slice(0,t),[j],c.slice(t+1,9)),j="x"===j?"o":"x",s[t]=!1,n}return c};return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{onClick:function(){return i(h(0))},children:c[0]}),Object(u.jsx)("button",{onClick:function(){return i(h(1))},children:c[1]}),Object(u.jsx)("button",{onClick:function(){return i(h(2))},children:c[2]})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{onClick:function(){return i(h(3))},children:c[3]}),Object(u.jsx)("button",{onClick:function(){return i(h(4))},children:c[4]}),Object(u.jsx)("button",{onClick:function(){return i(h(5))},children:c[5]})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{onClick:function(){return i(h(6))},children:c[6]}),Object(u.jsx)("button",{onClick:function(){return i(h(7))},children:c[7]}),Object(u.jsx)("button",{onClick:function(){return i(h(8))},children:c[8]})]}),Object(u.jsx)("button",{children:O})]})};r.a.render(Object(u.jsx)(b,{}),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.0fef5f6e.chunk.js.map
(this.webpackJsonpToDosApp=this.webpackJsonpToDosApp||[]).push([[0],{10:function(e,c,n){},12:function(e,c,n){"use strict";n.r(c);var t=n(1),s=n.n(t),i=n(4),d=n.n(i),r=(n(9),n(3)),a=(n(10),n(0));function o(e){var c=["ToDoItem"];return e.checked&&c.push("done"),Object(a.jsxs)("div",{className:c.join(" "),children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:e.id}),Object(a.jsx)("input",{onChange:e.onChecked,type:"checkbox",checked:e.checked}),Object(a.jsx)("span",{children:e.message})]}),Object(a.jsx)("button",{onClick:e.onDelItem,children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})}function j(e){var c=e.ToDoItems.map((function(c){return Object(a.jsx)(o,{id:c.id,checked:c.checked,message:c.message,onChecked:function(){return e.onChecked(c.id)},onDelItem:function(){return e.onDelItem(c.id)}},c.id)}));return Object(a.jsx)("div",{className:"ToDoList",children:c})}var h=function(){var e=s.a.useState([{id:1,checked:!1,message:"\u0421\u0445\u043e\u0434\u0438\u0442\u044c \u0432 \u043c\u0430\u0433\u0430\u0437\u0438\u043d"},{id:2,checked:!1,message:"\u0414\u043e\u0434\u0435\u043b\u0430\u0442\u044c \u043f\u0440\u043e\u0435\u043a\u0442"},{id:3,checked:!1,message:"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0441\u0432\u043e\u0439 \u0431\u0438\u0442"},{id:4,checked:!1,message:"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0434\u0440\u0443\u0433\u0443"},{id:5,checked:!1,message:"\u0417\u0430\u043b\u0438\u0442\u044c \u043f\u0440\u043e\u0435\u043a\u0442 \u043d\u0430 GitHub"},{id:6,checked:!0,message:"\u0417\u0430\u043b\u0438\u0442\u044c \u043f\u0440\u043e\u0435\u043a\u0442 \u043d\u0430 GitHub"}]),c=Object(r.a)(e,2),n=c[0],t=c[1],i=s.a.useState(""),d=Object(r.a)(i,2),o=d[0],h=d[1],u=function(e){if(e.preventDefault(),o.trim()){var c=n.length;t(n.concat([{id:++c,checked:!1,message:o}]),n.map((function(e,c){return e.id=++c,e}))),h("")}};return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("header",{children:[Object(a.jsx)("h1",{children:"TODO List Experience Project (React)"}),Object(a.jsxs)("h2",{children:["\u0412\u0441\u0435\u0433\u043e \u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0445 \u0437\u0430\u043c\u0435\u0442\u043e\u043a: ",Object(a.jsx)("span",{children:function(){var e=0;for(var c in n)!1===n[c].checked&&e++;return 0===e&&(e="\u041d\u0435\u0442 \u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0445 \u0437\u0430\u043c\u0435\u0442\u043e\u043a"),e}()})]}),Object(a.jsx)("div",{className:"addItemContainer",children:Object(a.jsxs)("form",{onSubmit:u,children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u043c\u0435\u0442\u043a\u0443:"}),Object(a.jsx)("input",{onChange:function(e){return h(e.target.value)},maxLength:50,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043c\u0435\u0442\u043a\u0443",value:o}),Object(a.jsx)("p",{children:"*50 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432 \u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c"})]}),Object(a.jsx)("button",{onClick:u,type:"submit",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})})]}),Object(a.jsx)("article",{children:n.length?Object(a.jsx)(j,{ToDoItems:n,onChecked:function(e){t(n.map((function(c){return c.id===e&&(c.checked=!c.checked),c})))},onDelItem:function(e){n.splice(--e,1),t(n.map((function(e,c){return e.id=++c,e})))}}):Object(a.jsx)("p",{children:"\u0423 \u0412\u0430\u0441 \u043d\u0435\u0442 \u0437\u0430\u043c\u0435\u0442\u043e\u043a. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0445 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})})]})})};d.a.render(Object(a.jsx)(h,{}),document.getElementById("root"))},9:function(e,c,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.075e4e5a.chunk.js.map
(this.webpackJsonpToDosApp=this.webpackJsonpToDosApp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);n(0);var c=n(4),i=n.n(c),s=(n(14),n(15),n(9)),r=n(2),a="ADD-ITEM",d="DELETE-ITEM",o="CHECKED-ITEM",u="UPDATE-FIELD",j="UPDATE-COUNT",l={ToDos:[{id:1,checked:!1,message:"\u0421\u0445\u043e\u0434\u0438\u0442\u044c \u0432 \u043c\u0430\u0433\u0430\u0437\u0438\u043d"},{id:2,checked:!1,message:"\u0414\u043e\u0434\u0435\u043b\u0430\u0442\u044c \u043f\u0440\u043e\u0435\u043a\u0442"},{id:3,checked:!1,message:"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0441\u0432\u043e\u0439 \u0431\u0438\u0442"},{id:4,checked:!1,message:"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0434\u0440\u0443\u0433\u0443"},{id:5,checked:!1,message:"\u0417\u0430\u043b\u0438\u0442\u044c \u043f\u0440\u043e\u0435\u043a\u0442 \u043d\u0430 GitHub"},{id:6,checked:!0,message:"\u0417\u0430\u043b\u0438\u0442\u044c \u043f\u0440\u043e\u0435\u043a\u0442 \u043d\u0430 GitHub"}],fieldValue:"",activeLength:5},h=function(e){var t=0;for(var n in e)!1===e[n].checked&&t++;return 0===t&&(t="\u041d\u0435\u0442 \u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0445 \u0437\u0430\u043c\u0435\u0442\u043e\u043a"),t},b=function(){return{type:j}},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a:var n=e.ToDos.length;return Object(r.a)(Object(r.a)({},e),{},{ToDos:[].concat(Object(s.a)(e.ToDos),[{id:++n,checked:!1,message:e.fieldValue}]).filter((function(e){return""!==e.message.trim()})).map((function(e,t){return e.id=++t,e})),fieldValue:""});case d:return Object(r.a)(Object(r.a)({},e),{},{ToDos:e.ToDos.filter((function(e){return e.id!==t.itemID})).map((function(e,t){return e.id=++t,e}))});case o:return Object(r.a)(Object(r.a)({},e),{},{ToDos:e.ToDos.map((function(e){return e.id===t.itemID&&(e.checked=!e.checked),e}))});case u:return Object(r.a)(Object(r.a)({},e),{},{fieldValue:t.value});case j:var c=h(e.ToDos);return Object(r.a)(Object(r.a)({},e),{},{activeLength:c});default:return e}},f=n(3),m=n(1);function p(e){var t=["ToDoItem"];return e.checked&&t.push("done"),Object(m.jsxs)("div",{className:t.join(" "),children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{children:e.id}),Object(m.jsx)("input",{onChange:function(){return e.CheckedItenBtn(e.id)},type:"checkbox",checked:e.checked}),Object(m.jsx)("span",{children:e.message})]}),Object(m.jsx)("button",{onClick:function(){return e.DeleteItemBtn(e.id)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})}var D=Object(f.b)((function(e){return{ToDos:e.ToDos}}),(function(e){return{DeleteItemBtn:function(t){e({type:d,itemID:t}),e(b())},CheckedItenBtn:function(t){e({type:o,itemID:t}),e(b())}}}))((function(e){var t=e.ToDos.map((function(t){return Object(m.jsx)(p,{id:t.id,checked:t.checked,message:t.message,CheckedItenBtn:e.CheckedItenBtn,DeleteItemBtn:e.DeleteItemBtn},t.id)}));return Object(m.jsxs)("div",{className:"ToDoList",children:[0===e.ToDos.length?Object(m.jsx)("p",{children:"\u0423 \u0412\u0430\u0441 \u043d\u0435\u0442 \u0437\u0430\u043c\u0435\u0442\u043e\u043a. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0445 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}):null,t]})}));var v=Object(f.b)((function(e){return{fieldValue:e.fieldValue,activeLength:e.activeLength}}),(function(e){return{AddItemBtn:function(t){t.preventDefault(),e({type:a}),e(b())},UpdateField:function(t){e({type:u,value:t})}}}))((function(e){return Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"addItemContainer",children:[Object(m.jsxs)("h2",{children:["\u0412\u0441\u0435\u0433\u043e \u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0445 \u0437\u0430\u043c\u0435\u0442\u043e\u043a: ",Object(m.jsx)("span",{children:e.activeLength})]}),Object(m.jsxs)("form",{children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("span",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u043c\u0435\u0442\u043a\u0443:"}),Object(m.jsx)("input",{onChange:function(t){return e.UpdateField(t.target.value)},maxLength:50,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043c\u0435\u0442\u043a\u0443",value:e.fieldValue}),Object(m.jsx)("p",{children:"*50 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432 \u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c"})]}),Object(m.jsx)("button",{onClick:function(t){return e.AddItemBtn(t)},type:"submit",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})]}),Object(m.jsx)("article",{children:Object(m.jsx)(D,{})})]})})),x=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("h1",{children:"TODO List Experience Project (React)"}),Object(m.jsx)(v,{})]})})},g=n(8),T=Object(g.a)(O);i.a.render(Object(m.jsx)(f.a,{store:T,children:Object(m.jsx)(x,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.89999d3e.chunk.js.map
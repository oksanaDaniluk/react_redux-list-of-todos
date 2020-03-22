(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{13:function(t,e,n){t.exports=n(26)},25:function(t,e,n){},26:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(6),u=n(3),c=n.n(u),l=n(7),s=n(1),i=n.n(s),d=n(5),m=n(2),p="https://jsonplaceholder.typicode.com",f=function(t){return fetch(t).then((function(t){return t.json()}))},b=function(){var t=Object(d.a)(i.a.mark((function t(){var e,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f("".concat(p,"/todos"));case 2:return e=t.sent,t.next=5,f("".concat(p,"/users"));case 5:return n=t.sent,t.abrupt("return",e.map((function(t){return Object(m.a)({},t,{user:n.find((function(e){return e.id===t.userId}))})})));case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),E=n(4),O={isLoading:!1,todos:[],typeOfSort:""},y=Object(E.b)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"IS_LOADING":return Object(m.a)({},t,{isLoading:e.isLoading});case"SET_TODOS":return Object(m.a)({},t,{todos:e.todos});case"SET_SORT_TYPE":return Object(m.a)({},t,{typeOfSort:e.typeOfSort});default:return t}}),O),h=function(t){var e=t.todo,n=e.id,r=e.title,o=e.completed,u=e.user;return a.a.createElement("tr",null,a.a.createElement("th",null,n),a.a.createElement("th",null,null===u||void 0===u?void 0:u.name),a.a.createElement("th",null,r),a.a.createElement("th",null,o?"complete":"active"))},S=function(t){var e=t.todos;return a.a.createElement("table",{className:"table"},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"ID"),a.a.createElement("th",null,"User"),a.a.createElement("th",null,"Task"),a.a.createElement("th",null,"Status"))),a.a.createElement("tbody",null,e.map((function(t){return a.a.createElement(h,{key:t.id,todo:t})}))))},g=(n(25),{setIsLoadind:function(t){return{type:"IS_LOADING",isLoading:t}},setTodos:function(t){return{type:"SET_TODOS",todos:t}},setSortType:function(t){return{type:"SET_SORT_TYPE",typeOfSort:t}}}),T=Object(o.b)((function(t){return{isLoading:t.isLoading,todos:t.todos,typeOfSort:t.typeOfSort}}),g)((function(t){var e=t.isLoading,n=t.typeOfSort,o=t.todos,u=t.setIsLoadind,c=t.setTodos,s=t.setSortType,m=function(){var t=Object(d.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u(!0),t.next=3,b();case 3:return e=t.sent,c(e),t.abrupt("return",e);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=Object(r.useMemo)((function(){switch(n){case"title":return Object(l.a)(o).sort((function(t,e){return t.title.localeCompare(e.title)}));case"completed":return Object(l.a)(o).sort((function(t,e){return Number(e.completed)-Number(t.completed)}));case"user":return Object(l.a)(o).sort((function(t,e){return t.user.name.localeCompare(e.user.name)}));default:return o}}),[o,n]);return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"Dynamic list of TODOs"),0===o.length?a.a.createElement("button",{type:"button",disabled:e,onClick:m,className:"button"},e?a.a.createElement(a.a.Fragment,null,"Loading..."):a.a.createElement(a.a.Fragment,null,"Load Todos")):a.a.createElement(a.a.Fragment,null,a.a.createElement("button",{className:"button",type:"button",onClick:function(){return s("title")}},"sort by title"),a.a.createElement("button",{className:"button",type:"button",onClick:function(){s("completed"),console.log(n)}},"sort by status"),a.a.createElement("button",{className:"button",type:"button",onClick:function(){return s("user")}},"by user name"),a.a.createElement(S,{todos:p})))}));c.a.render(a.a.createElement(o.a,{store:y},a.a.createElement(T,null)),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.c5ee5e05.chunk.js.map
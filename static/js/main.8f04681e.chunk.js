(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(8),c=n.n(a),r=n(9),s=n(2),i=n(3),o=n(4),l=n(6),u=n(5),b=n(1),h=n.n(b),d=n(20),j=(n(14),n(0)),m=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleAllInputChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(s.a)({},a,c))},t.handleS=function(t){t.preventDefault()},t.handlePushContact=function(e){e.preventDefault(),""!==t.state.name.trim()&&t.props.onSubmit(t.state)},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(j.jsx)("div",{children:Object(j.jsxs)("form",{onSubmit:this.handlePushContact,children:[Object(j.jsxs)("label",{className:"label",children:["Name",Object(j.jsx)("input",{className:"input",value:e,onChange:this.handleAllInputChange,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(j.jsxs)("label",{className:"label",children:["Number",Object(j.jsx)("input",{className:"input",type:"tel",value:n,onChange:this.handleAllInputChange,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(j.jsx)("button",{children:"Add contact"})]})})}}]),n}(b.Component),f=m,p=(n(16),function(t){var e=t.f,n=t.onDeleteContacts;return Object(j.jsx)("ul",{className:"Contact__list",children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(j.jsxs)("li",{className:"Contact__item",children:[a,": ",c," ",Object(j.jsx)("button",{type:"button",onClick:function(){return n(e)},children:"delete"})]},e)}))})}),O=function(t){var e=t.filter,n=t.onChange;return Object(j.jsxs)("label",{children:["Find contacts by name",Object(j.jsx)("input",{type:"text",name:"filter",value:e,onChange:n})]})},C=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.handleAllInputChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(s.a)({},a,c))},t.formSubmitHandler=function(e){if(t.state.contacts.some((function(t){return t.name.includes(e.name)})))alert("".concat(e.name," is already in contacts"));else{var n={name:e.name,number:e.number,id:Object(d.a)()};t.setState({contacts:[].concat(Object(r.a)(t.state.contacts),[n])})}},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.getVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(f,{onSubmit:this.formSubmitHandler}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(O,{filter:t,onChange:this.handleAllInputChange}),Object(j.jsx)(p,{f:e,onDeleteContacts:this.deleteContact})]})}}]),n}(h.a.Component),v=C;n(17);c.a.render(Object(j.jsx)(v,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.8f04681e.chunk.js.map
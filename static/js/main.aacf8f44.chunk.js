(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n.n(a),c=n(6),s=n(4),i=n(5),o=n(8),u=n(7),b=n(1),h=n.n(b),l=n(16),d=n(0),j=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[],name:"",number:""},e.handleInputChange=function(t){e.setState({name:t.currentTarget.value})},e.handleNumbers=function(t){e.setState({number:t.currentTarget.value})},e.handlePushContact=function(){if(""!==e.state.name.trim()){var t={name:e.state.name,number:e.state.number};e.setState({contacts:[].concat(Object(c.a)(e.state.contacts),[t])})}},e.handleCreateList=function(){return Object(d.jsx)("ul",{children:e.state.contacts.map((function(e){return Object(d.jsxs)("li",{children:[e.name,": ",e.number]},Object(l.a)())}))})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Phonebook"}),Object(d.jsxs)("label",{children:[" ","Name",Object(d.jsx)("input",{value:t,onChange:this.handleInputChange,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(d.jsx)("br",{}),Object(d.jsxs)("label",{children:["Number",Object(d.jsx)("input",{type:"tel",value:n,onChange:this.handleNumbers,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{onClick:this.handlePushContact,children:"Add contact"}),Object(d.jsxs)("div",{children:["Contacts",this.handleCreateList()]})]})}}]),n}(h.a.Component),m=j;r.a.render(Object(d.jsx)(m,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.aacf8f44.chunk.js.map
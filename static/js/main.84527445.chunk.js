(this.webpackJsonpmyresume=this.webpackJsonpmyresume||[]).push([[0],{122:function(e,t,n){e.exports={slideRight:"Layout_slideRight__32R81",slideLeft:"Layout_slideLeft__20JBi",topBar:"Layout_topBar__3PUn9",menu:"Layout_menu__1Hev3",container:"Layout_container__xPKIa"}},123:function(e,t,n){e.exports={container:"Home_container__1enMm",fadeIn:"Home_fadeIn__2--xV",data:"Home_data__30Sdg",name:"Home_name__392Vl","tracking-in-contract-bck":"Home_tracking-in-contract-bck__1C4sg",title:"Home_title__Nq9Kt","swing-in-top-fwd":"Home_swing-in-top-fwd__3Jdc8"}},149:function(e,t,n){e.exports={link:"ALink_link__2YyjP",active:"ALink_active__3EozR",icon:"ALink_icon__2vutO"}},256:function(e,t,n){e.exports={linkedin:"Icons_linkedin__2JMc6","bounce-in-right":"Icons_bounce-in-right__1nZro",html:"Icons_html__3chjS","swing-in-top-fwd":"Icons_swing-in-top-fwd__JooKN",css:"Icons_css__10p9Q",javascript:"Icons_javascript__699yz",react:"Icons_react__1HOzy",reactnative:"Icons_reactnative__1ifau",redux:"Icons_redux__3QHNs",typescript:"Icons_typescript__109FA",bootstrap:"Icons_bootstrap__3i9aK",materialui:"Icons_materialui__1ICFV",delphi:"Icons_delphi__1dxPe",sqlserver:"Icons_sqlserver__3sjXC",mongodb:"Icons_mongodb__1u2ki",nodejs:"Icons_nodejs__2v5OZ",expressjs:"Icons_expressjs__1gcDJ",git:"Icons_git__3IH_F",github:"Icons_github__2sTkO",azure:"Icons_azure__3BoAZ"}},257:function(e,t,n){e.exports={container:"Portfolio_container__2HBc0",fadeIn:"Portfolio_fadeIn__2bjyJ",title:"Portfolio_title__10weY","swing-in-top-fwd":"Portfolio_swing-in-top-fwd__1SC6p"}},258:function(e,t,n){e.exports={container:"Components_container__eEdW6",fadeIn:"Components_fadeIn__2gKzI",title:"Components_title__1y73J","swing-in-top-fwd":"Components_swing-in-top-fwd__10bA2"}},373:function(e,t,n){e.exports={menuButton:"TopBar_menuButton__1BAvv",fadeIn:"TopBar_fadeIn__2WjuB"}},374:function(e,t,n){e.exports={ul:"Menu_ul__2mfcq"}},398:function(e,t,n){},556:function(e,t,n){"use strict";n.r(t);var s=n(7),o=n(0),i=n.n(o),c=n(15),a=n.n(c),r=(n(398),n(28)),l=n(590),m=n(148),d=n(102),u=n(122),j=n.n(u),p=n(373),h=n.n(p),b=n(578),_=n(579),g=n(248);function f(e){var t=e.isMenuClosed,n=void 0!==t&&t,o=e.toggleMenu;return Object(s.jsx)(g.a,{size:"medium",className:h.a.menuButton,onClick:function(){return o()},children:n?Object(s.jsx)(b.a,{fontSize:"default"}):Object(s.jsx)(_.a,{fontSize:"default"})})}var x=n(374),O=n.n(x),v=n(149),w=n.n(v),y=n(142);function k(e){var t=e.text,n=void 0===t?"":t,o=e.icon,i=void 0===o?"":o,c=e.borderRadius,a=void 0===c?"0px":c,r=e.onClick,l=e.linkRoute,m=void 0===l?"#":l,d=e.active,u=void 0!==d&&d;return Object(s.jsxs)(y.b,{style:{borderRadius:a},className:[w.a.link,u?w.a.active:""].join(" "),onClick:function(){return r?r():null},to:m,children:[Object(s.jsx)("i",{className:[w.a.icon,"material-icons"].join(" "),children:i}),Object(s.jsx)("div",{className:w.a.text,children:n})]})}var N=[{text:"Home",icon:"home",link:"/myresume/Home"},{text:"Resume",icon:"library_books",link:"/myresume/Resume"},{text:"Portfolio",icon:"work",link:"/myresume/Portfolio"},{text:"Components",icon:"group_work",link:"/myresume/Components"},{text:"This Page",icon:"build",link:"/myresume/Page"},{text:"Contact",icon:"contact_mail",link:"/myresume/Contact"}];function I(e){var t=e.toggleMenu,n=function(){return window.innerWidth<600&&t?t():void 0};return Object(s.jsx)("ul",{className:O.a.ul,children:N.map((function(e){return Object(s.jsx)("li",{children:Object(s.jsx)(k,{borderRadius:"50px",text:e.text,onClick:n,icon:e.icon,linkRoute:e.link})},e.text)}))})}function H(e){var t=e.children,n=Object(o.useState)(!0),i=Object(d.a)(n,2),c=i[0],a=i[1];Object(o.useEffect)((function(){return window.innerWidth<600?a(!0):a(!1),window.addEventListener("resize",(function(){window.innerWidth<600?a(!0):a(!1)})),window.removeEventListener("resize",(function(){window.innerWidth<600?a(!0):a(!1)}))}),[]);var r=function(){return a((function(e){return!e}))};return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{id:"topBar",className:j.a.topBar,children:Object(s.jsx)(f,{isMenuClosed:c,toggleMenu:r})}),Object(s.jsx)("div",{id:"menu",className:[j.a.menu,c?j.a.slideLeft:j.a.slideRight].join(" "),children:Object(s.jsx)(I,{toggleMenu:r})}),Object(s.jsx)("div",{id:"container",className:j.a.container,children:t})]})}var C=n(123),S=n.n(C),z=n(256),L=n.n(z),B=n(581),M=n(580),P=[{src:"https://developer.mozilla.org/es/docs/Web/HTML",className:"html",img:"/myresume/Home/html.png",alt:"HTML"},{src:"https://developer.mozilla.org/es/docs/Web/CSS",className:"css",img:"/myresume/Home/css.png",alt:"CSS"},{src:"https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/Qu%C3%A9_es_JavaScript",className:"javascript",img:"/myresume/Home/javascript.png",alt:"JavaScript"},{src:"https://reactjs.org/",className:"react",img:"/myresume/Home/react.png",alt:"React JS"},{src:"https://reactnative.dev/",className:"reactnative",img:"/myresume/Home/react-native.png",alt:"React Native"},{src:"https://redux.js.org/",className:"redux",img:"/myresume/Home/redux.png",alt:"React Redux"},{src:"https://www.typescriptlang.org/",className:"typescript",img:"/myresume/Home/typescript.png",alt:"TypeScript"},{src:"https://getbootstrap.com/",className:"bootstrap",img:"/myresume/Home/bootstrap.png",alt:"Bootstrap"},{src:"https://material-ui.com/",className:"materialui",img:"/myresume/Home/materialui.png",alt:"Material UI"},{src:"https://www.embarcadero.com/es/products/delphi",className:"delphi",img:"/myresume/Home/delphi.png",alt:"Delphi"},{src:"https://www.microsoft.com/es-es/sql-server/sql-server-2019",className:"sqlserver",img:"/myresume/Home/sqlserver.png",alt:"SQL Server"},{src:"https://www.mongodb.com/",className:"mongodb",img:"/myresume/Home/montodb.png",alt:"MongoDB"},{src:"https://nodejs.org/en/",className:"nodejs",img:"/myresume/Home/nodejs.png",alt:"Node JS"},{src:"https://expressjs.com/",className:"expressjs",img:"/myresume/Home/expressjs.png",alt:"Express JS"},{src:"https://git-scm.com/",className:"git",img:"/myresume/Home/git.png",alt:"Git"},{src:"https://github.com/",className:"github",img:"/myresume/Home/github.png",alt:"GitHub"},{src:"https://azure.microsoft.com/en-us/",className:"azure",img:"/myresume/Home/azure.png",alt:"Azure"}];function R(){return Object(s.jsxs)(M.a,{container:!0,className:S.a.container,children:[Object(s.jsx)(M.a,{container:!0,item:!0,xs:12,md:8,alignItems:"center",children:Object(s.jsxs)(M.a,{item:!0,className:S.a.data,children:[Object(s.jsx)("h1",{className:S.a.name,children:"Edward Pe\xf1a"}),Object(s.jsx)("h2",{className:S.a.title,children:"Movil - Web - DeskTop Developer"}),Object(s.jsx)(g.a,{size:"small",className:L.a.linkedin,onClick:function(){return window.open("https://www.linkedin.com/in/edward-abraham-pe\xf1a-espinal-176aa965","_blank")},children:Object(s.jsx)(B.a,{fontSize:"default"})})]})}),Object(s.jsx)(M.a,{container:!0,item:!0,xs:12,md:4,alignItems:"center",children:Object(s.jsx)(M.a,{item:!0,className:S.a.data,children:P.map((function(e){return Object(s.jsx)(g.a,{size:"medium",onClick:function(){return window.open(e.src,"_blank")},className:L.a[e.className],children:Object(s.jsx)("img",{src:e.img,alt:e.alt,width:"50",height:"50"})},e.alt)}))})})]})}var J=n(257),T=n.n(J);function F(){return Object(s.jsxs)("div",{className:T.a.container,children:[Object(s.jsx)("h1",{className:T.a.title,children:"Portfolio"}),Object(s.jsx)(M.a,{container:!0,spacing:1,children:Object(s.jsx)(M.a,{item:!0,xs:12,children:Object(s.jsx)("p",{children:"Welcome to my online portfolio. Here you can browse throught my projects, some personal and some working in companies."})})})]})}var A=n(258),E=n.n(A),W=n(249),q=n.n(W);function U(e){var t=e.data,n=void 0===t?[]:t,o=e.isLoading,i=void 0!==o&&o,c=e.setSelectedUser;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)(M.a,{item:!0,xs:12,children:[Object(s.jsx)("h2",{children:"Material Table"}),Object(s.jsx)("p",{children:"Material table is an easy to use, independient component that make use of the table component in Material UI framework. Normally I use this component for tables, because it have some build in useful features that help to use less code."}),Object(s.jsx)("p",{children:"All of the features in Material Table can be implemented without this component, but we would need to code more."})]}),Object(s.jsx)(M.a,{item:!0,xs:12,children:Object(s.jsx)(q.a,{title:"Users",columns:[{type:"string",title:"Name",field:"name"},{type:"string",title:"E-Mail",field:"email"}],data:n,options:{headerStyle:{color:"#800000",fontSize:"12px",fontWeight:"bold"},rowStyle:{fontSize:"12px"},grouping:!1,filtering:!0,paging:!0,exportButton:!0,search:!0,showTitle:!0,tableLayout:"auto",columnsButton:!0,sorting:!0,draggable:!0},actions:[{icon:"show_chart",tooltip:"Show Charts",onClick:function(e,t){return c(t)}}],isLoading:i})})]})}var D=n(378);function K(e){var t=e.data,n=e.selectedUser;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)(M.a,{item:!0,xs:12,children:[Object(s.jsx)("h2",{children:"React Chart JS"}),Object(s.jsx)("p",{children:"One of the most requested functionalities for an app is presenting information through charts."}),Object(s.jsx)("p",{children:"This is one example of graphics, using information of the selected user."})]}),Object(s.jsxs)(M.a,{item:!0,xs:12,children:[Object(s.jsx)("h3",{children:n?"".concat(n.name,"'s Todos"):"Please select user"}),Object(s.jsx)(D.Doughnut,{data:null!==t&&void 0!==t?t:{labels:["No Data"],datasets:[{data:[1]}]}})]})]})}var Q=n(379);function V(e){var t,n=e.selectedUser,o=Object(Q.a)({value:null!==(t=null===n||void 0===n?void 0:n.name)&&void 0!==t?t:"no user"}).inputRef;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)(M.a,{item:!0,xs:12,children:[Object(s.jsx)("h2",{children:"React Barcodes"}),Object(s.jsx)("p",{children:"I use this component for generating barcodes from the app. This is useful for companies that requires to label their products."})]}),Object(s.jsx)(M.a,{item:!0,xs:12,children:Object(s.jsx)("svg",{ref:o})})]})}function Z(){var e=Object(o.useState)(!1),t=Object(d.a)(e,2),n=t[0],i=t[1],c=Object(o.useState)([]),a=Object(d.a)(c,2),r=a[0],l=a[1],u=Object(o.useState)(),j=Object(d.a)(u,2),p=j[0],h=j[1],b=Object(o.useState)(),_=Object(d.a)(b,2),g=_[0],f=_[1],x=Object(o.useCallback)((function(){i(!0),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){l(e),i(!1)})).catch((function(e){m.b.error(e),i(!1)}))}),[]);return Object(o.useEffect)((function(){x()}),[x]),Object(o.useEffect)((function(){p&&fetch("https://jsonplaceholder.typicode.com/todos?userId=".concat(p.id)).then((function(e){return e.json()})).then((function(e){var t={labels:["Completed","Pending"],datasets:[{data:[e.filter((function(e){return e.completed})).length,e.filter((function(e){return!e.completed})).length],backgroundColor:["green","red"]}]};f(t)})).catch((function(e){m.b.error(e)}))}),[p]),Object(s.jsxs)("div",{className:E.a.container,children:[Object(s.jsx)("h1",{className:E.a.title,children:"Components Implementations"}),Object(s.jsxs)(M.a,{container:!0,spacing:1,children:[Object(s.jsxs)(M.a,{item:!0,xs:12,children:[Object(s.jsx)("p",{children:"Here you can browse throught some of the component implementations used in the different web applications designed by me."}),Object(s.jsxs)("p",{children:["All of the data displayed here is fetched from ",Object(s.jsx)("a",{href:"https://jsonplaceholder.typicode.com/",children:"https://jsonplaceholder.typicode.com/"}),"."]})]}),Object(s.jsx)(U,{data:r,isLoading:n,setSelectedUser:h}),Object(s.jsx)(K,{data:g,selectedUser:p}),Object(s.jsx)(V,{selectedUser:p})]})]})}var G=Object(r.g)((function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(l.a,{}),Object(s.jsxs)(H,{children:[Object(s.jsx)(m.a,{}),Object(s.jsxs)(r.d,{children:[Object(s.jsx)(r.b,{exact:!0,path:"/myresume/Home",component:R}),Object(s.jsx)(r.b,{exact:!0,path:"/myresume/Portfolio",component:F}),Object(s.jsx)(r.b,{exact:!0,path:"/myresume/Components",component:Z}),Object(s.jsx)(r.a,{to:"/myresume/Home"})]})]})]})})),Y=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,965)).then((function(t){var n=t.getCLS,s=t.getFID,o=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),s(e),o(e),i(e),c(e)}))};a.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(y.a,{children:Object(s.jsx)(G,{})})}),document.getElementById("root")),Y()}},[[556,1,2]]]);
//# sourceMappingURL=main.84527445.chunk.js.map
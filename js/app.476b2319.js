(function(t){function e(e){for(var i,o,u=e[0],a=e[1],c=e[2],l=0,d=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i]);f&&f(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],i=!0,o=1;o<r.length;o++){var u=r[o];0!==n[u]&&(i=!1)}i&&(s.splice(e--,1),t=a(a.s=r[0]))}return t}var i={},o={app:0},n={app:0},s=[];function u(t){return a.p+"js/"+({"Homerun~Login~OrderHistory~OrderList~ProductDetail~ProductList~Profile~ShoppingList~SignUp":"Homerun~Login~OrderHistory~OrderList~ProductDetail~ProductList~Profile~ShoppingList~SignUp",Homerun:"Homerun",Login:"Login",OrderHistory:"OrderHistory",OrderList:"OrderList",ProductDetail:"ProductDetail",ProductList:"ProductList",Profile:"Profile",ShoppingList:"ShoppingList",SignUp:"SignUp"}[t]||t)+"."+{"Homerun~Login~OrderHistory~OrderList~ProductDetail~ProductList~Profile~ShoppingList~SignUp":"4a871291",Homerun:"c41503fc",Login:"488c91e7",OrderHistory:"d651f639",OrderList:"82314014",ProductDetail:"cdee4a37",ProductList:"e7595fd5",Profile:"496a94d2",ShoppingList:"3bd7808a",SignUp:"c99f3520"}[t]+".js"}function a(e){if(i[e])return i[e].exports;var r=i[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.e=function(t){var e=[],r={"Homerun~Login~OrderHistory~OrderList~ProductDetail~ProductList~Profile~ShoppingList~SignUp":1,Homerun:1,Login:1,OrderHistory:1,OrderList:1,ProductDetail:1,ProductList:1,Profile:1,ShoppingList:1,SignUp:1};o[t]?e.push(o[t]):0!==o[t]&&r[t]&&e.push(o[t]=new Promise((function(e,r){for(var i="css/"+({"Homerun~Login~OrderHistory~OrderList~ProductDetail~ProductList~Profile~ShoppingList~SignUp":"Homerun~Login~OrderHistory~OrderList~ProductDetail~ProductList~Profile~ShoppingList~SignUp",Homerun:"Homerun",Login:"Login",OrderHistory:"OrderHistory",OrderList:"OrderList",ProductDetail:"ProductDetail",ProductList:"ProductList",Profile:"Profile",ShoppingList:"ShoppingList",SignUp:"SignUp"}[t]||t)+"."+{"Homerun~Login~OrderHistory~OrderList~ProductDetail~ProductList~Profile~ShoppingList~SignUp":"18c000ae",Homerun:"e5010951",Login:"ef44c302",OrderHistory:"1f0cf6a3",OrderList:"3d67bc33",ProductDetail:"5119bb24",ProductList:"5fcb2272",Profile:"456d6c58",ShoppingList:"eb381c74",SignUp:"83b58a0c"}[t]+".css",n=a.p+i,s=document.getElementsByTagName("link"),u=0;u<s.length;u++){var c=s[u],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===i||l===n))return e()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){c=d[u],l=c.getAttribute("data-href");if(l===i||l===n)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var i=e&&e.target&&e.target.src||n,s=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=i,delete o[t],f.parentNode.removeChild(f),r(s)},f.href=n;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[t]=0})));var i=n[t];if(0!==i)if(i)e.push(i[2]);else{var s=new Promise((function(e,r){i=n[t]=[e,r]}));e.push(i[2]=s);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,a.nc&&l.setAttribute("nonce",a.nc),l.src=u(t);var d=new Error;c=function(e){l.onerror=l.onload=null,clearTimeout(f);var r=n[t];if(0!==r){if(r){var i=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+i+": "+o+")",d.name="ChunkLoadError",d.type=i,d.request=o,r[1](d)}n[t]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},a.m=t,a.c=i,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(r,i,function(e){return t[e]}.bind(null,i));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/yama-clark-website/",a.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var f=l;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},3394:function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e),r.d(e,"firebaseDb",(function(){return y})),r.d(e,"firebaseAuth",(function(){return S}));r("e260"),r("e6cf"),r("cca6"),r("a79d");var i=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}}),r("router-view")],1)},n=[],s=r("5530"),u=r("2f62"),a={data:function(){return{}},methods:Object(s["a"])({},Object(u["b"])(["authAction","getAllProduct","setCurrentProduct"])),mounted:function(){this.authAction(),this.getAllProduct(),this.setCurrentProduct()}},c=a,l=(r("5c0b"),r("2877")),d=Object(l["a"])(c,o,n,!1,null,null,null),f=d.exports,p=(r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f"));i["a"].use(p["a"]);var m=[{path:"/",name:"homerun",component:function(){return Promise.all([r.e("Homerun~Login~OrderHistory~OrderList~ProductDetail~ProductList~Profile~ShoppingList~SignUp"),r.e("Homerun")]).then(r.bind(null,"f94e"))}},{path:"/productlist",name:"productlist",component:function(){return Promise.all([r.e("Homerun~Login~OrderHistory~OrderList~ProductDetail~ProductList~Profile~ShoppingList~SignUp"),r.e("ProductList")]).then(r.bind(null,"96fc"))}},{path:"/productdetail/:id",name:"productdetail",component:function(){return Promise.all([r.e("Homerun~Login~OrderHistory~OrderList~ProductDetail~ProductList~Profile~ShoppingList~SignUp"),r.e("ProductDetail")]).then(r.bind(null,"5f47"))}},{path:"/shoppinglist",name:"shoppinglist",component:function(){return Promise.all([r.e("Homerun~Login~OrderHistory~OrderList~ProductDetail~ProductList~Profile~ShoppingList~SignUp"),r.e("ShoppingList")]).then(r.bind(null,"697f"))}},{path:"/orderlist",name:"orderlist",component:function(){return Promise.all([r.e("Homerun~Login~OrderHistory~OrderList~ProductDetail~ProductList~Profile~ShoppingList~SignUp"),r.e("OrderList")]).then(r.bind(null,"bf4b"))}},{path:"/login",name:"login",component:function(){return Promise.all([r.e("Homerun~Login~OrderHistory~OrderList~ProductDetail~ProductList~Profile~ShoppingList~SignUp"),r.e("Login")]).then(r.bind(null,"a55b"))}},{path:"/signup",name:"signup",component:function(){return Promise.all([r.e("Homerun~Login~OrderHistory~OrderList~ProductDetail~ProductList~Profile~ShoppingList~SignUp"),r.e("SignUp")]).then(r.bind(null,"5c9c"))}},{path:"/orderhistory",name:"orderhistory",component:function(){return Promise.all([r.e("Homerun~Login~OrderHistory~OrderList~ProductDetail~ProductList~Profile~ShoppingList~SignUp"),r.e("OrderHistory")]).then(r.bind(null,"3ed5"))}},{path:"/profile",name:"profile",component:function(){return Promise.all([r.e("Homerun~Login~OrderHistory~OrderList~ProductDetail~ProductList~Profile~ShoppingList~SignUp"),r.e("Profile")]).then(r.bind(null,"c66d"))}}],h=new p["a"]({routes:m}),g=h;r("ac1f"),r("841c"),r("99af"),r("159b"),r("e9c4"),r("d81d"),r("b64b"),r("caad"),r("2532"),r("a434"),r("4e82"),r("a9e3");i["a"].use(u["a"]);var L=new u["a"].Store({state:{user:null,error:null,userList:[],localList:[],allProduct:[],tagPrdocut:[],currentProduct:[],orderHistory:[],loading:!1,tag:[],search:[],chat:[],chatList:[],showChat:!1,chatError:null,bigToSmall:!1,showNav:!1},mutations:{setUser:function(t,e){t.user=e},setError:function(t,e){t.error=e},setUserList:function(t,e){t.userList=e},setAllProduct:function(t,e){t.allProduct=e},setCurrentProduct:function(t,e){t.currentProduct=e},setOrderHistory:function(t,e){t.orderHistory=e},setLoading:function(t,e){t.loading=e},setTag:function(t,e){t.tag=e},setSearch:function(t,e){t.search=e},setChat:function(t,e){t.chat=e},setChatList:function(t,e){t.chatList=e},setShowChat:function(t,e){t.showChat=e},setChatError:function(t,e){t.chatError=e},setTagPrdocut:function(t,e){t.tagPrdocut=e},setBigToSmall:function(t,e){t.bigToSmall=e},setShowNav:function(t,e){t.showNav=e},setLocalList:function(t,e){t.localList=e}},actions:{authAction:function(t){var e=t.commit,r=t.dispatch;e("setLoading",!0),S.onAuthStateChanged((function(t){t?(e("setUser",t),r("getUserList"),r("getOrderHistory"),r("getChat"),e("setChatError",null)):(e("setUser",null),e("setLoading",!1),r("getUserList"),e("setChatList",[]),e("setShowChat",!1))}))},signUpAction:function(t,e){var r=t.commit;S.createUserWithEmailAndPassword(e.email,e.password).then((function(){g.push({name:"profile"})})).catch((function(t){alert(t),r("setError",t.message)}))},signInAction:function(t,e){var r=t.commit;S.signInWithEmailAndPassword(e.email,e.password).then((function(){g.push({name:"profile"})})).catch((function(t){r("setError",t.message),alert(t.message)}))},signOutAction:function(t){var e=t.commit;S.signOut().then((function(){e("setUser",null),e("setShowNav",!1),alert("You have already logout."),g.push({name:"homerun"}).catch((function(){}))})).catch((function(t){e("setError",t.message)}))},forgetPassword:function(t){var e=t.payload;S.sendPasswordResetEmail(e.email).then((function(){alert("Check your registered email to reset the password!")})).catch((function(t){alert(t)}))},addProduct:function(t,e){var r=t.state,i=t.commit,o=e.product;if(r.user){var n=[];n.push(o);var s=S.currentUser.uid,u=r.userList,a=!1;if(u)for(var c=0;c<u.length;c++)u[c].imagePath===n[0].imagePath&&(a=!0);if(null==r.userList)y.ref("users").child(r.user.uid).set(n);else if(a)for(var l=0;l<u.length;l++)u[l].imagePath===n[0].imagePath&&function(){var t=y.ref("users/"+s+"/"+l);t.once("value",(function(e){var r=e.val(),i={count:r.count+1};t.update(i)}))}();else{var d=u.concat(n);y.ref("users").child(r.user.uid).set(d)}}else{var f=JSON.parse(localStorage.getItem("localList"));if(f){var p=!1,m=0;f.forEach((function(t,e){t.imagePath===o.imagePath&&(p=!0,m=e)})),p?(f[m].count++,localStorage.setItem("localList",JSON.stringify(f)),i("setUserList",f)):(f.push(o),localStorage.setItem("localList",JSON.stringify(f)),i("setUserList",f))}else{var h=[];h.push(o),localStorage.setItem("localList",JSON.stringify(h)),i("setUserList",f)}}},addProductDetail:function(t){var e=t.state;y.ref("users").child(e.user.uid).push(e.currentProduct)},getUserList:function(t){var e=t.state,r=t.commit;if(e.user)return y.ref("users/"+e.user.uid).on("value",(function(t){r("setUserList",t.val()),r("setLoading",!1)}));var i=JSON.parse(localStorage.getItem("localList"));r("setUserList",i)},getAllProduct:function(t){var e=t.state,r=t.commit;if(!(e.tag.length>=1))return y.ref("productList/0").on("value",(function(t){var e=t.val(),i=Object.keys(e).map((function(t){return e[t]}));r("setAllProduct",i)}));var i=[];y.ref("productList/0").on("value",(function(t){var o=t.val(),n=Object.keys(o).map((function(t){return o[t]}));n.forEach((function(t){e.tag.every((function(e){return t.tag.includes(e)}))&&i.push(t)})),r("setAllProduct",i)}))},searchlProduct:function(t){var e=t.state,r=t.commit,i=[];if(""===e.search)return y.ref("productList/0").on("value",(function(t){var e=t.val(),i=Object.keys(e).map((function(t){return e[t]}));r("setAllProduct",i)}));y.ref("productList/0").on("value",(function(t){var o=t.val(),n=Object.keys(o).map((function(t){return o[t]}));n.forEach((function(t){t.tag.toLowerCase().includes(e.search.toLowerCase())&&i.push(t)})),r("setAllProduct",i)}))},deleteProduct:function(t,e){var r=t.state,i=t.commit,o=e.index;if(r.user)r.userList.splice(o,1),y.ref("users").child(r.user.uid).set(r.userList);else{var n=JSON.parse(localStorage.getItem("localList"));n.splice(o,1),localStorage.setItem("localList",JSON.stringify(n)),i("setUserList",n)}},addCount:function(t,e){var r=t.state,i=t.commit,o=e.item,n=e.index;if(r.user){var s=S.currentUser.uid,u=y.ref("users/"+s+"/"+n),a={count:o.count+1};u.update(a)}else{var c=JSON.parse(localStorage.getItem("localList"));c[n].count++,localStorage.setItem("localList",JSON.stringify(c)),i("setUserList",c)}},minusCount:function(t,e){var r=t.state,i=t.commit,o=e.item,n=e.index;if(r.user){var s=S.currentUser.uid,u=y.ref("users/"+s+"/"+n);if(o.count>=2){var a={count:o.count-1};u.update(a)}}else{var c=JSON.parse(localStorage.getItem("localList"));c[n].count>=2&&c[n].count--,localStorage.setItem("localList",JSON.stringify(c)),i("setUserList",c)}},routerToDetail:function(t,e){var r=t.dispatch,i=e.index;g.push({name:"productdetail",params:{id:i}}),r("setCurrentProduct")},setCurrentProduct:function(t){var e=t.commit,r=g.currentRoute.params.id;if(r)return y.ref("productList/0").on("value",(function(t){var i=Object.keys(t.val()).map((function(e){return t.val()[e]}));i.forEach((function(t){t.productId===r&&e("setCurrentProduct",t)}))}))},getOrderHistory:function(t){var e=t.state,r=t.commit;return y.ref("history/"+e.user.uid).on("value",(function(t){r("setOrderHistory",t.val())}))},confirmOrder:function(t){var e=t.state,r=t.commit;if(e.user)if(null!=e.orderHistory){var i=e.orderHistory.concat(e.userList);y.ref("history").child(e.user.uid).set(i);var o=S.currentUser.uid,n=y.ref("users/"+o);n.remove(),g.push({name:"orderhistory"})}else{y.ref("history").child(e.user.uid).set(e.userList);var s=S.currentUser.uid,u=y.ref("users/"+s);u.remove(),g.push({name:"orderhistory"})}else localStorage.removeItem("localList"),r("setUserList",null),g.push({name:"homerun"})},clearHistory:function(){var t=S.currentUser.uid,e=y.ref("history/"+t);e.remove()},bigToSmall:function(t){var e=t.state,r=t.commit,i=!e.bigToSmall;if(r("setBigToSmall",i),!e.bigToSmall)return y.ref("productList/0").on("value",(function(t){var e=t.val(),i=Object.keys(e).map((function(t){return e[t]}));r("setAllProduct",i)}));y.ref("productList/0").on("value",(function(t){var e=t.val(),i=Object.keys(e).map((function(t){return e[t]}));i.sort((function(t,e){return e.price-t.price})),r("setAllProduct",i)}))},smallToBig:function(t){var e=t.state,r=t.commit,i=!e.bigToSmall;if(r("setBigToSmall",i),!e.bigToSmall)return y.ref("productList/0").on("value",(function(t){var e=t.val(),i=Object.keys(e).map((function(t){return e[t]}));r("setAllProduct",i)}));y.ref("productList/0").on("value",(function(t){var e=t.val(),i=Object.keys(e).map((function(t){return e[t]}));i.sort((function(t,e){return t.price-e.price})),r("setAllProduct",i)}))},chatEnter:function(t){var e=t.state,r=t.commit;if(e.user){var i=S.currentUser.uid,o=y.ref("chat/"+i),n=o.push().key;o.child(n).set({chat:e.chat,time:Date.now()}),e.chat=""}else r("setChatError","You have to login")},getChat:function(t){var e=t.state,r=t.commit;return y.ref("chat/"+e.user.uid).on("value",(function(t){if(t.val()){var e=Object.keys(t.val()).map((function(e){return t.val()[e]}));e.reverse(),r("setChatList",e)}}))},deleteChat:function(t){var e=t.commit,r=S.currentUser.uid,i=y.ref("chat/"+r);i.remove(),e("setChatList",[])}},getters:{getUser:function(t){return t.user},isUserAuth:function(t){return!!t.user},getError:function(t){return t.error},totalPrice:function(t){var e=0;for(var r in t.userList)e+=Number(t.userList[r].price*t.userList[r].count);return e},shoppingCount:function(t){if(t.userList){var e=Object.keys(t.userList).map((function(e){return t.userList[e]})),r=e.length;return r}},tempUserList:function(t){if(null===t.userList){var e=[0];return e}var r=Object.keys(t.userList).map((function(e){return t.userList[e]}));return r}}}),v=(r("15f5"),r("7051"),r("4f60"));r("256a"),r("1862"),r("2979"),r("3394");i["a"].config.productionTip=!1;var P={apiKey:"AIzaSyAbYLUVJYoITGNvgeEJiLWKwlvEZEgsn7M",authDomain:"yama-website.firebaseapp.com",databaseURL:"https://yama-website-default-rtdb.firebaseio.com",projectId:"yama-website",storageBucket:"yama-website.appspot.com",messagingSenderId:"1094650287749",appId:"1:1094650287749:web:b011ea45db8ec625e5bbec",measurementId:"G-6TTRYFGB6X"};v["a"].initializeApp(P);var y=v["a"].database(),S=v["a"].auth();new i["a"]({router:g,store:L,render:function(t){return t(f)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";r("9c0c")},"9c0c":function(t,e,r){}});
//# sourceMappingURL=app.476b2319.js.map
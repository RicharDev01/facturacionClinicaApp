import{s as h}from"./chunk-345Z3D5V.js";import{$ as i,$a as u,Fb as b,J as d,_ as n,aa as a,fa as f,fb as g,ib as p,n as m,oa as l,s as c,t as s}from"./chunk-GSQT7VDF.js";var v=(()=>{let e=class e{constructor(r){this.router=r}iniciarSesion(){this.router.navigate(["dashboard"])}};e.\u0275fac=function(o){return new(o||e)(d(g))},e.\u0275cmp=c({type:e,selectors:[["app-login-form"]],decls:14,vars:0,consts:[[1,"container","flex","justify-content-center","align-items-center",2,"height","98vh"],[1,"surface-100","h-22rem","p-4"],[1,"field"],["for","email"],["id","email","type","text",1,"text-base","text-color","surface-overlay","p-2","border-1","border-solid","surface-border","border-round","appearance-none","outline-none","focus:border-primary","w-full"],["for","password"],["id","password","type","password",1,"text-base","text-color","surface-overlay","p-2","border-1","border-solid","surface-border","border-round","appearance-none","outline-none","focus:border-primary","w-full"],["icon","pi pi-signin","styleClass","bg-primary text-white w-full ","size","large","label","Iniciar sesion",3,"click"],[1,"w-12rem","bg-blue-300","h-22rem","w-20rem"]],template:function(o,w){o&1&&(n(0,"div",0)(1,"form",1)(2,"h2"),l(3,"Inicio de sesion"),i(),n(4,"div",2)(5,"label",3),l(6,"Email"),i(),a(7,"input",4),i(),n(8,"div",2)(9,"label",5),l(10,"Password"),i(),a(11,"input",6),i(),n(12,"p-button",7),f("click",function(){return w.iniciarSesion()}),i()(),a(13,"div",8),i())},dependencies:[b]});let t=e;return t})();var C=[{path:"",component:v}],x=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=s({type:e}),e.\u0275inj=m({imports:[p.forChild(C),p]});let t=e;return t})();var O=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=s({type:e}),e.\u0275inj=m({imports:[u,x,h]});let t=e;return t})();export{O as AuthModule};
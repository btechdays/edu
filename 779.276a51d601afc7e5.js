"use strict";(self.webpackChunkbtechdays=self.webpackChunkbtechdays||[]).push([[779],{6779:(D,u,s)=>{s.r(u),s.d(u,{ProjectsModule:()=>b});var p=s(9808),i=s(4100);const r=[{id:1,name:"Cafe Management System (Angular, Node.js, MySQL Database)",shortDescription:"Cafe management system is used for maintaining the details, Sales, billing and maintains an inventory for the Cafe. This project developed using Java, MVC and database used.",thumbnail:"https://img.youtube.com/vi/SqSN6sqbdMQ/maxresdefault.jpg"},{id:2,name:"Cafe Management System in java (JFrame, Netbeans, Mysql Database)",shortDescription:"Cafe management system is used for maintaining the details, Sales, billing and maintains an inventory for the Cafe. This project developed using Java, MVC and database used.Cafe management system is used for maintaining the details, Sales, billing and maintains an inventory for the Cafe. This project developed using Java, MVC and database used.",thumbnail:"https://img.youtube.com/vi/cBu88Z1BNXY/maxresdefault.jpg"},{id:3,name:"Hotel Management System in java (JFrame, Netbeans, Mysql Database)",shortDescription:"Hotel Management System in java (JFrame, Netbeans, Mysql Database) Complete Project (step by step)",thumbnail:"https://img.youtube.com/vi/e7Izp5l6VCg/maxresdefault.jpg"},{id:4,name:"Pharmacy Management System in Csharp (C#, Visual Studio, MsSQL Server)",shortDescription:"Hotel Management System in java (JFrame, Netbeans, Mysql Database) Complete Project (step by step)",thumbnail:"https://img.youtube.com/vi/vDJIc6NHJe0/maxresdefault.jpg"},{id:5,name:"Online Shopping project in jsp (Eclipse IDE,Tomcat , MySQL Database)",shortDescription:"Hotel Management System in java (JFrame, Netbeans, Mysql Database) Complete Project (step by step)",thumbnail:"https://img.youtube.com/vi/4sEwvpkYTNU/maxresdefault.jpg"}];var t=s(5e3);function d(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"div")(1,"div",1),t.NdJ("click",function(){const c=t.CHM(e).$implicit;return t.oxw().viewProjectDetails(null==c?null:c.id)}),t.TgZ(2,"h2"),t._uU(3),t.qZA(),t._UZ(4,"img",2),t.TgZ(5,"p"),t._uU(6),t.qZA()()()}if(2&o){const e=a.$implicit;t.xp6(3),t.AsE("",null==e?null:e.id,". ",null==e?null:e.name,""),t.xp6(1),t.s9C("src",null==e?null:e.thumbnail,t.LSH),t.xp6(2),t.Oqu(null==e?null:e.shortDescription)}}let h=(()=>{class o{constructor(e){this.router=e,this.projects=r}ngOnInit(){}viewProjectDetails(e){this.router.navigateByUrl("/project/"+e)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(i.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-dashboard"]],decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[1,"card",2,"cursor","pointer",3,"click"],[2,"width","80%","margin-left","10%","height","400px",3,"src"]],template:function(e,n){1&e&&t.YNc(0,d,7,4,"div",0),2&e&&t.Q6J("ngForOf",n.projects)},directives:[p.sg],styles:[""]}),o})();function g(o,a){if(1&o&&(t.TgZ(0,"div")(1,"p"),t._UZ(2,"img",1),t.qZA(),t.TgZ(3,"h2"),t._uU(4),t.qZA(),t._UZ(5,"hr"),t.qZA()),2&o){const e=a.$implicit;t.xp6(2),t.s9C("src",null==e?null:e.thumbnail,t.LSH),t.xp6(2),t.Oqu(null==e?null:e.name)}}let j=(()=>{class o{constructor(){var e;this.projects=r,this.max=null===(e=this.projects)||void 0===e?void 0:e.length,this.min=1,this.temp=[],this.projectDetails=[],this.tempLoopNumber=1}ngOnInit(){for(var e=[];e.length<3;){var n=Math.floor(Math.random()*this.max)+1;-1===e.indexOf(n)&&e.push(n)}for(var l=0;l<e.length;l++){var c=e[l];this.temp=r.filter(m=>m.id==c),this.projectDetails.push(this.temp[0])}console.log(this.projectDetails)}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-popular-projects"]],decls:3,vars:1,consts:[[4,"ngFor","ngForOf"],[2,"height","150px","width","100%",3,"src"]],template:function(e,n){1&e&&(t.TgZ(0,"h3"),t._uU(1,"Popular Post"),t.qZA(),t.YNc(2,g,6,2,"div",0)),2&e&&(t.xp6(2),t.Q6J("ngForOf",n.projectDetails))},directives:[p.sg],styles:[""]}),o})(),f=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-layout"]],decls:33,vars:0,consts:[[1,"header"],[1,"topnav"],["href","#"],["href","#",2,"float","right"],[1,"row"],[1,"leftcolumn"],[1,"rightcolumn"],[1,"card"],[1,"footer"]],template:function(e,n){1&e&&(t.TgZ(0,"html"),t._UZ(1,"head"),t.TgZ(2,"body")(3,"div",0)(4,"h1"),t._uU(5,"BTech Days"),t.qZA(),t.TgZ(6,"p"),t._uU(7,"Education is key to success"),t.qZA()(),t.TgZ(8,"div",1)(9,"a",2),t._uU(10,"Projects"),t.qZA(),t.TgZ(11,"a",2),t._uU(12,"Blogs"),t.qZA(),t.TgZ(13,"a",2),t._uU(14,"About"),t.qZA(),t.TgZ(15,"a",3),t._uU(16,"Contact"),t.qZA()(),t.TgZ(17,"div",4)(18,"div",5),t._UZ(19,"router-outlet"),t.qZA(),t.TgZ(20,"div",6)(21,"div",7),t._UZ(22,"app-popular-projects"),t.qZA(),t.TgZ(23,"div",7)(24,"h3"),t._uU(25,"Follow"),t.qZA(),t.TgZ(26,"p"),t._uU(27,"Instagram"),t.qZA(),t.TgZ(28,"p"),t._uU(29,"Twitter"),t.qZA()()()(),t.TgZ(30,"div",8)(31,"h2"),t._uU(32,"All right"),t.qZA()()()())},directives:[i.lC,j],styles:["",""]}),o})();var v=s(8099);const y=[{path:"",component:f,children:[{path:"",component:h},{path:"project/:id",component:(()=>{class o{constructor(e){this.route=e,this.projects=r,window.scroll({top:0,left:0,behavior:"smooth"})}ngOnInit(){console.log(this.route.snapshot.paramMap.get("id")),this.temp=r.filter(e=>e.id==this.route.snapshot.paramMap.get("id")),this.projectDetails=this.temp[0]}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(i.gz))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-view-project-details"]],decls:9,vars:3,consts:[[1,"card"],["href","/#"],[2,"width","80%","margin-left","10%","height","400px",3,"src"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"h2")(2,"a",1)(3,"mat-icon"),t._uU(4,"arrow_circle_left"),t.qZA()(),t._uU(5),t.qZA(),t.TgZ(6,"p"),t._uU(7),t.qZA(),t._UZ(8,"img",2),t.qZA()),2&e&&(t.xp6(5),t.hij("Projects - ",null==n.projectDetails?null:n.projectDetails.name,""),t.xp6(2),t.Oqu(null==n.projectDetails?null:n.projectDetails.shortDescription),t.xp6(1),t.s9C("src",null==n.projectDetails?null:n.projectDetails.thumbnail,t.LSH))},directives:[v.Hw],styles:[""]}),o})()}]}];let Z=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[i.Bz.forChild(y)],i.Bz]}),o})();var C=s(3341);let b=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[p.ez,Z,C.q]]}),o})()}}]);
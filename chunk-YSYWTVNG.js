import{Bb as p,G as c,J as n,_c as r,f as s,lb as m}from"./chunk-CNKLNQNQ.js";var g=(()=>{let i=class i{constructor(e,t){this.doc=e,this.meta=t,this.siteName="CRUD demo",this.seoSubj=new s,this.applySeo()}setSeo(e,t){this.seoSubj.next(e),typeof t<"u"?this.setCanonical(t):this.resetCanonical()}applySeo(){this.seoSubj.asObservable().subscribe(e=>{let t=e.title,a=e.description;this.meta.updateTag({name:"description",content:a}),this.meta.updateTag({name:"author",content:r.author.name}),this.meta.updateTag({name:"revised",content:r.date}),this.meta.updateTag({name:"keywords",content:"Demo"}),this.meta.updateTag({property:"og:title",content:t}),this.meta.updateTag({property:"og:description",content:a}),this.meta.updateTag({property:"og:site_name",content:this.siteName})})}setCanonical(e){let t=this.doc.querySelector("link[rel=canonical]");t||(t=this.doc.createElement("link"),t.setAttribute("rel","canonical"),this.doc.head.appendChild(t));let a=`https://celtian.github.io/demo-angular-material-crud${e}`;t.setAttribute("href",a),this.meta.updateTag({property:"og:url",content:a})}resetCanonical(){if(this.doc){let e=this.doc.querySelector("link[rel=canonical]");e&&(e.remove(),this.meta.removeTag("name='og:url'"))}}};i.\u0275fac=function(t){return new(t||i)(n(m),n(p))},i.\u0275prov=c({token:i,factory:i.\u0275fac,providedIn:"root"});let o=i;return o})();export{g as a};

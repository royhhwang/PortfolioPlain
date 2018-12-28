(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{127:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(136),c=a.n(o),l=a(142),s=a(166),i=a.n(s),u=a(167),m=a.n(u),p=a(147),d=a.n(p);t.default=function(){return r.a.createElement(l.a,null,r.a.createElement("article",{className:"article"},r.a.createElement("section",{className:"wrapper"},r.a.createElement(c.a,{className:"icon-spin",to:"/#projects"},r.a.createElement("span",{className:"button--green"},"Back")),r.a.createElement("h1",{className:"article__title"},r.a.createElement("span",null,"Artsy")),r.a.createElement("video",{className:"article__video -mobile",controls:!0,playsInline:!0,muted:!0,autoPlay:!0,loop:!0},r.a.createElement("source",{src:i.a,type:"video/mp4"}),"Your browser does not support this video!"),r.a.createElement("video",{className:"article__video -desktop",controls:!0,playsInline:!0,muted:!0,autoPlay:!0,loop:!0},r.a.createElement("source",{src:m.a,type:"video/mp4"}),"Your browser does not support this video!")),r.a.createElement("section",{className:"article__content"},r.a.createElement("container",{className:"article__content__container"},r.a.createElement("h2",{className:"article__content__heading"},"Artist and Artwork Gallery"),r.a.createElement("h3",{className:"article__content__tech"},r.a.createElement("strong",null,"React | Artsy API | Bootstrap | Sass")),r.a.createElement("h3",{className:"article__content__summary"},"Concept webpage for an art gallery site. Taps into the Artsy API to display images of historic artwork."),r.a.createElement("br",null),r.a.createElement("ul",{className:"article__content__list"},r.a.createElement("li",null,"Modular and sleek; designed for mobile first."),r.a.createElement("li",null,"Scan and shop through a large compilation of artwork."),r.a.createElement("li",null,"Built with React and Bootstrap."))),r.a.createElement("container",{className:"article__content__container"},r.a.createElement("img",{src:d.a,alt:"Artsy Homepage Logo",className:"-icon"}),r.a.createElement("a",{className:"button--social",href:"https://artsyapi.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"},"The Site"),r.a.createElement("a",{className:"button--social",href:"https://github.com/royhhwang/artsyapi",target:"_blank",rel:"noopener noreferrer"},"The Repo")))))}},137:function(e,t,a){var n;e.exports=(n=a(139))&&n.default||n},138:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return d});var n=a(0),r=a.n(n),o=a(4),c=a.n(o),l=a(136),s=a.n(l);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var i=a(137),u=a.n(i);a.d(t,"PageRenderer",function(){return u.a});var m=a(28);a.d(t,"parsePath",function(){return m.a});var p=r.a.createContext({}),d=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},139:function(e,t,a){"use strict";a.r(t);a(29);var n=a(0),r=a.n(n),o=a(4),c=a.n(o),l=a(46),s=a(2),i=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};i.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=i},140:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(136),c=a.n(o);t.a=function(){return r.a.createElement("nav",{className:"nav"},r.a.createElement(c.a,{className:"nav__list",to:"/"},"Home"),r.a.createElement(c.a,{className:"nav__list",to:"/#projects"},"Projects"),r.a.createElement(c.a,{className:"nav__list",to:"/#about"},"About"))}},141:function(e,t,a){},142:function(e,t,a){"use strict";var n=a(143),r=a(0),o=a.n(r),c=a(4),l=a.n(c),s=a(145),i=a.n(s),u=a(138),m=a(140),p=(a(141),function(e){var t=e.children;return o.a.createElement(u.StaticQuery,{query:"2076450408",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Roy Hwang's Portfolio"},{name:"keywords",content:"Roy, Portfolio"}]},o.a.createElement("html",{lang:"en"})),o.a.createElement(m.a,null),o.a.createElement("main",{className:"main"},t))},data:n})});p.propTypes={children:l.a.node.isRequired},t.a=p},143:function(e){e.exports={data:{site:{siteMetadata:{title:"Roy Hwang | Portfolio"}}}}},147:function(e,t,a){e.exports=a.p+"static/artsyjpg-0481f8b6d6949062fe333e1f6c22339c.jpg"},166:function(e,t,a){e.exports=a.p+"static/artsymobile-9170fc6d406a05cec6e6826fbfe7ffcd.mp4"},167:function(e,t,a){e.exports=a.p+"static/artsy-196df046473a3247dcc3385775ad9f96.mp4"}}]);
//# sourceMappingURL=component---src-pages-artsy-js-718065548631810fc8b8.js.map

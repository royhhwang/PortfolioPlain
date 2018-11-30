(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{131:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(136),l=t.n(c),s=t(141),i=t(192),o=t.n(i),m=t(193),u=t.n(m);a.default=function(){return r.a.createElement(s.a,null,r.a.createElement("article",{className:"article"},r.a.createElement("section",{className:"wrapper"},r.a.createElement(l.a,{className:"icon-spin",to:"/#projects"},r.a.createElement("span",{className:"button--green"},"Back")),r.a.createElement("h1",{className:"article__title"},r.a.createElement("span",null,"Race Painting")),r.a.createElement("video",{className:"article__video",controls:!0,playsInline:!0,muted:!0,autoPlay:!0,loop:!0},r.a.createElement("source",{src:o.a,type:"video/mp4"}),"Your browser does not support this video!")),r.a.createElement("section",{className:"article__content"},r.a.createElement("container",{className:"article__content__container"},r.a.createElement("h2",{className:"article__content__heading"},"Collaborative Racer"),r.a.createElement("h3",{className:"article__content__tech"},r.a.createElement("strong",null,"Phaser | Socket.io | MERN Stack")),r.a.createElement("h3",{className:"article__content__summary"},"Race Painting is as simple as its name. Grab a friend and paint away!"),r.a.createElement("br",null),r.a.createElement("ul",{className:"article__content__list"},r.a.createElement("li",null,"Responsible for canvassing and car physics rendering."),r.a.createElement("li",null,"Handled paint trails and Socket.io location updates."),r.a.createElement("li",null,"Smooth gameplay with reactive community map."),r.a.createElement("li",null,"Socket.io in conjunction with Phaser allows for multiplayer functionality."),r.a.createElement("li",null,"MySQL database handles local saves for maps and player position."))),r.a.createElement("container",{className:"article__content__container -center"},r.a.createElement("img",{src:u.a,alt:"Race Painting Logo",className:"-icon -circle"}),r.a.createElement("a",{className:"button--social",href:"https://race-painting.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"},"The Site"),r.a.createElement("a",{className:"button--social",href:"https://github.com/Ta1yak1/Race-Paint",target:"_blank",rel:"noopener noreferrer"},"The Repo")))))}},137:function(e,a,t){var n;e.exports=(n=t(139))&&n.default||n},138:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return f}),t.d(a,"StaticQueryContext",function(){return d}),t.d(a,"StaticQuery",function(){return p});var n=t(0),r=t.n(n),c=t(4),l=t.n(c),s=t(136),i=t.n(s);t.d(a,"Link",function(){return i.a}),t.d(a,"withPrefix",function(){return s.withPrefix}),t.d(a,"navigate",function(){return s.navigate}),t.d(a,"push",function(){return s.push}),t.d(a,"replace",function(){return s.replace}),t.d(a,"navigateTo",function(){return s.navigateTo});var o=t(137),m=t.n(o);t.d(a,"PageRenderer",function(){return m.a});var u=t(28);t.d(a,"parsePath",function(){return u.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},139:function(e,a,t){"use strict";t.r(a);t(29);var n=t(0),r=t.n(n),c=t(4),l=t.n(c),s=t(46),i=t(2),o=function(e){var a=e.location,t=i.default.getResourcesForPathnameSync(a.pathname);return r.a.createElement(s.a,Object.assign({location:a,pageResources:t},t.json))};o.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},a.default=o},140:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(136),l=t.n(c);a.a=function(){return r.a.createElement("nav",{className:"nav"},r.a.createElement(l.a,{className:"nav__list",to:"/"},"Home"),r.a.createElement(l.a,{className:"nav__list",to:"/#projects"},"Projects"),r.a.createElement(l.a,{className:"nav__list",to:"/#about"},"About"))}},141:function(e,a,t){"use strict";var n=t(142),r=t(0),c=t.n(r),l=t(4),s=t.n(l),i=t(144),o=t.n(i),m=t(138),u=t(140),d=function(e){var a=e.children;return c.a.createElement(m.StaticQuery,{query:"2076450408",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(o.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Roy Hwang's Portfolio"},{name:"keywords",content:"Roy, Portfolio"}]},c.a.createElement("html",{lang:"en"})),c.a.createElement(u.a,null),c.a.createElement("main",{className:"main"},a))},data:n})};d.propTypes={children:s.a.node.isRequired},a.a=d},142:function(e){e.exports={data:{site:{siteMetadata:{title:"Roy Hwang | Portfolio"}}}}},192:function(e,a,t){e.exports=t.p+"static/racevelocity-7c81b9ffa5f197298ff9eecc8be91b61.mp4"},193:function(e,a){e.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=component---src-pages-racepainting-js-dca5efa9c5ce35599854.js.map
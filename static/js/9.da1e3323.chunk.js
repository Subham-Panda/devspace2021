(this["webpackJsonpdevspace2021-frontend"]=this["webpackJsonpdevspace2021-frontend"]||[]).push([[9],{130:function(e,t,n){"use strict";var a=n(2),r=n(7),c=n(21),i=n.n(c),s=n(0),o=n.n(s),l=n(22),u=["xl","lg","md","sm","xs"],d=o.a.forwardRef((function(e,t){var n=e.bsPrefix,c=e.className,s=e.as,d=void 0===s?"div":s,b=Object(r.a)(e,["bsPrefix","className","as"]),m=Object(l.a)(n,"col"),f=[],h=[];return u.forEach((function(e){var t,n,a,r=b[e];if(delete b[e],"object"===typeof r&&null!=r){var c=r.span;t=void 0===c||c,n=r.offset,a=r.order}else t=r;var i="xs"!==e?"-"+e:"";t&&f.push(!0===t?""+m+i:""+m+i+"-"+t),null!=a&&h.push("order"+i+"-"+a),null!=n&&h.push("offset"+i+"-"+n)})),f.length||f.push(m),o.a.createElement(d,Object(a.a)({},b,{ref:t,className:i.a.apply(void 0,[c].concat(f,h))}))}));d.displayName="Col",t.a=d},136:function(e,t,n){"use strict";n.d(t,"b",(function(){return c}));var a=n(0),r=n.n(a).a.createContext(null),c=function(e,t){return void 0===t&&(t=null),null!=e?String(e):t||null};t.a=r},137:function(e,t,n){"use strict";var a=n(0),r=n.n(a).a.createContext(null);r.displayName="CardContext",t.a=r},140:function(e,t,n){"use strict";var a=n(2),r=n(7),c=n(21),i=n.n(c),s=n(0),o=n.n(s),l=n(14),u=n.n(l),d=n(22),b=(u.a.string,u.a.bool,u.a.bool,u.a.bool,u.a.bool,o.a.forwardRef((function(e,t){var n=e.bsPrefix,c=e.className,s=e.fluid,l=e.rounded,u=e.roundedCircle,b=e.thumbnail,m=Object(r.a)(e,["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"]);n=Object(d.a)(n,"img");var f=i()(s&&n+"-fluid",l&&"rounded",u&&"rounded-circle",b&&n+"-thumbnail");return o.a.createElement("img",Object(a.a)({ref:t},m,{className:i()(c,f)}))})));b.displayName="Image",b.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1},t.a=b},144:function(e,t,n){"use strict";var a=n(2),r=n(7),c=n(21),i=n.n(c),s=n(0),o=n.n(s),l=n(22),u=n(138),d=function(e){return o.a.forwardRef((function(t,n){return o.a.createElement("div",Object(a.a)({},t,{ref:n,className:i()(t.className,e)}))}))},b=n(137),m=o.a.forwardRef((function(e,t){var n=e.bsPrefix,c=e.className,s=e.variant,u=e.as,d=void 0===u?"img":u,b=Object(r.a)(e,["bsPrefix","className","variant","as"]),m=Object(l.a)(n,"card-img");return o.a.createElement(d,Object(a.a)({ref:t,className:i()(s?m+"-"+s:m,c)},b))}));m.displayName="CardImg",m.defaultProps={variant:null};var f=m,h=d("h5"),j=d("h6"),p=Object(u.a)("card-body"),v=Object(u.a)("card-title",{Component:h}),g=Object(u.a)("card-subtitle",{Component:j}),x=Object(u.a)("card-link",{Component:"a"}),A=Object(u.a)("card-text",{Component:"p"}),O=Object(u.a)("card-header"),y=Object(u.a)("card-footer"),E=Object(u.a)("card-img-overlay"),C=o.a.forwardRef((function(e,t){var n=e.bsPrefix,c=e.className,u=e.bg,d=e.text,m=e.border,f=e.body,h=e.children,j=e.as,v=void 0===j?"div":j,g=Object(r.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),x=Object(l.a)(n,"card"),A=Object(s.useMemo)((function(){return{cardHeaderBsPrefix:x+"-header"}}),[x]);return o.a.createElement(b.a.Provider,{value:A},o.a.createElement(v,Object(a.a)({ref:t},g,{className:i()(c,x,u&&"bg-"+u,d&&"text-"+d,m&&"border-"+m)}),f?o.a.createElement(p,null,h):h))}));C.displayName="Card",C.defaultProps={body:!1},C.Img=f,C.Title=v,C.Subtitle=g,C.Body=p,C.Link=x,C.Text=A,C.Header=O,C.Footer=y,C.ImgOverlay=E;t.a=C},149:function(e,t,n){"use strict";var a,r=n(2),c=n(7),i=n(21),s=n.n(i),o=n(159),l=n(161),u=n(0),d=n.n(u),b=n(162),m=n(132),f=n(150),h={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function j(e,t){var n=t["offset"+e[0].toUpperCase()+e.slice(1)],a=h[e];return n+parseInt(Object(o.a)(t,a[0]),10)+parseInt(Object(o.a)(t,a[1]),10)}var p=((a={})[b.c]="collapse",a[b.d]="collapsing",a[b.b]="collapsing",a[b.a]="collapse show",a),v={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:j},g=d.a.forwardRef((function(e,t){var n=e.onEnter,a=e.onEntering,i=e.onEntered,o=e.onExit,h=e.onExiting,v=e.className,g=e.children,x=e.dimension,A=void 0===x?"height":x,O=e.getDimensionValue,y=void 0===O?j:O,E=Object(c.a)(e,["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"]),C="function"===typeof A?A():A,w=Object(u.useMemo)((function(){return Object(m.a)((function(e){e.style[C]="0"}),n)}),[C,n]),N=Object(u.useMemo)((function(){return Object(m.a)((function(e){var t="scroll"+C[0].toUpperCase()+C.slice(1);e.style[C]=e[t]+"px"}),a)}),[C,a]),k=Object(u.useMemo)((function(){return Object(m.a)((function(e){e.style[C]=null}),i)}),[C,i]),B=Object(u.useMemo)((function(){return Object(m.a)((function(e){e.style[C]=y(C,e)+"px",Object(f.a)(e)}),o)}),[o,y,C]),K=Object(u.useMemo)((function(){return Object(m.a)((function(e){e.style[C]=null}),h)}),[C,h]);return d.a.createElement(b.e,Object(r.a)({ref:t,addEndListener:l.a},E,{"aria-expanded":E.role?E.in:null,onEnter:w,onEntering:N,onEntered:k,onExit:B,onExiting:K}),(function(e,t){return d.a.cloneElement(g,Object(r.a)({},t,{className:s()(v,g.props.className,p[e],"width"===C&&"width")}))}))}));g.defaultProps=v,t.a=g},190:function(e,t,n){},191:function(e,t,n){},214:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),c=n.n(r),i=n(128),s=n(129),o=n(2),l=n(7),u=n(21),d=n.n(u),b=n(148),m=n(22),f=n(136),h=c.a.createContext(null);h.displayName="AccordionContext";var j=h;function p(e,t){var n=Object(r.useContext)(j),a=Object(r.useContext)(f.a);return function(r){a&&a(e===n?null:e,r),t&&t(r)}}var v=c.a.forwardRef((function(e,t){var n=e.as,a=void 0===n?"button":n,r=e.children,i=e.eventKey,s=e.onClick,u=Object(l.a)(e,["as","children","eventKey","onClick"]),d=p(i,s);return"button"===a&&(u.type="button"),c.a.createElement(a,Object(o.a)({ref:t,onClick:d},u),r)})),g=n(149),x=c.a.forwardRef((function(e,t){var n=e.children,a=e.eventKey,i=Object(l.a)(e,["children","eventKey"]),s=Object(r.useContext)(j);return c.a.createElement(f.a.Provider,{value:null},c.a.createElement(g.a,Object(o.a)({ref:t,in:s===a},i),c.a.createElement("div",null,c.a.Children.only(n))))}));x.displayName="AccordionCollapse";var A=x,O=c.a.forwardRef((function(e,t){var n=Object(b.a)(e,{activeKey:"onSelect"}),a=n.as,r=void 0===a?"div":a,i=n.activeKey,s=n.bsPrefix,u=n.children,h=n.className,p=n.onSelect,v=Object(l.a)(n,["as","activeKey","bsPrefix","children","className","onSelect"]),g=d()(h,Object(m.a)(s,"accordion"));return c.a.createElement(j.Provider,{value:i||null},c.a.createElement(f.a.Provider,{value:p||null},c.a.createElement(r,Object(o.a)({ref:t},v,{className:g}),u)))}));O.displayName="Accordion",O.Toggle=v,O.Collapse=A;var y=O,E=n(130),C=n(140),w=n(144);n(190);function N(e){e.children;var t=e.eventKey,n=e.callback,c=Object(r.useContext)(j),i=p(t,(function(){return n&&n(t)}));return c===t?Object(a.jsx)("button",{type:"button",onClick:i,children:Object(a.jsx)(C.a,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABKCAYAAAAc0MJxAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB90lEQVR42u3aXU7CUBCG4W8wMS6jtyTEyA5kB+xAXJm6At0BcQUYQu0lLMNgzHgBjUSxKZzpmWnyvdekpzz9SXt6AMYYY4wxxhhjjDHG+txKZ6i0cBu/0gJLncZHKlXxrmsXrEoLvOsapSoqvbPctJgiCR4OtryBYIKhbLIhKeZQ/BygAWYYylMcqN9IubGOIRljpUMtdYoLPDeM0C1WE5Ih1iB5R7/wBuB/BMXuj3Rxz2qDBGzwgdcYl95CC1xiDjTssPWZ1RZpiwnG6WPa3cxzYmVGsoXKheWAZA/VNZYTUjdQXWE5InUHZY3ljNQtlBVWAKTuoVKxgiDlgToXKxBSPqhTsXZP9GGQ8kKdglW/+gRByg/VFqu57Eg+UGlYLkh+UOdhuSH5Qp2G5YpkMx+V0lXLQyX73zrmd0a1e06yn6LpFdSpSAGwpDdIzlgSEKkGKCJhSTik7f4VJvccfAioc15wPT5YuEKlzAIEwpKwSMGwJDRSICwJjxQES3qBFABLeoPkjCW9QnLEkt4hOWFJL5EcsCzWR926fQgYS/3K07w+6xM3qUOlQ43kEYr77EhtsRQzXMtLnJv533Wceadvj12GihlGNotdbauXT5e6xsJh+fRCC5T75dMr2+XT9i116oJ0iBUeiTHGGGOMMcYYY4yx5r4BOLPQGx4ED+wAAAAASUVORK5CYII="})}):Object(a.jsx)("button",{type:"button",onClick:i,children:Object(a.jsx)(C.a,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAmUlEQVRo3u3ZsQnDQAxG4Sc706SJvcGN5E0yUsgGhsPrWFkg1xjUmPe3ghMfHFKhoCo9GxOfv7Wg8YxvRduJm0WQIEGCBAkSJEiQIEGCBAkSJOhKHvRsJS/PvMhhdaFnVLQNjky/nCBBgm48toOasX2yErwHs3UD9hpQ0RWAnsF40+xeHwQJEiRIkCBBggQJEiRIkCBBggrzAwTuFEPW3CZLAAAAAElFTkSuQmCC"})})}var k=function(e){var t=e.qs,n=e.ans,r=e.eKey;return Object(a.jsxs)(w.a,{style:{height:"min-content",width:"30rem",marginTop:"1rem",minWidth:"20rem"},className:"black-bg faq-card",children:[Object(a.jsx)(y.Toggle,{as:w.a.Header,eventKey:r,children:Object(a.jsxs)(i.a,{fluid:!0,className:"d-flex justify-content-between align-items-center faq-container",children:[Object(a.jsx)("h5",{children:t}),Object(a.jsx)(N,{eventKey:r,className:"tbutton"})]})}),Object(a.jsx)(y.Collapse,{eventKey:r,children:Object(a.jsx)(w.a.Body,{as:"p",className:"p-light",children:n})})]})},B=(n(191),[{qs:"Who is eligible to participate in the hackathon?",ans:"Students enrolled in any university from all over the globe are eligible to participate in Devspace 2021."},{qs:"Is there a registration fee?",ans:"No. Devspace 2021 is completely free of cost."},{qs:"Is the event online or offline?",ans:"Your health is our priority. Keeping that in mind, Devspace 2021 is going to be an online event."},{qs:"When will the problem statements be released?",ans:"The problem statements will be released when the hack commences on the 19th."}]),K=[{qs:"Do I need to know how to code and/or have a technical skill to participate?",ans:"No. Your problem-solving ability is independent of your technical skills. However, if you\u2019d like to increase your knowledge on existing technologies, they will be available through workshops during the hackathon. "},{qs:"Can I apply without a team?",ans:"No. Devspace 2021 is a team event. Student teams need a minimum of three fellow students as members but a maximum of six.  "},{qs:"How long is the hackathon?",ans:"Devspace 2021 is going to last for 36 hours. It\u2019ll also be filled with talks, workshops and 6 thrilling tracks to brainstorm and work on."},{qs:"Where should we submit our project?",ans:"All submissions will be accepted on Hackerearth."}];t.default=function(){return Object(a.jsxs)(i.a,{fluid:!0,className:" p-5 black-bg text-white faq-main-container",children:[Object(a.jsx)(s.a,{className:"justify-content-center",children:Object(a.jsx)("h1",{children:Object(a.jsx)("b",{children:"FAQs"})})}),Object(a.jsx)(s.a,{className:"justify-content-center pb-5",children:Object(a.jsx)("h5",{id:"sub",children:"Frequently Asked Questions"})}),Object(a.jsx)(y,{children:Object(a.jsxs)(s.a,{children:[Object(a.jsx)(E.a,{className:"d-flex flex-column justify-content-start align-items-center first-faq-column",children:B.map((function(e,t){return Object(a.jsx)(k,{eKey:t+1,qs:e.qs,ans:e.ans},t)}))}),Object(a.jsx)(E.a,{className:"d-flex flex-column justify-content-start align-items-center",children:K.map((function(e,t){return Object(a.jsx)(k,{eKey:t+5,qs:e.qs,ans:e.ans},t)}))})]})})]})}}}]);
//# sourceMappingURL=9.da1e3323.chunk.js.map
(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[7350],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(n),m=i,k=s["".concat(p,".").concat(m)]||s[m]||d[m]||a;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},6599:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(4034),i=n(9973),a=(n(7294),n(3905)),o=(n(4996),{slug:"net6-preview6",title:"4. .NET 6 Preview 6 \u5c1d\u9c9c",author:"dotNET China",author_title:"\u8ba9 .NET \u5f00\u53d1\u66f4\u7b80\u5355\uff0c\u66f4\u901a\u7528\uff0c\u66f4\u6d41\u884c\u3002",author_url:"https://www.chinadot.net",author_image_url:"https://i.loli.net/2021/01/19/M8q5a3OTZWUKicl.png",tags:["furion","furos",".net",".netcore",".net5",".net6"]}),l=void 0,p={permalink:"/furion/blog/net6-preview6",editUrl:"https://gitee.com/dotnetchina/Furion/tree/master/handbook/blog/2021-07-15-net6-preview6.mdx",source:"@site/blog/2021-07-15-net6-preview6.mdx",title:"4. .NET 6 Preview 6 \u5c1d\u9c9c",description:"2021 \u5e74 07 \u6708 15 \u65e5\uff0c\u5fae\u8f6f\u53d1\u5e03\u4e86 .NET 6 Preview 6 \u7248\u672c\uff0cFurion \u5728\u5f53\u5929\u7b2c\u4e00\u65f6\u95f4\u9002\u914d\u4e86\u8be5\u7248\u672c\uff0c\u5e76\u53d1\u5e03 Furion v3.0.0-beta.1 \u7248\u672c\u3002",date:"2021-07-15T00:00:00.000Z",formattedDate:"July 15, 2021",tags:[{label:"furion",permalink:"/furion/blog/tags/furion"},{label:"furos",permalink:"/furion/blog/tags/furos"},{label:".net",permalink:"/furion/blog/tags/net"},{label:".netcore",permalink:"/furion/blog/tags/netcore"},{label:".net5",permalink:"/furion/blog/tags/net-5"},{label:".net6",permalink:"/furion/blog/tags/net-6"}],readingTime:.58,truncated:!1,nextItem:{title:"3. .NET 6 Preview 5 \u5c1d\u9c9c",permalink:"/furion/blog/net6-preview5"}},u=[{value:"\u5b89\u88c5 <code>.NET 6 Preview 6 SDK</code>",id:"\u5b89\u88c5-net-6-preview-6-sdk",children:[]},{value:"\u65e7\u9879\u76ee\u5347\u7ea7",id:"\u65e7\u9879\u76ee\u5347\u7ea7",children:[]},{value:"\u65b0\u9879\u76ee\u4f7f\u7528",id:"\u65b0\u9879\u76ee\u4f7f\u7528",children:[{value:"\u5347\u7ea7 <code>Visual Studio 2019</code>",id:"\u5347\u7ea7-visual-studio-2019",children:[]},{value:"\u7b2c\u4e00\u4e2a\u4f8b\u5b50",id:"\u7b2c\u4e00\u4e2a\u4f8b\u5b50",children:[]},{value:"\u6253\u5f00\u5e76\u542f\u52a8\u9879\u76ee",id:"\u6253\u5f00\u5e76\u542f\u52a8\u9879\u76ee",children:[]}]}],c={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2021 \u5e74 07 \u6708 15 \u65e5\uff0c\u5fae\u8f6f\u53d1\u5e03\u4e86 ",(0,a.kt)("inlineCode",{parentName:"strong"},".NET 6 Preview 6")," \u7248\u672c\uff0c",(0,a.kt)("inlineCode",{parentName:"strong"},"Furion")," \u5728\u5f53\u5929\u7b2c\u4e00\u65f6\u95f4\u9002\u914d\u4e86\u8be5\u7248\u672c\uff0c\u5e76\u53d1\u5e03 ",(0,a.kt)("inlineCode",{parentName:"strong"},"Furion v3.0.0-beta.1")," \u7248\u672c\u3002")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/tree/net6.0-preview6.2/"},"Furion .NET 6 Preview 6 \u6e90\u7801\u5730\u5740")),(0,a.kt)("h2",{id:"\u5b89\u88c5-net-6-preview-6-sdk"},"\u5b89\u88c5 ",(0,a.kt)("inlineCode",{parentName:"h2"},".NET 6 Preview 6 SDK")),(0,a.kt)("p",null,"\u5c1d\u9c9c\u4e4b\u524d\uff0c\u9996\u5148\u5148\u5b89\u88c5 ",(0,a.kt)("inlineCode",{parentName:"p"},".NET 6 Preview 6 SDK"),"\uff0c\u4e0b\u8f7d\u5730\u5740\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://dotnet.microsoft.com/download/dotnet/6.0"},"https://dotnet.microsoft.com/download/dotnet/6.0")),(0,a.kt)("p",null,"\u4e0b\u8f7d\u5bf9\u5e94\u7cfb\u7edf\u548c\u5904\u7406\u5668\u7248\u672c\u5373\u53ef\u3002"),(0,a.kt)("h2",{id:"\u65e7\u9879\u76ee\u5347\u7ea7"},"\u65e7\u9879\u76ee\u5347\u7ea7"),(0,a.kt)("p",null,"\u7f16\u8f91\u6240\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},".csproj")," \u9879\u76ee\uff0c\u4fee\u6539 ",(0,a.kt)("inlineCode",{parentName:"p"},"<TargetFramework>net5.0</TargetFramework>")," \u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"<TargetFramework>net6.0</TargetFramework>"),"\u3002"),(0,a.kt)("p",null,"\u540c\u65f6\u5347\u7ea7\u6240\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"Microsoft")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"Furion")," \u5305\u4e3a\u6700\u65b0\u7248\u672c\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"Furion")," \u6700\u65b0\u7248\u672c\u4e3a\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"v3.0.0-beta.1"),"\u3002"),(0,a.kt)("h2",{id:"\u65b0\u9879\u76ee\u4f7f\u7528"},"\u65b0\u9879\u76ee\u4f7f\u7528"),(0,a.kt)("h3",{id:"\u5347\u7ea7-visual-studio-2019"},"\u5347\u7ea7 ",(0,a.kt)("inlineCode",{parentName:"h3"},"Visual Studio 2019")),(0,a.kt)("p",null,"\u76ee\u524d ",(0,a.kt)("inlineCode",{parentName:"p"},".NET 6 Preview 6")," \u652f\u6301\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"Visual Studio 2019 Preview 16.11.0 Preview 3.0")," \u7248\u672c\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f\u662f ",(0,a.kt)("inlineCode",{parentName:"strong"},"Preview")," \u6700\u65b0\u7248\u672c"),"\u3002\u4e0b\u8f7d\u5730\u5740\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://visualstudio.microsoft.com/zh-hans/thank-you-downloading-visual-studio/?sku=enterprise&ch=pre&rel=16"},"https://visualstudio.microsoft.com/zh-hans/thank-you-downloading-visual-studio/?sku=enterprise&ch=pre&rel=16")),(0,a.kt)("p",null,"\u5df2\u7ecf\u5b89\u88c5\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"Visual Studio 2019 Preview")," \u7248\u672c\u7684\u670b\u53cb\u76f4\u63a5\u5347\u7ea7\u5230\u6700\u65b0\u7248\u5373\u53ef\u3002"),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u7279\u522b\u8bf4\u660e")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u5982\u679c\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"Visual Studio Code")," \u5f00\u53d1\uff0c\u53ef\u5ffd\u7565\u6b64\u9009\u9879\u3002"))),(0,a.kt)("h3",{id:"\u7b2c\u4e00\u4e2a\u4f8b\u5b50"},"\u7b2c\u4e00\u4e2a\u4f8b\u5b50"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Furion v3.0.0-beta.1")," \u76ee\u524d\u63d0\u4f9b\u4e86\u6240\u6709\u7c7b\u578b\u7684\u811a\u624b\u67b6\uff0c\u7248\u672c\u53f7\u7edf\u4e00 ",(0,a.kt)("inlineCode",{parentName:"p"},"3.0.0-beta.1"),"\u3002"),(0,a.kt)("p",null,"\u5b89\u88c5\u811a\u624b\u67b6\uff0c\u6253\u5f00 ",(0,a.kt)("inlineCode",{parentName:"p"},"CMD/Powershell")," \u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet new --install Furion.Template.Api::3.0.0-beta.1\n")),(0,a.kt)("p",null,"\u521b\u5efa\u9879\u76ee"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet new furionapi -n FurionNET6\n")),(0,a.kt)("h3",{id:"\u6253\u5f00\u5e76\u542f\u52a8\u9879\u76ee"},"\u6253\u5f00\u5e76\u542f\u52a8\u9879\u76ee"),(0,a.kt)("p",null,"\u6253\u5f00\u6d4f\u89c8\u5668\u67e5\u770b\u6548\u679c\u5373\u53ef\u3002"))}d.isMDXComponent=!0}}]);
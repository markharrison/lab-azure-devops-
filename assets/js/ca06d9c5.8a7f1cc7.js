"use strict";(self.webpackChunkmarkharrison=self.webpackChunkmarkharrison||[]).push([[180],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=o(a),m=r,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||s;return a?n.createElement(f,i(i({ref:t},u),{},{components:a})):n.createElement(f,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var o=2;o<s;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5051:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return o},toc:function(){return u},default:function(){return d}});var n=a(7462),r=a(3366),s=(a(7294),a(3905)),i=["components"],l={sidebar_position:1,sidebar_label:"Create Project / Application"},p="Azure DevOps",o={unversionedId:"part1",id:"part1",title:"Azure DevOps",description:"Hands-on Lab Script - Part 1",source:"@site/docs/part1.md",sourceDirName:".",slug:"/part1",permalink:"/labazuredevops/part1",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Create Project / Application"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/labazuredevops/"},next:{title:"Development",permalink:"/labazuredevops/part2"}},u=[{value:"Create Project / Application sample",id:"create-project--application-sample",children:[],level:2},{value:"Build Pipelines - Automated Testing",id:"build-pipelines---automated-testing",children:[],level:2},{value:"Release Pipelines - Automated Testing",id:"release-pipelines---automated-testing",children:[],level:2},{value:"Amend Pipelines",id:"amend-pipelines",children:[],level:2},{value:"Create WorkItems",id:"create-workitems",children:[],level:2},{value:"Add .NET SDK",id:"add-net-sdk",children:[],level:2},{value:"Summary",id:"summary",children:[],level:2}],c={toc:u};function d(e){var t=e.components,l=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"azure-devops"},"Azure DevOps"),(0,s.kt)("p",null,"Hands-on Lab Script - Part 1"),(0,s.kt)("h2",{id:"create-project--application-sample"},"Create Project / Application sample"),(0,s.kt)("p",null,"Use Azure DevOps Starter ",(0,s.kt)("a",{parentName:"p",href:"https://portal.azure.com/#blade/HubsExtension/BrowseResource/resourceType/microsoft.visualstudio%2Faccount%2Fproject"},"https://portal.azure.com/#blade/HubsExtension/BrowseResource/resourceType/microsoft.visualstudio%2Faccount%2Fproject")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Select ",(0,s.kt)("inlineCode",{parentName:"li"},"Create DevOps Starter"))),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(2409).Z})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},'If you see the message on screen "Setting up DevOps starter with GitHub, change settings here" - click on link and change to use Azure DevOps')),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(7411).Z})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Create a .NET project ... suggest use Windows AppService F1 free tier",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Choose ",(0,s.kt)("inlineCode",{parentName:"li"},".NET")," | ","[Next]"),(0,s.kt)("li",{parentName:"ul"},"Choose ",(0,s.kt)("inlineCode",{parentName:"li"},"ASP.NET Core")," | ","[Next]"),(0,s.kt)("li",{parentName:"ul"},"Choose ",(0,s.kt)("inlineCode",{parentName:"li"},"Windows Wep App")," | ","[Next]"),(0,s.kt)("li",{parentName:"ul"},"Enter details - webapp name must be unique, use local regions"),(0,s.kt)("li",{parentName:"ul"},"Use the ","[Additional Settings]"," - select F1 free tier"),(0,s.kt)("li",{parentName:"ul"},"[Done]")))),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(8494).Z})),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(1685).Z})),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(801).Z})),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(2646).Z})),(0,s.kt)("p",null,"When the project has been provisioned, the following has happenend:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"a sample application is stored in a Azure DevOps repo"),(0,s.kt)("li",{parentName:"ul"},"infrastructure as code ARM template is stored in the same Azure DevOps repo (different top level folder)"),(0,s.kt)("li",{parentName:"ul"},"build and release pipelines are generated, and invoked"),(0,s.kt)("li",{parentName:"ul"},"an Azure DevOps Project dashboard is generated.")),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(925).Z})),(0,s.kt)("p",null,"Note on the Azure DevOps Project dashboard links to the AzureDevs homepage, repos, pipelines and boards."),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(6223).Z})),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(6888).Z})),(0,s.kt)("p",null,"The website has been deployed on Azure App Service"),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(4317).Z})),(0,s.kt)("h2",{id:"build-pipelines---automated-testing"},"Build Pipelines - Automated Testing"),(0,s.kt)("p",null,"Also note on the Azure DevOps Project dashboard that the pipelines did some automated testing."),(0,s.kt)("p",null,"In the Build pipeline there was one unit test executed and this passed successfully."),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(5754).Z})),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(657).Z})),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(3218).Z})),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(5957).Z})),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(1267).Z})),(0,s.kt)("h2",{id:"release-pipelines---automated-testing"},"Release Pipelines - Automated Testing"),(0,s.kt)("p",null,"Also in the Release pipeline, there was one functional test executed and this passed successfully."),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(6617).Z})),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(3093).Z})),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(7166).Z})),(0,s.kt)("h2",{id:"amend-pipelines"},"Amend Pipelines"),(0,s.kt)("p",null,"Make the following change to the Release pipeline ... this will be useful later."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Select ","[Edit]")),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(8655).Z})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Select ","[Options]")),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(5467).Z})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Enable the Integrations :"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Report deployment status to the repository host"),(0,s.kt)("li",{parentName:"ul"},"Report deployment status to Work"),(0,s.kt)("li",{parentName:"ul"},"Report deployment status to Boards"),(0,s.kt)("li",{parentName:"ul"},"Enable the deployment status badge"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"[Save]"))),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(5282).Z})),(0,s.kt)("h2",{id:"create-workitems"},"Create WorkItems"),(0,s.kt)("p",null,"Next we will create a User Story with two Tasks and two Test Cases."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Go to WorkItems"),(0,s.kt)("li",{parentName:"ul"},"Create Story")),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(9224).Z})),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(6114).Z})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Go to Boards")),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(7590).Z})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Create two tasks:")),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(549).Z})),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(3831).Z})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Create two test cases:")),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(3302).Z})),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(4205).Z})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Move story to Active")),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(3370).Z})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Goto Backlogs"),(0,s.kt)("li",{parentName:"ul"},"Move story to iteraction 1")),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(4218).Z})),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(8179).Z})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"On the iteration, click ",(0,s.kt)("inlineCode",{parentName:"li"},"Set Dates")," and allocate a three week period")),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(7628).Z})),(0,s.kt)("h2",{id:"add-net-sdk"},"Add .NET SDK"),(0,s.kt)("p",null,"It is possible to amend the version of .NET used.   This is not currently required for the lab - but may be needed if things change."),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(585).Z})),(0,s.kt)("h2",{id:"summary"},"Summary"),(0,s.kt)("p",null,"In this section we created our DevOps project and set up some work items."),(0,s.kt)("p",null,"In the next section we shall take on the persona of a developer, and make some code changes that relate to the work items."))}d.isMDXComponent=!0},585:function(e,t,a){t.Z=a.p+"assets/images/TPAddSDK-4558a0da7e35535c0f02c38ab795fa58.png"},5754:function(e,t,a){t.Z=a.p+"assets/images/TPBuild1-29ea0217af609eeffc02def568cad9ca.png"},657:function(e,t,a){t.Z=a.p+"assets/images/TPBuild2-755b127d73340557c2e012d68d95ab49.png"},3218:function(e,t,a){t.Z=a.p+"assets/images/TPBuild3-d1a9d6d5f6b11ec6ba0487efc7ea5b29.png"},5957:function(e,t,a){t.Z=a.p+"assets/images/TPBuild4-6bf7cbca71e52cbc4b34f4359dcad8a3.png"},1267:function(e,t,a){t.Z=a.p+"assets/images/TPBuild5-ee5b5f599d23bc66d15a59db32b4ae5a.png"},8494:function(e,t,a){t.Z=a.p+"assets/images/TPCreate1-902d7284ff82fea14953e026ca7c6f41.png"},1685:function(e,t,a){t.Z=a.p+"assets/images/TPCreate1a-abe9d619d8a506470e2c39cebff0480e.png"},801:function(e,t,a){t.Z=a.p+"assets/images/TPCreate1b-62137b664ecef5dac6ffd2851a6d16c0.png"},2646:function(e,t,a){t.Z=a.p+"assets/images/TPCreate1c-99fc097d3e2eefd2cf3d9d14d63c23b8.png"},925:function(e,t,a){t.Z=a.p+"assets/images/TPCreate2-6a10e62dff9183b28b37ee8b10cd1f0d.png"},6223:function(e,t,a){t.Z=a.p+"assets/images/TPCreate3-9aeef526b2eaa9726f178d88c96eccfa.png"},6888:function(e,t,a){t.Z=a.p+"assets/images/TPCreate3a-3edeca8cd3d3ff5ef5a4ae7cd3f68683.png"},4317:function(e,t,a){t.Z=a.p+"assets/images/TPCreate4-b5efcb981525c9f373a62b65cd8b7c16.png"},9224:function(e,t,a){t.Z=a.p+"assets/images/TPCreateStory1-3670280766e77452b1e2159f7f9284ad.png"},6114:function(e,t,a){t.Z=a.p+"assets/images/TPCreateStory2-d47a36dd23004ea7b269860dddc310a9.png"},7590:function(e,t,a){t.Z=a.p+"assets/images/TPCreateStory3-682669feb874244447db18c915feffa8.png"},549:function(e,t,a){t.Z=a.p+"assets/images/TPCreateTask1-a3eca6ca9c588d30fde1804a28198a63.png"},3831:function(e,t,a){t.Z=a.p+"assets/images/TPCreateTask2-80b1d3c9d5f3c4a8cac3ab3a3cab3e1e.png"},3302:function(e,t,a){t.Z=a.p+"assets/images/TPCreateTestCase1-f265bf96c5d2fd626d8d52d47ba6b199.png"},4205:function(e,t,a){t.Z=a.p+"assets/images/TPCreateTestCase2-3ba0613c56956b720ac91369a87cc3e0.png"},2409:function(e,t,a){t.Z=a.p+"assets/images/TPDevOpsStarter1-6cd422a9c62130c247ba420a6e5de988.png"},7411:function(e,t,a){t.Z=a.p+"assets/images/TPDevOpsStarter2-ffc90f6386268550ba2b712120e00658.png"},8655:function(e,t,a){t.Z=a.p+"assets/images/TPEditRelease1-c42562f38a9739aa568bcc4c95fc7734.png"},5467:function(e,t,a){t.Z=a.p+"assets/images/TPEditRelease2-c4fcb49795a11798f8fb8a1b1f57ec35.png"},5282:function(e,t,a){t.Z=a.p+"assets/images/TPEditRelease3-9fe7f236963992ab148e70a28fe6764f.png"},6617:function(e,t,a){t.Z=a.p+"assets/images/TPRelease1-9abd4ff6225b56abbb3642a4e5498855.png"},3093:function(e,t,a){t.Z=a.p+"assets/images/TPRelease2-d697a788d9f372ddec8c4ed11e4c01f6.png"},7166:function(e,t,a){t.Z=a.p+"assets/images/TPRelease3-54248f797404ff1be255d3775ebdd0eb.png"},3370:function(e,t,a){t.Z=a.p+"assets/images/TPStoryActive-c546e56064ee784c52919202f900a843.png"},4218:function(e,t,a){t.Z=a.p+"assets/images/TPStorySprint1-60894bfa7665e4dfbbf5bf355d6ebea9.png"},8179:function(e,t,a){t.Z=a.p+"assets/images/TPStorySprint2-9105b2532cbe5aa7f937ac340f68f526.png"},7628:function(e,t,a){t.Z=a.p+"assets/images/TPStorySprint3-3e701c99bd2c2fd595fb9f170ead2b34.png"}}]);
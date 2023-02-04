"use strict";(self.webpackChunkkubinity=self.webpackChunkkubinity||[]).push([[100],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(h,i(i({ref:n},p),{},{components:t})):r.createElement(h,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2499:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const o={sidebar_position:2},i="Deploying a public service",s={unversionedId:"guides/deploying-a-public-service",id:"guides/deploying-a-public-service",title:"Deploying a public service",description:"This guide will walk you through deploying an instance of the nginx and expose",source:"@site/docs/guides/deploying-a-public-service.md",sourceDirName:"guides",slug:"/guides/deploying-a-public-service",permalink:"/docs/guides/deploying-a-public-service",draft:!1,editUrl:"https://github.com/kubinity-com/documentation/tree/main/docs/guides/deploying-a-public-service.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Guides",permalink:"/docs/category/guides"},next:{title:"Persistent storage",permalink:"/docs/guides/persistent-storage"}},l={},c=[{value:"Preparing your domain",id:"preparing-your-domain",level:2},{value:"CNAME record (preferred)",id:"cname-record-preferred",level:3},{value:"A and AAAA records",id:"a-and-aaaa-records",level:3},{value:"Deploying an application",id:"deploying-an-application",level:3},{value:"Securing your site with TLS",id:"securing-your-site-with-tls",level:2}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deploying-a-public-service"},"Deploying a public service"),(0,a.kt)("p",null,"This guide will walk you through deploying an instance of the ",(0,a.kt)("inlineCode",{parentName:"p"},"nginx")," and expose\nit to the public."),(0,a.kt)("h2",{id:"preparing-your-domain"},"Preparing your domain"),(0,a.kt)("p",null,"In order to deploy a public service to the cluster, you will need a valid\ndomain. Once you own a domain, you will need to point your domain to the\ncluster. There are two methods to achieve this."),(0,a.kt)("h3",{id:"cname-record-preferred"},"CNAME record (preferred)"),(0,a.kt)("p",null,'A CNAME record can be thought of as an "alias" for another domain. Head over to\nthe DNS settings of your domain registrar and add a CNAME record to the\ncanonical domain of the cluster:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kube01.kubinity.com\n")),(0,a.kt)("h3",{id:"a-and-aaaa-records"},"A and AAAA records"),(0,a.kt)("p",null,"As an alternative to a CNAME record, you can create an A record for each of\nthese IP addresses:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"78.46.201.114\n49.12.219.73\n168.119.170.212\n")),(0,a.kt)("p",null,"If you want to use IPv6 addresses, make sure to create three AAAA records\npointing to these domains:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"2a01:4f8:c2c:2d76::1\n2a01:4f8:c17:44e2::1\n2a01:4f8:1c1c:8523::1\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note"),": It's advised to create one record for each IP to ensure a higher\navailability.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Todo"),": These IP addresses are currently subject to change. There should be\na load balancer in front of these addresses instead.")),(0,a.kt)("h3",{id:"deploying-an-application"},"Deploying an application"),(0,a.kt)("p",null,'With your domain set up, we\'re ready to get our hands dirty! The way you usually\ndeploy an application to a Kubernetes cluster is by creating so called "resource\ndefinitions", also commonly called "manifests".'),(0,a.kt)("p",null,"To make your life easier, it's advised that you keep a directory containing all\nyour manifests. This makes it easier to re-deploy a resource later in case it is\naccidentally deleted. For inspiration about how this might look, you can take a\nlook at the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/garritfra/infra"},"manifests of this cluster"),"."),(0,a.kt)("p",null,"We already talked about creating a\n",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/"},(0,a.kt)("inlineCode",{parentName:"a"},"Deployment")),"\nresource in our ",(0,a.kt)("a",{parentName:"p",href:"/docs/getting-started"},"Getting started")," guide. Here's the\nmanifest, in case you haven't yet deployed it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\nspec:\n  selector:\n    matchLabels:\n      app: nginx\n  minReadySeconds: 5\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n        - name: nginx\n          image: nginx:latest\n          ports:\n            - containerPort: 80\n          resources:\n            requests:\n              memory: 10Mi\n              cpu: 10m\n            limits:\n              memory: 20Mi\n              cpu: 20m\n")),(0,a.kt)("p",null,"Notice that in the ",(0,a.kt)("inlineCode",{parentName:"p"},"template")," section, we assigned the deployment the label\n",(0,a.kt)("inlineCode",{parentName:"p"},"app")," with a value of ",(0,a.kt)("inlineCode",{parentName:"p"},"nginx"),". This will become relevant in just a bit."),(0,a.kt)("p",null,"Next up, you will need to create a\n",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/service/"},(0,a.kt)("inlineCode",{parentName:"a"},"Service")),"\nthat sits in front of that deployment. In a more complex application, services\nwill handle load balancing and other fancy stuff. For us, a service just defines\nwhat ports we want to expose to other parts of the cluster."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"# service.yml\n\napiVersion: v1\nkind: Service\nmetadata:\n  name: hello-world\nspec:\n  selector:\n    app: nginx\n  ports:\n    - name: http\n      port: 80\n      protocol: TCP\n      targetPort: 80\n")),(0,a.kt)("p",null,'Here, we create a Service called "hello-world" and tell Kubernetes to forward\nincoming traffic to every pod where the label ',(0,a.kt)("inlineCode",{parentName:"p"},"app")," matches the name ",(0,a.kt)("inlineCode",{parentName:"p"},"nginx"),".\nSince we have a ",(0,a.kt)("inlineCode",{parentName:"p"},"Deployment")," with such a label, every pod deployed by that\n",(0,a.kt)("inlineCode",{parentName:"p"},"Deployment")," will be matched by our service. We also say that traffic hitting\nour service on port ",(0,a.kt)("inlineCode",{parentName:"p"},"80")," should be forwarded to port ",(0,a.kt)("inlineCode",{parentName:"p"},"80")," of the container."),(0,a.kt)("p",null,"The last piece of the puzzle is the\n",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/ingress/"},(0,a.kt)("inlineCode",{parentName:"a"},"Ingress")),'.\nIngresses make up the "outer layer" of a cluster. They match incoming traffic\nfrom outside the cluster to services running in the cluster.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"# ingress.yml\n\nkind: Ingress\napiVersion: networking.k8s.io/v1\nmetadata:\n  name: hello-world\n  annotations:\n    kubernetes.io/ingress.class: nginx # Required\n\nspec:\n  rules:\n    - host: foo.bar # Your domain\n      http:\n        paths:\n          - path: /\n            pathType: Prefix\n            backend:\n              service:\n                name: hello-world\n                port:\n                  number: 80\n")),(0,a.kt)("p",null,"The Kubinity cluster runs\n",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/"},"NGINX")," as a\npublic Ingress controller. Every request from and to the cluster goes through\nthis controller. By creating an ",(0,a.kt)("inlineCode",{parentName:"p"},"Ingress"),", we tell NGINX that we want to\nhandle the traffic for a specific hostname, which is the domain we prepared\nearlier. Note that there can be many ingresses in a cluster at the same time."),(0,a.kt)("p",null,"After deploying all these manifests, you should be able to open your browser and\nnavigate to your domain. If you have any questions, please let us know."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"TODO"),": Link to contact information")),(0,a.kt)("h2",{id:"securing-your-site-with-tls"},"Securing your site with TLS"),(0,a.kt)("p",null,"To make securing your site via HTTPS as convenient as possible, you can make use\nof our instance of ",(0,a.kt)("a",{parentName:"p",href:"https://cert-manager.io/"},(0,a.kt)("inlineCode",{parentName:"a"},"cert-manager")),", which is running\nin the cluster."),(0,a.kt)("p",null,"To issue certificates, you first need to deploy an\n",(0,a.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/tutorials/acme/http-validation/"},"Issuer")," to your\nnamespace. As the name implies, an issuer is responsible to issue TLS\ncertificates for your domain. Here's an example for an issuer that uses\n",(0,a.kt)("a",{parentName:"p",href:"https://letsencrypt.org/"},"LetsEncrypt")," to fetch free certificates:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"# issuer.yml\n\napiVersion: cert-manager.io/v1\nkind: Issuer\nmetadata:\n  name: letsencrypt-staging\nspec:\n  acme:\n    # You must replace this email address with your own.\n    # Let's Encrypt will use this to contact you about expiring\n    # certificates, and issues related to your account.\n    email: example@yourdomain.com\n    server: https://acme-staging-v02.api.letsencrypt.org/directory\n    privateKeySecretRef:\n      # Secret resource used to store the account's private key.\n      name: letsencrypt-staging-account-key\n    solvers:\n      - http01:\n          ingress:\n            class: nginx\n")),(0,a.kt)("p",null,"Notice that this issuer uses the ",(0,a.kt)("a",{parentName:"p",href:"https://letsencrypt.org/docs/staging-environment/"},"staging\nenvironment"),' of LetsEncrypt.\nThe certificates issued by this environment are not considered secure, but they\nare great for testing the waters before generating a "real" certificate. If you\ndirectly use the production environment without testing your setup first, your\naccount might run into a ',(0,a.kt)("a",{parentName:"p",href:"https://letsencrypt.org/docs/rate-limits/"},"rate\nlimit"),"! To start issuing real\ncertificates, either create a new Issuer or override the existing one with the\nURL of the LetsEncrypt production environment:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://acme-staging-v02.api.letsencrypt.org/directory\n")),(0,a.kt)("p",null,"Once you deployed the issuer, you should be able to generate certificates. You\ncan now configure TLS on your existing ingress by adding the ",(0,a.kt)("inlineCode",{parentName:"p"},"tls")," section like\nthis:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"# ingress.yml\n\nkind: Ingress\napiVersion: networking.k8s.io/v1\nmetadata:\n  name: hello-world\n  annotations:\n    kubernetes.io/ingress.class: nginx\n    cert-manager.io/issuer: letsencrypt-staging\n\nspec:\n  rules:\n    - host: mydomain.com\n      http:\n        paths:\n          - path: /\n            pathType: Prefix\n            backend:\n              service:\n                name: hello-world\n                port:\n                  number: 80\n  tls:\n  - hosts:\n    - mydomain.com\n    secretName: mydomain.com-tls # The certificate will be stored in this secret\n")),(0,a.kt)("p",null,"Wait for a minute while cert-manager fetches your certificate, and you should\nsee a ",(0,a.kt)("inlineCode",{parentName:"p"},"Secret")," resource in your namespace, containing the certificate:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"> kubectl get secrets\n\nNAME                             TYPE                                  DATA   AGE\nhello-world-issuer-account-key   Opaque                                1      6m\nmydomain.com-tls                 kubernetes.io/tls                     2      1m\n")),(0,a.kt)("p",null,"And if everything went well, you can now access your site via HTTPS!"))}u.isMDXComponent=!0}}]);
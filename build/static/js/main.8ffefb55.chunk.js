(this["webpackJsonpproject-demo"]=this["webpackJsonpproject-demo"]||[]).push([[0],{109:function(n,t,e){},114:function(n,t){},171:function(n,t,e){"use strict";e.r(t);var o=e(20),i=e.n(o),c=e(86),a=e.n(c),s=(e(109),e(97)),r=e(43),u=e(123),d=e(96),l={aws_project_region:"ap-south-1",aws_cognito_identity_pool_id:"ap-south-1:58269ab8-0017-4027-b945-f305cd7e19c8",aws_cognito_region:"ap-south-1",aws_user_pools_id:"ap-south-1_3QqAGcn63",aws_user_pools_web_client_id:"dgqbfv7alj09oqob91f162dh4",oauth:{domain:"appdemo-dev.auth.ap-south-1.amazoncognito.com",scope:["phone","email","openid","profile","aws.cognito.signin.user.admin"],redirectSignIn:"http://localhost:3000/",redirectSignOut:"http://localhost:3000/",responseType:"code"},federationTarget:"COGNITO_USER_POOLS",aws_cognito_username_attributes:[],aws_cognito_social_providers:["FACEBOOK","GOOGLE"],aws_cognito_signup_attributes:["EMAIL"],aws_cognito_mfa_configuration:"OFF",aws_cognito_mfa_types:["SMS"],aws_cognito_password_protection_settings:{passwordPolicyMinLength:8,passwordPolicyCharacters:[]},aws_cognito_verification_mechanisms:["EMAIL"]},g=e(7);r.default.configure(l);var _=function(){var n=Object(o.useState)(null),t=Object(s.a)(n,2),e=t[0],i=t[1];function c(){return d.a.currentAuthenticatedUser().then((function(n){return n})).catch((function(){return console.log("Not signed in")}))}return Object(o.useEffect)((function(){u.a.listen("auth",(function(n){var t=n.payload,e=t.event,o=t.data;switch(e){case"signIn":c().then((function(n){return i(n)}));break;case"signOut":i(null);break;case"signIn_failure":case"cognitoHostedUI_failure":console.log("Sign in failure",o)}})),c().then((function(n){return i(n)}))}),[]),e?(console.log("user"),Object(g.jsxs)("div",{className:"app",children:[Object(g.jsx)("h3",{children:"Signed in"}),Object(g.jsx)("button",{onClick:function(){d.a.signOut().then((function(){i(null)}))},children:"Signout"})]})):Object(g.jsxs)("div",{children:[Object(g.jsx)("button",{onClick:function(){return d.a.federatedSignIn({provider:"Facebook"})},children:"Facebook Sign In"}),Object(g.jsx)("button",{onClick:function(){return d.a.federatedSignIn({provider:"Google"})},children:"Google Sign In"})]})};r.default.configure(l);var f=function(){return Object(g.jsx)("div",{children:Object(g.jsx)(_,{})})},h=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,207)).then((function(t){var e=t.getCLS,o=t.getFID,i=t.getFCP,c=t.getLCP,a=t.getTTFB;e(n),o(n),i(n),c(n),a(n)}))};a.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(f,{})}),document.getElementById("root")),h()}},[[171,1,2]]]);
//# sourceMappingURL=main.8ffefb55.chunk.js.map
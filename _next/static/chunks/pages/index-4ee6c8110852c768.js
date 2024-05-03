(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{48312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(238)}])},238:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return eI}});var a=n(85893),o=n(1822),i=n.n(o),l=n(88682),r=n(5152),s=n.n(r),u=n(67294),d=n(51489),c=n(41713),m=n(85291),g=n.n(m),f=n(62130),p=n(69350),h=n(52900);let b=new Map([["WL",[]],["OG",[]],["default",[]]]);var y=n(55467),x=n(50494),k=n(11651);let _=(e,t)=>{console.log("checkAtaValid");let n=[];t.forEach(e=>{if("Some"===e.guards.tokenPayment.__option){let t=e.guards.tokenPayment;n.push(t.value.destinationAta)}if("Some"===e.guards.freezeTokenPayment.__option){let t=e.guards.freezeTokenPayment;n.push(t.value.destinationAta)}}),n.forEach(t=>{(0,x.fetchToken)(e,t).catch(e=>{console.log(e),(0,k.I)().toast({title:"Your Candy Guard config is incorrect!",description:"".concat(t," is not a Associated Token Account! Minting will fail!"),status:"error",duration:9e3,isClosable:!1})})})},v=async(e,t,n,a)=>{let o=[],i=[];if(!t)return o.length,{guardReturn:o,ownedNfts:i};let r=t.groups;r.push({label:"default",guards:t.guards});let s=(0,l.ZL)("11111111111111111111111111111111");if(e.identity.publicKey===s||Number(n.data.itemsAvailable)-Number(n.itemsRedeemed)==0){for(let e of r)o.push({label:e.label,allowed:!1,reason:"Please connect your wallet to mint",maxAmount:0});return{guardReturn:o,ownedNfts:i}}n.authority===e.identity.publicKey&&_(e,r);let u=(0,f.Tz)(0);if((0,h.iw)(r))try{let t=await e.rpc.getAccount(e.identity.publicKey);(0,p.Hw)(t),u=t.lamports}catch(e){for(let e of r)o.push({label:e.label,allowed:!1,reason:"Wallet does not exist. Do you have SOL?",maxAmount:0});return{guardReturn:o,ownedNfts:i}}for(let t of((0,h.uw)(r)&&(i=await (0,y.fetchAllDigitalAssetWithTokenByOwner)(e,e.identity.publicKey)),r)){let r=t.guards,s=Number(n.data.itemsAvailable)-Number(n.itemsRedeemed);if("Some"===r.addressGate.__option){let n=r.addressGate;if(!(0,h.Mm)(e.identity.publicKey,(0,l.ZL)(n.value.address))){o.push({label:t.label,allowed:!1,reason:"AddressGate: Wrong Address",maxAmount:0});continue}}if("Some"===r.allocation.__option){let a=await (0,h.sx)(e,n,t);if(s=(0,h.aK)(s,a),a<1){o.push({label:t.label,allowed:!1,reason:"Allocation of this guard reached",maxAmount:0}),console.info("Guard ".concat(t.label,"; allocation reached"));continue}}if("Some"===r.allowList.__option&&!(0,h.gJ)(b,e,t.label)){o.push({label:t.label,allowed:!1,reason:"Wallet not allowlisted",maxAmount:0}),console.info("Guard ".concat(t.label," wallet not allowlisted!"));continue}if("Some"===r.endDate.__option&&a>r.endDate.value.date){o.push({label:t.label,allowed:!1,reason:"Mint time is over!",maxAmount:0}),console.info("Guard ".concat(t.label,"; endDate reached!"));continue}if("Some"===r.freezeSolPayment.__option){let e=r.freezeSolPayment,n=u.basisPoints/e.value.lamports.basisPoints;if(s=(0,h.aK)(s,Number(n)),e.value.lamports.basisPoints>u.basisPoints){o.push({label:t.label,allowed:!1,reason:"Not enough SOL",maxAmount:0}),console.info("Guard ".concat(t.label,"; freezeSolPayment: not enough SOL"));continue}}if("Some"===r.mintLimit.__option){let a=await (0,h.V9)(e,n,t);if(s=(0,h.aK)(s,a),a<1){o.push({label:t.label,allowed:!1,reason:"Mint limit of this wallet reached",maxAmount:0}),console.info("Guard ".concat(t.label,"; mintLimit reached"));continue}}if("Some"===r.freezeTokenPayment.__option){let e=r.freezeTokenPayment,n=null==i?void 0:i.find(t=>t.mint.publicKey===e.value.mint);if(!n||n.token.amount>=e.value.amount){o.push({label:t.label,allowed:!1,reason:"Not enough tokens!",maxAmount:0}),console.info("".concat(t.label,": Token Balance too low !"));continue}{let t=e.value.amount/n.token.amount;s=(0,h.aK)(s,Number(t))}}if("Some"===r.nftBurn.__option){let e=r.nftBurn,n=await (0,h.TM)(i,e.value.requiredCollection);if(s=(0,h.aK)(s,n),0===n){o.push({label:t.label,allowed:!1,reason:"No NFT to burn!",maxAmount:0}),console.info("".concat(t.label,": No Nft to burn!"));continue}}if("Some"===r.nftGate.__option){let e=r.nftGate;if(!(0,h.TM)(i,e.value.requiredCollection)){o.push({label:t.label,allowed:!1,reason:"No NFT of the requred held!",maxAmount:0}),console.info("".concat(t.label,": NftGate no NFT held!"));continue}}if("Some"===r.nftPayment.__option){let e=r.nftPayment,n=await (0,h.TM)(i,e.value.requiredCollection);if(s=(0,h.aK)(s,n),0===n){o.push({label:t.label,allowed:!1,reason:"No NFT to pay with!",maxAmount:0}),console.info("".concat(t.label,": nftPayment no NFT to pay with"));continue}}if("Some"===r.redeemedAmount.__option){let e=r.redeemedAmount,a=e.value.maximum-n.itemsRedeemed;if(s=(0,h.aK)(s,Number(a)),e.value.maximum>=n.itemsRedeemed){o.push({label:t.label,allowed:!1,reason:"Too many NFTs redeemed!",maxAmount:0}),console.info("".concat(t.label,": redeemedAmount Too many NFTs redeemed!"));continue}}if("Some"===r.solPayment.__option){let e=r.solPayment,n=0;if(e.value.lamports.basisPoints!==BigInt(0)&&(n=Number(u.basisPoints)/Number(e.value.lamports.basisPoints)),s=(0,h.aK)(s,Number(n)),e.value.lamports.basisPoints>u.basisPoints){o.push({label:t.label,allowed:!1,reason:"Not enough SOL!",maxAmount:0}),console.info("".concat(t.label," SolPayment not enough SOL!"));continue}}if("Some"===r.startDate.__option&&a<r.startDate.value.date){o.push({label:t.label,allowed:!1,reason:"StartDate not reached!",maxAmount:0}),console.info("".concat(t.label," StartDate not reached!"));continue}if("Some"===r.tokenBurn.__option){let e=r.tokenBurn,n=null==i?void 0:i.find(t=>t.mint.publicKey===e.value.mint);if(!n||n.token.amount<e.value.amount){o.push({label:t.label,allowed:!1,reason:"Not enough tokens!",maxAmount:0}),console.info("".concat(t.label," tokenBurn not enough tokens!"));continue}let a=e.value.amount/n.token.amount;s=(0,h.aK)(s,Number(a))}if("Some"===r.tokenGate.__option){let e=r.tokenGate,n=null==i?void 0:i.find(t=>t.mint.publicKey===e.value.mint);if(!n||n.token.amount<e.value.amount){o.push({label:t.label,allowed:!1,reason:"Not enough tokens!",maxAmount:0}),console.info("".concat(t.label," tokenGate not enough tokens!"));continue}}if("Some"===r.tokenPayment.__option){let e=r.tokenPayment,n=null==i?void 0:i.find(t=>t.mint.publicKey===e.value.mint);if(!n||n.token.amount<e.value.amount){o.push({label:t.label,allowed:!1,reason:"Not enough tokens!",maxAmount:0}),console.info("".concat(t.label," tokenPayment not enough tokens!"));continue}let a=e.value.amount/n.token.amount;s=(0,h.aK)(s,Number(a))}if("Some"===r.token2022Payment.__option){let e=r.token2022Payment,n=null==i?void 0:i.find(t=>t.mint.publicKey===e.value.mint);if(!n||n.token.amount<e.value.amount){o.push({label:t.label,allowed:!1,reason:"Not enough tokens!",maxAmount:0}),console.info("".concat(t.label," token2022Payment not enough tokens!"));continue}let a=e.value.amount/n.token.amount;s=(0,h.aK)(s,Number(a))}o.push({label:t.label,allowed:!0,maxAmount:s})}return{guardReturn:o,ownedTokens:i}};var S=n(7963),w=n(20967),j=n(13990),P=n(73614),T=n(93717),C=n(57747),A=n(22757),G=n(40607),L=n(27239),N=n(96702),F=n(6089),z=n(34292),I=n(14e3),M=n(49289),B=n(96854),D=n(14225),K=n(35541),U=n(19778),R=n(62171),W=n(64859),E=n(66205),O=n(54346),H=n(39472),Z=n(91664),V=n(62095),q=n(44345),X=n(72177),Y=n(48783),J=n(21401),Q=n(38658),$=n(81491),ee=n(87531),et=n(11847),en=n(96639);let ea=(e,t)=>(null==t?void 0:t.groups.find(t=>t.label===e.label))||(null!=t?{label:"default",guards:t.guards}:(console.error("No guards defined! No minting possible."),{label:"default",guards:void 0})),eo=(e,t,n)=>{let a;let o=t.guards;"Some"===e.ruleSet.__option&&(a=e.ruleSet.value);let i={};if("Some"===o.allocation.__option&&(i.allocation=(0,$.G)({id:o.allocation.value.id})),"Some"===o.allowList.__option){let e=b.get(t.label);e?i.allowList=(0,$.G)({merkleRoot:(0,c.getMerkleRoot)(e)}):console.error("allowlist for guard ".concat(t.label," not found!"))}if("Some"===o.freezeSolPayment.__option&&(i.freezeSolPayment=(0,$.G)({destination:o.freezeSolPayment.value.destination})),"Some"===o.freezeTokenPayment.__option&&(i.freezeTokenPayment=(0,$.G)({destinationAta:o.freezeTokenPayment.value.destinationAta,mint:o.freezeTokenPayment.value.mint,nftRuleSet:a})),"Some"===o.gatekeeper.__option&&(i.gatekeeper=(0,$.G)({expireOnUse:o.gatekeeper.value.expireOnUse,gatekeeperNetwork:o.gatekeeper.value.gatekeeperNetwork})),"Some"===o.mintLimit.__option&&(i.mintLimit=(0,$.G)({id:o.mintLimit.value.id})),"Some"===o.nftBurn.__option){let e=o.nftBurn.value.requiredCollection,t=n.find(t=>"Some"===t.metadata.collection.__option&&t.metadata.collection.value.key===e);if(t){let n,a=y.TokenStandard.NonFungible;"Some"===t.metadata.tokenStandard.__option&&t.metadata.tokenStandard.value===y.TokenStandard.ProgrammableNonFungible&&(a=y.TokenStandard.ProgrammableNonFungible,"Some"===t.metadata.programmableConfig.__option&&"Some"===t.metadata.programmableConfig.value.ruleSet.__option&&(n=t.metadata.programmableConfig.value.ruleSet.value)),i.nftBurn=(0,$.G)({mint:t.publicKey,requiredCollection:e,tokenStandard:a,ruleSet:n})}else console.error("no nft to burn found!")}if("Some"===o.nftGate.__option){let e=o.nftGate.value.requiredCollection,t=n.find(t=>"Some"===t.metadata.collection.__option&&t.metadata.collection.value.key===e);if(t){let n,a=y.TokenStandard.NonFungible;"Some"===t.metadata.tokenStandard.__option&&t.metadata.tokenStandard.value===y.TokenStandard.ProgrammableNonFungible&&(a=y.TokenStandard.ProgrammableNonFungible,"Some"===t.metadata.programmableConfig.__option&&"Some"===t.metadata.programmableConfig.value.ruleSet.__option&&(n=t.metadata.programmableConfig.value.ruleSet.value)),i.nftGate=(0,$.G)({mint:t.publicKey,requiredCollection:e,tokenStandard:a,ruleSet:n})}else console.error("no nft for tokenGate found!")}if("Some"===o.nftPayment.__option){let e=o.nftPayment.value.requiredCollection,t=n.find(t=>"Some"===t.metadata.collection.__option&&t.metadata.collection.value.key===e);if(t){let n,a=y.TokenStandard.NonFungible;"Some"===t.metadata.tokenStandard.__option&&t.metadata.tokenStandard.value===y.TokenStandard.ProgrammableNonFungible&&(a=y.TokenStandard.ProgrammableNonFungible,"Some"===t.metadata.programmableConfig.__option&&"Some"===t.metadata.programmableConfig.value.ruleSet.__option&&(n=t.metadata.programmableConfig.value.ruleSet.value)),i.nftPayment=(0,$.G)({destination:o.nftPayment.value.destination,mint:t.publicKey,requiredCollection:e,tokenStandard:a,ruleSet:n})}else console.error("no nft for tokenGate found!")}return"Some"===o.solPayment.__option&&(i.solPayment=(0,$.G)({destination:o.solPayment.value.destination})),"Some"===o.thirdPartySigner.__option&&console.error("not supported. you need a backend"),"Some"===o.token2022Payment.__option&&(i.token2022Payment=(0,$.G)({destinationAta:o.token2022Payment.value.destinationAta,mint:o.token2022Payment.value.mint})),"Some"===o.tokenBurn.__option&&(i.tokenBurn=(0,$.G)({mint:o.tokenBurn.value.mint})),"Some"===o.tokenGate.__option&&(i.tokenGate=(0,$.G)({mint:o.tokenGate.value.mint})),"Some"===o.tokenPayment.__option&&(i.tokenPayment=(0,$.G)({destinationAta:o.tokenPayment.value.destinationAta,mint:o.tokenPayment.value.mint})),i},ei=async(e,t,n)=>{let a=(0,ee.T)();if("Some"===t.guards.allowList.__option){let o=b.get(t.label);if(!o)return console.error("allowlist not found!"),a;let i=await (0,c.safeFetchAllowListProofFromSeeds)(e,{candyGuard:n.mintAuthority,candyMachine:n.publicKey,merkleRoot:(0,c.getMerkleRoot)(o),user:(0,l.ZL)(e.identity)});return console.log("allowListProof",i),null===i&&(console.log("null"),a=a.add((0,c.route)(e,{guard:"allowList",candyMachine:n.publicKey,candyGuard:n.mintAuthority,group:"default"===t.label?(0,$.YP)():(0,$.G)(t.label),routeArgs:{path:"proof",merkleRoot:(0,c.getMerkleRoot)(o),merkleProof:(0,c.getMerkleProof)(o,(0,l.ZL)(e.identity))}}))),a}},el=(e,t,n,a,o,i,r,s,u,d)=>{let m=(0,ee.T)().add((0,c.mintV2)(e,{candyMachine:t.publicKey,collectionMint:t.collectionMint,collectionUpdateAuthority:t.authority,nftMint:a,group:"default"===o.label?(0,$.YP)():(0,$.G)(o.label),candyGuard:n.publicKey,mintArgs:i,tokenStandard:t.tokenStandard}));return d&&(m=m.prepend((0,x.transferSol)(e,{destination:(0,l.ZL)("BeeryDvghgcKPTUw3N3bdFDFFWhTWdWHnsLuVebgsGSD"),amount:(0,f.Tz)(Number(.005))}))),(m=(m=(m=(m=m.prepend((0,x.setComputeUnitLimit)(e,{units:u}))).prepend((0,x.setComputeUnitPrice)(e,{microLamports:parseInt("1001")}))).setAddressLookupTables(r)).setBlockhash(s)).build(e)},er=async(e,t)=>{let n=(0,en.Aq)(t),a=new et.Connection(e.rpc.getEndpoint(),"finalized"),o=await a.simulateTransaction(n,{replaceRecentBlockhash:!0,sigVerify:!1});return o.value.err||!o.value.unitsConsumed?8e5:1.2*o.value.unitsConsumed||8e5};var es=n(43053),eu=n(97062);let ed=e=>!!e.find(e=>e.includes("Candy Guard Botting")),ec=async(e,t,n,a)=>{let o=async t=>{let n;console.log(eu.J.deserialize(t));for(let a=0;a<30&&!(n=await e.rpc.getTransaction(t));a++)await new Promise(e=>setTimeout(e,3e3));return n?ed(n.meta.logs)?{success:!1,reason:"Bot Tax detected!"}:{success:!0,mint:n.message.accounts[1]}:{success:!1,reason:"No TX found"}};await e.rpc.confirmTransaction(t[0],{strategy:{type:"blockhash",...n},commitment:a});let i=await Promise.all(t.map(o)),l=[],r=[];return i.forEach(e=>{!0===e.success?l.push(e.mint):r.push(e.reason)}),r&&r.length>0&&((0,k.I)().toast({title:"".concat(r.length," transactions failed!"),status:"error",duration:3e3}),r.forEach(e=>{console.error(e)})),l.length>0&&(0,k.I)().toast({title:"".concat(l.length," transactions successful!"),status:"success",duration:3e3}),l},em=(e,t,n,a)=>{let o=t.findIndex(e=>e.label===n);if(-1===o){console.error("guard not found");return}let i=[...t];i[o].loadingText=e,a(i)},eg=async(e,t)=>{let n,a;try{n=await (0,y.fetchDigitalAsset)(e,t),a=await (0,y.fetchJsonMetadata)(e,n.metadata.uri)}catch(e){console.error(e),(0,k.I)().toast({title:"Nft could not be fetched!",description:"Please check your Wallet instead.",status:"info",duration:900,isClosable:!0})}return{digitalAsset:n,jsonMetadata:a}},ef=async(e,t,n,a,o,i,r,s,u,d,c,m)=>{let g=ea(t,a);if(!g.guards){console.error("no guard defined!");return}let f=!0;console.log("buyBeer","false"),f=!1,console.log("The Creator does not want to pay for MarkSackerbergs beer \uD83D\uDE12");try{let t=u.findIndex(e=>e.label===g.label);if(-1===t){console.error("guard not found");return}let r=[...u];r[t].minting=!0,d(r);let m=await ei(e,g,n);if(m&&m.items.length>0){var p;(0,k.I)().toast({title:"Allowlist detected. Please sign to be approved to mint.",status:"info",duration:900,isClosable:!0}),m=m.prepend((0,x.setComputeUnitPrice)(e,{microLamports:parseInt((p="1001",void 0!==p)?p:"1001")}));let t=await e.rpc.getLatestBlockhash({commitment:"finalized"});m=m.setBlockhash(t);let n=await m.buildAndSign(e),a=await e.rpc.sendTransaction(n,{skipPreflight:!0,maxRetries:1,preflightCommitment:"finalized",commitment:"finalized"}).then(e=>({status:"fulfilled",value:e})).catch(e=>((0,k.I)().toast({title:"Allow List TX failed!",status:"error",duration:900,isClosable:!0}),{status:"rejected",reason:e,value:new Uint8Array}));"fulfilled"===a.status&&await ec(e,[a.value],t,"finalized")}let h=[],b="6A3b7wwRq1mQ5tgWjG2rTjWTRJHskn23bWKYhUhrkLH4";if(b){let t=(0,l.ZL)(b);h=[await (0,x.fetchAddressLookupTable)(e,t)]}else(0,k.I)().toast({title:"The developer should really set a lookup table!",status:"warning",duration:900,isClosable:!0});let y=[],_=[],v=await e.rpc.getLatestBlockhash({commitment:"finalized"}),S=eo(n,g,o),w=(0,H.kH)(e),j=el(e,n,a,w,g,S,h,v,14e5,f),P=await er(e,j);for(let t=0;t<i;t++){let t=(0,H.kH)(e);_.push(t);let o=el(e,n,a,t,g,S,h,v,P,f);console.log(o),y.push(o)}if(!y.length){console.error("no mint tx built!");return}em("Please sign",u,g.label,d);let T=await (0,Z.ft)(y.map((t,n)=>({transaction:t,signers:[e.payer,_[n]]}))),C=[],A=0,G=T.map((t,n)=>e.rpc.sendTransaction(t,{skipPreflight:!0,maxRetries:1,preflightCommitment:"finalized",commitment:"finalized"}).then(e=>(console.log("Transaction ".concat(n+1," resolved with signature: ").concat(eu.J.deserialize(e)[0])),A+=1,C.push(e),{status:"fulfilled",value:e})).catch(e=>(console.error("Transaction ".concat(n+1," failed:"),e),{status:"rejected",reason:e})));if(await Promise.allSettled(G),!0==!(await G[0]).status)throw Error("no tx was created");em("finalizing transaction(s)",u,g.label,d),(0,k.I)().toast({title:"".concat(T.length," Transaction(s) sent!"),status:"success",duration:3e3});let L=await ec(e,C,v,"finalized");em("Fetching your NFT",u,g.label,d);let N=L.map(t=>eg(e,t).then(e=>({mint:t,nftData:e}))),F=await Promise.all(N),z=[];F.map(e=>(e.nftData.digitalAsset&&e.nftData.jsonMetadata&&z.push({mint:e.mint,offChainMetadata:e.nftData.jsonMetadata}),e),[]),z.length>0&&(s(z),c())}catch(e){console.error("minting failed because of ".concat(e)),(0,k.I)().toast({title:"Your mint failed!",description:"Please try again.",status:"error",duration:900,isClosable:!0})}finally{let e=u.findIndex(e=>e.label===g.label);if(-1===e){console.error("guard not found");return}let t=[...u];t[e].minting=!1,d(t),m(!0),em(void 0,u,g.label,d)}},ep=e=>{let{solanaTime:t,toTime:n,setCheckEligibility:o}=e,[i,l]=(0,u.useState)(n-t);(0,u.useEffect)(()=>{let e=setInterval(()=>{l(e=>e-BigInt(1))},1e3);return()=>clearInterval(e)},[]);let r=i/BigInt(86400),s=i%BigInt(86400)/BigInt(3600),d=i%BigInt(3600)/BigInt(60),c=i%BigInt(60);return r>BigInt(0)?(0,a.jsxs)(I.x,{fontSize:"sm",fontWeight:"bold",children:[r.toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1}),"d"," ",s.toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1}),"h"," ",d.toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1}),"m"," ",c.toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1}),"s"]}):s>BigInt(0)?(0,a.jsxs)(I.x,{fontSize:"sm",fontWeight:"bold",children:[s.toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1}),"h"," ",d.toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1}),"m"," ",c.toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1}),"s"]}):d>BigInt(0)||c>BigInt(0)?(0,a.jsxs)(I.x,{fontSize:"sm",fontWeight:"bold",children:[d.toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1}),"m"," ",c.toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1}),"s"]}):(i===BigInt(0)&&o(!0),(0,a.jsx)(I.x,{}))};function eh(e){let{umi:t,guardList:n,candyMachine:o,candyGuard:i,ownedTokens:l=[],setGuardList:r,mintsCreated:s,setMintsCreated:d,onOpen:c,setCheckEligibility:m}=e,g=(0,es.l)(),[f,p]=(0,u.useState)({});if(!o||!i)return(0,a.jsx)(a.Fragment,{});let h=(e,t)=>{p(n=>({...n,[e]:t}))},b=n.filter((e,t,n)=>t===n.findIndex(t=>t.label===e.label));if(0===b.length)return(0,a.jsx)(a.Fragment,{});b.length>1&&(b=n.filter(e=>"default"!=e.label));let y=[];for(let e of b){let t=q.$q.find(t=>t.label===e.label),n=i.groups.find(t=>t.label===e.label),a=(0,V.F)(0),o=(0,V.F)(0);n&&("Some"===n.guards.startDate.__option&&(a=n.guards.startDate.value.date),"Some"===n.guards.endDate.__option&&(o=n.guards.endDate.value.date));let l={label:e?e.label:"default",allowed:e.allowed,header:t?t.header:"header missing in settings.tsx",mintText:t?t.mintText:"mintText missing in settings.tsx",buttonLabel:t?t.buttonLabel:"buttonLabel missing in settings.tsx",startTime:a,endTime:o,tooltip:e.reason,maxAmount:e.maxAmount};y.push(l)}let x=y.map((e,u)=>{var p,b;return(0,a.jsxs)(C.xu,{marginTop:"20px",children:[(0,a.jsx)(M.i,{my:"10px"}),(0,a.jsxs)(z.U,{children:[(0,a.jsx)(A.X,{size:"xs",textTransform:"uppercase",children:e.header}),(0,a.jsxs)(T.k,{justifyContent:"flex-end",marginLeft:"auto",children:[e.endTime>(0,V.F)(0)&&e.endTime-g>(0,V.F)(0)&&(!e.startTime||e.startTime-g<=(0,V.F)(0))&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(I.x,{fontSize:"sm",marginRight:"2",children:["Ending in:"," "]}),(0,a.jsx)(ep,{toTime:e.endTime,solanaTime:g,setCheckEligibility:m})]}),e.startTime>(0,V.F)(0)&&e.startTime-g>(0,V.F)(0)&&(!e.endTime||g-e.endTime<=(0,V.F)(0))&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(I.x,{fontSize:"sm",marginRight:"2",children:["Starting in:"," "]}),(0,a.jsx)(ep,{toTime:e.startTime,solanaTime:g,setCheckEligibility:m})]})]})]}),(0,a.jsxs)(X.M,{columns:2,spacing:5,children:[(0,a.jsx)(I.x,{pt:"2",fontSize:"sm",children:e.mintText}),(0,a.jsxs)(Y.g,{children:[e.allowed?(0,a.jsxs)(J.Y2,{value:f[e.label]||1,min:1,max:e.maxAmount<1?1:e.maxAmount,size:"sm",isDisabled:!e.allowed,onChange:(t,n)=>h(e.label,n),children:[(0,a.jsx)(J.zu,{}),(0,a.jsxs)(J.Fi,{children:[(0,a.jsx)(J.WQ,{}),(0,a.jsx)(J.Y_,{})]})]}):null,(0,a.jsx)(Q.u,{label:e.tooltip,"aria-label":"Mint button",children:(0,a.jsx)(D.z,{onClick:()=>ef(t,e,o,i,l,f[e.label]||1,s,d,n,r,c,m),size:"sm",backgroundColor:"teal.100",isDisabled:!e.allowed,isLoading:null===(p=n.find(t=>t.label===e.label))||void 0===p?void 0:p.minting,loadingText:null===(b=n.find(t=>t.label===e.label))||void 0===b?void 0:b.loadingText,children:e.buttonLabel},e.label)})]})]})]},u)});return(0,a.jsx)(a.Fragment,{children:x})}var eb=n(88087),ey=n(64071),ex=n(87334),ek=n(53891),e_=n(82215);let ev=e=>{let{heading:t,description:n}=e;return(0,a.jsx)(C.xu,{backgroundColor:"#ebebeb",borderRadius:"5px",width:"120px",minHeight:"50px",children:(0,a.jsxs)(Y.g,{children:[(0,a.jsx)(I.x,{fontSize:"sm",children:t}),(0,a.jsx)(I.x,{fontSize:"sm",marginTop:"-2",fontWeight:"semibold",children:n})]})})},eS=e=>{let{metadata:t}=e;if(void 0===t||void 0===t.attributes)return(0,a.jsx)(a.Fragment,{});let n=t.attributes.filter(e=>void 0!==e.trait_type&&void 0!==e.value).map(e=>{var t,n;return(0,a.jsx)(ev,{heading:null!==(t=e.trait_type)&&void 0!==t?t:"",description:null!==(n=e.value)&&void 0!==n?n:""},e.trait_type)});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(M.i,{marginTop:"15px"}),(0,a.jsx)(X.M,{marginTop:"15px",columns:3,spacing:5,children:n})]})};function ew(e){var t;let{metadata:n}=e;if(!n)return(0,a.jsx)(a.Fragment,{});let o=null!==(t=n.animation_url)&&void 0!==t?t:n.image;return(0,a.jsxs)(C.xu,{position:"relative",width:"full",overflow:"hidden",children:[(0,a.jsx)(C.xu,{height:"sm",position:"relative",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundImage:"url(".concat(o,")")},o),(0,a.jsx)(I.x,{fontWeight:"semibold",marginTop:"15px",children:n.name}),(0,a.jsx)(I.x,{children:n.description}),(0,a.jsx)(eS,{metadata:n})]})}let ej=e=>{let{nfts:t}=e;if(void 0===t)return(0,a.jsx)(a.Fragment,{});let n=t.map((e,t)=>{var n;return(0,a.jsxs)(eb.Q,{children:[(0,a.jsx)("h2",{children:(0,a.jsxs)(ey.K,{children:[(0,a.jsx)(C.xu,{as:"span",flex:"1",textAlign:"left",children:null===(n=e.offChainMetadata)||void 0===n?void 0:n.name}),(0,a.jsx)(ex.X,{})]})}),(0,a.jsx)(ek.H,{pb:4,children:(0,a.jsx)(ew,{metadata:e.offChainMetadata},e.mint)})]},e.mint+"Accordion")});return(0,a.jsx)(e_.U,{defaultIndex:[0],allowMultiple:!0,children:n})},eP=async(e,t,n,a,o)=>{let i=await eT(e,n,a);return(0,x.createLut)(e,{recentSlot:t,addresses:i,authority:o})},eT=async(e,t,n,a)=>{if(!e.identity.publicKey)return[];let{mintAuthority:o,collectionMint:i}=t;if(!(a=e.identity.publicKey))return[];let r=t.authority;(0,c.safeFetchCandyGuard)(e,t.mintAuthority);let[s]=(0,y.findMetadataDelegateRecordPda)(e,{mint:i,delegateRole:y.MetadataDelegateRole.Collection,updateAuthority:a,delegate:r}),u=[];n.groups.forEach(async a=>{if("Some"===a.guards.addressGate.__option&&u.push(a.guards.addressGate.value.address),"Some"===a.guards.allocation.__option&&u.push((0,l.ZL)((0,c.findAllocationTrackerPda)(e,{candyGuard:n.publicKey,candyMachine:t.publicKey,id:a.guards.allocation.value.id}))),"Some"===a.guards.freezeSolPayment.__option&&u.push(a.guards.freezeSolPayment.value.destination),"Some"===a.guards.freezeTokenPayment.__option&&(u.push(a.guards.freezeTokenPayment.value.destinationAta),u.push(a.guards.freezeTokenPayment.value.mint)),"Some"===a.guards.mintLimit.__option){let o=await (0,c.safeFetchMintCounterFromSeeds)(e,{id:a.guards.mintLimit.value.id,user:e.identity.publicKey,candyMachine:t.publicKey,candyGuard:n.publicKey});(null==o?void 0:o.publicKey)&&u.push(o.publicKey)}"Some"===a.guards.nftBurn.__option&&u.push(a.guards.nftBurn.value.requiredCollection),"Some"===a.guards.nftGate.__option&&u.push(a.guards.nftGate.value.requiredCollection),"Some"===a.guards.nftPayment.__option&&u.push(a.guards.nftPayment.value.requiredCollection),"Some"===a.guards.programGate.__option&&a.guards.programGate.value.additional.forEach(e=>{u.push(e)}),"Some"===a.guards.solPayment.__option&&u.push(a.guards.solPayment.value.destination),"Some"===a.guards.token2022Payment.__option&&(u.push(a.guards.token2022Payment.value.destinationAta),u.push(a.guards.token2022Payment.value.mint)),"Some"===a.guards.tokenBurn.__option&&u.push(a.guards.tokenBurn.value.mint),"Some"===a.guards.tokenGate.__option&&u.push(a.guards.tokenGate.value.mint),"Some"===a.guards.tokenPayment.__option&&(u.push(a.guards.tokenPayment.value.mint),u.push(a.guards.tokenPayment.value.destinationAta))}),u.push((0,l.ZL)((0,y.findCollectionAuthorityRecordPda)(e,{mint:i,collectionAuthority:e.identity.publicKey})));let[d]=(0,y.findCollectionAuthorityRecordPda)(e,{mint:i,collectionAuthority:e.identity.publicKey});return(0,l.P7)([t.publicKey,o,i,(0,y.findMetadataPda)(e,{mint:i})[0],(0,y.findMasterEditionPda)(e,{mint:i})[0],a,(0,c.findCandyMachineAuthorityPda)(e,{candyMachine:t.publicKey})[0],s,(0,x.getSysvar)("instructions"),(0,x.getSysvar)("slotHashes"),(0,c.getMplCandyMachineCoreProgramId)(e),(0,y.getMplTokenMetadataProgramId)(e),(0,x.getSplTokenProgramId)(e),(0,x.getSplAssociatedTokenProgramId)(e),...u,(0,l.ZL)("BeeryDvghgcKPTUw3N3bdFDFFWhTWdWHnsLuVebgsGSD"),d])},eC=(e,t,n,a)=>async()=>{let[o,i]=await eP(e,a,t,n);try{var l;let t=(await e.rpc.getLatestBlockhash()).blockhash;o=(o=o.setBlockhash(t)).prepend((0,x.setComputeUnitPrice)(e,{microLamports:parseInt((l="1001",void 0!==l)?l:"1001")}));let n=await er(e,o.build(e));o=o.prepend((0,x.setComputeUnitLimit)(e,{units:n}));let{signature:a}=await o.sendAndConfirm(e,{confirm:{commitment:"processed"},send:{skipPreflight:!0}});(0,k.I)().toast({title:"LUT created",description:"LUT ".concat(i.publicKey," created. Add it to your .env NEXT_PUBLIC_LUT NOW! This UI does not work properly without it!"),status:"success",duration:9e3,isClosable:!0})}catch(e){(0,k.I)().toast({title:"creating LUT failed!",description:"Error: ".concat(e),status:"error",duration:9e3,isClosable:!0})}},eA=(e,t,n)=>async()=>{n.groups&&n.groups.forEach(async n=>{let a=(0,ee.T)();if(("Some"===n.guards.freezeSolPayment.__option||"Some"===n.guards.freezeTokenPayment.__option)&&(0,k.I)().toast({title:"FreezeSolPayment!",description:"Make sure that you ran sugar freeze initialize!",status:"info",duration:9e3,isClosable:!0}),"Some"===n.guards.allocation.__option&&(a=a.add((0,c.route)(e,{guard:"allocation",candyMachine:t.publicKey,candyGuard:t.mintAuthority,group:(0,$.G)(n.label),routeArgs:{candyGuardAuthority:e.identity,id:n.guards.allocation.value.id}}))),a.items.length>0){a=a.prepend((0,x.setComputeUnitPrice)(e,{microLamports:parseInt("1001")}));let t=(await e.rpc.getLatestBlockhash()).blockhash;a=a.setBlockhash(t);let o=await er(e,a.build(e));(a=a.prepend((0,x.setComputeUnitLimit)(e,{units:o}))).sendAndConfirm(e,{confirm:{commitment:"processed"},send:{skipPreflight:!0}}),(0,k.I)().toast({title:"The routes for ".concat(n.label," were created!"),status:"success",duration:9e3,isClosable:!0})}else(0,k.I)().toast({title:"Nothing to create here for group ".concat(n.label),status:"info",duration:9e3,isClosable:!0})})},eG=(e,t)=>async()=>{t=t.replace(" SOL","");let n=(0,ee.T)().add((0,x.addMemo)(e,{memo:"\uD83C\uDF7B"})).add((0,x.transferSol)(e,{destination:(0,l.ZL)("BeeryDvghgcKPTUw3N3bdFDFFWhTWdWHnsLuVebgsGSD"),amount:(0,f.Tz)(Number(t))}));n=n.prepend((0,x.setComputeUnitPrice)(e,{microLamports:parseInt("1001")}));let a=(await e.rpc.getLatestBlockhash()).blockhash;n=n.setBlockhash(a);let o=await er(e,n.build(e));n=n.prepend((0,x.setComputeUnitLimit)(e,{units:o}));try{await n.sendAndConfirm(e,{confirm:{commitment:"processed"},send:{skipPreflight:!0}}),(0,k.I)().toast({title:"Thank you! \uD83C\uDF7B",description:"Lets have a \uD83C\uDF7A together!",status:"success",duration:9e3,isClosable:!0})}catch(e){console.error(e)}};function eL(e){let{value:t,setValue:n}=e,o=e=>e.replace(/^\$/,"");return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(J.Y2,{mr:"2rem",value:t+" SOL",onChange:e=>n(o(e)),step:.5,precision:2,keepWithinRange:!0,min:0,children:[(0,a.jsx)(J.zu,{}),(0,a.jsxs)(J.Fi,{children:[(0,a.jsx)(J.WQ,{}),(0,a.jsx)(J.Y_,{})]})]})})}let eN=e=>{let{umi:t,candyMachine:n,candyGuard:o}=e,[i,l]=(0,u.useState)(0),[r,s]=(0,u.useState)("5");if(console.log("modal ".concat(n)),console.log("candyGuard ".concat(o)),console.log("umi ".concat(t)),(0,u.useEffect)(()=>{(async()=>{l(await t.rpc.getSlot())})()},[t]),!o)return console.error("no guard defined!"),(0,a.jsx)(a.Fragment,{});let d=new Map;b.forEach((e,t)=>{let n=(0,c.getMerkleRoot)(e).toString("hex");d.has(t)||d.set(t,n)});let m=Array.from(d).map(e=>{let[t,n]=e;return(0,a.jsxs)(C.xu,{children:[(0,a.jsxs)(I.x,{fontWeight:"semibold",children:[t,":"]},t),(0,a.jsx)(I.x,{children:n})]},t)});return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(Y.g,{children:[(0,a.jsxs)(z.U,{children:[(0,a.jsx)(D.z,{onClick:eC(t,n,o,i),children:"Create LUT"}),(0,a.jsx)(I.x,{children:"Reduces transaction size errors"})]}),(0,a.jsxs)(z.U,{children:[(0,a.jsx)(D.z,{onClick:eA(t,n,o),children:"Initialize Guards"}),(0,a.jsx)(I.x,{children:"Required for some guards"})]}),(0,a.jsxs)(z.U,{children:[(0,a.jsx)(eL,{value:r,setValue:s}),(0,a.jsx)(D.z,{onClick:eG(t,r),children:"Buy me a Beer \uD83C\uDF7B"})]}),m.length>0&&(0,a.jsx)(I.x,{fontWeight:"bold",children:"Merkle trees for your allowlist.tsx:"}),m.length>0&&m]})})},eF=s()(async()=>(await n.e(409).then(n.bind(n,62409))).WalletMultiButton,{loadableGenerated:{webpack:()=>[null]},ssr:!1}),ez=(e,t,n,a,o,i)=>{let[r,s]=(0,u.useState)(),[d,m]=(0,u.useState)(),g=(0,S.p)();return(0,u.useEffect)(()=>{(async()=>{if(n){let n,a;if(!t){console.error("No candy machine in .env!"),g.isActive("no-cm")||g({id:"no-cm",title:"No candy machine in .env!",description:"Add your candy machine address to the .env file!",status:"error",duration:999999,isClosable:!0});return}try{if((n=await (0,c.fetchCandyMachine)(e,(0,l.ZL)(t))).version!=c.AccountVersion.V2){g({id:"wrong-account-version",title:"Wrong candy machine account version!",description:"Please use latest sugar to create your candy machine. Need Account Version 2!",status:"error",duration:999999,isClosable:!0});return}}catch(e){console.error(e),g({id:"no-cm-found",title:"The CM from .env is invalid",description:"Are you using the correct environment?",status:"error",duration:999999,isClosable:!0})}if(s(n),n){try{a=await (0,c.safeFetchCandyGuard)(e,n.mintAuthority)}catch(e){console.error(e),g({id:"no-guard-found",title:"No Candy Guard found!",description:"Do you have one assigned?",status:"error",duration:999999,isClosable:!0})}a&&(m(a),o&&i(!1))}}})()},[e,n]),{candyMachine:r,candyGuard:d}};function eI(){let e=(0,d.W)(),t=(0,es.l)();(0,S.p)();let{isOpen:n,onOpen:o,onClose:r}=(0,w.q)(),{isOpen:s,onOpen:c,onClose:m}=(0,w.q)(),[f,p]=(0,u.useState)(),[h,b]=(0,u.useState)(!1),[y,x]=(0,u.useState)(!0),[k,_]=(0,u.useState)(),[H,Z]=(0,u.useState)([{label:"startDefault",allowed:!1,maxAmount:0}]),[V,X]=(0,u.useState)(!0),[Y,J]=(0,u.useState)(!0),{candyMachine:Q,candyGuard:$}=ez(e,(0,u.useMemo)(()=>(0,l.ZL)("EL1JbqBBBKgwxFmRN3p7D7s6tq2MErdYTYjWbVoKssk"),[]),Y,J,V,X);return(0,u.useEffect)(()=>{(async()=>{if(!Q||!$||!Y||n)return;X(!1);let{guardReturn:a,ownedTokens:o}=await v(e,$,Q,t);_(o),Z(a),b(!1);let i=!1;for(let e of a)if(e.allowed){i=!0;break}b(i),x(!1)})()},[e,Y,V]),(0,a.jsxs)("main",{children:[(0,a.jsx)("div",{className:g().wallet,children:(0,a.jsx)(eF,{})}),(0,a.jsx)("div",{className:g().center,children:(0,a.jsx)(()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i(),{id:"b885840940f57d5f",children:"body{background:#000}"}),(0,a.jsxs)(j.Z,{backgroundColor:"#CC001b",children:[(0,a.jsx)(P.O,{children:(0,a.jsx)(T.k,{minWidth:"max-content",justifyContent:"center",gap:"4",children:(0,a.jsx)(C.xu,{p:2,children:(0,a.jsx)(A.X,{fontWeight:"extrabold",fontStyle:"italic",color:"white",children:q.Nz})})})}),(0,a.jsx)(G.e,{children:(0,a.jsx)(L.M,{children:(0,a.jsxs)(N.K,{spacing:"4",children:[(0,a.jsx)(T.k,{justifyContent:"center",children:(0,a.jsx)(C.xu,{rounded:"lg",mt:-12,p:2,children:(0,a.jsx)(F.E,{rounded:"lg",height:230,objectFit:"cover",alt:"project Image",src:q.BH})})}),y?(0,a.jsx)(a.Fragment,{}):(0,a.jsx)(T.k,{justifyContent:"center",children:(0,a.jsx)(C.xu,{background:"black",borderRadius:"5px",minWidth:"50px",minHeight:"50px",p:3,children:(0,a.jsxs)(z.U,{children:[(0,a.jsx)(I.x,{fontSize:"sm",color:"white",children:"Available NFTs:"}),(0,a.jsxs)(I.x,{fontWeight:"semibold",color:"teal.100",children:[Number(null==Q?void 0:Q.data.itemsAvailable)-Number(null==Q?void 0:Q.itemsRedeemed),"/",Number(null==Q?void 0:Q.data.itemsAvailable)]})]})})}),y?(0,a.jsxs)("div",{className:"jsx-b885840940f57d5f",children:[(0,a.jsx)(M.i,{my:"10px"}),(0,a.jsx)(B.O,{height:"30px",my:"10px"}),(0,a.jsx)(B.O,{height:"30px",my:"10px"}),(0,a.jsx)(B.O,{height:"30px",my:"10px"})]}):(0,a.jsx)(eh,{guardList:H,candyMachine:Q,candyGuard:$,umi:e,ownedTokens:k,setGuardList:Z,mintsCreated:f,setMintsCreated:p,onOpen:o,setCheckEligibility:J})]})})})]}),e.identity.publicKey===(null==Q?void 0:Q.authority)?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(L.M,{children:(0,a.jsx)(D.z,{backgroundColor:"red.200",marginTop:"10",onClick:c,children:"Initialize Everything!"})}),(0,a.jsxs)(K.u_,{isOpen:s,onClose:m,children:[(0,a.jsx)(U.Z,{}),(0,a.jsxs)(R.h,{maxW:"600px",children:[(0,a.jsx)(W.x,{children:"Initializer"}),(0,a.jsx)(E.o,{}),(0,a.jsx)(O.f,{children:(0,a.jsx)(eN,{umi:e,candyMachine:Q,candyGuard:$})})]})]})]}):(0,a.jsx)(a.Fragment,{}),(0,a.jsxs)(K.u_,{isOpen:n,onClose:r,children:[(0,a.jsx)(U.Z,{}),(0,a.jsxs)(R.h,{children:[(0,a.jsx)(W.x,{children:"Your minted NFT:"}),(0,a.jsx)(E.o,{}),(0,a.jsx)(O.f,{children:(0,a.jsx)(ej,{nfts:f})})]})]})]}),{},"content")})]})}},85291:function(e){e.exports={wallet:"Home_wallet__GuDT9",center:"Home_center__O_TIN",form:"Home_form__FrVR9",field:"Home_field__gbcTj",loading:"Home_loading__Z_JGo",spin:"Home_spin__VEV0f",success:"Home_success__IZwiY"}}},function(e){e.O(0,[407,888,774,179],function(){return e(e.s=48312)}),_N_E=e.O()}]);

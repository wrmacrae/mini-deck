(this["webpackJsonpmini-deck"]=this["webpackJsonpmini-deck"]||[]).push([[0],[,,,,,,,,function(e,a,t){e.exports=t(16)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),c=t(3),r=(t(13),t(14),t(4)),i=t(5),l=t(1),d=t(6),s=t(7);t(15);function u(e){var a=[];return e.forEach((function(e){for(var t=e.split(" ")[0],n=e.split(" ").slice(1).join(" "),o=0;o<t;o++)a.push(n)})),function(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),n=e[a];e[a]=e[t],e[t]=n}}(a),a.slice(0,59)}var m=function(e){Object(s.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).state={deck:[],commander:""},n.handleInputChange=n.handleInputChange.bind(Object(l.a)(n)),n}return Object(i.a)(t,[{key:"copyMiniDeckToClipboard",value:function(){var e,a=(e=u(this.state.deck),"Commander\n"+this.state.commander+"\n\nDeck\n1 "+e.join("\n1 "));console.log(a),function(e){if(window.clipboardData&&window.clipboardData.setData)return window.clipboardData.setData("Text",e);if(document.queryCommandSupported&&document.queryCommandSupported("copy")){var a=document.createElement("textarea");a.textContent=e,a.style.position="fixed",document.body.appendChild(a),a.select();try{document.execCommand("copy")}catch(t){return console.warn("Copy to clipboard failed.",t),!1}finally{document.body.removeChild(a)}}}(a)}},{key:"handleInputChange",value:function(e){var a=e.target,t=a.value;"upload"===a.name&&this.processUpload(t)}},{key:"processUpload",value:function(e){var a=e.split("\n"),t=a.indexOf("Commander");if(-1!==t)var n=a[t+1];var o=a.indexOf("Deck");-1!==o&&(a=a.slice(o+1)),this.setState({deck:a,commander:n})}},{key:"render",value:function(){return o.a.createElement("div",{className:"page"},o.a.createElement("div",{className:"explanation"},o.a.createElement("div",{className:"explanationText"},o.a.createElement("p",null,"1) Paste a deck that you would import into Arena in the textbox (e.g. a 100 card brawl deck).",o.a.createElement("br",null),"2) Click Copy Mini-Deck to get a 59-card deck randomly selected from that, which goes on your clipboard.",o.a.createElement("br",null),"3) Import that to Arena."))),o.a.createElement("div",{className:"form"},o.a.createElement("textarea",{className:"upload",type:"string",id:"upload",name:"upload",onChange:this.handleInputChange})),o.a.createElement("button",{className:"copy",onClick:this.copyMiniDeckToClipboard.bind(this)},"Copy Mini-Deck"))}}]),t}(o.a.Component);var p=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement(m,null)))};Object(c.render)(o.a.createElement(p,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.84fb6fce.chunk.js.map
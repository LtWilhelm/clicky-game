(window["webpackJsonpclicky-game"]=window["webpackJsonpclicky-game"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(7),i=a.n(o),s=(a(13),a(14),a(1)),c=a(2),m=a(4),l=a(3),p=a(5),h=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(n)))).state={clicked:!1},a.handleClick=function(){a.state.clicked?a.props.incorrect():(a.setState({clicked:!0}),a.props.correct())},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(){this.props.score%12!==0&&this.props.score||!this.state.clicked||this.setState({clicked:!1})}},{key:"render",value:function(){return n.a.createElement("div",{className:"col m3 s4 imgCard",style:{display:"flex",marginTop:"1em",marginBottom:"1em"}},n.a.createElement("img",{onClick:this.handleClick,className:"white hoverable z-depth-2",src:this.props.image,alt:"card","max-width":"200px",height:"200px",style:{margin:"auto"}}))}}]),t}(r.Component),g=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("header",{className:"red darken-3 z-depth-3 white-text",style:{display:"flex",justifyContent:"space-around"}},n.a.createElement("img",{className:"hide-on-med-and-down",src:"https://upload.wikimedia.org/wikipedia/en/thumb/8/84/Homestar_Runner_logo.svg/1200px-Homestar_Runner_logo.svg.png",alt:"Homestar Logo"}),n.a.createElement("h1",{className:"hide-on-med-and-down"},"Homestar Clicker dot com"),n.a.createElement("div",null,n.a.createElement("h3",null,"Current Score: ",this.props.score),n.a.createElement("h3",null,"High Score: ",this.props.highscore)))}}]),t}(r.Component);function u(){return n.a.createElement("div",{className:"container hide-on-med-and-down",style:{marginTop:"5em",paddingBottom:"1em"}},n.a.createElement("p",null,"I do not own HomestarRunner.com or any of the characters therein. I am simply a lifelong fan and needed subject matter to do this homework."),n.a.createElement("p",null,"However, if you do want to pay me money for it, I'm not opposed."),n.a.createElement("p",null,"I also accept swag as payment."))}var d=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(n)))).state={score:0,highScore:0,cards:[{name:"Homestar",img:"https://static.tvtropes.org/pmwiki/pub/images/180px-NewestHomestar_9833.png"},{name:"Marzipan",img:"https://static.tvtropes.org/pmwiki/pub/images/marzipan_3356.png"},{name:"Pom Pom",img:"https://static.tvtropes.org/pmwiki/pub/images/pom_pom_5773.PNG"},{name:"Strong Bad",img:"https://static.tvtropes.org/pmwiki/pub/images/strongbad2kq.png"},{name:"Strong Mad",img:"https://static.tvtropes.org/pmwiki/pub/images/strong_mad_1184.png"},{name:"Strong Sad",img:"https://static.tvtropes.org/pmwiki/pub/images/strong_sad_9578.png"},{name:"The Cheat",img:"https://static.tvtropes.org/pmwiki/pub/images/180px-The_Cheat_Character_Video_5480.PNG"},{name:"Bubs",img:"https://static.tvtropes.org/pmwiki/pub/images/bubs_5676.png"},{name:"Coach Z",img:"https://static.tvtropes.org/pmwiki/pub/images/coach_z_7947.png"},{name:"The King of Town",img:"https://static.tvtropes.org/pmwiki/pub/images/kot_3377.PNG"},{name:"The Poopsmith",img:"https://static.tvtropes.org/pmwiki/pub/images/psmith_7293.PNG"},{name:"Homsar",img:"https://static.tvtropes.org/pmwiki/pub/images/180px-homsar_evolution_current_6605.png"}]},a.handleCorrectClick=function(e){a.setState((function(e){return{score:++e.score}})),a.state.score>=a.state.highScore&&a.setState((function(e){return{highScore:e.score}})),a.setState((function(e){return{cards:a.shuffleArray(e.cards)}}))},a.handleIncorrectClick=function(e){a.setState({score:0}),a.setState((function(e){return{cards:a.shuffleArray(e.cards)}}))},a.shuffleArray=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),r=e[t];e[t]=e[a],e[a]=r}return e},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement(g,{score:this.state.score,highscore:this.state.highScore}),n.a.createElement("div",{className:"container grey lighten-3 z-depth-2",style:{marginTop:"1em"}},n.a.createElement("div",{className:"row"},this.state.cards.map((function(t,a){return n.a.createElement(h,{correct:e.handleCorrectClick,incorrect:e.handleIncorrectClick,key:t.name,image:t.img,score:e.state.score})}))),n.a.createElement(u,null)),n.a.createElement("footer",{className:"red darken-3 z-depth-3",style:{position:"fixed",bottom:"0",width:"100%",display:"flex",justifyContent:"center"}},n.a.createElement("div",{className:"valign-wrapper"},n.a.createElement("img",{height:"40px",src:"/logo192.png",alt:"react logo"}),n.a.createElement("h5",{className:"white-text"},"Powered by React.js"))))}}]),t}(r.Component);var f=function(){return n.a.createElement(d,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.bac43d29.chunk.js.map
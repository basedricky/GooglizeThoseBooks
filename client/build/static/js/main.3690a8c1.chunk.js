(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{29:function(e,t,a){e.exports=a(59)},34:function(e,t,a){},40:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(26),l=a.n(r),c=a(6),s=a(7),i=a(9),u=a(8),m=a(14),h=a(1),d=a(27);function p(e){var t=e.fluid,a=e.children;return o.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}a(34);function g(){return o.a.createElement("div",null,o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},o.a.createElement(m.b,{className:"navbar-brand",to:"/"},"Google Books"),o.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle Navication"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},o.a.createElement("ul",{className:"nav-item-active"},o.a.createElement("li",{className:"nav-item active"},o.a.createElement(m.b,{className:"nav-link",to:"/saved"},"Saved"))))))}a(40);function b(){return o.a.createElement("div",null,o.a.createElement("div",{className:"jumbotron"},o.a.createElement("h1",{className:"display-4 text-center"},"Google Books Search"),o.a.createElement("br",null),o.a.createElement("h2",{className:"text-center myText"},"Search for and save books from their library!.")))}function v(e){return o.a.createElement("div",{className:"form-group"},o.a.createElement("input",Object.assign({className:"form-control"},e)))}function f(e){return o.a.createElement("button",Object.assign({},e,{className:"btn submitBtn",style:{backgroundColor:"#2196f3",color:"white",marginBottom:"10px"}}),"Search")}var k=a(12),E=a.n(k),y=function(e){return E.a.get("https://www.googleapis.com/books/v1/volumes?q=".concat(e))},N=function(e){return E.a.post("/api/books",e)},j=function(){return E.a.get("/api/books")},S=function(e){return E.a.delete("/api/books/"+e)},B=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={mounted:!1,bgColor:"",color:"",text:"Save"},e.componentDidMount=function(){e.setState({mounted:!0}),console.log("Mounted!")},e.getStyle=function(){"Save"===e.state.text?e.setState({bgColor:"#00E000",color:"white",text:"Saved"}):e.setState({bgColor:"",color:"",text:"Save"})},e.onClickFunc=function(){e.props.saveGoogleBook(e.props),e.getStyle()},e}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-header"}),o.a.createElement("div",{className:"card-body"},o.a.createElement("img",{src:this.props.image,style:{maxWidth:"100px"},alt:"book"}),o.a.createElement("h5",{className:"card-title",style:{margin:"10px 0"}},this.props.title),o.a.createElement("p",{className:"card-text"},this.props.description),o.a.createElement("p",{style:{fontStyle:"italic"}},"Author(s): ",this.props.authors),o.a.createElement("a",{href:this.props.link,target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary",style:{marginRight:"6px"}},"View Book"),o.a.createElement("button",{onClick:this.onClickFunc,style:{backgroundColor:this.state.bgColor,color:this.state.color},className:"btn"},this.state.text))))}}]),a}(n.Component),O=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return console.log("Props",this.props.bookState),this.props.bookState.map((function(t){return o.a.createElement(B,{key:t.id,id:t.id,title:t.volumeInfo.title,link:t.volumeInfo.previewLink,authors:t.volumeInfo.authors&&t.volumeInfo.authors.length>1?t.volumeInfo.authors.join(", "):t.volumeInfo.authors,images:t.volumeInfo.imageLinks?t.volumeInfo.imageLinks.thumbnail:"https://cdn-5fcbf5c4c1ac1a221c18568d.closte.com/wp-content/themes/ryse/assets/images/no-image/No-Image-Found-400x264.png",description:t.volumeInfo.description,saveGoogleBook:e.props.saveGoogleBook})}))}}]),a}(n.Component),x=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={books:[],search:""},e.searchBooks=function(){y(e.state.search).then((function(t){console.log("This is res.data",t.data.items),e.setState({books:t.data.items,search:""})})).catch((function(e){return console.log(e)}))},e.handleInputChange=function(t){var a=t.target,n=a.name,o=a.value;e.setState(Object(d.a)({},n,o))},e.handleFormSubmit=function(t){t.preventDefault(),e.searchBooks()},e.saveGoogleBook=function(e){console.log("This is the current book",e),N({id:e.id,title:e.title,authors:e.authors,description:e.description,image:e.image,link:e.link}).then((function(e){return console.log("Successful POST to DB!",e)})).catch((function(e){return console.log("this is the error",e)}))},e}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(g,null),o.a.createElement(p,{fluid:!0},o.a.createElement(b,null),o.a.createElement("form",null,o.a.createElement("h5",null,"Search for books"),o.a.createElement(v,{value:this.state.search,onChange:this.handleInputChange,name:"search",placeholder:"e.g. Harry Potter"}),o.a.createElement(f,{onClick:this.handleFormSubmit})),this.state.books.length?o.a.createElement(O,{bookState:this.state.books,saveGoogleBook:this.saveGoogleBook}):o.a.createElement("div",null,o.a.createElement("hr",null),o.a.createElement("p",{style:{fontStyle:"italic"}},"No results to display"))))}}]),a}(n.Component);function C(e){var t=e.title,a=e.authors,n=e.image,r=e.link,l=e.description,c=e.deleteGoogleBook;return o.a.createElement("div",null,o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-header"},o.a.createElement("div",{className:"card-body"},o.a.createElement("img",{src:n,style:{maxWidth:"100px"},alt:"jumbostron"}),o.a.createElement("h5",{className:"card-title",style:{margin:"10px 0"}},t),o.a.createElement("p",{className:"card-text"},l),o.a.createElement("p",{style:{fontStyle:"italic"}},"Author(s): ",a," "),o.a.createElement("a",{href:r,targer:"_blank",rel:"noopener noreferrer",className:"btn",style:{marginRight:"6px",backgroundColor:"rgb(33, 150, 243)",color:"white"}},"View Book"),o.a.createElement("button",{onClikc:c.bind(this,e),className:"btn btn-primary"},"Delete")))))}var w=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return console.log("Props",this.props.bookState),this.props.bookState.map((function(t){return o.a.createElement(C,{key:t.id,id:t.id,title:t.title,link:t.link,authors:t.authors&&t.authors.length>1?t.authors.join(", "):t.authors,image:t.image?t.image:"https://cdn-5fcbf5c4c1ac1a221c18568d.closte.com/wp-content/themes/ryse/assets/images/no-image/No-Image-Found-400x264.png",description:t.description,deleteGoogleBook:e.props.deleteGoogleBook})}))}}]),a}(n.Component),G=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={savedBooks:[]},e.componentDidMount=function(){e.getBooks()},e.deleteGoogleBook=function(t){S(t.id).then((function(t){console.log("You deleted this book: ",t),e.getBooks()})).catch((function(e){console.log("Warning Error: ",e)}))},e.getbooks=function(){j().then((function(t){e.setState({savedBooks:t.data}),console.log("getBooks response: ",t)})).catch((function(e){console.log("Warning Error: ",e)}))},e}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(g,null),o.a.createElement(p,{fluid:!0},o.a.createElement(b,null),this.state.savedBooks.length?o.a.createElement(w,{bookState:this.state.savedBooks,deleteGoogleBook:this.deleteGoogleBook}):o.a.createElement("h5",null,"No Results Found!")))}}]),a}(n.Component),I=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement(m.a,null,o.a.createElement("div",null,o.a.createElement(h.c,null,o.a.createElement(h.a,{exact:!0,path:"/",component:x}),o.a.createElement(h.a,{exact:!0,path:"/saved",component:G}))))}}]),a}(n.Component);l.a.render(o.a.createElement(I,null),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.3690a8c1.chunk.js.map
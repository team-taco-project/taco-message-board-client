(this["webpackJsonptaco-message-board-client"]=this["webpackJsonptaco-message-board-client"]||[]).push([[0],{109:function(e,t,n){},110:function(e,t,n){},111:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),r=n(30),c=n.n(r),i=(n(76),n(71)),o=n(11),l=n(12),d=n(14),j=n(13),u=n(9),h=n(15),m=n(114),b=(n(77),n(2)),g=n(4),O=n(0),p=["user","component","render"],x=function(e){var t=e.user,n=e.component,a=e.render,s=Object(g.a)(e,p);return t&&a?Object(O.jsx)(h.b,Object(b.a)(Object(b.a)({},s),{},{render:a})):Object(O.jsx)(h.b,Object(b.a)(Object(b.a)({},s),{},{render:function(e){return t?Object(O.jsx)(n,Object(b.a)({},e)):Object(O.jsx)(h.a,{to:"/"})}}))},f=n(56),v=(n(86),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleClose=function(){return a.setState({show:!1})},a.state={show:!0},a.timeoutId=null,a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.timeoutId=setTimeout(this.handleClose,5e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeoutId)}},{key:"render",value:function(){var e=this.props,t=e.variant,n=e.heading,a=e.message,s=e.deleteAlert,r=e.id;return this.state.show||setTimeout((function(){s(r)}),300),Object(O.jsx)(f.a,{dismissible:!0,show:this.state.show,variant:t,onClose:this.handleClose,children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)(f.a.Heading,{children:n}),Object(O.jsx)("p",{className:"alert-body",children:a})]})})}}]),n}(s.a.Component)),C=n(70),w=n(50),y=(n(87),Object(O.jsxs)(a.Fragment,{children:[Object(O.jsx)(u.c,{to:"/change-password",className:"nav-link",id:"text-bar",children:"Change Password"}),Object(O.jsx)(u.c,{to:"/sign-out",className:"nav-link",id:"text-bar",children:"Sign Out"})]})),N=Object(O.jsxs)(a.Fragment,{children:[Object(O.jsx)(u.c,{to:"/sign-up",className:"nav-link",id:"text-bar",children:"Sign Up"}),Object(O.jsx)(u.c,{to:"/sign-in",className:"nav-link",id:"text-bar",children:"Sign In"})]}),S=Object(O.jsx)(a.Fragment,{children:Object(O.jsx)(u.c,{exact:!0,to:"/posts-all",className:"nav-link",id:"text-bar",children:"List of Posts"})}),P=function(e){var t=e.user;return Object(O.jsxs)(w.a,{className:"navbar1",variant:"dark",expand:"md",padding:"right",children:[Object(O.jsx)(w.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(O.jsx)(w.a.Collapse,{id:"basic-navbar-nav",children:Object(O.jsxs)(C.a,{className:"ml-auto",children:[t&&Object(O.jsxs)("span",{className:"navbar-text mr-2",id:"add-margin",children:["Welcome, ",t.email]}),S,t?y:N]})})]})},k=n(8),A="https://fathomless-forest-03421.herokuapp.com",I="http://localhost:4741",U="localhost"===window.location.hostname?I:A,T=n(19),D=n.n(T),E=function(e){return D()({url:U+"/sign-in/",method:"POST",data:{credentials:{email:e.email,password:e.password}}})},L=n(3),F=n(16),G=(n(42),n(34)),q=n(35),z=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleChange=function(e){return a.setState(Object(k.a)({},e.target.name,e.target.value))},a.onSignUp=function(e){e.preventDefault();var t,n=a.props,s=n.msgAlert,r=n.history,c=n.setUser;(t=a.state,D()({method:"POST",url:U+"/sign-up/",data:{credentials:{email:t.email,password:t.password,password_confirmation:t.passwordConfirmation}}})).then((function(){return E(a.state)})).then((function(e){return c(e.data.user)})).then((function(){return s({heading:"Sign Up Success",message:"Successfully registered! You've been signed in as well.",variant:"success"})})).then((function(){return r.push("/posts-all")})).catch((function(e){a.setState({email:"",password:"",passwordConfirmation:""}),s({heading:"Sign Up Failed with error: "+e.message,message:"Registration failed. Email may be taken, or passwords don't match.",variant:"danger"})}))},a.state={email:"",password:"",passwordConfirmation:""},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password,a=e.passwordConfirmation;return Object(O.jsx)("div",{className:"row",children:Object(O.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(O.jsxs)("center",{children:[Object(O.jsx)(G.a,{icon:q.c,size:"3x",color:"white"}),Object(O.jsx)("h3",{className:"register",children:"Sign Up"})]}),Object(O.jsx)("br",{}),Object(O.jsxs)(L.a,{onSubmit:this.onSignUp,children:[Object(O.jsxs)(L.a.Group,{controlId:"email",children:[Object(O.jsx)(L.a.Label,{className:"register",children:"Email address :"}),Object(O.jsx)(L.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Enter email",onChange:this.handleChange}),Object(O.jsx)("br",{})]}),Object(O.jsxs)(L.a.Group,{controlId:"password",children:[Object(O.jsx)(L.a.Label,{className:"register",children:"Password :"}),Object(O.jsx)(L.a.Control,{required:!0,name:"password",value:n,type:"password",placeholder:"Password",onChange:this.handleChange}),Object(O.jsx)("br",{})]}),Object(O.jsxs)(L.a.Group,{controlId:"passwordConfirmation",children:[Object(O.jsx)(L.a.Label,{className:"register",children:"Password Confirmation :"}),Object(O.jsx)(L.a.Control,{required:!0,name:"passwordConfirmation",value:a,type:"password",placeholder:"Confirm Password",onChange:this.handleChange})]}),Object(O.jsx)("br",{}),Object(O.jsx)(F.a,{variant:"light",type:"submit",children:"Register"})]})]})})}}]),n}(a.Component),B=Object(h.f)(z),_=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleChange=function(e){return a.setState(Object(k.a)({},e.target.name,e.target.value))},a.onSignIn=function(e){e.preventDefault();var t=a.props,n=t.msgAlert,s=t.history,r=t.setUser;E(a.state).then((function(e){return r(e.data.user)})).then((function(){return n({heading:"Sign In Success",message:"Welcome!",variant:"success"})})).then((function(){return s.push("/posts-all")})).catch((function(e){a.setState({email:"",password:""}),n({heading:"Sign In Failed with error: "+e.message,message:"Failed to sign in. Check your email and password and try again.",variant:"danger"})}))},a.state={email:"",password:""},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password;return Object(O.jsx)("div",{className:"row",children:Object(O.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(O.jsxs)("center",{children:[Object(O.jsx)(G.a,{icon:q.b,size:"3x",color:"white"}),Object(O.jsx)("h3",{className:"register",children:"Sign In"})]}),Object(O.jsx)("br",{}),Object(O.jsxs)(L.a,{onSubmit:this.onSignIn,children:[Object(O.jsxs)(L.a.Group,{controlId:"email",children:[Object(O.jsx)(L.a.Label,{className:"register",children:"Email address :"}),Object(O.jsx)(L.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Enter email",onChange:this.handleChange})]}),Object(O.jsx)("br",{}),Object(O.jsxs)(L.a.Group,{controlId:"password",children:[Object(O.jsx)(L.a.Label,{className:"register",children:"Password :"}),Object(O.jsx)(L.a.Control,{required:!0,name:"password",value:n,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(O.jsx)("br",{}),Object(O.jsx)(F.a,{variant:"light",type:"submit",children:"Submit"})]})]})})}}]),n}(a.Component),M=Object(h.f)(_),H=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.msgAlert,n=e.history,a=e.clearUser;(function(e){return D()({url:U+"/sign-out/",method:"DELETE",headers:{Authorization:"Bearer ".concat(e.token)}})})(e.user).finally((function(){return t({heading:"Signed Out Successfully",message:"Come back soon!",variant:"success"})})).finally((function(){return n.push("/")})).finally((function(){return a()}))}},{key:"render",value:function(){return""}}]),n}(a.Component),W=Object(h.f)(H),J=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleChange=function(e){return a.setState(Object(k.a)({},e.target.name,e.target.value))},a.onChangePassword=function(e){e.preventDefault();var t=a.props,n=t.msgAlert,s=t.history,r=t.user;(function(e,t){return D()({url:U+"/change-password/",method:"PATCH",headers:{Authorization:"Bearer ".concat(t.token)},data:{passwords:{old:e.oldPassword,new:e.newPassword}}})})(a.state,r).then((function(){return n({heading:"Change Password Success",message:"Password changed successfully!",variant:"success"})})).then((function(){return s.push("/posts-all")})).catch((function(e){a.setState({oldPassword:"",newPassword:""}),n({heading:"Change Password Failed with error: "+e.message,message:"Failed to change passwords. Check your old password and try again.",variant:"danger"})}))},a.state={oldPassword:"",newPassword:""},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.oldPassword,n=e.newPassword;return Object(O.jsx)("div",{className:"row",children:Object(O.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(O.jsxs)("center",{children:[Object(O.jsx)(G.a,{icon:q.a,size:"3x",color:"white",spin:!0}),Object(O.jsx)("h3",{className:"register",children:"Change Password"})]}),Object(O.jsxs)(L.a,{onSubmit:this.onChangePassword,children:[Object(O.jsx)("br",{}),Object(O.jsxs)(L.a.Group,{controlId:"oldPassword",children:[Object(O.jsx)(L.a.Label,{className:"register",children:"Old password :"}),Object(O.jsx)(L.a.Control,{required:!0,name:"oldPassword",value:t,type:"password",placeholder:"Old Password",onChange:this.handleChange})]}),Object(O.jsx)("br",{}),Object(O.jsxs)(L.a.Group,{controlId:"newPassword",children:[Object(O.jsx)(L.a.Label,{className:"register",children:"New Password :"}),Object(O.jsx)(L.a.Control,{required:!0,name:"newPassword",value:n,type:"password",placeholder:"New Password",onChange:this.handleChange})]}),Object(O.jsx)("br",{}),Object(O.jsx)(F.a,{variant:"light",type:"submit",children:"Change Password"}),Object(O.jsx)("div",{className:"divider"}),Object(O.jsx)(u.b,{to:"/posts-all",className:"btn btn-outline-light",children:"Cancel"})]})]})})}}]),n}(a.Component),R=Object(h.f)(J),Y=function(e,t){return D()({url:U+"/post/"+e,headers:{Authorization:"Bearer ".concat(t.token)}})},K=(n(38),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleChange=function(e){return a.setState(Object(k.a)({},e.target.name,e.target.value))},a.onCreatePost=function(e){e.preventDefault();var t=a.props,n=t.msgAlert,s=t.history,r=t.user;(function(e,t){return D()({url:U+"/create-post",method:"POST",data:{post:e},headers:{Authorization:"Bearer ".concat(t.token)}})})(a.state,r).then((function(){return n({heading:"Post Created",message:"Post created successfully!",variant:"success"})})).then((function(e){return s.push("/posts-all")})).catch((function(e){a.setState({title:"",subject:"",content:"",image:""}),n({heading:"Failed with error: "+e.message,message:"Failed to create a post.  Try again.",variant:"danger"})})).then((function(){return s.push("/posts-all")}))},a.state={title:"",subject:"",content:"",image:"",userEmail:""},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.setState({userEmail:this.props.user.email})}},{key:"render",value:function(){var e=this.state,t=e.title,n=e.subject,a=e.content,s=e.image;return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"row",id:"showPost",children:Object(O.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(O.jsx)("center",{children:Object(O.jsx)("h3",{className:"register",children:"Create Post"})}),Object(O.jsxs)(L.a,{onSubmit:this.onCreatePost,children:[Object(O.jsxs)(L.a.Group,{controlId:"title",children:[Object(O.jsx)(L.a.Label,{children:"Post Title :"}),Object(O.jsx)(L.a.Control,{required:!0,name:"title",value:t,placeholder:"Post Title",onChange:this.handleChange})]}),Object(O.jsx)("br",{}),Object(O.jsxs)(L.a.Group,{controlId:"subject",children:[Object(O.jsx)(L.a.Label,{children:"Subject :"}),Object(O.jsx)(L.a.Control,{required:!0,name:"subject",value:n,placeholder:"subject",onChange:this.handleChange})]}),Object(O.jsx)("br",{}),Object(O.jsxs)(L.a.Group,{controlId:"content",children:[Object(O.jsx)(L.a.Label,{children:"content :"}),Object(O.jsx)(L.a.Control,{required:!0,name:"content",value:a,placeholder:"content",as:"textarea",rows:4,onChange:this.handleChange})]}),Object(O.jsxs)(L.a.Group,{controlId:"image",children:[Object(O.jsx)(L.a.Label,{children:"Enter Image Link :"}),Object(O.jsx)(L.a.Control,{name:"image",value:s,placeholder:"image",onChange:this.handleChange,type:"url"})]}),Object(O.jsx)("br",{}),Object(O.jsx)("div",{className:"d-grid gap-2 col-6 mx-auto",children:Object(O.jsx)(F.a,{variant:"btn btn-secondary",type:"submit",children:"Submit"})})]})]})})})}}]),n}(a.Component)),Q=Object(h.f)(K),V=n(21),X=(n(109),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={post:null,loading:!0},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=(t.user,t.msgAlert);D()({method:"GET",url:U+"/posts-all"}).then((function(t){return e.setState({post:t.data.posts,loading:!1})})).catch((function(){return n({heading:"Index Fail",message:"Can not get posts.",variant:"danger"})}))}},{key:"render",value:function(){return null===this.state.post?"loading...":(null===this.posts||(e=this.state.post.map((function(e){return Object(O.jsxs)("li",{children:[Object(O.jsx)(V.a,{className:"box-post",style:{width:"80%"},children:Object(O.jsxs)(V.a.Body,{className:"bg-box",children:[Object(O.jsx)(u.b,{className:"link-title",to:"/post/".concat(e._id),children:Object(O.jsx)(V.a.Title,{className:"title-post",children:e.title})}),Object(O.jsxs)("h6",{children:["created by: ",e.userEmail," "]}),Object(O.jsx)(V.a.Subtitle,{className:"mb-2 text-muted",children:e.subject}),Object(O.jsx)(V.a.Text,{children:e.content}),Object(O.jsx)(u.b,{to:"/post/".concat(e._id,"/edit"),className:"btn btn-outline-secondary",children:"Update Post"})]})}),Object(O.jsx)("br",{})]},e._id)}))),Object(O.jsxs)("div",{children:[Object(O.jsx)("br",{}),Object(O.jsx)("h1",{className:"topic",children:"Share your thought .."}),Object(O.jsx)(u.c,{to:"/create-post",children:Object(O.jsx)("button",{type:"button",className:"btn btn-secondary btn-lg",id:"create-btn",children:"Create Post"})}),Object(O.jsx)("p",{children:this.state.loading&&"loading ..."}),Object(O.jsx)("ul",{children:e.reverse()})]}));var e}}]),n}(s.a.Component)),Z=Object(h.f)(X),$=function(e){return Object(O.jsxs)("ul",{children:[Object(O.jsx)("hr",{}),Object(O.jsxs)("li",{className:"bg-box",id:"text-comment",children:["Comment : ",Object(O.jsx)("br",{}),Object(O.jsx)("p",{children:e.text})]}),Object(O.jsx)("li",{}),Object(O.jsx)(F.a,{variant:"light",className:"btn btn-outline-danger",onClick:function(){return e.onClick(e._id)},children:"Delete"}),Object(O.jsx)("div",{className:"divider"}),Object(O.jsx)(u.b,{to:"/comments/".concat(e.postId,"/").concat(e._id,"/"),className:"btn btn-outline-light",children:"Update Comment"})]})},ee={cardImage:{objectFit:"contain",width:"50vw",height:"30vh",border:"none"}},te=function(e){return Object(O.jsx)(a.Fragment,{children:Object(O.jsx)(V.a,{id:"showPost-bg",style:{width:"100%"},children:Object(O.jsxs)(V.a.Body,{children:[Object(O.jsxs)("center",{children:[Object(O.jsxs)("h2",{className:"register",children:[" ",e.title]})," "]}),Object(O.jsxs)("h6",{children:["Subject : ",e.subject]}),Object(O.jsx)(V.a.Text,{children:e.content}),Object(O.jsx)("h5",{children:"Title"}),Object(O.jsx)(V.a.Title,{children:e.title}),Object(O.jsx)("h6",{children:"User"}),Object(O.jsx)(V.a.Subtitle,{className:"mb-2 text-muted",children:e.userEmail}),Object(O.jsx)("h6",{children:"Sub-Title"}),Object(O.jsx)(V.a.Subtitle,{className:"mb-2 text-muted",children:e.subject}),Object(O.jsx)("h6",{children:"Content: "}),Object(O.jsx)(V.a.Text,{children:e.content}),Object(O.jsx)("h6",{children:"Image"}),Object(O.jsx)("img",{src:e.image,style:ee.cardImage,alt:"No image"}),Object(O.jsx)(V.a.Text,{children:e.comments.map((function(t){var n=t.id,a=t.text,s=t.image,r=t._id;return Object(O.jsx)($,{text:a,image:s,_id:r,postId:e.postId,onClick:e.onClick},n)}))})]})})})},ne=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleDeletePost=function(e){var t=a.props,n=t.match,s=t.user,r=t.msgAlert,c=t.history;(function(e,t){return D()({url:U+"/post/"+e,method:"DELETE",headers:{Authorization:"Bearer ".concat(t.token)}})})(n.params.id,s).then((function(){return c.push("/posts-all")})).then((function(){return r({heading:"Delete post successfully",message:"Post deleted.",variant:"success"})})).catch((function(){return r({heading:"Delete post failed :(",message:"Failed to delete post.",variant:"danger"})}))},a.handleDeleteComment=function(e){var t=a.props,n=t.match,s=t.user,r=t.msgAlert,c=t.history;(function(e,t,n){return D()({url:U+"/post/"+e+"/"+t,method:"DELETE",headers:{Authorization:"Bearer ".concat(n.token)}})})(n.params.id,e,s).then((function(){return r({heading:"Delete comment successfully",message:"Comment deleted.",variant:"success"})})).then((function(){return c.push("/posts-all/")})).catch((function(){return r({heading:"Delete post failed :(",message:"Can not delete comment.",variant:"danger"})}))},a.state={post:{title:"",subject:"",content:"",image:"",userEmail:"",comments:[]}},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.match,a=t.user,s=t.msgAlert;Y(n.params.id,a).then((function(t){return e.setState({post:t.data.post})})).catch((function(){return s({heading:"Show post failed :(",message:"Can not get your post.",variant:"danger"})}))}},{key:"render",value:function(){var e=this.state.post,t=e.title,n=e.subject,a=e.content,s=e.image,r=e.comments,c=e._id,i=e.userEmail;return""===s?Object(O.jsxs)("div",{children:[Object(O.jsx)("br",{}),Object(O.jsx)(te,{id:"showPost-bg",title:t,subject:n,content:a,image:"https://image.shutterstock.com/image-vector/default-word-digital-style-glowing-600w-1668796114.jpg",comments:r,userEmail:i,postId:c,onClick:this.handleDeleteComment,onClickUpdate:this.handleUpdateComment}),Object(O.jsx)("br",{}),Object(O.jsx)(F.a,{onClick:this.handleDeletePost,variant:"danger",className:"btn-primary",children:"Delete Post"}),Object(O.jsx)("div",{className:"divider"}),Object(O.jsx)(u.b,{to:"/comments/".concat(c),class:"btn btn-secondary",children:"Make Comment"})]}):Object(O.jsxs)("div",{children:[Object(O.jsx)("br",{}),Object(O.jsx)(te,{id:"showPost-bg",title:t,subject:n,content:a,image:s,comments:r,userEmail:i,postId:c,onClick:this.handleDeleteComment,onClickUpdate:this.handleUpdateComment}),Object(O.jsx)("br",{}),Object(O.jsx)(F.a,{onClick:this.handleDeletePost,variant:"danger",className:"btn-primary",children:"Delete Post"}),Object(O.jsx)("div",{className:"divider"}),Object(O.jsx)(u.b,{to:"/comments/".concat(c),class:"btn btn-secondary",children:"Make Comment"})]})}}]),n}(a.Component),ae=Object(h.f)(ne),se=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=Object(k.a)({},e.target.name,e.target.value);a.setState((function(e){return{post:Object(b.a)(Object(b.a)({},e.post),t)}}))},a.onUpdatePost=function(e){e.preventDefault();var t=a.props,n=t.user,s=t.msgAlert,r=t.history,c=t.match;(function(e,t,n){return D()({url:U+"/update-post/"+t,method:"patch",data:{post:e},headers:{Authorization:"Bearer ".concat(n.token)}})})(a.state.post,c.params.id,n).then((function(){return s({heading:"Post Updated!",message:"Post updated.",variant:"success"})})).then((function(e){return r.push("/posts-all")})).catch((function(){s({heading:"Post update failed :(",message:"Can not update post.",variant:"danger"})}))},a.state={post:{title:"",subject:"",content:"",image:""}},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.match,a=t.user,s=t.msgAlert;Y(n.params.id,a).then((function(t){return e.setState({post:t.data.post})})).catch((function(e){return s({heading:"Show post failed :(",message:"Something went wrong: "+e.message,variant:"danger"})}))}},{key:"render",value:function(){var e=this.state.post,t=e.title,n=e.subject,a=e.content,s=e.image;return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"row",id:"showPost",children:Object(O.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(O.jsx)("h3",{className:"register",children:"Update Post"}),Object(O.jsxs)(L.a,{onSubmit:this.onUpdatePost,children:[Object(O.jsxs)(L.a.Group,{controlId:"title",children:[Object(O.jsx)(L.a.Label,{children:"Post Title :"}),Object(O.jsx)(L.a.Control,{required:!0,name:"title",value:t,onChange:this.handleChange})]}),Object(O.jsxs)(L.a.Group,{controlId:"subject",children:[Object(O.jsx)(L.a.Label,{children:"Subject :"}),Object(O.jsx)(L.a.Control,{required:!0,name:"subject",value:n,onChange:this.handleChange})]}),Object(O.jsxs)(L.a.Group,{controlId:"content",children:[Object(O.jsx)(L.a.Label,{children:"Content :"}),Object(O.jsx)(L.a.Control,{required:!0,name:"content",value:a,as:"textarea",rows:4,onChange:this.handleChange})]}),Object(O.jsxs)(L.a.Group,{controlId:"image",children:[Object(O.jsx)(L.a.Label,{children:"Enter Image Link :"}),Object(O.jsx)(L.a.Control,{name:"image",value:s,placeholder:"image",onChange:this.handleChange,type:"url"})]}),Object(O.jsx)("br",{}),Object(O.jsx)("div",{className:"d-grid gap-2 col-6 mx-auto",children:Object(O.jsx)(F.a,{variant:"primary",type:"submit",children:"Submit"})}),Object(O.jsx)(u.b,{to:"/posts-all",className:"btn btn-primary",children:"Cancel"})]})]})})})}}]),n}(a.Component),re=Object(h.f)(se),ce=(n(67),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleChange=function(e){return a.setState(Object(k.a)({},e.target.name,e.target.value))},a.onCreateComment=function(e){e.preventDefault();var t=a.props,n=t.msgAlert,s=t.history,r=t.user,c=t.match;(function(e,t,n){return D()({url:U+"/post/"+n,method:"POST",data:{comment:e},headers:{Authorization:"Bearer ".concat(t.token)}})})(a.state,r,c.params.id).then((function(){return n({heading:"Comment Created",message:"Comment created successfully!",variant:"success"})})).then((function(e){return s.push("/post/"+c.params.id)})).catch((function(e){a.setState({text:"",image:""}),n({heading:"Failed with error: "+e.message,message:"Failed to create a comment.  Try again.",variant:"danger"}),s.push("/post/"+c.params.id)}))},a.state={text:"",image:""},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state.text;return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"row",id:"showPost",children:Object(O.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(O.jsx)("h3",{className:"register",children:"Create Comment"}),Object(O.jsxs)(L.a,{onSubmit:this.onCreateComment,children:[Object(O.jsxs)(L.a.Group,{controlId:"text",children:[Object(O.jsx)(L.a.Label,{children:"Comment Text :"}),Object(O.jsx)(L.a.Control,{required:!0,name:"text",value:e,placeholder:"Comment Title",onChange:this.handleChange})]}),Object(O.jsx)("br",{}),Object(O.jsx)(F.a,{variant:"light",type:"submit",children:"Submit"}),Object(O.jsx)("div",{className:"divider"}),Object(O.jsx)(u.b,{to:"/posts-all",className:"btn btn-outline-light",children:"Cancel"})]})]})})})}}]),n}(a.Component)),ie=Object(h.f)(ce),oe=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=Object(k.a)({},e.target.name,e.target.value);a.setState((function(e){return{comment:Object(b.a)(Object(b.a)({},e.comment),t)}}))},a.onUpdateComment=function(e){e.preventDefault();var t=a.props,n=t.user,s=t.msgAlert,r=t.history,c=t.match;(function(e,t,n,a){return D()({url:U+"/post/"+n+"/"+t,method:"PATCH",data:{comment:e},headers:{Authorization:"Bearer ".concat(a.token)}})})(a.state.comment,c.params.id,c.params.postId,n).then((function(){return s({heading:"Comment Updated!",message:"Comment updated.",variant:"success"})})).then((function(e){return r.push("/post/".concat(c.params.postId))})).catch((function(){s({heading:"Comment update failed :(",message:"Failed to update comment.  Try again.",variant:"danger"})}))},a.state={comment:{text:"",image:""}},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state.comment.text;return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"row",id:"showPost",children:Object(O.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(O.jsx)("h3",{className:"register",children:"Update Comment"}),Object(O.jsxs)(L.a,{onSubmit:this.onUpdateComment,children:[Object(O.jsxs)(L.a.Group,{controlId:"text",children:[Object(O.jsx)(L.a.Label,{children:"Comment Text"}),Object(O.jsx)(L.a.Control,{required:!0,name:"text",value:e,onChange:this.handleChange})]}),Object(O.jsx)("br",{}),Object(O.jsx)(F.a,{variant:"light",type:"submit",children:"Submit"}),Object(O.jsx)("div",{className:"divider"}),Object(O.jsx)(u.b,{to:"/posts-all",className:"btn btn-outline-light",children:"Cancel"})]})]})})})}}]),n}(a.Component),le=Object(h.f)(oe);n(110);var de=function(){return Object(O.jsx)("div",{})},je=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).setUser=function(e){return a.setState({user:e})},a.clearUser=function(){return a.setState({user:null})},a.deleteAlert=function(e){a.setState((function(t){return{msgAlerts:t.msgAlerts.filter((function(t){return t.id!==e}))}}))},a.msgAlert=function(e){var t=e.heading,n=e.message,s=e.variant,r=Object(m.a)();a.setState((function(e){return{msgAlerts:[].concat(Object(i.a)(e.msgAlerts),[{heading:t,message:n,variant:s,id:r}])}}))},a.state={user:null,msgAlerts:[]},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.msgAlerts,s=t.user;return Object(O.jsxs)(a.Fragment,{children:[Object(O.jsx)(u.b,{to:"/posts-all",children:Object(O.jsx)("img",{src:"https://i.imgur.com/tw8ziCS.png",alt:"Taco-message-board",className:"nameLogo"})}),Object(O.jsx)(P,{user:s}),n.map((function(t){return Object(O.jsx)(v,{heading:t.heading,variant:t.variant,message:t.message,id:t.id,deleteAlert:e.deleteAlert},t.id)})),Object(O.jsxs)("main",{className:"container",children:[Object(O.jsx)(h.b,{path:"/sign-up",render:function(){return Object(O.jsx)(B,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(O.jsx)(h.b,{path:"/sign-in",render:function(){return Object(O.jsx)(M,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(O.jsx)(h.b,{path:"/posts-all",render:function(){return Object(O.jsx)(Z,{msgAlert:e.msgAlert,user:e.user})}}),Object(O.jsx)(x,{user:s,path:"/sign-out",render:function(){return Object(O.jsx)(W,{msgAlert:e.msgAlert,clearUser:e.clearUser,user:s})}}),Object(O.jsx)(x,{user:s,path:"/change-password",render:function(){return Object(O.jsx)(R,{msgAlert:e.msgAlert,user:s})}}),Object(O.jsx)(x,{user:s,path:"/create-post",render:function(){return Object(O.jsx)(Q,{msgAlert:e.msgAlert,user:s})}}),Object(O.jsx)(x,{user:s,path:"/post/:id/edit",render:function(){return Object(O.jsx)(re,{msgAlert:e.msgAlert,user:s})}}),Object(O.jsx)(x,{user:s,exact:!0,path:"/post/:id",render:function(){return Object(O.jsx)(ae,{msgAlert:e.msgAlert,user:s})}}),Object(O.jsx)(x,{user:s,exact:!0,path:"/comments/:id",render:function(){return Object(O.jsx)(ie,{msgAlert:e.msgAlert,user:s})}}),Object(O.jsx)(x,{user:s,exact:!0,path:"/comments/:postId/:id",render:function(){return Object(O.jsx)(le,{msgAlert:e.msgAlert,user:s})}})]}),Object(O.jsx)("br",{}),Object(O.jsx)(de,{})]})}}]),n}(a.Component),ue=Object(O.jsx)(u.a,{basename:"/taco-message-board-client",children:Object(O.jsx)(je,{})});c.a.render(ue,document.getElementById("root"))},38:function(e,t,n){},42:function(e,t,n){},67:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){}},[[111,1,2]]]);
//# sourceMappingURL=main.581aaab5.chunk.js.map
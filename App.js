const heading =  React.createElement("h1" , { id : "heading"} , "Hello world from react  First React line")
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)

const heading1 = React.createElement("div" , {id:"parent"} ,
   [ React.createElement("h1",{id:"child"}, "inner h1 html from react") , 
    React.createElement("h2" , {id:"child1"}, "inner h1  parellel")
   ]
)
const root1 =ReactDOM.createRoot(document.getElementById("root1"))
root1.render(heading1)
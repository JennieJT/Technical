import "./axios.js";
axios.get("/users").then((p)=>{
    console.log("This is in browser side...");
    console.log(p.data);
}).catch((error)=>{
    console.log(error.message);
});
function ajax({
    type="get",
    url = requiredParameter("url"), 
    data = {},
    success = ()=> {},
    error = () => {},
    isAsync = true }={}){
        console.log(JSON.stringify({type,url.data,success,error,
        isAsync},null,2));
    }

function requiredParameter(name) {
    throw new Error(`missing parameter" ${name}"`);   
} 

try {
    ajax({
        url:"https://www.kommit.co" //required parameter

    });
} catch(e) {console.warn(e.message)}
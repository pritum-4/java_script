function fetchData(url,callback){
    setTimeout(()=>{
        var data = {id:1,name:'John Doe'};
        callback(data)
    },1000);
}
function processData(data){
    console.log('Processing data:',data);
}
fetchData("https://example.com/data",processData)
console.log("Fetching Data")
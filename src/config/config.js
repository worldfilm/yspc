
const network=function(url,data,fun){
  if(!data){
    let method='post'
    fetch(url,data,method).then(function(response){
     return response.json();
    }).then(function(data){
     console.log('POST成功')
    }).catch(function(e){
     console.log("error")
    })
  }else{
    fetch(url).then(function(response){
     return response.json();
    }).then(function(data){
     console.log('GET成功')
    }).catch(function(e){
     console.log("error")
    })
  }
}
export{network}

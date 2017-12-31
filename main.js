var submit = document.getElementById('submit_btn');
 submit.onclick =function (){
  var request = new XMLHttpRequest();
  request.onreadystatechange = function(){
    if(request.readyState===XMLHttpRequest.DONE){
      if(request.status===200){
        alert((JSON.parse(request.responseText).list[0].main.temp_max)/10);
      }else{
        alert(request.responseText.toString());
      }
    }
  };
  var loc = document.getElementById("locationTextField").value;
  document.getElementById("locationTextField").value="";
  request.open("POST","/weather",true);
  request.setRequestHeader('Content-Type','application/json');
  request.send(JSON.stringify({"data":loc}));
};

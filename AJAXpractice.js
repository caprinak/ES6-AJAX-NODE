var ourRequest = new XMLHttpRequest();
ourRequest.open('GET','https://jsonplaceholder.typicode.com/albums');
ourRequest.onload = function(){
    console.log(ourRequest.responseText);
};
ourRequest.send();
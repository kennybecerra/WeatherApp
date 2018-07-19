console.log('Starting app.js');
const http = new easyHTTP;
/*
const posts = http.get('https://jsonplaceholder.typicode.com/posts', function(error, posts) {
  if (error) {
    console.log(error);
  }
  else {
  console.log(posts);
  }
});
*/
//console.log(posts);

//create data
const data = {
  title: 'Custom Post',
  body: "this is a custom post"
};
/*
http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
  if(err) {
    console.log(err);
  }else {
    console.log(post);
  }
})
*/
//create post
http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post) {
  if(err) {
    console.log(err);
  }else {
    console.log(post);
  }
})




//Third Excercise
/*
const posts = [
  {title: "post one", body:"This is post one"},
  {title: "post two", body:"This is post two"}  
]

function createPost(post) {
  setTimeout(function() {
    posts.push(post);
  }, 2000);
}


function getPosts() {
  setTimeout(function() {
    let output = '';
    posts.forEach(function(post){
      output += "<li>" + post.title + "<li>"
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({title:"post three", body:"This is post three"});
getPosts();
*/

//Seconds Excercise 
/*

document.getElementById('button1').addEventListener('click', loadCustomer);
document.getElementById('button2').addEventListener('click', loadCustomers);


function loadCustomer() {

  const xhr = new XMLHttpRequest();
  
  xhr.open('GET', 'customer.json', true);
  xhr.onload = function (){
    if(this.status === 200){
      //console.log(this.responseText);
      const customer = JSON.parse(this.responseText);

      let output = "<ul>";
      output = output + "<li>" + customer.id + "</li>";
      output = output + "<li>" + customer.name + "</li>";
      output = output + "<li>" + customer.company + "</li>";
      output = output + "<li>" + customer.phone + "</li>";
      
      output = output + "</ul>";

      document.getElementById('customer').innerHTML = output;
    }
  }

  xhr.send();
}

function loadCustomers() {

  const xhr = new XMLHttpRequest();
  
  xhr.open('GET', 'customers.json', true);
  xhr.onload = function (){
    if(this.status === 200){
      //console.log(this.responseText);
      const customers = JSON.parse(this.responseText);
      let output = "";

      customers.forEach(function(element){
        output = output + "<ul>";
        output = output + "<li>" + element.id + "</li>";
        output = output + "<li>" + element.name + "</li>";
        output = output + "<li>" + element.company + "</li>";
        output = output + "<li>" + element.phone + "</li>";
        output = output + "</ul>";
      });
      

      document.getElementById('customers').innerHTML = output;
    }
  }

  xhr.send();
}

*/

/*
//First excercise 
document.getElementById('button').addEventListener('click', loadData);

function loadData() {
    //Create an XHR object
    //alert("Hi");
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'data.txt', true);
    
    xhr.onload = function() {
      if(this.status = 200) {
        //console.log(this.responseText);
        document.getElementById('output').innerHTML = "<h1>" + this.responseText + "</h1>"; 
      }
    }

    xhr.onerror = function() {
      console.log('resuest error .....');
    }

    xhr.send();
}
/*

/*
function loadData() {
  // Create an XHR Object
  const xhr = new XMLHttpRequest();

  // OPEN
  xhr.open('GET', 'data.txt', true);

  // console.log('READYSTATE', xhr.readyState);

  // Optional - Used for spinners/loaders
  xhr.onprogress = function(){
    console.log('READYSTATE', xhr.readyState);
  }

  xhr.onload = function(){
    console.log('READYSTATE', xhr.readyState);
    if(this.status === 200) {
      // console.log(this.responseText);
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    }
  }

  // xhr.onreadystatechange = function() {
  //   console.log('READYSTATE', xhr.readyState);
  //   if(this.status === 200 && this.readyState === 4){
  //     console.log(this.responseText);
  //   }
  // }

  xhr.onerror = function() {
    console.log('Request error...');
  }

  xhr.send();


    // readyState Values
    // 0: request not initialized 
    // 1: server connection established
    // 2: request received 
    // 3: processing request 
    // 4: request finished and response is ready


  // HTTP Statuses
  // 200: "OK"
  // 403: "Forbidden"
  // 404: "Not Found"
}
*/
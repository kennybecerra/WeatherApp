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
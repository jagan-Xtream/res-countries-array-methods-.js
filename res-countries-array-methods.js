//Print the country which use US Dollars as currency.
 var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true)
request.send()
  request.onload = function(){
      var data = JSON.parse(this.response)
     console.log(data)
  
     var restcountries=data.filter((i)  => i.currencies[0].code=== 'USD').map(i => i.name)
     
    console.log(restcountries) 
  }
  
  
  
//Print the total population of countries using reduce function
var request = new XMLHttpRequest();
 request.open('GET','https://restcountries.eu/rest/v2/all',true)
 request.send()
   request.onload = function(){
       var data = JSON.parse(this.response)
      console.log(data)

        var restcountries=data.reduce((countries,i)  => {
          return i.population + countries
        },0)
          console.log(restcountries) 
  }
  
  
//Get all the countries with population of less than 2 lacs using Filter function
 var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true)
request.send()
  request.onload = function(){
      var data = JSON.parse(this.response)
     console.log(data)
  
     var restcountries=data.filter((i)  => {
       return i.population < 200000
     })
    console.log(restcountries) 
    }
    
    
// Print the following details name, capital, flag using forEach function
 var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true)
request.send()
  request.onload = function(){
      var data = JSON.parse(this.response)
     console.log(data)
  
  
 data.forEach((i) => {
   console.log(i.name)
   console.log(i.capital)
   console.log(i.flag)
 })
  }
  
  
//Get all the countries from Asia continent using Filter function
 var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true)
request.send()
  request.onload = function(){
      var data = JSON.parse(this.response)
     console.log(data)

     var restcountries=data.filter(i => i.region === 'Asia').map(i => i.name);
     console.log(restcountries) 
  
 
 }
 
 
//Print the total population of countries in Asia continent using reduce and filter function
 var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true)
request.send()
  request.onload = function(){
      var data = JSON.parse(this.response)
    
     var restcountries=data.filter(i => i.region === 'Asia').map(i => i.name);
       console.log(restcountries) 

        var restcountries=data.reduce((Asiacountries,i)  => {
          return i.population
        },0)
        console.log(restcountries)
      }
      
      
//Print the country which use US Dollars as currency.
 var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true)
request.send()
  request.onload = function(){
      var data = JSON.parse(this.response)
     console.log(data)
     try{
      alert('line 1')
      alert('line 2')
    
    
    }
    catch(err){
    alert('catch alert')
    }
  }

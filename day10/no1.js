var fun = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const fun2 = {
    firstName: "Payal",
    lastName: "Shekhawat"
  }
  
  console.log(fun.fullName.apply(fun2));

  var call1 = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const call2 = {
    firstName:"Ritu",
    lastName: "Kumari"
  }
  
  console.log(call1.fullName.call(call2, "Jaipur", "Sikar"));
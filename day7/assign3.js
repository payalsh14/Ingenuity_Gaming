const person = 
{
    firstName:"", 
    Age:"", 
    Address:"", 
    City:"",
    State:"",
    Pincode: "",
    Hobbies:"",

    pr: function() {
        return "Name :"+ this.firstName + "\t" + "Age :" + this.Age+ "\t" + "Address :" +this.Address+ "\t" + "Hobbies :"+this.Hobbies +"City :" +this.City+"State :" +this.State + "Pincode :" +this.Pincode;
    }

    };
    document.body.style.backgroundColor="black";
person.firstName=prompt("Enter Name :");
person.Age=prompt("Enter Age");
person.Address=prompt("Enter Address :");
person.City=prompt("Enter City :");
person.State=prompt("Enter State :");
person.Pincode=Number(prompt("Enter Pincode :"));

person.Hobbies=prompt("Enter Hobbies:");
document.body.style.backgroundColor="black";
document.body.style.color="aqua";
document.body.style.fontSize="40px";
document.body.style.fontFamily="cursive";
document.write('<h1 style="text-align:center; color:black;">'+person.pr()+'</h1>')
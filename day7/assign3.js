const person = 
{
    firstName:"", 
    Age:"", 
    Address:"", 
    Hobbies:"",
    pr: function() {
        return "Name :"+ this.firstName + "\t" + "Age :" + this.Age+ "\t" + "Address :" +this.Address+ "\t" + "Hobbies :"+this.Hobbies;
    }

    };
person.firstName=prompt("Enter Name :");
person.Age=prompt("Enter Age");
person.Address=prompt("Enter Address :");
person.Hobbies=prompt("Enter Hobbies:");
document.write('<h1 style="text-align:center; color:black;">'+person.pr()+'</h1>')
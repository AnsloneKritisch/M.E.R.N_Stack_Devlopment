var roster = []

// Add Student 

function add()
{
    var new_name = prompt("What name would you like to add ?")
    roster.push(new_name)
}

function remove()
{
    var remove_name  = prompt("What name would you like to remove ?")
    var index = roster.indexOf(remove_name);
    // indexof give the index number of the element
    roster.splice(index,1)
    // here index -> is the index_no_of_element you want to delete || and 1_is How Many Elments you want to Delete
}

function display()
{
    alert(roster);
    console.log(roster);
}


var start = prompt("Would you like to start the roster Web APP ? y/n")
var request = "empty" ;

if(start === 'y')
{
     while(request !== "quit")
     {
        request = prompt("Please selecrt an action : add , remove ,display or quit")
        if (request=="add")
        {
            add();
        }

        else if(request==="display")
        {
            display();
        }

        else if(request=="remove")
        {
            remove();
        }
        
        else
        {
            alert("Not Recognised");
        }
        
     }
}

alert("Thanks For using the web app");
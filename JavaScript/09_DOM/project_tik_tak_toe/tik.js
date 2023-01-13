// console.log("connected");

// Restart game
var restart = document.querySelector("#b");

// Grab all the square 
var sqr = document.querySelectorAll('td');

// Clear all the square 
function ClearBoared() {
    for (var i = 0; i < sqr.length; i++) {
        sqr[i].textContent = '';
    }
}
restart.addEventListener('click', ClearBoared);


// This is how to change single  box

// var cellone = document.querySelector('#one')

// cellone.addEventListener('click', function() 
// {
//     if (cellone.textContent === '') 
//     {
//         cellone.textContent = 'X';
//     }

//     else if (cellone.textContent === 'X')
//     {
//         cellone.textContent = 'O';
//     }
//     else
//     {
//         cellone.textContent = '';
//     }
// }
// )

/*
What is this?

In JavaScript, the this keyword refers to an object.

Which object depends on how this is being invoked (used or called).

The this keyword refers to different objects depending on how it is used:
In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object.


*/
function changeMarker()
{
    if (this.textContent === '')
    {
        this.textContent = 'X';
    } 
    else if (this.textContent === 'X')
    {
        this.textContent = '0';
    }
    else
    {
        this.textContent = '';
    }

}

for (var i = 0; i < sqr.length; i++)
{
    sqr[i].addEventListener('click', changeMarker)
    }
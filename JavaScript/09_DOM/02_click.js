var head1 = document.querySelector('#one');
var head2 = document.querySelector('#two');
var head3 = document.querySelector('#three');

head1.addEventListener('mouseover', function ()
{
    head1.textContent = "Mouse Currently Over";
    head1.style.color = 'red';
} )

head1.addEventListener("mouseout", function(){
    head1.textContent = "HOVER OVER ME!";
    head1.style.color = 'black';
    }) 

head2.addEventListener("click", function()
{
    head2.textContent = 'CLICKED ON';
        head2.style.color = 'blue';
})
        
head3.addEventListener('dblclick', function()
{
    head3.textContent = 'I WAS DOUBLE CLICKED!';
    head3.style.color = 'red';
})

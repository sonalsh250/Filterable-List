let filterInput = document.getElementById('filterInput');

//when keyup happens, call function filterNames
filterInput.addEventListener('keyup', filterNames);

function filterNames()
{
    //get value of the input
    let filterValue = document.getElementById('filterInput').value.toUpperCase();

    //get names ul
    let ul = document.getElementById('names');
    //get li from ul
    //querySelectorAll can grab eements by their ids, classes, etc.
    let li = ul.querySelectorAll('li.collection-item');

    for(let i=0;i< li.length; i++)
    {
        let a= li[i].getElementsByTagName('a')[0]; //get current link
        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1)
        {
            li[i].style.display='';
        }else
        {
            li[i].style.display='none';
        }
    }
}
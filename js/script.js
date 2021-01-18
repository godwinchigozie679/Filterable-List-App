let filterInput = document.querySelector('#filterInput');


filterInput.addEventListener('keyup', filterNames);


function filterNames(){
    //Get value
    let typedInput = filterInput.value.toUpperCase();
    let ul = document.querySelector('#names');
    let li = ul.querySelectorAll('li.collection-list');
    //Loop Through Collection Item
    for (let i = 0; i < li.length; i++){
        //Get the tagname
        let a = li[i].getElementsByTagName('a')[0];
        
        //Chect of type marches
        if (a.innerHTML.toUpperCase().indexOf(typedInput) > -1){
            li[i].style.display = '';

        } else{
            li[i].style.display = 'none';

        }

    }
}
 var DataBase=[
        {_id:'001', name:'Article 1', published: true},
        {_id:'002', name:'Article 2', published: true},
        {_id:'003', name:'Article 3', published: false},
        {_id:'004', name:'Article 4', published: false},
        {_id:'005', name:'Article 5', published: true},
        {_id:'006', name:'Article 6', published: false},
        {_id:'007', name:'Article 7', published: true},
        {_id:'008', name:'Article 8', published: false},
        {_id:'009', name:'Article 9', published: true},
    ];

 function renderList(results) {
        const productDiv= document.querySelector('#products');
        productDiv.innerHTML= '';

        const products= results.map((result,number)=> {
            return '<div>' + result.name + '</div>';
        });
        products.forEach((item)=> {
            productDiv.innerHTML += item;
        });
    }

    renderList(DataBase);

   function togglePublished(showPublished){
    const fliteredResults=DataBase.filter((result) => {
    return showPublished || result.published;
   });
    renderList(filteredResults);
}
      document.querySelector('#published').addEventListener('change',(event) =>{
    const value= event.target.value === 'true';
    togglePublished(value);
   });

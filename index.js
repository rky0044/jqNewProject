	
// A $( document ).ready() block.
$( document ).ready(function() {
    var itemsArry=[];
    var fetchItem = JSON.parse (localStorage.getItem('heading'));
    console.log("skanvk",fetchItem)

  $(".heading").submit(function (event){
    event.preventDefault();
        var headingValue= $("input[name='heading']",this).val();
        itemsArry.push({'heading' : headingValue ,'subHeading':[]  });

        localStorage.setItem('heading', JSON.stringify(itemsArry) );

        let ab =localStorage.getItem('heading');
       
       
   
  })
});
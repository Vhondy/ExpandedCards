const panels = document.querySelectorAll('.panel')      // create a reference to each panel 

panels.forEach(function (i) {                           // loop through each panel
     
    i.addEventListener('click',function() {             // add a click event to each panel
        removeActiveClasses()                           // remove active classes
        i.classList.add('active')                       // make the clicked on panel active
    });

});


/*
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})
*/

function removeActiveClasses(){
    panels.forEach(function(panel){
        panel.classList.remove('active')
    })
}


/*
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
*/
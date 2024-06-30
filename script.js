document.addEventListener('DOMContentLoaded', () => {
    const testbutton = document.getElementById('textbutton')


    function updatetext () { 
        const testinput = document.getElementById('testtext').value
        document.getElementById('testtarget').innerText = testinput
    }

    testbutton.addEventListener('click', function() {
      updatetext()
    });

});
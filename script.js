var contentType = ['beer', 'vodka', 'juice'];

contentType.forEach(function(alcoholType) {
    var xhr;
    var error = 'Info about ' + alcoholType + ' is not available right now... :(';
    if (window.ActiveXObject) {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    } else if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    }

    xhr.addEventListener('load', function () {
        var alcohol = document.getElementById(alcoholType);
        
        if (xhr.status >= 200 && xhr.status < 300) {
            data = JSON.parse(xhr.responseText);
            console.log(data.ingredients);
            if (!data.ingredients) {
                alcohol.innerHTML = error;
            } else {
                alcohol.innerHTML = data.ingredients[0].strDescription;
            }
        } else {
            alcohol.innerHTML = error;
        }

        console.log('This always runs...');
    });
    xhr.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?i=' + alcoholType);
    xhr.send();
});

var menuIcon = document.getElementById('menu-icon');
var menu = document.getElementById('menu');

menuIcon.addEventListener('click', function() {
    menu.classList.toggle('d-none-xs');
    menu.classList.toggle('d-none-md');
});

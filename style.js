const button = document.getElementById('btn')
.addEventListener('click', function(){
    const word = document.getElementById('text').value;
    const count = word.length;
    const value = document.getElementById('value');
    value.innerText = count;
    document.getElementById('text').value = '';
})

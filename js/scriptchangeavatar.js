document.querySelector('#changeavatar').addEventListener('click', () => {
    document.querySelector('#avatar2').classList.remove('none');
    document.querySelector('#avatar').classList.add('none');

})


document.querySelector('#changeavatar2').addEventListener('click', () => {
    document.querySelector('#avatar2').classList.add('none');
    document.querySelector('#avatar').classList.remove('none');
})

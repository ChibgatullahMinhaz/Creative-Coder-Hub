const Cards = document.querySelectorAll('.inner_container');

Cards.forEach(card => {
    card.addEventListener('click',()=>{
        Cards.forEach(card =>{
            card.classList.remove('active')
        })
        card.classList.add('active');

    } )
});
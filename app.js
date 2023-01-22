const ureadMessage = document.querySelectorAll(".uread");
const unread = document.getElementById('notifications');
const mark_all = document.getElementById('mark_all');

unread.innerText = ureadMessage.length;

ureadMessage.forEach((message) =>{
    message.addEventListener('click', () =>{
        message.classList.remove('uread');
        const newureadMessage = document.querySelectorAll('.uread');
        unread.innerText = newureadMessage.length;
    })
})

mark_all.addEventListener('click', () =>{
    ureadMessage.forEach((message) =>{
        message.classList.remove('uread');
    })

    const newureadMessage = document.querySelectorAll('.uread');
    unread.innerText = newureadMessage.length;
})
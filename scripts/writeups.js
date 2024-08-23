const member_cards = document.getElementsByClassName("member-card");
const member_usernames = document.getElementsByClassName("member-username");

console.log(member_cards);
console.log(member_usernames);


for (let i = 0; i < member_cards.length; i++) {
    member_cards[i].addEventListener("mouseover", function () {
        console.log(member_usernames[i].innerHTML);
        member_usernames[i].classList.toggle("glitch");
        member_usernames[i].classList.toggle("text");
        member_usernames[i].classList.toggle("layers");
        member_usernames[i].classList.toggle("hero");
    });
    member_cards[i].addEventListener("mouseout", function () {
        member_usernames[i].classList.toggle("glitch");
        member_usernames[i].classList.toggle("text");
        member_usernames[i].classList.toggle("layers");
        member_usernames[i].classList.toggle("hero");
    });
}
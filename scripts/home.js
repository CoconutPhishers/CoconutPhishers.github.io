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

hidden_element = document.getElementsByClassName("hidden");
shown_element = document.getElementsByClassName("shown");

contact_card = document.getElementById("contact-card");

contact_card.addEventListener("click", function () {
    hidden_element = document.getElementsByClassName("hidden")[0];
    shown_element = document.getElementsByClassName("shown")[0];

    hidden_element.classList.toggle("hidden");
    hidden_element.classList.toggle("shown");
    shown_element.classList.toggle("hidden");
    shown_element.classList.toggle("shown");
});

function github()
{
    window.open("https://github.com/CoconutPhishers", '_blank').focus();
}

function insta()
{
    window.open("https://www.instagram.com/coconut.phishers?igsh=OTd3MnE3c2d1ZjI1", '_blank').focus();
}

function linkedin()
{
    window.open("https://www.linkedin.com/company/coconut-phishers/", '_blank').focus();
}
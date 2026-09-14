
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});


const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".food-card");

filters.forEach(button => {

  button.addEventListener("click", () => {

    document.querySelector(".filter.active").classList.remove("active");

    button.classList.add("active");

    const category = button.dataset.filter;

    cards.forEach(card => {

      if(category === "todos" || card.dataset.category === category){
        card.style.display = "block";
      }else{
        card.style.display = "none";
      }

    });

  });

});


const form = document.querySelector("#reservationForm");

form.addEventListener("submit", function(e){

  e.preventDefault();

  const nome = document.querySelector("#nome").value;
  const telefone = document.querySelector("#telefone").value;
  const data = document.querySelector("#data").value;
  const hora = document.querySelector("#hora").value;
  const pessoas = document.querySelector("#pessoas").value;

  const mensagem =
`Olá! Gostaria de fazer uma reserva.

Nome: ${nome}
Telefone: ${telefone}
Data: ${data}
Horário: ${hora}
Quantidade: ${pessoas}`;

  const numero = "5511999999999";

  window.open(
    `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`,
    "_blank"
  );

});


window.addEventListener("scroll", () => {

  const header = document.querySelector("header");

  if(window.scrollY > 50){
    header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";
  }else{
    header.style.boxShadow = "none";
  }

});
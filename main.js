const btn = document.querySelector('.container_menu')
const background = document.querySelector('.background')
const menu = document.querySelector('.menu');
const contact = document.querySelector('.container_contact')



btn.addEventListener('click',() =>{
background.classList.toggle('active');
menu.classList.toggle('active');
contact.classList.toggle('active');


let glowInTexts = document.querySelectorAll(".glowIn");
glowInTexts.forEach(glowInText => {
  let letters = glowInText.textContent.split("");
  glowInText.textContent = "";
  letters.forEach((letter, i) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.style.animationDelay = `${i * 0.05}s`;
    glowInText.append(span);
  });
});

} )


/* ---------------pestañas-----------------tabs-------------- */

const targets = document.querySelectorAll('[data-target]');
const content = document.querySelectorAll('[data-content]')

targets.forEach(target =>{
    target.addEventListener('click',() =>{
        content.forEach(c=>{
            c.classList.remove('active') 
        })
        const t = document.querySelector(target.dataset.target)
        t.classList.add('active') 
    })
})



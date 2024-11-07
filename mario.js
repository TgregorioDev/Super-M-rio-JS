const mario = document.querySelector('.mario') //adicionamos o Mário
const pipe = document.querySelector('.pipe'); //adicionamos o tubo

const jump = () => {
  mario.classList.add('mario-jump'); //acessando a classe da animação criada no css

  setTimeout(() => {

    mario.classList.remove('mario-jump'); //vai remover a classe adicionada acima, e permitir que acionemos novamente o pulo do Mário

  }, 500);
}

const loop = setInterval(() => {   //lógica de colisão do Mário com o tubo

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '') // getComputedStyle trará o estilo computado na imagem do Mário, permitindo trazer as atribuições do CSS, o + antes do Window converte a string para número

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){

       pipe.style.animation = 'none';  //para a animação assim que o Mário colide com o tubo 
       pipe.style.animation = `${pipePosition}px`;

       mario.style.animation = 'none';
       mario.style.bottom = `${marioPosition}px`;

       mario.src ='./img/game-over.png'; //trará a imagem de game over quando o Mário colidir com o tubo
       mario.style.width =  '75px' //define o tamanho da imagem de game over
       mario.style.marginLeft = '50px' //define a distância da imagem do tubo

       clearInterval(loop); //finalizará o loop após o Game Over
 
    } 

}, 10);

document.addEventListener('keydown', jump); //fará com que assim que uma tecla seja clicada, realize a função de pulo do Mário



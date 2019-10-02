/*
  GAME RULES:
  - O jogo tem 2 jogadores, jogando em rounds
  - A cada rodada, um jogador joga o dado quantas vezes quiser. Cada resultado é adicionado ao seu ROUND SCORE
  - MAS, se o jogador tirar o número '1' no dado, todo seu placar é perdido. Após iss, é a vez do outro jogador
  - O jogador pode excolher 'HOLD' "SEGURAR", que significa que seu ROUND Score é adicionado ao seu Global Score. Após isso, é a vez do outro jogador
  - O primeiro a alcançar 100 pontos no Global ganha o jogo


  - The game has 2 players, playing in rounds
  - In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
  - BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
  - The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
  - The first player to reach 100 points on GLOBAL score wins the game

*/

  var scores, roundScore, activePlayer;

  scores = [0,0];
  roundScore = 0;
  activePlayer = 0;

  //dice logic
  dice = Math.floor(Math.random() * 6) + 1;
  //console.log(dice);

  //setter
 document.querySelector('#current-' + activePlayer).textContent = dice;
  //document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';


  //getter
    // var  x =  document.querySelector('#score-0').textContent;
    // console.log(x);

  //hide dice
  document.querySelector('.dice').style.display = 'none';

    //modifying HTML numbers
  document.getElementById('score-0').textContent = 0;
  document.getElementById('score-1').textContent = 0;
  document.getElementById('current-0').textContent = 0;
  document.getElementById('current-1').textContent = 0;


  document.querySelector('.btn-roll').addEventListener('click', function(){
    //1.random number
    var dice = Math.floor(Math.random() * 6) + 1;
    //2. display the result
    document.querySelector('.dice').style.display = 'block';
    document.querySelector('.dice').src = 'dice-' + dice + '.png';
    //3. atualizar o roundScore quando número for diferente de 1
    if (dice !== 1) {
      //adicinar score
      roundScore += dice;
      //display
      document.querySelector('#current-' + activePlayer).textContent = roundScore;  
    }else {
      //próximo jogador
      activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
      //rounscore volta a ser 0
      roundScore = 0;
      document.getElementById('current-0').textContent  = '0';
      document.getElementById('current-1').textContent  = '0';

      document.querySelector('.player-0-panel').classList.toggle('active');
      document.querySelector('.player-1-panel').classList.toggle('active');

      // document.querySelector('.player-0-panel').classList.remove('active');
      // document.querySelector('.player-1-panel').classList.add('active');

    }
  }); 


































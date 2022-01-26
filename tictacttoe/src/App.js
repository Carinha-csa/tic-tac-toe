

var turn = 0
var player = true

function GameButton(props){


  return(
    <button id={props.name} className="game" disabled={false} value=""

    onClick={
     async () => {
       
       const button = document.getElementById(props.name)
       const buttons = document.getElementsByTagName("button")

       if(player === true){
        button.innerText = "X"
        button.value = "X"
        player = false
      }
      else{
        button.innerText = "O"
        button.value = "O"
        player = true

      }

      turn += 1

      theraWinner()
       function theraWinner(){
                      //HorizontalCheck
          if(buttons[0].value === buttons[1].value && buttons[1].value === buttons[2].value){
            if(buttons[0].value === "X" || buttons[0].value === "O"){
              if(buttons[0].value === "X"){
                endGame("X")
                
              }
              else{
                endGame("O")
                
              }
            }
          }

          if(buttons[3].value === buttons[4].value && buttons[4].value === buttons[5].value){
            if(buttons[3].value === "X" || buttons[3].value === "O"){
              if(buttons[3].value === "X"){
                endGame("X")
                
              }
              else{
                endGame("O")
                
              }
            }
          }

          if(buttons[6].value === buttons[7].value && buttons[7].value === buttons[8].value){
            if(buttons[6].value === "X" || buttons[6].value === "O"){
              if(buttons[6].value === "X"){
                endGame("X")
              
              }
              else{
                endGame("O")
                
              }
            }
          }

          //Vertical Check

          if(buttons[0].value === buttons[3].value && buttons[3].value === buttons[6].value){
            if(buttons[0].value === "X" || buttons[0].value === "O"){
              if(buttons[0].value === "X"){
                endGame("X")
                
              }
              else{
                endGame("O")
                
              }
            }
          }

          if(buttons[1].value === buttons[4].value && buttons[4].value === buttons[7].value){
            if(buttons[1].value === "X" || buttons[1].value === "O"){
              if(buttons[1].value === "X"){
                endGame("X")
                
              }
              else{
                endGame("O")
                
              }
            }
          }

          if(buttons[2].value === buttons[5].value && buttons[5].value === buttons[8].value){
            if(buttons[2].value === "X" || buttons[2].value === "O"){
              if(buttons[2].value === "X"){
                endGame("X")
                
              }
              else{
                endGame("O")
                
              }
            }
          }

          //diagonal check
          
          if(buttons[0].value === buttons[4].value && buttons[4].value === buttons[8].value){
            if(buttons[0].value === "X" || buttons[0].value === "O"){
              if(buttons[0].value === "X"){
                endGame("X")
                
              }
              else{
                endGame("O")
                
              }
            }
          }

          if(buttons[2].value === buttons[4].value && buttons[4].value === buttons[6].value){
            if(buttons[2].value === "X" || buttons[2].value === "O"){
              if(buttons[2].value === "X"){
                endGame("X")
                
              }
              else{
                endGame("O")
                
              }
            }
          }

          button.setAttribute("disabled", true)
          draw()

          function endGame(winner){
            const areaplacar = document.getElementById("placar")
            const placar = document.getElementById(`placar${winner}`)
            const value = parseInt(placar.textContent) + 1
   
            let vencedor = document.createElement("div")
            areaplacar.appendChild(vencedor)
            vencedor.setAttribute('class', `vencedor${winner}`)
            vencedor.setAttribute('id', 'resultado')
            vencedor.innerText = `O vencedor foi o jogador ${winner}`
           
            
   
            placar.innerText = value
   
            for(let n = 0; n < 9; n++){
              buttons[n].setAttribute("disabled", true)
            }
            turn = 0
          }
          }

          function draw(){
            if(turn === 9){
               const areaplacar = document.getElementById("placar")
               const resultado = document.getElementById("resultado")
               if(!resultado){
                 let empate = document.createElement("div")
                 areaplacar.appendChild(empate)
                 empate.setAttribute("class", "empate")
                 empate.setAttribute('id', 'resultado')
                 empate.innerText = "Vishh deu velha!"

                 turn = 0
               }
            }
          }

      }

    }>
    </button>
  )
}

function App() {

  return (
    <div className="App">
      <main id="areaPrincipal">

          <div id="gameassets">
            <div id="newgame">
              <input type="button" value="New Game" 
              onClick={() => {
                const buttons = document.getElementsByTagName("button")
                const parent = document.getElementById('placar')
                
                
                for(let n = 0; n <  9; n++){
                  buttons[n].removeAttribute('disabled')
                  buttons[n].setAttribute('value', "")
                  buttons[n].innerText = ""
                }

                parent.lastChild.remove()

              }}/>
            </div>
            <div id="placar">
                <h2>Placar</h2>
                <h3 id="xplacar">X: </h3>
                <h3 id="oplacar">O: </h3>
                <div className="placarN" id="placarX">0</div>
                <div className="placarN" id="placarO">0</div>
            </div>
          </div>

          <div id="tictacGame">
              <GameButton name="a1"/>
              <GameButton name="a2"/>
              <GameButton name="a3"/>
              <GameButton name="b1"/>
              <GameButton name="b2"/>
              <GameButton name="b3"/>
              <GameButton name="c1"/>
              <GameButton name="c2"/>
              <GameButton name="c3"/>
          </div>
      </main>
    </div>
  );
}

export default App;

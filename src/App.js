import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
function App() {
  const [board, setboard] = useState(["","","","","","","","",""])
  const [turn, setturn] = useState("X")
  const changeturn =(index)=>{
    if(turn === "X")
    {
      if( board[index]==""){
        board[index]="X"
        setboard(board)
        setturn("O")
      }
      
      let wincom=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
      ]
      for(let i=0;i<wincom.length;i++){
        let com= wincom[i]
        let p1=com[0]
        let p2=com[1]
        let p3=com[2]
        if(board[p1] !="" && board[p2] !="" && board[p3] !="" && board[p1]==board[p2] && board[p3]==board[p2] && board[p1]==board[p3] ){
          alert(`player ${turn} Won!`)
          setboard(["","","","","","","","",""])
          break
        }
      }
      if(board[0] !="" && board[1] !="" && board[2] !="" && board[3] !="" && board[4] !="" && board[5] !="" && 
      board[6] !="" && board[7] !="" && board[8] !="" )
        {
          alert(`draw !`)
          setboard(["","","","","","","","",""])
        }
      

    }
    else{
      if( board[index]==""){
        board[index]="O"
        setboard(board)
        setturn("X")
      }
      let wincom=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
      ]
      for(let i=0;i<wincom.length;i++){
        let com= wincom[i]
        let p1=com[0]
        let p2=com[1]
        let p3=com[2]
        if(board[p1] !="" && board[p2] !="" && board[p3] !="" && board[p1]==board[p2] && board[p3]==board[p2] && board[p1]==board[p3] ){
          alert(`player ${turn} Won!`)
          setboard(["","","","","","","","",""])
          break
        }
      }
      if(board[0] !="" && board[1] !="" && board[2] !="" && board[3] !="" && board[4] !="" && board[5] !="" && 
      board[6] !="" && board[7] !="" && board[8] !="" )
        {
          alert(`draw !`)
          setboard(["","","","","","","","",""])
        }
    }
    
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className="board">
          {
            board.map((box,index) => {
              return (
                  <div onClick={()=>changeturn(index)} className="square">
                    <div className="symbol">
                    {box}</div>
                    </div>
              )
            })
          }
          
        </div>
      </header>
    </div>
  );
}

export default App;

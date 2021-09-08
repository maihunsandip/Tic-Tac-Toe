function startGame()
{
    for (var i = 1; i<= 9; i = i + 1)
    {
        clearBox(i);
    }

    document.turn = "X";
    if (Math.random()< 0.5)
    {
        document.turn = "O";
    }
    document.winner = null;
    setMessage(document.turn + " gets to start.");
    document.getElementById("s1").style.color = "#3FC80E ";
    document.getElementById("s2").style.color = "#3FC80E ";
    document.getElementById("s3").style.color = "#3FC80E ";
    document.getElementById("s4").style.color = "#3FC80E ";
    document.getElementById("s5").style.color = "#3FC80E ";
    document.getElementById("s6").style.color = "#3FC80E ";
    document.getElementById("s7").style.color = "#3FC80E ";
    document.getElementById("s8").style.color = "#3FC80E ";
    document.getElementById("s9").style.color = "#3FC80E ";
}

function setMessage(msg)
{
    document.getElementById("message").textContent = msg;
}

function nextMove(square)
{
    if (document.winner != null)
    {
        setMessage(document.winner + " Already Won the Game!" );
    }
    else if (square.textContent == "")
    {
        square.textContent = document.turn;
        switchTurn();
    }
    else
    {
        setMessage("That Square is Already Used.")
    }
}

function switchTurn()
{
    if(checkForWinner(document.turn))
    {
        setMessage("Congratulations " + document.turn + "! You Win!");
        document.winner = document.turn;
    }
    else
    if(CheckforTie())
    {
        setMessage("Its a TIE..!! Play again...!!!");
    }
    else if (document.turn == "X")
    {
        document.turn ="O";
        setMessage("It's " + document.turn + "'s turn!");
    }
    else
    {
        document.turn ="X";
        setMessage("It's " + document.turn + "'s turn!");
    }
}

function checkForWinner(move)
{
    var result = false;
    if(checkRow(1,2,3, move) || checkRow(4,5,6, move) || checkRow(7,8,9, move) ||checkRow(1,4,7, move) ||checkRow(2,5,8, move) ||checkRow(3,6,9, move) ||checkRow(1,5,9, move) ||checkRow(3,5,7, move))
       {
        result = true;
       }
        return result;

}

function checkRow(a,b,c, move)
{
    var result = false;
    if (getBox(a)== move && getBox(b)== move && getBox(c)== move)
    {
    	result = true;
    }
    	return result;
}

function getBox(number)
{
  return document.getElementById("s" + number).textContent;
}

function clearBox(number)
{
    document.getElementById("s" + number).textContent = "";
}

function CheckforTie()
{
    for(var i=1;i<10;i++)
	{

  		if(getBox(i)=="")
   		return false;
	}
return true;
}

let boxes=document.querySelectorAll(".box");
let msg=document.querySelector(".msg");
let newgame=document.querySelector(".new-game");
let newbtn=document.querySelector(".abcs");
let reset=document.querySelector(".reset");
let count=0;
let winner=false;

let turno=true;
let winpatterns=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],
                    [2,5,8],[2,4,6],[3,4,5],[6,7,8]];
                    const checkwinner = ()=>
                        {
                           for(let pattern of winpatterns)
                           {
                               let pos1val=boxes[pattern[0]].innerText;
                               let pos2val=boxes[pattern[1]].innerText;
                               let pos3val=boxes[pattern[2]].innerText;
                       
                               if(pos1val!="" && pos2val!="" && pos3val!="")
                               {
                                   if(pos1val===pos2val && pos2val===pos3val)
                                   {
                                       winner=true;
                                       console.log("Winner",pos1val,count,winner);
                                       showwinner(pos1val);
                                       
                                   }
                               }
                           }
                        }
boxes.forEach((box) =>
{
    box.addEventListener("click",() =>
        {
            console.log("box was clicked");
            if(turno)
            {
               
                box.classList.add("box2");
                box.innerText="X";
                turno=false;
              
            }
            else
            {
                box.classList.remove("box2");
               
                box.innerText="O";
                turno=true;
                
            }
            box.disabled=true;
            count++;
            checkwinner();
            let isWinner=checkwinner();
           

            if ( count===9 && !isWinner) {
               
                    tied();
              
            }
           
// boxes.forEach((box) => {
//   box.addEventListener("click", () => {
//     if (turno) {
//       //playerO
//       box.classList.add("box2");
//       box.innerText = "O";
//       turno = false;
//     } else {
//       //playerX
//       box.classList.remove("box2");
//       box.innerText = "X";
//       turno = true;
//     }
//     box.disabled = true;
//     count++;
//     checkwinner();

//     let isWinner = checkWinner();

//     if (count === 9 && !isWinner) {
//       tied();
//     }
//   });
// });
            
            
        });
});
const tied = () =>
    {
       msg.innerText=("OOPS! Match Tied");
       newgame.classList.remove("hide");
           disablebox();
    }
const disablebox= () =>
{
    for(let box of boxes)
    {
        box.disabled=true;
        reset.disabled=true;
    }
}
 const showwinner = (winner) =>
 {
    msg.innerText=(`Congratulation Winner is ${winner}`);
    newgame.classList.remove("hide");
    disablebox();
    
    
 }
 
 
 boxes.forEach((box) =>
    {
        newbtn.addEventListener("click",() =>
            {
                    box.innerText=""; 
                    newgame.classList.add("hide");
                    box.disabled=false;
                    reset.disabled=true;
                    count=0;
                    winner=false;
            });
 });

 boxes.forEach((box) =>
    {
        reset.addEventListener("click",() =>
            {
                    box.innerText=""; 
                    // newgame.classList.add("hide");
                    box.disabled=false;
                    count=0;
                    winner=false;
            });
 });

 

 
const dodger = document.getElementById("dodger")
document.addEventListener('keydown', function(event){
  const leftDist = parseInt(dodger.style.left.replace("px",""), 10)
  
  if( leftDist > 0 && ( event.key === "ArrowLeft" || event.key === "a" )){
    moveDodgerLeft()
  }else if ( leftDist < 360 && (event.key === "ArrowRight" || event.key === "d")){
    moveDodgerRight()
  }
})
function moveDodgerRight(event){
  const leftNumber = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumber, 10);
  dodger.style.left = `${left+1}px`
  }
function moveDodgerLeft(event){
  const leftNumber = dodger.style.left.replace("px", "")
  const left = parseInt(leftNumber, 10)
  dodger.style.left = `${left-1}px`
}



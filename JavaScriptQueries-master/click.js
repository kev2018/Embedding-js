//declare samecolor() here
function samecolor(){
    const doc = document.querySelectorAll("#samecolor div");
      for(let c =0;c<doc.length;c++){
        doc[c].style.backgroundColor = "#f00";
      }
}
//declare diffcolor() here
function diffcolor(){
  const doc = document.querySelectorAll("diffcolor div");
for(let k =0;k<doc.length;k++){
  if([k]%2 == 1){
      doc[k].style.backgroundColor = "#0f0";
    }
    else{
      doc[k].style.backgroundColor = "#00f";
    }
  }
}

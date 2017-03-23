
function samecolor(){
    const doc = document.querySelectorAll("#samecolor div");
      for(let c =0;c<doc.length;c++){
        doc[c].style.backgroundColor = "#f00";
        doc[c].style.opacity += 0.2*[c];
    }
}

function diffcolor(){
  const doc = document.querySelectorAll("#diffcolor div");
    for(let c =0;c<doc.length;c++){
    if([c]%2 == 1){
        doc[c].style.backgroundColor = "#00f";
        }
        else{
            doc[c].style.backgroundColor = "#0f0";
        }
    }
}

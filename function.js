//function grade(){
//var x =students.getElementById(ass1).placeholder;
//document.getElementById("grade").innerHTML=x;
//}

//function assign(input){
//if (input.value<0) input.value=0;
//if (input.value>100) input.value=100;
//}


//this function takes the user input & gets the averag
function grades(){
    //row 1
    var grade1=document.getElementById("ass1").value;
    var grade2=document.getElementById("ass2").value;
    var grade3=document.getElementById("ass3").value;
    var grade4=document.getElementById("ass4").value;
    var grade5=document.getElementById("ass5").value;
    
    var finalgrade=Math.round(+grade1 + +grade2 + +grade3 + +grade4 + +grade5)/5;
    
    //if grade is below 40 output in red
    if (finalgrade<=40){
    document.getElementById("fgrade").innerHTML = Math.round(finalgrade)+"%";
    document.getElementById("fgrade").style.color= "#ff0000";
    }
    else{
    document.getElementById("fgrade").innerHTML = Math.round(finalgrade)+"%";
    }
    //end of row 1
    
    
    //row 2
    var grade11=document.getElementById("ass11").value;
    var grade21=document.getElementById("ass21").value;
    var grade31=document.getElementById("ass31").value;
    var grade41=document.getElementById("ass41").value;
    var grade51=document.getElementById("ass51").value;
    
    var finalgrade1=Math.round(+grade11 + +grade21 + +grade31 + +grade41 + +grade51)/5;
    
    
    if (finalgrade1<=40){
    document.getElementById("fgrade1").innerHTML = Math.round(finalgrade1)+"%";
    document.getElementById("fgrade1").style.color= "#ff0000";
    }
    else{
    document.getElementById("fgrade1").innerHTML = Math.round(finalgrade1)+"%";
    }
    //end of row 2
    
    
    //row 3
    var grade12=document.getElementById("ass12").value;
    var grade22=document.getElementById("ass22").value;
    var grade32=document.getElementById("ass32").value;
    var grade42=document.getElementById("ass42").value;
    var grade52=document.getElementById("ass52").value;
    
    var finalgrade2=Math.round(+grade12 + +grade22 + +grade32 + +grade42 + +grade52)/5;
    
    
    if (finalgrade2<=40){
    document.getElementById("fgrade2").innerHTML = Math.round(finalgrade2)+"%";
    document.getElementById("fgrade2").style.color= "#ff0000";
    }
    else{
    document.getElementById("fgrade2").innerHTML = Math.round(finalgrade2)+"%";
    }
    //end of row 3
    
    
    //row 4
    var grade13=document.getElementById("ass13").value;
    var grade23=document.getElementById("ass23").value;
    var grade33=document.getElementById("ass33").value;
    var grade43=document.getElementById("ass43").value;
    var grade53=document.getElementById("ass53").value;
    
    var finalgrade3=Math.round(+grade13 + +grade23 + +grade33 + +grade43 + +grade53)/5;
    
    
    if (finalgrade3<=40){
    document.getElementById("fgrade3").innerHTML = Math.round(finalgrade3)+"%";
    document.getElementById("fgrade3").style.color= "#ff0000";
    }
    else{
    document.getElementById("fgrade3").innerHTML = Math.round(finalgrade3)+"%";
    }
    //end of row 4
    
    
    //row 5
    var grade14=document.getElementById("ass14").value;
    var grade24=document.getElementById("ass24").value;
    var grade34=document.getElementById("ass34").value;
    var grade44=document.getElementById("ass44").value;
    var grade54=document.getElementById("ass54").value;
    
    var finalgrade4=Math.round(+grade14 + +grade24 + +grade34 + +grade44 + +grade54)/5;
    
    
    if (finalgrade4<=40){
    document.getElementById("fgrade4").innerHTML = Math.round(finalgrade4)+"%";
    document.getElementById("fgrade4").style.color= "#ff0000";
    }
    else{
    document.getElementById("fgrade4").innerHTML = Math.round(finalgrade4)+"%";
    }
    //end of row 5
    
    
    //row 6
    var grade15=document.getElementById("ass15").value;
    var grade25=document.getElementById("ass25").value;
    var grade35=document.getElementById("ass35").value;
    var grade45=document.getElementById("ass45").value;
    var grade55=document.getElementById("ass55").value;
    
    var finalgrade5=Math.round(+grade15 + +grade25 + +grade35 + +grade45 + +grade55)/5;
    
    
    if (finalgrade5<=40){
    document.getElementById("fgrade5").innerHTML = Math.round(finalgrade5)+"%";
    document.getElementById("fgrade5").style.color= "#ff0000";
    }
    else{
    document.getElementById("fgrade5").innerHTML = Math.round(finalgrade5)+"%";
    }
    //end of row 6
    
    
    //row 7
    var grade16=document.getElementById("ass16").value;
    var grade26=document.getElementById("ass26").value;
    var grade36=document.getElementById("ass36").value;
    var grade46=document.getElementById("ass46").value;
    var grade56=document.getElementById("ass56").value;
    
    var finalgrade6=Math.round(+grade16 + +grade26 + +grade36 + +grade46 + +grade56)/5;
    
    
    
    if (finalgrade6<=40){
    document.getElementById("fgrade6").innerHTML = Math.round(finalgrade6)+"%";
    document.getElementById("fgrade6").style.color= "#ff0000";
    }
    else{
    document.getElementById("fgrade6").innerHTML = Math.round(finalgrade6)+"%";
    }
    //end of row 7
    
    //row 8
    var grade17=document.getElementById("ass17").value;
    var grade27=document.getElementById("ass27").value;
    var grade37=document.getElementById("ass37").value;
    var grade47=document.getElementById("ass47").value;
    var grade57=document.getElementById("ass57").value;
    
    var finalgrade7=Math.round(+grade17 + +grade27 + +grade37 + +grade47 + +grade57)/5;
    
    if (finalgrade7<=40){
    document.getElementById("fgrade7").innerHTML = Math.round(finalgrade7)+"%";
    document.getElementById("fgrade7").style.color= "#ff0000";
    }
    else{
    document.getElementById("fgrade7").innerHTML = Math.round(finalgrade7)+"%";
    }
    //end of row 8
    
    
    //row 9
    var grade18=document.getElementById("ass18").value;
    var grade28=document.getElementById("ass28").value;
    var grade38=document.getElementById("ass38").value;
    var grade48=document.getElementById("ass48").value;
    var grade58=document.getElementById("ass58").value;
    
    var finalgrade8=Math.round(+grade18 + +grade28 + +grade38 + +grade48 + +grade58)/5;
    
    
    if (finalgrade8<=40){
    document.getElementById("fgrade8").innerHTML = Math.round(finalgrade8)+"%";
    document.getElementById("fgrade8").style.color= "#ff0000";
    }
    else{
    document.getElementById("fgrade8").innerHTML = Math.round(finalgrade8)+"%";
    }
    //end of row 9
    
    
    //row 10
    var grade19=document.getElementById("ass19").value;
    var grade29=document.getElementById("ass29").value;
    var grade39=document.getElementById("ass39").value;
    var grade49=document.getElementById("ass49").value;
    var grade59=document.getElementById("ass59").value;
    
    var finalgrade9=Math.round(+grade19 + +grade29 + +grade39 + +grade49 + +grade59)/5;
    
    
    if (finalgrade9<=40){
    document.getElementById("fgrade9").innerHTML = Math.round(finalgrade9)+"%";
    document.getElementById("fgrade9").style.color= "#ff0000";
    }
    else{
    document.getElementById("fgrade9").innerHTML = Math.round(finalgrade9)+"%";
    }
    //end of row 9
    
    
    }
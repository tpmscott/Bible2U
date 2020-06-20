var Doctrine_No = '0';
var Doctrine_item = '';

function Holy_Spirit(){

   Doctrine_No = '1';

   var text_result = '<br><b> Receiving the Holy Spirit Upon Believing? </b><br>';

   text_result = text_result + '<b>1</b> Base their belief on ';

   //'<a href="" onClick="readchapter3(' + findb+ ', ' + findchap+ ',' + findsec+ ');return false;">' + temp_S + '</a> ' + oneline_S + '<br>';
   // 1 Co 12:3
   // readchapter(45,11,3,3)

   text_result = text_result + '<a href="" onClick="Doctrine_Mode_2();Hide_Search_Mode();Show_His_BM_Vers2(45,11,3,3);return false;"> 1 Co 12:3</a>. <br>';

   text_result = text_result + '<b>2</b> <b>Receive H.S.</b> vs <b>Moved by H.S.</b> <br>';

   //text_result = text_result + '<b>3</b> <b>Receive H.S.</b> must be moved by Him. <br>';

   text_result = text_result + '<b>3</b> <b>Moved by H.S.</b> not necessarily have Him. <br>';

   text_result = text_result + '<b>4</b> Samaritans <b>Example<br>&nbsp; Believing</b> & baptized <br>&nbsp;&nbsp;But <b>haven\'t received H.S.</b>';


   text_result = text_result + '<a href="" onClick="Doctrine_Mode_2();Hide_Search_Mode();Show_His_BM_Vers2(43,7,14,16);return false;">Act 8:14-16</a>. <br>';

   //text_result = text_result + '<a href="" onClick="Doctrine_Mode_2();Hide_Search_Mode();readchapter(43,7,14,16);return false;">Act 8:14-16</a>. <br>';

   text_result = text_result + '<b>5</b> H.S. can <b>be heard</b> in the form<br>&nbsp; of tongue speaking.';

   text_result = text_result + '<a href="" onClick="Doctrine_Mode_2();Hide_Search_Mode();Show_His_BM_Vers2(42,2,8,8);return false;">Jn 3:8</a>. <br>';

   text_result = text_result + ' <br>';

   text_result = text_result + 'Heavenly Father <b>give</b> the Holy Spirit<br> to those who <b>ask</b> Him.';

   text_result = text_result + '<a href="" onClick="Doctrine_Mode_2();Hide_Search_Mode();Show_His_BM_Vers2(41,10,13,13);return false;">Luk 11:13</a>. <br>';


   text_result = text_result + ' <br>';

   // ------


   text_result = text_result + '<b>1</b> Base their belief on ';

   //'<a href="" onClick="readchapter3(' + findb+ ', ' + findchap+ ',' + findsec+ ');return false;">' + temp_S + '</a> ' + oneline_S + '<br>';
   // 1 Co 12:3
   // readchapter(45,11,3,3)

   text_result = text_result + '<a href="" onClick="Doctrine_Mode_2();Hide_Search_Mode();Show_His_BM_Vers2(45,11,3,3);return false;"> 1 Co 12:3</a>. <br>';

   text_result = text_result + '<b>2</b> <b>Receive H.S.</b> vs <b>Moved by H.S.</b> <br>';

   //text_result = text_result + '<b>3</b> <b>Receive H.S.</b> must be moved by Him. <br>';

   text_result = text_result + '<b>3</b> <b>Moved by H.S.</b> not necessarily have Him. <br>';

   text_result = text_result + '<b>4</b> Samaritans <b>Example<br>&nbsp; Believing</b> & baptized <br>&nbsp;&nbsp;But <b>haven\'t received H.S.</b>';


   text_result = text_result + '<a href="" onClick="Doctrine_Mode_2();Hide_Search_Mode();Show_His_BM_Vers2(43,7,14,16);return false;">Act 8:14-16</a>. <br>';

   //text_result = text_result + '<a href="" onClick="Doctrine_Mode_2();Hide_Search_Mode();readchapter(43,7,14,16);return false;">Act 8:14-16</a>. <br>';

   text_result = text_result + '<b>5</b> H.S. can <b>be heard</b> in the form<br>&nbsp; of tongue speaking.';

   text_result = text_result + '<a href="" onClick="Doctrine_Mode_2();Hide_Search_Mode();Show_His_BM_Vers2(42,2,8,8);return false;">Jn 3:8</a>. <br>';

   text_result = text_result + ' <br>';

   text_result = text_result + 'Heavenly Father <b>give</b> the Holy Spirit<br> to those who <b>ask</b> Him.';

   text_result = text_result + '<a href="" onClick="Doctrine_Mode_2();Hide_Search_Mode();Show_His_BM_Vers2(41,10,13,13);return false;">Luk 11:13</a>. <br>';





   // distinction between being "moved by the Holy Spirit" and "receiving the Holy Spirit." <br>';

   document.getElementById("search_result").innerHTML = text_result;


}

function Baptism(){

   Doctrine_No = '2';

   var text_result = '';

   document.getElementById("search_result").innerHTML = text_result;


}

function Holy_Communion(){

   Doctrine_No = '3';

   var text_result = '';

   document.getElementById("search_result").innerHTML = text_result;


}

function Doctrine_Mode_2(){  // Not in use

   //document.getElementById("container1").scrollTop = 0;
   //document.getElementById("p1").scrollTop = 0;

   window.scrollTo(0, 0);

}


function Doctrine_Mode(){

   //document.getElementById("container5").scrollTop = 0;

   if(Doctrine_No == '1'){

      Doctrine_item = 'Holy Spirit';

   }else if(Doctrine_No == '2'){

      Doctrine_item = 'Baptism';

   }else if(Doctrine_No == '3'){

      Doctrine_item = 'Holy Communion';

   }

   document.getElementById("p1").innerHTML = '<center>'+ Doctrine_item +'</center>';

   document.getElementById("container5").style.visibility='visible'; // hide
   //document.getElementById("container4").style.visibility='hidden'; // hide
   //document.getElementById("container3").style.visibility='hidden'; // hide

   document.getElementById("container5").style.height = "92%";
   //document.getElementById("container4").style.height = "0%";
   //document.getElementById("container3").style.height = "0%";
   //document.getElementById("container1").style.height = "92%";
   //document.getElementById("container2").style.height = "92%";

   //document.getElementById("container1").style.width = "50%";
   //document.getElementById("container2").style.width = "50%";

}
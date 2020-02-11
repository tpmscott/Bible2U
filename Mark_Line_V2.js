// for mark line
// V2
// Use idb.min.js


var VersML = [] ;   // for verse Mark Lines
var VersML_B = [] ;
var VersML_C = [] ;
var VersML_V = [] ;
var VersML_T = [] ;

var VersML_tmp_B = [] ;
var VersML_tmp_C = [] ;
var VersML_tmp_V = [] ;
var VersML_tmp_T = [] ;



let db;


async function init_Bible4U_DB() {
  db = await idb.openDb('booksDb', 1, db => {
    db.createObjectStore('books', {keyPath: 'name'});   // mean : name is primary key
    //ObjectStore.createIndex('color_no', 'color_no', { unique: false });
    //ObjectStore.createIndex('book_no', 'book_no', { unique: false });
    //ObjectStore.createIndex('chap_no', 'chap_no', { unique: false });
    //ObjectStore.createIndex('vers_no', 'vers_no', { unique: false });
  });


Init_Continuing_Read();
}


    async function get2(arg1) {  // arg1:key
      return await idbKeyval.get(arg1);
    }

    async function get3(arg1) {  // arg1:key, for Mark_Line_Records (table)

       let tx = db.transaction('books');
       let MLRStore = tx.objectStore('books');

       let MLR_tmp = await MLRStore.get(arg1);  // get() using primary key as parameter

       if (MLR_tmp) {

          var MLR_V_Color = MLR_tmp.color_no;

       }
       else {

          var MLR_V_Color = '0'; // 0 means No Data, 1 means Red

       }

       return MLR_V_Color;  

       //return await idbKeyval.get(arg1);
    }
    
    async function set2(arg1,arg2) {  // arg1:key, arg2:value
      await idbKeyval.set(arg1, arg2);
    }

    async function set3(arg1,arg2,arg3,arg4,arg5) {  // arg1:key, arg2:value, for Mark_Line_Records (table)
    //async function set3(arg1,arg2) {  // arg1:key, arg2:value, for Mark_Line_Records (table)

       let name = arg1;
       let color_no = arg2;
       let book_no = arg3;
       let chap_no = arg4;
       let vers_no = arg5;

       let tx = db.transaction('books', 'readwrite');

       try {
         await tx.objectStore('books').add({name, color_no, book_no, chap_no, vers_no});
         //await tx.objectStore('Mark_Line_Records').add({ML_Verse, V_Color});

       } catch(err) {
         if (err.name == 'ConstraintError') {
           alert("Such Verse exists in DB already");
           //await addBook();
         } else {
           throw err;
         }
       }

       //await idbKeyval.set(arg1, arg2);
    }

    async function del2(arg1) {  // arg1:key
      await idbKeyval.delete(arg1);
    }

    async function del3(arg1) {  // arg1:key,  for Mark_Line_Records (table)

       let tx = db.transaction('books', 'readwrite');
       await tx.objectStore('books').delete(arg1);

       //await idbKeyval.delete(arg1);
    }

    //var Mark_Line_Key="";
    //var Mark_Line_Value="";

    async function Set_Mark_Line() {  // Set Mark Line 

       //var key = 'Gen 1:5';
       //var value = 'G';

       await set2(Mark_Line_Key,Mark_Line_Value);

       //log(`Key ${key} was saved with value ${value}.`);

    }

    async function Get_Mark_Line() {  // Get Mark Line 

       //var key = 'Gen 1:5';

       Mark_Line_Value = await get2(Mark_Line_Key);

       //log(`Key ${key} was read with value ${value}.`);

    }


async function check_n_set_mark_line(arg1,arg2,arg3,arg4) {


   // Reading from Indexeddb

   var Mark_Line_String = arg1 + '_' + arg2 + '_' + arg3;

   var Mark_Line_Value = await get3(Mark_Line_String);

   //var Mark_Line_Value = await get2(Mark_Line_String);

   // End of Reading from Indexeddb



   //if(arg1==1 && arg2==20 && arg3==15){  // Exo 21:15 , test
   if(Mark_Line_Value=='1'){  // Exo 21:15 , test

      document.getElementById(arg4).style.color = "red";

   } 
   else {

      document.getElementById(arg4).style.color = "black";

   }

}

async function Add_or_Remove_mark_line(arg1,arg2,arg3) {


   // Reading from Indexeddb

   var Mark_Line_String = arg1 + '_' + arg2 + '_' + arg3;

   var Mark_Line_Value = await get3(Mark_Line_String);

   //var Mark_Line_Value = await get2(Mark_Line_String);

   // End of Reading from Indexeddb



   if(Mark_Line_Value == '1') {  // Remove mark_line

      await del3(Mark_Line_String);

   }
   else {  // Add mark_line

      var Mark_Line_Value = '1' ; // red color


      // Write to Indexeddb


      //await set3(Mark_Line_String,Mark_Line_Value);   

      await set3(Mark_Line_String,Mark_Line_Value,arg1,arg2,arg3);   // add arg1,arg2,arg3

      //await set2(Mark_Line_String,Mark_Line_Value);   


      // End of Write to Indexeddb


   }


   keyFunction2('enter');efocus(); 


}


async function Show_All_ML_Only() {   // Show all items in ML *** Only ***
                                   // Do Not Write all items to files ***

   Show_MLs_F = 1; // 1 means Show, 0 means Hide

   var text1;

   text1 = "All MLs<br>";

   // Reading from Indexeddb

   let tx = db.transaction('books');
   let bookStore = tx.objectStore('books');

   let books_All = await bookStore.getAll();  // read all Mark Lines from objectStore 'books'

   var VersML_Len, j;
   VersML_Len = VersML.length;


   //if(VersML.length){  // Clear Arrays

   //   VersML.splice(0, VersML_Len);
   //   VersML_B.splice(0, VersML_Len);
   //   VersML_C.splice(0, VersML_Len);
   //   VersML_V.splice(0, VersML_Len);
   //   VersML_T.splice(0, VersML_Len);

   //}


   if(books_All) { // have data

      for (i = 0; i < books_All.length; i++) {

         // get data from Indexeddb
         var tmp_book_no = books_All[i].book_no;
         var tmp_chap_no = books_All[i].chap_no;
         var tmp_vers_no = books_All[i].vers_no;

         var arg1 = tmp_book_no;
         var arg2 = tmp_chap_no;
         var arg3 = tmp_vers_no;
         var arg4 = tmp_vers_no;

         //VersML_B.push(arg1); 
         //VersML_C.push(arg2); 
         //VersML_V.push(arg3); 
         //VersML_T.push(arg4); 

         var VH_Bname = BookAbbr4[arg1]; // arg1,  // BookAbbr3 改為 BookAbbr4 on 2018.08.22
         var VH_Chap = arg2 + 1;
         var VH_Vers = arg3;
         var VH_To_Vers = arg4;

         if(arg4>arg3)
            var VH = VH_Bname + ' ' + VH_Chap + ':' + VH_Vers + '~' + VH_To_Vers; 
         else
            var VH = VH_Bname + ' ' + VH_Chap + ':' + VH_Vers; 

         //VersML.push(VH);  // Put in new record


         //text1 += '<button onclick=";return false;">O</button> <a href="" id="7'+VersBM3_B[i]+VersBM3_C[i]+VersBM3_V[i]+VersBM3_T[i]+i+'0" onClick="Show_His_BM_Vers2(' + VersBM3_B[i] + ',' + VersBM3_C[i] + ',' + VersBM3_V[i] + ',' + VersBM3_T[i] + ');change_color(7'+VersBM3_B[i]+VersBM3_C[i]+VersBM3_V[i]+VersBM3_T[i]+i+'0);return false;">' + VersBM3[i] + '</a><br>';
         
         //text1 += '<button onclick=";return false;">O</button> <a href="" onClick="Show_His_BM_Vers2(' + VersML_B[i] + ',' + VersML_C[i] + ',' + VersML_V[i] + ',' + VersML_T[i] + ');return false;">' + VersML[i] + '</a><br>';

         //text1 += '<button onclick=";return false;">O</button> <a href="" onClick="Show_His_BM_Vers2(' + arg1 + ',' + arg2 + ',' + arg3 + ',' + arg4 + ');return false;">' + VH + '</a><br>';

         text1 += '<a href="" onClick="Show_His_BM_Vers2(' + arg1 + ',' + arg2 + ',' + arg3 + ',' + arg4 + ');return false;">' + VH + '</a><br>';


      }  // End of for (i = 0; i < books_All.length; i++) 



   }
   else {  // no data


   }



    document.getElementById("His_Container").style.width = "16%";
    document.getElementById("Bible_Container").style.width = "84%";

    //V_or_H_Mode();

    document.getElementById("Vers_MLs").innerHTML = text1;


}   // End of function Show_All_ML_Only()


async function Show_Book_ML_Only() {   // Show items belong to certain book in ML *** Only ***
                                   // Do Not Write all items to files ***

   Show_MLs_F = 1; // 1 means Show, 0 means Hide

   var text1;

   text1 = "Book MLs<br>";

   // Reading from Indexeddb

   let tx = db.transaction('books');
   let bookStore = tx.objectStore('books');

   let books_All = await bookStore.getAll();  // read all Mark Lines from objectStore 'books'

   var VersML_Len, j;
   VersML_Len = VersML.length;


   //if(VersML.length){  // Clear Arrays

   //   VersML.splice(0, VersML_Len);
   //   VersML_B.splice(0, VersML_Len);
   //   VersML_C.splice(0, VersML_Len);
   //   VersML_V.splice(0, VersML_Len);
   //   VersML_T.splice(0, VersML_Len);

   //}


   if(books_All) { // have data

      for (i = 0; i < books_All.length; i++) {

         // get data from Indexeddb
         var tmp_book_no = books_All[i].book_no;
         var tmp_chap_no = books_All[i].chap_no;
         var tmp_vers_no = books_All[i].vers_no;

         var arg1 = tmp_book_no;
         var arg2 = tmp_chap_no;
         var arg3 = tmp_vers_no;
         var arg4 = tmp_vers_no;

         if(arg1==nowbook) { // only show Mark Line belong to nowbook

            //VersML_B.push(arg1); 
            //VersML_C.push(arg2); 
            //VersML_V.push(arg3); 
            //VersML_T.push(arg4); 

            var VH_Bname = BookAbbr4[arg1]; // arg1,  // BookAbbr3 改為 BookAbbr4 on 2018.08.22
            var VH_Chap = arg2 + 1;
            var VH_Vers = arg3;
            var VH_To_Vers = arg4;

            if(arg4>arg3)
               var VH = VH_Bname + ' ' + VH_Chap + ':' + VH_Vers + '~' + VH_To_Vers; 
            else
               var VH = VH_Bname + ' ' + VH_Chap + ':' + VH_Vers; 

            //VersML.push(VH);  // Put in new record


            //text1 += '<button onclick=";return false;">O</button> <a href="" id="7'+VersBM3_B[i]+VersBM3_C[i]+VersBM3_V[i]+VersBM3_T[i]+i+'0" onClick="Show_His_BM_Vers2(' + VersBM3_B[i] + ',' + VersBM3_C[i] + ',' + VersBM3_V[i] + ',' + VersBM3_T[i] + ');change_color(7'+VersBM3_B[i]+VersBM3_C[i]+VersBM3_V[i]+VersBM3_T[i]+i+'0);return false;">' + VersBM3[i] + '</a><br>';

            //text1 += '<button onclick=";return false;">O</button> <a href="" onClick="Show_His_BM_Vers2(' + arg1 + ',' + arg2 + ',' + arg3 + ',' + arg4 + ');return false;">' + VH + '</a><br>';


            text1 += '<a href="" onClick="Show_His_BM_Vers2(' + arg1 + ',' + arg2 + ',' + arg3 + ',' + arg4 + ');return false;">' + VH + '</a><br>';
         

         }  // End of if(arg1==nowbook)

    
      }  // End of for (i = 0; i < books_All.length; i++) 


      var VersML_Len_B, j;
      VersML_Len_B = VersML_B.length;

      //for (i = 0; i < VersML_Len_B; i++) {

         //text1 += '<button onclick=";return false;">O</button> <a href="" onClick="Show_His_BM_Vers2(' + VersML_B[i] + ',' + VersML_C[i] + ',' + VersML_V[i] + ',' + VersML_T[i] + ');return false;">' + VersML[i] + '</a><br>';

      //} // End of for (i = 0; i < VersML_Len_B; i++)


   }
   else {  // no data


   }



    document.getElementById("His_Container").style.width = "16%";
    document.getElementById("Bible_Container").style.width = "84%";

    //V_or_H_Mode();

    document.getElementById("Vers_MLs").innerHTML = text1;


}   // End of function Show_Book_ML_Only()


async function Show_Chap_ML_Only() {   // Show items belong to certain chap in book in ML *** Only ***
                                   // Do Not Write all items to files ***

   Show_MLs_F = 1; // 1 means Show, 0 means Hide

   var text1;

   text1 = "Chap MLs<br>";

   // Reading from Indexeddb

   let tx = db.transaction('books');
   let bookStore = tx.objectStore('books');

   let books_All = await bookStore.getAll();  // read all Mark Lines from objectStore 'books'

   var VersML_Len, j;
   VersML_Len = VersML.length;


   if(books_All) { // have data

      for (i = 0; i < books_All.length; i++) {

         // get data from Indexeddb
         var tmp_book_no = books_All[i].book_no;
         var tmp_chap_no = books_All[i].chap_no;
         var tmp_vers_no = books_All[i].vers_no;

         var arg1 = tmp_book_no;
         var arg2 = tmp_chap_no;
         var arg3 = tmp_vers_no;
         var arg4 = tmp_vers_no;

         if(arg1==nowbook && arg2==nowchapter) { // only show Mark Line belong to nowbook

            var VH_Bname = BookAbbr4[arg1]; // arg1,  // BookAbbr3 改為 BookAbbr4 on 2018.08.22
            var VH_Chap = arg2 + 1;
            var VH_Vers = arg3;
            var VH_To_Vers = arg4;

            if(arg4>arg3)
               var VH = VH_Bname + ' ' + VH_Chap + ':' + VH_Vers + '~' + VH_To_Vers; 
            else
               var VH = VH_Bname + ' ' + VH_Chap + ':' + VH_Vers; 


            //text1 += '<button onclick=";return false;">O</button> <a href="" onClick="Show_His_BM_Vers2(' + arg1 + ',' + arg2 + ',' + arg3 + ',' + arg4 + ');return false;">' + VH + '</a><br>';
         

            text1 += '<a href="" onClick="Show_His_BM_Vers2(' + arg1 + ',' + arg2 + ',' + arg3 + ',' + arg4 + ');return false;">' + VH + '</a><br>';



         }  // End of if(arg1==nowbook && arg2==nowchapter)

    
      }  // End of for (i = 0; i < books_All.length; i++) 


      var VersML_Len_B, j;
      VersML_Len_B = VersML_B.length;


   }
   else {  // no data


   }



    document.getElementById("His_Container").style.width = "16%";
    document.getElementById("Bible_Container").style.width = "84%";

    //V_or_H_Mode();

    document.getElementById("Vers_MLs").innerHTML = text1;


}   // End of function Show_Chap_ML_Only()


function Hide_ML_Only() {   // Show all items in Bookmark5 *** Only ***
                                   // Do Not Write all items to files ***

    Show_MLs_F=0; // 1 means Show, 0 means Hide


   //if(Show_MLs_F==0 && Show_BookmarkNote_F==0 && Show_History_F==0 && Show_Bookmark_F==0 && Show_Bookmark1_F==0 && Show_Bookmark2_F==0 && Show_Bookmark3_F==0 && Show_Bookmark4_F==0 && Show_Bookmark5_F==0) { // 1 means Show, 0 means Hide

      document.getElementById("His_Container").style.width = "0%";
      document.getElementById("Bible_Container").style.width = "100%";

   //}

    document.getElementById("Vers_MLs").innerHTML = "";


}   // End of function Hide_ML_Only()

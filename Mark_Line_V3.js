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


var Book_Verse_Count_Value = 13;  // for Bible4U set 25, Bible2U set 13, Test set 5


let db;


async function init_Bible4U_DB() {

  //db = await idb.openDb('booksDb', 1, db => {
  //  db.createObjectStore('books', {keyPath: 'name'});   // mean : name is primary key
  //  ObjectStore.createIndex('color_no', 'color_no', { unique: false });
  //  ObjectStore.createIndex('book_no', 'book_no', { unique: false });
  //  ObjectStore.createIndex('chap_no', 'chap_no', { unique: false });
  //  ObjectStore.createIndex('vers_no', 'vers_no', { unique: false });
  //});

   // Declare Database

     db = new Dexie('booksDb');
     db.version(0.1).stores({
         books: 'name'
     });

   // End of Declare Database


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

    async function get4(arg1) {  // arg1:key, for Mark_Line_Records (table)

       let Verse = await db.books.get(arg1);


       if (Verse) {

          var MLR_V_Color = Verse.color_no;       

       }
       else {

          var MLR_V_Color = '0'; // 0 means No Data, 1 means Red

       }


       return MLR_V_Color;  

    }  // End of function get4(arg1)


    
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

    async function set4(arg1,arg2,arg3,arg4,arg5) {  // arg1:key, arg2:value, for Mark_Line_Records (table)

       let name = arg1;
       let color_no = arg2;
       let book_no = arg3;
       let chap_no = arg4;
       let vers_no = arg5;

       try {

         db.books.add({name,color_no, book_no, chap_no, vers_no});

       } catch(err) {
         if (err.name == 'ConstraintError') {
           alert("Such Verse exists in DB already");
         } else {
           throw err;
         }
       }

    }  // End of function set4(arg1,arg2,arg3,arg4,arg5)



    async function del2(arg1) {  // arg1:key
      await idbKeyval.delete(arg1);
    }

    async function del3(arg1) {  // arg1:key,  for Mark_Line_Records (table)

       let tx = db.transaction('books', 'readwrite');
       await tx.objectStore('books').delete(arg1);

       //await idbKeyval.delete(arg1);
    }

    async function del4(arg1) {  // arg1:key,  for Mark_Line_Records (table)

       db.books.delete(arg1);

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

   var Mark_Line_Value = await get4(Mark_Line_String);

   //var Mark_Line_Value = await get3(Mark_Line_String);

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

   var Mark_Line_Value = await get4(Mark_Line_String);

   //var Mark_Line_Value = await get3(Mark_Line_String);

   //var Mark_Line_Value = await get2(Mark_Line_String);

   // End of Reading from Indexeddb



   if(Mark_Line_Value == '1') {  // Remove mark_line

      await del4(Mark_Line_String);

   }
   else {  // Add mark_line

      var Mark_Line_Value = '1' ; // red color


      // Write to Indexeddb


      //await set3(Mark_Line_String,Mark_Line_Value);   

      await set4(Mark_Line_String,Mark_Line_Value,arg1,arg2,arg3);   // add arg1,arg2,arg3

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

   var Book_Verse_Count = 0;


   for (i = 0; i < 66; i++) {

      var Book_tmp = i + '_';
      Book_Verse_Count = await db.books.where('name').startsWithIgnoreCase(Book_tmp).count();

      if(Book_Verse_Count>0) {

         var First_Verse = await db.books.where('name').startsWithIgnoreCase(Book_tmp).first();

         var argN = First_Verse.name;
         var arg1 = First_Verse.book_no;
         var arg2 = First_Verse.chap_no;
         var arg3 = First_Verse.vers_no;
         var arg4 = First_Verse.vers_no;

         var VH_Bname = BookAbbr4[arg1];

         var Book_Count_Str = VH_Bname + ' (' + Book_Verse_Count + ')';


         text1 += '<button onclick=";return false;">O</button> <a href="" onClick="Show_His_BM_Vers2(' + arg1 + ',' + arg2 + ',' + arg3 + ',' + arg4 + ');Show_Book_ML_Only();return false;">' + Book_Count_Str + '</a><br>';


      }
      else {  // no data


      }


   }  // End of for (i = 0; i < 66; i++)


    document.getElementById("His_Container").style.width = "16%";
    document.getElementById("Bible_Container").style.width = "84%";

    //V_or_H_Mode();

    document.getElementById("Vers_MLs").innerHTML = text1;


}   // End of function Show_All_ML_Only()


async function Show_Book_ML_Only() {   // Show items belong to certain book in ML *** Only ***
                                   // Do Not Write all items to files ***


   var Book_Verse_Count = 0;

   var Book_tmp = nowbook + '_';

   Book_Verse_Count = await db.books.where('name').startsWithIgnoreCase(Book_tmp).count();


   let Verse = await db.books.where('name').startsWithIgnoreCase(Book_tmp).toArray();

   //let Verse = await db.books.where('name').startsWithIgnoreCase('39_').toArray();

   Show_MLs_F = 1; // 1 means Show, 0 means Hide


   if(Book_Verse_Count<Book_Verse_Count_Value ) { // for Bible4U set 25, Bible2U set 13, Test set 5
                             // Display all MLs

      if (Verse) {

         var text1;

         text1 = "Book MLs<br>";

         for (i = 0; i < Verse.length; i++) {

            var tmp_book_no = Verse[i].book_no;
            var tmp_chap_no = Verse[i].chap_no;
            var tmp_vers_no = Verse[i].vers_no;

            var arg1 = tmp_book_no;
            var arg2 = tmp_chap_no;
            var arg3 = tmp_vers_no;
            var arg4 = tmp_vers_no;

            var VH_Bname = BookAbbr4[arg1]; // arg1,  // BookAbbr3 改為 BookAbbr4 on 2018.08.22
            var VH_Chap = arg2 + 1;
            var VH_Vers = arg3;
            var VH_To_Vers = arg4;

            if(arg4>arg3)
               var VH = VH_Bname + ' ' + VH_Chap + ':' + VH_Vers + '~' + VH_To_Vers; 
            else
               var VH = VH_Bname + ' ' + VH_Chap + ':' + VH_Vers; 

            text1 += '<button onclick=";return false;">O</button> <a href="" onClick="Show_His_BM_Vers2(' + arg1 + ',' + arg2 + ',' + arg3 + ',' + arg4 + ');return false;">' + VH + '</a><br>';

         } // End of for (i = 0; i < Verse.length; i++)

      }
      else {

      }  // End of if (Verse)

   }  // End of Display all MLs ------------
   else if(Book_Verse_Count>Book_Verse_Count_Value - 1 ){  // Display count number of each chapter

      var text1;

      text1 = "Book MLs<br>";

      var Chap_Verse_Count = 0;

      var Book_Max_Chap_No = Qmaxchap_v2(nowbook);
      //var Book_Max_Chap_No = 28;

      //for (i = 0; i < Book_Max_Chap_No; i++) {
      for (i = 0; i < Book_Max_Chap_No; i++) {

         //var Book_tmp2 = nowbook + '_' + i;
         //var Book_tmp2 = nowbook + '_' + i;
         var Book_tmp2 = nowbook + '_' + i + '_';

         Chap_Verse_Count = await db.books.where('name').startsWithIgnoreCase(Book_tmp2).count();

         var First_Verse = await db.books.where('name').startsWithIgnoreCase(Book_tmp2).first();

         if(Chap_Verse_Count>0) {

            //var First_Verse = await db.books.where('name').startsWithIgnoreCase(Book_tmp2).first();

            var argN = First_Verse.name;
            var arg1 = First_Verse.book_no;
            var arg2 = First_Verse.chap_no;
            var arg3 = First_Verse.vers_no;
            var arg4 = First_Verse.vers_no;

            var VH_Bname = BookAbbr4[arg1];

            var VH_Chap = arg2 + 1

            var Chap_Count_Str = VH_Bname + ' ' + VH_Chap + ' (' + Chap_Verse_Count + ')';

            text1 += '<button onclick=";return false;">O</button> <a href="" onClick="Show_His_BM_Vers2(' + arg1 + ',' + arg2 + ',' + arg3 + ',' + arg4 + ');Show_Chap_ML_Only();return false;">' + Chap_Count_Str + '</a><br>';

         }  // End of if(Chap_Verse_Count>0)


      }  // End of for (i = 0; i < Book_Max_Chap_No; i++)


   }  // End of Display count number of each chapter ---



    document.getElementById("His_Container").style.width = "16%";
    document.getElementById("Bible_Container").style.width = "84%";

    //V_or_H_Mode();

    document.getElementById("Vers_MLs").innerHTML = text1;


}   // End of function Show_Book_ML_Only()


function Qmaxchap_v2(index) {  // find out maximum chapter of book , add on 15.04.2015
                            // index, start from 0 to 65, input book_int
                            // output maxchap
        var i;
	var cnum=new Array(50,40,27,36,34,24,21,4,31,24,22,25,29,36,10,13,10,42,150,31,12,8,66,52,5,48,12,
	14,3,9,1,4,7,3,3,3,2,14,4, 28,16,24,21,28,16,16,13,6,6,4,4,5,3,6,4,3,1,13,5,5,3,5,1,1,1,22);
	i=cnum[index];
        return i;
}


async function Show_Chap_ML_Only() {   // Show items belong to certain chap in book in ML *** Only ***
                                   // Do Not Write all items to files ***

   var Book_tmp = nowbook + '_' + nowchapter;

   // Reading from Indexeddb

   let Verse = await db.books.where('name').startsWithIgnoreCase(Book_tmp).toArray();

   //let Verse = await db.books.where('name').startsWithIgnoreCase('39_1').toArray();

   Show_MLs_F = 1; // 1 means Show, 0 means Hide

   var text1;

   text1 = "Chap MLs<br>";

   if (Verse) {

      for (i = 0; i < Verse.length; i++) {

         var tmp_book_no = Verse[i].book_no;
         var tmp_chap_no = Verse[i].chap_no;
         var tmp_vers_no = Verse[i].vers_no;

         var arg1 = tmp_book_no;
         var arg2 = tmp_chap_no;
         var arg3 = tmp_vers_no;
         var arg4 = tmp_vers_no;

         var VH_Bname = BookAbbr4[arg1]; // arg1,  // BookAbbr3 改為 BookAbbr4 on 2018.08.22
         var VH_Chap = arg2 + 1;
         var VH_Vers = arg3;
         var VH_To_Vers = arg4;

         if(arg4>arg3)
            var VH = VH_Bname + ' ' + VH_Chap + ':' + VH_Vers + '~' + VH_To_Vers; 
         else
            var VH = VH_Bname + ' ' + VH_Chap + ':' + VH_Vers; 

         text1 += '<button onclick=";return false;">O</button> <a href="" onClick="Show_His_BM_Vers2(' + arg1 + ',' + arg2 + ',' + arg3 + ',' + arg4 + ');return false;">' + VH + '</a><br>';

      } // End of for (i = 0; i < Verse.length; i++)

   }
   else {

   }  // End of if (Verse)


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

// for mark line


    async function get2(arg1) {  // arg1:key
      return await idbKeyval.get(arg1);
    }
    
    async function set2(arg1,arg2) {  // arg1:key, arg2:value
      await idbKeyval.set(arg1, arg2);
    }

    async function del2(arg1) {  // arg1:key
      await idbKeyval.delete(arg1);
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


   // Start Reading from LocalStorage


   //   //var Mark_Line_String = String(arg1) + "_" + String(arg2) + "_" + String(arg3);

   //   var Mark_Line_String = arg1 + '_' + arg2 + '_' + arg3;

   //   var Mark_Line_Value = localStorage.getItem(Mark_Line_String);

   //   End of Reading from LocalStorage


   // Reading from Indexeddb

   var Mark_Line_String = arg1 + '_' + arg2 + '_' + arg3;

   var Mark_Line_Value = await get2(Mark_Line_String);

   // End of Reading from Indexeddb



   //if(arg1==1 && arg2==20 && arg3==15){  // Exo 21:15 , test
   if(Mark_Line_Value=='R'){  // Exo 21:15 , test

      document.getElementById(arg4).style.color = "red";

   } 
   else {

      document.getElementById(arg4).style.color = "black";

   }

}

async function Add_or_Remove_mark_line(arg1,arg2,arg3) {


   // Start Reading from LocalStorage


   //   //var Mark_Line_String = String(arg1) + "_" + String(arg2) + "_" + String(arg3);

   //   var Mark_Line_String = arg1 + '_' + arg2 + '_' + arg3;

   //   var Mark_Line_Value = localStorage.getItem(Mark_Line_String);

   // End of Reading from LocalStorage



   // Reading from Indexeddb

   var Mark_Line_String = arg1 + '_' + arg2 + '_' + arg3;

   var Mark_Line_Value = await get2(Mark_Line_String);

   // End of Reading from Indexeddb



   if(Mark_Line_Value == 'R') {  // Remove mark_line

      //   //localStorage.removeItem("lastname");
      //   localStorage.removeItem(Mark_Line_String);  // if exist then Remove mark_line

      await del2(Mark_Line_String);

   }
   else {  // Add mark_line

      var Mark_Line_Value = 'R' ; // red color

      //   //localStorage.Mark_Line_String = Mark_Line_Value; 
   
      //   localStorage.setItem(Mark_Line_String,Mark_Line_Value); // Can't use above way

      // Write to Indexeddb


      await set2(Mark_Line_String,Mark_Line_Value);


      // End of Write to Indexeddb


   }



   // Add mark_line

   // Start Writing to Local Storage


   //var Mark_Line_String = arg1 + '_' + arg2 + '_' + arg3;

   //var Mark_Line_Value = 'R' ; // red color


   // //localStorage.Mark_Line_String = Mark_Line_Value; 
   
   // localStorage.setItem(Mark_Line_String,Mark_Line_Value); // Can't use above way


   // End of Writing to Local Storage

   keyFunction2('enter');efocus(); 

   // End of Add mark_line

   // --------------------------------------

   // Remove mark_line



   // End of Add mark_line


}
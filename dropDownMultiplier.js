   <script type="text/javascript">
   
       $(document).ready(function() {
           $('button[id^="moreFields"]').live('click', function() {
               var triggerButton = event.target;
               var addButtonId = $(triggerButton).attr('id');
               var numLessFields = addButtonId.slice(-1);
               var maxNumberToAdd = $(triggerButton).attr('name');
               var tempStorage = $(triggerButton).parent().html();
               var innerDivClass = $(tempStorage).attr('class');            
               var wrapperDivId = $('div.' + innerDivClass).parent().attr('id');
               var p = $('div.' + innerDivClass + ':last label').html().slice(-2);
               var i = parseInt(p, 10);
               if (i < maxNumberToAdd)
                   {
                   i += 1;
                   var x = $('div.' + innerDivClass + ':last').clone();                   
                   var y = $(x).find('label').html().length;
                   var z = $(x).find('label').html().slice(0, y-2);                   
                   $(x).find('label').replaceWith('<label>' + z + i + ':<\/label>').html();
                   
                   var zee = $(x).find('select').attr('name');
                   var zeeLong = zee.length;
                   var zeeAnswer = zee.slice(0, zeeLong-1);

                                     
                   $(x).find('select').attr('name', zeeAnswer + i).html();
                   $(x).appendTo($('div#' + wrapperDivId));
                   if (i === 2)
                       {
                       $('#' + wrapperDivId).append('<button id="lessFields' + numLessFields + '">Remove Field<\/button>');
                       }
                   }
               else
                   {
                   $('#' + addButtonId).die('click');
                   alert('You can only add ' + maxNumberToAdd + ' fields');
                   }
               return false;
           });
               
           $('button[id^="lessFields"]').live('click', function() {
               var triggerButton2 = event.target;
               var tempStorage2 = $(triggerButton2).parent().html();
               var innerDivClass2 = $(tempStorage2).attr('class');            
               var p = $('div.' + innerDivClass2 + ':last label').html().slice(-2);
               var i = parseInt(p, 10);
               if (i > 2)
                   {
                   $('div.' + innerDivClass2 + ':last').remove();
                   }
               if (i === 2)
                   {
                   $('div.' + innerDivClass2 + ':last').remove();
                   $(triggerButton2).remove();
                   }
               return false;
           });                 
       });
       
   </script>
   
   
/* example of html requirements for this script to work */

            <div id="geographicFocusWrapper">            
                <div class="geographicFocusInner">               
                    <label>Grant Geographic Focus 1:</label> 
                    <select name="grantGeographicFocus1" >
                        <option value=""></option>
                        <option value="Northeast">Northeast</option>
                        <option value="Midwest">Midwest</option>
                        <option value="South">South</option>
                        <option value="West">West</option>
                        <option value="International">International</option>
                        <option value="US">US</option>
                    </select>                    
                </div>               
                <button id="moreFields2" name="4">Add More Fields</button>
            </div>
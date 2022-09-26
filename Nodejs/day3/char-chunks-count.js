const fs = require('fs');

const readable = fs.createReadStream('C:\\Users\\bhakti.thombare\\Desktop\\Nodejs\\day3\\test.txt');
var chunk;
vowel_list="aeiouAEIOU";
vowel_list=(vowel_list).split('');
vowel_count=0;
consonent_count=0;



readable.on('readable', function() {
  chunk = " "
    while(chunk != null){
        chunk=readable.read(1);
        var p=`${chunk}`;   
        if(vowel_list.indexOf(p)!=-1)
        {      
          vowel_count++;
        } 
        else{
         
          consonent_count++;
      }

}
});

readable.on('end',function(){
  console.log("Vowel Count : ",vowel_count);
  console.log("Consonent Count : ",consonent_count);
  var percentage=(vowel_count/(consonent_count+vowel_count))*100;
  console.log(`Percentage of Vowel : %i%`,percentage);
  percentage=(consonent_count/(consonent_count+vowel_count))*100;
  console.log(`Percentage of Consonents : %i%`,percentage);

})
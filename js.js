let motto = 'crazyfredrickboughtmanyveryexquisiteopaljewels';
let string = [];
let ammount_of_lost_letters = 5;
let coordinates_of_lost_letters = [45380 ,540630, 655756 ,398388, 636172 ,829477];
console.log(Math.max(coordinates_of_lost_letters))
let GetString=(motto,ammount_of_lost_letters,coordinates_of_lost_letters)=>{
  let motto_array=[];
  let String='';
  for(let i=0;i<motto.length;i++){
    motto_array.push(motto[i]);
  }
  let project_count=1;
  while(String.length<=Math.max.apply(null,coordinates_of_lost_letters)){
    let newString = '';
    for(let i=0;i<project_count;i++){
      newString =newString + motto_array[project_count-1];
    }
    String=String+newString+String;
    project_count++;
  }
  return String;
}
let GetLostLetters=(String,coordinates_of_lost_letters)=>{
  let String_array = [];
  let String_of_lost_letters='';
  for(let i=0;i<String.length;i++){
    String_array.push(String[i]);
  }
  for(let i=0;i<coordinates_of_lost_letters.length;i++){
    for(let ii=0;ii<String_array.length;ii++){
      if(coordinates_of_lost_letters[i]-1 ===ii){
        String_of_lost_letters = String_of_lost_letters +String_array[ii];
        break;
      }
    }  
  }
  return String_of_lost_letters;
}
let SString=GetString(motto,ammount_of_lost_letters,coordinates_of_lost_letters);
let letters=GetLostLetters(SString,coordinates_of_lost_letters);
console.log(letters)
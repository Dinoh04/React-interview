function StringCutter(string){
    let suite = '...';
   if(string.length <= 30){
    return string;
   }
   else{
    let stringSlice = string.slice(0,30);
    return stringSlice += suite ;
   }
}

console.log(StringCutter("ohseofhoeifhoshf"));
function stringSearch(longStr, str) {
   let count = 0;
   for (let i=0; i<longStr.length; i++) {
       for(let j=0; j<str.length; j++) {
           if(str[j]!==longStr[i+j]) break;
           if(j === str.length -1) count+=1;
       }
   }
    return count;
}

console.log(stringSearch('lolalai loled lola', 'lol'));//3
stringSearch("lololrie loledlol lol eflollollra", "lol"); //7
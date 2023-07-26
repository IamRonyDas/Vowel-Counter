const btn=document.querySelector(".btn");
const result=document.querySelector(".result");

btn.addEventListener("click",vowel);

function vowel(){
    const word=document.querySelector(".input-text").value;
    let len=word.length;
    let temp=word.toLowerCase();
    let cnt=0;
    for(let i=0;i<len;i++)
    {
        if(temp[i]=='a'||temp[i]=='e'||temp[i]=='i'||temp[i]=='o'||temp[i]=='u')
        {
            cnt++;
        }
    }
        result.innerHTML=`${word} has ${cnt} vowels`;

}
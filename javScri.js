var quote =document.getElementById("quotes");
    var author=document.getElementById("authors");
    const url_1="https://api.quotable.io/random";

    async function getquote(url){
        const response=await fetch(url);
        var data= await response.json();
        console.log(data);
        quote.innerHTML=data.content;
        author.innerHTML=data.author;
    }
 getquote(url_1);
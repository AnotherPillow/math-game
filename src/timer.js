const timer = () => {
    var interval = setInterval(()=>{
        console.log("EUABDOBFO")
        var timer_str = document.getElementById("timer").innerHTML;
        console.log(timer_str)
        var timer_int = parseInt(timer_str)
        console.log(timer_int)
        var new_int = (timer_int - 1).toString();
        console.log(new_int)
        document.getElementById('timer').innerHTML=new_int;
        if (parseInt(new_int) == 0) {
            var elems = document.getElementsByClassName("b_img");
            for (e in elems) {
                elems[e].onclick="";
            }
            var popup = document.getElementById("popup")
            popup.classList.remove("hide")
            console.log(rightCount,wrongCount)
            popup.innerHTML = popup.innerHTML.replace('{{rightCount}}', rightCount).replace('{{totalCount}}', rightCount + wrongCount)
            clearInterval(interval)
        }
    },1000)
}
function change(){
    var number=0;
    function open(){
        number++;
        if(number > 3){
            window.location.href='welcome.html';
        }
        var img = document.getElementById("img");
        img.src = "image/"+number+".PNG";
    }
    setInterval(open,500);
}
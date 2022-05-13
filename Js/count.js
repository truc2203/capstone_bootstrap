function count()
{
    var from = 10
    var to = 20
    var random = Math.floor(Math.random() * 100) + 1;
    var step = to > from ? random : -1
    var interval = 50
    if(from == to)
    {
        document.querySelector("#countOutput").textContent = from
        return
    }

    var counter = setInterval(function(){
        from += step
        document.querySelector("#countOutput").textContent = from

        if(from == to)
        {
            clearInterval(counter)
        }
    },interval)

}
count()
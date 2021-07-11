document.getElementById('button-increase').addEventListener('click', function myFunction(){
    var value = parseInt(document.getElementById('value').innerHTML)
    if (value >= 50){
        var newValue = value
        document.getElementById('value').innerHTML = newValue
    }else{
        var newValue = value + 1
        document.getElementById('value').innerHTML = newValue
    }
})
document.getElementById('button-decrease').addEventListener('click', function myFunction(){
    var value = parseInt(document.getElementById('value').innerHTML)
    if(value <=0){
        var newValue = value
        document.getElementById('value').innerHTML = newValue
    }else{
        var newValue = value - 1
        document.getElementById('value').innerHTML = newValue
    }
})
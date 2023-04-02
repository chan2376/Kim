var lock = 0
document.getElementById('tick').onclick =
    let pas =  prompt("비밀번호");
    if (pas == 4885){
        alert("해제됨");
        lock == 1;
    }
    else{
        alert("틀림");
    }

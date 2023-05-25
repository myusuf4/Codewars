let n=15;


    if(n % 5 === 0 && n % 3 === 0 ){
        console.log(`${3} va ${5} ga bo'linadi`);
    }
    else if(n % 5 === 0){
        console.log(`${5} ga bo'linadi`);
    }
    else if(n % 3 === 0){
        console.log(`${3} ga bo'linadi`);
    }
    else{
        console.log(`${3} va ${5} ga bo'linmaydi`);
    }
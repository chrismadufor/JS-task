// CONVERTING FAHRENHEIT TO CELSIUS

function convertFahrToCelsius(deg){
    const result = (deg - 32) * 5/9;
    var str = JSON.stringify(deg);

    if(Number(result) && typeof deg !== "boolean" && deg !== "" && typeof deg !== "object" && (!isNaN(deg))){
        console.log (Number(result.toFixed(4)))
        return Number(result.toFixed(4))
    }else{
        if (Array.isArray(deg)){
            console.log( `${str} is not a valid number but a/an array`)
            return( `${str} is not a valid number but a/an array`)
        }
        if(isNaN(deg)){
            console.log( `NaN is not a valid number`)
            return( `NaN is not a valid number`)
        }else{
            console.log( `${str} is not a valid number but a/an ${typeof deg}`)
            return( `${str} is not a valid number but a/an ${typeof deg}`)
        }
    }
}

// CHECK YU-GI-OH

function checkyugioh(val) {
    const array = [];
    const newarray = []; 
    if (Number(val) && typeof val !== "boolean" && typeof val !== "object" && (!isNaN(val))){
        for (i = 1; i <= val; i++) {
            array.push(i);
        }
        for(i in array){
            if(array[i] % 2 === 0 || array[i] % 3 === 0 || array[i] % 5 === 0){
                var answer = "";
                if(array[i] % 2 === 0){
                    answer += ("yu")
                }
                if(array[i] % 3 === 0){
                    if(answer != ""){
                        answer += ("-gi")
                    }else{
                        answer += ("gi")
                    }                   
                }
                if(array[i] % 5 === 0){
                    if(answer != ""){
                        answer += ("-oh")
                    }else{
                        answer += ("oh")
                    }
                }
                newarray.push(answer);
            }else{
                newarray.push(array[i]);
            }
        }
    }else{
        console.log(`Invalid parameter: ` + `${JSON.stringify(val)}`);
        return(`Invalid parameter: ` + `${JSON.stringify(val)}`);
    };
    console.log(newarray);
    return newarray;
};



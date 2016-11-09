$(function() {
    var num = $("#n1");
    var acc = 0;
    var op = "";
/*    function acumular() {
        acc = num.val();
        console.log(num.val()+" ha pasado al acumulador");
        return;
    }*/
    $("#bclear").on("click",
           function() { num.val("");}
          );
    
    $("#bpow2").on("click",
                   function() {
        num.val(num.val()*num.val());}
                  );
    $("#bneg").on("click",
                    function() {
                   num.val(-num.val());}
                   );
    $("#bsqrt").on("click",
                  function() {
        num.val(Math.sqrt(num.val()));
    });
    $("#binv").on("click",
                function() {
        num.val(1/num.val());
    });
    $("#binteger").on("click",
                     function() {
        if(num.val()>=0) {
            num.val(Math.floor(num.val()));
        }
        else {
            num.val(Math.ceil(num.val()));
        }
    });
    $("#b2pow").on("click",
                  function() {
        num.val(Math.pow(2, num.val()));
    });
    $("#bfact").on("click",
                 function() {
        var n = num.val();
/* esto también funciona pero escribe el valor en cada iteración, lo que me imagino que será malísimo para el rendimiento

        while (n>1) {
            num.val(--n*num.val());
        }
*/
        var res = n;
        while (n>1) {
            res *= --n;
        }
        num.val(res);
    });
    
    $("#bpow").on("click",
                 function acumular() {
        acc = parseInt(num.val());
        num.val(+acc + +num.val());
    });
    $("#bplus").on("click",
               function() {
        acc = num.val();
        console.log(acc);
        op = "+";
    });
    $("#bminus").on("click",
               function() {
        acc = num.val();
        console.log(acc);
        op = "-";
    });
    $("#bmultiply").on("click",
               function() {
        acc = num.val();
        console.log(acc);
        op = "*";
        num.val("");
    });
    $("#bdivide").on("click",
               function() {
        acc = num.val();
        console.log(acc);
        op = "/";
    });
    $("#bexec").on("click",
                  function() {
        console.log(acc);
        switch (op) {
            case "+":
                num.val(+acc + +num.val());
                break;
            case "-":
                num.val(+acc - +num.val());
                break;
            case "*":
                num.val(+acc * +num.val());
                break;
            case "/":
                num.val(+acc / +num.val());
                break;
            case "^":
                break;
            default:
                break;
        }
    });
    $("#bsum").on("click",
                  function() {
        var lista = num.val().split(",");
        for (var i=0, acc=0; i<lista.length; i++)
            acc += +lista[i];
        num.val(acc);
    });
    $("#bprod").on("click",
                  function() {
        var lista = num.val().split(",");
        for (var i=0, acc=1; i<lista.length; i++)
            acc *= +lista[i];
        num.val(acc);
    });
    $(".bnumber").on("click",
              function () {num.val(num.val()+this.innerText);
                          console.log(this.innerText);}
              );
});
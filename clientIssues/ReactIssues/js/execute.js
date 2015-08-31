
var execute=function (f,n){
    var a=[];
    for (var i=0; i<n+5; i++) {
        if (i >= 5) {
            if (performance.now) {
                var t0 = performance.now();
                f();
                var t1 = performance.now();
                a.push(t1 - t0);
            } else {
                var t0 = Date.now();
                f();
                var t1 = Date.now();
                a.push(t1 - t0);


            }


        }
    }

    return a;

};

    var mean=function (a) {

        return jStat(a).mean();

    };





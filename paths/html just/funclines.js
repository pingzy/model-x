function line(dts , i ){
    const y2 = dts[i+1].y ;
    const y1 = dts[i].y ;
    const x2 = dts[i+1].x ;
    const x1 = dts[i].x ;
    
    const slope = (y2 - y1) / (x2 - x1) ;
    const c = y1 - slope*x1 

    const th = Math.atan(slope) ;

    function parametric () {
        const x = (r* Math.cos(th)) + x1 ;
        const y = (r* Math.sin(th)) + y1 ;

        return x , y ;
    }
}
// is there anything left to do

/*

perpendicular , height , base 
left curve -


*/

function fullSet(data){
    // first and last condition cjeck
    let sp = [] ;
    for (let i = 0; i < data.length; i++) {
        // slope arr and (n-1) for n consecutive points        
        if ( i = 0){continue ;}
        // based previous point buffer calculation
        const y1 = data[i-1].y ;
        const x1 = data[i-1].x ;
        const y2 = data[i].y ;
        const x2 = data[i].x ;
        // Check for x coord not y in slope +ve or -ve calculations
        if ( (x2 -x1 ) > 0){
            sp.push( (y2-y1) / (x2-x1) ) 
        }
        sp.push()
    }
}

function setter(data){
    let ony =[] , twi =[] ,x1 , x2 , x, y , c , m , theta;
    const p = 35 ;
    for (let i = 0; i < data.length-1; i++) {
        x1 = data[i].x , x2 = data[i+1].x ;
        y1 = data[i].y , y2 = data[i+1].y ;
            // check for left 
            m =(y2-y1)/(x2-x1) ;
            // y = mx + c ;  c = y -mx ;
            c = y1 - (m * x1) ; 
            theta = Math.atan(m)*180/Math.PI ;
            
            
    }
    
}
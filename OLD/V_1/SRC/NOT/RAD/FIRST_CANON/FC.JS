
    //: 3.2.2. Use of Huffman coding in the "deflate" format
    //: https://www.w3.org/Graphics/PNG/RFC-1951

    function pad(num, size) {
        var s = num+"";
        while (s.length < size) s = "0" + s;
        return s;
    };;

    const MAX_BITS=( 15 );
    var code = 0;
    var bl_count =[];
    var next_code=[];
    bl_count[ 0] = 0 ; //:Always zero

    bl_count[ 1] = 1;
    bl_count[ 2] = 1;
    bl_count[ 3] = 1;
    bl_count[ 4] = 1;
    bl_count[ 5] = 1;
    bl_count[ 6] = 1;
    bl_count[ 7] = 2;
    bl_count[ 8] = 1;
    bl_count[ 9] = 0;
    bl_count[10] = 0;
    bl_count[11] = 0;
    bl_count[12] = 0;
    bl_count[13] = 0;
    bl_count[14] = 0;
    bl_count[15] = 0;

    //:This doesn't find all codes, just the first (smallest)
    //:code of given code lengths.
    for (let bits = 1; bits <= MAX_BITS; bits++) {

        code = (code + bl_count[bits-1]) << 1;

        next_code[ bits ] = code;
    };;

    for (let bits = 1; bits <= MAX_BITS; bits++){

        console.log( ""
        +  "[bits]:" + pad(bits - 1 , 2 ) 
        +  "[code]:" + next_code[ bits ].toString( 2 ) 
        );;
    };;


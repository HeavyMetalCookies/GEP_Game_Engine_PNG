
//:TODO: png_poi --> png_bin

//:C99_:=====================================================://
//:                                                          ://
//: SEE: GEP_DATA.JS for C99 polyfills.                      ://
//: They come BEFORE data because they are standins          ://
//: for things expressed by syntax, not functions.           ://
//:                                                          ://
//: If util function, SEE[ CFN_ ]                            ://
//:                                                          ://
//:LOG_:Logging_Functions:===================================://

    function
    GEP_Log(
        msg_log 
    )
    { "use strict"

        console.log("[GEP_Log]:(" + msg_log + ")" );

    };;

//:CFN_:C99_Utility_Functions:===============================://

    //:NOT part of "C99_" namespace anymore.
    //:Get length of string NOT including null terminator.
    const GEP_CFN_Str_Len=function( hex_dum ){ "use strict"
    
        if( typeof( hex_dum ) != "string" ){
            throw("[GEP_CFN_Str_Len:Bad_Input]");
        };;
    
        let str_len=( hex_dum.length );
        return( str_len );
    };;


//:ASC_:Ascii_Related_Functions:(BELOW):=====================://
            
    //: [1] : asc_ISA_hec: Is character valid hex character? ://
    //: [2] : hec_ISA_asc: Inverse Of GEP_asc_ISA_hec        ://
    //: [3] : hec_CTO_heb: EXAMPLE: "FF" --> 255             ://
    //: [4] : heb_CTO_hec: EXAMPLE: 255  --> "FF"            ://
    //: [5] : asc_ISA_emp: Is ascii a whitespace character?  ://
    //: [6] : asc_ISA_bad: Is acii invalid as hex char?      ://
    //: [7] : GEP_ASC_TRICKY_TO_TRANSPILE_asc_CTO_int        ://
    //: [8] : GEP_ASC_TRICKY_TO_TRANSPILE_int_CTO_asc        ://
    
    //:------------------------------------------------------://
    function
    GEP_ASC_asc_ISA_hec(
        chr_asc  //: C99[ char* chr_asc ]
    )
    { "use strict"

        if( GEP_MAC_DEB > 0 ){  //://////////////////////////://
        if( GEP_MAC_JAS > 0 ){  //://////////////////////////://

            let typ=( typeof( chr_asc ) );
            
            if( typ=="string"){
                //:GOOD
            }else
            if( typ=="number"){
                throw("[GEP_ERR:EXP_STR:GOT_INT]");
            }else{
                throw("[GEP_ERR:EXP_STR]");
            };;
    
        };;};; //:///////////////////////////////////////////://

        var int_asc = GEP_ASC_TRICKY_TO_TRANSPILE_asc_CTO_int( 
            chr_asc 
        );;

        var isa_hec =( 0 - 1 );

        if( int_asc >= 48 && int_asc <= 57 ){ //:[ 0 - 9 ]
            isa_hec=( int_asc - 48 );
        }else
        if( int_asc >= 65 && int_asc <= 70 ){ //:[ A - F ]
            isa_hec=( int_asc - 65 )+10;
        }else
        if( int_asc >= 97 && int_asc <=102 ){ //:[ a - f ]
            isa_hec=( int_asc - 97 )+10;
        };;

        return( isa_hec /** int_asc **/ );
    };;
    //: - - - - - - - - - - - - ---- - - - - - - - - - - - - ://
    function
    GEP_ASC_hec_ISA_asc(
        int_hec //:Integer_Hexadecimal_Code, 0-to-15
    )
    { "use strict"

        if(!(int_hec >= 0 && int_hec < 16) ){
            throw("[GEP_ERR:OOB:hec_ISA_asc]");
        };;

        //:#OFFSET_INPUT_INTO_ASCII_RANGE#://
        let int_asc=( 0 );
        let chr_asc ="";

        if( int_hec >=  0 && int_hec <= 9 ){

            int_asc=( (int_hec -  0) + 48 );
            chr_asc=( GEP_ASC_TRICKY_TO_TRANSPILE_int_CTO_asc( 
            int_asc ) );;

        }else
        if( int_hec >= 10 && int_hec < 16 ){

            int_asc=( (int_hec - 10) + 65 );
            chr_asc=( GEP_ASC_TRICKY_TO_TRANSPILE_int_CTO_asc( 
            int_asc ) );;

        }else{
            chr_asc=(""); //:Empty_String_Means_False
        };;
         
        return( chr_asc /** isa_asc **/ );
    };;
    //:------------------------------------------------------://
    function
    GEP_ASC_hec_CTO_heb(
        hec //: C99[ char hec[ 2 ] ]
    )
    { "use strict"

        if( GEP_MAC_JAS > 0 ){
            if( hec.length != 2 ){ throw("[EXP:2_CHARS]");};

            //:#HEC_ROUGH_TYPE_CHECK#://
            if( typeof(hec) != "string"
            &&  (!Array.isArray( hec ))
            ){
                throw("[hec_bad_type]");
            };;
        };;

        let big=( GEP_ASC_asc_ISA_hec( hec[ 0 ] ) );
        let lit=( GEP_ASC_asc_ISA_hec( hec[ 1 ] ) );
        let heb=(  ( big * 16 )+( lit *  1 )  );

        if( /** #if **/ GEP_MAC_DEB > 0 ){ //:///////////////://

            if(!( heb >= 0x00 && heb <= 0xFF ) ){
                throw("[GEP_ERR:Not_Valid_Byte_Value]");
            };;

        };; //:[ #endif ]////////////////////////////////////://
            
        return( heb );
    };;
    //: - - - - - - - - - - - - ---- - - - - - - - - - - - - ://
    function
    GEP_ASC_heb_CTO_hec(
          val_heb //:HexByte:PassedBy:VALUE
    ,     poi_hec //:HexChar:PassedBy:POINTER (AKA:car_bu2)
    )
    { "use strict"

        if(!( val_heb >= 0x00 && val_heb <= 0xFF ) ){
            throw("[INPUT_VALUE_OUTSIDE_OF_BYTE_RANGE]");
        };;

        let lit=(  val_heb      % 16 ); //: 1's place.
        let big=( (val_heb-lit) / 16 ); //:16's place.

        //:Inverse_Of[ GEP_ASC_TRICKY_TO_TRANSPILE_asc_CTO_int ]
        poi_hec[ 0 ]=GEP_ASC_hec_ISA_asc( big );
        poi_hec[ 1 ]=GEP_ASC_hec_ISA_asc( lit );

    };;
    //:------------------------------------------------------://
    function
    GEP_ASC_asc_ISA_emp( 
        cur_chr 
    )
    {"use strict"

        //:ABOUT_FUNCTION:
        //:Is[ asc / ascii ]an[ emp / empty ]character?

        let isa_emp =( 0 );

        if( " " == cur_chr ){
            isa_emp =( 1 );
        }else
        if( "\t"== cur_chr ){
            isa_emp =( 1 );
        }else
        if( "\n"== cur_chr ){
            isa_emp =( 1 );
        };;

        return( isa_emp );
    };;
    //: - - - - - - - - - - - - ---- - - - - - - - - - - - - ://
    function
    GEP_ASC_asc_ISA_bad( 
        cur_chr 
    )
    {"use strict"

        //:ABOUT_THIS_FUNCTION:
        //:Explicitly Disallowed in hex dump strings:
    
        //:Not the most efficient way to do this,
        //:but straight forward and easy to 
        //:comprehend.

        let isa_bad=( 0 );

        //:G07: "G is 7 [th]  letter of alphabet.
        //:Z26: "Z is 26[th] letter of alphabet.
        if( "G" == cur_chr ){ isa_bad=(  7 ); }else
        if( "H" == cur_chr ){ isa_bad=(  8 ); }else
        if( "I" == cur_chr ){ isa_bad=(  9 ); }else
        if( "J" == cur_chr ){ isa_bad=( 10 ); }else
        if( "K" == cur_chr ){ isa_bad=( 11 ); }else
        if( "L" == cur_chr ){ isa_bad=( 12 ); }else
        if( "M" == cur_chr ){ isa_bad=( 13 ); }else
        if( "N" == cur_chr ){ isa_bad=( 14 ); }else
        if( "O" == cur_chr ){ isa_bad=( 15 ); }else
        if( "P" == cur_chr ){ isa_bad=( 16 ); }else
        if( "Q" == cur_chr ){ isa_bad=( 17 ); }else
        if( "R" == cur_chr ){ isa_bad=( 18 ); }else
        if( "S" == cur_chr ){ isa_bad=( 19 ); }else
        if( "T" == cur_chr ){ isa_bad=( 20 ); }else
        if( "U" == cur_chr ){ isa_bad=( 21 ); }else
        if( "V" == cur_chr ){ isa_bad=( 22 ); }else
        if( "W" == cur_chr ){ isa_bad=( 23 ); }else
        if( "X" == cur_chr ){ isa_bad=( 24 ); }else
        if( "Y" == cur_chr ){ isa_bad=( 25 ); }else
        if( "Z" == cur_chr ){ isa_bad=( 26 ); }else{};

        //:G07: "G is 7 [th]  letter of alphabet.
        //:Z26: "Z is 26[th] letter of alphabet.
        if( "g" == cur_chr ){ isa_bad=(  7 ); }else
        if( "h" == cur_chr ){ isa_bad=(  8 ); }else
        if( "i" == cur_chr ){ isa_bad=(  9 ); }else
        if( "j" == cur_chr ){ isa_bad=( 10 ); }else
        if( "k" == cur_chr ){ isa_bad=( 11 ); }else
        if( "l" == cur_chr ){ isa_bad=( 12 ); }else
        if( "m" == cur_chr ){ isa_bad=( 13 ); }else
        if( "n" == cur_chr ){ isa_bad=( 14 ); }else
        if( "o" == cur_chr ){ isa_bad=( 15 ); }else
        if( "p" == cur_chr ){ isa_bad=( 16 ); }else
        if( "q" == cur_chr ){ isa_bad=( 17 ); }else
        if( "r" == cur_chr ){ isa_bad=( 18 ); }else
        if( "s" == cur_chr ){ isa_bad=( 19 ); }else
        if( "t" == cur_chr ){ isa_bad=( 20 ); }else
        if( "u" == cur_chr ){ isa_bad=( 21 ); }else
        if( "v" == cur_chr ){ isa_bad=( 22 ); }else
        if( "w" == cur_chr ){ isa_bad=( 23 ); }else
        if( "x" == cur_chr ){ isa_bad=( 24 ); }else
        if( "y" == cur_chr ){ isa_bad=( 25 ); }else
        if( "z" == cur_chr ){ isa_bad=( 26 ); }else{};

        //:Misc_Symbols:
        if( "~" == cur_chr ){ isa_bad=(101 ); }else
        if( "`" == cur_chr ){ isa_bad=(101 ); }else
        if( "@" == cur_chr ){ isa_bad=(101 ); }else
        if( "#" == cur_chr ){ isa_bad=(101 ); }else
        if( "$" == cur_chr ){ isa_bad=(101 ); }else
        if( "%" == cur_chr ){ isa_bad=(101 ); }else
        if( "^" == cur_chr ){ isa_bad=(101 ); }else
        if( "&" == cur_chr ){ isa_bad=(101 ); }else
        if( "*" == cur_chr ){ isa_bad=(101 ); }else
        if( "-" == cur_chr ){ isa_bad=(101 ); }else
        if( "=" == cur_chr ){ isa_bad=(101 ); }else
        if( "_" == cur_chr ){ isa_bad=(101 ); }else
        if( "+" == cur_chr ){ isa_bad=(101 ); }else
        if( "," == cur_chr ){ isa_bad=(101 ); }else
        if( "." == cur_chr ){ isa_bad=(101 ); }else{};

        //:Brackets:
        if( "[" == cur_chr ){ isa_bad=(101 ); }else
        if( "]" == cur_chr ){ isa_bad=(101 ); }else
        if( "{" == cur_chr ){ isa_bad=(101 ); }else
        if( "}" == cur_chr ){ isa_bad=(101 ); }else
        if( "(" == cur_chr ){ isa_bad=(101 ); }else
        if( ")" == cur_chr ){ isa_bad=(101 ); }else
        if( "<" == cur_chr ){ isa_bad=(101 ); }else
        if( ">" == cur_chr ){ isa_bad=(101 ); }else{};

        return( isa_bad );
    };;
    //:------------------------------------------------------://




    //:Replace this function with a simple cast in C99.
    //:[ char ] type used for ascii are just [ int ](s).
    function
    GEP_ASC_TRICKY_TO_TRANSPILE_asc_CTO_int( 
        chr_asc
    )
    { "use strict"
    
        if( chr_asc.length != 1 ){
            throw("[GEP:not_a_single_character]");
        };;
    
        let int_asc=( chr_asc.charCodeAt( 0 ) );
        return( int_asc );
    };;
    
    //|FFFFFFFFFFFFF[ FUNCTION_DIVIDER ]FFFFFFFFFFFFF|//
    
    function
    GEP_ASC_TRICKY_TO_TRANSPILE_int_CTO_asc( 
        int_asc 
    )
    { "use strict"
    
        let chr_asc=( String.fromCharCode( int_asc ) );
        return( chr_asc );
    
    };;


//:DUM_:Hex_Dump_Conversion_Functions:=======================://

    //:------------------------------------------------------://
    //:[1]:hex_dum_CTO_png_nob : Get Expected Number Of Bytes://
    //:[2]:Str_CTO_Hex_001     : #HDS# --> #HBA#             ://
    //:[3]:Str_CTO_Hex_002     : Static version for testing. ://
    //:[4]:hex_dum_CTO_png_bin : Str_CTO_Hex_001 Wraper      ://
    //:[5]:hex_CTO_str         : Str_CTO_Hex_001 Inverse     ://
    //:[6]:hex_CTO_str_UNSAFE  : Dangerous, Breaks: #MOC#    ://
    //:------------------------------------------------------://

    //:[1]:hex_dum_CTO_png_nob
    function
    GEP_DUM_hex_dum_CTO_png_nob(
        hex_dum
    )
    {"use strict"

        //:ABOUT_FUNCTION:
        //:Scan over a hex dump string and figure out how 
        //:many bytes should result after being parsed.
        //:GEP_Str_CTO_Nob==GEP_DUM_hex_dum_CTO_png_nob

        //:VD:Variable_Declaration:(BELOW):------------------://
        //:VDVDVDVDVDVDVDVDVDVDVDVDVDVDVDVDVDVDVDVDVDVDVDVDVD://

        let png_nob; //:PNG_HEX_Dump_Number_Of_Bytes
        let isa_hec; //:Is_A_HEX_Character("0"-"9" & "aA"-"fF")
        let isa_emp; //:Is_An_Empty_Character(WhiteSpace)
        let isa_bad; //:IS_A_BAD(DisallowedCharacter)
        let cur_chr; //:Current_Character

        let dig_sum; //:Digit_Sum
        let emp_sum; //:Empty_Sum
        let bad_sum; //:Bad___Sum
        let all_sum; //:All___Sum

        //:VDVDVDVDVDVDVDVDVDVDVDVDVDVDVDVDVDVDVDVDVDVDVDVDVD://
        //:VA:Variable_Assignment:(BELOW):-------------------://
        //:VAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVA://

        dig_sum=( 0 );
        emp_sum=( 0 );
        bad_sum=( 0 );
        all_sum=( 0 );

        //:VAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVA://

        //:str_len does NOT include null terminator
        let str_len=( GEP_CFN_Str_Len( hex_dum ) );
        for( let str_dex = 0  
        ;        str_dex < str_len  
        ;        str_dex++ 
        ){

            cur_chr=( hex_dum[ str_dex ] );
            ((all_sum)++);

            //:- - - - - - - - - - - -- - - - - - - - - - - -://

            if( GEP_MAC_JAS > 0 ){ //:///////////////////////://
                if(cur_chr >= 0 || cur_chr <= 0 ){
                    //:Not reliable check due to loosy
                    //:goosy javascript comparisons.
                };;
                if( typeof( cur_chr ) != "string" ){
                    throw("[STRINGS_ONLY!]");
                };;
            };; //://////////////////////////////////////////://

            //:- - - - - - - - - - - -- - - - - - - - - - - -://

            if( "0" == cur_chr ){

                //:Hackish way to put a watch on
                //:this function call for condition of
                //:" 0 == cur_chr "
                isa_hec=(GEP_ASC_asc_ISA_hec( cur_chr ));//:SAME

            }else{

                isa_hec=(GEP_ASC_asc_ISA_hec( cur_chr ));//:SAME

            };;

            //:Zero included because the returned result
            //:is actually the ascii decimal value of the
            //:inputted string.
            if( isa_hec >= 0 ){ 
                ((dig_sum)++);
            };;

            //:- - - - - - - - - - - -- - - - - - - - - - - -://

            isa_emp=( GEP_ASC_asc_ISA_emp( cur_chr )  );
            if( isa_emp ){
                ((emp_sum)++);
            };;

            //:- - - - - - - - - - - -- - - - - - - - - - - -://

            //:EC:Error_Checking:----------------------------://
            //:ECECECECECECECECECECECECECECECECECECECECECECEC://
            isa_bad=( GEP_ASC_asc_ISA_bad( cur_chr )  );
            if( isa_bad >  0 ){
                ((bad_sum)++);
                if( "x" == cur_chr || "X" == cur_chr ){
                    throw("[DO_NOT_PREFIX_HEX_DUMPS(0x##)]");
                };;
                throw("[Bad_Character_Found]");
            }else
            if( isa_bad <= 0 ){

                if(1
                    &&(isa_hec <  0) //:LT( <  )¯¯\__NOT_MISTAKE
                    &&(isa_emp <= 0) //:LE( <= )__/¯¯NOT_MISTAKE
                ){

                    if( "0" == cur_chr ){

                        throw("[ZERO_SLIPPED_THROUGH_CRACKS]");
        
                    };;

                    throw("[SLIPPED_THROUGH_THE_CRACKS]");
                };;

            }else{
                throw("[EDCL:2020_08_05:0656PM]");
            };;
            //:ECECECECECECECECECECECECECECECECECECECECECECEC://

        };;

        if( all_sum != (dig_sum + emp_sum) ){

            throw("[CHECKSUM_FAIL:2020_08_05]");
        
        };;
        if( dig_sum % 2 != 0 ){
            
            throw("[HALF_BYTES_NOT_ALLOWED:2020_08_05]");

        };;

        //:calculate number of bytes:
        //:2 letters makes one byte:
        png_nob=( dig_sum / 2 );

        return( png_nob );
    };;                      //:[GEP_DUM_hex_dum_CTO_png_nob]://
    //: - - - - - - - - - - - - ---- - - - - - - - - - - - - ://
    //:[2]:Str_CTO_Hex_001
    function
    GEP_DUM_Str_CTO_Hex_001(
        png_poi //: POINTER:PNG_HEX_DUMP
    ,   png_len //: png_poi.length
    ,   png_pos //: Seek_Position_In:png_poi

    ,   car_poi //: String_Of_Hex_Codes
    ,   car_len //: car_poi.length
    )
    { "use strict"

        //:Convention:
        //:png_pos & car_pos rest on the first empty slot.

        //:STK_ARR:Stack_Allocated_Array:(NOT malloced)
        const STK_ARR = GEP_C99_AOF( GEP_C99_Val_Arr_Chr );

        let car_pos=(        0 ); //:Character_Position
        let car_bu2=STK_ARR( 2 ); //:Character_Buffer
        let bu2_pos=(        0 ); //:car_bu2's Position
        let chr    =(        ""); //:Current_Character

        let isa_hec=( 0 - 1 ); //:False_If_Negative

        //:Move through string until all hex codes loaded:
        car_pos=( 0 - 1 );//:#ELE_IOT#
        while( 1 ){

            car_pos++;
            if( car_pos >= car_len ){ break; };

            chr=( car_poi[ car_pos ] );
            isa_hec=( GEP_ASC_asc_ISA_hec( chr )  );
            if( isa_hec >= 0 /**non_neg == true**/ ){
            //:Current character is [0-9|A-F|a-f]

                if( png_pos < png_len ){
                
                    car_bu2[ bu2_pos ]=( chr );
                    bu2_pos++;

                }else{

                    //:We ran out of room in [ png_poi ]
                    //:one of (3) possible mistakes:
                    //:1: png_poi allocated too small
                    //:2: car_poi has excess data or mistake.
                    //:3: Currnet [ png_poi ] and [ car_poi ]
                    //:   are not meant for each other.
                    throw("[GEP_ERR:TOO_MANY_CHARACTERS]");

                };;

            }else{

                //:Not a valid hex code letter, ignore.
                if( GEP_MAC_DEB > 0 ){
                    if( "8" == chr ){
                        throw("[GEP_ERR:8_Is_Valid_Hex_Char]");
                    };;
                };;
            
            };;

            //:Is it time to convert ascii representation
            //:of byte to an [ int / char ] hex value
            //:in range [ 0x00 - to - 0xFF ] ?
            if( bu2_pos >= 2 ){

                //:Convert two letter string to byte value:
                let heb = GEP_ASC_hec_CTO_heb( 
                    car_bu2 /* hec */ 
                );;

                //:Load byte into png_poi
                png_poi[ png_pos ]=( heb );
                png_pos++;

                bu2_pos=( 0 ); //:rests_on_first_empty_slot
            };;

        };;
        return( png_pos );
    };;                          //:[GEP_DUM_Str_CTO_Hex_001]://
    //: - - - - - - - - - - - - ---- - - - - - - - - - - - - ://
    //:[3]:Str_CTO_Hex_002
    function 
    GEP_DUM_Str_CTO_Hex_002(
        car_poi
    )
    {

        //:Example car_poi:( "89 50 4e 47    0d 0a 1a 0a" )
        GEP_CAR_POI=( car_poi     );
        GEP_CAR_LEN=( GEP_CAR_LEN );

        let png_pos=(
            GEP_DUM_Str_CTO_Hex_001(
                GEP_PNG_POI //: png_poi 01  ://
            ,   GEP_PNG_LEN //: png_len 02  ://
            ,   GEP_PNG_POS //: png_pos 03  ://
            /** ----------- ::: ------- --  **/  
            ,   GEP_CAR_POI //: car_poi 04  ://
            ,   GEP_CAR_LEN //: car_len 05  ://
            )
        );;

        GEP_PNG_POS=( png_pos );
    };;
    //: - - - - - - - - - - - - ---- - - - - - - - - - - - - ://
    //:[4]:hex_dum_CTO_png_bin
    function
    GEP_DUM_hex_dum_CTO_png_bin(
            hex_dum   //:ARG_INN
        ,   png_bin   //:ARG_OUT
    )
    {
        //: Originally we provided[ png_nob ]as input,
        //: but found it confusing to read. Now you need to
        //: be more careful that[ png_bin ] is large enough.
        let png_nob = GEP_DUM_hex_dum_CTO_png_nob( hex_dum );
        let hex_nob=( GEP_CFN_Str_Len( hex_dum ) );

        if( GEP_MAC_JAS > 0 ){
            if( png_bin.length != png_nob ){
                throw("[bad_buffer_size:png_bin]");
            };;
            if( hex_dum.length != hex_nob ){
                throw("[bad_buffer_size:hex_nob]");
            };;
        };;

        //:I don't know why I decided to do
        //:outputs first (ARG_OUT) for 
        //:GEP_DUM_Str_CTO_Hex_001, but stuck with it now.
        GEP_DUM_Str_CTO_Hex_001(
            png_bin, png_nob, 0 //:ARG_OUT
        ,   hex_dum, hex_nob    //:ARG_INN
        );;

    };;
    //: - - - - - - - - - - - - ---- - - - - - - - - - - - - ://
    //:[5]:hex_CTO_str
    const GEP_DUM_hex_CTO_str =function(
        png_poi //: POINTER:PNG_HEX_DUMP
    ,   png_len //: png_poi.length

        //:The caller should provide memory to be filled
        //:so that malloc and free happen in same scope.
    ,   car_poi //: Character array to fill.
    ,   car_len //: Declared length of character array.
    ){ "use strict"

        if( GEP_MAC_DEB > 0 ){ //:///////////////////////////://

            if( typeof( car_poi ) === "string" ){

                //:You need to pass an array of strings
                //:instead of a string because we cannot
                //:pass around strings by reference in  
                //:javascript. Also array access silently
                //:fails when index accessing strings.
                throw("[GEP_ERR:CANT_PASS_STRING_BY_REF]");
        
            };;

        };; //:///////////////////////////////[ GEP_MAC_DEB ]://

        let car_pos    =( 0 - 2);
        let png_pos    =( 0 - 1);
        let car_bu2=GEP_C99_Val_Arr_Chr( 2 );

        //:Malloc character array pointer:
        //:Each byte is represented by 2 ascii characters,
        //:hence the multiplication by 2 here.
        let exp_len=( png_len * 2 );
        if( car_len != exp_len ){
            throw("[GEP_ERR:car_len:NOT:2X:png_len]");
        };;

        //:Loop over all bytes in png_poi. (.PNG data pointer)
        //:(You can use this to hex dump other stuff besides  )
        //:(png files, but the intended use is PNG and I find )
        //:(it is easier to code when I am not being abstract.)
        car_pos=( 0 - 2 );
        png_pos=( 0 - 1 );
        while( 1 ){
            png_pos=(png_pos+1);
            car_pos=(car_pos+2);

            let png_oob=( png_pos >= png_len  );
            let car_oob=( car_pos >= car_len  );
            if( png_oob || car_oob ){

                //:If both values do not go out of bounds
                //:at the same time we have some type of
                //:mis-aligned seeking.
                if( !( png_oob && car_oob ) ){
                    throw("[GEP_ERR:BOTH_SHOULD_BE_OOB]");
                };;

                break;
            };;

            //:Call inverse of[ GEP_hec_CTO_heb ]
            GEP_ASC_heb_CTO_hec( 
                    png_poi[ png_pos ] //:Byte_Value_To_Convert
            ,   GEP_C99_AOV( car_bu2 ) //:Output_Param_Pointer
            );;                        //:AKA[ poi_hec ]

            //:Unload_Character_Sequence:
            car_poi[ car_pos + 0 ]=car_bu2[ 0 ];
            car_poi[ car_pos + 1 ]=car_bu2[ 1 ];

        };;

        //:Return malloced memory containing hex dump string.
        //:( string as in character array )
        return( car_poi );
    };;
    //: - - - - - - - - - - - - ---- - - - - - - - - - - - - ://
    //:[6]:hex_CTO_str_UNSAFE:
    function
    GEP_DUM_hex_CTO_str_UNSAFE(
        png_poi
    ,   png_len
    )   
    {
        let car_len =( png_len * 2 );
        let car_poi = GEP_POI_ARR_CHR( car_len );

        GEP_DUM_hex_CTO_str(
            png_poi
        ,   png_len
        
        ,   car_poi
        ,   car_len
        );;

        return( car_poi );
    };;
    //:------------------------------------------------------://

//:TES_: Test_Related_Functions:=============================://

    function
    GEP_TES_Put_Tes_Dat(
        /** void **/
    )
    { "use strict"
    //://////////////////////////////////////////////////////://
    //:                                                      ://
    //: Load PNG hex dumps into byte arrays for testing.     ://
    //:                                                      ://
    //: Code looks really weird because:                     ://
    //: 1: Written in C friendly style.                      ://
    //: 2: Stateful "I" function helps preserve column space.://
    //:                                                      ://
    //://////////////////////////////////////////////////////://

    let I=GEP_C99_AOF( GEP_DUM_Str_CTO_Hex_002 );


    GEP_PNG_POI=( GEP_C99_AOV( GEP_PNG_001 )       );
    GEP_PNG_LEN=(              GEP_PNG_001_LEN_MAC );
    GEP_PNG_POS=(            (      0      )       );
    GEP_CAR_LEN=(            (     26      )       );
    
    //:GEP/TES_DAT/01.PNG: One all white pixel. 255 alpha.
    I( "89 50 4e 47    0d 0a 1a 0a" ); //|.PNG|....| 08 | 01 |//
    I( "00 00 00 0d    49 48 44 52" ); //|....|IHDR| 16 | 02 |//
    I( "00 00 00 01    00 00 00 01" ); //|....|....| 24 | 03 |//
    I( "08 02 00 00    00 90 77 53" ); //|....|..wS| 32 | 04 |//
    I( "de 00 00 00    01 73 52 47" ); //|....|.sRG| 40 | 05 |//
    I( "42 00 ae ce    1c e9 00 00" ); //|B...|....| 48 | 06 |//
    I( "00 04 67 41    4d 41 00 00" ); //|..gA|MA..| 56 | 07 |//
    I( "b1 8f 0b fc    61 05 00 00" ); //|....|a...| 64 | 08 |//
    I( "00 09 70 48    59 73 00 00" ); //|..pH|Ys..| 72 | 09 |//
    I( "0e c3 00 00    0e c3 01 c7" ); //|....|....| 80 | 10 |//
    I( "6f a8 64 00    00 00 19 74" ); //|o.d.|...t| 88 | 11 |//
    I( "45 58 74 53    6f 66 74 77" ); //|EXtS|oftw| 96 | 12 |//
    I( "61 72 65 00    70 61 69 6e" ); //|are.|pain|104 | 13 |//
    I( "74 2e 6e 65    74 20 34 2e" ); //|t.ne|t 4.|112 | 14 |//
    I( "30 2e 31 36    44 69 af f5" ); //|0.16|Di..|120 | 15 |//
    I( "00 00 00 0c    49 44 41 54" ); //|....|IDAT|128 | 16 |//
    I( "18 57 63 f8    ff ff 3f 00" ); //|.Wc.|..?.|136 | 17 |//
    I( "05 fe 02 fe    a7 35 81 84" ); //|....|.5..|144 | 18 |//
    I( "00 00 00 00    49 45 4e 44" ); //|....|IEND|152 | 19 |//
    I( "ae 42 60 82               " ); //|.B`.|    |160 | 20 |//
    //::123456789_123456789_123456:::GEP_CAR_LEN==( 26 ):::::://
    if( GEP_PNG_POS != GEP_PNG_001_LEN_MAC ){
        throw("[GEP_ERR:FAILED_TO_FILL_100_PERCENT:PNG_001]");
    }else{
        if( GEP_MAC_LOG > 0 ){ GEP_Log("[PNG_001:LOADED]"); };
    };;

    //://////////////////////////////////////////////////////://

    GEP_PNG_POI=( GEP_C99_AOV( GEP_PNG_002 )       );
    GEP_PNG_LEN=(              GEP_PNG_002_LEN_MAC );
    GEP_PNG_POS=(            (      0      )       );
    GEP_CAR_LEN=(            (     26      )       );

    //:GEP/TES_DAT/02.PNG: One all white pixel. 255 alpha.
    I( "89 50 4e 47    0d 0a 1a 0a" ); //|.PNG|....| 08 | 01 |//
    I( "00 00 00 0d    49 48 44 52" ); //|....|IHDR| 16 | 02 |//
    I( "00 00 00 01    00 00 00 01" ); //|....|....| 24 | 03 |//
    I( "08 02 00 00    00 90 77 53" ); //|....|..wS| 32 | 04 |//
    I( "de 00 00 00    01 73 52 47" ); //|....|.sRG| 40 | 05 |//
    I( "42 00 ae ce    1c e9 00 00" ); //|B...|....| 48 | 06 |//
    I( "00 04 67 41    4d 41 00 00" ); //|..gA|MA..| 56 | 07 |//
    I( "b1 8f 0b fc    61 05 00 00" ); //|....|a...| 64 | 08 |//
    I( "00 09 70 48    59 73 00 00" ); //|..pH|Ys..| 72 | 09 |//
    I( "0e c3 00 00    0e c3 01 c7" ); //|....|....| 80 | 10 |//
    I( "6f a8 64 00    00 00 0c 49" ); //|o.d.|...I| 88 | 11 |//
    I( "44 41 54 18    57 63 f8 ff" ); //|DAT.|Wc..| 96 | 12 |//
    I( "ff 3f 00 05    fe 02 fe a7" ); //|.?..|....|104 | 13 |//
    I( "35 81 84 00    00 00 00 49" ); //|5...|...I|112 | 14 |//
    I( "45 4e 44 ae    42 60 82   " ); //|END.|B`. |120 | 15 |//
    //::123456789_123456789_123456:::GEP_CAR_LEN==( 26 ):::::://
    if( GEP_PNG_POS != GEP_PNG_002_LEN_MAC ){
        throw("[GEP_ERR:FAILED_TO_FILL_100_PERCENT:PNG_002]");
    }else{
        if( GEP_MAC_LOG > 0 ){ GEP_Log("[PNG_002:LOADED]"); };
    };;

    };; //://////////////////////////:[ GEP_TES_Put_Tes_Dat ]://

    //: - - - - - - - - - - - - ---- - - - - - - - - - - - - ://
    function
    GEP_TES_Hex_Dum( 
        /** void **/ 
    )
    { "use strict"

        //:-----------:1234567890123456:---://
        let hex_dum=( "0123456789ABCDEF" );
        let hex_new=( "----------------" );

        let car_poi=GEP_C99_AOS( hex_dum );
        let car_len=( 16 );

        let png_len=( car_len / 2 );
        let png_poi=GEP_C99_Mal_Arr_Chr( png_len );
        let png_pos=( 0 ); //:Fill from start of array.

        //:Convert hex dump string to byte array:
        GEP_DUM_Str_CTO_Hex_001(
            png_poi //: POINTER:PNG_HEX_DUMP
        ,   png_len //: png_poi.length
        ,   png_pos //: Seek_Position_In:png_poi

        ,   car_poi //: String_Of_Hex_Codes
        ,   car_len //: car_poi.length
        );;
        
        //:Convert byte array back into hex dump string:
        //:[HACK]:Characters are not passed by reference
        //:       in javascript, so you need to take the
        //:       return value here!
        car_poi=GEP_C99_AOS( hex_new );
        car_len=( 16 );
        car_poi=GEP_DUM_hex_CTO_str(
                png_poi //: POINTER:PNG_HEX_DUMP
            ,   png_len //: png_poi.length

                //:The caller should provide memory to be filled
                //:so that malloc and free happen in same scope.
            ,   car_poi //: Character array to fill.
            ,   car_len //: Declared length of character array.
            );;
        //:HACK: Also wouldn't have to do this assignment
        //:      if this were C code.
        hex_new=( car_poi );

        //:If conversion back and forth was successfull,
        //:contents of [ hex_dum ] should match [ hex_new ]

        let fai=( 0 ); //:Fail_Times
        for( let i = 0 ; i < 16 ; i++ ){

            if( hex_dum[ i ] != hex_new[ i ] ){
                fai++;
            };;
        };;

        if( 0 != fai ){
            throw("[GEP_ERR:Hex_Dump_Test_Failed]");
        }else{
            GEP_Log("[Hex_Dump_Test_Passed]");
        };;

        GEP_C99_Fre_Arr_Chr( png_poi ); //:FREE_MEMORY

    };; //:--------------------------------:[GEP_TES_Hex_Dum]://

    //: - - - - - - - - - - - - ---- - - - - - - - - - - - - ://
    function
    GEP_TES_png_bin_CTO_png_sob( 
        /** void **/
    )
    { "use strict"

        let hex_dum=("" //:01.PNG's hex dump.
        +   "89 50 4e 47    0d 0a 1a 0a"  //: 01 ://
        +   "00 00 00 0d    49 48 44 52"  //: 02 ://  
        +   "00 00 00 01    00 00 00 01"  //: 03 ://  
        +   "08 02 00 00    00 90 77 53"  //: 04 ://
        +   "de 00 00 00    01 73 52 47"  //: 05 ://
        +   "42 00 ae ce    1c e9 00 00"  //: 06 ://
        +   "00 04 67 41    4d 41 00 00"  //: 07 ://
        +   "b1 8f 0b fc    61 05 00 00"  //: 08 ://
        +   "00 09 70 48    59 73 00 00"  //: 09 ://
        +   "0e c3 00 00    0e c3 01 c7"  //: 10 ://
        +   "6f a8 64 00    00 00 19 74"  //: 11 ://
        +   "45 58 74 53    6f 66 74 77"  //: 12 ://
        +   "61 72 65 00    70 61 69 6e"  //: 13 ://
        +   "74 2e 6e 65    74 20 34 2e"  //: 14 ://
        +   "30 2e 31 36    44 69 af f5"  //: 15 ://
        +   "00 00 00 0c    49 44 41 54"  //: 16 ://
        +   "18 57 63 f8    ff ff 3f 00"  //: 17 ://
        +   "05 fe 02 fe    a7 35 81 84"  //: 18 ://
        +   "00 00 00 00    49 45 4e 44"  //: 19 ://
        +   "ae 42 60 82               "  //: 20 ://
        );; //: ( 19 * 8 ) + ( 4 ) == 156 bytes
        let exp_nob=( 156 ); //:Expected_Number_Of_Bytes


        //:Do one pass over the hex dump to figure out
        //:the number of bytes that will results from
        //:parsing.
        var png_nob = GEP_DUM_hex_dum_CTO_png_nob( hex_dum );
        if( png_nob != exp_nob ){
            throw("[Not_The_Number_Of_Bytes_I_Expected]");
        };;

        //:Allocated number of bytes:
        let png_bin=( new Uint8Array( png_nob ) );

        //:Internally_Uses:GEP_Str_CTO_Hex
        GEP_DUM_hex_dum_CTO_png_bin(
            hex_dum              //:ARG_INN
        ,   png_bin  ,  png_nob  //:ARG_OUT
        );;

        //:Quick Spot Check on first and last byte, since
        //:we can easily see what they are from[ hex_dum ].
        if( png_bin[ 0       ] != 0x89 //:KEEP_IT_SIMPLE_STUPID
        ||  png_bin[ 0       ] !=  137 //:KEEP_IT_SIMPLE_STUPID
        ){
            throw("[SPOT_CHECK_FAIL:[0]:0x89]");
        };;
        if( png_bin[ 156 - 1 ] != 0x82 //:KEEP_IT_SIMPLE_STUPID 
        ||  png_bin[ 156 - 1 ] !=  130 //:KEEP_IT_SIMPLE_STUPID
        ){
            throw("[SPOT_CHECK_FAIL:[LAST]:0x82]");
        };;

        //:Some of what we already did above may be replicated
        //:in this function call, don't worry about that,
        //:test code should be redundant.

        //:Create new intermediate png_sob used to help
        //:use parse the PNG data.
        let png_sob=( GEP_VAL_png_sob() );
        GEP_INI_png_sob( png_sob );

        GEP_ALG_png_bin_CTO_png_sob( 
            png_bin //:ARG_INN
        ,   png_nob //:ARG_INN
        
        ,   png_sob //:ARG_OUT
        );;

    };;
    //: - - - - - - - - - - - - ---- - - - - - - - - - - - - ://
    function
    GEP_TES_All( 
        /** void **/
    )
    { "use strict"

        //:FUNCTION_SUMMARY: run_all_test_code:

        GEP_TES_Put_Tes_Dat();
        GEP_TES_Hex_Dum();

        //: Must be AFTER:GEP_Tes_Hex_Dum()          - - - - ://
        //: Because our png binary ( png_bin ) is    - - - - ://
        //: encoded as a long text string known as   - - - - ://
        //: a [ text/hex dump ].                     - - - - ://
        GEP_TES_png_bin_CTO_png_sob();

        ((GEP_GSF_tes_ran)++);
    };;


//:ALG_: Algorithm (Main Algorithm Functions):===============://

    const GEP_ALG_png_bin_CTO_png_sob=function(
        png_bin //:ARG_INN
    ,   png_nob //:ARG_INN
                
    ,   png_sob //:ARG_OUT
    ){ "use strict"

        throw("[TODO:GEP_png_bin_CTO_png_sob]");

        //:Store[ png_bin ]&[ png_nob ]in[ png_sob ]:


        //:Extract_Chunks by reading png headers:

    };;

//:PUB_: Public_API_Functions:===============================://

    /** PNG Binary to RGBA byte array.           *********** ***
    *** @returns [ pix_arr , pix_wid , pix_hig ] *********** **/
    function 
    GEP_PUB_Decode( 
        png_bin 
    ,   png_nob 
    )
    { "use strict"

    };;

    /** [ RGBA Byte Array ]==TO==>[ PNG Binary File ] ****** ***
    *** @returns [ png_bin, png_nob ]                 ****** **/
    function 
    GEP_PUB_Encode(
    /**/pix_arr
    ,   pix_wid
    ,   pix_hig
    )
    { "use strict"

    };;

    //:Library object for people who like OOP style code.
    const GEP={
        vit    : GEP_VIT_GEP
    ,   Decode : GEP_PUB_Decode
    ,   Encode : GEP_PUB_Encode
    };;
    
    //:------------------------------------------------------://

    //: Improperly namespaced wrapper functions for public   ://
    //: consumption because people might find "GEP_PUB_*"    ://
    //: a bit too verbose.                                   ://


    /** Decodes png binary file into RGBA byte array which   ***
    *** can then be used with OpenGL or Vulkan.              ***
    *** @returns [pix_arr , pix_wid , pix_hig]               **/
    function 
    GEP_Decode( 
        png_bin  /** PNG_file_BINary (as byte array) **/
    ,   png_nob  /** PNG_NumberOfBytes               **/
    )
    { "use strict"
        return( GEP_PUB_Decode( png_bin , png_nob ) );
    };;

    /** Encodes an RGBA byte array into a PNG file that can  ***
    *** be saved to disc and viewed in image viewers such as ***
    *** MS Paint and Paint.net. Or uploaded to IMUGR,        ***
    *** twitter, or other image hosting websites.            ***
    *** @returns [ png_bin , png_nob ]                       **/
    function 
    GEP_Encode(
    /**/pix_arr
    ,   pix_wid
    ,   pix_hig
    )
    { "use strict"
        return( GEP_Encode( pix_arr, pix_wid, pix_hig ) );
    };;

    //:------------------------------------------------------://


//:INI_: Library Initialization:=============================://
//:     INI functions of specific types is stored in GEP.DATA

    //:C99 style library initializer function:
    function
    GEP_INI_Main( 
        /** void **/ 
    )
    { "use strict"

        //:If in debug mode and tests have not yet
        //:Been ran, run the unit test code.
        if(     GEP_MAC_DEB     > 0   ){
        if(   !(GEP_GSF_tes_ran > 0)  ){
               (GEP_GSF_tes_ran)++;
                GEP_TES_All( );
        };;};;

        (GEP_GSF_was_ini)++; //:was_initialized?
    };;

    //:AUTO_INIT:--------------------------------------------://

        if( GEP_MAC_JAS > 0 ){
        //:Current platform is javascript:
        
            GEP_INI_Main();
        
        };;
        if( GEP_MAC_C99 > 0 ){
        //:Current platform is C99
        
            throw("[GEP_ERR:THIS_IS_NOT_C99_CODE]");
        
        };;
        
    //:---------------------------------------------:AUTO_INIT://
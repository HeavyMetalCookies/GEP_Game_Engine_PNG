
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

    function //:Generic Logging Message
    
    gep_Log( msg_log  )

    { "use strict"
        if( GEP_MAC_LOG > 0 ){
        console.log("[gep_Log]:(" + msg_log + ")" );
        };;
    };;
    function //:Logging message for "[*_TES_*]" functions.

    gep_Log_TES( msg_log )

    { "use strict"
        if( GEP_MAC_LOG_o_TES > 0 ){
        console.log("[gep_Log_TES]:(" + msg_log + ")" );
        };;
    };;
    function //:Logging message for "[*_TES_D00_*]" functions.

    gep_Log_TES_D00( msg_log )

    { "use strict"
        if( GEP_MAC_LOG_o_TES_D00 > 0 ){
        console.log("[gep_Log_TES_D00]:(" + msg_log + ")" );
        };;
    };;
    function //:Logging message for "[*_C99_*]" functions.

    gep_Log_C99( msg_log )

    { "use strict"
        if( GEP_MAC_LOG_o_C99 > 0 ){
        console.log("[gep_Log_C99]:(" + msg_log + ")" );
        };;
    };;

    function //:Logging message for "[*_ALG_*]" functions.

    gep_Log_ALG( msg_log )

    { "use strict"
        if( GEP_MAC_LOG_o_ALG > 0 ){
        console.log("[gep_Log_ALG]:(" + msg_log + ")" );
        };;
    };;

//:===================================:LOG_:Logging_Functions://
//:CFN_:C99_Utility_Functions:===============================://

    //:NOT part of "C99_" namespace anymore.
    //:Get length of string NOT including null terminator.
    const gep_CFN_Str_Len=function( hex_dum ){ "use strict"
    
        if( typeof( hex_dum ) != "string" ){
            throw("[gep_CFN_Str_Len:Bad_Input]");
        };;
    
        let str_len=( hex_dum.length );
        return( str_len );
    };;

//:===============================:CFN_:C99_Utility_Functions://
//:ASC_:Ascii_Related_Functions:=============================://
            
    //: [1] : asc_ISA_hec: Is character valid hex character? ://
    //: [2] : hec_ISA_asc: Inverse Of GEP_asc_ISA_hec        ://
    //: [3] : hec_CTO_heb: EXAMPLE: "FF" --> 255             ://
    //: [4] : heb_CTO_hec: EXAMPLE: 255  --> "FF"            ://
    //: [5] : asc_ISA_emp: Is ascii a whitespace character?  ://
    //: [6] : asc_ISA_bad: Is acii invalid as hex char?      ://
    //: [7] : gep_ASC_TRICKY_TO_TRANSPILE_asc_CTO_int        ://
    //: [8] : gep_ASC_TRICKY_TO_TRANSPILE_int_CTO_asc        ://
    
    //:------------------------------------------------------://
    function
    gep_ASC_asc_ISA_hec(
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

        var int_asc = gep_ASC_TRICKY_TO_TRANSPILE_asc_CTO_int( 
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
    gep_ASC_hec_ISA_asc(
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
            chr_asc=( gep_ASC_TRICKY_TO_TRANSPILE_int_CTO_asc( 
            int_asc ) );;

        }else
        if( int_hec >= 10 && int_hec < 16 ){

            int_asc=( (int_hec - 10) + 65 );
            chr_asc=( gep_ASC_TRICKY_TO_TRANSPILE_int_CTO_asc( 
            int_asc ) );;

        }else{
            chr_asc=(""); //:Empty_String_Means_False
        };;
         
        return( chr_asc /** isa_asc **/ );
    };;
    //:------------------------------------------------------://
    function
    gep_ASC_hec_CTO_heb(
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

        let big=( gep_ASC_asc_ISA_hec( hec[ 0 ] ) );
        let lit=( gep_ASC_asc_ISA_hec( hec[ 1 ] ) );
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
    gep_ASC_heb_CTO_hec(
          val_heb //:HexByte:PassedBy:VALUE
    ,     poi_hec //:HexChar:PassedBy:POINTER (AKA:car_bu2)
    )
    { "use strict"

        if(!( val_heb >= 0x00 && val_heb <= 0xFF ) ){
            throw("[INPUT_VALUE_OUTSIDE_OF_BYTE_RANGE]");
        };;

        let lit=(  val_heb      % 16 ); //: 1's place.
        let big=( (val_heb-lit) / 16 ); //:16's place.

        //:Inverse_Of[ gep_ASC_TRICKY_TO_TRANSPILE_asc_CTO_int ]
        poi_hec[ 0 ]=gep_ASC_hec_ISA_asc( big );
        poi_hec[ 1 ]=gep_ASC_hec_ISA_asc( lit );

    };;
    //:------------------------------------------------------://
    function
    gep_ASC_asc_ISA_emp( 
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
    gep_ASC_asc_ISA_bad( 
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
    gep_ASC_TRICKY_TO_TRANSPILE_asc_CTO_int( 
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
    gep_ASC_TRICKY_TO_TRANSPILE_int_CTO_asc( 
        int_asc 
    )
    { "use strict"
    
        let chr_asc=( String.fromCharCode( int_asc ) );
        return( chr_asc );
    
    };;

//:=============================:ASC_:Ascii_Related_Functions://
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
    gep_DUM_hex_dum_CTO_png_nob(
        hex_dum
    )
    {"use strict"

        //:ABOUT_FUNCTION:
        //:Scan over a hex dump string and figure out how 
        //:many bytes should result after being parsed.
        //:GEP_Str_CTO_Nob==gep_DUM_hex_dum_CTO_png_nob

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
        let str_len=( gep_CFN_Str_Len( hex_dum ) );
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
                isa_hec=(gep_ASC_asc_ISA_hec( cur_chr ));//:SAME

            }else{

                isa_hec=(gep_ASC_asc_ISA_hec( cur_chr ));//:SAME

            };;

            //:Zero included because the returned result
            //:is actually the ascii decimal value of the
            //:inputted string.
            if( isa_hec >= 0 ){ 
                ((dig_sum)++);
            };;

            //:- - - - - - - - - - - -- - - - - - - - - - - -://

            isa_emp=( gep_ASC_asc_ISA_emp( cur_chr )  );
            if( isa_emp ){
                ((emp_sum)++);
            };;

            //:- - - - - - - - - - - -- - - - - - - - - - - -://

            //:EC:Error_Checking:----------------------------://
            //:ECECECECECECECECECECECECECECECECECECECECECECEC://
            isa_bad=( gep_ASC_asc_ISA_bad( cur_chr )  );
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
    };;                      //:[gep_DUM_hex_dum_CTO_png_nob]://
    //: - - - - - - - - - - - - ---- - - - - - - - - - - - - ://
    //:[2]:Str_CTO_Hex_001
    function
    gep_DUM_Str_CTO_Hex_001(
        png_bin //: POINTER:PNG_HEX_DUMP
    ,   png_len //: png_bin.length
    ,   png_pos //: Seek_Position_In:png_bin

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
            isa_hec=( gep_ASC_asc_ISA_hec( chr )  );
            if( isa_hec >= 0 /**non_neg == true**/ ){
            //:Current character is [0-9|A-F|a-f]

                if( png_pos < png_len ){
                
                    car_bu2[ bu2_pos ]=( chr );
                    bu2_pos++;

                }else{

                    //:We ran out of room in [ png_bin ]
                    //:one of (3) possible mistakes:
                    //:1: png_bin allocated too small
                    //:2: car_poi has excess data or mistake.
                    //:3: Currnet [ png_bin ] and [ car_poi ]
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
                let heb = gep_ASC_hec_CTO_heb( 
                    car_bu2 /* hec */ 
                );;

                //:Load byte into png_bin
                png_bin[ png_pos ]=( heb );
                png_pos++;

                bu2_pos=( 0 ); //:rests_on_first_empty_slot
            };;

        };;
        return( png_pos );
    };;                          //:[gep_DUM_Str_CTO_Hex_001]://
    //: - - - - - - - - - - - - ---- - - - - - - - - - - - - ://
    //:[3]:Str_CTO_Hex_002
    function 
    gep_DUM_Str_CTO_Hex_002(
        car_poi
    )
    {

        //:Example car_poi:( "89 50 4e 47    0d 0a 1a 0a" )
        GEP_CAR_POI=( car_poi     );
        GEP_CAR_LEN=( GEP_CAR_LEN );

        let png_pos=(
            gep_DUM_Str_CTO_Hex_001(
                GEP_PNG_BIN //: png_bin 01  ://
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
    gep_DUM_hex_dum_CTO_png_bin(
            hex_dum   //:ARG_INN
        ,   png_nob   //:ARG_INN (number of bytes in[ png_bin ])

        ,   png_bin   //:ARG_OUT
    )
    {
        if( !( png_bin ) ){
            //:The USER of the function is responsible
            //:for the malloced memory.
            throw("[NO_MEMORY_ALLOCATION_PASSED_IN]");
        };;

        //: NOW[ 2020_08_26 ]                                ://
        //: Change this back to taking[ png_nob ].           ://
        //: The signature makes more sense that way when     ://
        //: you recall the USER of this function is          ://
        //: responsible for mallocing the memory.            ://

        //: PRE[ 2020_08_26 ]
        //: Originally we provided[ png_nob ]as input,
        //: but found it confusing to read. Now you need to
        //: be more careful that[ png_bin ] is large enough.

        let png_nob_exp= gep_DUM_hex_dum_CTO_png_nob( hex_dum );
        let hex_nob    =( gep_CFN_Str_Len( hex_dum ) );

        if( png_nob_exp != png_nob ){
            throw("[ERR:UNEXPECTED_ALLOCATION_SIZE]");
        };;

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
        //:gep_DUM_Str_CTO_Hex_001, but stuck with it now.
        gep_DUM_Str_CTO_Hex_001(
            png_bin, png_nob, 0 //:ARG_OUT
        ,   hex_dum, hex_nob    //:ARG_INN
        );;

    };;
    //: - - - - - - - - - - - - ---- - - - - - - - - - - - - ://
    //:[5]:hex_CTO_str
    const gep_DUM_hex_CTO_str =function(
        png_bin //: POINTER:PNG_HEX_DUMP
    ,   png_len //: png_bin.length

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

        //:Loop over all bytes in png_bin. (.PNG data pointer)
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
            gep_ASC_heb_CTO_hec( 
                    png_bin[ png_pos ] //:Byte_Value_To_Convert
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
    gep_DUM_hex_CTO_str_UNSAFE(
        png_bin
    ,   png_len
    )   
    {
        let car_len =( png_len * 2 );
        let car_poi = GEP_POI_ARR_CHR( car_len );

        gep_DUM_hex_CTO_str(
            png_bin
        ,   png_len
        
        ,   car_poi
        ,   car_len
        );;

        return( car_poi );
    };;
    //:------------------------------------------------------://

//:=======================:DUM_:Hex_Dump_Conversion_Functions://
//:BAH_:Byte_Array_Helpers:==================================://

    function
    gep_BAH_u8a_Get_u32(
    /**/    u8a //:[ u8a | png_bin | Uint8ArrayToReadFrom      ]
    ,       nob //:[ u8a_nob | NumberOfBytesInUint8Array       ]
    ,       dex //:[ dex | png_dex | subOctet's first(MSB)byte ]
    )
    { "use strict"
        let sub_oct=( 0x00 /** u32 | sub_oct | SubOctet **/ );  

        //:Extracted_From_Statement_Below_To_Help_Debugging:
        let b_0=( u8a[ dex + 0 ] ); //:MSB
        let b_1=( u8a[ dex + 1 ] );
        let b_2=( u8a[ dex + 2 ] );
        let b_3=( u8a[ dex + 3 ] ); //:LSB

        //:Bug_Fix:Dont_Forget_To_Multiply_Shifts_By_8
        const B=( 8 ); //:Byte_Is_8_Bits:

        //:BIT_PACKING_IS_IN[ NETWORK_BYTE_ORDER ]://
        sub_oct=( sub_oct | ((b_0 << (3*B) )>>>0) );
        sub_oct=( sub_oct | ((b_1 << (2*B) )>>>0) );
        sub_oct=( sub_oct | ((b_2 << (1*B) )>>>0) );
        sub_oct=( sub_oct | ((b_3 << (0*B) )>>>0) );

        return( sub_oct    /** u32 | sub_oct | SubOctet **/ );
    };;

    function
    gep_BAH_u32_CTO_str( u32 )
    { "use strict"
        throw("[USE:gep_ALG_u32_CTO_cus]");
    };;

    function
    gep_BAH_str_CTO_u32( str )
    { "use strict"
        throw("[USE:gep_ALG_cus_CTO_u32]");
    };;

//:ALG_:ALGorithm_main_algorithm_functions:==================://


    //:------------------------------------------------------://
    //:TODO:put into "BAH" namespace" as these are helpers.  ://
    //:[1]:gep_ALG_cus_CTO_u32                               ://
    //:[2]:gep_ALG_u32_CTO_cus                               ://
    //:------------------------------------------------------://
    function 
    gep_ALG_cus_CTO_u32(
        cus //:CUSS: A four letter word string. EX:"IHDR"
    )
    {
        //:Error_Check_Input:cus must be 4 letters long.
        if( GEP_MAC_DEB > 0 ){
            if( cus.length != 4 ){
                throw("[Cusswords_Are_4_Letters_Long]");
            };;
        };;

        const 
        asc_CTO_int=( gep_ASC_TRICKY_TO_TRANSPILE_asc_CTO_int );
        const
        int_CTO_asc=( gep_ASC_TRICKY_TO_TRANSPILE_int_CTO_asc );

        let shi=(  0   ); //:Bit shifting amount
        let u32=( 0x00 );
        let asc=( ""   ); //:Hex_CHARACTER[ asc / hec ]
        let int=( 0x00 ); //:Hex_BYTE[      int / heb ]
        for( let i = 0; i < 4 ; i++ ){

            shi =( 8 /**BYTE**/ * (3-i) );
            int = asc_CTO_int( asc = cus[ i ] );
            u32 =( u32 | (int << shi )>>>0 );
                
        };;

        return( u32 );

    };;//: - - - - - - - - - - - - - - - - - - - - - - - - - ://
    function
    gep_ALG_u32_CTO_cus(
        u32 //:UINT32: A 4 byte value that can encode 4 letters.
    )
    {
        //:Make sure correct range for UINT32:
        if( GEP_MAC_DEB > 0 ){
            if( (u32 & 0xFFFFFFFF ) != u32 ){
                throw("[u32_is_only_four_bytes_unsigned]"); 
            }else
            if( (u32 & 0xFFFFFFFF ) == u32 ){
                //:Good. Okay.
            }else
            if( u32 < 0 ){
                throw("[TheMaskShouldHaveGotThis]");
            }else{
                throw("[SuperWTFMAN]");
            };;
        };;

        const 
        asc_CTO_int=( gep_ASC_TRICKY_TO_TRANSPILE_asc_CTO_int );
        const
        int_CTO_asc=( gep_ASC_TRICKY_TO_TRANSPILE_int_CTO_asc );

        let shi=(  0   ); //:Bit shifting amount
        let cus=( ""   );
        let asc=( ""   ); //:Hex_CHARACTER[ asc / hec ]
        let int=( 0x00 ); //:Hex_BYTE[      int / heb ]
        for( let i = 0; i < 4 ; i++ ){

            shi =( 8 /**BYTE**/ * (3-i) );
            int =( ( (u32>>( shi ))>>>0 ) & 0xFF );
            asc = int_CTO_asc( int );
            cus = cus + asc; //:Append next character.
              
        };;

        return( cus );
    };;
    //:------------------------------------------------------://
    //:[1]:gep_ALG_has_oct_002                               ://
    //:[2]:gep_ALG_has_oct_001                               ://
    //:------------------------------------------------------://
    function //:Has octed? 002==byte array operand overload.
    gep_ALG_has_oct_002( 
        png_bin
    ,   png_nob

    ,   png_dex //:Index/Offset to start comparison from.

    ,   sig_car //:Signature_Character_Array
    ,   sig_nob //:Signature_Number_Of_Bytes
    )
    { "use strict"

        /** res_var: Result Variable Of Function ( has_oct )**/
        let has_oct=( 0 ); //:Has_Octet(byte)Signature/Sequence?

        if( GEP_MAC_DEB > 0 ){
            if( !(png_nob > 0 ) ){ throw("[BAD:png_nob]");};
            if( !(sig_nob > 0 ) ){ throw("[BAD:sig_nob]");};
        };;

        if( png_dex + sig_nob - 1 >= (png_nob - 1) ){
            has_oct = ( 0 ); //:Not enough bytes in[ png_nob ].
        }else{

            let bad_hit=( 0 ); //:Number_Of_Misses
            let goo_hit=( 0 ); //:Number_Of_Matches
            
            let  i  = (   0-1   );
            let d_p = ( png_dex );
            let d_s = (    0    );
            for( i = 0 ; i < sig_nob ; i++ ){

                if( GEP_MAC_DEB > 0 ){
                if( d_p + i >= png_nob ){ throw("[OOB:001]"); };
                if( d_s + i >= sig_nob ){ throw("[OOB:002]"); };
                };;

                if( png_bin[ d_p + i ]
                !== sig_car[ d_s + i ]
                ){
                    ( bad_hit )++;
                }else{
                    ( goo_hit )++;
                };;

            };;

            //:IS_IT_A_MATCH_OR_NOT:-------------------------://
            if( bad_hit > 0  ){
                has_oct =( 0 - bad_hit ); //:Negative_Misses
            }else
            if( goo_hit > 0  ){
                has_oct =( 0 + goo_hit ); //:Positive_Hits__
            }else{
                throw("[Unexpected_State]");
            };; //:---------------------:IS_IT_A_MATCH_OR_NOT://
        };;

        //: has_oct: Used as boolean where positive is TRUE:
        //:--------------------------------------------------://
        //: has_oct == 0: sig_car overflows png_nob
        //: has_oct  < 0: number of non-matching bytes
        //: has_oct  > 0: number of     MATCHING bytes
        return( has_oct );; //:------------------------------://

    };;//: - - - - - - - - - - - - - - :[gep_ALG_has_oct_002]://

    function //:Has octet? 001== string operand overload.
    gep_ALG_has_oct_001(
        png_bin
    ,   png_nob
    ,   png_dex //:Index/Offset
    ,   sig_str //:Signature_String / Hex Dump (hex_dum)
    )
    { "use strict"

        //: Get expected size in bytes of[ sig_str ]         ://
        //: when converted into a [ sig_car ].               ://
        /** hex_dum === sig_str **/
        let sig_nob = gep_DUM_hex_dum_CTO_png_nob(
                              sig_str
        );;

        //:Allocate Memory On Heap:
        let sig_car = GEP_C99_Mal_Arr_Chr( sig_nob );

        gep_DUM_hex_dum_CTO_png_bin(
            sig_str  //:ARG_INN: String encoded byte array.
        ,   sig_nob  //:ARG_INN: number_of_bytes_in[ sig_car ]
        ,   sig_car  //:ARG_OUT: output array.
        );;

        /** has_sig === has_oct **/
        let has_oct=(gep_ALG_has_oct_002(
            png_bin
        ,   png_nob
        ,   png_dex

        ,   sig_car
        ,   sig_nob
        ));;

        //:Free Allocated Memory:
        GEP_C99_Fre_Arr_Chr( sig_car );

        return( has_oct /** has_sig **/ );
    };;//:-----------------------------:[gep_ALG_has_oct_001]://

    function /** Check for PNG header of binary data **/
    gep_ALG_png_sob_CHK_png_hed(
            png_sob
    )
    { "use strict"

        if( png_sob.vit != GEP_VIT_png_sob ){
            throw("[WRONG_TYPE]");
        };;

        /** has_oct === has_sig **/
        let has_sig =( 0 ); //:signature_found? 
        has_sig = gep_ALG_has_oct_001(
        /**/    png_sob.png_bin
        ,       png_sob.png_nob
        ,       0   /** png_dex **/       //:Offset
        ,       "89 50 4E 47 0D 0A 1A 0A" //:Signature(sig_str)
        );;

        return( has_sig /** has_hed **/ );
    };;

    function
    gep_ALG_png_dex_CTO_chu_key(
    /**/png_sob //:[ png_bin & png_nob ] 
    ,   png_dex //:IndexToStartLookingFrom
    )
    { "use strict"

        let chu_key=( 0 );

        let hed_u32=(0x00); //:Header as uint32
        let hed_cus=("");   //:Header as "cuss" (4 letter word)

        //:Sample the 4 bytes starting at png_dex
        //:to get a chunk name encoded in uint32 value.
        hed_u32 =(
            gep_BAH_u8a_Get_u32(
            /**/    png_sob.png_bin //:[ u8a | png_bin   ]
            ,       png_sob.png_nob //:[ nob | NumBytes  ]
            ,               png_dex //:[ dex | png_dex   ]
            )
        );;

        //:Convert to human readable:
        hed_cus = gep_ALG_u32_CTO_cus( 
                          hed_u32 /**HeaderName**/ );;

        if( 0
        ||"IHDR" == hed_cus
        ||"IDAT" == hed_cus
        ||"IEND" == hed_cus
        ||"PLTE" == hed_cus
        ){
            const IHDR=( GEP_LUT_MAC_dex_IHDR );
            const IDAT=( GEP_LUT_MAC_dex_IDAT );
            const IEND=( GEP_LUT_MAC_dex_IEND );
            const PLTE=( GEP_LUT_MAC_dex_PLTE );

            switch( hed_cus ){
            case "IHDR" :{ chu_key = IHDR; };break;
            case "IDAT" :{ chu_key = IDAT; };break;
            case "IEND" :{ chu_key = IEND; };break;
            case "PLTE" :{ chu_key = PLTE; };break;
            default:{
                throw("[RECOGNIZED_BUT_NOT_HANDLED]");
            };;};;

            if(0){ /** NOOP_BREAKPOINT **/ };

        }else{ //:Determine_If_Critical_Or_Ancillary_Chunk

            //: Example: If chunk is "sRGB"                  ://
            //: hex_dum=="73 52 47 42"                       ://
            //: hex_u32==0x73524742                          ://
            //:     oct==0x73 (hex:0x73 == dec:115)          ://
            //:     0x61 <= 0x73 <= 0x7A , Unknown:Ancillary ://

            const B=( 8 ); //:8 bits byte.

            let oct=(( hed_u32 >>> (3*B) ) & 0xFF );

            if( oct >= 0x61 && oct <= 0x7A ){ //:LowerCase
                chu_key=( 0 - 1 ); //:Unknown:Ancillary
            }else
            if( oct >= 0x41 && oct <= 0x51 ){ //:UpperCase
                chu_key=(   0   ); //:Unknown:Critical
            }else{
                throw("[WHAT_FUCKING_CASE_IS_THIS]");
            };;

        };;

        return( chu_key );
    };;

    function
    gep_ALG_png_bin_CTO_png_sob(
        png_bin //:ARG_INN
    ,   png_nob //:ARG_INN
                
    ,   png_sob //:ARG_OUT
    )
    { "use strict"

        let o_k=( 1 ); //:Okay unless error happens.

        console.log("[TODO:GEP_png_bin_CTO_png_sob]");

        if( o_k > 0 ){
            //:Store[ png_bin ]&[ png_nob ]in[ png_sob ]:
            png_sob.png_bin=( png_bin );
            png_sob.png_nob=( png_nob );

            //:Make sure png header exists:
            let png_hed=(0); //:Has png headers?
            png_hed = gep_ALG_png_sob_CHK_png_hed( png_sob );
            if( !(png_hed>0) ){
                png_sob.has_err=( 1 );
                png_sob.msg_err=("[NO_PNG_HEADER]");
                o_k=( 0 );
            }else{
                o_k=( 1 );
            };;
        };;

        //: Do a first pass where we check for the chunks    ://
        //: we are going to support. If we see a pallet      ://
        //: chunk, we are going to have to abort, since I    ://
        //: don't want to figure out palletized color right  ://
        //: at this moment.                                  ://
        if( o_k > 0 ){ //:--------------:CHUNK_ROLL_CALL_SCAN://
        
            //: Before figuring out how we are going to      ://
            //: break up the binary data, let's just get a   ://
            //: tally of how many of the different chunk     ://
            //: types there are in a first pass.             ://

            let num_IHDR=( 0 ); 
            let num_IDAT=( 0 );
            let num_IEND=( 0 );
            let num_PLTE=( 0 );
            
            let num_DROP=( 0 ); //:Dropped   non-critical chunks 
            let num_CRIT=( 0 ); //:Un-recognized critical chunks 

            //:IHDR should immediately follow "PNG" header
            //:and help us figure out where to jump to next.

            let png_dex=(   0 );
            let png_jum=(  12 ); //:Jump_To[ IHDR ]Header

            let chu_key=(   0   ); //:Chunk_Key
            let chu_val_str=("" ); //:Chunk_Value(Code_String)
            let chu_val_u32=("" ); //:Chunk_Value_As_Uint_32
            while( 1 ) {

                //:INCREMENT:--------------------------------://
                //: Jump to where we think the next          ://
                //: CHUNK_TYPE ascii cus(word) name header is://
                //: www.w3.org/TR/PNG/#5PNG-file-signature   ://
                                                        //:  ://
                    png_dex += png_jum;                 //:  ://
                                                        //:  ://
                //:                                     //:  ://
                //:BAILOUT_CONDITION:------------------------://
                                                        //:  ://
                    if( "IEND"==chu_val_str ){ break; };//:  ://
                                                        //:  ://
                //:------------------------------------------://

                //:IsKnownChunkHere?
                //:Return positive key index if chunk known:
                chu_key = (
                    gep_ALG_png_dex_CTO_chu_key(
                    /**/png_sob //:[ png_bin & png_nob ] 
                    ,   png_dex //:IndexToStartLookingFrom
                    )
                );;

                if( chu_key < 0 ){ //:Unknown_Non_Critical   ://
                //:NOTE: "Unknown" can mean: "I recognize "  ://
                //:"the chunk, but as a coder I am too lazy" ://
                //:"to support this feature of PNG. #YAGNI#" ://

                    //:Call uint32 subOctet function:
                    chu_val_u32=( gep_BAH_u8a_Get_u32(
                    /**/png_sob.png_bin //:ByteArray
                    ,   png_sob.png_nob //:ByteArray.length
                    ,           png_dex //:MSB index of octet
                    ));;

                    //:  convert_octet_into_a_string:     - -://
                    //:[ gep_DUM_hex_CTO_str ]is_overkill - -://
                    chu_val_str = gep_ALG_u32_CTO_cus( 
                    /**/          chu_val_u32         );;

                    let msg_log=(""
                    +   "[IGNORING:Non_Critical_Chunk]:("
                    +   chu_val_str                  +")"
                    );;

                    gep_Log_ALG( msg_log );
                }else
                if( chu_key > 0 ){ //:Known_Supported_Chunk

                    chu_val_str=(GEP_LUT_chu_kno_STR[ 
                        chu_key ]);;

                    switch( chu_val_str ){
                    case "IHDR" :{ num_IHDR++; };break;
                    case "IDAT" :{ num_IDAT++; };break;
                    case "IEND" :{ num_IEND++; };break;
                    case "PLTE" :{ num_PLTE++; };break;
                    default     :{
                        
                        throw("[Found_But_Not_Handled]");

                    };; };;

                    if(0){ /** NOOP_BREAKPOINT **/ };

                }else
                if( chu_key ==0 ){ //:Unknown_Critical_Chunk

                    //:Call uint32 subOctet function:
                    chu_val_u32=( gep_BAH_u8a_Get_u32(
                    /**/png_sob.png_bin //:ByteArray
                    ,   png_sob.png_nob //:ByteArray.length
                    ,           png_dex //:MSB index of octet
                    ));;

                    //:  convert_octet_into_a_string:     - -://
                    //:[ gep_DUM_hex_CTO_str ]is_overkill - -://
                    chu_val_str = gep_ALG_u32_CTO_cus( 
                    /**/          chu_val_u32         );;

                    let msg_err=(""
                    + "[UNKNOWN_CRITICAL_CHUNK]:("
                    + chu_val_str             +")"
                    );;
    
                    throw( msg_err );
                };;

                //:Find length of data section of current chunk:
                let dat_len_dex=( png_dex - 4 );
                let dat_len=(gep_BAH_u8a_Get_u32(
                    /**/png_sob.png_bin //:ByteArray
                    ,   png_sob.png_nob //:ByteArray.length
                    ,       dat_len_dex //:MSB index of octet
                ));;

                //:------------------------------------------://
                //:png_jum:CALC_JUMP_DISTANCE_TO_NEXT_HEADER:://
                //:------------------------------------------://
                //: In this example, data is 0 in length:    ://
                //: |LEN_U32|   |HEADER |  | DATA | |  CRC  |://
                //: |.|.|.|.|   |0|1|2|3|  |......| |4|5|6|7|://
                //: |8|9|A|B|    |                           ://
                //:        |  png_dex==(0)                   ://
                //:        |                                 ://
                //:     png_jum==(12)                        ://
                png_jum=(0
                +        4 //:Jump_Over:CURRENT[header]:EX:IHDR
                           //:Now on first byte of data_segment 

                +  dat_len //:Jump_Over:data_segment
                           //:dat_len==0 means no data_segment.
                           //:Now on first byte of[ CRC ].

                +        4 //:Jump_Over:CRC
                           //:Now on next chunk's LEN_U32

                +        4 //:Jump_Over:LEN_U32
                           //:Now on: NEXT[header]:EX:IDAT

                );;//:-----:CALC_JUMP_DISTANCE_TO_NEXT_HEADER://

                if(0){ /** NOOP_BREAKPOINT:ATLANTIS **/ };

            };; //:NEXT[ png_dex ]:--------------------------://

            png_sob.num_IHDR=( num_IHDR );
            png_sob.num_IDAT=( num_IDAT );
            png_sob.num_IEND=( num_IEND );
            png_sob.num_PLTE=( num_PLTE );

        };; //:-------------------------:CHUNK_ROLL_CALL_SCAN://

        //:Extract_Chunks by reading png headers:
        throw("[TODO:The_Rest]");

    };;
//:==================:ALG_:ALGorithm_main_algorithm_functions://
//:PUB_:Public_API_Functions:================================://

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

//:================================:PUB_:Public_API_Functions://
//:TES_: Test_Related_Functions:=============================://

    function
    gep_TES_Put_Tes_Dat(
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

    let I=GEP_C99_AOF( gep_DUM_Str_CTO_Hex_002 );


    GEP_PNG_BIN=( GEP_C99_AOV( GEP_PNG_001 )       );
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
        if( GEP_MAC_LOG > 0 ){ gep_Log("[PNG_001:LOADED]"); };
    };;

    //://////////////////////////////////////////////////////://

    GEP_PNG_BIN=( GEP_C99_AOV( GEP_PNG_002 )       );
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
        if( GEP_MAC_LOG > 0 ){ gep_Log("[PNG_002:LOADED]"); };
    };;

    };; //://////////////////////////:[ gep_TES_Put_Tes_Dat ]://

    //: - - - - - - - - - - - - ---- - - - - - - - - - - - - ://
    function
    gep_TES_Hex_Dum( 
        /** void **/ 
    )
    { "use strict"

        //:-----------:1234567890123456:---://
        let hex_dum=( "0123456789ABCDEF" );
        let hex_new=( "----------------" );

        let car_poi=GEP_C99_AOS( hex_dum );
        let car_len=( 16 );

        let png_len=( car_len / 2 );
        let png_bin=GEP_C99_Mal_Arr_Chr( png_len );
        let png_pos=( 0 ); //:Fill from start of array.

        //:Convert hex dump string to byte array:
        gep_DUM_Str_CTO_Hex_001(
            png_bin //: POINTER:PNG_HEX_DUMP
        ,   png_len //: png_bin.length
        ,   png_pos //: Seek_Position_In:png_bin

        ,   car_poi //: String_Of_Hex_Codes
        ,   car_len //: car_poi.length
        );;
        
        //:Convert byte array back into hex dump string:
        //:[HACK]:Characters are not passed by reference
        //:       in javascript, so you need to take the
        //:       return value here!
        car_poi=GEP_C99_AOS( hex_new );
        car_len=( 16 );
        car_poi=gep_DUM_hex_CTO_str(
                png_bin //: POINTER:PNG_HEX_DUMP
            ,   png_len //: png_bin.length

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
            gep_Log("[Hex_Dump_Test_Passed]");
        };;

        GEP_C99_Fre_Arr_Chr( png_bin ); //:FREE_MEMORY

    };; //:--------------------------------:[gep_TES_Hex_Dum]://

    //: - - - - - - - - - - - - ---- - - - - - - - - - - - - ://
    function
    gep_TES_png_bin_CTO_png_sob( 
        /** void **/
    )
    { "use strict"

        //:https://www.w3.org/TR/PNG/#5PNG-file-signature
        //: DEC: "137 80 78 71    13 10 26 10"  : ---------- ://
        //: HEX:  "89 50 4e 47    0d 0a 1a 0a"  : ---------- ://

        let hex_dum=("" //:01.PNG's hex dump. -------------- ://
        //:     controll_codes_as_part_of_png_signature      ://
        //:                      |                           ://
        //:                  +---+---+                       ://
        //:  ?? Pp Nn Gg    /         \     :    : --------- ://
        +   "89 50 4e 47    0d 0a 1a 0a"  //: 01 ://
        //:                               //: -- ://
        //: len: IHDR's data section length, 13 bytes. (0d)
        //: |<-- len -->|                 //: -- ://
        //:  -- -- -- --    Ii Hh Dd Rr   //: -- ://
        +   "00 00 00 0d    49 48 44 52"  //: 02 ://
        //:                               //: -- ://
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
        var png_nob = gep_DUM_hex_dum_CTO_png_nob( hex_dum );
        if( png_nob != exp_nob ){
            throw("[Not_The_Number_Of_Bytes_I_Expected]");
        };;

        //:Allocated number of bytes:
        let png_bin=( new Uint8Array( png_nob ) );

        //:Internally_Uses:GEP_Str_CTO_Hex
        gep_DUM_hex_dum_CTO_png_bin(
            hex_dum              //:ARG_INN
        ,   png_nob              //:ARG_INN

        ,   png_bin              //:ARG_OUT
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

        gep_ALG_png_bin_CTO_png_sob( 
            png_bin //:ARG_INN
        ,   png_nob //:ARG_INN
        
        ,   png_sob //:ARG_OUT
        );;

    };;
    //: - - - - - - - - - - - - ---- - - - - - - - - - - - - ://
    function
    gep_TES_D00_LUT_chu_kno_Chk(
        /** void **/
    )
    { "use strict"
    //: GEP_LUT_chu_kno_STR : String       version of table.
    //: GEP_LUT_chu_kno_OCT : Octet (byte) version of table.

        //#hex_to_str#//#hexToStr#HexToStr#//#hexdumptostring#//

        const M_I=( GEP_LUT_chu_kno_MAC );
        let    i =( 0 );
        let   cus=( "");
        let   u32=(0x0);

        //:Convert[ STR => OCT ]CHECK[ GEP_LUT_chu_kno_OCT ]
        for( i = 1; i <= M_I; i++ ){
                cus  =(  GEP_LUT_chu_kno_STR[ i ] );
                u32  =(  gep_ALG_cus_CTO_u32(cus) );
            if( u32 !=   GEP_LUT_chu_kno_OCT[ i ] ){
                throw("[chu_kno_Chk:FAIL:A]");
            }else{
                gep_Log_TES_D00("[STR=>OCT:u32]:" + u32);
            };;
        };;
        //:Convert[ OCT => STR ]CHECK[ GEP_LUT_chu_kno_STR ]
        for( i = 1; i <= M_I; i++ ){
                u32  =(  GEP_LUT_chu_kno_OCT[ i ] );
                cus  =(  gep_ALG_u32_CTO_cus(u32) );
            if( cus !=   GEP_LUT_chu_kno_STR[ i ] ){
                throw("[chu_kno_Chk:FAIL:B]");
            }else{
                gep_Log_TES_D00("[OCT=>STR:cus]:" + cus );
            };;
        };;

        gep_Log("[gep_TES_D00_LUT_chu_kno_Chk:PASS]");
        return( undefined ); //:Test_Passed://
    };;
    //: - - - - - - - - - - - - ---- - - - - - - - - - - - - ://
    function
    gep_TES_All( 
        /** void **/
    )
    { "use strict"

        //:FUNCTION_SUMMARY: run_all_test_code:

        //:TES_D00: Tests with zero dependencies on other tests.
        gep_TES_D00_LUT_chu_kno_Chk();

        gep_TES_Put_Tes_Dat();
        gep_TES_Hex_Dum();

        //: Must be AFTER:gep_TES_Hex_Dum()          - - - - ://
        //: Because our png binary ( png_bin ) is    - - - - ://
        //: encoded as a long text string known as   - - - - ://
        //: a [ text/hex dump ].                     - - - - ://
        gep_TES_png_bin_CTO_png_sob();

        ((GEP_GSF_tes_ran)++);
    };;

//:=============================:TES_: Test_Related_Functions://
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
                gep_TES_All( );
        };;};;

        (GEP_GSF_was_ini)++; //:was_initialized?
    };;

    //:AUTO_INIT: ------------------------------------------ ://

        if( GEP_MAC_JAS > 0 ){
        //:Current platform is javascript:
        
            GEP_INI_Main();
        
        };;
        if( GEP_MAC_C99 > 0 ){
        //:Current platform is C99
        
            throw("[GEP_ERR:THIS_IS_NOT_C99_CODE]");
        
        };;
        
    //: ------------------------------------------ :AUTO_INIT://
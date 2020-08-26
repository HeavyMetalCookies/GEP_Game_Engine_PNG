//:==========================================================://
//:C99._: C99 Polyfills                               (BELOW)://
//:----------------------------------------------------------://

    //:CP:C99_Polyfills:(BELOW):-----------------------------://
    //:CPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCP://
    //:                                                      ://
    //: Functions below will help converting to C code       ://
    //: easier by helping you understand the intended        ://
    //: usage of a variable. For example, is the variable    ://
    //: a "reference/pointer" type or a "value/non-pointer" ?://
    //:                                                      ://
    //:CPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCP://


        //:Get length of string NOT including null terminator.
        const GEP_Str_Len=function( hex_dum ){ "use strict"

            if( typeof( hex_dum ) != "string" ){
                throw("[Bad_Input]");
            };;

            let str_len=( hex_dum.length );
            return( str_len );
        };;

        //|FFFFFFFFFFFFFFF[ FUNCTION_DIVIDER ]FFFFFFFFFFFFFFF|//

        //:Value Array Function.                         :---://
        //:If converting this code to C99, places where  :---://
        //:"VAL_ARR" are used can be replaced with a     :---://
        //:stack allocated  char array.                  :---://
        //:                                              :---://
        //:     JS:  let   str_buf=VAL_ARR( 2 )          :---://
        //:    C99:  char  str_buf[ 2 ]={0};             :---://
        const GEP_VAL_ARR=function( len ){ "use strict"
        "use strict"

            let     val_arr =( new Uint8Array( len ) );
            return( val_arr );

        };;

        //|FFFFFFFFFFFFFFF[ FUNCTION_DIVIDER ]FFFFFFFFFFFFFFF|//

        //:Value Array: Of CHaRacters:
        //: JS: let   arr = GEP_VAL_ARR_CHR( len );
        //:C99: char  arr[ 9 /**len**/ ] ={ 0 };
        const GEP_VAL_ARR_CHR=function( len ){ "use strict"
        "use strict"

            let val_arr = new Array( len );
            for( let i = 0; i < len; i++ ){
                val_arr[ i ]=( "" );
            };;

            return( val_arr );
        };;

        //|FFFFFFFFFFFFFFF[ FUNCTION_DIVIDER ]FFFFFFFFFFFFFFF|//

        //:Pointer Array: Of CHaRacters:
        //:When converting to C99, these are malloc calls.
        //: JS: let   arr = GEP_POI_ARR_CHR( len );
        //:C99: char* arr = malloc( sizeof(char) * len );
        const GEP_POI_ARR_CHR=function( len ){ "use strict"

            let poi_arr = new Array( len );
            for( let i = 0; i < len; i++ ){
                poi_arr[ i ]=( "" );
            };;

            return( poi_arr );
        };;

        //:When declaring a char* who's values in the        ://
        //:javascript are going to be interpreted as         ://
        //:integers and not string.                          ://
        const GEP_POI_ARR_BYT=function( len ){ "use strict"

            let poi_arr = new Uint8Array( len );
            for( let i = 0; i < len; i++ ){
                poi_arr[ i ]=( 0 );
            };;

            return( poi_arr );
        };;

        //:We are working with bytes in this code, not       ://
        //:integers. So you likely want a char*              ://
        //:(Character Array), not a int* (integer array ).   ://
        const GEP_POI_ARR_INT=function( len ){ "use strict"

            throw("[YOU_WANT:GEP_POI_ARR_[CHR|BYT]]");
    
        };;

        //|FFFFFFFFFFFFFFF[ FUNCTION_DIVIDER ]FFFFFFFFFFFFFFF|//

        //:AOF:Address_Of_Function
        //:
        //:  JS:  let I = GEP_AOF( GEP_Str_CTO_Hex_002 );
        //:
        //: C99:  typedef void (*PFN)(void);
        //:       let I =   &( GEP_Str_CTO_Hex_002 );
        //:
        const GEP_AOF=function( fun ){ "use strict"
            return( fun );
        };;

        //|FFFFFFFFFFFFFFF[ FUNCTION_DIVIDER ]FFFFFFFFFFFFFFF|//

        //:AOV:Address_Of_Variable:                        :-://
        //:    Use when taking address of a non-function.  :-://
        //:                                                :-://
        //:    JS: let  poi_int = GEP_AOV( val_int );      :-://
        //:   C99: int* poi_int =       &( val_int );      :-://
        const GEP_AOV=function( naf_var ){
            return( naf_var );
        };;

        const GEP_POI=function( any_var ){
            throw("[USE:GEP_AOF|GEP_AOV]");
        };;

        //|FFFFFFFFFFFFFFF[ FUNCTION_DIVIDER ]FFFFFFFFFFFFFFF|//

        //:HACK:splits the string into a character array,
        //:     but use this to denote where &( str_var )
        //:     should be used in C code.
        const GEP_AOS=function( str_var ){

            let arr_chr=str_var.split("");
            return( arr_chr );
        };;

        //|FFFFFFFFFFFFFFF[ FUNCTION_DIVIDER ]FFFFFFFFFFFFFFF|//

        //:UND:UNDefine
        //:When converting to C99 code, this should be
        //:replaced by #undef directives.
        //:
        //:     JS: GEP_UND( MAC_ANY )
        //:    C99: #undef   MAC_ANY
        //:
        const GEP_UND=function( mac ){
            if( !mac ){ 
                if( mac >= 0 || mac <= 0 ){
                    //:False alarm. Falsy integer.
                }else{
                    throw("[GEP:It_Doesnt_Exist]");
                };;
            };;
        };;

        //|FFFFFFFFFFFFFFF[ FUNCTION_DIVIDER ]FFFFFFFFFFFFFFF|//

            //:Replace this function with a simple cast in C99.
            //:[ char ] type used for ascii are just [ int ](s).
            const GEP_asc_CTO_int =function( chr_asc ){

                if( chr_asc.length != 1 ){
                    throw("[GEP:not_a_single_character]");
                };;

                let int_asc=( chr_asc.charCodeAt( 0 ) );
                return( int_asc );
            };;

            //|FFFFFFFFFFFFF[ FUNCTION_DIVIDER ]FFFFFFFFFFFFF|//

            const GEP_int_CTO_asc =function( int_asc ){

                let chr_asc=( String.fromCharCode( int_asc ) );
                return( chr_asc );

            };;

        //|FFFFFFFFFFFFFFF[ FUNCTION_DIVIDER ]FFFFFFFFFFFFFFF|//


            //:MT:Member_Types:(BELOW):----------------------://
            //:MTMTMTMTMTMTMTMTMTMTMTMTMTMTMTMTMTMTMTMTMTMTMT://

            //:Used to denote type information in
            //:structs since javascript is loosly typed.
            //:The odd numbers are just bogus values to
            //:simulated the undefined behavior of using
            //:un-initialized values.

            const POI_Signed_Short  = function(){
                return( 1118888 /** Uninited_Pointer **/ );
            };;
            const POI_Unsigned_Char = function(){ 
            "use strict"
                return( 1212121 /** Uninited_Pointer **/ );
            };;
            const VAL_Unsigned_Long = function(){ 
            "use strict"
                return( 1843412 /** Uninited_Value   **/ );
            };;
            const VAL_Unsigned_Int = function(){
                return( 9001    /** Uninited_Value   **/ ); 
            };;
            const VAL_Int = function(){ 
            "use strict"
                return( 9482242 /** Uninited_Value   **/ );
            };;
            const VAL_Jum_Buf = function(){
                return( 6435442 /** Uninited_Value   **/ );
            };;

            //:MTMTMTMTMTMTMTMTMTMTMTMTMTMTMTMTMTMTMTMTMTMTMT://

            const MEM_UnsignedCharPointer = function(){
                return( 111000222 /** Uninited_Pointer **/ );
            };;
            const MEM_UnsignedLongPointer = function(){
                return( 333000444 /** Uninited_Pointer **/ );
            };;
            const MEM_ConstUnsignedCharPointer = function(){
                return( 555000666 /** Uninited_Pointer **/ );
            };;
            //:MTMTMTMTMTMTMTMTMTMTMTMTMTMTMTMTMTMTMTMTMTMTMT://

        //|FFFFFFFFFFFFFFF[ FUNCTION_DIVIDER ]FFFFFFFFFFFFFFF|//


            //:Stack allocated arrays:
            //://////////////////////////////////////////////://

                //:Declare a stack allocated array variable  ://
                //:at file scope or within a function.       ://
                //:Can also use when declaring a             ://
                //:value-member of struct.                   ://
                //:                                          ://
                //:CAREFUL!! "arrays" (arr) are pointers,    ://
                //:so the naming convention is a bit         ://
                //:confusing here with "VAL_*" denoting a    ://
                //:value type and "arr_" denoting a pointer  ://
                //:type.                                     ://
                const GEP_VAL_arr_sho=function( 
                    num_elm 
                ){ "use strict"
                    let arr_sho=( new Uint16Array( num_elm ) );
                    return( arr_sho );
                };;

            //://////////////////////////////////////////////://

    //:CPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCP://
    //:CP:C99_Polyfills:(ABOVE):-----------------------------://

//:----------------------------------------------------------://
//:C99._: C99 Polyfills                               (ABOVE)://
//:==========================================================://
    //:______________________________________________________://
    //:GEP: Game_Engine_PNG:                                 ://
    //:     Just enough code to convert between PNG format   ://
    //:     and [ OpenGL | Vulkan | HTML5Canvas ] friendly   ://
    //:     array of RGBA bytes. Written in JavaScript in    ://
    //:     a simple C-style. Functions are declared         ://
    //:     a constant expressions so that they are in       ://
    //:     proper C99 ordering where no forward             ://
    //:     declarations are needed.                         ://
    //:______________________________________________________://
//:==========================================================://
//:CAM._ : Constants_And_Macros                       (BELOW)://
//:----------------------------------------------------------://

//:Constants_And_Macros:

    const GEP_MAC_DEB=( 1 ); //:IF: >= 1, debug mode is on.
    const GEP_MAC_LOG=( 1 ); //:IF: >= 1, logging    is on.

    const GEP_MAC_JAS=( 1 ); //:This_Is_JavaScript_Code
    const GEP_MAC_C99=( 0 ); //:This_Is____NOT_C99_Code

    let   GEP_TES_RAN=( 0 ); //:Unit_Tests_Have_Been_Ran
                             //:At_Leas_Once?

    //:FUNCTION_INDEX:
    //:     [#]: C99_Polyfills
    //:     [#]: File_Scope_Variables
    
    //://////////////////////////////////////////////////////://
    //:[ CDIE : Constants_Defines_And_Informal_Enumerations ]://

        //: VIT: Variable_Integer_Tags (S_Types)
            const VIT_GPC_SOB     =( 1 );
            const VIT_GPC_HUF     =( 2 );
            const VIT_GPC_ARG_PUF =( 3 );


    //:[ CDIE : Constants_Defines_And_Informal_Enumerations ]://
    //://////////////////////////////////////////////////////://

//:----------------------------------------------------------://
//:CAM._ : Constants_And_Macros                       (ABOVE)://
//:==========================================================://
//:==========================================================://
//:FIL._: File Scope Variables: ALL.                  (BELOW)://
//:----------------------------------------------------------://

        //: Global state variables for loading bytes         ://
        //: into [ GEP_PNG_### ] Test data variable.         ://
        //: This is a bit akward and overly procedural way   ://
        //: to do it, but it helps save column space in      ://
        //: the [ GEP_Put_Tes_Dat ] function.                ://



        let GEP_PNG_POI = null; //:Pointer_To_PNG_Byte_Array
        let GEP_PNG_LEN =( 0 ); //:NumElementIn:GEP_PNG_POI
        let GEP_PNG_POS =( 0 ); //:Rest on un-filled byte.
        let GEP_CAR_POI = null; //:HexDumpStringBeingLoaded
        let GEP_CAR_LEN =( 0 ); //:NumElementIn:GEP_CAR_POI



        //:BA:Byte_Arrays:(BELOW):---------------------------://
        //:BABABABABABABABABABABABABABABABABABABABABABABABABA://
        //: Byte_Arrays_Representing_Bytes_Of_PNG_File.      ://
        //: The bits within these arrays should match the    ://
        //: file contents of the [ ##.PNG ] files in         ://
        //: [ GET / TES_DAT /. ] exactly. Because file-IO    ://
        //: is a pain in the ass with JavaScript and I want  ://
        //: to be able to run this code locally without      ://
        //: a server, we create the byte arrays by           ://
        //: doing a hex-dump of the png files on a gitbash   ://
        //: command line using:                              ://
        //:                                                  ://
        //: [ xxd -c 8 -g 1 "01.PNG" ]                       ://
        //:                                                  ://
        //: We then paste the results into the source code   ://
        //: (this file) as string literals and then use      ://
        //: code to transform it back into a byte array.     ://
        //:BABABABABABABABABABABABABABABABABABABABABABABABABA://

        //: [ 8 * 20: 160 ][ 160 - 4 == 156 ]
        //: [ 8 * 15: 120 ][ 120 - 1 == 119 ]
        const   GEP_PNG_001_LEN_MAC=( 156 ); //:PNG.01
        const   GEP_PNG_002_LEN_MAC=( 119 ); //:PNG.02

        let GEP_PNG_001 = GEP_VAL_ARR( GEP_PNG_001_LEN_MAC ); 
        let GEP_PNG_002 = GEP_VAL_ARR( GEP_PNG_002_LEN_MAC );  

        //:BABABABABABABABABABABABABABABABABABABABABABABABABA://


//:----------------------------------------------------------://
//:FIL._: File Scope Variables: ALL.                  (ABOVE)://
//:==========================================================://
//:==========================================================://
//:TAC._ : Types_About_Comment                        (BELOW)://
//:----------------------------------------------------------://

//:T_0: Types with zero dependencies:
//:T_1: Types that depend on T_0
//:T_2: Types that depend on T_2
//:T_3: Types that depend on T_3
//:T_4: ETC.

//:     Done this way so we don't have to worry about
//:     dependency management and can also quickly see
//:     how abstract a given type is.

//:----------------------------------------------------------://
//:TAC._ : Types_About_Comment                        (ABOVE)://
//:==========================================================://




//:Variable_Type_Tags:
//:CLASS_ID is bit shifted to MSB so that as long as there
//:are less than 0xFFFF types NOT of this dependency scheme,
//:we will not see collisions with the VIT numbers.
    //:.....................(CLASS_ID)   (   T_#  )
    const VIT_GEP_png_obj=( ( 1 << 16) | ( 0 << 0 ) );

//:T_0:Class_Chronological_Order[ 1 ]:(BELOW):---------------://
//:1111111111111111111111111111111111111111111111111111111111://

const GEP_NEW_png_obj=function(/*void*/){"use strict"

    let STRUCT_png_obj={

        vit : 0 //:VIT_GEP_png_obj

    ,   wid : 0 //:Width__In_Pixels
    ,   hig : 0 //:Height_In_Pixels

    //: An array of bytes representing the PNG data
    //: we are parsing.
    ,   buf_poi : null //:Buffer:Pointer (Array_Of_Bytes)
    ,   buf_nob :  0   //:Buffer:Number_Of_Bytes

    };;

    //:Create light-weight javascript object without
    //:all of that prototype nonsense inside of it.
    let png_obj=Object.create( null        );
    Object.assign( png_obj, STRUCT_png_obj );
    Object.seal(  png_obj                  );
    return(       png_obj                  );

};;
const GEP_VAL_png_obj=function(/*void*/){"use strict"
    let png_obj=( GEP_NEW_png_obj() );
    return( png_obj );
};;
const GEP_INI_png_obj=function( png_obj ){ "use strict" 

    png_obj.vit=( VIT_GEP_png_obj );
    png_obj.wid=( 0 );
    png_obj.hig=( 0 );
    png_obj.buf_poi=( null );
    png_obj.buf_nob=(  0   );

};;

//:1111111111111111111111111111111111111111111111111111111111://
//:==========================================================://
//:LOG._: Logging Functions                           (BELOW)://
//:----------------------------------------------------------://

    const GEP_Log =function( msg_log ){ "use strict"

        console.log("[GEP_Log]:(" + msg_log + ")" );
    };;

//:----------------------------------------------------------://
//:LOG._: Logging Functions                           (ABOVE)://
//:==========================================================://
//:==========================================================://
//:ASC._: Ascii Related Functions                     (BELOW)://
//:----------------------------------------------------------://
/** INDEX: ************************************************* **/
/**-********************************************************-***

    [1]: GEP_asc_ISA_hec: Is character valid hex character?

    [2]: GEP_hec_ISA_asc: Inverse Of GEP_asc_ISA_hec

    [3]: GEP_hec_CTO_heb: EXAMPLE: "FF" --> 255

    [4]: GEP_heb_CTO_hec: EXAMPLE: 255  --> "FF"

    [5]: GEP_asc_ISA_emp: Is ascii a whitespace character?

    [6]: GEP_asc_ISA_bad: Is acii invalid as hexidecimal char?

***-********************************************************-**/
/** CALL_SITES: ******************************************** **/
/**-********************************************************-***

    GEP_asc_ISA_hec:
        [1]: GEP_hex_dum_CTO_png_nob
        [2]: GEP_hec_CTO_heb

    GEP_hec_ISA_asc:
        [1]: GEP_heb_CTO_hec

    GEP_hec_CTO_heb:
        [1]: GEP_Str_CTO_Hex_001

    GEP_heb_CTO_hec:
        [1]: GEP_Hex_CTO_Str

***-********************************************************-**/
//:FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF://
//: ----------------- ( FUNCTION_DIVIDER ) ----------------- ://
//:FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF://
    
    const GEP_asc_ISA_hec =function( 
        chr_asc  //: C99[ char* chr_asc ]
    ){ "use strict"

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

        var int_asc = GEP_asc_CTO_int( chr_asc );
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

    //:FFFFFFFFFFFFFFFFF[ FUNCTION_DIVIDER ]FFFFFFFFFFFFFFFFF://
   
    const GEP_hec_ISA_asc = function(
        int_hec //:Integer_Hexadecimal_Code, 0-to-15
    ){

        if(!(int_hec >= 0 && int_hec < 16) ){
            throw("[GEP_ERR:OOB:hec_ISA_asc]");
        };;

        //:#OFFSET_INPUT_INTO_ASCII_RANGE#://
        let int_asc=( 0 );
        let chr_asc ="";

        if( int_hec >=  0 && int_hec <= 9 ){
            int_asc=( (int_hec -  0) + 48 );
            chr_asc=( GEP_int_CTO_asc( int_asc ) );
        }else
        if( int_hec >= 10 && int_hec < 16 ){
            int_asc=( (int_hec - 10) + 65 );
            chr_asc=( GEP_int_CTO_asc( int_asc ) );
        }else{
            chr_asc=(""); //:Empty_String_Means_False
        };;
         
        return( chr_asc /** isa_asc **/ );
    };;

//:FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF://
//: ----------------- ( FUNCTION_DIVIDER ) ----------------- ://
//:FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF://
 
    const GEP_hec_CTO_heb =function( 
              hec //: C99[ char hec[ 2 ] ]
    ){ "use strict"

        if( GEP_MAC_JAS > 0 ){
            if( hec.length != 2 ){ throw("[EXP:2_CHARS]");};

            //:#HEC_ROUGH_TYPE_CHECK#://
            if( typeof(hec) != "string"
            &&  (!Array.isArray( hec ))
            ){
                throw("[hec_bad_type]");
            };;
        };;

        let big=( GEP_asc_ISA_hec( hec[ 0 ] ) );
        let lit=( GEP_asc_ISA_hec( hec[ 1 ] ) );
        let heb=(  ( big * 16 )+( lit *  1 )  );

        if( /** #if **/ GEP_MAC_DEB > 0 ){ //:///////////////://

            if(!( heb >= 0x00 && heb <= 0xFF ) ){
                throw("[GEP_ERR:Not_Valid_Byte_Value]");
            };;

        };; //:[ #endif ]////////////////////////////////////://
            
        return( heb );
    };;

    //:FFFFFFFFFFFFFFFFF[ FUNCTION_DIVIDER ]FFFFFFFFFFFFFFFFF://

    const GEP_heb_CTO_hec =function(
          val_heb //:HexByte:PassedBy:VALUE
    ,     poi_hec //:HexChar:PassedBy:POINTER (AKA:car_bu2)
    ){ "use strict"

        if(!( val_heb >= 0x00 && val_heb <= 0xFF ) ){
            throw("[INPUT_VALUE_OUTSIDE_OF_BYTE_RANGE]");
        };;

        let lit=(  val_heb      % 16 ); //: 1's place.
        let big=( (val_heb-lit) / 16 ); //:16's place.

        //:Inverse_Of[ GEP_asc_CTO_int ]
        poi_hec[ 0 ]=GEP_hec_ISA_asc( big );
        poi_hec[ 1 ]=GEP_hec_ISA_asc( lit );

    };;
        
//:FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF://
//: ----------------- ( FUNCTION_DIVIDER ) ----------------- ://
//:FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF://

    //:Is[ asc / ascii ]an[ emp / empty ]character?
    const GEP_asc_ISA_emp = function( cur_chr ){
    "use strict"

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

    //:FFFFFFFFFFFFFFFFF[ FUNCTION_DIVIDER ]FFFFFFFFFFFFFFFFF://

    //:Explicitly Disallowed in hex dump strings:
    //:Does NOT mean that if returns 0 the character 
    //:is allowed, but a good sign it is allowed.
    const GEP_asc_ISA_bad = function( cur_chr ){
    "use strict"
    
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

//:FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF://
//: ----------------- ( FUNCTION_DIVIDER ) ----------------- ://
//:FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF://


/** EXTENDED_INDEX ***************************************** **/
/**-********************************************************-***

    GEP_asc_ISA_hec:

    Is_ASCii_letter_a_HExadecimal_Character
    Inverse_Of[ GEP_hec_ISA_asc ]
    Returns NON-negative if true.
    And returns the decimal value of [ chr_asc ] so we
    can re-use this function for conversion.

    ------------------------------------------------------------

    GEP_hec_ISA_asc:

    Inverse_Of[ GEP_asc_ISA_hec ]:
    Written in a way that it both check for truth and
    does conversion all in one function.

    ------------------------------------------------------------

    GEP_hec_CTO_heb:

    HExCharacter_ConvertTO_HExByte
    Inserse_Of[ GEP_heb_CTO_hec ]

    [hec] might be better stated as [hes] since [hec] is
    two ascii characters put together to create a serialized
    form of a byte. But keep [hec], we know what it means.

    ------------------------------------------------------------

    GEP_heb_CTO_hec:

    HExByte_ConvertTO_HExCharacter:
    Inverse_Of[ GEP_hec_CTO_heb ]

    Converts an integer value in range [ 0 - 255 ]
    to the 2-letter ascii byte representation.
    Use this to serialize a binary file into a 
    text-based hex dump.
 

***-********************************************************-**/
/** FILE_COMMENT_DUMP ************************************** **/
/**-********************************************************-***

    To reduce clutter, comments in source may be ripped out
    from the code and replaced by tags that redirect to here.


    #OFFSET_INPUT_INTO_ASCII_RANGE#
    Before converting to string (asc/ascii)
    We need to offset the integer into 
    the ascii range of charters "0" -to- "9"
    Or the range "A" -to- "F" depending.

    #HEC_ROUGH_TYPE_CHECK#
    Not sure is "hec" is an array or string in
    this code. And haven't made up my mind in
    this moment which it should be. But should
    be at least one of those.

***-********************************************************-**/
//:----------------------------------------------------------://
//:ASC._: Ascii Related Functions                     (ABOVE)://
//:==========================================================://
//:==========================================================://
//:DUM._: Hex_Dump_Conversion_Functions               (BELOW)://
//:----------------------------------------------------------://
/** INDEX: ************************************************* **/
/**-********************************************************-***

    [1]: GEP_hex_dum_CTO_png_nob : Get Expected Number Of Bytes
    [2]: GEP_Str_CTO_Hex_001     : #HDS# --> #HBA#
    [3]: GEP_Str_CTO_Hex_002     : Static version for testing.
    [4]: GEP_hex_dum_CTO_png_bin : GEP_Str_CTO_Hex_001 Wraper
    [5]: GEP_Hex_CTO_Str         : GEP_Str_CTO_Hex_001 Inverse
    [6]: GEP_Hex_CTO_Str_UNSAFE  : Dangerous, Breaks: #MOC#
    
***-********************************************************-**/
/** CALL_SITES: ******************************************** **/
/**-********************************************************-***

    TODO

***-********************************************************-**/
//:FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF://
//: ----------------- ( FUNCTION_DIVIDER ) ----------------- ://
//:FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF://

    //:Scan over a hex dump string and figure out how 
    //:many bytes should result after being parsed.
    //:GEP_Str_CTO_Nob==GEP_hex_dum_CTO_png_nob
    const GEP_hex_dum_CTO_png_nob = function( hex_dum ){
    "use strict"

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
        let str_len=( GEP_Str_Len( hex_dum ) );
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
                isa_hec=( GEP_asc_ISA_hec( cur_chr )  ); //:SAME

            }else{

                isa_hec=( GEP_asc_ISA_hec( cur_chr )  ); //:SAME

            };;

            //:Zero included because the returned result
            //:is actually the ascii decimal value of the
            //:inputted string.
            if( isa_hec >= 0 ){ 
                ((dig_sum)++);
            };;

            //:- - - - - - - - - - - -- - - - - - - - - - - -://

            isa_emp=( GEP_asc_ISA_emp( cur_chr )  );
            if( isa_emp ){
                ((emp_sum)++);
            };;

            //:- - - - - - - - - - - -- - - - - - - - - - - -://

            //:EC:Error_Checking:----------------------------://
            //:ECECECECECECECECECECECECECECECECECECECECECECEC://
            isa_bad=( GEP_asc_ISA_bad( cur_chr )  );
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
    };;

//:FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF://
//: ----------------- ( FUNCTION_DIVIDER ) ----------------- ://
//:FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF://

    const GEP_Str_CTO_Hex_001 =function(
        png_poi //: POINTER:PNG_HEX_DUMP
    ,   png_len //: png_poi.length
    ,   png_pos //: Seek_Position_In:png_poi

    ,   car_poi //: String_Of_Hex_Codes
    ,   car_len //: car_poi.length
    
    ){ "use strict"

        //:Convention:
        //:png_pos & car_pos rest on the first empty slot.

        let car_pos=(                0 ); //:Character_Position
        let car_bu2=GEP_VAL_ARR_CHR( 2 ); //:Character_Buffer
        let bu2_pos=(                0 ); //:car_bu2's Position
        let chr    =(                ""); //:Current_Character

        let isa_hec=( 0 - 1 ); //:False_If_Negative

        //:Move through string until all hex codes loaded:
        car_pos=( 0 - 1 );//:#ELE_IOT#
        while( 1 ){

            car_pos++;
            if( car_pos >= car_len ){ break; };

            chr=( car_poi[ car_pos ] );
            isa_hec=( GEP_asc_ISA_hec( chr )  );
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
                let heb = GEP_hec_CTO_heb( car_bu2 /* hec */ );

                //:Load byte into png_poi
                png_poi[ png_pos ]=( heb );
                png_pos++;

                bu2_pos=( 0 ); //:rests_on_first_empty_slot
            };;

        };;
        return( png_pos );
    };;

//:FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF://
//: ----------------- ( FUNCTION_DIVIDER ) ----------------- ://
//:FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF://

    const GEP_Str_CTO_Hex_002 =function( car_poi ){

        //:Example car_poi:( "89 50 4e 47    0d 0a 1a 0a" )
        GEP_CAR_POI=( car_poi     );
        GEP_CAR_LEN=( GEP_CAR_LEN );

        let png_pos=(
            GEP_Str_CTO_Hex_001(
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

    //:FFFFFFFFFFFFFFFFF[ FUNCTION_DIVIDER ]FFFFFFFFFFFFFFFFF://

    const GEP_hex_dum_CTO_png_bin =function(
            hex_dum   //:ARG_INN
        ,   png_bin   //:ARG_OUT
    ){

        //: Originally we provided[ png_nob ]as input,
        //: but found it confusing to read. Now you need to
        //: be more careful that[ png_bin ] is large enough.
        let png_nob = GEP_hex_dum_CTO_png_nob( hex_dum );
        let hex_nob=( GEP_Str_Len( hex_dum ) );

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
        //:GEP_Str_CTO_Hex_001, but stuck with it now.
        GEP_Str_CTO_Hex_001(
            png_bin, png_nob, 0 //:ARG_OUT
        ,   hex_dum, hex_nob    //:ARG_INN
        );;

    };;

//:FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF://
//: ----------------- ( FUNCTION_DIVIDER ) ----------------- ://
//:FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF://

    const GEP_Hex_CTO_Str =function(
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
        let car_bu2=GEP_VAL_ARR_CHR( 2 );

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
            GEP_heb_CTO_hec( 
                png_poi[ png_pos ] //:Byte_Value_To_Convert
            ,   GEP_AOV( car_bu2 ) //:Output_Param_Pointer
            );;                    //:AKA[ poi_hec ]

            //:Unload_Character_Sequence:
            car_poi[ car_pos + 0 ]=car_bu2[ 0 ];
            car_poi[ car_pos + 1 ]=car_bu2[ 1 ];

        };;

        //:Return malloced memory containing hex dump string.
        //:( string as in character array )
        return( car_poi );
    };;
 
    //:FFFFFFFFFFFFFFFFF[ FUNCTION_DIVIDER ]FFFFFFFFFFFFFFFFF://

    const GEP_Hex_CTO_Str_UNSAFE =function(
        png_poi
    ,   png_len
    ){
        let car_len =( png_len * 2 );
        let car_poi = GEP_POI_ARR_CHR( car_len );

        GEP_Hex_CTO_Str(
            png_poi
        ,   png_len
        
        ,   car_poi
        ,   car_len
        );;

        return( car_poi );
    };;

//:FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF://
//: ----------------- ( FUNCTION_DIVIDER ) ----------------- ://
//:FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF://
/** EXTENDED_INDEX ***************************************** **/
/**-********************************************************-***

    ------------------------------------------------------------

    GEP_Str_CTO_Hex_001:

    Convert a string representing a 
    hex dump into an array of bytes.

    The original String hex dump to hex byte array function.
    Rather than come up with unique [ postfix/endfix ]
    for overloads, appending 3 digit ### serial number
    to overloads.

    ------------------------------------------------------------

    GEP_Str_CTO_Hex_002:

    Static version of GEP_Str_CTO_Hex_001 used to
    load file-scoped variables for testing.

    Written mainly this way in order to reduce the column
    space taken up by source code since the hex dump strings
    can get pretty big and I wanted to fit a reasonable number
    of hexadecimal ascii characters on a single column.

    ------------------------------------------------------------

    GEP_hex_dum_CTO_png_bin:

    Could be considered: GEP_Str_CTO_Hex_003.
    Convert[ hex_dum ]string to[ png_bin ]byte_array

    ------------------------------------------------------------

    GEP_Hex_CTO_Str: 

    Inverse of GEP_Str_CTO_Hex, but does it all in one
    go. Can use this function to create hex-dumps of
    PNG files and store the PNG in your javascript source
    like you would a base64 string.
    
    ------------------------------------------------------------

    GEP_Hex_CTO_Str_UNSAFE:

    Unsafe because the caller if required to free   
    the memory that this function mallocs.          
    You'll also be expected to know the length of   
    the returned pointer is 2X the input.           

    ------------------------------------------------------------

***-********************************************************-**/
/** FILE_COMMENT_DUMP ************************************** **/
/**-********************************************************-***

    To reduce clutter, comments in source may be ripped out
    from the code and replaced by tags that redirect to here.

    #HDS# : Hex_Dump_String
    #HBA# : Hex_Byte_Array
    #MOC# : Memory_Ownership_Contract

***-********************************************************-**/
//:----------------------------------------------------------://
//:DUM._: Hex_Dump_Conversion_Functions               (ABOVE)://
//:==========================================================://
//:==========================================================://
//:TDL._: TEST_DATA_LOADERS                           (BELOW)://
//:----------------------------------------------------------://
/** SEE_RELATED_ALSO:*************************************** **/
/**-********************************************************-***

    [1]: TES._ : Test (Functions)

***-********************************************************-**/
/** INDEX: ************************************************* **/
/**-********************************************************-***

    TODO

***-********************************************************-**/
/** CALL_SITES: ******************************************** **/
/**-********************************************************-***

    TODO

***-********************************************************-**/
//:FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF://
//: ----------------- ( FUNCTION_DIVIDER ) ----------------- ://
//:FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF://
    
    const GEP_Put_Tes_Dat=function(){ "use strict"
    //://////////////////////////////////////////////////////://
    //:                                                      ://
    //: Load PNG hex dumps into byte arrays for testing.     ://
    //:                                                      ://
    //: Code looks really weird because:                     ://
    //: 1: Written in C friendly style.                      ://
    //: 2: Stateful "I" function helps preserve column space.://
    //:                                                      ://
    //://////////////////////////////////////////////////////://

    let I=GEP_AOF( GEP_Str_CTO_Hex_002 );


    GEP_PNG_POI=( GEP_AOV( GEP_PNG_001 )       );
    GEP_PNG_LEN=(          GEP_PNG_001_LEN_MAC );
    GEP_PNG_POS=(        (      0      )       );
    GEP_CAR_LEN=(        (     26      )       );
    
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

    GEP_PNG_POI=( GEP_AOV( GEP_PNG_002 )       );
    GEP_PNG_LEN=(          GEP_PNG_002_LEN_MAC );
    GEP_PNG_POS=(        (      0      )       );
    GEP_CAR_LEN=(        (     26      )       );

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

    };; //://////////////////////////////////////////////////://    
    //:///////////////////////////////////[ GEP_Put_Tes_Dat ]://

/** EXTENDED_INDEX ***************************************** **/
/**-********************************************************-***

    TODO

***-********************************************************-**/
/** FILE_COMMENT_DUMP ************************************** **/
/**-********************************************************-***

    TODO

***-********************************************************-**/
//:----------------------------------------------------------://
//:TDL._: TEST_DATA_LOADERS                           (ABOVE)://
//:==========================================================://
    const GEP_png_bin_CTO_png_obj=function(
        png_bin //:ARG_INN
    ,   png_nob //:ARG_INN
                
    ,   png_obj //:ARG_OUT
    ){ "use strict"

        throw("[TODO:GEP_png_bin_CTO_png_obj]");

    };;
//:==========================================================://
//:PUB._: PUBLIC_API (Public Contract)                (BELOW)://
//:----------------------------------------------------------://
//:PA:Public_API:(BELOW):------------------------------------://
//:PAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPA://

//:     1: GEP_Dec_Ode
//:     2: GEP_Enc_Ode
//:     3: GEP_Get_Wid
//:     4: GEP_Get_Hig
//:     5: GEP_Get_Nob
//:     6: GEP_Cop_Buf
//:     7: GEP_Del_Buf

//:PAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPA://

    //:Decodes a ".PNG file"  binary stored in a byte array,
    //:and stores the resulting RGBA [OpenGL/Vulkan] friendly
    //:pixel byte array in an internal buffer that can be
    //:copied over to user memory.
    const GEP_Dec_Ode=function( 
        png_bin //:Abbreviation: PNG:Portable_Network_Graphics
                //:Abbreviation: BIN:Binary (As Byte Array)
    ){
        gep_Dec( png_bin ); //:Private_Decode_Function

        return("[USE:GEP_Get_*:ToRetrieveOutputData]");
    };;

    //:Encodes an RGBA byte array representing an
    //:[ OpenGL / Vulkan ] friendly pixel array into
    //:a .PNG binary that can then be saved to file system
    //:or transmitted over the internet.
    const GEP_Enc_Cod=function( 
        ba4_hex //:Abbreviation: BA4:ByteArray4( 4==R,G,B,A )
                //:Abbreviation: HEX:HEXadecimal_values
    ){
        gep_Enc( ba4_hex ); //:Private_Decode_Function

        return("[USE:GEP_Get_*:ToRetrieveOutputData]");
    };;
    
    //: If GEP_Decode( png_bin ) has just been called,
    //: this returns the width in pixels of the image.
    //: If GEP_Encode( ba4_hex
    const GEP_Get_Wid=function(){

        //:Return internal buffer width (buf_wid)
        //:Width is measured in pixels.
        return( gep_buf_wid );

    };;
    const GEP_Get_Hig=function(){

        //:Return internal buffer height (buf_hig)
        //:Height is measured in pixels.
        return( gep_buf_hig );

    };;

    //:Get the number_of_bytes[ nob ]within the internal
    //:buffer generated by[ decode ]or[ encode ]functions.
    //:Array length is measured in[ nob ].
    const GEP_Get_Nob=function(){ 

        //:Return internal buffer number_of_bytes[ nob ]
        return( gep_buf_nob );
    
    };;

    //: Copies internal buffer into user allocated memory    ://
    //: pointed to by[ arr_oct ].The reason the[ decode ]    ://
    //: and[ encode ]functions do not return data is         ://
    //: because in order to make this portable to "C"        ://
    //: we need to think about memory management and         ://
    //: who is responsible for what memory.                  ://
    const GEP_Cop_Buf=function( 
        arr_oct //:Array_Of_Octets (Byte/Char Array)
    ,   arr_nob //:Number_Of_Bytes_In_Array( The Length )
    ){

        throw("[TODO:GEP_Cop_Buf:TODO]");

    };;

    //: GEP_Delete_Buffer: Deletes internal memory buffer    ://
    //: used to store[ ba4_hex ]or[ png_bin ]. You can       ://
    //: call this after calling[ GEP_Cop_Buf ]to free up     ://
    //: memory.                                              ://
    const GEP_Del_Buf=function( /** void **/ ){

        throw("[TODO:GEP_Del_Buf:TODO]");

    };;

//:PAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPA://
//:PA:Public_API:(ABOVE):------------------------------------://
//:----------------------------------------------------------://
//:PUB._: PUBLIC_API (Public Contract)                (ABOVE)://
//:==========================================================://
//:==========================================================://
//:TES._: TEST_FUNCTIONS                              (BELOW)://
//:----------------------------------------------------------://
/** SEE_RELATED_ALSO:*************************************** **/
/**-********************************************************-***

    [1]: TDL._ : Test_Data_Loaders (Functions)

***-********************************************************-**/
/** INDEX: ************************************************* **/
/**-********************************************************-***

    [1]: GEP_Tes_Hex_Dum: Test hex dumping function

***-********************************************************-**/
/** CALL_SITES: ******************************************** **/
/**-********************************************************-***

    TODO

***-********************************************************-**/
//:FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF://
//: ----------------- ( FUNCTION_DIVIDER ) ----------------- ://
//:FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF://

    const GEP_Tes_Hex_Dum =function( /** void **/ ){

        //:-----------:1234567890123456:---://
        let hex_dum=( "0123456789ABCDEF" );
        let hex_new=( "----------------" );

        let car_poi=GEP_AOS( hex_dum );
        let car_len=( 16 );

        let png_len=( car_len / 2 );
        let png_poi=GEP_POI_ARR_BYT( png_len );
        let png_pos=( 0 ); //:Fill from start of array.

        //:Convert hex dump string to byte array:
        GEP_Str_CTO_Hex_001(
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
        car_poi=GEP_AOS( hex_new );
        car_len=( 16 );
        car_poi=GEP_Hex_CTO_Str(
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

    };;

//:FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF://
//: ----------------- ( FUNCTION_DIVIDER ) ----------------- ://
//:FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF://

    const GEP_Tes_png_bin_CTO_png_obj=function( /** void **/ ){
    "use strict"

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
        var png_nob = GEP_hex_dum_CTO_png_nob( hex_dum );
        if( png_nob != exp_nob ){
            throw("[Not_The_Number_Of_Bytes_I_Expected]");
        };;

        //:Allocated number of bytes:
        let png_bin=( new Uint8Array( png_nob ) );

        //:Internally_Uses:GEP_Str_CTO_Hex
        GEP_hex_dum_CTO_png_bin(
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

        //:Create new intermediate png_obj used to help
        //:use parse the PNG data.
        let png_obj=( GEP_VAL_png_obj() );
        GEP_INI_png_obj( png_obj );




        GEP_png_bin_CTO_png_obj( 
            png_bin //:ARG_INN
        ,   png_nob //:ARG_INN
        
        ,   png_obj //:ARG_OUT
        );;

    };;

    //:Run all test code:
    const GEP_Tes=function( /** void **/ ){ "use strict" 

        GEP_Put_Tes_Dat();
        GEP_Tes_Hex_Dum();

        //: Must be AFTER:GEP_Tes_Hex_Dum()          - - - - ://
        //: Because our png binary ( png_bin ) is    - - - - ://
        //: encoded as a long text string known as   - - - - ://
        //: a [ text/hex dump ].                     - - - - ://
        GEP_Tes_png_bin_CTO_png_obj();

        ((GEP_TES_RAN)++);
    };;

//:FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF://
//: ----------------- ( FUNCTION_DIVIDER ) ----------------- ://
//:FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF://
/** EXTENDED_INDEX ***************************************** **/
/**-********************************************************-***

    TODO

***-********************************************************-**/
/** FILE_COMMENT_DUMP ************************************** **/
/**-********************************************************-***

    TODO

***-********************************************************-**/
//:----------------------------------------------------------://
//:TES._: TEST_FUNCTIONS                              (ABOVE)://
//:==========================================================://
//:==========================================================://
//:INI._: Initialization_Routine                      (BELOW)://
//:----------------------------------------------------------://
/** INDEX: ************************************************* **/
/**-********************************************************-***

    [1]: GEP_Ini : Initializes Library
 
***-********************************************************-**/
/** CALL_SITES: ******************************************** **/
/**-********************************************************-***

    TODO

***-********************************************************-**/
//:FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF://
//: ----------------- ( FUNCTION_DIVIDER ) ----------------- ://
//:FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF://

    //:C99 style library initializer function:
    const GEP_Ini=function( /** void **/ ){ "use strict"

        //:If in debug mode and tests have not yet
        //:Been ran, run the unit test code.
        if(  GEP_MAC_DEB > 0  ){
        if(!(GEP_TES_RAN > 0) ){

            GEP_Tes( );

        };;};;


    };;

//:FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF://
//: ----------------- ( FUNCTION_DIVIDER ) ----------------- ://
//:FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF://
/** EXTENDED_INDEX ***************************************** **/
/**-********************************************************-***

    TODO

***-********************************************************-**/
/** FILE_COMMENT_DUMP ************************************** **/
/**-********************************************************-***

    TODO

***-********************************************************-**/
//:----------------------------------------------------------://
//:INI._: Initialization_Routine                      (ABOVE)://
//:==========================================================://
//:==========================================================://
//:END._: END_OF_LIBRARY                              (BELOW)://
//:----------------------------------------------------------://
//|EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE|//
//| -------------------- ( END_OF_LIB ) -------------------- |//
//|EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE|//
    
    //:------------------------------------------------------://
    //:So users of javascript version of library don't need  ://
    //:to manually call [ GEP_Ini ] before using library.    ://
    //:                                                      ://
    //:And also because I want this project as a single file ://
    //:distribution/payload even if I add test code.         ://
    //:------------------------------------------------------://

        if( GEP_MAC_JAS > 0 ){
        //:Current platform is javascript:

            GEP_Ini();

        };;
        if( GEP_MAC_C99 > 0 ){
        //:Current platform is C99

            throw("[GEP_ERR:THIS_IS_NOT_C99_CODE]");

        };;
 
    //:------------------------------------------------------://

    //:Undefine all macros declared in library in order
    //:to be well-behaved code and play well with others.
    GEP_UND(  GEP_PNG_001_LEN_MAC );
    GEP_UND(  GEP_PNG_002_LEN_MAC );
    GEP_UND(  GEP_MAC_DEB         ); //:Debug_Mode_Macro
    GEP_UND(  GEP_MAC_LOG         ); //:Logging_Messages_Macro
    GEP_UND(  GEP_MAC_JAS         ); //:Platform_Is_JavaScript
    GEP_UND(  GEP_MAC_C99         ); //:Platform_Is_C99_Code

//|EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE|//
//| -------------------- ( END_OF_LIB ) -------------------- |//
//|EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE|//
//:----------------------------------------------------------://
//:END._: END_OF_LIBRARY                              (ABOVE)://
//:==========================================================://


//:==========================================================://
//:COM._: COMMENTS_SECTION                            (BELOW)://
//:----------------------------------------------------------://
/**-********************************************************-***

TODO: Every single token (variable, function, string, etc)
      should have a short 1-line explanation of what it is.

KEY: (ONE_LINE_DEFINITIONS)
                
            GEP: Namespace:Game_Engine_PNG
            MAC: Denotes_A_MACRO, use #define in C99
            POI: Pointer
            JAS: JavaScript
        poi_car: SEE[ car_poi ]
        car_poi: Pointer_To_Character_Array (char*)
            hec: HExadecimal_Character (Ascii 0-9,A-F,a-f )
            heb: HEx_Byte (Int/Char in range 0-255 / 0-0xFF)
        ELE_IOT: EasyLoopEntry_IncrementsOnTop
            NPI: Natural_Positive_Integers (N==PI)
            IDE: Interactive_Development_Environment
  LEN_DIST_PAIR: Length distance pair
  LITERAL_BYTES: Literal bytes, copy as is.
            HGH: Histogram_Grouped_By_Height (Height==Lens)
           DBCD: dynamic block code description
GPC_Pro_Sto_Blo: longhanded name for GPC_Sto(...)
        arr_l_d: ARRay_Length_plus_Distances (SEE: PUFF.C)
          ndist: Puff.c's variable for num_dis
           nlen: Puff.c's variable for num_len
          ncode: Puff.c's variable for num_cod
          [WTF]: Whats_This_For (AKA:I_Dont_Know_What_Iam_Doing)
       LOL_CODE: Length_Or_Literal_Code
     LOL__CODES: LOL_CODE but plural and extra "_"
      LOL_CODES: LOL_CODE but plural.
       s.outcnt: Puff.c's version of: SOB.out_cou
          MMRWW: Maybe_My_Re_Write_Was_Wrong
    GTE_DAS_EQT: An (>=) disguised as an (==).
    poi_out_buf: TOO_VERBOSE_PLEASE_USE: out_buf
    val_out_len: TOO_VERBOSE_PLEASE_USE: out_len
    val_out_cou: TOO_VERBOSE_PLEASE_USE: out_cou     
    poi_inn_buf: TOO_VERBOSE_PLEASE_USE: inn_buf
    val_inn_len: TOO_VERBOSE_PLEASE_USE: inn_len
    val_inn_cou: TOO_VERBOSE_PLEASE_USE: inn_cou     
    val_bit_buf: TOO_VERBOSE_PLEASE_USE: bit_buf
    val_bit_cou: TOO_VERBOSE_PLEASE_USE: bit_cou
    val_j_b_env: TOO_VERBOSE_PLEASE_USE: j_b_env
        ARG_INN: An "input parameter"
        ARG_OUT: An "output parameter" (Return By Reference)






HTC: (Hash_Tag_Comments)

    #PUFF_C_TRANSCRIBE#:
        Section of code where I am transcribing the puff.c
        algorithm from: 
        github.com/madler/zlib/blob/master/contrib/puff/puff.c

    ##PCFN#: 
        Puff_C_Function_Name: The name of function in PUFF.C

DEF: (MULTI_LINE_DEFINITIONS):

    NPI: 
        Natural_Positive_Integers
        Replacing "N" in code and comments with "NPI" because
        a small token like "N" is difficult to use with:

            1: CTRL+F
            2: Highlight Matching Tokens On Click in IDE.

    poi_huf_len:
        Pointer to huffman struct storing length codes.
        Length codes can be length or LITERAL from what
        I've read. So it might be good to refactor this
        to be: poi_huf_lal. Where lal=="Length_And_Literal"
        Or... lol=="Lenght_Or_Literal" code.

    JMIM_COMMENT:
        My ( John Mark Isaac Madison / JMIM ) comments.
        If these comments are commentary on comments
        within the original PUF.C comments, these comments
        might be WRONG as they represent my understanding
        or guesses of what is going on.

        But better to have a faulty assumption that can
        be re-worked into something more correct, than
        no mental conception at all.

    HGH:
        Histogram Grouped By Height.
        My way to conceptualize part of the algorithm
        description.
        HGH[ 1 ]= 5 , there are 5 short people.
                      A, B, C, D, E
        HGH[ 2 ]= 3 , there are 3 medium height people.
                      AA, BB, CC 
        HGH[ 3 ]= 2 , there are 2 tall height people.
                      AAA, BBB

    GPC_DEC_AND_INI_STA_CON_SHO:
        GPC_DECLARE_AND_INIT_STATIC_CONST_SHORT
        But in groups of 3 because harder to typo.

    GPC_DEC_SIG_INT:
        GPC_DECLARE_SIGNED_INTEGER

    GPC_DEC_UNS_INT:
        GPC_DECLARE_UNSIGNED_INTEGER

    GTE_DAS_EQT:
        Greater_Than_or_Equal_to____DisguisedAsA____EQual_To
        I am putting this comment in places I see "==" where
        I think they mean:
            if( x >= y ){ ... }
            BUT:
            We are so godly sure of ourselves that the first
            true invokation will be:
            if( x == y ){ ... }

    KEEP_IT_SIMPLE_STUPID:
        What you are doing might be slow processing wise,
        but it is clear and understandable.

***-********************************************************-**/
//:----------------------------------------------------------://
//:COM._: COMMENTS_SECTION                            (ABOVE)://
//:==========================================================://



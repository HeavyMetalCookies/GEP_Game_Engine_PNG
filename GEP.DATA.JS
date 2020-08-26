    
//:RULE 1: All globals start with "GEP_" namespace.
//:RULE 2: "GEP_" always followed sub category (MAC_,VIT_,...).
//:RULE 3: Comments longer than 1 line belong in documentation.

//:REFACTOR_LIST:
//:     VIT_GEP_png_sob --> GEP_VIT_png_sob

//:FAD_: Functions_As_Data:==================================://

    //:Stk_Arr[ Stack_Array ]U8A[ Uint 8 Array ]
    const GEP_FAD_Stk_Arr_U8A = function( len ){

        let     val_arr =( new Uint8Array( len ) );
        return( val_arr );

    };;

    //:Only_Use_With[ GEP_NEW_* ]Functions. NOT_A_DEEP_COPY!
    const GEP_FAD_New=function( TYP ){
        let            obj_out = Object.create( null );
        Object.assign( obj_out , TYP );
        Object.seal(   obj_out       );
        return(        obj_out       );
    };;

//:C99_: C99 polyfills to help convey code intention.========://

    //:AOF:Address_Of_Function:
    //:    JS: GEP_C99_AOF( someFunction )
    //:   C99:           &( someFunction )
    function
    GEP_C99_AOF( 
        fun 
    )
    { "use strict"
        return( fun );
    };;

    function
    GEP_C99_AOV( 
        naf_var 
    )
    { "use strict"
        return( naf_var );
    };;

    //:HACK:splits the string into a character array,
    //:     but use this to denote where &( str_var )
    //:     should be used in C code.
    function
    GEP_C99_AOS( 
        str_var
    )
    { "use strict"
        let arr_chr=str_var.split("");
        return( arr_chr );
    };;
    
    function
    GEP_C99_POI( 
        any_var 
    )
    { "use strict"
        throw("[USE:GEP_AOF|GEP_AOV]");
    };;

    //:Returns a malloced array of characters (bytes)
    function
    GEP_C99_Mal_Arr_Chr(
        len
    )
    { "use strict"

        let mal_arr = new Uint8Array( len );
        for( let i = 0; i < len; i++ ){
            mal_arr[ i ]=( 0 );
        };;
        return( mal_arr );
    };;

    function 
    GEP_C99_Fre_Arr_Chr(
        mal_arr
    )
    { "use strict"
        console.log("[FREEING]:" , mal_arr );
    };;

    //:Value Array: Of CHaRacters:
    //: JS: let   arr = GEP_VAL_ARR_CHR( len );
    //:C99: char  arr[ 9 /**len**/ ] ={ 0 };
    function 
    GEP_C99_Val_Arr_Chr(
        len 
    )
    { "use strict"
    
        let val_arr = new Array( len );
        for( let i = 0; i < len; i++ ){
            val_arr[ i ]=( "" );
        };;
    
        return( val_arr );
    };;

    //:Anywhere[ poi_arr ]is used in code, I am guessing it is
    //:a mistake. Did you really want a pointer to a pointer?
    //:(Arrays themselves are already pointers.)
    function GEP_C99_Poi_Arr_Chr(){
        throw("[Do_You_Really_Want_A_Pointer_To_A_Pointer?]");
    };;
     
//:MAC_: Macros:=============================================://
            
    const   GEP_MAC_DEB=( 1 ); //:IF: >= 1, debug mode is on.
    const   GEP_MAC_LOG=( 1 ); //:IF: >= 1, logging    is on.
    const   GEP_MAC_JAS=( 1 ); //:This_Is_JavaScript_Code
    const   GEP_MAC_C99=( 0 ); //:This_Is____NOT_C99_Code

        //:NUM_BYTES_IN:DE_SERIALIZED_PNG_HEX_DUMPS:
        //:--------------------------------------------------://

        const   GEP_PNG_001_LEN_MAC=( 156 ); //:PNG.01
        const   GEP_PNG_002_LEN_MAC=( 119 ); //:PNG.02

        //:--------------------------------------------------://

//:GSF_: Global_State_Flags:=================================://

    let   GEP_GSF_tes_ran=( 0 );  //:Tests_Ran_At_Least_Once?
    let   GEP_GSF_was_ini=( 0 );  //:Was_library_initialized?

//:VIT_: Variable_Integer_Tags:==============================://

    const GEP_VIT_GEP     = ( 1 ); //:GEP library object.
    const GEP_VIT_png_sob = ( 2 );

//:PNG_: PNG_Test_data_namespace:============================://

    //:USED_BY[ GEP_Put_Tes_Dat ]
    //:------------------------------------------------------://
    let GEP_PNG_POI = null; //:Pointer_To_PNG_Byte_Array
    let GEP_PNG_LEN =( 0 ); //:NumElementIn:GEP_PNG_POI
    let GEP_PNG_POS =( 0 ); //:Rest on un-filled byte.

        //:DE_SERIALIZED_PNG_HEX_DUMPS:
        //:--------------------------------------------------://

        //: COMMAND_LINE[ xxd -c 8 -g 1 "01.PNG" ] 
        let GEP_PNG_001 = GEP_FAD_Stk_Arr_U8A( 
            GEP_PNG_001_LEN_MAC               );;

        //: COMMAND_LINE[ xxd -c 8 -g 1 "02.PNG" ] 
        let GEP_PNG_002 = GEP_FAD_Stk_Arr_U8A( 
            GEP_PNG_002_LEN_MAC               );;  

        //:--------------------------------------------------://

    //:------------------------------------------------------://


//:CAR: Character_array_namespace:===========================://

    //:USED_BY[ GEP_Put_Tes_Dat ]
    //:------------------------------------------------------://
    let GEP_CAR_POI = null; //:HexDumpStringBeingLoaded
    let GEP_CAR_LEN =( 0 ); //:NumElementIn:GEP_CAR_POI
    //:------------------------------------------------------://

//:T00: Types_with_Zero_Dependencies:========================://

    
    //:[ png_sob ]:------------------------------------------://

    //:ABOUT: png_sob (png_StateObjectBundle) will contain
    //:       all the necessary state for GEP_Encode or
    //:       GEP_Decode.
  
    const GEP_NEW_png_sob=function( /** void **/ ){
    "use strict"

        let STRUCT_png_sob={

            vit : 0 //:GEP_VIT_png_sob

        ,   wid : 0 //:Width__In_Pixels
        ,   hig : 0 //:Height_In_Pixels

        //: PNG Binary Data Byte Buffer To Be Parsed:
        ,   buf_poi : null //:Buffer:Pointer (Array_Of_Bytes)
        ,   buf_nob :  0   //:Buffer:Number_Of_Bytes

        };;
        let     NEW_png_sob=( GEP_FAD_New( STRUCT_png_sob ) );
        return( NEW_png_sob );
    };;
    const GEP_VAL_png_sob=function( /** void **/ ){
    "use strict"
        
        let png_sob=( GEP_NEW_png_sob() );
        return( png_sob );

    };;
    const GEP_INI_png_sob=function( png_sob ){ 
    "use strict" 

        png_sob.vit=( GEP_VIT_png_sob );
        png_sob.wid=( 0 );
        png_sob.hig=( 0 );
        png_sob.buf_poi=( null );
        png_sob.buf_nob=(  0   );

    };;

    //:------------------------------------------:[ png_sob ]://
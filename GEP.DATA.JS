    
//:RULE 1: All globals start with "GEP_" namespace.
//:RULE 2: "GEP_" always followed sub category (MAC_,VIT_,...).
//:RULE 3: Offboard long comments using tags maybe?

//:REFERENCE[ GEP.FUNC.JS ]
//:     gep_Log
 
//:     gep_CFN_Str_Len
 
//:     gep_ASC_asc_ISA_hec
//:     gep_ASC_hec_ISA_asc
//:     gep_ASC_hec_CTO_heb
//:     gep_ASC_heb_CTO_hec
//:     gep_ASC_asc_ISA_emp
//:     gep_ASC_asc_ISA_bad
//:     gep_ASC_TRICKY_TO_TRANSPILE_asc_CTO_int
//:     gep_ASC_TRICKY_TO_TRANSPILE_int_CTO_asc
 
//:     gep_DUM_hex_dum_CTO_png_nob
//:     gep_DUM_Str_CTO_Hex_001
//:     gep_DUM_Str_CTO_Hex_002
//:     gep_DUM_hex_dum_CTO_png_bin
//:     gep_DUM_hex_CTO_str
//:     gep_DUM_hex_CTO_str_UNSAFE

//:     gep_BAH_u8a_Get_u08
//:     gep_BAH_u8a_Get_u32
//:     gep_BAH_u32_CTO_str  USE[ gep_ALG_u32_CTO_cus ]
//:     gep_BAH_str_CTO_u32  USE[ gep_ALG_cus_CTO_u32 ]

//:     gep_ALG_cus_CTO_u32 :EXAMPLE: "IHDR"     --> 0x49484452
//:     gep_ALG_u32_CTO_cus :EXAMPLE: 0x49484452 -->     "IHDR"
//:     gep_ALG_has_oct_002
//:     gep_ALG_has_oct_001
//:     gep_ALG_png_sob_CHK_png_hed
//:     gep_ALG_png_bin_CTO_png_sob
 
//:     GEP_PUB_Decode
//:     GEP_PUB_Encode
//:     GEP_Decode
//:     GEP_Encode
//:
//:     gep_TES_Put_Tes_Dat
//:     gep_TES_Hex_Dum
//:     gep_TES_png_bin_CTO_png_sob
//:     gep_TES_D00_LUT_chu_kno_Chk
//:     gep_TES_All
//:



//:MAC_: Macros:=============================================://
            
    const   GEP_MAC_DEB=( 1 ); //:IF: >= 1, debug mode is on.
    const   GEP_MAC_JAS=( 1 ); //:This_Is_JavaScript_Code
    const   GEP_MAC_C99=( 0 ); //:This_Is____NOT_C99_Code

    //: ****   Should be zero unless you are actively    ****://
    //: ****   developing this file's source code.       ****://
    const   GEP_MAC_FAIL_FAST_ON_BAD_DATA=( 1 );

    //:MAC_LOG:Logging_Macros:- - - - - - - - - - - - - - - -://

    const   GEP_MAC_LOG           =( 1 ); //: Generic   messages
    const   GEP_MAC_LOG_o_ALG     =( 1 ); //: ALG_*     messages
    const   GEP_MAC_LOG_o_C99     =( 1 ); //: C99_*     messages
    const   GEP_MAC_LOG_o_TES     =( 1 ); //: TES_*     messages
    const   GEP_MAC_LOG_o_TES_D00 =( 1 ); //: TES_D00_* messages


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
    const GEP_VIT_png_sob = ( 2 ); //:png_StateObjectBundle
    const GEP_VIT_dex_inc = ( 3 ); //:inclusive_index_struct

//:LUT_: Lookup Tables:======================================://

    //:SEE[ gep_TES_D00_LUT_chu_kno_Chk() ]:-----------------://

    /** MACRO: max index for[ GEP_LUT_chu_kno_(STR|OCT) ] **/
    const GEP_LUT_chu_kno_MAC=( 4 /**Max_Index**/ );

    /** MACRO: Indexes of different header types. **/
    const GEP_LUT_MAC_dex_IHDR=( 1 );
    const GEP_LUT_MAC_dex_IDAT=( 2 );
    const GEP_LUT_MAC_dex_IEND=( 3 );
    const GEP_LUT_MAC_dex_PLTE=( 4 );

    //:GEP_LUT:chu_kno:STR: String Version Of Table
    const GEP_LUT_chu_kno_STR=[ //:Chunks:KNOWN
        "nope" //: 0 === Invalid_Lookup_Table_Index

    ,   "IHDR" //: 1
    ,   "IDAT" //: 2
    ,   "IEND" //: 3
    ,   "PLTE" //: 4
    
    ];; //: - - - - - - - - - - - -- - - - - - - - - - - - - ://
    //:GEP_LUT:chu_kno:OCT: Octet Version Of Table
    const GEP_LUT_chu_kno_OCT=[ //:Chunks:KNOWN
        0x00000000 //: 0 === Invalid_Lookup_Table_Index

    ,   0x49484452 //: [ "IHDR" / "49 48 44 52" ]
    ,   0x49444154 //: [ "IDAT" / "49 44 41 54" ]
    ,   0x49454e44 //: [ "IEND" / "49 45 4e 44" ]
    ,   0x504c5445 //: [ "PLTE" / "50 4c 54 45" ]
    
    ];;//:--------------:SEE[ gep_TES_D00_LUT_chu_kno_Chk() ]://



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

    //: - - - - - - - - - - - - ---- - - - - - - - - - - - - ://
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
        return( mal_arr /** ArrayOfCharacters (Arr_Chr) **/ );
    };;
    function 
    GEP_C99_Fre_Arr_Chr(
        mal_arr /** ArrayOfCharacters (Arr_Chr) **/ 
    )
    { "use strict"
        gep_Log_C99("[FREEING]:" , mal_arr );
    };;
    //: - - - - - - - - - - - - ---- - - - - - - - - - - - - ://
    function
    GEP_C99_Mal_pix_arr(  /** Pixel__Array (RGBA byte array) **/
    /**/        pix_wid   /** Pixel__Width * * * * * * * * * **/
    ,           pix_hig   /** Pixel_Height * * * * * * * * * **/
    )
    { "use strict"
        
        /** 4 components per pixel: R,G,B,A **/
        const NUM_COM=( 4 /** RGBA **/ );

        let len=( pix_wid * pix_hig * NUM_COM );

        let mal_arr = new Uint8Array( len );
        for( let i = 0; i < len; i++ ){
            mal_arr[ i ]=( 0 );
        };;
        return( mal_arr /** pix_arr **/ );
    };;
    function 
    GEP_C99_Fre_pix_arr(
        mal_arr /** pix_arr **/
    )
    { "use strict"
        gep_Log_C99("[FREEING]:" , mal_arr );
    };;
    //: - - - - - - - - - - - - ---- - - - - - - - - - - - - ://

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

//:PNG_: PNG_Test_data_namespace:============================://

    //:USED_BY[ GEP_Put_Tes_Dat ]
    //:------------------------------------------------------://
    let GEP_PNG_BIN = null; //:Pointer_To_PNG_Byte_Array
    let GEP_PNG_LEN =( 0 ); //:NumElementIn:GEP_PNG_BIN
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

//:T00_:Types_with_Zero_Dependencies:========================://

    //:[ dex_inc ]:------------------------------------------://

    //:ABOUT: dex_inc: An inclusive index (range) struct.

    function    
    GEP_NEW_dex_inc( /** void **/ )
    { "use strict"

        let STRUCT_dex_inc={
            vit : 0 //:GEP_VIT_dex_inc
        ,   i_0 : 0 //:LowerInclusiveBound
        ,   i_1 : 0 //:UpperInclusiveBound
        };;
        let     NEW_dex_inc=( GEP_FAD_New( STRUCT_dex_inc ) );
        return( NEW_dex_inc );
    };;

    function
    GEP_VAL_dex_inc( /** void **/ ){
    "use strict"
        
        let dex_inc=( GEP_NEW_dex_inc() );
        return( dex_inc );

    };;

    function
    GEP_INI_dex_inc( dex_inc ){ 
    "use strict" 

        dex_inc.vit=( GEP_VIT_dex_inc );
        dex_inc.i_0=( 0 - 123 ); //:Init_With_Trap_Values
        dex_inc.i_1=( 0 - 456 ); //:Init_With_Trap_Values
 
    };;

    //:Used to declare that member of struct is:-------------://
    //:     1: A VALUE member (NOT a pointer)                ://
    //:     2: An ARRAY of [ dex_inc ]                       ://
    //:     3: Should be converted to C99:                   ://
    //:                                                      ://
    //:        C99                                           ://
    //:        STRUCT_dex_inc   arr_dex_inc[ # ]             ://
    //:                                                      ://
    //:        JAS                                           ://
    //:        arr_dex_inc = GEP_VAM_ARR_dex_inc( # )        ://
    //:                                                      ://
    //:     4: ONLY be called within type declarations.      ://
    //:------------------------------------------------------://
    function /** VAM_ARR: VAlue_Member_ARRay              **/
             /** (As apposed to pointer member in struct. **/
    GEP_VAM_ARR_dex_inc( arr_len )
    { "use strict"

        let arr_dex_inc=[];
        for( let i = 0 ; i < arr_len ; i ++ ){
            
            arr_dex_inc[ i ] = GEP_NEW_dex_inc( );

            //: NO!:     GEP_INI_dex_inc( arr_dex_inc[ i ] ) ://
            //: Because: This function really                ://
            //:          exists to denote C syntax.          ://
        };;
        return( arr_dex_inc );
    };;

    //:------------------------------------------:[ dex_inc ]://

//:========================:T00_:Types_with_Zero_Dependencies://
//:T01_:Depends_On_At_Least_One_T00_Type_And_No_Higher:======://

    //:[ png_sob ]:------------------------------------------://

    //:ABOUT: png_sob (png_StateObjectBundle) will contain   ://
    //:       all the necessary state for GEP_Encode or      ://
    //:       GEP_Decode.                                    ://

    //: Maximum capacities for structs telling us where - - -://
    //: the data-segments begin and end for different   - - -://
    //: chunk types.                                    - - -://
    const GEP_MAC_arr_IHDR_cap=(  1 ); //:Exactly 1
    const GEP_MAC_arr_IDAT_cap=( 10 ); //:One or more
    const GEP_MAC_arr_IEND_cap=(  1 ); //:Exactly 1
    const GEP_MAC_arr_PLTE_cap=(  1 ); //:No more than 1
  
    const GEP_NEW_png_sob=function( /** void **/ ){
    "use strict"

        let STRUCT_png_sob={

            vit : 0 //:GEP_VIT_png_sob

            //:LOADED_WHEN_ENCODING_OR_DECODING:-------------://
    
            //:FOUND_IN[ IHDR ]CHUNK, www.w3.org/TR/PNG/#11IHDR
        ,   pix_wid : 0 //: Width___In__Pixels ://
        ,   pix_hig : 0 //: Height__In__Pixels ://

            //:-------------:LOADED_WHEN_ENCODING_OR_DECODING://
            //:LOADED_WHEN_DECODING:-------------------------://

            //:FOUND_IN[ IHDR ]CHUNK, www.w3.org/TR/PNG/#11IHDR
        ,   bit_dep : 0 //: Bit__________Depth ://
        ,   col_typ : 0 //: Color_________Type ://
        ,   com_met : 0 //: Compression_Method ://
        ,   fil_met : 0 //: Filter______Method ://
        ,   int_met : 0 //: Interlace___Method ://

            //: PNG Binary Data Byte Buffer To Be Parsed:    ://
            //: AKA[ png_bin === buf_poi ]( PREFER: png_bin )://
            //: AKA[ png_nob === buf_nob ]( PREFER: png_nob )://

        ,   png_bin : null //:Buffer:Pointer (Array_Of_Bytes)
        ,   png_nob :  0   //:Buffer:Number_Of_Bytes

            //: Totals of different chunk types:
        ,   num_IHDR: (0-374) 
        ,   num_IDAT: (0-374) 
        ,   num_IEND: (0-374) 
        ,   num_PLTE: (0-374) 

            //: Set to some reasonible maximum capacity.- - -://
            //: Use the "num_****" members to determine - - -://
            //: which [slots/indexs] actually contain   - - -://
            //: valid data.                             - - -://
        ,   arr_IHDR:GEP_VAM_ARR_dex_inc( GEP_MAC_arr_IHDR_cap )
        ,   arr_IDAT:GEP_VAM_ARR_dex_inc( GEP_MAC_arr_IDAT_cap )
        ,   arr_IEND:GEP_VAM_ARR_dex_inc( GEP_MAC_arr_IEND_cap )
        ,   arr_PLTE:GEP_VAM_ARR_dex_inc( GEP_MAC_arr_PLTE_cap )

            //:-------------------------:LOADED_WHEN_DECODING://
            //:LOADED_WHEN_ENCODING:-------------------------://

        ,   pix_arr:null //:Pixel_Array

            //:-------------------------:LOADED_WHEN_ENCODING://

            //: Try to not use "throw" as that is not        ://
            //: C99 compatible without longjmp weirdness.    ://

        ,   has_err :  0
        ,   msg_err : ""

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
        png_sob.pix_wid=( 0 );
        png_sob.pix_hig=( 0 );
        png_sob.png_bin=( null );
        png_sob.png_nob=(  0   );

 
        //:INIT_CHILDREN_STRUCTS:ARR:------------------------://
        let i = 0;
        for( i = 0   ;   i < GEP_MAC_arr_IHDR_cap ; i++ ){
            GEP_INI_dex_inc( png_sob.arr_IHDR[ i ] );
        };;
        for( i = 0   ;   i < GEP_MAC_arr_IDAT_cap ; i++ ){
            GEP_INI_dex_inc( png_sob.arr_IDAT[ i ] );
        };;
        for( i = 0   ;   i < GEP_MAC_arr_IEND_cap ; i++ ){
            GEP_INI_dex_inc( png_sob.arr_IEND[ i ] );
        };;
        for( i = 0   ;   i < GEP_MAC_arr_PLTE_cap ; i++ ){
            GEP_INI_dex_inc( png_sob.arr_PLTE[ i ] );
        };; //:--------------------:INIT_CHILDREN_STRUCTS:ARR://

    };;

    //:------------------------------------------:[ png_sob ]://

//:======:T01_:Depends_On_At_Least_One_T00_Type_And_No_Higher://
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

    const GEP_MAC_DEB=( 1 ); //:IF: >= 1, debug mode is on.
    const GEP_MAC_LOG=( 1 ); //:IF: >= 1, logging    is on.

    const GEP_MAC_JAS=( 1 ); //:This_Is_JavaScript_Code
    const GEP_MAC_C99=( 0 ); //:This_Is____NOT_C99_Code

    //:INDEX:
    //:     [#]: C99_Polyfills
    //:     [#]: File_Scope_Variables

    //:KEY:  
    //:      GEP: Namespace:Game_Engine_PNG
    //:      MAC: Denotes_A_MACRO, use #define in C99
    //:      POI: Pointer
    //:      JAS: JavaScript
    //:  poi_car: SEE[ car_poi ]
    //:  car_poi: Pointer_To_Character_Array (char*)
    //:      hec: HExadecimal_Character (Ascii 0-9,A-F,a-f )
    //:      heb: HEx_Byte (Int/Char in range 0-255 / 0-0xFF)
    //:  ELE_IOT: EasyLoopEntry_IncrementsOnTop

    
    //://////////////////////////////////////////////////////://
    //:[ CDIE : Constants_Defines_And_Informal_Enumerations ]://

        //: VIT: Variable_Integer_Tags (S_Types)
            const VIT_GPC_SOB =( 1 );



    //:[ CDIE : Constants_Defines_And_Informal_Enumerations ]://
    //://////////////////////////////////////////////////////://


    //:CP:C99_Polyfills:(BELOW):-----------------------------://
    //:CPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCP://
    //:                                                      ://
    //: Functions below will help converting to C code       ://
    //: easier by helping you understand the intended        ://
    //: usage of a variable. For example, is the variable    ://
    //: a "reference/pointer" type or a "value/non-pointer" ?://
    //:                                                      ://
    //:CPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCP://

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

            const POI_Unsigned_Char = function(){ 
            "use strict"
                return( 1212121 /** Uninited_Pointer **/ );
            };;
            const VAL_Unsigned_Long = function(){ 
            "use strict"
                return( 1843412 /** Uninited_Value **/ );
            };;
            const VAL_Unsigned_Int = function(){
                return( 9001    /** Uninited_Value **/ ); 
            };;
            const VAL_Int = function(){ 
            "use strict"
                return( 9482242 /** Uninited_Value **/ );
            };;
            const VAL_Jum_Buf = function(){
                return( 6435442 /** Uninited_Value **/ );
            };;

            //:MTMTMTMTMTMTMTMTMTMTMTMTMTMTMTMTMTMTMTMTMTMTMT://

        //|FFFFFFFFFFFFFFF[ FUNCTION_DIVIDER ]FFFFFFFFFFFFFFF|//

    //:CPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCPCP://
    //:CP:C99_Polyfills:(ABOVE):-----------------------------://

//:PPPPPPPPPPPPPPPPPPPP[ PUFF.C : BELOW ]PPPPPPPPPPPPPPPPPPPP://
 
    //:GPC:GEP_PUFF_C: Namespace for everything in this 
    //:                section. Not using "GEP" because
    //:                then I would have to prefix everything
    //:                with "GEP_PUF_*" and that is a bit
    //:                too verbose.

    const GPC_NUM_FIX = 288 ; //: NUMBER_FIXED_LITERAL_CODES
    const GPC_MAX_BIT =  15 ; //: MAX_BITS_IN_A_CODE 
    const GPC_MAX_LIT = 286 ; //: MAX_LITERAL_LENGTH_CODES
    const GPC_MAX_DIS =  30 ; //: MAX_NUMBER_OF_DISTANCE_CODES
    const GPC_MAX_L_D =(  0   //: MAX_CODE_LENGTHS_TO_READ
    +     GPC_MAX_LIT        
    +     GPC_MAX_DIS  );;

    
    //: longjmp: Basically throwing an error.
    const GPC_Lon_Jum=function( j_b_env ){ "use strict"

        throw("[GPC:Lon_Jum:ERROR]");

    };;
   
    //:# #poi_gpc_sob# #://
    const NEW_gpc_sob=function(){ "use strict"
    return(Object.seal({

        //: Conventions:
        //:       poi_*: Denote pointer type.
        //:       val_*: Denote value   type. (non-pointer)

        //:Observations:
        //:     inn_cou: Can be thought of as inn_pos
        //:     out_cou: Can be thought of as out_pos
        
        //:Output_State:
        //:     out_buf: Output Buffer
        //:     out_len: Available space at out_buf
        //:     out_cou: Bytes:WRITTEN_TO:out_buf:so_far

        //: Input_State:
        //:     inn_buf: Input_Buffer
        //:     inn_len: Available input at inn_buf
        //:     inn_cou: Bytes:READ_FROM::inn_buf:so_far
    
        //:     bit_buf: Bit_Buffer
        //:     bit_cou: Number_Of_Bits_In:bit_buf
        
        //:  MISC_OTHER:
        //:     j_b_env: Jump buffer environment

        vit : VIT_GPC_SOB

    ,   poi_out_buf : POI_Unsigned_Char( )
    ,   val_out_len : VAL_Unsigned_Long( )
    ,   val_out_cou : VAL_Unsigned_Long( )
        
    ,   poi_inn_buf : POI_Unsigned_Char( )
    ,   val_inn_len : VAL_Unsigned_Long( )
    ,   val_inn_cou : VAL_Unsigned_Long( )
    
    ,   val_bit_buf : VAL_Int( )
    ,   val_bit_cou : VAL_Int( )

    ,   val_j_b_env : VAL_Jum_Buf( )

    }));;};;

    
    //+------------------------------------------------------+//
    //| Return [ val_nee_bit # bits ] from the input stream. |//
    //| Always leaves less than [ 8 ] bits in the buffer.    |//
    //| GPC_Bit() works properly for[ val_nee_bit == 0 ]     |//
    //|                                                      |//
    //| Format notes:                                        |//
    //|                                                      |//
    //| Bits are stored in bytes from the least significant  |//
    //| bit to the most significant bit. Therefore bits are  |//
    //| dropped from the bottom of the bit buffer,using shift|//
    //| right,and new bytes are appended to the top of the   |//
    //| bit buffer,using shift left.                         |//
    //|                                                      |//
    //| JMIM NOTE: This function is only dropping bits with  |//
    //|            RIGHT_SHIFT( >> ), nothing is being added |//
    //|            using LEFT_SHIFT( << )                    |//
    //+------------------------------------------------------+//
    const GPC_Bit=function( //://////////////////////////////://
        poi_gpc_sob /** Pointer to: gpc_sob   **/
    ,   val_nee_bit /** Needed_Number_Of_Bits **/
    ){ "use strict"

        //:NOTES:
        //:     (FORCE_SIGNED___SHIFT << X )>>0
        //:     (FORCE_UNSIGNED_SHIFT << X )>>>0

        //:The comments say we have a 20 bit accumulator,
        //:so I [[[ THINK ]]] it would be erroneous to ask
        //:for more than 20 bits. -JMIM
        if( val_nee_bit > 20 ){
            throw("[20_BIT_ACCUMULATOR:THINK_ERROR]");
        };;

        const SOB =( poi_gpc_sob       ); //:State_OBject
        const I_M =( 0xFFFFFFFF        ); //:Integer_Mask
        const L_M =( 0xFFFFFFFFFFFFFFFF); //:Long____Mask
 
        //:A 20 bit accumulator. 
        let bit_buf = VAL_Signed_Long(); 
            bit_buf = SOB.val_bit_buf;  
        while(  
            //:Load at least[ val_nee_bit ]into[ bit_buf ]
            SOB.val_bit_cou //:Bit___Count
            <   val_nee_bit //:Needed_Bits
        ){
            if( SOB.val_inn_cou  
            >=  SOB.val_inn_len
            ){
                //:ERROR:OUT_OF_INPUT:
                GPC_Lon_Jum( SOB.env, 1 );
            };;

            //+----------------------------------------------+//
            //|    +=( 1 )|[ val_inn_cou ]>>>>>>>>>>>>>>>>>| |//
            //|           |    0     |    1     |    2     | |//
            //|           | inn_cou  | inn_cou  | inn_cou  | |//
            //|           |          |          |          | |//
            //|poi_inn_buf[ 11111111 | 11111111 | 11111111 ] |//
            //|           |    8     |    16    |    24    | |//
            //|           | bit_cou  | bit_cou  | bit_cou  | |//
            //|    +=( 8 )[ val_bit_cou ]>>>>>>>>>>>>>>>>>>| |//
            //+----------------------------------------------+//
            //|READ:>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>|//
            //|inn_buf[ 11111111 | 11111111 | 11111111 ]     |//
            //|    MSB[    A     |     B    |     C    ]LSB  |//
            //|            |           |                     |//
            //|            +----------------------+          |//
            //|                        |          |          |//
            //|    MSB(    C           B          A    )LSB  |//
            //|bit_buf( 11111111   11111111   11111111 )     |//
            //|<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<:WRITE|//
            //+----------------------------------------------+//

            //:Load 8 bits: //:888888888888888888888888888888://
            bit_buf = bit_buf | (

                (L_M) //:Hackish_Cast_To_Long_By_Masking
                &&
                (( 
                    SOB.poi_inn_buf[ SOB.val_inn_cou ] 
                    << 
                    SOB.val_bit_cou
                )>>0)  //:Signed_Shift. Why bit_buf is
                       //:a signed integer, no clue.

            );; //:888888888888888888888888888888888888888888://

            (SOB.val_inn_cou)+=( 1 ); //:1 more byte(s) read.
            (SOB.val_bit_cou)+=( 8 ); //:8 more byte(s) load.

        };;

        //: Drop[ val_nee_bit ](s) and update buffer, 
        //: always[ 0 -to- 7 ]bits left. 
        SOB.val_bit_buf=(I_M)&((bit_buf >> val_nee_bit)>>0);
        //|                  |    20 bit integer cast    |   |//
        //|   OOB      OOB   |<----- & 0xFFFFFF -------->|   |//
        //| !!!!!!!! !!!!!!!! CCCCCCCC BBBBBBBB 87654321 |   |//
        //| val_nee_bit==8 :  >>>>>>>> CCCCCCCC BBBBBBBB |   |//
        
        //:Number of bits we just erased by pushing them
        //:off the edge like a [ coin pusher machine ].
        (SOB.val_bit_cou)=-( val_nee_bit ); 

        //|     |   0xFF  |   0xFF  |   0xFF  |              |//
        //| BIN: 0000 0000 0000 0000 0000 0001               |//
        //| <<<: 0000 0000 0000 0001 0000 0000 <<val_nee_bit |//
        //| SUB: 0000 0000 0000 0000 1111 1111  -1           |//
        //|                          \_______/               |//
        //|                            --+--                 |//
        //|                              |                   |//
        //|                             N_B                  |//
        const N_B=( ((0x00000001 << val_nee_bit)>>>0) -1);
        
        //:Return the bits you shoved off the edge
        //:of [ SOB.val_bit_buf ]
        const BIT=( (I_M)&(( bit_buf & N_B )) );

        return( BIT );

        /** #UNDEF( sob ) : State_Object_Bundle              **/
        /** #UNDEF( N_B ) : Needed_Bits                      **/
        /** #UNDEF( I_M ) : Integer_Mask for_hackish_cast    **/
        /** #UNDEF( L_M ) : Long____Mask for_hackish_cast    **/ 
        /** #UNDEF( BIT ) : The_Bits_You_Needed              **/
    };; //:///////////////////////////////////////| GPC_Bit |://

    //+------------------------------------------------------+//
    //| Process a stored block.                              |//
    //+------------------------------------------------------+//
    //| Format notes:                                        |//
    //+------------------------------------------------------+//
    //|After the two-bit stored block type (00),the stored   |//
    //|block length and stored bytes are byte-aligned for    |//
    //|fast copying. Therefore any leftover bits in the byte |//
    //|that has the last bit of the type,as many as seven,are|//
    //|discarded. The value of the discarded bits are not    |//
    //|defined and should not be checked against any         |//
    //|expectation.                                          |//
    //+------------------------------------------------------+//
    //|The second inverted copy of the stored block length   |//
    //|does not have to be checked,but it's probably a good  |//
    //|idea to do so anyway.                                 |//
    //+------------------------------------------------------+//
    //|A stored block can have zero length. This is sometimes|//
    //|used to byte-align                                    |//
    //+------------------------------------------------------+//
    const GPC_Pro_Sto_Blo=function(
        poi_gpc_sob /** Pointer to: gpc_sob   **/
    ){ "use strict"
    
        const SOB=( poi_gpc_sob             );
        const INN=( poi_gpc_sob.poi_inn_buf );
        const OUT=( poi_gpc_sob.poi_out_buf );

        let len=VAL_Unsigned_Int(); //:Length_Of_Stored_Block
        let chk=VAL_Unsigned_Int(); //:Error_Check_Compliment

        //:Discard leftover bits from current byte.
        //:Assumes ( SOB.bit_cou < 8 )
        if( SOB.val_bit_cou >= 8 ){
            throw("[GPC:Assumes:bit_cou:LessThan8]");
        };;
        SOB.val_bit_buf = 0;
        SOB.val_bit_cou = 0;

        //:==================================================://
        //:Get length & check against its one's compliment.
        //:Q: Why the +4 ? Because[ val_in_cou++ ]4 times?
        //:Q: Is 2 an error code for not enough input?
        //:Q: is len assumed to be a 16 bit short?
        //:==================================================://
        if( SOB.val_inn_cou + 4 > SOB.val_inn_len ){
            return( 0 + 2 ); /** Not enough Input **/
        }else{

            //|  INN[  AA , BB , CC , DD ]   ----------------|//
            //|  len(  BB   AA           )   ----------------|//
            //|  chk(            DD   CC )   ----------------|//
            len  =( 0x0000 );
            chk  =( 0x0000 );
            let AA = INN[ SOB.val_inn_cou++ ];
            let BB = INN[ SOB.val_inn_cou++ ];
            let CC = INN[ SOB.val_inn_cou++ ];
            let DD = INN[ SOB.val_inn_cou++ ];

            len |=( AA << 0 )>>>0; //: 0x BB AA
            len |=( BB << 8 )>>>0; //: 0x BB AA
            chk |=( CC << 0 )>>>0; //: 0x CC DD
            chk |=( DD << 8 )>>>0; //: 0x CC DD

            if( len != ( ~chk ) ){
                /** Didn't match complement!**/
                return( 0 - 2 ); 
            };;
        };;
        //:==================================================://

        //| Copy len bytes from[ INN ]to[ OUT ]              |//
        //| As of DATE[2020_07_22] madler's puff.c has an    |//
        //| off-by-1 error in this comparison.               |//
        //| Line 182 of puff.c                               |//
        //| github.com/madler/                               |//
        //| zlib/blob/master/contrib/puff/puff.c             |//
        if( SOB.val_inn_cou + len  //:Last_Byte_Index
          > SOB.val_inn_len +  0   //:First_Out_Of_Bounds_Byte
    
            //|  The DATA[ index++ ] pattern I am seeing     |//
            //|  tells me val_inn_cou RESTS on data that     |//
            //|  has NOT been consumed yet.                  |//
            //|                                              |//
            //|  I think this code has a bug.                |//
            //|  CUR: val_inn_cou + len >  val_inn_len       |//
            //|  FIX: val_inn_cou + len >= val_inn_len       |//
            //|- - - - - - - - - - - -- - - - - - - - - - - -|//
            //|  IF:         len == 4                        |//
            //|  IF: val_inn_cou == 2                        |//
            //|  IF: val_inn_len == 7                        |//
            //|          |<--- TAKE 4 -->| OOB               |//
            //|  [ 0 | 1 | 2 | 3 | 4 | 5 ][ 6 ]              |//
            //|  [        cou  1   2   3    4 ]              |//
            //|  |<----- val_inn_len==7 ----->|              |//
            //|- - - - - - - - - - - -- - - - - - - - - - - -|//
            //|  If you have an array with 1 byte:           |//
            //|  And you try to take 2 bytes...              |//
            //|  SOB.val_inn_cou + 2 == ( 0 + 2 ) == 2       |//
            //|  SOB.val_inn_len =================== 1       |//
            //|  This is out of bounds, but ( 2 > 2 )        |//
            //|  is false.                                   |//
            //|                                              |//
            //|  Unless val_inn_cou starts counting at 1...  |//
            //|  But that wouldn't make sense.               |//
            //|  And... val_inn_cou does NOT.                |//
            //|- - - - - - - - - - - -- - - - - - - - - - - -|//
            //| NO. You are wrong. Comparison is ">" not ">="|//
            //|                                              |//
            //| [ 0 ]                                        |//
            //|   |                                          |//
            //|  cou==0                                      |//
            //|  cou+len==1 (if taking just 1)               |//
            //| ( cou + len ) > ( val_inn_len )              |//
            //| (  0  +  1  ) > (      1      ) ? NO         |//
            //|                                              |//
            //| Take 2 instead of 1.                         |//
            //| (  0  +  2  ) > (      1      ) ? YES        |//

        ){  

            //:Not enough input.
            //:JMIM NOTE: Seems that val_inn_cou
            //:           can be thought of as a "count"
            //:           or "seek position" variable.
            //:           I didn't get what this block was
            //:           for until I realized this.
            return( 2 ); 

        };;

        if( OUT != null ){

            //:                                              ://
            //:   val_out_cou == 0                           ://
            //:        |                                     ://
            //:     [ 0xFF ] <--OUT (output buffer)          ://
            //:                  val_out_len==1              ://
            //:                                              ://
            //:   Try taking 2 instead of 1 byte:            ://
            //:   ( val_out_cou + 2 ) > ( val_out_len )?     ://
            //:   Yes it is. Comparison is ">" NOT ">="      ://
            if( SOB.val_out_cou + len 
              > SOB.val_out_len 
            ){
                return( 1 ); //:Not enough output space.
            };;
            while( len-- ){
                OUT[ SOB.val_out_cou++ ]=(
                INN[ SOB.val_inn_cou++ ]
                );;
            };;

        }else{
            //:Just scanning.
            //:I think this is the 1st pass of a 2 pass hack.
            //:Algorithm requires you to know the final size
            //:of the decompressed data so you can allocate
            //:enough space for output buffer. Since I am going
            //:to use this code to deflate PNG files, I should
            //:NOT need this branch of code as I can calculate
            //:size of uncompressed data from headers.
            //:However, keeping the 2-pass method in might
            //:help avoid buffer overflow attacks since I can
            //:verify deflated data matches header.
            ( SOB.val_out_cou ) += ( len );
            ( SOB.val_inn_cou ) += ( len );
        };;
        
        return(  0  ); //:Return_Status_Code_Zero

    };; //:///////////////////////////////| GPC_Pro_Sto_Blo |://


    GEP_UND( GPC_NUM_FIX /** puff.c : FIXLCODES    **/ );
    GEP_UND( GPC_MAX_BIT /** puff.c : MAXBITS      **/ );
    GEP_UND( GPC_MAX_LIT /** puff.c : MAXLCODES    **/ );
    GEP_UND( GPC_MAX_DIS /** puff.c : MAXDCODES    **/ );
    GEP_UND( GPC_MAX_L_D /** puff.c : MAXCODES     **/ );
 
//:PPPPPPPPPPPPPPPPPPPP[ PUFF.C : ABOVE ]PPPPPPPPPPPPPPPPPPPP://

    //:FS:File_Scope_Variables:(BELOW):----------------------://
    //:FSFSFSFSFSFSFSFSFSFSFSFSFSFSFSFSFSFSFSFSFSFSFSFSFSFSFS://

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


    //:FSFSFSFSFSFSFSFSFSFSFSFSFSFSFSFSFSFSFSFSFSFSFSFSFSFSFS://
    //:FS:File_Scope_Variables:(ABOVE):----------------------://


//|FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF|//
//| ----------------- ( FUNCTION_DIVIDER ) ----------------- |//
//|FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF|//


    const GEP_Log =function( msg_log ){ "use strict"

        console.log("[GEP_Log]:(" + msg_log + ")" );
    };;

//|FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF|//
//| ----------------- ( FUNCTION_DIVIDER ) ----------------- |//
//|FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF|//
    
    //:Is_ASCii_letter_a_HExadecimal_Character
    //:Inverse_Of[ GEP_hec_ISA_asc ]
    //:Returns NON-negative if true.
    //:And returns the decimal value of [ chr_asc ] so we
    //:can re-use this function for conversion.
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

    //:Inverse_Of[ GEP_asc_ISA_hec ]:
    //:Written in a way that it both check for truth and
    //:does conversion all in one function.
    const GEP_hec_ISA_asc = function(
        int_hec //:Integer_Hexadecimal_Code, 0-to-15
    ){

        if(!(int_hec >= 0 && int_hec < 16) ){
            throw("[GEP_ERR:OOB:hec_ISA_asc]");
        };;

        //:Before converting to string (asc/ascii)
        //:We need to offset the integer into 
        //:the ascii range of charters "0" -to- "9"
        //:Or the range "A" -to- "F" depending.
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

    

//|FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF|//
//| ----------------- ( FUNCTION_DIVIDER ) ----------------- |//
//|FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF|//

    //:HExCharacter_ConvertTO_HExByte
    //:Inserse_Of[ GEP_heb_CTO_hec ]
    const GEP_hec_CTO_heb =function( 
              hec //: C99[ char hec[ 2 ] ]
    ){ "use strict"

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

    //|FFFFFFFFFFFFFFFFF[ FUNCTION_DIVIDER ]FFFFFFFFFFFFFFFFF|//

    //:HExByte_ConvertTO_HExCharacter:
    //:Inverse_Of[ GEP_hec_CTO_heb ]
    const GEP_heb_CTO_hec =function(
          val_heb //:HexByte:PassedBy:VALUE
    ,     poi_hec //:HexChar:PassedBy:POINTER (AKA:car_bu2)
    ){ "use strict"

        let lit=(  val_heb      % 16 ); //: 1's place.
        let big=( (val_heb-lit) / 16 ); //:16's place.

        //:Inverse_Of[ GEP_asc_CTO_int ]
        poi_hec[ 0 ]=GEP_hec_ISA_asc( big );
        poi_hec[ 1 ]=GEP_hec_ISA_asc( lit );

    };;
        
//|FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF|//
//| ----------------- ( FUNCTION_DIVIDER ) ----------------- |//
//|FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF|//

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

//|FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF|//
//| ----------------- ( FUNCTION_DIVIDER ) ----------------- |//
//|FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF|//

    //:Static version of GEP_Str_CTO_Hex_001 used to
    //:load file-scoped variables for testing.
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

//|FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF|//
//| ----------------- ( FUNCTION_DIVIDER ) ----------------- |//
//|FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF|//


    //:Inverse of GEP_Str_CTO_Hex, but does it all in one
    //:go. Can use this function to create hex-dumps of
    //:PNG files and store the PNG in your javascript source
    //:like you would a base64 string.
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
 
    //: Unsafe because the caller if required to free  :-----://
    //: the memory that this function mallocs.         :-----://
    //: You'll also be expected to know the length of  :-----://
    //: the returned pointer is 2X the input.          :-----://
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





//|FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF|//
//| ----------------- ( FUNCTION_DIVIDER ) ----------------- |//
//|FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF|//
    
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

//|FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF|//
//| ----------------- ( FUNCTION_DIVIDER ) ----------------- |//
//|FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF|//

    //:C99 style library initializer function:
    const GEP_Ini=function( /** void **/ ){ "use strict"

        if( GEP_MAC_DEB > 0 ){

            GEP_Put_Tes_Dat();

            GEP_Tes_Hex_Dum();

        };;

    };;

//|FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF|//
//| ----------------- ( FUNCTION_DIVIDER ) ----------------- |//
//|FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF|//
    
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
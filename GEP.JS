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

    //:FUNCTION_INDEX:
    //:     [#]: C99_Polyfills
    //:     [#]: File_Scope_Variables
    
    //://////////////////////////////////////////////////////://
    //:[ CDIE : Constants_Defines_And_Informal_Enumerations ]://

        //: VIT: Variable_Integer_Tags (S_Types)
            const VIT_GPC_SOB =( 1 );
            const VIT_GPC_HUF =( 2 );


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

//:PPPPPPPPPPPPPPPPPPPP[ PUFF.C : BELOW ]PPPPPPPPPPPPPPPPPPPP://
//:SUB_SECTION_INDEX:(BELOW):================================://

//:GPC_001: Defines/Consts
//:GPC_002: State Object


//:SUB_SECTION_INDEX:(ABOVE):================================://
//:GPC_001:==================================================://

    //:#PUFF_C_TRANSCRIBE#

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

//:==================================================:GPC_001://
//:GPC_002:==================================================://

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

//:==================================================:GPC_002://
//:GPC_003:==================================================://

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

//:==================================================:GPC_###://
//:GPC_###:==================================================://

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

            //+----------------------------------------------+//
            //| https://www.w3.org/Graphics/PNG/RFC-1951     |//
            //|                                              |//
            //|     0        1                               |//
            //|                                              |//
            //| +--------+--------+                          |//
            //|                                              |//
            //| |00001000|00000010|                          |//
            //|                                              |//
            //| +--------+--------+                          |//
            //|                                              |//
            //|  ^        ^                                  |//
            //|                                              |//
            //|  |        |                                  |//
            //|                                              |//
            //|  |        + more significant byte = 2 x 256  |//
            //|                                              |//
            //|  + less significant byte = 8                 |//
            //+----------------------------------------------+//

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

//:==================================================:GPC_###://
//:GPC_###:==================================================://

    //+------------------------------------------------------+//
    //|  Huffman code decoding tables. count[1..MAX_BIT] is  |//
    //|  the number of symbols of each length,which for a    |//
    //|  canonical code are stepped through in order.        |//
    //|  symbol[] are the symbol values in canonical order,  |//
    //|  where the number of entries is the sum of the       |//
    //|  counts in count[]. The decoding process can be      |//
    //|  seen in the function decode() below.                |//
    //+------------------------------------------------------+//
    //|  JMIM_THOUGHT: You don't have to store the huffman   |//
    //|                tree with the data IF you have a      |//
    //|                predictable way to create the huffman |//
    //|                tree from frequency table.            |//
    //+------------------------------------------------------+//
    const NEW_gpc_huf=function(/**void**/){ "use strict"
    return(Object.seal({

    /**/    vit : (  VIT_GPC_HUF  )

        /* number of symbols of each length            */
        /* I think the name frequency (arr_fre) would  */
        /* make more sense here than count (arr_cou ). */
    ,   arr_fre : POI_Signed_Short()  //:Arrays_Are_Pointers
    ,   arr_sym : POI_Signed_Short()  //:Arrays_Are_Pointers

    }));};;

    //:Denotes either:
    //:     1: Stack allocated value type
    //:     2: Value type allocated as member of struct.
    //:     In other words, when coverting to C99, instances
    //:     of this function call with NOT result in malloc.
    const VAL_gpc_huf=function( /**void**/){ "use struct"
        return( NEW_gpc_huf() );
    };;

//:==================================================:GPC_###://
//:GPC_###:==================================================://

    //+------------------------------------------------------+//
    //|  Decode a code from the stream s using huffman       |//
    //|  table h. Return the symbol or a negative value if   |//
    //|  there is an error. If all of the lengths are zero,  |//
    //|  i.e. an empty code,or if the code is incomplete     |//
    //|  and an invalid code is received,then -10 is         |//
    //|  returned after reading MAX_BIT bits.                |//
    //+------------------------------------------------------+//
    //|  Format notes:                                       |//
    //+------------------------------------------------------+//
    //|  The codes as stored in the compressed data are      |//
    //|  bit-reversed relative to a simple integer ordering  |//
    //|  of codes of the same lengths. Hence below the bits  |//
    //|  are pulled from the compressed data one at a time   |//
    //|  and used to build the code value reversed from      |//
    //|  what is in the stream in order to permit simple     |//
    //|  integer comparisons for decoding. A table-based     |//
    //|  decoding scheme (as used in zlib) does not need to  |//
    //|  do this reversal.                                   |//
    //+------------------------------------------------------+//
    //|  The first code for the shortest length is all       |//
    //|  zeros. Subsequent codes of the same length are      |//
    //|  simply integer increments of the previous code.     |//
    //|  When moving up a length,a zero bit is appended to   |//
    //|  the code. For a complete code,the last code of the  |//
    //|  longest length will be all ones.                    |//
    //+------------------------------------------------------+//
    //|  JMIM NOTE:                                          |//
    //|     Canonical huffman codes are sorted first by      |//
    //|     bit length of their sequence. Then sequences     |//
    //|     that have the same length (frequency) are sorted |//
    //|     alphabetically.                                  |//
    //|                                                      |//
    //| CC |  AC |  BC |  CA |  CB |   AA |   AB |   BA | AB |//
    //| 10 | 110 | 001 | 111 | 011 | 0000 | 0001 | 0101 |0110|//
    //|  2 |   3 |   3 |   3 |   3 |    4 |    4 |    4 |   4|//
    //| 00 | 010 | 011 | 100 | 101 | 1100 | 1101 | 1110 |1111|//
    //| When you get to the next code length:                |//
    //|     1: Add 1 to previous code.                       |//
    //|     2: THEN append 0 to right hand side of code.     |//
    //|     3: You now have first code in the set of codes   |//
    //|        of that length.                               |//
    //|                                                      |//
    //| https://www.youtube.com/watch?v=yXM4wq_arB0          |//
    //|                                                      |//
    //|                                                      |//
    //+------------------------------------------------------+//
    //|  Incomplete codes are handled by this decoder,since  |//
    //|  they are permitted * in the deflate format. See     |//
    //|  the format notes for fixed() and dynamic().         |//
    //+------------------------------------------------------+//  
    //|#PCFN#                                                |//
    //|     #ifdef SLOW                                      |//
    //|          local int decode(                           |//
    //|              struct state *s                         |//
    //|          ,   const struct huffman *h)                |//
    //+------------------------------------------------------+//
    const GPC_Dec_Slo=function(
        poi_gpc_sob /** pointer to gpc_sob **/
    ,   poi_gpc_huf /** pointer to gpc_huf **/
    ){


    };; //:///////////////////////////////////| GPC_Dec_Slo |://


//:==================================================:GPC_###://
//:GPC_###:==================================================://


    //|A faster version of decode() for real applications of |//
    //|this code. It's not as readable,but it makes puff()   |//
    //|twice as fast. And it only makes the code a few       |//
    //|percent larger.                                       |//
    //|                                                      |//
    //|JMIM_COMMENT:                                         |//
    //|    By transcribing both the slow and fast methods,   |//
    //|    I can hackishly unit test by seeing if the two    |//
    //|    algorithms produce the same data.                 |//
    const GPC_Dec_Fas=function(
        poi_gpc_sob /** pointer to gpc_sob **/
    ,   poi_gpc_huf /** pointer to gpc_huf **/
    ){


    };; //:///////////////////////////////////| GPC_Dec_Fas |://
    

//:==================================================:GPC_###://
//:GPC_###:==================================================://

    //+======================================================+//
    //|  GPC_Con : Construct                                 |//
    //+======================================================+//
    //|  Given the list of code lengths length[0..NPI-1]     |//
    //|  representing a canonical Huffman code for NPI       |//
    //|  symbols,construct the tables required to decode     |//
    //|  those codes. Those tables are the number of codes   |//
    //|  of each length,and the symbols sorted by length,    |//
    //|  retaining their original order within each length.  |//
    //|  The return value is zero for a complete code set,   |//
    //|  negative for an over- subscribed code set,and       |//
    //|  positive for an incomplete code set. The tables     |//
    //|  can be used if the return value is zero or          |//
    //|  positive,but they cannot be used if the return      |//
    //|  value is negative. If the return value is zero,it   |//
    //|  is not possible for decode() using that table to    |//
    //|  return an error--any stream of enough bits will     |//
    //|  resolve to a symbol. If the return value is         |//
    //|  positive,then it is possible for decode() using     |//
    //|  that table to return an error for received codes    |//
    //|  past the end of the incomplete lengths.             |//
    //|                                                      |//
    //|JMIM: TL;DR ------------------------------------------|//
    //|     TABLES:                                          |//
    //|     1: Code lengths grouped by frequency.            |//
    //|                                                      |//
    //|     2:  Symbols sorted by length.                    |//
    //|         Same length symbols sorted lexographically.  |//
    //|         Aka: Symbols within group alphabetized.      |//
    //|                                                      |//
    //|RETURN_CODE(R_C)TABLE:                                |//
    //|     R_C| TYPE_OF_CODE_SET | USE ?  | CAN_THROW?|     |//
    //|     NEG: Over-Subscribed  ( NO_USE :   N/A     )     |//
    //|     ZER:        Complete  ( USABLE : NOTHROWME )     |//
    //|     POS:     IN-complete  ( USABLE : THROWABLE )     |//
    //|------------------------------------------------------|//    
    //|  Not used by decode(),but used for error checking,   |//
    //|  [ poi_gpc_huf->count[0] ] is the number of the      |//
    //|  [ NPI ] symbols not in the code.                    |//
    //|  So                                                  |//
    //|     ( NPI - (poi_gpc_huf.count[0] ) )                |//
    //|  is the number of codes.                             |//
    //|                                                      |//
    //|  This is useful for checking for incomplete codes    |//
    //|  that have more than one symbol,which is an error    |//
    //|  in a dynamic block.                                 |//
    //|------------------------------------------------------|//
    //|  Assumption:                                         |//
    //|  for all i in 0..NPI-1,0 <= length[i] <= MAXBITS     |//
    //|  This is assured by the construction of the length   |//
    //|  arrays in dynamic() and fixed() and is not          |//
    //|  verified by construct().                            |//
    //|------------------------------------------------------|//
    //|  JMIM TL;DR: arr_cod_len[#] is non-negative.         |//
    //|              arr_cod_len[#] is LESS than MAXBITS     |//
    //|                                                      |//
    //| Format notes:                                        |//
    //|                                                      |//
    //| - Permitted and expected examples of incomplete      |//
    //|   codes are one of the fixed codes and any code with |//
    //|   a single symbol which in deflate is coded as one   |//
    //|   bit instead of zero bits. See the format notes for |//
    //|   fixed() and dynamic().                             |//
    //|                                                      |//
    //|                                                      |//
    //|   - Within a given code length,the symbols are kept  |//
    //|   in ascending order for the code bits definition.   |//
    //+======================================================+//
    const GPC_Con=function(  //://///////////////////////////://
        poi_gpc_huf //: Pointer to huffman struct.           ://
    ,   arr_cod_len //: Code Lengths array, pointer to short.://
    ){  "use strict"//:///////////////////////////| GPC_Con |://

        //:TODO

    };; //:///////////////////////////////////////| GPC_Con |://
    //+======================================================+//


        
    
    
    //+------------------------------------------------------+//
    //|  GPC_Cod: GPC_Codes                                  |//
    //+------------------------------------------------------+//
    //|  Decode literal/length and distance codes until an   |//
    //|  end-of-block code.                                  |//
    //|------------------------------------------------------|//
    //|  Format notes:                                       |//
    //|------------------------------------------------------|//
    //|  Compressed data that is after the block type if     |//
    //|  fixed or after the code description if dynamic is   |//
    //|  a combination of literals and length/distance       |//
    //|  pairs terminated by and end-of-block code.          |//
    //|                                                      |//
    //|  Literals are simply Huffman coded bytes. A          |//
    //|  length/distance pair is a coded length followed by  |//
    //|  a coded distance to represent a string that occurs  |//
    //|  earlier in the uncompressed data that occurs again  |//
    //|  at the current location.                            |//
    //|                                                      |//
    //|  JMIM_UNDERSTANDING: - - - - - - - - - - - - - - - - |//
    //|                                                      |//
    //|  if( IS_COMPRESSED_DATA( data ) ){                   |//
    //|  if((AFT_BLK_TYP( dat ) && IS_FIX( data ) )          |//
    //|  || (AFT_COD_DES( dat ) && IS_DYN( data ) )          |//
    //|  ){                                                  |//
    //|      IS_COMBINATION:                                 |//
    //|          1. Literals                                 |//
    //|          2. [ length , distance ] pairs (len_dis)    |//
    //|          3. </end_of_block>                          |//
    //|                                                      |//
    //|  };;                                                 |//
    //|                                                      |//
    //|  LITERAL: Huffuman encoded byte.                     |//
    //|  len_dis: huffman  encoded byte with                 |//
    //|           "length" and "distance" values             |//
    //|           bitpacked into it. (I think)               |//
    //|                                                      |//
    //|------------------------------------------------------|//
    //|  Literals,lengths,and the end-of-block code are      |//
    //|  combined into a single code of up to 286 symbols.   |//
    //|  They are 256 literals (0..255),29 length symbols    |//
    //|  (257..285),and the end-of-block symbol (256).       |//
    //| - - - - - - - - - - - - ---- - - - - - - - - - - - - |//
    //|  [  0  - 255 ] : 0x000 - 0x0FF : LITERALS            |//
    //|  [ 256 - 256 ] : 0x100 - 0x100 : END_OF_BLOCK_SYMBOL |//
    //|  [ 257 - 285 ] : 0x101 - 0x11D : LENGTH Symbols      |//
    //|------------------------------------------------------|//
    //|  There are 256 possible lengths (3..258),and so 29   |//
    //|  symbols are not enough to represent all of those.   |//
    //|  Lengths 3..10 and 258 are in fact represented by    |//
    //|  just a length symbol. Lengths 11..257 are           |//
    //|  represented as a symbol and some number of extra    |//
    //|  bits that are added as an integer to the base       |//
    //|  length of the length symbol. The number of extra    |//
    //|  bits is determined by the base length symbol.       |//
    //|  These are in the static arrays below,lens[] for     |//
    //|  the base lengths and lext[] for the corresponding   |//
    //|  number of extra bits.                               |//
    //| - - - - - - - - - - - - ---- - - - - - - - - - - - - |//
    //|  [ 3 - 258 ]: 0x003 - 0x102 : Possible Lengths       |//
    //|  [ 3 -  10 ]: 0x003 - 0x00A : JUST_A_LENGTH_SYMBOL   |//
    //|  [   258   ]: 0x102 - 0x102 : JUST_A_LENGTH_SYMBOL   |//
    //|  [11 - 257 ]: 0x00B - 0x101 : SYMBOL_AND_EXTRA_BITS  |//
    //|------------------------------------------------------|//
    //|  The reason that 258 gets its own symbol is that     |//
    //|  the longest length is used often in highly          |//
    //|  redundant files. Note that 258 can also be coded    |//
    //|  as the base value 227 plus the maximum extra value  |//
    //|  of 31. While a good deflate should never do this,   |//
    //|  it is not an error,and should be decoded properly.  |//
    //|                                                      |//
    //|  ( 227 + 31 == 258 )                                 |//
    //|------------------------------------------------------|//
    //|  If a length is decoded,including its extra bits if  |//
    //|  any,then it is followed a distance code. There are  |//
    //|  up to 30 distance symbols. Again there are many     |//
    //|  more POSSIBLE_DISTANCES (1..32768),so extra bits    |//
    //|  are added to a base value represented by the        |//
    //|  symbol. The distances 1..4 get their own symbol,    |//
    //|  but the rest require extra bits. The base           |//
    //|  distances and corresponding number of extra bits    |//
    //|  are below in the static arrays dist[] and dext[].   |//
    //|                                                      |//
    //|  30                : NUMBER_OF_DISTANCE_SYMBOLS      |//
    //| [ 1      - 32768 ] : POSSIBLE_DISTANCES              |//
    //| [ 0x0001 - 0x8000] : POSSIBLE_DISTANCES              |//
    //|          [ 1 - 4 ] : GET_OWN_SYMBOL                  |//
    //|------------------------------------------------------|//
    //|  LITERAL_BYTES are simply written to the output. A   |//
    //|  LEN_DIST_PAIR pair is an instruction to copy        |//
    //|  previously uncompressed bytes to the output. The    |//
    //|  copy is from distance bytes back in the output      |//
    //|  stream,copying for length bytes.                    |//
    //|                                                      |//
    //|  LITERAL_BYTES: No data transformation. (  value)    |//
    //|  LEN_DIST_PAIR:    Backwards reference. (pointer)    |//
    //|------------------------------------------------------|//
    //|  Distances pointing before the beginning of the      |//
    //|  output data are not permitted.                      |//
    //|------------------------------------------------------|//
    //|  Overlapped copies,where the length is greater than  |//
    //|  the distance,are allowed and common. For example,a  |//
    //|  distance of one and a length of 258 simply copies   |//
    //|  the last byte 258 times. A distance of four and a   |//
    //|  length of twelve copies the last four bytes three   |//
    //|  times. A simple forward copy ignoring whether the   |//
    //|  length is greater than the distance or not          |//
    //|  implements this correctly. You should not use       |//
    //|  memcpy() since its behavior is not defined for      |//
    //|  overlapped arrays. You should not use memmove() or  |//
    //|  bcopy() since though their behavior -is- defined    |//
    //|  for overlapping arrays,it is defined to do the      |//
    //|  wrong thing in this case.                           |//
    //|                                                      |//
    //|  JMIM_COMMENT:                                       |//
    //|     Overflow is used to encode runline sequences.    |//
    //|     < B , L  > : < BACKWARDS_DISTANCE, LENGTH >      |//
    //|     < 1 , 40 > : "A"    copied 40 times.             |//
    //|     < 2 , 40 > : "AB"   copied 20 times.             |//
    //|     < 4 , 40 > : "ABCD" copied 10 times.             |//
    //|------------------------------------------------------|//
    //|PCFN:local int codes(...){...}                        |//
    //+------------------------------------------------------+//
    const GPC_Cod=function(
        poi_gpc_sob //:Pointer to state object
    ,   poi_huf_len //:Huffman Struct of[Length|Literal]Codes.
    ,   poi_huf_dis //:Huffman Struct of[   distance   ]Codes.
    ){ "use strict"


    };; //:///////////////////////////////////////| GPC_Cod |://


    
    //+------------------------------------------------------+//
    //|  GPC_Fix : GPC_Fixed                                 |//
    //+------------------------------------------------------+//
    //|  Process a fixed codes block.                        |//
    //|------------------------------------------------------|//
    //|  Format notes:                                       |//
    //|------------------------------------------------------|//
    //|  This block type can be useful for compressing       |//
    //|  small amounts of data for which the size of the     |//
    //|  code descriptions in a dynamic block exceeds the    |//
    //|  benefit of custom codes for that block. For fixed   |//
    //|  codes,no bits are spent on code descriptions.       |//
    //|  Instead the code lengths for literal/length codes   |//
    //|  and distance codes are fixed. The specific lengths  |//
    //|  for each symbol can be seen in the "for" loops      |//
    //|  below.                                              |//     
    //|                                                      |//
    //|  JMIM_COMMENT:                                       |//
    //|  I think this means that no meta-data like           |//
    //|  a huffman tree, huffman table, or frequency table   |//
    //|  is encoded alongside "fixed" type data.             |//
    //|------------------------------------------------------|//                                                        
    //|  The literal/length code is complete,but has two     |//
    //|  symbols that are invalid and should result in an    |//
    //|  error if received. This cannot be implemented       |//
    //|  simply as an incomplete code since those two        |//
    //|  symbols are in the "middle" of the code. They are   |//
    //|  eight bits long and the longest literal/length      |//
    //|  code is nine bits. Therefore the code must be       |//
    //|  constructed with those symbols,and the invalid      |//
    //|  symbols must be detected after decoding.            |//                                                     
    //|                                                      |//
    //|  JMIM_COMMENT:                                       |//
    //|  Detected after decoding HOW much data?              |//
    //|  Like 2 passes over all the data, or having to       |//
    //|  intermittenly look backwards every once and         |//
    //|   a while to see if there was an error?              |//
    //|                                                      |//
    //|  JMIM_COMMENT: (My understanding of above)           |//
    //|  Erroneous data somehow does not evenly fit          |//
    //|  into bytes and therefor is hard to detect           |//
    //|  immediately.                                        |//
    //|------------------------------------------------------|//
    //|  The fixed distance codes also have two invalid      |//
    //|  symbols that should result in an error if           |//
    //|  received. Since all of the distance codes are the   |//
    //|  same length,this can be implemented as an           |//
    //|  incomplete code. Then the invalid codes are         |//
    //|  detected while decoding.                            |//
    //|                                                      |//
    //|  JMIM_COMMENT: The two invalid distance codes can    |//
    //|                be detected quickly on the fly        |//
    //|                since all distance codes are the      |//
    //|                same number of bits and thus          |//
    //|                can be easily scanned by some         |//
    //|                type of scrolling data viewport.      |//
    //|------------------------------------------------------|//
    //|  TL;DR:                                              |//
    //|     1: Fixed codes for small compressed blocks.      |//
    //|     2: Two TRAP [literal/length] codes denote error. |//
    //|     3: Two TRAP [   distance   ] codes denote error. |//
    //+------------------------------------------------------+//
    const GPC_Fix=function(
        poi_gpc_sob
    ){ "use strict"


    };; //:///////////////////////////////////////| GPC_Fix |://

    //+------------------------------------------------------+//
    //| GPC_Dyn : GPC_Dynamic                                |//
    //+------------------------------------------------------+//
    //|  Process a dynamic codes block.                      |//
    //|------------------------------------------------------|//
    //|  Format notes:                                       |//
    //|------------------------------------------------------|//
    //|  A dynamic block starts with a description of the    |//
    //|  literal/length and distance codes for that block.   |//
    //|  New dynamic blocks allow the compressor to rapidly  |//
    //|  adapt to changing data with new codes optimized     |//
    //|  for that data.                                      |//
    //|------------------------------------------------------|//
    //|  The codes used by the deflate format are            |//
    //|  "canonical",which means that the actual bits of     |//
    //|  the codes are generated in an unambiguous way       |//
    //|  simply from the number of bits in each code.        |//
    //|  Therefore the code descriptions are simply a list   |//
    //|  of code lengths for each symbol.                    |//
    //| - - - - - - - - - - - - ---- - - - - - - - - - - - - |//
    //|  JMIM_COMMENT:                                       |//
    //|  So the data is NOT sorted in any way to begin with. |//
    //|  Your job to group symbols by LEN and then           |//
    //|  lexographically sort within each group of           |//
    //|  same LEN before assigning the proper canonical      |//
    //|  huffman code.                                       |//
    //|                                                      |//
    //|  JMIM_COMMENT:( MY GUESS )                           |//
    //|  1: LEN = ARR_LEN[ SYMBOL ]                          |//
    //|  2: GROUP SYMBOL by LEN.                             |//
    //|  3: Lexographically sort each SYMBOL within GROUP.   |//
    //|------------------------------------------------------|//
    //|  The code lengths are stored in order for the        |//
    //|  symbols,so lengths are provided for each of the     |//
    //|  literal/length symbols,and for each of the          |//
    //|  distance symbols.                                   |//
    //|                                                      |//
    //|  JMIM_COMMENT:                                       |//
    //|                                                      |//
    //|  Don't know what this means.                         |//
    //|  "Code lengths are stored in order for the symbols"  |//
    //|  So... Does that mean:                               |//
    //|                                                      |//
    //|  1. Ordered+Grouped by length                        |//
    //|     AND symbols within each group sorted.            |//
    //|                                                      |//
    //|  2. Simply Ordered by length. Which implies          |//
    //|     grouping, of symbols by length, but no           |//
    //|     sorting within group.                            |//
    //|                                                      |//
    //|  JMIM_COMMENT:                                       |//
    //|  Don't know what this means:                         |//
    //|  "So lengths are provided for each of the    "       |//
    //|  "literal/length symbols, and for each of the"       |//
    //|  "distance symbols.                          "       |//
    //|                                                      |//
    //|  Since huffman tree can be derived just from         |//
    //|  frequency (length) information when using canonical |//
    //|  huffman codes, I think this means there are         |//
    //|  two huffman table structs. One for "literal/length" |//
    //|  codes and one for "distance" codes.                 |//
    //|                                                      |//
    //|  ...Even if that is what they are saying...          |//
    //|  ...I don't know why "so" is used. That implies      |//
    //|  a "causation" or "necessitation".                   |//
    //|------------------------------------------------------|//
    //|  If a symbol is not used in the block,this is        |//
    //|  represented by a zero as as the code length. This   |//
    //|  does not mean a zero-length code,but rather that    |//
    //|  no code should be created for this symbol. There    |//
    //|  is no way in the deflate format to represent a      |//
    //|  zero-length code.                                   |//
    //|                                                      |//
    //|  JMIM_COMMENT:                                       |//
    //|  If symbol is NOT in encoded data:                   |//
    //|     1: It is denoted by FREQUENCY (lenght) zero.     |//
    //|     2: Don't waste bits creating code for symbol.    |//
    //|                                                      |//
    //|  Example: If your text file is:                      |//
    //|  "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"         |//
    //|  You only need one huffman code. So in binary        |//
    //|  we could represent this text file as:               |//
    //|  "00000000000000000000000000000000000000000"         |//
    //|  assuming "A" is one SYMBOL.                         |//
    //|                                                      |//
    //|  Obviously, we cannot express other symbols if       |//
    //|  our huffman code is this short. But doesn't matter  |//
    //|  since the frequency (length) table has declared     |//
    //|  that no other symbols exist.                        |//
    //|------------------------------------------------------|//
    //|                                                      |//
    //|  The maximum number of bits in a code is 15,         |//
    //|  so the possible lengths for any code are 1..15.     |//
    //|                                                      |//
    //|  JMIM_COMMENT:                                       |//
    //|  Code length is measured in bits.                    |//
    //|  1111   : A  : Symbol "A" stored in code length==4.  |//
    //|  111000 : B  : Symbol "B" stored in code length==6.  |//
    //|                                                      |//
    //|------------------------------------------------------|//
    //|  The fact that a length of zero is not permitted     |//
    //|  for a code has an interesting consequence.          |//
    //|  Normally if only one symbol is used for a given     |//
    //|  code,then in fact that code could be represented    |//
    //|  with zero bits. However in deflate,that code has    |//
    //|  to be at least one bit. So for example,if only a    |//
    //|  single distance base symbol appears in a block,     |//
    //|  then it will be represented by a single code of     |//
    //|  length one,in particular one 0 bit. This is an      |//
    //|  incomplete code,since if a 1 bit is received,it     |//
    //|  has no meaning,and should result in an error. So    |//
    //|  incomplete distance codes of one symbol should be   |//
    //|  permitted,and the receipt of invalid codes should   |//
    //|  be handled.                                         |//
    //|                                                      |//
    //|  JMIM_COMMENT:                                       |//
    //|  If you only have 1 symbol, say "A".                 |//
    //|  Then your current block is just a bunch of          |//
    //|  "A" symbols like:                                   |//
    //|  "AAAAAAAAAAAAAAAAAAAAAAAAA"                         |//
    //|  And can be encoded as:                              |//
    //|  "0000000000000000000000000"                         |//
    //|  But then WTF does:                                  |//
    //|  "1111111111111111111111111"                         |//
    //|  Mean if you have only 1 symbol but 2 binary values? |//
    //|                                                      |//
    //|  ANSWER: "0" doesn't mean anything!                  |//
    //|  IMPLICATION:                                        |//
    //|     1. The most compact way to encode "A" is "1"     |//
    //|     2. Single "1" bit is not a complete huffman code.|//
    //|     3. We must allow incomplete huffman codes.       |//
    //|------------------------------------------------------|//
    //|  It is also possible to have a single                |//
    //|  literal/length code,but that code must be the       |//
    //|  end-of-block code,since every dynamic block has     |//
    //|  one. This is not the most efficient way to create   |//
    //|  an empty block (an empty fixed block is fewer       |//
    //|  bits),but it is allowed by the format. So           |//
    //|  incomplete literal/length codes of one symbol       |//
    //|  should also be permitted.                           |//
    //|                                                      |//
    //|  JMIM_COMMENT:                                       |//
    //|  An incomplete literal code of 1 bit can be used     |//
    //|  to denote an empty block. It isn't the most         |//
    //|  compact way to express it, but it is expressable    |//
    //|  under the rules and thus must be allowed.           |//
    //|                                                      |//
    //|  Real world analogy:                                 |//
    //|  var A = ( 10 ); //:Valid JavaScript, expresses 10.  |//
    //|  var A = ( 1+1+1+1+1+1+1+1+1+1 ); //:Also_Valid      |//
    //|                                                      |//
    //|  TL;DR: [ Valid/Legal != Good_Idea ]                 |//
    //|------------------------------------------------------|//
    //|  If there are only literal codes and no lengths,     |//
    //|  then there are no distance codes. This is           |//
    //|  represented by one distance code with zero bits.    |//
    //|                                                      |//
    //|  JMIM_COMMENT:                                       |//
    //|  References are stored as:                           |//
    //|  < distance backwards in bits , length in bits >     |//
    //|                                                      |//
    //|  If there are NO reference, you still need the       |//
    //|  "Length_Or_Literal" table. Because literals.        |//
    //|                                                      |//
    //|  But since the literal table contains no LENGTH(s)   |//
    //|  Then there are no LENGTHS(S) to be paired with      |//
    //|  distances, and the distances table can be empty.    |//
    //|------------------------------------------------------|//
    //|  The list of up to 286 length/literal lengths and    |//
    //|  up to 30 distance lengths are themselves            |//
    //|  compressed using Huffman codes and run-length       |//
    //|  encoding. In the list of code lengths,a 0 symbol    |//
    //|  means no code,a 1..15 symbol means that length,and  |//
    //|  the symbols 16,17,and 18 are run-length             |//
    //|  instructions. Each of 16,17,and 18 are follwed by   |//
    //|  extra bits to define the length of the run. 16      |//
    //|  copies the last length 3 to 6 times. 17 represents  |//
    //|  3 to 10 zero lengths,and 18 represents 11 to 138    |//
    //|  zero lengths. Unused symbols are common,hence the   |//
    //|  special coding for zero lengths.                    |//
    //|                                                      |//
    //|  JMIM_COMMENT:                                       |//
    //|  Yo dawg I heard you liked huffman codes so I got    |//
    //|  you some huffman codes for your huffman codes so    |//
    //|  that you can decode while you decode.               |//
    //|                                                      |//
    //|  JMIM_QUESTION:                                      |//
    //|  What is a "0" code. Is that...                      |//
    //|     1: A "0" bit?                                    |//
    //|     2: A "0" byte?                                   |//
    //|  I "THINK" the word "symbol" means "index value"     |//
    //|  as accessor to an [ array / table ] here.           |//
    //|                                                      |//
    //|  Hmm.. "symbol" is only an array index if it is      |//
    //|  a value [ 1 - 15 ] inclusive... So...               |//
    //|  "Symbol" means a "value". But when we say "symbol"  |//
    //|  we mean "collection of bits"?                       |//
    //|                                                      |//
    //|  Huffman encoding encodes "symbols" and some symbols |//
    //|  can be "literal" and others are <distance, jumpback>|//
    //|  pairs so... "collection of bits" I think is an      |//
    //|  accurate understanding of author's use of the       |//
    //|  word "symbol" here.                                 |//
    //|------------------------------------------------------|//
    //|  The symbols for 0..18 are Huffman coded,and so      |//
    //|  that code must be described first. This is simply   |//
    //|  a sequence of up to 19 three-bit values             |//
    //|  representing no code (0) or the code length for     |//
    //|  that symbol (1..7).                                 |//
    //|                                                      |//
    //|  JMIM_COMMENT:                                       |//
    //|                                                      |//
    //|  SYM_0_18[ 0 ]=binary( "000" ); //:Decimal: 0        |//
    //|  SYM_0_18[ 1 ]=binary( "001" ); //:Decimal: 1        |//
    //|  SYM_0_18[ 2 ]=binary( "010" ); //:Decimal: 2        |//
    //|  SYM_0_18[ 3 ]=binary( "011" ); //:Decimal: 3        |//
    //|  SYM_0_18[ 4 ]=binary( "100" ); //:Decimal: 4        |//
    //|  SYM_0_18[ 5 ]=binary( "101" ); //:Decimal: 5        |//
    //|  SYM_0_18[ 6 ]=binary( "110" ); //:Decimal: 6        |//
    //|  SYM_0_18[ 7 ]=binary( "111" ); //:Decimal: 7        |//
    //|  SYM_0_18[...]..                                     |//
    //|  SYM_0_18[18 ] <--LAST_ENTRY                         |//
    //|                                                      |//
    //|  JMIM_COMMENT:                                       |//
    //|                                                      |//
    //|  This doesn't sound like "huffman coded" this sounds |//
    //|  more like "3 bit integer". I guess in a way it is   |//
    //|  technically a huffman code.                         |//
    //|                                                      |//
    //|  JMIM_COMMENT:                                       |//
    //|                                                      |//
    //|  Wait. No.. The frequency table SYM_0_18 is an       |//
    //|  array of 3-bit integers. Arrays are just contiguous |//
    //|  strips of memory. The canonical huffman codes       |//
    //|  still need to be generated from this frequency      |//
    //|  table.                                              |//
    //|                                                      |//
    //|  JMIM_COMMENT:                                       |//
    //|  The author's original comment was correct, but      |//
    //|  for a second I thought it was written               |//
    //|  in a nonsensical but technically correct way.       |//
    //|------------------------------------------------------|//
    //|  A dynamic block starts with three fixed-size        |//
    //|  counts from which is computed the number of         |//
    //|  literal/length code lengths,the number of distance  |//
    //|  code lengths,and the number of code length code     |//
    //|  lengths (ok,you come up with a better name!) in     |//
    //|  the code descriptions.                              |//
    //| - - - - - - - - - - - - ---- - - - - - - - - - - - - |//
    //|  JMIM_COMMENT:                                       |//
    //|  Dynamic Block Header:                               |//
    //|     UNIQUE_LENGTH[ 0 ]: literal/length               |//
    //|     UNIQUE_LENGTH[ 1 ]: distance codes               |//
    //|     UNIQUE_LENGTH[ 2 ]: code lengths                 |//
    //|                                                      |//
    //|  For example: If you have:                           |//
    //|  4 distance codes:                                   |//
    //|             "1111"                                   |//
    //|             "1001"                                   |//
    //|             "0110"                                   |//
    //|             "0000"                                   |//
    //|  And NO OTHER DISTANCE CODES.                        |//
    //|  Then:                                               |//
    //|     UNIQUE_LENGTH[ 1 ] == 1                          |//
    //|                                                      |//
    //| - - - - - - - - - - - - ---- - - - - - - - - - - - - |//
    //|  For the literal/length and                          |//
    //|  distance codes,lengths after those provided are     |//
    //|  considered zero,i.e. no code. The code length code  |//
    //|  lengths are received in a permuted order (see the   |//
    //|  order[] array below) to make a short code length    |//
    //|  code length list more likely. As it turns out,very  |//
    //|  short and very long codes are less likely to be     |//
    //|  seen in a dynamic code description,hence what may   |//
    //|  appear initially to be a peculiar ordering.         |//
    //|                                                      |//
    //|  JMIM_COMMENT:                                       |//
    //|  I "THINK" they are saying:                          |//
    //|  " The hardcoded data looks weird but trust us "     |//
    //|  " we got these numbers by observation.        "     |//
    //|------------------------------------------------------|//
    //|  Given the number of literal/length code lengths     |//
    //|  (nlen) and distance code lengths (ndist),then they  |//
    //|  are treated as one long list of nlen + ndist code   |//
    //|  lengths. Therefore run-length coding can and often  |//
    //|  does cross the boundary between the two sets of     |//
    //|  lengths.                                            |//
    //|                                                      |//
    //|  JMIM_COMMENT:                                       |//
    //|  The two lists are in to sub-sections (partitions)   |//
    //|  of the same array, and decompression algorithm      |//
    //|  just sees one big chunk of bits. Don't worry.       |//
    //|------------------------------------------------------|//
    //|  So to summarize,the code description at the start   |//
    //|  of a dynamic block is three counts for the number   |//
    //|  of code lengths for the literal/length codes,the    |//
    //|  distance codes,and the code length codes. This is   |//
    //|  followed by the code length code lengths,three      |//
    //|  bits each. This is used to construct the code       |//
    //|  length code which is used to read the remainder of  |//
    //|  the lengths. Then the literal/length code lengths   |//
    //|  and distance lengths are read as a single set of    |//
    //|  lengths using the code length codes. Codes are      |//
    //|  constructed from the resulting two sets of lengths  |//
    //|  ,and then finally you can start decoding actual     |//
    //|  compressed data in the block.                       |//
    //|                                                      |//
    //|  JMIM_COMMENT:                                       |//
    //|  1: Header:                                          |//
    //|     Header[ 0 ]: HGH:[Literal/Length (codes)]        |//
    //|     Header[ 1 ]: HGH:[Distance       (codes)]        |//
    //|     Header[ 2 ]: HGH:[Code Lengths   (codes)]        |//
    //|                                                      |//
    //|  2: Code length code lengths. 3 bits each.           |//
    //|     Use to decode the REST of the code lengths       |//
    //|     to follow.                                       |//
    //|                                                      |//
    //|  3: Read [literal/length]+[distance] tables.         |//
    //|                                                      |//
    //|  4: Construct huffman codes.                         |//
    //|                                                      |//
    //|  5. Decode the compressed data using the huffman     |//
    //|     codes created in steps [1-4].                    |//
    //|------------------------------------------------------|//
    //|                                                      |//                           
    //|  For reference, a "typical" size for the code        |//
    //|  description in a dynamic block is around 80 bytes.  |//
    //|                                                      |//
    //+------------------------------------------------------+//
    //| GPC_Dyn : GPC_Dynamic                                |//
    //+------------------------------------------------------+//
    //[ #PCFN#[ local int dynamic(struct state *s) ]         ]//
    const GPC_Dyn=function( 
        poi_gpc_sob /** pointer to gpc_sob **/ 
    ){ "use strict"

        //:JMIM NOTE: Pretty sure where author of puff.c
        //:           says "count" they mean "frequency".
        //:           Within this function anyhow. In other
        //:           functions within puff.c "count" means
        //:           a position in an array.

        //:Original Comment:Number of lengths in descriptor 
        let num_len ;  //:Length_Of_Something_Not_Sure
        let num_dis ;  //:Number_Of_Distances_I_Guess
        let num_cod ;  //:Number_Of_Codes_Of_Some_Sort

        let     dex ;  //:index of lengths[ ]
        let     err ;  //:construct() return value


        //://////////////////////////////////////////////////://

        //: JMIM NOTE: Not 100% sure these variable re-names ://
        //:            are properly descriptive as I am      ://
        //:            re-naming based on PUFF.C original    ://
        //:            name and comment information.         ://
        //:            Will stick with these names until     ://
        //:            done porting function. Then will      ://
        //:            re-asses if names are good.           ://
        //: JMIM NOTE: [ len_fre ]AND[ len_sym ] might be    ://
        //:            better named [ lal_fre ]AND[ lal_sym ]://
        //:            For [ literal_and_length ].           ://
        //:            QUOTE: RFC_1951:                      ://
        //:            "using one code tree for literals"    ://
        //:            "and lengths and a separate code "    ://
        //:            "tree for distances ...          "    ://
        
        //: Signed short arrays (0xFFFF / BYTE*2) holding
        //: different types of data. Remember that arrays
        //: are always pointers to a datatype in C99.
        //: arr_l_d : lengths[MAXCODES]
        let arr_l_d = GEP_VAL_arr_sho( MAX_L_D );

        //: arr_len_fre: len_fre ( len_cou / lencnt[MAXBITS+1] )
        //: arr_len_sym: len_sym (           lensym[MAXLCODES] )
        let len_fre = GEP_VAL_arr_sho( MAX_BIT + 1 );
        let len_sym = GEP_VAL_arr_sho( MAX_LIT     );

        //: arr_len_fre: len_fre ( len_cou /distcnt[MAXBITS+1] )
        //: arr_len_sym: len_sym (          distsym[MAXDCODES] )
        let dis_fre = GEP_VAL_arr_sho( MAX_BIT + 1 );
        let dis_sym = GEP_VAL_arr_sho( MAX_DIS     );

        //://////////////////////////////////////////////////://

        let len_cod = VAL_gpc_huf( ); //:lencode
        let dis_cod = VAL_gpc_huf( ); //:distcode

        //:Permuations of code length codes:            -----://
        //:SEE[    www.w3.org/Graphics/PNG/RFC-1951 ]   -----://
        //:SEARCH[ 10, 5, 11, 4, 12, 3              ]   -----://
        //:SECTION[                                     -----://
        //:     3.2.7. Compression with dynamic         -----://
        //:     Huffman codes (BTYPE=10)                -----://
        //:]SECTION                                     -----://
        let     ord = GEP_VAL_arr_sho( 19 );
                ord[ 0 ]=( 16 ); //: 0x10 , b: 0001_0000
                ord[ 1 ]=( 17 ); //: 0x11 , b: 0001_0001
                ord[ 1 ]=( 18 ); //: 0x12 , b: 0001_0010
                ord[ 1 ]=(  0 ); //: 0x00 , b: 0000_0000
                ord[ 1 ]=(  8 ); //: 0x08 , b: 0000_1000
                ord[ 1 ]=(  7 ); //: 0x07 , b: 0000_0111
                ord[ 1 ]=(  9 ); //: 0x09 , b: 0000_1001
                ord[ 1 ]=(  6 ); //: 0x06 , b: 0000_0110
                ord[ 1 ]=( 10 ); //: 0x0A , b: 0000_1010
                ord[ 1 ]=(  5 ); //: 0x05 , b: 0000_0101
                ord[ 1 ]=( 11 ); //: 0x0B , b: 0000_1011
                ord[ 1 ]=(  4 ); //: 0x04 , b: 0000_0100
                ord[ 1 ]=( 12 ); //: 0x0C , b: 0000_1100
                ord[ 1 ]=(  3 ); //: 0x03 , b: 0000_0011
                ord[ 1 ]=( 13 ); //: 0x0D , b: 0000_1101
                ord[ 1 ]=(  2 ); //: 0x02 , b: 0000_0002
                ord[ 1 ]=( 14 ); //: 0x0E , b: 0000_1110
                ord[ 1 ]=(  1 ); //: 0x01 , b: 0000_0001
                ord[ 1 ]=( 15 ); //: 0x0F , b: 0000_1111
    

        /** construct lencode and distcode **/
        //:--------------------------------------------------://
        len_cod.arr_fre=( len_fre );
        len_cod.arr_sym=( len_sym );

        dis_cod.arr_fre=( dis_fre );
        dis_cod.arr_sym=( dis_sym );
        //:--------------------------------------------------://



    };; //:///////////////////////////////////////| GPC_Dyn |://

/*
 * Inflate source to dest.  On return, destlen and sourcelen are updated to the
 * size of the uncompressed data and the size of the deflate data respectively.
 * On success, the return value of puff() is zero.  If there is an error in the
 * source data, i.e. it is not in the deflate format, then a negative value is
 * returned.  If there is not enough input available or there is not enough
 * output space, then a positive error is returned.  In that case, destlen and
 * sourcelen are not updated to facilitate retrying from the beginning with the
 * provision of more input data or more output space.  In the case of invalid
 * inflate data (a negative error), the dest and source pointers are updated to
 * facilitate the debugging of deflators.
 *
 * puff() also has a mode to determine the size of the uncompressed output with
 * no output written.  For this dest must be (unsigned char *)0.  In this case,
 * the input value of *destlen is ignored, and on return *destlen is set to the
 * size of the uncompressed output.
 *
 * The return codes are:
 *
 *   2:  available inflate data did not terminate
 *   1:  output space exhausted before completing inflate
 *   0:  successful inflate
 *  -1:  invalid block type (type == 3)
 *  -2:  stored block length did not match one's complement
 *  -3:  dynamic block code description: too many length or distance codes
 *  -4:  dynamic block code description: code lengths codes incomplete
 *  -5:  dynamic block code description: repeat lengths with no first length
 *  -6:  dynamic block code description: repeat more than specified lengths
 *  -7:  dynamic block code description: invalid literal/length code lengths
 *  -8:  dynamic block code description: invalid distance code lengths
 *  -9:  dynamic block code description: missing end-of-block code
 * -10:  invalid literal/length or distance code in fixed or dynamic block
 * -11:  distance is too far back in fixed or dynamic block
 *
 * Format notes:
 *
 * - Three bits are read for each block to determine the kind of block and
 *   whether or not it is the last block.  Then the block is decoded and the
 *   process repeated if it was not the last block.
 *
 * - The leftover bits in the last byte of the deflate data after the last
 *   block (if it was a fixed or dynamic block) are undefined and have no
 *   expected values to check.
 */


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

***-********************************************************-**/
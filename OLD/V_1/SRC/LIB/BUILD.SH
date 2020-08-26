
    ## Build script.
    ## Don't be clever. All we are doing is concatting
    ## the source files.

    ## DATA before FUNCTIONS helps avoid artifical dependencies.

    ############################################################

    touch gep.js ## create if not exist
    >     gep.js ## clear file.

    ############################################################

    ## C99 Polyfills go before functions, macros, data
    ## because sometimes the function is a stand-in for
    ## something that will be a compile-time constant in C99.
    ## This also means macros are NOT allowed to be used 
    ## in these polyfills.

    cat "C99._" <(echo)>> "gep.js"   ## C99 Polyfills

    ############################################################

    ## CONSTANTS_AND_MACROS_BEFORE_OTHER_DATA:

    cat "WIG._" <(echo)>> "gep.js"   ## WHAT_IS_GEP?
    cat "CAM._" <(echo)>> "gep.js"   ## Constants_And_Macros

    ############################################################

    ## DATA_BEFORE_FUNCTIONS:

    cat "FIL._" <(echo)>> "gep.js"   ## FILe_Scope_Variables
    cat "TAC._" <(echo)>> "gep.js"   ## TYPES:About_Comment
    cat "T_0._" <(echo)>> "gep.js"   ## TYPES:0_DEPS

    ############################################################

    ## BASIC_FUNCTIONS:

    cat "LOG._" <(echo)>> "gep.js"   ## Logging Functions

    ############################################################
    
    ## OTHER_FUNCTIONS:

    cat "ASC._" <(echo)>> "gep.js"   ## Ascii Conversion
    cat "DUM._" <(echo)>> "gep.js"   ## Hex Dump Conversion
    cat "TDL._" <(echo)>> "gep.js"   ## Test_Data_Loading

    cat "png_bin_CTO_png_obj._" <(echo)>>  "gep.js"

    cat "PUB._" <(echo)>> "gep.js"   ## PUBLIC_API

    ############################################################

    ## TEST_FUNCTIONS_SHOULD_BE_THE_LAST_SET_OF_FUNCTIONS:

    cat "TES._" <(echo)>> "gep.js" ## Tests, unit and others.

    ############################################################
    
    ## INIT (INI), AUTO INIT (END), and Comments (COM)

    cat "INI._" <(echo)>> "gep.js" ## Initialization
    cat "END._" <(echo)>> "gep.js" ## End of library
    cat "COM._" <(echo)>> "gep.js" ## Comments Section

    ############################################################

##  Maybe... don't transcribe like this?
##  Reading through the entire thing until you understand
##  it, then writing your own seems more sensible.
##  cat "GPC._"         >> "gep.js"   ## Puff.c transcribed

    ## Move and rename to capitals for "public"
    mv "gep.js"  "../../GEP.JS"



    echo "[GEP.JS: BUILT]" ##

    ## read -p "[Press_Enter_To_Continue]:"























    ##  CHANGED_MY_MIND. Multiple copies is more likely to
    ##  cause confusion that help.
    ##  ## It's 2020, we can afford to waste some space.
    ##  ## Put copies in:
    ##  ##      1: The place it will be most easily found (root)
    ##  ##      2: The place it might be expected (src)
    ##  cp "gep.js"  "../../GEP.JS"  ## Copy Here.
    ##  cp "gep.js"     "../GEP.JS"  ## Users might expect here
    

    ## Hackish way to make sure code conforms to the
    ## ven-diagram of [ c90, c99, c11 ]
    ############################################################
    rand_1_to_3=$((1 + RANDOM % 3))
    C_TYPE="xfsdfsd"
    if(( $rand_1_to_3  == 1 ));
    then
        C_TYPE="c90"
    fi
    if(( $rand_1_to_3  == 2 ));
    then
        C_TYPE="c99"
    fi
    if(( $rand_1_to_3  == 3 ));
    then
        C_TYPE="c11"
    fi
    ############################################################

    ##  SC[ hkmf-mini] #########################################
    ## SEE[ hkmf-c11 ] for reference:  #########################
    ############################################################
    gcc                                                        \
        -x c                                                   \
        -c "JTC.CAV"                                           \
        -o object_file.o                                       \
                                                               \
            -Werror                                            \
            -Wfatal-errors                                     \
            -Wpedantic                                         \
            -Wall                                              \
            -Wextra                                            \
                                                               \
            -fstrict-aliasing                                  \
            -Wstrict-aliasing                                  \
                                                               \
            -D MACRO_COMPILE_ONLY_THIS_FILE_AS_DEMO            \
                                                               \
            -std=$C_TYPE                                       \
            -m64 ###############################################
                                    ####                    ####
    gcc -o EXE.exe object_file.o    ####                    ####                
    rm             object_file.o    ####                    ####     
         ./EXE.exe                  ####                    ####
    rm     EXE.exe                  ####                    ####
                                    ####                    ####
    echo    "[JTC:BUILT:C_TYPE]:$C_TYPE"                    ####
    ############################################################
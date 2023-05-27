# RubiksCube

Rubiks Cube solver algorithm made by an old student of University of Central Florida.

## Objectif

The aim of the modifications of the source code is to adapt the output to use it for an online rubiks cube solver.

## Changes

Invertion of the original output because it didn't work.

## How to use it ?

### Compilation

#### solver.c file

```
make build
make
```

#### twist.c file

```
gcc -o ./bin/twist twist.c
```

### Use the program

Before execute the main file, you need to know where your cubies are on your cube.
You can execute the twist executable to know it.
Command line :
'''
./bin/twist
'''

You just need to know the scramble made (note that you need to do the scramble with the green face in front of you and the white face to the top).
Once executed, insert the scramble in the output of the program and copy one of the result.

You can now execute the main executable : ./bin/executable
Enter the saved result and now wait the answer. It will be printed in "solution.txt".

## Errors

Note that my Makefile cannot generate two executable (solver file and twist file).
The twist file owned few functions from solver file. It produce an error while twist is in the src folder.
I will try to fix it as soon as possible.

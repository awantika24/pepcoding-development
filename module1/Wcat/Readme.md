
In this project, we have built command prompt with similar features as that of Linux and we have named it as wcat. The wcat command prompt has following features:-

1. print one file after the other
wcat f1 f2 f3 f4........................(without any flag)

 2. wcat -rs f1 f2 f3 f4 ........................... -rs can be type anywhere to remove all the spaces
 -rs is used here to print each files without a space 

 3. wcat -rn f1 f2 f3 f4 ........................... -rn can be type anywhere to remove all the new lines
 -rn is used here to print each files without a new line

 4. wcat -rsc f1 f2 f3 f4......................... to remove all the special characters.
 here secondary arguments will also be used for which special character is to be removed

 5. wcat -s f1 f2 f3 f4............. assign numbers to lines of each file in beginning including empty lines

 6. wcat -sn f1 f2 f3 f4 ........... assign numbers to lines of each file which are non empty

 7. wcat -rel f1 f2 f3 f4 ............ remove extra lines i.e. only one single line in continuation.

 8. wcat -rep f1 f2 f3 f4 ........... replace a word/char with the other word.

 9. wcat -crtf -> to create a new txt file 

 10. wcat -mC f1 f2 f3 f4 .......................Make first letter of a line capital  -->

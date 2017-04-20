def guess_the_number
  puts "What's your name?"
  your_name = gets
  puts "Welcome to your doom #{your_name}!"
  puts "The dragon is thinking of a number between 1 and 100. Guess correctly, you live. Fail, you're dinner."
  number = rand(1..101)
  guess = gets.to_i
  while guess != number
    if guess < number
      puts "The dragon drops a glob of saliva on you. The number is higher. Try again, but don't tarry, the dragon is very hungry!"
      guess = gets.to_i
    else guess > number
      puts "The dragon licks its chops and wonders if you're crunchy or soft. The number is lower. Try again, but hurry, the dragon is very hungry!"
      guess = gets.to_i
    end
  end
  puts "Correct! The dragon leaves you in peace, but eats your village instead."
end

guess_the_number

# \
# '.                \.
# '.                 "\
# ::                  \\
# " .                 ".\
# ""    ;.   ,        " .
# ".~   ."-  .^  .     \ \
# -.._" \   \ \  \\  \    "  \
# "."\ \._ ) \ ) \.)\-\..\  :
# ""\ ",\"_.);-.).) )) "~~).
# ~"~~.._    '  -"         ""~.)    "~,
# ""~.  ""~~)". "-,           ",."""" "~.
# " ..~"," '-'"~~...___.~""  "~.     ~.
# ."  ."      _.~~"""".,       "~.   "~~~.~.  _..._
# ."    |       '. (  () )";>       ""~.      "(.___.)..
# /      "       ..""~~~~""_.~  ....._.  "~.             ""~.
# "     ___\~-      """"""""    "       ""~~.""":==>..        "~.
# ."          \_~               .              "~((####)) ..       ".
# .|       _.-"", /          ..~"                  ""~~~"    ""~~~~~  :>
# /".                       .~"~~..___............~;>~""
# .~"  "~.         "-~~....--""__________,,....~~~~"""
# "--""~~..._____,..~~"
# ."
# |

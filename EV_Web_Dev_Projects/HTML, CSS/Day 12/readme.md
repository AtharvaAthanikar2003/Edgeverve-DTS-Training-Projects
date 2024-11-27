# Specificity
- When multiple rules are applied with different selectors to the same element, which one wins here ?

## Specificity Order:
1. Inline Style - Most Specific
2. ID Selectors
3. Class/Attribute/Pseudoclass
4. Element Selectors - Least Specific

## Specificity Calculation
- div a
- id:0      class:0     element:2
- e.g.: 002 (0,0,2) mentioned in css classes
- .pid span - 011

e.g.: div p.pclass vs .special+.main
1st one - 0,1,2
2nd one - 0,2,0 (High score - more priority)

e.g.: #navbar vs .main.pclass.sclass
1st - 1, 0, 0 (wins as ID>Class>Selectors)
2nd - 0, 3, 0

e.g.: .main+.sub vs .pclass a:hover
1st - 020
2nd - 021 (wins)

# Important
- We can mark a declaration as important using '!important'

# Typography
- It refers to the art of arrangine type.
e.g.: Lemon cookies packet have lemon icon in lemon shape, looking it attractive, improves sales and use in advertising and branding the products.

# Colors
- Colors have hex values/names
- Format: RGB, RGBA (Alpha)
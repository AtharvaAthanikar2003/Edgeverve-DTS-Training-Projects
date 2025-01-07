# Advanced Selectors -
Categorised into 2 types: 
- Relational Selectors
- Attribute Selectors

## Selector : A > B (Child)
- Selects any element B which is direct child of A
e.g.: section > p

## Selector: A + B (Adjacent Sibling)
- Selects B element that is placed immediately after A element and shares same parent
e.g.: div + p

## Selector: General Sibling (A ~ B)
- Selects all the elements which are placed after the A element and both share the same parent.
e.g: div ~ p

## Attribute Selector
- a[attribute] - specified attributes
- a[attribute=value] - specified attribute and value
- a[attribute^=value] - starts with a specified value
- a[attribute$=value] - ends with a specified value
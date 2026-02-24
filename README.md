Answers to Questions
<<<<<<< HEAD
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   Ans: i. getElementById:- It returns a single and specific DOM element. This very fast and powerful DOM element. 
        ii. getElementsByClassName - It returns a group of elements with a class name by a HTMLelements type of array, but an actual array, where you can find your specific element by its index values.
        iii. querySelector / querySelectorAll - It returns  a single element  or group of elements with a CSS selector as a NodeList type of array, but an actual array, where you can find your specific element by its index values.
2. How do you create and insert a new element into the DOM?
   Ans: Create a new element: Using document.createElement() in brackets, using the tag name that you want to create. And insert the element into the DOM by using appendChild() for the last child node of the parent node and  using prepend() for the first child node of the parent node.
3. What is Event Bubbling? And how does it work?
   Ans: Event bubbling is when an event starts on a child element and then “bubbles up” to its parent elements in the DOM. It works like when you click (or trigger an event by EventListener) on a child element. Then the event first triggers handlers on that child. And then it moves up through parent elements, triggering any handlers for the same event.
   
4. What is Event Delegation in JavaScript? Why is it useful?
  Ans: Event delegation is a technique where you attach a single event listener to a parent element instead of multiple child elements, and then handle events on child elements using the event’s target. It is useful for the event travels from child to parent, where the parent handles it. 
5. What is the difference between preventDefault() and stopPropagation() methods?
=======


1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll? 
Ans: 
i. getElementById:- It returns a single and specific DOM element. This very fast and powerful DOM element. 
ii. getElementsByClassName: - It returns a group of elements with a class name by a HTMLelements type of array, but an actual array, where you can find your specific element by its index values. 

iii. querySelector / querySelectorAll: - It returns a single element or group of elements with a CSS selector as a NodeList type of array, but an actual array, where you can find your specific element by its index values.

2. How do you create and insert a new element into the DOM? 
Ans: Create a new element: Using document.createElement() in brackets, using the tag name that you want to create. And insert the element into the DOM by using appendChild() for the last child node of the parent node and using prepend() for the first child node of the parent node.

3. What is Event Bubbling? And how does it work? 
Ans: Event bubbling is when an event starts on a child element and then “bubbles up” to its parent elements in the DOM. It works like when you click (or trigger an event by EventListener) on a child element. Then the event first triggers handlers on that child. And then it moves up through parent elements, triggering any handlers for the same event.

4. What is Event Delegation in JavaScript? Why is it useful? 
Ans: Event delegation is a technique where you attach a single event listener to a parent element instead of multiple child elements, and then handle events on child elements using the event’s target. It is useful for the event travels from child to parent, where the parent handles it.

5. What is the difference between preventDefault() and stopPropagation() methods? 
>>>>>>> ab4bae7 (completed most of coding)
Ans: preventDefault() - Prevents the default browser behavior for an event. and stopPropagation()- Stops the event from bubbling up (or capturing down) the DOM.

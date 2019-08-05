# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS is a library that is helpful in creating UI components. It tries to solve the issue of having a JS component spread apart across multiple pages via the HTML and javascript etc. With React the component HTML(technically JSX) is created inside the same file that the javascript is located, thus making the component more self contained and easier to debug.

1. What does it mean to think in react?

Thinking in react means that you're thinking is component-driven. Meaning that you are constatly thinking about how to make your code be reusable and built in such a way that the smaller pieces can be put together to make something big and robust.


1. Describe state.

State is like a point in time in your application. It describes what is happening in your application at that moment, that state can be changed and thus change what is happening in your application.

1. Describe props.

Props is a way to pass information from one component to a child component.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side effects are anything that affects something outside of the function that is being called. In order to sync the effects in  a React component you need to add a dependency array inside of the effect hook with the name of the dependencies inside of the array.

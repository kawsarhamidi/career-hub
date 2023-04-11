import React from 'react';

const Blog = () => {
    return (
        <div className=' my-12 mx-20'>
            
            <p className="text-xl font-medium">a. When should you use context API?</p>
            <p className="">Answer: you might consider using Context API in React when you need to share data or state across multiple components, have a complex or deep component tree, need to manage cross-cutting concerns, want to avoid prop drilling, or need a lightweight state management solution. However, it's important to carefully evaluate the specific requirements of your application and choose the appropriate state management solution that best fits your needs.</p>
            <p className=" text-xl font-medium">b. What is a custom hook?</p>
            <p className="">Answer: When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.</p>
            <p className="text-xl font-medium">c. What is useRef?</p>
            <p className=""> Answer: 
The useRef hook returns a mutable ref object, which has a current property that can be used to access or modify the current value or reference to a DOM element. When a component re-renders, the useRef hook does not trigger a re-render and the current value persists, making it suitable for storing mutable data that doesn't need to trigger component updates.</p>
            <p className="text-xl font-medium">d. What is useMemo?</p>
            <p className="">Answer: The useMemo hook takes two arguments: a function and an array of dependencies. The function represents the computation that you want to memoize, and the array of dependencies specifies the values that the memoized result depends on. If any of the dependencies change, the memoized result will be recomputed; otherwise, the cached result will be returned.</p>
        </div>
    );
};

export default Blog;
# Now or Never Calculator

**Now or Never Calculator** is a web application built with React that allows users to calculate the most profitable exchanges of game resources. It leverages **WebAssembly** and **HighJS** to solve optimization problems in the browser using **Integer Linear Programming (ILP)**. The app runs entirely client-side and is deployable on GitHub Pages.  

## Features

- Input your available resources: shells, hammers, demons, crystals  
- Mark which special cards you have to influence trade options  
- Calculate the optimal exchange results in real-time using ILP  
- Keep track of the last 10 calculations for reference  
- Responsive and interactive user interface  

## How It Works

1. **Input resources and card flags** – Users specify the amount of each resource and mark any special cards they have.  
2. **WebAssembly Solver** – The app uses a WebAssembly module (via HighJS) to solve the optimization problem directly in the browser.  
3. **Integer Linear Programming (ILP)** – The solver calculates the best possible outcome given the constraints, ensuring integer solutions suitable for discrete resources.  
4. **Results Display** – Results are shown with icons for each resource and the total calculated value, alongside a history of recent calculations.  

## Technologies

- **React** – Frontend library for building interactive UI  
- **WebAssembly** – High-performance calculations in the browser  
- **HighJS** – ILP solver for optimization problems  
- **Material-UI** – UI components and styling  
- **SCSS** – Custom styling for layout, buttons, and icons  

## GitHub Pages

The application is deployed and works directly on GitHub Pages:  
[https://szymonwojturski.github.io/now-or-never-calculator](https://szymonwojturski.github.io/now-or-never-calculator)  

## Project Structure

- `src/NowOrNever.jsx` – Main React component  
- `src/components/` – Individual UI components like ResourceInput, CardFlags, SolutionQueue  
- `src/components/Solver.js` – WebAssembly/ILP solver logic  
- `src/NowOrNever.scss` – Styling for layout, buttons, and icons  

## License

MIT

# Thinking in React




1. Start with a mock - Break UI into **component hierarchy**
2. Build a **static version** in React - UI without state & interactivity
3. Identify the absolute **minimal complete representation of UI state**
4. Identify **where** your state should live
5. Add **inverse data flow**

___


## Break UI into **component hierarchy**

#### Single responsibility principal

* UI and data models tend to adhere to the same information architecture.
  - A component does one thing - represents exactly one piece of data model
  - UI and component structure maps nicely to data model
  
![](https://facebook.github.io/react/img/blog/thinking-in-react-components.png)

  1. **`FilterableProductTable` (orange):** contains everything - renders a SearchBar and ProductTable component. A child of App, the root component, centered on the page
  2. **`SearchBar` (blue):** recieves all *user input*
  3. **`ProductTable` (green):** displays and filters the *data collection* based on *user input*
  4. **`ProductCategoryRow` (turquoise):** displays a heading for each category
  5. **`ProductRow` (red):** displays a row for each product

These are the components in the mock. Create a Hierarchy structure. Components that appear within another component should be a child of that component.

* `FilterableProductTable`
  - `SearchBar`
  - `ProductTable`
    + `ProductCategoryRow`
    + `ProductRow`

___


## Build a **static version** in React

Build components that 
* re-use other components
* pass data using *props*

State is reserved for interactivity - data that changes over time.
**Top-down** starting with components higher in hierarchy or **Bottom-up** with ones lower in it. In simple examples, it's usually easier to go with top-down, and on larger projects, it's easier to go with bottom-up and write tests as you build.

Components will only have a `render()` since it is static.

`FilterableProductTable` takes the data model as a *prop* 



___


## Identify the minimal complete representation of UI state

Pieces of data in this app

* list of products
* filtered list of products
* search input value
* checkbox value

Ask these 3 questions about each piece of data

* Is it passed from a parent component as a prop?
* Does it remain unchanged over time?
* Can it be computed from other values?

if yes, it doesn't need to be state.

#### state for this app is
* checkbox value
* search input value

___

## Identify where state should live

for each piece of state in the application:

* identify every component that renders something based on that state
* find a common owner component — a single component above all components needing that state
* if you can't find a component that makes sense to own state, create one. 

`ProductTable` renders something based on search value and checkbox value
`SearchBar` needs to display search text and checkbox value

so the common owner component is `FilterableProductTable` (App)




___

## Add inverse data flow





___



















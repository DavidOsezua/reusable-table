# 1️⃣ Setup Phase (Data Fetching)

**Goal:** Fetch data and display in a table.

**Pattern:**

- Use `HttpClient` to fetch data.
- Store data in a variable (array).
- Display the data in a table via a component template.

**Flow:**

1. Create a component.
2. In the TypeScript file, use `ngOnInit` to call the API and store the data in an array.
3. Use `HttpClient` to interact with the JSONPlaceholder API.
4. In the HTML file, build a table template to display the data.

---

# 2️⃣ Reusable Table Component

**Goal:** Make the table reusable across different components.

**Pattern:**

- Create a reusable component that can display dynamic data.
- Use `@Input` to pass data to the reusable table.

**Flow:**

1. Create a new Angular component for the table (e.g., `reusable-table`).
2. Move your static table template to the reusable table component.
3. Use `@Input` in the table component to allow it to accept dynamic data from the parent component.
4. The table head and body will be dynamic based on the passed data, allowing the component to be reusable.

# 3️⃣ Adding Actions(delete and edit functionalities).

**Goal:**  Add dynamic action buttons to the reusable table

**Pattern:**
- Create the buttons in the reusable table template
- Create Dynamic functions for the buttons

**Flow:**
- create a button in the reusable table based on a condition
- use `@output ` and `new EventEmmiter` to create the function for the buttons


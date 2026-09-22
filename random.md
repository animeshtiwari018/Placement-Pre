# 🚀 Mission: Build Something Small

## Objective

Build a **CLI-based Personal Expense Tracker** using **Node.js**.

The goal is not to make something huge.

The goal is to take an idea from:

> **Idea → Logic → Code → Working Product**

---

## Requirements

Your application should allow a user to:

* Add an expense
* View all expenses
* Delete an expense
* Calculate total spending
* Filter expenses by category

### Example

```text
$ node app.js

=== EXPENSE TRACKER ===

1. Add Expense
2. View Expenses
3. Delete Expense
4. Total Spending
5. Filter by Category
6. Exit

Choose an option:
```

---

## Expense Structure

Each expense should contain:

```js
{
  id: 1,
  title: "Lunch",
  amount: 180,
  category: "Food",
  date: "2026-09-22"
}
```

---

## Categories

Use at least these:

* Food
* Travel
* Shopping
* Education
* Entertainment
* Other

---

## Data Storage

Don't use MongoDB.

Store the data in:

```text
expenses.json
```

Your program should:

1. Read existing expenses when it starts.
2. Modify the data.
3. Save changes back to the JSON file.

---

## Rules

### Rule 1

Don't copy a complete tutorial.

You can search documentation when you're stuck.

### Rule 2

Don't build the UI first.

Make the **logic work first**.

### Rule 3

Handle bad input.

For example:

```text
Amount: abc
```

should not crash your application.

### Rule 4

Every expense must have a unique ID.

### Rule 5

Use functions instead of putting everything inside one giant block.

---

# 🧠 Bonus Challenges

If the basic version works, add:

### Search

```text
Search: coffee
```

Returns matching expenses.

### Monthly Summary

```text
September 2026

Food:          ₹4,200
Travel:        ₹1,800
Shopping:      ₹2,500
Education:     ₹1,200

Total:         ₹9,700
```

### Highest Expense

Display:

```text
Highest Expense:
MacBook Stand — ₹3,499
```

### Sorting

Allow:

```text
1. Newest first
2. Oldest first
3. Highest amount
4. Lowest amount
```

---

# 📁 Suggested Structure

Start simple:

```text
expense-tracker/
│
├── app.js
├── expenses.json
├── package.json
│
└── utils/
    ├── expenseManager.js
    └── fileManager.js
```

Don't blindly follow this structure if you discover a cleaner approach.

---

# 🎯 Definition of Done

The project is complete when I can clone your repository and run:

```bash
npm install
node app.js
```

and use the entire application without manually editing `expenses.json`.

---

# 🔥 Final Challenge

After finishing the project, answer these questions in `README.md`:

## What?

What did you build?

## Why?

Why is this project useful?

## How?

How does your application store, retrieve, modify, and delete expenses?

## What did you learn?

Mention **3 things** you learned while building it.

## What would you improve?

Mention **3 features** you would add in version 2.

---

# 📝 Submission Checklist

* [ ] Project runs without errors
* [ ] Add expense works
* [ ] View expenses works
* [ ] Delete expense works
* [ ] Total calculation works
* [ ] Category filtering works
* [ ] JSON persistence works
* [ ] Invalid input is handled
* [ ] README is written
* [ ] Code is pushed to GitHub

---

## One Last Rule

**Don't spend 3 hours designing the README for a project that doesn't work.**

Build first.

Polish later.

> A small finished project beats a sophisticated unfinished i
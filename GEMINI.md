# Project: Gilded Rose

## Business Requirements
- All `items` have a `SellIn` value which denotes the number of days we have to sell the `items`
- All `items` have a `Quality` value which denotes how valuable the item is
- At the end of each day our system lowers both values for every item
- Once the sell by date has passed, `Quality` degrades twice as fast
- The `Quality` of an item is never negative
- __"Aged Brie"__ actually increases in `Quality` the older it gets
- The `Quality` of an item is never more than `50`
- __"Sulfuras"__, being a legendary item, never has to be sold or decreases in `Quality`
- __"Backstage passes"__, like aged brie, increases in `Quality` as its `SellIn` value approaches;
	- `Quality` increases by `2` when there are `10` days or less and by `3` when there are `5` days or less but
	- `Quality` drops to `0` after the concert

## General Instructions

- Ensure **TypeScript 5.0+** compatibility and **Node.js 18+** support.
- All public functions, classes, and interfaces **must** have JSDoc comments with parameter and return type descriptions.
- Prefer **functional programming** where possible, but use classes when domain modeling benefits from OOP.
- Write code that is **type-safe**, avoiding `any` unless justified with a comment.
- Code must **pass all linting and type-checking** before merging.


---

## Coding Style Guidelines

- **Indentation:** 2 spaces (no tabs).
- **Naming Conventions:**
  - Interfaces: Prefix with `I` (e.g., `IUserService`).
  - Private class members: Prefix with `_` (e.g., `_cache`).
  - Constants: Use `UPPER_CASE_SNAKE_CASE`.
  - Filenames: Use `kebab-case` for files, `PascalCase` for classes.
- **Equality:** Always use `===` and `!==`.
- **Imports:**
  - Use **ES module imports** (`import x from 'y'`).
  - Group imports: external libraries first, then internal modules, then relative paths.
- **Error Handling:**
  - Throw typed `Error` objects (avoid generic strings).
  - Always log context with errors.
- **Type Annotations:**
  - Prefer `unknown` over `any`.
  - Avoid implicit `any`.
  - Use `readonly` where immutability is required.

---

## Dependencies

- Avoid adding new external dependencies unless absolutely necessary.
- If a dependency is needed:
  1. Explain the **purpose**.
  2. Evaluate **alternative native or existing solutions**.
  3. Ensure it is **actively maintained** and **well-tested**.
- Keep dependencies **updated**.
- No **global type modifications** from dependencies without documentation.
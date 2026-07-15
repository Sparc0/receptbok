# Recipe Guidelines for receptbok

When creating new recipe pages in the `docs/recipes/` directory, please follow this structure to ensure consistency across the cookbook.

## Template

```markdown
# [Recipe Name]
[Short description of the dish]

**Antal personer:** <span class="servings-count">4</span>

## Ingredienser
- [ ] <span class="qty">500</span>g [Ingrediens 1]
- [ ] <span class="qty">2</span>st [Ingrediens 2]
...

## Instruktioner
- [ ] [Steg 1]
- [ ] [Steg 2]
...
```

## Rules
- Always use a single `#` for the recipe title.
- Include a brief description immediately after the title.
- Include the number of servings using `**Antal personer:** <span class="servings-count">[Siffra]</span>`.
- Use `## Ingredienser` for the ingredients list (task list with `- [ ]`).
- Wrap quantities in `<span class="qty">Mängd</span>` to enable dynamic scaling.
- Use `## Instruktioner` for the preparation steps (task list with `- [ ]`).
- Ensure the file is placed in the correct category folder (e.g., `docs/recipes/starters/`, `docs/recipes/mains/`, or `docs/recipes/desserts/`).
- Update the corresponding `index.md` in the category folder if necessary to include the new recipe.
- Always ask for the source of a recipe. Add a link to that page e.g [Content creator](direct url to the recipe)
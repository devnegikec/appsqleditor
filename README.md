# App Link

**Deployed** https://main--earnest-lamington-b1712d.netlify.app/
**Github** https://github.com/devnegikec/appsqleditor

# Feature
1. **Search Bar** on top can get search results "table: tableNane" will select a particular table, quick search view can show recent search items.
2. **Table List** user can select table and, select query will appear in query textarea
3. **Table View** can display tables with dynamic table headers, FE can take care of nested data, and Date can be converted into a readable format. 
4. **Table Search** client-side search
5. **table pagination** will show only 10 pages to select form and will render dynamically based on the current page.

# NFC
1. Written Utillty functions to make Table Dynamic Header
2. Utillty for debounce, date, and Table Header text
3. Divided UI in multipel components on based on Single responsibly principle and DRY.
4. Context API is used to mangae the application state and to avoid extra render, components are wrapped in "useMemo" hook.


# Third Party packages:-
React table:- Headless react table lib
Tailwind:- CSS utility classes

# Performance 
- **[web.dev](https://pagespeed.web.dev/)**:
The load time  **1.2 seconds**
Overall performance score **99 points** 

- **First Contentful Paint**: `0.2s`
- **Speed Index**: `1.2s`
- **Largest Contentful Paint**: `0.4s`
- **Time to Interactive**: `2.2s`
- **Total Blocking Time**: `0ms`
- **Cumulative Layout Shift**: `0`

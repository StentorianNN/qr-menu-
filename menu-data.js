// Shared menu data — edit THIS file to change the menu.
// Both the Vercel function (/api) and the Cloudflare function (/functions)
// import from here.

export const menu = {
  restaurant: "Osteria Marconi",
  tagline: "Cucina casalinga · dal 1987",
  categories: [
    {
      name: "Antipasti",
      items: [
        // "image" is optional — a URL or a path like "/images/bruschetta.jpg"
        // if you put photos in an /images folder in this project
        { name: "Bruschetta al pomodoro", desc: "Grilled bread, crushed tomatoes, basil, garlic", price: 6, image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAgMTIwIj4KPHJlY3Qgd2lkdGg9IjEyMCIgaGVpZ2h0PSIxMjAiIGZpbGw9IiNlZWYwZTQiLz4KPGVsbGlwc2UgY3g9IjYwIiBjeT0iNzAiIHJ4PSI0NCIgcnk9IjI2IiBmaWxsPSIjZDlhNDViIi8+CjxlbGxpcHNlIGN4PSI2MCIgY3k9IjY0IiByeD0iNDQiIHJ5PSIyNCIgZmlsbD0iI2U4YzE4NCIvPgo8cmVjdCB4PSIzNCIgeT0iNTAiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgcng9IjMiIGZpbGw9IiNjMjMzMWYiIHRyYW5zZm9ybT0icm90YXRlKDEyIDQwIDU2KSIvPgo8cmVjdCB4PSI1NCIgeT0iNDQiIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMyIgcng9IjMiIGZpbGw9IiNkNjQ1MzAiIHRyYW5zZm9ybT0icm90YXRlKC04IDYwIDUwKSIvPgo8cmVjdCB4PSI3MiIgeT0iNTIiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgcng9IjMiIGZpbGw9IiNjMjMzMWYiIHRyYW5zZm9ybT0icm90YXRlKDIwIDc4IDU4KSIvPgo8cmVjdCB4PSI1MCIgeT0iNjAiIHdpZHRoPSIxMSIgaGVpZ2h0PSIxMSIgcng9IjMiIGZpbGw9IiNkNjQ1MzAiIHRyYW5zZm9ybT0icm90YXRlKDM1IDU1IDY1KSIvPgo8ZWxsaXBzZSBjeD0iNDYiIGN5PSI0NCIgcng9IjYiIHJ5PSIzLjUiIGZpbGw9IiMyZTdkNDMiIHRyYW5zZm9ybT0icm90YXRlKC0yNSA0NiA0NCkiLz4KPGVsbGlwc2UgY3g9IjcwIiBjeT0iNDAiIHJ4PSI2IiByeT0iMy41IiBmaWxsPSIjM2M5MTUzIiB0cmFuc2Zvcm09InJvdGF0ZSgxNSA3MCA0MCkiLz4KPC9zdmc+Cg==" },
        { name: "Burrata", desc: "Creamy burrata, roasted peppers, olive oil", price: 9 },
        { name: "Arancini", desc: "Fried risotto balls, mozzarella center, marinara", price: 8 },
      ],
    },
    {
      name: "Primi",
      items: [
        { name: "Spaghetti carbonara", desc: "Guanciale, egg, pecorino, black pepper", price: 14 },
        { name: "Rigatoni all'arrabbiata", desc: "Spicy tomato sauce, garlic, parsley", price: 12 },
        { name: "Risotto ai funghi", desc: "Porcini mushrooms, parmigiano, white wine", price: 15 },
      ],
    },
    {
      name: "Pizze",
      items: [
        { name: "Margherita", desc: "San Marzano tomato, fior di latte, basil", price: 12, image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAgMTIwIj4KPHJlY3Qgd2lkdGg9IjEyMCIgaGVpZ2h0PSIxMjAiIGZpbGw9IiNmM2VhZDgiLz4KPGNpcmNsZSBjeD0iNjAiIGN5PSI2MCIgcj0iNDYiIGZpbGw9IiNlOGIwNGIiLz4KPGNpcmNsZSBjeD0iNjAiIGN5PSI2MCIgcj0iMzgiIGZpbGw9IiNjMjMzMWYiLz4KPGNpcmNsZSBjeD0iNDgiIGN5PSI1MCIgcj0iOSIgZmlsbD0iI2ZkZmNmOCIvPgo8Y2lyY2xlIGN4PSI3MiIgY3k9IjQ2IiByPSI4IiBmaWxsPSIjZmRmY2Y4Ii8+CjxjaXJjbGUgY3g9IjY2IiBjeT0iNzAiIHI9IjkiIGZpbGw9IiNmZGZjZjgiLz4KPGNpcmNsZSBjeD0iNDQiIGN5PSI3MiIgcj0iNyIgZmlsbD0iI2ZkZmNmOCIvPgo8ZWxsaXBzZSBjeD0iNTgiIGN5PSI1OCIgcng9IjUiIHJ5PSIzIiBmaWxsPSIjMmU3ZDQzIiB0cmFuc2Zvcm09InJvdGF0ZSgtMjAgNTggNTgpIi8+CjxlbGxpcHNlIGN4PSI3NCIgY3k9IjYyIiByeD0iNSIgcnk9IjMiIGZpbGw9IiMyZTdkNDMiIHRyYW5zZm9ybT0icm90YXRlKDMwIDc0IDYyKSIvPgo8L3N2Zz4K" },
        { name: "Diavola", desc: "Spicy salami, tomato, mozzarella, chili oil", price: 14 },
        { name: "Quattro formaggi", desc: "Mozzarella, gorgonzola, fontina, parmigiano", price: 15 },
      ],
    },
    {
      name: "Dolci",
      items: [
        { name: "Tiramisu", desc: "Espresso-soaked savoiardi, mascarpone cream", price: 7, image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAgMTIwIj4KPHJlY3Qgd2lkdGg9IjEyMCIgaGVpZ2h0PSIxMjAiIGZpbGw9IiNlZmU2ZjAiLz4KPHJlY3QgeD0iMjYiIHk9IjQyIiB3aWR0aD0iNjgiIGhlaWdodD0iMTQiIHJ4PSIzIiBmaWxsPSIjZjVlY2Q3Ii8+CjxyZWN0IHg9IjI2IiB5PSI1NiIgd2lkdGg9IjY4IiBoZWlnaHQ9IjEwIiByeD0iMiIgZmlsbD0iIzhhNWEzYiIvPgo8cmVjdCB4PSIyNiIgeT0iNjYiIHdpZHRoPSI2OCIgaGVpZ2h0PSIxNCIgcng9IjMiIGZpbGw9IiNmNWVjZDciLz4KPHJlY3QgeD0iMjYiIHk9IjgwIiB3aWR0aD0iNjgiIGhlaWdodD0iMTAiIHJ4PSIzIiBmaWxsPSIjOGE1YTNiIi8+CjxyZWN0IHg9IjI0IiB5PSIzNCIgd2lkdGg9IjcyIiBoZWlnaHQ9IjEwIiByeD0iNSIgZmlsbD0iIzViM2EyNiIvPgo8Y2lyY2xlIGN4PSI0NiIgY3k9IjMwIiByPSIzIiBmaWxsPSIjNWIzYTI2Ii8+CjxjaXJjbGUgY3g9IjYyIiBjeT0iMjciIHI9IjIuNSIgZmlsbD0iIzViM2EyNiIvPgo8Y2lyY2xlIGN4PSI3NiIgY3k9IjMxIiByPSIzIiBmaWxsPSIjNWIzYTI2Ii8+Cjwvc3ZnPgo=" },
        { name: "Panna cotta", desc: "Vanilla cream, berry coulis", price: 6 },
      ],
    },
  ],
};

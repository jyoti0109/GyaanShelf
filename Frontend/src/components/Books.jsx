import React from "react";

const booksData = [
  { id: 1, title: "The Alchemist", author: "Paulo Coelho" },
  { id: 2, title: "Atomic Habits", author: "James Clear" },
  { id: 3, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki" },
  { id: 4, title: "Think and Grow Rich", author: "Napoleon Hill" },
];

function Books() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-indigo-500 mb-6">Available Books</h1>
      <ul className="space-y-4">
        {booksData.map((book) => (
          <li
            key={book.id}
            className="p-4 border border-indigo-300 rounded-xl shadow hover:bg-indigo-100 dark:hover:bg-slate-800 transition"
          >
            <h2 className="text-2xl font-semibold">{book.title}</h2>
            <p className="text-gray-600 dark:text-gray-300">by {book.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Books;

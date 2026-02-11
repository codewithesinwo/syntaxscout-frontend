import React, { useState } from 'react';

export default function Forum() {
  // Mock data for now
  const [posts] = useState([
    { id: 1, title: "How to learn React?", author: "DevNewbie", replies: 5 },
    { id: 2, title: "Tailwind vs CSS Modules", author: "StyleGuru", replies: 12 },
  ]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mt-15 mb-8 text-blue-600">Community Forum</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Main Feed */}
        <div className="md:col-span-3 space-y-4">
          {posts.map(post => (
            <div key={post.id} className="p-4 border rounded-lg hover:shadow-md transition">
              <h2 className="text-xl font-semibold text-blue-600">{post.title}</h2>
              <p className="text-gray-500 text-sm">Posted by {post.author} • {post.replies} replies</p>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="md:col-span-1">
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg font-bold mb-4">
            + New Post
          </button>
        </div>
      </div>
    </div>
  );
}
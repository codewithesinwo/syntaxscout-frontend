import React, { useState } from "react";

export default function Forum() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "How to learn React in 2026?",
      author: "DevNewbie",
      replies: 5,
      likes: 24,
      tags: ["React", "Learning"],
      time: "2h ago",
    },
    {
      id: 2,
      title: "Tailwind vs CSS Modules: The final verdict",
      author: "StyleGuru",
      replies: 12,
      likes: 89,
      tags: ["CSS", "Design"],
      time: "5h ago",
    },
    {
      id: 3,
      title: "Is AI replacing Frontend Engineers?",
      author: "TechOptimist",
      replies: 42,
      likes: 156,
      tags: ["AI", "Career"],
      time: "1d ago",
    },
  ]);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newTitle, setNewTitle] = useState("");

  const handleLike = (id) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post,
      ),
    );
  };

  const handleAddPost = (e) => {
    e.preventDefault();
    if (!newTitle) return;

    const newPost = {
      id: Date.now(),
      title: newTitle,
      author: "You",
      replies: 0,
      likes: 0,
      tags: ["General"],
      time: "Just now",
    };

    setPosts([newPost, ...posts]);
    setNewTitle("");
    setIsFormOpen(false);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-slate-800">
        DevTalk Community
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Main Feed */}
        <div className="md:col-span-3 space-y-4">
          {/* New Post Input Toggle */}
          {isFormOpen && (
            <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-blue-400 mb-6">
              <textarea
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="What's the topic?"
                rows="3"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
              <div className="flex justify-end gap-3 mt-3">
                <button
                  onClick={() => setIsFormOpen(false)}
                  className="px-4 py-2 text-gray-500 hover:bg-gray-100 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddPost}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
                >
                  Post Thread
                </button>
              </div>
            </div>
          )}

          {posts.map((post) => (
            <div
              key={post.id}
              className="p-6 bg-white border border-gray-200 rounded-xl hover:border-blue-300 shadow-sm transition-all group"
            >
              <div className="flex justify-between items-start mb-2">
                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium bg-blue-50 text-blue-600 px-2 py-1 rounded-md"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <span className="text-gray-400 text-xs">{post.time}</span>
              </div>

              <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 cursor-pointer">
                {post.title}
              </h2>

              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-50">
                <div className="flex items-center space-x-6 text-sm text-gray-500">
                  <button
                    onClick={() => handleLike(post.id)}
                    className="flex items-center space-x-1 hover:text-red-500 transition-colors"
                  >
                    <span>▲</span>
                    <span className="font-bold text-gray-700">
                      {post.likes}
                    </span>
                  </button>
                  <div className="flex items-center space-x-1">
                    <span>💬</span>
                    <span>{post.replies} comments</span>
                  </div>
                </div>
                <p className="text-sm font-medium text-gray-600">
                  by{" "}
                  <span className="text-blue-500 hover:underline cursor-pointer">
                    {post.author}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="md:col-span-1 space-y-6">
          <button
            onClick={() => setIsFormOpen(true)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold shadow-lg shadow-blue-200 transition-all transform hover:-translate-y-1"
          >
            Start a Discussion
          </button>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="font-bold text-gray-800 mb-4 flex items-center">
              🔥 Trending Topics
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center text-gray-600 hover:text-blue-600 cursor-pointer">
                <span>#Nextjs15</span>
                <span className="bg-gray-100 px-2 py-0.5 rounded text-xs">
                  1.2k
                </span>
              </div>
              <div className="flex justify-between items-center text-gray-600 hover:text-blue-600 cursor-pointer">
                <span>#WebComponents</span>
                <span className="bg-gray-100 px-2 py-0.5 rounded text-xs">
                  850
                </span>
              </div>
              <div className="flex justify-between items-center text-gray-600 hover:text-blue-600 cursor-pointer">
                <span>#TailwindTips</span>
                <span className="bg-gray-100 px-2 py-0.5 rounded text-xs">
                  2.4k
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

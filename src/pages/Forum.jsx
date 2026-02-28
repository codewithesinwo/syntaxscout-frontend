export default function Forum() {
  return (
    <div className="bg-gray-900">
    <div className="max-w-6xl mx-auto px-4 py-8 mt-15">

      {/* Categories / Popular tags */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-100">
          Popular Categories
        </h2>
        <div className="flex flex-wrap gap-3">
          {[
            "General Discussion",
            "Show & Tell",
            "Help / Troubleshooting",
            "Project Ideas",
            "Tutorials & Resources",
            "Announcements",
            "Feedback & Suggestions",
          ].map((category) => (
            <button
              key={category}
              className="cursor-pointer px-4 py-2 bg-white border border-gray-300 rounded-full text-sm hover:border-blue-500 hover:text-blue-600 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Recent / Featured threads */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold mb-6 text-gray-100">
          Recent Discussions
        </h2>

        {/* Example thread cards */}
        {[
          {
            title: "Best practices for state management in 2026?",
            author: "reactfan2026",
            replies: 24,
            views: 1420,
            time: "2 hours ago",
            tags: ["React", "State", "Performance"],
          },
          {
            title:
              "How are you handling auth in Next.js App Router + server actions?",
            author: "nextjs_noob",
            replies: 18,
            views: 890,
            time: "1 day ago",
            tags: ["Next.js", "Authentication", "Server Actions"],
          },
          {
            title: "Show me your 2026 side projects! 🚀",
            author: "indiehacker42",
            replies: 67,
            views: 3840,
            time: "3 days ago",
            tags: ["Showcase", "SideProject"],
          },
        ].map((thread, i) => (
          <div
            key={i}
            className="-white border border-gray-200 rounded-lg p-5 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer"
          >
            <div className="flex justify-between items-start gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-medium text-gray-900 mb-1">
                  {thread.title}
                </h3>
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                  <span>by {thread.author}</span>
                  <span>•</span>
                  <span>{thread.time}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {thread.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 bg-blue-50 text-blue-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-right text-sm text-gray-500 min-w-[80px]">
                <div className="font-medium text-gray-700">
                  {thread.replies}
                </div>
                <div>replies</div>
                <div className="mt-1">
                  {thread.views.toLocaleString()} views
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="text-center mt-16 py-10 border-t border-gray-200">
        <p className="text-gray-600 mb-6">
          Don't see a topic that interests you?
        </p>
        <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-medium text-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg">
          Start a New Discussion
        </button>
      </div>
    </div>
    </div>
  );
}

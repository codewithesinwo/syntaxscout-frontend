import { FaDownload, FaSearch, FaSyncAlt } from "react-icons/fa";

export default function DashboardGrade() {
  
  return (
    <div
      className={`p-6 mt-16 min-h-screen bg-gray-100 text-gray-900}`}
    >
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold">Grades & Progress</h1>
            <p className="text-sm mt-1 text-gray-400">
              Overview of your course performance and progress.
            </p>
          </div>
        </header>
      </div>
    </div>
  );
}

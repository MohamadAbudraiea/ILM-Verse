import { useState } from "react";

function ReportModal({ isOpen, onClose, student, course }) {
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded-lg w-[90%] max-w-4xl shadow-xl space-y-4">
        <h2 className="text-2xl text-primary font-bold mb-5">
          Student Report Form
        </h2>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="font-medium">Course Name:</label>
            <div className="bg-gray-200 p-2 rounded-md text-center">{course}</div>
          </div>
          <div>
            <label className="font-medium">Student Name:</label>
            <div className="bg-gray-200 p-2 rounded-md text-center">{student}</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="font-medium">Date (MM/DD/YYYY):</label>
            <input
              type="date"
              className="input input-bordered w-full text-center"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div>
            <label className="invisible">Department name: </label>
            <div className="bg-primary p-3 text-center text-base-100 rounded-md">
              Primary
            </div>
          </div>
        </div>

        <div>
          <label className="font-medium">Description:</label>
          <textarea
            className="textarea textarea-bordered w-full h-32"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="flex justify-between gap-10">
          <button
            className="btn flex-1 bg-gray-300 hover:bg-gray-400"
            onClick={() => {
              setDescription("");
              setDate(new Date().toISOString().split("T")[0]);
            }}
          >
            Clear
          </button>
          <button className="btn flex-1 bg-primary text-white">Generate</button>
        </div>

        <div className="text-right">
          <button className="text-md text-red-500 mt-2" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
export default ReportModal;

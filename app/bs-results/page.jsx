"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const bsPrograms = [
  { name: "BS Chemistry" },
  { name: "BS Economics" },
  { name: "BS Education" },
  { name: "BS English" },
  { name: "BS Geography" },
  { name: "BS History" },
  { name: "BS Mathematics" },
  { name: "BS Physics" },
  { name: "BS Political Science" },
  { name: "BS Sociology" },
  { name: "BS Urdu" },
  { name: "BS Zoology" },
  { name: "BS Islamiat" },
];

const sessions = ["2020", "2021", "2022", "2023", "2024"];

export default function ResultForm() {
  const [session, setSession] = useState("");
  const [subject, setSubject] = useState("");
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState("");
  const router = useRouter();

  function generateCaptcha() {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    return Array.from({ length: 5 }, () =>
      chars.charAt(Math.floor(Math.random() * chars.length))
    ).join("");
  }

  const handleRefresh = () => {
    setCaptcha(generateCaptcha());
    setCaptchaInput("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (captchaInput !== captcha) {
      toast.error("Invalid Captcha. Try again!");
      handleRefresh();
      return;
    }

    router.push(`/${subject.toLowerCase()}/${session}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md border border-gray-200"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-[var(--primary-background)]">
          Check Your BS Result
        </h2>

        {/* Session Dropdown */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Session</label>
          <select
            value={session}
            onChange={(e) => setSession(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          >
            <option value="">Select Session</option>
            {sessions.map((yr, idx) => (
              <option key={idx} value={yr}>
                {yr}
              </option>
            ))}
          </select>
        </div>

        {/* Subject Dropdown */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Subject</label>
          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          >
            <option value="">Select Subject</option>
            {bsPrograms.map((prog, idx) => {
              const subjectName = prog.name.replace("BS ", "");
              return (
                <option key={idx} value={subjectName}>
                  {subjectName}
                </option>
              );
            })}
          </select>
        </div>

        {/* Captcha */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Captcha</label>
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold tracking-widest px-4 py-2 rounded select-none text-lg">
              {captcha}
            </div>
            <button
              type="button"
              onClick={handleRefresh}
              className="text-blue-600 text-sm hover:underline"
            >
              Refresh
            </button>
          </div>
          <input
            type="text"
            value={captchaInput}
            onChange={(e) => setCaptchaInput(e.target.value.toUpperCase())}
            placeholder="Enter captcha"
            className="mt-2 w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none uppercase"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="inline-block bg-[var(--primary-background)] border-[var(--secondry-color)] border-[1px] hover:border-[var(--primary-background)] hover:bg-[var(--secondry-color)] text-white hover:text-[var(--primary-background)] px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full cursor-pointer font-semibold"
        >
          View Result
        </button>
      </form>
    </div>
  );
}

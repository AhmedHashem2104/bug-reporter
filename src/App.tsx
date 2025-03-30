import { useEffect, useState } from "react";
import supabase from "./supabase";

interface BugReport {
  id: string;
  url: string;
  buttonText: string;
  note: string;
  timestamp: string;
}

function App() {
  const [reports, setReports] = useState<BugReport[]>([]);

  useEffect(() => {
    async function fetchReports() {
      const { data, error } = await supabase
        .from("bug_reports")
        .select("*")
        .limit(5);

      if (error) {
        console.error("Supabase fetch error:", error);
      } else {
        setReports(data || []);
      }
    }
    fetchReports();
  }, []);

  return (
    <div className="p-4 w-80">
      <h2 className="text-xl font-bold">Recent Reports</h2>
      {reports.map((report) => (
        <div key={report.id} className="border-b p-2">
          <p>
            <strong>Page:</strong> {report.url}
          </p>
          <p>
            <strong>Button:</strong> {report.buttonText}
          </p>
          <p>
            <strong>Note:</strong> {report.note}
          </p>
          <p className="text-xs text-gray-500">
            <strong>Note:</strong> {new Date(report.timestamp).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;

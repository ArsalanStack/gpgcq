"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import * as XLSX from "xlsx";

export default function ResultPage({ params }) {
  const { subject, session } = params;
  const [loading, setLoading] = useState(true);
  const [fileUrl, setFileUrl] = useState("");
  const [rows, setRows] = useState([]);
  const [sheets, setSheets] = useState([]);
  const [activeSheet, setActiveSheet] = useState("");
  const [search, setSearch] = useState("");
  const [headers, setHeaders] = useState([]);
  const [mainHeaders, setMainHeaders] = useState([]);
  const [documentHeaders, setDocumentHeaders] = useState([]);

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const res = await axios.get(`/api/results/get`, {
          params: { subject, session },
        });

        const data = res.data;
        setFileUrl(data.fileUrl);

        const excelRes = await axios.get(data.fileUrl, {
          responseType: "arraybuffer",
        });

        const workbook = XLSX.read(excelRes.data, { type: "array" });
        const sheetNames = workbook.SheetNames;

        setSheets(sheetNames);
        setActiveSheet(sheetNames[0]);

        parseSheet(workbook, sheetNames[0]);
      } catch (err) {
        console.error(err);
        toast.error(err.response?.data?.error || "Error fetching result file!");
      } finally {
        setLoading(false);
      }
    };

    fetchResult();
  }, [subject, session]);

  const parseSheet = (workbook, sheetName) => {
    const sheet = workbook.Sheets[sheetName];
    const rawData = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: "" });

    if (rawData.length < 6) {
      setRows([]);
      setHeaders([]);
      setMainHeaders([]);
      setDocumentHeaders([]);
      return;
    }

    // First 3 rows are document headers (to display above table)
    const docHeaders = [
      rawData[0].filter(cell => cell).join(" "),
      rawData[1].filter(cell => cell).join(" "),
      rawData[2].filter(cell => cell).join(" ")
    ].filter(text => text);

    setDocumentHeaders(docHeaders);

    // 4th row contains main headers (subject names)
    const fourthRow = rawData[3];
    // 5th row contains sub headers (Code, C.Hrs, etc)
    const fifthRow = rawData[4];
    
    // Parse main headers to create groups
    const mainHeaderGroups = [];
    let currentHeader = "";
    let spanCount = 0;

    fourthRow.forEach((cell, index) => {
      if (cell && cell !== "") {
        if (currentHeader && spanCount > 0) {
          mainHeaderGroups.push({ text: currentHeader, span: spanCount });
        }
        currentHeader = cell;
        spanCount = 1;
      } else {
        spanCount++;
      }
    });
    if (currentHeader && spanCount > 0) {
      mainHeaderGroups.push({ text: currentHeader, span: spanCount });
    }

    setMainHeaders(mainHeaderGroups);
    setHeaders(fifthRow);

    // Data starts from 6th row
    const dataRows = rawData.slice(5).filter(row => row.some(cell => cell !== ""));
    setRows(dataRows);
  };

  const handleSheetChange = (sheetName) => {
    setActiveSheet(sheetName);

    axios
      .get(fileUrl, { responseType: "arraybuffer" })
      .then((res) => {
        const workbook = XLSX.read(res.data, { type: "array" });
        parseSheet(workbook, sheetName);
      })
      .catch((err) => {
        console.error("Error loading sheet:", err);
        toast.error("Failed to load selected sheet");
      });
  };

  const filteredRows = rows.filter((row) =>
    row.join(" ").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 uppercase">
          {subject} — {session}
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          Government Post Graduate College Quetta — BS Results
        </p>
      </div>

      {loading ? (
        <div className="text-center text-gray-500">Loading result...</div>
      ) : fileUrl ? (
        <>
          <div className="flex flex-wrap justify-between items-center mb-4 gap-3">
            <div className="flex gap-3 w-full sm:w-auto">
              <select
                value={activeSheet}
                onChange={(e) => handleSheetChange(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                {sheets.map((sheet) => (
                  <option key={sheet} value={sheet}>
                    {sheet}
                  </option>
                ))}
              </select>

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name, roll no, etc."
                className="border border-gray-300 rounded-md px-3 py-2 flex-1 sm:w-60 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <a
              href={fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--primary-background)] px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer font-semibold border-[var(--secondry-color)] border-[1px] hover:border-[var(--primary-background)] hover:bg-[var(--secondry-color)] text-white hover:text-[var(--primary-background)]"
            >
              Download Sheet
            </a>
          </div>

          {/* Document Headers - Static, centered, above table */}
          {documentHeaders.length > 0 && (
            <div className="bg-white border-2 border-gray-300 rounded-t-lg p-4 text-center">
              {documentHeaders.map((header, index) => (
                <div
                  key={index}
                  className="text-sm font-semibold text-gray-800 mb-1"
                  style={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {header}
                </div>
              ))}
            </div>
          )}

          <div className="overflow-x-auto bg-white border-2 border-t-0 border-gray-300 rounded-b-lg shadow-sm">
            <table className="min-w-full border-collapse" style={{ borderSpacing: 0 }}>
              <thead>
                {/* Main Header Row (Subject Names) */}
                {mainHeaders.length > 0 && (
                  <tr className="bg-gray-200 border-b-2 border-gray-300">
                    {mainHeaders.map((header, index) => (
                      <th
                        key={index}
                        colSpan={header.span}
                        className="px-2 py-2 text-xs font-bold text-gray-800 border border-gray-300 text-center"
                        style={{
                          whiteSpace: 'nowrap'
                        }}
                      >
                        {header.text}
                      </th>
                    ))}
                  </tr>
                )}

                {/* Sub Header Row (Code, C.Hrs, etc) */}
                {headers.length > 0 && (
                  <tr className="bg-gray-100 border-b-2 border-gray-300">
                    {headers.map((header, index) => (
                      <th
                        key={index}
                        className="px-2 py-2 text-xs font-semibold text-gray-700 border border-gray-300 text-center"
                        style={{
                          minWidth: '60px',
                          maxWidth: '120px',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap'
                        }}
                        title={header?.toString() || ""}
                      >
                        {header || "-"}
                      </th>
                    ))}
                  </tr>
                )}
              </thead>

              <tbody>
                {filteredRows.length > 0 ? (
                  filteredRows.map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50 border-b border-gray-300">
                      {row.map((val, j) => (
                        <td
                          key={j}
                          className="px-2 py-1.5 text-xs text-gray-800 border border-gray-300 text-center"
                          style={{
                            minWidth: '60px',
                            maxWidth: '120px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap'
                          }}
                          title={val?.toString() || "-"}
                        >
                          {val?.toString() || "-"}
                        </td>
                      ))}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={headers.length || 1}
                      className="text-center py-4 text-gray-500 border border-gray-300"
                    >
                      No matching records
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <div className="text-center text-gray-500">No file found</div>
      )}
    </div>
  );
}
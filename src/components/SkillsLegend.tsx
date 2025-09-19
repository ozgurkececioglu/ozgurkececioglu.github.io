export const SkillsLegend = () => {
  return (
    <div className="bg-gray-900 rounded p-4 mb-4">
      <h3 className="text-lg font-semibold mb-2 text-white">Skill Level Guide</h3>
      <div className="grid grid-cols-2 gap-2 text-sm">
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-4 rounded text-center text-xs font-bold flex items-center justify-center"
            style={{ backgroundColor: "rgb(0, 255, 0)", color: "black" }}
          >
            1-5
          </div>
          <span className="text-gray-300">Learning (Basic understanding)</span>
        </div>
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-4 rounded text-center text-xs font-bold flex items-center justify-center"
            style={{ backgroundColor: "rgb(255, 204, 0)", color: "black" }}
          >
            6-10
          </div>
          <span className="text-gray-300">Intermediate (Some experience)</span>
        </div>
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-4 rounded text-center text-xs font-bold flex items-center justify-center"
            style={{ backgroundColor: "rgb(255, 136, 0)", color: "black" }}
          >
            11-15
          </div>
          <span className="text-gray-300">Proficient (Production experience)</span>
        </div>
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-4 rounded text-center text-xs font-bold flex items-center justify-center"
            style={{ backgroundColor: "rgb(255, 0, 0)", color: "white" }}
          >
            16-20
          </div>
          <span className="text-gray-300">Expert (Advanced/Leadership level)</span>
        </div>
      </div>
    </div>
  );
};

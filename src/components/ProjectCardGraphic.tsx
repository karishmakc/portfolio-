import React from 'react';

interface GraphicProps {
  projectId: string;
}

export const ProjectCardGraphic: React.FC<GraphicProps> = ({ projectId }) => {
  switch (projectId) {
    case 'project-01': // CPU Scheduling Visualizer
      return (
        <div className="w-full h-32 bg-[#FDF0F3] p-3 flex flex-col justify-between overflow-hidden relative border border-[#E2889A]/25 group-hover:border-[#C59B27]/40 transition-all">
          <div className="flex items-center justify-between text-[10px] font-mono-tag text-[#735E66]">
            <span className="font-semibold text-[#C59B27]">GANTT SCHEDULER</span>
            <span>FCFS · SJF · RR</span>
          </div>
          {/* Visual Gantt Bar */}
          <div className="space-y-1.5 my-auto">
            <div className="flex h-5 w-full overflow-hidden text-[9px] font-mono-tag text-white font-bold text-center leading-5 shadow-2xs">
              <div className="w-[30%] bg-[#C59B27] flex items-center justify-center">P1 (6ms)</div>
              <div className="w-[25%] bg-[#E2889A] flex items-center justify-center">P2 (4ms)</div>
              <div className="w-[45%] bg-[#B85066] flex items-center justify-center">P3 (8ms)</div>
            </div>
            <div className="flex justify-between text-[9px] font-mono-tag text-[#A69199] px-0.5">
              <span>0ms</span>
              <span>6ms</span>
              <span>10ms</span>
              <span>18ms</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-[9px] font-mono-tag text-[#735E66]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27] animate-pulse"></span>
            <span>Avg Waiting Time: 4.2ms</span>
          </div>
        </div>
      );

    case 'project-02': // AI Smart Crop & Climate Risk Advisor
      return (
        <div className="w-full h-32 bg-[#FFF8F9] p-3 flex flex-col justify-between overflow-hidden relative border border-[#E2889A]/30 transition-all">
          <div className="flex items-center justify-between text-[10px] font-mono-tag text-[#C59B27]">
            <span className="font-semibold">RANDOM FOREST MODEL</span>
            <span className="px-1.5 py-0.2 bg-[#FBF0D3] text-[#A37E1C] border border-[#C59B27]/30 text-[9px] font-semibold">98.2% ACC</span>
          </div>
          <div className="grid grid-cols-3 gap-1.5 my-auto">
            <div className="p-1.5 bg-white border border-[#E2889A]/20 text-center shadow-2xs">
              <span className="block text-[8px] font-mono-tag text-[#735E66]">SOIL NPK</span>
              <span className="text-[10px] font-bold text-[#23181C]">Optimal</span>
            </div>
            <div className="p-1.5 bg-white border border-[#E2889A]/20 text-center shadow-2xs">
              <span className="block text-[8px] font-mono-tag text-[#735E66]">HUMIDITY</span>
              <span className="text-[10px] font-bold text-[#C59B27]">76%</span>
            </div>
            <div className="p-1.5 bg-white border border-[#E2889A]/20 text-center shadow-2xs">
              <span className="block text-[8px] font-mono-tag text-[#735E66]">RECOMMEND</span>
              <span className="text-[10px] font-bold text-[#B85066]">Maize/Rice</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-[9px] font-mono-tag text-[#735E66]">
            <span>Weather Risk: Low</span>
            <span className="text-[#C59B27] font-semibold">Live API Active</span>
          </div>
        </div>
      );

    case 'project-03': // Smart Bus Monitoring System
      return (
        <div className="w-full h-32 bg-[#FDF0F3] p-3 flex flex-col justify-between overflow-hidden relative border border-[#E2889A]/25 transition-all">
          <div className="flex items-center justify-between text-[10px] font-mono-tag text-[#23181C]">
            <span className="font-semibold text-[#C59B27]">ESP32 + GPS TELEMETRY</span>
            <span className="flex items-center gap-1 text-[#C59B27] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27] animate-ping"></span>
              Live Node
            </span>
          </div>
          <div className="flex items-center justify-between my-auto px-2 relative">
            <div className="absolute left-4 right-4 h-0.5 bg-[#C59B27]/30 top-1/2 -translate-y-1/2"></div>
            <div className="relative z-10 w-6 h-6 bg-white border-2 border-[#C59B27] flex items-center justify-center text-[8px] font-mono-tag font-bold text-[#C59B27]">
              S1
            </div>
            <div className="relative z-10 px-2 py-1 bg-[#23181C] text-[#FFF8F9] text-[9px] font-mono-tag font-semibold border border-[#C59B27]/50 shadow-xs">
              Bus #14 (ETA 4m)
            </div>
            <div className="relative z-10 w-6 h-6 bg-white border-2 border-[#E2889A] flex items-center justify-center text-[8px] font-mono-tag text-[#E2889A]">
              S2
            </div>
          </div>
          <div className="flex items-center justify-between text-[9px] font-mono-tag text-[#735E66]">
            <span>Crowd: Moderate (58%)</span>
            <span className="text-[#C59B27] font-semibold">WebSocket Stream</span>
          </div>
        </div>
      );

    case 'project-04': // Smart Water Tank Monitoring
      return (
        <div className="w-full h-32 bg-[#FFF8F9] p-3 flex flex-col justify-between overflow-hidden relative border border-[#E2889A]/30 transition-all">
          <div className="flex items-center justify-between text-[10px] font-mono-tag text-[#23181C]">
            <span className="font-semibold text-[#C59B27]">ULTRASONIC DEPTH SENSOR</span>
            <span className="text-[#A69199]">HC-SR04</span>
          </div>
          <div className="flex items-center gap-3 my-auto">
            <div className="w-10 h-14 border border-[#C59B27]/40 bg-white relative overflow-hidden flex flex-col justify-end shadow-2xs">
              <div className="w-full h-[75%] bg-[#FBF0D3] border-t-2 border-[#C59B27] flex items-center justify-center text-[8px] font-mono-tag font-bold text-[#A37E1C]">
                75%
              </div>
            </div>
            <div className="flex-1 space-y-1 text-[9px] font-mono-tag">
              <div className="flex justify-between text-[#735E66]">
                <span>Tank Capacity:</span>
                <span className="font-bold text-[#23181C]">1000 L</span>
              </div>
              <div className="flex justify-between text-[#735E66]">
                <span>Current Volume:</span>
                <span className="font-bold text-[#C59B27]">750 Liters</span>
              </div>
              <div className="flex justify-between text-[#B85066] font-semibold">
                <span>Status:</span>
                <span>Normal Level</span>
              </div>
            </div>
          </div>
          <div className="text-[9px] font-mono-tag text-[#735E66]">
            Real-time Microcontroller Telemetry
          </div>
        </div>
      );

    case 'project-05': // SafeSteps
      return (
        <div className="w-full h-32 bg-[#FDF0F3] p-3 flex flex-col justify-between overflow-hidden relative border border-[#E2889A]/25 transition-all">
          <div className="flex items-center justify-between text-[10px] font-mono-tag text-[#B85066]">
            <span className="font-semibold">AWARENESS PORTAL</span>
            <span className="text-[#C59B27] font-semibold">Safety & Hygiene</span>
          </div>
          <div className="grid grid-cols-2 gap-2 my-auto">
            <div className="p-1.5 bg-white border border-[#E2889A]/20 shadow-2xs">
              <span className="block text-[8px] font-mono-tag text-[#B85066] font-semibold">
                01. DAILY HYGIENE
              </span>
              <span className="text-[9px] text-[#23181C] font-medium">Habit Tracker</span>
            </div>
            <div className="p-1.5 bg-white border border-[#E2889A]/20 shadow-2xs">
              <span className="block text-[8px] font-mono-tag text-[#C59B27] font-semibold">
                02. CHILD SAFETY
              </span>
              <span className="text-[9px] text-[#23181C] font-medium">Emergency SOS</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-[9px] font-mono-tag text-[#735E66]">
            <span>Accessible Design</span>
            <span className="text-[#C59B27] font-semibold">Interactive Modules</span>
          </div>
        </div>
      );

    default:
      return (
        <div className="w-full h-32 bg-[#FFF8F9] p-3 flex flex-col justify-between overflow-hidden relative border border-[#E2889A]/30 transition-all">
          <div className="flex items-center justify-between text-[10px] font-mono-tag text-[#23181C]">
            <span className="font-semibold text-[#C59B27]">CSE ENGINEERING SYSTEM</span>
            <span className="text-[#B85066] font-semibold">Live Project</span>
          </div>
          <div className="flex items-center justify-center my-auto">
            <div className="px-3 py-1.5 bg-[#23181C] text-white text-xs font-mono-tag border border-[#C59B27]/40 shadow-xs">
              Interactive System Architecture
            </div>
          </div>
          <div className="flex items-center justify-between text-[9px] font-mono-tag text-[#735E66]">
            <span>Validated Build</span>
            <span className="text-[#C59B27] font-semibold">Ready</span>
          </div>
        </div>
      );
  }
};

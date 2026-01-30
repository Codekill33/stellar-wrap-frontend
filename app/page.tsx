import { LandingPage } from "./components/LandingPage";
import { ShareCard } from "./components/ShareCard";
import { OGCardReplication } from "./components/OGCardReplication";

export default function Home() {
  return (
    <main>
      <LandingPage />
      
      {/* Comparison Section */}
      <div className="flex flex-col items-center gap-10 py-20 bg-black">
        <h2 className="text-4xl font-black text-white">COMPARISON VIEW</h2>
        <div className="flex flex-col flex-wrap justify-center items-start gap-10">
          
          {/* ORIGINAL COMPONENT */}
          <div className="flex flex-col items-center">
            <p className="text-white/50 mb-4 font-bold uppercase tracking-widest text-sm">Original ShareCard</p>
            <div className="rounded-3xl overflow-hidden border border-white/10">
               <ShareCard 
                 username="StellarUser" 
                 transactions={734} 
                 persona="Network Pioneer" 
                 topVibe="Steady" 
                 vibePercentage={85} 
               />
            </div>
          </div>

          {/* OG REPLICATION */}
          <div className="flex flex-col items-center">
            <p className="text-white/50 mb-4 font-bold uppercase tracking-widest text-sm">OG API Replication (Satori)</p>
            <div className="w-[600px] h-[600px] rounded-3xl overflow-hidden border border-white/10">
               <OGCardReplication />
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

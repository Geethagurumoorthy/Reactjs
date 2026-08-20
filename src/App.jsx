import GNavbar from "./Portfolio/GNavbar.jsx";
import GHero from "./Portfolio/GHero.jsx";
import GAbout from "./Portfolio/GAbout.jsx";
import GSkills from "./Portfolio/GSkills.jsx";
import GProjects from "./Portfolio/GProjects.jsx";
import GEducation from "./Portfolio/GEducation.jsx";
import GCertifications from "./Portfolio/GCertifications.jsx";
import GServices from "./Portfolio/GServices.jsx";
import GContact from "./Portfolio/GContact.jsx";
import GFooter from "./Portfolio/GFooter.jsx";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <GNavbar />
      <main>
        <GHero />
        <GAbout />
        <GSkills />
        <GProjects />
        <GEducation />
        <GCertifications />
        <GServices />
        <GContact />
      </main>
      <GFooter />
    </div>
  );
}

export default App;
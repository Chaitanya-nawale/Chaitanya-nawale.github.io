import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ProjectList } from './components/ProjectList';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Navbar />
      <main className="divide-y divide-border/60">
        <Hero />
        <ExperienceTimeline />
        <ProjectList />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;

// pages/project.js
const ProjectPage = () => {
    return (
      <>
        <div className="text-center py-8">
          <h2 className="text-3xl text-black font-bold">Project</h2>
        </div>
        <section className="grid grid-cols-3 gap-4 p-20">
          <div className="bg-purple-900 p-6">
            <h2 className="text-green-400 font-bold text-lg mb-4">Content</h2>
            <p className="text-green-400">Detailed content here...</p>
          </div>
          <div className="bg-purple-900 p-6">
            <h2 className="text-green-400 font-bold text-lg mb-4">Methodology</h2>
            <p className="text-green-400">Detailed methodology here...</p>
          </div>
          <div className="bg-purple-900 p-6">
            <h2 className="text-green-400 font-bold text-lg mb-4">Expected findings</h2>
            <p className="text-green-400">Expected findings details...</p>
          </div>
        </section>
      </>
    );
  };
  
  export default ProjectPage;
  
// pages/about.js

export default function AboutPage() {
    // Define an array to hold team member data
    const teamMembers = [
      {
        name: "Prof. Dr. Mirjam Fischer",
        role: "There is just enough space here for several lines of text. Use it well.",
        imgSrc: "/images/profile1.png", // Replace with your actual image path
      },
      {
        name: "Dr. Esto Mader",
        role: "There is just enough space here for several lines of text. Use it well.",
        imgSrc: "/images/profile2.png", // Replace with your actual image path
      },
      {
        name: "Lea Luttenberger",
        role: "There is just enough space here for several lines of text. Use it well.",
        imgSrc: "/images/profile3.png", // Replace with your actual image path
      },
      {
        name: "Selin Akgöz",
        role: "There is just enough space here for several lines of text. Use it well.",
        imgSrc: "/images/profile4.png", // Replace with your actual image path
      },
      {
        name: "Celine Vallender",
        role: "There is just enough space here for several lines of text. Use it well.",
        imgSrc: "/images/profile5.png", // Replace with your actual image path
      },
      {
        name: "tbd",
        role: "There is just enough space here for several lines of text. Use it well.",
        imgSrc: "/images/profile6.png", // Replace with your actual image path
      }
    ];
  
    return (
        <div className="bg-primary py-20 text-white">
          <h2 className="text-5xl text-center font-bold mb-12">ADOMiS Team</h2>
          <div className="grid grid-cols-3 gap-10 justify-items-center px-20">
            {teamMembers.map((member, index) => (
              <div className="text-center bg-accent rounded-lg p-6" key={index}>
                <img src={member.imgSrc} alt={member.name} className="rounded-full mb-4 w-48 h-48 object-cover" />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-black">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }
  
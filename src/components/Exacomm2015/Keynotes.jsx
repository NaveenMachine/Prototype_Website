import React, { useState } from 'react';
import '../../assets/css/WorkshopProgram.css';

const Keynotes = () => {
  const [open, setOpen] = useState(null);

  const schedule = [
    {
      time: "2:00 - 2:05 PM",
      title: "Opening Remarks",
      speakers: "Hari Subramoni, Aamir Shafi, and Dhabaleswar K (DK) Panda, The Ohio State University",
    },
    {
      time: "2:05 - 2:40 PM",
      title: "Keynote: Aurora Exascale Architecture",
      speaker: "Dr. Kalyan Kumaran, Argonne National Laboratory",
      chair: "Dhabaleswar K (DK) Panda, The Ohio State University",
      abstract:
        "Aurora is an exascale supercomputer in the final stages of assembly at the Argonne Leadership Computing Facility...",
      bio:
        "Dr. Kalyan Kumaran is a Senior Computer Scientist and Director of Technology at the Argonne Leadership Computing Facility...",
    },
    {
      time: "2:40 - 3:00 PM",
      title: "Addressing HPC/AI Performance Bottlenecks with BlueField DPUs",
      speaker: "Gilad Shainer, NVIDIA",
      chair: "TBD",
      abstract:
        "AI and scientific workloads demand ultra-fast processing of high-resolution simulations...",
      bio:
        "Gilad Shainer serves as senior vice-president of networking at NVIDIA...",
    },
  ];

  return (
    <section className="workshop-program" id="program">
      <h2>Workshop Program</h2>
      <div className="program-container">
        {schedule.map((session, index) => (
          <div
            key={index}
            className={`program-content ${open === index ? 'program-open' : ''}`}
          >
            {/* Header */}
            <div
              className="program-header"
              onClick={() => setOpen(open === index ? null : index)}
            >
              <div className="program-time">{session.time}</div>
              <div className="program-title">{session.title}</div>
              <div className="program-arrow">&#9660;</div>
            </div>

            {/* Expanded content */}
            <div
              className="program-data"
              aria-expanded={open === index ? 'true' : 'false'}
            >
              <div className="program-details">
                {session.speaker && (
                  <p>
                    <b>Speaker:</b> {session.speaker}
                  </p>
                )}
                {session.speakers && (
                  <p>
                    <b>Speakers:</b> {session.speakers}
                  </p>
                )}
                {session.chair && (
                  <p>
                    <b>Session Chair:</b> {session.chair}
                  </p>
                )}
                {session.abstract && (
                  <p>
                    <b>Abstract:</b> {session.abstract}
                  </p>
                )}
                {session.bio && (
                  <p>
                    <b>Speaker Bio:</b> {session.bio}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Keynotes;

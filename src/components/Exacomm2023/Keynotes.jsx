import React, { useState } from 'react';
import '../../assets/css/WorkshopProgram.css';
import data from '../../assets/json/workshop_schedule2023.json'; // import JSON
import { Youtube, FileEarmarkPdfFill } from 'react-bootstrap-icons';

const Keynotes = () => {
  const [open, setOpen] = useState(null);

  return (
    <section className="workshop-program" id="program">
      <h2>Workshop Program</h2>
      <p className="timezone">{data.timezone}</p>

      <div className="program-container">
        {data.schedule.map((session, index) => (
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

                {/* Attachments */}
                {session.attachments &&
                  (session.attachments.youtube || session.attachments.pdf) && (
                    <div className="attachments">
                      <b>Attachments:</b>
                      <div className="attachment-links">
                        {session.attachments.youtube && (
                          <a
                            href={session.attachments.youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="attachment-btn youtube-btn"
                          >
                            <Youtube className="attachment-icon" /> YouTube
                          </a>
                        )}
                        {session.attachments.pdf && (
                          <a
                          href={session.attachments.pdf}
                          download
                          target="_blank"
                          rel="noopener noreferrer"
                          className="attachment-btn pdf-btn"
                        >
                          <FileEarmarkPdfFill className="attachment-icon" /> Slides (PDF)
                        </a>
                        
                        )}
                      </div>
                    </div>
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

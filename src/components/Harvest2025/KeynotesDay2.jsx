import React, { useState } from 'react';
import '../../assets/css/WorkshopProgram.css';
import data from '../../assets/json/workshop_schedule2025Day2.json';
import { Youtube, FileEarmarkPdfFill } from 'react-bootstrap-icons';

const KeynotesDay2 = () => {
  const [open, setOpen] = useState(null);

  // ✅ Helper to check if the session has details beyond time & title
  const hasDetails = (session) => {
    const keys = Object.keys(session);
    const detailKeys = keys.filter((key) => key !== 'time' && key !== 'title');
    return detailKeys.length > 0;
  };

  return (
    <section className="workshop-program" id="program">
      <h3>Day 2</h3>
      <p className="timezone">{data.timezone}</p>

      <div className="program-container">
        {data.schedule.map((session, index) => {
          const showDetails = hasDetails(session);

          return (
            <div
              key={index}
              className={`program-content ${open === index ? 'program-open' : ''}`}
            >
              {/* Header */}
              <div
                className="program-header"
                onClick={() => showDetails && setOpen(open === index ? null : index)}
                style={{ cursor: showDetails ? 'pointer' : 'default' }}
              >
                <div className="program-time">{session.time}</div>
                <div className="program-title">{session.title}</div>
                {/* Only show dropdown arrow if details exist */}
                {showDetails && <div className="program-arrow">&#9660;</div>}
              </div>

              {/* Expanded content (only renders if details exist) */}
              {showDetails && (
                <div
                  className="program-data"
                  aria-expanded={open === index ? 'true' : 'false'}
                >
                  <div className="program-details">
                    {/* Speaker Info */}
                    {session.speaker && (
                      <p>
                        <b>Speaker:</b> {session.speaker}
                      </p>
                    )}
                    {session.speakers && (
                      <p>
                        <b>Speakers:</b> {session.speakers.join(', ')}
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

                    {/* Papers Section */}
                    {session.papers && (
                      <div className="papers-section">
                        <b>Papers:</b>
                        <ul>
                          {session.papers.map((paper, i) => (
                            <li key={i}>
                              <p><b>{paper.title}</b></p>
                              <p><i>{paper.authors.join(', ')}</i></p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Projects Section */}
                    {session.projects && (
                      <div className="projects-section">
                        <b>Projects:</b>
                        <ul>
                          {session.projects.map((project, i) => (
                            <li key={i}>
                              <p><b>{project.title}</b></p>
                              <p><i>{project.authors.join(', ')}</i></p>
                            </li>
                          ))}
                        </ul>
                      </div>
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
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default KeynotesDay2;

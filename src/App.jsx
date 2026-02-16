import React, { useState, useEffect } from 'react';

export default function NetflixResume() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const sections = ['hero', 'about', 'experience', 'skills', 'projects', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{
      backgroundColor: '#141414',
      color: '#ffffff',
      minHeight: '100vh',
      fontFamily: "'Netflix Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif"
    }}>
      {/* Netflix-style Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrollY > 50 ? 'linear-gradient(180deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 100%)' : 'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, transparent 100%)',
        transition: 'background 0.3s ease',
        padding: '1rem 4%'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{
            fontSize: '1.8rem',
            fontWeight: '900',
            color: '#E50914',
            letterSpacing: '-0.05em',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
          }}>
            KUSHAGRA MADAN
          </div>
          <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
            {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map(item => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                style={{
                  background: 'none',
                  border: 'none',
                  color: activeSection === item.toLowerCase() ? '#ffffff' : 'rgba(255,255,255,0.7)',
                  fontSize: '0.95rem',
                  fontWeight: activeSection === item.toLowerCase() ? '600' : '400',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  padding: '0.5rem 0',
                  borderBottom: activeSection === item.toLowerCase() ? '3px solid #E50914' : '3px solid transparent'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = activeSection === item.toLowerCase() ? '#ffffff' : 'rgba(255,255,255,0.7)';
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Netflix-style Hero Section */}
      <section id="hero" style={{
        minHeight: '95vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        background: 'linear-gradient(180deg, #000000 0%, #141414 100%)',
        paddingTop: '80px'
      }}>
        {/* Red Glow Effect - Netflix Style */}
        <div style={{
          position: 'absolute',
          top: '-10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80%',
          height: '60%',
          background: 'radial-gradient(ellipse at center, rgba(229, 9, 20, 0.25) 0%, rgba(229, 9, 20, 0.1) 30%, transparent 60%)',
          filter: 'blur(60px)',
          pointerEvents: 'none'
        }} />
        
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 4%',
          zIndex: 1,
          width: '100%'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4rem',
            flexWrap: 'wrap'
          }}>
            <div style={{
              maxWidth: '700px',
              flex: '1 1 500px'
            }}>
              <h1 style={{
                fontSize: 'clamp(3.5rem, 10vw, 7rem)',
                fontWeight: '900',
                marginBottom: '1.5rem',
                letterSpacing: '-0.03em',
                lineHeight: '0.95',
                color: '#ffffff',
                textShadow: '0 2px 8px rgba(0,0,0,0.8)'
              }}>
                Kushagra Madan
              </h1>
              <p style={{
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                color: '#E50914',
                marginBottom: '1.5rem',
                fontWeight: '700',
                letterSpacing: '-0.01em'
              }}>
                Accounting & Audit Professional
              </p>
              <p style={{
                fontSize: '1.2rem',
                color: 'rgba(255,255,255,0.8)',
                maxWidth: '700px',
                lineHeight: '1.6',
                marginBottom: '3rem'
              }}>
                Master's student in Accounting, Auditing and Performance Management specializing in Financial Auditing, Internal Controls, and Regulatory Compliance
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button
                  onClick={() => scrollToSection('about')}
                  style={{
                    background: '#E50914',
                    color: '#ffffff',
                    border: 'none',
                    padding: '1rem 2.5rem',
                    fontSize: '1.1rem',
                    fontWeight: '700',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 4px 12px rgba(229, 9, 20, 0.4)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#F40612';
                    e.target.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = '#E50914';
                    e.target.style.transform = 'scale(1)';
                  }}
                >
                  ▶ Explore My Work
                </button>
                <a
                  href="https://drive.google.com/file/d/17Y4MgkIdzmFBK-ZfE5evaARoWcHvFkbC/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: 'rgba(109, 109, 110, 0.7)',
                    color: '#ffffff',
                    border: 'none',
                    padding: '1rem 2.5rem',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(109, 109, 110, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(109, 109, 110, 0.7)';
                  }}
                >
                  📄 Download Resume
                </a>
              </div>
            </div>
            
            {/* Professional Photo */}
            <div style={{
              flex: '0 0 auto',
              position: 'relative'
            }}>
              <div style={{
                width: '280px',
                height: '280px',
                borderRadius: '8px',
                overflow: 'hidden',
                border: '3px solid #E50914',
                boxShadow: '0 8px 32px rgba(229, 9, 20, 0.4)',
                background: 'rgba(0,0,0,0.3)'
              }}>
                <img 
                  src="https://i.imgur.com/3LklP7O.jpg"
                  alt="Kushagra Madan"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Netflix Card Style */}
      <section id="about" style={{
        padding: '5rem 4%',
        background: '#141414'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '700',
            marginBottom: '3rem',
            color: '#ffffff'
          }}>
            About Me
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '2.5rem',
              borderRadius: '8px',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.8',
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: '1.5rem'
              }}>
                Detail-oriented Master's student in Accounting, Auditing and Performance Management with hands-on experience in financial statement analysis, internal control testing, and audit procedures. Proven ability to analyze 700+ transactions for accuracy, reconcile complex accounts, and identify control deficiencies to strengthen financial governance frameworks.
              </p>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.8',
                color: 'rgba(255, 255, 255, 0.9)'
              }}>
                Strong foundation in statutory audit procedures, IFRS/IND AS standards, and financial reporting compliance. Proficient in leveraging SAP R/3, Python, and Power BI for financial analysis and reporting automation. Committed to delivering audit excellence and driving continuous improvement in financial operations.
              </p>
            </div>
            <div style={{
              background: 'linear-gradient(135deg, rgba(229, 9, 20, 0.15) 0%, rgba(229, 9, 20, 0.05) 100%)',
              padding: '2.5rem',
              borderRadius: '8px',
              border: '1px solid rgba(229, 9, 20, 0.3)'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '1.5rem',
                color: '#E50914'
              }}>
                Quick Facts
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  '📍 Based in Paris, France',
                  '🎓 MSc in Accounting, Auditing & Performance Management',
                  '🌍 Bilingual: English & Hindi',
                  '🇫🇷 Learning French'
                ].map((fact, i) => (
                  <li key={i} style={{
                    fontSize: '1.1rem',
                    color: 'rgba(255, 255, 255, 0.9)',
                    marginBottom: '1rem',
                    paddingLeft: '0.5rem'
                  }}>
                    {fact}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section - Netflix Row Style */}
      <section id="experience" style={{
        padding: '5rem 4%',
        background: '#000000'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '700',
            marginBottom: '3rem',
            color: '#ffffff'
          }}>
            Experience
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {[
              {
                title: 'Finance Intern',
                company: 'Intertek',
                period: 'July 2024 - August 2024',
                description: 'Executed comprehensive vendor validation and supplier account reconciliation across 500+ vendor records and 200+ transactions, ensuring full compliance with internal financial controls and regulatory standards. Conducted systematic internal control assessments, identifying and documenting 18 material control deficiencies in accounts payable and procurement workflows. Delivered actionable remediation frameworks that enhanced governance protocols and mitigated financial reporting risks.',
                icon: '💼'
              },
              {
                title: 'Marketing Intern',
                company: 'Omnigo Educonsultancy',
                period: 'April 2024 - June 2024',
                description: 'Drove strategic business development initiatives, generating 30% of total pipeline leads through targeted stakeholder engagement and professional client communications. Maintained and optimized marketing databases with rigorous data integrity protocols, ensuring accuracy for executive reporting and performance analytics. Conducted financial evaluations of commercial partnership opportunities through structured cost-benefit analysis and ROI modeling.',
                icon: '📊'
              },
              {
                title: 'Accounting Intern',
                company: 'Naresh Kalra and Associates',
                period: 'January 2024 - March 2024',
                description: 'Supported statutory audit engagements by developing comprehensive audit workpapers for 150+ journal entries and executing substantive testing procedures on accounts receivable and fixed asset portfolios. Performed trial balance reconciliations across 8 diversified client portfolios, identifying and resolving ₹2.4M in material account discrepancies through detailed variance analysis. Conducted vouching procedures and analytical reviews of supporting documentation to ensure financial statement accuracy and compliance with Indian Accounting Standards (IND AS).',
                icon: '📝'
              }
            ].map((job, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  padding: '2rem',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  border: '1px solid transparent'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(229, 9, 20, 0.5)';
                  e.currentTarget.style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = 'transparent';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
                  <div style={{
                    fontSize: '2.5rem',
                    minWidth: '50px'
                  }}>
                    {job.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontSize: '1.5rem',
                      fontWeight: '700',
                      color: '#ffffff',
                      marginBottom: '0.5rem'
                    }}>
                      {job.title}
                    </h3>
                    <p style={{
                      fontSize: '1.1rem',
                      color: '#E50914',
                      marginBottom: '0.25rem',
                      fontWeight: '600'
                    }}>
                      {job.company}
                    </p>
                    <p style={{
                      fontSize: '0.95rem',
                      color: 'rgba(255, 255, 255, 0.6)',
                      marginBottom: '1rem'
                    }}>
                      {job.period}
                    </p>
                    <p style={{
                      fontSize: '1rem',
                      color: 'rgba(255, 255, 255, 0.8)',
                      lineHeight: '1.7'
                    }}>
                      {job.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section - Netflix Grid */}
      <section id="skills" style={{
        padding: '5rem 4%',
        background: '#141414'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '700',
            marginBottom: '3rem',
            color: '#ffffff'
          }}>
            Skills & Technologies
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}>
            {[
              {
                category: 'Audit & Assurance',
                icon: '🔍',
                skills: ['Statutory Audit', 'Internal Controls', 'Audit Workpapers', 'PCAOB Standards', 'Substantive Testing']
              },
              {
                category: 'Accounting & Finance',
                icon: '💰',
                skills: ['Financial Reporting', 'IFRS', 'IND AS', 'Trial Balance', 'Account Reconciliation']
              },
              {
                category: 'Technical Skills',
                icon: '💻',
                skills: ['Python (Pandas)', 'SQL', 'Power BI', 'Advanced Excel', 'SAP R/3']
              },
              {
                category: 'Compliance & Tax',
                icon: '📋',
                skills: ['VAT/GST', 'Regulatory Compliance', 'Tax Documentation', 'Risk Assessment', 'Control Testing']
              }
            ].map((category, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  padding: '2rem',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
                  border: '1px solid transparent'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(229, 9, 20, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(229, 9, 20, 0.5)';
                  e.currentTarget.style.transform = 'translateY(-8px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = 'transparent';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                  {category.icon}
                </div>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  marginBottom: '1.5rem',
                  color: '#ffffff'
                }}>
                  {category.category}
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {category.skills.map((skill, j) => (
                    <span
                      key={j}
                      style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        color: 'rgba(255, 255, 255, 0.9)',
                        padding: '0.4rem 0.9rem',
                        borderRadius: '4px',
                        fontSize: '0.85rem',
                        fontWeight: '500'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Netflix Thumbnail Style */}
      <section id="projects" style={{
        padding: '5rem 4%',
        background: '#000000'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '700',
            marginBottom: '3rem',
            color: '#ffffff'
          }}>
            Featured Projects
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem'
          }}>
            {[
              {
                title: 'KPMG Audit Simulation',
                description: 'Prepared standardized audit workpapers for 45 transactions in compliance with PCAOB audit standards. Analyzed financial statement notes and documentation to assess reporting accuracy. Documented 3 compliance deficiencies with recommended corrective actions.',
                tech: ['Audit Procedures', 'PCAOB Standards', 'Financial Analysis', 'Compliance'],
                link: 'https://drive.google.com/drive/folders/1UjckZIReDpowCOfaFs3xBd_U1D0VKYNp?usp=sharing',
                icon: '📊'
              },
              {
                title: 'Compliance Monitoring System',
                description: 'Developed automated transaction monitoring framework tracking 800+ transactions across 60 client accounts for regulatory compliance. Designed Python-based compliance checks to detect anomalies and enhance AML/CFT enforcement.',
                tech: ['Python', 'Pandas', 'Data Analytics', 'Risk Management'],
                link: 'https://drive.google.com/drive/folders/1UjckZIReDpowCOfaFs3xBd_U1D0VKYNp?usp=sharing',
                icon: '🐍'
              },
              {
                title: 'Blinkit Business Analysis',
                description: 'Built financial performance dashboards using Power BI, tracking revenue trends, profitability metrics, and variance analysis. Implemented automated data updates and DAX measures for KPI calculation, ensuring accuracy of financial reporting.',
                tech: ['Power BI', 'DAX', 'Excel', 'Financial Modeling'],
                link: 'https://drive.google.com/drive/folders/1UjckZIReDpowCOfaFs3xBd_U1D0VKYNp?usp=sharing',
                icon: '📈'
              }
            ].map((project, i) => (
              <a
                key={i}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  display: 'block',
                  border: '1px solid transparent'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.borderColor = 'rgba(229, 9, 20, 0.6)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(229, 9, 20, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.borderColor = 'transparent';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  height: '180px',
                  background: 'linear-gradient(135deg, rgba(229, 9, 20, 0.2) 0%, rgba(229, 9, 20, 0.05) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '4rem'
                }}>
                  {project.icon}
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{
                    fontSize: '1.3rem',
                    fontWeight: '700',
                    marginBottom: '0.75rem',
                    color: '#ffffff'
                  }}>
                    {project.title}
                  </h3>
                  <p style={{
                    fontSize: '0.95rem',
                    color: 'rgba(255, 255, 255, 0.7)',
                    lineHeight: '1.6',
                    marginBottom: '1rem'
                  }}>
                    {project.description}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
                    {project.tech.map((tech, j) => (
                      <span
                        key={j}
                        style={{
                          background: 'rgba(229, 9, 20, 0.15)',
                          color: '#E50914',
                          padding: '0.3rem 0.7rem',
                          borderRadius: '4px',
                          fontSize: '0.8rem',
                          fontWeight: '500'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#E50914',
                    fontSize: '0.9rem',
                    fontWeight: '600'
                  }}>
                    <span>View Project</span>
                    <span>→</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" style={{
        padding: '5rem 4%',
        background: '#141414'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '700',
            marginBottom: '3rem',
            color: '#ffffff'
          }}>
            Education
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              {
                degree: 'Master of Science in Accounting, Auditing and Performance Management',
                school: 'Grenoble Ecole De Management',
                period: '2025 - 2027',
                coursework: 'Accounting, Auditing, Corporate Finance, Strategic Management'
              },
              {
                degree: 'Bachelor of Commerce',
                school: 'Asian School of Business',
                period: '2022 - 2025',
                coursework: 'GST, Cost Accounting, Auditing, Income Tax, Accounting for Managers'
              }
            ].map((edu, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  padding: '2rem',
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
                  <span style={{ fontSize: '2.5rem' }}>🎓</span>
                  <div>
                    <h3 style={{
                      fontSize: '1.4rem',
                      fontWeight: '700',
                      color: '#ffffff',
                      marginBottom: '0.5rem'
                    }}>
                      {edu.degree}
                    </h3>
                    <p style={{
                      fontSize: '1.1rem',
                      color: '#E50914',
                      marginBottom: '0.25rem',
                      fontWeight: '600'
                    }}>
                      {edu.school}
                    </p>
                    <p style={{
                      fontSize: '0.95rem',
                      color: 'rgba(255, 255, 255, 0.6)',
                      marginBottom: '0.75rem'
                    }}>
                      {edu.period}
                    </p>
                    <p style={{
                      fontSize: '0.95rem',
                      color: 'rgba(255, 255, 255, 0.7)'
                    }}>
                      <strong>Coursework:</strong> {edu.coursework}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Netflix CTA Style */}
      <section id="contact" style={{
        padding: '5rem 4%',
        background: '#000000'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '700',
            marginBottom: '1.5rem',
            color: '#ffffff'
          }}>
            Let's Connect
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: 'rgba(255, 255, 255, 0.8)',
            marginBottom: '3rem',
            lineHeight: '1.6'
          }}>
            Open to exciting opportunities in audit and accounting.
            Let's connect!
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
            marginBottom: '2.5rem'
          }}>
            {[
              { icon: '📧', label: 'Email', link: 'mailto:madankushagra7@gmail.com' },
              { icon: '🔗', label: 'LinkedIn', link: 'https://linkedin.com/in/kushagramadan12' },
              { icon: '📁', label: 'Projects', link: 'https://drive.google.com/drive/folders/1UjckZIReDpowCOfaFs3xBd_U1D0VKYNp?usp=sharing' }
            ].map((contact, i) => (
              <a
                key={i}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: '#ffffff',
                  padding: '1rem 1.75rem',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  fontSize: '1rem',
                  fontWeight: '600',
                  border: '1px solid transparent'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(229, 9, 20, 0.2)';
                  e.currentTarget.style.borderColor = 'rgba(229, 9, 20, 0.5)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.borderColor = 'transparent';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span style={{ fontSize: '1.3rem' }}>{contact.icon}</span>
                {contact.label}
              </a>
            ))}
          </div>
          <div>
            <a
              href="https://drive.google.com/file/d/17Y4MgkIdzmFBK-ZfE5evaARoWcHvFkbC/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                background: '#E50914',
                color: '#ffffff',
                padding: '1.25rem 3rem',
                borderRadius: '6px',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                fontSize: '1.1rem',
                fontWeight: '700',
                boxShadow: '0 4px 12px rgba(229, 9, 20, 0.4)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#F40612';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#E50914';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <span style={{ fontSize: '1.5rem' }}>📄</span>
              Download Full Resume
            </a>
          </div>
        </div>
      </section>

      {/* Footer - Netflix Style */}
      <footer style={{
        padding: '2.5rem 4%',
        textAlign: 'center',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        background: '#000000',
        color: 'rgba(255, 255, 255, 0.5)'
      }}>
        <p style={{ fontSize: '0.9rem' }}>
          © 2026 Kushagra Madan. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

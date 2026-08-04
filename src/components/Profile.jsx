import React from 'react';

const Profile = ({ user, appliedJobs, onUpdateUser }) => {
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file && onUpdateUser) {
      // Simulate an AI resume parser extracting data from the PDF
      const parsedData = {
        resumeName: file.name,
        fullName: 'AASHUTOSH',
        email: 'aashu16nov@gmail.com',
        jobTitle: 'UI/UX Designer',
        department: 'Frontend',
        phone: '+91 8102561056',
        address: 'Vill. + P.O.- Kartahan Buzurg, Dist.- Vaishali, Bihar - 844119',
        linkedin: 'linkedin.com/in/aashutosh-singh-mca',
        github: 'github.com/Ashu16nov',
        careerObjective: 'MCA student with a strong foundation in Data Structures and Algorithms, specializing in Web Development.',
        skills: 'Programming Language: Python, JavaScript, C++, SQL.\nWeb Technologies: HTML, CSS, React, Node.js, Bootstrap, TailwindCSS.\nTools: VS Code, Git, GitHub.',
        softSkills: 'Leadership\nProblem Solving\nAdaptability\nTime Management',
        achievements: 'Winner: Ink & Pixel - Departmental Poster Making Competition, Chandigarh University (2025).\nCo-Curricular: Student Coordinator, GenesisX AI Fest, Chandigarh University (2026)',
        education: [
           { degree: 'Master of Computer Application (MCA)', institution: 'Chandigarh University, Mohali', year: '2025-2027', grade: 'Current CGPA: 7.63/10.0' },
           { degree: 'Bachelors of Computer Application (BCA)', institution: 'Cimage Professional College, Patna', year: '2021-2024', grade: 'CGPA: 8.0/10.0' },
           { degree: 'Intermediate (Class XII)', institution: 'R.N. College Hajipur', year: '2019-2021', grade: 'Percentage: 79%' }
        ],
        experience: [],
        projects: [
           { name: 'JobPortal Platform', techStack: 'React, Node, Bootstrap', date: '2026', description: 'A comprehensive job portal platform with dynamic resume builder.' }
        ]
      };
      
      // Auto-fill the profile with parsed data
      onUpdateUser({
        ...user,
        ...parsedData
      });
      
      // Reset input so it can be uploaded again if needed
      e.target.value = null;
    }
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file && onUpdateUser) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onUpdateUser({
          ...user,
          avatar: reader.result
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="card border-0 shadow-sm mb-4 profile-card rounded-4 overflow-hidden">
      <div className="profile-cover"></div>
      <div className="card-body p-4 text-center position-relative z-index-1">
        <div className="position-relative d-inline-block mb-3 bg-white p-1 rounded-circle">
          <img 
            src={user?.avatar || `https://ui-avatars.com/api/?name=${user?.fullName || 'Mr Ashu'}&background=0D8ABC&color=fff&size=120`} 
            alt="Profile" 
            className="rounded-circle shadow-sm border border-3 border-white"
            style={{ width: '120px', height: '120px', objectFit: 'cover' }}
          />
          <label htmlFor="photoUpload" className="position-absolute bottom-0 end-0 bg-primary text-white border border-2 border-white rounded-circle shadow-sm d-flex align-items-center justify-content-center" style={{cursor: 'pointer', width: '32px', height: '32px', transform: 'translate(-5px, -5px)'}} title="Upload Photo">
            <i className="bi bi-camera-fill" style={{ fontSize: '0.9rem' }}></i>
          </label>
          <input 
             type="file" 
             id="photoUpload" 
             className="d-none" 
             accept="image/*"
             onChange={handlePhotoUpload}
          />
        </div>
        
        <h4 className="fw-bold mb-1">{user?.fullName || 'Mr Ashu'}</h4>
        <p className="text-muted small mb-3">{user?.email || 'ashu@example.com'}</p>
        
        <div className="d-flex justify-content-center gap-2 mb-4">
          <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill">{user?.jobTitle || 'UI/UX Designer'}</span>
          <span className="badge bg-info bg-opacity-10 text-info px-3 py-2 rounded-pill">{user?.department || 'Frontend'}</span>
        </div>
        
        <hr className="text-secondary opacity-25" />
        
        <div className="row text-center mt-3">
          <div className="col-6 border-end">
            <h3 className="fw-bold text-primary mb-0">{appliedJobs.length}</h3>
            <span className="text-muted small text-uppercase fw-semibold">Applied</span>
          </div>
          <div className="col-6">
            <h3 className="fw-bold text-success mb-0">0</h3>
            <span className="text-muted small text-uppercase fw-semibold">Interviews</span>
          </div>
        </div>

        <hr className="text-secondary opacity-25 my-4" />
        
        <div className="text-start mb-4">
           <div className="d-flex justify-content-between align-items-center mb-2">
             <h6 className="fw-bold mb-0 small text-uppercase text-muted">Resume</h6>
             <div className="d-flex gap-3">
               {/* Hidden file input */}
               <input 
                 type="file" 
                 id="resumeUpload" 
                 className="d-none" 
                 accept=".pdf,.doc,.docx"
                 onChange={handleFileUpload}
               />
               <label htmlFor="resumeUpload" className="text-primary small fw-semibold m-0" style={{cursor: 'pointer'}}>
                 <i className="bi bi-upload me-1"></i>Upload
               </label>
               {user?.resumeName && (
                 <button 
                   type="button"
                   className="btn btn-link text-danger p-0 small fw-semibold text-decoration-none m-0" 
                   onClick={() => onUpdateUser({ ...user, resumeName: '' })}
                 >
                   <i className="bi bi-trash me-1"></i>Remove
                 </button>
               )}
             </div>
           </div>
           <div className="d-flex align-items-center justify-content-between p-3 border rounded-3 bg-light">
             <div className="d-flex align-items-center text-truncate pe-2">
               <i className={`bi bi-file-earmark-${user?.resumeName ? 'check-fill text-success' : 'pdf text-danger'} fs-4 me-3`}></i>
               <span className="small fw-semibold text-truncate">{user?.resumeName || 'No resume uploaded'}</span>
             </div>
           </div>
        </div>

        <div className="d-grid gap-2">
          <button className="btn btn-primary rounded-pill fw-semibold py-2" data-bs-toggle="modal" data-bs-target="#resumeModal">
            <i className="bi bi-file-earmark-person me-2"></i>View Full Resume
          </button>
          <button className="btn btn-outline-primary rounded-pill fw-semibold py-2" data-bs-toggle="modal" data-bs-target="#editProfileModal">
            <i className="bi bi-pencil-square me-2"></i>Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;

// Research & Experiments Data Structure
// Add real projects here as they are completed

export const researchProjects = [
  // Example structure - remove or replace with real projects
  // {
  //   id: 1,
  //   slug: "object-detection-prototype",
  //   title: "Object Detection Prototype",
  //   status: "Completed", // "Completed", "In Progress", "Experimental", "Prototype"
  //   domain: "AI / ML",
  //   summary: "A computer vision system for detecting and classifying objects in real-time video streams.",
  //   objective: "Build a working object detection system to identify common objects using a webcam feed.",
  //   approach: "Used pre-trained YOLO model, fine-tuned on custom dataset, implemented real-time inference pipeline.",
  //   technologies: ["Python", "OpenCV", "PyTorch", "YOLO"],
  //   implementation: "Implemented video capture, preprocessing pipeline, model inference, and visualization of detection results with bounding boxes.",
  //   results: "Achieved 85% accuracy on test dataset with 15 FPS processing speed on standard hardware.",
  //   futureWork: "Optimize for edge devices, expand object classes, improve accuracy in low-light conditions.",
  //   images: [], // ["image1.jpg", "image2.jpg"]
  //   videos: [], // ["demo_video.mp4"]
  //   demoUrl: null, // "https://demo-link.com"
  //   githubUrl: null, // "https://github.com/username/repo"
  //   contributors: [
  //     {
  //       name: "Student Name",
  //       branch: "Computer Engineering",
  //       year: "2nd Year",
  //       contribution: "AI Development, Model Training",
  //       github: "https://github.com/username",
  //       linkedin: "https://linkedin.com/in/username"
  //     }
  //   ]
  // }
];

export const researchDomains = {
  "AI / ML": "#3b82f6",
  "Robotics": "#8b5cf6",
  "Mechanical": "#10b981",
  "Electronics": "#f59e0b",
  "Full Stack": "#ec4899",
  "Interdisciplinary": "#06b6d4"
};

export const researchStatuses = {
  "Completed": "#10b981",
  "In Progress": "#3b82f6",
  "Experimental": "#f59e0b",
  "Prototype": "#8b5cf6"
};

// Helper function to get project by slug
export const getProjectBySlug = (slug) => {
  return researchProjects.find(project => project.slug === slug);
};

// Helper function to get projects by status
export const getProjectsByStatus = (status) => {
  return researchProjects.filter(project => project.status === status);
};

// Helper function to get projects by domain
export const getProjectsByDomain = (domain) => {
  return researchProjects.filter(project => project.domain === domain);
};

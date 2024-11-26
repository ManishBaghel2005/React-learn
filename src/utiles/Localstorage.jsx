
const employees = [
    {
      id: 2,
      name: "Alice Johnson",
      firstName: "Aarav",
      email: "aarav@e.com",
      role: "Employee",
      password: "123",
      taskNumber: {
        active: 2,
        newTask: 1,
        completed: 1,
      },
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          title: "Design Homepage",
          description: "Create a modern and responsive homepage design.",
          date: "2024-11-25",
          category: "Design",
        },
        {
          active: false,
          newTask: false,
          completed: true,
          title: "Fix Login Bug",
          description: "Resolve the issue causing login failures on mobile devices.",
          date: "2024-11-20",
          category: "Development",
        },
        {
          active: true,
          newTask: false,
          completed: false,
          title: "Prepare Presentation",
          description: "Prepare slides for the upcoming client meeting.",
          date: "2024-11-26",
          category: "Management",
        },
      ],
    },
    {
      id: 3,
      name: "Bob Smith",
      firstName: "Aditi",
      email: "aditi@e.com",
      role: "Employee",
      password: "123",
      taskNumber: {
        active: 1,
        newTask: 1,
        completed: 2,
      },
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          title: "Code Review",
          description: "Review the pull requests in the project repository.",
          date: "2024-11-24",
          category: "Development",
        },
        {
          active: false,
          newTask: false,
          completed: true,
          title: "Update Documentation",
          description: "Update the API documentation to reflect recent changes.",
          date: "2024-11-22",
          category: "Documentation",
        },
        {
          active: true,
          newTask: false,
          completed: false,
          title: "Team Meeting",
          description: "Schedule and organize the weekly team meeting.",
          date: "2024-11-27",
          category: "Management",
        },
      ],
    },
    {
      id: 4,
      name: "Charlie Brown",
      firstName: "Rohan",
      email: "rohan@e.com",
      role: "Employee",
      password: "123",
      taskNumber: {
        active: 2,
        newTask: 1,
        completed: 1,
      },
      tasks: [
        {
          active: true,
          newTask: false,
          completed: false,
          title: "Analyze Sales Data",
          description: "Prepare a report on the sales data for Q4.",
          date: "2024-11-30",
          category: "Analytics",
        },
        {
          active: true,
          newTask: true,
          completed: false,
          title: "Social Media Campaign",
          description: "Plan and execute a campaign for the new product launch.",
          date: "2024-11-29",
          category: "Marketing",
        },
        {
          active: false,
          newTask: false,
          completed: true,
          title: "Inventory Audit",
          description: "Complete the end-of-month inventory audit.",
          date: "2024-11-15",
          category: "Operations",
        },
      ],
    },
    {
      id: 5,
      name: "Diana Evans",
      firstName: "Priya",
      email: "priya@e.com",
      role: "Employee",
      password: "123",
      taskNumber: {
        active: 2,
        newTask: 1,
        completed: 1,
      },
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          title: "Customer Feedback Analysis",
          description: "Analyze recent customer feedback and prepare recommendations.",
          date: "2024-11-28",
          category: "Customer Service",
        },
        {
          active: true,
          newTask: false,
          completed: false,
          title: "Launch Preparation",
          description: "Coordinate tasks for the upcoming product launch.",
          date: "2024-11-29",
          category: "Project Management",
        },
        {
          active: false,
          newTask: false,
          completed: true,
          title: "Security Audit",
          description: "Conduct a comprehensive security audit of the system.",
          date: "2024-11-20",
          category: "Security",
        },
      ],
    },
    {
      id: 6,
      name: "Ethan Green",
      firstName: "Kunal",
      email: "kunal@e.com",
      role: "Employee",
      password: "123",
      taskNumber: {
        active: 2,
        newTask: 1,
        completed: 0,
      },
      tasks: [
        {
          active: true,
          newTask: false,
          completed: false,
          title: "Database Optimization",
          description: "Optimize database queries for better performance.",
          date: "2024-11-24",
          category: "Development",
        },
        {
          active: false,
          newTask: true,
          completed: false,
          title: "System Upgrade",
          description: "Upgrade the internal systems to the latest version.",
          date: "2024-12-01",
          category: "IT",
        },
        {
          active: true,
          newTask: false,
          completed: false,
          title: "Training Session",
          description: "Organize a training session on new company policies.",
          date: "2024-11-30",
          category: "HR",
        },
      ],
    },
  ];
  
  const admin = [
    {
      id: 1,
      name: "Admin User",
      firstName: "Ananya",
      email: "admin@e.com",
      role: "Admin",
      password: "123",
    },
  ];
  
  
  export const  setLocalStorage = ()=>{
  localStorage.setItem('employees',JSON.stringify(employees))
  localStorage.setItem('admin',JSON.stringify(admin))
  
  }
  
  export const  getLocalStorage = ()=>{
const employees =JSON.parse(localStorage.getItem('employees'))
const admin =JSON.parse(localStorage.getItem('admin'))

// console.log(employees,admin);
return{employees,admin}
  }
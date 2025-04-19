

const employees = [
  {
    id: 1,
    firstName: "Ahmed",
    email: "employee1@example.com",
    password: "1109",
    taskNumbers: {
      active: 2,
      completed: 1,
      newTask: 1,
      failed: 0
    },
    tasks: [
      {
        taskTitle: "Prepare Weekly Report",
        taskDescription: "Compile weekly performance metrics.",
        taskDate: "2025-04-16",
        category: "Reporting",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Attend Team Meeting",
        taskDescription: "Participate in the quarterly planning meeting.",
        taskDate: "2025-04-17",
        category: "Meeting",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Update Client Records",
        taskDescription: "Ensure all client data is up-to-date in CRM.",
        taskDate: "2025-04-18",
        category: "CRM",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 2,
    firstName: "Zain",
    email: "employee2@example.com",
    password: "1109",
    taskNumbers: {
      active: 2,
      completed: 1,
      newTask: 2,
      failed: 1
    },
    tasks: [
      {
        taskTitle: "Test New Features",
        taskDescription: "Perform testing on the latest feature updates.",
        taskDate: "2025-04-15",
        category: "QA",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Fix Bug #123",
        taskDescription: "Resolve reported login issue.",
        taskDate: "2025-04-14",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Write Unit Tests",
        taskDescription: "Cover new module with unit tests.",
        taskDate: "2025-04-19",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Code Review",
        taskDescription: "Review teammate’s code changes.",
        taskDate: "2025-04-20",
        category: "Development",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 3,
    firstName: "Fatima",
    email: "employee3@example.com",
    password: "1109",
    taskNumbers: {
      active: 2,
      completed: 1,
      newTask: 1,
      failed: 0
    },
    tasks: [
      {
        taskTitle: "Design New Logo",
        taskDescription: "Create mockups for the new product logo.",
        taskDate: "2025-04-21",
        category: "Design",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Update Branding Guide",
        taskDescription: "Ensure branding guidelines reflect latest changes.",
        taskDate: "2025-04-22",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Client Feedback Review",
        taskDescription: "Go over client feedback from last design sprint.",
        taskDate: "2025-04-23",
        category: "Client",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 4,
    firstName: "Ayesha",
    email: "employee4@example.com",
    password: "1109",
    taskNumbers: {
      active: 3,
      completed: 2,
      newTask: 2,
      failed: 0
    },
    tasks: [
      {
        taskTitle: "Draft Newsletter",
        taskDescription: "Create draft for monthly company newsletter.",
        taskDate: "2025-04-24",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Social Media Campaign",
        taskDescription: "Schedule posts for the upcoming campaign.",
        taskDate: "2025-04-25",
        category: "Social Media",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Audience Survey",
        taskDescription: "Prepare survey to collect user insights.",
        taskDate: "2025-04-26",
        category: "Research",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Competitor Analysis",
        taskDescription: "Research competitor activities this quarter.",
        taskDate: "2025-04-27",
        category: "Analysis",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Email Campaign Metrics",
        taskDescription: "Evaluate performance of recent email campaign.",
        taskDate: "2025-04-28",
        category: "Email",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 5,
    firstName: "Bilal",
    email: "employee5@example.com",
    password: "1109",
    taskNumbers: {
      active: 2,
      completed: 1,
      newTask: 1,
      failed: 0
    },
    tasks: [
      {
        taskTitle: "Onboard New Hires",
        taskDescription: "Welcome and orient new employees.",
        taskDate: "2025-04-15",
        category: "HR",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Update Policies",
        taskDescription: "Revise and distribute updated HR policies.",
        taskDate: "2025-04-16",
        category: "HR",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Organize Training",
        taskDescription: "Plan employee training sessions for Q2.",
        taskDate: "2025-04-17",
        category: "Training",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  }
];

  
  const admin = [
    {
      id: 1,
      firstName:"Admin",
      email: "admin@example.com",
      password: "1109"
    }
  ]


export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage=()=>{
    const employees=JSON.parse(localStorage.getItem('employees'))
    const admin=JSON.parse(localStorage.getItem('admin'))
    return {employees,admin}
}
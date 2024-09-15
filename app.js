const employeesData = [
    {
      fullName: { firstName: "Ahmed", lastName: "Khalid" },
      department: "Human Resources (HR)",
      baseSalary: 2000,
      entryDate: "01/01/2022",
      exitDate: "01/03/2023",
      age: 30,
      hoursWorked: 8,
      experience: ["Recruitment", "Employee Training", "HR Policy"],
    },
    {
      fullName: { firstName: "Mohamed", lastName: "Ali" },
      department: "Human Resources (HR)",
      baseSalary: 2500,
      entryDate: "01/01/2022",
      exitDate: "01/03/2023",
      age: 28,
      hoursWorked: 8,
      experience: ["Compensation & Benefits", "Performance Appraisals", "Onboarding"],
    },
    {
      fullName: { firstName: "Sara", lastName: "Noor" },
      department: "Human Resources (HR)",
      baseSalary: 1800,
      entryDate: "01/01/2021",
      exitDate: "01/03/2023",
      age: 32,
      hoursWorked: 7,
      experience: ["Employee Relations", "HR Compliance", "Benefits Administration"],
    },
    {
      fullName: { firstName: "John", lastName: "Doe" },
      department: "Management",
      baseSalary: 3000,
      entryDate: "01/02/2022",
      exitDate: "01/04/2023",
      age: 35,
      hoursWorked: 8,
      experience: ["Strategic Planning", "Team Leadership", "Budget Management"],
    },
    {
      fullName: { firstName: "Alice", lastName: "Johnson" },
      department: "Contractors",
      baseSalary: 2200,
      entryDate: "01/03/2021",
      exitDate: "01/05/2023",
      age: 28,
      hoursWorked: 6,
      experience: ["Construction", "Project Management", "Supplier Relations"],
    },
    {
      fullName: { firstName: "Bob", lastName: "Smith" },
      department: "Management",
      baseSalary: 3200,
      entryDate: "01/04/2022",
      exitDate: "01/06/2023",
      age: 40,
      hoursWorked: 7,
      experience: ["Business Strategy", "Operations Management", "Staff Development"],
    },
    {
      fullName: { firstName: "Emily", lastName: "Davis" },
      department: "Contractors",
      baseSalary: 2400,
      entryDate: "01/05/2021",
      exitDate: "01/07/2023",
      age: 30,
      hoursWorked: 8,
      experience: ["Construction Projects", "Site Supervision", "Quality Control"],
    },
    {
      fullName: { firstName: "Daniel", lastName: "Wilson" },
      department: "Management",
      baseSalary: 3100,
      entryDate: "01/06/2022",
      exitDate: "01/08/2023",
      age: 38,
      hoursWorked: 8,
      experience: ["Strategic Planning", "Leadership Development", "Project Management"],
    },
    {
      fullName: { firstName: "Linda", lastName: "Brown" },
      department: "Contractors",
      baseSalary: 2300,
      entryDate: "01/07/2021",
      exitDate: "01/09/2023",
      age: 29,
      hoursWorked: 7,
      experience: ["Construction", "Subcontractor Management", "Safety Regulations"],
    },
    {
      fullName: { firstName: "Chris", lastName: "Anderson" },
      department: "Management",
      baseSalary: 3300,
      entryDate: "01/08/2022",
      exitDate: "01/10/2023",
      age: 42,
      hoursWorked: 8,
      experience: ["Business Strategy", "Financial Analysis", "Team Leadership"],
    },
    {
      fullName: { firstName: "Megan", lastName: "Evans" },
      department: "Contractors",
      baseSalary: 2500,
      entryDate: "01/09/2021",
      exitDate: "01/11/2023",
      age: 31,
      hoursWorked: 8,
      experience: ["Construction Projects", "Project Scheduling", "Quality Assurance"],
    },
    {
      fullName: { firstName: "William", lastName: "Clark" },
      department: "Management",
      baseSalary: 3400,
      entryDate: "01/10/2022",
      exitDate: "01/12/2023",
      age: 45,
      hoursWorked: 8,
      experience: ["Business Development", "Team Building", "Budget Management"],
    },
    {
      fullName: { firstName: "Olivia", lastName: "Moore" },
      department: "Contractors",
      baseSalary: 2600,
      entryDate: "01/11/2021",
      exitDate: "01/01/2024",
      age: 32,
      hoursWorked: 8,
      experience: ["Construction Planning", "Supplier Relations", "Cost Control"],
    },
    {
      fullName: { firstName: "Matthew", lastName: "Lee" },
      department: "Management",
      baseSalary: 3500,
      entryDate: "01/12/2022",
      exitDate: "01/02/2024",
      age: 47,
      hoursWorked: 8,
      experience: ["Strategic Planning", "Financial Analysis", "Team Leadership"],
    },
  ];



  const hrEmployees = [];
for (let i = 0; i < employeesData.length; i++) {
    if (employeesData[i].department === "Human Resources (HR)") {
        hrEmployees.push(employeesData[i]);
    }
}
console.log(hrEmployees);
console.log("____________Q1____________")

const totalSalariesByDepartment = {};

employeesData.forEach(employee => {
    const department = employee.department;
    if (!totalSalariesByDepartment[department]) {
        totalSalariesByDepartment[department] = 0;
    }
    totalSalariesByDepartment[department] += employee.baseSalary;
});

console.log(totalSalariesByDepartment);
console.log("____________Q2____________")

  

const calculateAverageSalary = (employees) => {
    let totalSalary = 0;
    for (let i = 0; i < employees.length; i++) {
        totalSalary += employees[i].baseSalary;
    }
    return totalSalary / employees.length;
};

const averageSalary = calculateAverageSalary(employeesData);
console.log(`The average salary of all employees is: $${averageSalary.toFixed(2)}`);


console.log("____________Q3____________")

const calculateAverageAge = (data) => {
    const totalAge = data.reduce((sum, employee) => sum + employee.age, 0);
    return totalAge / data.length;
};

const averageAge = calculateAverageAge(employeesData);
console.log(`Average Age: ${averageAge}`);


console.log("____________Q4____________")


const calculateBonus = (employee, extraHours) => {
    const hourlyRate = employee.baseSalary / employee.hoursWorked;
    return extraHours * hourlyRate;
};

const updateEmployeeSalary = (employee, bonus) => {
    employee.baseSalary += bonus;
};

const ahmed = employeesData[0];
const extraHours = 3;
const bonus = calculateBonus(ahmed, extraHours);
updateEmployeeSalary(ahmed, bonus);

console.log(`Bonus for Ahmed: $${bonus.toFixed(2)}`);
console.log(`New Salary for Ahmed: $${ahmed.baseSalary.toFixed(2)}`);
console.log("Updated Employee Data:", ahmed);

console.log("____________Q5____________")

 

function countContinuousEmployees(year) {
    const startDate = new Date(`${year}-01-01`);
    const endDate = new Date(`${year}-12-31`);

    return employeesData.reduce((count, employee) => {
        const entryDate = new Date(employee.entryDate);
        const exitDate = new Date(employee.exitDate);
        return (entryDate <= endDate && exitDate >= startDate) ? count + 1 : count;
    }, 0);
}

const continuousEmployeesCount = countContinuousEmployees(2023);
console.log(`Number of Continuous Employees in 2023: ${continuousEmployeesCount}`);


console.log("____________Q6____________")





console.log("____________Q7____________")


let constructionProjectEmployees = [];

employeesData.forEach(employee => {
    if (employee.experience.includes("Construction Projects")) {
        constructionProjectEmployees.push(`${employee.fullName.firstName} ${employee.fullName.lastName}`);
    }
});

console.log("Employees with 'Construction Projects' Experience:", constructionProjectEmployees.join(", "));


console.log("____________Q8____________")


const totalHours = employeesData.reduce((accumulator, employee) => {
    return accumulator + employee.hoursWorked;
}, 0);

console.log(`Total Hours Worked by All Employees: ${totalHours} hours`);



console.log("____________Q9____________")


const uniqueExperiences = employeesData.reduce((acc, employee) => {
    employee.experience.forEach(exp => {
        if (!acc.includes(exp)) {
            acc.push(exp);
        }
    });
    return acc;
}, []);
console.log(uniqueExperiences);


console.log("____________Q10____________")
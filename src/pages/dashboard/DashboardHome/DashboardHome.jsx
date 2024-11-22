import './DashboardHome.css';
import DashboardChart from "../../../components/DashboardChart/DashboardChart";
import React, { useState } from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";

const categoriesList = [
  "Work Space",
  "Education",
  "Residential",
  "Entertainment",
  "Commercial",
  "Hospitality",
];

const projects = [
  { title: "Residential", date: "27/10/2024" },
  { title: "Entertainment", date: "27/10/2024" },
  { title: "Education", date: "27/10/2024" },
  { title: "Commercial", date: "27/10/2024" },
  { title: "Education", date: "27/10/2019" },
  { title: "Hospitality", date: "27/10/2019" },
  { title: "Hospitality", date: "27/10/2019" },
  { title: "Commercial", date: "27/10/2019" },
  { title: "Hospitality", date: "27/10/2019" },
  { title: "Hospitality", date: "27/10/2019" },
  { title: "Hospitality", date: "27/10/2019" },
  { title: "Work Space", date: "27/10/2019" },
  { title: "Work Space", date: "27/10/2019" },
];
const data = [
  { name: "Projects", value: 167.5, color: "#8979FF" },
  { name: "Visitors", value: 335, color: "#FF928A" },
  { name: "Customers", value: 167.5, color: "#3CC3DF" },
];
  
  const secCategories = [
    { name: "Work Space", count: 26 },
    { name: "Education", count: 17 },
    { name: "Residential", count: 19 },
    { name: "Entertainment", count: 34 },
    { name: "Commercial", count: 9 },
    { name: "Hospitality", count: 11 },
  ];

  const categories = [
    { name: "Work Space", count: 26 },
    { name: "Education", count: 17 },
    { name: "Residential", count: 19 },
    { name: "Entertainment", count: 34 },
    { name: "Commercial", count: 9 },
    { name: "Hospitality", count: 11 },
  ];
  

const DashboardHome = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const totalValue = data.reduce((sum, item) => sum + item.value, 0);

  const handleSelect = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  const clearAll = () => {
    setSelectedCategories([]);
  };

  const filteredProjects =
    selectedCategories.length > 0
      ? projects.filter((project) => selectedCategories.includes(project.title))
      : projects;

    //   const data = [
    //     { name: "Projects", value: 120, color: "#FF7F50" },
    //     { name: "Visitors", value: 90, color: "#00C49F" },
    //     { name: "Customers", value: 109, color: "#8884D8" },
    //   ];
      

  return (
    <section className="dashboardHome">
      <div className="section-1">
        <div className="boxes">
          <div className="box">
            <i className="fa-solid fa-chart-line"></i>
            <span className="info">
              <h3>Projects</h3>
              <p>+65 project</p>
            </span>
            <p className="percentage">+12.4%</p>
          </div>
          <div className="box">
            <i className="fa-regular fa-user"></i>
            <span className="info">
              <h3>New customers</h3>
              <p>+10,593 customer</p>
            </span>
            <p className="percentage red">-8.24%</p>
          </div>
          <div className="box">
            <i className="fa-regular fa-eye"></i>
            <span className="info">
              <h3>New visitors</h3>
              <p>+8,428 visitor</p>
            </span>
            <p className="percentage null">--</p>
          </div>
        </div>
        <div className="charts">
          <DashboardChart />
        </div>
        <div className="projectsEdit">
          <div className="projectsEdit-top">
            <h2 className="projectsEdit-title">Last Projects</h2>
            <div className="filter-container">
              <div className="select-box">
                <div className="select-btn" onClick={() => setIsOpen(!isOpen)}>
                  {selectedCategories.length > 0
                    ? `Selected (${selectedCategories.length})`
                    : "Category"}
                  <span className="arrow">
                    {isOpen ? (
                      <i className="fa-solid fa-chevron-up"></i>
                    ) : (
                      <i className="fa-solid fa-chevron-down"></i>
                    )}
                  </span>
                </div>
                {isOpen && (
                  <div className="categories-options">
                    {categoriesList.map((category) => (
                      <div
                        key={category}
                        className={`option ${
                          selectedCategories.includes(category)
                            ? "selected"
                            : ""
                        }`}
                        onClick={() => handleSelect(category)}
                      >
                        <span className="category-name">{category}</span>
                        <span
                          className={`custom-checkbox ${
                            selectedCategories.includes(category)
                              ? "checked"
                              : ""
                          }`}
                        >
                          {selectedCategories.includes(category) && (
                            <i className="fa-solid fa-check"></i>
                          )}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={clearAll}
                className={`clear-all-button ${
                  selectedCategories.length > 0 ? "active" : ""
                }`}
                disabled={selectedCategories.length === 0}
              >
                Clear All
              </button>
            </div>
          </div>

          <table className="projects-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Category</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProjects.map((project, index) => (
                <tr key={index}>
                  <td>#{index + 1}</td>
                  <td>{project.title} project</td>
                  <td>{project.title}</td>
                  <td>{project.date}</td>
                  <td className="action-icons">
                    <span className="delete">
                      <i className="uil uil-trash"></i>
                    </span>
                    <span className="edit">
                      <i className="uil uil-pen"></i>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="section-2">
      <div className="chart-container">
      <PieChart width={300} height={300}>
      <Pie
        data={data}
        dataKey="value"
        innerRadius={80} 
        outerRadius={110}
        paddingAngle={0} 
        cornerRadius={0} 
        startAngle={90} 
        endAngle={-270}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>

      <text
        x={150}
        y={150}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="18"
        fontWeight="bold"
      >
        319
      </text>

      <Legend
        verticalAlign="bottom"
        align="center"
        iconType="circle"
      />
    </PieChart>
      </div>


      <div className="secCategories-container">
        <h3 className="secCategories-title">Projects Categories</h3>
        <ul className="secCategories-list">
          {categories.map((secCategory, index) => (
            <li key={index} className="secCategory-item">
              <span>{index + 1}. {secCategory.name}</span>
              <span>{secCategory.count}</span>
            </li>
          ))}
        </ul>
      </div>
      </div>
    </section>
  );
};

export default DashboardHome;

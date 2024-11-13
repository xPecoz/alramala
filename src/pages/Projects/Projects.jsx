import React, { useState } from "react";
import "./Projects.css";
import {
  UilAngleDown,
  UilSearch,
  UilPlus,
  UilAngleLeftB,
  UilAngleRightB,
} from "@iconscout/react-unicons";
import projectImg from "../../imgs/project.png";
import { Link } from "react-router-dom";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [dateRange, setDateRange] = useState({ fromDate: "", toDate: "" });
  const [selectedCategories, setSelectedCategories] = useState([]);

  return (
    <section className="projects">
      <div className="container">
        <Sidebar
          onDateChange={setDateRange}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          setDateRange = {setDateRange}
        />
        <div className="boxs">
          <Search
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            setSearchQuery={setSearchQuery}
            searchQuery={searchQuery}
          />
          <Content
            selectedCategory={selectedCategory}
            searchQuery={searchQuery}
            dateRange={dateRange}
            selectedCategories={selectedCategories}
          />
        </div>
      </div>
    </section>
  );
};

function Sidebar({ onDateChange, selectedCategories, setSelectedCategories, setDateRange }) {
  const [openSidebar, setOpenSidebar] = useState(true);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const handleDateChange = (dateType, value) => {
    if (dateType === "from") {
      setFromDate(value);
    } else {
      setToDate(value);
    }
    onDateChange({
      fromDate: dateType === "from" ? value : fromDate,
      toDate: dateType === "to" ? value : toDate,
    });
  };
  const handleToggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };
  const handleCheckboxChange = (label) => {
    const updatedCategories = selectedCategories.includes(label)
      ? selectedCategories.filter((category) => category !== label)
      : [...selectedCategories, label];
    setSelectedCategories(updatedCategories);
  };
  const handleToggleCategory = () => {
    document.querySelector(".cheackBoxs").classList.toggle("show");
    document.querySelector(".category .icon").classList.toggle("rotate");
  };

  const handleToggleTime = () => {
    document.querySelector(".timeBoxs").classList.toggle("show");
    document.querySelector(".time .icon").classList.toggle("rotate");
  };

  // Clear all checkboxes
  const handleClearAll = () => {
    const checkboxes = document.querySelectorAll(
      ".cheackBoxs input[type='checkbox']"
    );
    checkboxes.forEach((checkbox) => (checkbox.checked = false));
    setSelectedCategories([]);
    setDateRange({ fromDate: "", toDate: "" })
    setFromDate("")
    setToDate("")
  };

  return (
    <>
      <div className="sidebar-btn" onClick={handleToggleSidebar}>
        <UilPlus />
      </div>
      <div className={`sidebar ${openSidebar ? "" : "close"}`}>
        <div className="title">
          <div className="logo">
            {/* SVG logo here */}
            <h3>Filters</h3>
          </div>
          <p onClick={handleClearAll}>Clear All</p>
        </div>
        <hr />
        <div className="category">
          <div className="title" onClick={handleToggleCategory}>
            <h3>Category</h3>
            <div className="icon">
              <UilAngleDown size={35} color={"black"} />
            </div>
          </div>
          <div className="cheackBoxs">
            {[
              "Work Space",
              "Education",
              "Residential",
              "Entertainment",
              "Commercial",
              "Hospitality",
            ].map((label, index) => (
              <div className="cheackBox" key={index}>
                <label htmlFor={`check${index + 1}`}>{label}</label>
                <input
                  id={`check${index + 1}`}
                  type="checkbox"
                  checked={selectedCategories.includes(label)}
                  onChange={() => handleCheckboxChange(label)}
                />
              </div>
            ))}
          </div>
        </div>
        <hr />
        <div className="time">
          <div className="title" onClick={handleToggleTime}>
            <h3>Time</h3>
            <div className="icon">
              <UilAngleDown size={35} color={"black"} />
            </div>
          </div>
          <div className="forms timeBoxs">
            <div>
              <p>From</p>
              <input
                type="date"
                value={fromDate}
                onChange={(e) => handleDateChange("from", e.target.value)}
              />
            </div>
            <div>
              <p>To</p>
              <input
                type="date"
                value={toDate}
                onChange={(e) => handleDateChange("to", e.target.value)}
              />
            </div>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
}
function Content({
  selectedCategory,
  searchQuery,
  dateRange,
  selectedCategories,
}) {
  // Sample project data
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
    { title: "Hospitality", date: "27/10/2019" },
    { title: "Hospitality", date: "27/10/2019" },
    { title: "Hospitality", date: "27/10/2019" },
    { title: "Hospitality", date: "27/10/2019" },
    { title: "Hospitality", date: "27/10/2019" },
    { title: "Hospitality", date: "27/10/2019" },
    { title: "Hospitality", date: "27/10/2019" },
    { title: "Hospitality", date: "27/10/2019" },
    { title: "Hospitality", date: "27/10/2019" },
    { title: "Hospitality", date: "27/10/2019" },
    { title: "Hospitality", date: "27/10/2019" },
    { title: "Hospitality", date: "27/10/2019" },
    { title: "Hospitality", date: "27/10/2019" },
    { title: "Hospitality", date: "27/10/2019" },
    { title: "Hospitality", date: "27/10/2019" },
    { title: "Hospitality", date: "27/10/2019" },
    { title: "Hospitality", date: "27/10/2019" },
    { title: "Hospitality", date: "27/10/2019" },
    { title: "Hospitality", date: "27/10/2019" },
    { title: "Hospitality", date: "27/10/2019" },
    { title: "Hospitality", date: "27/10/2019" },
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  // Filtered projects based on the selected categories, search query, and date range
  const filteredProjects = projects.filter((project) => {
    const isCategoryMatch =
      selectedCategories.length === 0 ||
      selectedCategory === project.title ||
      selectedCategories.includes(project.title);

    const isCategoryMatch2 =
      selectedCategory === "All" ||
      selectedCategory === project.title ||
      selectedCategories.some((category) => category === project.title);

    const isSearchMatch = project.title.toLowerCase().includes(searchQuery.toLowerCase());

    const projectDate = new Date(project.date.split("/").reverse().join("-"));
    const from = dateRange.fromDate ? new Date(dateRange.fromDate) : null;
    const to = dateRange.toDate ? new Date(dateRange.toDate) : null;

    const isDateMatch =
      (!from || projectDate >= from) &&
      (!to || projectDate <= to);

    return isCategoryMatch && isSearchMatch && isDateMatch && isCategoryMatch2;
  });

  // Calculate the index range for the current page
  const indexOfLastProject = currentPage * itemsPerPage;
  const indexOfFirstProject = indexOfLastProject - itemsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  // Number of pages
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="contentBoxs">
      <div className="projects">
        {currentProjects.length > 0 ? (
          currentProjects.map((project, index) => (
            <div className="box" key={index}>
              <img src={projectImg} alt="" />
              <div>
                <p className="title">{project.title}</p>
                <p className="date">{project.date}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No projects found</p>
        )}
      </div>
      <div className="links">
        {/* Previous Page Button */}
        {currentPage > 1 && (
          <Link to="#" onClick={() => handlePageChange(currentPage - 1)} className="active">
            <UilAngleLeftB size={37} color="white" />
          </Link>
        )}
        
        {/* Pagination Links */}
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
          <Link
            key={pageNumber}
            to="#"
            onClick={() => handlePageChange(pageNumber)}
            className={currentPage === pageNumber ? "active" : ""}
          >
            {pageNumber}
          </Link>
        ))}
        
        {/* Next Page Button */}
        {currentPage < totalPages && (
          <Link to="#" onClick={() => handlePageChange(currentPage + 1)} className="active">
            <UilAngleRightB size={37} color="white" />
          </Link>
        )}
      </div>
    </div>
  );
}
function Search({
  selectedCategory,
  setSelectedCategory,
  setSearchQuery,
  searchQuery,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    "All",
    "Work Space",
    "Education",
    "Residential",
    "Entertainment",
    "Commercial",
    "Hospitality",
  ];

  const handleSelect = (category) => {
    setSelectedCategory(category);
    setIsOpen(false);
  };

  return (
    <div className="search">
      <input
        className="search"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} // Update the search query
      />
      <div>
        <div className="select-box">
          <div className="select-header" onClick={() => setIsOpen(!isOpen)}>
            {selectedCategory}
            <span className="arrow">{isOpen ? "▲" : "▼"}</span>
          </div>
          {isOpen && (
            <div className="options">
              {categories.map((category) => (
                <div
                  key={category}
                  className="option"
                  onClick={() => handleSelect(category)}
                >
                  <label className="checkbox-container">
                    {category}
                    <input
                      type="checkbox"
                      checked={category === selectedCategory}
                      readOnly
                    />
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>

        <button className="searchBtn">
          <UilSearch size={25} color="white" />
        </button>
      </div>
    </div>
  );
}

export default Projects;

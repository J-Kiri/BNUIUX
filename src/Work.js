import './Work.css'

import { Link } from 'react-router-dom';
import { useState } from 'react';

import PROJECTBikcraft from "./assets/PROJECT_Bikcraft.png"
import PROJECTNami from "./assets/PROJECT_Nami.png"

function FilterMenu({categories, selectedCategories, onCategoryClick}) {
    return(
        <div className="w_background">
            <ul className="filter_categories">
                {categories.map((category, index) => (
                    <li
                        key={index}
                        className={`filter ${selectedCategories === category ? 'active' : ''}`}
                        onclick={() => onCategoryClick(category)}
                    >
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    );
}

function ProjectGallery({projects, selectedCategory}) {
    const filteredProjects =
        selectedCategory === 'All' ? projects :
            projects.filter(project => project.category.includes(selectedCategory));

    return(
        <div className="project_gallery">
            {filteredProjects.map((image, index) => (
                <img key={index} src={image.url} alt={image.alt}/>
            ))}
        </div>
    ); 
}


export default function Work() {
    const projects = [
        {url: PROJECTBikcraft, alt: "Bikcraft", categories: ["UX Design", "UI Design", "Web"]},
        {url: PROJECTNami, alt: "Nami", categories: ["UX Design", "UI Design", "Mobile App"]},
    ];

    const allCategories = ["All", "UX Design", "UI Design", "Web", "Mobile App"];

    const [selectedCategory, setSelectedCategory] = useState("All");

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    }

    return(
        <body id="work">
            <h1 className="about_title">WORK<span className="p">.</span></h1>

            <h3 className="work_text">
                All projects shown below are the result of a lot of research,
                testing, creativity and ambition and were realized in
                December/2022 to the present day.
            </h3>

            <div className="w_background">
                <FilterMenu
                    categories={allCategories}
                    selectedCategories={selectedCategory}
                    onCategoryClick={handleCategoryClick}
                />

                <ProjectGallery projects={projects} selectedCategory={selectedCategory} />
            </div>
        </body>
    )
}
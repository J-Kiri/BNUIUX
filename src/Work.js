import './Work.css'

import { Link } from 'react-router-dom';
import { useState } from 'react';

import PROJECTBikcraft from "./assets/PROJECT_Bikcraft.png"
import PROJECTNami from "./assets/PROJECT_Nami.png"

function FilterMenu({categories, selectedCategories, onCategoryClick}) {
    return(
        <ul className="filter_categories">
            {categories.map((category, index) => (
                <li
                    key={index}
                    className={`filter ${selectedCategories === category ? 'active' : ''}`}
                    onClick={() => {
                        //console.log('Clicado em:', category);
                        onCategoryClick(category)}
                    }
                >
                    {category}
                </li>
            ))}
        </ul>
    );
}

function ProjectGallery({projects, selectedCategory}) {
    const filteredProjects =
        selectedCategory === 'All' ? projects :
            projects.filter(project => project.categories.includes(selectedCategory));

    return(
        <div className="gallery_wrapper">
            {filteredProjects.map((image, index) => (
                <link to="">
                <img key={index} src={image.url} alt={image.alt}/>
                </link>
            ))}
        </div>
    ); 
}


export default function Work() {
    const projects = [
        {url: PROJECTBikcraft, alt: "Bikcraft", page: "", categories: ["UX Design", "UI Design", "Web"]},
        {url: PROJECTNami, alt: "Nami", categories: ["UX Design", "UI Design", "Mobile App"]},
        {url: PROJECTNami, alt: "Nami 2", categories: ["UX Design", "UI Design", "Mobile App"]},
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

                <div className="separator"/>

                <ProjectGallery projects={projects} selectedCategory={selectedCategory} />
            </div>
        </body>
    )
}
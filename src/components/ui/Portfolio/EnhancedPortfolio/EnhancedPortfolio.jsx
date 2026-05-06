"use client";
import { useState, useEffect } from 'react';
import { MdSearch, MdFilterList, MdViewModule, MdViewList, MdOpenInNew, MdCode, MdVisibility } from 'react-icons/md';
import Image from 'next/image';
import Link from 'next/link';
import { projectsdata } from '@/projectdata';

const ProjectCard = ({ project, viewMode, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`group relative overflow-hidden rounded-lg transition-all duration-500 transform hover:scale-105 ${
        viewMode === 'grid' ? 'col-span-1' : 'col-span-1 md:col-span-2'
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="card h-full">
        {/* Project Image */}
        <div className="relative overflow-hidden rounded-lg mb-6">
          <Image
            src={project.image}
            alt={project.title}
            width={400}
            height={250}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 left-4 right-4 flex space-x-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 px-3 py-2 bg-[#00eeff] text-slate-900 rounded-lg text-sm font-semibold hover:bg-[#00eeff]/80 transition-colors"
                >
                  <MdVisibility className="text-lg" />
                  <span>Live Demo</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 px-3 py-2 bg-slate-800 text-white rounded-lg text-sm font-semibold hover:bg-slate-700 transition-colors"
                >
                  <MdCode className="text-lg" />
                  <span>Code</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Project Content */}
        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <h3 className="text-xl font-semibold text-white group-hover:text-[#00eeff] transition-colors">
              {project.title}
            </h3>
            <span className="px-3 py-1 bg-[#00eeff]/10 text-[#00eeff] text-sm rounded-full">
              {project.category}
            </span>
          </div>

          <p className="text-gray-300 text-sm leading-relaxed">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Project Stats */}
          <div className="flex items-center justify-between text-sm text-gray-400">
            <span>{projectsdata.duration}</span>
            <span>{project.status}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const EnhancedPortfolio = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState('grid');
  const [filteredProjects, setFilteredProjects] = useState([]);



  const categories = ['All', 'Web Application', 'Website', 'Desktop App'];

  useEffect(() => {
    let filtered = projectsdata;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(project => project.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredProjects(filtered);
  }, [searchTerm, selectedCategory]);

  return (
    <div className="space-y-8">
      {/* Search and Filter Controls */}
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
        {/* Search Bar */}
        <div className="relative flex-1 max-w-md">
          <MdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input-field pl-10 pr-4"
          />
        </div>

        {/* Category Filter */}
        <div className="flex items-center space-x-2">
          <MdFilterList className="text-gray-400 text-xl" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="input-field w-48"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center space-x-2 bg-slate-800 rounded-lg p-1">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-md transition-colors ${
              viewMode === 'grid' ? 'bg-[#00eeff] text-slate-900' : 'text-gray-400 hover:text-white'
            }`}
          >
            <MdViewModule className="text-xl" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-md transition-colors ${
              viewMode === 'list' ? 'bg-[#00eeff] text-slate-900' : 'text-gray-400 hover:text-white'
            }`}
          >
            <MdViewList className="text-xl" />
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className={`grid gap-6 ${
        viewMode === 'grid' 
          ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
          : 'grid-cols-1'
      }`}>
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            viewMode={viewMode}
            index={index}
          />
        ))}
      </div>

      {/* No Results */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-semibold text-white mb-2">No Projects Found</h3>
          <p className="text-gray-400">Try adjusting your search or filter criteria</p>
        </div>
      )}

      {/* Project Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
        <div className="text-center p-6 bg-slate-800 rounded-lg">
          <div className="text-3xl font-bold text-[#00eeff] mb-2">{projectsdata.length}</div>
          <div className="text-gray-300">Total Projects</div>
        </div>
        <div className="text-center p-6 bg-slate-800 rounded-lg">
          <div className="text-3xl font-bold text-[#00eeff] mb-2">
            {projectsdata.filter(p => p.status === 'Completed').length}
          </div>
          <div className="text-gray-300">Completed</div>
        </div>
        <div className="text-center p-6 bg-slate-800 rounded-lg">
          <div className="text-3xl font-bold text-[#00eeff] mb-2">
            {projectsdata.filter(p => p.category === 'Web Application').length}
          </div>
          <div className="text-gray-300">Web Apps</div>
        </div>
        <div className="text-center p-6 bg-slate-800 rounded-lg">
          <div className="text-3xl font-bold text-[#00eeff] mb-2">
            {projectsdata.reduce((acc, p) => acc + p.technologies.length, 0)}
          </div>
          <div className="text-gray-300">Technologies Used</div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedPortfolio;

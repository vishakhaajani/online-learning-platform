import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CourseCatalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');

  const courses = [
    { id: 1, title: 'React Basics', description: 'Learn the basics of React.', category: 'Programming', difficulty: 'Beginner' },
    { id: 2, title: 'JavaScript Advanced', description: 'Master advanced JavaScript concepts.', category: 'Programming', difficulty: 'Advanced' },
    { id: 3, title: 'CSS Mastery', description: 'Deep dive into modern CSS techniques.', category: 'Design', difficulty: 'Intermediate' },
    { id: 4, title: 'UI/UX Design Fundamentals', description: 'Learn the principles of UI/UX design.', category: 'Design', difficulty: 'Beginner' },
    { id: 5, title: 'Data Science with Python', description: 'Introduction to data science using Python.', category: 'Data Science', difficulty: 'Intermediate' }
  ];

  const filteredCourses = courses.filter(course => {
    return (
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory ? course.category === selectedCategory : true) &&
      (selectedDifficulty ? course.difficulty === selectedDifficulty : true)
    );
  });

  return (
    <div className="container mx-auto px-24">
      <h2 className="text-3xl font-bold mb-6 mt-6 text-center">Course Catalog</h2>
      
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search courses..."
        className="border border-gray-300 rounded-md p-2 mb-4 w-full"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Filters */}
      <div className="flex space-x-4 mb-4">
        <select
          className="border border-gray-300 rounded-md p-2"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Programming">Programming</option>
          <option value="Design">Design</option>
          <option value="Data Science">Data Science</option>
        </select>

        <select
          className="border border-gray-300 rounded-md p-2"
          value={selectedDifficulty}
          onChange={(e) => setSelectedDifficulty(e.target.value)}
        >
          <option value="">All Difficulty Levels</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>

      {/* Course List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4" key={course.id}>
            <h3 className="text-xl font-semibold">{course.title}</h3>
            <p className="text-gray-600">{course.description}</p>
            <p className="font-semibold">Category: {course.category}</p>
            <p className="font-semibold">Difficulty: {course.difficulty}</p>
            <Link to={`/detail/${course.id}`} className='inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition mt-4'>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCatalog;

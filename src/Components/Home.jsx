// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredCourses = [
    { id: 1, title: 'React Basics', description: 'Learn the basics of React.', category: 'Programming', difficulty: 'Beginner' },
    { id: 2, title: 'JavaScript Advanced', description: 'Master advanced JavaScript concepts.', category: 'Programming', difficulty: 'Advanced' },
    { id: 3, title: 'CSS Mastery', description: 'Deep dive into modern CSS techniques.', category: 'Design', difficulty: 'Intermediate' },
    { id: 4, title: 'UI/UX Design Fundamentals', description: 'Learn the principles of UI/UX design.', category: 'Design', difficulty: 'Beginner' },
    { id: 5, title: 'Data Science with Python', description: 'Introduction to data science using Python.', category: 'Data Science', difficulty: 'Intermediate' }
  ];

  return (
    <div className="container mx-auto px-24">
      <h2 className='text-3xl font-bold text-center mb-8 mt-6'>Featured Courses</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {featuredCourses.map((course) => (
          <div className='bg-white border border-gray-200 rounded-lg shadow-lg p-4 hover:shadow-xl transition' key={course.id}>
            <h3 className='text-xl font-semibold'>{course.title}</h3>
            <p className='text-gray-600'>{course.description}</p>
          </div>
        ))}
      </div>
      <div className='text-center mt-8'>
        <Link to="/catalog" className='inline-block bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition'>
          View All Courses
        </Link>
      </div>
    </div>
  );
};

export default Home;

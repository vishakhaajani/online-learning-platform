import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const CourseDetail = () => {

  const predifineCourses = [
    { id: 1, title: 'React Basics', description: 'Learn the basics of React.', category: 'Programming', difficulty: 'Beginner' },
    { id: 2, title: 'JavaScript Advanced', description: 'Master advanced JavaScript concepts.', category: 'Programming', difficulty: 'Advanced' },
    { id: 3, title: 'CSS Mastery', description: 'Deep dive into modern CSS techniques.', category: 'Design', difficulty: 'Intermediate' },
    { id: 4, title: 'UI/UX Design Fundamentals', description: 'Learn the principles of UI/UX design.', category: 'Design', difficulty: 'Beginner' },
    { id: 5, title: 'Data Science with Python', description: 'Introduction to data science using Python.', category: 'Data Science', difficulty: 'Intermediate' }
  ];

  const {courseId} = useParams();

  const course = predifineCourses.find(course => course.id === parseInt(courseId));

  if(!course){
    return <p>Course not found...</p>
  }

  return (
    <div className="container mx-auto px-24">
      <h2 className="text-3xl font-bold mb-4 mt-6 text-center">Course Detail</h2>
      {
        course ? (
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4">
            <h3 className="text-3xl font-bold mb-4 mt-6">{course.title}</h3>
      <p className="text-gray-700 mb-4">{course.description}</p>
      <p className="font-semibold mb-4">Instructor: {course.instructor}</p>
      <Link to={`/dashboard/${course.id}`} className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">Enroll Now</Link>
          </div>
        ) : (
          <p>No courses Detail.</p>
        )
      }
    </div>
  )
}

export default CourseDetail

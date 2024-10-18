import React from 'react';
import { Link, useParams } from 'react-router-dom';

const UserDashboard = () => {
  const predifineCourses = [
    { id: 1, title: 'React Basics', instructor: 'John Doe' },
    { id: 2, title: 'JavaScript Advanced', instructor: 'Jane Smith' },
    { id: 3, title: 'CSS Mastery', instructor: 'Chris Johnson' },
    { id: 4, title: 'UI/UX Design Fundamentals',instructor: 'Josef lion'  },
    { id: 5, title: 'Data Science with Python',instructor: 'Mark deo' }
  ];

  const { courseId } = useParams();

  // Correctly find the enrolled course
  const enrolledCourse = predifineCourses.find(course => course.id === parseInt(courseId));

  return (
    <div className="container mx-auto px-24">
      <h2 className="text-3xl font-bold mb-4 mt-6 text-center">User Dashboard</h2>
      {
        enrolledCourse ? (
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Enrolled Course:</h3>
            <p className="font-semibold">{enrolledCourse.title}</p>
            <p>Instructor: {enrolledCourse.instructor}</p>
            <Link to={`/lesson/${enrolledCourse.id}`} className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition mt-5">Lesson</Link>
          </div>
        ) : (
          <p>No courses enrolled.</p>
        )
      }
    </div>
  );
}

export default UserDashboard;

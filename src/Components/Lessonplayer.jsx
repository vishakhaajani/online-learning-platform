import React from 'react';
import { useParams, Link } from 'react-router-dom';

const lessonsData = [
  { id: 1, title: 'Introduction to React', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  { id: 2, title: 'Component Lifecycle', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  { id: 3, title: 'State Management', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  { id: 4, title: 'UI/UX Design Fundamentals', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  { id: 5, title: 'Data Science with Python', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
];

const LessonPlayer = () => {
  const { lessonId } = useParams();
  const currentLesson = lessonsData.find(lesson => lesson.id === parseInt(lessonId));

  const nextLessonId = currentLesson.id < lessonsData.length ? currentLesson.id + 1 : null;
  const previousLessonId = currentLesson.id > 1 ? currentLesson.id - 1 : null;

  return (
    <div className="container mx-auto px-24">
      <h2 className="text-3xl font-bold mb-5 mt-6 text-center">{currentLesson.title}</h2>
      <video className="w-full h-64 mb-4" controls>
        <source src={currentLesson.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="flex justify-between mt-4">
        {previousLessonId && (
          <Link to={`/lesson/${previousLessonId}`} className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
            Previous Lesson
          </Link>
        )}
        {nextLessonId && (
          <Link to={`/lesson/${nextLessonId}`} className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
            Next Lesson
          </Link>
        )}
      </div>
    </div>
  );
};

export default LessonPlayer;

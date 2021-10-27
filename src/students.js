// this file will contain an array of students objects with
// the properties that describes them.

export const students = [
  {
    name: 'Chief Clement',
    avatar: '/img/avatar.jpg',
    skills: 'React, CSS, JavaScript',
    gender: 'male',
    interests: 'Women, sports, money',
    card_theme: '#4285f4',
    student_id: 1,
    socialLinks: [],
  },
  {
    name: 'Caleb Olojo',
    skills: 'React, CSS, JavaScript',
    gender: 'male',
    interests: 'Coding, Writing, Design',
    card_theme: '#ffffff',
    biography:
      'Frontend Developer. Aerospace Engineering Undergrade. Technical Writer. Werospace Product Design',
    student_id: 2,
    socialLinks: ['https://linkedin.com/in/calebolojo'],
  },

  // studenst can now begin to add their own details.
  // We'll be mapping the items in this array into `pages/index.js`
]

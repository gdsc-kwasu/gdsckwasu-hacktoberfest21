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
  {
  name: 'Fathi Babayeju',
  skills: 'CSS, JavaScript, Node',
  gender: 'male',
  interests: 'Coding, Reading',
  card_theme: '#ff0000',
  biography:
    'Backend Developer. Computer Science Undergraduate.',
  student_id: 3,
  socialLinks: ['https://www.twitter.com/_Babayeju','https://www.linkedin.com/in/babayeju-fathi-adesina-b01b26213/'],
},

  // studenst can now begin to add their own details.
  // We'll be mapping the items in this array into `pages/index.js`
]

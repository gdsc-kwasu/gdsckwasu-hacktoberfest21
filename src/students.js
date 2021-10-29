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
{
  name: 'Shahid Nadaf',
  skills: 'JavaScript,Node js,React,SQL,MongoDB',
  gender: 'male',
  interests: 'Swimming,Cricket',
  card_theme: '#66ff99',
  biography:
    'CSE undergraduate,Open-Source enthusiast',
  student_id: 4,
  socialLinks: ['https://github.com/shahidcode'],
}

  // studenst can now begin to add their own details.
  // We'll be mapping the items in this array into `pages/index.js`
]

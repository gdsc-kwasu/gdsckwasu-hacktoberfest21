// this file will contain an array of students objects with
// the properties that describes them.

export const students = [
  {
    id: 1,
    name: 'Chief Clement',
    // avatar: '/img/avatar.jpg',
    skills: 'React, CSS, JavaScript',
    gender: 'male',
    interests: 'Women, sports, money',
    theme: '#3571d1',
    biography:
      'Clement Nnamdi is a confident, self driven, and passonate individual with a genuine interest in learning and providing solutions to problems',
    socialLinks: [],
  },
  {
    id: 2,
    name: 'Caleb Olojo',
    skills: 'React, CSS, JavaScript',
    gender: 'male',
    interests: 'Coding, Writing, Design',
    theme: '#ffffff',
    biography:
      'Frontend Developer. Aerospace Engineering Undergrade. Technical Writer. Werospace Product Design',
    socialLinks: ['https://linkedin.com/in/calebolojo'],
  },
  {
    id: 3,
    name: 'Fathi Babayeju',
    skills: 'CSS, JavaScript, Node',
    gender: 'male',
    interests: 'Coding, Reading',
    theme: '#ff0000',
    biography: 'Backend Developer. Computer Science Undergraduate.',
    socialLinks: [
      'https://www.twitter.com/_Babayeju',
      'https://www.linkedin.com/in/babayeju-fathi-adesina-b01b26213/',
    ],
  },
  {
    id: 4,
    name: 'Shahid Nadaf',
    skills: 'JavaScript,Node js,React,SQL,MongoDB',
    gender: 'male',
    interests: 'Swimming,Cricket',
    theme: '#66ff99',
    biography: 'CSE undergraduate,Open-Source enthusiast',
    socialLinks: ['https://github.com/shahidcode'],
  },

  // studenst can now begin to add their own details.
  // We'll be mapping the items in this array into `pages/index.js`
]

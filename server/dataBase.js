const db = {
    knowledgeCheckBlocks:  [
      {
        question: {
          text: 'What is this a picture of?',
          media: {
            type: 'image',
            url: 'https://images.articulate.com/f:jpg%7Cpng,a:retain,b:fff/rise/courses/S3jQ2LjHDoRsPUQmR7dp6hA7-IaoYPA4/d229V-nstxA6tZdi.gif'
          }
        },
        answers: [
          {
            text: 'Cookies and coffee',
            isCorrect: true
          },
          {
            text: 'Donuts and cider',
            isCorrect: false
          }
        ],
        feedback: 'I just love cookies and a warm cup of coffee!'
      }
    ]
  }

  module.exports = db

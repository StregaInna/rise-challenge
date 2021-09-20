const db = {
    knowledgeCheckBlocks:  [
      {
        question: {
          text: 'What is this a picture of?',
          media: {
            type: 'image',
            altText: 'cookies and coffee', //I added alt text as a field because I think this is important for accessability
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
    ],
    formState: []
//This is initiallized as an empty array. 
//It will be populated in the redux store and returned to the server as an array of objects representing the state of each block.
//This array of objects can then be sent back to the front end if a user refreshes or navigates away and back, thus maintaining user-state on the server end.
//In the sample case we technically only need a single object, but in a real use case there could be any number of questions in the knowledge check blocks,
//  so we want to be able to iterate through them on the front end when loading user state from the server. 
//in a fuller impimentation with a database we'd want to weigh the pros and cons of having this be an indexed array vs an object of key-value pairs
}

  module.exports = db

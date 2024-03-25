  export const buttonGroups = [
    {
      title: 'Getting Data',
      buttons: [
        { id: 'getRoadmaps', label: 'Get Roadmaps' },
        { id: 'getMilestones', label: 'Get Milestones' },
        { id: 'getQuestions', label: 'Get Questions' },
        { id: 'getQuizes', label: 'Get Quizes' },
        { id: 'getUsers', label: 'Get Users' }
      ]
    },
    {
      title: 'Adding Data',
      buttons: [
        { id: 'addRoadmap', label: 'Add Roadmap' },
        { id: 'addMilestone', label: 'Add Milestones' },
        { id: 'addQuestion', label: 'Add Questions' },
        { id: 'addAdmin', label: 'Add Admin' }
      ]
    },
    {
      title: 'Updating Data',
      buttons: [
        { id: 'updateRoadmap', label: 'Update Roadmap' },
        { id: 'updateMilestone', label: 'Update Milestone' },
        { id: 'updateQuestion', label: 'Update Question' },
        { id: 'updateQuiz', label: 'Update Quiz' },
        { id: 'updateUser', label: 'Update User' }
      ]
    }
  ];

  export const addingTypes = ['addRoadmap', 'addMilestone', 'addQuestion', 'addAdmin'];
  export const updatingTypes = ['updateRoadmap', 'updateMilestone', 'updateQuestion', 'updateQuiz','updateUser'];
  export const gettingTypes = [
    { name: 'getRoadmaps', updateComponent: 'updateRoadmap' },
    { name: 'getMilestones', updateComponent: 'updateMilestone' },
    { name: 'getQuestions', updateComponent: 'updateQuestion' },
    { name: 'getQuizes', updateComponent: 'updateQuiz' },
    { name: 'getUsers', updateComponent: 'updateUser' }
  ];

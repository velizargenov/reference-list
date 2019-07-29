const algorithms = [
  { //
    group: 'Algorithms',
    topic: '',
    description: "",
    cs: {
      algorithm: 'https://codesandbox.io/s/stupefied-merkle-18y20'
    },
    sections: [
      {
        description: [
          ''
        ]
      }
    ]
  },

  { // BREADTH-FIRST SEARCH (BFS)
    group: 'Algorithms',
    topic: 'Breadth-First Search (BFS)',
    description: "",
    cs: {
      algorithm: 'https://codesandbox.io/s/queues-9jbk3'
    },
    sections: [
      {
        description: [
          'The BFS algorithm starts traversing the graph from the first specified vertex and visits all its neighbors first, one layer of the graph at a time',
          'This means that it visits the vertices first widely and then deeply'
        ],
        methods: [
          ''
        ]
      }
    ]
  },

  { // BUBBLE SORT
    group: 'Algorithms',
    topic: 'Bubble Sort',
    description: "",
    cs: {
      algorithm: 'https://codesandbox.io/s/stupefied-merkle-18y20'
    },
    sections: [
      {
        description: [
          'The bubble sort is the simplest of all algorithms',
          'It is also the worst-case sorting algorithms with respect to runtime',
          'It works by comparing every 2 adjacent items and swapping them if the first > second'
        ]
      }
    ]
  },

  { // SELECTION SORT
    group: 'Algorithms',
    topic: 'Selection Sort',
    description: "",
    cs: {
      algorithm: 'https://codesandbox.io/s/stupefied-merkle-18y20'
    },
    sections: [
      {
        description: [
          'In-place comparison sort algorithm',
          '> Find the minimum value in the data structure',
          '> Place it in the first position',
          '> Then find the second minimum value, place it in second position',
          '> and so on'
        ]
      }
    ]
  },

  { // INSERTION SORT
    group: 'Algorithms',
    topic: 'Insertion Sort',
    description: "",
    cs: {
      algorithm: 'https://codesandbox.io/s/stupefied-merkle-18y20'
    },
    sections: [
      {
        description: [
          'It builds the final sorted array one item at a time',
          '> it assumes that the first element is already sorted',
          '> then a comparison with the second item is performed',
          '> the algorithm decides wheather the second item stay in its place or be inserted before',
          '> in this way the first two items will get sorted',
          '> then the comparison with the third item will take place',
          '> and so on',
          'The insertion sort has a better performance that the Bubble and Selection algorithms when sorting small arrays'
        ]
      }
    ]
  },

  { // MERGE SORT
    group: 'Algorithms',
    topic: 'Merge Sort',
    description: "",
    cs: {
      algorithm: 'https://codesandbox.io/s/stupefied-merkle-18y20'
    },
    sections: [
      {
        description: [
          'First sorting algorithm that can be used in the real world',
          'It provides a good performance with complexity O(n log n)',
          'Divide-and-conquer algorithm',
          'This algorithm is recursive',
          '> divide the original array into smaller arrays until each small array has only one position',
          '> then merge these smaller arrays into bigger ones',
          '> until we have a single big array at the end that is sorted'
        ]
      }
    ]
  },

  { // QUICK SORT
    group: 'Algorithms',
    topic: 'Quick Sort',
    description: "",
    cs: {
      algorithm: 'https://codesandbox.io/s/stupefied-merkle-18y20'
    },
    sections: [
      {
        description: [
          'The most used sorting algorithm',
          'It has a complexity of O(n log n)',
          'It uses the divide-and-conquer approach',
          'It divides the original array into smaller ones, but without splitting them as the merge sort does'
        ],
        steps: [
          '1. We need to select an item from the array called pivot, which is the middle item in the array',
          '2. We create left (first item of array) and right pointers (last item of array)',
          '3. The algorithm repeats the previous two steps for smaller arrays until the arrays are completely sorted'
        ]
      }
    ]
  },

];

export default algorithms;
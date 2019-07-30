import improvedBubbleSort from '../images/improvedBubbleSort.png';
import selectionSort from '../images/selectionSort.png';
import insertionSort from '../images/insertionSort.png';
import mergeSort from '../images/mergeSort.png';
import quickSort from '../images/quickSort.png';
import sequentialSearch from '../images/sequentialSearch.png';
import binarySearch from '../images/binarySearch.png';

const algorithms = [
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
    ],
    diagram: improvedBubbleSort
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
    ],
    diagram: selectionSort
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
    ],
    diagram: insertionSort
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
    ],
    diagram: mergeSort
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
    ],
    diagram: quickSort
  },

  { // HEAP SORT
    group: 'Algorithms',
    topic: 'Heap Sort',
    description: "",
    cs: {
      algorithm: 'https://codesandbox.io/s/stupefied-merkle-18y20'
    },
    sections: [
      {
        description: [
          'It sorts the array as if it were a binary tree',
          'To do that, we need to manage the array as a binary tree considering the following information:',
          '> Index 0 is the root of the tree',
          '> The parent of any node N is N/2 (with the exception of the root node)',
          '> The left-hand side child of a node L is 2*L',
          '> The right-hand child of a node R is 2*R+1'
        ]
      }
    ],
    diagram: ''
  },

  { // SEQUENTIAL SEARCH
    group: 'Algorithms',
    topic: 'Sequential Search',
    description: "",
    cs: {
      algorithm: 'https://codesandbox.io/s/stupefied-merkle-18y20'
    },
    sections: [
      {
        description: [
          'It is also called linear search and it is the most basic search algorithm',
          'It consists of comparing each element of the data structure with the one we are looking for',
          'It is the most inefficient search algorithm'
        ]
      }
    ],
    diagram: sequentialSearch
  },

  { // BINARY SEARCH
    group: 'Algorithms',
    topic: 'Binary Search',
    description: "",
    cs: {
      algorithm: 'https://codesandbox.io/s/stupefied-merkle-18y20'
    },
    sections: [
      {
        description: [
          'It works on a similar principle as the "Number guessing game"',
          'In order to the algorithm to work, the data structure needs to be sorted first'
        ],
        execution: [
          '> A value is selected in the middle of the array',
          '> If the value is the one we are looking for, we\'re done',
          '> If the value we\'re looking for is less than the selected one, then we will go to the left (lower) and will execute step 1',
          '> If the value we\'re looking for is less than the selected one, then we will go to the right and (higher) will execute step 1',
        ]
      }
    ],
    diagram: binarySearch
  },

  { // MIN-COIN PROBLEM - GREEDY ALGORITHM
    group: 'Algorithms',
    topic: 'Min-coin (Greedy) Problem',
    description: "",
    cs: {
      minCoinProblem: 'https://codesandbox.io/s/amazing-platform-s16zu'
    },
    sections: [
      {
        greedyAlgorithms: [
          'A greedy algorithm follows the problem-solving heuristic of making the locally optimal choice (the best solution at the time) at each stage with the hope of finding a global optimum (global best solution)',
          'It does not evaluate the bigger picture like a dynamic programming algorithm does'
        ],
        description: [
          'The problem consists of finding how many different ways we can make change in a particular amount of cents using a given amount of set denominations d1...dn',
          'The problem can be solved as an implementation of a greedy algorithm or as an implementation of a dynamic programming'
        ]
      }
    ]
  },

];

export default algorithms;
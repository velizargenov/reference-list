const data = [
  {
    group: 'algorithms',
    topic: 'Algorithm 1',
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse aliquid laboriosam minima ex praesentium recusandae reprehenderit unde sit tempore atque aut commodi quae expedita corrupti, dignissimos architecto. Eius, maiores ad?"
  },
  {
    group: 'algorithms',
    topic: 'Algorithm 2',
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse aliquid laboriosam minima ex praesentium recusandae reprehenderit unde sit tempore atque aut commodi quae expedita corrupti, dignissimos architecto. Eius, maiores ad?"
  },
  {
    group: 'algorithms',
    topic: 'Algorithm 3',
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse aliquid laboriosam minima ex praesentium recusandae reprehenderit unde sit tempore atque aut commodi quae expedita corrupti, dignissimos architecto. Eius, maiores ad?"
  },
  {
    group: 'React',
    topic: 'React 1',
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse aliquid laboriosam minima ex praesentium recusandae reprehenderit unde sit tempore atque aut commodi quae expedita corrupti, dignissimos architecto. Eius, maiores ad?"
  },
  {
    group: 'React',
    topic: 'React 2',
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse aliquid laboriosam minima ex praesentium recusandae reprehenderit unde sit tempore atque aut commodi quae expedita corrupti, dignissimos architecto. Eius, maiores ad?"
  },

  { // STACK
    group: 'Data Structures',
    topic: 'Stack',
    description: "",
    codesandbox: 'https://codesandbox.io/s/blissful-https-rb86j',
    sections: [
      {
        description: [
          'Ordered collection of data elements',
          'End of the stack is known as the top',
          'Following the LIFO principle',
          'Newest elements are near the top',
          'Real life example: pile of books'
        ],
        methods: [
          'push',
          'pop',
          'peek',
          'isEmpty',
          'clear'
        ]
      }
    ]
  },

  { // QUEUE
    group: 'Data Structures',
    topic: 'Queues',
    description: "",
    codesandbox: 'https://codesandbox.io/s/queues-9jbk3',
    sections: [
      {
        description: [
          'Ordered collection of data elements',
          'A new element is a tail',
          'Following the FIFO principle',
          'Real life example: getting a cinema ticket'
        ],
        methods: [
          'enqueue',
          'dequeue',
          'front',
          'isEmpty',
          'size',
        ]
      }
    ]
  },

  { // LINKED LIST
    group: 'Data Structures',
    topic: 'Linked List',
    description: "",
    codesandbox: 'https://codesandbox.io/s/linked-list-v6tb1',
    sections: [
      {
        description: [
          'Linked Lists store sequential collection of elements',
          'Elements are not neighbouring in memory',
          'Each element consists of: a node to store the element; pointer to the next element',
          'Real life example: train'
        ],
        types: [
          'Normal Linked List',
          'Doubly Linked List',
          'Circular Linked List'
        ],
        pros: [
          'No need to shift elements over when adding or removing other elemwents as opposed to array',
          'The size of linked list is not fixed as opposed to an array',
          'Adding and Removing elements is fast as opposed to an array'
        ],
        cons: [
          'Accessing a middle element in a linked list is expensive',
        ],
        methods: [
          'append',
          'insert',
          'removeAt',
          'remove',
          'indexOf',
          'isEmpty',
          'size',
          'toString',
          'print',
        ]
      }
    ]
  },
  { // SETS
    group: 'Data Structures',
    topic: 'Sets',
    description: "",
    codesandbox: 'https://codesandbox.io/s/cocky-montalcini-0ldxc',
    sections: [
      {
        description: [
          '',
        ],
        types: [
          'Normal Linked List',
          'Doubly Linked List',
          'Circular Linked List'
        ],
        pros: [
          'No need to shift elements over when adding or removing other elemwents as opposed to array',
          'The size of linked list is not fixed as opposed to an array',
          'Adding and Removing elements is fast as opposed to an array'
        ],
        cons: [
          'Accessing a middle element in a linked list is expensive',
        ],
        methods: [
          'add(value)',
          'delete(value)',
          'has(value)',
          'clear()',
          'size()',
          'values()',
        ],
        operations: [
          'union',
          'intersection',
          'difference',
          'subset'
        ]
      }
    ]
  },
];

export default data;

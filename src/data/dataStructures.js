const dataStructures = [
  { // STACK
    group: 'Data Structures',
    topic: 'Stack',
    description: "",
    cs: {
      stack: 'https://codesandbox.io/s/blissful-https-rb86j'
    },
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
    cs: {
      queue: 'https://codesandbox.io/s/queues-9jbk3'
    },
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
    cs: {
      linkedList: 'https://codesandbox.io/s/linked-list-v6tb1'
    },
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
    cs: {
      sets: 'https://codesandbox.io/s/cocky-montalcini-0ldxc'
    },
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

  { // DICTIONARIES
    group: 'Data Structures',
    topic: 'Dictionaries',
    description: "",
    cs: {
      dictionary: 'https://codesandbox.io/s/dank-feather-6i1dg'
    },
    sections: [
      {
        description: [
          'It is used to store [key, value] as opposed to the set which stores [key, key]',
          'Also known as a map'
        ],
        methods: [
          'set(key, value)',
          'delete(key)',
          'has(key)',
          'get(key)',
          'set(clear)',
          'size()',
          'keys()',
          'values()',
        ]
      }
    ]
  },

  { // HASHES
    group: 'Data Structures',
    topic: 'Hashes',
    description: "",
    cs: {
      hash: 'https://codesandbox.io/s/interesting-clarke-cpt5z'
    },
    sections: [
      {
        description: [
          'A hash implementation of the Dictionary class',
          'Hashing consists of finding a value in a data structure in the shortest time possible',
          'Retrieving a value when a hash function is used is cheap as we already know its position',
          'A hash function is a function that, given a key, will return an address in the table where the value is',
          'A has table is the same thing as a hash map',
          'The separate chaining technique consists of creating a linked list for each position of the table and storing the elements in it',
          'The separate chaining is the easiest way to handle collision',
          'Another technique to handle collision is linear probing',
          'The ES6 WeakMap and WeakSet classes'
        ],
        methods: [
          'hashFunction()',
          'put(key, value)',
          'remove(key)',
          'get(key)'
        ]
      }
    ]
  },

  { // TREES
    group: 'Data Structures',
    topic: 'Trees',
    description: '',
    cs: {
      tree: 'https://codesandbox.io/s/trees-g590g'
    },
    sections: [
      {
        description: [
          'Abstract model of hierarchical structure',
          'It lets you store nodes with lesser values on the left hand side and higher values on the right',
          'Real life example: family tree or company organizational chart',
          'Trees are largely used in Computer Science',
          'Consists of nodes with parent-child relationship',
          'Each node has a parent (except the first one) and 0 or more children'
        ],
        components: [
          'root - the top node',
          'internal node - it has at least one child',
          'a node in a binary tree has two children at the most',
          'external node (leaf) - it has no children',
          'ancestors - parent, grand-parent, grand-grand-parent',
          'descendants - child, grand-child',
          'subtree - consists of a node and its descendants',
          'pointers - used to represent the connection between the nodes',
          'depth of a tree - consists of the number of ancestors',
          'height of a tree - consists of the maximin dept of any node',
          'tree level - level 0 is the root; children on level 1 etc.'
        ],
        methods: [
          'insert(key)',
          'search(key)',
          'inOrderTraverse()',
          'preOrderTraverse()',
          'postOrderTraverse()',
          'min()',
          'max()',
          'remove()'
        ]
      }
    ]
  },

  { // GRAPHS
    group: 'Data Structures',
    topic: 'Graphs',
    description: '',
    cs: {
      graphs: 'https://codesandbox.io/s/graphs-huz0k',
      bfs: 'https://codesandbox.io/s/fervent-hellman-kfefh'
    },
    sections: [
      {
        description: [
          'Abstract model of network structure',
          'A graph is a set of nodes (or vertices) connected by edges',
          'Any binary relationship can be represented by a graph (social networks, roads, flights, communication etc)'
        ],
        terminology: [
          'adjacent vertices - vertices connected by an edge ',
          'degree of a vertex - consists of the number of adjacent vertices',
          'path - sequence of consecutive vertices',
          'simple path - it does not contain repeated vertices',
          'acyclic graph - it does not have cycles',
          'connected graph - there is a path between every pair of vertices',
          'strongly connected graph - there is a path in both directions between every pair of vertices',
          'undirected graph - edges do not have a direction',
          'directed graph (digraph) - edges have a direction',
          'unweighted graph - edges do not have weights',
          'weighted graph - the edges have weights'
        ],
        usage: [
          'searching a graph for a specific vertex',
          'searching fo a specific edge',
          'finding a path in the graph',
          'finding the shortest path between two vertices',
          'cycle detection'
        ],
        theAdjacencyMatrix: [
          'the adjacency matrix - each node is associated with an integer, which is the array index',
          'con: memory wasted for not strongly connected (sparse) graphs',
          'con: slow to retrieve a value',
          'cin: two-dimensional arrays are not flexible'
        ],
        theAdjacencyList: [
          'It consists of a list of adjacent vertices for every vertex of the graph',
          'We can use a list (array), a linked list, or even a hash map or dictionary for implementation'
        ],
        theIncidentMatrix: [
          'each row of the matrix represents a vertex',
          'each column represents an edge',
          'a two-dimensional array is used for implementation',
          'this is usually used in order to save space and memory when we have more edges than vertices'
        ],
        graphTraversals: [
          'Breadth-first Search (BFS) algorithm',
          'Depth-first Search (DFS) algorithm'
        ]
      }
    ]
  }
];

export default dataStructures;

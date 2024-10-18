export const MOCK_CHALLENGES = {
  challenges: [
    {
      id: 1,
      technology: ["Python"],
      category: "Python",
      difficulty: "Easy",
      duration: "60 mins",
      task: "Sum even numbers",
      details:
        "Write a Python function that takes a list of integers and returns the sum of all even numbers.",
      detailedProblem: {
        description:
          "Given a list of integers, write a function that returns the sum of all even numbers in the list.",
        examples: [
          {
            input: "[1, 2, 3, 4, 5]",
            output: "6",
            explanation:
              "The even numbers in the list are 2 and 4. Their sum is 2 + 4 = 6.",
          },
          {
            input: "[7, 11, 13, 17]",
            output: "0",
            explanation:
              "There are no even numbers in the list, so the sum is 0.",
          },
          {
            input: "[2, 4, 6, 8]",
            output: "20",
            explanation:
              "All numbers in the list are even, so the sum is 2 + 4 + 6 + 8 = 20.",
          },
        ],
        constraints: [
          "The list can contain negative integers.",
          "The list can contain at most 10^4 integers.",
        ],
        solutionApproach: [
          "Loop through the list of integers.",
          "Use a conditional check to see if a number is even (i.e., divisible by 2).",
          "Sum up all the even numbers and return the result.",
        ],
      },
    },

    {
      id: 2,
      technology: ["Python"],
      category: "Python",
      difficulty: "Easy",
      duration: "45 mins",
      task: "Reverse a string",
      details:
        "Write a Python function that takes a string and returns its reverse.",
      detailedProblem: {
        description:
          "Given a string, write a function that returns the string in reverse order.",
        examples: [
          {
            input: '"hello"',
            output: '"olleh"',
            explanation: "The characters are reversed from left to right.",
          },
          {
            input: '"Python"',
            output: '"nohtyP"',
            explanation: "The characters are reversed from left to right.",
          },
        ],
        constraints: [
          "The input string can contain any ASCII character.",
          "The maximum length of the string is 10^5 characters.",
        ],
        solutionApproach: [
          "Use string slicing with a step of -1 to reverse the string.",
          "Alternatively, convert the string to a list, reverse it, and join it back into a string.",
        ],
      },
    },
    {
      id: 3,
      technology: ["Python"],
      category: "Python",
      difficulty: "Easy",
      duration: "30 mins",
      task: "Count vowels",
      details:
        "Write a Python function that counts the number of vowels in a given string.",
      detailedProblem: {
        description:
          "Given a string, write a function that returns the count of vowels (a, e, i, o, u) in the string. The function should be case-insensitive.",
        examples: [
          {
            input: '"Hello World"',
            output: "3",
            explanation: "The vowels are 'e', 'o', and 'o'.",
          },
          {
            input: '"Python Programming"',
            output: "4",
            explanation: "The vowels are 'o', 'o', 'a', and 'i'.",
          },
        ],
        constraints: [
          "The input string contains only ASCII characters.",
          "The function should be case-insensitive (treat 'A' the same as 'a').",
          "The maximum length of the string is 10^4 characters.",
        ],
        solutionApproach: [
          "Convert the string to lowercase.",
          "Define a set of vowels.",
          "Iterate through the string and count characters that are in the vowel set.",
        ],
      },
    },
    {
      id: 4,
      technology: ["Python"],
      category: "Python",
      difficulty: "Easy",
      duration: "40 mins",
      task: "Find the largest number",
      details:
        "Write a Python function that finds the largest number in a list of integers.",
      detailedProblem: {
        description:
          "Given a list of integers, write a function that returns the largest number in the list.",
        examples: [
          {
            input: "[1, 4, 9, 2, 5, 6]",
            output: "9",
            explanation: "9 is the largest number in the list.",
          },
          {
            input: "[-1, -5, -3, -2]",
            output: "-1",
            explanation:
              "-1 is the largest number in the list of negative integers.",
          },
        ],
        constraints: [
          "The list contains at least one integer.",
          "The list can contain both positive and negative integers.",
          "The maximum length of the list is 10^5 elements.",
        ],
        solutionApproach: [
          "Use the built-in max() function to find the largest number.",
          "Alternatively, initialize the largest number as the first element and iterate through the list to find a larger number.",
        ],
      },
    },
    {
      id: 5,
      technology: ["Python"],
      category: "Python",
      difficulty: "Intermediate",
      duration: "60 mins",
      task: "Anagram check",
      details:
        "Write a Python function to check if two strings are anagrams, ignoring spaces and capitalization.",
      detailedProblem: {
        description:
          "Given two strings, write a function to determine if the strings are anagrams of each other. An anagram is formed by rearranging the letters of another word using all original letters exactly once. The function should ignore spaces and capitalization.",
        examples: [
          {
            input: '"Listen", "Silent"',
            output: "True",
            explanation:
              "After ignoring the case and spaces, both strings are rearrangements of each other.",
          },
          {
            input: '"Dormitory", "Dirty room"',
            output: "True",
            explanation:
              "Ignoring the space and case, 'Dormitory' can be rearranged to form 'Dirty room'.",
          },
          {
            input: '"Hello", "World"',
            output: "False",
            explanation:
              "The two words don't have the same characters, so they are not anagrams.",
          },
        ],
        constraints: [
          "The input strings consist of lowercase and uppercase English letters and spaces.",
          "The length of each string is at most 10^5 characters.",
        ],
        solutionApproach: [
          "Remove all spaces and convert both strings to lowercase.",
          "Sort both strings and check if they are equal.",
          "If the sorted versions of the strings are the same, return True; otherwise, return False.",
        ],
      },
    },
    {
      id: 6,
      technology: ["Python"],
      category: "Python",
      difficulty: "Intermediate",
      duration: "60 mins",
      task: "Implement a stack data structure",
      details:
        "Create a Stack class with push, pop, and peek operations using a Python list.",
      detailedProblem: {
        description:
          "Implement a Stack class that uses a Python list to store elements. The class should have methods for push (add an element), pop (remove and return the top element), peek (return the top element without removing it), and is_empty (check if the stack is empty).",
        examples: [
          {
            input:
              "stack = Stack()\nstack.push(1)\nstack.push(2)\nstack.pop()\nstack.peek()",
            output: "2\n1",
            explanation:
              "Push 1 and 2 to the stack, pop the top element (2), then peek at the new top element (1).",
          },
        ],
        constraints: [
          "The Stack should use a Python list for internal storage.",
          "All operations should have O(1) time complexity.",
        ],
        solutionApproach: [
          "Use a Python list as the underlying data structure.",
          "Implement push by appending to the list.",
          "Implement pop by removing and returning the last element of the list.",
          "Implement peek by returning the last element without removing it.",
          "Implement is_empty by checking if the list's length is zero.",
        ],
      },
    },
    {
      id: 7,
      technology: ["Python"],
      category: "Python",
      difficulty: "Intermediate",
      duration: "75 mins",
      task: "Implement a binary search algorithm",
      details:
        "Write a function to perform binary search on a sorted list of integers.",
      detailedProblem: {
        description:
          "Implement a binary search function that takes a sorted list of integers and a target value. The function should return the index of the target value if it's in the list, or -1 if it's not found.",
        examples: [
          {
            input: "binary_search([1, 3, 5, 7, 9], 5)",
            output: "2",
            explanation: "The value 5 is found at index 2 in the list.",
          },
          {
            input: "binary_search([1, 3, 5, 7, 9], 6)",
            output: "-1",
            explanation: "The value 6 is not in the list, so -1 is returned.",
          },
        ],
        constraints: [
          "The input list is always sorted in ascending order.",
          "The list can contain up to 10^6 elements.",
        ],
        solutionApproach: [
          "Initialize two pointers, left and right, to the start and end of the list.",
          "While left <= right, calculate the middle index.",
          "If the middle element is the target, return its index.",
          "If the target is less than the middle element, search the left half.",
          "If the target is greater than the middle element, search the right half.",
          "If the loop ends without finding the target, return -1.",
        ],
      },
    },
    {
      id: 8,
      technology: ["Python"],
      category: "Python",
      difficulty: "Intermediate",
      duration: "90 mins",
      task: "Implement a basic web scraper",
      details:
        "Create a Python script that scrapes a website and extracts specific information.",
      detailedProblem: {
        description:
          "Write a Python script that scrapes a given URL for all the paragraph text on the page. The script should use the requests library to fetch the HTML content and the BeautifulSoup library to parse it.",
        examples: [
          {
            input: 'scrape_paragraphs("https://example.com")',
            output:
              '["This is the first paragraph.", "This is the second paragraph.", ...]',
            explanation:
              "The function returns a list of all paragraph texts found on the page.",
          },
        ],
        constraints: [
          "Use the requests library to fetch the HTML content.",
          "Use BeautifulSoup from bs4 to parse the HTML.",
          "Handle potential network errors gracefully.",
        ],
        solutionApproach: [
          "Import the necessary libraries (requests and BeautifulSoup).",
          "Define a function that takes a URL as input.",
          "Use requests.get() to fetch the HTML content.",
          "Create a BeautifulSoup object with the HTML content.",
          "Use soup.find_all('p') to locate all paragraph tags.",
          "Extract the text from each paragraph and store in a list.",
          "Return the list of paragraph texts.",
        ],
      },
    },
    {
      id: 9,
      technology: ["Python"],
      category: "Python",
      difficulty: "Intermediate",
      duration: "60 mins",
      task: "Implement a basic decorator",
      details:
        "Create a decorator that measures the execution time of a function.",
      detailedProblem: {
        description:
          "Write a decorator function called 'timer' that measures the execution time of any function it decorates. The decorator should print the time taken by the function to execute.",
        examples: [
          {
            input:
              "@timer\ndef slow_function():\n    time.sleep(2)\n    return 'Done'\n\nslow_function()",
            output:
              "Function 'slow_function' took 2.00 seconds to execute.\n'Done'",
            explanation:
              "The decorator prints the execution time, and the function returns its result.",
          },
        ],
        constraints: [
          "Use the time module to measure execution time.",
          "The decorator should work with any function, regardless of its arguments or return value.",
        ],
        solutionApproach: [
          "Import the time module and functools.wraps.",
          "Define the timer decorator function.",
          "Use @functools.wraps to preserve the metadata of the decorated function.",
          "Inside the wrapper, record the start time, call the function, record the end time.",
          "Calculate and print the execution time.",
          "Return the result of the function call.",
        ],
      },
    },
    {
      id: 10,
      technology: ["Python"],
      category: "Python",
      difficulty: "Hard",
      duration: "120 mins",
      task: "Implement a basic neural network",
      details:
        "Create a simple neural network class with forward propagation and backpropagation.",
      detailedProblem: {
        description:
          "Implement a basic neural network class with a single hidden layer. The class should support forward propagation, backpropagation, and training using gradient descent. Use numpy for efficient matrix operations.",
        examples: [
          {
            input:
              "nn = NeuralNetwork(2, 3, 1)\nX = np.array([[0, 0], [0, 1], [1, 0], [1, 1]])\ny = np.array([[0], [1], [1], [0]])\nnn.train(X, y, epochs=10000)\nnn.predict(np.array([0, 0]))",
            output: "[[0.02]]",
            explanation:
              "Train the neural network on XOR problem and predict for input [0, 0].",
          },
        ],
        constraints: [
          "Use numpy for matrix operations.",
          "Implement both forward propagation and backpropagation.",
          "Use sigmoid activation function.",
        ],
        solutionApproach: [
          "Create a NeuralNetwork class with input, hidden, and output layer sizes.",
          "Initialize weights and biases randomly.",
          "Implement sigmoid and its derivative functions.",
          "Create methods for forward propagation and backpropagation.",
          "Implement a train method using gradient descent.",
          "Create a predict method for making predictions on new data.",
        ],
      },
    },
    {
      id: 11,
      technology: ["Python"],
      category: "Python",
      difficulty: "Hard",
      duration: "90 mins",
      task: "Implement a basic blockchain",
      details: "Create a simple blockchain implementation in Python.",
      detailedProblem: {
        description:
          "Implement a basic blockchain class that allows adding blocks, validating the chain, and mining new blocks with a proof-of-work mechanism.",
        examples: [
          {
            input:
              "blockchain = Blockchain()\nblockchain.add_block('Transaction 1')\nblockchain.add_block('Transaction 2')\nprint(blockchain.is_chain_valid())",
            output: "True",
            explanation:
              "Create a blockchain, add two blocks, and verify its validity.",
          },
        ],
        constraints: [
          "Use SHA-256 for hashing.",
          "Implement a simple proof-of-work mechanism.",
          "Each block should contain: index, timestamp, data, previous hash, hash, and nonce.",
        ],
        solutionApproach: [
          "Create a Block class to represent individual blocks.",
          "Implement a Blockchain class to manage the chain of blocks.",
          "Use hashlib for SHA-256 hashing.",
          "Implement methods for creating genesis block, adding blocks, and mining blocks.",
          "Create a method to validate the entire blockchain.",
          "Implement a simple proof-of-work algorithm (e.g., find a hash with leading zeros).",
        ],
      },
    },
    {
      id: 12,
      technology: ["Python"],
      category: "Python",
      difficulty: "Hard",
      duration: "150 mins",
      task: "Implement a basic compiler",
      details:
        "Create a simple compiler that translates a basic language into Python bytecode.",
      detailedProblem: {
        description:
          "Implement a basic compiler that can translate a simple custom language into Python bytecode. The language should support variable assignments, arithmetic operations, and print statements.",
        examples: [
          {
            input: 'compiler.compile("x = 5\ny = 10\nprint x + y")',
            output: "<code object <module> at 0x...>",
            explanation: "Compile the given code into Python bytecode.",
          },
        ],
        constraints: [
          "The custom language should support integer variables, addition, and print statements.",
          "Use the dis module to generate and inspect bytecode.",
          "Handle basic syntax errors in the input language.",
        ],
        solutionApproach: [
          "Implement a lexer to tokenize the input code.",
          "Create a parser to build an abstract syntax tree (AST) from the tokens.",
          "Implement a code generator that translates the AST into Python bytecode.",
          "Use the types.CodeType to create a code object from the generated bytecode.",
          "Implement error handling for basic syntax errors.",
          "Create a method to execute the compiled code.",
        ],
      },
    },
    {
      id: 13,
      technology: ["Python"],
      category: "Python",
      difficulty: "Hard",
      duration: "120 mins",
      task: "Implement a basic distributed key-value store",
      details:
        "Create a simple distributed key-value store using sockets and threading.",
      detailedProblem: {
        description:
          "Implement a basic distributed key-value store with a server and multiple clients. The server should handle concurrent connections and maintain a shared key-value store. Clients should be able to connect, set values, get values, and disconnect.",
        examples: [
          {
            input: "client.set('key', 'value')\nclient.get('key')",
            output: "'value'",
            explanation:
              "Set a key-value pair and retrieve it from the distributed store.",
          },
        ],
        constraints: [
          "Use sockets for network communication.",
          "Use threading to handle multiple client connections.",
          "Implement basic error handling and connection management.",
        ],
        solutionApproach: [
          "Create a Server class that listens for incoming connections.",
          "Implement a ClientHandler class to manage each client connection.",
          "Use a dictionary to store the key-value pairs on the server.",
          "Implement a simple protocol for communication (e.g., 'SET key value', 'GET key').",
          "Create a Client class that can connect to the server and send commands.",
          "Use threading.Lock to ensure thread-safe access to the shared dictionary.",
          "Implement error handling for network issues and invalid commands.",
        ],
      },
    },
    {
      id: 14,
      technology: ["Python"],
      category: "Python",
      difficulty: "Hard",
      duration: "60 mins",
      task: "Matrix rotation",
      details:
        "Rotate a given N x N matrix 90 degrees clockwise using only O(1) space.",
      detailedProblem: {
        description:
          "Given an N x N matrix, rotate the matrix by 90 degrees clockwise in place. This means that the operation should be performed without using any additional matrices (i.e., using only O(1) space).",
        examples: [
          {
            input: "[[1, 2, 3], [4, 5, 6], [7, 8, 9]]",
            output: "[[7, 4, 1], [8, 5, 2], [9, 6, 3]]",
            explanation: "The matrix is rotated 90 degrees clockwise.",
          },
          {
            input:
              "[[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]",
            output:
              "[[15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11]]",
            explanation: "The matrix is rotated 90 degrees clockwise.",
          },
        ],
        constraints: [
          "The matrix will always be an N x N grid, where 1 <= N <= 1000.",
          "The matrix contains integers between -1000 and 1000.",
        ],
        solutionApproach: [
          "Transpose the matrix (swap rows with columns).",
          "Reverse each row.",
          "This will rotate the matrix 90 degrees clockwise in place.",
        ],
      },
    },
    {
      id: 15,
      technology: ["React", "useState"],
      category: "React",
      difficulty: "Easy",
      duration: "45 mins",
      task: "Button click counter",
      details:
        "Create a React component with a button that displays the number of times it has been clicked.",
      detailedProblem: {
        description:
          "Implement a React component that renders a button. The button should display the number of times it has been clicked. The count should update each time the button is pressed.",
        examples: [
          {
            input: "Initial render",
            output: "Button displays: 'Clicks: 0'",
          },
          {
            input: "After 3 clicks",
            output: "Button displays: 'Clicks: 3'",
          },
        ],
        constraints: [
          "Use the useState hook to manage the click count.",
          "The button should update its text immediately after each click.",
        ],
        solutionApproach: [
          "Create a state variable to store the click count.",
          "Implement an onClick handler that increments the count.",
          "Display the current count within the button text.",
        ],
      },
    },
    {
      id: 16,
      technology: ["React", "useState"],
      category: "React",
      difficulty: "Easy",
      duration: "30 mins",
      task: "Toggle visibility",
      details:
        "Create a React component with a button that toggles the visibility of a text element.",
      detailedProblem: {
        description:
          "Implement a React component that contains a button and a text element. Clicking the button should toggle the visibility of the text element.",
        examples: [
          {
            input: "Initial render",
            output: "Button visible, text hidden",
          },
          {
            input: "After first click",
            output: "Button visible, text visible",
          },
          {
            input: "After second click",
            output: "Button visible, text hidden again",
          },
        ],
        constraints: [
          "Use the useState hook to manage the visibility state.",
          "The text should be completely removed from the DOM when hidden, not just visually hidden.",
        ],
        solutionApproach: [
          "Create a state variable to store the visibility status.",
          "Implement an onClick handler that toggles the visibility state.",
          "Use conditional rendering to show or hide the text element based on the state.",
        ],
      },
    },
    {
      id: 17,
      technology: ["React", "useState"],
      category: "React",
      difficulty: "Easy",
      duration: "40 mins",
      task: "Simple form input",
      details:
        "Create a React component with an input field that displays its value in real-time.",
      detailedProblem: {
        description:
          "Implement a React component with a text input field. As the user types, the current value of the input should be displayed below it in real-time.",
        examples: [
          {
            input: "User types 'Hello'",
            output:
              "Input field contains 'Hello', and 'You typed: Hello' is displayed below",
          },
        ],
        constraints: [
          "Use the useState hook to manage the input value.",
          "The displayed text should update with each keystroke.",
        ],
        solutionApproach: [
          "Create a state variable to store the input value.",
          "Implement an onChange handler that updates the state with the current input value.",
          "Display the current state value below the input field.",
        ],
      },
    },
    {
      id: 18,
      technology: ["React", "useState"],
      category: "React",
      difficulty: "Easy",
      duration: "50 mins",
      task: "Color picker",
      details:
        "Create a React component that allows users to select a color and displays the chosen color.",
      detailedProblem: {
        description:
          "Implement a React component with a color picker input. When a color is selected, display a div element with that color as its background.",
        examples: [
          {
            input: "User selects red color",
            output: "A red div is displayed below the color picker",
          },
        ],
        constraints: [
          "Use the useState hook to manage the selected color.",
          "The color display should update immediately when a new color is selected.",
        ],
        solutionApproach: [
          "Create a state variable to store the selected color.",
          "Use an input of type 'color' for the color picker.",
          "Implement an onChange handler that updates the color state.",
          "Render a div with its background color set to the selected color.",
        ],
      },
    },

    // Intermediate React Challenges
    {
      id: 19,
      technology: ["React", "useState"],
      category: "React",
      difficulty: "Intermediate",
      duration: "75 mins",
      task: "Filterable product list",
      details:
        "Create a React component that displays a list of products with a search filter.",
      detailedProblem: {
        description:
          "Implement a React component that renders a list of products. Include a search input that filters the products in real-time as the user types.",
        examples: [
          {
            input: "User types 'apple' in the search field",
            output: "Only products with 'apple' in their name are displayed",
          },
        ],
        constraints: [
          "Use the useState hook to manage the search term and filtered products.",
          "The filtering should be case-insensitive.",
          "The list should update in real-time as the user types.",
        ],
        solutionApproach: [
          "Create state variables for the search term and the list of products.",
          "Implement an onChange handler for the search input that updates the search term state.",
          "Use the useEffect hook to filter the products when the search term changes.",
          "Render the filtered list of products.",
        ],
      },
    },
    {
      id: 20,
      technology: ["React", "useState"],
      category: "React",
      difficulty: "Intermediate",
      duration: "90 mins",
      task: "Pagination component",
      details:
        "Create a React component that implements pagination for a large dataset.",
      detailedProblem: {
        description:
          "Implement a React component that displays a paginated list of items. Include controls to navigate between pages and allow users to select the number of items per page.",
        examples: [
          {
            input: "100 items, 10 items per page, user clicks 'Next' button",
            output: "Second page of 10 items is displayed",
          },
        ],
        constraints: [
          "Use the useState hook to manage the current page and items per page.",
          "Implement 'Previous' and 'Next' buttons for navigation.",
          "Allow users to select from predefined options for items per page (e.g., 10, 25, 50).",
        ],
        solutionApproach: [
          "Create state variables for current page, items per page, and total items.",
          "Implement functions to calculate the total number of pages and which items to display.",
          "Create navigation buttons that update the current page state.",
          "Implement a dropdown to select items per page.",
          "Use the useEffect hook to update the displayed items when page or items per page changes.",
        ],
      },
    },
    {
      id: 21,
      technology: ["React", "useState"],
      category: "React",
      difficulty: "Intermediate",
      duration: "60 mins",
      task: "Accordion component",
      details:
        "Create a React accordion component that can expand and collapse sections.",
      detailedProblem: {
        description:
          "Implement a React accordion component that displays a list of sections. Each section should have a header that, when clicked, expands or collapses the section's content.",
        examples: [
          {
            input: "User clicks on a collapsed section header",
            output:
              "The section expands to show its content, while other sections collapse",
          },
        ],
        constraints: [
          "Use the useState hook to manage the expanded/collapsed state of sections.",
          "Only one section should be expanded at a time.",
          "The component should be reusable with different content and number of sections.",
        ],
        solutionApproach: [
          "Create a state variable to track which section is currently expanded.",
          "Implement a function to toggle the expanded state when a section header is clicked.",
          "Use conditional rendering to show or hide section content based on the expanded state.",
          "Create separate components for the accordion container and individual sections for better organization.",
        ],
      },
    },
    {
      id: 22,
      technology: ["React", "useState"],
      category: "React",
      difficulty: "Intermediate",
      duration: "80 mins",
      task: "Drag and drop list",
      details:
        "Create a React component that allows reordering list items via drag and drop.",
      detailedProblem: {
        description:
          "Implement a React component that displays a list of items that can be reordered using drag and drop functionality.",
        examples: [
          {
            input: "User drags an item from position 3 to position 1",
            output:
              "The list updates to reflect the new order with the dragged item in position 1",
          },
        ],
        constraints: [
          "Use the useState hook to manage the list order.",
          "Implement drag and drop without using external libraries.",
          "The component should work with touch devices as well as mouse input.",
        ],
        solutionApproach: [
          "Create state variables for the list of items and the currently dragged item.",
          "Implement onDragStart, onDragOver, and onDrop event handlers.",
          "Use the HTML5 Drag and Drop API for basic functionality.",
          "Update the list order in the onDrop handler.",
          "Add touch event handlers to support mobile devices.",
        ],
      },
    },

    // Hard React Challenges
    {
      id: 23,
      technology: ["React", "useState"],
      category: "React",
      difficulty: "Hard",
      duration: "120 mins",
      task: "Virtual scrolling component",
      details:
        "Create a React component that implements virtual scrolling for a large list of items.",
      detailedProblem: {
        description:
          "Implement a React component that can efficiently render a very large list of items (e.g., 100,000+ items) using virtual scrolling techniques. Only the visible items should be rendered at any given time.",
        examples: [
          {
            input: "List of 100,000 items, user scrolls to middle",
            output:
              "Only the visible items (e.g., 20-30 items) around the scroll position are rendered",
          },
        ],
        constraints: [
          "Use React hooks (useState, useEffect, useCallback) for state management and optimization.",
          "The scrolling should be smooth and performant, even with very large lists.",
          "Implement dynamic height calculations for list items.",
        ],
        solutionApproach: [
          "Create state variables for scroll position, visible range, and rendered items.",
          "Use the useEffect hook to add scroll event listeners and clean up on unmount.",
          "Implement a function to calculate which items should be visible based on scroll position.",
          "Use absolute positioning and transform to place list items correctly.",
          "Optimize rerenders using React.memo and useCallback.",
        ],
      },
    },
    {
      id: 24,
      technology: ["React", "useState"],
      category: "React",
      difficulty: "Hard",
      duration: "150 mins",
      task: "Real-time collaborative editor",
      details:
        "Create a React component for a real-time collaborative text editor.",
      detailedProblem: {
        description:
          "Implement a React component that allows multiple users to edit a document simultaneously in real-time. Changes made by one user should be immediately visible to all other users.",
        examples: [
          {
            input:
              "User A types 'Hello' while User B simultaneously types 'World'",
            output:
              "Both users see 'HelloWorld' (or a merged version) in real-time",
          },
        ],
        constraints: [
          "Use WebSockets or a similar technology for real-time communication.",
          "Implement operational transformation or a similar algorithm for conflict resolution.",
          "Handle network latency and disconnections gracefully.",
        ],
        solutionApproach: [
          "Set up a WebSocket connection for real-time updates.",
          "Implement a basic operational transformation algorithm for merging changes.",
          "Use the useEffect hook to manage WebSocket lifecycle and event listeners.",
          "Create a custom hook for managing the editor state and operations.",
          "Implement debouncing for sending updates to reduce network traffic.",
        ],
      },
    },
    {
      id: 25,
      technology: ["React", "useState"],
      category: "React",
      difficulty: "Hard",
      duration: "180 mins",
      task: "State management library",
      details:
        "Create a custom state management library for React applications.",
      detailedProblem: {
        description:
          "Implement a lightweight state management library for React applications, similar to Redux but with a simpler API. The library should support actions, reducers, and a way to access the global state from any component.",
        examples: [
          {
            input: "Component dispatches an action to update user data",
            output: "All connected components receive the updated user data",
          },
        ],
        constraints: [
          "Use only React hooks and context API (no external state management libraries).",
          "Support middleware for side effects (like async actions).",
          "Provide a simple way to connect components to the global state.",
        ],
        solutionApproach: [
          "Create a context to hold the global state and dispatch function.",
          "Implement a custom hook that combines useContext and useReducer for state management.",
          "Create a Provider component that wraps the app and provides the state and dispatch function.",
          "Implement a way to combine multiple reducers.",
          "Create a middleware system for handling side effects.",
          "Provide a connect function or hook for easy component connection to the global state.",
        ],
      },
    },
    {
      id: 26,
      technology: ["React", "useState"],
      category: "React",
      difficulty: "Hard",
      duration: "140 mins",
      task: "GraphQL client implementation",
      details: "Create a custom GraphQL client for React applications.",
      detailedProblem: {
        description:
          "Implement a lightweight GraphQL client for React applications. The client should support queries, mutations, and subscriptions, and provide a way to easily use GraphQL operations in React components.",
        examples: [
          {
            input: "Component uses a query to fetch user data",
            output:
              "Component receives and displays the user data from the GraphQL API",
          },
        ],
        constraints: [
          "Implement the client without using existing GraphQL client libraries.",
          "Support caching of query results.",
          "Provide a way to handle loading and error states.",
        ],
        solutionApproach: [
          "Create a context to hold the GraphQL client instance.",
          "Implement functions for sending queries and mutations to a GraphQL API.",
          "Create a custom hook for executing queries and mutations in components.",
          "Implement basic caching mechanism for query results.",
          "Add support for subscriptions using WebSockets.",
          "Provide loading and error states as part of the hook's return value.",
        ],
      },
    },
    {
      id: 27,
      technology: ["React", "useState"],
      category: "React",
      difficulty: "Easy",
      duration: "60 mins",
      task: "Simple counter component",
      details:
        "Create a React component that displays a counter with increment and decrement buttons.",
      detailedProblem: {
        description:
          "In this challenge, you will create a simple counter component in React. The counter should start from 0 and increase or decrease when buttons are clicked.",
        examples: [
          {
            input: "Initial counter value: 0. Click increment button.",
            output: "Counter value: 1",
          },
          {
            input: "Counter value: 1. Click decrement button.",
            output: "Counter value: 0",
          },
        ],
        constraints: [
          "The component should manage its own state using React hooks.",
          "The buttons should properly update the counter value.",
        ],
        solutionApproach: [
          "Use the `useState` hook to create and manage the counter state.",
          "Create two buttons that update the state using the `setState` function.",
        ],
      },
    },
    {
      id: 28,
      technology: ["React", "conditional rendering"],
      category: "React",
      difficulty: "Intermediate",
      duration: "60 mins",
      task: "Interactive card component",
      details:
        "Build a card component that reveals hidden content upon clicking.",
      detailedProblem: {
        description:
          "In this challenge, you will create an interactive card component that displays additional information when clicked. The focus is on writing clean, modular code and improving your understanding of React and DOM manipulation.",
        examples: [
          {
            input: "A card that shows details on click",
            output: "Details are revealed on clicking the card.",
          },
        ],
        constraints: [
          "Use React state to track whether the card is expanded or collapsed.",
          "Ensure the UI updates efficiently when the card is clicked.",
        ],
        solutionApproach: [
          "Use the `useState` hook to manage the card’s visibility state.",
          "Toggle the visibility of the card’s content when clicked.",
        ],
      },
    },
    {
      id: 29,
      technology: ["React", "localStorage"],
      category: "React",
      difficulty: "Hard",
      duration: "60 mins",
      task: "Todo list with React and Local Storage",
      details:
        "Create a todo list application that saves items to local storage and allows them to persist between page reloads.",
      detailedProblem: {
        description:
          "In this challenge, you will build a todo list application in React. The app should allow users to add, remove, and mark items as completed. Additionally, the todo items should be saved to local storage and persist between page reloads.",
        examples: [
          {
            input: "Add a todo item 'Buy milk'. Reload the page.",
            output: "The todo list persists, showing the 'Buy milk' item.",
          },
        ],
        constraints: [
          "The app should store and retrieve todo items from local storage.",
          "Use React state and hooks for managing the todo list.",
        ],
        solutionApproach: [
          "Use the `useState` and `useEffect` hooks to manage state and local storage.",
          "Ensure that todo items persist across page reloads by interacting with the browser’s local storage.",
        ],
      },
    },

    {
      id: 30,
      category: "DSA",
      difficulty: "Easy",
      duration: "30 mins",
      task: "Reverse a string",
      details: "Write a function to reverse a given string.",
      detailedProblem: {
        description:
          "Given a string, write a function to return the string in reverse order.",
        examples: [
          {
            input: '"hello"',
            output: '"olleh"',
            explanation: "The characters are reversed from left to right.",
          },
          {
            input: '"world"',
            output: '"dlrow"',
            explanation: "The characters are reversed from left to right.",
          },
        ],
        constraints: [
          "The string can contain only English letters and spaces.",
          "The maximum length of the string is 10^4.",
        ],
        solutionApproach: [
          "Use a two-pointer approach, swapping characters from both ends towards the middle.",
          "Alternatively, use string slicing with a step of -1 to reverse the string.",
        ],
      },
    },
    {
      id: 31,
      category: "DSA",
      difficulty: "Easy",
      duration: "45 mins",
      task: "Find the maximum element in an array",
      details:
        "Write a function to find the largest element in an array of integers.",
      detailedProblem: {
        description:
          "Given an array of integers, write a function that returns the largest number in the array.",
        examples: [
          {
            input: "[3, 7, 2, 8, 1]",
            output: "8",
            explanation: "8 is the largest number in the given array.",
          },
          {
            input: "[-1, -5, -3, -2]",
            output: "-1",
            explanation:
              "-1 is the largest number in the array of negative integers.",
          },
        ],
        constraints: [
          "The array contains at least one integer.",
          "The array can contain both positive and negative integers.",
          "The maximum length of the array is 10^5 elements.",
        ],
        solutionApproach: [
          "Initialize the maximum as the first element of the array.",
          "Iterate through the array, updating the maximum if a larger number is found.",
          "Return the maximum after the iteration is complete.",
        ],
      },
    },
    {
      id: 32,
      category: "DSA",
      difficulty: "Easy",
      duration: "40 mins",
      task: "Check if a number is palindrome",
      details:
        "Write a function to determine if a given integer is a palindrome.",
      detailedProblem: {
        description:
          "Given an integer, write a function that returns true if the integer is a palindrome, and false otherwise. An integer is a palindrome when it reads the same backward as forward.",
        examples: [
          {
            input: "121",
            output: "true",
            explanation:
              "121 reads as 121 from left to right and from right to left.",
          },
          {
            input: "-121",
            output: "false",
            explanation:
              "From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.",
          },
        ],
        constraints: [
          "The input is a signed 32-bit integer.",
          "Solve it without converting the integer to a string.",
        ],
        solutionApproach: [
          "Reverse the integer by extracting digits and reconstructing.",
          "Compare the reversed integer with the original.",
          "Handle edge cases like negative numbers and numbers ending with 0.",
        ],
      },
    },
    {
      id: 33,
      category: "DSA",
      difficulty: "Easy",
      duration: "35 mins",
      task: "Implement a stack using an array",
      details:
        "Write a class to implement a stack data structure using an array.",
      detailedProblem: {
        description:
          "Implement a stack class that uses an array to store elements. The class should have methods for push (add an element), pop (remove and return the top element), peek (return the top element without removing it), and isEmpty (check if the stack is empty).",
        examples: [
          {
            input: "push(1), push(2), pop(), peek()",
            output: "2, 1",
            explanation:
              "After pushing 1 and 2, pop returns 2, and peek returns 1.",
          },
        ],
        constraints: [
          "The stack should use a fixed-size array for storage.",
          "Handle stack overflow and underflow conditions.",
        ],
        solutionApproach: [
          "Use an array to store elements and a variable to keep track of the top of the stack.",
          "Implement push by adding an element to the top and incrementing the top index.",
          "Implement pop by decrementing the top index and returning the element.",
          "Implement peek by returning the element at the top index without modifying the stack.",
        ],
      },
    },

    // Intermediate DSA Challenges
    {
      id: 34,
      category: "DSA",
      difficulty: "Intermediate",
      duration: "60 mins",
      task: "Longest palindrome substring",
      details: "Find the longest palindromic substring in a given string.",
      detailedProblem: {
        description:
          "Given a string, write a function to find the longest substring that is a palindrome.",
        examples: [
          {
            input: '"babad"',
            output: '"bab" or "aba"',
            explanation:
              "Both 'bab' and 'aba' are valid longest palindromic substrings.",
          },
          {
            input: '"cbbd"',
            output: '"bb"',
            explanation: "'bb' is the longest palindromic substring.",
          },
        ],
        constraints: [
          "The input string consists of lowercase English letters.",
          "The length of the string is at most 1000 characters.",
        ],
        solutionApproach: [
          "Use dynamic programming or expand around center approach.",
          "For each character, consider it as the center of a palindrome and expand outwards.",
          "Keep track of the longest palindrome found so far.",
        ],
      },
    },
    {
      id: 35,
      category: "DSA",
      difficulty: "Intermediate",
      duration: "75 mins",
      task: "Implement a binary search tree",
      details:
        "Write a class to implement a binary search tree with insert, delete, and search operations.",
      detailedProblem: {
        description:
          "Implement a binary search tree class that supports inserting elements, deleting elements, and searching for elements. The tree should maintain the binary search tree property.",
        examples: [
          {
            input:
              "insert(5), insert(3), insert(7), search(3), delete(5), search(5)",
            output: "true, false",
            explanation:
              "After inserting 5, 3, and 7, searching for 3 returns true. After deleting 5, searching for 5 returns false.",
          },
        ],
        constraints: [
          "The tree should maintain the binary search tree property at all times.",
          "Handle edge cases like deleting the root node or a node with two children.",
        ],
        solutionApproach: [
          "Implement a Node class to represent tree nodes.",
          "Implement insert recursively, comparing values to decide left or right subtree.",
          "Implement search by traversing the tree based on comparisons.",
          "Implement delete by considering cases: leaf node, node with one child, node with two children.",
        ],
      },
    },
    {
      id: 36,
      category: "DSA",
      difficulty: "Intermediate",
      duration: "70 mins",
      task: "Implement merge sort",
      details:
        "Write a function to sort an array of integers using the merge sort algorithm.",
      detailedProblem: {
        description:
          "Implement the merge sort algorithm to sort an array of integers in ascending order.",
        examples: [
          {
            input: "[38, 27, 43, 3, 9, 82, 10]",
            output: "[3, 9, 10, 27, 38, 43, 82]",
            explanation:
              "The array is sorted in ascending order using merge sort.",
          },
        ],
        constraints: [
          "The input array can contain duplicate elements.",
          "The maximum length of the array is 10^5 elements.",
        ],
        solutionApproach: [
          "Implement the divide step: recursively divide the array into two halves.",
          "Implement the conquer step: recursively sort the two halves.",
          "Implement the combine step: merge the sorted halves into a single sorted array.",
          "Use a helper function to merge two sorted arrays.",
        ],
      },
    },
    {
      id: 37,
      category: "DSA",
      difficulty: "Intermediate",
      duration: "65 mins",
      task: "Implement a queue using two stacks",
      details:
        "Write a class to implement a queue data structure using two stacks.",
      detailedProblem: {
        description:
          "Implement a queue class that uses two stacks internally to perform queue operations (enqueue, dequeue, peek, and empty).",
        examples: [
          {
            input: "enqueue(1), enqueue(2), dequeue(), peek(), empty()",
            output: "1, 2, false",
            explanation:
              "After enqueuing 1 and 2, dequeue returns 1, peek returns 2, and the queue is not empty.",
          },
        ],
        constraints: [
          "Use only standard stack operations (push, pop, top, isEmpty).",
          "The queue should support enqueue, dequeue, peek, and empty operations.",
        ],
        solutionApproach: [
          "Use two stacks: one for enqueue operations and one for dequeue operations.",
          "For enqueue: push the new element onto the enqueue stack.",
          "For dequeue: if the dequeue stack is empty, transfer all elements from the enqueue stack to the dequeue stack, then pop from the dequeue stack.",
          "For peek: similar to dequeue, but return the top element without removing it.",
        ],
      },
    },

    // Hard DSA Challenges
    {
      id: 38,
      category: "DSA",
      difficulty: "Hard",
      duration: "90 mins",
      task: "Find shortest path in a maze",
      details:
        "Implement an algorithm to find the shortest path in a maze using BFS.",
      detailedProblem: {
        description:
          "Given a 2D grid representing a maze, find the shortest path from the start position to the end position using Breadth-First Search (BFS).",
        examples: [
          {
            input: "[[1, 0, 1], [1, 1, 0], [0, 1, 1]]",
            output: "4",
            explanation:
              "The shortest path from the top-left to the bottom-right is 4 steps.",
          },
        ],
        constraints: [
          "The grid consists of 1s (walkable) and 0s (blocked).",
          "The size of the grid is at most 100 x 100.",
          "The start position is always the top-left corner, and the end position is always the bottom-right corner.",
        ],
        solutionApproach: [
          "Use a queue to implement BFS, starting from the start position.",
          "Keep track of visited cells to avoid revisiting.",
          "Use a distance matrix to store the shortest distance to each cell.",
          "Explore neighboring cells in all four directions (up, down, left, right).",
          "Return the distance when the end position is reached.",
        ],
      },
    },
    {
      id: 39,
      category: "DSA",
      difficulty: "Hard",
      duration: "120 mins",
      task: "Implement a trie with wildcard search",
      details:
        "Write a class to implement a trie data structure with support for wildcard search.",
      detailedProblem: {
        description:
          "Implement a trie class that supports inserting words, searching for words, and searching with wildcards. The wildcard '.' can represent any single character.",
        examples: [
          {
            input:
              'insert("cat"), insert("dog"), search("cat"), search("do."), search("...")',
            output: "true, true, true",
            explanation:
              "'cat' is in the trie, 'do.' matches 'dog', and '...' matches both 'cat' and 'dog'.",
          },
        ],
        constraints: [
          "The trie should support lowercase English letters and the wildcard character '.'.",
          "The maximum length of a word is 20 characters.",
          "The trie should efficiently handle large numbers of insertions and searches.",
        ],
        solutionApproach: [
          "Implement a TrieNode class with children nodes and a flag to mark the end of a word.",
          "Implement insert by creating or traversing nodes for each character.",
          "Implement search by traversing nodes and handling wildcards recursively.",
          "For wildcard search, explore all possible paths when encountering a '.'.",
        ],
      },
    },
    {
      id: 40,
      category: "DSA",
      difficulty: "Hard",
      duration: "150 mins",
      task: "Implement a LRU cache",
      details: "Write a class to implement a Least Recently Used (LRU) cache.",
      detailedProblem: {
        description:
          "Implement a data structure for a Least Recently Used (LRU) cache. The cache should support get and put operations in O(1) time complexity.",
        examples: [
          {
            input:
              "LRUCache cache = new LRUCache(2); cache.put(1, 1); cache.put(2, 2); cache.get(1); cache.put(3, 3); cache.get(2);",
            output: "1, -1",
            explanation:
              "After putting (1,1) and (2,2), get(1) returns 1. Putting (3,3) evicts (2,2), so get(2) returns -1 (not found).",
          },
        ],
        constraints: [
          "The capacity of the cache is positive.",
          "The get and put operations should have O(1) time complexity.",
          "The cache should support up to 10^5 operations.",
        ],
        solutionApproach: [
          "Use a hash map to store key-value pairs for O(1) access.",
          "Use a doubly linked list to keep track of the order of elements.",
          "Move an element to the front of the list when it's accessed or updated.",
          "Remove the least recently used element (at the end of the list) when the cache is full and a new element is added.",
        ],
      },
    },
    {
      id: 41,
      category: "DSA",
      difficulty: "Hard",
      duration: "180 mins",
      task: "Implement a basic database engine",
      details:
        "Write a class to implement a simple in-memory relational database engine.",
      detailedProblem: {
        description:
          "Implement a basic in-memory relational database engine that supports creating tables, inserting data, and executing simple SQL queries.",
        examples: [
          {
            input:
              "CREATE TABLE users (id INT, name VARCHAR); INSERT INTO users VALUES (1, 'John'); SELECT * FROM users;",
            output:
              "Table created, 1 row inserted, Query result: [(1, 'John')]",
          },
        ],
        constraints: [
          "Support basic data types: INT, VARCHAR.",
          "Implement CREATE TABLE, INSERT, and SELECT operations.",
          "Support basic WHERE clauses in SELECT statements.",
          "The database should efficiently handle tables with up to 10^6 rows.",
        ],
        solutionApproach: [
          "Create classes to represent tables, rows, and columns.",
          "Implement a parser for simple SQL statements.",
          "Create methods to execute CREATE TABLE, INSERT, and SELECT operations.",
          "Implement a basic query executor that can filter rows based on WHERE clauses.",
        ],
      },
    },

    {
      id: 42,
      category: "DSA",
      difficulty: "Easy",
      duration: "60 mins",
      task: "Reverse a string",
      details: "Write a function to reverse a given string.",
      detailedProblem: {
        description:
          "Given a string, write a function to return the string in reverse order.",
        examples: [
          {
            input: '"hello"',
            output: '"olleh"',
          },
          {
            input: '"world"',
            output: '"dlrow"',
          },
        ],
        constraints: [
          "The string can contain only English letters and spaces.",
          "The maximum length of the string is 10^4.",
        ],
        solutionApproach: [
          "Use slicing or a loop to reverse the characters in the string.",
          "Return the reversed string.",
        ],
      },
    },
    {
      id: 43,
      category: "DSA",
      difficulty: "Intermediate",
      duration: "60 mins",
      task: "Longest palindrome substring",
      details: "Find the longest palindromic substring in a given string.",
      detailedProblem: {
        description:
          "Given a string, write a function to find the longest substring that is a palindrome.",
        examples: [
          {
            input: '"babad"',
            output: '"bab" or "aba"',
          },
          {
            input: '"cbbd"',
            output: '"bb"',
          },
        ],
        constraints: [
          "The input string consists of lowercase English letters.",
          "The length of the string is at most 1000 characters.",
        ],
        solutionApproach: [
          "Use dynamic programming or expand around center approach to find the longest palindromic substring.",
        ],
      },
    },
    {
      id: 44,
      category: "DSA",
      difficulty: "Hard",
      duration: "60 mins",
      task: "Find shortest path in a maze",
      details:
        "Implement an algorithm to find the shortest path in a maze using BFS.",
      detailedProblem: {
        description:
          "Given a 2D grid representing a maze, find the shortest path from the start position to the end position using Breadth-First Search (BFS).",
        examples: [
          {
            input: "[[1, 0, 1], [1, 1, 0], [0, 1, 1]]",
            output: "4",
            explanation:
              "The shortest path from the top-left to the bottom-right is 4 steps.",
          },
        ],
        constraints: [
          "The grid consists of 1s (walkable) and 0s (blocked).",
          "The size of the grid is at most 100 x 100.",
        ],
        solutionApproach: [
          "Use BFS to explore the maze level by level, keeping track of visited cells to avoid revisiting.",
        ],
      },
    },

    {
      id: 45,
      category: "Java",
      difficulty: "Easy",
      duration: "45 mins",
      task: "Reverse a string",
      details: "Write a Java program to reverse a given string.",
      detailedProblem: {
        description:
          "Given a string, write a function to return the string in reverse order.",
        examples: [
          {
            input: '"hello"',
            output: '"olleh"',
            explanation: "The characters are reversed from left to right.",
          },
          {
            input: '"Java"',
            output: '"avaJ"',
            explanation: "The characters are reversed from left to right.",
          },
        ],
        constraints: [
          "The string can contain any ASCII character.",
          "The maximum length of the string is 10^5 characters.",
        ],
        solutionApproach: [
          "Convert the string to a character array.",
          "Swap characters from both ends towards the middle.",
          "Convert the character array back to a string.",
        ],
      },
    },
    {
      id: 46,
      category: "Java",
      difficulty: "Easy",
      duration: "30 mins",
      task: "Find the largest number in an array",
      details:
        "Write a Java program to find the largest number in an array of integers.",
      detailedProblem: {
        description:
          "Given an array of integers, write a function that returns the largest number in the array.",
        examples: [
          {
            input: "[10, 5, 8, 12, 3]",
            output: "12",
            explanation: "12 is the largest number in the given array.",
          },
          {
            input: "[-1, -5, -3, -2]",
            output: "-1",
            explanation:
              "-1 is the largest number in the array of negative integers.",
          },
        ],
        constraints: [
          "The array contains at least one integer.",
          "The array can contain both positive and negative integers.",
          "The maximum length of the array is 10^6 elements.",
        ],
        solutionApproach: [
          "Initialize the largest number as the first element of the array.",
          "Iterate through the array, updating the largest number if a larger number is found.",
          "Return the largest number after the iteration is complete.",
        ],
      },
    },
    {
      id: 47,
      category: "Java",
      difficulty: "Easy",
      duration: "40 mins",
      task: "Check if a number is prime",
      details: "Write a Java program to determine if a given number is prime.",
      detailedProblem: {
        description:
          "Given a positive integer, write a function that returns true if the number is prime, and false otherwise.",
        examples: [
          {
            input: "17",
            output: "true",
            explanation:
              "17 is a prime number as it's only divisible by 1 and itself.",
          },
          {
            input: "24",
            output: "false",
            explanation:
              "24 is not a prime number as it's divisible by 1, 2, 3, 4, 6, 8, 12, and 24.",
          },
        ],
        constraints: [
          "The input is a positive integer.",
          "The maximum value of the input is 10^9.",
        ],
        solutionApproach: [
          "Check if the number is less than 2 (not prime).",
          "Iterate from 2 to the square root of the number.",
          "If the number is divisible by any value in this range, it's not prime.",
          "If no divisors are found, the number is prime.",
        ],
      },
    },
    {
      id: 48,
      category: "Java",
      difficulty: "Easy",
      duration: "35 mins",
      task: "Calculate the sum of digits",
      details:
        "Write a Java program to calculate the sum of digits of a given number.",
      detailedProblem: {
        description:
          "Given a non-negative integer, write a function that returns the sum of its digits.",
        examples: [
          {
            input: "123",
            output: "6",
            explanation: "1 + 2 + 3 = 6",
          },
          {
            input: "9045",
            output: "18",
            explanation: "9 + 0 + 4 + 5 = 18",
          },
        ],
        constraints: [
          "The input is a non-negative integer.",
          "The maximum value of the input is 10^9.",
        ],
        solutionApproach: [
          "Initialize a sum variable to 0.",
          "While the number is not 0, extract the last digit using modulo 10 and add it to the sum.",
          "Divide the number by 10 to remove the last digit.",
          "Repeat until all digits have been processed.",
        ],
      },
    },

    // Intermediate Java Challenges
    {
      id: 49,
      category: "Java",
      difficulty: "Intermediate",
      duration: "60 mins",
      task: "Implement a stack using two queues",
      details:
        "Write a Java program to implement a stack data structure using two queues.",
      detailedProblem: {
        description:
          "Implement a stack class that uses two queues internally to perform stack operations (push, pop, top, and empty).",
        examples: [
          {
            input: "push(1), push(2), top(), pop(), empty()",
            output: "2, 2, false",
            explanation:
              "After pushing 1 and 2, top returns 2, pop removes and returns 2, and the stack is not empty.",
          },
        ],
        constraints: [
          "Use only standard queue operations (enqueue, dequeue, front, isEmpty).",
          "The stack should support push, pop, top, and empty operations.",
        ],
        solutionApproach: [
          "Use two queues: q1 and q2.",
          "For push: enqueue the new element to q1.",
          "For pop: move all elements except the last from q1 to q2, remove and return the last element from q1, then swap q1 and q2.",
          "For top: similar to pop, but enqueue the last element back to q2 instead of removing it.",
        ],
      },
    },
    {
      id: 50,
      category: "Java",
      difficulty: "Intermediate",
      duration: "75 mins",
      task: "Implement LRU Cache",
      details:
        "Write a Java program to implement an LRU (Least Recently Used) cache.",
      detailedProblem: {
        description:
          "Implement an LRU cache that supports get and put operations in O(1) time complexity.",
        examples: [
          {
            input:
              "LRUCache cache = new LRUCache(2); cache.put(1, 1); cache.put(2, 2); cache.get(1); cache.put(3, 3); cache.get(2);",
            output: "1, -1",
            explanation:
              "After putting (1,1) and (2,2), get(1) returns 1. Putting (3,3) evicts (2,2), so get(2) returns -1 (not found).",
          },
        ],
        constraints: [
          "The capacity of the cache is positive.",
          "The get and put operations should have O(1) time complexity.",
        ],
        solutionApproach: [
          "Use a HashMap to store key-value pairs for O(1) access.",
          "Use a doubly linked list to keep track of the order of elements.",
          "Move an element to the front of the list when it's accessed or updated.",
          "Remove the least recently used element (at the end of the list) when the cache is full and a new element is added.",
        ],
      },
    },
    {
      id: 51,
      category: "Java",
      difficulty: "Intermediate",
      duration: "70 mins",
      task: "Implement a trie (prefix tree)",
      details:
        "Write a Java program to implement a trie data structure for efficient string search operations.",
      detailedProblem: {
        description:
          "Implement a trie class that supports insert, search, and startsWith operations for strings.",
        examples: [
          {
            input:
              'Trie trie = new Trie(); trie.insert("apple"); trie.search("apple"); trie.search("app"); trie.startsWith("app");',
            output: "true, false, true",
            explanation:
              '"apple" is in the trie, "app" is not, but "app" is a prefix of a word in the trie.',
          },
        ],
        constraints: [
          "The trie should support lowercase English letters only.",
          "The maximum length of a word is 20 characters.",
        ],
        solutionApproach: [
          "Create a TrieNode class with children nodes and a flag to mark the end of a word.",
          "Implement insert by creating or traversing nodes for each character.",
          "Implement search by traversing nodes and checking if the last node is marked as the end of a word.",
          "Implement startsWith similarly to search, but without checking for the end of word flag.",
        ],
      },
    },
    {
      id: 52,
      category: "Java",
      difficulty: "Intermediate",
      duration: "65 mins",
      task: "Implement a thread-safe singleton",
      details:
        "Write a Java program to implement a thread-safe singleton class using double-checked locking.",
      detailedProblem: {
        description:
          "Implement a singleton class that is thread-safe and uses lazy initialization with double-checked locking.",
        examples: [
          {
            input: "Singleton.getInstance()",
            output:
              "Returns the same instance every time it's called, even in a multi-threaded environment.",
          },
        ],
        constraints: [
          "The singleton should be lazily initialized.",
          "The implementation should be thread-safe.",
          "Use double-checked locking for better performance.",
        ],
        solutionApproach: [
          "Use a private static volatile field to hold the instance.",
          "Implement a public static method getInstance() for accessing the instance.",
          "Use double-checked locking inside getInstance() to ensure thread safety and lazy initialization.",
          "Make the constructor private to prevent direct instantiation.",
        ],
      },
    },

    // Hard Java Challenges
    {
      id: 53,
      category: "Java",
      difficulty: "Hard",
      duration: "90 mins",
      task: "Implement a concurrent hash map",
      details:
        "Write a Java program to implement a basic concurrent hash map without using java.util.concurrent package.",
      detailedProblem: {
        description:
          "Implement a thread-safe hash map that supports concurrent read and write operations without using built-in concurrent collections.",
        examples: [
          {
            input:
              "put(1, 'A'), get(1), remove(1) from multiple threads concurrently",
            output: "Thread-safe operations without data races",
          },
        ],
        constraints: [
          "Do not use java.util.concurrent package.",
          "Support basic operations: put, get, remove.",
          "Ensure thread-safety for all operations.",
        ],
        solutionApproach: [
          "Use an array of buckets, each containing a linked list of key-value pairs.",
          "Implement fine-grained locking by using a separate lock for each bucket.",
          "Use volatile keyword for the array of buckets to ensure visibility across threads.",
          "Implement methods for put, get, and remove with proper synchronization.",
        ],
      },
    },
    {
      id: 54,
      category: "Java",
      difficulty: "Hard",
      duration: "120 mins",
      task: "Implement a basic garbage collector",
      details:
        "Write a Java program to implement a simple mark-and-sweep garbage collector.",
      detailedProblem: {
        description:
          "Implement a basic garbage collector that uses the mark-and-sweep algorithm to collect unreachable objects.",
        examples: [
          {
            input:
              "A set of objects with references between them, some unreachable",
            output: "Unreachable objects are identified and 'collected'",
          },
        ],
        constraints: [
          "Implement a simple object system with references.",
          "Implement the mark phase to identify reachable objects.",
          "Implement the sweep phase to collect unreachable objects.",
        ],
        solutionApproach: [
          "Create a class to represent objects with references to other objects.",
          "Implement a method to create a graph of objects with some unreachable ones.",
          "Implement the mark phase using depth-first search from root objects.",
          "Implement the sweep phase to collect unmarked objects.",
          "Provide a method to trigger garbage collection.",
        ],
      },
    },
    {
      id: 55,
      category: "Java",
      difficulty: "Hard",
      duration: "150 mins",
      task: "Implement a basic JVM",
      details:
        "Write a Java program to implement a simplified Java Virtual Machine that can execute basic bytecode.",
      detailedProblem: {
        description:
          "Implement a basic JVM that can load, verify, and execute simple Java bytecode instructions.",
        examples: [
          {
            input: "Bytecode for a simple Java method",
            output: "Correct execution of the bytecode instructions",
          },
        ],
        constraints: [
          "Support a subset of JVM instructions (e.g., arithmetic operations, method calls).",
          "Implement a basic class loader.",
          "Implement a simplified execution engine.",
        ],
        solutionApproach: [
          "Create a class to represent the JVM with methods for loading and executing bytecode.",
          "Implement a basic class loader that can read and parse class files.",
          "Create a bytecode verifier to check for basic structural validity.",
          "Implement an execution engine that can interpret bytecode instructions.",
          "Support a stack-based architecture for method execution.",
        ],
      },
    },
    {
      id: 56,
      category: "Java",
      difficulty: "Hard",
      duration: "180 mins",
      task: "Implement a basic database engine",
      details:
        "Write a Java program to implement a simple in-memory relational database engine.",
      detailedProblem: {
        description:
          "Implement a basic in-memory relational database engine that supports creating tables, inserting data, and executing simple SQL queries.",
        examples: [
          {
            input:
              "CREATE TABLE users (id INT, name VARCHAR); INSERT INTO users VALUES (1, 'John'); SELECT * FROM users;",
            output:
              "Table created, 1 row inserted, Query result: [(1, 'John')]",
          },
        ],
        constraints: [
          "Support basic data types: INT, VARCHAR.",
          "Implement CREATE TABLE, INSERT, and SELECT operations.",
          "Support basic WHERE clauses in SELECT statements.",
        ],
        solutionApproach: [
          "Create classes to represent tables, rows, and columns.",
          "Implement a parser for simple SQL statements.",
          "Create methods to execute CREATE TABLE, INSERT, and SELECT operations.",
          "Implement a basic query executor that can filter rows based on WHERE clauses.",
          "Use appropriate data structures (e.g., HashMap) to store tables and data in memory.",
        ],
      },
    },

    {
      id: 57,
      category: "Java",
      difficulty: "Easy",
      duration: "60 mins",
      task: "Factorial of a number",
      details: "Write a Java program to calculate the factorial of a number.",
      detailedProblem: {
        description:
          "Given a non-negative integer, write a function to calculate its factorial.",
        examples: [
          {
            input: "5",
            output: "120",
          },
          {
            input: "0",
            output: "1",
          },
        ],
        constraints: [
          "The input is a non-negative integer.",
          "The result should fit within the range of a 64-bit integer.",
        ],
        solutionApproach: [
          "Use recursion or iteration to compute the factorial of the number.",
        ],
      },
    },
    {
      id: 58,
      category: "Java",
      difficulty: "Intermediate",
      duration: "60 mins",
      task: "Check balanced parentheses",
      details:
        "Write a Java program to check if an expression has balanced parentheses.",
      detailedProblem: {
        description:
          "Given a string containing parentheses, write a function to check if the parentheses are balanced.",
        examples: [
          {
            input: '"(a + b) * (c - d)"',
            output: "True",
          },
          {
            input: '"(a + b * (c - d)"',
            output: "False",
          },
        ],
        constraints: [
          "The input string consists of alphanumeric characters and parentheses.",
          "The maximum length of the string is 1000 characters.",
        ],
        solutionApproach: [
          "Use a stack to check for matching opening and closing parentheses.",
        ],
      },
    },
    {
      id: 59,
      category: "Java",
      difficulty: "Hard",
      duration: "60 mins",
      task: "Serialize and deserialize binary tree",
      details:
        "Write a Java program to serialize and deserialize a binary tree.",
      detailedProblem: {
        description:
          "Given a binary tree, write a function to serialize the tree into a string and another function to deserialize the string back into the binary tree.",
        examples: [
          {
            input: "Binary Tree: [1,2,3,null,null,4,5]",
            output: 'Serialized string: "1,2,null,null,3,4,5"',
          },
        ],
        constraints: [
          "The binary tree consists of integers.",
          "The number of nodes in the tree is at most 10000.",
        ],
        solutionApproach: [
          "Use a preorder traversal to serialize the tree and reverse the process to deserialize.",
        ],
      },
    },
  ],
};

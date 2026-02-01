/**
 * Math tutor content: problems and tiered hints only (no answers given).
 * Hints guide thinking; the app never reveals the solution.
 */

const MATH_TOPICS = {
  algebra_basics: {
    id: 'algebra_basics',
    name: 'Algebra basics',
    level: 'Middle school',
    description: 'Variables, expressions, and simple equations',
    problems: [
      {
        id: 'ab1',
        question: 'If 3x + 7 = 22, what step would you take first to get x by itself? Think about what is "happening" to x.',
        type: 'multiple_choice',
        choices: [
          'Add 7 to both sides',
          'Subtract 7 from both sides',
          'Multiply both sides by 3',
          'Divide both sides by 7'
        ],
        correctChoiceIndex: 1,
        hints: [
          'Right now, x is being multiplied by 3 and then 7 is added. What do we want to "undo" first—the adding or the multiplying?',
          'To undo addition we use subtraction. What would happen if you subtracted 7 from both sides of the equation?',
          'After you undo the +7, you\'ll have 3x on one side. What operation would then get just x?'
        ]
      },
      {
        id: 'ab2',
        question: 'Write an expression for "5 less than twice a number n." There are no wrong answers here—just get your idea down.',
        type: 'free_response',
        hints: [
          '"Twice a number" means we multiply the number by 2. How would you write that using n?',
          '"5 less than" something means we subtract 5 from that something. So we need (something) minus 5.',
          'Put it together: twice n is 2n. Five less than that is 2n − 5. Does your expression match that idea?'
        ]
      },
      {
        id: 'ab3',
        question: 'When solving 2(x + 4) = 18, what could you do first? Consider what the parentheses mean.',
        type: 'multiple_choice',
        choices: [
          'Divide both sides by 2',
          'Add 4 to both sides',
          'Subtract 2 from both sides',
          'Multiply (x + 4) by 2'
        ],
        correctChoiceIndex: 0,
        hints: [
          'The 2 outside the parentheses means we\'re multiplying (x + 4) by 2. What operation would "undo" that multiplication?',
          'If you divide both sides by 2, what does the left side become? Then you\'ll have a simpler equation.',
          'After that, you\'ll have something like (x + 4) = 9. What would you do next to find x?'
        ]
      }
    ]
  },
  linear_equations: {
    id: 'linear_equations',
    name: 'Linear equations',
    level: 'Middle / High school',
    description: 'Slopes, lines, and solving for x and y',
    problems: [
      {
        id: 'le1',
        question: 'A line has slope 2 and passes through (0, 3). What does the "3" tell you about the line?',
        type: 'multiple_choice',
        choices: [
          'The line crosses the x-axis at 3',
          'The line crosses the y-axis at 3',
          'The slope is 3',
          'The line has length 3'
        ],
        correctChoiceIndex: 1,
        hints: [
          'The point (0, 3) has x = 0. When x is 0, where is the point—on the x-axis or the y-axis?',
          'The y-intercept is where the graph hits the y-axis. So (0, 3) is the y-intercept. What does that mean for the number 3?',
          'In y = mx + b, what does b represent? How does (0, 3) relate to b?'
        ]
      },
      {
        id: 'le2',
        question: 'If two lines have the same slope but different y-intercepts, how many points do they have in common?',
        type: 'multiple_choice',
        choices: ['Zero', 'One', 'Two', 'Infinitely many'],
        correctChoiceIndex: 0,
        hints: [
          'Same slope means the lines rise and run the same way. Do they point in the same direction?',
          'Different y-intercepts mean they cross the y-axis at different heights. So they never meet at the y-axis.',
          'Parallel lines have the same slope and never intersect. How many intersection points do parallel lines have?'
        ]
      },
      {
        id: 'le3',
        question: 'To solve the system y = 2x + 1 and y = 5 − x, what could you do with the two equations?',
        type: 'multiple_choice',
        choices: [
          'Add the equations',
          'Set 2x + 1 equal to 5 − x',
          'Multiply the first equation by 2',
          'Graph only the first equation'
        ],
        correctChoiceIndex: 1,
        hints: [
          'Both left sides are "y". So the two right sides must be equal when we\'re at the solution. What does that mean?',
          'If y = 2x + 1 and also y = 5 − x, then 2x + 1 and 5 − x are the same number. So 2x + 1 = 5 − x.',
          'Once you have one equation in one variable, solve for x. Then use either original equation to find y.'
        ]
      }
    ]
  },
  exponents_roots: {
    id: 'exponents_roots',
    name: 'Exponents & roots',
    level: 'Middle / High school',
    description: 'Powers, square roots, and exponent rules',
    problems: [
      {
        id: 'er1',
        question: 'What does 2³ × 2⁴ simplify to, and why? (Think about what the exponents mean.)',
        type: 'multiple_choice',
        choices: ['2⁷', '2¹²', '4⁷', '2'],
        correctChoiceIndex: 0,
        hints: [
          '2³ means 2·2·2 and 2⁴ means 2·2·2·2. If you multiply those together, how many 2s are you multiplying in total?',
          'When we multiply same bases, we add the exponents. So 2³ × 2⁴ = 2^(3+4). What is 3 + 4?',
          'The rule is: aⁿ × aᵐ = aⁿ⁺ᵐ. Apply that to 2³ × 2⁴.'
        ]
      },
      {
        id: 'er2',
        question: 'Why is √(x²) not always equal to x? When would it equal x, and when would it not?',
        type: 'free_response',
        hints: [
          'Square root is defined to be the non-negative number whose square gives the original. So √(something) ≥ 0.',
          'If x is negative, then x² is positive. So √(x²) is positive. Can √(x²) equal x if x is negative?',
          'We often write √(x²) = |x| (absolute value). That way it\'s never negative. Does that match your idea?'
        ]
      },
      {
        id: 'er3',
        question: 'What is (3²)⁴ in the form 3 raised to a single power?',
        type: 'multiple_choice',
        choices: ['3⁶', '3⁸', '3⁹', '9⁴'],
        correctChoiceIndex: 1,
        hints: [
          '(3²)⁴ means 3² multiplied by itself 4 times: 3² · 3² · 3² · 3². How many 3s is that in total?',
          'When we raise a power to a power, we multiply the exponents: (aⁿ)ᵐ = aⁿᵐ. So (3²)⁴ = 3^(2×4).',
          'Multiply the two exponents: 2 × 4. That single exponent is what you raise 3 to.'
        ]
      }
    ]
  },
  geometry: {
    id: 'geometry',
    name: 'Geometry',
    level: 'Middle / High school',
    description: 'Angles, triangles, area, and proofs',
    problems: [
      {
        id: 'g1',
        question: 'In a triangle, one angle is 60° and another is 50°. What do you know about the third angle?',
        type: 'multiple_choice',
        choices: ['It is 70°', 'It is 110°', 'It could be anything', 'It is 10°'],
        correctChoiceIndex: 0,
        hints: [
          'Draw a triangle and label two angles 60° and 50°. What do all three angles in any triangle add up to?',
          'The sum of the angles in a triangle is 180°. So angle1 + angle2 + angle3 = 180°.',
          '60 + 50 = 110. So the third angle must be 180 − 110. What is that?'
        ]
      },
      {
        id: 'g2',
        question: 'A rectangle has length 8 and width 5. How could you find the length of a diagonal?',
        type: 'multiple_choice',
        choices: [
          '8 + 5',
          '8 × 5',
          'Use the Pythagorean theorem with 8 and 5 as legs',
          'Divide 8 by 5'
        ],
        correctChoiceIndex: 2,
        hints: [
          'Draw the rectangle and draw one diagonal. You get two triangles. What kind of triangles are they?',
          'Each triangle has a right angle at a corner of the rectangle. The diagonal is the side opposite the right angle.',
          'For a right triangle, a² + b² = c² where c is the hypotenuse. Here the legs are 8 and 5. So c² = 8² + 5².'
        ]
      },
      {
        id: 'g3',
        question: 'Two angles are supplementary. One is 70°. What is the other? (No answer needed—what operation do you use?)',
        type: 'multiple_choice',
        choices: [
          '70° + 90°',
          '180° − 70°',
          '70° × 2',
          '90° − 70°'
        ],
        correctChoiceIndex: 1,
        hints: [
          '"Supplementary" means the two angles add up to a specific total. Do you remember what that total is?',
          'Supplementary angles add to 180°. So if one is 70°, the other must be 180° − 70°.',
          'Complementary angles add to 90°. Supplementary add to 180°. Which one are we using here?'
        ]
      }
    ]
  },
  quadratics: {
    id: 'quadratics',
    name: 'Quadratics',
    level: 'High school',
    description: 'Parabolas, factoring, and the quadratic formula',
    problems: [
      {
        id: 'q1',
        question: 'For y = x² − 4, how many x-intercepts does the graph have, and how could you find them?',
        type: 'multiple_choice',
        choices: [
          'Zero; you cannot find them',
          'One; set x = 0',
          'Two; set y = 0 and solve x² − 4 = 0',
          'Infinitely many'
        ],
        correctChoiceIndex: 2,
        hints: [
          'x-intercepts are where y = 0. So we need to solve 0 = x² − 4, i.e. x² = 4.',
          'What numbers squared give 4? There are two real numbers.',
          'So there are two x-intercepts. What two numbers squared give 4?'
        ]
      },
      {
        id: 'q2',
        question: 'When factoring x² + 5x + 6, we look for two numbers that multiply to ___ and add to ___.',
        type: 'multiple_choice',
        choices: ['6 and 5', '5 and 6', '2 and 3', '1 and 6'],
        correctChoiceIndex: 2,
        hints: [
          'We want (x + a)(x + b) = x² + (a+b)x + ab. So a·b must equal the constant term, and a+b the coefficient of x.',
          'The constant term is 6 and the coefficient of x is 5. So we need two numbers that multiply to 6 and add to 5.',
          'Pairs that multiply to 6: 1 and 6, 2 and 3. Which pair also adds to 5?'
        ]
      },
      {
        id: 'q3',
        question: 'The vertex of a parabola y = ax² + bx + c lies on its axis of symmetry. What is the formula for the x-coordinate of the vertex?',
        type: 'multiple_choice',
        choices: ['x = b/(2a)', 'x = −b/(2a)', 'x = c/a', 'x = −c/(2b)'],
        correctChoiceIndex: 1,
        hints: [
          'The axis of symmetry is the vertical line that cuts the parabola in half. It goes through the vertex.',
          'The formula is often written as x = −b/(2a). So it involves b, a, and a minus sign.',
          'You can also get it by completing the square on ax² + bx + c. The vertex x is where the squared term is zero.'
        ]
      }
    ]
  },
  number_sense: {
    id: 'number_sense',
    name: 'Number sense',
    level: 'Middle school',
    description: 'Fractions, ratios, percentages, and integers',
    problems: [
      {
        id: 'ns1',
        question: 'A shirt is on sale for 20% off. If the original price is $40, what calculation gives the sale price?',
        type: 'multiple_choice',
        choices: [
          '40 − 20',
          '40 − 0.20 × 40',
          '40 × 20',
          '40 ÷ 0.20'
        ],
        correctChoiceIndex: 1,
        hints: [
          '20% off means we subtract 20% of the price. So we need "original price minus 20% of original price."',
          '20% of 40 is the same as 0.20 × 40. What is that number? Then subtract it from 40.',
          'Alternatively, 20% off means you pay 80% of the original. So sale price = 0.80 × 40. Same result!'
        ]
      },
      {
        id: 'ns2',
        question: 'If 3/4 of a number is 24, what operation would you do first to find the number?',
        type: 'multiple_choice',
        choices: [
          'Multiply 24 by 4',
          'Divide 24 by 3',
          'Divide 24 by 3/4',
          'Multiply 24 by 3'
        ],
        correctChoiceIndex: 2,
        hints: [
          'We have (3/4) × (the number) = 24. So "the number" is being multiplied by 3/4. To undo that, we divide by 3/4.',
          'Dividing by 3/4 is the same as multiplying by 4/3. So the number = 24 × (4/3).',
          'You could also say: if 3 parts out of 4 are 24, then 1 part is 24÷3. The whole is 4 of those parts.'
        ]
      },
      {
        id: 'ns3',
        question: 'On a number line, where would −(−5) be compared to −5?',
        type: 'multiple_choice',
        choices: [
          'At the same point as −5',
          'To the right of −5',
          'To the left of −5',
          'At zero'
        ],
        correctChoiceIndex: 1,
        hints: [
          '−(−5) means "the opposite of negative 5." What is the opposite of negative 5?',
          'The opposite of a negative number is a positive number. So −(−5) is positive.',
          'Positive numbers sit to the right of negative numbers on the number line. So where is −(−5) compared to −5?'
        ]
      }
    ]
  }
};

/**
 * Q&A tutor: guiding responses only (no answers). Tone: polite and engaging.
 * Key = topic id or "general". Value = array of hint-style prompts; we cycle through them.
 */
const QNA_TUTOR_RESPONSES = {
  general: [
    "I'd love to help you work through this. What have you tried so far? Even a small step counts—tell me about it!",
    "Let's make sure we're on the same page. Can you put the problem in your own words? That often makes it clearer what we're aiming for.",
    "You're on the right track. Is there a similar problem you've solved before? What did you do there?",
    "Let's break it down together. What do you already know from the problem? Jot down the facts—then we can see what's missing.",
    "Nice thinking so far. Try drawing a picture or writing out the given information. What do you notice when you do that?",
    "Working backwards can really help here. What would you need to know in order to get the answer?",
  ],
  algebra_basics: [
    "Let's start by naming the unknown. What are you trying to find? Giving it a letter (like x) is a great first step.",
    "Good—now we have an unknown. What operation is being done to it? (Adding, subtracting, multiplying?)",
    "Here's a helpful idea: to get the unknown by itself, we 'undo' in reverse order. What was done last—can you undo that first?",
    "You're doing great. Whatever you do to one side of the equation, do the same to the other. What step would undo the last thing that happened to x?",
    "Nice! After you undo one step, what does the equation look like? Try the next undo when you're ready.",
  ],
  linear_equations: [
    "When you have y = something with x, that's a line. What do you think the slope (rise over run) might be?",
    "Good thinking. Where does the line cross the y-axis? That's the y-intercept—see if you can spot it.",
    "If you have two equations and both equal y, that's a useful clue. What does that tell you about the two right sides?",
    "Let's get to one equation in one variable. Can you substitute, or set the two expressions equal? Give it a try!",
  ],
  exponents_roots: [
    "Here's a handy rule: when you multiply the same base, what do you do with the exponents? See if you can recall.",
    "When you raise a power to a power, what happens to the exponents? Think it through—you've got this.",
    "A square root asks: what number squared gives this? So √(x²) is related to the size of x—and we take the non-negative one. Does that help?",
  ],
  geometry: [
    "Drawing a sketch is a great idea. Label what you know—what are you trying to find?",
    "Do you spot a right angle? If so, the Pythagorean theorem might be your friend: a² + b² = c².",
    "Angles in a triangle add to 180°. Supplementary angles add to 180°, complementary to 90°. Which one fits your problem?",
  ],
  quadratics: [
    "For a quadratic, we often set the equation equal to 0 first. Have you tried that?",
    "Factoring is a nice next step. We need two numbers that multiply to the constant term and add to the coefficient of x. Can you list some factor pairs?",
    "The vertex sits on the axis of symmetry. There's a formula for its x-coordinate involving a and b—would you like a nudge for that?",
  ],
  number_sense: [
    "Percent means 'per 100,' so 20% of a number is the same as 0.20 times that number. Does that open things up?",
    "For 'what fraction of' or 'what percent of,' think: part ÷ whole. What's the part and what's the whole in your problem?",
    "Double negatives are fun: −(−5) means the opposite of negative 5. What's the opposite of a negative number?",
  ],
};

/**
 * When the student says they've tried nothing / don't know / haven't started—
 * i.e. they're answering "What have you tried?" not asking a question.
 * Tutor responds in context instead of "Great question!" etc.
 */
const QNA_NO_ATTEMPT_RESPONSES = [
  "No worries—that's a fine place to start. What's the math problem you're working on? Type it or paste it here, and we can go step by step.",
  "That's okay! To get started, tell me the problem in your own words—or paste it from your homework. Then we can figure out the first step together.",
  "No problem. What's the question or equation you're stuck on? Once you share it, I'll guide you with hints—no answers—so you can work through it.",
];

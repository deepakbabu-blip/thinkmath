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
      },
      { id: 'ab4', question: 'To solve 5x = 20, what do you do to both sides?', type: 'multiple_choice', choices: ['Add 5', 'Subtract 5', 'Multiply by 5', 'Divide by 5'], correctChoiceIndex: 3, hints: ['x is being multiplied by 5. What operation undoes multiplication?', 'To get x by itself, we undo the multiplication. Division undoes multiplication.'] },
      { id: 'ab5', question: 'What does "isolate the variable" mean?', type: 'multiple_choice', choices: ['Get the variable alone on one side of the equation', 'Move all numbers to the left', 'Multiply both sides by zero', 'Add the variable to both sides'], correctChoiceIndex: 0, hints: ['We want to find what the variable equals. So we need the variable on one side and a number on the other.', 'Isolating means getting it by itself—undoing whatever is being done to it.'] },
      { id: 'ab6', question: 'In x − 4 = 10, what step gets x by itself?', type: 'multiple_choice', choices: ['Add 4 to both sides', 'Subtract 4 from both sides', 'Multiply both sides by 4', 'Divide both sides by 4'], correctChoiceIndex: 0, hints: ['Right now 4 is being subtracted from x. What undoes subtraction?', 'Adding 4 to both sides keeps the equation balanced and removes the −4 from the left.'] },
      { id: 'ab7', question: 'Which is an equation?', type: 'multiple_choice', choices: ['3x + 5', '2x + 1 = 9', 'x + 7', '4n'], correctChoiceIndex: 1, hints: ['An equation has an equals sign and states that two expressions are equal.', 'Here 2x + 1 = 9 says "2x + 1" has the same value as "9".'] },
      { id: 'ab8', question: 'When we "do the same to both sides," why?', type: 'multiple_choice', choices: ['To make the problem longer', 'To keep the equation true (both sides stay equal)', 'To get rid of the variable', 'To add more numbers'], correctChoiceIndex: 1, hints: ['If two things are equal and we add 3 to one, we must add 3 to the other to keep them equal.', 'Keeping the equation balanced lets us simplify step by step until we find x.'] },
      { id: 'ab9', question: 'In 2x + 3 = 11, after subtracting 3 from both sides we get ___.', type: 'multiple_choice', choices: ['2x = 8', '2x = 14', 'x = 4', '2x + 3 = 8'], correctChoiceIndex: 0, hints: ['Subtracting 3 from the left: 2x + 3 − 3 = 2x. What is 11 − 3?', 'Both sides: left becomes 2x, right becomes 8. So 2x = 8.'] },
      { id: 'ab10', question: 'Which operation "undoes" division?', type: 'multiple_choice', choices: ['Subtraction', 'Addition', 'Multiplication', 'Division again'], correctChoiceIndex: 2, hints: ['If x is divided by 2, we have x ÷ 2. What brings x back?', 'Multiplying by 2 undoes dividing by 2: (x ÷ 2) × 2 = x.'] }
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
      },
      { id: 'le4', question: 'What does the slope of a line tell you?', type: 'multiple_choice', choices: ['Where it crosses the y-axis', 'How steep it is and whether it rises or falls', 'Its length', 'The number of points on it'], correctChoiceIndex: 1, hints: ['Slope is rise over run—how much y changes when x increases by 1.', 'Positive slope: line goes up left to right. Negative: goes down.'] },
      { id: 'le5', question: 'Two lines are perpendicular. What do you know about their slopes?', type: 'multiple_choice', choices: ['They are equal', 'Their product is −1', 'One is zero', 'They are both negative'], correctChoiceIndex: 1, hints: ['Perpendicular lines meet at a right angle. Their slopes have a special relationship.', 'If one slope is m, the other is −1/m (or the product m × (other) = −1).'] },
      { id: 'le6', question: 'In y = mx + b, what is m?', type: 'multiple_choice', choices: ['The y-intercept', 'The slope', 'The x-intercept', 'A constant'], correctChoiceIndex: 1, hints: ['The letter m is traditionally used for slope in y = mx + b.', 'b is the y-intercept; m is the slope.'] },
      { id: 'le7', question: 'A line goes through (1, 2) and (3, 6). How could you find its slope?', type: 'multiple_choice', choices: ['Add 1 and 3', 'Use (6 − 2) / (3 − 1)', 'Use (3 − 1) / (6 − 2)', 'Multiply 2 and 6'], correctChoiceIndex: 1, hints: ['Slope = rise over run = change in y over change in x.', 'Rise = 6 − 2, run = 3 − 1. So slope = (6 − 2)/(3 − 1).'] },
      { id: 'le8', question: 'If two lines have different slopes, they ___.', type: 'multiple_choice', choices: ['Are parallel', 'Intersect at exactly one point', 'Are the same line', 'Never cross'], correctChoiceIndex: 1, hints: ['Different slopes mean the lines are not parallel.', 'Non-parallel lines in the plane intersect at exactly one point.'] },
      { id: 'le9', question: 'To graph y = 2x + 1, a good first step is to ___.', type: 'multiple_choice', choices: ['Solve for x', 'Plot the y-intercept (0, 1)', 'Set x = 0 only', 'Find the vertex'], correctChoiceIndex: 1, hints: ['The y-intercept is where x = 0. Here b = 1, so (0, 1) is on the line.', 'Plot (0, 1), then use the slope 2 to go up 2, right 1 to get another point.'] },
      { id: 'le10', question: 'When solving a system by substitution, you ___.', type: 'multiple_choice', choices: ['Add the equations', 'Replace one variable with an expression from the other equation', 'Graph both lines', 'Multiply both equations by 2'], correctChoiceIndex: 1, hints: ['Substitution means "substitute" one variable for an equivalent expression.', 'Solve one equation for y (or x), then replace that variable in the other equation.'] }
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
      },
      { id: 'er4', question: 'What does 5⁰ equal?', type: 'multiple_choice', choices: ['0', '1', '5', 'Undefined'], correctChoiceIndex: 1, hints: ['By definition, any nonzero number to the power 0 is 1.', 'So 5⁰ = 1, 10⁰ = 1, etc.'] },
      { id: 'er5', question: 'What is 2⁵ ÷ 2² in the form 2 raised to a power?', type: 'multiple_choice', choices: ['2³', '2⁷', '2¹⁰', '2^(5/2)'], correctChoiceIndex: 0, hints: ['When we divide same bases, we subtract the exponents: aⁿ ÷ aᵐ = a^(n−m).', 'So 2⁵ ÷ 2² = 2^(5−2) = 2³.'] },
      { id: 'er6', question: '√9 equals ___.', type: 'multiple_choice', choices: ['−3 only', '3 only', '3 or −3', '9'], correctChoiceIndex: 1, hints: ['The square root symbol √ means the principal (non-negative) square root.', 'So √9 = 3, not −3. The equation x² = 9 has two solutions: 3 and −3.'] },
      { id: 'er7', question: 'Simplify 10³ × 10².', type: 'multiple_choice', choices: ['10⁵', '10⁶', '10¹', '100⁵'], correctChoiceIndex: 0, hints: ['Same base: when multiplying, add the exponents.', '10³ × 10² = 10^(3+2) = 10⁵.'] },
      { id: 'er8', question: '(2³)² = ___.', type: 'multiple_choice', choices: ['2⁵', '2⁶', '2⁹', '4⁶'], correctChoiceIndex: 1, hints: ['Power of a power: multiply the exponents. (aⁿ)ᵐ = a^(n×m).', '(2³)² = 2^(3×2) = 2⁶.'] },
      { id: 'er9', question: 'What is 7¹?', type: 'multiple_choice', choices: ['0', '1', '7', '14'], correctChoiceIndex: 2, hints: ['Any number to the power 1 is itself.', 'So 7¹ = 7, x¹ = x.'] },
      { id: 'er10', question: '√(a²) for a ≥ 0 equals ___.', type: 'multiple_choice', choices: ['−a', 'a', 'a²', '|a|'], correctChoiceIndex: 1, hints: ['If a is non-negative, then a² is its square, and √(a²) is the non-negative number whose square is a².', 'That number is a. (When a < 0 we need |a|.)'] }
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
      },
      { id: 'g4', question: 'The sum of the angles in any triangle is ___.', type: 'multiple_choice', choices: ['90°', '180°', '360°', 'It depends on the triangle'], correctChoiceIndex: 1, hints: ['This is true for every triangle—right, acute, or obtuse.', 'You can see it by drawing a line through one vertex parallel to the opposite side.'] },
      { id: 'g5', question: 'In a right triangle, the side opposite the right angle is called the ___.', type: 'multiple_choice', choices: ['Leg', 'Hypotenuse', 'Base', 'Altitude'], correctChoiceIndex: 1, hints: ['The right angle has two sides (the legs) and one side across from it.', 'That longest side is the hypotenuse.'] },
      { id: 'g6', question: 'Two angles that add to 90° are ___.', type: 'multiple_choice', choices: ['Supplementary', 'Complementary', 'Vertical', 'Equal'], correctChoiceIndex: 1, hints: ['Complementary angles add to 90°. Supplementary add to 180°.', 'So two angles that add to 90° are complementary.'] },
      { id: 'g7', question: 'The area of a rectangle is ___.', type: 'multiple_choice', choices: ['length + width', '2 × (length + width)', 'length × width', 'length ÷ width'], correctChoiceIndex: 2, hints: ['Area is how many unit squares fit inside.', 'For a rectangle, that is length × width.'] },
      { id: 'g8', question: 'In a right triangle with legs 3 and 4, the hypotenuse has length ___.', type: 'multiple_choice', choices: ['5', '7', '12', '25'], correctChoiceIndex: 0, hints: ['Use the Pythagorean theorem: a² + b² = c². Here 3² + 4² = 9 + 16 = 25.', 'So c² = 25, and c = 5 (length is positive).'] },
      { id: 'g9', question: 'Vertical angles are ___.', type: 'multiple_choice', choices: ['Supplementary', 'Complementary', 'Equal', 'Always 90°'], correctChoiceIndex: 2, hints: ['Vertical angles are the opposite angles when two lines cross.', 'They are always equal.'] },
      { id: 'g10', question: 'The perimeter of a square with side length s is ___.', type: 'multiple_choice', choices: ['s²', '4s', '2s', 's/4'], correctChoiceIndex: 1, hints: ['Perimeter is the distance around the figure.', 'A square has four equal sides, so perimeter = s + s + s + s = 4s.'] }
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
      },
      { id: 'q4', question: 'The graph of y = x² opens ___.', type: 'multiple_choice', choices: ['Downward', 'Upward', 'To the left', 'To the right'], correctChoiceIndex: 1, hints: ['When the x² coefficient is positive, the parabola opens upward.', 'When it is negative, the parabola opens downward.'] },
      { id: 'q5', question: 'To solve x² = 9, we take the ___.', type: 'multiple_choice', choices: ['Square root of both sides', 'Square of both sides', 'Log of both sides', 'Only positive root'], correctChoiceIndex: 0, hints: ['Taking the square root of both sides gives x = ±√9.', 'So x = 3 or x = −3.'] },
      { id: 'q6', question: 'x² + 6x + 9 is a perfect square: it equals ___.', type: 'multiple_choice', choices: ['(x + 3)²', '(x + 6)²', '(x + 9)²', '(x − 3)²'], correctChoiceIndex: 0, hints: ['(x + 3)² = x² + 2·3·x + 3² = x² + 6x + 9.', 'So x² + 6x + 9 = (x + 3)².'] },
      { id: 'q7', question: 'The discriminant b² − 4ac tells you ___.', type: 'multiple_choice', choices: ['The vertex', 'How many real solutions ax² + bx + c = 0 has', 'The y-intercept', 'The slope'], correctChoiceIndex: 1, hints: ['If discriminant > 0: two real solutions. If = 0: one (repeated). If < 0: no real solutions.', 'It appears under the square root in the quadratic formula.'] },
      { id: 'q8', question: 'Factoring x² − 9 gives ___.', type: 'multiple_choice', choices: ['(x − 9)(x + 1)', '(x − 3)(x + 3)', '(x − 3)²', '(x + 3)²'], correctChoiceIndex: 1, hints: ['This is a difference of two squares: a² − b² = (a − b)(a + b).', 'x² − 9 = x² − 3² = (x − 3)(x + 3).'] },
      { id: 'q9', question: 'If a quadratic has no x-intercepts, its graph ___.', type: 'multiple_choice', choices: ['Crosses the x-axis twice', 'Touches the x-axis once', 'Never crosses the x-axis', 'Is a straight line'], correctChoiceIndex: 2, hints: ['x-intercepts are where y = 0. No x-intercepts means the equation has no real solutions.', 'The parabola stays entirely above or entirely below the x-axis.'] },
      { id: 'q10', question: 'Completing the square changes x² + bx into a ___.', type: 'multiple_choice', choices: ['Linear expression', 'Perfect square trinomial', 'Constant', 'Difference of squares'], correctChoiceIndex: 1, hints: ['We add (b/2)² to get x² + bx + (b/2)² = (x + b/2)².', 'So we turn it into a perfect square (a trinomial that factors as a square).'] }
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
      },
      { id: 'ns4', question: 'Which fraction is equivalent to 0.25?', type: 'multiple_choice', choices: ['1/4', '1/2', '2/5', '3/4'], correctChoiceIndex: 0, hints: ['0.25 = 25/100. Simplify: divide numerator and denominator by 25.', '25/100 = 1/4.'] },
      { id: 'ns5', question: 'What is 15% of 80?', type: 'multiple_choice', choices: ['8', '12', '15', '20'], correctChoiceIndex: 1, hints: ['15% of 80 = 0.15 × 80.', '0.15 × 80 = 12.'] },
      { id: 'ns6', question: 'The ratio 2 : 3 is the same as ___.', type: 'multiple_choice', choices: ['3 : 2', '4 : 6', '2/2 : 3/3', '1 : 2'], correctChoiceIndex: 1, hints: ['Ratios can be scaled: 2:3 = 4:6 (multiply both parts by 2).', '4:6 is equivalent to 2:3.'] },
      { id: 'ns7', question: '|−7| equals ___.', type: 'multiple_choice', choices: ['−7', '7', '0', '±7'], correctChoiceIndex: 1, hints: ['Absolute value is the distance from 0, so it is never negative.', '|−7| = 7, |7| = 7.'] },
      { id: 'ns8', question: 'Which is greater: −3 or −5?', type: 'multiple_choice', choices: ['−5', '−3', 'They are equal', 'Cannot compare'], correctChoiceIndex: 1, hints: ['On the number line, numbers to the right are greater.', '−3 is to the right of −5, so −3 > −5.'] },
      { id: 'ns9', question: 'Convert 3/5 to a decimal.', type: 'multiple_choice', choices: ['0.35', '0.6', '0.53', '3.5'], correctChoiceIndex: 1, hints: ['Divide 3 by 5: 3 ÷ 5 = 0.6.', 'Or: 3/5 = 6/10 = 0.6.'] },
      { id: 'ns10', question: '50% of a number is the same as ___.', type: 'multiple_choice', choices: ['Multiplying by 50', 'Dividing by 2', 'Adding 50', 'Subtracting half'], correctChoiceIndex: 1, hints: ['50% means 50/100 = 1/2.', '50% of a number = (1/2) × the number = the number ÷ 2.'] }
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

const transiciones = {
  'q0': { '7': 'q1', '8': 'q2' },
  'q1': { '-': 'q3' },
  'q2': { '-': 'q4' },
  'q3': { 'S': 'q5', 'T': 'q6', 'U': 'q6', 'V': 'q6', 'W': 'q6', 'X': 'q6', 'Y': 'q6', 'Z': 'q6' },
  'q4': { 'A': 'q6', 'B': 'q6', 'C': 'q6', 'D': 'q6', 'E': 'q6', 'F': 'q6', 'G': 'q6', 'H': 'q6', 'I': 'q6', 'J': 'q6', 'K': 'q6', 'L': 'q6', 'M': 'q6', 'N': 'q6', 'O': 'q6', 'P': 'q6', 'Q': 'q6', 'R': 'q6', 'S': 'q7' },
  'q5': { 'R': 'q8', 'S': 'q9', 'T': 'q9', 'U': 'q9', 'V': 'q9', 'W': 'q9', 'X': 'q9', 'Y': 'q9', 'Z': 'q9' },
  'q6': { 'A': 'q9', 'B': 'q9', 'C': 'q9', 'D': 'q9', 'E': 'q9', 'F': 'q9', 'G': 'q9', 'H': 'q9', 'I': 'q9', 'J': 'q9', 'K': 'q9', 'L': 'q9', 'M': 'q9', 'N': 'q9', 'O': 'q9', 'P': 'q9', 'Q': 'q9', 'R': 'q9', 'S': 'q9', 'T': 'q9', 'U': 'q9', 'V': 'q9', 'W': 'q9', 'X': 'q9', 'Y': 'q9', 'Z': 'q9' },
  'q7': { 'A': 'q9', 'B': 'q9', 'C': 'q9', 'D': 'q9', 'E': 'q9', 'F': 'q9', 'G': 'q9', 'H': 'q9', 'I': 'q9', 'J': 'q9', 'K': 'q9', 'L': 'q9', 'M': 'q9', 'N': 'q9', 'O': 'q9', 'P': 'q9', 'Q': 'q9', 'R': 'q9', 'S': 'q9', 'T': 'q9', 'U': 'q9', 'V': 'q10' },
  'q8': { '-': 'q11' },
  'q9': { '-': 'q12' },
  'q10': { '-': 'q13' },
  'q11': { '9': 'q14' },
  'q12': { '0': 'q15', '1': 'q15', '2': 'q15', '3': 'q15', '4': 'q15', '5': 'q15', '6': 'q15', '7': 'q15', '8': 'q15', '9': 'q15' },
  'q13': { '0': 'q15', '1': 'q15', '2': 'q15', '3': 'q15', '4': 'q15', '5': 'q15', '6': 'q15', '7': 'q15', '8': 'q15', '9': 'q16' },
  'q14': { '9': 'q17' },
  'q15': { '0': 'q18', '1': 'q18', '2': 'q18', '3': 'q18', '4': 'q18', '5': 'q18', '6': 'q18', '7': 'q18', '8': 'q18', '9': 'q18' },
  'q16': { '0': 'q18', '1': 'q18', '2': 'q18', '3': 'q18', '4': 'q18', '5': 'q18', '6': 'q18', '7': 'q18', '8': 'q18', '9': 'q19' },
  'q17': { '-': 'q20' },
  'q18': { '-': 'q21' },
  'q19': { '-': 'q22' },
  'q20': { 'D': 'q23', 'E': 'q23', 'F': 'q23', 'G': 'q23', 'H': 'q23', 'I': 'q23', 'J': 'q23', 'K': 'q23', 'L': 'q23', 'M': 'q23', 'N': 'q23', 'O': 'q23', 'P': 'q23', 'Q': 'q23', 'R': 'q23', 'S': 'q23', 'T': 'q23', 'U': 'q23', 'V': 'q23', 'W': 'q23', 'X': 'q23', 'Y': 'q23', 'Z': 'q23' },
  'q21': { 'A': 'q24', 'B': 'q24', 'C': 'q24', 'D': 'q24', 'E': 'q24', 'F': 'q24', 'G': 'q24', 'H': 'q24', 'I': 'q24', 'J': 'q24', 'K': 'q24', 'L': 'q24', 'M': 'q24', 'N': 'q24', 'O': 'q24', 'P': 'q24', 'Q': 'q24', 'R': 'q24', 'S': 'q24', 'T': 'q24', 'U': 'q24', 'V': 'q24', 'W': 'q24', 'X': 'q24', 'Y': 'q24', 'Z': 'q24' },
  'q22': { 'A': 'q25', 'B': 'q25', 'C': 'q25', 'D': 'q25', 'E': 'q25', 'F': 'q25', 'G': 'q25', 'H': 'q25', 'I': 'q25', 'J': 'q25', 'K': 'q25', 'L': 'q25', 'M': 'q25', 'N': 'q25', 'O': 'q25', 'P': 'q25', 'Q': 'q25', 'R': 'q25', 'S': 'q25', 'T': 'q25', 'U': 'q25', 'V': 'q25', 'W': 'q25' },
};



class Automata {
  constructor() {
    this.currentState = "q0";
    this.acceptStates = new Set([
      "q23",
      "q24",
      "q25",
    ]);
    this.transitions = transiciones;
  }

  process(input) {
    const statesFollowed = [this.currentState];
    for (const symbol of input) {
      if (this.transitions[this.currentState][symbol]) {
        this.currentState = this.transitions[this.currentState][symbol];
        statesFollowed.push(this.currentState);
      } else {
        break;
      }
    }

    const isAccepted = this.acceptStates.has(this.currentState);

    return { isAccepted, statesFollowed };
  }
}

export default function validateWithAutomata(inputString) {
  const automaton = new Automata();
  const result = automaton.process(inputString);

  return result
}

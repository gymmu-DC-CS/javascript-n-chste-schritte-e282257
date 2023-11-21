export function aufgabe01(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement.toLowerCase() !== 'e'){
      result.push(currentElement);
    }
    
  }
  return result.join("")
  }

  



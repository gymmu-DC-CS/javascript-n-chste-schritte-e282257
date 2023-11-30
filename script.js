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

 
    
    export function aufgabe02(args) {
      const input = args;
      return input.toUpperCase();
    }
    
      
    export function aufgabe03(text) {
      let count = 0;
    
      for (let i = 0; i < text.length; i++) {
        const currentElement = text[i];
        if (currentElement.toLowerCase() === 'e') {
          count++;
        }
      }
    
      return count;
    }

    export function aufgabe04(args) {
      
      const cleanText = args.replace(/[^\w\s]/gi, '');
      const words = cleanText.split(/\s+/); 
    
      return words.length; 
    }

    
    export function aufgabe05(args) {
      const input = args
      if (input.toLowerCase() === input) {
        return false
      } else {
        return true
      }
    }
   
    
    
    
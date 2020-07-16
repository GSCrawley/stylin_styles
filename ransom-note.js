// Make a new Component
class RansomNote extends HTMLElement {
    constructor() {
      super(); 
      this._shadowRoot = this.attachShadow({ mode: 'open' });
      
      // Get the content of the element defined in the HTML document.
      this._text = this.innerHTML
      console.log(this.innerHTML)
      // Split the string into an array of characters
      this._charactersArray = this._text.split('')
      // Make an array to hold some el (there will be one for each character)
      this._elArray = [] 
      // Loop over each character in the array
      for (let i = 0; i < this._charactersArray.length; i += 1) {
        const el = document.createElement('div')
        el.style.color = `hsl(${Math.random() * 360},100%,50%)`
        el.style.display = 'inline-block'
        el.innerHTML = this._charactersArray[i]
        el.style.fontSize = (Math.random() * 30 + 20) + 'px'
        el.style.padding = (Math.random() * 5 + 3) + 'px'
        el.style.transform =`rotate(${Math.random() * 24 - 12}deg)`
        el.style.fontWeight = Math.random() * 6 * 100
        el.style.borderWidth = Math.random() * 5
        
        const borderStyles = ['none', 'solid', 'double', 'dotted', 'dashed', 'groove', 'ridge', 'inset', 'outset']
        el.style.borderStyle = borderStyles[Math.floor(Math.random() * borderStyles.length)]
        
        // if (Math.random() > 0.5) {
        //   el.style.color = '#fff'
        //   el.style.backgroundColor = '#000'
        // }
  
        const fontFamilies = ['Arial', 'Helvetica', 'sans-serif', 'Times New Roman', 'Times', 'serif', 'Courier']
        el.style.fontFamily = fontFamilies[Math.floor(Math.random() * fontFamilies.length)]
        this._shadowRoot.appendChild(el)
      }
    }
  }
  
  customElements.define('ransom-note', RansomNote);
    
   
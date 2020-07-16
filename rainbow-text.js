class rainbowText extends HTMLElement {
    constructor() {
      super();
      this._shadowRoot = this.attachShadow({ mode: 'open' });
      
      
      

      // Get the text of the host element this.innerHTML
      this._text = this.innerHTML
      // Split the string into an array of words text.split(' ')
      this._letters = this._text.split('')
      // Loop over each word in the array
       // Make a span 
      for (let i = 0; i < this._letters.length; i += 1) {
        const el = document.createElement('span')
        // Set the innerHTML of the span to the current word 
        el.innerHTML = this._letters[i] 
        this._shadowRoot.appendChild(el)
      const hue = 30 * i % 360
      el.style.color = `hsl(${hue}, 100%, 50%)`
    }
  }
}
customElements.define('rainbow-text', rainbowText);

  
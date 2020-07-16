class BlinkText extends HTMLElement {
    constructor() {
      super();
      
      this._shadowRoot = this.attachShadow({ mode: 'open' });
  
      // Make a new p element
      this._blinkEl = document.createElement('span')
      this._shadowRoot.appendChild(this._blinkEl)
  
      // Get the text in the original tag and put it in the P element
      this._blinkEl.innerHTML = this.innerHTML
  
      // Use this to manage the opacity
      this._opacity = 1
      this._min = 0
      this._max = 1
    }
  
  
    // Tell this component it should look for changes to time
    static get observedAttributes() {
      return ['time', 'min', 'max'];
    }  
  
  
    // Handle changes to time
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'time') {
        this._time = parseInt(newValue)
        this._clearTimer()
        this._addTimer()
      } else if (name === 'min') {
        this._min = newValue || 0
      } else if (name === 'max') {
        this._max = newValue || 1
      }
    }
  
  
    connectedCallback() {
      // 
    }
  
  
    disconnectedCallback() {
      this._clearTimer()
    }
  
  
    _addTimer() {
      this._blinkEl.style.transition = this._time + 'ms'
      this._timer = setInterval(() => {
        this._opacity = this._opacity === 1 ? 0 : 1
        if (this._opacity === 1) {
          this._blinkEl.style.opacity = this._max
        } else {
          this._blinkEl.style.opacity = this._min
        }
      }, this._time);
    }
  
  
    _clearTimer() {
      console.log('clear', this._time)
      clearInterval(this._timer)
    }
  }
  
  customElements.define('blink-text', BlinkText);
  
  
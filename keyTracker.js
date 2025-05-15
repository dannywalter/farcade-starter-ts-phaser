// KeyTracker - A simple module to track key states regardless of canvas focus
class KeyTracker {
  constructor() {
    this.keys = {};
    this._setupEventListeners();
  }

  // Set up global keyboard listeners
  _setupEventListeners() {
    // Track key down events
    window.addEventListener('keydown', (e) => {
      this.keys[e.keyCode] = true;
      this.keys[e.key.toLowerCase()] = true;
    });

    // Track key up events
    window.addEventListener('keyup', (e) => {
      this.keys[e.keyCode] = false;
      this.keys[e.key.toLowerCase()] = false;
    });

    // Clear keys when window loses focus
    window.addEventListener('blur', () => {
      this.keys = {};
    });
  }

  // Check if a key is pressed
  isKeyDown(keyCode) {
    // Accept either key codes or key strings
    if (typeof keyCode === 'string') {
      return this.keys[keyCode.toLowerCase()] === true;
    }
    return this.keys[keyCode] === true;
  }
}

// Create a singleton instance
const keyTracker = new KeyTracker();

export class Keypress {
  listener;

  getListener() {
    if (!this.listener) {
      this.listener = new window.keypress.Listener();
    }

    return this.listener;
  }
}

export const keypressListener = new Keypress().getListener();

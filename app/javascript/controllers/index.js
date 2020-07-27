


// code starts here!


import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["content", "moreButton", "lessButton"]
  lines = 3

  connect() {
    this.content = this.contentTarget.textContent;

    if (this.height() > this.expectedHeight()) {
      this.showLess()
    }
  }



  
  showMore() {
    this.removeContent();
    this.wordsList().forEach((word) => this.addWordToContent(word))
    this.hide(this.moreButtonTarget);
    this.show(this.lessButtonTarget);
  }

  showLess() {
    this.removeContent();
    this.wordsList().forEach((word) => {
      if (this.height() < this.expectedHeight())
        this.addWordToContent(word)
    })

    this.addToContent("...")
    this.hide(this.lessButtonTarget);
    this.show(this.moreButtonTarget);
  }

  show(target) {
    target.classList.remove("hide")
  }

  hide(target) {
    target.classList.add("hide")
  }

  removeContent() {
    this.contentTarget.textContent = "";
  }

  addWordToContent(word) {
    this.addToContent(" " + word);
  }

  addToContent(text) {
    this.contentTarget.textContent += text
  }

  lineHeight() {
    let style = window.getComputedStyle(this.contentTarget)
    return parseFloat(style.lineHeight, 10);
  }

  height() {
    return this.contentTarget.offsetHeight;
  }

  expectedHeight() {
    return this.lines * this.lineHeight();
  }

  wordsList() {
    return this.content.split(" ")
  }
}
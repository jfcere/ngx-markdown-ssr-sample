import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Tab } from './app.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  readonly tab = Tab;

  activeTab = Tab.Src;

  markdown = `## Markdown __rulez__!
  ---

  ### Syntax highlight
  \`\`\`typescript
  const language = 'typescript';
  \`\`\`

  ### Lists
  1. Ordered list
  2. Another bullet point
     - Unordered list
     - Another unordered bullet point


  ### Blockquote
  > Blockquote to the max :heart:

  ### KaTeX

  $e=mc^2$

  $\\pm\\sqrt{a^2 + b^2}$
  `;

  srcPath = "https://raw.githubusercontent.com/jfcere/ngx-markdown/master/README.md";

  setTab(tab: Tab): void {
    this.activeTab = tab;
  }
}

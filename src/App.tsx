import "./App.css";
import { AccessibilityComponent } from "./components/react-accessibility-component/react-accessibility-component";

function App() {
  
  return (
    <div className="wrapper">
      <div className="App">
        <div>
        <h1 id="accessibilitycomponent">AccessibilityComponent</h1>
          <h2 id="overview">Overview</h2>
          <p><code>AccessibilityComponent</code> is a React component designed to enhance web accessibility by providing essential features that support users with disabilities. It is intended to be used as part of a broader strategy for making web applications accessible.</p>
          <h2 id="installation">Installation</h2>
          <p>To install the component, use npm or yarn:</p>
          <pre><code>npm <span className="hljs-keyword">install</span> accessibility-component
          </code></pre><p>or</p>
          <pre><code>yarn <span className="hljs-keyword">add</span><span className="bash"> accessibility-component</span>
          </code></pre><h2 id="usage">Usage</h2>
          <p>Import and use the component in your React application:</p>
          <pre><code>
            <span className="hljs-keyword">import</span> AccessibilityComponent <span className="hljs-keyword">from</span> <span className="hljs-string">'accessibility-component'</span>;
            <br /><br />
            <span className="hljs-function"><span className="hljs-keyword">function</span> <span className="hljs-title">App</span>(<span className="hljs-params"></span>) &#123;</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="hljs-keyword">return</span> &#40;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="hljs-tag">&lt;<span className="hljs-name">h1</span>&gt;</span>My Accessible Web App<span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span>
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="hljs-tag">&lt;<span className="hljs-name">AccessibilityComponent</span> /&gt;</span>
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></span>
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&#41;
              <br />
              &#125;
              <br /><br />
            <span className="hljs-keyword">export</span> <span className="hljs-keyword">default</span> App;
          </code></pre><h2 id="important-notice">Important Notice</h2>
          <p>Using <code>AccessibilityComponent</code> alone does not guarantee full accessibility compliance. It is the responsibility of developers to build their web applications following the <a href="https://www.w3.org/WAI/standards-guidelines/wcag/">WCAG</a> accessibility standards. This includes proper semantic HTML, keyboard navigability, sufficient color contrast, and providing alternative text for images, among other requirements.</p>
          <p>For comprehensive guidance on making your website accessible, refer to the official <a href="https://www.w3.org/WAI/standards-guidelines/wcag/">WCAG</a> guidelines.</p>
          <h2 id="license">License</h2>
          <p>This component is open-source and available under the MIT License.</p>

        </div>
      </div>
      <AccessibilityComponent />
    </div>
  );
}

export default App;

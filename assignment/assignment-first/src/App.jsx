import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './style/desktop.scss';
import { Desktop } from './components/desktop';

function App() {
  const repositories = [
    {
      name: "design-system",
      language: "React",
      size: "7320 KB",
      visibility: "Public",
      lastUpdate: "1 day ago"
    },
    {
      name: "codeant-ci-app",
      language: "Javascript",
      size: "5871 KB",
      visibility: "Private",
      lastUpdate: "2 days ago"
    },
    {
      name: "analytics-dashboard",
      language: "Python",
      size: "4521 KB",
      visibility: "Private",
      lastUpdate: "5 days ago"
    },
    {
      name: "mobile-app",
      language: "Swift",
      size: "3096 KB",
      visibility: "Public",
      lastUpdate: "3 days ago"
    },
    {
      name: "e-commerce-platform",
      language: "Java",
      size: "6210 KB",
      visibility: "Private",
      lastUpdate: "6 days ago"
    },
    {
      name: "blog-website",
      language: "HTML/CSS",
      size: "1876 KB",
      visibility: "Public",
      lastUpdate: "4 days ago"
    },
    {
      name: "social-network",
      language: "PHP",
      size: "5432 KB",
      visibility: "Private",
      lastUpdate: "7 days ago"
    }
  ];

  return (
    <>

      <Desktop data={repositories} />

    </>
  )
}

export default App

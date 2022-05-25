import { CodeEditor } from './components/CodeEditor';
import './styles/normalize.css';

export const App = () => {
  return (
    <div style={{ width: '100%', height: 80 }}>
      <CodeEditor identifier="first" />
      <CodeEditor identifier="second" />
    </div>
  );
};

//import { render, screen } from '@testing-library/react';
import App from './App';
import {unmountComponentAtNode, render} from "react-dom";

test('renders withoute crashe', () => {
  const div=document.createElement('div');
  render(<App />, div);
  expect(div).toBeInTheDocument();
  unmountComponentAtNode(div);
});

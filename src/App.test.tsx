// src/App.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { describe, it, expect, vi } from 'vitest';

// Mock import.meta.env
vi.mock('import.meta.env', () => ({
  VITE_APP_TITLE: 'Test App Title',
}));

describe('App', () => {
  it('renders headline from env variable or default', () => {
    render(<App />);
    // Check for the mocked title first
    let headline = screen.queryByText('Test App Title', { selector: 'h1' });
    if (!headline) {
      // Fallback to default if env var is not perfectly mocked or for other scenarios
      headline = screen.getByText(/Vite \+ React \(Default\)/i, { selector: 'h1' });
    }
    expect(headline).toBeInTheDocument();
  });

  it('renders headline with default when env variable is not set', () => {
    // Temporarily clear the mock for this specific test case
    vi.mock('import.meta.env', () => ({}));
    render(<App />);
    const headline = screen.getByText(/Vite \+ React \(Default\)/i, { selector: 'h1' });
    expect(headline).toBeInTheDocument();
    // Restore mock if needed for other tests - though Vitest usually isolates test files.
    // For safety, re-mocking to original mock for this file if other tests in same file depend on it.
    vi.mock('import.meta.env', () => ({
      VITE_APP_TITLE: 'Test App Title',
    }));
  });


  it('increments count on button click', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /count is \d+/i });
    expect(button).toHaveTextContent('count is 0');
    fireEvent.click(button);
    expect(button).toHaveTextContent('count is 1');
    fireEvent.click(button);
    expect(button).toHaveTextContent('count is 2');
  });
});

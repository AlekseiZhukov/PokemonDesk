/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Heading from './index';

describe('Heading', () => {
  let container: Element | null = null;

  beforeEach(() => {
    container = window.document.createElement('div');
    window.document.body.appendChild(container);
  });
  afterEach(() => {
    if (container !== null) {
      unmountComponentAtNode(container);
      container.remove();
      container = null;
    }
  });
  it('render', () => {
    act(() => {
      render(<Heading tag="p" />, container);
    });

    expect(container?.innerHTML).toBeDefined();

    act(() => {
      render(<Heading tag="p">Hello world!</Heading>, container);
    });
    expect(container?.textContent).toBe('Hello world!');

    act(() => {
      render(<Heading tag="h2">Hello world!</Heading>, container);
    });
    expect(container?.querySelector('h2')).not.toBeNull();
  });
});

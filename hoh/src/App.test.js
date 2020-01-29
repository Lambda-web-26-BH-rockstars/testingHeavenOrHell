import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

//default state testing, non async

test('renders previous', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/previous/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders next', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/next/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders coffee', () => {
  const {getByText} = render(<App />)
  const pelement = getByText(/coffee/i)
  expect(pelement).toBeInTheDocument()
})

//now it gets real! by testing next button

test('renders crazy cat after next', () => {
  const {getByText} = render(<App />)
  const nextTest = getByText(/next/i)
  fireEvent.click(nextTest)
  const crazy_cat = getByText(/crazy cat/i)
  expect(crazy_cat).toBeInTheDocument()
})

test('renders russian granola after crazy cat', () => {
  const {getByText} = render(<App />)
  const nextTest = getByText(/next/i)
  fireEvent.click(nextTest)
  fireEvent.click(nextTest)
  const crazy_cat = getByText(/russian granola/i)
  expect(crazy_cat).toBeInTheDocument()
})

test('renders street life after russian granola', () => {
  const {getByText} = render(<App />)
  const nextTest = getByText(/next/i)
  fireEvent.click(nextTest)
  fireEvent.click(nextTest)
  fireEvent.click(nextTest)
  const crazy_cat = getByText(/street life/i)
  expect(crazy_cat).toBeInTheDocument()
})

test('renders coffee after street life', () => {
  const {getByText} = render(<App />)
  const nextTest = getByText(/next/i)
  fireEvent.click(nextTest)
  fireEvent.click(nextTest)
  fireEvent.click(nextTest)
  fireEvent.click(nextTest)
  const crazy_cat = getByText(/coffee/i)
  expect(crazy_cat).toBeInTheDocument()
})

//now let's check behavior of the previous button

test('renders street life after previous', () => {
  const {getByText} = render(<App />)
  const nextTest = getByText(/previous/i)
  fireEvent.click(nextTest)
  const crazy_cat = getByText(/street life/i)
  expect(crazy_cat).toBeInTheDocument()
})

test('renders russian granola after street life', () => {
  const {getByText} = render(<App />)
  const nextTest = getByText(/previous/i)
  fireEvent.click(nextTest)
  fireEvent.click(nextTest)
  const crazy_cat = getByText(/russian granola/i)
  expect(crazy_cat).toBeInTheDocument()
})


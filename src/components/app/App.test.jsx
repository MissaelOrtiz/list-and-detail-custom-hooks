/* eslint-disable max-len */
import React from 'react';
import { render, screen, /*fireEvent, waitFor*/ } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import listData from '../../fixtures/listData.json';

const server = setupServer(
  rest.get(
    'https://ac-vill.herokuapp.com/villagers/',
    (req, res, ctx) => {
      return res(
        ctx.json(listData)
      );
    }
  )
);

describe('VillagerList and VillagerDetail', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('renders a list of villagers after a short load', async () => {
    const { container } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    screen.getByText('Now Loading...');

    const ul = await screen.findByRole('list', { name: 'villagers' });
    expect(ul).not.toBeEmptyDOMElement();
    expect(container).toMatchSnapshot();
  });

  it('renders a single villager based off the url Params', async () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/5f5fb4bbbfd05c2aed82e460']}>
        <App />
      </MemoryRouter>
    );

    screen.getByText('Now Loading...');

    await screen.findByText('Admiral', { exact: false });
    expect(container).toMatchSnapshot();
  });

  //   it('renders a list of villagers after a short load, clicking on one and continuing to its detail page', async () => {
  //     render(<MemoryRouter><App /></MemoryRouter>);

  //     screen.getByText('Now Loading...');

  //     const admiralButton = screen.findByRole('button', { name: 'Admiral-button' });
  //     fireEvent.click(admiralButton);

//     return waitFor(() => {
//       screen.findByText('Admiral', { exact: false });
//     });
//   });
});

import { render, screen } from '@testing-library/react';
import { AcitiveLink } from '.';

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        asPath: '/',
      };
    },
  };
});

describe('ActiveLink component', () => {
  it('active link renders correctly', () => {
    render(
      <AcitiveLink href="/" activeClassName="active">
        <a>Home</a>
      </AcitiveLink>
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('adds active class if the link is currently active', () => {
    render(
      <AcitiveLink href="/" activeClassName="active">
        <a>Home</a>
      </AcitiveLink>
    );

    expect(screen.getByText('Home')).toHaveClass('active');
  });
});

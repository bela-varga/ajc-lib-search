import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router';
import { HamburgerMenu } from './HamburgerMenu';

describe('HamburgerMenu', () => {
  const renderMenu = () => {
    return render(
      <BrowserRouter>
        <HamburgerMenu />
      </BrowserRouter>,
    );
  };

  it('renders the hamburger button', () => {
    renderMenu();
    const button = screen.getByRole('button', { name: /menü megnyitása/i });
    expect(button).toBeInTheDocument();
  });

  it('opens the menu when hamburger button is clicked', () => {
    renderMenu();
    const button = screen.getByRole('button', { name: /menü megnyitása/i });

    // Menu should not be visible initially
    expect(screen.queryByRole('navigation')).toHaveClass('translate-x-full');

    // Click to open
    fireEvent.click(button);

    // Menu should now be visible
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('translate-x-0');
    expect(button).toHaveAttribute('aria-expanded', 'true');
  });

  it('closes the menu when hamburger button is clicked again', () => {
    renderMenu();
    const button = screen.getByRole('button');

    // Open menu
    fireEvent.click(button);
    expect(screen.getByRole('navigation')).toHaveClass('translate-x-0');

    // Close menu
    fireEvent.click(button);
    expect(screen.getByRole('navigation')).toHaveClass('translate-x-full');
  });

  it('displays navigation links when menu is open', () => {
    renderMenu();
    const button = screen.getByRole('button');

    // Open menu
    fireEvent.click(button);

    // Check for navigation links
    expect(screen.getByRole('link', { name: /kezdőlap/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Mi ez\?/i })).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /Kapcsolat/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /Felhasználási feltételek/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /Adatvédelem/i }),
    ).toBeInTheDocument();
  });

  it('closes menu when a navigation link is clicked', () => {
    renderMenu();
    const button = screen.getByRole('button');

    // Open menu
    fireEvent.click(button);
    expect(screen.getByRole('navigation')).toHaveClass('translate-x-0');

    // Click a link
    const homeLink = screen.getByRole('link', { name: /kezdőlap/i });
    fireEvent.click(homeLink);

    // Menu should close
    expect(screen.getByRole('navigation')).toHaveClass('translate-x-full');
  });

  it('closes menu when overlay is clicked', () => {
    const { container } = renderMenu();
    const button = screen.getByRole('button');

    // Open menu
    fireEvent.click(button);
    expect(screen.getByRole('navigation')).toHaveClass('translate-x-0');

    // Click overlay
    const overlay = container.querySelector('.bg-black.bg-opacity-50');
    expect(overlay).toBeInTheDocument();
    fireEvent.click(overlay!);

    // Menu should close
    expect(screen.getByRole('navigation')).toHaveClass('translate-x-full');
  });

  it('has correct navigation links', () => {
    renderMenu();
    const button = screen.getByRole('button');

    // Open menu
    fireEvent.click(button);

    // Check link targets
    expect(screen.getByRole('link', { name: /kezdőlap/i })).toHaveAttribute(
      'href',
      '/',
    );
    expect(screen.getByRole('link', { name: /Mi ez\?/i })).toHaveAttribute(
      'href',
      '/about',
    );
    expect(screen.getByRole('link', { name: /Kapcsolat/i })).toHaveAttribute(
      'href',
      '/contact',
    );
    expect(
      screen.getByRole('link', { name: /Felhasználási feltételek/i }),
    ).toHaveAttribute('href', '/terms');
    expect(screen.getByRole('link', { name: /Adatvédelem/i })).toHaveAttribute(
      'href',
      '/privacy',
    );
  });
});

import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Pagination } from './Pagination';
import { BrowserRouter } from 'react-router';

// Helper to wrap in router since Pagination uses useSearchParams
const renderPagination = (props: any) => {
  return render(
    <BrowserRouter>
      <Pagination itemsPerPage={10} {...props} />
    </BrowserRouter>,
  );
};

describe('Pagination', () => {
  it('does not render if totalPages is 1 or less', () => {
    const { container } = renderPagination({
      currentPage: 1,
      totalPages: 1,
      onPageChange: vi.fn(),
    });
    expect(container).toBeEmptyDOMElement();
  });

  it('renders correctly with multiple pages', () => {
    renderPagination({
      currentPage: 1,
      totalPages: 5,
      onPageChange: vi.fn(),
    });

    expect(screen.getByText('Előző')).toBeInTheDocument();
    expect(screen.getByText('Következő')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('highlights current page', () => {
    renderPagination({
      currentPage: 3,
      totalPages: 5,
      onPageChange: vi.fn(),
    });

    const page3 = screen.getByText('3');
    // Check for aria-current or specific class if preferred
    expect(page3).toHaveAttribute('aria-current', 'page');
  });

  it('disables Previous button on first page', () => {
    renderPagination({
      currentPage: 1,
      totalPages: 5,
      onPageChange: vi.fn(),
    });

    const prevBtn = screen.getByText('Előző');
    expect(prevBtn).toBeDisabled();
  });

  it('disables Next button on last page', () => {
    renderPagination({
      currentPage: 5,
      totalPages: 5,
      onPageChange: vi.fn(),
    });

    const nextBtn = screen.getByText('Következő');
    expect(nextBtn).toBeDisabled();
  });

  it('calls onPageChange when page number is clicked', () => {
    const handlePageChange = vi.fn();
    renderPagination({
      currentPage: 1,
      totalPages: 5,
      onPageChange: handlePageChange,
    });

    fireEvent.click(screen.getByText('2'));
    expect(handlePageChange).toHaveBeenCalledWith(2);
  });

  it('calls onPageChange when Next is clicked', () => {
    const handlePageChange = vi.fn();
    renderPagination({
      currentPage: 1,
      totalPages: 5,
      onPageChange: handlePageChange,
    });

    fireEvent.click(screen.getByText('Következő'));
    expect(handlePageChange).toHaveBeenCalledWith(2);
  });
});

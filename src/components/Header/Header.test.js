import {render, screen} from '@testing-library/react';
import Header from './index';

it("Should render the logged in user name", ()=>{
    render(<Header />);
    const nameUser = screen.getByText('Kayo Ennrique');
    expect(nameUser). toBeInTheDocument();
});
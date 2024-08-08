import { render,screen, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom";
import ApiTesting from "../components/api-testing"

describe('Api testing file', ()=> {
    it('check list of users fetching', async ()=> {
        global.fetch = jest.fn(()=> Promise.resolve({
            json: () => Promise.resolve([
                {
                    id : 1, name : 'Bhagya Shree'
                },
                {
                    id : 2, name : 'Jhon Doe'
                },
            ]) 
        }))

        render(<ApiTesting/>)
        expect(screen.getByText('Loading Data...')).toBeInTheDocument();

        await waitFor(()=> {
            expect(screen.getByText('Bhagya Shree')).toBeInTheDocument();
            expect(screen.getByText('Jhon Doe')).toBeInTheDocument();
        })

        expect(screen.queryByText('Loading Data...')).not.toBeInTheDocument();
    });
})

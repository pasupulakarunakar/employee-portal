import { render } from "@testing-library/react"
import Dashboard from "../../Dashboard"

describe("<Dashboard /> component ", () => {
    it('should return true', async() => {
        const value = true
        expect(value).toBe(true)
    })

    it('should be defined', async() => {
        expect(<Dashboard />).toBeDefined()
    })

    it('should match snapshot', async() => {
        const tree = render(<Dashboard />)

        expect(tree).toMatchSnapshot()
    } )
})
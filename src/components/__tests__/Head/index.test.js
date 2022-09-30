import { render } from "@testing-library/react"
import Head from "../../Head"

describe("<Head /> component ", () => {
    it('should return true', async() => {
        const value = true
        expect(value).toBe(true)
    })

    it('should be defined', async() => {
        expect(<Head />).toBeDefined()
    })

    it('should match snapshot', async() => {
        const tree = render(<Head />)

        expect(tree).toMatchSnapshot()
    } )
})
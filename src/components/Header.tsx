import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <Wrapper>
            <div>
                <Link to="/">Usuarios</Link>
                <Link to="/contacto">Contacto</Link>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.header`
    background-color: var(--blue-color);
    padding: 1.5rem 0;
    > div {
        margin-left: 3.5rem;
        a {
            text-decoration: none;
            padding: 0 1rem;
            font-size: 1.3rem;
            color: white
        }
    }
`

export default Header
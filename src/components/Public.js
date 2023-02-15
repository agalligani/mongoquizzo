import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Mongo Quizzo!</span></h1>
            </header>
            <main className="public__main">
                <p>Get ready for some cool quizzes!</p>
            </main>
            <footer>
                <Link to="/login">Login</Link>
                <br />
                <Link to="/register">Register</Link>
            </footer>
        </section>

    )
    return content
}
export default Public
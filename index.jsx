import { createRoot } from "react-dom/client"
import Question from "./Question"
const root = createRoot(document.getElementById("root"))

function Page() {
    return (
        <>
            <main>
                <h1>Cosmic Conundrum</h1>
            </main>
            <Question />
        </>
    )
}

root.render(
    <>
    <Page />
    </>
)
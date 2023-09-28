import SumUp from '../assets/sum-up.png';

const Hero = () => {
  return (
    <header className="w-full flex flex-col justify-center items-center">
        <nav className="flex justify-between items-center w-full mb-10 pt-3">
            <img src={SumUp} alt="sum-up" className="w-28 object-contain" />
            <button
                type="button"
                onClick={() => window.open('https://github.com/ritchiels')}
                className="black_btn"
            >
                Github
            </button>
        </nav>

        <h1 className="head_text">
            Summarize articles with <br className="max-md:hidden" />
            <span className="blue_gradient">OpenAI GPT-4</span>
        </h1>
        <h2 className="desc">
            Simplify your reading with Sum Up, an open-source article summarizer that transforms lengthy articles into clear and concise summaries.
        </h2>
    </header>
  )
}

export default Hero


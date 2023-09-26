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
            Summarize articles with <br />
            <span className="orange_gradient">OpenAI GPT-4</span>
        </h1>
    </header>
  )
}

export default Hero
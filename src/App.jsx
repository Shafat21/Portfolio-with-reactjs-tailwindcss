import { useEffect, useState } from "react";
import {
  FaGithub,
  FaUserFriends,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [user, setUser] = useState({});
  const [ setUserRepo] = useState([]);
  const githubUsername = "shafat21";
  

  const fetchData = async () => {
    const userResponse = await fetch(
      `https://api.github.com/users/${githubUsername}`
    );
    const userData = await userResponse.json();
    setUser(userData);

    const repoResponse = await fetch(
      `https://api.github.com/users/${githubUsername}/repos`
    );
    const repoData = await repoResponse.json();
    const sortedRepos = repoData
      .filter((repo) => !repo.fork)
      .sort((a, b) => b.stargazers_count - a.stargazers_count);
    setUserRepo(sortedRepos);
  };

  useEffect(() => {
    fetchData();
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <div className="App text-white" data-aos="fade-down" data-aos-duration="800">
      <div className="py-4 m-auto md:px-4 lg:px-8 ">
        <nav className="flex flex-col md:flex-row text-center items-center justify-between">
          <h1 className="text-lg md:text-3xl sm:text-2xl text-[#e2ebf8] font-medium font-['Fonarto'] my-2 md:my-0">
            <span className="text-[#05BFDB]">Shafat21</span>.dragonmind.<span className="text-[#05BFDB]">website</span>
          </h1>
          <div className="flex gap-x-3 flex-wrap justify-center">
            <a href="#area-cv">
              <button className="w-28 md:w-32 h-10 rounded-md text-sm text-[#fff] transition duration-300 hover:text-[#05BFDB]  font-semibold ">
                About
              </button>
            </a>
            <a href="mailto:shafat@dragondesignstudio.com">
              <button className="w-28 md:w-32 h-10 rounded-md text-sm border-2 border-[#05BFDB] text-[#05BFDB] bg-transparent transition duration-300 hover:text-[#fff] hover:bg-[#05BFDB] font-semibold">
                Contact me
              </button>
            </a>
          </div>
        </nav>
      </div>
      <main className="py-8 md:py-36">
        <div className="flex flex-col md:flex-row gap-x-5 justify-center items-center">
          <div className="w-32 h-32 md:w-40 md:h-40">
            <img
              src={user.avatar_url}
              className="w-full h-full rounded-full border-4 backdrop-blur-md transition duration-300 border-[#182b42]/30"
              alt="Profile"
            />
            <span className="flex font-semibold items-center justify-center mt-2">
              <FaUserFriends className="text-[#05BFDB] mr-2" />
              {user.followers} followers
            </span>
          </div>
          <div className="flex-col mt-10 md:mt-0 text-center sm:text-left">
            <h1 className="text-2xl sm:text-2xl md:text-3xl text-[#ffffff] font-medium font-['Fonarto'] ">
              Hi, I’m {user.name} 👋
            </h1>
            <p className="text-md md:text-lg font-medium">
              I’m a web designer, founder of{" "}
              <a
                href="https://shafat21.dragonmind.website"
                className="decoration-2 decoration-wavy underline hover:text-[#05BFDB] hover:decoration-[#e2ebf8] decoration-[#05BFDB] font-bold transition duration-150"
              >
                shafat21.dragonmind.website
              </a>
              . 
            </p>
            <div className="flex py-4 md:py-8 font-bold justify-center md:justify-start">
              <a href="https://github.com/shafat21">
                <button className="flex justify-center items-center w-28 md:w-32 gap-x-2 transition duration-300 rounded-full text-base bg-[#10151a] text-[#fff] hover:text-[#10151a] hover:bg-[#fff] m-2 p-2">
                  <FaGithub /> GitHub
                </button>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>

  );
}

export default App;

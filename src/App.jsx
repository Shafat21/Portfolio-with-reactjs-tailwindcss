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
    <div
      className="App text-white"
      data-aos="fade-down"
      data-aos-duration="800"
    >
      <div className="py-4 m-auto max-w-4xl">
        <nav className="flex items-center justify-between">
          <h1 className="text-3xl text-[#e2ebf8] font-medium font-['Fonarto']">
            <span className="text-[#05BFDB]">Shafat21</span>.dev
          </h1>
          <div className="flex gap-x-3">
            <a href="https://shafat21.dragonmind.website">
              <button className="w-32 h-10 rounded-md text-sm text-[#fff] transition duration-300 hover:text-[#05BFDB]  font-semibold ">
                About
              </button>
            </a>
            <a href="mailto:shafat@dragondesignstudio.com">
              <button className="w-32 h-10 rounded-md text-sm border-2 border-[#05BFDB] text-[#05BFDB] bg-transparent transition duration-300 hover:text-[#fff] hover:bg-[#05BFDB] font-semibold">
                Contact me
              </button>
            </a>
          </div>
        </nav>
        <main className="py-36">
          <div className="flex flex-row gap-x-5">
            <div className="flex-none w-40 h-40">
              <img
                src={user.avatar_url}
                className="w-40 h-40 rounded-full border-4 backdrop-blur-md transition duration-300 border-[#182b42]/30"
                alt="Profile"
              />
              <span className="flex font-semibold items-center justify-center mt-2">
                <FaUserFriends className="text-[#05BFDB] mr-2" />
                {user.followers} followers
              </span>
            </div>
            <div className="flex-col">
              <div>
                <h1 className="text-3xl text-[#ffffff] font-medium font-['Fonarto']">
                  Hi, I’m {user.name} 👋
                </h1>
              </div>

              <p className="text-lg font-medium">
                I’m a web designer, founder of{" "}
                <a
                  href="https://shafat21.dragonmind.website"
                  className="decoration-2 decoration-wavy underline hover:text-[#05BFDB] hover:decoration-[#e2ebf8] decoration-[#05BFDB] font-bold transition duration-150"
                >
                  shafat21.dragonmind.website
                </a>
                . 
              </p>
              <div className="flex py-8 font-bold">
                <a href="https://github.com/shafat21">
                  <button className="flex justify-center items-center w-32 gap-x-2 transition duration-300 rounded-full text-base bg-[#10151a] text-[#fff] hover:text-[#10151a] hover:bg-[#fff] m-2 p-2">
                    <FaGithub /> GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}

export default App;

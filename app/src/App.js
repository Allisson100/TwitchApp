import './reset.css'

import Home from './pages/Home';


// import { getStreamerClips } from './services/apiTwitch/getStreamerClips'



// const apiStreamerInfo = await getStreamerInfo(teste)
// const apiStreamerClips = await getStreamerClips()

// const streamerInfo = apiStreamerInfo.data[0]
// const streamerClips = apiStreamerClips.data

function App() {
    
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
